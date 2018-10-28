/*
 * md-browse configuration file
 */

/**
 * 
 * For style information see README.md in folder styles <br/>
 * See highlight styles : https://highlightjs.org/ <br/>
 * 
 * @property {String} template a optional file name of a HTML template
 * 
 * @property {String} title is the HTML page title. Use place holder [filename] to insert markdown file name
 * 
 * @property {String} page_style is the CSS for markdown tags.<br/> 
 * It is either the file name (without extension) of a .css file from "./styles" folder<br/>
 *    page_style: 'leghorn',<br/>
 * or a HTML style link<br/> 
 *    page_style: '<link crossorigin="anonymous" .. tl .. .css" />',<br/>
 * See also 'README.md' in "./styles" folder
 * 
 * @property {String} highlight_style is the CSS for highlight.js.<br/>
 * It is either the name of a highlight style<br/>
 *    highlight_style:  "github",<br/>
 * or a HTML style link<br/> 
 *    highlight_style: '<link crossorigin="anonymous" .. tl .. .css" />',<br/>
 * See also [highlight.js CDN](https://cdnjs.com/libraries/highlight.js/)
 * 
 * @property {String} output optional HTML output file name
 *
 * @property {Boolean} noImageLinks optional, default false. If true, image links will not changed. 
 * 
 */


module.exports = {
  
  page_style:       '<link crossorigin="anonymous" media="all" integrity="sha512-57B1/u8hPZmZ1VZDgsTj3398brAST9KDu9LFbhOjwXTfrz15sjyxcScwUdkgHK9MEZlOM4e4ScJeEXhYJ66IXg==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-a293861d7523c471be7783b3b5ffb601.css" />',
//  page_style:       'leghorn',

  highlight_style:  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css" integrity="sha256-3YM6A3pH4QFCl9WbSU8oXF5N6W/2ylvW0o2g+Z6TmLQ=" crossorigin="anonymous" />',
//  highlight_style:  "github",
  
  output:           'mdbrowse.html',
  
  template:         './template/template.html',

  title:            '[filename]'
  
};

