<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [mdToHtml][1]
    -   [Parameters][2]
-   [changeLocalImageSrcToFilePath][3]
    -   [Parameters][4]
-   [changeLocalHrefToFilePath][5]
    -   [Parameters][6]
-   [openMarkdownInBrowser][7]
    -   [Parameters][8]
-   [makeHtmlOnly][9]
    -   [Parameters][10]
-   [config][11]
    -   [Properties][12]
    -   [Examples][13]

## mdToHtml

Convert markdown string (mdContent) and return HTLM string

### Parameters

-   `mdContent` **[String][14]** the markdown source
-   `fileName` **[String][14]** file name to handle page title and image links (optional, default `null`)
-   `config` **[Object][15]** default is content of config.js (optional, default `configjs`)

Returns **[String][14]** HTML string ready to open

## changeLocalImageSrcToFilePath

find all like &lt;img src="local.png"..> and change src to absolute 'file://' link

### Parameters

-   `source` **[String][14]** HTML text
-   `fileName` **[String][14]** destination path for 'file://'

Returns **[String][14]** 

## changeLocalHrefToFilePath

find all like &lt;a href="local.png"..> and change src to absolute 'file://' link

### Parameters

-   `source` **[String][14]** HTML text
-   `fileName` **[String][14]** destination path for 'file://'

Returns **[String][14]** 

## openMarkdownInBrowser

Opens markdown file (fileName) as HTML in browser

### Parameters

-   `fileName` **[String][14]** markdown file name
-   `outputFileName` **[String][14]** write HTML into this file or into OS temp file if null (optional, default `null`)
-   `config` **[Object][15]**  (optional, default `configjs`)

## makeHtmlOnly

Generate HTML from markdown file (fileName) and save it into source folder of outputFileName

### Parameters

-   `fileName` **[String][14]** markdown file name
-   `outputFileName` **[String][14]** output file name, "fileName".html will used if outputFileName is null (optional, default `null`)
-   `config` **[Object][15]** optionally (optional, default `configjs`)

## config

md-browse configuration file

<p>see: <a href="styles.html" alt="styles.html in docs folder">style information sheet</a></p>

### Properties

-   `template` **[String][14]** a optional file name of a HTML template
-   `title` **[String][14]** is the HTML page title. Use place holder [filename] to insert markdown file name
-   `page_style` **[String][14]** style name or css or '&lt;link ..>'
-   `highlight_style` **[String][14]** style name or css or '&lt;link ..>'
-   `output` **[String][14]** optional HTML output file name
-   `localLinks` **[Boolean][16]** change local links to absolute file links

### Examples

```javascript
template:         './template/template.html',
title:            '[filename]',
page_style:       '<link crossorigin="anonymous" media="all" integrity="sha512-57B1/u8hPZmZ1VZDgsTj3398brAST9KDu9LFbhOjwXTfrz15sjyxcScwUdkgHK9MEZlOM4e4ScJeEXhYJ66IXg==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-a293861d7523c471be7783b3b5ffb601.css" />',
highlight_style:  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css" integrity="sha256-3YM6A3pH4QFCl9WbSU8oXF5N6W/2ylvW0o2g+Z6TmLQ=" crossorigin="anonymous" />',

// alternative load styles into HTML  
//  page_style:       'leghorn',
//  highlight_style:  "github",

output:           'mdbrowse.html',
localLinks:       true
```

[1]: #mdtohtml

[2]: #parameters

[3]: #changelocalimagesrctofilepath

[4]: #parameters-1

[5]: #changelocalhreftofilepath

[6]: #parameters-2

[7]: #openmarkdowninbrowser

[8]: #parameters-3

[9]: #makehtmlonly

[10]: #parameters-4

[11]: #config

[12]: #properties

[13]: #examples

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[16]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean