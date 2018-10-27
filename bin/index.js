#!/usr/bin/env node

/* 
 * Markdown Browser
 * md-browse
 * 
 */

const fs          = require('fs');
const path        = require('path');
const Url         = require('url');
const _           = require('lodash');
const opn         = require('opn');
const config      = require('./../config.js');
var fileName, mdContent, htmlContent, output, outputPath;
var test        = false;
//var test        = true;


if (test) console.log('config: ',config);

/*     process comand line      */

var program = require('commander');

program
  .version('1.0')
  .arguments('<file>')
  .action(function (file) {
    fileName = file;
  });
 
program.parse(process.argv);

if (test) {
   fileName = path.normalize(__dirname + '/../test/test.md');
} else {
  if (typeof fileName === 'undefined') {
    console.error('no file given!');
    process.exit(1);
  }
}  

console.log('markdown file:', fileName);
if (test) console.log('__dirname:', __dirname);


/*     set output path      */

outputPath = config.output ? config.output : '../temp/result.html';
outputPath = path.join(__dirname, outputPath);

/*     read md file      */

mdContent = fs.readFileSync(fileName,'utf-8');



/* create html content      
 * using showdown
 */

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
let filename = path.basename(fileName,'.md');
let title    = config.title.replace('[filename]', filename);

// template
let template = path.join(__dirname, '../template/template.html');
template = fs.readFileSync(template,'utf-8');

// page style
config.page_style = config.page_style || 'github';
if (config.page_style.charAt(0) !== '<') {    // is it a file or html
  fp = require.resolve('../styles/' + config.page_style + '.css');
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

// output
output = _.template(template)({
  'title':   title,
  'content': htmlContent,
  'pageStyle': config.page_style,
  'highlightStyle': config.highlight_style
});

output = changeLocalImageSrcToFilePath( output, fileName);

/*     save it to temp folder      */

fs.writeFileSync( outputPath, output, 'utf-8' );

/*     use opn to browse      */

opn(outputPath);

/*     finish exit process      */



/**
 * find all like <img src="local.png"..> and change src to absolute 'file://' link
 * 
 * @param {String} source HTML text 
 * @param {String} filePath destination path for 'file://'
 * @returns {String}
 */
function changeLocalImageSrcToFilePath (source, filePath) {
console.log(filePath);  
  // get filePath directory
  filePath = path.dirname(path.resolve(fileName)) + path.sep;
console.log(filePath);  
  
  let result=[], m, pos=0;
 
  // parse <img src={}> 
  let rex = /<img[^>]+src="([^">]+)"/gi;
  while ( m = rex.exec(source) ) {
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

function getUrlProtocol (url) {
  try {
   let u = new Url(url);
   return u.protocol;
  } catch(e) {};
  return '';
}

