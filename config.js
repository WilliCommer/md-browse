/**
 * md-browse configuration file
 * 
 * <p>see: <a href="styles.html" alt="styles.html in docs folder">style information sheet</a></p>
 * 
 * @property {String} template a optional file name of a HTML template
 * @property {String} title is the HTML page title. Use place holder [filename] to insert markdown file name
 * @property {String} page_style style name or css or '<link ..>'
 * @property {String} highlight_style style name or css or '<link ..>'
 * @property {String} output optional HTML output file name
 * @property {Boolean} localLinks change local links to absolute file links
 * @example
  template:         './template/template.html',
  title:            '[filename]',
  page_style:       '<link crossorigin="anonymous" media="all" integrity="sha512-57B1/u8hPZmZ1VZDgsTj3398brAST9KDu9LFbhOjwXTfrz15sjyxcScwUdkgHK9MEZlOM4e4ScJeEXhYJ66IXg==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-a293861d7523c471be7783b3b5ffb601.css" />',
  highlight_style:  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css" integrity="sha256-3YM6A3pH4QFCl9WbSU8oXF5N6W/2ylvW0o2g+Z6TmLQ=" crossorigin="anonymous" />',
  
// alternative load styles into HTML  
//  page_style:       'leghorn',
//  highlight_style:  "github",
  
  output:           'mdbrowse.html',
  localLinks:       true
 
 */


module.exports = {

  template:         './template/template.html',
  title:            '[filename]',
  page_style:       'github',
  highlight_style:  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css" integrity="sha256-3YM6A3pH4QFCl9WbSU8oXF5N6W/2ylvW0o2g+Z6TmLQ=" crossorigin="anonymous" />',
  
// alternative load styles into HTML  
//  page_style:       'leghorn',
//  highlight_style:  "github",
  
  output:           'mdbrowse.html',
  localLinks:       true
  
};

