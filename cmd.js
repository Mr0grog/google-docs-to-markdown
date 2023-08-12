#!/usr/bin/env node

import fs from 'fs';
import {convertDocsHtmlToMarkdown} from './lib/convert.js';

// to avoid top-level async/await. readFileSync(0) caused strange errors
// https://stackoverflow.com/questions/67037353/any-way-to-read-from-stdin-synchronously-without-extra-modules-libraries-node-j
function stdinReadSync() {
    if (process.stdin.isTTY) {
      return '';
    }

    const b = Buffer.alloc(1024)
    let data = ''

    while (true) {
        let n = 0

        // Read while EAGAIN
        while (true) {
            try {
                n = fs.readSync(process.stdin.fd, b, 0, b.length)
                break
            } catch (e) {
                if (e.code === 'EAGAIN') {
                    // Sleep 100ms
                    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100)
                    continue
                }
                throw e
            }
        }

        if (!n) break
        data += b.toString('utf8', 0, n)
    }

    return data
}

// in order to debug this tool over the command line, you can read a file with broken input locally
// ex: fs.readFileSync('./local-file.html', 'utf8');

const inputHTML = stdinReadSync()

if(!inputHTML) {
  console.error('no HTML provided over stdin');
  process.exit(1);
}

convertDocsHtmlToMarkdown(inputHTML).then(markdown => {
  process.stdout.write(markdown);
});
