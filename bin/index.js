#!/usr/bin/env node

/* 
 * Markdown Browser
 * md-browse
 * 
 */

var fs          = require('fs');
var path        = require('path');
var _           = require('lodash');
var opn         = require('opn');
var options     = {title: 'MdBrowse', style: 'github'};
var fileName, mdContent, htmlContent, output, outputPath;

var program = require('commander');

program
  .version('1.0.1')
  .arguments('<file>')
  .action(function (file) {
    fileName = file;
  });
 
program.parse(process.argv);

if (typeof fileName === 'undefined') {
   console.error('no file given!');
   process.exit(1);
}
console.log('markdown file:', fileName);

outputPath = path.join(__dirname, '../result.html');

mdContent = fs.readFileSync(fileName,'utf-8');

var hljs = require('highlight.js');
var md = require('markdown-it')({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});
htmlContent = md.render(mdContent); 

options.title = path.basename(fileName);
output = template(htmlContent, options);

fs.writeFileSync( outputPath, output, 'utf-8' );
opn(outputPath);


//----------------


function template(content, option) {

    let templatePath = path.join(__dirname, '../template/template.html'),
        title = option.title,
        githubMarkdownCssPath = require.resolve('github-markdown-css'),
        highlightJsThemeCssPath = path.join(require.resolve('highlight.js'), '../../styles/', option.style + '.css');

    let templateString      = fs.readFileSync(templatePath,'utf-8');
    let githubMarkdownCss   = fs.readFileSync(githubMarkdownCssPath,'utf-8');
    let highlightJsThemeCss = fs.readFileSync(highlightJsThemeCssPath,'utf-8');
    let output = _.template(templateString)({
            title,
            content,
            githubMarkdownCss,
            highlightJsThemeCss
        });
    return output;

}
