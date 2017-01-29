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

-    [Highlight.js](https://highlightjs.org/)
-    [Highlights](https://github.com/atom/highlights)
-    [Prism](http://prismjs.com/)
-    [Sublemon](https://github.com/lemonce/sublemon)

The following have been left out:

-    [SyntaxHighlighter](https://github.com/syntaxhighlighter): Does not work
     directly with NodeJS, even with `--harmony` due to usage of modules.
