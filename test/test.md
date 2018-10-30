# md-browse test

> 
> this is a test
> 

## Level 2 Header
code block
```
npm install md-browse -g
```

### Level 3 Header

Table

| import | decription |
|---------------|------------|
|TripleGame     |game engine class|
|Pos            |class Pos|
|Board          |class Board|

  
## Some Javascript
```
/**
 * see styles in './styles/CSS Sources.md'
 * view highlight styles : https://highlightjs.org/
 * title use a place holder [filename]
 */

module.exports = {
  
  style:            "github",
  highlight_style:  "github",
  output:           "../temp/result.html",
  title:            "mdb: [filename]"
  
};

function foo() { return 'bar'; }

```

### Loacal Link

[Source](test.js)

[Documentation][apidoc]

### Image
__Web__

![where is the image][1]

![where is the image](http://familiecommer.de/files/inputloop/fc_start.png)

__Local__

![where is the image][2]

![where is the image](author-wcs-green.svg)

[1]: http://familiecommer.de/files/inputloop/fc_start.png
[2]: author-wcs-green.svg
[apidoc]: ../docs/api.html