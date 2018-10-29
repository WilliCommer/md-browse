#!/usr/bin/env node

/* 
 * Markdown Browser md-browse
 * 
 */

const fs          = require('fs');
const path        = require('path');
const configjs    = require('./config.js');
const mdToHtml    = require('./md-to-html');

module.exports = makeHtmlOnly;

/**
 * Generate HTML from markdown file (fileName) and save it into source folder of outputFileName
 * 
 * @param {String} fileName markdown file name
 * @param {String} outputFileName output file name, "fileName".html will used if outputFileName is null
 * @param {Object} config optionally 
 */
function makeHtmlOnly( fileName, outputFileName = null, config = configjs ) {

  var mdContent, htmlContent, outputPath;
    
  // read md file
  mdContent = fs.readFileSync(fileName,'utf-8');
  
  // create html content
  config.localLinks = false;
  htmlContent = mdToHtml( mdContent, fileName, config );


  // set output path
  if (outputFileName) 
    outputPath = outputFileName;
  else
    outputPath = path.dirname(path.resolve(fileName)) 
          + path.sep
          + path.basename(fileName, path.extname(fileName)) + '.html';
  
  fs.writeFileSync( outputPath, htmlContent, 'utf-8' );

}
