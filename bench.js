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

const highlightjs = require('highlight.js').highlight;
const Highlights = require('highlights');
const sublemon = require('sublemon');
const prismjs = require('prismjs');

const highlighters = {
	highlightJs: (syntax, input) =>
		highlightjs(syntax, input, true).value,
	highlights: (syntax, input) => {
		const hl = new Highlights();
		return hl.highlightSync({
			fileContents: input,
			scopeName: 'test.' + syntax,
		});
	},
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
