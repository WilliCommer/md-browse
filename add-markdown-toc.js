function addMarkdownToc (markdownText, options = {}) {

    let {minLevel = 2, maxLevel = 6, caption = ''} = options;
    let result  = [];
    let toc     = [];
    let tocId   = 1;
    const matchHeading  = new RegExp(`^#{${minLevel},${maxLevel}}\\s`);
    const matchSpaces   = /\s+/g;
	const link  		= (text) => '<a href="#' + 'toc_' + tocId + '">' + text + '</a>';
    const anchor   		= (text) => '<a name="' + 'toc_' + tocId  + '"></a>\n' + text;
    const tocBlock      = () => {
        let result = caption ? caption + '\n' : '';
        return result + toc;
    }

  
    markdownText.split('\n').map( line => {
        if (line.match(matchHeading)) {
            console.log(line)        
            let title = line.replace(matchHeading, '');
            let margin = line.indexOf(' ') - minLevel;
            if (margin < 0) margin = 0;
            toc.push('    '.repeat(margin) + '- ' + link(title.trim()));
            result.push(anchor(line));
            tocId += 1;
        } else {
            result.push(line);
        }
    });

    toc    = toc.join('\n');
    result = result.join('\n');
    result = result.replace('[TOC]', tocBlock());
    return result;

}    
  
  
module.exports = addMarkdownToc;
  