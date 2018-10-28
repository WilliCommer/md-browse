#!/usr/bin/env node

/* 
 * Markdown Browser md-browse
 * 
 */

const fs          = require('fs');
const path        = require('path');
const os          = require('os');
const opn         = require('opn');
const configjs    = require('./config.js');
const mdToHtml    = require('./md-to-html');

module.exports = openMarkdownInBrowser;

/**
 * Opens markdown file (fileName) as HTML in browser
 * 
 * @param {String} fileName markdown file name
 * @param {String} outputFileName write HTML into this file or into OS temp file if null
 * @param {Object} config  
 */
function openMarkdownInBrowser( fileName, outputFileName = null, config = configjs ) {

  var mdContent, htmlContent;
    
  // read md file
  mdContent = fs.readFileSync(fileName,'utf-8');
  
  // create html content
  htmlContent = mdToHtml( mdContent, fileName, config );


  // set output path
  let outputPath;
  if (outputFileName)
    outputPath = outputFileName;
  else {
    outputPath = config.output ? config.output : 'mdbrowse.html';
    outputPath = path.join(os.tmpdir(), outputPath);
  }

  fs.writeFileSync( outputPath, htmlContent, 'utf-8' );

  // use opn to browse
  opn(outputPath);

}
