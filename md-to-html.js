'use strict';

const fs                = require('fs');
const path              = require('path');
const Url               = require('url');
const configjs          = require('./config.js');
const pathToStyles      = './styles/';


module.exports = mdToHtml;

/**
 * Convert markdown string (mdContent) and return HTLM string
 * 
 * @param {String} mdContent the markdown source
 * @param {String} fileName file name to handle page title and image links
 * @param {Object} config default is content of config.js
 * @returns {String} HTML string ready to open
 */

function mdToHtml ( mdContent, fileName = null, config = configjs ) {
  
  var htmlContent, output;
  
  /* create html content using showdown */

  var showdown  = require('showdown');
  var showdownHighlight = require("showdown-highlight");

  var converter = new showdown.Converter({

    extensions: [showdownHighlight],
    tables: true,
    tasklists: true,
    emoji: true,
    parseImgDimensions: true

  });

  htmlContent   = converter.makeHtml(mdContent);


  /*     create html page from template      */

  // title
  let fp;
  let filename = fileName ? path.basename(fileName,'.md') : '';
  let title    = config.title.replace('[filename]', filename);

  // template
  let templateFile = config.template ? config.template : './template/template.html';
  if (!path.isAbsolute(templateFile))
    templateFile = require.resolve(templateFile);
  let template = fs.readFileSync(templateFile,'utf-8');

  // page style
  config.page_style = config.page_style || 'github';
  if (config.page_style.charAt(0) !== '<') {    // is it a file or html
    fp = require.resolve(pathToStyles + config.page_style + '.css');
    if (fp) 
      config.page_style = '<style>' + fs.readFileSync(fp,'utf-8') + '</style>';
    else
      config.page_style = '';
  }

  // highlight style
  config.highlight_style = config.highlight_style || '';
  if (config.highlight_style) {
    if (config.highlight_style.charAt(0) !== '<') {    // is it a file or html
      fp = path.join(require.resolve('highlight.js'), '../../styles/', config.highlight_style + '.css');
      if (fp) 
        config.highlight_style = '<style>' + fs.readFileSync(fp,'utf-8') + '</style>';
      else
        config.highlight_style = '';  
     }
   }


  // replace template place holders
  output = template.replace(  '<%= title %>',           title);
  output = output.replace(    '<%= pageStyle %>',       config.page_style);
  output = output.replace(    '<%= highlightStyle %>',  config.highlight_style);
  output = output.replace(    '<%= content %>',         htmlContent);
  
  if (config.localLinks) { 
    output = changeLocalImageSrcToFilePath( output, fileName);
    output = changeLocalHrefToFilePath( output, fileName);
  }
  
  return output;

}



/**
 * find all like <img src="local.png"..> and change src to absolute 'file://' link
 * 
 * @param {String} source HTML text 
 * @param {String} fileName destination path for 'file://'
 * @returns {String}
 */
function changeLocalImageSrcToFilePath (source, fileName) {
  
  if (!fileName) return source;
  

  // get filePath directory
  let filePath = path.dirname(path.resolve(fileName)) + path.sep;

  
  let result=[], m, pos=0;
 
  // parse <img src={}> 
  let rex = /<img[^>]+src="([^">]+)"/gi;
  while ( (m = rex.exec(source)) !== null ) {
    // m[0] = '<img xy src="http://.."'   m[1] = 'http://..'
    if (getUrlProtocol(m[1]) === '') {
      let pos2 = m.index + m[0].length - m[1].length - 1;
      result.push(source.slice(pos, pos2));
      pos = m.index + m[0].length-1;
      let u = Url.resolve('file:///'+filePath, m[1]);
      result.push(u);
    }
  }
  result.push(source.slice(pos));
  return result.join('');
}




/**
 * find all like <a href="local.png"..> and change src to absolute 'file://' link
 * 
 * @param {String} source HTML text 
 * @param {String} fileName destination path for 'file://'
 * @returns {String}
 */
function changeLocalHrefToFilePath (source, fileName) {
  
  if (!fileName) return source;
  
  // get filePath directory
  let filePath = path.dirname(path.resolve(fileName)) + path.sep;
  let result=[], m, pos=0;
 
  // parse <img src={}> 
  let rex = /<a[^>]+href="([^">]+)"/gi;
  while ( (m = rex.exec(source)) !== null ) {
    // m[0] = '<a xy href="http://.."'   m[1] = 'http://..'
    
    let prot = getUrlProtocol(m[1]);
    if ( (prot  === '') && (m[1].charAt(0) !== '#') ) {
      let pos2 = m.index + m[0].length - m[1].length - 1;
      result.push(source.slice(pos, pos2));
      pos = m.index + m[0].length-1;
      let u = Url.resolve('file:///'+filePath, m[1]);
      result.push(u);
    }
  }
  result.push(source.slice(pos));
  return result.join('');
}

function getUrlProtocol (url) {
  try {
   let u = new Url(url);
   return u.protocol;
  } catch(e) {}
  return '';
}

