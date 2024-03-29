/*
 * bench.js
 * Copyright (C) 2017 Adrian Perez <aperez@igalia.com>
 *
 * Distributed under terms of the GPLv3 license.
 */

'use strict';

const fs = require('fs');

const inputs = {
	js: fs.readFileSync('inputs/test.js').toString(),
	css: fs.readFileSync('inputs/test.css').toString(),
	html: fs.readFileSync('inputs/test.html').toString(),
};

const codeMirror = require('codemirror-highlight');
codeMirror.loadMode('javascript');
codeMirror.loadMode('css');
codeMirror.loadMode('xml');  // Needed for HTML support.
codeMirror.loadMode('vbscript'); //  …ditto.
codeMirror.loadMode('htmlmixed');
const codeMirrorMode = { html: 'htmlmixed', js: 'javascript', css: 'css' };

const highlightjs = require('highlight.js').highlight;
const illuminate = require('illuminate-js').highlight;
const Highlights = require('highlights');
const sublemon = require('sublemon');
const prismjs = require('prismjs');

if (true) {
	let addLanguage = require('illuminate-js').addLanguage;
	addLanguage('js', require('illuminate-js/lib/languages').javascript);
	addLanguage('html', require('illuminate-js/lib/languages').html);
	addLanguage('css', require('illuminate-js/lib/languages').css);
}

const highlighters = {
	highlightJs: (syntax, input) =>
		highlightjs(input, {language: syntax}).value,
	highlights: (syntax, input) => {
		const hl = new Highlights();
		return hl.highlightSync({
			fileContents: input,
			scopeName: 'test.' + syntax,
		});
	},
	illuminate: (syntax, input) =>
		illuminate(input, syntax),
	codeMirrorHighlight: (syntax, input) =>
		codeMirror.highlight(input, { mode: codeMirrorMode[syntax] }),
	sublemon: (syntax, input) =>
		sublemon(input),
	prismJs: (syntax, input) =>
		prismjs.highlight(input, prismjs.languages[syntax]),
}

const Benchmark = require('benchmark');

for (const input_name in inputs) {
	console.log('>>>[1;1m', input_name, '[0;0m');
	const input = inputs[input_name];
	const suite = new Benchmark.Suite();
	for (const hl_name in highlighters) {
		const hl_func = highlighters[hl_name];
		suite.add(hl_name, () => hl_func(input_name, input));
	}
	suite.on('cycle', function (ev) { console.log(String(ev.target)) })
	     .on('complete', function() { console.log(' - Fastest:', this.filter('fastest').map('name')[0]) })
	     .run();
}
