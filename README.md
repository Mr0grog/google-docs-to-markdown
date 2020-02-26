# Google Docs to Markdown

This is a very minimal webapp for converting a Google Doc to Markdown. It uses [Remark](https://github.com/remarkjs/remark) and [Rehype](https://github.com/rehypejs/rehype) (both part of [Unified](https://unifiedjs.github.io)) to do the conversion.


## Live Demo

- https://ipfs.io/ipfs/bafybeierebjekxfpuut3x7m4kzdrf3qlmaulr5mb4euq5knbw5g7aaq36y/ (built from [d258507](https://github.com/Mr0grog/google-docs-to-markdown/commit/d2585072c797ed1cbd36fbac7c18f758fa1b8908))


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
