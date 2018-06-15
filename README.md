# Google Docs to Markdown

This is a very minimal webapp for converting a Google Doc to Markdown. It uses [Remark](https://github.com/remarkjs/remark) and [Rehype](https://github.com/rehypejs/rehype) (both part of [Unified](https://unifiedjs.github.io)) to do the conversion.


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

GDoc2MD is open source software. It is (c) 2018 Rob Brackett and licensed under the BSD license. The full license text is in the LICENSE file.
