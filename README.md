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

If you want to make a HTML file form a markdow file, call in like this

    mdbrowse readme.md -g

this will create a readme.html it the same folder.


## Configuration

You can set some options in __config.js__ file, but it is not necessary

For style information see README.md in folder styles <br/>
See highlight styles : [https://highlightjs.org/][13] <br/>

### Properties of config object

-   `template` **[String][11]** a optional file name of a HTML template
-   `title` **[String][11]** is the HTML page title. Use place holder [filename] to insert markdown file name
-   `page_style` **[String][11]** is the CSS for markdown tags.    
    It is either the file name (without extension) of a .css file from "./styles" folder:    
    ```page_style: 'leghorn',```    
    or a HTML style link to a CDN:    
    ```page_style: '<link crossorigin="anonymous" .. tl .. .css" />',```    
    See also 'README.md' in "./styles" folder
-   `highlight_style` **[String][11]** is the CSS for highlight.js.    
    It is either the name of a highlight style:    
    ```highlight_style:  "github",```    
    or a HTML style link to a CDN:   
    ```highlight_style: '<link crossorigin="anonymous" .. tl .. .css" />',```    
    See also [highlight.js CDN][14]
-   `output` **[String][11]** optional HTML output file name
-   `noImageLinks` **[Boolean][15]** optional, default false. If true, image links will not changed.


## API

md-browse module exports some functions


### mdToHtml

Convert markdown string (mdContent) and return HTLM string

#### Parameters

-   `mdContent` **[String][11]** the markdown source
-   `fileName` **[String][11]** file name to handle page title and image links (optional, default `null`)
-   `config` **[Object][12]** default is content of config.js (optional, default `configjs`)

Returns **[String][11]** HTML string ready to open

### openMarkdownInBrowser

Opens markdown file (fileName) as HTML in browser

#### Parameters

-   `fileName` **[String][11]** markdown file name
-   `outputFileName` **[String][11]** write HTML into this file or into OS temp file if null (optional, default `null`)
-   `config` **[Object][12]**  (optional, default `configjs`)

### makeHtmlOnly

Generate HTML from markdown file (fileName) and save it into source folder of outputFileName

#### Parameters

-   `fileName` **[String][11]** markdown file name
-   `outputFileName` **[String][11]** output file name, "fileName".html will used if outputFileName is null (optional, default `null`)
-   `config` **[Object][12]** optionally (optional, default `configjs`)


## License

**MIT**


[11]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[12]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[13]: https://highlightjs.org/

[14]: https://cdnjs.com/libraries/highlight.js/

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
