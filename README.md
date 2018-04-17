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
-    [Sublemon](https://github.com/lemonce/sublemon)

The following have been left out:

-    [Colocodo](https://github.com/switer/colocodo): Assumes that `document` is
     defined and only works in the browser.
-    [EnlighterJS](https://www.npmjs.com/package/enlighterjs): Seems to assume
     that it will run in a browser.
-    [Microlight](https://asvd.github.io/microlight): Assumes that `window` and
     `document` are defined and only works in the browser.
-    [Prettify](https://github.com/google/code-prettify): Does not seem to work
     outside the browser.
-    [RainbowCode](http://rainbowco.de/): Does not work anymore with recent
     NodeJS versions.
-    [SyntaxHighlighter](https://github.com/syntaxhighlighter): Does not work
     directly with NodeJS, even with `--harmony` due to usage of modules.

If you can figure out how to benchmark these, PRs for adding them are welcome.
