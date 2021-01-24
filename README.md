# Google Docs to Markdown

This is a very minimal webapp for converting a Google Doc to Markdown. It uses [Remark](https://github.com/remarkjs/remark) and [Rehype](https://github.com/rehypejs/rehype) (both part of [Unified](https://unifiedjs.github.io)) to do the conversion.


## Live Demo

- http://dweb.link/ipfs/bafybeialbt7c3ti7kxhxdy2cfmdpjh6o2aupmtvku3vsveoh5p3wnk7qey/
- https://mr0grog.github.io/google-docs-to-markdown/

(Both are built from [afeb3d7](https://github.com/Mr0grog/google-docs-to-markdown/commit/afeb3d7bfb65a7317162081026986a16a07f9386).)


## Install & Build

First make sure you have Node.js installed. Then:

1. In the directory where you have cloned this repository, run `npm install`:

    ```sh
    > cd /path/to/cloned/repo
    > npm install
    ```

2. For a one-time build, run:

    ```sh
    > npm run build
    ```
    
    …and the built output will be in the `dist` folder.
    
    To start a server with live rebuilding, run:
    
    ```sh
    > npm start
    ```
    
    Then point your browser to `http://localhost:9000` to see the site. It will automatically rebuild whenever you change any files.


## License

GDoc2MD is open source software. It is (c) 2018-2020 Rob Brackett and licensed under the BSD license. The full license text is in the LICENSE file.
