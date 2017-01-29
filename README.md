JS Syntax Highlighters Shootout
===============================

Running
-------

```sh
npm install
node bench.js
```

Highlighters
------------

This is a benchmark for the following syntax highlighters:

-    [codemirror-highlight](https://github.com/curvedmark/codemirror-highlight)
-    [Highlight.js](https://highlightjs.org/)
-    [Highlights](https://github.com/atom/highlights)
-    [Illuminate](https://vkbansal.github.io/illuminate-js/)
-    [Prism](http://prismjs.com/)
-    [RainbowCode](http://rainbowco.de/)
-    [Sublemon](https://github.com/lemonce/sublemon)

The following have been left out:

-    [Colocodo](https://github.com/switer/colocodo): Assumes that `document` is
     defined and only works in the browser.
-    [SyntaxHighlighter](https://github.com/syntaxhighlighter): Does not work
     directly with NodeJS, even with `--harmony` due to usage of modules.
