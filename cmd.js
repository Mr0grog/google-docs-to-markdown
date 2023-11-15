#!/usr/bin/env node

import {convertDocsHtmlToMarkdown} from './lib/convert.js';
import { buffer as readBuffer } from 'node:stream/consumers';

// in order to debug this tool over the command line, you can read a file with broken input locally
// ex: fs.readFileSync('./local-file.html', 'utf8');

const rawInput = await readBuffer(process.stdin);
const inputHTML = rawInput.toString('utf-8');

if(!inputHTML) {
  console.error('no HTML provided over stdin');
  process.exit(1);
}

try {
  convertDocsHtmlToMarkdown(inputHTML).then(markdown => {
    process.stdout.write(markdown);
  });
} catch (error) {
  console.error(`Error converting HTML to markdown: ${error.message}`);
}
