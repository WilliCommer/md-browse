#!/usr/bin/env node

/* 
 * Markdown Browser md-browse CLI
 * 
 */

const program = require('commander');
const { openMarkdownInBrowser, makeHtmlOnly } = require('./../index.js');
var fileName = null;

//  process comand line  

program
  .version(getVersion())
  .arguments('<file>')
  .option('-g, --generate', 'generate HTML into souce folder')
  .action(function (file) {
    fileName = file;
  });
 
program.parse(process.argv);

if (fileName === null) {
  console.error('no file given!');
  process.exit(1);
}

// console.log('open markdown file:', fileName);

if (program.generate) {
  makeHtmlOnly( fileName );
} else {
  openMarkdownInBrowser( fileName );
}

function getVersion () {
  return require('../package.json').version;
}