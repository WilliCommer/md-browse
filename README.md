![browser image](styles/img/browser.png)

# md-browse
### A Markdown Viewer

>   
> This module adds a CLI command to enable **quick** reading markdown files in browser per double click and without starting a server.
>  

## Motivation

Often I want to read markdown docus on my disk. But I could not found a simple viewer. There are mostly editors. 
A good viewer is [Shiba](https://electronjs.org/apps/shiba), but it have a long starting time and for each 
document is there a server running in background.

Because I could not found a simple viewer, I made it by my self and this is the result.

It uses [Showdown](https://github.com/showdownjs/showdown) to change markdown to HTML and [highlight](https://highlightjs.org/) for highlighting.
I had to make some coding to change local image links to absolute file:// links. 
Then it uses [opn](https://github.com/sindresorhus/opn) to open the result in browser.

I use it on _Windows_ and I hope it runs also on _Apple_ and _Linux_. [Give me response](https://github.com/WilliCommer/md-browse)

I :heart: love node and all the many people that make it grow.


## Installation

Requires [Node.js](https://nodejs.org) and a browser

    npm install md-browse -g
	
## Usage

    mdbrowse <file>
	
In Windows, right click on a file and chose "_open with_". 
Then select the __mdbrowse.cmd__ in your npm folder as application.
You can retrieve this folder with: ```npm bin -g``` if you don't know.
After that you can open markdown files with double click.

## Configuration


You can set some options in __config.js__ file, but it is not necessary

```javascript
/**
 * md-browse configuration file
 * 
 * For style information see README.md in folder styles
 * 
 * view highlight styles : https://highlightjs.org/
 * 
 * title use a place holder [filename]
 * 
 */

module.exports = {
  
//  page_style:       "leghorn",
  
//  page_style:       "<link crossorigin=\"anonymous\" media=\"all\" integrity=\"sha512-57B1/u8hPZmZ1VZDgsTj3398brAST9KDu9LFbhOjwXTfrz15sjyxcScwUdkgHK9MEZlOM4e4ScJeEXhYJ66IXg==\" rel=\"stylesheet\" href=\"https://assets-cdn.github.com/assets/github-a293861d7523c471be7783b3b5ffb601.css\" />",

  highlight_style:  "github",

  output:           "../temp/result.html",

  title:            "[filename]"
  
};

```

- __page_style__   
  is a css for markdown tags. there are a small collection in _styles_ folder, including a RADME
- __highlight_style__   
  is the style for syntax highlight
- __output__   
  is the output HTML file to show in browser
- __title__ is
  the HTML title where _[filename]_ is a replacer for input file name

## License

**MIT**
