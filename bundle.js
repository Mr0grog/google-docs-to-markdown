/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_fix_google_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/fix-google-html */ "./lib/fix-google-html.js");
/* harmony import */ var rehype_dom_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rehype-dom-parse */ "./node_modules/rehype-dom-parse/dist/rehype-dom-parse.mjs");
/* harmony import */ var _lib_rehype_to_remark_with_spaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/rehype-to-remark-with-spaces */ "./lib/rehype-to-remark-with-spaces.js");
/* harmony import */ var remark_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-stringify */ "./node_modules/remark-stringify/index.js");
/* harmony import */ var remark_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(unified__WEBPACK_IMPORTED_MODULE_4__);

// rehype-dom-parse is a lightweight version of rehype-parse that leverages
// browser APIs -- reduces bundle size by ~200 kB!
// const parse = require('rehype-dom-parse').default;






const processor = unified__WEBPACK_IMPORTED_MODULE_4___default()()
  .use(rehype_dom_parse__WEBPACK_IMPORTED_MODULE_1__["default"])
  .use(_lib_fix_google_html__WEBPACK_IMPORTED_MODULE_0__["default"])
  // .use(require('./lib/log-tree').default)
  .use(_lib_rehype_to_remark_with_spaces__WEBPACK_IMPORTED_MODULE_2__["default"])
  .use(remark_stringify__WEBPACK_IMPORTED_MODULE_3___default.a, {listItemIndent: '1'});

function convertToMarkdown (html) {
  return processor.process(inputElement.innerHTML)
    .then(result => {
      // Ensure double line-break before headings
      return result.contents.replace(/(\n\s+)#/g, (_, breaks) => {
        breaks = breaks.replace(/[^\n]/g, '');
        if (breaks.length < 3) breaks = '\n\n\n';

        return `${breaks}#`;
      });
    });
}


const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');
const inputInstructions = document.querySelector('#input-area .instructions');
const outputInstructions = document.querySelector('#output-area .instructions');

inputElement.addEventListener('input', event => {
  const hasContent = !!inputElement.textContent;
  inputInstructions.style.display = hasContent ? 'none' : '';

  convertToMarkdown(inputElement.innerHTML)
    .then(markdown => {
      outputElement.value = markdown;
      outputInstructions.style.display = markdown.trim() ? 'none' : '';
    })
    .catch(error => {
      console.error(error);
      outputInstructions.style.display = '';
    });
});

window.convertToMarkdown = convertToMarkdown;


/***/ }),

/***/ "./lib/fix-google-html.js":
/*!********************************!*\
  !*** ./lib/fix-google-html.js ***!
  \********************************/
/*! exports provided: fixNestedLists, unInlineStyles, removeLineBreaksBeforeBlocks, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixNestedLists", function() { return fixNestedLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unInlineStyles", function() { return unInlineStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLineBreaksBeforeBlocks", function() { return removeLineBreaksBeforeBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fixGoogleHtml; });
/* harmony import */ var hastscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hastscript */ "./node_modules/hastscript/index.js");
/* harmony import */ var hastscript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hastscript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unist_util_visit__WEBPACK_IMPORTED_MODULE_1__);





const blockElements = new Set([
  'address',
  'article',
  'aside',
  'blockquote',
  'caption',
  'center',  // historic
  'dd',
  'details',
  'dialog',
  'dir',  // historic
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'frameset',  // historic
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'hr',
  'isindex',  // historic
  'li',
  'main',
  'menu',
  'nav',
  'noframes',  // historic
  'ol',
  'p',
  'pre',
  'section',
  'summary',
  'table',
  'ul'
]);

const isList = node => node.tagName === 'ul' || node.tagName === 'ol';
const isStyled = node => node.type === 'element' && node.properties.style;
const isBlock = node => node && blockElements.has(node.tagName);

// Wrap the children of `node` with the `wrapper` node.
function wrapChildren (node, wrapper) {
  wrapper.children = node.children;
  node.children = [wrapper];
  return wrapper;
}

/**
 * Fix the incorrect formatting of nested lists in Google Docs's HTML. Lists
 * can only have `div` and `li` children, but Google Docs has other lists as
 * direct descendents. This moves those free-floating lists into the previous
 * `li` element under the assumption that they represent subitems of it.
 * 
 * @param {RehypeNode} node Fix the tree below this node
 * 
 * @example
 * Input a tree like:
 *    <ul>
 *      <li>An item!</li>
 *      <ul>
 *        <li>A subitem!</li>
 *      </ul>
 *    </ul>
 * 
 * Output:
 *    <ul>
 *      <li>An Item!
 *        <ul>
 *          <li>A subitem!</li>
 *        </ul>
 *      </li>
 *    </ul>
 */
function fixNestedLists (node) {
  unist_util_visit__WEBPACK_IMPORTED_MODULE_1___default()(node, isList, (node, index, parent) => {
    if (isList(parent)) {
      const previous = parent.children[index - 1];
      if (previous && previous.tagName === 'li') {
        previous.children.push(node);
        parent.children.splice(index, 1);
        return index;
      }
      else {
        console.warn('No previous list item to move nested list into!');
      }
    }
  });
}

/**
 * Google Docs does italics/bolds/etc on <span>s with style attributes, but
 * rehype-remark does pick up on those well. Instead, transform them into
 * `em`, `strong`, etc. elements.
 * 
 * @param {RehypeNode} node Fix the tree below this node
 */
function unInlineStyles (node) {
  unist_util_visit__WEBPACK_IMPORTED_MODULE_1___default()(node, isStyled, (node, index, parent) => {
    const style = node.properties.style;
    if (/font-style:\s*italic/.test(style)) {
      wrapChildren(node, hastscript__WEBPACK_IMPORTED_MODULE_0___default()('em'));
    }
    if (/font-weight:\s*(bold|700)/.test(style)) {
      wrapChildren(node, hastscript__WEBPACK_IMPORTED_MODULE_0___default()('strong'));
    }
  });
}

function removeLineBreaksBeforeBlocks (node) {
  const children = node.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.tagName === 'br' && isBlock(children[i + 1])) {
      children.splice(i, 1);
      i -= 1;
    }
    else if (child.children) {
      removeLineBreaksBeforeBlocks(child);
    }
  }
  node.children = children;
}

/**
 * A rehype plugin to clean up the HTML of a Google Doc. .This applies to the
 * live HTML of Doc, as when you copy and paste it; not *exported* HTML (it
 * might apply there, too; I haven’t looked into it).
 */
function fixGoogleHtml () {
  return (tree, file) => {
    unInlineStyles(tree);
    fixNestedLists(tree);
    removeLineBreaksBeforeBlocks(tree);
    return tree;
  };
}


/***/ }),

/***/ "./lib/rehype-to-remark-with-spaces.js":
/*!*********************************************!*\
  !*** ./lib/rehype-to-remark-with-spaces.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rehype2remarkWithSpaces; });
const rehype2remark = __webpack_require__(/*! rehype-remark */ "./node_modules/rehype-remark/index.js");

/**
 * The official rehype-remark plugin gets a little aggeressive with removing
 * spaces, so this wraps it with some space preservation.
 * 
 * Ideally, this needs to be solved upstream in rehype-remark.
 * TODO: create a minimal test case and file a bug there!
 */
function rehype2remarkWithSpaces () {
  const spaceToken = '++IAMASPACE++';
  
  function preserveInitialSpaces (node) {
    if (node.type === 'text' && node.value.startsWith(' ')) {
      if (node.value.startsWith(' ')) {
        node.value = spaceToken + node.value.slice(1);
      }
      if (node.value.endsWith(' ')) {
        node.value = node.value.slice(0, -1) + spaceToken;
      }
    }
    if (node.children) {
      node.children.forEach(preserveInitialSpaces);
    }
  }
  
  function recreateSpaces (node) {
    if (node.type === 'text') {
      node.value = node.value.split(spaceToken).join(' ');
    }
    if (node.children) {
      node.children.forEach(recreateSpaces);
    }
  }
  
  const convert = rehype2remark.apply(this, arguments);
  return function (tree, file) {
    preserveInitialSpaces(tree);
    const markdownTree = convert.apply(this, [tree, file]);
    recreateSpaces(markdownTree);
    return markdownTree;
  }
};


/***/ }),

/***/ "./node_modules/array-iterate/index.js":
/*!*********************************************!*\
  !*** ./node_modules/array-iterate/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = iterate

var own = {}.hasOwnProperty

function iterate(values, callback, context) {
  var index = -1
  var result

  if (!values) {
    throw new Error('Iterate requires that |this| not be ' + values)
  }

  if (!own.call(values, 'length')) {
    throw new Error('Iterate requires that |this| has a `length`')
  }

  if (typeof callback !== 'function') {
    throw new Error('`callback` must be a function')
  }

  // The length might change, so we do not cache it.
  while (++index < values.length) {
    // Skip missing values.
    if (!(index in values)) {
      continue
    }

    result = callback.call(context, values[index], index, values)

    // If `callback` returns a `number`, move `index` over to `number`.
    if (typeof result === 'number') {
      // Make sure that negative numbers do not break the loop.
      if (result < 0) {
        index = 0
      }

      index = result - 1
    }
  }
}


/***/ }),

/***/ "./node_modules/bail/index.js":
/*!************************************!*\
  !*** ./node_modules/bail/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bail

function bail(err) {
  if (err) {
    throw err
  }
}


/***/ }),

/***/ "./node_modules/ccount/index.js":
/*!**************************************!*\
  !*** ./node_modules/ccount/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ccount

function ccount(value, character) {
  var count = 0
  var index

  value = String(value)

  if (typeof character !== 'string' || character.length !== 1) {
    throw new Error('Expected character')
  }

  index = value.indexOf(character)

  while (index !== -1) {
    count++
    index = value.indexOf(character, index + 1)
  }

  return count
}


/***/ }),

/***/ "./node_modules/character-entities-html4/index.json":
/*!**********************************************************!*\
  !*** ./node_modules/character-entities-html4/index.json ***!
  \**********************************************************/
/*! exports provided: nbsp, iexcl, cent, pound, curren, yen, brvbar, sect, uml, copy, ordf, laquo, not, shy, reg, macr, deg, plusmn, sup2, sup3, acute, micro, para, middot, cedil, sup1, ordm, raquo, frac14, frac12, frac34, iquest, Agrave, Aacute, Acirc, Atilde, Auml, Aring, AElig, Ccedil, Egrave, Eacute, Ecirc, Euml, Igrave, Iacute, Icirc, Iuml, ETH, Ntilde, Ograve, Oacute, Ocirc, Otilde, Ouml, times, Oslash, Ugrave, Uacute, Ucirc, Uuml, Yacute, THORN, szlig, agrave, aacute, acirc, atilde, auml, aring, aelig, ccedil, egrave, eacute, ecirc, euml, igrave, iacute, icirc, iuml, eth, ntilde, ograve, oacute, ocirc, otilde, ouml, divide, oslash, ugrave, uacute, ucirc, uuml, yacute, thorn, yuml, fnof, Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa, Lambda, Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi, Omega, alpha, beta, gamma, delta, epsilon, zeta, eta, theta, iota, kappa, lambda, mu, nu, xi, omicron, pi, rho, sigmaf, sigma, tau, upsilon, phi, chi, psi, omega, thetasym, upsih, piv, bull, hellip, prime, Prime, oline, frasl, weierp, image, real, trade, alefsym, larr, uarr, rarr, darr, harr, crarr, lArr, uArr, rArr, dArr, hArr, forall, part, exist, empty, nabla, isin, notin, ni, prod, sum, minus, lowast, radic, prop, infin, ang, and, or, cap, cup, int, there4, sim, cong, asymp, ne, equiv, le, ge, sub, sup, nsub, sube, supe, oplus, otimes, perp, sdot, lceil, rceil, lfloor, rfloor, lang, rang, loz, spades, clubs, hearts, diams, quot, amp, lt, gt, OElig, oelig, Scaron, scaron, Yuml, circ, tilde, ensp, emsp, thinsp, zwnj, zwj, lrm, rlm, ndash, mdash, lsquo, rsquo, sbquo, ldquo, rdquo, bdquo, dagger, Dagger, permil, lsaquo, rsaquo, euro, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"nbsp\":\" \",\"iexcl\":\"¡\",\"cent\":\"¢\",\"pound\":\"£\",\"curren\":\"¤\",\"yen\":\"¥\",\"brvbar\":\"¦\",\"sect\":\"§\",\"uml\":\"¨\",\"copy\":\"©\",\"ordf\":\"ª\",\"laquo\":\"«\",\"not\":\"¬\",\"shy\":\"­\",\"reg\":\"®\",\"macr\":\"¯\",\"deg\":\"°\",\"plusmn\":\"±\",\"sup2\":\"²\",\"sup3\":\"³\",\"acute\":\"´\",\"micro\":\"µ\",\"para\":\"¶\",\"middot\":\"·\",\"cedil\":\"¸\",\"sup1\":\"¹\",\"ordm\":\"º\",\"raquo\":\"»\",\"frac14\":\"¼\",\"frac12\":\"½\",\"frac34\":\"¾\",\"iquest\":\"¿\",\"Agrave\":\"À\",\"Aacute\":\"Á\",\"Acirc\":\"Â\",\"Atilde\":\"Ã\",\"Auml\":\"Ä\",\"Aring\":\"Å\",\"AElig\":\"Æ\",\"Ccedil\":\"Ç\",\"Egrave\":\"È\",\"Eacute\":\"É\",\"Ecirc\":\"Ê\",\"Euml\":\"Ë\",\"Igrave\":\"Ì\",\"Iacute\":\"Í\",\"Icirc\":\"Î\",\"Iuml\":\"Ï\",\"ETH\":\"Ð\",\"Ntilde\":\"Ñ\",\"Ograve\":\"Ò\",\"Oacute\":\"Ó\",\"Ocirc\":\"Ô\",\"Otilde\":\"Õ\",\"Ouml\":\"Ö\",\"times\":\"×\",\"Oslash\":\"Ø\",\"Ugrave\":\"Ù\",\"Uacute\":\"Ú\",\"Ucirc\":\"Û\",\"Uuml\":\"Ü\",\"Yacute\":\"Ý\",\"THORN\":\"Þ\",\"szlig\":\"ß\",\"agrave\":\"à\",\"aacute\":\"á\",\"acirc\":\"â\",\"atilde\":\"ã\",\"auml\":\"ä\",\"aring\":\"å\",\"aelig\":\"æ\",\"ccedil\":\"ç\",\"egrave\":\"è\",\"eacute\":\"é\",\"ecirc\":\"ê\",\"euml\":\"ë\",\"igrave\":\"ì\",\"iacute\":\"í\",\"icirc\":\"î\",\"iuml\":\"ï\",\"eth\":\"ð\",\"ntilde\":\"ñ\",\"ograve\":\"ò\",\"oacute\":\"ó\",\"ocirc\":\"ô\",\"otilde\":\"õ\",\"ouml\":\"ö\",\"divide\":\"÷\",\"oslash\":\"ø\",\"ugrave\":\"ù\",\"uacute\":\"ú\",\"ucirc\":\"û\",\"uuml\":\"ü\",\"yacute\":\"ý\",\"thorn\":\"þ\",\"yuml\":\"ÿ\",\"fnof\":\"ƒ\",\"Alpha\":\"Α\",\"Beta\":\"Β\",\"Gamma\":\"Γ\",\"Delta\":\"Δ\",\"Epsilon\":\"Ε\",\"Zeta\":\"Ζ\",\"Eta\":\"Η\",\"Theta\":\"Θ\",\"Iota\":\"Ι\",\"Kappa\":\"Κ\",\"Lambda\":\"Λ\",\"Mu\":\"Μ\",\"Nu\":\"Ν\",\"Xi\":\"Ξ\",\"Omicron\":\"Ο\",\"Pi\":\"Π\",\"Rho\":\"Ρ\",\"Sigma\":\"Σ\",\"Tau\":\"Τ\",\"Upsilon\":\"Υ\",\"Phi\":\"Φ\",\"Chi\":\"Χ\",\"Psi\":\"Ψ\",\"Omega\":\"Ω\",\"alpha\":\"α\",\"beta\":\"β\",\"gamma\":\"γ\",\"delta\":\"δ\",\"epsilon\":\"ε\",\"zeta\":\"ζ\",\"eta\":\"η\",\"theta\":\"θ\",\"iota\":\"ι\",\"kappa\":\"κ\",\"lambda\":\"λ\",\"mu\":\"μ\",\"nu\":\"ν\",\"xi\":\"ξ\",\"omicron\":\"ο\",\"pi\":\"π\",\"rho\":\"ρ\",\"sigmaf\":\"ς\",\"sigma\":\"σ\",\"tau\":\"τ\",\"upsilon\":\"υ\",\"phi\":\"φ\",\"chi\":\"χ\",\"psi\":\"ψ\",\"omega\":\"ω\",\"thetasym\":\"ϑ\",\"upsih\":\"ϒ\",\"piv\":\"ϖ\",\"bull\":\"•\",\"hellip\":\"…\",\"prime\":\"′\",\"Prime\":\"″\",\"oline\":\"‾\",\"frasl\":\"⁄\",\"weierp\":\"℘\",\"image\":\"ℑ\",\"real\":\"ℜ\",\"trade\":\"™\",\"alefsym\":\"ℵ\",\"larr\":\"←\",\"uarr\":\"↑\",\"rarr\":\"→\",\"darr\":\"↓\",\"harr\":\"↔\",\"crarr\":\"↵\",\"lArr\":\"⇐\",\"uArr\":\"⇑\",\"rArr\":\"⇒\",\"dArr\":\"⇓\",\"hArr\":\"⇔\",\"forall\":\"∀\",\"part\":\"∂\",\"exist\":\"∃\",\"empty\":\"∅\",\"nabla\":\"∇\",\"isin\":\"∈\",\"notin\":\"∉\",\"ni\":\"∋\",\"prod\":\"∏\",\"sum\":\"∑\",\"minus\":\"−\",\"lowast\":\"∗\",\"radic\":\"√\",\"prop\":\"∝\",\"infin\":\"∞\",\"ang\":\"∠\",\"and\":\"∧\",\"or\":\"∨\",\"cap\":\"∩\",\"cup\":\"∪\",\"int\":\"∫\",\"there4\":\"∴\",\"sim\":\"∼\",\"cong\":\"≅\",\"asymp\":\"≈\",\"ne\":\"≠\",\"equiv\":\"≡\",\"le\":\"≤\",\"ge\":\"≥\",\"sub\":\"⊂\",\"sup\":\"⊃\",\"nsub\":\"⊄\",\"sube\":\"⊆\",\"supe\":\"⊇\",\"oplus\":\"⊕\",\"otimes\":\"⊗\",\"perp\":\"⊥\",\"sdot\":\"⋅\",\"lceil\":\"⌈\",\"rceil\":\"⌉\",\"lfloor\":\"⌊\",\"rfloor\":\"⌋\",\"lang\":\"〈\",\"rang\":\"〉\",\"loz\":\"◊\",\"spades\":\"♠\",\"clubs\":\"♣\",\"hearts\":\"♥\",\"diams\":\"♦\",\"quot\":\"\\\"\",\"amp\":\"&\",\"lt\":\"<\",\"gt\":\">\",\"OElig\":\"Œ\",\"oelig\":\"œ\",\"Scaron\":\"Š\",\"scaron\":\"š\",\"Yuml\":\"Ÿ\",\"circ\":\"ˆ\",\"tilde\":\"˜\",\"ensp\":\" \",\"emsp\":\" \",\"thinsp\":\" \",\"zwnj\":\"‌\",\"zwj\":\"‍\",\"lrm\":\"‎\",\"rlm\":\"‏\",\"ndash\":\"–\",\"mdash\":\"—\",\"lsquo\":\"‘\",\"rsquo\":\"’\",\"sbquo\":\"‚\",\"ldquo\":\"“\",\"rdquo\":\"”\",\"bdquo\":\"„\",\"dagger\":\"†\",\"Dagger\":\"‡\",\"permil\":\"‰\",\"lsaquo\":\"‹\",\"rsaquo\":\"›\",\"euro\":\"€\"}");

/***/ }),

/***/ "./node_modules/character-entities-legacy/index.json":
/*!***********************************************************!*\
  !*** ./node_modules/character-entities-legacy/index.json ***!
  \***********************************************************/
/*! exports provided: AElig, AMP, Aacute, Acirc, Agrave, Aring, Atilde, Auml, COPY, Ccedil, ETH, Eacute, Ecirc, Egrave, Euml, GT, Iacute, Icirc, Igrave, Iuml, LT, Ntilde, Oacute, Ocirc, Ograve, Oslash, Otilde, Ouml, QUOT, REG, THORN, Uacute, Ucirc, Ugrave, Uuml, Yacute, aacute, acirc, acute, aelig, agrave, amp, aring, atilde, auml, brvbar, ccedil, cedil, cent, copy, curren, deg, divide, eacute, ecirc, egrave, eth, euml, frac12, frac14, frac34, gt, iacute, icirc, iexcl, igrave, iquest, iuml, laquo, lt, macr, micro, middot, nbsp, not, ntilde, oacute, ocirc, ograve, ordf, ordm, oslash, otilde, ouml, para, plusmn, pound, quot, raquo, reg, sect, shy, sup1, sup2, sup3, szlig, thorn, times, uacute, ucirc, ugrave, uml, uuml, yacute, yen, yuml, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AElig\":\"Æ\",\"AMP\":\"&\",\"Aacute\":\"Á\",\"Acirc\":\"Â\",\"Agrave\":\"À\",\"Aring\":\"Å\",\"Atilde\":\"Ã\",\"Auml\":\"Ä\",\"COPY\":\"©\",\"Ccedil\":\"Ç\",\"ETH\":\"Ð\",\"Eacute\":\"É\",\"Ecirc\":\"Ê\",\"Egrave\":\"È\",\"Euml\":\"Ë\",\"GT\":\">\",\"Iacute\":\"Í\",\"Icirc\":\"Î\",\"Igrave\":\"Ì\",\"Iuml\":\"Ï\",\"LT\":\"<\",\"Ntilde\":\"Ñ\",\"Oacute\":\"Ó\",\"Ocirc\":\"Ô\",\"Ograve\":\"Ò\",\"Oslash\":\"Ø\",\"Otilde\":\"Õ\",\"Ouml\":\"Ö\",\"QUOT\":\"\\\"\",\"REG\":\"®\",\"THORN\":\"Þ\",\"Uacute\":\"Ú\",\"Ucirc\":\"Û\",\"Ugrave\":\"Ù\",\"Uuml\":\"Ü\",\"Yacute\":\"Ý\",\"aacute\":\"á\",\"acirc\":\"â\",\"acute\":\"´\",\"aelig\":\"æ\",\"agrave\":\"à\",\"amp\":\"&\",\"aring\":\"å\",\"atilde\":\"ã\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"eacute\":\"é\",\"ecirc\":\"ê\",\"egrave\":\"è\",\"eth\":\"ð\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"iacute\":\"í\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"ntilde\":\"ñ\",\"oacute\":\"ó\",\"ocirc\":\"ô\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"oslash\":\"ø\",\"otilde\":\"õ\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"thorn\":\"þ\",\"times\":\"×\",\"uacute\":\"ú\",\"ucirc\":\"û\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"uuml\":\"ü\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),

/***/ "./node_modules/character-reference-invalid/index.json":
/*!*************************************************************!*\
  !*** ./node_modules/character-reference-invalid/index.json ***!
  \*************************************************************/
/*! exports provided: 0, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":\"�\",\"128\":\"€\",\"130\":\"‚\",\"131\":\"ƒ\",\"132\":\"„\",\"133\":\"…\",\"134\":\"†\",\"135\":\"‡\",\"136\":\"ˆ\",\"137\":\"‰\",\"138\":\"Š\",\"139\":\"‹\",\"140\":\"Œ\",\"142\":\"Ž\",\"145\":\"‘\",\"146\":\"’\",\"147\":\"“\",\"148\":\"”\",\"149\":\"•\",\"150\":\"–\",\"151\":\"—\",\"152\":\"˜\",\"153\":\"™\",\"154\":\"š\",\"155\":\"›\",\"156\":\"œ\",\"158\":\"ž\",\"159\":\"Ÿ\"}");

/***/ }),

/***/ "./node_modules/collapse-white-space/index.js":
/*!****************************************************!*\
  !*** ./node_modules/collapse-white-space/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = collapse

// `collapse(' \t\nbar \nbaz\t') // ' bar baz '`
function collapse(value) {
  return String(value).replace(/\s+/g, ' ')
}


/***/ }),

/***/ "./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = parse
exports.stringify = stringify

var comma = ','
var space = ' '
var empty = ''

// Parse comma-separated tokens to an array.
function parse(value) {
  var values = []
  var input = String(value || empty)
  var index = input.indexOf(comma)
  var lastIndex = 0
  var end = false
  var val

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    val = input.slice(lastIndex, index).trim()

    if (val || !end) {
      values.push(val)
    }

    lastIndex = index + 1
    index = input.indexOf(comma, lastIndex)
  }

  return values
}

// Compile an array to comma-separated tokens.
// `options.padLeft` (default: `true`) pads a space left of each token, and
// `options.padRight` (default: `false`) pads a space to the right of each token.
function stringify(values, options) {
  var settings = options || {}
  var left = settings.padLeft === false ? empty : space
  var right = settings.padRight ? space : empty

  // Ensure the last empty entry is seen.
  if (values[values.length - 1] === empty) {
    values = values.concat(empty)
  }

  return values.join(right + comma + left).trim()
}


/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ "./node_modules/hast-util-embedded/index.js":
/*!**************************************************!*\
  !*** ./node_modules/hast-util-embedded/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js")

module.exports = embedded

var names = [
  'audio',
  'canvas',
  'embed',
  'iframe',
  'img',
  'math',
  'object',
  'picture',
  'svg',
  'video'
]

function embedded(node) {
  return is(node, names)
}


/***/ }),

/***/ "./node_modules/hast-util-from-dom/dist/hast-util-from-dom.js":
/*!********************************************************************!*\
  !*** ./node_modules/hast-util-from-dom/dist/hast-util-from-dom.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ns = _interopDefault(__webpack_require__(/*! web-namespaces */ "./node_modules/web-namespaces/index.json"));
var h = _interopDefault(__webpack_require__(/*! hastscript/html */ "./node_modules/hastscript/html.js"));
var s = _interopDefault(__webpack_require__(/*! hastscript/svg */ "./node_modules/hastscript/svg.js"));

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = 11;

function transform(value) {
  var node = value || {};

  switch (node.nodeType) {
    case ELEMENT_NODE:
      return element(node);

    case DOCUMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      return root(node);

    case TEXT_NODE:
      return text(node);

    case COMMENT_NODE:
      return comment(node);

    case DOCUMENT_TYPE_NODE:
      return doctype(node);

    default:
      return null;
  }
} // Transform a document.


function root(node) {
  return {
    type: 'root',
    children: all(node)
  };
} // Transform a doctype.


function doctype(node) {
  return {
    type: 'doctype',
    name: node.name || '',
    "public": node.publicId || null,
    system: node.systemId || null
  };
} // Transform text.


function text(node) {
  return {
    type: 'text',
    value: node.nodeValue
  };
} // Transform a comment.


function comment(node) {
  return {
    type: 'comment',
    value: node.nodeValue
  };
} // Transform an element.


function element(node) {
  var space = node.namespaceURI;
  var fn = space === ns.svg ? s : h;
  var tagName = space === ns.html ? node.tagName.toLowerCase() : node.tagName;
  var content = space === ns.html && tagName === 'template' ? node.content : node;
  var attributes = node.getAttributeNames();
  var length = attributes.length;
  var props = {};
  var index = 0;

  while (index < length) {
    var key = attributes[index];
    props[key] = node.getAttribute(key);
    index += 1;
  }

  return fn(tagName, props, all(content));
}

function all(node) {
  var nodes = node.childNodes;
  var length = nodes.length;
  var children = [];
  var index = 0;

  while (index < length) {
    var child = transform(nodes[index]);

    if (child !== null) {
      children.push(child);
    }

    index += 1;
  }

  return children;
}

function fromDOM(node) {
  return transform(node) || {
    type: 'root',
    children: []
  };
}

module.exports = fromDOM;


/***/ }),

/***/ "./node_modules/hast-util-has-property/index.js":
/*!******************************************************!*\
  !*** ./node_modules/hast-util-has-property/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty

module.exports = hasProperty

// Check if `node` has a set `name` property.
function hasProperty(node, name) {
  var props
  var value

  if (!node || !name || typeof node !== 'object' || node.type !== 'element') {
    return false
  }

  props = node.properties
  value = props && own.call(props, name) && props[name]

  return value !== null && value !== undefined && value !== false
}


/***/ }),

/***/ "./node_modules/hast-util-is-body-ok-link/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/hast-util-is-body-ok-link/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview
 *   Check if a `link` element is “Body OK”.
 * @longdescription
 *   ## Use
 *
 *   ```js
 *   var h = require('hastscript')
 *   var ok = require('hast-util-is-body-ok-link')
 *
 *   ok(h('link', {itemProp: 'foo'})) //=> true
 *   ok(h('link', {rel: ['stylesheet'], href: 'index.css'})) //=> true
 *   ok(h('link', {rel: ['author'], href: 'index.css'})) //=> false
 *   ```
 *
 *   ## API
 *
 *   ### `isBodyOkLink(node)`
 *
 *   * Return `true` for `link` elements with an `itemProp`
 *   * Return `true` for `link` elements with a `rel` list where one or more
 *     entries are `pingback`, `prefetch`, or `stylesheet`.
 */



var is = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js")
var has = __webpack_require__(/*! hast-util-has-property */ "./node_modules/hast-util-has-property/index.js")

module.exports = ok

var list = ['pingback', 'prefetch', 'stylesheet']

function ok(node) {
  var length
  var index
  var rel

  if (!is(node, 'link')) {
    return false
  }

  if (has(node, 'itemProp')) {
    return true
  }

  rel = (node.properties || {}).rel || []
  length = rel.length
  index = -1

  if (rel.length === 0) {
    return false
  }

  while (++index < length) {
    if (list.indexOf(rel[index]) === -1) {
      return false
    }
  }

  return true
}


/***/ }),

/***/ "./node_modules/hast-util-is-element/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hast-util-is-element/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = isElement

// Check if if `node` is an `element` and, if `tagNames` is given, `node`
// matches them `tagNames`.
function isElement(node, tagNames) {
  var name

  if (
    !(
      tagNames === null ||
      tagNames === undefined ||
      typeof tagNames === 'string' ||
      (typeof tagNames === 'object' && tagNames.length !== 0)
    )
  ) {
    throw new Error(
      'Expected `string` or `Array.<string>` for `tagNames`, not `' +
        tagNames +
        '`'
    )
  }

  if (
    !node ||
    typeof node !== 'object' ||
    node.type !== 'element' ||
    typeof node.tagName !== 'string'
  ) {
    return false
  }

  if (tagNames === null || tagNames === undefined) {
    return true
  }

  name = node.tagName

  if (typeof tagNames === 'string') {
    return name === tagNames
  }

  return tagNames.indexOf(name) !== -1
}


/***/ }),

/***/ "./node_modules/hast-util-parse-selector/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hast-util-parse-selector/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parse

var numberSign = 35 //  '#'
var dot = 46 //  '.'

// Create a hast element from a simple CSS selector.
function parse(selector, defaultTagName) {
  var value = selector || ''
  var name = defaultTagName || 'div'
  var props = {}
  var index = -1
  var length = value.length
  var className
  var type
  var code
  var subvalue
  var lastIndex

  while (++index <= length) {
    code = value.charCodeAt(index)

    if (!code || code === dot || code === numberSign) {
      subvalue = value.slice(lastIndex, index)

      if (subvalue) {
        if (type === dot) {
          // eslint-disable-next-line max-depth
          if (className) {
            className.push(subvalue)
          } else {
            className = [subvalue]
            props.className = className
          }
        } else if (type === numberSign) {
          props.id = subvalue
        } else {
          name = subvalue
        }
      }

      lastIndex = index + 1
      type = code
    }
  }

  return {
    type: 'element',
    tagName: name,
    properties: props,
    children: []
  }
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/index.js":
/*!**************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = toMdast

var minify = __webpack_require__(/*! rehype-minify-whitespace */ "./node_modules/rehype-minify-whitespace/index.js")
var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js")
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var one = __webpack_require__(/*! ./lib/one */ "./node_modules/hast-util-to-mdast/lib/one.js")
var handlers = __webpack_require__(/*! ./lib/handlers */ "./node_modules/hast-util-to-mdast/lib/handlers/index.js")

function toMdast(tree, options) {
  var settings = options || {}
  var opts = {newlines: settings.newlines === true}
  var byId = {}

  h.nodeById = byId
  h.baseFound = false
  h.frozenBaseUrl = null

  h.handlers = xtend(handlers, settings.handlers || {})
  h.augment = augment
  h.document = settings.document

  visit(tree, onvisit)

  return one(h, minify(opts)(tree), null)

  function h(node, type, props, children) {
    var result

    if (
      !children &&
      (typeof props === 'string' ||
        (typeof props === 'object' && 'length' in props))
    ) {
      children = props
      props = {}
    }

    result = xtend({type: type}, props)

    if (typeof children === 'string') {
      result.value = children
    } else if (children) {
      result.children = children
    }

    return augment(node, result)
  }

  // `right` is the finalized mdast node, created from `left`, a hast node.
  function augment(left, right) {
    if (left.position) {
      right.position = left.position
    }

    return right
  }

  function onvisit(node) {
    var props = node.properties || {}
    var id = props.id

    if (id && !(id in node)) {
      byId[id] = node
    }
  }
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/all.js":
/*!****************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/all.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = all

var one = __webpack_require__(/*! ./one */ "./node_modules/hast-util-to-mdast/lib/one.js")

function all(h, parent) {
  var nodes = parent.children || []
  var length = nodes.length
  var values = []
  var index = -1
  var result

  while (++index < length) {
    result = one(h, nodes[index], parent)

    if (result) {
      values = values.concat(result)
    }
  }

  return values
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/base.js":
/*!**************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/base.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = base

function base(h, node) {
  if (!h.baseFound) {
    h.frozenBaseUrl = node.properties.href || null
    h.baseFound = true
  }
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/blockquote.js":
/*!********************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/blockquote.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = blockquote

var wrapChildren = __webpack_require__(/*! ../util/wrap-children */ "./node_modules/hast-util-to-mdast/lib/util/wrap-children.js")

function blockquote(h, node) {
  return h(node, 'blockquote', wrapChildren(h, node))
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/break.js":
/*!***************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/break.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = br

function br(h, node) {
  return h(node, 'break')
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/code.js":
/*!**************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/code.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = code

var is = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js")
var has = __webpack_require__(/*! hast-util-has-property */ "./node_modules/hast-util-has-property/index.js")
var toText = __webpack_require__(/*! hast-util-to-text */ "./node_modules/hast-util-to-text/index.js")
var trim = __webpack_require__(/*! trim-trailing-lines */ "./node_modules/trim-trailing-lines/index.js")

var prefix = 'language-'

function code(h, node) {
  var children = node.children
  var length = children.length
  var index = -1
  var child
  var classList
  var className
  var lang

  if (node.tagName === 'pre') {
    while (++index < length) {
      child = children[index]

      if (is(child, 'code') && has(child, 'className')) {
        classList = child.properties.className
        break
      }
    }
  }

  if (classList) {
    length = classList.length
    index = -1

    while (++index < length) {
      className = classList[index]

      if (className.slice(0, prefix.length) === prefix) {
        lang = className.slice(prefix.length)
        break
      }
    }
  }

  return h(node, 'code', {lang: lang || null, meta: null}, trim(toText(node)))
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/comment.js":
/*!*****************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/comment.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = comment

function comment(h, node) {
  return h(node, 'html', '<!--' + node.value + '-->')
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/delete.js":
/*!****************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/delete.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = strikethrough

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")

function strikethrough(h, node) {
  return h(node, 'delete', all(h, node))
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/dl.js":
/*!************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/dl.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = dataList

var is = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js")
var wrapListItems = __webpack_require__(/*! ../util/wrap-list-items */ "./node_modules/hast-util-to-mdast/lib/util/wrap-list-items.js")
var spread = __webpack_require__(/*! ../util/list-items-spread */ "./node_modules/hast-util-to-mdast/lib/util/list-items-spread.js")

function dataList(h, node) {
  var children = node.children
  var length = children.length
  var index = -1
  var clean = []
  var groups = []
  var content
  var breakpoint
  var title
  var child
  var group = {titles: [], definitions: []}

  // Unwrap `<div>`s
  while (++index < length) {
    child = children[index]
    clean = clean.concat(is(child, 'div') ? child.children : child)
  }

  length = clean.length
  index = -1

  // Group titles and definitions.
  while (++index < length) {
    child = clean[index]
    title = is(child, 'dt')

    if (title && breakpoint) {
      groups.push(group)
      group = {titles: [], definitions: []}
    }

    group[title ? 'titles' : 'definitions'].push(child)
    breakpoint = is(child, 'dd')
  }

  groups.push(group)

  // Create items.
  length = groups.length
  index = -1
  content = []

  while (++index < length) {
    group = groups[index]
    group = handle(h, group.titles).concat(handle(h, group.definitions))

    if (group.length !== 0) {
      content.push({
        type: 'listItem',
        spread: group.length > 1,
        checked: null,
        children: group
      })
    }
  }

  // Create a list if there are items.
  if (content.length !== 0) {
    return h(
      node,
      'list',
      {ordered: false, start: null, spread: spread(content)},
      content
    )
  }
}

function handle(h, category) {
  var nodes = wrapListItems(h, {children: category})

  if (nodes.length === 0) {
    return []
  }

  if (nodes.length === 1) {
    return nodes[0].children
  }

  return [
    {
      type: 'list',
      ordered: false,
      start: null,
      spread: spread(nodes),
      children: nodes
    }
  ]
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/emphasis.js":
/*!******************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/emphasis.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = emphasis

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")

function emphasis(h, node) {
  return h(node, 'emphasis', all(h, node))
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/heading.js":
/*!*****************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/heading.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = heading

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")

function heading(h, node) {
  var depth = Number(node.tagName.charAt(1))

  /* istanbul ignore next - `else` shouldn’t happen, of course… */
  depth = depth || 1

  return h(node, 'heading', {depth: depth}, all(h, node))
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/iframe.js":
/*!****************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/iframe.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = iframe

var resolve = __webpack_require__(/*! ../util/resolve */ "./node_modules/hast-util-to-mdast/lib/util/resolve.js")

function iframe(h, node) {
  var src = node.properties.src
  var title = node.properties.title

  // Only create a link if there is a title.
  // We can’t use the content of the frame because conforming HTML parsers treat
  // it as text, whereas legacy parsers treat it as HTML, so it will likely
  // contain tags that will show up in text.
  if (src && title) {
    return {
      type: 'link',
      title: null,
      url: resolve(h, src),
      children: [{type: 'text', value: title}]
    }
  }
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/image.js":
/*!***************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/image.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = image

var resolve = __webpack_require__(/*! ../util/resolve */ "./node_modules/hast-util-to-mdast/lib/util/resolve.js")

function image(h, node) {
  var props = {
    url: resolve(h, node.properties.src),
    title: node.properties.title || null,
    alt: node.properties.alt || null
  }

  return h(node, 'image', props)
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")
var wrapped = __webpack_require__(/*! ../util/wrap-children */ "./node_modules/hast-util-to-mdast/lib/util/wrap-children.js")
var base = __webpack_require__(/*! ./base */ "./node_modules/hast-util-to-mdast/lib/handlers/base.js")
var blockquote = __webpack_require__(/*! ./blockquote */ "./node_modules/hast-util-to-mdast/lib/handlers/blockquote.js")
var br = __webpack_require__(/*! ./break */ "./node_modules/hast-util-to-mdast/lib/handlers/break.js")
var cell = __webpack_require__(/*! ./table-cell */ "./node_modules/hast-util-to-mdast/lib/handlers/table-cell.js")
var code = __webpack_require__(/*! ./code */ "./node_modules/hast-util-to-mdast/lib/handlers/code.js")
var comment = __webpack_require__(/*! ./comment */ "./node_modules/hast-util-to-mdast/lib/handlers/comment.js")
var dl = __webpack_require__(/*! ./dl */ "./node_modules/hast-util-to-mdast/lib/handlers/dl.js")
var del = __webpack_require__(/*! ./delete */ "./node_modules/hast-util-to-mdast/lib/handlers/delete.js")
var emphasis = __webpack_require__(/*! ./emphasis */ "./node_modules/hast-util-to-mdast/lib/handlers/emphasis.js")
var heading = __webpack_require__(/*! ./heading */ "./node_modules/hast-util-to-mdast/lib/handlers/heading.js")
var iframe = __webpack_require__(/*! ./iframe */ "./node_modules/hast-util-to-mdast/lib/handlers/iframe.js")
var image = __webpack_require__(/*! ./image */ "./node_modules/hast-util-to-mdast/lib/handlers/image.js")
var inlineCode = __webpack_require__(/*! ./inline-code */ "./node_modules/hast-util-to-mdast/lib/handlers/inline-code.js")
var input = __webpack_require__(/*! ./input */ "./node_modules/hast-util-to-mdast/lib/handlers/input.js")
var link = __webpack_require__(/*! ./link */ "./node_modules/hast-util-to-mdast/lib/handlers/link.js")
var list = __webpack_require__(/*! ./list */ "./node_modules/hast-util-to-mdast/lib/handlers/list.js")
var listItem = __webpack_require__(/*! ./list-item */ "./node_modules/hast-util-to-mdast/lib/handlers/list-item.js")
var media = __webpack_require__(/*! ./media */ "./node_modules/hast-util-to-mdast/lib/handlers/media.js")
var paragraph = __webpack_require__(/*! ./paragraph */ "./node_modules/hast-util-to-mdast/lib/handlers/paragraph.js")
var quote = __webpack_require__(/*! ./q */ "./node_modules/hast-util-to-mdast/lib/handlers/q.js")
var root = __webpack_require__(/*! ./root */ "./node_modules/hast-util-to-mdast/lib/handlers/root.js")
var row = __webpack_require__(/*! ./table-row */ "./node_modules/hast-util-to-mdast/lib/handlers/table-row.js")
var select = __webpack_require__(/*! ./select */ "./node_modules/hast-util-to-mdast/lib/handlers/select.js")
var strong = __webpack_require__(/*! ./strong */ "./node_modules/hast-util-to-mdast/lib/handlers/strong.js")
var table = __webpack_require__(/*! ./table */ "./node_modules/hast-util-to-mdast/lib/handlers/table.js")
var text = __webpack_require__(/*! ./text */ "./node_modules/hast-util-to-mdast/lib/handlers/text.js")
var textarea = __webpack_require__(/*! ./textarea */ "./node_modules/hast-util-to-mdast/lib/handlers/textarea.js")
var thematicBreak = __webpack_require__(/*! ./thematic-break */ "./node_modules/hast-util-to-mdast/lib/handlers/thematic-break.js")
var wbr = __webpack_require__(/*! ./wbr */ "./node_modules/hast-util-to-mdast/lib/handlers/wbr.js")

exports.root = root
exports.text = text
exports.comment = comment
exports.doctype = ignore

exports.applet = ignore
exports.area = ignore
exports.basefont = ignore
exports.bgsound = ignore
exports.caption = ignore
exports.col = ignore
exports.colgroup = ignore
exports.command = ignore
exports.content = ignore
exports.datalist = ignore
exports.dialog = ignore
exports.element = ignore
exports.embed = ignore
exports.frame = ignore
exports.frameset = ignore
exports.isindex = ignore
exports.keygen = ignore
exports.link = ignore
exports.math = ignore
exports.menu = ignore
exports.menuitem = ignore
exports.meta = ignore
exports.nextid = ignore
exports.noembed = ignore
exports.noframes = ignore
exports.optgroup = ignore
exports.option = ignore
exports.param = ignore
exports.script = ignore
exports.shadow = ignore
exports.source = ignore
exports.spacer = ignore
exports.style = ignore
exports.svg = ignore
exports.template = ignore
exports.title = ignore
exports.track = ignore

exports.abbr = all
exports.acronym = all
exports.bdi = all
exports.bdo = all
exports.big = all
exports.blink = all
exports.button = all
exports.canvas = all
exports.cite = all
exports.data = all
exports.details = all
exports.dfn = all
exports.font = all
exports.ins = all
exports.label = all
exports.map = all
exports.marquee = all
exports.meter = all
exports.nobr = all
exports.noscript = all
exports.object = all
exports.output = all
exports.progress = all
exports.rb = all
exports.rbc = all
exports.rp = all
exports.rt = all
exports.rtc = all
exports.ruby = all
exports.slot = all
exports.small = all
exports.span = all
exports.sup = all
exports.sub = all
exports.tbody = all
exports.tfoot = all
exports.thead = all
exports.time = all

exports.address = wrapped
exports.article = wrapped
exports.aside = wrapped
exports.body = wrapped
exports.center = wrapped
exports.div = wrapped
exports.fieldset = wrapped
exports.figcaption = wrapped
exports.figure = wrapped
exports.form = wrapped
exports.footer = wrapped
exports.header = wrapped
exports.hgroup = wrapped
exports.html = wrapped
exports.legend = wrapped
exports.main = wrapped
exports.multicol = wrapped
exports.nav = wrapped
exports.picture = wrapped
exports.section = wrapped

exports.a = link
exports.audio = media
exports.b = strong
exports.base = base
exports.blockquote = blockquote
exports.br = br
exports.code = inlineCode
exports.dir = list
exports.dl = dl
exports.dt = listItem
exports.dd = listItem
exports.del = del
exports.em = emphasis
exports.h1 = heading
exports.h2 = heading
exports.h3 = heading
exports.h4 = heading
exports.h5 = heading
exports.h6 = heading
exports.hr = thematicBreak
exports.i = emphasis
exports.iframe = iframe
exports.img = image
exports.image = image
exports.input = input
exports.kbd = inlineCode
exports.li = listItem
exports.listing = code
exports.mark = emphasis
exports.ol = list
exports.p = paragraph
exports.plaintext = code
exports.pre = code
exports.q = quote
exports.s = del
exports.samp = inlineCode
exports.select = select
exports.strike = del
exports.strong = strong
exports.summary = paragraph
exports.table = table
exports.td = cell
exports.textarea = textarea
exports.th = cell
exports.tr = row
exports.tt = inlineCode
exports.u = emphasis
exports.ul = list
exports.var = inlineCode
exports.video = media
exports.wbr = wbr
exports.xmp = code

function ignore() {}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/inline-code.js":
/*!*********************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/inline-code.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = inlineCode

var toText = __webpack_require__(/*! hast-util-to-text */ "./node_modules/hast-util-to-text/index.js")

function inlineCode(h, node) {
  return h(node, 'inlineCode', toText(node))
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/input.js":
/*!***************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/input.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")
var is = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js")
var resolve = __webpack_require__(/*! ../util/resolve */ "./node_modules/hast-util-to-mdast/lib/util/resolve.js")
var findSelectedOptions = __webpack_require__(/*! ../util/find-selected-options */ "./node_modules/hast-util-to-mdast/lib/util/find-selected-options.js")

module.exports = input

// eslint-disable-next-line complexity
function input(h, node) {
  var byId = h.nodeById
  var props = node.properties
  var value = props.value || props.placeholder
  var list = props.list
  var type = props.type
  var values = []
  var length
  var index
  var results
  var url
  var text

  if (props.disabled || props.type === 'hidden' || props.type === 'file') {
    return
  }

  if (type === 'checkbox' || type === 'radio') {
    return {type: 'text', value: '[' + (props.checked ? 'x' : ' ') + ']'}
  }

  if (type === 'image' && props.alt) {
    values = [[props.alt]]
  } else if (value) {
    values = [[value]]
  } else if (
    list &&
    type !== 'password' && // `list` is not supported on `password`
    type !== 'file' && // …or `file`
    type !== 'submit' && // …or `submit`
    type !== 'reset' && // …or `reset`
    type !== 'button' && // …or `button`
    list in byId &&
    is(byId[list], 'datalist')
  ) {
    values = findSelectedOptions(byId[list], props)
  }

  if (values.length === 0) {
    return
  }

  // Passwords don’t support `list`.
  if (type === 'password') {
    values[0] = [repeat('•', values[0][0].length)]
  }

  // Images don’t support `list`.
  if (type === 'image') {
    return h(node, 'image', {
      url: resolve(h, props.src),
      title: props.title || null,
      alt: values[0][0]
    })
  }

  length = values.length
  index = -1
  results = []

  if (type !== 'url' && type !== 'email') {
    while (++index < length) {
      value = values[index]
      results.push(value[1] ? value[1] + ' (' + value[0] + ')' : value[0])
    }

    return h.augment(node, {type: 'text', value: results.join(', ')})
  }

  while (++index < length) {
    value = values[index]
    text = resolve(h, value[0])
    url = type === 'email' ? 'mailto:' + text : text

    results.push(
      h(node, 'link', {title: null, url: url}, [
        {type: 'text', value: value[1] || text}
      ])
    )

    if (index !== length - 1) {
      results.push({type: 'text', value: ', '})
    }
  }

  return results
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/link.js":
/*!**************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = link

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")
var resolve = __webpack_require__(/*! ../util/resolve */ "./node_modules/hast-util-to-mdast/lib/util/resolve.js")

function link(h, node) {
  var props = {
    url: resolve(h, node.properties.href),
    title: node.properties.title || null
  }

  return h(node, 'link', props, all(h, node))
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/list-item.js":
/*!*******************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/list-item.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = listItem

var is = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js")
var wrapChildren = __webpack_require__(/*! ../util/wrap-children */ "./node_modules/hast-util-to-mdast/lib/util/wrap-children.js")

function listItem(h, node) {
  var children = node.children
  var head = children[0]
  var checked = null
  var checkbox
  var grandchildren
  var content

  // Check if this node starts with a checkbox.
  if (head && is(head, 'p')) {
    grandchildren = head.children
    checkbox = grandchildren[0]

    if (
      checkbox &&
      is(checkbox, 'input') &&
      (checkbox.properties.type === 'checkbox' ||
        checkbox.properties.type === 'radio')
    ) {
      checked = Boolean(checkbox.properties.checked)
    }
  }

  content = wrapChildren(h, node)

  if (checked !== null) {
    grandchildren = content[0] && content[0].children

    // Remove text checkbox (enabled inputs are mapped to textual checkboxes).
    head = grandchildren && grandchildren[0]

    if (
      head &&
      head.type === 'text' &&
      head.value.length === 3 &&
      head.value.charAt(0) === '[' &&
      head.value.charAt(2) === ']'
    ) {
      grandchildren.shift()
    }

    // Remove initial spacing if we previously found a checkbox.
    head = grandchildren && grandchildren[0]

    if (head && head.type === 'text' && head.value.charAt(0) === ' ') {
      // Remove text with one space, or remove that one initial space.
      if (head.value.length === 1) {
        content[0].children = grandchildren.slice(1)
      } else {
        head.value = head.value.slice(1)
      }
    }
  }

  return h(
    node,
    'listItem',
    {spread: content.length > 1, checked: checked},
    content
  )
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/list.js":
/*!**************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/list.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = list

var has = __webpack_require__(/*! hast-util-has-property */ "./node_modules/hast-util-has-property/index.js")
var wrapListItems = __webpack_require__(/*! ../util/wrap-list-items */ "./node_modules/hast-util-to-mdast/lib/util/wrap-list-items.js")
var spread = __webpack_require__(/*! ../util/list-items-spread */ "./node_modules/hast-util-to-mdast/lib/util/list-items-spread.js")

function list(h, node) {
  var ordered = node.tagName === 'ol'
  var start = null
  var children

  if (ordered) {
    start = has(node, 'start') ? node.properties.start : 1
  }

  children = wrapListItems(h, node)

  return h(
    node,
    'list',
    {ordered: ordered, start: start, spread: spread(children)},
    children
  )
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/media.js":
/*!***************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/media.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = media

var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js")
var is = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js")
var toString = __webpack_require__(/*! mdast-util-to-string */ "./node_modules/mdast-util-to-string/index.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")
var resolve = __webpack_require__(/*! ../util/resolve */ "./node_modules/hast-util-to-mdast/lib/util/resolve.js")
var needed = __webpack_require__(/*! ../util/wrap */ "./node_modules/hast-util-to-mdast/lib/util/wrap.js").needed

function media(h, node) {
  var nodes = all(h, node)
  var title = node.properties.title
  var poster = is(node, 'video') ? node.properties.poster : null
  var src = node.properties.src
  var children = node.children
  var length = children.length
  var index = -1
  var linkInFallbackContent = false
  var child

  // Find the source.
  while (!src && ++index < length) {
    child = children[index]

    if (is(child, 'source')) {
      src = child.properties.src
    }
  }

  visit({type: 'root', children: nodes}, 'link', findLink)

  // If the content links to something, or if it’s not phrasing…
  if (linkInFallbackContent || needed(nodes)) {
    return nodes
  }

  // If there’s a poster defined on the video, create an image.
  if (poster) {
    nodes = [
      {
        type: 'image',
        title: null,
        url: resolve(h, poster),
        alt: toString({children: nodes})
      }
    ]
  }

  // Link to the media resource.
  return {
    type: 'link',
    title: title || null,
    url: resolve(h, src),
    children: nodes
  }

  function findLink() {
    linkInFallbackContent = true
    return visit.EXIT
  }
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/paragraph.js":
/*!*******************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/paragraph.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = paragraph

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")

function paragraph(h, node) {
  var children = node.children
  var nodes = all(h, node)

  if (children && children.length !== 0 && nodes.length === 0) {
    return
  }

  return h(node, 'paragraph', nodes)
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/q.js":
/*!***********************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/q.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = q

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")

var quote = '"'

function q(h, node) {
  var contents = all(h, node)
  var head = contents[0]
  var tail = contents[contents.length - 1]

  if (head && head.type === 'text') {
    head.value = quote + head.value
  } else {
    contents.unshift({type: 'text', value: quote})
  }

  if (tail && tail.type === 'text') {
    tail.value += quote
  } else {
    contents.push({type: 'text', value: quote})
  }

  return contents
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/root.js":
/*!**************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/root.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = root

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")
var wrap = __webpack_require__(/*! ../util/wrap */ "./node_modules/hast-util-to-mdast/lib/util/wrap.js")

function root(h, node) {
  var children = all(h, node)

  if (h.document || wrap.needed(children)) {
    children = wrap(children)
  }

  return h(node, 'root', children)
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/select.js":
/*!****************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/select.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var findSelectedOptions = __webpack_require__(/*! ../util/find-selected-options */ "./node_modules/hast-util-to-mdast/lib/util/find-selected-options.js")

module.exports = select

function select(h, node) {
  var values = findSelectedOptions(node)
  var length = values.length
  var index = -1
  var results = []
  var value

  while (++index < length) {
    value = values[index]
    results.push(value[1] ? value[1] + ' (' + value[0] + ')' : value[0])
  }

  if (results.length !== 0) {
    return h.augment(node, {
      type: 'text',
      value: results.join(', ')
    })
  }
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/strong.js":
/*!****************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/strong.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = strong

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")

function strong(h, node) {
  return h(node, 'strong', all(h, node))
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/table-cell.js":
/*!********************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/table-cell.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = cell

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")

function cell(h, node) {
  return h(node, 'tableCell', all(h, node))
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/table-row.js":
/*!*******************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/table-row.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = row

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")

function row(h, node) {
  return h(node, 'tableRow', all(h, node))
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/table.js":
/*!***************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/table.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = table

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")

function table(h, node) {
  var align = alignment(node)
  return h(node, 'table', {align: align}, toRows(all(h, node), align.length))
}

// Infer the alignment of the table.
function alignment(node) {
  var align = []

  visit(node, visitor)

  return align

  function visitor(child, index, parent) {
    var pos

    if (cell(child)) {
      pos = cellsBefore(parent, child)
      if (!align[pos]) {
        align[pos] = child.properties.align || null
      }
    }
  }
}

// Count cells in `parent` before `node`.
function cellsBefore(parent, node) {
  var children = parent.children
  var length = children.length
  var index = -1
  var child
  var pos = 0

  while (++index < length) {
    child = children[index]

    if (child === node) {
      break
    }

    /* istanbul ignore else - When proper HTML, should always be a cell */
    if (cell(child)) {
      pos++
    }
  }

  return pos
}

// Check if `node` is a cell.
function cell(node) {
  return node.tagName === 'th' || node.tagName === 'td'
}

// Ensure the amount of cells in a row matches `align.left`.
function toRows(rows, count) {
  var nodes = []
  var length = rows.length
  var index = -1
  var node
  var queue

  while (++index < length) {
    node = rows[index]

    if (node.type === 'tableRow') {
      flush()
      add(node)
    } else {
      queue = (queue || []).concat(node)
    }
  }

  flush()

  return nodes

  function flush() {
    if (queue) {
      add({type: 'tableRow', children: queue})
      queue = undefined
    }
  }

  function add(node) {
    nodes.push(cells(node, count))
  }
}

function cells(row, count) {
  var nodes = []
  var cells = row.children
  var length = cells.length
  var index = -1
  var node
  var queue

  while (++index < length) {
    node = cells[index]

    if (node.type === 'tableCell') {
      flush()
      nodes.push(node)
    } else {
      queue = (queue || []).concat(node)
    }
  }

  flush()

  index = nodes.length
  length = count + 1

  while (++index < length) {
    nodes.push({type: 'tableCell', children: []})
  }

  return xtend(row, {children: nodes})

  function flush() {
    if (queue) {
      nodes.push({type: 'tableCell', children: queue})
      queue = undefined
    }
  }
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/text.js":
/*!**************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/text.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text

function text(h, node) {
  return h.augment(node, {type: 'text', value: node.value})
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/textarea.js":
/*!******************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/textarea.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toText = __webpack_require__(/*! hast-util-to-text */ "./node_modules/hast-util-to-text/index.js")

module.exports = textarea

function textarea(h, node) {
  return h.augment(node, {type: 'text', value: toText(node)})
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/thematic-break.js":
/*!************************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/thematic-break.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak

function thematicBreak(h, node) {
  return h(node, 'thematicBreak')
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/handlers/wbr.js":
/*!*************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/handlers/wbr.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = zws

function zws(h, node) {
  return h.augment(node, {type: 'text', value: '\u200B'})
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/one.js":
/*!****************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/one.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = one

var all = __webpack_require__(/*! ./all */ "./node_modules/hast-util-to-mdast/lib/all.js")

var own = {}.hasOwnProperty

function one(h, node, parent) {
  var fn = null

  if (node.type === 'element') {
    if (node.properties && node.properties.dataMdast === 'ignore') {
      return
    }

    if (own.call(h.handlers, node.tagName)) {
      fn = h.handlers[node.tagName]
    }
  } else if (own.call(h.handlers, node.type)) {
    fn = h.handlers[node.type]
  }

  return (typeof fn === 'function' ? fn : unknown)(h, node, parent)
}

function unknown(h, node) {
  if (node.value) {
    return h.augment(node, {type: 'text', value: node.value})
  }

  return all(h, node)
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/util/find-selected-options.js":
/*!***************************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/util/find-selected-options.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js")
var has = __webpack_require__(/*! hast-util-has-property */ "./node_modules/hast-util-has-property/index.js")
var toText = __webpack_require__(/*! hast-util-to-text */ "./node_modules/hast-util-to-text/index.js")

module.exports = findSelectedOptions

function findSelectedOptions(node, properties) {
  var props = properties || node.properties
  var multiple = props.multiple
  var size = Math.min(parseInt(props.size, 10), 0) || (multiple ? 4 : 1)
  var options = findOptions(node)
  var length = options.length
  var index = -1
  var selectedOptions = []
  var values = []
  var option
  var list
  var content
  var label
  var value

  while (++index < length) {
    option = options[index]

    if (option.properties.selected) {
      selectedOptions.push(option)
    }
  }

  list = selectedOptions.length === 0 ? options : selectedOptions
  options = list.slice(0, size)
  length = options.length
  index = -1

  while (++index < length) {
    option = options[index]
    content = toText(option)
    label = content || option.properties.label
    value = option.properties.value || content

    values.push([value, label === value ? null : label])
  }

  return values
}

function findOptions(node) {
  var children = node.children
  var length = children.length
  var index = -1
  var results = []
  var child

  while (++index < length) {
    child = children[index]

    if (is(child, 'option')) {
      if (!has(child, 'disabled')) {
        results.push(child)
      }
    } else if ('children' in child) {
      results = results.concat(findOptions(child))
    }
  }

  return results
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/util/list-items-spread.js":
/*!***********************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/util/list-items-spread.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = spread

function spread(children) {
  var length = children.length
  var index = -1

  if (length > 1) {
    while (++index < length) {
      if (children[index].spread) {
        return true
      }
    }
  }

  return false
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/util/resolve.js":
/*!*************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/util/resolve.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = resolve

function resolve(h, url) {
  if (url === null || url === undefined) {
    return ''
  }

  /* istanbul ignore next - ignored for older Node */
  if (h.frozenBaseUrl && typeof URL !== 'undefined') {
    return String(new URL(url, h.frozenBaseUrl))
  }

  return url
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/util/wrap-children.js":
/*!*******************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/util/wrap-children.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wrapped

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")
var wrap = __webpack_require__(/*! ./wrap */ "./node_modules/hast-util-to-mdast/lib/util/wrap.js")

function wrapped(h, node) {
  return wrap(all(h, node))
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/util/wrap-list-items.js":
/*!*********************************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/util/wrap-list-items.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wrapped

var all = __webpack_require__(/*! ../all */ "./node_modules/hast-util-to-mdast/lib/all.js")

function wrapped(h, node) {
  var children = all(h, node)
  var length = children.length
  var index = -1
  var child

  while (++index < length) {
    child = children[index]

    if (child.type !== 'listItem') {
      children[index] = {
        type: 'listItem',
        spread: false,
        checked: null,
        children: [child]
      }
    }
  }

  return children
}


/***/ }),

/***/ "./node_modules/hast-util-to-mdast/lib/util/wrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/hast-util-to-mdast/lib/util/wrap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wrap

wrap.needed = needed

var extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js")
var phrasing = __webpack_require__(/*! mdast-util-phrasing */ "./node_modules/mdast-util-phrasing/index.js")

function wrap(nodes) {
  return runs(nodes, onphrasing)

  function onphrasing(nodes) {
    var head = nodes[0]

    if (
      nodes.length === 1 &&
      head.type === 'text' &&
      (head.value === ' ' || head.value === '\n')
    ) {
      return []
    }

    return {type: 'paragraph', children: nodes}
  }
}

// Wrap all runs of mdast phrasing content in `paragraph` nodes.
function runs(nodes, onphrasing, onnonphrasing) {
  var nonphrasing = onnonphrasing || identity
  var result = []
  var flattened = flatten(nodes)
  var length = flattened.length
  var index = -1
  var node
  var queue

  while (++index < length) {
    node = flattened[index]

    if (phrasing(node)) {
      if (queue === undefined) {
        queue = []
      }

      queue.push(node)
    } else {
      add()
      result = result.concat(nonphrasing(node))
    }
  }

  add()

  return result

  function add() {
    if (queue !== undefined) {
      result = result.concat(onphrasing(queue))
    }

    queue = undefined
  }
}

// Flatten a list of nodes.
function flatten(nodes) {
  var length = nodes.length
  var index = -1
  var flattened = []
  var node

  while (++index < length) {
    node = nodes[index]

    // Straddling: some elements are *weird*.
    // Namely: `map`, `ins`, `del`, and `a`, as they are hybrid elements.
    // See: <https://html.spec.whatwg.org/#paragraphs>.
    // Paragraphs are the weirdest of them all.
    // See the straddling fixture for more info!
    // `ins` is ignored in mdast, so we don’t need to worry about that.
    // `map` maps to its content, so we don’t need to worry about that either.
    // `del` maps to `delete` and `a` to `link`, so we do handle those.
    // What we’ll do is split `node` over each of its children.
    if (
      (node.type === 'delete' || node.type === 'link') &&
      needed(node.children)
    ) {
      flattened = flattened.concat(split(node))
    } else {
      flattened.push(node)
    }
  }

  return flattened
}

// Check if there are non-phrasing mdast nodes returned.
// This is needed if a fragment is given, which could just be a sentence, and
// doesn’t need a wrapper paragraph.
function needed(nodes) {
  var length = nodes.length
  var index = -1
  var node
  var children

  while (++index < length) {
    node = nodes[index]
    children = node.children

    if (!phrasing(node) || (children && needed(children))) {
      return true
    }
  }

  return false
}

function split(node) {
  return runs(node.children, onphrasing, onnonphrasing)

  // Use `child`, add `parent` as its first child, put the original children
  // into `parent`.
  function onnonphrasing(child) {
    var parent = extend(true, {}, shallow(node))
    var copy = shallow(child)

    copy.children = [parent]
    parent.children = child.children

    return copy
  }

  // Use `parent`, put the phrasing run inside it.
  function onphrasing(nodes) {
    var parent = extend(true, {}, shallow(node))
    parent.children = nodes
    return parent
  }
}

// Shallow copy of a node, excluding its children.
function shallow(node) {
  var copy = {}
  var key

  for (key in node) {
    if (key !== 'children') {
      copy[key] = node[key]
    }
  }

  return copy
}

function identity(n) {
  return n
}


/***/ }),

/***/ "./node_modules/hast-util-to-text/index.js":
/*!*************************************************!*\
  !*** ./node_modules/hast-util-to-text/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")
var is = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js")
var findAfter = __webpack_require__(/*! unist-util-find-after */ "./node_modules/unist-util-find-after/index.js")

module.exports = toText

// Methods.
var min = Math.min
var max = Math.max

// White space codes.
var tab = 0x9
var space = 0x20
var zeroWidthSpace = 0x200b

// Bidi control characters codes.
var alm = 0x61c
var ltr = 0x200e
var rtl = 0x200f
var lre = 0x202a
var rle = 0x202b
var pdf = 0x202c
var lro = 0x202d
var rlo = 0x202e
var lri = 0x2066
var rli = 0x2067
var fsi = 0x2068
var pdi = 0x2069

// Characters.
var tabChar = '\t'
var lineFeedChar = '\n'
var spaceChar = ' '

// Implementation of the `innerText` getter:
// <https://html.spec.whatwg.org/#the-innertext-idl-attribute>
// Note that we act as if `node` is being rendered, and as if we’re a
// CSS-supporting user agent.
function toText(node) {
  var children = node.children || []
  var length = children.length
  var block = blockOrCaption(node)
  var whiteSpace = inferWhiteSpace(node, {})
  var index = -1
  var results
  var current
  var result
  var value
  var count

  // Treat `text` and `comment` as having normal white-space.
  // This deviates from the spec as in the DOM the node’s `.data` has to be
  // returned.
  // If you want that behavior use `hast-util-to-string`.
  // All other nodes are later handled as if they are `element`s (so the
  // algorithm also works on a `root`).
  // Nodes without children are treated as a void element, so `doctype` is thus
  // ignored.
  if (node.type === 'text' || node.type === 'comment') {
    return collectText(node, {
      whiteSpace: whiteSpace,
      breakBefore: true,
      breakAfter: true
    })
  }

  // 1.  If this element is not being rendered, or if the user agent is a
  //     non-CSS user agent, then return the same value as the textContent IDL
  //     attribute on this element.
  //
  //     Note: we’re not supporting stylesheets so we’re acting as if the node
  //     is rendered.
  //
  //     If you want that behavior use `hast-util-to-string`.
  //     Important: we’ll have to account for this later though.

  // 2.  Let results be a new empty list.
  results = []

  // 3.  For each child node node of this element:
  while (++index < length) {
    // 3.1. Let current be the list resulting in running the inner text
    //      collection steps with node.
    //      Each item in results will either be a JavaScript string or a
    //      positive integer (a required line break count).
    current = innerTextCollection(children[index], index, node, {
      whiteSpace: whiteSpace,
      breakBefore: index === 0 ? block : false,
      breakAfter: index === length - 1 ? block : is(children[index + 1], 'br')
    })

    // 3.2. For each item item in current, append item to results.
    results = results.concat(current)
  }

  // 4.  Remove any items from results that are the empty string.
  // 5.  Remove any runs of consecutive required line break count items at the
  //     start or end of results.
  // 6.  Replace each remaining run of consecutive required line break count
  //     items with a string consisting of as many U+000A LINE FEED (LF)
  //     characters as the maximum of the values in the required line break
  //     count items.
  index = -1
  length = results.length
  result = []

  while (++index < length) {
    value = results[index]

    if (typeof value === 'number') {
      if (count !== undefined && value > count) {
        count = value
      }
    } else if (value !== '') {
      if (count) {
        result.push(repeat(lineFeedChar, count))
      }

      count = 0
      result.push(value)
    }
  }

  // 7.  Return the concatenation of the string items in results.
  return result.join('')
}

// <https://html.spec.whatwg.org/#inner-text-collection-steps>
function innerTextCollection(node, index, parent, options) {
  if (node.type === 'element') {
    return collectElement(node, index, parent, options)
  }

  if (node.type === 'text') {
    return [
      options.whiteSpace === 'normal'
        ? collectText(node, options)
        : collectPreText(node, options)
    ]
  }

  return []
}

// Collect an element.
function collectElement(node, index, parent, options) {
  // First we infer the `white-space` property.
  var whiteSpace = inferWhiteSpace(node, options)
  var children = node.children || []
  var length = children.length
  var offset = -1
  var items = []
  var current
  var prefix
  var suffix

  // We’re ignoring point 3, and exiting without any content here, because we
  // deviated from the spec in `toText` at step 3.
  if (notRendered(node)) {
    return items
  }

  // Note: we first detect if there is going to be a break before or after the
  // contents, as that changes the white-space handling.

  // 2.  If node’s computed value of `visibility` is not `visible`, then return
  //     items.
  //
  //     Note: Ignored, as everything is visible by default user agent styles.

  // 3.  If node is not being rendered, then return items. [...]
  //
  //     Note: We already did this above.

  // See `collectText` for step 4.

  // 5.  If node is a `<br>` element, then append a string containing a single
  //     U+000A LINE FEED (LF) character to items.
  if (is(node, 'br')) {
    suffix = lineFeedChar
  }

  // 7.  If node’s computed value of `display` is `table-row`, and node’s CSS
  //     box is not the last `table-row` box of the nearest ancestor `table`
  //     box, then append a string containing a single U+000A LINE FEED (LF)
  //     character to items.
  //
  //     See: <https://html.spec.whatwg.org/#tables-2>
  //     Note: needs further investigation as this does not account for implicit
  //     rows.
  else if (row(node) && findAfter(parent, node, row)) {
    suffix = lineFeedChar
  }

  // 8.  If node is a `<p>` element, then append 2 (a required line break count)
  //     at the beginning and end of items.
  else if (is(node, 'p')) {
    prefix = 2
    suffix = 2
  }

  // 9.  If node’s used value of `display` is block-level or `table-caption`,
  //     then append 1 (a required line break count) at the beginning and end of
  //     items.
  else if (blockOrCaption(node)) {
    prefix = 1
    suffix = 1
  }

  // 1.  Let items be the result of running the inner text collection steps with
  //     each child node of node in tree order, and then concatenating the
  //     results to a single list.
  while (++offset < length) {
    current = innerTextCollection(children[offset], offset, node, {
      whiteSpace: whiteSpace,
      breakBefore: offset === 0 ? prefix : false,
      breakAfter:
        offset === length - 1 ? suffix : is(children[offset + 1], 'br')
    })

    items = items.concat(current)
  }

  // 6.  If node’s computed value of `display` is `table-cell`, and node’s CSS
  //     box is not the last `table-cell` box of its enclosing `table-row` box,
  //     then append a string containing a single U+0009 CHARACTER TABULATION
  //     (tab) character to items.
  //
  //     See: <https://html.spec.whatwg.org/#tables-2>
  if (cell(node) && findAfter(parent, node, cell)) {
    items.push(tabChar)
  }

  // Add the pre- and suffix.
  if (prefix) {
    items.unshift(prefix)
  }

  if (suffix) {
    items.push(suffix)
  }

  return items
}

// 4.  If node is a Text node, then for each CSS text box produced by node,
//     in content order, compute the text of the box after application of the
//     CSS `white-space` processing rules and `text-transform` rules, set
//     items to the list of the resulting strings, and return items.
//     The CSS `white-space` processing rules are slightly modified:
//     collapsible spaces at the end of lines are always collapsed, but they
//     are only removed if the line is the last line of the block, or it ends
//     with a br element.
//     Soft hyphens should be preserved.
//
//     Note: See `collectText` and `collectPreText`.
//     Note: we don’t deal with `text-transform`, no element has that by
//     default.
//
// See: <https://drafts.csswg.org/css-text/#white-space-phase-1>
function collectText(node, options) {
  var breakBefore = options.breakBefore
  var breakAfter = options.breakAfter
  var value = String(node.value)
  var index = -1
  var length = value.length
  var lines = []
  var result = []
  var lineStart
  var lineEnd
  var line
  var nextLine
  var queue

  lineStart = 0
  lineEnd = value.indexOf(lineFeedChar)
  lineEnd = lineEnd === -1 ? value.length : lineEnd

  while (lineEnd !== -1) {
    line = value.slice(lineStart, lineEnd)

    // [...] ignoring bidi formatting characters (characters with the
    // Bidi_Control property [UAX9]) as if they were not there.
    line = removeBidiControlCharacters(line)

    // Any sequence of collapsible spaces and tabs immediately preceding or
    // following a segment break is removed.
    line = trimAndcollapseSpacesAndTabs(line, breakBefore, breakAfter)

    // Add the line.
    lines.push(line)

    // Stop.
    if (lineEnd === value.length) {
      break
    }

    lineStart = lineEnd + 1
    lineEnd = value.indexOf(lineFeedChar, lineStart)
    lineEnd = lineEnd === -1 ? value.length : lineEnd
  }

  index = -1
  length = lines.length
  queue = ''

  // Collapsible segment breaks are transformed for rendering according to the
  // segment break transformation rules.
  // So here we jump to 4.1.2 of [CSSTEXT]:
  // Any collapsible segment break immediately following another collapsible
  // segment break is removed
  while (++index < length) {
    line = lines[index]
    nextLine = lines[index + 1] || ''

    // *   If the character immediately before or immediately after the segment
    //     break is the zero-width space character (U+200B), then the break is
    //     removed, leaving behind the zero-width space.
    if (
      line.charCodeAt(line.length - 1) === zeroWidthSpace ||
      nextLine.charCodeAt(0) === zeroWidthSpace
    ) {
      result.push(line)
      queue = ''
      continue
    }

    // *   Otherwise, if the East Asian Width property [UAX11] of both the
    //     character before and after the segment break is Fullwidth, Wide, or
    //     Halfwidth (not Ambiguous), and neither side is Hangul, then the
    //     segment break is removed.
    //
    //     Note: ignored.

    // *   Otherwise, if the writing system of the segment break is Chinese,
    //     Japanese, or Yi, and the character before or after the segment break
    //     is punctuation or a symbol (Unicode general category P* or S*) and
    //     has an East Asian Width property of Ambiguous, and the character on
    //     the other side of the segment break is Fullwidth, Wide, or Halfwidth,
    //     and not Hangul, then the segment break is removed.
    //
    //     Note: ignored.

    // *   Otherwise, the segment break is converted to a space (U+0020).
    if (line) {
      if (queue) {
        result.push(queue)
      }

      result.push(line)
      queue = spaceChar
    }
  }

  return result.join('')
}

function collectPreText(node) {
  return String(node.value)
}

function removeBidiControlCharacters(value) {
  var index = -1
  var length = value.length
  var result = ''

  while (++index < length) {
    if (isBidiControlCharacter(value.charCodeAt(index))) {
      continue
    }

    result += value.charAt(index)
  }

  return result
}

// 3.  Every collapsible tab is converted to a collapsible space (U+0020).
// 4.  Any collapsible space immediately following another collapsible
//     space—even one outside the boundary of the inline containing that
//     space, provided both spaces are within the same inline formatting
//     context—is collapsed to have zero advance width. (It is invisible,
//     but retains its soft wrap opportunity, if any.)
function trimAndcollapseSpacesAndTabs(value, breakBefore, breakAfter) {
  var start = 0
  var end
  var length = value.length
  var result = []
  var char

  // Move forward past initial white space.
  while (start <= length) {
    char = value.charCodeAt(start)

    if (char !== space && char !== tab) {
      break
    }

    start++
  }

  // If we’re not directly after a segment break, but there was white space,
  // add an empty value that will be turned into a space.
  if (start !== 0 && !breakBefore) {
    result.push('')
  }

  end = next(start - 1)

  while (start < length) {
    end = end === -1 ? length : end
    result.push(value.slice(start, end))
    start = end

    while (start <= length) {
      char = value.charCodeAt(start)

      if (char !== space && char !== tab) {
        break
      }

      start++
    }

    // If we reached the end, there was trailing white space, and there’s no
    // segment break after this node, add an empty value that will be turned
    // into a space.
    if (start === length && start !== end && !breakAfter) {
      result.push('')
    }

    end = next(start)
  }

  return result.join(' ')

  function next(index) {
    var spaceIndex = value.indexOf(spaceChar, index + 1)
    var tabIndex = value.indexOf(tabChar, index + 1)
    var fn = spaceIndex === -1 || tabIndex === -1 ? max : min
    return fn(spaceIndex, tabIndex)
  }
}

// We don’t support void elements here (so `nobr wbr` -> `normal` is ignored).
function inferWhiteSpace(node, options) {
  var props = node.properties || {}
  var inherit = options.whiteSpace || 'normal'

  switch (node.tagName) {
    case 'listing':
    case 'plaintext':
    case 'xmp':
      return 'pre'
    case 'nobr':
      return 'nowrap'
    case 'pre':
      return props.wrap ? 'pre-wrap' : 'pre'
    case 'td':
    case 'th':
      return props.noWrap ? 'nowrap' : inherit
    case 'textarea':
      return 'pre-wrap'
    default:
      return inherit
  }
}

function isBidiControlCharacter(char) {
  switch (char) {
    case alm:
    case ltr:
    case rtl:
    case lre:
    case rle:
    case pdf:
    case lro:
    case rlo:
    case lri:
    case rli:
    case fsi:
    case pdi:
      return true
    default:
      return false
  }
}

function cell(node) {
  return is(node, ['th', 'td'])
}

function row(node) {
  return is(node, ['tr'])
}

// See: <https://html.spec.whatwg.org/#the-css-user-agent-style-sheet-and-presentational-hints>
function blockOrCaption(node) {
  return is(node, [
    'caption', // `table-caption`
    // Page
    'html',
    'body',
    // Flow content
    'address',
    'blockquote',
    'center', // Legacy
    'dialog',
    'div',
    'figure',
    'figcaption',
    'footer',
    'form,',
    'header',
    'hr',
    'legend',
    'listing', // Legacy
    'main',
    'p',
    'plaintext', // Legacy
    'pre',
    'xmp', // Legacy
    // Sections and headings
    'article',
    'aside',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hgroup',
    'nav',
    'section',
    // Lists
    'dir', // Legacy
    'dd',
    'dl',
    'dt',
    'menu',
    'ol',
    'ul'
  ])
}

// Note that we don’t need to include void elements here as they don’t have text.
//
// See: <https://github.com/wooorm/html-void-elements>
function notRendered(node) {
  var properties = node.properties || {}

  return (
    // List from: <https://html.spec.whatwg.org/#hidden-elements>
    is(node, [
      'datalist',
      'head',
      'noembed',
      'noframes',
      'rp',
      'script',
      'style',
      'template',
      'title',
      // Act as if we support scripting.
      'noscript'
    ]) ||
    // Hidden attribute.
    properties.hidden ||
    // From: <https://html.spec.whatwg.org/#flow-content-3>
    (is(node, 'dialog') && !properties.open)
  )
}


/***/ }),

/***/ "./node_modules/hastscript/factory.js":
/*!********************************************!*\
  !*** ./node_modules/hastscript/factory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var find = __webpack_require__(/*! property-information/find */ "./node_modules/property-information/find.js")
var normalize = __webpack_require__(/*! property-information/normalize */ "./node_modules/property-information/normalize.js")
var parseSelector = __webpack_require__(/*! hast-util-parse-selector */ "./node_modules/hast-util-parse-selector/index.js")
var spaces = __webpack_require__(/*! space-separated-tokens */ "./node_modules/space-separated-tokens/index.js").parse
var commas = __webpack_require__(/*! comma-separated-tokens */ "./node_modules/comma-separated-tokens/index.js").parse

module.exports = factory

var own = {}.hasOwnProperty

function factory(schema, defaultTagName, caseSensitive) {
  var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null

  return h

  // Hyperscript compatible DSL for creating virtual hast trees.
  function h(selector, properties) {
    var node = parseSelector(selector, defaultTagName)
    var children = Array.prototype.slice.call(arguments, 2)
    var name = node.tagName.toLowerCase()
    var property

    node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name

    if (properties && isChildren(properties, node)) {
      children.unshift(properties)
      properties = null
    }

    if (properties) {
      for (property in properties) {
        addProperty(node.properties, property, properties[property])
      }
    }

    addChild(node.children, children)

    if (node.tagName === 'template') {
      node.content = {type: 'root', children: node.children}
      node.children = []
    }

    return node
  }

  function addProperty(properties, key, value) {
    var info
    var property
    var result

    // Ignore nully and NaN values.
    if (value === null || value === undefined || value !== value) {
      return
    }

    info = find(schema, key)
    property = info.property
    result = value

    // Handle list values.
    if (typeof result === 'string') {
      if (info.spaceSeparated) {
        result = spaces(result)
      } else if (info.commaSeparated) {
        result = commas(result)
      } else if (info.commaOrSpaceSeparated) {
        result = spaces(commas(result).join(' '))
      }
    }

    // Accept `object` on style.
    if (property === 'style' && typeof value !== 'string') {
      result = style(result)
    }

    // Class-names (which can be added both on the `selector` and here).
    if (property === 'className' && properties.className) {
      result = properties.className.concat(result)
    }

    properties[property] = parsePrimitives(info, property, result)
  }
}

function isChildren(value, node) {
  return (
    typeof value === 'string' ||
    'length' in value ||
    isNode(node.tagName, value)
  )
}

function isNode(tagName, value) {
  var type = value.type

  if (tagName === 'input' || !type || typeof type !== 'string') {
    return false
  }

  if (typeof value.children === 'object' && 'length' in value.children) {
    return true
  }

  type = type.toLowerCase()

  if (tagName === 'button') {
    return (
      type !== 'menu' &&
      type !== 'submit' &&
      type !== 'reset' &&
      type !== 'button'
    )
  }

  return 'value' in value
}

function addChild(nodes, value) {
  var index
  var length

  if (typeof value === 'string' || typeof value === 'number') {
    nodes.push({type: 'text', value: String(value)})
    return
  }

  if (typeof value === 'object' && 'length' in value) {
    index = -1
    length = value.length

    while (++index < length) {
      addChild(nodes, value[index])
    }

    return
  }

  if (typeof value !== 'object' || !('type' in value)) {
    throw new Error('Expected node, nodes, or string, got `' + value + '`')
  }

  nodes.push(value)
}

// Parse a (list of) primitives.
function parsePrimitives(info, name, value) {
  var index
  var length
  var result

  if (typeof value !== 'object' || !('length' in value)) {
    return parsePrimitive(info, name, value)
  }

  length = value.length
  index = -1
  result = []

  while (++index < length) {
    result[index] = parsePrimitive(info, name, value[index])
  }

  return result
}

// Parse a single primitives.
function parsePrimitive(info, name, value) {
  var result = value

  if (info.number || info.positiveNumber) {
    if (!isNaN(result) && result !== '') {
      result = Number(result)
    }
  } else if (info.boolean || info.overloadedBoolean) {
    // Accept `boolean` and `string`.
    if (
      typeof result === 'string' &&
      (result === '' || normalize(value) === normalize(name))
    ) {
      result = true
    }
  }

  return result
}

function style(value) {
  var result = []
  var key

  for (key in value) {
    result.push([key, value[key]].join(': '))
  }

  return result.join('; ')
}

function createAdjustMap(values) {
  var length = values.length
  var index = -1
  var result = {}
  var value

  while (++index < length) {
    value = values[index]
    result[value.toLowerCase()] = value
  }

  return result
}


/***/ }),

/***/ "./node_modules/hastscript/html.js":
/*!*****************************************!*\
  !*** ./node_modules/hastscript/html.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var schema = __webpack_require__(/*! property-information/html */ "./node_modules/property-information/html.js")
var factory = __webpack_require__(/*! ./factory */ "./node_modules/hastscript/factory.js")

var html = factory(schema, 'div')
html.displayName = 'html'

module.exports = html


/***/ }),

/***/ "./node_modules/hastscript/index.js":
/*!******************************************!*\
  !*** ./node_modules/hastscript/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./html */ "./node_modules/hastscript/html.js")


/***/ }),

/***/ "./node_modules/hastscript/svg-case-sensitive-tag-names.json":
/*!*******************************************************************!*\
  !*** ./node_modules/hastscript/svg-case-sensitive-tag-names.json ***!
  \*******************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"altGlyph\",\"altGlyphDef\",\"altGlyphItem\",\"animateColor\",\"animateMotion\",\"animateTransform\",\"clipPath\",\"feBlend\",\"feColorMatrix\",\"feComponentTransfer\",\"feComposite\",\"feConvolveMatrix\",\"feDiffuseLighting\",\"feDisplacementMap\",\"feDistantLight\",\"feDropShadow\",\"feFlood\",\"feFuncA\",\"feFuncB\",\"feFuncG\",\"feFuncR\",\"feGaussianBlur\",\"feImage\",\"feMerge\",\"feMergeNode\",\"feMorphology\",\"feOffset\",\"fePointLight\",\"feSpecularLighting\",\"feSpotLight\",\"feTile\",\"feTurbulence\",\"foreignObject\",\"glyphRef\",\"linearGradient\",\"radialGradient\",\"solidColor\",\"textArea\",\"textPath\"]");

/***/ }),

/***/ "./node_modules/hastscript/svg.js":
/*!****************************************!*\
  !*** ./node_modules/hastscript/svg.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var schema = __webpack_require__(/*! property-information/svg */ "./node_modules/property-information/svg.js")
var caseSensitive = __webpack_require__(/*! ./svg-case-sensitive-tag-names.json */ "./node_modules/hastscript/svg-case-sensitive-tag-names.json")
var factory = __webpack_require__(/*! ./factory */ "./node_modules/hastscript/factory.js")

var svg = factory(schema, 'g', caseSensitive)
svg.displayName = 'svg'

module.exports = svg


/***/ }),

/***/ "./node_modules/html-whitespace-sensitive-tag-names/index.json":
/*!*********************************************************************!*\
  !*** ./node_modules/html-whitespace-sensitive-tag-names/index.json ***!
  \*********************************************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"script\",\"style\",\"pre\",\"textarea\"]");

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "./node_modules/is-alphabetical/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-alphabetical/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = alphabetical

// Check if the given character code, or the character code at the first
// character, is alphabetical.
function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}


/***/ }),

/***/ "./node_modules/is-alphanumeric/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-alphanumeric/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return !/[^0-9a-z\xDF-\xFF]/.test(str.toLowerCase());
};


/***/ }),

/***/ "./node_modules/is-alphanumerical/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-alphanumerical/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")

module.exports = alphanumerical

// Check if the given character code, or the character code at the first
// character, is alphanumerical.
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/is-decimal/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-decimal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = decimal

// Check if the given character code, or the character code at the first
// character, is decimal.
function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}


/***/ }),

/***/ "./node_modules/is-hexadecimal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-hexadecimal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hexadecimal

// Check if the given character code, or the character code at the first
// character, is hexadecimal.
function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}


/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = value => {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.getPrototypeOf({});
};


/***/ }),

/***/ "./node_modules/is-whitespace-character/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/is-whitespace-character/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = whitespace

var fromCode = String.fromCharCode
var re = /\s/

// Check if the given character code, or the character code at the first
// character, is a whitespace character.
function whitespace(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}


/***/ }),

/***/ "./node_modules/longest-streak/index.js":
/*!**********************************************!*\
  !*** ./node_modules/longest-streak/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = longestStreak

// Get the count of the longest repeating streak of `character` in `value`.
function longestStreak(value, character) {
  var count = 0
  var maximum = 0
  var expected
  var index

  if (typeof character !== 'string' || character.length !== 1) {
    throw new Error('Expected character')
  }

  value = String(value)
  index = value.indexOf(character)
  expected = index

  while (index !== -1) {
    count++

    if (index === expected) {
      if (count > maximum) {
        maximum = count
      }
    } else {
      count = 1
    }

    expected = index + 1
    index = value.indexOf(character, expected)
  }

  return maximum
}


/***/ }),

/***/ "./node_modules/markdown-escapes/index.js":
/*!************************************************!*\
  !*** ./node_modules/markdown-escapes/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = escapes

var defaults = [
  '\\',
  '`',
  '*',
  '{',
  '}',
  '[',
  ']',
  '(',
  ')',
  '#',
  '+',
  '-',
  '.',
  '!',
  '_',
  '>'
]

var gfm = defaults.concat(['~', '|'])

var commonmark = gfm.concat([
  '\n',
  '"',
  '$',
  '%',
  '&',
  "'",
  ',',
  '/',
  ':',
  ';',
  '<',
  '=',
  '?',
  '@',
  '^'
])

escapes.default = defaults
escapes.gfm = gfm
escapes.commonmark = commonmark

// Get markdown escapes.
function escapes(options) {
  var settings = options || {}

  if (settings.commonmark) {
    return commonmark
  }

  return settings.gfm ? gfm : defaults
}


/***/ }),

/***/ "./node_modules/markdown-table/index.js":
/*!**********************************************!*\
  !*** ./node_modules/markdown-table/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = markdownTable

var dotRe = /\./
var lastDotRe = /\.[^.]*$/

// Characters.
var space = ' '
var lineFeed = '\n'
var dash = '-'
var dot = '.'
var colon = ':'
var lowercaseC = 'c'
var lowercaseL = 'l'
var lowercaseR = 'r'
var verticalBar = '|'

var minCellSize = 3

// Create a table from a matrix of strings.
function markdownTable(table, options) {
  var settings = options || {}
  var delimiter = settings.delimiter
  var start = settings.start
  var end = settings.end
  var alignment = settings.align
  var calculateStringLength = settings.stringLength || lengthNoop
  var cellCount = 0
  var rowIndex = -1
  var rowLength = table.length
  var sizes = []
  var align
  var rule
  var rows
  var row
  var cells
  var index
  var position
  var size
  var value
  var spacing
  var before
  var after

  alignment = alignment ? alignment.concat() : []

  if (delimiter === null || delimiter === undefined) {
    delimiter = space + verticalBar + space
  }

  if (start === null || start === undefined) {
    start = verticalBar + space
  }

  if (end === null || end === undefined) {
    end = space + verticalBar
  }

  while (++rowIndex < rowLength) {
    row = table[rowIndex]

    index = -1

    if (row.length > cellCount) {
      cellCount = row.length
    }

    while (++index < cellCount) {
      position = row[index] ? dotindex(row[index]) : null

      if (!sizes[index]) {
        sizes[index] = minCellSize
      }

      if (position > sizes[index]) {
        sizes[index] = position
      }
    }
  }

  if (typeof alignment === 'string') {
    alignment = pad(cellCount, alignment).split('')
  }

  // Make sure only valid alignments are used.
  index = -1

  while (++index < cellCount) {
    align = alignment[index]

    if (typeof align === 'string') {
      align = align.charAt(0).toLowerCase()
    }

    if (
      align !== lowercaseL &&
      align !== lowercaseR &&
      align !== lowercaseC &&
      align !== dot
    ) {
      align = ''
    }

    alignment[index] = align
  }

  rowIndex = -1
  rows = []

  while (++rowIndex < rowLength) {
    row = table[rowIndex]

    index = -1
    cells = []

    while (++index < cellCount) {
      value = row[index]

      value = stringify(value)

      if (alignment[index] === dot) {
        position = dotindex(value)

        size =
          sizes[index] +
          (dotRe.test(value) ? 0 : 1) -
          (calculateStringLength(value) - position)

        cells[index] = value + pad(size - 1)
      } else {
        cells[index] = value
      }
    }

    rows[rowIndex] = cells
  }

  sizes = []
  rowIndex = -1

  while (++rowIndex < rowLength) {
    cells = rows[rowIndex]

    index = -1

    while (++index < cellCount) {
      value = cells[index]

      if (!sizes[index]) {
        sizes[index] = minCellSize
      }

      size = calculateStringLength(value)

      if (size > sizes[index]) {
        sizes[index] = size
      }
    }
  }

  rowIndex = -1

  while (++rowIndex < rowLength) {
    cells = rows[rowIndex]

    index = -1

    if (settings.pad !== false) {
      while (++index < cellCount) {
        value = cells[index]

        position = sizes[index] - (calculateStringLength(value) || 0)
        spacing = pad(position)

        if (alignment[index] === lowercaseR || alignment[index] === dot) {
          value = spacing + value
        } else if (alignment[index] === lowercaseC) {
          position /= 2

          if (position % 1 === 0) {
            before = position
            after = position
          } else {
            before = position + 0.5
            after = position - 0.5
          }

          value = pad(before) + value + pad(after)
        } else {
          value += spacing
        }

        cells[index] = value
      }
    }

    rows[rowIndex] = cells.join(delimiter)
  }

  if (settings.rule !== false) {
    index = -1
    rule = []

    while (++index < cellCount) {
      // When `pad` is false, make the rule the same size as the first row.
      if (settings.pad === false) {
        value = table[0][index]
        spacing = calculateStringLength(stringify(value))
        spacing = spacing > minCellSize ? spacing : minCellSize
      } else {
        spacing = sizes[index]
      }

      align = alignment[index]

      // When `align` is left, don't add colons.
      value = align === lowercaseR || align === '' ? dash : colon
      value += pad(spacing - 2, dash)
      value += align !== lowercaseL && align !== '' ? colon : dash

      rule[index] = value
    }

    rows.splice(1, 0, rule.join(delimiter))
  }

  return start + rows.join(end + lineFeed + start) + end
}

function stringify(value) {
  return value === null || value === undefined ? '' : String(value)
}

// Get the length of `value`.
function lengthNoop(value) {
  return String(value).length
}

// Get a string consisting of `length` `character`s.
function pad(length, character) {
  return new Array(length + 1).join(character || space)
}

// Get the position of the last dot in `value`.
function dotindex(value) {
  var match = lastDotRe.exec(value)

  return match ? match.index + 1 : value.length
}


/***/ }),

/***/ "./node_modules/mdast-util-compact/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mdast-util-compact/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/mdast-util-compact/node_modules/unist-util-visit/index.js")

module.exports = compact

// Make an mdast tree compact by merging adjacent text nodes.
function compact(tree, commonmark) {
  visit(tree, visitor)

  return tree

  function visitor(child, index, parent) {
    var siblings = parent ? parent.children : []
    var prev = index && siblings[index - 1]

    if (
      prev &&
      child.type === prev.type &&
      mergeable(prev, commonmark) &&
      mergeable(child, commonmark)
    ) {
      if (child.value) {
        prev.value += child.value
      }

      if (child.children) {
        prev.children = prev.children.concat(child.children)
      }

      siblings.splice(index, 1)

      if (prev.position && child.position) {
        prev.position.end = child.position.end
      }

      return index
    }
  }
}

function mergeable(node, commonmark) {
  var start
  var end

  if (node.type === 'text') {
    if (!node.position) {
      return true
    }

    start = node.position.start
    end = node.position.end

    // Only merge nodes which occupy the same size as their `value`.
    return (
      start.line !== end.line || end.column - start.column === node.value.length
    )
  }

  return commonmark && node.type === 'blockquote'
}


/***/ }),

/***/ "./node_modules/mdast-util-compact/node_modules/unist-util-visit-parents/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/mdast-util-compact/node_modules/unist-util-visit-parents/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents

var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  var is

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  is = convert(test)

  one(tree, null, [])

  // Visit a single node.
  function one(node, index, parents) {
    var result = []
    var subresult

    if (!test || is(node, index, parents[parents.length - 1] || null)) {
      result = toResult(visitor(node, parents))

      if (result[0] === EXIT) {
        return result
      }
    }

    if (node.children && result[0] !== SKIP) {
      subresult = toResult(all(node.children, parents.concat(node)))
      return subresult[0] === EXIT ? subresult : result
    }

    return result
  }

  // Visit children in `parent`.
  function all(children, parents) {
    var min = -1
    var step = reverse ? -1 : 1
    var index = (reverse ? children.length : min) + step
    var result

    while (index > min && index < children.length) {
      result = one(children[index], index, parents)

      if (result[0] === EXIT) {
        return result
      }

      index = typeof result[1] === 'number' ? result[1] : index + step
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}


/***/ }),

/***/ "./node_modules/mdast-util-compact/node_modules/unist-util-visit/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mdast-util-compact/node_modules/unist-util-visit/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/mdast-util-compact/node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-phrasing/index.js":
/*!***************************************************!*\
  !*** ./node_modules/mdast-util-phrasing/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")

var isPhrasing = convert([
  'break',
  'delete',
  'emphasis',
  'footnote',
  'footnoteReference',
  'image',
  'imageReference',
  'inlineCode',
  'link',
  'linkReference',
  'strong',
  'text'
])

isPhrasing.displayName = 'isPhrasing'
module.exports = isPhrasing


/***/ }),

/***/ "./node_modules/mdast-util-to-string/index.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-string/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = toString

// Get the text content of a node.  If the node itself does not expose
// plain-text fields, `toString` will recursivly try its children.
function toString(node) {
  return (
    valueOf(node) ||
    (node.children && node.children.map(toString).join('')) ||
    ''
  )
}

// Get the value of `node`.  Checks, `value`, `alt`, and `title`, in that order.
function valueOf(node) {
  return (
    (node && node.value ? node.value : node.alt ? node.alt : node.title) || ''
  )
}


/***/ }),

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

var el

var semicolon = 59 //  ';'

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "./node_modules/parse-entities/index.js":
/*!**********************************************!*\
  !*** ./node_modules/parse-entities/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var legacy = __webpack_require__(/*! character-entities-legacy */ "./node_modules/character-entities-legacy/index.json")
var invalid = __webpack_require__(/*! character-reference-invalid */ "./node_modules/character-reference-invalid/index.json")
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")
var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "./node_modules/is-hexadecimal/index.js")
var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "./node_modules/is-alphanumerical/index.js")
var decodeEntity = __webpack_require__(/*! ./decode-entity */ "./node_modules/parse-entities/decode-entity.browser.js")

module.exports = parseEntities

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode
var noop = Function.prototype

// Default settings.
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}

// Characters.
var tab = 9 // '\t'
var lineFeed = 10 // '\n'
var formFeed = 12 //  '\f'
var space = 32 // ' '
var ampersand = 38 //  '&'
var semicolon = 59 //  ';'
var lessThan = 60 //  '<'
var equalsTo = 61 //  '='
var numberSign = 35 //  '#'
var uppercaseX = 88 //  'X'
var lowercaseX = 120 //  'x'
var replacementCharacter = 65533 // '�'

// Reference types.
var name = 'named'
var hexa = 'hexadecimal'
var deci = 'decimal'

// Map of bases.
var bases = {}

bases[hexa] = 16
bases[deci] = 10

// Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).
var tests = {}

tests[name] = alphanumerical
tests[deci] = decimal
tests[hexa] = hexadecimal

// Warning types.
var namedNotTerminated = 1
var numericNotTerminated = 2
var namedEmpty = 3
var numericEmpty = 4
var namedUnknown = 5
var numericDisallowed = 6
var numericProhibited = 7

// Warning messages.
var messages = {}

messages[namedNotTerminated] =
  'Named character references must be terminated by a semicolon'
messages[numericNotTerminated] =
  'Numeric character references must be terminated by a semicolon'
messages[namedEmpty] = 'Named character references cannot be empty'
messages[numericEmpty] = 'Numeric character references cannot be empty'
messages[namedUnknown] = 'Named character references must be known'
messages[numericDisallowed] =
  'Numeric character references cannot be disallowed'
messages[numericProhibited] =
  'Numeric character references cannot be outside the permissible Unicode range'

// Wrap to ensure clean parameters are given to `parse`.
function parseEntities(value, options) {
  var settings = {}
  var option
  var key

  if (!options) {
    options = {}
  }

  for (key in defaults) {
    option = options[key]
    settings[key] =
      option === null || option === undefined ? defaults[key] : option
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || []
    settings.position = settings.position.start
  }

  return parse(value, settings)
}

// Parse entities.
// eslint-disable-next-line complexity
function parse(value, settings) {
  var additional = settings.additional
  var nonTerminated = settings.nonTerminated
  var handleText = settings.text
  var handleReference = settings.reference
  var handleWarning = settings.warning
  var textContext = settings.textContext
  var referenceContext = settings.referenceContext
  var warningContext = settings.warningContext
  var pos = settings.position
  var indent = settings.indent || []
  var length = value.length
  var index = 0
  var lines = -1
  var column = pos.column || 1
  var line = pos.line || 1
  var queue = ''
  var result = []
  var entityCharacters
  var namedEntity
  var terminated
  var characters
  var character
  var reference
  var following
  var warning
  var reason
  var output
  var entity
  var begin
  var start
  var type
  var test
  var prev
  var next
  var diff
  var end

  if (typeof additional === 'string') {
    additional = additional.charCodeAt(0)
  }

  // Cache the current point.
  prev = now()

  // Wrap `handleWarning`.
  warning = handleWarning ? parseError : noop

  // Ensure the algorithm walks over the first character and the end (inclusive).
  index--
  length++

  while (++index < length) {
    // If the previous character was a newline.
    if (character === lineFeed) {
      column = indent[lines] || 1
    }

    character = value.charCodeAt(index)

    if (character === ampersand) {
      following = value.charCodeAt(index + 1)

      // The behaviour depends on the identity of the next character.
      if (
        following === tab ||
        following === lineFeed ||
        following === formFeed ||
        following === space ||
        following === ampersand ||
        following === lessThan ||
        following !== following ||
        (additional && following === additional)
      ) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character)
        column++

        continue
      }

      start = index + 1
      begin = start
      end = start

      if (following === numberSign) {
        // Numerical entity.
        end = ++begin

        // The behaviour further depends on the next character.
        following = value.charCodeAt(end)

        if (following === uppercaseX || following === lowercaseX) {
          // ASCII hex digits.
          type = hexa
          end = ++begin
        } else {
          // ASCII digits.
          type = deci
        }
      } else {
        // Named entity.
        type = name
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      test = tests[type]
      end--

      while (++end < length) {
        following = value.charCodeAt(end)

        if (!test(following)) {
          break
        }

        characters += fromCharCode(following)

        // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.
        if (type === name && own.call(legacy, characters)) {
          entityCharacters = characters
          entity = legacy[characters]
        }
      }

      terminated = value.charCodeAt(end) === semicolon

      if (terminated) {
        end++

        namedEntity = type === name ? decodeEntity(characters) : false

        if (namedEntity) {
          entityCharacters = characters
          entity = namedEntity
        }
      }

      diff = 1 + end - start

      if (!terminated && !nonTerminated) {
        // Empty.
      } else if (!characters) {
        // An empty (possible) entity is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== name) {
          warning(numericEmpty, diff)
        }
      } else if (type === name) {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(namedUnknown, 1)
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          // If the reference is not terminated, warn.
          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty

            if (settings.attribute) {
              following = value.charCodeAt(end)

              if (following === equalsTo) {
                warning(reason, diff)
                entity = null
              } else if (alphanumerical(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            } else {
              warning(reason, diff)
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          // All non-terminated numeric entities are not rendered, and trigger a
          // warning.
          warning(numericNotTerminated, diff)
        }

        // When terminated and number, parse as either hexadecimal or decimal.
        reference = parseInt(characters, bases[type])

        // Trigger a warning when the parsed number is prohibited, and replace
        // with replacement character.
        if (prohibited(reference)) {
          warning(numericProhibited, diff)
          reference = fromCharCode(replacementCharacter)
        } else if (reference in invalid) {
          // Trigger a warning when the parsed number is disallowed, and replace
          // by an alternative.
          warning(numericDisallowed, diff)
          reference = invalid[reference]
        } else {
          // Parse the number.
          output = ''

          // Trigger a warning when the parsed number should not be used.
          if (disallowed(reference)) {
            warning(numericDisallowed, diff)
          }

          // Stringify the number.
          if (reference > 0xffff) {
            reference -= 0x10000
            output += fromCharCode((reference >>> (10 & 0x3ff)) | 0xd800)
            reference = 0xdc00 | (reference & 0x3ff)
          }

          reference = output + fromCharCode(reference)
        }
      }

      // Found it!
      // First eat the queued characters as normal text, then eat an entity.
      if (reference) {
        flush()

        prev = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (handleReference) {
          handleReference.call(
            referenceContext,
            reference,
            {start: prev, end: next},
            value.slice(start - 1, end)
          )
        }

        prev = next
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (
        character === 10 // Line feed
      ) {
        line++
        lines++
        column = 0
      }

      if (character === character) {
        queue += fromCharCode(character)
        column++
      } else {
        flush()
      }
    }
  }

  // Return the reduced nodes, and any possible warnings.
  return result.join('')

  // Get current position.
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    }
  }

  // “Throw” a parse-error: a warning.
  function parseError(code, offset) {
    var position = now()

    position.column += offset
    position.offset += offset

    handleWarning.call(warningContext, messages[code], position, code)
  }

  // Flush `queue` (normal text).
  // Macro invoked before each entity and at the end of `value`.
  // Does nothing when `queue` is empty.
  function flush() {
    if (queue) {
      result.push(queue)

      if (handleText) {
        handleText.call(textContext, queue, {start: prev, end: now()})
      }

      queue = ''
    }
  }
}

// Check if `character` is outside the permissible unicode range.
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

// Check if `character` is disallowed.
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/property-information/find.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/find.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! ./normalize */ "./node_modules/property-information/normalize.js")
var DefinedInfo = __webpack_require__(/*! ./lib/util/defined-info */ "./node_modules/property-information/lib/util/defined-info.js")
var Info = __webpack_require__(/*! ./lib/util/info */ "./node_modules/property-information/lib/util/info.js")

var data = 'data'

module.exports = find

var valid = /^data[-a-z0-9.:_]+$/i
var dash = /-[a-z]/g
var cap = /[A-Z]/g

function find(schema, value) {
  var normal = normalize(value)
  var prop = value
  var Type = Info

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value)
    } else {
      value = datasetToAttribute(value)
    }

    Type = DefinedInfo
  }

  return new Type(prop, value)
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase)
  return data + value.charAt(0).toUpperCase() + value.slice(1)
}

function datasetToAttribute(property) {
  var value = property.slice(4)

  if (dash.test(value)) {
    return property
  }

  value = value.replace(cap, kebab)

  if (value.charAt(0) !== '-') {
    value = '-' + value
  }

  return data + value
}

function kebab($0) {
  return '-' + $0.toLowerCase()
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ "./node_modules/property-information/html.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/html.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(/*! ./lib/util/merge */ "./node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__(/*! ./lib/xlink */ "./node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__(/*! ./lib/xml */ "./node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__(/*! ./lib/xmlns */ "./node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__(/*! ./lib/aria */ "./node_modules/property-information/lib/aria.js")
var html = __webpack_require__(/*! ./lib/html */ "./node_modules/property-information/lib/html.js")

module.exports = merge([xml, xlink, xmlns, aria, html])


/***/ }),

/***/ "./node_modules/property-information/lib/aria.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/aria.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated

module.exports = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
})

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/html.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

var boolean = types.boolean
var overloadedBoolean = types.overloadedBoolean
var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated

module.exports = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/svg.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/svg.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseSensitiveTransform = __webpack_require__(/*! ./util/case-sensitive-transform */ "./node_modules/property-information/lib/util/case-sensitive-transform.js")

var boolean = types.boolean
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated
var commaOrSpaceSeparated = types.commaOrSpaceSeparated

module.exports = create({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null, // SEMI_COLON_SEPARATED
    keySplines: null, // SEMI_COLON_SEPARATED
    keyTimes: null, // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-insensitive-transform.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-insensitive-transform.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var caseSensitiveTransform = __webpack_require__(/*! ./case-sensitive-transform */ "./node_modules/property-information/lib/util/case-sensitive-transform.js")

module.exports = caseInsensitiveTransform

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-sensitive-transform.js":
/*!********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-sensitive-transform.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = caseSensitiveTransform

function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! ../../normalize */ "./node_modules/property-information/normalize.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")
var DefinedInfo = __webpack_require__(/*! ./defined-info */ "./node_modules/property-information/lib/util/defined-info.js")

module.exports = create

function create(definition) {
  var space = definition.space
  var mustUseProperty = definition.mustUseProperty || []
  var attributes = definition.attributes || {}
  var props = definition.properties
  var transform = definition.transform
  var property = {}
  var normal = {}
  var prop
  var info

  for (prop in props) {
    info = new DefinedInfo(
      prop,
      transform(attributes, prop),
      props[prop],
      space
    )

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true
    }

    property[prop] = info

    normal[normalize(prop)] = prop
    normal[normalize(info.attribute)] = prop
  }

  return new Schema(property, normal, space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/defined-info.js":
/*!********************************************************************!*\
  !*** ./node_modules/property-information/lib/util/defined-info.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Info = __webpack_require__(/*! ./info */ "./node_modules/property-information/lib/util/info.js")
var types = __webpack_require__(/*! ./types */ "./node_modules/property-information/lib/util/types.js")

module.exports = DefinedInfo

DefinedInfo.prototype = new Info()
DefinedInfo.prototype.defined = true

var checks = [
  'boolean',
  'booleanish',
  'overloadedBoolean',
  'number',
  'commaSeparated',
  'spaceSeparated',
  'commaOrSpaceSeparated'
]
var checksLength = checks.length

function DefinedInfo(property, attribute, mask, space) {
  var index = -1
  var check

  mark(this, 'space', space)

  Info.call(this, property, attribute)

  while (++index < checksLength) {
    check = checks[index]
    mark(this, check, (mask & types[check]) === types[check])
  }
}

function mark(values, key, value) {
  if (value) {
    values[key] = value
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/info.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/util/info.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Info

var proto = Info.prototype

proto.space = null
proto.attribute = null
proto.property = null
proto.boolean = false
proto.booleanish = false
proto.overloadedBoolean = false
proto.number = false
proto.commaSeparated = false
proto.spaceSeparated = false
proto.commaOrSpaceSeparated = false
proto.mustUseProperty = false
proto.defined = false

function Info(property, attribute) {
  this.property = property
  this.attribute = attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/merge.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/merge.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")

module.exports = merge

function merge(definitions) {
  var length = definitions.length
  var property = []
  var normal = []
  var index = -1
  var info
  var space

  while (++index < length) {
    info = definitions[index]
    property.push(info.property)
    normal.push(info.normal)
    space = info.space
  }

  return new Schema(
    xtend.apply(null, property),
    xtend.apply(null, normal),
    space
  )
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/schema.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/schema.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Schema

var proto = Schema.prototype

proto.space = null
proto.normal = {}
proto.property = {}

function Schema(property, normal, space) {
  this.property = property
  this.normal = normal

  if (space) {
    this.space = space
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/types.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var powers = 0

exports.boolean = increment()
exports.booleanish = increment()
exports.overloadedBoolean = increment()
exports.number = increment()
exports.spaceSeparated = increment()
exports.commaSeparated = increment()
exports.commaOrSpaceSeparated = increment()

function increment() {
  return Math.pow(2, ++powers)
}


/***/ }),

/***/ "./node_modules/property-information/lib/xlink.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xlink.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xml.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/xml.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
})

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xmlns.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xmlns.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

module.exports = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/normalize.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/normalize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = normalize

function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/svg.js":
/*!**************************************************!*\
  !*** ./node_modules/property-information/svg.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(/*! ./lib/util/merge */ "./node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__(/*! ./lib/xlink */ "./node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__(/*! ./lib/xml */ "./node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__(/*! ./lib/xmlns */ "./node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__(/*! ./lib/aria */ "./node_modules/property-information/lib/aria.js")
var svg = __webpack_require__(/*! ./lib/svg */ "./node_modules/property-information/lib/svg.js")

module.exports = merge([xml, xlink, xmlns, aria, svg])


/***/ }),

/***/ "./node_modules/rehype-dom-parse/dist/rehype-dom-parse.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/rehype-dom-parse/dist/rehype-dom-parse.mjs ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xtend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
/* harmony import */ var hast_util_from_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hast-util-from-dom */ "./node_modules/hast-util-from-dom/dist/hast-util-from-dom.js");



function parse(options) {
  var settings = xtend__WEBPACK_IMPORTED_MODULE_0__(options, this.data('settings'));

  function parser(doc, file) {
    var create = settings.fragment == null || settings.fragment ? createFragment : createDocument;
    return hast_util_from_dom__WEBPACK_IMPORTED_MODULE_1__(create(String(file)));
  }

  this.Parser = parser;
}

function createFragment(htmlString) {
  var fragment = document.createDocumentFragment();
  var tempEl = document.createElement('body');
  tempEl.innerHTML = htmlString;
  var child = tempEl.firstChild;

  while (child) {
    fragment.appendChild(child);
    child = tempEl.firstChild;
  }

  return fragment;
}

function createDocument(htmlString) {
  return new DOMParser().parseFromString(htmlString, 'text/html');
}

/* harmony default export */ __webpack_exports__["default"] = (parse);


/***/ }),

/***/ "./node_modules/rehype-minify-whitespace/index.js":
/*!********************************************************!*\
  !*** ./node_modules/rehype-minify-whitespace/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview
 *   Collapse white-space.
 *
 *   Normally, collapses to a single space.
 *   If `newlines: true`, collapses white-space containing newlines to `'\n'`
 *   instead of `' '`.
 * @example
 *   <h1>Heading</h1>
 *   <p><strong>This</strong> and <em>that</em></p>
 */



var collapseWhiteSpace = __webpack_require__(/*! collapse-white-space */ "./node_modules/collapse-white-space/index.js")
var whitespaceSensitive = __webpack_require__(/*! html-whitespace-sensitive-tag-names */ "./node_modules/html-whitespace-sensitive-tag-names/index.json")
var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/rehype-minify-whitespace/node_modules/unist-util-is/convert.js")
var modify = __webpack_require__(/*! unist-util-modify-children */ "./node_modules/unist-util-modify-children/index.js")
var element = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js")
var has = __webpack_require__(/*! hast-util-has-property */ "./node_modules/hast-util-has-property/index.js")
var embedded = __webpack_require__(/*! hast-util-embedded */ "./node_modules/hast-util-embedded/index.js")
var bodyOK = __webpack_require__(/*! hast-util-is-body-ok-link */ "./node_modules/hast-util-is-body-ok-link/index.js")
var list = __webpack_require__(/*! ./list.json */ "./node_modules/rehype-minify-whitespace/list.json")

var text = convert('text')

module.exports = collapse

function collapse(options) {
  return transform
  function transform(tree) {
    return minify(tree, options || {})
  }
}

function minify(tree, options) {
  var whitespace = options.newlines ? collapseToNewLines : collapseWhiteSpace
  var modifier = modify(visitor)
  var inside = false
  var seen = false

  visitor(tree)

  return tree

  function visitor(node, index, parent) {
    var head
    var prev
    var next
    var value
    var start
    var end

    if (text(node)) {
      prev = parent.children[index - 1]
      next = parent.children[index + 1]

      value = whitespace(node.value)
      end = value.length
      start = 0

      if (empty(value.charAt(0)) && viable(prev)) {
        start++
      }

      if (empty(value.charAt(end - 1)) && viable(next)) {
        end--
      }

      value = value.slice(start, end)

      // Remove the node if it’s collapsed entirely.
      if (!value) {
        parent.children.splice(index, 1)

        return index
      }

      node.value = value
    }

    if (!seen && !inside) {
      head = element(node, 'head')
      inside = head
      seen = head
    }

    if (node.children && !element(node, whitespaceSensitive)) {
      modifier(node)
    }

    if (head) {
      inside = false
    }
  }

  function viable(node) {
    return !node || inside || !collapsable(node)
  }
}

// Check if `node` is collapsable.
function collapsable(node) {
  return (
    text(node) ||
    element(node, list) ||
    embedded(node) ||
    bodyOK(node) ||
    (element(node, 'meta') && has(node, 'itemProp'))
  )
}

// Collapse to spaces, or newlines if they’re in a run.
function collapseToNewLines(value) {
  var result = String(value).replace(/\s+/g, function($0) {
    return $0.indexOf('\n') === -1 ? ' ' : '\n'
  })

  return result
}

function empty(character) {
  return character === ' ' || character === '\n'
}


/***/ }),

/***/ "./node_modules/rehype-minify-whitespace/list.json":
/*!*********************************************************!*\
  !*** ./node_modules/rehype-minify-whitespace/list.json ***!
  \*********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"a\",\"abbr\",\"acronym\",\"b\",\"basefont\",\"big\",\"bdi\",\"bdo\",\"blink\",\"button\",\"cite\",\"code\",\"data\",\"del\",\"dfn\",\"em\",\"font\",\"i\",\"input\",\"ins\",\"kbd\",\"keygen\",\"label\",\"mark\",\"marquee\",\"meter\",\"nobr\",\"output\",\"progress\",\"q\",\"ruby\",\"s\",\"samp\",\"select\",\"small\",\"spacer\",\"span\",\"strong\",\"sub\",\"sup\",\"textarea\",\"time\",\"tt\",\"u\",\"var\"]");

/***/ }),

/***/ "./node_modules/rehype-minify-whitespace/node_modules/unist-util-is/convert.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/rehype-minify-whitespace/node_modules/unist-util-is/convert.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = []
  var length = tests.length
  var index = -1

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ "./node_modules/rehype-remark/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rehype-remark/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hast2mdast = __webpack_require__(/*! hast-util-to-mdast */ "./node_modules/hast-util-to-mdast/index.js")

module.exports = attacher

// Attacher.
// If a destination is given, runs the destination with the new mdast tree
// (bridge-mode).
// Without destination, returns the mdast tree: further plugins run on that tree
// (mutate-mode).
function attacher(destination, options) {
  var settings

  if (destination && !destination.process) {
    settings = destination
    destination = null
  }

  settings = settings || options || {}

  if (settings.document === undefined || settings.document === null) {
    settings.document = true
  }

  return destination ? bridge(destination, settings) : mutate(settings)
}

// Bridge-mode.
// Runs the destination with the new mdast tree.
function bridge(destination, options) {
  return transformer
  function transformer(node, file, next) {
    destination.run(hast2mdast(node, options), file, done)
    function done(err) {
      next(err)
    }
  }
}

// Mutate-mode.
// Further transformers run on the mdast tree.
function mutate(options) {
  return transformer
  function transformer(node) {
    return hast2mdast(node, options)
  }
}


/***/ }),

/***/ "./node_modules/remark-stringify/index.js":
/*!************************************************!*\
  !*** ./node_modules/remark-stringify/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(/*! unherit */ "./node_modules/unherit/index.js")
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var Compiler = __webpack_require__(/*! ./lib/compiler.js */ "./node_modules/remark-stringify/lib/compiler.js")

module.exports = stringify
stringify.Compiler = Compiler

function stringify(options) {
  var Local = unherit(Compiler)
  Local.prototype.options = xtend(
    Local.prototype.options,
    this.data('settings'),
    options
  )
  this.Compiler = Local
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/compiler.js":
/*!*******************************************************!*\
  !*** ./node_modules/remark-stringify/lib/compiler.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var toggle = __webpack_require__(/*! state-toggle */ "./node_modules/state-toggle/index.js")

module.exports = Compiler

// Construct a new compiler.
function Compiler(tree, file) {
  this.inLink = false
  this.inTable = false
  this.tree = tree
  this.file = file
  this.options = xtend(this.options)
  this.setOptions({})
}

var proto = Compiler.prototype

// Enter and exit helpers. */
proto.enterLink = toggle('inLink', false)
proto.enterTable = toggle('inTable', false)
proto.enterLinkReference = __webpack_require__(/*! ./util/enter-link-reference */ "./node_modules/remark-stringify/lib/util/enter-link-reference.js")

// Configuration.
proto.options = __webpack_require__(/*! ./defaults */ "./node_modules/remark-stringify/lib/defaults.js")
proto.setOptions = __webpack_require__(/*! ./set-options */ "./node_modules/remark-stringify/lib/set-options.js")

proto.compile = __webpack_require__(/*! ./macro/compile */ "./node_modules/remark-stringify/lib/macro/compile.js")
proto.visit = __webpack_require__(/*! ./macro/one */ "./node_modules/remark-stringify/lib/macro/one.js")
proto.all = __webpack_require__(/*! ./macro/all */ "./node_modules/remark-stringify/lib/macro/all.js")
proto.block = __webpack_require__(/*! ./macro/block */ "./node_modules/remark-stringify/lib/macro/block.js")
proto.visitOrderedItems = __webpack_require__(/*! ./macro/ordered-items */ "./node_modules/remark-stringify/lib/macro/ordered-items.js")
proto.visitUnorderedItems = __webpack_require__(/*! ./macro/unordered-items */ "./node_modules/remark-stringify/lib/macro/unordered-items.js")

// Expose visitors.
proto.visitors = {
  root: __webpack_require__(/*! ./visitors/root */ "./node_modules/remark-stringify/lib/visitors/root.js"),
  text: __webpack_require__(/*! ./visitors/text */ "./node_modules/remark-stringify/lib/visitors/text.js"),
  heading: __webpack_require__(/*! ./visitors/heading */ "./node_modules/remark-stringify/lib/visitors/heading.js"),
  paragraph: __webpack_require__(/*! ./visitors/paragraph */ "./node_modules/remark-stringify/lib/visitors/paragraph.js"),
  blockquote: __webpack_require__(/*! ./visitors/blockquote */ "./node_modules/remark-stringify/lib/visitors/blockquote.js"),
  list: __webpack_require__(/*! ./visitors/list */ "./node_modules/remark-stringify/lib/visitors/list.js"),
  listItem: __webpack_require__(/*! ./visitors/list-item */ "./node_modules/remark-stringify/lib/visitors/list-item.js"),
  inlineCode: __webpack_require__(/*! ./visitors/inline-code */ "./node_modules/remark-stringify/lib/visitors/inline-code.js"),
  code: __webpack_require__(/*! ./visitors/code */ "./node_modules/remark-stringify/lib/visitors/code.js"),
  html: __webpack_require__(/*! ./visitors/html */ "./node_modules/remark-stringify/lib/visitors/html.js"),
  thematicBreak: __webpack_require__(/*! ./visitors/thematic-break */ "./node_modules/remark-stringify/lib/visitors/thematic-break.js"),
  strong: __webpack_require__(/*! ./visitors/strong */ "./node_modules/remark-stringify/lib/visitors/strong.js"),
  emphasis: __webpack_require__(/*! ./visitors/emphasis */ "./node_modules/remark-stringify/lib/visitors/emphasis.js"),
  break: __webpack_require__(/*! ./visitors/break */ "./node_modules/remark-stringify/lib/visitors/break.js"),
  delete: __webpack_require__(/*! ./visitors/delete */ "./node_modules/remark-stringify/lib/visitors/delete.js"),
  link: __webpack_require__(/*! ./visitors/link */ "./node_modules/remark-stringify/lib/visitors/link.js"),
  linkReference: __webpack_require__(/*! ./visitors/link-reference */ "./node_modules/remark-stringify/lib/visitors/link-reference.js"),
  imageReference: __webpack_require__(/*! ./visitors/image-reference */ "./node_modules/remark-stringify/lib/visitors/image-reference.js"),
  definition: __webpack_require__(/*! ./visitors/definition */ "./node_modules/remark-stringify/lib/visitors/definition.js"),
  image: __webpack_require__(/*! ./visitors/image */ "./node_modules/remark-stringify/lib/visitors/image.js"),
  footnote: __webpack_require__(/*! ./visitors/footnote */ "./node_modules/remark-stringify/lib/visitors/footnote.js"),
  footnoteReference: __webpack_require__(/*! ./visitors/footnote-reference */ "./node_modules/remark-stringify/lib/visitors/footnote-reference.js"),
  footnoteDefinition: __webpack_require__(/*! ./visitors/footnote-definition */ "./node_modules/remark-stringify/lib/visitors/footnote-definition.js"),
  table: __webpack_require__(/*! ./visitors/table */ "./node_modules/remark-stringify/lib/visitors/table.js"),
  tableCell: __webpack_require__(/*! ./visitors/table-cell */ "./node_modules/remark-stringify/lib/visitors/table-cell.js")
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/defaults.js":
/*!*******************************************************!*\
  !*** ./node_modules/remark-stringify/lib/defaults.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  gfm: true,
  commonmark: false,
  pedantic: false,
  entities: 'false',
  setext: false,
  closeAtx: false,
  looseTable: false,
  spacedTable: true,
  paddedTable: true,
  stringLength: stringLength,
  incrementListMarker: true,
  fences: false,
  fence: '`',
  bullet: '-',
  listItemIndent: 'tab',
  rule: '*',
  ruleSpaces: true,
  ruleRepetition: 3,
  strong: '*',
  emphasis: '_'
}

function stringLength(value) {
  return value.length
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/escape.js":
/*!*****************************************************!*\
  !*** ./node_modules/remark-stringify/lib/escape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")
var alphanumeric = __webpack_require__(/*! is-alphanumeric */ "./node_modules/is-alphanumeric/index.js")
var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js")
var escapes = __webpack_require__(/*! markdown-escapes */ "./node_modules/markdown-escapes/index.js")
var prefix = __webpack_require__(/*! ./util/entity-prefix-length */ "./node_modules/remark-stringify/lib/util/entity-prefix-length.js")

module.exports = factory

var tab = '\t'
var lineFeed = '\n'
var space = ' '
var numberSign = '#'
var ampersand = '&'
var leftParenthesis = '('
var rightParenthesis = ')'
var asterisk = '*'
var plusSign = '+'
var dash = '-'
var dot = '.'
var colon = ':'
var lessThan = '<'
var greaterThan = '>'
var leftSquareBracket = '['
var backslash = '\\'
var rightSquareBracket = ']'
var underscore = '_'
var graveAccent = '`'
var verticalBar = '|'
var tilde = '~'
var exclamationMark = '!'

var entities = {
  '<': '&lt;',
  ':': '&#x3A;',
  '&': '&amp;',
  '|': '&#x7C;',
  '~': '&#x7E;'
}

var shortcut = 'shortcut'
var mailto = 'mailto'
var https = 'https'
var http = 'http'

var blankExpression = /\n\s*$/

// Factory to escape characters.
function factory(options) {
  return escape

  // Escape punctuation characters in a node’s value.
  function escape(value, node, parent) {
    var self = this
    var gfm = options.gfm
    var commonmark = options.commonmark
    var pedantic = options.pedantic
    var markers = commonmark ? [dot, rightParenthesis] : [dot]
    var siblings = parent && parent.children
    var index = siblings && siblings.indexOf(node)
    var prev = siblings && siblings[index - 1]
    var next = siblings && siblings[index + 1]
    var length = value.length
    var escapable = escapes(options)
    var position = -1
    var queue = []
    var escaped = queue
    var afterNewLine
    var character
    var wordCharBefore
    var wordCharAfter
    var offset
    var replace

    if (prev) {
      afterNewLine = text(prev) && blankExpression.test(prev.value)
    } else {
      afterNewLine =
        !parent || parent.type === 'root' || parent.type === 'paragraph'
    }

    while (++position < length) {
      character = value.charAt(position)
      replace = false

      if (character === '\n') {
        afterNewLine = true
      } else if (
        character === backslash ||
        character === graveAccent ||
        character === asterisk ||
        character === leftSquareBracket ||
        character === lessThan ||
        (character === ampersand && prefix(value.slice(position)) > 0) ||
        (character === rightSquareBracket && self.inLink) ||
        (gfm && character === tilde && value.charAt(position + 1) === tilde) ||
        (gfm &&
          character === verticalBar &&
          (self.inTable || alignment(value, position))) ||
        (character === underscore &&
          // Delegate leading/trailing underscores to the multinode version below.
          position > 0 &&
          position < length - 1 &&
          (pedantic ||
            !alphanumeric(value.charAt(position - 1)) ||
            !alphanumeric(value.charAt(position + 1)))) ||
        (gfm && !self.inLink && character === colon && protocol(queue.join('')))
      ) {
        replace = true
      } else if (afterNewLine) {
        if (
          character === greaterThan ||
          character === numberSign ||
          character === asterisk ||
          character === dash ||
          character === plusSign
        ) {
          replace = true
        } else if (decimal(character)) {
          offset = position + 1

          while (offset < length) {
            if (!decimal(value.charAt(offset))) {
              break
            }

            offset++
          }

          if (markers.indexOf(value.charAt(offset)) !== -1) {
            next = value.charAt(offset + 1)

            if (!next || next === space || next === tab || next === lineFeed) {
              queue.push(value.slice(position, offset))
              position = offset
              character = value.charAt(position)
              replace = true
            }
          }
        }
      }

      if (afterNewLine && !whitespace(character)) {
        afterNewLine = false
      }

      queue.push(replace ? one(character) : character)
    }

    // Multi-node versions.
    if (siblings && text(node)) {
      // Check for an opening parentheses after a link-reference (which can be
      // joined by white-space).
      if (prev && prev.referenceType === shortcut) {
        position = -1
        length = escaped.length

        while (++position < length) {
          character = escaped[position]

          if (character === space || character === tab) {
            continue
          }

          if (character === leftParenthesis || character === colon) {
            escaped[position] = one(character)
          }

          break
        }

        // If the current node is all spaces / tabs, preceded by a shortcut,
        // and followed by a text starting with `(`, escape it.
        if (
          text(next) &&
          position === length &&
          next.value.charAt(0) === leftParenthesis
        ) {
          escaped.push(backslash)
        }
      }

      // Ensure non-auto-links are not seen as links.  This pattern needs to
      // check the preceding nodes too.
      if (
        gfm &&
        !self.inLink &&
        text(prev) &&
        value.charAt(0) === colon &&
        protocol(prev.value.slice(-6))
      ) {
        escaped[0] = one(colon)
      }

      // Escape ampersand if it would otherwise start an entity.
      if (
        text(next) &&
        value.charAt(length - 1) === ampersand &&
        prefix(ampersand + next.value) !== 0
      ) {
        escaped[escaped.length - 1] = one(ampersand)
      }

      // Escape exclamation marks immediately followed by links.
      if (
        next &&
        next.type === 'link' &&
        value.charAt(length - 1) === exclamationMark
      ) {
        escaped[escaped.length - 1] = one(exclamationMark)
      }

      // Escape double tildes in GFM.
      if (
        gfm &&
        text(next) &&
        value.charAt(length - 1) === tilde &&
        next.value.charAt(0) === tilde
      ) {
        escaped.splice(escaped.length - 1, 0, backslash)
      }

      // Escape underscores, but not mid-word (unless in pedantic mode).
      wordCharBefore = text(prev) && alphanumeric(prev.value.slice(-1))
      wordCharAfter = text(next) && alphanumeric(next.value.charAt(0))

      if (length === 1) {
        if (
          value === underscore &&
          (pedantic || !wordCharBefore || !wordCharAfter)
        ) {
          escaped.unshift(backslash)
        }
      } else {
        if (
          value.charAt(0) === underscore &&
          (pedantic || !wordCharBefore || !alphanumeric(value.charAt(1)))
        ) {
          escaped.unshift(backslash)
        }

        if (
          value.charAt(length - 1) === underscore &&
          (pedantic ||
            !wordCharAfter ||
            !alphanumeric(value.charAt(length - 2)))
        ) {
          escaped.splice(escaped.length - 1, 0, backslash)
        }
      }
    }

    return escaped.join('')

    function one(character) {
      return escapable.indexOf(character) === -1
        ? entities[character]
        : backslash + character
    }
  }
}

// Check if `index` in `value` is inside an alignment row.
function alignment(value, index) {
  var start = value.lastIndexOf(lineFeed, index)
  var end = value.indexOf(lineFeed, index)
  var char

  end = end === -1 ? value.length : end

  while (++start < end) {
    char = value.charAt(start)

    if (
      char !== colon &&
      char !== dash &&
      char !== space &&
      char !== verticalBar
    ) {
      return false
    }
  }

  return true
}

// Check if `node` is a text node.
function text(node) {
  return node && node.type === 'text'
}

// Check if `value` ends in a protocol.
function protocol(value) {
  var val = value.slice(-6).toLowerCase()
  return val === mailto || val.slice(-5) === https || val.slice(-4) === http
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/macro/all.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-stringify/lib/macro/all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = all

// Visit all children of `parent`.
function all(parent) {
  var self = this
  var children = parent.children
  var length = children.length
  var results = []
  var index = -1

  while (++index < length) {
    results[index] = self.visit(children[index], parent)
  }

  return results
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/macro/block.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-stringify/lib/macro/block.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = block

var lineFeed = '\n'

var blank = lineFeed + lineFeed
var triple = blank + lineFeed
var comment = blank + '<!---->' + blank

// Stringify a block node with block children (e.g., `root` or `blockquote`).
// Knows about code following a list, or adjacent lists with similar bullets,
// and places an extra line feed between them.
function block(node) {
  var self = this
  var options = self.options
  var fences = options.fences
  var gap = options.commonmark ? comment : triple
  var values = []
  var children = node.children
  var length = children.length
  var index = -1
  var prev
  var child

  while (++index < length) {
    prev = child
    child = children[index]

    if (prev) {
      // A list preceding another list that are equally ordered, or a
      // list preceding an indented code block, need a gap between them,
      // so as not to see them as one list, or content of the list,
      // respectively.
      //
      // In commonmark, only something that breaks both up can do that,
      // so we opt for an empty, invisible comment.  In other flavours,
      // two blank lines are fine.
      if (
        prev.type === 'list' &&
        ((child.type === 'list' && prev.ordered === child.ordered) ||
          (child.type === 'code' && !child.lang && !fences))
      ) {
        values.push(gap)
      } else {
        values.push(blank)
      }
    }

    values.push(self.visit(child, node))
  }

  return values.join('')
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/macro/compile.js":
/*!************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/macro/compile.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compact = __webpack_require__(/*! mdast-util-compact */ "./node_modules/mdast-util-compact/index.js")

module.exports = compile

// Stringify the given tree.
function compile() {
  return this.visit(compact(this.tree, this.options.commonmark))
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/macro/one.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-stringify/lib/macro/one.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = one

function one(node, parent) {
  var self = this
  var visitors = self.visitors

  // Fail on unknown nodes.
  if (typeof visitors[node.type] !== 'function') {
    self.file.fail(
      new Error(
        'Missing compiler for node of type `' + node.type + '`: `' + node + '`'
      ),
      node
    )
  }

  return visitors[node.type].call(self, node, parent)
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/macro/ordered-items.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/macro/ordered-items.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = orderedItems

var lineFeed = '\n'
var dot = '.'

var blank = lineFeed + lineFeed

// Visit ordered list items.
//
// Starts the list with
// `node.start` and increments each following list item
// bullet by one:
//
//     2. foo
//     3. bar
//
// In `incrementListMarker: false` mode, does not increment
// each marker and stays on `node.start`:
//
//     1. foo
//     1. bar
function orderedItems(node) {
  var self = this
  var fn = self.visitors.listItem
  var increment = self.options.incrementListMarker
  var values = []
  var start = node.start
  var children = node.children
  var length = children.length
  var index = -1
  var bullet

  start = start == null ? 1 : start

  while (++index < length) {
    bullet = (increment ? start + index : start) + dot
    values[index] = fn.call(self, children[index], node, index, bullet)
  }

  return values.join(node.spread ? blank : lineFeed)
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/macro/unordered-items.js":
/*!********************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/macro/unordered-items.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = unorderedItems

var lineFeed = '\n'

var blank = lineFeed + lineFeed

// Visit unordered list items.  Uses `options.bullet` as each item’s bullet.
function unorderedItems(node) {
  var self = this
  var bullet = self.options.bullet
  var fn = self.visitors.listItem
  var children = node.children
  var length = children.length
  var index = -1
  var values = []

  while (++index < length) {
    values[index] = fn.call(self, children[index], node, index, bullet)
  }

  return values.join(node.spread ? blank : lineFeed)
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/set-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-stringify/lib/set-options.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var encode = __webpack_require__(/*! stringify-entities */ "./node_modules/stringify-entities/index.js")
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/remark-stringify/lib/defaults.js")
var escapeFactory = __webpack_require__(/*! ./escape */ "./node_modules/remark-stringify/lib/escape.js")
var identity = __webpack_require__(/*! ./util/identity */ "./node_modules/remark-stringify/lib/util/identity.js")

module.exports = setOptions

// Map of applicable enums.
var maps = {
  entities: {true: true, false: true, numbers: true, escape: true},
  bullet: {'*': true, '-': true, '+': true},
  rule: {'-': true, _: true, '*': true},
  listItemIndent: {tab: true, mixed: true, 1: true},
  emphasis: {_: true, '*': true},
  strong: {_: true, '*': true},
  fence: {'`': true, '~': true}
}

// Expose `validate`.
var validate = {
  boolean: validateBoolean,
  string: validateString,
  number: validateNumber,
  function: validateFunction
}

// Set options.  Does not overwrite previously set options.
function setOptions(options) {
  var self = this
  var current = self.options
  var ruleRepetition
  var key

  if (options == null) {
    options = {}
  } else if (typeof options === 'object') {
    options = xtend(options)
  } else {
    throw new Error('Invalid value `' + options + '` for setting `options`')
  }

  for (key in defaults) {
    validate[typeof defaults[key]](options, key, current[key], maps[key])
  }

  ruleRepetition = options.ruleRepetition

  if (ruleRepetition && ruleRepetition < 3) {
    raise(ruleRepetition, 'options.ruleRepetition')
  }

  self.encode = encodeFactory(String(options.entities))
  self.escape = escapeFactory(options)

  self.options = options

  return self
}

// Validate a value to be boolean. Defaults to `def`.  Raises an exception with
// `context[name]` when not a boolean.
function validateBoolean(context, name, def) {
  var value = context[name]

  if (value == null) {
    value = def
  }

  if (typeof value !== 'boolean') {
    raise(value, 'options.' + name)
  }

  context[name] = value
}

// Validate a value to be boolean. Defaults to `def`.  Raises an exception with
// `context[name]` when not a boolean.
function validateNumber(context, name, def) {
  var value = context[name]

  if (value == null) {
    value = def
  }

  if (isNaN(value)) {
    raise(value, 'options.' + name)
  }

  context[name] = value
}

// Validate a value to be in `map`. Defaults to `def`.  Raises an exception
// with `context[name]` when not in `map`.
function validateString(context, name, def, map) {
  var value = context[name]

  if (value == null) {
    value = def
  }

  value = String(value)

  if (!(value in map)) {
    raise(value, 'options.' + name)
  }

  context[name] = value
}

// Validate a value to be function. Defaults to `def`.  Raises an exception
// with `context[name]` when not a function.
function validateFunction(context, name, def) {
  var value = context[name]

  if (value == null) {
    value = def
  }

  if (typeof value !== 'function') {
    raise(value, 'options.' + name)
  }

  context[name] = value
}

// Factory to encode HTML entities.  Creates a no-operation function when
// `type` is `'false'`, a function which encodes using named references when
// `type` is `'true'`, and a function which encodes using numbered references
// when `type` is `'numbers'`.
function encodeFactory(type) {
  var options = {}

  if (type === 'false') {
    return identity
  }

  if (type === 'true') {
    options.useNamedReferences = true
  }

  if (type === 'escape') {
    options.escapeOnly = true
    options.useNamedReferences = true
  }

  return wrapped

  // Encode HTML entities using the bound options.
  function wrapped(value) {
    return encode(value, options)
  }
}

// Throw an exception with in its `message` `value` and `name`.
function raise(value, name) {
  throw new Error('Invalid value `' + value + '` for setting `' + name + '`')
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/util/copy-identifier-encoding.js":
/*!****************************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/util/copy-identifier-encoding.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var entityPrefixLength = __webpack_require__(/*! ./entity-prefix-length */ "./node_modules/remark-stringify/lib/util/entity-prefix-length.js")

module.exports = copy

var ampersand = '&'

var punctuationExppresion = /[-!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~_]/

// For shortcut and collapsed reference links, the contents is also an
// identifier, so we need to restore the original encoding and escaping
// that were present in the source string.
//
// This function takes the unescaped & unencoded value from shortcut’s
// child nodes and the identifier and encodes the former according to
// the latter.
function copy(value, identifier) {
  var length = value.length
  var count = identifier.length
  var result = []
  var position = 0
  var index = 0
  var start

  while (index < length) {
    // Take next non-punctuation characters from `value`.
    start = index

    while (index < length && !punctuationExppresion.test(value.charAt(index))) {
      index += 1
    }

    result.push(value.slice(start, index))

    // Advance `position` to the next punctuation character.
    while (
      position < count &&
      !punctuationExppresion.test(identifier.charAt(position))
    ) {
      position += 1
    }

    // Take next punctuation characters from `identifier`.
    start = position

    while (
      position < count &&
      punctuationExppresion.test(identifier.charAt(position))
    ) {
      if (identifier.charAt(position) === ampersand) {
        position += entityPrefixLength(identifier.slice(position))
      }

      position += 1
    }

    result.push(identifier.slice(start, position))

    // Advance `index` to the next non-punctuation character.
    while (index < length && punctuationExppresion.test(value.charAt(index))) {
      index += 1
    }
  }

  return result.join('')
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/util/enclose-title.js":
/*!*****************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/util/enclose-title.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = enclose

var quotationMark = '"'
var apostrophe = "'"

// There is currently no way to support nested delimiters across Markdown.pl,
// CommonMark, and GitHub (RedCarpet).  The following code supports Markdown.pl
// and GitHub.
// CommonMark is not supported when mixing double- and single quotes inside a
// title.
function enclose(title) {
  var delimiter =
    title.indexOf(quotationMark) === -1 ? quotationMark : apostrophe
  return delimiter + title + delimiter
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/util/enclose-uri.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/util/enclose-uri.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var count = __webpack_require__(/*! ccount */ "./node_modules/ccount/index.js")

module.exports = enclose

var leftParenthesis = '('
var rightParenthesis = ')'
var lessThan = '<'
var greaterThan = '>'

var expression = /\s/

// Wrap `url` in angle brackets when needed, or when
// forced.
// In links, images, and definitions, the URL part needs
// to be enclosed when it:
//
// - has a length of `0`
// - contains white-space
// - has more or less opening than closing parentheses
function enclose(uri, always) {
  if (
    always ||
    uri.length === 0 ||
    expression.test(uri) ||
    count(uri, leftParenthesis) !== count(uri, rightParenthesis)
  ) {
    return lessThan + uri + greaterThan
  }

  return uri
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/util/enter-link-reference.js":
/*!************************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/util/enter-link-reference.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var identity = __webpack_require__(/*! ./identity */ "./node_modules/remark-stringify/lib/util/identity.js")

module.exports = enter

// Shortcut and collapsed link references need no escaping and encoding during
// the processing of child nodes (it must be implied from identifier).
//
// This toggler turns encoding and escaping off for shortcut and collapsed
// references.
//
// Implies `enterLink`.
function enter(compiler, node) {
  var encode = compiler.encode
  var escape = compiler.escape
  var exitLink = compiler.enterLink()

  if (node.referenceType !== 'shortcut' && node.referenceType !== 'collapsed') {
    return exitLink
  }

  compiler.escape = identity
  compiler.encode = identity

  return exit

  function exit() {
    compiler.encode = encode
    compiler.escape = escape
    exitLink()
  }
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/util/entity-prefix-length.js":
/*!************************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/util/entity-prefix-length.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decode = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js")

module.exports = length

var ampersand = '&'

// Returns the length of HTML entity that is a prefix of the given string
// (excluding the ampersand), 0 if it does not start with an entity.
function length(value) {
  var prefix

  /* istanbul ignore if - Currently also tested for at implemention, but we
   * keep it here because that’s proper. */
  if (value.charAt(0) !== ampersand) {
    return 0
  }

  prefix = value.split(ampersand, 2).join(ampersand)

  return prefix.length - decode(prefix).length
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/util/identity.js":
/*!************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/util/identity.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = identity

function identity(value) {
  return value
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/util/label.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-stringify/lib/util/label.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = label

var leftSquareBracket = '['
var rightSquareBracket = ']'

var shortcut = 'shortcut'
var collapsed = 'collapsed'

// Stringify a reference label.
// Because link references are easily, mistakingly, created (for example,
// `[foo]`), reference nodes have an extra property depicting how it looked in
// the original document, so stringification can cause minimal changes.
function label(node) {
  var type = node.referenceType

  if (type === shortcut) {
    return ''
  }

  return (
    leftSquareBracket +
    (type === collapsed ? '' : node.label || node.identifier) +
    rightSquareBracket
  )
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/util/pad.js":
/*!*******************************************************!*\
  !*** ./node_modules/remark-stringify/lib/util/pad.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

module.exports = pad

var lineFeed = '\n'
var space = ' '

var tabSize = 4

// Pad `value` with `level * tabSize` spaces.  Respects lines.  Ignores empty
// lines.
function pad(value, level) {
  var values = value.split(lineFeed)
  var index = values.length
  var padding = repeat(space, level * tabSize)

  while (index--) {
    if (values[index].length !== 0) {
      values[index] = padding + values[index]
    }
  }

  return values.join(lineFeed)
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/blockquote.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/blockquote.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = blockquote

var lineFeed = '\n'
var space = ' '
var greaterThan = '>'

function blockquote(node) {
  var values = this.block(node).split(lineFeed)
  var result = []
  var length = values.length
  var index = -1
  var value

  while (++index < length) {
    value = values[index]
    result[index] = (value ? space : '') + value
  }

  return greaterThan + result.join(lineFeed + greaterThan)
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/break.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/break.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = lineBreak

var backslash = '\\'
var lineFeed = '\n'
var space = ' '

var commonmark = backslash + lineFeed
var normal = space + space + lineFeed

function lineBreak() {
  return this.options.commonmark ? commonmark : normal
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/code.js":
/*!************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/code.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var streak = __webpack_require__(/*! longest-streak */ "./node_modules/longest-streak/index.js")
var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")
var pad = __webpack_require__(/*! ../util/pad */ "./node_modules/remark-stringify/lib/util/pad.js")

module.exports = code

var lineFeed = '\n'
var space = ' '
var tilde = '~'
var graveAccent = '`'

// Stringify code.
// Creates indented code when:
//
// - No language tag exists
// - Not in `fences: true` mode
// - A non-empty value exists
//
// Otherwise, GFM fenced code is created:
//
// ````markdown
// ```js
// foo();
// ```
// ````
//
// When in ``fence: `~` `` mode, uses tildes as fences:
//
// ```markdown
// ~~~js
// foo();
// ~~~
// ```
//
// Knows about internal fences:
//
// `````markdown
// ````markdown
// ```javascript
// foo();
// ```
// ````
// `````
function code(node, parent) {
  var self = this
  var value = node.value
  var options = self.options
  var marker = options.fence
  var info = node.lang || ''
  var fence

  if (info && node.meta) {
    info += space + node.meta
  }

  info = self.encode(self.escape(info, node))

  // Without (needed) fences.
  if (
    !info &&
    !options.fences &&
    value &&
    value.charAt(0) !== lineFeed &&
    value.charAt(value.length - 1) !== lineFeed
  ) {
    // Throw when pedantic, in a list item which isn’t compiled using a tab.
    if (
      parent &&
      parent.type === 'listItem' &&
      options.listItemIndent !== 'tab' &&
      options.pedantic
    ) {
      self.file.fail(
        'Cannot indent code properly. See https://git.io/fxKR8',
        node.position
      )
    }

    return pad(value, 1)
  }

  // Backticks in the info string don’t work with backtick fenced code.
  // Backticks (and tildes) are fine in tilde fenced code.
  if (marker === graveAccent && info.indexOf(graveAccent) !== -1) {
    marker = tilde
  }

  fence = repeat(marker, Math.max(streak(value, marker) + 1, 3))

  return fence + info + lineFeed + value + lineFeed + fence
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/definition.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/definition.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uri = __webpack_require__(/*! ../util/enclose-uri */ "./node_modules/remark-stringify/lib/util/enclose-uri.js")
var title = __webpack_require__(/*! ../util/enclose-title */ "./node_modules/remark-stringify/lib/util/enclose-title.js")

module.exports = definition

var space = ' '
var colon = ':'
var leftSquareBracket = '['
var rightSquareBracket = ']'

// Stringify an URL definition.
//
// Is smart about enclosing `url` (see `encloseURI()`) and `title` (see
// `encloseTitle()`).
//
// ```markdown
// [foo]: <foo at bar dot com> 'An "example" e-mail'
// ```
function definition(node) {
  var content = uri(node.url)

  if (node.title) {
    content += space + title(node.title)
  }

  return (
    leftSquareBracket +
    (node.label || node.identifier) +
    rightSquareBracket +
    colon +
    space +
    content
  )
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/delete.js":
/*!**************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/delete.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = strikethrough

var tilde = '~'

var fence = tilde + tilde

function strikethrough(node) {
  return fence + this.all(node).join('') + fence
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/emphasis.js":
/*!****************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/emphasis.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = emphasis

var underscore = '_'
var asterisk = '*'

// Stringify an `emphasis`.
//
// The marker used is configurable through `emphasis`, which defaults to an
// underscore (`'_'`) but also accepts an asterisk (`'*'`):
//
// ```markdown
// *foo*
// ```
//
// In `pedantic` mode, text which itself contains an underscore will cause the
// marker to default to an asterisk instead:
//
// ```markdown
// *foo_bar*
// ```
function emphasis(node) {
  var marker = this.options.emphasis
  var content = this.all(node).join('')

  // When in pedantic mode, prevent using underscore as the marker when there
  // are underscores in the content.
  if (
    this.options.pedantic &&
    marker === underscore &&
    content.indexOf(marker) !== -1
  ) {
    marker = asterisk
  }

  return marker + content + marker
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/footnote-definition.js":
/*!***************************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/footnote-definition.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

var lineFeed = '\n'
var space = ' '
var colon = ':'
var leftSquareBracket = '['
var rightSquareBracket = ']'
var caret = '^'

var tabSize = 4
var blank = lineFeed + lineFeed
var indent = repeat(space, tabSize)

module.exports = footnoteDefinition

function footnoteDefinition(node) {
  var content = this.all(node).join(blank + indent)

  return (
    leftSquareBracket +
    caret +
    (node.label || node.identifier) +
    rightSquareBracket +
    colon +
    space +
    content
  )
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/footnote-reference.js":
/*!**************************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/footnote-reference.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = footnoteReference

var leftSquareBracket = '['
var rightSquareBracket = ']'
var caret = '^'

function footnoteReference(node) {
  return (
    leftSquareBracket +
    caret +
    (node.label || node.identifier) +
    rightSquareBracket
  )
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/footnote.js":
/*!****************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/footnote.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = footnote

var leftSquareBracket = '['
var rightSquareBracket = ']'
var caret = '^'

function footnote(node) {
  return (
    leftSquareBracket + caret + this.all(node).join('') + rightSquareBracket
  )
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/heading.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/heading.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

module.exports = heading

var lineFeed = '\n'
var space = ' '
var numberSign = '#'
var dash = '-'
var equalsTo = '='

// Stringify a heading.
//
// In `setext: true` mode and when `depth` is smaller than three, creates a
// setext header:
//
// ```markdown
// Foo
// ===
// ```
//
// Otherwise, an ATX header is generated:
//
// ```markdown
// ### Foo
// ```
//
// In `closeAtx: true` mode, the header is closed with hashes:
//
// ```markdown
// ### Foo ###
// ```
function heading(node) {
  var self = this
  var depth = node.depth
  var setext = self.options.setext
  var closeAtx = self.options.closeAtx
  var content = self.all(node).join('')
  var prefix

  if (setext && depth < 3) {
    return (
      content + lineFeed + repeat(depth === 1 ? equalsTo : dash, content.length)
    )
  }

  prefix = repeat(numberSign, node.depth)

  return prefix + space + content + (closeAtx ? space + prefix : '')
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/html.js":
/*!************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/html.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = html

function html(node) {
  return node.value
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/image-reference.js":
/*!***********************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/image-reference.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var label = __webpack_require__(/*! ../util/label */ "./node_modules/remark-stringify/lib/util/label.js")

module.exports = imageReference

var leftSquareBracket = '['
var rightSquareBracket = ']'
var exclamationMark = '!'

function imageReference(node) {
  return (
    exclamationMark +
    leftSquareBracket +
    (this.encode(node.alt, node) || '') +
    rightSquareBracket +
    label(node)
  )
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/image.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/image.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uri = __webpack_require__(/*! ../util/enclose-uri */ "./node_modules/remark-stringify/lib/util/enclose-uri.js")
var title = __webpack_require__(/*! ../util/enclose-title */ "./node_modules/remark-stringify/lib/util/enclose-title.js")

module.exports = image

var space = ' '
var leftParenthesis = '('
var rightParenthesis = ')'
var leftSquareBracket = '['
var rightSquareBracket = ']'
var exclamationMark = '!'

// Stringify an image.
//
// Is smart about enclosing `url` (see `encloseURI()`) and `title` (see
// `encloseTitle()`).
//
// ```markdown
// ![foo](</fav icon.png> 'My "favourite" icon')
// ```
//
// Supports named entities in `url`, `alt`, and `title` when in
// `settings.encode` mode.
function image(node) {
  var self = this
  var content = uri(self.encode(node.url || '', node))
  var exit = self.enterLink()
  var alt = self.encode(self.escape(node.alt || '', node))

  exit()

  if (node.title) {
    content += space + title(self.encode(node.title, node))
  }

  return (
    exclamationMark +
    leftSquareBracket +
    alt +
    rightSquareBracket +
    leftParenthesis +
    content +
    rightParenthesis
  )
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/inline-code.js":
/*!*******************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/inline-code.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var streak = __webpack_require__(/*! longest-streak */ "./node_modules/longest-streak/index.js")
var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

module.exports = inlineCode

var graveAccentChar = '`'
var lineFeed = 10 //  '\n'
var space = 32 // ' '
var graveAccent = 96 //  '`'

// Stringify inline code.
//
// Knows about internal ticks (`\``), and ensures one more tick is used to
// enclose the inline code:
//
// ````markdown
// ```foo ``bar`` baz```
// ````
//
// Even knows about inital and final ticks:
//
// ``markdown
// `` `foo ``
// `` foo` ``
// ```
function inlineCode(node) {
  var value = node.value
  var ticks = repeat(graveAccentChar, streak(value, graveAccentChar) + 1)
  var start = ticks
  var end = ticks
  var head = value.charCodeAt(0)
  var tail = value.charCodeAt(value.length - 1)
  var wrap = false
  var index
  var length

  if (head === graveAccent || tail === graveAccent) {
    wrap = true
  } else if (value.length > 2 && ws(head) && ws(tail)) {
    index = 1
    length = value.length - 1

    while (++index < length) {
      if (!ws(value.charCodeAt(index))) {
        wrap = true
        break
      }
    }
  }

  if (wrap) {
    start += ' '
    end = ' ' + end
  }

  return start + value + end
}

function ws(code) {
  return code === lineFeed || code === space
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/link-reference.js":
/*!**********************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/link-reference.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var copy = __webpack_require__(/*! ../util/copy-identifier-encoding */ "./node_modules/remark-stringify/lib/util/copy-identifier-encoding.js")
var label = __webpack_require__(/*! ../util/label */ "./node_modules/remark-stringify/lib/util/label.js")

module.exports = linkReference

var leftSquareBracket = '['
var rightSquareBracket = ']'

var shortcut = 'shortcut'
var collapsed = 'collapsed'

function linkReference(node) {
  var self = this
  var type = node.referenceType
  var exit = self.enterLinkReference(self, node)
  var value = self.all(node).join('')

  exit()

  if (type === shortcut || type === collapsed) {
    value = copy(value, node.label || node.identifier)
  }

  return leftSquareBracket + value + rightSquareBracket + label(node)
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/link.js":
/*!************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/link.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uri = __webpack_require__(/*! ../util/enclose-uri */ "./node_modules/remark-stringify/lib/util/enclose-uri.js")
var title = __webpack_require__(/*! ../util/enclose-title */ "./node_modules/remark-stringify/lib/util/enclose-title.js")

module.exports = link

var space = ' '
var leftSquareBracket = '['
var rightSquareBracket = ']'
var leftParenthesis = '('
var rightParenthesis = ')'

// Expression for a protocol:
// See <https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Generic_syntax>.
var protocol = /^[a-z][a-z+.-]+:\/?/i

// Stringify a link.
//
// When no title exists, the compiled `children` equal `url`, and `url` starts
// with a protocol, an auto link is created:
//
// ```markdown
// <http://example.com>
// ```
//
// Otherwise, is smart about enclosing `url` (see `encloseURI()`) and `title`
// (see `encloseTitle()`).
// ```
//
// ```markdown
// [foo](<foo at bar dot com> 'An "example" e-mail')
// ```
//
// Supports named entities in the `url` and `title` when in `settings.encode`
// mode.
function link(node) {
  var self = this
  var content = self.encode(node.url || '', node)
  var exit = self.enterLink()
  var escaped = self.encode(self.escape(node.url || '', node))
  var value = self.all(node).join('')

  exit()

  if (node.title == null && protocol.test(content) && escaped === value) {
    // Backslash escapes do not work in autolinks, so we do not escape.
    return uri(self.encode(node.url), true)
  }

  content = uri(content)

  if (node.title) {
    content += space + title(self.encode(self.escape(node.title, node), node))
  }

  return (
    leftSquareBracket +
    value +
    rightSquareBracket +
    leftParenthesis +
    content +
    rightParenthesis
  )
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/list-item.js":
/*!*****************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/list-item.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")
var pad = __webpack_require__(/*! ../util/pad */ "./node_modules/remark-stringify/lib/util/pad.js")

module.exports = listItem

var lineFeed = '\n'
var space = ' '
var leftSquareBracket = '['
var rightSquareBracket = ']'
var lowercaseX = 'x'

var ceil = Math.ceil
var blank = lineFeed + lineFeed

var tabSize = 4

// Stringify a list item.
//
// Prefixes the content with a checked checkbox when `checked: true`:
//
// ```markdown
// [x] foo
// ```
//
// Prefixes the content with an unchecked checkbox when `checked: false`:
//
// ```markdown
// [ ] foo
// ```
function listItem(node, parent, position, bullet) {
  var self = this
  var style = self.options.listItemIndent
  var marker = bullet || self.options.bullet
  var spread = node.spread == null ? true : node.spread
  var checked = node.checked
  var children = node.children
  var length = children.length
  var values = []
  var index = -1
  var value
  var indent
  var spacing

  while (++index < length) {
    values[index] = self.visit(children[index], node)
  }

  value = values.join(spread ? blank : lineFeed)

  if (typeof checked === 'boolean') {
    // Note: I’d like to be able to only add the space between the check and
    // the value, but unfortunately github does not support empty list-items
    // with a checkbox :(
    value =
      leftSquareBracket +
      (checked ? lowercaseX : space) +
      rightSquareBracket +
      space +
      value
  }

  if (style === '1' || (style === 'mixed' && value.indexOf(lineFeed) === -1)) {
    indent = marker.length + 1
    spacing = space
  } else {
    indent = ceil((marker.length + 1) / tabSize) * tabSize
    spacing = repeat(space, indent - marker.length)
  }

  return value
    ? marker + spacing + pad(value, indent / tabSize).slice(indent)
    : marker
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/list.js":
/*!************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/list.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = list

function list(node) {
  var fn = node.ordered ? this.visitOrderedItems : this.visitUnorderedItems
  return fn.call(this, node)
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/paragraph.js":
/*!*****************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/paragraph.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = paragraph

function paragraph(node) {
  return this.all(node).join('')
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/root.js":
/*!************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/root.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = root

var lineFeed = '\n'

// Stringify a root.
// Adds a final newline to ensure valid POSIX files. */
function root(node) {
  var doc = this.block(node)

  if (doc.charAt(doc.length - 1) !== lineFeed) {
    doc += lineFeed
  }

  return doc
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/strong.js":
/*!**************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/strong.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

module.exports = strong

// Stringify a `strong`.
//
// The marker used is configurable by `strong`, which defaults to an asterisk
// (`'*'`) but also accepts an underscore (`'_'`):
//
// ```markdown
// __foo__
// ```
function strong(node) {
  var marker = repeat(this.options.strong, 2)
  return marker + this.all(node).join('') + marker
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/table-cell.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/table-cell.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = tableCell

var lineFeed = /\r?\n/g

function tableCell(node) {
  return this.all(node)
    .join('')
    .replace(lineFeed, ' ')
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/table.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/table.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownTable = __webpack_require__(/*! markdown-table */ "./node_modules/markdown-table/index.js")

module.exports = table

var space = ' '
var verticalBar = '|'

// Stringify table.
//
// Creates a fenced table by default, but not in `looseTable: true` mode:
//
// ```markdown
//  Foo | Bar
// :-: | ---
// Baz | Qux
//
// NOTE: Be careful with `looseTable: true` mode, as a loose table inside an
// indented code block on GitHub renders as an actual table!
//
// Creates a spaced table by default, but not in `spacedTable: false`:
//
// ```markdown
// |Foo|Bar|
// |:-:|---|
// |Baz|Qux|
// ```
function table(node) {
  var self = this
  var options = self.options
  var loose = options.looseTable
  var spaced = options.spacedTable
  var pad = options.paddedTable
  var stringLength = options.stringLength
  var rows = node.children
  var index = rows.length
  var exit = self.enterTable()
  var result = []
  var start
  var end

  while (index--) {
    result[index] = self.all(rows[index])
  }

  exit()

  if (loose) {
    start = ''
    end = ''
  } else if (spaced) {
    start = verticalBar + space
    end = space + verticalBar
  } else {
    start = verticalBar
    end = verticalBar
  }

  return markdownTable(result, {
    align: node.align,
    pad: pad,
    start: start,
    end: end,
    stringLength: stringLength,
    delimiter: spaced ? space + verticalBar + space : verticalBar
  })
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/text.js":
/*!************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/text.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text

// Stringify text.
// Supports named entities in `settings.encode: true` mode:
//
// ```markdown
// AT&amp;T
// ```
//
// Supports numbered entities in `settings.encode: numbers` mode:
//
// ```markdown
// AT&#x26;T
// ```
function text(node, parent) {
  return this.encode(this.escape(node.value, node, parent), node)
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/visitors/thematic-break.js":
/*!**********************************************************************!*\
  !*** ./node_modules/remark-stringify/lib/visitors/thematic-break.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

module.exports = thematic

var space = ' '

// Stringify a `thematic-break`.
// The character used is configurable through `rule`: (`'_'`):
//
// ```markdown
// ___
// ```
//
// The number of repititions is defined through `ruleRepetition` (`6`):
//
// ```markdown
// ******
// ```
//
// Whether spaces delimit each character, is configured through `ruleSpaces`
// (`true`):
// ```markdown
// * * *
// ```
function thematic() {
  var options = this.options
  var rule = repeat(options.rule, options.ruleRepetition)
  return options.ruleSpaces ? rule.split('').join(space) : rule
}


/***/ }),

/***/ "./node_modules/repeat-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/repeat-string/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),

/***/ "./node_modules/replace-ext/index.js":
/*!*******************************************!*\
  !*** ./node_modules/replace-ext/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;


/***/ }),

/***/ "./node_modules/space-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/space-separated-tokens/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = parse
exports.stringify = stringify

var empty = ''
var space = ' '
var whiteSpace = /[ \t\n\r\f]+/g

function parse(value) {
  var input = String(value || empty).trim()
  return input === empty ? [] : input.split(whiteSpace)
}

function stringify(values) {
  return values.join(space).trim()
}


/***/ }),

/***/ "./node_modules/state-toggle/index.js":
/*!********************************************!*\
  !*** ./node_modules/state-toggle/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

// Construct a state `toggler`: a function which inverses `property` in context
// based on its current value.
// The by `toggler` returned function restores that value.
function factory(key, state, ctx) {
  return enter

  function enter() {
    var context = ctx || this
    var current = context[key]

    context[key] = !state

    return exit

    function exit() {
      context[key] = current
    }
  }
}


/***/ }),

/***/ "./node_modules/stringify-entities/dangerous.json":
/*!********************************************************!*\
  !*** ./node_modules/stringify-entities/dangerous.json ***!
  \********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"cent\",\"copy\",\"divide\",\"gt\",\"lt\",\"not\",\"para\",\"times\"]");

/***/ }),

/***/ "./node_modules/stringify-entities/index.js":
/*!**************************************************!*\
  !*** ./node_modules/stringify-entities/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var entities = __webpack_require__(/*! character-entities-html4 */ "./node_modules/character-entities-html4/index.json")
var legacy = __webpack_require__(/*! character-entities-legacy */ "./node_modules/character-entities-legacy/index.json")
var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "./node_modules/is-hexadecimal/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")
var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "./node_modules/is-alphanumerical/index.js")
var dangerous = __webpack_require__(/*! ./dangerous.json */ "./node_modules/stringify-entities/dangerous.json")

module.exports = encode
encode.escape = escape

var own = {}.hasOwnProperty

// List of enforced escapes.
var escapes = ['"', "'", '<', '>', '&', '`']

// Map of characters to names.
var characters = construct()

// Default escapes.
var defaultEscapes = toExpression(escapes)

// Surrogate pairs.
var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g

// Non-ASCII characters.
// eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
var bmp = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g

// Encode special characters in `value`.
function encode(value, options) {
  var settings = options || {}
  var subset = settings.subset
  var set = subset ? toExpression(subset) : defaultEscapes
  var escapeOnly = settings.escapeOnly
  var omit = settings.omitOptionalSemicolons

  value = value.replace(set, replace)

  if (subset || escapeOnly) {
    return value
  }

  return value
    .replace(surrogatePair, replaceSurrogatePair)
    .replace(bmp, replace)

  function replaceSurrogatePair(pair, pos, val) {
    return toHexReference(
      (pair.charCodeAt(0) - 0xd800) * 0x400 +
        pair.charCodeAt(1) -
        0xdc00 +
        0x10000,
      val.charAt(pos + 2),
      omit
    )
  }

  function replace(char, pos, val) {
    return one(char, val.charAt(pos + 1), settings)
  }
}

// Shortcut to escape special characters in HTML.
function escape(value) {
  return encode(value, {escapeOnly: true, useNamedReferences: true})
}

// Encode `char` according to `options`.
function one(char, next, options) {
  var shortest = options.useShortestReferences
  var omit = options.omitOptionalSemicolons
  var named
  var code
  var numeric
  var decimal

  if ((shortest || options.useNamedReferences) && own.call(characters, char)) {
    named = toNamed(characters[char], next, omit, options.attribute)
  }

  if (shortest || !named) {
    code = char.charCodeAt(0)
    numeric = toHexReference(code, next, omit)

    // Use the shortest numeric reference when requested.
    // A simple algorithm would use decimal for all code points under 100, as
    // those are shorter than hexadecimal:
    //
    // * `&#99;` vs `&#x63;` (decimal shorter)
    // * `&#100;` vs `&#x64;` (equal)
    //
    // However, because we take `next` into consideration when `omit` is used,
    // And it would be possible that decimals are shorter on bigger values as
    // well if `next` is hexadecimal but not decimal, we instead compare both.
    if (shortest) {
      decimal = toDecimalReference(code, next, omit)

      if (decimal.length < numeric.length) {
        numeric = decimal
      }
    }
  }

  if (named && (!shortest || named.length < numeric.length)) {
    return named
  }

  return numeric
}

// Transform `code` into an entity.
function toNamed(name, next, omit, attribute) {
  var value = '&' + name

  if (
    omit &&
    own.call(legacy, name) &&
    dangerous.indexOf(name) === -1 &&
    (!attribute || (next && next !== '=' && !alphanumerical(next)))
  ) {
    return value
  }

  return value + ';'
}

// Transform `code` into a hexadecimal character reference.
function toHexReference(code, next, omit) {
  var value = '&#x' + code.toString(16).toUpperCase()
  return omit && next && !hexadecimal(next) ? value : value + ';'
}

// Transform `code` into a decimal character reference.
function toDecimalReference(code, next, omit) {
  var value = '&#' + String(code)
  return omit && next && !decimal(next) ? value : value + ';'
}

// Create an expression for `characters`.
function toExpression(characters) {
  return new RegExp('[' + characters.join('') + ']', 'g')
}

// Construct the map.
function construct() {
  var chars = {}
  var name

  for (name in entities) {
    chars[entities[name]] = name
  }

  return chars
}


/***/ }),

/***/ "./node_modules/trim-trailing-lines/index.js":
/*!***************************************************!*\
  !*** ./node_modules/trim-trailing-lines/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimTrailingLines

var line = '\n'

// Remove final newline characters from `value`.
function trimTrailingLines(value) {
  var val = String(value)
  var index = val.length

  while (val.charAt(--index) === line) {
    // Empty
  }

  return val.slice(0, index + 1)
}


/***/ }),

/***/ "./node_modules/trough/index.js":
/*!**************************************!*\
  !*** ./node_modules/trough/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wrap = __webpack_require__(/*! ./wrap.js */ "./node_modules/trough/wrap.js")

module.exports = trough

trough.wrap = wrap

var slice = [].slice

// Create new middleware.
function trough() {
  var fns = []
  var middleware = {}

  middleware.run = run
  middleware.use = use

  return middleware

  // Run `fns`.  Last argument must be a completion handler.
  function run() {
    var index = -1
    var input = slice.call(arguments, 0, -1)
    var done = arguments[arguments.length - 1]

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done)
    }

    next.apply(null, [null].concat(input))

    // Run the next `fn`, if any.
    function next(err) {
      var fn = fns[++index]
      var params = slice.call(arguments, 0)
      var values = params.slice(1)
      var length = input.length
      var pos = -1

      if (err) {
        done(err)
        return
      }

      // Copy non-nully input into values.
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos]
        }
      }

      input = values

      // Next or done.
      if (fn) {
        wrap(fn, next).apply(null, input)
      } else {
        done.apply(null, [null].concat(input))
      }
    }
  }

  // Add `fn` to the list.
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn)
    }

    fns.push(fn)

    return middleware
  }
}


/***/ }),

/***/ "./node_modules/trough/wrap.js":
/*!*************************************!*\
  !*** ./node_modules/trough/wrap.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = [].slice

module.exports = wrap

// Wrap `fn`.
// Can be sync or async; return a promise, receive a completion handler, return
// new values and errors.
function wrap(fn, callback) {
  var invoked

  return wrapped

  function wrapped() {
    var params = slice.call(arguments, 0)
    var callback = fn.length > params.length
    var result

    if (callback) {
      params.push(done)
    }

    try {
      result = fn.apply(null, params)
    } catch (error) {
      // Well, this is quite the pickle.
      // `fn` received a callback and invoked it (thus continuing the pipeline),
      // but later also threw an error.
      // We’re not about to restart the pipeline again, so the only thing left
      // to do is to throw the thing instead.
      if (callback && invoked) {
        throw error
      }

      return done(error)
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done)
      } else if (result instanceof Error) {
        done(result)
      } else {
        then(result)
      }
    }
  }

  // Invoke `next`, only once.
  function done() {
    if (!invoked) {
      invoked = true

      callback.apply(null, arguments)
    }
  }

  // Invoke `done` with one value.
  // Tracks if an error is passed, too.
  function then(value) {
    done(null, value)
  }
}


/***/ }),

/***/ "./node_modules/unherit/index.js":
/*!***************************************!*\
  !*** ./node_modules/unherit/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")

module.exports = unherit

// Create a custom constructor which can be modified without affecting the
// original class.
function unherit(Super) {
  var result
  var key
  var value

  inherits(Of, Super)
  inherits(From, Of)

  // Clone values.
  result = Of.prototype

  for (key in result) {
    value = result[key]

    if (value && typeof value === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value)
    }
  }

  return Of

  // Constructor accepting a single argument, which itself is an `arguments`
  // object.
  function From(parameters) {
    return Super.apply(this, parameters)
  }

  // Constructor accepting variadic arguments.
  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments)
    }

    return Super.apply(this, arguments)
  }
}


/***/ }),

/***/ "./node_modules/unified/index.js":
/*!***************************************!*\
  !*** ./node_modules/unified/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js")
var bail = __webpack_require__(/*! bail */ "./node_modules/bail/index.js")
var vfile = __webpack_require__(/*! vfile */ "./node_modules/vfile/index.js")
var trough = __webpack_require__(/*! trough */ "./node_modules/trough/index.js")
var plain = __webpack_require__(/*! is-plain-obj */ "./node_modules/is-plain-obj/index.js")

// Expose a frozen processor.
module.exports = unified().freeze()

var slice = [].slice
var own = {}.hasOwnProperty

// Process pipeline.
var pipeline = trough()
  .use(pipelineParse)
  .use(pipelineRun)
  .use(pipelineStringify)

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file)
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done)

  function done(err, tree, file) {
    if (err) {
      next(err)
    } else {
      ctx.tree = tree
      ctx.file = file
      next()
    }
  }
}

function pipelineStringify(p, ctx) {
  ctx.file.contents = p.stringify(ctx.tree, ctx.file)
}

// Function to create the first processor.
function unified() {
  var attachers = []
  var transformers = trough()
  var namespace = {}
  var frozen = false
  var freezeIndex = -1

  // Data management.
  processor.data = data

  // Lock.
  processor.freeze = freeze

  // Plugins.
  processor.attachers = attachers
  processor.use = use

  // API.
  processor.parse = parse
  processor.stringify = stringify
  processor.run = run
  processor.runSync = runSync
  processor.process = process
  processor.processSync = processSync

  // Expose.
  return processor

  // Create a new processor based on the processor in the current scope.
  function processor() {
    var destination = unified()
    var length = attachers.length
    var index = -1

    while (++index < length) {
      destination.use.apply(null, attachers[index])
    }

    destination.data(extend(true, {}, namespace))

    return destination
  }

  // Freeze: used to signal a processor that has finished configuration.
  //
  // For example, take unified itself: it’s frozen.
  // Plugins should not be added to it.
  // Rather, it should be extended, by invoking it, before modifying it.
  //
  // In essence, always invoke this when exporting a processor.
  function freeze() {
    var values
    var plugin
    var options
    var transformer

    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex]
      plugin = values[0]
      options = values[1]
      transformer = null

      if (options === false) {
        continue
      }

      if (options === true) {
        values[1] = undefined
      }

      transformer = plugin.apply(processor, values.slice(1))

      if (typeof transformer === 'function') {
        transformers.use(transformer)
      }
    }

    frozen = true
    freezeIndex = Infinity

    return processor
  }

  // Data management.
  // Getter / setter for processor-specific informtion.
  function data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen)

        namespace[key] = value

        return processor
      }

      // Get `key`.
      return (own.call(namespace, key) && namespace[key]) || null
    }

    // Set space.
    if (key) {
      assertUnfrozen('data', frozen)
      namespace = key
      return processor
    }

    // Get space.
    return namespace
  }

  // Plugin management.
  //
  // Pass it:
  // *   an attacher and options,
  // *   a preset,
  // *   a list of presets, attachers, and arguments (list of attachers and
  //     options).
  function use(value) {
    var settings

    assertUnfrozen('use', frozen)

    if (value === null || value === undefined) {
      // Empty.
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments)
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value)
      } else {
        addPreset(value)
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings)
    }

    return processor

    function addPreset(result) {
      addList(result.plugins)

      if (result.settings) {
        settings = extend(settings || {}, result.settings)
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value)
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value)
        } else {
          addPreset(value)
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`')
      }
    }

    function addList(plugins) {
      var length
      var index

      if (plugins === null || plugins === undefined) {
        // Empty.
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        length = plugins.length
        index = -1

        while (++index < length) {
          add(plugins[index])
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin)

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(entry[1], value)
        }

        entry[1] = value
      } else {
        attachers.push(slice.call(arguments))
      }
    }
  }

  function find(plugin) {
    var length = attachers.length
    var index = -1
    var entry

    while (++index < length) {
      entry = attachers[index]

      if (entry[0] === plugin) {
        return entry
      }
    }
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor.
  function parse(doc) {
    var file = vfile(doc)
    var Parser

    freeze()
    Parser = processor.Parser
    assertParser('parse', Parser)

    if (newable(Parser, 'parse')) {
      return new Parser(String(file), file).parse()
    }

    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), async.
  function run(node, file, cb) {
    assertNode(node)
    freeze()

    if (!cb && typeof file === 'function') {
      cb = file
      file = null
    }

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done)

      function done(err, tree, file) {
        tree = tree || node
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(tree)
        } else {
          cb(null, tree, file)
        }
      }
    }
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), sync.
  function runSync(node, file) {
    var complete = false
    var result

    run(node, file, done)

    assertDone('runSync', 'run', complete)

    return result

    function done(err, tree) {
      complete = true
      bail(err)
      result = tree
    }
  }

  // Stringify a unist node representation of a file (in string or vfile
  // representation) into a string using the `Compiler` on the processor.
  function stringify(node, doc) {
    var file = vfile(doc)
    var Compiler

    freeze()
    Compiler = processor.Compiler
    assertCompiler('stringify', Compiler)
    assertNode(node)

    if (newable(Compiler, 'compile')) {
      return new Compiler(node, file).compile()
    }

    return Compiler(node, file) // eslint-disable-line new-cap
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor, then run transforms on that node, and
  // compile the resulting node using the `Compiler` on the processor, and
  // store that result on the vfile.
  function process(doc, cb) {
    freeze()
    assertParser('process', processor.Parser)
    assertCompiler('process', processor.Compiler)

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      var file = vfile(doc)

      pipeline.run(processor, {file: file}, done)

      function done(err) {
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(file)
        } else {
          cb(null, file)
        }
      }
    }
  }

  // Process the given document (in string or vfile representation), sync.
  function processSync(doc) {
    var complete = false
    var file

    freeze()
    assertParser('processSync', processor.Parser)
    assertCompiler('processSync', processor.Compiler)
    file = vfile(doc)

    process(file, done)

    assertDone('processSync', 'process', complete)

    return file

    function done(err) {
      complete = true
      bail(err)
    }
  }
}

// Check if `value` is a constructor.
function newable(value, name) {
  return (
    typeof value === 'function' &&
    value.prototype &&
    // A function with keys in its prototype is probably a constructor.
    // Classes’ prototype methods are not enumerable, so we check if some value
    // exists in the prototype.
    (keys(value.prototype) || name in value.prototype)
  )
}

// Check if `value` is an object with keys.
function keys(value) {
  var key
  for (key in value) {
    return true
  }

  return false
}

// Assert a parser is available.
function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`')
  }
}

// Assert a compiler is available.
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`')
  }
}

// Assert the processor is not frozen.
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot invoke `' +
        name +
        '` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'
    )
  }
}

// Assert `node` is a unist node.
function assertNode(node) {
  if (!node || typeof node.type !== 'string') {
    throw new Error('Expected node, got `' + node + '`')
  }
}

// Assert that `complete` is `true`.
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}


/***/ }),

/***/ "./node_modules/unist-util-find-after/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/unist-util-find-after/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")

module.exports = findAfter

function findAfter(parent, index, test) {
  var is = convert(test)
  var children
  var child
  var length

  if (!parent || !parent.type || !parent.children) {
    throw new Error('Expected parent node')
  }

  children = parent.children
  length = children.length

  if (index && index.type) {
    index = children.indexOf(index)
  }

  if (isNaN(index) || index < 0 || index === Infinity) {
    throw new Error('Expected positive finite index or child node')
  }

  while (++index < length) {
    child = children[index]

    if (is(child, index, parent)) {
      return child
    }
  }

  return null
}


/***/ }),

/***/ "./node_modules/unist-util-is/convert.js":
/*!***********************************************!*\
  !*** ./node_modules/unist-util-is/convert.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = []
  var length = tests.length
  var index = -1

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ "./node_modules/unist-util-modify-children/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/unist-util-modify-children/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iterate = __webpack_require__(/*! array-iterate */ "./node_modules/array-iterate/index.js")

module.exports = modifierFactory

// Turn `callback` into a child-modifier accepting a parent.  See
// `array-iterate` for more info.
function modifierFactory(callback) {
  return iteratorFactory(wrapperFactory(callback))
}

// Turn `callback` into a `iterator' accepting a parent.
function iteratorFactory(callback) {
  return iterator

  function iterator(parent) {
    var children = parent && parent.children

    if (!children) {
      throw new Error('Missing children in `parent` for `modifier`')
    }

    return iterate(children, callback, parent)
  }
}

// Pass the context as the third argument to `callback`.
function wrapperFactory(callback) {
  return wrapper

  function wrapper(value, index) {
    return callback(value, index, this)
  }
}


/***/ }),

/***/ "./node_modules/unist-util-stringify-position/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/unist-util-stringify-position/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty

module.exports = stringify

function stringify(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return ''
  }

  // Node.
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position)
  }

  // Position.
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value)
  }

  // Point.
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value)
  }

  // ?
  return ''
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {}
  }

  return index(point.line) + ':' + index(point.column)
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {}
  }

  return point(pos.start) + '-' + point(pos.end)
}

function index(value) {
  return value && typeof value === 'number' ? value : 1
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents

var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-visit-parents/node_modules/unist-util-is/convert.js")

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  var is

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  is = convert(test)

  one(tree, null, [])

  // Visit a single node.
  function one(node, index, parents) {
    var result = []
    var subresult

    if (!test || is(node, index, parents[parents.length - 1] || null)) {
      result = toResult(visitor(node, parents))

      if (result[0] === EXIT) {
        return result
      }
    }

    if (node.children && result[0] !== SKIP) {
      subresult = toResult(all(node.children, parents.concat(node)))
      return subresult[0] === EXIT ? subresult : result
    }

    return result
  }

  // Visit children in `parent`.
  function all(children, parents) {
    var min = -1
    var step = reverse ? -1 : 1
    var index = (reverse ? children.length : min) + step
    var result

    while (index > min && index < children.length) {
      result = one(children[index], index, parents)

      if (result[0] === EXIT) {
        return result
      }

      index = typeof result[1] === 'number' ? result[1] : index + step
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/node_modules/unist-util-is/convert.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/node_modules/unist-util-is/convert.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = []
  var length = tests.length
  var index = -1

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ "./node_modules/unist-util-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/unist-util-visit/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "./node_modules/vfile-message/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vfile-message/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! unist-util-stringify-position */ "./node_modules/unist-util-stringify-position/index.js")

module.exports = VMessage

// Inherit from `Error#`.
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype
VMessage.prototype = new VMessagePrototype()

// Message properties.
var proto = VMessage.prototype

proto.file = ''
proto.name = ''
proto.reason = ''
proto.message = ''
proto.stack = ''
proto.fatal = null
proto.column = null
proto.line = null

// Construct a new VMessage.
//
// Note: We cannot invoke `Error` on the created context, as that adds readonly
// `line` and `column` attributes on Safari 9, thus throwing and failing the
// data.
function VMessage(reason, position, origin) {
  var parts
  var range
  var location

  if (typeof position === 'string') {
    origin = position
    position = null
  }

  parts = parseOrigin(origin)
  range = stringify(position) || '1:1'

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  }

  // Node.
  if (position && position.position) {
    position = position.position
  }

  if (position) {
    // Position.
    if (position.start) {
      location = position
      position = position.start
    } else {
      // Point.
      location.start = position
    }
  }

  if (reason.stack) {
    this.stack = reason.stack
    reason = reason.message
  }

  this.message = reason
  this.name = range
  this.reason = reason
  this.line = position ? position.line : null
  this.column = position ? position.column : null
  this.location = location
  this.source = parts[0]
  this.ruleId = parts[1]
}

function parseOrigin(origin) {
  var result = [null, null]
  var index

  if (typeof origin === 'string') {
    index = origin.indexOf(':')

    if (index === -1) {
      result[1] = origin
    } else {
      result[0] = origin.slice(0, index)
      result[1] = origin.slice(index + 1)
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/vfile/core.js":
/*!************************************!*\
  !*** ./node_modules/vfile/core.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js")
var replace = __webpack_require__(/*! replace-ext */ "./node_modules/replace-ext/index.js")
var buffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js")

module.exports = VFile

var own = {}.hasOwnProperty
var proto = VFile.prototype

// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']

proto.toString = toString

// Access full path (`~/index.min.js`).
Object.defineProperty(proto, 'path', {get: getPath, set: setPath})

// Access parent path (`~`).
Object.defineProperty(proto, 'dirname', {get: getDirname, set: setDirname})

// Access basename (`index.min.js`).
Object.defineProperty(proto, 'basename', {get: getBasename, set: setBasename})

// Access extname (`.js`).
Object.defineProperty(proto, 'extname', {get: getExtname, set: setExtname})

// Access stem (`index.min`).
Object.defineProperty(proto, 'stem', {get: getStem, set: setStem})

// Construct a new file.
function VFile(options) {
  var prop
  var index
  var length

  if (!options) {
    options = {}
  } else if (typeof options === 'string' || buffer(options)) {
    options = {contents: options}
  } else if ('message' in options && 'messages' in options) {
    return options
  }

  if (!(this instanceof VFile)) {
    return new VFile(options)
  }

  this.data = {}
  this.messages = []
  this.history = []
  this.cwd = process.cwd()

  // Set path related properties in the correct order.
  index = -1
  length = order.length

  while (++index < length) {
    prop = order[index]

    if (own.call(options, prop)) {
      this[prop] = options[prop]
    }
  }

  // Set non-path related properties.
  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop]
    }
  }
}

function getPath() {
  return this.history[this.history.length - 1]
}

function setPath(path) {
  assertNonEmpty(path, 'path')

  if (path !== this.path) {
    this.history.push(path)
  }
}

function getDirname() {
  return typeof this.path === 'string' ? path.dirname(this.path) : undefined
}

function setDirname(dirname) {
  assertPath(this.path, 'dirname')
  this.path = path.join(dirname || '', this.basename)
}

function getBasename() {
  return typeof this.path === 'string' ? path.basename(this.path) : undefined
}

function setBasename(basename) {
  assertNonEmpty(basename, 'basename')
  assertPart(basename, 'basename')
  this.path = path.join(this.dirname || '', basename)
}

function getExtname() {
  return typeof this.path === 'string' ? path.extname(this.path) : undefined
}

function setExtname(extname) {
  var ext = extname || ''

  assertPart(ext, 'extname')
  assertPath(this.path, 'extname')

  if (ext) {
    if (ext.charAt(0) !== '.') {
      throw new Error('`extname` must start with `.`')
    }

    if (ext.indexOf('.', 1) !== -1) {
      throw new Error('`extname` cannot contain multiple dots')
    }
  }

  this.path = replace(this.path, ext)
}

function getStem() {
  return typeof this.path === 'string'
    ? path.basename(this.path, this.extname)
    : undefined
}

function setStem(stem) {
  assertNonEmpty(stem, 'stem')
  assertPart(stem, 'stem')
  this.path = path.join(this.dirname || '', stem + (this.extname || ''))
}

// Get the value of the file.
function toString(encoding) {
  var value = this.contents || ''
  return buffer(value) ? value.toString(encoding) : String(value)
}

// Assert that `part` is not a path (i.e., does not contain `path.sep`).
function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + path.sep + '`'
    )
  }
}

// Assert that `part` is not empty.
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty')
  }
}

// Assert `path` exists.
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too')
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vfile/index.js":
/*!*************************************!*\
  !*** ./node_modules/vfile/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VMessage = __webpack_require__(/*! vfile-message */ "./node_modules/vfile-message/index.js")
var VFile = __webpack_require__(/*! ./core.js */ "./node_modules/vfile/core.js")

module.exports = VFile

var proto = VFile.prototype

proto.message = message
proto.info = info
proto.fail = fail

// Create a message with `reason` at `position`.
// When an error is passed in as `reason`, copies the stack.
function message(reason, position, origin) {
  var filePath = this.path
  var message = new VMessage(reason, position, origin)

  if (filePath) {
    message.name = filePath + ':' + message.name
    message.file = filePath
  }

  message.fatal = false

  this.messages.push(message)

  return message
}

// Fail: creates a vmessage, associates it with the file, and throws it.
function fail() {
  var message = this.message.apply(this, arguments)

  message.fatal = true

  throw message
}

// Info: creates a vmessage, associates it with the file, and marks the fatality
// as null.
function info() {
  var message = this.message.apply(this, arguments)

  message.fatal = null

  return message
}


/***/ }),

/***/ "./node_modules/web-namespaces/index.json":
/*!************************************************!*\
  !*** ./node_modules/web-namespaces/index.json ***!
  \************************************************/
/*! exports provided: html, mathml, svg, xlink, xml, xmlns, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"html\":\"http://www.w3.org/1999/xhtml\",\"mathml\":\"http://www.w3.org/1998/Math/MathML\",\"svg\":\"http://www.w3.org/2000/svg\",\"xlink\":\"http://www.w3.org/1999/xlink\",\"xml\":\"http://www.w3.org/XML/1998/namespace\",\"xmlns\":\"http://www.w3.org/2000/xmlns/\"}");

/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZpeC1nb29nbGUtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcmVoeXBlLXRvLXJlbWFyay13aXRoLXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJyYXktaXRlcmF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2NvdW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xsYXBzZS13aGl0ZS1zcGFjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29tbWEtc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtZW1iZWRkZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1mcm9tLWRvbS9kaXN0L2hhc3QtdXRpbC1mcm9tLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWhhcy1wcm9wZXJ0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWlzLWJvZHktb2stbGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWlzLWVsZW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1wYXJzZS1zZWxlY3Rvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL2Jsb2NrcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1tZGFzdC9saWIvaGFuZGxlcnMvYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1tZGFzdC9saWIvaGFuZGxlcnMvY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9kbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9oZWFkaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL2lmcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9pbmxpbmUtY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL2xpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9saXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL21lZGlhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy9xLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1tZGFzdC9saWIvaGFuZGxlcnMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL3N0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy90YWJsZS1jZWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL3RhYmxlLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9oYW5kbGVycy90ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL3RoZW1hdGljLWJyZWFrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL2hhbmRsZXJzL3dici5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi9vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1tZGFzdC9saWIvdXRpbC9maW5kLXNlbGVjdGVkLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1tZGFzdC9saWIvdXRpbC9saXN0LWl0ZW1zLXNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLW1kYXN0L2xpYi91dGlsL3Jlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1tZGFzdC9saWIvdXRpbC93cmFwLWNoaWxkcmVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL3V0aWwvd3JhcC1saXN0LWl0ZW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tbWRhc3QvbGliL3V0aWwvd3JhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLXRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhc3RzY3JpcHQvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzdHNjcmlwdC9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0c2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXN0c2NyaXB0L3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtYWxwaGFiZXRpY2FsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1hbHBoYW51bWVyaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWFscGhhbnVtZXJpY2FsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWRlY2ltYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWhleGFkZWNpbWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmovaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb25nZXN0LXN0cmVhay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWFya2Rvd24tZXNjYXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWFya2Rvd24tdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtY29tcGFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1jb21wYWN0L25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtY29tcGFjdC9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1waHJhc2luZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNlLWVudGl0aWVzL2RlY29kZS1lbnRpdHkuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvYXJpYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi9zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL2Nhc2UtaW5zZW5zaXRpdmUtdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9jYXNlLXNlbnNpdGl2ZS10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvZGVmaW5lZC1pbmZvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9pbmZvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvc2NoZW1hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3hsaW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIveG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIveG1sbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL25vcm1hbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vc3ZnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWh5cGUtZG9tLXBhcnNlL2Rpc3QvcmVoeXBlLWRvbS1wYXJzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlaHlwZS1taW5pZnktd2hpdGVzcGFjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVoeXBlLW1pbmlmeS13aGl0ZXNwYWNlL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWlzL2NvbnZlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlaHlwZS1yZW1hcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL21hY3JvL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9jb21waWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9tYWNyby9vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL21hY3JvL29yZGVyZWQtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL21hY3JvL3Vub3JkZXJlZC1pdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvc2V0LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvY29weS1pZGVudGlmaWVyLWVuY29kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi91dGlsL2VuY2xvc2UtdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvZW5jbG9zZS11cmkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvZW50ZXItbGluay1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvZW50aXR5LXByZWZpeC1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvbGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3V0aWwvcGFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9ibG9ja3F1b3RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9icmVhay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvZGVsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9lbXBoYXNpcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvZm9vdG5vdGUtZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvZm9vdG5vdGUtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9mb290bm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvaW1hZ2UtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvaW5saW5lLWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2xpbmstcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy9saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1zdHJpbmdpZnkvbGliL3Zpc2l0b3JzL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvc3Ryb25nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy90YWJsZS1jZWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi92aXNpdG9ycy90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvdmlzaXRvcnMvdGhlbWF0aWMtYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlcGVhdC1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlcGxhY2UtZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zcGFjZS1zZXBhcmF0ZWQtdG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdGF0ZS10b2dnbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0cmluZ2lmeS1lbnRpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJpbS10cmFpbGluZy1saW5lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJvdWdoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cm91Z2gvd3JhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5oZXJpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pZmllZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1maW5kLWFmdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWlzL2NvbnZlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtbW9kaWZ5LWNoaWxkcmVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtaXMvY29udmVydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZpbGUtbWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZpbGUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFDWTs7QUFFWjs7QUFFQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekNZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qlk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RFk7O0FBRVo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pQWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsa0dBQWtCOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVEWTs7QUFFWjs7QUFFQSxjQUFjLG1CQUFPLENBQUMsc0VBQXVCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0VZOztBQUVaOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLGtIQUEwQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJZOztBQUVaLGNBQWMsbUJBQU8sQ0FBQyxzRUFBdUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BCWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJZOztBQUVaOztBQUVBOztBQUVBLHlCQUF5Qjs7QUFFekI7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFO0FBQzFFLCtCQUErQjtBQUMvQixrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0JZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxzRkFBMkI7QUFDaEQsY0FBYyxtQkFBTyxDQUFDLDBGQUE2QjtBQUNuRCxjQUFjLG1CQUFPLENBQUMsc0RBQVk7QUFDbEMsa0JBQWtCLG1CQUFPLENBQUMsOERBQWdCO0FBQzFDLHFCQUFxQixtQkFBTyxDQUFDLG9FQUFtQjtBQUNoRCxtQkFBbUIsbUJBQU8sQ0FBQywrRUFBaUI7O0FBRTVDOztBQUVBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QWEsbUJBQU8sQ0FBQyw2RUFBZTtBQUNwQywrQkFBK0IsbUJBQU8sQ0FBQyxxSEFBbUM7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE1BQU07QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELE1BQU07QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqVFc7O0FBRVosWUFBWSxtQkFBTyxDQUFDLDJFQUFjO0FBQ2xDLGFBQWEsbUJBQU8sQ0FBQyw2RUFBZTtBQUNwQyw2QkFBNkIsbUJBQU8sQ0FBQyxpSEFBaUM7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeFNZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNZOztBQUVaOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckNZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyw0REFBZTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0JZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZlk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNaWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsNERBQWU7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLFdBQVc7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5Y1k7O0FBRVosY0FBYyxtQkFBTyxDQUFDLHNFQUF1Qjs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BDWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Rlk7O0FBRVosY0FBYyxtQkFBTyxDQUFDLDREQUFlOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENZOztBQUVaLFlBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pEWTs7QUFFWjs7QUFFQSxjQUFjLG1CQUFPLENBQUMsNEdBQXVCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0VZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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QTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGZpeEdvb2dsZUh0bWwgZnJvbSAnLi9saWIvZml4LWdvb2dsZS1odG1sJztcbi8vIHJlaHlwZS1kb20tcGFyc2UgaXMgYSBsaWdodHdlaWdodCB2ZXJzaW9uIG9mIHJlaHlwZS1wYXJzZSB0aGF0IGxldmVyYWdlc1xuLy8gYnJvd3NlciBBUElzIC0tIHJlZHVjZXMgYnVuZGxlIHNpemUgYnkgfjIwMCBrQiFcbi8vIGNvbnN0IHBhcnNlID0gcmVxdWlyZSgncmVoeXBlLWRvbS1wYXJzZScpLmRlZmF1bHQ7XG5pbXBvcnQgcGFyc2UgZnJvbSAncmVoeXBlLWRvbS1wYXJzZSc7XG5pbXBvcnQgcmVoeXBlMnJlbWFya1dpdGhTcGFjZXMgZnJvbSAnLi9saWIvcmVoeXBlLXRvLXJlbWFyay13aXRoLXNwYWNlcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJ3JlbWFyay1zdHJpbmdpZnknO1xuaW1wb3J0IHVuaWZpZWQgZnJvbSAndW5pZmllZCc7XG5cblxuY29uc3QgcHJvY2Vzc29yID0gdW5pZmllZCgpXG4gIC51c2UocGFyc2UpXG4gIC51c2UoZml4R29vZ2xlSHRtbClcbiAgLy8gLnVzZShyZXF1aXJlKCcuL2xpYi9sb2ctdHJlZScpLmRlZmF1bHQpXG4gIC51c2UocmVoeXBlMnJlbWFya1dpdGhTcGFjZXMpXG4gIC51c2Uoc3RyaW5naWZ5LCB7bGlzdEl0ZW1JbmRlbnQ6ICcxJ30pO1xuXG5mdW5jdGlvbiBjb252ZXJ0VG9NYXJrZG93biAoaHRtbCkge1xuICByZXR1cm4gcHJvY2Vzc29yLnByb2Nlc3MoaW5wdXRFbGVtZW50LmlubmVySFRNTClcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgLy8gRW5zdXJlIGRvdWJsZSBsaW5lLWJyZWFrIGJlZm9yZSBoZWFkaW5nc1xuICAgICAgcmV0dXJuIHJlc3VsdC5jb250ZW50cy5yZXBsYWNlKC8oXFxuXFxzKykjL2csIChfLCBicmVha3MpID0+IHtcbiAgICAgICAgYnJlYWtzID0gYnJlYWtzLnJlcGxhY2UoL1teXFxuXS9nLCAnJyk7XG4gICAgICAgIGlmIChicmVha3MubGVuZ3RoIDwgMykgYnJlYWtzID0gJ1xcblxcblxcbic7XG5cbiAgICAgICAgcmV0dXJuIGAke2JyZWFrc30jYDtcbiAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cbmNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpO1xuY29uc3Qgb3V0cHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKTtcbmNvbnN0IGlucHV0SW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWFyZWEgLmluc3RydWN0aW9ucycpO1xuY29uc3Qgb3V0cHV0SW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dHB1dC1hcmVhIC5pbnN0cnVjdGlvbnMnKTtcblxuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICBjb25zdCBoYXNDb250ZW50ID0gISFpbnB1dEVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIGlucHV0SW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBoYXNDb250ZW50ID8gJ25vbmUnIDogJyc7XG5cbiAgY29udmVydFRvTWFya2Rvd24oaW5wdXRFbGVtZW50LmlubmVySFRNTClcbiAgICAudGhlbihtYXJrZG93biA9PiB7XG4gICAgICBvdXRwdXRFbGVtZW50LnZhbHVlID0gbWFya2Rvd247XG4gICAgICBvdXRwdXRJbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IG1hcmtkb3duLnRyaW0oKSA/ICdub25lJyA6ICcnO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgb3V0cHV0SW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9KTtcbn0pO1xuXG53aW5kb3cuY29udmVydFRvTWFya2Rvd24gPSBjb252ZXJ0VG9NYXJrZG93bjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGhhc3QgZnJvbSAnaGFzdHNjcmlwdCc7XG5pbXBvcnQgdmlzaXQgZnJvbSAndW5pc3QtdXRpbC12aXNpdCc7XG5cbmNvbnN0IGJsb2NrRWxlbWVudHMgPSBuZXcgU2V0KFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2NhcHRpb24nLFxuICAnY2VudGVyJywgIC8vIGhpc3RvcmljXG4gICdkZCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RpYWxvZycsXG4gICdkaXInLCAgLy8gaGlzdG9yaWNcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmcmFtZXNldCcsICAvLyBoaXN0b3JpY1xuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdpc2luZGV4JywgIC8vIGhpc3RvcmljXG4gICdsaScsXG4gICdtYWluJyxcbiAgJ21lbnUnLFxuICAnbmF2JyxcbiAgJ25vZnJhbWVzJywgIC8vIGhpc3RvcmljXG4gICdvbCcsXG4gICdwJyxcbiAgJ3ByZScsXG4gICdzZWN0aW9uJyxcbiAgJ3N1bW1hcnknLFxuICAndGFibGUnLFxuICAndWwnXG5dKTtcblxuY29uc3QgaXNMaXN0ID0gbm9kZSA9PiBub2RlLnRhZ05hbWUgPT09ICd1bCcgfHwgbm9kZS50YWdOYW1lID09PSAnb2wnO1xuY29uc3QgaXNTdHlsZWQgPSBub2RlID0+IG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnICYmIG5vZGUucHJvcGVydGllcy5zdHlsZTtcbmNvbnN0IGlzQmxvY2sgPSBub2RlID0+IG5vZGUgJiYgYmxvY2tFbGVtZW50cy5oYXMobm9kZS50YWdOYW1lKTtcblxuLy8gV3JhcCB0aGUgY2hpbGRyZW4gb2YgYG5vZGVgIHdpdGggdGhlIGB3cmFwcGVyYCBub2RlLlxuZnVuY3Rpb24gd3JhcENoaWxkcmVuIChub2RlLCB3cmFwcGVyKSB7XG4gIHdyYXBwZXIuY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICBub2RlLmNoaWxkcmVuID0gW3dyYXBwZXJdO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuLyoqXG4gKiBGaXggdGhlIGluY29ycmVjdCBmb3JtYXR0aW5nIG9mIG5lc3RlZCBsaXN0cyBpbiBHb29nbGUgRG9jcydzIEhUTUwuIExpc3RzXG4gKiBjYW4gb25seSBoYXZlIGBkaXZgIGFuZCBgbGlgIGNoaWxkcmVuLCBidXQgR29vZ2xlIERvY3MgaGFzIG90aGVyIGxpc3RzIGFzXG4gKiBkaXJlY3QgZGVzY2VuZGVudHMuIFRoaXMgbW92ZXMgdGhvc2UgZnJlZS1mbG9hdGluZyBsaXN0cyBpbnRvIHRoZSBwcmV2aW91c1xuICogYGxpYCBlbGVtZW50IHVuZGVyIHRoZSBhc3N1bXB0aW9uIHRoYXQgdGhleSByZXByZXNlbnQgc3ViaXRlbXMgb2YgaXQuXG4gKiBcbiAqIEBwYXJhbSB7UmVoeXBlTm9kZX0gbm9kZSBGaXggdGhlIHRyZWUgYmVsb3cgdGhpcyBub2RlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBJbnB1dCBhIHRyZWUgbGlrZTpcbiAqICAgIDx1bD5cbiAqICAgICAgPGxpPkFuIGl0ZW0hPC9saT5cbiAqICAgICAgPHVsPlxuICogICAgICAgIDxsaT5BIHN1Yml0ZW0hPC9saT5cbiAqICAgICAgPC91bD5cbiAqICAgIDwvdWw+XG4gKiBcbiAqIE91dHB1dDpcbiAqICAgIDx1bD5cbiAqICAgICAgPGxpPkFuIEl0ZW0hXG4gKiAgICAgICAgPHVsPlxuICogICAgICAgICAgPGxpPkEgc3ViaXRlbSE8L2xpPlxuICogICAgICAgIDwvdWw+XG4gKiAgICAgIDwvbGk+XG4gKiAgICA8L3VsPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZml4TmVzdGVkTGlzdHMgKG5vZGUpIHtcbiAgdmlzaXQobm9kZSwgaXNMaXN0LCAobm9kZSwgaW5kZXgsIHBhcmVudCkgPT4ge1xuICAgIGlmIChpc0xpc3QocGFyZW50KSkge1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBwYXJlbnQuY2hpbGRyZW5baW5kZXggLSAxXTtcbiAgICAgIGlmIChwcmV2aW91cyAmJiBwcmV2aW91cy50YWdOYW1lID09PSAnbGknKSB7XG4gICAgICAgIHByZXZpb3VzLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdObyBwcmV2aW91cyBsaXN0IGl0ZW0gdG8gbW92ZSBuZXN0ZWQgbGlzdCBpbnRvIScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogR29vZ2xlIERvY3MgZG9lcyBpdGFsaWNzL2JvbGRzL2V0YyBvbiA8c3Bhbj5zIHdpdGggc3R5bGUgYXR0cmlidXRlcywgYnV0XG4gKiByZWh5cGUtcmVtYXJrIGRvZXMgcGljayB1cCBvbiB0aG9zZSB3ZWxsLiBJbnN0ZWFkLCB0cmFuc2Zvcm0gdGhlbSBpbnRvXG4gKiBgZW1gLCBgc3Ryb25nYCwgZXRjLiBlbGVtZW50cy5cbiAqIFxuICogQHBhcmFtIHtSZWh5cGVOb2RlfSBub2RlIEZpeCB0aGUgdHJlZSBiZWxvdyB0aGlzIG5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuSW5saW5lU3R5bGVzIChub2RlKSB7XG4gIHZpc2l0KG5vZGUsIGlzU3R5bGVkLCAobm9kZSwgaW5kZXgsIHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlID0gbm9kZS5wcm9wZXJ0aWVzLnN0eWxlO1xuICAgIGlmICgvZm9udC1zdHlsZTpcXHMqaXRhbGljLy50ZXN0KHN0eWxlKSkge1xuICAgICAgd3JhcENoaWxkcmVuKG5vZGUsIGhhc3QoJ2VtJykpO1xuICAgIH1cbiAgICBpZiAoL2ZvbnQtd2VpZ2h0OlxccyooYm9sZHw3MDApLy50ZXN0KHN0eWxlKSkge1xuICAgICAgd3JhcENoaWxkcmVuKG5vZGUsIGhhc3QoJ3N0cm9uZycpKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGluZUJyZWFrc0JlZm9yZUJsb2NrcyAobm9kZSkge1xuICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIGlmIChjaGlsZC50YWdOYW1lID09PSAnYnInICYmIGlzQmxvY2soY2hpbGRyZW5baSArIDFdKSkge1xuICAgICAgY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgaSAtPSAxO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGlsZC5jaGlsZHJlbikge1xuICAgICAgcmVtb3ZlTGluZUJyZWFrc0JlZm9yZUJsb2NrcyhjaGlsZCk7XG4gICAgfVxuICB9XG4gIG5vZGUuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbn1cblxuLyoqXG4gKiBBIHJlaHlwZSBwbHVnaW4gdG8gY2xlYW4gdXAgdGhlIEhUTUwgb2YgYSBHb29nbGUgRG9jLiAuVGhpcyBhcHBsaWVzIHRvIHRoZVxuICogbGl2ZSBIVE1MIG9mIERvYywgYXMgd2hlbiB5b3UgY29weSBhbmQgcGFzdGUgaXQ7IG5vdCAqZXhwb3J0ZWQqIEhUTUwgKGl0XG4gKiBtaWdodCBhcHBseSB0aGVyZSwgdG9vOyBJIGhhdmVu4oCZdCBsb29rZWQgaW50byBpdCkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpeEdvb2dsZUh0bWwgKCkge1xuICByZXR1cm4gKHRyZWUsIGZpbGUpID0+IHtcbiAgICB1bklubGluZVN0eWxlcyh0cmVlKTtcbiAgICBmaXhOZXN0ZWRMaXN0cyh0cmVlKTtcbiAgICByZW1vdmVMaW5lQnJlYWtzQmVmb3JlQmxvY2tzKHRyZWUpO1xuICAgIHJldHVybiB0cmVlO1xuICB9O1xufVxuIiwiY29uc3QgcmVoeXBlMnJlbWFyayA9IHJlcXVpcmUoJ3JlaHlwZS1yZW1hcmsnKTtcblxuLyoqXG4gKiBUaGUgb2ZmaWNpYWwgcmVoeXBlLXJlbWFyayBwbHVnaW4gZ2V0cyBhIGxpdHRsZSBhZ2dlcmVzc2l2ZSB3aXRoIHJlbW92aW5nXG4gKiBzcGFjZXMsIHNvIHRoaXMgd3JhcHMgaXQgd2l0aCBzb21lIHNwYWNlIHByZXNlcnZhdGlvbi5cbiAqIFxuICogSWRlYWxseSwgdGhpcyBuZWVkcyB0byBiZSBzb2x2ZWQgdXBzdHJlYW0gaW4gcmVoeXBlLXJlbWFyay5cbiAqIFRPRE86IGNyZWF0ZSBhIG1pbmltYWwgdGVzdCBjYXNlIGFuZCBmaWxlIGEgYnVnIHRoZXJlIVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWh5cGUycmVtYXJrV2l0aFNwYWNlcyAoKSB7XG4gIGNvbnN0IHNwYWNlVG9rZW4gPSAnKytJQU1BU1BBQ0UrKyc7XG4gIFxuICBmdW5jdGlvbiBwcmVzZXJ2ZUluaXRpYWxTcGFjZXMgKG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlID09PSAndGV4dCcgJiYgbm9kZS52YWx1ZS5zdGFydHNXaXRoKCcgJykpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlLnN0YXJ0c1dpdGgoJyAnKSkge1xuICAgICAgICBub2RlLnZhbHVlID0gc3BhY2VUb2tlbiArIG5vZGUudmFsdWUuc2xpY2UoMSk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS52YWx1ZS5lbmRzV2l0aCgnICcpKSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSBub2RlLnZhbHVlLnNsaWNlKDAsIC0xKSArIHNwYWNlVG9rZW47XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2gocHJlc2VydmVJbml0aWFsU3BhY2VzKTtcbiAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHJlY3JlYXRlU3BhY2VzIChub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBub2RlLnZhbHVlID0gbm9kZS52YWx1ZS5zcGxpdChzcGFjZVRva2VuKS5qb2luKCcgJyk7XG4gICAgfVxuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2gocmVjcmVhdGVTcGFjZXMpO1xuICAgIH1cbiAgfVxuICBcbiAgY29uc3QgY29udmVydCA9IHJlaHlwZTJyZW1hcmsuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0cmVlLCBmaWxlKSB7XG4gICAgcHJlc2VydmVJbml0aWFsU3BhY2VzKHRyZWUpO1xuICAgIGNvbnN0IG1hcmtkb3duVHJlZSA9IGNvbnZlcnQuYXBwbHkodGhpcywgW3RyZWUsIGZpbGVdKTtcbiAgICByZWNyZWF0ZVNwYWNlcyhtYXJrZG93blRyZWUpO1xuICAgIHJldHVybiBtYXJrZG93blRyZWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpdGVyYXRlXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBpdGVyYXRlKHZhbHVlcywgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc3VsdFxuXG4gIGlmICghdmFsdWVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJdGVyYXRlIHJlcXVpcmVzIHRoYXQgfHRoaXN8IG5vdCBiZSAnICsgdmFsdWVzKVxuICB9XG5cbiAgaWYgKCFvd24uY2FsbCh2YWx1ZXMsICdsZW5ndGgnKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSXRlcmF0ZSByZXF1aXJlcyB0aGF0IHx0aGlzfCBoYXMgYSBgbGVuZ3RoYCcpXG4gIH1cblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgY2FsbGJhY2tgIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gIH1cblxuICAvLyBUaGUgbGVuZ3RoIG1pZ2h0IGNoYW5nZSwgc28gd2UgZG8gbm90IGNhY2hlIGl0LlxuICB3aGlsZSAoKytpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAvLyBTa2lwIG1pc3NpbmcgdmFsdWVzLlxuICAgIGlmICghKGluZGV4IGluIHZhbHVlcykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcmVzdWx0ID0gY2FsbGJhY2suY2FsbChjb250ZXh0LCB2YWx1ZXNbaW5kZXhdLCBpbmRleCwgdmFsdWVzKVxuXG4gICAgLy8gSWYgYGNhbGxiYWNrYCByZXR1cm5zIGEgYG51bWJlcmAsIG1vdmUgYGluZGV4YCBvdmVyIHRvIGBudW1iZXJgLlxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnbnVtYmVyJykge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgbmVnYXRpdmUgbnVtYmVycyBkbyBub3QgYnJlYWsgdGhlIGxvb3AuXG4gICAgICBpZiAocmVzdWx0IDwgMCkge1xuICAgICAgICBpbmRleCA9IDBcbiAgICAgIH1cblxuICAgICAgaW5kZXggPSByZXN1bHQgLSAxXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBiYWlsXG5cbmZ1bmN0aW9uIGJhaWwoZXJyKSB7XG4gIGlmIChlcnIpIHtcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY2NvdW50XG5cbmZ1bmN0aW9uIGNjb3VudCh2YWx1ZSwgY2hhcmFjdGVyKSB7XG4gIHZhciBjb3VudCA9IDBcbiAgdmFyIGluZGV4XG5cbiAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG5cbiAgaWYgKHR5cGVvZiBjaGFyYWN0ZXIgIT09ICdzdHJpbmcnIHx8IGNoYXJhY3Rlci5sZW5ndGggIT09IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGNoYXJhY3RlcicpXG4gIH1cblxuICBpbmRleCA9IHZhbHVlLmluZGV4T2YoY2hhcmFjdGVyKVxuXG4gIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICBjb3VudCsrXG4gICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGNoYXJhY3RlciwgaW5kZXggKyAxKVxuICB9XG5cbiAgcmV0dXJuIGNvdW50XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjb2xsYXBzZVxuXG4vLyBgY29sbGFwc2UoJyBcXHRcXG5iYXIgXFxuYmF6XFx0JykgLy8gJyBiYXIgYmF6ICdgXG5mdW5jdGlvbiBjb2xsYXBzZSh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9cXHMrL2csICcgJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnBhcnNlID0gcGFyc2VcbmV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG5cbnZhciBjb21tYSA9ICcsJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgZW1wdHkgPSAnJ1xuXG4vLyBQYXJzZSBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zIHRvIGFuIGFycmF5LlxuZnVuY3Rpb24gcGFyc2UodmFsdWUpIHtcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBpbnB1dCA9IFN0cmluZyh2YWx1ZSB8fCBlbXB0eSlcbiAgdmFyIGluZGV4ID0gaW5wdXQuaW5kZXhPZihjb21tYSlcbiAgdmFyIGxhc3RJbmRleCA9IDBcbiAgdmFyIGVuZCA9IGZhbHNlXG4gIHZhciB2YWxcblxuICB3aGlsZSAoIWVuZCkge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gaW5wdXQubGVuZ3RoXG4gICAgICBlbmQgPSB0cnVlXG4gICAgfVxuXG4gICAgdmFsID0gaW5wdXQuc2xpY2UobGFzdEluZGV4LCBpbmRleCkudHJpbSgpXG5cbiAgICBpZiAodmFsIHx8ICFlbmQpIHtcbiAgICAgIHZhbHVlcy5wdXNoKHZhbClcbiAgICB9XG5cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDFcbiAgICBpbmRleCA9IGlucHV0LmluZGV4T2YoY29tbWEsIGxhc3RJbmRleClcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXNcbn1cblxuLy8gQ29tcGlsZSBhbiBhcnJheSB0byBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zLlxuLy8gYG9wdGlvbnMucGFkTGVmdGAgKGRlZmF1bHQ6IGB0cnVlYCkgcGFkcyBhIHNwYWNlIGxlZnQgb2YgZWFjaCB0b2tlbiwgYW5kXG4vLyBgb3B0aW9ucy5wYWRSaWdodGAgKGRlZmF1bHQ6IGBmYWxzZWApIHBhZHMgYSBzcGFjZSB0byB0aGUgcmlnaHQgb2YgZWFjaCB0b2tlbi5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgbGVmdCA9IHNldHRpbmdzLnBhZExlZnQgPT09IGZhbHNlID8gZW1wdHkgOiBzcGFjZVxuICB2YXIgcmlnaHQgPSBzZXR0aW5ncy5wYWRSaWdodCA/IHNwYWNlIDogZW1wdHlcblxuICAvLyBFbnN1cmUgdGhlIGxhc3QgZW1wdHkgZW50cnkgaXMgc2Vlbi5cbiAgaWYgKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gPT09IGVtcHR5KSB7XG4gICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChlbXB0eSlcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihyaWdodCArIGNvbW1hICsgbGVmdCkudHJpbSgpXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7IC8qKi8gfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG4vLyBJZiBuYW1lIGlzICdfX3Byb3RvX18nLCBhbmQgT2JqZWN0LmRlZmluZVByb3BlcnR5IGlzIGF2YWlsYWJsZSwgZGVmaW5lIF9fcHJvdG9fXyBhcyBhbiBvd24gcHJvcGVydHkgb24gdGFyZ2V0XG52YXIgc2V0UHJvcGVydHkgPSBmdW5jdGlvbiBzZXRQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMpIHtcblx0aWYgKGRlZmluZVByb3BlcnR5ICYmIG9wdGlvbnMubmFtZSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMubmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBvcHRpb25zLm5ld1ZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR0YXJnZXRbb3B0aW9ucy5uYW1lXSA9IG9wdGlvbnMubmV3VmFsdWU7XG5cdH1cbn07XG5cbi8vIFJldHVybiB1bmRlZmluZWQgaW5zdGVhZCBvZiBfX3Byb3RvX18gaWYgJ19fcHJvdG9fXycgaXMgbm90IGFuIG93biBwcm9wZXJ0eVxudmFyIGdldFByb3BlcnR5ID0gZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBuYW1lKSB7XG5cdGlmIChuYW1lID09PSAnX19wcm90b19fJykge1xuXHRcdGlmICghaGFzT3duLmNhbGwob2JqLCBuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9IGVsc2UgaWYgKGdPUEQpIHtcblx0XHRcdC8vIEluIGVhcmx5IHZlcnNpb25zIG9mIG5vZGUsIG9ialsnX19wcm90b19fJ10gaXMgYnVnZ3kgd2hlbiBvYmogaGFzXG5cdFx0XHQvLyBfX3Byb3RvX18gYXMgYW4gb3duIHByb3BlcnR5LiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkgd29ya3MuXG5cdFx0XHRyZXR1cm4gZ09QRChvYmosIG5hbWUpLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvYmpbbmFtZV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lO1xuXHR2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgaSA9IDE7XG5cdHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHR2YXIgZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fVxuXHRpZiAodGFyZ2V0ID09IG51bGwgfHwgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gZ2V0UHJvcGVydHkodGFyZ2V0LCBuYW1lKTtcblx0XHRcdFx0Y29weSA9IGdldFByb3BlcnR5KG9wdGlvbnMsIG5hbWUpO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHRzZXRQcm9wZXJ0eSh0YXJnZXQsIHsgbmFtZTogbmFtZSwgbmV3VmFsdWU6IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSkgfSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHNldFByb3BlcnR5KHRhcmdldCwgeyBuYW1lOiBuYW1lLCBuZXdWYWx1ZTogY29weSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgaXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZW1iZWRkZWRcblxudmFyIG5hbWVzID0gW1xuICAnYXVkaW8nLFxuICAnY2FudmFzJyxcbiAgJ2VtYmVkJyxcbiAgJ2lmcmFtZScsXG4gICdpbWcnLFxuICAnbWF0aCcsXG4gICdvYmplY3QnLFxuICAncGljdHVyZScsXG4gICdzdmcnLFxuICAndmlkZW8nXG5dXG5cbmZ1bmN0aW9uIGVtYmVkZGVkKG5vZGUpIHtcbiAgcmV0dXJuIGlzKG5vZGUsIG5hbWVzKVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIG5zID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3dlYi1uYW1lc3BhY2VzJykpO1xudmFyIGggPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnaGFzdHNjcmlwdC9odG1sJykpO1xudmFyIHMgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnaGFzdHNjcmlwdC9zdmcnKSk7XG5cbnZhciBFTEVNRU5UX05PREUgPSAxO1xudmFyIFRFWFRfTk9ERSA9IDM7XG52YXIgQ09NTUVOVF9OT0RFID0gODtcbnZhciBET0NVTUVOVF9OT0RFID0gOTtcbnZhciBET0NVTUVOVF9UWVBFX05PREUgPSAxMDtcbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gMTE7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSh2YWx1ZSkge1xuICB2YXIgbm9kZSA9IHZhbHVlIHx8IHt9O1xuXG4gIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIGVsZW1lbnQobm9kZSk7XG5cbiAgICBjYXNlIERPQ1VNRU5UX05PREU6XG4gICAgY2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIHJvb3Qobm9kZSk7XG5cbiAgICBjYXNlIFRFWFRfTk9ERTpcbiAgICAgIHJldHVybiB0ZXh0KG5vZGUpO1xuXG4gICAgY2FzZSBDT01NRU5UX05PREU6XG4gICAgICByZXR1cm4gY29tbWVudChub2RlKTtcblxuICAgIGNhc2UgRE9DVU1FTlRfVFlQRV9OT0RFOlxuICAgICAgcmV0dXJuIGRvY3R5cGUobm9kZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn0gLy8gVHJhbnNmb3JtIGEgZG9jdW1lbnQuXG5cblxuZnVuY3Rpb24gcm9vdChub2RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ3Jvb3QnLFxuICAgIGNoaWxkcmVuOiBhbGwobm9kZSlcbiAgfTtcbn0gLy8gVHJhbnNmb3JtIGEgZG9jdHlwZS5cblxuXG5mdW5jdGlvbiBkb2N0eXBlKG5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnZG9jdHlwZScsXG4gICAgbmFtZTogbm9kZS5uYW1lIHx8ICcnLFxuICAgIFwicHVibGljXCI6IG5vZGUucHVibGljSWQgfHwgbnVsbCxcbiAgICBzeXN0ZW06IG5vZGUuc3lzdGVtSWQgfHwgbnVsbFxuICB9O1xufSAvLyBUcmFuc2Zvcm0gdGV4dC5cblxuXG5mdW5jdGlvbiB0ZXh0KG5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWU6IG5vZGUubm9kZVZhbHVlXG4gIH07XG59IC8vIFRyYW5zZm9ybSBhIGNvbW1lbnQuXG5cblxuZnVuY3Rpb24gY29tbWVudChub2RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2NvbW1lbnQnLFxuICAgIHZhbHVlOiBub2RlLm5vZGVWYWx1ZVxuICB9O1xufSAvLyBUcmFuc2Zvcm0gYW4gZWxlbWVudC5cblxuXG5mdW5jdGlvbiBlbGVtZW50KG5vZGUpIHtcbiAgdmFyIHNwYWNlID0gbm9kZS5uYW1lc3BhY2VVUkk7XG4gIHZhciBmbiA9IHNwYWNlID09PSBucy5zdmcgPyBzIDogaDtcbiAgdmFyIHRhZ05hbWUgPSBzcGFjZSA9PT0gbnMuaHRtbCA/IG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpIDogbm9kZS50YWdOYW1lO1xuICB2YXIgY29udGVudCA9IHNwYWNlID09PSBucy5odG1sICYmIHRhZ05hbWUgPT09ICd0ZW1wbGF0ZScgPyBub2RlLmNvbnRlbnQgOiBub2RlO1xuICB2YXIgYXR0cmlidXRlcyA9IG5vZGUuZ2V0QXR0cmlidXRlTmFtZXMoKTtcbiAgdmFyIGxlbmd0aCA9IGF0dHJpYnV0ZXMubGVuZ3RoO1xuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGluZGV4ID0gMDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gYXR0cmlidXRlc1tpbmRleF07XG4gICAgcHJvcHNba2V5XSA9IG5vZGUuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxuXG4gIHJldHVybiBmbih0YWdOYW1lLCBwcm9wcywgYWxsKGNvbnRlbnQpKTtcbn1cblxuZnVuY3Rpb24gYWxsKG5vZGUpIHtcbiAgdmFyIG5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICB2YXIgbGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgdmFyIGluZGV4ID0gMDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgY2hpbGQgPSB0cmFuc2Zvcm0obm9kZXNbaW5kZXhdKTtcblxuICAgIGlmIChjaGlsZCAhPT0gbnVsbCkge1xuICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgaW5kZXggKz0gMTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gZnJvbURPTShub2RlKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0obm9kZSkgfHwge1xuICAgIHR5cGU6ICdyb290JyxcbiAgICBjaGlsZHJlbjogW11cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmcm9tRE9NO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1Byb3BlcnR5XG5cbi8vIENoZWNrIGlmIGBub2RlYCBoYXMgYSBzZXQgYG5hbWVgIHByb3BlcnR5LlxuZnVuY3Rpb24gaGFzUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICB2YXIgcHJvcHNcbiAgdmFyIHZhbHVlXG5cbiAgaWYgKCFub2RlIHx8ICFuYW1lIHx8IHR5cGVvZiBub2RlICE9PSAnb2JqZWN0JyB8fCBub2RlLnR5cGUgIT09ICdlbGVtZW50Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHJvcHMgPSBub2RlLnByb3BlcnRpZXNcbiAgdmFsdWUgPSBwcm9wcyAmJiBvd24uY2FsbChwcm9wcywgbmFtZSkgJiYgcHJvcHNbbmFtZV1cblxuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gZmFsc2Vcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlld1xuICogICBDaGVjayBpZiBhIGBsaW5rYCBlbGVtZW50IGlzIOKAnEJvZHkgT0vigJ0uXG4gKiBAbG9uZ2Rlc2NyaXB0aW9uXG4gKiAgICMjIFVzZVxuICpcbiAqICAgYGBganNcbiAqICAgdmFyIGggPSByZXF1aXJlKCdoYXN0c2NyaXB0JylcbiAqICAgdmFyIG9rID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWJvZHktb2stbGluaycpXG4gKlxuICogICBvayhoKCdsaW5rJywge2l0ZW1Qcm9wOiAnZm9vJ30pKSAvLz0+IHRydWVcbiAqICAgb2soaCgnbGluaycsIHtyZWw6IFsnc3R5bGVzaGVldCddLCBocmVmOiAnaW5kZXguY3NzJ30pKSAvLz0+IHRydWVcbiAqICAgb2soaCgnbGluaycsIHtyZWw6IFsnYXV0aG9yJ10sIGhyZWY6ICdpbmRleC5jc3MnfSkpIC8vPT4gZmFsc2VcbiAqICAgYGBgXG4gKlxuICogICAjIyBBUElcbiAqXG4gKiAgICMjIyBgaXNCb2R5T2tMaW5rKG5vZGUpYFxuICpcbiAqICAgKiBSZXR1cm4gYHRydWVgIGZvciBgbGlua2AgZWxlbWVudHMgd2l0aCBhbiBgaXRlbVByb3BgXG4gKiAgICogUmV0dXJuIGB0cnVlYCBmb3IgYGxpbmtgIGVsZW1lbnRzIHdpdGggYSBgcmVsYCBsaXN0IHdoZXJlIG9uZSBvciBtb3JlXG4gKiAgICAgZW50cmllcyBhcmUgYHBpbmdiYWNrYCwgYHByZWZldGNoYCwgb3IgYHN0eWxlc2hlZXRgLlxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgaXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzdC11dGlsLWhhcy1wcm9wZXJ0eScpXG5cbm1vZHVsZS5leHBvcnRzID0gb2tcblxudmFyIGxpc3QgPSBbJ3BpbmdiYWNrJywgJ3ByZWZldGNoJywgJ3N0eWxlc2hlZXQnXVxuXG5mdW5jdGlvbiBvayhub2RlKSB7XG4gIHZhciBsZW5ndGhcbiAgdmFyIGluZGV4XG4gIHZhciByZWxcblxuICBpZiAoIWlzKG5vZGUsICdsaW5rJykpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChoYXMobm9kZSwgJ2l0ZW1Qcm9wJykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVsID0gKG5vZGUucHJvcGVydGllcyB8fCB7fSkucmVsIHx8IFtdXG4gIGxlbmd0aCA9IHJlbC5sZW5ndGhcbiAgaW5kZXggPSAtMVxuXG4gIGlmIChyZWwubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChsaXN0LmluZGV4T2YocmVsW2luZGV4XSkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaXNFbGVtZW50XG5cbi8vIENoZWNrIGlmIGlmIGBub2RlYCBpcyBhbiBgZWxlbWVudGAgYW5kLCBpZiBgdGFnTmFtZXNgIGlzIGdpdmVuLCBgbm9kZWBcbi8vIG1hdGNoZXMgdGhlbSBgdGFnTmFtZXNgLlxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUsIHRhZ05hbWVzKSB7XG4gIHZhciBuYW1lXG5cbiAgaWYgKFxuICAgICEoXG4gICAgICB0YWdOYW1lcyA9PT0gbnVsbCB8fFxuICAgICAgdGFnTmFtZXMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdHlwZW9mIHRhZ05hbWVzID09PSAnc3RyaW5nJyB8fFxuICAgICAgKHR5cGVvZiB0YWdOYW1lcyA9PT0gJ29iamVjdCcgJiYgdGFnTmFtZXMubGVuZ3RoICE9PSAwKVxuICAgIClcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0V4cGVjdGVkIGBzdHJpbmdgIG9yIGBBcnJheS48c3RyaW5nPmAgZm9yIGB0YWdOYW1lc2AsIG5vdCBgJyArXG4gICAgICAgIHRhZ05hbWVzICtcbiAgICAgICAgJ2AnXG4gICAgKVxuICB9XG5cbiAgaWYgKFxuICAgICFub2RlIHx8XG4gICAgdHlwZW9mIG5vZGUgIT09ICdvYmplY3QnIHx8XG4gICAgbm9kZS50eXBlICE9PSAnZWxlbWVudCcgfHxcbiAgICB0eXBlb2Ygbm9kZS50YWdOYW1lICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0YWdOYW1lcyA9PT0gbnVsbCB8fCB0YWdOYW1lcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5hbWUgPSBub2RlLnRhZ05hbWVcblxuICBpZiAodHlwZW9mIHRhZ05hbWVzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuYW1lID09PSB0YWdOYW1lc1xuICB9XG5cbiAgcmV0dXJuIHRhZ05hbWVzLmluZGV4T2YobmFtZSkgIT09IC0xXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuXG52YXIgbnVtYmVyU2lnbiA9IDM1IC8vICAnIydcbnZhciBkb3QgPSA0NiAvLyAgJy4nXG5cbi8vIENyZWF0ZSBhIGhhc3QgZWxlbWVudCBmcm9tIGEgc2ltcGxlIENTUyBzZWxlY3Rvci5cbmZ1bmN0aW9uIHBhcnNlKHNlbGVjdG9yLCBkZWZhdWx0VGFnTmFtZSkge1xuICB2YXIgdmFsdWUgPSBzZWxlY3RvciB8fCAnJ1xuICB2YXIgbmFtZSA9IGRlZmF1bHRUYWdOYW1lIHx8ICdkaXYnXG4gIHZhciBwcm9wcyA9IHt9XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGNsYXNzTmFtZVxuICB2YXIgdHlwZVxuICB2YXIgY29kZVxuICB2YXIgc3VidmFsdWVcbiAgdmFyIGxhc3RJbmRleFxuXG4gIHdoaWxlICgrK2luZGV4IDw9IGxlbmd0aCkge1xuICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKCFjb2RlIHx8IGNvZGUgPT09IGRvdCB8fCBjb2RlID09PSBudW1iZXJTaWduKSB7XG4gICAgICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKGxhc3RJbmRleCwgaW5kZXgpXG5cbiAgICAgIGlmIChzdWJ2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gZG90KSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKHN1YnZhbHVlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBbc3VidmFsdWVdXG4gICAgICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gbnVtYmVyU2lnbikge1xuICAgICAgICAgIHByb3BzLmlkID0gc3VidmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYW1lID0gc3VidmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsYXN0SW5kZXggPSBpbmRleCArIDFcbiAgICAgIHR5cGUgPSBjb2RlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgdGFnTmFtZTogbmFtZSxcbiAgICBwcm9wZXJ0aWVzOiBwcm9wcyxcbiAgICBjaGlsZHJlbjogW11cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdG9NZGFzdFxuXG52YXIgbWluaWZ5ID0gcmVxdWlyZSgncmVoeXBlLW1pbmlmeS13aGl0ZXNwYWNlJylcbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIG9uZSA9IHJlcXVpcmUoJy4vbGliL29uZScpXG52YXIgaGFuZGxlcnMgPSByZXF1aXJlKCcuL2xpYi9oYW5kbGVycycpXG5cbmZ1bmN0aW9uIHRvTWRhc3QodHJlZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBvcHRzID0ge25ld2xpbmVzOiBzZXR0aW5ncy5uZXdsaW5lcyA9PT0gdHJ1ZX1cbiAgdmFyIGJ5SWQgPSB7fVxuXG4gIGgubm9kZUJ5SWQgPSBieUlkXG4gIGguYmFzZUZvdW5kID0gZmFsc2VcbiAgaC5mcm96ZW5CYXNlVXJsID0gbnVsbFxuXG4gIGguaGFuZGxlcnMgPSB4dGVuZChoYW5kbGVycywgc2V0dGluZ3MuaGFuZGxlcnMgfHwge30pXG4gIGguYXVnbWVudCA9IGF1Z21lbnRcbiAgaC5kb2N1bWVudCA9IHNldHRpbmdzLmRvY3VtZW50XG5cbiAgdmlzaXQodHJlZSwgb252aXNpdClcblxuICByZXR1cm4gb25lKGgsIG1pbmlmeShvcHRzKSh0cmVlKSwgbnVsbClcblxuICBmdW5jdGlvbiBoKG5vZGUsIHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICAgIHZhciByZXN1bHRcblxuICAgIGlmIChcbiAgICAgICFjaGlsZHJlbiAmJlxuICAgICAgKHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgKHR5cGVvZiBwcm9wcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gcHJvcHMpKVxuICAgICkge1xuICAgICAgY2hpbGRyZW4gPSBwcm9wc1xuICAgICAgcHJvcHMgPSB7fVxuICAgIH1cblxuICAgIHJlc3VsdCA9IHh0ZW5kKHt0eXBlOiB0eXBlfSwgcHJvcHMpXG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0LnZhbHVlID0gY2hpbGRyZW5cbiAgICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgICByZXN1bHQuY2hpbGRyZW4gPSBjaGlsZHJlblxuICAgIH1cblxuICAgIHJldHVybiBhdWdtZW50KG5vZGUsIHJlc3VsdClcbiAgfVxuXG4gIC8vIGByaWdodGAgaXMgdGhlIGZpbmFsaXplZCBtZGFzdCBub2RlLCBjcmVhdGVkIGZyb20gYGxlZnRgLCBhIGhhc3Qgbm9kZS5cbiAgZnVuY3Rpb24gYXVnbWVudChsZWZ0LCByaWdodCkge1xuICAgIGlmIChsZWZ0LnBvc2l0aW9uKSB7XG4gICAgICByaWdodC5wb3NpdGlvbiA9IGxlZnQucG9zaXRpb25cbiAgICB9XG5cbiAgICByZXR1cm4gcmlnaHRcbiAgfVxuXG4gIGZ1bmN0aW9uIG9udmlzaXQobm9kZSkge1xuICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcGVydGllcyB8fCB7fVxuICAgIHZhciBpZCA9IHByb3BzLmlkXG5cbiAgICBpZiAoaWQgJiYgIShpZCBpbiBub2RlKSkge1xuICAgICAgYnlJZFtpZF0gPSBub2RlXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbGxcblxudmFyIG9uZSA9IHJlcXVpcmUoJy4vb25lJylcblxuZnVuY3Rpb24gYWxsKGgsIHBhcmVudCkge1xuICB2YXIgbm9kZXMgPSBwYXJlbnQuY2hpbGRyZW4gfHwgW11cbiAgdmFyIGxlbmd0aCA9IG5vZGVzLmxlbmd0aFxuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc3VsdFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0ID0gb25lKGgsIG5vZGVzW2luZGV4XSwgcGFyZW50KVxuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChyZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlc1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVxuXG5mdW5jdGlvbiBiYXNlKGgsIG5vZGUpIHtcbiAgaWYgKCFoLmJhc2VGb3VuZCkge1xuICAgIGguZnJvemVuQmFzZVVybCA9IG5vZGUucHJvcGVydGllcy5ocmVmIHx8IG51bGxcbiAgICBoLmJhc2VGb3VuZCA9IHRydWVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYmxvY2txdW90ZVxuXG52YXIgd3JhcENoaWxkcmVuID0gcmVxdWlyZSgnLi4vdXRpbC93cmFwLWNoaWxkcmVuJylcblxuZnVuY3Rpb24gYmxvY2txdW90ZShoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdibG9ja3F1b3RlJywgd3JhcENoaWxkcmVuKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYnJcblxuZnVuY3Rpb24gYnIoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnYnJlYWsnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29kZVxuXG52YXIgaXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzdC11dGlsLWhhcy1wcm9wZXJ0eScpXG52YXIgdG9UZXh0ID0gcmVxdWlyZSgnaGFzdC11dGlsLXRvLXRleHQnKVxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltLXRyYWlsaW5nLWxpbmVzJylcblxudmFyIHByZWZpeCA9ICdsYW5ndWFnZS0nXG5cbmZ1bmN0aW9uIGNvZGUoaCwgbm9kZSkge1xuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGNoaWxkXG4gIHZhciBjbGFzc0xpc3RcbiAgdmFyIGNsYXNzTmFtZVxuICB2YXIgbGFuZ1xuXG4gIGlmIChub2RlLnRhZ05hbWUgPT09ICdwcmUnKSB7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG5cbiAgICAgIGlmIChpcyhjaGlsZCwgJ2NvZGUnKSAmJiBoYXMoY2hpbGQsICdjbGFzc05hbWUnKSkge1xuICAgICAgICBjbGFzc0xpc3QgPSBjaGlsZC5wcm9wZXJ0aWVzLmNsYXNzTmFtZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChjbGFzc0xpc3QpIHtcbiAgICBsZW5ndGggPSBjbGFzc0xpc3QubGVuZ3RoXG4gICAgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTGlzdFtpbmRleF1cblxuICAgICAgaWYgKGNsYXNzTmFtZS5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICAgIGxhbmcgPSBjbGFzc05hbWUuc2xpY2UocHJlZml4Lmxlbmd0aClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnY29kZScsIHtsYW5nOiBsYW5nIHx8IG51bGwsIG1ldGE6IG51bGx9LCB0cmltKHRvVGV4dChub2RlKSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjb21tZW50XG5cbmZ1bmN0aW9uIGNvbW1lbnQoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnaHRtbCcsICc8IS0tJyArIG5vZGUudmFsdWUgKyAnLS0+Jylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmlrZXRocm91Z2hcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHN0cmlrZXRocm91Z2goaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnZGVsZXRlJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZGF0YUxpc3RcblxudmFyIGlzID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKVxudmFyIHdyYXBMaXN0SXRlbXMgPSByZXF1aXJlKCcuLi91dGlsL3dyYXAtbGlzdC1pdGVtcycpXG52YXIgc3ByZWFkID0gcmVxdWlyZSgnLi4vdXRpbC9saXN0LWl0ZW1zLXNwcmVhZCcpXG5cbmZ1bmN0aW9uIGRhdGFMaXN0KGgsIG5vZGUpIHtcbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBjbGVhbiA9IFtdXG4gIHZhciBncm91cHMgPSBbXVxuICB2YXIgY29udGVudFxuICB2YXIgYnJlYWtwb2ludFxuICB2YXIgdGl0bGVcbiAgdmFyIGNoaWxkXG4gIHZhciBncm91cCA9IHt0aXRsZXM6IFtdLCBkZWZpbml0aW9uczogW119XG5cbiAgLy8gVW53cmFwIGA8ZGl2PmBzXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cbiAgICBjbGVhbiA9IGNsZWFuLmNvbmNhdChpcyhjaGlsZCwgJ2RpdicpID8gY2hpbGQuY2hpbGRyZW4gOiBjaGlsZClcbiAgfVxuXG4gIGxlbmd0aCA9IGNsZWFuLmxlbmd0aFxuICBpbmRleCA9IC0xXG5cbiAgLy8gR3JvdXAgdGl0bGVzIGFuZCBkZWZpbml0aW9ucy5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGlsZCA9IGNsZWFuW2luZGV4XVxuICAgIHRpdGxlID0gaXMoY2hpbGQsICdkdCcpXG5cbiAgICBpZiAodGl0bGUgJiYgYnJlYWtwb2ludCkge1xuICAgICAgZ3JvdXBzLnB1c2goZ3JvdXApXG4gICAgICBncm91cCA9IHt0aXRsZXM6IFtdLCBkZWZpbml0aW9uczogW119XG4gICAgfVxuXG4gICAgZ3JvdXBbdGl0bGUgPyAndGl0bGVzJyA6ICdkZWZpbml0aW9ucyddLnB1c2goY2hpbGQpXG4gICAgYnJlYWtwb2ludCA9IGlzKGNoaWxkLCAnZGQnKVxuICB9XG5cbiAgZ3JvdXBzLnB1c2goZ3JvdXApXG5cbiAgLy8gQ3JlYXRlIGl0ZW1zLlxuICBsZW5ndGggPSBncm91cHMubGVuZ3RoXG4gIGluZGV4ID0gLTFcbiAgY29udGVudCA9IFtdXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBncm91cCA9IGdyb3Vwc1tpbmRleF1cbiAgICBncm91cCA9IGhhbmRsZShoLCBncm91cC50aXRsZXMpLmNvbmNhdChoYW5kbGUoaCwgZ3JvdXAuZGVmaW5pdGlvbnMpKVxuXG4gICAgaWYgKGdyb3VwLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29udGVudC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpc3RJdGVtJyxcbiAgICAgICAgc3ByZWFkOiBncm91cC5sZW5ndGggPiAxLFxuICAgICAgICBjaGVja2VkOiBudWxsLFxuICAgICAgICBjaGlsZHJlbjogZ3JvdXBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgbGlzdCBpZiB0aGVyZSBhcmUgaXRlbXMuXG4gIGlmIChjb250ZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgIHJldHVybiBoKFxuICAgICAgbm9kZSxcbiAgICAgICdsaXN0JyxcbiAgICAgIHtvcmRlcmVkOiBmYWxzZSwgc3RhcnQ6IG51bGwsIHNwcmVhZDogc3ByZWFkKGNvbnRlbnQpfSxcbiAgICAgIGNvbnRlbnRcbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlKGgsIGNhdGVnb3J5KSB7XG4gIHZhciBub2RlcyA9IHdyYXBMaXN0SXRlbXMoaCwge2NoaWxkcmVuOiBjYXRlZ29yeX0pXG5cbiAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBub2Rlc1swXS5jaGlsZHJlblxuICB9XG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICBvcmRlcmVkOiBmYWxzZSxcbiAgICAgIHN0YXJ0OiBudWxsLFxuICAgICAgc3ByZWFkOiBzcHJlYWQobm9kZXMpLFxuICAgICAgY2hpbGRyZW46IG5vZGVzXG4gICAgfVxuICBdXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBlbXBoYXNpc1xuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gZW1waGFzaXMoaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnZW1waGFzaXMnLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBoZWFkaW5nXG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBoZWFkaW5nKGgsIG5vZGUpIHtcbiAgdmFyIGRlcHRoID0gTnVtYmVyKG5vZGUudGFnTmFtZS5jaGFyQXQoMSkpXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBgZWxzZWAgc2hvdWxkbuKAmXQgaGFwcGVuLCBvZiBjb3Vyc2XigKYgKi9cbiAgZGVwdGggPSBkZXB0aCB8fCAxXG5cbiAgcmV0dXJuIGgobm9kZSwgJ2hlYWRpbmcnLCB7ZGVwdGg6IGRlcHRofSwgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaWZyYW1lXG5cbnZhciByZXNvbHZlID0gcmVxdWlyZSgnLi4vdXRpbC9yZXNvbHZlJylcblxuZnVuY3Rpb24gaWZyYW1lKGgsIG5vZGUpIHtcbiAgdmFyIHNyYyA9IG5vZGUucHJvcGVydGllcy5zcmNcbiAgdmFyIHRpdGxlID0gbm9kZS5wcm9wZXJ0aWVzLnRpdGxlXG5cbiAgLy8gT25seSBjcmVhdGUgYSBsaW5rIGlmIHRoZXJlIGlzIGEgdGl0bGUuXG4gIC8vIFdlIGNhbuKAmXQgdXNlIHRoZSBjb250ZW50IG9mIHRoZSBmcmFtZSBiZWNhdXNlIGNvbmZvcm1pbmcgSFRNTCBwYXJzZXJzIHRyZWF0XG4gIC8vIGl0IGFzIHRleHQsIHdoZXJlYXMgbGVnYWN5IHBhcnNlcnMgdHJlYXQgaXQgYXMgSFRNTCwgc28gaXQgd2lsbCBsaWtlbHlcbiAgLy8gY29udGFpbiB0YWdzIHRoYXQgd2lsbCBzaG93IHVwIGluIHRleHQuXG4gIGlmIChzcmMgJiYgdGl0bGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICB1cmw6IHJlc29sdmUoaCwgc3JjKSxcbiAgICAgIGNoaWxkcmVuOiBbe3R5cGU6ICd0ZXh0JywgdmFsdWU6IHRpdGxlfV1cbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGltYWdlXG5cbnZhciByZXNvbHZlID0gcmVxdWlyZSgnLi4vdXRpbC9yZXNvbHZlJylcblxuZnVuY3Rpb24gaW1hZ2UoaCwgbm9kZSkge1xuICB2YXIgcHJvcHMgPSB7XG4gICAgdXJsOiByZXNvbHZlKGgsIG5vZGUucHJvcGVydGllcy5zcmMpLFxuICAgIHRpdGxlOiBub2RlLnByb3BlcnRpZXMudGl0bGUgfHwgbnVsbCxcbiAgICBhbHQ6IG5vZGUucHJvcGVydGllcy5hbHQgfHwgbnVsbFxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2ltYWdlJywgcHJvcHMpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG52YXIgd3JhcHBlZCA9IHJlcXVpcmUoJy4uL3V0aWwvd3JhcC1jaGlsZHJlbicpXG52YXIgYmFzZSA9IHJlcXVpcmUoJy4vYmFzZScpXG52YXIgYmxvY2txdW90ZSA9IHJlcXVpcmUoJy4vYmxvY2txdW90ZScpXG52YXIgYnIgPSByZXF1aXJlKCcuL2JyZWFrJylcbnZhciBjZWxsID0gcmVxdWlyZSgnLi90YWJsZS1jZWxsJylcbnZhciBjb2RlID0gcmVxdWlyZSgnLi9jb2RlJylcbnZhciBjb21tZW50ID0gcmVxdWlyZSgnLi9jb21tZW50JylcbnZhciBkbCA9IHJlcXVpcmUoJy4vZGwnKVxudmFyIGRlbCA9IHJlcXVpcmUoJy4vZGVsZXRlJylcbnZhciBlbXBoYXNpcyA9IHJlcXVpcmUoJy4vZW1waGFzaXMnKVxudmFyIGhlYWRpbmcgPSByZXF1aXJlKCcuL2hlYWRpbmcnKVxudmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vaWZyYW1lJylcbnZhciBpbWFnZSA9IHJlcXVpcmUoJy4vaW1hZ2UnKVxudmFyIGlubGluZUNvZGUgPSByZXF1aXJlKCcuL2lubGluZS1jb2RlJylcbnZhciBpbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQnKVxudmFyIGxpbmsgPSByZXF1aXJlKCcuL2xpbmsnKVxudmFyIGxpc3QgPSByZXF1aXJlKCcuL2xpc3QnKVxudmFyIGxpc3RJdGVtID0gcmVxdWlyZSgnLi9saXN0LWl0ZW0nKVxudmFyIG1lZGlhID0gcmVxdWlyZSgnLi9tZWRpYScpXG52YXIgcGFyYWdyYXBoID0gcmVxdWlyZSgnLi9wYXJhZ3JhcGgnKVxudmFyIHF1b3RlID0gcmVxdWlyZSgnLi9xJylcbnZhciByb290ID0gcmVxdWlyZSgnLi9yb290JylcbnZhciByb3cgPSByZXF1aXJlKCcuL3RhYmxlLXJvdycpXG52YXIgc2VsZWN0ID0gcmVxdWlyZSgnLi9zZWxlY3QnKVxudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vc3Ryb25nJylcbnZhciB0YWJsZSA9IHJlcXVpcmUoJy4vdGFibGUnKVxudmFyIHRleHQgPSByZXF1aXJlKCcuL3RleHQnKVxudmFyIHRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYScpXG52YXIgdGhlbWF0aWNCcmVhayA9IHJlcXVpcmUoJy4vdGhlbWF0aWMtYnJlYWsnKVxudmFyIHdiciA9IHJlcXVpcmUoJy4vd2JyJylcblxuZXhwb3J0cy5yb290ID0gcm9vdFxuZXhwb3J0cy50ZXh0ID0gdGV4dFxuZXhwb3J0cy5jb21tZW50ID0gY29tbWVudFxuZXhwb3J0cy5kb2N0eXBlID0gaWdub3JlXG5cbmV4cG9ydHMuYXBwbGV0ID0gaWdub3JlXG5leHBvcnRzLmFyZWEgPSBpZ25vcmVcbmV4cG9ydHMuYmFzZWZvbnQgPSBpZ25vcmVcbmV4cG9ydHMuYmdzb3VuZCA9IGlnbm9yZVxuZXhwb3J0cy5jYXB0aW9uID0gaWdub3JlXG5leHBvcnRzLmNvbCA9IGlnbm9yZVxuZXhwb3J0cy5jb2xncm91cCA9IGlnbm9yZVxuZXhwb3J0cy5jb21tYW5kID0gaWdub3JlXG5leHBvcnRzLmNvbnRlbnQgPSBpZ25vcmVcbmV4cG9ydHMuZGF0YWxpc3QgPSBpZ25vcmVcbmV4cG9ydHMuZGlhbG9nID0gaWdub3JlXG5leHBvcnRzLmVsZW1lbnQgPSBpZ25vcmVcbmV4cG9ydHMuZW1iZWQgPSBpZ25vcmVcbmV4cG9ydHMuZnJhbWUgPSBpZ25vcmVcbmV4cG9ydHMuZnJhbWVzZXQgPSBpZ25vcmVcbmV4cG9ydHMuaXNpbmRleCA9IGlnbm9yZVxuZXhwb3J0cy5rZXlnZW4gPSBpZ25vcmVcbmV4cG9ydHMubGluayA9IGlnbm9yZVxuZXhwb3J0cy5tYXRoID0gaWdub3JlXG5leHBvcnRzLm1lbnUgPSBpZ25vcmVcbmV4cG9ydHMubWVudWl0ZW0gPSBpZ25vcmVcbmV4cG9ydHMubWV0YSA9IGlnbm9yZVxuZXhwb3J0cy5uZXh0aWQgPSBpZ25vcmVcbmV4cG9ydHMubm9lbWJlZCA9IGlnbm9yZVxuZXhwb3J0cy5ub2ZyYW1lcyA9IGlnbm9yZVxuZXhwb3J0cy5vcHRncm91cCA9IGlnbm9yZVxuZXhwb3J0cy5vcHRpb24gPSBpZ25vcmVcbmV4cG9ydHMucGFyYW0gPSBpZ25vcmVcbmV4cG9ydHMuc2NyaXB0ID0gaWdub3JlXG5leHBvcnRzLnNoYWRvdyA9IGlnbm9yZVxuZXhwb3J0cy5zb3VyY2UgPSBpZ25vcmVcbmV4cG9ydHMuc3BhY2VyID0gaWdub3JlXG5leHBvcnRzLnN0eWxlID0gaWdub3JlXG5leHBvcnRzLnN2ZyA9IGlnbm9yZVxuZXhwb3J0cy50ZW1wbGF0ZSA9IGlnbm9yZVxuZXhwb3J0cy50aXRsZSA9IGlnbm9yZVxuZXhwb3J0cy50cmFjayA9IGlnbm9yZVxuXG5leHBvcnRzLmFiYnIgPSBhbGxcbmV4cG9ydHMuYWNyb255bSA9IGFsbFxuZXhwb3J0cy5iZGkgPSBhbGxcbmV4cG9ydHMuYmRvID0gYWxsXG5leHBvcnRzLmJpZyA9IGFsbFxuZXhwb3J0cy5ibGluayA9IGFsbFxuZXhwb3J0cy5idXR0b24gPSBhbGxcbmV4cG9ydHMuY2FudmFzID0gYWxsXG5leHBvcnRzLmNpdGUgPSBhbGxcbmV4cG9ydHMuZGF0YSA9IGFsbFxuZXhwb3J0cy5kZXRhaWxzID0gYWxsXG5leHBvcnRzLmRmbiA9IGFsbFxuZXhwb3J0cy5mb250ID0gYWxsXG5leHBvcnRzLmlucyA9IGFsbFxuZXhwb3J0cy5sYWJlbCA9IGFsbFxuZXhwb3J0cy5tYXAgPSBhbGxcbmV4cG9ydHMubWFycXVlZSA9IGFsbFxuZXhwb3J0cy5tZXRlciA9IGFsbFxuZXhwb3J0cy5ub2JyID0gYWxsXG5leHBvcnRzLm5vc2NyaXB0ID0gYWxsXG5leHBvcnRzLm9iamVjdCA9IGFsbFxuZXhwb3J0cy5vdXRwdXQgPSBhbGxcbmV4cG9ydHMucHJvZ3Jlc3MgPSBhbGxcbmV4cG9ydHMucmIgPSBhbGxcbmV4cG9ydHMucmJjID0gYWxsXG5leHBvcnRzLnJwID0gYWxsXG5leHBvcnRzLnJ0ID0gYWxsXG5leHBvcnRzLnJ0YyA9IGFsbFxuZXhwb3J0cy5ydWJ5ID0gYWxsXG5leHBvcnRzLnNsb3QgPSBhbGxcbmV4cG9ydHMuc21hbGwgPSBhbGxcbmV4cG9ydHMuc3BhbiA9IGFsbFxuZXhwb3J0cy5zdXAgPSBhbGxcbmV4cG9ydHMuc3ViID0gYWxsXG5leHBvcnRzLnRib2R5ID0gYWxsXG5leHBvcnRzLnRmb290ID0gYWxsXG5leHBvcnRzLnRoZWFkID0gYWxsXG5leHBvcnRzLnRpbWUgPSBhbGxcblxuZXhwb3J0cy5hZGRyZXNzID0gd3JhcHBlZFxuZXhwb3J0cy5hcnRpY2xlID0gd3JhcHBlZFxuZXhwb3J0cy5hc2lkZSA9IHdyYXBwZWRcbmV4cG9ydHMuYm9keSA9IHdyYXBwZWRcbmV4cG9ydHMuY2VudGVyID0gd3JhcHBlZFxuZXhwb3J0cy5kaXYgPSB3cmFwcGVkXG5leHBvcnRzLmZpZWxkc2V0ID0gd3JhcHBlZFxuZXhwb3J0cy5maWdjYXB0aW9uID0gd3JhcHBlZFxuZXhwb3J0cy5maWd1cmUgPSB3cmFwcGVkXG5leHBvcnRzLmZvcm0gPSB3cmFwcGVkXG5leHBvcnRzLmZvb3RlciA9IHdyYXBwZWRcbmV4cG9ydHMuaGVhZGVyID0gd3JhcHBlZFxuZXhwb3J0cy5oZ3JvdXAgPSB3cmFwcGVkXG5leHBvcnRzLmh0bWwgPSB3cmFwcGVkXG5leHBvcnRzLmxlZ2VuZCA9IHdyYXBwZWRcbmV4cG9ydHMubWFpbiA9IHdyYXBwZWRcbmV4cG9ydHMubXVsdGljb2wgPSB3cmFwcGVkXG5leHBvcnRzLm5hdiA9IHdyYXBwZWRcbmV4cG9ydHMucGljdHVyZSA9IHdyYXBwZWRcbmV4cG9ydHMuc2VjdGlvbiA9IHdyYXBwZWRcblxuZXhwb3J0cy5hID0gbGlua1xuZXhwb3J0cy5hdWRpbyA9IG1lZGlhXG5leHBvcnRzLmIgPSBzdHJvbmdcbmV4cG9ydHMuYmFzZSA9IGJhc2VcbmV4cG9ydHMuYmxvY2txdW90ZSA9IGJsb2NrcXVvdGVcbmV4cG9ydHMuYnIgPSBiclxuZXhwb3J0cy5jb2RlID0gaW5saW5lQ29kZVxuZXhwb3J0cy5kaXIgPSBsaXN0XG5leHBvcnRzLmRsID0gZGxcbmV4cG9ydHMuZHQgPSBsaXN0SXRlbVxuZXhwb3J0cy5kZCA9IGxpc3RJdGVtXG5leHBvcnRzLmRlbCA9IGRlbFxuZXhwb3J0cy5lbSA9IGVtcGhhc2lzXG5leHBvcnRzLmgxID0gaGVhZGluZ1xuZXhwb3J0cy5oMiA9IGhlYWRpbmdcbmV4cG9ydHMuaDMgPSBoZWFkaW5nXG5leHBvcnRzLmg0ID0gaGVhZGluZ1xuZXhwb3J0cy5oNSA9IGhlYWRpbmdcbmV4cG9ydHMuaDYgPSBoZWFkaW5nXG5leHBvcnRzLmhyID0gdGhlbWF0aWNCcmVha1xuZXhwb3J0cy5pID0gZW1waGFzaXNcbmV4cG9ydHMuaWZyYW1lID0gaWZyYW1lXG5leHBvcnRzLmltZyA9IGltYWdlXG5leHBvcnRzLmltYWdlID0gaW1hZ2VcbmV4cG9ydHMuaW5wdXQgPSBpbnB1dFxuZXhwb3J0cy5rYmQgPSBpbmxpbmVDb2RlXG5leHBvcnRzLmxpID0gbGlzdEl0ZW1cbmV4cG9ydHMubGlzdGluZyA9IGNvZGVcbmV4cG9ydHMubWFyayA9IGVtcGhhc2lzXG5leHBvcnRzLm9sID0gbGlzdFxuZXhwb3J0cy5wID0gcGFyYWdyYXBoXG5leHBvcnRzLnBsYWludGV4dCA9IGNvZGVcbmV4cG9ydHMucHJlID0gY29kZVxuZXhwb3J0cy5xID0gcXVvdGVcbmV4cG9ydHMucyA9IGRlbFxuZXhwb3J0cy5zYW1wID0gaW5saW5lQ29kZVxuZXhwb3J0cy5zZWxlY3QgPSBzZWxlY3RcbmV4cG9ydHMuc3RyaWtlID0gZGVsXG5leHBvcnRzLnN0cm9uZyA9IHN0cm9uZ1xuZXhwb3J0cy5zdW1tYXJ5ID0gcGFyYWdyYXBoXG5leHBvcnRzLnRhYmxlID0gdGFibGVcbmV4cG9ydHMudGQgPSBjZWxsXG5leHBvcnRzLnRleHRhcmVhID0gdGV4dGFyZWFcbmV4cG9ydHMudGggPSBjZWxsXG5leHBvcnRzLnRyID0gcm93XG5leHBvcnRzLnR0ID0gaW5saW5lQ29kZVxuZXhwb3J0cy51ID0gZW1waGFzaXNcbmV4cG9ydHMudWwgPSBsaXN0XG5leHBvcnRzLnZhciA9IGlubGluZUNvZGVcbmV4cG9ydHMudmlkZW8gPSBtZWRpYVxuZXhwb3J0cy53YnIgPSB3YnJcbmV4cG9ydHMueG1wID0gY29kZVxuXG5mdW5jdGlvbiBpZ25vcmUoKSB7fVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaW5saW5lQ29kZVxuXG52YXIgdG9UZXh0ID0gcmVxdWlyZSgnaGFzdC11dGlsLXRvLXRleHQnKVxuXG5mdW5jdGlvbiBpbmxpbmVDb2RlKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2lubGluZUNvZGUnLCB0b1RleHQobm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIGlzID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKVxudmFyIHJlc29sdmUgPSByZXF1aXJlKCcuLi91dGlsL3Jlc29sdmUnKVxudmFyIGZpbmRTZWxlY3RlZE9wdGlvbnMgPSByZXF1aXJlKCcuLi91dGlsL2ZpbmQtc2VsZWN0ZWQtb3B0aW9ucycpXG5cbm1vZHVsZS5leHBvcnRzID0gaW5wdXRcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIGlucHV0KGgsIG5vZGUpIHtcbiAgdmFyIGJ5SWQgPSBoLm5vZGVCeUlkXG4gIHZhciBwcm9wcyA9IG5vZGUucHJvcGVydGllc1xuICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZSB8fCBwcm9wcy5wbGFjZWhvbGRlclxuICB2YXIgbGlzdCA9IHByb3BzLmxpc3RcbiAgdmFyIHR5cGUgPSBwcm9wcy50eXBlXG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgbGVuZ3RoXG4gIHZhciBpbmRleFxuICB2YXIgcmVzdWx0c1xuICB2YXIgdXJsXG4gIHZhciB0ZXh0XG5cbiAgaWYgKHByb3BzLmRpc2FibGVkIHx8IHByb3BzLnR5cGUgPT09ICdoaWRkZW4nIHx8IHByb3BzLnR5cGUgPT09ICdmaWxlJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdjaGVja2JveCcgfHwgdHlwZSA9PT0gJ3JhZGlvJykge1xuICAgIHJldHVybiB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ1snICsgKHByb3BzLmNoZWNrZWQgPyAneCcgOiAnICcpICsgJ10nfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdpbWFnZScgJiYgcHJvcHMuYWx0KSB7XG4gICAgdmFsdWVzID0gW1twcm9wcy5hbHRdXVxuICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgdmFsdWVzID0gW1t2YWx1ZV1dXG4gIH0gZWxzZSBpZiAoXG4gICAgbGlzdCAmJlxuICAgIHR5cGUgIT09ICdwYXNzd29yZCcgJiYgLy8gYGxpc3RgIGlzIG5vdCBzdXBwb3J0ZWQgb24gYHBhc3N3b3JkYFxuICAgIHR5cGUgIT09ICdmaWxlJyAmJiAvLyDigKZvciBgZmlsZWBcbiAgICB0eXBlICE9PSAnc3VibWl0JyAmJiAvLyDigKZvciBgc3VibWl0YFxuICAgIHR5cGUgIT09ICdyZXNldCcgJiYgLy8g4oCmb3IgYHJlc2V0YFxuICAgIHR5cGUgIT09ICdidXR0b24nICYmIC8vIOKApm9yIGBidXR0b25gXG4gICAgbGlzdCBpbiBieUlkICYmXG4gICAgaXMoYnlJZFtsaXN0XSwgJ2RhdGFsaXN0JylcbiAgKSB7XG4gICAgdmFsdWVzID0gZmluZFNlbGVjdGVkT3B0aW9ucyhieUlkW2xpc3RdLCBwcm9wcylcbiAgfVxuXG4gIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBQYXNzd29yZHMgZG9u4oCZdCBzdXBwb3J0IGBsaXN0YC5cbiAgaWYgKHR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICB2YWx1ZXNbMF0gPSBbcmVwZWF0KCfigKInLCB2YWx1ZXNbMF1bMF0ubGVuZ3RoKV1cbiAgfVxuXG4gIC8vIEltYWdlcyBkb27igJl0IHN1cHBvcnQgYGxpc3RgLlxuICBpZiAodHlwZSA9PT0gJ2ltYWdlJykge1xuICAgIHJldHVybiBoKG5vZGUsICdpbWFnZScsIHtcbiAgICAgIHVybDogcmVzb2x2ZShoLCBwcm9wcy5zcmMpLFxuICAgICAgdGl0bGU6IHByb3BzLnRpdGxlIHx8IG51bGwsXG4gICAgICBhbHQ6IHZhbHVlc1swXVswXVxuICAgIH0pXG4gIH1cblxuICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIGluZGV4ID0gLTFcbiAgcmVzdWx0cyA9IFtdXG5cbiAgaWYgKHR5cGUgIT09ICd1cmwnICYmIHR5cGUgIT09ICdlbWFpbCcpIHtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdXG4gICAgICByZXN1bHRzLnB1c2godmFsdWVbMV0gPyB2YWx1ZVsxXSArICcgKCcgKyB2YWx1ZVswXSArICcpJyA6IHZhbHVlWzBdKVxuICAgIH1cblxuICAgIHJldHVybiBoLmF1Z21lbnQobm9kZSwge3R5cGU6ICd0ZXh0JywgdmFsdWU6IHJlc3VsdHMuam9pbignLCAnKX0pXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlID0gdmFsdWVzW2luZGV4XVxuICAgIHRleHQgPSByZXNvbHZlKGgsIHZhbHVlWzBdKVxuICAgIHVybCA9IHR5cGUgPT09ICdlbWFpbCcgPyAnbWFpbHRvOicgKyB0ZXh0IDogdGV4dFxuXG4gICAgcmVzdWx0cy5wdXNoKFxuICAgICAgaChub2RlLCAnbGluaycsIHt0aXRsZTogbnVsbCwgdXJsOiB1cmx9LCBbXG4gICAgICAgIHt0eXBlOiAndGV4dCcsIHZhbHVlOiB2YWx1ZVsxXSB8fCB0ZXh0fVxuICAgICAgXSlcbiAgICApXG5cbiAgICBpZiAoaW5kZXggIT09IGxlbmd0aCAtIDEpIHtcbiAgICAgIHJlc3VsdHMucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogJywgJ30pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmtcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG52YXIgcmVzb2x2ZSA9IHJlcXVpcmUoJy4uL3V0aWwvcmVzb2x2ZScpXG5cbmZ1bmN0aW9uIGxpbmsoaCwgbm9kZSkge1xuICB2YXIgcHJvcHMgPSB7XG4gICAgdXJsOiByZXNvbHZlKGgsIG5vZGUucHJvcGVydGllcy5ocmVmKSxcbiAgICB0aXRsZTogbm9kZS5wcm9wZXJ0aWVzLnRpdGxlIHx8IG51bGxcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdsaW5rJywgcHJvcHMsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RJdGVtXG5cbnZhciBpcyA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JylcbnZhciB3cmFwQ2hpbGRyZW4gPSByZXF1aXJlKCcuLi91dGlsL3dyYXAtY2hpbGRyZW4nKVxuXG5mdW5jdGlvbiBsaXN0SXRlbShoLCBub2RlKSB7XG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGhlYWQgPSBjaGlsZHJlblswXVxuICB2YXIgY2hlY2tlZCA9IG51bGxcbiAgdmFyIGNoZWNrYm94XG4gIHZhciBncmFuZGNoaWxkcmVuXG4gIHZhciBjb250ZW50XG5cbiAgLy8gQ2hlY2sgaWYgdGhpcyBub2RlIHN0YXJ0cyB3aXRoIGEgY2hlY2tib3guXG4gIGlmIChoZWFkICYmIGlzKGhlYWQsICdwJykpIHtcbiAgICBncmFuZGNoaWxkcmVuID0gaGVhZC5jaGlsZHJlblxuICAgIGNoZWNrYm94ID0gZ3JhbmRjaGlsZHJlblswXVxuXG4gICAgaWYgKFxuICAgICAgY2hlY2tib3ggJiZcbiAgICAgIGlzKGNoZWNrYm94LCAnaW5wdXQnKSAmJlxuICAgICAgKGNoZWNrYm94LnByb3BlcnRpZXMudHlwZSA9PT0gJ2NoZWNrYm94JyB8fFxuICAgICAgICBjaGVja2JveC5wcm9wZXJ0aWVzLnR5cGUgPT09ICdyYWRpbycpXG4gICAgKSB7XG4gICAgICBjaGVja2VkID0gQm9vbGVhbihjaGVja2JveC5wcm9wZXJ0aWVzLmNoZWNrZWQpXG4gICAgfVxuICB9XG5cbiAgY29udGVudCA9IHdyYXBDaGlsZHJlbihoLCBub2RlKVxuXG4gIGlmIChjaGVja2VkICE9PSBudWxsKSB7XG4gICAgZ3JhbmRjaGlsZHJlbiA9IGNvbnRlbnRbMF0gJiYgY29udGVudFswXS5jaGlsZHJlblxuXG4gICAgLy8gUmVtb3ZlIHRleHQgY2hlY2tib3ggKGVuYWJsZWQgaW5wdXRzIGFyZSBtYXBwZWQgdG8gdGV4dHVhbCBjaGVja2JveGVzKS5cbiAgICBoZWFkID0gZ3JhbmRjaGlsZHJlbiAmJiBncmFuZGNoaWxkcmVuWzBdXG5cbiAgICBpZiAoXG4gICAgICBoZWFkICYmXG4gICAgICBoZWFkLnR5cGUgPT09ICd0ZXh0JyAmJlxuICAgICAgaGVhZC52YWx1ZS5sZW5ndGggPT09IDMgJiZcbiAgICAgIGhlYWQudmFsdWUuY2hhckF0KDApID09PSAnWycgJiZcbiAgICAgIGhlYWQudmFsdWUuY2hhckF0KDIpID09PSAnXSdcbiAgICApIHtcbiAgICAgIGdyYW5kY2hpbGRyZW4uc2hpZnQoKVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBpbml0aWFsIHNwYWNpbmcgaWYgd2UgcHJldmlvdXNseSBmb3VuZCBhIGNoZWNrYm94LlxuICAgIGhlYWQgPSBncmFuZGNoaWxkcmVuICYmIGdyYW5kY2hpbGRyZW5bMF1cblxuICAgIGlmIChoZWFkICYmIGhlYWQudHlwZSA9PT0gJ3RleHQnICYmIGhlYWQudmFsdWUuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIC8vIFJlbW92ZSB0ZXh0IHdpdGggb25lIHNwYWNlLCBvciByZW1vdmUgdGhhdCBvbmUgaW5pdGlhbCBzcGFjZS5cbiAgICAgIGlmIChoZWFkLnZhbHVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb250ZW50WzBdLmNoaWxkcmVuID0gZ3JhbmRjaGlsZHJlbi5zbGljZSgxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZC52YWx1ZSA9IGhlYWQudmFsdWUuc2xpY2UoMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaChcbiAgICBub2RlLFxuICAgICdsaXN0SXRlbScsXG4gICAge3NwcmVhZDogY29udGVudC5sZW5ndGggPiAxLCBjaGVja2VkOiBjaGVja2VkfSxcbiAgICBjb250ZW50XG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1oYXMtcHJvcGVydHknKVxudmFyIHdyYXBMaXN0SXRlbXMgPSByZXF1aXJlKCcuLi91dGlsL3dyYXAtbGlzdC1pdGVtcycpXG52YXIgc3ByZWFkID0gcmVxdWlyZSgnLi4vdXRpbC9saXN0LWl0ZW1zLXNwcmVhZCcpXG5cbmZ1bmN0aW9uIGxpc3QoaCwgbm9kZSkge1xuICB2YXIgb3JkZXJlZCA9IG5vZGUudGFnTmFtZSA9PT0gJ29sJ1xuICB2YXIgc3RhcnQgPSBudWxsXG4gIHZhciBjaGlsZHJlblxuXG4gIGlmIChvcmRlcmVkKSB7XG4gICAgc3RhcnQgPSBoYXMobm9kZSwgJ3N0YXJ0JykgPyBub2RlLnByb3BlcnRpZXMuc3RhcnQgOiAxXG4gIH1cblxuICBjaGlsZHJlbiA9IHdyYXBMaXN0SXRlbXMoaCwgbm9kZSlcblxuICByZXR1cm4gaChcbiAgICBub2RlLFxuICAgICdsaXN0JyxcbiAgICB7b3JkZXJlZDogb3JkZXJlZCwgc3RhcnQ6IHN0YXJ0LCBzcHJlYWQ6IHNwcmVhZChjaGlsZHJlbil9LFxuICAgIGNoaWxkcmVuXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhXG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxudmFyIGlzID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKVxudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnbWRhc3QtdXRpbC10by1zdHJpbmcnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG52YXIgcmVzb2x2ZSA9IHJlcXVpcmUoJy4uL3V0aWwvcmVzb2x2ZScpXG52YXIgbmVlZGVkID0gcmVxdWlyZSgnLi4vdXRpbC93cmFwJykubmVlZGVkXG5cbmZ1bmN0aW9uIG1lZGlhKGgsIG5vZGUpIHtcbiAgdmFyIG5vZGVzID0gYWxsKGgsIG5vZGUpXG4gIHZhciB0aXRsZSA9IG5vZGUucHJvcGVydGllcy50aXRsZVxuICB2YXIgcG9zdGVyID0gaXMobm9kZSwgJ3ZpZGVvJykgPyBub2RlLnByb3BlcnRpZXMucG9zdGVyIDogbnVsbFxuICB2YXIgc3JjID0gbm9kZS5wcm9wZXJ0aWVzLnNyY1xuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxpbmtJbkZhbGxiYWNrQ29udGVudCA9IGZhbHNlXG4gIHZhciBjaGlsZFxuXG4gIC8vIEZpbmQgdGhlIHNvdXJjZS5cbiAgd2hpbGUgKCFzcmMgJiYgKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG5cbiAgICBpZiAoaXMoY2hpbGQsICdzb3VyY2UnKSkge1xuICAgICAgc3JjID0gY2hpbGQucHJvcGVydGllcy5zcmNcbiAgICB9XG4gIH1cblxuICB2aXNpdCh7dHlwZTogJ3Jvb3QnLCBjaGlsZHJlbjogbm9kZXN9LCAnbGluaycsIGZpbmRMaW5rKVxuXG4gIC8vIElmIHRoZSBjb250ZW50IGxpbmtzIHRvIHNvbWV0aGluZywgb3IgaWYgaXTigJlzIG5vdCBwaHJhc2luZ+KAplxuICBpZiAobGlua0luRmFsbGJhY2tDb250ZW50IHx8IG5lZWRlZChub2RlcykpIHtcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIC8vIElmIHRoZXJl4oCZcyBhIHBvc3RlciBkZWZpbmVkIG9uIHRoZSB2aWRlbywgY3JlYXRlIGFuIGltYWdlLlxuICBpZiAocG9zdGVyKSB7XG4gICAgbm9kZXMgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICB1cmw6IHJlc29sdmUoaCwgcG9zdGVyKSxcbiAgICAgICAgYWx0OiB0b1N0cmluZyh7Y2hpbGRyZW46IG5vZGVzfSlcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvLyBMaW5rIHRvIHRoZSBtZWRpYSByZXNvdXJjZS5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgdGl0bGU6IHRpdGxlIHx8IG51bGwsXG4gICAgdXJsOiByZXNvbHZlKGgsIHNyYyksXG4gICAgY2hpbGRyZW46IG5vZGVzXG4gIH1cblxuICBmdW5jdGlvbiBmaW5kTGluaygpIHtcbiAgICBsaW5rSW5GYWxsYmFja0NvbnRlbnQgPSB0cnVlXG4gICAgcmV0dXJuIHZpc2l0LkVYSVRcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyYWdyYXBoXG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBwYXJhZ3JhcGgoaCwgbm9kZSkge1xuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBub2RlcyA9IGFsbChoLCBub2RlKVxuXG4gIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDAgJiYgbm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAncGFyYWdyYXBoJywgbm9kZXMpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBxXG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG52YXIgcXVvdGUgPSAnXCInXG5cbmZ1bmN0aW9uIHEoaCwgbm9kZSkge1xuICB2YXIgY29udGVudHMgPSBhbGwoaCwgbm9kZSlcbiAgdmFyIGhlYWQgPSBjb250ZW50c1swXVxuICB2YXIgdGFpbCA9IGNvbnRlbnRzW2NvbnRlbnRzLmxlbmd0aCAtIDFdXG5cbiAgaWYgKGhlYWQgJiYgaGVhZC50eXBlID09PSAndGV4dCcpIHtcbiAgICBoZWFkLnZhbHVlID0gcXVvdGUgKyBoZWFkLnZhbHVlXG4gIH0gZWxzZSB7XG4gICAgY29udGVudHMudW5zaGlmdCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogcXVvdGV9KVxuICB9XG5cbiAgaWYgKHRhaWwgJiYgdGFpbC50eXBlID09PSAndGV4dCcpIHtcbiAgICB0YWlsLnZhbHVlICs9IHF1b3RlXG4gIH0gZWxzZSB7XG4gICAgY29udGVudHMucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogcXVvdGV9KVxuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnRzXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByb290XG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi91dGlsL3dyYXAnKVxuXG5mdW5jdGlvbiByb290KGgsIG5vZGUpIHtcbiAgdmFyIGNoaWxkcmVuID0gYWxsKGgsIG5vZGUpXG5cbiAgaWYgKGguZG9jdW1lbnQgfHwgd3JhcC5uZWVkZWQoY2hpbGRyZW4pKSB7XG4gICAgY2hpbGRyZW4gPSB3cmFwKGNoaWxkcmVuKVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ3Jvb3QnLCBjaGlsZHJlbilcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZmluZFNlbGVjdGVkT3B0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWwvZmluZC1zZWxlY3RlZC1vcHRpb25zJylcblxubW9kdWxlLmV4cG9ydHMgPSBzZWxlY3RcblxuZnVuY3Rpb24gc2VsZWN0KGgsIG5vZGUpIHtcbiAgdmFyIHZhbHVlcyA9IGZpbmRTZWxlY3RlZE9wdGlvbnMobm9kZSlcbiAgdmFyIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc3VsdHMgPSBbXVxuICB2YXIgdmFsdWVcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlID0gdmFsdWVzW2luZGV4XVxuICAgIHJlc3VsdHMucHVzaCh2YWx1ZVsxXSA/IHZhbHVlWzFdICsgJyAoJyArIHZhbHVlWzBdICsgJyknIDogdmFsdWVbMF0pXG4gIH1cblxuICBpZiAocmVzdWx0cy5sZW5ndGggIT09IDApIHtcbiAgICByZXR1cm4gaC5hdWdtZW50KG5vZGUsIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbHVlOiByZXN1bHRzLmpvaW4oJywgJylcbiAgICB9KVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJvbmdcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHN0cm9uZyhoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdzdHJvbmcnLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjZWxsXG5cbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBjZWxsKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ3RhYmxlQ2VsbCcsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvd1xuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gcm93KGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ3RhYmxlUm93JywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGFibGVcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gdGFibGUoaCwgbm9kZSkge1xuICB2YXIgYWxpZ24gPSBhbGlnbm1lbnQobm9kZSlcbiAgcmV0dXJuIGgobm9kZSwgJ3RhYmxlJywge2FsaWduOiBhbGlnbn0sIHRvUm93cyhhbGwoaCwgbm9kZSksIGFsaWduLmxlbmd0aCkpXG59XG5cbi8vIEluZmVyIHRoZSBhbGlnbm1lbnQgb2YgdGhlIHRhYmxlLlxuZnVuY3Rpb24gYWxpZ25tZW50KG5vZGUpIHtcbiAgdmFyIGFsaWduID0gW11cblxuICB2aXNpdChub2RlLCB2aXNpdG9yKVxuXG4gIHJldHVybiBhbGlnblxuXG4gIGZ1bmN0aW9uIHZpc2l0b3IoY2hpbGQsIGluZGV4LCBwYXJlbnQpIHtcbiAgICB2YXIgcG9zXG5cbiAgICBpZiAoY2VsbChjaGlsZCkpIHtcbiAgICAgIHBvcyA9IGNlbGxzQmVmb3JlKHBhcmVudCwgY2hpbGQpXG4gICAgICBpZiAoIWFsaWduW3Bvc10pIHtcbiAgICAgICAgYWxpZ25bcG9zXSA9IGNoaWxkLnByb3BlcnRpZXMuYWxpZ24gfHwgbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBDb3VudCBjZWxscyBpbiBgcGFyZW50YCBiZWZvcmUgYG5vZGVgLlxuZnVuY3Rpb24gY2VsbHNCZWZvcmUocGFyZW50LCBub2RlKSB7XG4gIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBjaGlsZFxuICB2YXIgcG9zID0gMFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cblxuICAgIGlmIChjaGlsZCA9PT0gbm9kZSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAtIFdoZW4gcHJvcGVyIEhUTUwsIHNob3VsZCBhbHdheXMgYmUgYSBjZWxsICovXG4gICAgaWYgKGNlbGwoY2hpbGQpKSB7XG4gICAgICBwb3MrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb3Ncbn1cblxuLy8gQ2hlY2sgaWYgYG5vZGVgIGlzIGEgY2VsbC5cbmZ1bmN0aW9uIGNlbGwobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAndGgnIHx8IG5vZGUudGFnTmFtZSA9PT0gJ3RkJ1xufVxuXG4vLyBFbnN1cmUgdGhlIGFtb3VudCBvZiBjZWxscyBpbiBhIHJvdyBtYXRjaGVzIGBhbGlnbi5sZWZ0YC5cbmZ1bmN0aW9uIHRvUm93cyhyb3dzLCBjb3VudCkge1xuICB2YXIgbm9kZXMgPSBbXVxuICB2YXIgbGVuZ3RoID0gcm93cy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIG5vZGVcbiAgdmFyIHF1ZXVlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBub2RlID0gcm93c1tpbmRleF1cblxuICAgIGlmIChub2RlLnR5cGUgPT09ICd0YWJsZVJvdycpIHtcbiAgICAgIGZsdXNoKClcbiAgICAgIGFkZChub2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWV1ZSA9IChxdWV1ZSB8fCBbXSkuY29uY2F0KG5vZGUpXG4gICAgfVxuICB9XG5cbiAgZmx1c2goKVxuXG4gIHJldHVybiBub2Rlc1xuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGlmIChxdWV1ZSkge1xuICAgICAgYWRkKHt0eXBlOiAndGFibGVSb3cnLCBjaGlsZHJlbjogcXVldWV9KVxuICAgICAgcXVldWUgPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGQobm9kZSkge1xuICAgIG5vZGVzLnB1c2goY2VsbHMobm9kZSwgY291bnQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNlbGxzKHJvdywgY291bnQpIHtcbiAgdmFyIG5vZGVzID0gW11cbiAgdmFyIGNlbGxzID0gcm93LmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjZWxscy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIG5vZGVcbiAgdmFyIHF1ZXVlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBub2RlID0gY2VsbHNbaW5kZXhdXG5cbiAgICBpZiAobm9kZS50eXBlID09PSAndGFibGVDZWxsJykge1xuICAgICAgZmx1c2goKVxuICAgICAgbm9kZXMucHVzaChub2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWV1ZSA9IChxdWV1ZSB8fCBbXSkuY29uY2F0KG5vZGUpXG4gICAgfVxuICB9XG5cbiAgZmx1c2goKVxuXG4gIGluZGV4ID0gbm9kZXMubGVuZ3RoXG4gIGxlbmd0aCA9IGNvdW50ICsgMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbm9kZXMucHVzaCh7dHlwZTogJ3RhYmxlQ2VsbCcsIGNoaWxkcmVuOiBbXX0pXG4gIH1cblxuICByZXR1cm4geHRlbmQocm93LCB7Y2hpbGRyZW46IG5vZGVzfSlcblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBpZiAocXVldWUpIHtcbiAgICAgIG5vZGVzLnB1c2goe3R5cGU6ICd0YWJsZUNlbGwnLCBjaGlsZHJlbjogcXVldWV9KVxuICAgICAgcXVldWUgPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRleHRcblxuZnVuY3Rpb24gdGV4dChoLCBub2RlKSB7XG4gIHJldHVybiBoLmF1Z21lbnQobm9kZSwge3R5cGU6ICd0ZXh0JywgdmFsdWU6IG5vZGUudmFsdWV9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0b1RleHQgPSByZXF1aXJlKCdoYXN0LXV0aWwtdG8tdGV4dCcpXG5cbm1vZHVsZS5leHBvcnRzID0gdGV4dGFyZWFcblxuZnVuY3Rpb24gdGV4dGFyZWEoaCwgbm9kZSkge1xuICByZXR1cm4gaC5hdWdtZW50KG5vZGUsIHt0eXBlOiAndGV4dCcsIHZhbHVlOiB0b1RleHQobm9kZSl9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGhlbWF0aWNCcmVha1xuXG5mdW5jdGlvbiB0aGVtYXRpY0JyZWFrKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ3RoZW1hdGljQnJlYWsnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gendzXG5cbmZ1bmN0aW9uIHp3cyhoLCBub2RlKSB7XG4gIHJldHVybiBoLmF1Z21lbnQobm9kZSwge3R5cGU6ICd0ZXh0JywgdmFsdWU6ICdcXHUyMDBCJ30pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBvbmVcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4vYWxsJylcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbmZ1bmN0aW9uIG9uZShoLCBub2RlLCBwYXJlbnQpIHtcbiAgdmFyIGZuID0gbnVsbFxuXG4gIGlmIChub2RlLnR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgIGlmIChub2RlLnByb3BlcnRpZXMgJiYgbm9kZS5wcm9wZXJ0aWVzLmRhdGFNZGFzdCA9PT0gJ2lnbm9yZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChvd24uY2FsbChoLmhhbmRsZXJzLCBub2RlLnRhZ05hbWUpKSB7XG4gICAgICBmbiA9IGguaGFuZGxlcnNbbm9kZS50YWdOYW1lXVxuICAgIH1cbiAgfSBlbHNlIGlmIChvd24uY2FsbChoLmhhbmRsZXJzLCBub2RlLnR5cGUpKSB7XG4gICAgZm4gPSBoLmhhbmRsZXJzW25vZGUudHlwZV1cbiAgfVxuXG4gIHJldHVybiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gZm4gOiB1bmtub3duKShoLCBub2RlLCBwYXJlbnQpXG59XG5cbmZ1bmN0aW9uIHVua25vd24oaCwgbm9kZSkge1xuICBpZiAobm9kZS52YWx1ZSkge1xuICAgIHJldHVybiBoLmF1Z21lbnQobm9kZSwge3R5cGU6ICd0ZXh0JywgdmFsdWU6IG5vZGUudmFsdWV9KVxuICB9XG5cbiAgcmV0dXJuIGFsbChoLCBub2RlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBpcyA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JylcbnZhciBoYXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaGFzLXByb3BlcnR5JylcbnZhciB0b1RleHQgPSByZXF1aXJlKCdoYXN0LXV0aWwtdG8tdGV4dCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZmluZFNlbGVjdGVkT3B0aW9uc1xuXG5mdW5jdGlvbiBmaW5kU2VsZWN0ZWRPcHRpb25zKG5vZGUsIHByb3BlcnRpZXMpIHtcbiAgdmFyIHByb3BzID0gcHJvcGVydGllcyB8fCBub2RlLnByb3BlcnRpZXNcbiAgdmFyIG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGVcbiAgdmFyIHNpemUgPSBNYXRoLm1pbihwYXJzZUludChwcm9wcy5zaXplLCAxMCksIDApIHx8IChtdWx0aXBsZSA/IDQgOiAxKVxuICB2YXIgb3B0aW9ucyA9IGZpbmRPcHRpb25zKG5vZGUpXG4gIHZhciBsZW5ndGggPSBvcHRpb25zLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgc2VsZWN0ZWRPcHRpb25zID0gW11cbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBvcHRpb25cbiAgdmFyIGxpc3RcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIGxhYmVsXG4gIHZhciB2YWx1ZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uc1tpbmRleF1cblxuICAgIGlmIChvcHRpb24ucHJvcGVydGllcy5zZWxlY3RlZCkge1xuICAgICAgc2VsZWN0ZWRPcHRpb25zLnB1c2gob3B0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGxpc3QgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gb3B0aW9ucyA6IHNlbGVjdGVkT3B0aW9uc1xuICBvcHRpb25zID0gbGlzdC5zbGljZSgwLCBzaXplKVxuICBsZW5ndGggPSBvcHRpb25zLmxlbmd0aFxuICBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBvcHRpb24gPSBvcHRpb25zW2luZGV4XVxuICAgIGNvbnRlbnQgPSB0b1RleHQob3B0aW9uKVxuICAgIGxhYmVsID0gY29udGVudCB8fCBvcHRpb24ucHJvcGVydGllcy5sYWJlbFxuICAgIHZhbHVlID0gb3B0aW9uLnByb3BlcnRpZXMudmFsdWUgfHwgY29udGVudFxuXG4gICAgdmFsdWVzLnB1c2goW3ZhbHVlLCBsYWJlbCA9PT0gdmFsdWUgPyBudWxsIDogbGFiZWxdKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlc1xufVxuXG5mdW5jdGlvbiBmaW5kT3B0aW9ucyhub2RlKSB7XG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBjaGlsZFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cblxuICAgIGlmIChpcyhjaGlsZCwgJ29wdGlvbicpKSB7XG4gICAgICBpZiAoIWhhcyhjaGlsZCwgJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGNoaWxkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoJ2NoaWxkcmVuJyBpbiBjaGlsZCkge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KGZpbmRPcHRpb25zKGNoaWxkKSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0c1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc3ByZWFkXG5cbmZ1bmN0aW9uIHNwcmVhZChjaGlsZHJlbikge1xuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgaWYgKGxlbmd0aCA+IDEpIHtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKGNoaWxkcmVuW2luZGV4XS5zcHJlYWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc29sdmVcblxuZnVuY3Rpb24gcmVzb2x2ZShoLCB1cmwpIHtcbiAgaWYgKHVybCA9PT0gbnVsbCB8fCB1cmwgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBpZ25vcmVkIGZvciBvbGRlciBOb2RlICovXG4gIGlmIChoLmZyb3plbkJhc2VVcmwgJiYgdHlwZW9mIFVSTCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gU3RyaW5nKG5ldyBVUkwodXJsLCBoLmZyb3plbkJhc2VVcmwpKVxuICB9XG5cbiAgcmV0dXJuIHVybFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcHBlZFxuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcbnZhciB3cmFwID0gcmVxdWlyZSgnLi93cmFwJylcblxuZnVuY3Rpb24gd3JhcHBlZChoLCBub2RlKSB7XG4gIHJldHVybiB3cmFwKGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBwZWRcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHdyYXBwZWQoaCwgbm9kZSkge1xuICB2YXIgY2hpbGRyZW4gPSBhbGwoaCwgbm9kZSlcbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgY2hpbGRcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG5cbiAgICBpZiAoY2hpbGQudHlwZSAhPT0gJ2xpc3RJdGVtJykge1xuICAgICAgY2hpbGRyZW5baW5kZXhdID0ge1xuICAgICAgICB0eXBlOiAnbGlzdEl0ZW0nLFxuICAgICAgICBzcHJlYWQ6IGZhbHNlLFxuICAgICAgICBjaGVja2VkOiBudWxsLFxuICAgICAgICBjaGlsZHJlbjogW2NoaWxkXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlblxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcFxuXG53cmFwLm5lZWRlZCA9IG5lZWRlZFxuXG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJylcbnZhciBwaHJhc2luZyA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtcGhyYXNpbmcnKVxuXG5mdW5jdGlvbiB3cmFwKG5vZGVzKSB7XG4gIHJldHVybiBydW5zKG5vZGVzLCBvbnBocmFzaW5nKVxuXG4gIGZ1bmN0aW9uIG9ucGhyYXNpbmcobm9kZXMpIHtcbiAgICB2YXIgaGVhZCA9IG5vZGVzWzBdXG5cbiAgICBpZiAoXG4gICAgICBub2Rlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgIGhlYWQudHlwZSA9PT0gJ3RleHQnICYmXG4gICAgICAoaGVhZC52YWx1ZSA9PT0gJyAnIHx8IGhlYWQudmFsdWUgPT09ICdcXG4nKVxuICAgICkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHt0eXBlOiAncGFyYWdyYXBoJywgY2hpbGRyZW46IG5vZGVzfVxuICB9XG59XG5cbi8vIFdyYXAgYWxsIHJ1bnMgb2YgbWRhc3QgcGhyYXNpbmcgY29udGVudCBpbiBgcGFyYWdyYXBoYCBub2Rlcy5cbmZ1bmN0aW9uIHJ1bnMobm9kZXMsIG9ucGhyYXNpbmcsIG9ubm9ucGhyYXNpbmcpIHtcbiAgdmFyIG5vbnBocmFzaW5nID0gb25ub25waHJhc2luZyB8fCBpZGVudGl0eVxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGZsYXR0ZW5lZCA9IGZsYXR0ZW4obm9kZXMpXG4gIHZhciBsZW5ndGggPSBmbGF0dGVuZWQubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBub2RlXG4gIHZhciBxdWV1ZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbm9kZSA9IGZsYXR0ZW5lZFtpbmRleF1cblxuICAgIGlmIChwaHJhc2luZyhub2RlKSkge1xuICAgICAgaWYgKHF1ZXVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcXVldWUgPSBbXVxuICAgICAgfVxuXG4gICAgICBxdWV1ZS5wdXNoKG5vZGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZCgpXG4gICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KG5vbnBocmFzaW5nKG5vZGUpKVxuICAgIH1cbiAgfVxuXG4gIGFkZCgpXG5cbiAgcmV0dXJuIHJlc3VsdFxuXG4gIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICBpZiAocXVldWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChvbnBocmFzaW5nKHF1ZXVlKSlcbiAgICB9XG5cbiAgICBxdWV1ZSA9IHVuZGVmaW5lZFxuICB9XG59XG5cbi8vIEZsYXR0ZW4gYSBsaXN0IG9mIG5vZGVzLlxuZnVuY3Rpb24gZmxhdHRlbihub2Rlcykge1xuICB2YXIgbGVuZ3RoID0gbm9kZXMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBmbGF0dGVuZWQgPSBbXVxuICB2YXIgbm9kZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbm9kZSA9IG5vZGVzW2luZGV4XVxuXG4gICAgLy8gU3RyYWRkbGluZzogc29tZSBlbGVtZW50cyBhcmUgKndlaXJkKi5cbiAgICAvLyBOYW1lbHk6IGBtYXBgLCBgaW5zYCwgYGRlbGAsIGFuZCBgYWAsIGFzIHRoZXkgYXJlIGh5YnJpZCBlbGVtZW50cy5cbiAgICAvLyBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNwYXJhZ3JhcGhzPi5cbiAgICAvLyBQYXJhZ3JhcGhzIGFyZSB0aGUgd2VpcmRlc3Qgb2YgdGhlbSBhbGwuXG4gICAgLy8gU2VlIHRoZSBzdHJhZGRsaW5nIGZpeHR1cmUgZm9yIG1vcmUgaW5mbyFcbiAgICAvLyBgaW5zYCBpcyBpZ25vcmVkIGluIG1kYXN0LCBzbyB3ZSBkb27igJl0IG5lZWQgdG8gd29ycnkgYWJvdXQgdGhhdC5cbiAgICAvLyBgbWFwYCBtYXBzIHRvIGl0cyBjb250ZW50LCBzbyB3ZSBkb27igJl0IG5lZWQgdG8gd29ycnkgYWJvdXQgdGhhdCBlaXRoZXIuXG4gICAgLy8gYGRlbGAgbWFwcyB0byBgZGVsZXRlYCBhbmQgYGFgIHRvIGBsaW5rYCwgc28gd2UgZG8gaGFuZGxlIHRob3NlLlxuICAgIC8vIFdoYXQgd2XigJlsbCBkbyBpcyBzcGxpdCBgbm9kZWAgb3ZlciBlYWNoIG9mIGl0cyBjaGlsZHJlbi5cbiAgICBpZiAoXG4gICAgICAobm9kZS50eXBlID09PSAnZGVsZXRlJyB8fCBub2RlLnR5cGUgPT09ICdsaW5rJykgJiZcbiAgICAgIG5lZWRlZChub2RlLmNoaWxkcmVuKVxuICAgICkge1xuICAgICAgZmxhdHRlbmVkID0gZmxhdHRlbmVkLmNvbmNhdChzcGxpdChub2RlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgZmxhdHRlbmVkLnB1c2gobm9kZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmxhdHRlbmVkXG59XG5cbi8vIENoZWNrIGlmIHRoZXJlIGFyZSBub24tcGhyYXNpbmcgbWRhc3Qgbm9kZXMgcmV0dXJuZWQuXG4vLyBUaGlzIGlzIG5lZWRlZCBpZiBhIGZyYWdtZW50IGlzIGdpdmVuLCB3aGljaCBjb3VsZCBqdXN0IGJlIGEgc2VudGVuY2UsIGFuZFxuLy8gZG9lc27igJl0IG5lZWQgYSB3cmFwcGVyIHBhcmFncmFwaC5cbmZ1bmN0aW9uIG5lZWRlZChub2Rlcykge1xuICB2YXIgbGVuZ3RoID0gbm9kZXMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBub2RlXG4gIHZhciBjaGlsZHJlblxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbm9kZSA9IG5vZGVzW2luZGV4XVxuICAgIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuXG4gICAgaWYgKCFwaHJhc2luZyhub2RlKSB8fCAoY2hpbGRyZW4gJiYgbmVlZGVkKGNoaWxkcmVuKSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHNwbGl0KG5vZGUpIHtcbiAgcmV0dXJuIHJ1bnMobm9kZS5jaGlsZHJlbiwgb25waHJhc2luZywgb25ub25waHJhc2luZylcblxuICAvLyBVc2UgYGNoaWxkYCwgYWRkIGBwYXJlbnRgIGFzIGl0cyBmaXJzdCBjaGlsZCwgcHV0IHRoZSBvcmlnaW5hbCBjaGlsZHJlblxuICAvLyBpbnRvIGBwYXJlbnRgLlxuICBmdW5jdGlvbiBvbm5vbnBocmFzaW5nKGNoaWxkKSB7XG4gICAgdmFyIHBhcmVudCA9IGV4dGVuZCh0cnVlLCB7fSwgc2hhbGxvdyhub2RlKSlcbiAgICB2YXIgY29weSA9IHNoYWxsb3coY2hpbGQpXG5cbiAgICBjb3B5LmNoaWxkcmVuID0gW3BhcmVudF1cbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBjaGlsZC5jaGlsZHJlblxuXG4gICAgcmV0dXJuIGNvcHlcbiAgfVxuXG4gIC8vIFVzZSBgcGFyZW50YCwgcHV0IHRoZSBwaHJhc2luZyBydW4gaW5zaWRlIGl0LlxuICBmdW5jdGlvbiBvbnBocmFzaW5nKG5vZGVzKSB7XG4gICAgdmFyIHBhcmVudCA9IGV4dGVuZCh0cnVlLCB7fSwgc2hhbGxvdyhub2RlKSlcbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBub2Rlc1xuICAgIHJldHVybiBwYXJlbnRcbiAgfVxufVxuXG4vLyBTaGFsbG93IGNvcHkgb2YgYSBub2RlLCBleGNsdWRpbmcgaXRzIGNoaWxkcmVuLlxuZnVuY3Rpb24gc2hhbGxvdyhub2RlKSB7XG4gIHZhciBjb3B5ID0ge31cbiAgdmFyIGtleVxuXG4gIGZvciAoa2V5IGluIG5vZGUpIHtcbiAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nKSB7XG4gICAgICBjb3B5W2tleV0gPSBub2RlW2tleV1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29weVxufVxuXG5mdW5jdGlvbiBpZGVudGl0eShuKSB7XG4gIHJldHVybiBuXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxudmFyIGlzID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKVxudmFyIGZpbmRBZnRlciA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtZmluZC1hZnRlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gdG9UZXh0XG5cbi8vIE1ldGhvZHMuXG52YXIgbWluID0gTWF0aC5taW5cbnZhciBtYXggPSBNYXRoLm1heFxuXG4vLyBXaGl0ZSBzcGFjZSBjb2Rlcy5cbnZhciB0YWIgPSAweDlcbnZhciBzcGFjZSA9IDB4MjBcbnZhciB6ZXJvV2lkdGhTcGFjZSA9IDB4MjAwYlxuXG4vLyBCaWRpIGNvbnRyb2wgY2hhcmFjdGVycyBjb2Rlcy5cbnZhciBhbG0gPSAweDYxY1xudmFyIGx0ciA9IDB4MjAwZVxudmFyIHJ0bCA9IDB4MjAwZlxudmFyIGxyZSA9IDB4MjAyYVxudmFyIHJsZSA9IDB4MjAyYlxudmFyIHBkZiA9IDB4MjAyY1xudmFyIGxybyA9IDB4MjAyZFxudmFyIHJsbyA9IDB4MjAyZVxudmFyIGxyaSA9IDB4MjA2NlxudmFyIHJsaSA9IDB4MjA2N1xudmFyIGZzaSA9IDB4MjA2OFxudmFyIHBkaSA9IDB4MjA2OVxuXG4vLyBDaGFyYWN0ZXJzLlxudmFyIHRhYkNoYXIgPSAnXFx0J1xudmFyIGxpbmVGZWVkQ2hhciA9ICdcXG4nXG52YXIgc3BhY2VDaGFyID0gJyAnXG5cbi8vIEltcGxlbWVudGF0aW9uIG9mIHRoZSBgaW5uZXJUZXh0YCBnZXR0ZXI6XG4vLyA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGhlLWlubmVydGV4dC1pZGwtYXR0cmlidXRlPlxuLy8gTm90ZSB0aGF0IHdlIGFjdCBhcyBpZiBgbm9kZWAgaXMgYmVpbmcgcmVuZGVyZWQsIGFuZCBhcyBpZiB3ZeKAmXJlIGFcbi8vIENTUy1zdXBwb3J0aW5nIHVzZXIgYWdlbnQuXG5mdW5jdGlvbiB0b1RleHQobm9kZSkge1xuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuIHx8IFtdXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIGJsb2NrID0gYmxvY2tPckNhcHRpb24obm9kZSlcbiAgdmFyIHdoaXRlU3BhY2UgPSBpbmZlcldoaXRlU3BhY2Uobm9kZSwge30pXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciByZXN1bHRzXG4gIHZhciBjdXJyZW50XG4gIHZhciByZXN1bHRcbiAgdmFyIHZhbHVlXG4gIHZhciBjb3VudFxuXG4gIC8vIFRyZWF0IGB0ZXh0YCBhbmQgYGNvbW1lbnRgIGFzIGhhdmluZyBub3JtYWwgd2hpdGUtc3BhY2UuXG4gIC8vIFRoaXMgZGV2aWF0ZXMgZnJvbSB0aGUgc3BlYyBhcyBpbiB0aGUgRE9NIHRoZSBub2Rl4oCZcyBgLmRhdGFgIGhhcyB0byBiZVxuICAvLyByZXR1cm5lZC5cbiAgLy8gSWYgeW91IHdhbnQgdGhhdCBiZWhhdmlvciB1c2UgYGhhc3QtdXRpbC10by1zdHJpbmdgLlxuICAvLyBBbGwgb3RoZXIgbm9kZXMgYXJlIGxhdGVyIGhhbmRsZWQgYXMgaWYgdGhleSBhcmUgYGVsZW1lbnRgcyAoc28gdGhlXG4gIC8vIGFsZ29yaXRobSBhbHNvIHdvcmtzIG9uIGEgYHJvb3RgKS5cbiAgLy8gTm9kZXMgd2l0aG91dCBjaGlsZHJlbiBhcmUgdHJlYXRlZCBhcyBhIHZvaWQgZWxlbWVudCwgc28gYGRvY3R5cGVgIGlzIHRodXNcbiAgLy8gaWdub3JlZC5cbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnIHx8IG5vZGUudHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgcmV0dXJuIGNvbGxlY3RUZXh0KG5vZGUsIHtcbiAgICAgIHdoaXRlU3BhY2U6IHdoaXRlU3BhY2UsXG4gICAgICBicmVha0JlZm9yZTogdHJ1ZSxcbiAgICAgIGJyZWFrQWZ0ZXI6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgLy8gMS4gIElmIHRoaXMgZWxlbWVudCBpcyBub3QgYmVpbmcgcmVuZGVyZWQsIG9yIGlmIHRoZSB1c2VyIGFnZW50IGlzIGFcbiAgLy8gICAgIG5vbi1DU1MgdXNlciBhZ2VudCwgdGhlbiByZXR1cm4gdGhlIHNhbWUgdmFsdWUgYXMgdGhlIHRleHRDb250ZW50IElETFxuICAvLyAgICAgYXR0cmlidXRlIG9uIHRoaXMgZWxlbWVudC5cbiAgLy9cbiAgLy8gICAgIE5vdGU6IHdl4oCZcmUgbm90IHN1cHBvcnRpbmcgc3R5bGVzaGVldHMgc28gd2XigJlyZSBhY3RpbmcgYXMgaWYgdGhlIG5vZGVcbiAgLy8gICAgIGlzIHJlbmRlcmVkLlxuICAvL1xuICAvLyAgICAgSWYgeW91IHdhbnQgdGhhdCBiZWhhdmlvciB1c2UgYGhhc3QtdXRpbC10by1zdHJpbmdgLlxuICAvLyAgICAgSW1wb3J0YW50OiB3ZeKAmWxsIGhhdmUgdG8gYWNjb3VudCBmb3IgdGhpcyBsYXRlciB0aG91Z2guXG5cbiAgLy8gMi4gIExldCByZXN1bHRzIGJlIGEgbmV3IGVtcHR5IGxpc3QuXG4gIHJlc3VsdHMgPSBbXVxuXG4gIC8vIDMuICBGb3IgZWFjaCBjaGlsZCBub2RlIG5vZGUgb2YgdGhpcyBlbGVtZW50OlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIC8vIDMuMS4gTGV0IGN1cnJlbnQgYmUgdGhlIGxpc3QgcmVzdWx0aW5nIGluIHJ1bm5pbmcgdGhlIGlubmVyIHRleHRcbiAgICAvLyAgICAgIGNvbGxlY3Rpb24gc3RlcHMgd2l0aCBub2RlLlxuICAgIC8vICAgICAgRWFjaCBpdGVtIGluIHJlc3VsdHMgd2lsbCBlaXRoZXIgYmUgYSBKYXZhU2NyaXB0IHN0cmluZyBvciBhXG4gICAgLy8gICAgICBwb3NpdGl2ZSBpbnRlZ2VyIChhIHJlcXVpcmVkIGxpbmUgYnJlYWsgY291bnQpLlxuICAgIGN1cnJlbnQgPSBpbm5lclRleHRDb2xsZWN0aW9uKGNoaWxkcmVuW2luZGV4XSwgaW5kZXgsIG5vZGUsIHtcbiAgICAgIHdoaXRlU3BhY2U6IHdoaXRlU3BhY2UsXG4gICAgICBicmVha0JlZm9yZTogaW5kZXggPT09IDAgPyBibG9jayA6IGZhbHNlLFxuICAgICAgYnJlYWtBZnRlcjogaW5kZXggPT09IGxlbmd0aCAtIDEgPyBibG9jayA6IGlzKGNoaWxkcmVuW2luZGV4ICsgMV0sICdicicpXG4gICAgfSlcblxuICAgIC8vIDMuMi4gRm9yIGVhY2ggaXRlbSBpdGVtIGluIGN1cnJlbnQsIGFwcGVuZCBpdGVtIHRvIHJlc3VsdHMuXG4gICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KGN1cnJlbnQpXG4gIH1cblxuICAvLyA0LiAgUmVtb3ZlIGFueSBpdGVtcyBmcm9tIHJlc3VsdHMgdGhhdCBhcmUgdGhlIGVtcHR5IHN0cmluZy5cbiAgLy8gNS4gIFJlbW92ZSBhbnkgcnVucyBvZiBjb25zZWN1dGl2ZSByZXF1aXJlZCBsaW5lIGJyZWFrIGNvdW50IGl0ZW1zIGF0IHRoZVxuICAvLyAgICAgc3RhcnQgb3IgZW5kIG9mIHJlc3VsdHMuXG4gIC8vIDYuICBSZXBsYWNlIGVhY2ggcmVtYWluaW5nIHJ1biBvZiBjb25zZWN1dGl2ZSByZXF1aXJlZCBsaW5lIGJyZWFrIGNvdW50XG4gIC8vICAgICBpdGVtcyB3aXRoIGEgc3RyaW5nIGNvbnNpc3Rpbmcgb2YgYXMgbWFueSBVKzAwMEEgTElORSBGRUVEIChMRilcbiAgLy8gICAgIGNoYXJhY3RlcnMgYXMgdGhlIG1heGltdW0gb2YgdGhlIHZhbHVlcyBpbiB0aGUgcmVxdWlyZWQgbGluZSBicmVha1xuICAvLyAgICAgY291bnQgaXRlbXMuXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gcmVzdWx0cy5sZW5ndGhcbiAgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlID0gcmVzdWx0c1tpbmRleF1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoY291bnQgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA+IGNvdW50KSB7XG4gICAgICAgIGNvdW50ID0gdmFsdWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgaWYgKGNvdW50KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHJlcGVhdChsaW5lRmVlZENoYXIsIGNvdW50KSlcbiAgICAgIH1cblxuICAgICAgY291bnQgPSAwXG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICAvLyA3LiAgUmV0dXJuIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBzdHJpbmcgaXRlbXMgaW4gcmVzdWx0cy5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuXG4vLyA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jaW5uZXItdGV4dC1jb2xsZWN0aW9uLXN0ZXBzPlxuZnVuY3Rpb24gaW5uZXJUZXh0Q29sbGVjdGlvbihub2RlLCBpbmRleCwgcGFyZW50LCBvcHRpb25zKSB7XG4gIGlmIChub2RlLnR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgIHJldHVybiBjb2xsZWN0RWxlbWVudChub2RlLCBpbmRleCwgcGFyZW50LCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG9wdGlvbnMud2hpdGVTcGFjZSA9PT0gJ25vcm1hbCdcbiAgICAgICAgPyBjb2xsZWN0VGV4dChub2RlLCBvcHRpb25zKVxuICAgICAgICA6IGNvbGxlY3RQcmVUZXh0KG5vZGUsIG9wdGlvbnMpXG4gICAgXVxuICB9XG5cbiAgcmV0dXJuIFtdXG59XG5cbi8vIENvbGxlY3QgYW4gZWxlbWVudC5cbmZ1bmN0aW9uIGNvbGxlY3RFbGVtZW50KG5vZGUsIGluZGV4LCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgLy8gRmlyc3Qgd2UgaW5mZXIgdGhlIGB3aGl0ZS1zcGFjZWAgcHJvcGVydHkuXG4gIHZhciB3aGl0ZVNwYWNlID0gaW5mZXJXaGl0ZVNwYWNlKG5vZGUsIG9wdGlvbnMpXG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gfHwgW11cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgb2Zmc2V0ID0gLTFcbiAgdmFyIGl0ZW1zID0gW11cbiAgdmFyIGN1cnJlbnRcbiAgdmFyIHByZWZpeFxuICB2YXIgc3VmZml4XG5cbiAgLy8gV2XigJlyZSBpZ25vcmluZyBwb2ludCAzLCBhbmQgZXhpdGluZyB3aXRob3V0IGFueSBjb250ZW50IGhlcmUsIGJlY2F1c2Ugd2VcbiAgLy8gZGV2aWF0ZWQgZnJvbSB0aGUgc3BlYyBpbiBgdG9UZXh0YCBhdCBzdGVwIDMuXG4gIGlmIChub3RSZW5kZXJlZChub2RlKSkge1xuICAgIHJldHVybiBpdGVtc1xuICB9XG5cbiAgLy8gTm90ZTogd2UgZmlyc3QgZGV0ZWN0IGlmIHRoZXJlIGlzIGdvaW5nIHRvIGJlIGEgYnJlYWsgYmVmb3JlIG9yIGFmdGVyIHRoZVxuICAvLyBjb250ZW50cywgYXMgdGhhdCBjaGFuZ2VzIHRoZSB3aGl0ZS1zcGFjZSBoYW5kbGluZy5cblxuICAvLyAyLiAgSWYgbm9kZeKAmXMgY29tcHV0ZWQgdmFsdWUgb2YgYHZpc2liaWxpdHlgIGlzIG5vdCBgdmlzaWJsZWAsIHRoZW4gcmV0dXJuXG4gIC8vICAgICBpdGVtcy5cbiAgLy9cbiAgLy8gICAgIE5vdGU6IElnbm9yZWQsIGFzIGV2ZXJ5dGhpbmcgaXMgdmlzaWJsZSBieSBkZWZhdWx0IHVzZXIgYWdlbnQgc3R5bGVzLlxuXG4gIC8vIDMuICBJZiBub2RlIGlzIG5vdCBiZWluZyByZW5kZXJlZCwgdGhlbiByZXR1cm4gaXRlbXMuIFsuLi5dXG4gIC8vXG4gIC8vICAgICBOb3RlOiBXZSBhbHJlYWR5IGRpZCB0aGlzIGFib3ZlLlxuXG4gIC8vIFNlZSBgY29sbGVjdFRleHRgIGZvciBzdGVwIDQuXG5cbiAgLy8gNS4gIElmIG5vZGUgaXMgYSBgPGJyPmAgZWxlbWVudCwgdGhlbiBhcHBlbmQgYSBzdHJpbmcgY29udGFpbmluZyBhIHNpbmdsZVxuICAvLyAgICAgVSswMDBBIExJTkUgRkVFRCAoTEYpIGNoYXJhY3RlciB0byBpdGVtcy5cbiAgaWYgKGlzKG5vZGUsICdicicpKSB7XG4gICAgc3VmZml4ID0gbGluZUZlZWRDaGFyXG4gIH1cblxuICAvLyA3LiAgSWYgbm9kZeKAmXMgY29tcHV0ZWQgdmFsdWUgb2YgYGRpc3BsYXlgIGlzIGB0YWJsZS1yb3dgLCBhbmQgbm9kZeKAmXMgQ1NTXG4gIC8vICAgICBib3ggaXMgbm90IHRoZSBsYXN0IGB0YWJsZS1yb3dgIGJveCBvZiB0aGUgbmVhcmVzdCBhbmNlc3RvciBgdGFibGVgXG4gIC8vICAgICBib3gsIHRoZW4gYXBwZW5kIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBzaW5nbGUgVSswMDBBIExJTkUgRkVFRCAoTEYpXG4gIC8vICAgICBjaGFyYWN0ZXIgdG8gaXRlbXMuXG4gIC8vXG4gIC8vICAgICBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0YWJsZXMtMj5cbiAgLy8gICAgIE5vdGU6IG5lZWRzIGZ1cnRoZXIgaW52ZXN0aWdhdGlvbiBhcyB0aGlzIGRvZXMgbm90IGFjY291bnQgZm9yIGltcGxpY2l0XG4gIC8vICAgICByb3dzLlxuICBlbHNlIGlmIChyb3cobm9kZSkgJiYgZmluZEFmdGVyKHBhcmVudCwgbm9kZSwgcm93KSkge1xuICAgIHN1ZmZpeCA9IGxpbmVGZWVkQ2hhclxuICB9XG5cbiAgLy8gOC4gIElmIG5vZGUgaXMgYSBgPHA+YCBlbGVtZW50LCB0aGVuIGFwcGVuZCAyIChhIHJlcXVpcmVkIGxpbmUgYnJlYWsgY291bnQpXG4gIC8vICAgICBhdCB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgaXRlbXMuXG4gIGVsc2UgaWYgKGlzKG5vZGUsICdwJykpIHtcbiAgICBwcmVmaXggPSAyXG4gICAgc3VmZml4ID0gMlxuICB9XG5cbiAgLy8gOS4gIElmIG5vZGXigJlzIHVzZWQgdmFsdWUgb2YgYGRpc3BsYXlgIGlzIGJsb2NrLWxldmVsIG9yIGB0YWJsZS1jYXB0aW9uYCxcbiAgLy8gICAgIHRoZW4gYXBwZW5kIDEgKGEgcmVxdWlyZWQgbGluZSBicmVhayBjb3VudCkgYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mXG4gIC8vICAgICBpdGVtcy5cbiAgZWxzZSBpZiAoYmxvY2tPckNhcHRpb24obm9kZSkpIHtcbiAgICBwcmVmaXggPSAxXG4gICAgc3VmZml4ID0gMVxuICB9XG5cbiAgLy8gMS4gIExldCBpdGVtcyBiZSB0aGUgcmVzdWx0IG9mIHJ1bm5pbmcgdGhlIGlubmVyIHRleHQgY29sbGVjdGlvbiBzdGVwcyB3aXRoXG4gIC8vICAgICBlYWNoIGNoaWxkIG5vZGUgb2Ygbm9kZSBpbiB0cmVlIG9yZGVyLCBhbmQgdGhlbiBjb25jYXRlbmF0aW5nIHRoZVxuICAvLyAgICAgcmVzdWx0cyB0byBhIHNpbmdsZSBsaXN0LlxuICB3aGlsZSAoKytvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICBjdXJyZW50ID0gaW5uZXJUZXh0Q29sbGVjdGlvbihjaGlsZHJlbltvZmZzZXRdLCBvZmZzZXQsIG5vZGUsIHtcbiAgICAgIHdoaXRlU3BhY2U6IHdoaXRlU3BhY2UsXG4gICAgICBicmVha0JlZm9yZTogb2Zmc2V0ID09PSAwID8gcHJlZml4IDogZmFsc2UsXG4gICAgICBicmVha0FmdGVyOlxuICAgICAgICBvZmZzZXQgPT09IGxlbmd0aCAtIDEgPyBzdWZmaXggOiBpcyhjaGlsZHJlbltvZmZzZXQgKyAxXSwgJ2JyJylcbiAgICB9KVxuXG4gICAgaXRlbXMgPSBpdGVtcy5jb25jYXQoY3VycmVudClcbiAgfVxuXG4gIC8vIDYuICBJZiBub2Rl4oCZcyBjb21wdXRlZCB2YWx1ZSBvZiBgZGlzcGxheWAgaXMgYHRhYmxlLWNlbGxgLCBhbmQgbm9kZeKAmXMgQ1NTXG4gIC8vICAgICBib3ggaXMgbm90IHRoZSBsYXN0IGB0YWJsZS1jZWxsYCBib3ggb2YgaXRzIGVuY2xvc2luZyBgdGFibGUtcm93YCBib3gsXG4gIC8vICAgICB0aGVuIGFwcGVuZCBhIHN0cmluZyBjb250YWluaW5nIGEgc2luZ2xlIFUrMDAwOSBDSEFSQUNURVIgVEFCVUxBVElPTlxuICAvLyAgICAgKHRhYikgY2hhcmFjdGVyIHRvIGl0ZW1zLlxuICAvL1xuICAvLyAgICAgU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGFibGVzLTI+XG4gIGlmIChjZWxsKG5vZGUpICYmIGZpbmRBZnRlcihwYXJlbnQsIG5vZGUsIGNlbGwpKSB7XG4gICAgaXRlbXMucHVzaCh0YWJDaGFyKVxuICB9XG5cbiAgLy8gQWRkIHRoZSBwcmUtIGFuZCBzdWZmaXguXG4gIGlmIChwcmVmaXgpIHtcbiAgICBpdGVtcy51bnNoaWZ0KHByZWZpeClcbiAgfVxuXG4gIGlmIChzdWZmaXgpIHtcbiAgICBpdGVtcy5wdXNoKHN1ZmZpeClcbiAgfVxuXG4gIHJldHVybiBpdGVtc1xufVxuXG4vLyA0LiAgSWYgbm9kZSBpcyBhIFRleHQgbm9kZSwgdGhlbiBmb3IgZWFjaCBDU1MgdGV4dCBib3ggcHJvZHVjZWQgYnkgbm9kZSxcbi8vICAgICBpbiBjb250ZW50IG9yZGVyLCBjb21wdXRlIHRoZSB0ZXh0IG9mIHRoZSBib3ggYWZ0ZXIgYXBwbGljYXRpb24gb2YgdGhlXG4vLyAgICAgQ1NTIGB3aGl0ZS1zcGFjZWAgcHJvY2Vzc2luZyBydWxlcyBhbmQgYHRleHQtdHJhbnNmb3JtYCBydWxlcywgc2V0XG4vLyAgICAgaXRlbXMgdG8gdGhlIGxpc3Qgb2YgdGhlIHJlc3VsdGluZyBzdHJpbmdzLCBhbmQgcmV0dXJuIGl0ZW1zLlxuLy8gICAgIFRoZSBDU1MgYHdoaXRlLXNwYWNlYCBwcm9jZXNzaW5nIHJ1bGVzIGFyZSBzbGlnaHRseSBtb2RpZmllZDpcbi8vICAgICBjb2xsYXBzaWJsZSBzcGFjZXMgYXQgdGhlIGVuZCBvZiBsaW5lcyBhcmUgYWx3YXlzIGNvbGxhcHNlZCwgYnV0IHRoZXlcbi8vICAgICBhcmUgb25seSByZW1vdmVkIGlmIHRoZSBsaW5lIGlzIHRoZSBsYXN0IGxpbmUgb2YgdGhlIGJsb2NrLCBvciBpdCBlbmRzXG4vLyAgICAgd2l0aCBhIGJyIGVsZW1lbnQuXG4vLyAgICAgU29mdCBoeXBoZW5zIHNob3VsZCBiZSBwcmVzZXJ2ZWQuXG4vL1xuLy8gICAgIE5vdGU6IFNlZSBgY29sbGVjdFRleHRgIGFuZCBgY29sbGVjdFByZVRleHRgLlxuLy8gICAgIE5vdGU6IHdlIGRvbuKAmXQgZGVhbCB3aXRoIGB0ZXh0LXRyYW5zZm9ybWAsIG5vIGVsZW1lbnQgaGFzIHRoYXQgYnlcbi8vICAgICBkZWZhdWx0LlxuLy9cbi8vIFNlZTogPGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdGV4dC8jd2hpdGUtc3BhY2UtcGhhc2UtMT5cbmZ1bmN0aW9uIGNvbGxlY3RUZXh0KG5vZGUsIG9wdGlvbnMpIHtcbiAgdmFyIGJyZWFrQmVmb3JlID0gb3B0aW9ucy5icmVha0JlZm9yZVxuICB2YXIgYnJlYWtBZnRlciA9IG9wdGlvbnMuYnJlYWtBZnRlclxuICB2YXIgdmFsdWUgPSBTdHJpbmcobm9kZS52YWx1ZSlcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgbGluZXMgPSBbXVxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGxpbmVTdGFydFxuICB2YXIgbGluZUVuZFxuICB2YXIgbGluZVxuICB2YXIgbmV4dExpbmVcbiAgdmFyIHF1ZXVlXG5cbiAgbGluZVN0YXJ0ID0gMFxuICBsaW5lRW5kID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZENoYXIpXG4gIGxpbmVFbmQgPSBsaW5lRW5kID09PSAtMSA/IHZhbHVlLmxlbmd0aCA6IGxpbmVFbmRcblxuICB3aGlsZSAobGluZUVuZCAhPT0gLTEpIHtcbiAgICBsaW5lID0gdmFsdWUuc2xpY2UobGluZVN0YXJ0LCBsaW5lRW5kKVxuXG4gICAgLy8gWy4uLl0gaWdub3JpbmcgYmlkaSBmb3JtYXR0aW5nIGNoYXJhY3RlcnMgKGNoYXJhY3RlcnMgd2l0aCB0aGVcbiAgICAvLyBCaWRpX0NvbnRyb2wgcHJvcGVydHkgW1VBWDldKSBhcyBpZiB0aGV5IHdlcmUgbm90IHRoZXJlLlxuICAgIGxpbmUgPSByZW1vdmVCaWRpQ29udHJvbENoYXJhY3RlcnMobGluZSlcblxuICAgIC8vIEFueSBzZXF1ZW5jZSBvZiBjb2xsYXBzaWJsZSBzcGFjZXMgYW5kIHRhYnMgaW1tZWRpYXRlbHkgcHJlY2VkaW5nIG9yXG4gICAgLy8gZm9sbG93aW5nIGEgc2VnbWVudCBicmVhayBpcyByZW1vdmVkLlxuICAgIGxpbmUgPSB0cmltQW5kY29sbGFwc2VTcGFjZXNBbmRUYWJzKGxpbmUsIGJyZWFrQmVmb3JlLCBicmVha0FmdGVyKVxuXG4gICAgLy8gQWRkIHRoZSBsaW5lLlxuICAgIGxpbmVzLnB1c2gobGluZSlcblxuICAgIC8vIFN0b3AuXG4gICAgaWYgKGxpbmVFbmQgPT09IHZhbHVlLmxlbmd0aCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBsaW5lU3RhcnQgPSBsaW5lRW5kICsgMVxuICAgIGxpbmVFbmQgPSB2YWx1ZS5pbmRleE9mKGxpbmVGZWVkQ2hhciwgbGluZVN0YXJ0KVxuICAgIGxpbmVFbmQgPSBsaW5lRW5kID09PSAtMSA/IHZhbHVlLmxlbmd0aCA6IGxpbmVFbmRcbiAgfVxuXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gbGluZXMubGVuZ3RoXG4gIHF1ZXVlID0gJydcblxuICAvLyBDb2xsYXBzaWJsZSBzZWdtZW50IGJyZWFrcyBhcmUgdHJhbnNmb3JtZWQgZm9yIHJlbmRlcmluZyBhY2NvcmRpbmcgdG8gdGhlXG4gIC8vIHNlZ21lbnQgYnJlYWsgdHJhbnNmb3JtYXRpb24gcnVsZXMuXG4gIC8vIFNvIGhlcmUgd2UganVtcCB0byA0LjEuMiBvZiBbQ1NTVEVYVF06XG4gIC8vIEFueSBjb2xsYXBzaWJsZSBzZWdtZW50IGJyZWFrIGltbWVkaWF0ZWx5IGZvbGxvd2luZyBhbm90aGVyIGNvbGxhcHNpYmxlXG4gIC8vIHNlZ21lbnQgYnJlYWsgaXMgcmVtb3ZlZFxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGxpbmUgPSBsaW5lc1tpbmRleF1cbiAgICBuZXh0TGluZSA9IGxpbmVzW2luZGV4ICsgMV0gfHwgJydcblxuICAgIC8vICogICBJZiB0aGUgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSBvciBpbW1lZGlhdGVseSBhZnRlciB0aGUgc2VnbWVudFxuICAgIC8vICAgICBicmVhayBpcyB0aGUgemVyby13aWR0aCBzcGFjZSBjaGFyYWN0ZXIgKFUrMjAwQiksIHRoZW4gdGhlIGJyZWFrIGlzXG4gICAgLy8gICAgIHJlbW92ZWQsIGxlYXZpbmcgYmVoaW5kIHRoZSB6ZXJvLXdpZHRoIHNwYWNlLlxuICAgIGlmIChcbiAgICAgIGxpbmUuY2hhckNvZGVBdChsaW5lLmxlbmd0aCAtIDEpID09PSB6ZXJvV2lkdGhTcGFjZSB8fFxuICAgICAgbmV4dExpbmUuY2hhckNvZGVBdCgwKSA9PT0gemVyb1dpZHRoU3BhY2VcbiAgICApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxpbmUpXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vICogICBPdGhlcndpc2UsIGlmIHRoZSBFYXN0IEFzaWFuIFdpZHRoIHByb3BlcnR5IFtVQVgxMV0gb2YgYm90aCB0aGVcbiAgICAvLyAgICAgY2hhcmFjdGVyIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHNlZ21lbnQgYnJlYWsgaXMgRnVsbHdpZHRoLCBXaWRlLCBvclxuICAgIC8vICAgICBIYWxmd2lkdGggKG5vdCBBbWJpZ3VvdXMpLCBhbmQgbmVpdGhlciBzaWRlIGlzIEhhbmd1bCwgdGhlbiB0aGVcbiAgICAvLyAgICAgc2VnbWVudCBicmVhayBpcyByZW1vdmVkLlxuICAgIC8vXG4gICAgLy8gICAgIE5vdGU6IGlnbm9yZWQuXG5cbiAgICAvLyAqICAgT3RoZXJ3aXNlLCBpZiB0aGUgd3JpdGluZyBzeXN0ZW0gb2YgdGhlIHNlZ21lbnQgYnJlYWsgaXMgQ2hpbmVzZSxcbiAgICAvLyAgICAgSmFwYW5lc2UsIG9yIFlpLCBhbmQgdGhlIGNoYXJhY3RlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlIHNlZ21lbnQgYnJlYWtcbiAgICAvLyAgICAgaXMgcHVuY3R1YXRpb24gb3IgYSBzeW1ib2wgKFVuaWNvZGUgZ2VuZXJhbCBjYXRlZ29yeSBQKiBvciBTKikgYW5kXG4gICAgLy8gICAgIGhhcyBhbiBFYXN0IEFzaWFuIFdpZHRoIHByb3BlcnR5IG9mIEFtYmlndW91cywgYW5kIHRoZSBjaGFyYWN0ZXIgb25cbiAgICAvLyAgICAgdGhlIG90aGVyIHNpZGUgb2YgdGhlIHNlZ21lbnQgYnJlYWsgaXMgRnVsbHdpZHRoLCBXaWRlLCBvciBIYWxmd2lkdGgsXG4gICAgLy8gICAgIGFuZCBub3QgSGFuZ3VsLCB0aGVuIHRoZSBzZWdtZW50IGJyZWFrIGlzIHJlbW92ZWQuXG4gICAgLy9cbiAgICAvLyAgICAgTm90ZTogaWdub3JlZC5cblxuICAgIC8vICogICBPdGhlcndpc2UsIHRoZSBzZWdtZW50IGJyZWFrIGlzIGNvbnZlcnRlZCB0byBhIHNwYWNlIChVKzAwMjApLlxuICAgIGlmIChsaW5lKSB7XG4gICAgICBpZiAocXVldWUpIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocXVldWUpXG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoKGxpbmUpXG4gICAgICBxdWV1ZSA9IHNwYWNlQ2hhclxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcbn1cblxuZnVuY3Rpb24gY29sbGVjdFByZVRleHQobm9kZSkge1xuICByZXR1cm4gU3RyaW5nKG5vZGUudmFsdWUpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUJpZGlDb250cm9sQ2hhcmFjdGVycyh2YWx1ZSkge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciByZXN1bHQgPSAnJ1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGlzQmlkaUNvbnRyb2xDaGFyYWN0ZXIodmFsdWUuY2hhckNvZGVBdChpbmRleCkpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHJlc3VsdCArPSB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIDMuICBFdmVyeSBjb2xsYXBzaWJsZSB0YWIgaXMgY29udmVydGVkIHRvIGEgY29sbGFwc2libGUgc3BhY2UgKFUrMDAyMCkuXG4vLyA0LiAgQW55IGNvbGxhcHNpYmxlIHNwYWNlIGltbWVkaWF0ZWx5IGZvbGxvd2luZyBhbm90aGVyIGNvbGxhcHNpYmxlXG4vLyAgICAgc3BhY2XigJRldmVuIG9uZSBvdXRzaWRlIHRoZSBib3VuZGFyeSBvZiB0aGUgaW5saW5lIGNvbnRhaW5pbmcgdGhhdFxuLy8gICAgIHNwYWNlLCBwcm92aWRlZCBib3RoIHNwYWNlcyBhcmUgd2l0aGluIHRoZSBzYW1lIGlubGluZSBmb3JtYXR0aW5nXG4vLyAgICAgY29udGV4dOKAlGlzIGNvbGxhcHNlZCB0byBoYXZlIHplcm8gYWR2YW5jZSB3aWR0aC4gKEl0IGlzIGludmlzaWJsZSxcbi8vICAgICBidXQgcmV0YWlucyBpdHMgc29mdCB3cmFwIG9wcG9ydHVuaXR5LCBpZiBhbnkuKVxuZnVuY3Rpb24gdHJpbUFuZGNvbGxhcHNlU3BhY2VzQW5kVGFicyh2YWx1ZSwgYnJlYWtCZWZvcmUsIGJyZWFrQWZ0ZXIpIHtcbiAgdmFyIHN0YXJ0ID0gMFxuICB2YXIgZW5kXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBjaGFyXG5cbiAgLy8gTW92ZSBmb3J3YXJkIHBhc3QgaW5pdGlhbCB3aGl0ZSBzcGFjZS5cbiAgd2hpbGUgKHN0YXJ0IDw9IGxlbmd0aCkge1xuICAgIGNoYXIgPSB2YWx1ZS5jaGFyQ29kZUF0KHN0YXJ0KVxuXG4gICAgaWYgKGNoYXIgIT09IHNwYWNlICYmIGNoYXIgIT09IHRhYikge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzdGFydCsrXG4gIH1cblxuICAvLyBJZiB3ZeKAmXJlIG5vdCBkaXJlY3RseSBhZnRlciBhIHNlZ21lbnQgYnJlYWssIGJ1dCB0aGVyZSB3YXMgd2hpdGUgc3BhY2UsXG4gIC8vIGFkZCBhbiBlbXB0eSB2YWx1ZSB0aGF0IHdpbGwgYmUgdHVybmVkIGludG8gYSBzcGFjZS5cbiAgaWYgKHN0YXJ0ICE9PSAwICYmICFicmVha0JlZm9yZSkge1xuICAgIHJlc3VsdC5wdXNoKCcnKVxuICB9XG5cbiAgZW5kID0gbmV4dChzdGFydCAtIDEpXG5cbiAgd2hpbGUgKHN0YXJ0IDwgbGVuZ3RoKSB7XG4gICAgZW5kID0gZW5kID09PSAtMSA/IGxlbmd0aCA6IGVuZFxuICAgIHJlc3VsdC5wdXNoKHZhbHVlLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICAgIHN0YXJ0ID0gZW5kXG5cbiAgICB3aGlsZSAoc3RhcnQgPD0gbGVuZ3RoKSB7XG4gICAgICBjaGFyID0gdmFsdWUuY2hhckNvZGVBdChzdGFydClcblxuICAgICAgaWYgKGNoYXIgIT09IHNwYWNlICYmIGNoYXIgIT09IHRhYikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBzdGFydCsrXG4gICAgfVxuXG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgZW5kLCB0aGVyZSB3YXMgdHJhaWxpbmcgd2hpdGUgc3BhY2UsIGFuZCB0aGVyZeKAmXMgbm9cbiAgICAvLyBzZWdtZW50IGJyZWFrIGFmdGVyIHRoaXMgbm9kZSwgYWRkIGFuIGVtcHR5IHZhbHVlIHRoYXQgd2lsbCBiZSB0dXJuZWRcbiAgICAvLyBpbnRvIGEgc3BhY2UuXG4gICAgaWYgKHN0YXJ0ID09PSBsZW5ndGggJiYgc3RhcnQgIT09IGVuZCAmJiAhYnJlYWtBZnRlcikge1xuICAgICAgcmVzdWx0LnB1c2goJycpXG4gICAgfVxuXG4gICAgZW5kID0gbmV4dChzdGFydClcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignICcpXG5cbiAgZnVuY3Rpb24gbmV4dChpbmRleCkge1xuICAgIHZhciBzcGFjZUluZGV4ID0gdmFsdWUuaW5kZXhPZihzcGFjZUNoYXIsIGluZGV4ICsgMSlcbiAgICB2YXIgdGFiSW5kZXggPSB2YWx1ZS5pbmRleE9mKHRhYkNoYXIsIGluZGV4ICsgMSlcbiAgICB2YXIgZm4gPSBzcGFjZUluZGV4ID09PSAtMSB8fCB0YWJJbmRleCA9PT0gLTEgPyBtYXggOiBtaW5cbiAgICByZXR1cm4gZm4oc3BhY2VJbmRleCwgdGFiSW5kZXgpXG4gIH1cbn1cblxuLy8gV2UgZG9u4oCZdCBzdXBwb3J0IHZvaWQgZWxlbWVudHMgaGVyZSAoc28gYG5vYnIgd2JyYCAtPiBgbm9ybWFsYCBpcyBpZ25vcmVkKS5cbmZ1bmN0aW9uIGluZmVyV2hpdGVTcGFjZShub2RlLCBvcHRpb25zKSB7XG4gIHZhciBwcm9wcyA9IG5vZGUucHJvcGVydGllcyB8fCB7fVxuICB2YXIgaW5oZXJpdCA9IG9wdGlvbnMud2hpdGVTcGFjZSB8fCAnbm9ybWFsJ1xuXG4gIHN3aXRjaCAobm9kZS50YWdOYW1lKSB7XG4gICAgY2FzZSAnbGlzdGluZyc6XG4gICAgY2FzZSAncGxhaW50ZXh0JzpcbiAgICBjYXNlICd4bXAnOlxuICAgICAgcmV0dXJuICdwcmUnXG4gICAgY2FzZSAnbm9icic6XG4gICAgICByZXR1cm4gJ25vd3JhcCdcbiAgICBjYXNlICdwcmUnOlxuICAgICAgcmV0dXJuIHByb3BzLndyYXAgPyAncHJlLXdyYXAnIDogJ3ByZSdcbiAgICBjYXNlICd0ZCc6XG4gICAgY2FzZSAndGgnOlxuICAgICAgcmV0dXJuIHByb3BzLm5vV3JhcCA/ICdub3dyYXAnIDogaW5oZXJpdFxuICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgIHJldHVybiAncHJlLXdyYXAnXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpbmhlcml0XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNCaWRpQ29udHJvbENoYXJhY3RlcihjaGFyKSB7XG4gIHN3aXRjaCAoY2hhcikge1xuICAgIGNhc2UgYWxtOlxuICAgIGNhc2UgbHRyOlxuICAgIGNhc2UgcnRsOlxuICAgIGNhc2UgbHJlOlxuICAgIGNhc2UgcmxlOlxuICAgIGNhc2UgcGRmOlxuICAgIGNhc2UgbHJvOlxuICAgIGNhc2UgcmxvOlxuICAgIGNhc2UgbHJpOlxuICAgIGNhc2UgcmxpOlxuICAgIGNhc2UgZnNpOlxuICAgIGNhc2UgcGRpOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gY2VsbChub2RlKSB7XG4gIHJldHVybiBpcyhub2RlLCBbJ3RoJywgJ3RkJ10pXG59XG5cbmZ1bmN0aW9uIHJvdyhub2RlKSB7XG4gIHJldHVybiBpcyhub2RlLCBbJ3RyJ10pXG59XG5cbi8vIFNlZTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RoZS1jc3MtdXNlci1hZ2VudC1zdHlsZS1zaGVldC1hbmQtcHJlc2VudGF0aW9uYWwtaGludHM+XG5mdW5jdGlvbiBibG9ja09yQ2FwdGlvbihub2RlKSB7XG4gIHJldHVybiBpcyhub2RlLCBbXG4gICAgJ2NhcHRpb24nLCAvLyBgdGFibGUtY2FwdGlvbmBcbiAgICAvLyBQYWdlXG4gICAgJ2h0bWwnLFxuICAgICdib2R5JyxcbiAgICAvLyBGbG93IGNvbnRlbnRcbiAgICAnYWRkcmVzcycsXG4gICAgJ2Jsb2NrcXVvdGUnLFxuICAgICdjZW50ZXInLCAvLyBMZWdhY3lcbiAgICAnZGlhbG9nJyxcbiAgICAnZGl2JyxcbiAgICAnZmlndXJlJyxcbiAgICAnZmlnY2FwdGlvbicsXG4gICAgJ2Zvb3RlcicsXG4gICAgJ2Zvcm0sJyxcbiAgICAnaGVhZGVyJyxcbiAgICAnaHInLFxuICAgICdsZWdlbmQnLFxuICAgICdsaXN0aW5nJywgLy8gTGVnYWN5XG4gICAgJ21haW4nLFxuICAgICdwJyxcbiAgICAncGxhaW50ZXh0JywgLy8gTGVnYWN5XG4gICAgJ3ByZScsXG4gICAgJ3htcCcsIC8vIExlZ2FjeVxuICAgIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAgICdhcnRpY2xlJyxcbiAgICAnYXNpZGUnLFxuICAgICdoMScsXG4gICAgJ2gyJyxcbiAgICAnaDMnLFxuICAgICdoNCcsXG4gICAgJ2g1JyxcbiAgICAnaDYnLFxuICAgICdoZ3JvdXAnLFxuICAgICduYXYnLFxuICAgICdzZWN0aW9uJyxcbiAgICAvLyBMaXN0c1xuICAgICdkaXInLCAvLyBMZWdhY3lcbiAgICAnZGQnLFxuICAgICdkbCcsXG4gICAgJ2R0JyxcbiAgICAnbWVudScsXG4gICAgJ29sJyxcbiAgICAndWwnXG4gIF0pXG59XG5cbi8vIE5vdGUgdGhhdCB3ZSBkb27igJl0IG5lZWQgdG8gaW5jbHVkZSB2b2lkIGVsZW1lbnRzIGhlcmUgYXMgdGhleSBkb27igJl0IGhhdmUgdGV4dC5cbi8vXG4vLyBTZWU6IDxodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL2h0bWwtdm9pZC1lbGVtZW50cz5cbmZ1bmN0aW9uIG5vdFJlbmRlcmVkKG5vZGUpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBub2RlLnByb3BlcnRpZXMgfHwge31cblxuICByZXR1cm4gKFxuICAgIC8vIExpc3QgZnJvbTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2hpZGRlbi1lbGVtZW50cz5cbiAgICBpcyhub2RlLCBbXG4gICAgICAnZGF0YWxpc3QnLFxuICAgICAgJ2hlYWQnLFxuICAgICAgJ25vZW1iZWQnLFxuICAgICAgJ25vZnJhbWVzJyxcbiAgICAgICdycCcsXG4gICAgICAnc2NyaXB0JyxcbiAgICAgICdzdHlsZScsXG4gICAgICAndGVtcGxhdGUnLFxuICAgICAgJ3RpdGxlJyxcbiAgICAgIC8vIEFjdCBhcyBpZiB3ZSBzdXBwb3J0IHNjcmlwdGluZy5cbiAgICAgICdub3NjcmlwdCdcbiAgICBdKSB8fFxuICAgIC8vIEhpZGRlbiBhdHRyaWJ1dGUuXG4gICAgcHJvcGVydGllcy5oaWRkZW4gfHxcbiAgICAvLyBGcm9tOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jZmxvdy1jb250ZW50LTM+XG4gICAgKGlzKG5vZGUsICdkaWFsb2cnKSAmJiAhcHJvcGVydGllcy5vcGVuKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGZpbmQgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9maW5kJylcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9ub3JtYWxpemUnKVxudmFyIHBhcnNlU2VsZWN0b3IgPSByZXF1aXJlKCdoYXN0LXV0aWwtcGFyc2Utc2VsZWN0b3InKVxudmFyIHNwYWNlcyA9IHJlcXVpcmUoJ3NwYWNlLXNlcGFyYXRlZC10b2tlbnMnKS5wYXJzZVxudmFyIGNvbW1hcyA9IHJlcXVpcmUoJ2NvbW1hLXNlcGFyYXRlZC10b2tlbnMnKS5wYXJzZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbmZ1bmN0aW9uIGZhY3Rvcnkoc2NoZW1hLCBkZWZhdWx0VGFnTmFtZSwgY2FzZVNlbnNpdGl2ZSkge1xuICB2YXIgYWRqdXN0ID0gY2FzZVNlbnNpdGl2ZSA/IGNyZWF0ZUFkanVzdE1hcChjYXNlU2Vuc2l0aXZlKSA6IG51bGxcblxuICByZXR1cm4gaFxuXG4gIC8vIEh5cGVyc2NyaXB0IGNvbXBhdGlibGUgRFNMIGZvciBjcmVhdGluZyB2aXJ0dWFsIGhhc3QgdHJlZXMuXG4gIGZ1bmN0aW9uIGgoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICB2YXIgbm9kZSA9IHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IsIGRlZmF1bHRUYWdOYW1lKVxuICAgIHZhciBjaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMilcbiAgICB2YXIgbmFtZSA9IG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgdmFyIHByb3BlcnR5XG5cbiAgICBub2RlLnRhZ05hbWUgPSBhZGp1c3QgJiYgb3duLmNhbGwoYWRqdXN0LCBuYW1lKSA/IGFkanVzdFtuYW1lXSA6IG5hbWVcblxuICAgIGlmIChwcm9wZXJ0aWVzICYmIGlzQ2hpbGRyZW4ocHJvcGVydGllcywgbm9kZSkpIHtcbiAgICAgIGNoaWxkcmVuLnVuc2hpZnQocHJvcGVydGllcylcbiAgICAgIHByb3BlcnRpZXMgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAocHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgICAgICBhZGRQcm9wZXJ0eShub2RlLnByb3BlcnRpZXMsIHByb3BlcnR5LCBwcm9wZXJ0aWVzW3Byb3BlcnR5XSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDaGlsZChub2RlLmNoaWxkcmVuLCBjaGlsZHJlbilcblxuICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgIG5vZGUuY29udGVudCA9IHt0eXBlOiAncm9vdCcsIGNoaWxkcmVuOiBub2RlLmNoaWxkcmVufVxuICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb3BlcnR5KHByb3BlcnRpZXMsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgaW5mb1xuICAgIHZhciBwcm9wZXJ0eVxuICAgIHZhciByZXN1bHRcblxuICAgIC8vIElnbm9yZSBudWxseSBhbmQgTmFOIHZhbHVlcy5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluZm8gPSBmaW5kKHNjaGVtYSwga2V5KVxuICAgIHByb3BlcnR5ID0gaW5mby5wcm9wZXJ0eVxuICAgIHJlc3VsdCA9IHZhbHVlXG5cbiAgICAvLyBIYW5kbGUgbGlzdCB2YWx1ZXMuXG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaW5mby5zcGFjZVNlcGFyYXRlZCkge1xuICAgICAgICByZXN1bHQgPSBzcGFjZXMocmVzdWx0KVxuICAgICAgfSBlbHNlIGlmIChpbmZvLmNvbW1hU2VwYXJhdGVkKSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbW1hcyhyZXN1bHQpXG4gICAgICB9IGVsc2UgaWYgKGluZm8uY29tbWFPclNwYWNlU2VwYXJhdGVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHNwYWNlcyhjb21tYXMocmVzdWx0KS5qb2luKCcgJykpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWNjZXB0IGBvYmplY3RgIG9uIHN0eWxlLlxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXN1bHQgPSBzdHlsZShyZXN1bHQpXG4gICAgfVxuXG4gICAgLy8gQ2xhc3MtbmFtZXMgKHdoaWNoIGNhbiBiZSBhZGRlZCBib3RoIG9uIHRoZSBgc2VsZWN0b3JgIGFuZCBoZXJlKS5cbiAgICBpZiAocHJvcGVydHkgPT09ICdjbGFzc05hbWUnICYmIHByb3BlcnRpZXMuY2xhc3NOYW1lKSB7XG4gICAgICByZXN1bHQgPSBwcm9wZXJ0aWVzLmNsYXNzTmFtZS5jb25jYXQocmVzdWx0KVxuICAgIH1cblxuICAgIHByb3BlcnRpZXNbcHJvcGVydHldID0gcGFyc2VQcmltaXRpdmVzKGluZm8sIHByb3BlcnR5LCByZXN1bHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDaGlsZHJlbih2YWx1ZSwgbm9kZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICAnbGVuZ3RoJyBpbiB2YWx1ZSB8fFxuICAgIGlzTm9kZShub2RlLnRhZ05hbWUsIHZhbHVlKVxuICApXG59XG5cbmZ1bmN0aW9uIGlzTm9kZSh0YWdOYW1lLCB2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHZhbHVlLnR5cGVcblxuICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0JyB8fCAhdHlwZSB8fCB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUuY2hpbGRyZW4gPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKClcblxuICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZSAhPT0gJ21lbnUnICYmXG4gICAgICB0eXBlICE9PSAnc3VibWl0JyAmJlxuICAgICAgdHlwZSAhPT0gJ3Jlc2V0JyAmJlxuICAgICAgdHlwZSAhPT0gJ2J1dHRvbidcbiAgICApXG4gIH1cblxuICByZXR1cm4gJ3ZhbHVlJyBpbiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChub2RlcywgdmFsdWUpIHtcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgbm9kZXMucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogU3RyaW5nKHZhbHVlKX0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgIGluZGV4ID0gLTFcbiAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhZGRDaGlsZChub2RlcywgdmFsdWVbaW5kZXhdKVxuICAgIH1cblxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgISgndHlwZScgaW4gdmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBub2Rlcywgb3Igc3RyaW5nLCBnb3QgYCcgKyB2YWx1ZSArICdgJylcbiAgfVxuXG4gIG5vZGVzLnB1c2godmFsdWUpXG59XG5cbi8vIFBhcnNlIGEgKGxpc3Qgb2YpIHByaW1pdGl2ZXMuXG5mdW5jdGlvbiBwYXJzZVByaW1pdGl2ZXMoaW5mbywgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcbiAgdmFyIHJlc3VsdFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8ICEoJ2xlbmd0aCcgaW4gdmFsdWUpKSB7XG4gICAgcmV0dXJuIHBhcnNlUHJpbWl0aXZlKGluZm8sIG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIGluZGV4ID0gLTFcbiAgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBwYXJzZVByaW1pdGl2ZShpbmZvLCBuYW1lLCB2YWx1ZVtpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIFBhcnNlIGEgc2luZ2xlIHByaW1pdGl2ZXMuXG5mdW5jdGlvbiBwYXJzZVByaW1pdGl2ZShpbmZvLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdmFsdWVcblxuICBpZiAoaW5mby5udW1iZXIgfHwgaW5mby5wb3NpdGl2ZU51bWJlcikge1xuICAgIGlmICghaXNOYU4ocmVzdWx0KSAmJiByZXN1bHQgIT09ICcnKSB7XG4gICAgICByZXN1bHQgPSBOdW1iZXIocmVzdWx0KVxuICAgIH1cbiAgfSBlbHNlIGlmIChpbmZvLmJvb2xlYW4gfHwgaW5mby5vdmVybG9hZGVkQm9vbGVhbikge1xuICAgIC8vIEFjY2VwdCBgYm9vbGVhbmAgYW5kIGBzdHJpbmdgLlxuICAgIGlmIChcbiAgICAgIHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnICYmXG4gICAgICAocmVzdWx0ID09PSAnJyB8fCBub3JtYWxpemUodmFsdWUpID09PSBub3JtYWxpemUobmFtZSkpXG4gICAgKSB7XG4gICAgICByZXN1bHQgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBzdHlsZSh2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGtleVxuXG4gIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVba2V5XV0uam9pbignOiAnKSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignOyAnKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGp1c3RNYXAodmFsdWVzKSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciByZXN1bHQgPSB7fVxuICB2YXIgdmFsdWVcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlID0gdmFsdWVzW2luZGV4XVxuICAgIHJlc3VsdFt2YWx1ZS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHNjaGVtYSA9IHJlcXVpcmUoJ3Byb3BlcnR5LWluZm9ybWF0aW9uL2h0bWwnKVxudmFyIGZhY3RvcnkgPSByZXF1aXJlKCcuL2ZhY3RvcnknKVxuXG52YXIgaHRtbCA9IGZhY3Rvcnkoc2NoZW1hLCAnZGl2Jylcbmh0bWwuZGlzcGxheU5hbWUgPSAnaHRtbCdcblxubW9kdWxlLmV4cG9ydHMgPSBodG1sXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2h0bWwnKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzY2hlbWEgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9zdmcnKVxudmFyIGNhc2VTZW5zaXRpdmUgPSByZXF1aXJlKCcuL3N2Zy1jYXNlLXNlbnNpdGl2ZS10YWctbmFtZXMuanNvbicpXG52YXIgZmFjdG9yeSA9IHJlcXVpcmUoJy4vZmFjdG9yeScpXG5cbnZhciBzdmcgPSBmYWN0b3J5KHNjaGVtYSwgJ2cnLCBjYXNlU2Vuc2l0aXZlKVxuc3ZnLmRpc3BsYXlOYW1lID0gJ3N2ZydcblxubW9kdWxlLmV4cG9ydHMgPSBzdmdcbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFscGhhYmV0aWNhbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYWxwaGFiZXRpY2FsLlxuZnVuY3Rpb24gYWxwaGFiZXRpY2FsKGNoYXJhY3Rlcikge1xuICB2YXIgY29kZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgOiBjaGFyYWN0ZXJcblxuICByZXR1cm4gKFxuICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSAvKiBhLXogKi8gfHxcbiAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSAvKiBBLVogKi9cbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG5cdH1cblxuXHRyZXR1cm4gIS9bXjAtOWEtelxceERGLVxceEZGXS8udGVzdChzdHIudG9Mb3dlckNhc2UoKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcblxubW9kdWxlLmV4cG9ydHMgPSBhbHBoYW51bWVyaWNhbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYWxwaGFudW1lcmljYWwuXG5mdW5jdGlvbiBhbHBoYW51bWVyaWNhbChjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIGFscGhhYmV0aWNhbChjaGFyYWN0ZXIpIHx8IGRlY2ltYWwoY2hhcmFjdGVyKVxufVxuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZGVjaW1hbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgZGVjaW1hbC5cbmZ1bmN0aW9uIGRlY2ltYWwoY2hhcmFjdGVyKSB7XG4gIHZhciBjb2RlID0gdHlwZW9mIGNoYXJhY3RlciA9PT0gJ3N0cmluZycgPyBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSA6IGNoYXJhY3RlclxuXG4gIHJldHVybiBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgLyogMC05ICovXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBoZXhhZGVjaW1hbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgaGV4YWRlY2ltYWwuXG5mdW5jdGlvbiBoZXhhZGVjaW1hbChjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvZGUgPSB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIDogY2hhcmFjdGVyXG5cbiAgcmV0dXJuIChcbiAgICAoY29kZSA+PSA5NyAvKiBhICovICYmIGNvZGUgPD0gMTAyKSAvKiB6ICovIHx8XG4gICAgKGNvZGUgPj0gNjUgLyogQSAqLyAmJiBjb2RlIDw9IDcwKSAvKiBaICovIHx8XG4gICAgKGNvZGUgPj0gNDggLyogQSAqLyAmJiBjb2RlIDw9IDU3KSAvKiBaICovXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB2YWx1ZSA9PiB7XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG5cdHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdoaXRlc3BhY2VcblxudmFyIGZyb21Db2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZVxudmFyIHJlID0gL1xccy9cblxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4vLyBjaGFyYWN0ZXIsIGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlKGNoYXJhY3Rlcikge1xuICByZXR1cm4gcmUudGVzdChcbiAgICB0eXBlb2YgY2hhcmFjdGVyID09PSAnbnVtYmVyJyA/IGZyb21Db2RlKGNoYXJhY3RlcikgOiBjaGFyYWN0ZXIuY2hhckF0KDApXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvbmdlc3RTdHJlYWtcblxuLy8gR2V0IHRoZSBjb3VudCBvZiB0aGUgbG9uZ2VzdCByZXBlYXRpbmcgc3RyZWFrIG9mIGBjaGFyYWN0ZXJgIGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBsb25nZXN0U3RyZWFrKHZhbHVlLCBjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvdW50ID0gMFxuICB2YXIgbWF4aW11bSA9IDBcbiAgdmFyIGV4cGVjdGVkXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2YgY2hhcmFjdGVyICE9PSAnc3RyaW5nJyB8fCBjaGFyYWN0ZXIubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGFyYWN0ZXInKVxuICB9XG5cbiAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gIGluZGV4ID0gdmFsdWUuaW5kZXhPZihjaGFyYWN0ZXIpXG4gIGV4cGVjdGVkID0gaW5kZXhcblxuICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgY291bnQrK1xuXG4gICAgaWYgKGluZGV4ID09PSBleHBlY3RlZCkge1xuICAgICAgaWYgKGNvdW50ID4gbWF4aW11bSkge1xuICAgICAgICBtYXhpbXVtID0gY291bnRcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAxXG4gICAgfVxuXG4gICAgZXhwZWN0ZWQgPSBpbmRleCArIDFcbiAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoY2hhcmFjdGVyLCBleHBlY3RlZClcbiAgfVxuXG4gIHJldHVybiBtYXhpbXVtXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBlc2NhcGVzXG5cbnZhciBkZWZhdWx0cyA9IFtcbiAgJ1xcXFwnLFxuICAnYCcsXG4gICcqJyxcbiAgJ3snLFxuICAnfScsXG4gICdbJyxcbiAgJ10nLFxuICAnKCcsXG4gICcpJyxcbiAgJyMnLFxuICAnKycsXG4gICctJyxcbiAgJy4nLFxuICAnIScsXG4gICdfJyxcbiAgJz4nXG5dXG5cbnZhciBnZm0gPSBkZWZhdWx0cy5jb25jYXQoWyd+JywgJ3wnXSlcblxudmFyIGNvbW1vbm1hcmsgPSBnZm0uY29uY2F0KFtcbiAgJ1xcbicsXG4gICdcIicsXG4gICckJyxcbiAgJyUnLFxuICAnJicsXG4gIFwiJ1wiLFxuICAnLCcsXG4gICcvJyxcbiAgJzonLFxuICAnOycsXG4gICc8JyxcbiAgJz0nLFxuICAnPycsXG4gICdAJyxcbiAgJ14nXG5dKVxuXG5lc2NhcGVzLmRlZmF1bHQgPSBkZWZhdWx0c1xuZXNjYXBlcy5nZm0gPSBnZm1cbmVzY2FwZXMuY29tbW9ubWFyayA9IGNvbW1vbm1hcmtcblxuLy8gR2V0IG1hcmtkb3duIGVzY2FwZXMuXG5mdW5jdGlvbiBlc2NhcGVzKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmIChzZXR0aW5ncy5jb21tb25tYXJrKSB7XG4gICAgcmV0dXJuIGNvbW1vbm1hcmtcbiAgfVxuXG4gIHJldHVybiBzZXR0aW5ncy5nZm0gPyBnZm0gOiBkZWZhdWx0c1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbWFya2Rvd25UYWJsZVxuXG52YXIgZG90UmUgPSAvXFwuL1xudmFyIGxhc3REb3RSZSA9IC9cXC5bXi5dKiQvXG5cbi8vIENoYXJhY3RlcnMuXG52YXIgc3BhY2UgPSAnICdcbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgZGFzaCA9ICctJ1xudmFyIGRvdCA9ICcuJ1xudmFyIGNvbG9uID0gJzonXG52YXIgbG93ZXJjYXNlQyA9ICdjJ1xudmFyIGxvd2VyY2FzZUwgPSAnbCdcbnZhciBsb3dlcmNhc2VSID0gJ3InXG52YXIgdmVydGljYWxCYXIgPSAnfCdcblxudmFyIG1pbkNlbGxTaXplID0gM1xuXG4vLyBDcmVhdGUgYSB0YWJsZSBmcm9tIGEgbWF0cml4IG9mIHN0cmluZ3MuXG5mdW5jdGlvbiBtYXJrZG93blRhYmxlKHRhYmxlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGRlbGltaXRlciA9IHNldHRpbmdzLmRlbGltaXRlclxuICB2YXIgc3RhcnQgPSBzZXR0aW5ncy5zdGFydFxuICB2YXIgZW5kID0gc2V0dGluZ3MuZW5kXG4gIHZhciBhbGlnbm1lbnQgPSBzZXR0aW5ncy5hbGlnblxuICB2YXIgY2FsY3VsYXRlU3RyaW5nTGVuZ3RoID0gc2V0dGluZ3Muc3RyaW5nTGVuZ3RoIHx8IGxlbmd0aE5vb3BcbiAgdmFyIGNlbGxDb3VudCA9IDBcbiAgdmFyIHJvd0luZGV4ID0gLTFcbiAgdmFyIHJvd0xlbmd0aCA9IHRhYmxlLmxlbmd0aFxuICB2YXIgc2l6ZXMgPSBbXVxuICB2YXIgYWxpZ25cbiAgdmFyIHJ1bGVcbiAgdmFyIHJvd3NcbiAgdmFyIHJvd1xuICB2YXIgY2VsbHNcbiAgdmFyIGluZGV4XG4gIHZhciBwb3NpdGlvblxuICB2YXIgc2l6ZVxuICB2YXIgdmFsdWVcbiAgdmFyIHNwYWNpbmdcbiAgdmFyIGJlZm9yZVxuICB2YXIgYWZ0ZXJcblxuICBhbGlnbm1lbnQgPSBhbGlnbm1lbnQgPyBhbGlnbm1lbnQuY29uY2F0KCkgOiBbXVxuXG4gIGlmIChkZWxpbWl0ZXIgPT09IG51bGwgfHwgZGVsaW1pdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWxpbWl0ZXIgPSBzcGFjZSArIHZlcnRpY2FsQmFyICsgc3BhY2VcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gbnVsbCB8fCBzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSB2ZXJ0aWNhbEJhciArIHNwYWNlXG4gIH1cblxuICBpZiAoZW5kID09PSBudWxsIHx8IGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gc3BhY2UgKyB2ZXJ0aWNhbEJhclxuICB9XG5cbiAgd2hpbGUgKCsrcm93SW5kZXggPCByb3dMZW5ndGgpIHtcbiAgICByb3cgPSB0YWJsZVtyb3dJbmRleF1cblxuICAgIGluZGV4ID0gLTFcblxuICAgIGlmIChyb3cubGVuZ3RoID4gY2VsbENvdW50KSB7XG4gICAgICBjZWxsQ291bnQgPSByb3cubGVuZ3RoXG4gICAgfVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjZWxsQ291bnQpIHtcbiAgICAgIHBvc2l0aW9uID0gcm93W2luZGV4XSA/IGRvdGluZGV4KHJvd1tpbmRleF0pIDogbnVsbFxuXG4gICAgICBpZiAoIXNpemVzW2luZGV4XSkge1xuICAgICAgICBzaXplc1tpbmRleF0gPSBtaW5DZWxsU2l6ZVxuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24gPiBzaXplc1tpbmRleF0pIHtcbiAgICAgICAgc2l6ZXNbaW5kZXhdID0gcG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGFsaWdubWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhbGlnbm1lbnQgPSBwYWQoY2VsbENvdW50LCBhbGlnbm1lbnQpLnNwbGl0KCcnKVxuICB9XG5cbiAgLy8gTWFrZSBzdXJlIG9ubHkgdmFsaWQgYWxpZ25tZW50cyBhcmUgdXNlZC5cbiAgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgY2VsbENvdW50KSB7XG4gICAgYWxpZ24gPSBhbGlnbm1lbnRbaW5kZXhdXG5cbiAgICBpZiAodHlwZW9mIGFsaWduID09PSAnc3RyaW5nJykge1xuICAgICAgYWxpZ24gPSBhbGlnbi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGFsaWduICE9PSBsb3dlcmNhc2VMICYmXG4gICAgICBhbGlnbiAhPT0gbG93ZXJjYXNlUiAmJlxuICAgICAgYWxpZ24gIT09IGxvd2VyY2FzZUMgJiZcbiAgICAgIGFsaWduICE9PSBkb3RcbiAgICApIHtcbiAgICAgIGFsaWduID0gJydcbiAgICB9XG5cbiAgICBhbGlnbm1lbnRbaW5kZXhdID0gYWxpZ25cbiAgfVxuXG4gIHJvd0luZGV4ID0gLTFcbiAgcm93cyA9IFtdXG5cbiAgd2hpbGUgKCsrcm93SW5kZXggPCByb3dMZW5ndGgpIHtcbiAgICByb3cgPSB0YWJsZVtyb3dJbmRleF1cblxuICAgIGluZGV4ID0gLTFcbiAgICBjZWxscyA9IFtdXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGNlbGxDb3VudCkge1xuICAgICAgdmFsdWUgPSByb3dbaW5kZXhdXG5cbiAgICAgIHZhbHVlID0gc3RyaW5naWZ5KHZhbHVlKVxuXG4gICAgICBpZiAoYWxpZ25tZW50W2luZGV4XSA9PT0gZG90KSB7XG4gICAgICAgIHBvc2l0aW9uID0gZG90aW5kZXgodmFsdWUpXG5cbiAgICAgICAgc2l6ZSA9XG4gICAgICAgICAgc2l6ZXNbaW5kZXhdICtcbiAgICAgICAgICAoZG90UmUudGVzdCh2YWx1ZSkgPyAwIDogMSkgLVxuICAgICAgICAgIChjYWxjdWxhdGVTdHJpbmdMZW5ndGgodmFsdWUpIC0gcG9zaXRpb24pXG5cbiAgICAgICAgY2VsbHNbaW5kZXhdID0gdmFsdWUgKyBwYWQoc2l6ZSAtIDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsc1tpbmRleF0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJvd3Nbcm93SW5kZXhdID0gY2VsbHNcbiAgfVxuXG4gIHNpemVzID0gW11cbiAgcm93SW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK3Jvd0luZGV4IDwgcm93TGVuZ3RoKSB7XG4gICAgY2VsbHMgPSByb3dzW3Jvd0luZGV4XVxuXG4gICAgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjZWxsQ291bnQpIHtcbiAgICAgIHZhbHVlID0gY2VsbHNbaW5kZXhdXG5cbiAgICAgIGlmICghc2l6ZXNbaW5kZXhdKSB7XG4gICAgICAgIHNpemVzW2luZGV4XSA9IG1pbkNlbGxTaXplXG4gICAgICB9XG5cbiAgICAgIHNpemUgPSBjYWxjdWxhdGVTdHJpbmdMZW5ndGgodmFsdWUpXG5cbiAgICAgIGlmIChzaXplID4gc2l6ZXNbaW5kZXhdKSB7XG4gICAgICAgIHNpemVzW2luZGV4XSA9IHNpemVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByb3dJbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsrcm93SW5kZXggPCByb3dMZW5ndGgpIHtcbiAgICBjZWxscyA9IHJvd3Nbcm93SW5kZXhdXG5cbiAgICBpbmRleCA9IC0xXG5cbiAgICBpZiAoc2V0dGluZ3MucGFkICE9PSBmYWxzZSkge1xuICAgICAgd2hpbGUgKCsraW5kZXggPCBjZWxsQ291bnQpIHtcbiAgICAgICAgdmFsdWUgPSBjZWxsc1tpbmRleF1cblxuICAgICAgICBwb3NpdGlvbiA9IHNpemVzW2luZGV4XSAtIChjYWxjdWxhdGVTdHJpbmdMZW5ndGgodmFsdWUpIHx8IDApXG4gICAgICAgIHNwYWNpbmcgPSBwYWQocG9zaXRpb24pXG5cbiAgICAgICAgaWYgKGFsaWdubWVudFtpbmRleF0gPT09IGxvd2VyY2FzZVIgfHwgYWxpZ25tZW50W2luZGV4XSA9PT0gZG90KSB7XG4gICAgICAgICAgdmFsdWUgPSBzcGFjaW5nICsgdmFsdWVcbiAgICAgICAgfSBlbHNlIGlmIChhbGlnbm1lbnRbaW5kZXhdID09PSBsb3dlcmNhc2VDKSB7XG4gICAgICAgICAgcG9zaXRpb24gLz0gMlxuXG4gICAgICAgICAgaWYgKHBvc2l0aW9uICUgMSA9PT0gMCkge1xuICAgICAgICAgICAgYmVmb3JlID0gcG9zaXRpb25cbiAgICAgICAgICAgIGFmdGVyID0gcG9zaXRpb25cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmVmb3JlID0gcG9zaXRpb24gKyAwLjVcbiAgICAgICAgICAgIGFmdGVyID0gcG9zaXRpb24gLSAwLjVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YWx1ZSA9IHBhZChiZWZvcmUpICsgdmFsdWUgKyBwYWQoYWZ0ZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgKz0gc3BhY2luZ1xuICAgICAgICB9XG5cbiAgICAgICAgY2VsbHNbaW5kZXhdID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByb3dzW3Jvd0luZGV4XSA9IGNlbGxzLmpvaW4oZGVsaW1pdGVyKVxuICB9XG5cbiAgaWYgKHNldHRpbmdzLnJ1bGUgIT09IGZhbHNlKSB7XG4gICAgaW5kZXggPSAtMVxuICAgIHJ1bGUgPSBbXVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjZWxsQ291bnQpIHtcbiAgICAgIC8vIFdoZW4gYHBhZGAgaXMgZmFsc2UsIG1ha2UgdGhlIHJ1bGUgdGhlIHNhbWUgc2l6ZSBhcyB0aGUgZmlyc3Qgcm93LlxuICAgICAgaWYgKHNldHRpbmdzLnBhZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdmFsdWUgPSB0YWJsZVswXVtpbmRleF1cbiAgICAgICAgc3BhY2luZyA9IGNhbGN1bGF0ZVN0cmluZ0xlbmd0aChzdHJpbmdpZnkodmFsdWUpKVxuICAgICAgICBzcGFjaW5nID0gc3BhY2luZyA+IG1pbkNlbGxTaXplID8gc3BhY2luZyA6IG1pbkNlbGxTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGFjaW5nID0gc2l6ZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGFsaWduID0gYWxpZ25tZW50W2luZGV4XVxuXG4gICAgICAvLyBXaGVuIGBhbGlnbmAgaXMgbGVmdCwgZG9uJ3QgYWRkIGNvbG9ucy5cbiAgICAgIHZhbHVlID0gYWxpZ24gPT09IGxvd2VyY2FzZVIgfHwgYWxpZ24gPT09ICcnID8gZGFzaCA6IGNvbG9uXG4gICAgICB2YWx1ZSArPSBwYWQoc3BhY2luZyAtIDIsIGRhc2gpXG4gICAgICB2YWx1ZSArPSBhbGlnbiAhPT0gbG93ZXJjYXNlTCAmJiBhbGlnbiAhPT0gJycgPyBjb2xvbiA6IGRhc2hcblxuICAgICAgcnVsZVtpbmRleF0gPSB2YWx1ZVxuICAgIH1cblxuICAgIHJvd3Muc3BsaWNlKDEsIDAsIHJ1bGUuam9pbihkZWxpbWl0ZXIpKVxuICB9XG5cbiAgcmV0dXJuIHN0YXJ0ICsgcm93cy5qb2luKGVuZCArIGxpbmVGZWVkICsgc3RhcnQpICsgZW5kXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogU3RyaW5nKHZhbHVlKVxufVxuXG4vLyBHZXQgdGhlIGxlbmd0aCBvZiBgdmFsdWVgLlxuZnVuY3Rpb24gbGVuZ3RoTm9vcCh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5sZW5ndGhcbn1cblxuLy8gR2V0IGEgc3RyaW5nIGNvbnNpc3Rpbmcgb2YgYGxlbmd0aGAgYGNoYXJhY3RlcmBzLlxuZnVuY3Rpb24gcGFkKGxlbmd0aCwgY2hhcmFjdGVyKSB7XG4gIHJldHVybiBuZXcgQXJyYXkobGVuZ3RoICsgMSkuam9pbihjaGFyYWN0ZXIgfHwgc3BhY2UpXG59XG5cbi8vIEdldCB0aGUgcG9zaXRpb24gb2YgdGhlIGxhc3QgZG90IGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBkb3RpbmRleCh2YWx1ZSkge1xuICB2YXIgbWF0Y2ggPSBsYXN0RG90UmUuZXhlYyh2YWx1ZSlcblxuICByZXR1cm4gbWF0Y2ggPyBtYXRjaC5pbmRleCArIDEgOiB2YWx1ZS5sZW5ndGhcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjb21wYWN0XG5cbi8vIE1ha2UgYW4gbWRhc3QgdHJlZSBjb21wYWN0IGJ5IG1lcmdpbmcgYWRqYWNlbnQgdGV4dCBub2Rlcy5cbmZ1bmN0aW9uIGNvbXBhY3QodHJlZSwgY29tbW9ubWFyaykge1xuICB2aXNpdCh0cmVlLCB2aXNpdG9yKVxuXG4gIHJldHVybiB0cmVlXG5cbiAgZnVuY3Rpb24gdmlzaXRvcihjaGlsZCwgaW5kZXgsIHBhcmVudCkge1xuICAgIHZhciBzaWJsaW5ncyA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbiA6IFtdXG4gICAgdmFyIHByZXYgPSBpbmRleCAmJiBzaWJsaW5nc1tpbmRleCAtIDFdXG5cbiAgICBpZiAoXG4gICAgICBwcmV2ICYmXG4gICAgICBjaGlsZC50eXBlID09PSBwcmV2LnR5cGUgJiZcbiAgICAgIG1lcmdlYWJsZShwcmV2LCBjb21tb25tYXJrKSAmJlxuICAgICAgbWVyZ2VhYmxlKGNoaWxkLCBjb21tb25tYXJrKVxuICAgICkge1xuICAgICAgaWYgKGNoaWxkLnZhbHVlKSB7XG4gICAgICAgIHByZXYudmFsdWUgKz0gY2hpbGQudmFsdWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuKSB7XG4gICAgICAgIHByZXYuY2hpbGRyZW4gPSBwcmV2LmNoaWxkcmVuLmNvbmNhdChjaGlsZC5jaGlsZHJlbilcbiAgICAgIH1cblxuICAgICAgc2libGluZ3Muc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgICBpZiAocHJldi5wb3NpdGlvbiAmJiBjaGlsZC5wb3NpdGlvbikge1xuICAgICAgICBwcmV2LnBvc2l0aW9uLmVuZCA9IGNoaWxkLnBvc2l0aW9uLmVuZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VhYmxlKG5vZGUsIGNvbW1vbm1hcmspIHtcbiAgdmFyIHN0YXJ0XG4gIHZhciBlbmRcblxuICBpZiAobm9kZS50eXBlID09PSAndGV4dCcpIHtcbiAgICBpZiAoIW5vZGUucG9zaXRpb24pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgc3RhcnQgPSBub2RlLnBvc2l0aW9uLnN0YXJ0XG4gICAgZW5kID0gbm9kZS5wb3NpdGlvbi5lbmRcblxuICAgIC8vIE9ubHkgbWVyZ2Ugbm9kZXMgd2hpY2ggb2NjdXB5IHRoZSBzYW1lIHNpemUgYXMgdGhlaXIgYHZhbHVlYC5cbiAgICByZXR1cm4gKFxuICAgICAgc3RhcnQubGluZSAhPT0gZW5kLmxpbmUgfHwgZW5kLmNvbHVtbiAtIHN0YXJ0LmNvbHVtbiA9PT0gbm9kZS52YWx1ZS5sZW5ndGhcbiAgICApXG4gIH1cblxuICByZXR1cm4gY29tbW9ubWFyayAmJiBub2RlLnR5cGUgPT09ICdibG9ja3F1b3RlJ1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRQYXJlbnRzXG5cbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcblxudmFyIENPTlRJTlVFID0gdHJ1ZVxudmFyIFNLSVAgPSAnc2tpcCdcbnZhciBFWElUID0gZmFsc2VcblxudmlzaXRQYXJlbnRzLkNPTlRJTlVFID0gQ09OVElOVUVcbnZpc2l0UGFyZW50cy5TS0lQID0gU0tJUFxudmlzaXRQYXJlbnRzLkVYSVQgPSBFWElUXG5cbmZ1bmN0aW9uIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gIHZhciBpc1xuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgdmlzaXRvciA9IHRlc3RcbiAgICB0ZXN0ID0gbnVsbFxuICB9XG5cbiAgaXMgPSBjb252ZXJ0KHRlc3QpXG5cbiAgb25lKHRyZWUsIG51bGwsIFtdKVxuXG4gIC8vIFZpc2l0IGEgc2luZ2xlIG5vZGUuXG4gIGZ1bmN0aW9uIG9uZShub2RlLCBpbmRleCwgcGFyZW50cykge1xuICAgIHZhciByZXN1bHQgPSBbXVxuICAgIHZhciBzdWJyZXN1bHRcblxuICAgIGlmICghdGVzdCB8fCBpcyhub2RlLCBpbmRleCwgcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdIHx8IG51bGwpKSB7XG4gICAgICByZXN1bHQgPSB0b1Jlc3VsdCh2aXNpdG9yKG5vZGUsIHBhcmVudHMpKVxuXG4gICAgICBpZiAocmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiByZXN1bHRbMF0gIT09IFNLSVApIHtcbiAgICAgIHN1YnJlc3VsdCA9IHRvUmVzdWx0KGFsbChub2RlLmNoaWxkcmVuLCBwYXJlbnRzLmNvbmNhdChub2RlKSkpXG4gICAgICByZXR1cm4gc3VicmVzdWx0WzBdID09PSBFWElUID8gc3VicmVzdWx0IDogcmVzdWx0XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy8gVmlzaXQgY2hpbGRyZW4gaW4gYHBhcmVudGAuXG4gIGZ1bmN0aW9uIGFsbChjaGlsZHJlbiwgcGFyZW50cykge1xuICAgIHZhciBtaW4gPSAtMVxuICAgIHZhciBzdGVwID0gcmV2ZXJzZSA/IC0xIDogMVxuICAgIHZhciBpbmRleCA9IChyZXZlcnNlID8gY2hpbGRyZW4ubGVuZ3RoIDogbWluKSArIHN0ZXBcbiAgICB2YXIgcmVzdWx0XG5cbiAgICB3aGlsZSAoaW5kZXggPiBtaW4gJiYgaW5kZXggPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IG9uZShjaGlsZHJlbltpbmRleF0sIGluZGV4LCBwYXJlbnRzKVxuXG4gICAgICBpZiAocmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cblxuICAgICAgaW5kZXggPSB0eXBlb2YgcmVzdWx0WzFdID09PSAnbnVtYmVyJyA/IHJlc3VsdFsxXSA6IGluZGV4ICsgc3RlcFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0b1Jlc3VsdCh2YWx1ZSkge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gW0NPTlRJTlVFLCB2YWx1ZV1cbiAgfVxuXG4gIHJldHVybiBbdmFsdWVdXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB2aXNpdFxuXG52YXIgdmlzaXRQYXJlbnRzID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJylcblxudmFyIENPTlRJTlVFID0gdmlzaXRQYXJlbnRzLkNPTlRJTlVFXG52YXIgU0tJUCA9IHZpc2l0UGFyZW50cy5TS0lQXG52YXIgRVhJVCA9IHZpc2l0UGFyZW50cy5FWElUXG5cbnZpc2l0LkNPTlRJTlVFID0gQ09OVElOVUVcbnZpc2l0LlNLSVAgPSBTS0lQXG52aXNpdC5FWElUID0gRVhJVFxuXG5mdW5jdGlvbiB2aXNpdCh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgdmlzaXRvciA9IHRlc3RcbiAgICB0ZXN0ID0gbnVsbFxuICB9XG5cbiAgdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIG92ZXJsb2FkLCByZXZlcnNlKVxuXG4gIGZ1bmN0aW9uIG92ZXJsb2FkKG5vZGUsIHBhcmVudHMpIHtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdXG4gICAgdmFyIGluZGV4ID0gcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkgOiBudWxsXG4gICAgcmV0dXJuIHZpc2l0b3Iobm9kZSwgaW5kZXgsIHBhcmVudClcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcblxudmFyIGlzUGhyYXNpbmcgPSBjb252ZXJ0KFtcbiAgJ2JyZWFrJyxcbiAgJ2RlbGV0ZScsXG4gICdlbXBoYXNpcycsXG4gICdmb290bm90ZScsXG4gICdmb290bm90ZVJlZmVyZW5jZScsXG4gICdpbWFnZScsXG4gICdpbWFnZVJlZmVyZW5jZScsXG4gICdpbmxpbmVDb2RlJyxcbiAgJ2xpbmsnLFxuICAnbGlua1JlZmVyZW5jZScsXG4gICdzdHJvbmcnLFxuICAndGV4dCdcbl0pXG5cbmlzUGhyYXNpbmcuZGlzcGxheU5hbWUgPSAnaXNQaHJhc2luZydcbm1vZHVsZS5leHBvcnRzID0gaXNQaHJhc2luZ1xuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmdcblxuLy8gR2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgYSBub2RlLiAgSWYgdGhlIG5vZGUgaXRzZWxmIGRvZXMgbm90IGV4cG9zZVxuLy8gcGxhaW4tdGV4dCBmaWVsZHMsIGB0b1N0cmluZ2Agd2lsbCByZWN1cnNpdmx5IHRyeSBpdHMgY2hpbGRyZW4uXG5mdW5jdGlvbiB0b1N0cmluZyhub2RlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWVPZihub2RlKSB8fFxuICAgIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubWFwKHRvU3RyaW5nKS5qb2luKCcnKSkgfHxcbiAgICAnJ1xuICApXG59XG5cbi8vIEdldCB0aGUgdmFsdWUgb2YgYG5vZGVgLiAgQ2hlY2tzLCBgdmFsdWVgLCBgYWx0YCwgYW5kIGB0aXRsZWAsIGluIHRoYXQgb3JkZXIuXG5mdW5jdGlvbiB2YWx1ZU9mKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICAobm9kZSAmJiBub2RlLnZhbHVlID8gbm9kZS52YWx1ZSA6IG5vZGUuYWx0ID8gbm9kZS5hbHQgOiBub2RlLnRpdGxlKSB8fCAnJ1xuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbnZhciBlbFxuXG52YXIgc2VtaWNvbG9uID0gNTkgLy8gICc7J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZUVudGl0eVxuXG5mdW5jdGlvbiBkZWNvZGVFbnRpdHkoY2hhcmFjdGVycykge1xuICB2YXIgZW50aXR5ID0gJyYnICsgY2hhcmFjdGVycyArICc7J1xuICB2YXIgY2hhclxuXG4gIGVsID0gZWwgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gIGVsLmlubmVySFRNTCA9IGVudGl0eVxuICBjaGFyID0gZWwudGV4dENvbnRlbnRcblxuICAvLyBTb21lIGVudGl0aWVzIGRvIG5vdCByZXF1aXJlIHRoZSBjbG9zaW5nIHNlbWljb2xvbiAoYCZub3RgIC0gZm9yIGluc3RhbmNlKSxcbiAgLy8gd2hpY2ggbGVhZHMgdG8gc2l0dWF0aW9ucyB3aGVyZSBwYXJzaW5nIHRoZSBhc3N1bWVkIGVudGl0eSBvZiAmbm90aXQ7IHdpbGxcbiAgLy8gcmVzdWx0IGluIHRoZSBzdHJpbmcgYMKsaXQ7YC4gIFdoZW4gd2UgZW5jb3VudGVyIGEgdHJhaWxpbmcgc2VtaWNvbG9uIGFmdGVyXG4gIC8vIHBhcnNpbmcgYW5kIHRoZSBlbnRpdHkgdG8gZGVjb2RlIHdhcyBub3QgYSBzZW1pY29sb24gKGAmc2VtaTtgKSwgd2UgY2FuXG4gIC8vIGFzc3VtZSB0aGF0IHRoZSBtYXRjaGluZyB3YXMgaW5jb21wbGV0ZVxuICBpZiAoY2hhci5jaGFyQ29kZUF0KGNoYXIubGVuZ3RoIC0gMSkgPT09IHNlbWljb2xvbiAmJiBjaGFyYWN0ZXJzICE9PSAnc2VtaScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIElmIHRoZSBkZWNvZGVkIHN0cmluZyBpcyBlcXVhbCB0byB0aGUgaW5wdXQsIHRoZSBlbnRpdHkgd2FzIG5vdCB2YWxpZFxuICByZXR1cm4gY2hhciA9PT0gZW50aXR5ID8gZmFsc2UgOiBjaGFyXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGxlZ2FjeSA9IHJlcXVpcmUoJ2NoYXJhY3Rlci1lbnRpdGllcy1sZWdhY3knKVxudmFyIGludmFsaWQgPSByZXF1aXJlKCdjaGFyYWN0ZXItcmVmZXJlbmNlLWludmFsaWQnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcbnZhciBoZXhhZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWhleGFkZWNpbWFsJylcbnZhciBhbHBoYW51bWVyaWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhbnVtZXJpY2FsJylcbnZhciBkZWNvZGVFbnRpdHkgPSByZXF1aXJlKCcuL2RlY29kZS1lbnRpdHknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlRW50aXRpZXNcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZVxudmFyIG5vb3AgPSBGdW5jdGlvbi5wcm90b3R5cGVcblxuLy8gRGVmYXVsdCBzZXR0aW5ncy5cbnZhciBkZWZhdWx0cyA9IHtcbiAgd2FybmluZzogbnVsbCxcbiAgcmVmZXJlbmNlOiBudWxsLFxuICB0ZXh0OiBudWxsLFxuICB3YXJuaW5nQ29udGV4dDogbnVsbCxcbiAgcmVmZXJlbmNlQ29udGV4dDogbnVsbCxcbiAgdGV4dENvbnRleHQ6IG51bGwsXG4gIHBvc2l0aW9uOiB7fSxcbiAgYWRkaXRpb25hbDogbnVsbCxcbiAgYXR0cmlidXRlOiBmYWxzZSxcbiAgbm9uVGVybWluYXRlZDogdHJ1ZVxufVxuXG4vLyBDaGFyYWN0ZXJzLlxudmFyIHRhYiA9IDkgLy8gJ1xcdCdcbnZhciBsaW5lRmVlZCA9IDEwIC8vICdcXG4nXG52YXIgZm9ybUZlZWQgPSAxMiAvLyAgJ1xcZidcbnZhciBzcGFjZSA9IDMyIC8vICcgJ1xudmFyIGFtcGVyc2FuZCA9IDM4IC8vICAnJidcbnZhciBzZW1pY29sb24gPSA1OSAvLyAgJzsnXG52YXIgbGVzc1RoYW4gPSA2MCAvLyAgJzwnXG52YXIgZXF1YWxzVG8gPSA2MSAvLyAgJz0nXG52YXIgbnVtYmVyU2lnbiA9IDM1IC8vICAnIydcbnZhciB1cHBlcmNhc2VYID0gODggLy8gICdYJ1xudmFyIGxvd2VyY2FzZVggPSAxMjAgLy8gICd4J1xudmFyIHJlcGxhY2VtZW50Q2hhcmFjdGVyID0gNjU1MzMgLy8gJ++/vSdcblxuLy8gUmVmZXJlbmNlIHR5cGVzLlxudmFyIG5hbWUgPSAnbmFtZWQnXG52YXIgaGV4YSA9ICdoZXhhZGVjaW1hbCdcbnZhciBkZWNpID0gJ2RlY2ltYWwnXG5cbi8vIE1hcCBvZiBiYXNlcy5cbnZhciBiYXNlcyA9IHt9XG5cbmJhc2VzW2hleGFdID0gMTZcbmJhc2VzW2RlY2ldID0gMTBcblxuLy8gTWFwIG9mIHR5cGVzIHRvIHRlc3RzLlxuLy8gRWFjaCB0eXBlIG9mIGNoYXJhY3RlciByZWZlcmVuY2UgYWNjZXB0cyBkaWZmZXJlbnQgY2hhcmFjdGVycy5cbi8vIFRoaXMgdGVzdCBpcyB1c2VkIHRvIGRldGVjdCB3aGV0aGVyIGEgcmVmZXJlbmNlIGhhcyBlbmRlZCAoYXMgdGhlIHNlbWljb2xvblxuLy8gaXMgbm90IHN0cmljdGx5IG5lZWRlZCkuXG52YXIgdGVzdHMgPSB7fVxuXG50ZXN0c1tuYW1lXSA9IGFscGhhbnVtZXJpY2FsXG50ZXN0c1tkZWNpXSA9IGRlY2ltYWxcbnRlc3RzW2hleGFdID0gaGV4YWRlY2ltYWxcblxuLy8gV2FybmluZyB0eXBlcy5cbnZhciBuYW1lZE5vdFRlcm1pbmF0ZWQgPSAxXG52YXIgbnVtZXJpY05vdFRlcm1pbmF0ZWQgPSAyXG52YXIgbmFtZWRFbXB0eSA9IDNcbnZhciBudW1lcmljRW1wdHkgPSA0XG52YXIgbmFtZWRVbmtub3duID0gNVxudmFyIG51bWVyaWNEaXNhbGxvd2VkID0gNlxudmFyIG51bWVyaWNQcm9oaWJpdGVkID0gN1xuXG4vLyBXYXJuaW5nIG1lc3NhZ2VzLlxudmFyIG1lc3NhZ2VzID0ge31cblxubWVzc2FnZXNbbmFtZWROb3RUZXJtaW5hdGVkXSA9XG4gICdOYW1lZCBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBtdXN0IGJlIHRlcm1pbmF0ZWQgYnkgYSBzZW1pY29sb24nXG5tZXNzYWdlc1tudW1lcmljTm90VGVybWluYXRlZF0gPVxuICAnTnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBtdXN0IGJlIHRlcm1pbmF0ZWQgYnkgYSBzZW1pY29sb24nXG5tZXNzYWdlc1tuYW1lZEVtcHR5XSA9ICdOYW1lZCBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBjYW5ub3QgYmUgZW1wdHknXG5tZXNzYWdlc1tudW1lcmljRW1wdHldID0gJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIGVtcHR5J1xubWVzc2FnZXNbbmFtZWRVbmtub3duXSA9ICdOYW1lZCBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBtdXN0IGJlIGtub3duJ1xubWVzc2FnZXNbbnVtZXJpY0Rpc2FsbG93ZWRdID1cbiAgJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIGRpc2FsbG93ZWQnXG5tZXNzYWdlc1tudW1lcmljUHJvaGliaXRlZF0gPVxuICAnTnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBjYW5ub3QgYmUgb3V0c2lkZSB0aGUgcGVybWlzc2libGUgVW5pY29kZSByYW5nZSdcblxuLy8gV3JhcCB0byBlbnN1cmUgY2xlYW4gcGFyYW1ldGVycyBhcmUgZ2l2ZW4gdG8gYHBhcnNlYC5cbmZ1bmN0aW9uIHBhcnNlRW50aXRpZXModmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0ge31cbiAgdmFyIG9wdGlvblxuICB2YXIga2V5XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICBmb3IgKGtleSBpbiBkZWZhdWx0cykge1xuICAgIG9wdGlvbiA9IG9wdGlvbnNba2V5XVxuICAgIHNldHRpbmdzW2tleV0gPVxuICAgICAgb3B0aW9uID09PSBudWxsIHx8IG9wdGlvbiA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdHNba2V5XSA6IG9wdGlvblxuICB9XG5cbiAgaWYgKHNldHRpbmdzLnBvc2l0aW9uLmluZGVudCB8fCBzZXR0aW5ncy5wb3NpdGlvbi5zdGFydCkge1xuICAgIHNldHRpbmdzLmluZGVudCA9IHNldHRpbmdzLnBvc2l0aW9uLmluZGVudCB8fCBbXVxuICAgIHNldHRpbmdzLnBvc2l0aW9uID0gc2V0dGluZ3MucG9zaXRpb24uc3RhcnRcbiAgfVxuXG4gIHJldHVybiBwYXJzZSh2YWx1ZSwgc2V0dGluZ3MpXG59XG5cbi8vIFBhcnNlIGVudGl0aWVzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHBhcnNlKHZhbHVlLCBzZXR0aW5ncykge1xuICB2YXIgYWRkaXRpb25hbCA9IHNldHRpbmdzLmFkZGl0aW9uYWxcbiAgdmFyIG5vblRlcm1pbmF0ZWQgPSBzZXR0aW5ncy5ub25UZXJtaW5hdGVkXG4gIHZhciBoYW5kbGVUZXh0ID0gc2V0dGluZ3MudGV4dFxuICB2YXIgaGFuZGxlUmVmZXJlbmNlID0gc2V0dGluZ3MucmVmZXJlbmNlXG4gIHZhciBoYW5kbGVXYXJuaW5nID0gc2V0dGluZ3Mud2FybmluZ1xuICB2YXIgdGV4dENvbnRleHQgPSBzZXR0aW5ncy50ZXh0Q29udGV4dFxuICB2YXIgcmVmZXJlbmNlQ29udGV4dCA9IHNldHRpbmdzLnJlZmVyZW5jZUNvbnRleHRcbiAgdmFyIHdhcm5pbmdDb250ZXh0ID0gc2V0dGluZ3Mud2FybmluZ0NvbnRleHRcbiAgdmFyIHBvcyA9IHNldHRpbmdzLnBvc2l0aW9uXG4gIHZhciBpbmRlbnQgPSBzZXR0aW5ncy5pbmRlbnQgfHwgW11cbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBsaW5lcyA9IC0xXG4gIHZhciBjb2x1bW4gPSBwb3MuY29sdW1uIHx8IDFcbiAgdmFyIGxpbmUgPSBwb3MubGluZSB8fCAxXG4gIHZhciBxdWV1ZSA9ICcnXG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgZW50aXR5Q2hhcmFjdGVyc1xuICB2YXIgbmFtZWRFbnRpdHlcbiAgdmFyIHRlcm1pbmF0ZWRcbiAgdmFyIGNoYXJhY3RlcnNcbiAgdmFyIGNoYXJhY3RlclxuICB2YXIgcmVmZXJlbmNlXG4gIHZhciBmb2xsb3dpbmdcbiAgdmFyIHdhcm5pbmdcbiAgdmFyIHJlYXNvblxuICB2YXIgb3V0cHV0XG4gIHZhciBlbnRpdHlcbiAgdmFyIGJlZ2luXG4gIHZhciBzdGFydFxuICB2YXIgdHlwZVxuICB2YXIgdGVzdFxuICB2YXIgcHJldlxuICB2YXIgbmV4dFxuICB2YXIgZGlmZlxuICB2YXIgZW5kXG5cbiAgaWYgKHR5cGVvZiBhZGRpdGlvbmFsID09PSAnc3RyaW5nJykge1xuICAgIGFkZGl0aW9uYWwgPSBhZGRpdGlvbmFsLmNoYXJDb2RlQXQoMClcbiAgfVxuXG4gIC8vIENhY2hlIHRoZSBjdXJyZW50IHBvaW50LlxuICBwcmV2ID0gbm93KClcblxuICAvLyBXcmFwIGBoYW5kbGVXYXJuaW5nYC5cbiAgd2FybmluZyA9IGhhbmRsZVdhcm5pbmcgPyBwYXJzZUVycm9yIDogbm9vcFxuXG4gIC8vIEVuc3VyZSB0aGUgYWxnb3JpdGhtIHdhbGtzIG92ZXIgdGhlIGZpcnN0IGNoYXJhY3RlciBhbmQgdGhlIGVuZCAoaW5jbHVzaXZlKS5cbiAgaW5kZXgtLVxuICBsZW5ndGgrK1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgLy8gSWYgdGhlIHByZXZpb3VzIGNoYXJhY3RlciB3YXMgYSBuZXdsaW5lLlxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGxpbmVGZWVkKSB7XG4gICAgICBjb2x1bW4gPSBpbmRlbnRbbGluZXNdIHx8IDFcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gYW1wZXJzYW5kKSB7XG4gICAgICBmb2xsb3dpbmcgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4ICsgMSlcblxuICAgICAgLy8gVGhlIGJlaGF2aW91ciBkZXBlbmRzIG9uIHRoZSBpZGVudGl0eSBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIuXG4gICAgICBpZiAoXG4gICAgICAgIGZvbGxvd2luZyA9PT0gdGFiIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gbGluZUZlZWQgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBmb3JtRmVlZCB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IHNwYWNlIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gYW1wZXJzYW5kIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gbGVzc1RoYW4gfHxcbiAgICAgICAgZm9sbG93aW5nICE9PSBmb2xsb3dpbmcgfHxcbiAgICAgICAgKGFkZGl0aW9uYWwgJiYgZm9sbG93aW5nID09PSBhZGRpdGlvbmFsKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vdCBhIGNoYXJhY3RlciByZWZlcmVuY2UuXG4gICAgICAgIC8vIE5vIGNoYXJhY3RlcnMgYXJlIGNvbnN1bWVkLCBhbmQgbm90aGluZyBpcyByZXR1cm5lZC5cbiAgICAgICAgLy8gVGhpcyBpcyBub3QgYW4gZXJyb3IsIGVpdGhlci5cbiAgICAgICAgcXVldWUgKz0gZnJvbUNoYXJDb2RlKGNoYXJhY3RlcilcbiAgICAgICAgY29sdW1uKytcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzdGFydCA9IGluZGV4ICsgMVxuICAgICAgYmVnaW4gPSBzdGFydFxuICAgICAgZW5kID0gc3RhcnRcblxuICAgICAgaWYgKGZvbGxvd2luZyA9PT0gbnVtYmVyU2lnbikge1xuICAgICAgICAvLyBOdW1lcmljYWwgZW50aXR5LlxuICAgICAgICBlbmQgPSArK2JlZ2luXG5cbiAgICAgICAgLy8gVGhlIGJlaGF2aW91ciBmdXJ0aGVyIGRlcGVuZHMgb24gdGhlIG5leHQgY2hhcmFjdGVyLlxuICAgICAgICBmb2xsb3dpbmcgPSB2YWx1ZS5jaGFyQ29kZUF0KGVuZClcblxuICAgICAgICBpZiAoZm9sbG93aW5nID09PSB1cHBlcmNhc2VYIHx8IGZvbGxvd2luZyA9PT0gbG93ZXJjYXNlWCkge1xuICAgICAgICAgIC8vIEFTQ0lJIGhleCBkaWdpdHMuXG4gICAgICAgICAgdHlwZSA9IGhleGFcbiAgICAgICAgICBlbmQgPSArK2JlZ2luXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQVNDSUkgZGlnaXRzLlxuICAgICAgICAgIHR5cGUgPSBkZWNpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5hbWVkIGVudGl0eS5cbiAgICAgICAgdHlwZSA9IG5hbWVcbiAgICAgIH1cblxuICAgICAgZW50aXR5Q2hhcmFjdGVycyA9ICcnXG4gICAgICBlbnRpdHkgPSAnJ1xuICAgICAgY2hhcmFjdGVycyA9ICcnXG4gICAgICB0ZXN0ID0gdGVzdHNbdHlwZV1cbiAgICAgIGVuZC0tXG5cbiAgICAgIHdoaWxlICgrK2VuZCA8IGxlbmd0aCkge1xuICAgICAgICBmb2xsb3dpbmcgPSB2YWx1ZS5jaGFyQ29kZUF0KGVuZClcblxuICAgICAgICBpZiAoIXRlc3QoZm9sbG93aW5nKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBjaGFyYWN0ZXJzICs9IGZyb21DaGFyQ29kZShmb2xsb3dpbmcpXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgY2FuIG1hdGNoIGEgbGVnYWN5IG5hbWVkIHJlZmVyZW5jZS5cbiAgICAgICAgLy8gSWYgc28sIHdlIGNhY2hlIHRoYXQgYXMgdGhlIGxhc3QgdmlhYmxlIG5hbWVkIHJlZmVyZW5jZS5cbiAgICAgICAgLy8gVGhpcyBlbnN1cmVzIHdlIGRvIG5vdCBuZWVkIHRvIHdhbGsgYmFja3dhcmRzIGxhdGVyLlxuICAgICAgICBpZiAodHlwZSA9PT0gbmFtZSAmJiBvd24uY2FsbChsZWdhY3ksIGNoYXJhY3RlcnMpKSB7XG4gICAgICAgICAgZW50aXR5Q2hhcmFjdGVycyA9IGNoYXJhY3RlcnNcbiAgICAgICAgICBlbnRpdHkgPSBsZWdhY3lbY2hhcmFjdGVyc11cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ZXJtaW5hdGVkID0gdmFsdWUuY2hhckNvZGVBdChlbmQpID09PSBzZW1pY29sb25cblxuICAgICAgaWYgKHRlcm1pbmF0ZWQpIHtcbiAgICAgICAgZW5kKytcblxuICAgICAgICBuYW1lZEVudGl0eSA9IHR5cGUgPT09IG5hbWUgPyBkZWNvZGVFbnRpdHkoY2hhcmFjdGVycykgOiBmYWxzZVxuXG4gICAgICAgIGlmIChuYW1lZEVudGl0eSkge1xuICAgICAgICAgIGVudGl0eUNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzXG4gICAgICAgICAgZW50aXR5ID0gbmFtZWRFbnRpdHlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkaWZmID0gMSArIGVuZCAtIHN0YXJ0XG5cbiAgICAgIGlmICghdGVybWluYXRlZCAmJiAhbm9uVGVybWluYXRlZCkge1xuICAgICAgICAvLyBFbXB0eS5cbiAgICAgIH0gZWxzZSBpZiAoIWNoYXJhY3RlcnMpIHtcbiAgICAgICAgLy8gQW4gZW1wdHkgKHBvc3NpYmxlKSBlbnRpdHkgaXMgdmFsaWQsIHVubGVzcyBpdOKAmXMgbnVtZXJpYyAodGh1cyBhblxuICAgICAgICAvLyBhbXBlcnNhbmQgZm9sbG93ZWQgYnkgYW4gb2N0b3Rob3JwKS5cbiAgICAgICAgaWYgKHR5cGUgIT09IG5hbWUpIHtcbiAgICAgICAgICB3YXJuaW5nKG51bWVyaWNFbXB0eSwgZGlmZilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBuYW1lKSB7XG4gICAgICAgIC8vIEFuIGFtcGVyc2FuZCBmb2xsb3dlZCBieSBhbnl0aGluZyB1bmtub3duLCBhbmQgbm90IHRlcm1pbmF0ZWQsIGlzXG4gICAgICAgIC8vIGludmFsaWQuXG4gICAgICAgIGlmICh0ZXJtaW5hdGVkICYmICFlbnRpdHkpIHtcbiAgICAgICAgICB3YXJuaW5nKG5hbWVkVW5rbm93biwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiB0aGVyZXMgc29tZXRoaW5nIGFmdGVyIGFuIGVudGl0eSBuYW1lIHdoaWNoIGlzIG5vdCBrbm93biwgY2FwXG4gICAgICAgICAgLy8gdGhlIHJlZmVyZW5jZS5cbiAgICAgICAgICBpZiAoZW50aXR5Q2hhcmFjdGVycyAhPT0gY2hhcmFjdGVycykge1xuICAgICAgICAgICAgZW5kID0gYmVnaW4gKyBlbnRpdHlDaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgZGlmZiA9IDEgKyBlbmQgLSBiZWdpblxuICAgICAgICAgICAgdGVybWluYXRlZCA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgdGhlIHJlZmVyZW5jZSBpcyBub3QgdGVybWluYXRlZCwgd2Fybi5cbiAgICAgICAgICBpZiAoIXRlcm1pbmF0ZWQpIHtcbiAgICAgICAgICAgIHJlYXNvbiA9IGVudGl0eUNoYXJhY3RlcnMgPyBuYW1lZE5vdFRlcm1pbmF0ZWQgOiBuYW1lZEVtcHR5XG5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5hdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChlbmQpXG5cbiAgICAgICAgICAgICAgaWYgKGZvbGxvd2luZyA9PT0gZXF1YWxzVG8pIHtcbiAgICAgICAgICAgICAgICB3YXJuaW5nKHJlYXNvbiwgZGlmZilcbiAgICAgICAgICAgICAgICBlbnRpdHkgPSBudWxsXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxwaGFudW1lcmljYWwoZm9sbG93aW5nKSkge1xuICAgICAgICAgICAgICAgIGVudGl0eSA9IG51bGxcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3YXJuaW5nKHJlYXNvbiwgZGlmZilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2FybmluZyhyZWFzb24sIGRpZmYpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVmZXJlbmNlID0gZW50aXR5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRlcm1pbmF0ZWQpIHtcbiAgICAgICAgICAvLyBBbGwgbm9uLXRlcm1pbmF0ZWQgbnVtZXJpYyBlbnRpdGllcyBhcmUgbm90IHJlbmRlcmVkLCBhbmQgdHJpZ2dlciBhXG4gICAgICAgICAgLy8gd2FybmluZy5cbiAgICAgICAgICB3YXJuaW5nKG51bWVyaWNOb3RUZXJtaW5hdGVkLCBkaWZmKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiB0ZXJtaW5hdGVkIGFuZCBudW1iZXIsIHBhcnNlIGFzIGVpdGhlciBoZXhhZGVjaW1hbCBvciBkZWNpbWFsLlxuICAgICAgICByZWZlcmVuY2UgPSBwYXJzZUludChjaGFyYWN0ZXJzLCBiYXNlc1t0eXBlXSlcblxuICAgICAgICAvLyBUcmlnZ2VyIGEgd2FybmluZyB3aGVuIHRoZSBwYXJzZWQgbnVtYmVyIGlzIHByb2hpYml0ZWQsIGFuZCByZXBsYWNlXG4gICAgICAgIC8vIHdpdGggcmVwbGFjZW1lbnQgY2hhcmFjdGVyLlxuICAgICAgICBpZiAocHJvaGliaXRlZChyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgd2FybmluZyhudW1lcmljUHJvaGliaXRlZCwgZGlmZilcbiAgICAgICAgICByZWZlcmVuY2UgPSBmcm9tQ2hhckNvZGUocmVwbGFjZW1lbnRDaGFyYWN0ZXIpXG4gICAgICAgIH0gZWxzZSBpZiAocmVmZXJlbmNlIGluIGludmFsaWQpIHtcbiAgICAgICAgICAvLyBUcmlnZ2VyIGEgd2FybmluZyB3aGVuIHRoZSBwYXJzZWQgbnVtYmVyIGlzIGRpc2FsbG93ZWQsIGFuZCByZXBsYWNlXG4gICAgICAgICAgLy8gYnkgYW4gYWx0ZXJuYXRpdmUuXG4gICAgICAgICAgd2FybmluZyhudW1lcmljRGlzYWxsb3dlZCwgZGlmZilcbiAgICAgICAgICByZWZlcmVuY2UgPSBpbnZhbGlkW3JlZmVyZW5jZV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBQYXJzZSB0aGUgbnVtYmVyLlxuICAgICAgICAgIG91dHB1dCA9ICcnXG5cbiAgICAgICAgICAvLyBUcmlnZ2VyIGEgd2FybmluZyB3aGVuIHRoZSBwYXJzZWQgbnVtYmVyIHNob3VsZCBub3QgYmUgdXNlZC5cbiAgICAgICAgICBpZiAoZGlzYWxsb3dlZChyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICB3YXJuaW5nKG51bWVyaWNEaXNhbGxvd2VkLCBkaWZmKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN0cmluZ2lmeSB0aGUgbnVtYmVyLlxuICAgICAgICAgIGlmIChyZWZlcmVuY2UgPiAweGZmZmYpIHtcbiAgICAgICAgICAgIHJlZmVyZW5jZSAtPSAweDEwMDAwXG4gICAgICAgICAgICBvdXRwdXQgKz0gZnJvbUNoYXJDb2RlKChyZWZlcmVuY2UgPj4+ICgxMCAmIDB4M2ZmKSkgfCAweGQ4MDApXG4gICAgICAgICAgICByZWZlcmVuY2UgPSAweGRjMDAgfCAocmVmZXJlbmNlICYgMHgzZmYpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVmZXJlbmNlID0gb3V0cHV0ICsgZnJvbUNoYXJDb2RlKHJlZmVyZW5jZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3VuZCBpdCFcbiAgICAgIC8vIEZpcnN0IGVhdCB0aGUgcXVldWVkIGNoYXJhY3RlcnMgYXMgbm9ybWFsIHRleHQsIHRoZW4gZWF0IGFuIGVudGl0eS5cbiAgICAgIGlmIChyZWZlcmVuY2UpIHtcbiAgICAgICAgZmx1c2goKVxuXG4gICAgICAgIHByZXYgPSBub3coKVxuICAgICAgICBpbmRleCA9IGVuZCAtIDFcbiAgICAgICAgY29sdW1uICs9IGVuZCAtIHN0YXJ0ICsgMVxuICAgICAgICByZXN1bHQucHVzaChyZWZlcmVuY2UpXG4gICAgICAgIG5leHQgPSBub3coKVxuICAgICAgICBuZXh0Lm9mZnNldCsrXG5cbiAgICAgICAgaWYgKGhhbmRsZVJlZmVyZW5jZSkge1xuICAgICAgICAgIGhhbmRsZVJlZmVyZW5jZS5jYWxsKFxuICAgICAgICAgICAgcmVmZXJlbmNlQ29udGV4dCxcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIHtzdGFydDogcHJldiwgZW5kOiBuZXh0fSxcbiAgICAgICAgICAgIHZhbHVlLnNsaWNlKHN0YXJ0IC0gMSwgZW5kKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXYgPSBuZXh0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB3ZSBjb3VsZCBub3QgZmluZCBhIHJlZmVyZW5jZSwgcXVldWUgdGhlIGNoZWNrZWQgY2hhcmFjdGVycyAoYXNcbiAgICAgICAgLy8gbm9ybWFsIGNoYXJhY3RlcnMpLCBhbmQgbW92ZSB0aGUgcG9pbnRlciB0byB0aGVpciBlbmQuXG4gICAgICAgIC8vIFRoaXMgaXMgcG9zc2libGUgYmVjYXVzZSB3ZSBjYW4gYmUgY2VydGFpbiBuZWl0aGVyIG5ld2xpbmVzIG5vclxuICAgICAgICAvLyBhbXBlcnNhbmRzIGFyZSBpbmNsdWRlZC5cbiAgICAgICAgY2hhcmFjdGVycyA9IHZhbHVlLnNsaWNlKHN0YXJ0IC0gMSwgZW5kKVxuICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXJzXG4gICAgICAgIGNvbHVtbiArPSBjaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICBpbmRleCA9IGVuZCAtIDFcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSGFuZGxlIGFueXRoaW5nIG90aGVyIHRoYW4gYW4gYW1wZXJzYW5kLCBpbmNsdWRpbmcgbmV3bGluZXMgYW5kIEVPRi5cbiAgICAgIGlmIChcbiAgICAgICAgY2hhcmFjdGVyID09PSAxMCAvLyBMaW5lIGZlZWRcbiAgICAgICkge1xuICAgICAgICBsaW5lKytcbiAgICAgICAgbGluZXMrK1xuICAgICAgICBjb2x1bW4gPSAwXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IGNoYXJhY3Rlcikge1xuICAgICAgICBxdWV1ZSArPSBmcm9tQ2hhckNvZGUoY2hhcmFjdGVyKVxuICAgICAgICBjb2x1bW4rK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmx1c2goKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgcmVkdWNlZCBub2RlcywgYW5kIGFueSBwb3NzaWJsZSB3YXJuaW5ncy5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxuXG4gIC8vIEdldCBjdXJyZW50IHBvc2l0aW9uLlxuICBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmU6IGxpbmUsXG4gICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgIG9mZnNldDogaW5kZXggKyAocG9zLm9mZnNldCB8fCAwKVxuICAgIH1cbiAgfVxuXG4gIC8vIOKAnFRocm934oCdIGEgcGFyc2UtZXJyb3I6IGEgd2FybmluZy5cbiAgZnVuY3Rpb24gcGFyc2VFcnJvcihjb2RlLCBvZmZzZXQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBub3coKVxuXG4gICAgcG9zaXRpb24uY29sdW1uICs9IG9mZnNldFxuICAgIHBvc2l0aW9uLm9mZnNldCArPSBvZmZzZXRcblxuICAgIGhhbmRsZVdhcm5pbmcuY2FsbCh3YXJuaW5nQ29udGV4dCwgbWVzc2FnZXNbY29kZV0sIHBvc2l0aW9uLCBjb2RlKVxuICB9XG5cbiAgLy8gRmx1c2ggYHF1ZXVlYCAobm9ybWFsIHRleHQpLlxuICAvLyBNYWNybyBpbnZva2VkIGJlZm9yZSBlYWNoIGVudGl0eSBhbmQgYXQgdGhlIGVuZCBvZiBgdmFsdWVgLlxuICAvLyBEb2VzIG5vdGhpbmcgd2hlbiBgcXVldWVgIGlzIGVtcHR5LlxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBpZiAocXVldWUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHF1ZXVlKVxuXG4gICAgICBpZiAoaGFuZGxlVGV4dCkge1xuICAgICAgICBoYW5kbGVUZXh0LmNhbGwodGV4dENvbnRleHQsIHF1ZXVlLCB7c3RhcnQ6IHByZXYsIGVuZDogbm93KCl9KVxuICAgICAgfVxuXG4gICAgICBxdWV1ZSA9ICcnXG4gICAgfVxuICB9XG59XG5cbi8vIENoZWNrIGlmIGBjaGFyYWN0ZXJgIGlzIG91dHNpZGUgdGhlIHBlcm1pc3NpYmxlIHVuaWNvZGUgcmFuZ2UuXG5mdW5jdGlvbiBwcm9oaWJpdGVkKGNvZGUpIHtcbiAgcmV0dXJuIChjb2RlID49IDB4ZDgwMCAmJiBjb2RlIDw9IDB4ZGZmZikgfHwgY29kZSA+IDB4MTBmZmZmXG59XG5cbi8vIENoZWNrIGlmIGBjaGFyYWN0ZXJgIGlzIGRpc2FsbG93ZWQuXG5mdW5jdGlvbiBkaXNhbGxvd2VkKGNvZGUpIHtcbiAgcmV0dXJuIChcbiAgICAoY29kZSA+PSAweDAwMDEgJiYgY29kZSA8PSAweDAwMDgpIHx8XG4gICAgY29kZSA9PT0gMHgwMDBiIHx8XG4gICAgKGNvZGUgPj0gMHgwMDBkICYmIGNvZGUgPD0gMHgwMDFmKSB8fFxuICAgIChjb2RlID49IDB4MDA3ZiAmJiBjb2RlIDw9IDB4MDA5ZikgfHxcbiAgICAoY29kZSA+PSAweGZkZDAgJiYgY29kZSA8PSAweGZkZWYpIHx8XG4gICAgKGNvZGUgJiAweGZmZmYpID09PSAweGZmZmYgfHxcbiAgICAoY29kZSAmIDB4ZmZmZikgPT09IDB4ZmZmZVxuICApXG59XG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi9ub3JtYWxpemUnKVxudmFyIERlZmluZWRJbmZvID0gcmVxdWlyZSgnLi9saWIvdXRpbC9kZWZpbmVkLWluZm8nKVxudmFyIEluZm8gPSByZXF1aXJlKCcuL2xpYi91dGlsL2luZm8nKVxuXG52YXIgZGF0YSA9ICdkYXRhJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRcblxudmFyIHZhbGlkID0gL15kYXRhWy1hLXowLTkuOl9dKyQvaVxudmFyIGRhc2ggPSAvLVthLXpdL2dcbnZhciBjYXAgPSAvW0EtWl0vZ1xuXG5mdW5jdGlvbiBmaW5kKHNjaGVtYSwgdmFsdWUpIHtcbiAgdmFyIG5vcm1hbCA9IG5vcm1hbGl6ZSh2YWx1ZSlcbiAgdmFyIHByb3AgPSB2YWx1ZVxuICB2YXIgVHlwZSA9IEluZm9cblxuICBpZiAobm9ybWFsIGluIHNjaGVtYS5ub3JtYWwpIHtcbiAgICByZXR1cm4gc2NoZW1hLnByb3BlcnR5W3NjaGVtYS5ub3JtYWxbbm9ybWFsXV1cbiAgfVxuXG4gIGlmIChub3JtYWwubGVuZ3RoID4gNCAmJiBub3JtYWwuc2xpY2UoMCwgNCkgPT09IGRhdGEgJiYgdmFsaWQudGVzdCh2YWx1ZSkpIHtcbiAgICAvLyBBdHRyaWJ1dGUgb3IgcHJvcGVydHkuXG4gICAgaWYgKHZhbHVlLmNoYXJBdCg0KSA9PT0gJy0nKSB7XG4gICAgICBwcm9wID0gZGF0YXNldFRvUHJvcGVydHkodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZGF0YXNldFRvQXR0cmlidXRlKHZhbHVlKVxuICAgIH1cblxuICAgIFR5cGUgPSBEZWZpbmVkSW5mb1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUeXBlKHByb3AsIHZhbHVlKVxufVxuXG5mdW5jdGlvbiBkYXRhc2V0VG9Qcm9wZXJ0eShhdHRyaWJ1dGUpIHtcbiAgdmFyIHZhbHVlID0gYXR0cmlidXRlLnNsaWNlKDUpLnJlcGxhY2UoZGFzaCwgY2FtZWxjYXNlKVxuICByZXR1cm4gZGF0YSArIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSlcbn1cblxuZnVuY3Rpb24gZGF0YXNldFRvQXR0cmlidXRlKHByb3BlcnR5KSB7XG4gIHZhciB2YWx1ZSA9IHByb3BlcnR5LnNsaWNlKDQpXG5cbiAgaWYgKGRhc2gudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcHJvcGVydHlcbiAgfVxuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShjYXAsIGtlYmFiKVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgIT09ICctJykge1xuICAgIHZhbHVlID0gJy0nICsgdmFsdWVcbiAgfVxuXG4gIHJldHVybiBkYXRhICsgdmFsdWVcbn1cblxuZnVuY3Rpb24ga2ViYWIoJDApIHtcbiAgcmV0dXJuICctJyArICQwLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gY2FtZWxjYXNlKCQwKSB7XG4gIHJldHVybiAkMC5jaGFyQXQoMSkudG9VcHBlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtZXJnZSA9IHJlcXVpcmUoJy4vbGliL3V0aWwvbWVyZ2UnKVxudmFyIHhsaW5rID0gcmVxdWlyZSgnLi9saWIveGxpbmsnKVxudmFyIHhtbCA9IHJlcXVpcmUoJy4vbGliL3htbCcpXG52YXIgeG1sbnMgPSByZXF1aXJlKCcuL2xpYi94bWxucycpXG52YXIgYXJpYSA9IHJlcXVpcmUoJy4vbGliL2FyaWEnKVxudmFyIGh0bWwgPSByZXF1aXJlKCcuL2xpYi9odG1sJylcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZShbeG1sLCB4bGluaywgeG1sbnMsIGFyaWEsIGh0bWxdKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0eXBlcyA9IHJlcXVpcmUoJy4vdXRpbC90eXBlcycpXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG5cbnZhciBib29sZWFuaXNoID0gdHlwZXMuYm9vbGVhbmlzaFxudmFyIG51bWJlciA9IHR5cGVzLm51bWJlclxudmFyIHNwYWNlU2VwYXJhdGVkID0gdHlwZXMuc3BhY2VTZXBhcmF0ZWRcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICB0cmFuc2Zvcm06IGFyaWFUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBhcmlhQWN0aXZlRGVzY2VuZGFudDogbnVsbCxcbiAgICBhcmlhQXRvbWljOiBib29sZWFuaXNoLFxuICAgIGFyaWFBdXRvQ29tcGxldGU6IG51bGwsXG4gICAgYXJpYUJ1c3k6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUNoZWNrZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUNvbENvdW50OiBudW1iZXIsXG4gICAgYXJpYUNvbEluZGV4OiBudW1iZXIsXG4gICAgYXJpYUNvbFNwYW46IG51bWJlcixcbiAgICBhcmlhQ29udHJvbHM6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFDdXJyZW50OiBudWxsLFxuICAgIGFyaWFEZXNjcmliZWRCeTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYURldGFpbHM6IG51bGwsXG4gICAgYXJpYURpc2FibGVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFEcm9wRWZmZWN0OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhRXJyb3JNZXNzYWdlOiBudWxsLFxuICAgIGFyaWFFeHBhbmRlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhRmxvd1RvOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhR3JhYmJlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhSGFzUG9wdXA6IG51bGwsXG4gICAgYXJpYUhpZGRlbjogYm9vbGVhbmlzaCxcbiAgICBhcmlhSW52YWxpZDogbnVsbCxcbiAgICBhcmlhS2V5U2hvcnRjdXRzOiBudWxsLFxuICAgIGFyaWFMYWJlbDogbnVsbCxcbiAgICBhcmlhTGFiZWxsZWRCeTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYUxldmVsOiBudW1iZXIsXG4gICAgYXJpYUxpdmU6IG51bGwsXG4gICAgYXJpYU1vZGFsOiBib29sZWFuaXNoLFxuICAgIGFyaWFNdWx0aUxpbmU6IGJvb2xlYW5pc2gsXG4gICAgYXJpYU11bHRpU2VsZWN0YWJsZTogYm9vbGVhbmlzaCxcbiAgICBhcmlhT3JpZW50YXRpb246IG51bGwsXG4gICAgYXJpYU93bnM6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFQbGFjZWhvbGRlcjogbnVsbCxcbiAgICBhcmlhUG9zSW5TZXQ6IG51bWJlcixcbiAgICBhcmlhUHJlc3NlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhUmVhZE9ubHk6IGJvb2xlYW5pc2gsXG4gICAgYXJpYVJlbGV2YW50OiBudWxsLFxuICAgIGFyaWFSZXF1aXJlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhUm9sZURlc2NyaXB0aW9uOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhUm93Q291bnQ6IG51bWJlcixcbiAgICBhcmlhUm93SW5kZXg6IG51bWJlcixcbiAgICBhcmlhUm93U3BhbjogbnVtYmVyLFxuICAgIGFyaWFTZWxlY3RlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhU2V0U2l6ZTogbnVtYmVyLFxuICAgIGFyaWFTb3J0OiBudWxsLFxuICAgIGFyaWFWYWx1ZU1heDogbnVtYmVyLFxuICAgIGFyaWFWYWx1ZU1pbjogbnVtYmVyLFxuICAgIGFyaWFWYWx1ZU5vdzogbnVtYmVyLFxuICAgIGFyaWFWYWx1ZVRleHQ6IG51bGwsXG4gICAgcm9sZTogbnVsbFxuICB9XG59KVxuXG5mdW5jdGlvbiBhcmlhVHJhbnNmb3JtKF8sIHByb3ApIHtcbiAgcmV0dXJuIHByb3AgPT09ICdyb2xlJyA/IHByb3AgOiAnYXJpYS0nICsgcHJvcC5zbGljZSg0KS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3R5cGVzJylcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcbnZhciBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3V0aWwvY2FzZS1pbnNlbnNpdGl2ZS10cmFuc2Zvcm0nKVxuXG52YXIgYm9vbGVhbiA9IHR5cGVzLmJvb2xlYW5cbnZhciBvdmVybG9hZGVkQm9vbGVhbiA9IHR5cGVzLm92ZXJsb2FkZWRCb29sZWFuXG52YXIgYm9vbGVhbmlzaCA9IHR5cGVzLmJvb2xlYW5pc2hcbnZhciBudW1iZXIgPSB0eXBlcy5udW1iZXJcbnZhciBzcGFjZVNlcGFyYXRlZCA9IHR5cGVzLnNwYWNlU2VwYXJhdGVkXG52YXIgY29tbWFTZXBhcmF0ZWQgPSB0eXBlcy5jb21tYVNlcGFyYXRlZFxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAnaHRtbCcsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBhY2NlcHRjaGFyc2V0OiAnYWNjZXB0LWNoYXJzZXQnLFxuICAgIGNsYXNzbmFtZTogJ2NsYXNzJyxcbiAgICBodG1sZm9yOiAnZm9yJyxcbiAgICBodHRwZXF1aXY6ICdodHRwLWVxdWl2J1xuICB9LFxuICB0cmFuc2Zvcm06IGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSxcbiAgbXVzdFVzZVByb3BlcnR5OiBbJ2NoZWNrZWQnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLCAnc2VsZWN0ZWQnXSxcbiAgcHJvcGVydGllczoge1xuICAgIC8vIFN0YW5kYXJkIFByb3BlcnRpZXMuXG4gICAgYWJicjogbnVsbCxcbiAgICBhY2NlcHQ6IGNvbW1hU2VwYXJhdGVkLFxuICAgIGFjY2VwdENoYXJzZXQ6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFjY2Vzc0tleTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYWN0aW9uOiBudWxsLFxuICAgIGFsbG93OiBudWxsLFxuICAgIGFsbG93RnVsbFNjcmVlbjogYm9vbGVhbixcbiAgICBhbGxvd1BheW1lbnRSZXF1ZXN0OiBib29sZWFuLFxuICAgIGFsbG93VXNlck1lZGlhOiBib29sZWFuLFxuICAgIGFsdDogbnVsbCxcbiAgICBhczogbnVsbCxcbiAgICBhc3luYzogYm9vbGVhbixcbiAgICBhdXRvQ2FwaXRhbGl6ZTogbnVsbCxcbiAgICBhdXRvQ29tcGxldGU6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGF1dG9Gb2N1czogYm9vbGVhbixcbiAgICBhdXRvUGxheTogYm9vbGVhbixcbiAgICBjYXB0dXJlOiBib29sZWFuLFxuICAgIGNoYXJTZXQ6IG51bGwsXG4gICAgY2hlY2tlZDogYm9vbGVhbixcbiAgICBjaXRlOiBudWxsLFxuICAgIGNsYXNzTmFtZTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgY29sczogbnVtYmVyLFxuICAgIGNvbFNwYW46IG51bGwsXG4gICAgY29udGVudDogbnVsbCxcbiAgICBjb250ZW50RWRpdGFibGU6IGJvb2xlYW5pc2gsXG4gICAgY29udHJvbHM6IGJvb2xlYW4sXG4gICAgY29udHJvbHNMaXN0OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBjb29yZHM6IG51bWJlciB8IGNvbW1hU2VwYXJhdGVkLFxuICAgIGNyb3NzT3JpZ2luOiBudWxsLFxuICAgIGRhdGE6IG51bGwsXG4gICAgZGF0ZVRpbWU6IG51bGwsXG4gICAgZGVjb2Rpbmc6IG51bGwsXG4gICAgZGVmYXVsdDogYm9vbGVhbixcbiAgICBkZWZlcjogYm9vbGVhbixcbiAgICBkaXI6IG51bGwsXG4gICAgZGlyTmFtZTogbnVsbCxcbiAgICBkaXNhYmxlZDogYm9vbGVhbixcbiAgICBkb3dubG9hZDogb3ZlcmxvYWRlZEJvb2xlYW4sXG4gICAgZHJhZ2dhYmxlOiBib29sZWFuaXNoLFxuICAgIGVuY1R5cGU6IG51bGwsXG4gICAgZW50ZXJLZXlIaW50OiBudWxsLFxuICAgIGZvcm06IG51bGwsXG4gICAgZm9ybUFjdGlvbjogbnVsbCxcbiAgICBmb3JtRW5jVHlwZTogbnVsbCxcbiAgICBmb3JtTWV0aG9kOiBudWxsLFxuICAgIGZvcm1Ob1ZhbGlkYXRlOiBib29sZWFuLFxuICAgIGZvcm1UYXJnZXQ6IG51bGwsXG4gICAgaGVhZGVyczogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaGVpZ2h0OiBudW1iZXIsXG4gICAgaGlkZGVuOiBib29sZWFuLFxuICAgIGhpZ2g6IG51bWJlcixcbiAgICBocmVmOiBudWxsLFxuICAgIGhyZWZMYW5nOiBudWxsLFxuICAgIGh0bWxGb3I6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGh0dHBFcXVpdjogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaWQ6IG51bGwsXG4gICAgaW1hZ2VTaXplczogbnVsbCxcbiAgICBpbWFnZVNyY1NldDogY29tbWFTZXBhcmF0ZWQsXG4gICAgaW5wdXRNb2RlOiBudWxsLFxuICAgIGludGVncml0eTogbnVsbCxcbiAgICBpczogbnVsbCxcbiAgICBpc01hcDogYm9vbGVhbixcbiAgICBpdGVtSWQ6IG51bGwsXG4gICAgaXRlbVByb3A6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGl0ZW1SZWY6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGl0ZW1TY29wZTogYm9vbGVhbixcbiAgICBpdGVtVHlwZTogc3BhY2VTZXBhcmF0ZWQsXG4gICAga2luZDogbnVsbCxcbiAgICBsYWJlbDogbnVsbCxcbiAgICBsYW5nOiBudWxsLFxuICAgIGxhbmd1YWdlOiBudWxsLFxuICAgIGxpc3Q6IG51bGwsXG4gICAgbG9vcDogYm9vbGVhbixcbiAgICBsb3c6IG51bWJlcixcbiAgICBtYW5pZmVzdDogbnVsbCxcbiAgICBtYXg6IG51bGwsXG4gICAgbWF4TGVuZ3RoOiBudW1iZXIsXG4gICAgbWVkaWE6IG51bGwsXG4gICAgbWV0aG9kOiBudWxsLFxuICAgIG1pbjogbnVsbCxcbiAgICBtaW5MZW5ndGg6IG51bWJlcixcbiAgICBtdWx0aXBsZTogYm9vbGVhbixcbiAgICBtdXRlZDogYm9vbGVhbixcbiAgICBuYW1lOiBudWxsLFxuICAgIG5vbmNlOiBudWxsLFxuICAgIG5vTW9kdWxlOiBib29sZWFuLFxuICAgIG5vVmFsaWRhdGU6IGJvb2xlYW4sXG4gICAgb25BYm9ydDogbnVsbCxcbiAgICBvbkFmdGVyUHJpbnQ6IG51bGwsXG4gICAgb25BdXhDbGljazogbnVsbCxcbiAgICBvbkJlZm9yZVByaW50OiBudWxsLFxuICAgIG9uQmVmb3JlVW5sb2FkOiBudWxsLFxuICAgIG9uQmx1cjogbnVsbCxcbiAgICBvbkNhbmNlbDogbnVsbCxcbiAgICBvbkNhblBsYXk6IG51bGwsXG4gICAgb25DYW5QbGF5VGhyb3VnaDogbnVsbCxcbiAgICBvbkNoYW5nZTogbnVsbCxcbiAgICBvbkNsaWNrOiBudWxsLFxuICAgIG9uQ2xvc2U6IG51bGwsXG4gICAgb25Db250ZXh0TWVudTogbnVsbCxcbiAgICBvbkNvcHk6IG51bGwsXG4gICAgb25DdWVDaGFuZ2U6IG51bGwsXG4gICAgb25DdXQ6IG51bGwsXG4gICAgb25EYmxDbGljazogbnVsbCxcbiAgICBvbkRyYWc6IG51bGwsXG4gICAgb25EcmFnRW5kOiBudWxsLFxuICAgIG9uRHJhZ0VudGVyOiBudWxsLFxuICAgIG9uRHJhZ0V4aXQ6IG51bGwsXG4gICAgb25EcmFnTGVhdmU6IG51bGwsXG4gICAgb25EcmFnT3ZlcjogbnVsbCxcbiAgICBvbkRyYWdTdGFydDogbnVsbCxcbiAgICBvbkRyb3A6IG51bGwsXG4gICAgb25EdXJhdGlvbkNoYW5nZTogbnVsbCxcbiAgICBvbkVtcHRpZWQ6IG51bGwsXG4gICAgb25FbmRlZDogbnVsbCxcbiAgICBvbkVycm9yOiBudWxsLFxuICAgIG9uRm9jdXM6IG51bGwsXG4gICAgb25Gb3JtRGF0YTogbnVsbCxcbiAgICBvbkhhc2hDaGFuZ2U6IG51bGwsXG4gICAgb25JbnB1dDogbnVsbCxcbiAgICBvbkludmFsaWQ6IG51bGwsXG4gICAgb25LZXlEb3duOiBudWxsLFxuICAgIG9uS2V5UHJlc3M6IG51bGwsXG4gICAgb25LZXlVcDogbnVsbCxcbiAgICBvbkxhbmd1YWdlQ2hhbmdlOiBudWxsLFxuICAgIG9uTG9hZDogbnVsbCxcbiAgICBvbkxvYWRlZERhdGE6IG51bGwsXG4gICAgb25Mb2FkZWRNZXRhZGF0YTogbnVsbCxcbiAgICBvbkxvYWRFbmQ6IG51bGwsXG4gICAgb25Mb2FkU3RhcnQ6IG51bGwsXG4gICAgb25NZXNzYWdlOiBudWxsLFxuICAgIG9uTWVzc2FnZUVycm9yOiBudWxsLFxuICAgIG9uTW91c2VEb3duOiBudWxsLFxuICAgIG9uTW91c2VFbnRlcjogbnVsbCxcbiAgICBvbk1vdXNlTGVhdmU6IG51bGwsXG4gICAgb25Nb3VzZU1vdmU6IG51bGwsXG4gICAgb25Nb3VzZU91dDogbnVsbCxcbiAgICBvbk1vdXNlT3ZlcjogbnVsbCxcbiAgICBvbk1vdXNlVXA6IG51bGwsXG4gICAgb25PZmZsaW5lOiBudWxsLFxuICAgIG9uT25saW5lOiBudWxsLFxuICAgIG9uUGFnZUhpZGU6IG51bGwsXG4gICAgb25QYWdlU2hvdzogbnVsbCxcbiAgICBvblBhc3RlOiBudWxsLFxuICAgIG9uUGF1c2U6IG51bGwsXG4gICAgb25QbGF5OiBudWxsLFxuICAgIG9uUGxheWluZzogbnVsbCxcbiAgICBvblBvcFN0YXRlOiBudWxsLFxuICAgIG9uUHJvZ3Jlc3M6IG51bGwsXG4gICAgb25SYXRlQ2hhbmdlOiBudWxsLFxuICAgIG9uUmVqZWN0aW9uSGFuZGxlZDogbnVsbCxcbiAgICBvblJlc2V0OiBudWxsLFxuICAgIG9uUmVzaXplOiBudWxsLFxuICAgIG9uU2Nyb2xsOiBudWxsLFxuICAgIG9uU2VjdXJpdHlQb2xpY3lWaW9sYXRpb246IG51bGwsXG4gICAgb25TZWVrZWQ6IG51bGwsXG4gICAgb25TZWVraW5nOiBudWxsLFxuICAgIG9uU2VsZWN0OiBudWxsLFxuICAgIG9uU3RhbGxlZDogbnVsbCxcbiAgICBvblN0b3JhZ2U6IG51bGwsXG4gICAgb25TdWJtaXQ6IG51bGwsXG4gICAgb25TdXNwZW5kOiBudWxsLFxuICAgIG9uVGltZVVwZGF0ZTogbnVsbCxcbiAgICBvblRvZ2dsZTogbnVsbCxcbiAgICBvblVuaGFuZGxlZFJlamVjdGlvbjogbnVsbCxcbiAgICBvblVubG9hZDogbnVsbCxcbiAgICBvblZvbHVtZUNoYW5nZTogbnVsbCxcbiAgICBvbldhaXRpbmc6IG51bGwsXG4gICAgb25XaGVlbDogbnVsbCxcbiAgICBvcGVuOiBib29sZWFuLFxuICAgIG9wdGltdW06IG51bWJlcixcbiAgICBwYXR0ZXJuOiBudWxsLFxuICAgIHBpbmc6IHNwYWNlU2VwYXJhdGVkLFxuICAgIHBsYWNlaG9sZGVyOiBudWxsLFxuICAgIHBsYXlzSW5saW5lOiBib29sZWFuLFxuICAgIHBvc3RlcjogbnVsbCxcbiAgICBwcmVsb2FkOiBudWxsLFxuICAgIHJlYWRPbmx5OiBib29sZWFuLFxuICAgIHJlZmVycmVyUG9saWN5OiBudWxsLFxuICAgIHJlbDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW4sXG4gICAgcmV2ZXJzZWQ6IGJvb2xlYW4sXG4gICAgcm93czogbnVtYmVyLFxuICAgIHJvd1NwYW46IG51bWJlcixcbiAgICBzYW5kYm94OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBzY29wZTogbnVsbCxcbiAgICBzY29wZWQ6IGJvb2xlYW4sXG4gICAgc2VhbWxlc3M6IGJvb2xlYW4sXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW4sXG4gICAgc2hhcGU6IG51bGwsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIHNpemVzOiBudWxsLFxuICAgIHNsb3Q6IG51bGwsXG4gICAgc3BhbjogbnVtYmVyLFxuICAgIHNwZWxsQ2hlY2s6IGJvb2xlYW5pc2gsXG4gICAgc3JjOiBudWxsLFxuICAgIHNyY0RvYzogbnVsbCxcbiAgICBzcmNMYW5nOiBudWxsLFxuICAgIHNyY1NldDogY29tbWFTZXBhcmF0ZWQsXG4gICAgc3RhcnQ6IG51bWJlcixcbiAgICBzdGVwOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIHRhYkluZGV4OiBudW1iZXIsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHRyYW5zbGF0ZTogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHR5cGVNdXN0TWF0Y2g6IGJvb2xlYW4sXG4gICAgdXNlTWFwOiBudWxsLFxuICAgIHZhbHVlOiBib29sZWFuaXNoLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgd3JhcDogbnVsbCxcblxuICAgIC8vIExlZ2FjeS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI290aGVyLWVsZW1lbnRzLC1hdHRyaWJ1dGVzLWFuZC1hcGlzXG4gICAgYWxpZ246IG51bGwsIC8vIFNldmVyYWwuIFVzZSBDU1MgYHRleHQtYWxpZ25gIGluc3RlYWQsXG4gICAgYUxpbms6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBhOmFjdGl2ZSB7Y29sb3J9YCBpbnN0ZWFkXG4gICAgYXJjaGl2ZTogc3BhY2VTZXBhcmF0ZWQsIC8vIGA8b2JqZWN0PmAuIExpc3Qgb2YgVVJJcyB0byBhcmNoaXZlc1xuICAgIGF4aXM6IG51bGwsIC8vIGA8dGQ+YCBhbmQgYDx0aD5gLiBVc2UgYHNjb3BlYCBvbiBgPHRoPmBcbiAgICBiYWNrZ3JvdW5kOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYmFja2dyb3VuZC1pbWFnZWAgaW5zdGVhZFxuICAgIGJnQ29sb3I6IG51bGwsIC8vIGA8Ym9keT5gIGFuZCB0YWJsZSBlbGVtZW50cy4gVXNlIENTUyBgYmFja2dyb3VuZC1jb2xvcmAgaW5zdGVhZFxuICAgIGJvcmRlcjogbnVtYmVyLCAvLyBgPHRhYmxlPmAuIFVzZSBDU1MgYGJvcmRlci13aWR0aGAgaW5zdGVhZCxcbiAgICBib3JkZXJDb2xvcjogbnVsbCwgLy8gYDx0YWJsZT5gLiBVc2UgQ1NTIGBib3JkZXItY29sb3JgIGluc3RlYWQsXG4gICAgYm90dG9tTWFyZ2luOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgY2VsbFBhZGRpbmc6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIGNlbGxTcGFjaW5nOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBjaGFyOiBudWxsLCAvLyBTZXZlcmFsIHRhYmxlIGVsZW1lbnRzLiBXaGVuIGBhbGlnbj1jaGFyYCwgc2V0cyB0aGUgY2hhcmFjdGVyIHRvIGFsaWduIG9uXG4gICAgY2hhck9mZjogbnVsbCwgLy8gU2V2ZXJhbCB0YWJsZSBlbGVtZW50cy4gV2hlbiBgY2hhcmAsIG9mZnNldHMgdGhlIGFsaWdubWVudFxuICAgIGNsYXNzSWQ6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjbGVhcjogbnVsbCwgLy8gYDxicj5gLiBVc2UgQ1NTIGBjbGVhcmAgaW5zdGVhZFxuICAgIGNvZGU6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjb2RlQmFzZTogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIGNvZGVUeXBlOiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgY29sb3I6IG51bGwsIC8vIGA8Zm9udD5gIGFuZCBgPGhyPmAuIFVzZSBDU1MgaW5zdGVhZFxuICAgIGNvbXBhY3Q6IGJvb2xlYW4sIC8vIExpc3RzLiBVc2UgQ1NTIHRvIHJlZHVjZSBzcGFjZSBiZXR3ZWVuIGl0ZW1zIGluc3RlYWRcbiAgICBkZWNsYXJlOiBib29sZWFuLCAvLyBgPG9iamVjdD5gXG4gICAgZXZlbnQ6IG51bGwsIC8vIGA8c2NyaXB0PmBcbiAgICBmYWNlOiBudWxsLCAvLyBgPGZvbnQ+YC4gVXNlIENTUyBpbnN0ZWFkXG4gICAgZnJhbWU6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIGZyYW1lQm9yZGVyOiBudWxsLCAvLyBgPGlmcmFtZT5gLiBVc2UgQ1NTIGBib3JkZXJgIGluc3RlYWRcbiAgICBoU3BhY2U6IG51bWJlciwgLy8gYDxpbWc+YCBhbmQgYDxvYmplY3Q+YFxuICAgIGxlZnRNYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBsaW5rOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYTpsaW5rIHtjb2xvcjogKn1gIGluc3RlYWRcbiAgICBsb25nRGVzYzogbnVsbCwgLy8gYDxmcmFtZT5gLCBgPGlmcmFtZT5gLCBhbmQgYDxpbWc+YC4gVXNlIGFuIGA8YT5gXG4gICAgbG93U3JjOiBudWxsLCAvLyBgPGltZz5gLiBVc2UgYSBgPHBpY3R1cmU+YFxuICAgIG1hcmdpbkhlaWdodDogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIG1hcmdpbldpZHRoOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgbm9SZXNpemU6IGJvb2xlYW4sIC8vIGA8ZnJhbWU+YFxuICAgIG5vSHJlZjogYm9vbGVhbiwgLy8gYDxhcmVhPmAuIFVzZSBubyBocmVmIGluc3RlYWQgb2YgYW4gZXhwbGljaXQgYG5vaHJlZmBcbiAgICBub1NoYWRlOiBib29sZWFuLCAvLyBgPGhyPmAuIFVzZSBiYWNrZ3JvdW5kLWNvbG9yIGFuZCBoZWlnaHQgaW5zdGVhZCBvZiBib3JkZXJzXG4gICAgbm9XcmFwOiBib29sZWFuLCAvLyBgPHRkPmAgYW5kIGA8dGg+YFxuICAgIG9iamVjdDogbnVsbCwgLy8gYDxhcHBsZXQ+YFxuICAgIHByb2ZpbGU6IG51bGwsIC8vIGA8aGVhZD5gXG4gICAgcHJvbXB0OiBudWxsLCAvLyBgPGlzaW5kZXg+YFxuICAgIHJldjogbnVsbCwgLy8gYDxsaW5rPmBcbiAgICByaWdodE1hcmdpbjogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIHJ1bGVzOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBzY2hlbWU6IG51bGwsIC8vIGA8bWV0YT5gXG4gICAgc2Nyb2xsaW5nOiBib29sZWFuaXNoLCAvLyBgPGZyYW1lPmAuIFVzZSBvdmVyZmxvdyBpbiB0aGUgY2hpbGQgY29udGV4dFxuICAgIHN0YW5kYnk6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBzdW1tYXJ5OiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICB0ZXh0OiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgY29sb3JgIGluc3RlYWRcbiAgICB0b3BNYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICB2YWx1ZVR5cGU6IG51bGwsIC8vIGA8cGFyYW0+YFxuICAgIHZlcnNpb246IG51bGwsIC8vIGA8aHRtbD5gLiBVc2UgYSBkb2N0eXBlLlxuICAgIHZBbGlnbjogbnVsbCwgLy8gU2V2ZXJhbC4gVXNlIENTUyBgdmVydGljYWwtYWxpZ25gIGluc3RlYWRcbiAgICB2TGluazogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGE6dmlzaXRlZCB7Y29sb3J9YCBpbnN0ZWFkXG4gICAgdlNwYWNlOiBudW1iZXIsIC8vIGA8aW1nPmAgYW5kIGA8b2JqZWN0PmBcblxuICAgIC8vIE5vbi1zdGFuZGFyZCBQcm9wZXJ0aWVzLlxuICAgIGFsbG93VHJhbnNwYXJlbmN5OiBudWxsLFxuICAgIGF1dG9Db3JyZWN0OiBudWxsLFxuICAgIGF1dG9TYXZlOiBudWxsLFxuICAgIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlOiBib29sZWFuLFxuICAgIHByZWZpeDogbnVsbCxcbiAgICBwcm9wZXJ0eTogbnVsbCxcbiAgICByZXN1bHRzOiBudW1iZXIsXG4gICAgc2VjdXJpdHk6IG51bGwsXG4gICAgdW5zZWxlY3RhYmxlOiBudWxsXG4gIH1cbn0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3R5cGVzJylcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcbnZhciBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtID0gcmVxdWlyZSgnLi91dGlsL2Nhc2Utc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbnZhciBib29sZWFuID0gdHlwZXMuYm9vbGVhblxudmFyIG51bWJlciA9IHR5cGVzLm51bWJlclxudmFyIHNwYWNlU2VwYXJhdGVkID0gdHlwZXMuc3BhY2VTZXBhcmF0ZWRcbnZhciBjb21tYVNlcGFyYXRlZCA9IHR5cGVzLmNvbW1hU2VwYXJhdGVkXG52YXIgY29tbWFPclNwYWNlU2VwYXJhdGVkID0gdHlwZXMuY29tbWFPclNwYWNlU2VwYXJhdGVkXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICdzdmcnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgYWNjZW50SGVpZ2h0OiAnYWNjZW50LWhlaWdodCcsXG4gICAgYWxpZ25tZW50QmFzZWxpbmU6ICdhbGlnbm1lbnQtYmFzZWxpbmUnLFxuICAgIGFyYWJpY0Zvcm06ICdhcmFiaWMtZm9ybScsXG4gICAgYmFzZWxpbmVTaGlmdDogJ2Jhc2VsaW5lLXNoaWZ0JyxcbiAgICBjYXBIZWlnaHQ6ICdjYXAtaGVpZ2h0JyxcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgY2xpcFBhdGg6ICdjbGlwLXBhdGgnLFxuICAgIGNsaXBSdWxlOiAnY2xpcC1ydWxlJyxcbiAgICBjb2xvckludGVycG9sYXRpb246ICdjb2xvci1pbnRlcnBvbGF0aW9uJyxcbiAgICBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzOiAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJyxcbiAgICBjb2xvclByb2ZpbGU6ICdjb2xvci1wcm9maWxlJyxcbiAgICBjb2xvclJlbmRlcmluZzogJ2NvbG9yLXJlbmRlcmluZycsXG4gICAgY3Jvc3NPcmlnaW46ICdjcm9zc29yaWdpbicsXG4gICAgZGF0YVR5cGU6ICdkYXRhdHlwZScsXG4gICAgZG9taW5hbnRCYXNlbGluZTogJ2RvbWluYW50LWJhc2VsaW5lJyxcbiAgICBlbmFibGVCYWNrZ3JvdW5kOiAnZW5hYmxlLWJhY2tncm91bmQnLFxuICAgIGZpbGxPcGFjaXR5OiAnZmlsbC1vcGFjaXR5JyxcbiAgICBmaWxsUnVsZTogJ2ZpbGwtcnVsZScsXG4gICAgZmxvb2RDb2xvcjogJ2Zsb29kLWNvbG9yJyxcbiAgICBmbG9vZE9wYWNpdHk6ICdmbG9vZC1vcGFjaXR5JyxcbiAgICBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknLFxuICAgIGZvbnRTaXplOiAnZm9udC1zaXplJyxcbiAgICBmb250U2l6ZUFkanVzdDogJ2ZvbnQtc2l6ZS1hZGp1c3QnLFxuICAgIGZvbnRTdHJldGNoOiAnZm9udC1zdHJldGNoJyxcbiAgICBmb250U3R5bGU6ICdmb250LXN0eWxlJyxcbiAgICBmb250VmFyaWFudDogJ2ZvbnQtdmFyaWFudCcsXG4gICAgZm9udFdlaWdodDogJ2ZvbnQtd2VpZ2h0JyxcbiAgICBnbHlwaE5hbWU6ICdnbHlwaC1uYW1lJyxcbiAgICBnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbDogJ2dseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwnLFxuICAgIGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbDogJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJyxcbiAgICBocmVmTGFuZzogJ2hyZWZsYW5nJyxcbiAgICBob3JpekFkdlg6ICdob3Jpei1hZHYteCcsXG4gICAgaG9yaXpPcmlnaW5YOiAnaG9yaXotb3JpZ2luLXgnLFxuICAgIGhvcml6T3JpZ2luWTogJ2hvcml6LW9yaWdpbi15JyxcbiAgICBpbWFnZVJlbmRlcmluZzogJ2ltYWdlLXJlbmRlcmluZycsXG4gICAgbGV0dGVyU3BhY2luZzogJ2xldHRlci1zcGFjaW5nJyxcbiAgICBsaWdodGluZ0NvbG9yOiAnbGlnaHRpbmctY29sb3InLFxuICAgIG1hcmtlckVuZDogJ21hcmtlci1lbmQnLFxuICAgIG1hcmtlck1pZDogJ21hcmtlci1taWQnLFxuICAgIG1hcmtlclN0YXJ0OiAnbWFya2VyLXN0YXJ0JyxcbiAgICBuYXZEb3duOiAnbmF2LWRvd24nLFxuICAgIG5hdkRvd25MZWZ0OiAnbmF2LWRvd24tbGVmdCcsXG4gICAgbmF2RG93blJpZ2h0OiAnbmF2LWRvd24tcmlnaHQnLFxuICAgIG5hdkxlZnQ6ICduYXYtbGVmdCcsXG4gICAgbmF2TmV4dDogJ25hdi1uZXh0JyxcbiAgICBuYXZQcmV2OiAnbmF2LXByZXYnLFxuICAgIG5hdlJpZ2h0OiAnbmF2LXJpZ2h0JyxcbiAgICBuYXZVcDogJ25hdi11cCcsXG4gICAgbmF2VXBMZWZ0OiAnbmF2LXVwLWxlZnQnLFxuICAgIG5hdlVwUmlnaHQ6ICduYXYtdXAtcmlnaHQnLFxuICAgIG9uQWJvcnQ6ICdvbmFib3J0JyxcbiAgICBvbkFjdGl2YXRlOiAnb25hY3RpdmF0ZScsXG4gICAgb25BZnRlclByaW50OiAnb25hZnRlcnByaW50JyxcbiAgICBvbkJlZm9yZVByaW50OiAnb25iZWZvcmVwcmludCcsXG4gICAgb25CZWdpbjogJ29uYmVnaW4nLFxuICAgIG9uQ2FuY2VsOiAnb25jYW5jZWwnLFxuICAgIG9uQ2FuUGxheTogJ29uY2FucGxheScsXG4gICAgb25DYW5QbGF5VGhyb3VnaDogJ29uY2FucGxheXRocm91Z2gnLFxuICAgIG9uQ2hhbmdlOiAnb25jaGFuZ2UnLFxuICAgIG9uQ2xpY2s6ICdvbmNsaWNrJyxcbiAgICBvbkNsb3NlOiAnb25jbG9zZScsXG4gICAgb25Db3B5OiAnb25jb3B5JyxcbiAgICBvbkN1ZUNoYW5nZTogJ29uY3VlY2hhbmdlJyxcbiAgICBvbkN1dDogJ29uY3V0JyxcbiAgICBvbkRibENsaWNrOiAnb25kYmxjbGljaycsXG4gICAgb25EcmFnOiAnb25kcmFnJyxcbiAgICBvbkRyYWdFbmQ6ICdvbmRyYWdlbmQnLFxuICAgIG9uRHJhZ0VudGVyOiAnb25kcmFnZW50ZXInLFxuICAgIG9uRHJhZ0V4aXQ6ICdvbmRyYWdleGl0JyxcbiAgICBvbkRyYWdMZWF2ZTogJ29uZHJhZ2xlYXZlJyxcbiAgICBvbkRyYWdPdmVyOiAnb25kcmFnb3ZlcicsXG4gICAgb25EcmFnU3RhcnQ6ICdvbmRyYWdzdGFydCcsXG4gICAgb25Ecm9wOiAnb25kcm9wJyxcbiAgICBvbkR1cmF0aW9uQ2hhbmdlOiAnb25kdXJhdGlvbmNoYW5nZScsXG4gICAgb25FbXB0aWVkOiAnb25lbXB0aWVkJyxcbiAgICBvbkVuZDogJ29uZW5kJyxcbiAgICBvbkVuZGVkOiAnb25lbmRlZCcsXG4gICAgb25FcnJvcjogJ29uZXJyb3InLFxuICAgIG9uRm9jdXM6ICdvbmZvY3VzJyxcbiAgICBvbkZvY3VzSW46ICdvbmZvY3VzaW4nLFxuICAgIG9uRm9jdXNPdXQ6ICdvbmZvY3Vzb3V0JyxcbiAgICBvbkhhc2hDaGFuZ2U6ICdvbmhhc2hjaGFuZ2UnLFxuICAgIG9uSW5wdXQ6ICdvbmlucHV0JyxcbiAgICBvbkludmFsaWQ6ICdvbmludmFsaWQnLFxuICAgIG9uS2V5RG93bjogJ29ua2V5ZG93bicsXG4gICAgb25LZXlQcmVzczogJ29ua2V5cHJlc3MnLFxuICAgIG9uS2V5VXA6ICdvbmtleXVwJyxcbiAgICBvbkxvYWQ6ICdvbmxvYWQnLFxuICAgIG9uTG9hZGVkRGF0YTogJ29ubG9hZGVkZGF0YScsXG4gICAgb25Mb2FkZWRNZXRhZGF0YTogJ29ubG9hZGVkbWV0YWRhdGEnLFxuICAgIG9uTG9hZFN0YXJ0OiAnb25sb2Fkc3RhcnQnLFxuICAgIG9uTWVzc2FnZTogJ29ubWVzc2FnZScsXG4gICAgb25Nb3VzZURvd246ICdvbm1vdXNlZG93bicsXG4gICAgb25Nb3VzZUVudGVyOiAnb25tb3VzZWVudGVyJyxcbiAgICBvbk1vdXNlTGVhdmU6ICdvbm1vdXNlbGVhdmUnLFxuICAgIG9uTW91c2VNb3ZlOiAnb25tb3VzZW1vdmUnLFxuICAgIG9uTW91c2VPdXQ6ICdvbm1vdXNlb3V0JyxcbiAgICBvbk1vdXNlT3ZlcjogJ29ubW91c2VvdmVyJyxcbiAgICBvbk1vdXNlVXA6ICdvbm1vdXNldXAnLFxuICAgIG9uTW91c2VXaGVlbDogJ29ubW91c2V3aGVlbCcsXG4gICAgb25PZmZsaW5lOiAnb25vZmZsaW5lJyxcbiAgICBvbk9ubGluZTogJ29ub25saW5lJyxcbiAgICBvblBhZ2VIaWRlOiAnb25wYWdlaGlkZScsXG4gICAgb25QYWdlU2hvdzogJ29ucGFnZXNob3cnLFxuICAgIG9uUGFzdGU6ICdvbnBhc3RlJyxcbiAgICBvblBhdXNlOiAnb25wYXVzZScsXG4gICAgb25QbGF5OiAnb25wbGF5JyxcbiAgICBvblBsYXlpbmc6ICdvbnBsYXlpbmcnLFxuICAgIG9uUG9wU3RhdGU6ICdvbnBvcHN0YXRlJyxcbiAgICBvblByb2dyZXNzOiAnb25wcm9ncmVzcycsXG4gICAgb25SYXRlQ2hhbmdlOiAnb25yYXRlY2hhbmdlJyxcbiAgICBvblJlcGVhdDogJ29ucmVwZWF0JyxcbiAgICBvblJlc2V0OiAnb25yZXNldCcsXG4gICAgb25SZXNpemU6ICdvbnJlc2l6ZScsXG4gICAgb25TY3JvbGw6ICdvbnNjcm9sbCcsXG4gICAgb25TZWVrZWQ6ICdvbnNlZWtlZCcsXG4gICAgb25TZWVraW5nOiAnb25zZWVraW5nJyxcbiAgICBvblNlbGVjdDogJ29uc2VsZWN0JyxcbiAgICBvblNob3c6ICdvbnNob3cnLFxuICAgIG9uU3RhbGxlZDogJ29uc3RhbGxlZCcsXG4gICAgb25TdG9yYWdlOiAnb25zdG9yYWdlJyxcbiAgICBvblN1Ym1pdDogJ29uc3VibWl0JyxcbiAgICBvblN1c3BlbmQ6ICdvbnN1c3BlbmQnLFxuICAgIG9uVGltZVVwZGF0ZTogJ29udGltZXVwZGF0ZScsXG4gICAgb25Ub2dnbGU6ICdvbnRvZ2dsZScsXG4gICAgb25VbmxvYWQ6ICdvbnVubG9hZCcsXG4gICAgb25Wb2x1bWVDaGFuZ2U6ICdvbnZvbHVtZWNoYW5nZScsXG4gICAgb25XYWl0aW5nOiAnb253YWl0aW5nJyxcbiAgICBvblpvb206ICdvbnpvb20nLFxuICAgIG92ZXJsaW5lUG9zaXRpb246ICdvdmVybGluZS1wb3NpdGlvbicsXG4gICAgb3ZlcmxpbmVUaGlja25lc3M6ICdvdmVybGluZS10aGlja25lc3MnLFxuICAgIHBhaW50T3JkZXI6ICdwYWludC1vcmRlcicsXG4gICAgcGFub3NlMTogJ3Bhbm9zZS0xJyxcbiAgICBwb2ludGVyRXZlbnRzOiAncG9pbnRlci1ldmVudHMnLFxuICAgIHJlZmVycmVyUG9saWN5OiAncmVmZXJyZXJwb2xpY3knLFxuICAgIHJlbmRlcmluZ0ludGVudDogJ3JlbmRlcmluZy1pbnRlbnQnLFxuICAgIHNoYXBlUmVuZGVyaW5nOiAnc2hhcGUtcmVuZGVyaW5nJyxcbiAgICBzdG9wQ29sb3I6ICdzdG9wLWNvbG9yJyxcbiAgICBzdG9wT3BhY2l0eTogJ3N0b3Atb3BhY2l0eScsXG4gICAgc3RyaWtldGhyb3VnaFBvc2l0aW9uOiAnc3RyaWtldGhyb3VnaC1wb3NpdGlvbicsXG4gICAgc3RyaWtldGhyb3VnaFRoaWNrbmVzczogJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJyxcbiAgICBzdHJva2VEYXNoQXJyYXk6ICdzdHJva2UtZGFzaGFycmF5JyxcbiAgICBzdHJva2VEYXNoT2Zmc2V0OiAnc3Ryb2tlLWRhc2hvZmZzZXQnLFxuICAgIHN0cm9rZUxpbmVDYXA6ICdzdHJva2UtbGluZWNhcCcsXG4gICAgc3Ryb2tlTGluZUpvaW46ICdzdHJva2UtbGluZWpvaW4nLFxuICAgIHN0cm9rZU1pdGVyTGltaXQ6ICdzdHJva2UtbWl0ZXJsaW1pdCcsXG4gICAgc3Ryb2tlT3BhY2l0eTogJ3N0cm9rZS1vcGFjaXR5JyxcbiAgICBzdHJva2VXaWR0aDogJ3N0cm9rZS13aWR0aCcsXG4gICAgdGFiSW5kZXg6ICd0YWJpbmRleCcsXG4gICAgdGV4dEFuY2hvcjogJ3RleHQtYW5jaG9yJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ3RleHQtZGVjb3JhdGlvbicsXG4gICAgdGV4dFJlbmRlcmluZzogJ3RleHQtcmVuZGVyaW5nJyxcbiAgICB0eXBlT2Y6ICd0eXBlb2YnLFxuICAgIHVuZGVybGluZVBvc2l0aW9uOiAndW5kZXJsaW5lLXBvc2l0aW9uJyxcbiAgICB1bmRlcmxpbmVUaGlja25lc3M6ICd1bmRlcmxpbmUtdGhpY2tuZXNzJyxcbiAgICB1bmljb2RlQmlkaTogJ3VuaWNvZGUtYmlkaScsXG4gICAgdW5pY29kZVJhbmdlOiAndW5pY29kZS1yYW5nZScsXG4gICAgdW5pdHNQZXJFbTogJ3VuaXRzLXBlci1lbScsXG4gICAgdkFscGhhYmV0aWM6ICd2LWFscGhhYmV0aWMnLFxuICAgIHZIYW5naW5nOiAndi1oYW5naW5nJyxcbiAgICB2SWRlb2dyYXBoaWM6ICd2LWlkZW9ncmFwaGljJyxcbiAgICB2TWF0aGVtYXRpY2FsOiAndi1tYXRoZW1hdGljYWwnLFxuICAgIHZlY3RvckVmZmVjdDogJ3ZlY3Rvci1lZmZlY3QnLFxuICAgIHZlcnRBZHZZOiAndmVydC1hZHYteScsXG4gICAgdmVydE9yaWdpblg6ICd2ZXJ0LW9yaWdpbi14JyxcbiAgICB2ZXJ0T3JpZ2luWTogJ3ZlcnQtb3JpZ2luLXknLFxuICAgIHdvcmRTcGFjaW5nOiAnd29yZC1zcGFjaW5nJyxcbiAgICB3cml0aW5nTW9kZTogJ3dyaXRpbmctbW9kZScsXG4gICAgeEhlaWdodDogJ3gtaGVpZ2h0JyxcbiAgICAvLyBUaGVzZSB3ZXJlIGNhbWVsY2FzZWQgaW4gVGlueS4gTm93IGxvd2VyY2FzZWQgaW4gU1ZHIDJcbiAgICBwbGF5YmFja09yZGVyOiAncGxheWJhY2tvcmRlcicsXG4gICAgdGltZWxpbmVCZWdpbjogJ3RpbWVsaW5lYmVnaW4nXG4gIH0sXG4gIHRyYW5zZm9ybTogY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIGFib3V0OiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgYWNjZW50SGVpZ2h0OiBudW1iZXIsXG4gICAgYWNjdW11bGF0ZTogbnVsbCxcbiAgICBhZGRpdGl2ZTogbnVsbCxcbiAgICBhbGlnbm1lbnRCYXNlbGluZTogbnVsbCxcbiAgICBhbHBoYWJldGljOiBudW1iZXIsXG4gICAgYW1wbGl0dWRlOiBudW1iZXIsXG4gICAgYXJhYmljRm9ybTogbnVsbCxcbiAgICBhc2NlbnQ6IG51bWJlcixcbiAgICBhdHRyaWJ1dGVOYW1lOiBudWxsLFxuICAgIGF0dHJpYnV0ZVR5cGU6IG51bGwsXG4gICAgYXppbXV0aDogbnVtYmVyLFxuICAgIGJhbmR3aWR0aDogbnVsbCxcbiAgICBiYXNlbGluZVNoaWZ0OiBudWxsLFxuICAgIGJhc2VGcmVxdWVuY3k6IG51bGwsXG4gICAgYmFzZVByb2ZpbGU6IG51bGwsXG4gICAgYmJveDogbnVsbCxcbiAgICBiZWdpbjogbnVsbCxcbiAgICBiaWFzOiBudW1iZXIsXG4gICAgYnk6IG51bGwsXG4gICAgY2FsY01vZGU6IG51bGwsXG4gICAgY2FwSGVpZ2h0OiBudW1iZXIsXG4gICAgY2xhc3NOYW1lOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBjbGlwOiBudWxsLFxuICAgIGNsaXBQYXRoOiBudWxsLFxuICAgIGNsaXBQYXRoVW5pdHM6IG51bGwsXG4gICAgY2xpcFJ1bGU6IG51bGwsXG4gICAgY29sb3I6IG51bGwsXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uOiBudWxsLFxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM6IG51bGwsXG4gICAgY29sb3JQcm9maWxlOiBudWxsLFxuICAgIGNvbG9yUmVuZGVyaW5nOiBudWxsLFxuICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgY29udGVudFNjcmlwdFR5cGU6IG51bGwsXG4gICAgY29udGVudFN0eWxlVHlwZTogbnVsbCxcbiAgICBjcm9zc09yaWdpbjogbnVsbCxcbiAgICBjdXJzb3I6IG51bGwsXG4gICAgY3g6IG51bGwsXG4gICAgY3k6IG51bGwsXG4gICAgZDogbnVsbCxcbiAgICBkYXRhVHlwZTogbnVsbCxcbiAgICBkZWZhdWx0QWN0aW9uOiBudWxsLFxuICAgIGRlc2NlbnQ6IG51bWJlcixcbiAgICBkaWZmdXNlQ29uc3RhbnQ6IG51bWJlcixcbiAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgZGlzcGxheTogbnVsbCxcbiAgICBkdXI6IG51bGwsXG4gICAgZGl2aXNvcjogbnVtYmVyLFxuICAgIGRvbWluYW50QmFzZWxpbmU6IG51bGwsXG4gICAgZG93bmxvYWQ6IGJvb2xlYW4sXG4gICAgZHg6IG51bGwsXG4gICAgZHk6IG51bGwsXG4gICAgZWRnZU1vZGU6IG51bGwsXG4gICAgZWRpdGFibGU6IG51bGwsXG4gICAgZWxldmF0aW9uOiBudW1iZXIsXG4gICAgZW5hYmxlQmFja2dyb3VuZDogbnVsbCxcbiAgICBlbmQ6IG51bGwsXG4gICAgZXZlbnQ6IG51bGwsXG4gICAgZXhwb25lbnQ6IG51bWJlcixcbiAgICBleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkOiBudWxsLFxuICAgIGZpbGw6IG51bGwsXG4gICAgZmlsbE9wYWNpdHk6IG51bWJlcixcbiAgICBmaWxsUnVsZTogbnVsbCxcbiAgICBmaWx0ZXI6IG51bGwsXG4gICAgZmlsdGVyUmVzOiBudWxsLFxuICAgIGZpbHRlclVuaXRzOiBudWxsLFxuICAgIGZsb29kQ29sb3I6IG51bGwsXG4gICAgZmxvb2RPcGFjaXR5OiBudWxsLFxuICAgIGZvY3VzYWJsZTogbnVsbCxcbiAgICBmb2N1c0hpZ2hsaWdodDogbnVsbCxcbiAgICBmb250RmFtaWx5OiBudWxsLFxuICAgIGZvbnRTaXplOiBudWxsLFxuICAgIGZvbnRTaXplQWRqdXN0OiBudWxsLFxuICAgIGZvbnRTdHJldGNoOiBudWxsLFxuICAgIGZvbnRTdHlsZTogbnVsbCxcbiAgICBmb250VmFyaWFudDogbnVsbCxcbiAgICBmb250V2VpZ2h0OiBudWxsLFxuICAgIGZvcm1hdDogbnVsbCxcbiAgICBmcjogbnVsbCxcbiAgICBmcm9tOiBudWxsLFxuICAgIGZ4OiBudWxsLFxuICAgIGZ5OiBudWxsLFxuICAgIGcxOiBjb21tYVNlcGFyYXRlZCxcbiAgICBnMjogY29tbWFTZXBhcmF0ZWQsXG4gICAgZ2x5cGhOYW1lOiBjb21tYVNlcGFyYXRlZCxcbiAgICBnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbDogbnVsbCxcbiAgICBnbHlwaE9yaWVudGF0aW9uVmVydGljYWw6IG51bGwsXG4gICAgZ2x5cGhSZWY6IG51bGwsXG4gICAgZ3JhZGllbnRUcmFuc2Zvcm06IG51bGwsXG4gICAgZ3JhZGllbnRVbml0czogbnVsbCxcbiAgICBoYW5kbGVyOiBudWxsLFxuICAgIGhhbmdpbmc6IG51bWJlcixcbiAgICBoYXRjaENvbnRlbnRVbml0czogbnVsbCxcbiAgICBoYXRjaFVuaXRzOiBudWxsLFxuICAgIGhlaWdodDogbnVsbCxcbiAgICBocmVmOiBudWxsLFxuICAgIGhyZWZMYW5nOiBudWxsLFxuICAgIGhvcml6QWR2WDogbnVtYmVyLFxuICAgIGhvcml6T3JpZ2luWDogbnVtYmVyLFxuICAgIGhvcml6T3JpZ2luWTogbnVtYmVyLFxuICAgIGlkOiBudWxsLFxuICAgIGlkZW9ncmFwaGljOiBudW1iZXIsXG4gICAgaW1hZ2VSZW5kZXJpbmc6IG51bGwsXG4gICAgaW5pdGlhbFZpc2liaWxpdHk6IG51bGwsXG4gICAgaW46IG51bGwsXG4gICAgaW4yOiBudWxsLFxuICAgIGludGVyY2VwdDogbnVtYmVyLFxuICAgIGs6IG51bWJlcixcbiAgICBrMTogbnVtYmVyLFxuICAgIGsyOiBudW1iZXIsXG4gICAgazM6IG51bWJlcixcbiAgICBrNDogbnVtYmVyLFxuICAgIGtlcm5lbE1hdHJpeDogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIGtlcm5lbFVuaXRMZW5ndGg6IG51bGwsXG4gICAga2V5UG9pbnRzOiBudWxsLCAvLyBTRU1JX0NPTE9OX1NFUEFSQVRFRFxuICAgIGtleVNwbGluZXM6IG51bGwsIC8vIFNFTUlfQ09MT05fU0VQQVJBVEVEXG4gICAga2V5VGltZXM6IG51bGwsIC8vIFNFTUlfQ09MT05fU0VQQVJBVEVEXG4gICAga2VybmluZzogbnVsbCxcbiAgICBsYW5nOiBudWxsLFxuICAgIGxlbmd0aEFkanVzdDogbnVsbCxcbiAgICBsZXR0ZXJTcGFjaW5nOiBudWxsLFxuICAgIGxpZ2h0aW5nQ29sb3I6IG51bGwsXG4gICAgbGltaXRpbmdDb25lQW5nbGU6IG51bWJlcixcbiAgICBsb2NhbDogbnVsbCxcbiAgICBtYXJrZXJFbmQ6IG51bGwsXG4gICAgbWFya2VyTWlkOiBudWxsLFxuICAgIG1hcmtlclN0YXJ0OiBudWxsLFxuICAgIG1hcmtlckhlaWdodDogbnVsbCxcbiAgICBtYXJrZXJVbml0czogbnVsbCxcbiAgICBtYXJrZXJXaWR0aDogbnVsbCxcbiAgICBtYXNrOiBudWxsLFxuICAgIG1hc2tDb250ZW50VW5pdHM6IG51bGwsXG4gICAgbWFza1VuaXRzOiBudWxsLFxuICAgIG1hdGhlbWF0aWNhbDogbnVsbCxcbiAgICBtYXg6IG51bGwsXG4gICAgbWVkaWE6IG51bGwsXG4gICAgbWVkaWFDaGFyYWN0ZXJFbmNvZGluZzogbnVsbCxcbiAgICBtZWRpYUNvbnRlbnRFbmNvZGluZ3M6IG51bGwsXG4gICAgbWVkaWFTaXplOiBudW1iZXIsXG4gICAgbWVkaWFUaW1lOiBudWxsLFxuICAgIG1ldGhvZDogbnVsbCxcbiAgICBtaW46IG51bGwsXG4gICAgbW9kZTogbnVsbCxcbiAgICBuYW1lOiBudWxsLFxuICAgIG5hdkRvd246IG51bGwsXG4gICAgbmF2RG93bkxlZnQ6IG51bGwsXG4gICAgbmF2RG93blJpZ2h0OiBudWxsLFxuICAgIG5hdkxlZnQ6IG51bGwsXG4gICAgbmF2TmV4dDogbnVsbCxcbiAgICBuYXZQcmV2OiBudWxsLFxuICAgIG5hdlJpZ2h0OiBudWxsLFxuICAgIG5hdlVwOiBudWxsLFxuICAgIG5hdlVwTGVmdDogbnVsbCxcbiAgICBuYXZVcFJpZ2h0OiBudWxsLFxuICAgIG51bU9jdGF2ZXM6IG51bGwsXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG4gICAgb2Zmc2V0OiBudWxsLFxuICAgIG9uQWJvcnQ6IG51bGwsXG4gICAgb25BY3RpdmF0ZTogbnVsbCxcbiAgICBvbkFmdGVyUHJpbnQ6IG51bGwsXG4gICAgb25CZWZvcmVQcmludDogbnVsbCxcbiAgICBvbkJlZ2luOiBudWxsLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuICAgIG9uQ2FuUGxheTogbnVsbCxcbiAgICBvbkNhblBsYXlUaHJvdWdoOiBudWxsLFxuICAgIG9uQ2hhbmdlOiBudWxsLFxuICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgb25DbG9zZTogbnVsbCxcbiAgICBvbkNvcHk6IG51bGwsXG4gICAgb25DdWVDaGFuZ2U6IG51bGwsXG4gICAgb25DdXQ6IG51bGwsXG4gICAgb25EYmxDbGljazogbnVsbCxcbiAgICBvbkRyYWc6IG51bGwsXG4gICAgb25EcmFnRW5kOiBudWxsLFxuICAgIG9uRHJhZ0VudGVyOiBudWxsLFxuICAgIG9uRHJhZ0V4aXQ6IG51bGwsXG4gICAgb25EcmFnTGVhdmU6IG51bGwsXG4gICAgb25EcmFnT3ZlcjogbnVsbCxcbiAgICBvbkRyYWdTdGFydDogbnVsbCxcbiAgICBvbkRyb3A6IG51bGwsXG4gICAgb25EdXJhdGlvbkNoYW5nZTogbnVsbCxcbiAgICBvbkVtcHRpZWQ6IG51bGwsXG4gICAgb25FbmQ6IG51bGwsXG4gICAgb25FbmRlZDogbnVsbCxcbiAgICBvbkVycm9yOiBudWxsLFxuICAgIG9uRm9jdXM6IG51bGwsXG4gICAgb25Gb2N1c0luOiBudWxsLFxuICAgIG9uRm9jdXNPdXQ6IG51bGwsXG4gICAgb25IYXNoQ2hhbmdlOiBudWxsLFxuICAgIG9uSW5wdXQ6IG51bGwsXG4gICAgb25JbnZhbGlkOiBudWxsLFxuICAgIG9uS2V5RG93bjogbnVsbCxcbiAgICBvbktleVByZXNzOiBudWxsLFxuICAgIG9uS2V5VXA6IG51bGwsXG4gICAgb25Mb2FkOiBudWxsLFxuICAgIG9uTG9hZGVkRGF0YTogbnVsbCxcbiAgICBvbkxvYWRlZE1ldGFkYXRhOiBudWxsLFxuICAgIG9uTG9hZFN0YXJ0OiBudWxsLFxuICAgIG9uTWVzc2FnZTogbnVsbCxcbiAgICBvbk1vdXNlRG93bjogbnVsbCxcbiAgICBvbk1vdXNlRW50ZXI6IG51bGwsXG4gICAgb25Nb3VzZUxlYXZlOiBudWxsLFxuICAgIG9uTW91c2VNb3ZlOiBudWxsLFxuICAgIG9uTW91c2VPdXQ6IG51bGwsXG4gICAgb25Nb3VzZU92ZXI6IG51bGwsXG4gICAgb25Nb3VzZVVwOiBudWxsLFxuICAgIG9uTW91c2VXaGVlbDogbnVsbCxcbiAgICBvbk9mZmxpbmU6IG51bGwsXG4gICAgb25PbmxpbmU6IG51bGwsXG4gICAgb25QYWdlSGlkZTogbnVsbCxcbiAgICBvblBhZ2VTaG93OiBudWxsLFxuICAgIG9uUGFzdGU6IG51bGwsXG4gICAgb25QYXVzZTogbnVsbCxcbiAgICBvblBsYXk6IG51bGwsXG4gICAgb25QbGF5aW5nOiBudWxsLFxuICAgIG9uUG9wU3RhdGU6IG51bGwsXG4gICAgb25Qcm9ncmVzczogbnVsbCxcbiAgICBvblJhdGVDaGFuZ2U6IG51bGwsXG4gICAgb25SZXBlYXQ6IG51bGwsXG4gICAgb25SZXNldDogbnVsbCxcbiAgICBvblJlc2l6ZTogbnVsbCxcbiAgICBvblNjcm9sbDogbnVsbCxcbiAgICBvblNlZWtlZDogbnVsbCxcbiAgICBvblNlZWtpbmc6IG51bGwsXG4gICAgb25TZWxlY3Q6IG51bGwsXG4gICAgb25TaG93OiBudWxsLFxuICAgIG9uU3RhbGxlZDogbnVsbCxcbiAgICBvblN0b3JhZ2U6IG51bGwsXG4gICAgb25TdWJtaXQ6IG51bGwsXG4gICAgb25TdXNwZW5kOiBudWxsLFxuICAgIG9uVGltZVVwZGF0ZTogbnVsbCxcbiAgICBvblRvZ2dsZTogbnVsbCxcbiAgICBvblVubG9hZDogbnVsbCxcbiAgICBvblZvbHVtZUNoYW5nZTogbnVsbCxcbiAgICBvbldhaXRpbmc6IG51bGwsXG4gICAgb25ab29tOiBudWxsLFxuICAgIG9wYWNpdHk6IG51bGwsXG4gICAgb3BlcmF0b3I6IG51bGwsXG4gICAgb3JkZXI6IG51bGwsXG4gICAgb3JpZW50OiBudWxsLFxuICAgIG9yaWVudGF0aW9uOiBudWxsLFxuICAgIG9yaWdpbjogbnVsbCxcbiAgICBvdmVyZmxvdzogbnVsbCxcbiAgICBvdmVybGF5OiBudWxsLFxuICAgIG92ZXJsaW5lUG9zaXRpb246IG51bWJlcixcbiAgICBvdmVybGluZVRoaWNrbmVzczogbnVtYmVyLFxuICAgIHBhaW50T3JkZXI6IG51bGwsXG4gICAgcGFub3NlMTogbnVsbCxcbiAgICBwYXRoOiBudWxsLFxuICAgIHBhdGhMZW5ndGg6IG51bWJlcixcbiAgICBwYXR0ZXJuQ29udGVudFVuaXRzOiBudWxsLFxuICAgIHBhdHRlcm5UcmFuc2Zvcm06IG51bGwsXG4gICAgcGF0dGVyblVuaXRzOiBudWxsLFxuICAgIHBoYXNlOiBudWxsLFxuICAgIHBpbmc6IHNwYWNlU2VwYXJhdGVkLFxuICAgIHBpdGNoOiBudWxsLFxuICAgIHBsYXliYWNrT3JkZXI6IG51bGwsXG4gICAgcG9pbnRlckV2ZW50czogbnVsbCxcbiAgICBwb2ludHM6IG51bGwsXG4gICAgcG9pbnRzQXRYOiBudW1iZXIsXG4gICAgcG9pbnRzQXRZOiBudW1iZXIsXG4gICAgcG9pbnRzQXRaOiBudW1iZXIsXG4gICAgcHJlc2VydmVBbHBoYTogbnVsbCxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBudWxsLFxuICAgIHByaW1pdGl2ZVVuaXRzOiBudWxsLFxuICAgIHByb3BhZ2F0ZTogbnVsbCxcbiAgICBwcm9wZXJ0eTogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHI6IG51bGwsXG4gICAgcmFkaXVzOiBudWxsLFxuICAgIHJlZmVycmVyUG9saWN5OiBudWxsLFxuICAgIHJlZlg6IG51bGwsXG4gICAgcmVmWTogbnVsbCxcbiAgICByZWw6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZXY6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZW5kZXJpbmdJbnRlbnQ6IG51bGwsXG4gICAgcmVwZWF0Q291bnQ6IG51bGwsXG4gICAgcmVwZWF0RHVyOiBudWxsLFxuICAgIHJlcXVpcmVkRXh0ZW5zaW9uczogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHJlcXVpcmVkRmVhdHVyZXM6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZXF1aXJlZEZvbnRzOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVxdWlyZWRGb3JtYXRzOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVzb3VyY2U6IG51bGwsXG4gICAgcmVzdGFydDogbnVsbCxcbiAgICByZXN1bHQ6IG51bGwsXG4gICAgcm90YXRlOiBudWxsLFxuICAgIHJ4OiBudWxsLFxuICAgIHJ5OiBudWxsLFxuICAgIHNjYWxlOiBudWxsLFxuICAgIHNlZWQ6IG51bGwsXG4gICAgc2hhcGVSZW5kZXJpbmc6IG51bGwsXG4gICAgc2lkZTogbnVsbCxcbiAgICBzbG9wZTogbnVsbCxcbiAgICBzbmFwc2hvdFRpbWU6IG51bGwsXG4gICAgc3BlY3VsYXJDb25zdGFudDogbnVtYmVyLFxuICAgIHNwZWN1bGFyRXhwb25lbnQ6IG51bWJlcixcbiAgICBzcHJlYWRNZXRob2Q6IG51bGwsXG4gICAgc3BhY2luZzogbnVsbCxcbiAgICBzdGFydE9mZnNldDogbnVsbCxcbiAgICBzdGREZXZpYXRpb246IG51bGwsXG4gICAgc3RlbWg6IG51bGwsXG4gICAgc3RlbXY6IG51bGwsXG4gICAgc3RpdGNoVGlsZXM6IG51bGwsXG4gICAgc3RvcENvbG9yOiBudWxsLFxuICAgIHN0b3BPcGFjaXR5OiBudWxsLFxuICAgIHN0cmlrZXRocm91Z2hQb3NpdGlvbjogbnVtYmVyLFxuICAgIHN0cmlrZXRocm91Z2hUaGlja25lc3M6IG51bWJlcixcbiAgICBzdHJpbmc6IG51bGwsXG4gICAgc3Ryb2tlOiBudWxsLFxuICAgIHN0cm9rZURhc2hBcnJheTogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHN0cm9rZURhc2hPZmZzZXQ6IG51bGwsXG4gICAgc3Ryb2tlTGluZUNhcDogbnVsbCxcbiAgICBzdHJva2VMaW5lSm9pbjogbnVsbCxcbiAgICBzdHJva2VNaXRlckxpbWl0OiBudW1iZXIsXG4gICAgc3Ryb2tlT3BhY2l0eTogbnVtYmVyLFxuICAgIHN0cm9rZVdpZHRoOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIHN1cmZhY2VTY2FsZTogbnVtYmVyLFxuICAgIHN5bmNCZWhhdmlvcjogbnVsbCxcbiAgICBzeW5jQmVoYXZpb3JEZWZhdWx0OiBudWxsLFxuICAgIHN5bmNNYXN0ZXI6IG51bGwsXG4gICAgc3luY1RvbGVyYW5jZTogbnVsbCxcbiAgICBzeW5jVG9sZXJhbmNlRGVmYXVsdDogbnVsbCxcbiAgICBzeXN0ZW1MYW5ndWFnZTogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHRhYkluZGV4OiBudW1iZXIsXG4gICAgdGFibGVWYWx1ZXM6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIHRhcmdldFg6IG51bWJlcixcbiAgICB0YXJnZXRZOiBudW1iZXIsXG4gICAgdGV4dEFuY2hvcjogbnVsbCxcbiAgICB0ZXh0RGVjb3JhdGlvbjogbnVsbCxcbiAgICB0ZXh0UmVuZGVyaW5nOiBudWxsLFxuICAgIHRleHRMZW5ndGg6IG51bGwsXG4gICAgdGltZWxpbmVCZWdpbjogbnVsbCxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB0cmFuc2Zvcm1CZWhhdmlvcjogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHR5cGVPZjogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHRvOiBudWxsLFxuICAgIHRyYW5zZm9ybTogbnVsbCxcbiAgICB1MTogbnVsbCxcbiAgICB1MjogbnVsbCxcbiAgICB1bmRlcmxpbmVQb3NpdGlvbjogbnVtYmVyLFxuICAgIHVuZGVybGluZVRoaWNrbmVzczogbnVtYmVyLFxuICAgIHVuaWNvZGU6IG51bGwsXG4gICAgdW5pY29kZUJpZGk6IG51bGwsXG4gICAgdW5pY29kZVJhbmdlOiBudWxsLFxuICAgIHVuaXRzUGVyRW06IG51bWJlcixcbiAgICB2YWx1ZXM6IG51bGwsXG4gICAgdkFscGhhYmV0aWM6IG51bWJlcixcbiAgICB2TWF0aGVtYXRpY2FsOiBudW1iZXIsXG4gICAgdmVjdG9yRWZmZWN0OiBudWxsLFxuICAgIHZIYW5naW5nOiBudW1iZXIsXG4gICAgdklkZW9ncmFwaGljOiBudW1iZXIsXG4gICAgdmVyc2lvbjogbnVsbCxcbiAgICB2ZXJ0QWR2WTogbnVtYmVyLFxuICAgIHZlcnRPcmlnaW5YOiBudW1iZXIsXG4gICAgdmVydE9yaWdpblk6IG51bWJlcixcbiAgICB2aWV3Qm94OiBudWxsLFxuICAgIHZpZXdUYXJnZXQ6IG51bGwsXG4gICAgdmlzaWJpbGl0eTogbnVsbCxcbiAgICB3aWR0aDogbnVsbCxcbiAgICB3aWR0aHM6IG51bGwsXG4gICAgd29yZFNwYWNpbmc6IG51bGwsXG4gICAgd3JpdGluZ01vZGU6IG51bGwsXG4gICAgeDogbnVsbCxcbiAgICB4MTogbnVsbCxcbiAgICB4MjogbnVsbCxcbiAgICB4Q2hhbm5lbFNlbGVjdG9yOiBudWxsLFxuICAgIHhIZWlnaHQ6IG51bWJlcixcbiAgICB5OiBudWxsLFxuICAgIHkxOiBudWxsLFxuICAgIHkyOiBudWxsLFxuICAgIHlDaGFubmVsU2VsZWN0b3I6IG51bGwsXG4gICAgejogbnVsbCxcbiAgICB6b29tQW5kUGFuOiBudWxsXG4gIH1cbn0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL2Nhc2Utc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbm1vZHVsZS5leHBvcnRzID0gY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtXG5cbmZ1bmN0aW9uIGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybShhdHRyaWJ1dGVzLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybShhdHRyaWJ1dGVzLCBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybVxuXG5mdW5jdGlvbiBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtKGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSkge1xuICByZXR1cm4gYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMgPyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gOiBhdHRyaWJ1dGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vLi4vbm9ybWFsaXplJylcbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuL3NjaGVtYScpXG52YXIgRGVmaW5lZEluZm8gPSByZXF1aXJlKCcuL2RlZmluZWQtaW5mbycpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbmZ1bmN0aW9uIGNyZWF0ZShkZWZpbml0aW9uKSB7XG4gIHZhciBzcGFjZSA9IGRlZmluaXRpb24uc3BhY2VcbiAgdmFyIG11c3RVc2VQcm9wZXJ0eSA9IGRlZmluaXRpb24ubXVzdFVzZVByb3BlcnR5IHx8IFtdXG4gIHZhciBhdHRyaWJ1dGVzID0gZGVmaW5pdGlvbi5hdHRyaWJ1dGVzIHx8IHt9XG4gIHZhciBwcm9wcyA9IGRlZmluaXRpb24ucHJvcGVydGllc1xuICB2YXIgdHJhbnNmb3JtID0gZGVmaW5pdGlvbi50cmFuc2Zvcm1cbiAgdmFyIHByb3BlcnR5ID0ge31cbiAgdmFyIG5vcm1hbCA9IHt9XG4gIHZhciBwcm9wXG4gIHZhciBpbmZvXG5cbiAgZm9yIChwcm9wIGluIHByb3BzKSB7XG4gICAgaW5mbyA9IG5ldyBEZWZpbmVkSW5mbyhcbiAgICAgIHByb3AsXG4gICAgICB0cmFuc2Zvcm0oYXR0cmlidXRlcywgcHJvcCksXG4gICAgICBwcm9wc1twcm9wXSxcbiAgICAgIHNwYWNlXG4gICAgKVxuXG4gICAgaWYgKG11c3RVc2VQcm9wZXJ0eS5pbmRleE9mKHByb3ApICE9PSAtMSkge1xuICAgICAgaW5mby5tdXN0VXNlUHJvcGVydHkgPSB0cnVlXG4gICAgfVxuXG4gICAgcHJvcGVydHlbcHJvcF0gPSBpbmZvXG5cbiAgICBub3JtYWxbbm9ybWFsaXplKHByb3ApXSA9IHByb3BcbiAgICBub3JtYWxbbm9ybWFsaXplKGluZm8uYXR0cmlidXRlKV0gPSBwcm9wXG4gIH1cblxuICByZXR1cm4gbmV3IFNjaGVtYShwcm9wZXJ0eSwgbm9ybWFsLCBzcGFjZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgSW5mbyA9IHJlcXVpcmUoJy4vaW5mbycpXG52YXIgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbmVkSW5mb1xuXG5EZWZpbmVkSW5mby5wcm90b3R5cGUgPSBuZXcgSW5mbygpXG5EZWZpbmVkSW5mby5wcm90b3R5cGUuZGVmaW5lZCA9IHRydWVcblxudmFyIGNoZWNrcyA9IFtcbiAgJ2Jvb2xlYW4nLFxuICAnYm9vbGVhbmlzaCcsXG4gICdvdmVybG9hZGVkQm9vbGVhbicsXG4gICdudW1iZXInLFxuICAnY29tbWFTZXBhcmF0ZWQnLFxuICAnc3BhY2VTZXBhcmF0ZWQnLFxuICAnY29tbWFPclNwYWNlU2VwYXJhdGVkJ1xuXVxudmFyIGNoZWNrc0xlbmd0aCA9IGNoZWNrcy5sZW5ndGhcblxuZnVuY3Rpb24gRGVmaW5lZEluZm8ocHJvcGVydHksIGF0dHJpYnV0ZSwgbWFzaywgc3BhY2UpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGNoZWNrXG5cbiAgbWFyayh0aGlzLCAnc3BhY2UnLCBzcGFjZSlcblxuICBJbmZvLmNhbGwodGhpcywgcHJvcGVydHksIGF0dHJpYnV0ZSlcblxuICB3aGlsZSAoKytpbmRleCA8IGNoZWNrc0xlbmd0aCkge1xuICAgIGNoZWNrID0gY2hlY2tzW2luZGV4XVxuICAgIG1hcmsodGhpcywgY2hlY2ssIChtYXNrICYgdHlwZXNbY2hlY2tdKSA9PT0gdHlwZXNbY2hlY2tdKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmsodmFsdWVzLCBrZXksIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIHZhbHVlc1trZXldID0gdmFsdWVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gSW5mb1xuXG52YXIgcHJvdG8gPSBJbmZvLnByb3RvdHlwZVxuXG5wcm90by5zcGFjZSA9IG51bGxcbnByb3RvLmF0dHJpYnV0ZSA9IG51bGxcbnByb3RvLnByb3BlcnR5ID0gbnVsbFxucHJvdG8uYm9vbGVhbiA9IGZhbHNlXG5wcm90by5ib29sZWFuaXNoID0gZmFsc2VcbnByb3RvLm92ZXJsb2FkZWRCb29sZWFuID0gZmFsc2VcbnByb3RvLm51bWJlciA9IGZhbHNlXG5wcm90by5jb21tYVNlcGFyYXRlZCA9IGZhbHNlXG5wcm90by5zcGFjZVNlcGFyYXRlZCA9IGZhbHNlXG5wcm90by5jb21tYU9yU3BhY2VTZXBhcmF0ZWQgPSBmYWxzZVxucHJvdG8ubXVzdFVzZVByb3BlcnR5ID0gZmFsc2VcbnByb3RvLmRlZmluZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiBJbmZvKHByb3BlcnR5LCBhdHRyaWJ1dGUpIHtcbiAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5XG4gIHRoaXMuYXR0cmlidXRlID0gYXR0cmlidXRlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4vc2NoZW1hJylcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZVxuXG5mdW5jdGlvbiBtZXJnZShkZWZpbml0aW9ucykge1xuICB2YXIgbGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoXG4gIHZhciBwcm9wZXJ0eSA9IFtdXG4gIHZhciBub3JtYWwgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgaW5mb1xuICB2YXIgc3BhY2VcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGluZm8gPSBkZWZpbml0aW9uc1tpbmRleF1cbiAgICBwcm9wZXJ0eS5wdXNoKGluZm8ucHJvcGVydHkpXG4gICAgbm9ybWFsLnB1c2goaW5mby5ub3JtYWwpXG4gICAgc3BhY2UgPSBpbmZvLnNwYWNlXG4gIH1cblxuICByZXR1cm4gbmV3IFNjaGVtYShcbiAgICB4dGVuZC5hcHBseShudWxsLCBwcm9wZXJ0eSksXG4gICAgeHRlbmQuYXBwbHkobnVsbCwgbm9ybWFsKSxcbiAgICBzcGFjZVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBTY2hlbWFcblxudmFyIHByb3RvID0gU2NoZW1hLnByb3RvdHlwZVxuXG5wcm90by5zcGFjZSA9IG51bGxcbnByb3RvLm5vcm1hbCA9IHt9XG5wcm90by5wcm9wZXJ0eSA9IHt9XG5cbmZ1bmN0aW9uIFNjaGVtYShwcm9wZXJ0eSwgbm9ybWFsLCBzcGFjZSkge1xuICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHlcbiAgdGhpcy5ub3JtYWwgPSBub3JtYWxcblxuICBpZiAoc3BhY2UpIHtcbiAgICB0aGlzLnNwYWNlID0gc3BhY2VcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBwb3dlcnMgPSAwXG5cbmV4cG9ydHMuYm9vbGVhbiA9IGluY3JlbWVudCgpXG5leHBvcnRzLmJvb2xlYW5pc2ggPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5vdmVybG9hZGVkQm9vbGVhbiA9IGluY3JlbWVudCgpXG5leHBvcnRzLm51bWJlciA9IGluY3JlbWVudCgpXG5leHBvcnRzLnNwYWNlU2VwYXJhdGVkID0gaW5jcmVtZW50KClcbmV4cG9ydHMuY29tbWFTZXBhcmF0ZWQgPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5jb21tYU9yU3BhY2VTZXBhcmF0ZWQgPSBpbmNyZW1lbnQoKVxuXG5mdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCArK3Bvd2Vycylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICd4bGluaycsXG4gIHRyYW5zZm9ybTogeGxpbmtUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB4TGlua0FjdHVhdGU6IG51bGwsXG4gICAgeExpbmtBcmNSb2xlOiBudWxsLFxuICAgIHhMaW5rSHJlZjogbnVsbCxcbiAgICB4TGlua1JvbGU6IG51bGwsXG4gICAgeExpbmtTaG93OiBudWxsLFxuICAgIHhMaW5rVGl0bGU6IG51bGwsXG4gICAgeExpbmtUeXBlOiBudWxsXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHhsaW5rVHJhbnNmb3JtKF8sIHByb3ApIHtcbiAgcmV0dXJuICd4bGluazonICsgcHJvcC5zbGljZSg1KS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAneG1sJyxcbiAgdHJhbnNmb3JtOiB4bWxUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB4bWxMYW5nOiBudWxsLFxuICAgIHhtbEJhc2U6IG51bGwsXG4gICAgeG1sU3BhY2U6IG51bGxcbiAgfVxufSlcblxuZnVuY3Rpb24geG1sVHJhbnNmb3JtKF8sIHByb3ApIHtcbiAgcmV0dXJuICd4bWw6JyArIHByb3Auc2xpY2UoMykudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcbnZhciBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3V0aWwvY2FzZS1pbnNlbnNpdGl2ZS10cmFuc2Zvcm0nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAneG1sbnMnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgeG1sbnN4bGluazogJ3htbG5zOnhsaW5rJ1xuICB9LFxuICB0cmFuc2Zvcm06IGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIHhtbG5zOiBudWxsLFxuICAgIHhtbG5zWExpbms6IG51bGxcbiAgfVxufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVxuXG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWVyZ2UgPSByZXF1aXJlKCcuL2xpYi91dGlsL21lcmdlJylcbnZhciB4bGluayA9IHJlcXVpcmUoJy4vbGliL3hsaW5rJylcbnZhciB4bWwgPSByZXF1aXJlKCcuL2xpYi94bWwnKVxudmFyIHhtbG5zID0gcmVxdWlyZSgnLi9saWIveG1sbnMnKVxudmFyIGFyaWEgPSByZXF1aXJlKCcuL2xpYi9hcmlhJylcbnZhciBzdmcgPSByZXF1aXJlKCcuL2xpYi9zdmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlKFt4bWwsIHhsaW5rLCB4bWxucywgYXJpYSwgc3ZnXSlcbiIsImltcG9ydCB4dGVuZCBmcm9tICd4dGVuZCc7XG5pbXBvcnQgZnJvbURPTSBmcm9tICdoYXN0LXV0aWwtZnJvbS1kb20nO1xuXG5mdW5jdGlvbiBwYXJzZShvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IHh0ZW5kKG9wdGlvbnMsIHRoaXMuZGF0YSgnc2V0dGluZ3MnKSk7XG5cbiAgZnVuY3Rpb24gcGFyc2VyKGRvYywgZmlsZSkge1xuICAgIHZhciBjcmVhdGUgPSBzZXR0aW5ncy5mcmFnbWVudCA9PSBudWxsIHx8IHNldHRpbmdzLmZyYWdtZW50ID8gY3JlYXRlRnJhZ21lbnQgOiBjcmVhdGVEb2N1bWVudDtcbiAgICByZXR1cm4gZnJvbURPTShjcmVhdGUoU3RyaW5nKGZpbGUpKSk7XG4gIH1cblxuICB0aGlzLlBhcnNlciA9IHBhcnNlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQoaHRtbFN0cmluZykge1xuICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gIHRlbXBFbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICB2YXIgY2hpbGQgPSB0ZW1wRWwuZmlyc3RDaGlsZDtcblxuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgY2hpbGQgPSB0ZW1wRWwuZmlyc3RDaGlsZDtcbiAgfVxuXG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnQoaHRtbFN0cmluZykge1xuICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sU3RyaW5nLCAndGV4dC9odG1sJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiAgIENvbGxhcHNlIHdoaXRlLXNwYWNlLlxuICpcbiAqICAgTm9ybWFsbHksIGNvbGxhcHNlcyB0byBhIHNpbmdsZSBzcGFjZS5cbiAqICAgSWYgYG5ld2xpbmVzOiB0cnVlYCwgY29sbGFwc2VzIHdoaXRlLXNwYWNlIGNvbnRhaW5pbmcgbmV3bGluZXMgdG8gYCdcXG4nYFxuICogICBpbnN0ZWFkIG9mIGAnICdgLlxuICogQGV4YW1wbGVcbiAqICAgPGgxPkhlYWRpbmc8L2gxPlxuICogICA8cD48c3Ryb25nPlRoaXM8L3N0cm9uZz4gYW5kIDxlbT50aGF0PC9lbT48L3A+XG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBjb2xsYXBzZVdoaXRlU3BhY2UgPSByZXF1aXJlKCdjb2xsYXBzZS13aGl0ZS1zcGFjZScpXG52YXIgd2hpdGVzcGFjZVNlbnNpdGl2ZSA9IHJlcXVpcmUoJ2h0bWwtd2hpdGVzcGFjZS1zZW5zaXRpdmUtdGFnLW5hbWVzJylcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcbnZhciBtb2RpZnkgPSByZXF1aXJlKCd1bmlzdC11dGlsLW1vZGlmeS1jaGlsZHJlbicpXG52YXIgZWxlbWVudCA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JylcbnZhciBoYXMgPSByZXF1aXJlKCdoYXN0LXV0aWwtaGFzLXByb3BlcnR5JylcbnZhciBlbWJlZGRlZCA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1lbWJlZGRlZCcpXG52YXIgYm9keU9LID0gcmVxdWlyZSgnaGFzdC11dGlsLWlzLWJvZHktb2stbGluaycpXG52YXIgbGlzdCA9IHJlcXVpcmUoJy4vbGlzdC5qc29uJylcblxudmFyIHRleHQgPSBjb252ZXJ0KCd0ZXh0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjb2xsYXBzZVxuXG5mdW5jdGlvbiBjb2xsYXBzZShvcHRpb25zKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtKHRyZWUpIHtcbiAgICByZXR1cm4gbWluaWZ5KHRyZWUsIG9wdGlvbnMgfHwge30pXG4gIH1cbn1cblxuZnVuY3Rpb24gbWluaWZ5KHRyZWUsIG9wdGlvbnMpIHtcbiAgdmFyIHdoaXRlc3BhY2UgPSBvcHRpb25zLm5ld2xpbmVzID8gY29sbGFwc2VUb05ld0xpbmVzIDogY29sbGFwc2VXaGl0ZVNwYWNlXG4gIHZhciBtb2RpZmllciA9IG1vZGlmeSh2aXNpdG9yKVxuICB2YXIgaW5zaWRlID0gZmFsc2VcbiAgdmFyIHNlZW4gPSBmYWxzZVxuXG4gIHZpc2l0b3IodHJlZSlcblxuICByZXR1cm4gdHJlZVxuXG4gIGZ1bmN0aW9uIHZpc2l0b3Iobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIHZhciBoZWFkXG4gICAgdmFyIHByZXZcbiAgICB2YXIgbmV4dFxuICAgIHZhciB2YWx1ZVxuICAgIHZhciBzdGFydFxuICAgIHZhciBlbmRcblxuICAgIGlmICh0ZXh0KG5vZGUpKSB7XG4gICAgICBwcmV2ID0gcGFyZW50LmNoaWxkcmVuW2luZGV4IC0gMV1cbiAgICAgIG5leHQgPSBwYXJlbnQuY2hpbGRyZW5baW5kZXggKyAxXVxuXG4gICAgICB2YWx1ZSA9IHdoaXRlc3BhY2Uobm9kZS52YWx1ZSlcbiAgICAgIGVuZCA9IHZhbHVlLmxlbmd0aFxuICAgICAgc3RhcnQgPSAwXG5cbiAgICAgIGlmIChlbXB0eSh2YWx1ZS5jaGFyQXQoMCkpICYmIHZpYWJsZShwcmV2KSkge1xuICAgICAgICBzdGFydCsrXG4gICAgICB9XG5cbiAgICAgIGlmIChlbXB0eSh2YWx1ZS5jaGFyQXQoZW5kIC0gMSkpICYmIHZpYWJsZShuZXh0KSkge1xuICAgICAgICBlbmQtLVxuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgbm9kZSBpZiBpdOKAmXMgY29sbGFwc2VkIGVudGlyZWx5LlxuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgICAgIHJldHVybiBpbmRleFxuICAgICAgfVxuXG4gICAgICBub2RlLnZhbHVlID0gdmFsdWVcbiAgICB9XG5cbiAgICBpZiAoIXNlZW4gJiYgIWluc2lkZSkge1xuICAgICAgaGVhZCA9IGVsZW1lbnQobm9kZSwgJ2hlYWQnKVxuICAgICAgaW5zaWRlID0gaGVhZFxuICAgICAgc2VlbiA9IGhlYWRcbiAgICB9XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiAhZWxlbWVudChub2RlLCB3aGl0ZXNwYWNlU2Vuc2l0aXZlKSkge1xuICAgICAgbW9kaWZpZXIobm9kZSlcbiAgICB9XG5cbiAgICBpZiAoaGVhZCkge1xuICAgICAgaW5zaWRlID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2aWFibGUobm9kZSkge1xuICAgIHJldHVybiAhbm9kZSB8fCBpbnNpZGUgfHwgIWNvbGxhcHNhYmxlKG5vZGUpXG4gIH1cbn1cblxuLy8gQ2hlY2sgaWYgYG5vZGVgIGlzIGNvbGxhcHNhYmxlLlxuZnVuY3Rpb24gY29sbGFwc2FibGUobm9kZSkge1xuICByZXR1cm4gKFxuICAgIHRleHQobm9kZSkgfHxcbiAgICBlbGVtZW50KG5vZGUsIGxpc3QpIHx8XG4gICAgZW1iZWRkZWQobm9kZSkgfHxcbiAgICBib2R5T0sobm9kZSkgfHxcbiAgICAoZWxlbWVudChub2RlLCAnbWV0YScpICYmIGhhcyhub2RlLCAnaXRlbVByb3AnKSlcbiAgKVxufVxuXG4vLyBDb2xsYXBzZSB0byBzcGFjZXMsIG9yIG5ld2xpbmVzIGlmIHRoZXnigJlyZSBpbiBhIHJ1bi5cbmZ1bmN0aW9uIGNvbGxhcHNlVG9OZXdMaW5lcyh2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9cXHMrL2csIGZ1bmN0aW9uKCQwKSB7XG4gICAgcmV0dXJuICQwLmluZGV4T2YoJ1xcbicpID09PSAtMSA/ICcgJyA6ICdcXG4nXG4gIH0pXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBlbXB0eShjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIGNoYXJhY3RlciA9PT0gJyAnIHx8IGNoYXJhY3RlciA9PT0gJ1xcbidcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnRcblxuZnVuY3Rpb24gY29udmVydCh0ZXN0KSB7XG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZUZhY3RvcnkodGVzdClcbiAgfVxuXG4gIGlmICh0ZXN0ID09PSBudWxsIHx8IHRlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBva1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAoJ2xlbmd0aCcgaW4gdGVzdCA/IGFueUZhY3RvcnkgOiBtYXRjaGVzRmFjdG9yeSkodGVzdClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0ZXN0XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uLCBzdHJpbmcsIG9yIG9iamVjdCBhcyB0ZXN0Jylcbn1cblxuZnVuY3Rpb24gY29udmVydEFsbCh0ZXN0cykge1xuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBsZW5ndGggPSB0ZXN0cy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdHNbaW5kZXhdID0gY29udmVydCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0c1xufVxuXG4vLyBVdGlsaXR5IGFzc2VydCBlYWNoIHByb3BlcnR5IGluIGB0ZXN0YCBpcyByZXByZXNlbnRlZCBpbiBgbm9kZWAsIGFuZCBlYWNoXG4vLyB2YWx1ZXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuZnVuY3Rpb24gbWF0Y2hlc0ZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gbWF0Y2hlc1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMobm9kZSkge1xuICAgIHZhciBrZXlcblxuICAgIGZvciAoa2V5IGluIHRlc3QpIHtcbiAgICAgIGlmIChub2RlW2tleV0gIT09IHRlc3Rba2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgdmFyIGNoZWNrcyA9IGNvbnZlcnRBbGwodGVzdHMpXG4gIHZhciBsZW5ndGggPSBjaGVja3MubGVuZ3RoXG5cbiAgcmV0dXJuIG1hdGNoZXNcblxuICBmdW5jdGlvbiBtYXRjaGVzKCkge1xuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGEgZ2l2ZW4gbm9kZeKAmXMgdHlwZVxuLy8gZm9yIHNhaWQgc3RyaW5nLlxuZnVuY3Rpb24gdHlwZUZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gdHlwZVxuXG4gIGZ1bmN0aW9uIHR5cGUobm9kZSkge1xuICAgIHJldHVybiBCb29sZWFuKG5vZGUgJiYgbm9kZS50eXBlID09PSB0ZXN0KVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gcmV0dXJuIHRydWUuXG5mdW5jdGlvbiBvaygpIHtcbiAgcmV0dXJuIHRydWVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgaGFzdDJtZGFzdCA9IHJlcXVpcmUoJ2hhc3QtdXRpbC10by1tZGFzdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gYXR0YWNoZXJcblxuLy8gQXR0YWNoZXIuXG4vLyBJZiBhIGRlc3RpbmF0aW9uIGlzIGdpdmVuLCBydW5zIHRoZSBkZXN0aW5hdGlvbiB3aXRoIHRoZSBuZXcgbWRhc3QgdHJlZVxuLy8gKGJyaWRnZS1tb2RlKS5cbi8vIFdpdGhvdXQgZGVzdGluYXRpb24sIHJldHVybnMgdGhlIG1kYXN0IHRyZWU6IGZ1cnRoZXIgcGx1Z2lucyBydW4gb24gdGhhdCB0cmVlXG4vLyAobXV0YXRlLW1vZGUpLlxuZnVuY3Rpb24gYXR0YWNoZXIoZGVzdGluYXRpb24sIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzXG5cbiAgaWYgKGRlc3RpbmF0aW9uICYmICFkZXN0aW5hdGlvbi5wcm9jZXNzKSB7XG4gICAgc2V0dGluZ3MgPSBkZXN0aW5hdGlvblxuICAgIGRlc3RpbmF0aW9uID0gbnVsbFxuICB9XG5cbiAgc2V0dGluZ3MgPSBzZXR0aW5ncyB8fCBvcHRpb25zIHx8IHt9XG5cbiAgaWYgKHNldHRpbmdzLmRvY3VtZW50ID09PSB1bmRlZmluZWQgfHwgc2V0dGluZ3MuZG9jdW1lbnQgPT09IG51bGwpIHtcbiAgICBzZXR0aW5ncy5kb2N1bWVudCA9IHRydWVcbiAgfVxuXG4gIHJldHVybiBkZXN0aW5hdGlvbiA/IGJyaWRnZShkZXN0aW5hdGlvbiwgc2V0dGluZ3MpIDogbXV0YXRlKHNldHRpbmdzKVxufVxuXG4vLyBCcmlkZ2UtbW9kZS5cbi8vIFJ1bnMgdGhlIGRlc3RpbmF0aW9uIHdpdGggdGhlIG5ldyBtZGFzdCB0cmVlLlxuZnVuY3Rpb24gYnJpZGdlKGRlc3RpbmF0aW9uLCBvcHRpb25zKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lclxuICBmdW5jdGlvbiB0cmFuc2Zvcm1lcihub2RlLCBmaWxlLCBuZXh0KSB7XG4gICAgZGVzdGluYXRpb24ucnVuKGhhc3QybWRhc3Qobm9kZSwgb3B0aW9ucyksIGZpbGUsIGRvbmUpXG4gICAgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgIG5leHQoZXJyKVxuICAgIH1cbiAgfVxufVxuXG4vLyBNdXRhdGUtbW9kZS5cbi8vIEZ1cnRoZXIgdHJhbnNmb3JtZXJzIHJ1biBvbiB0aGUgbWRhc3QgdHJlZS5cbmZ1bmN0aW9uIG11dGF0ZShvcHRpb25zKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lclxuICBmdW5jdGlvbiB0cmFuc2Zvcm1lcihub2RlKSB7XG4gICAgcmV0dXJuIGhhc3QybWRhc3Qobm9kZSwgb3B0aW9ucylcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1bmhlcml0ID0gcmVxdWlyZSgndW5oZXJpdCcpXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgQ29tcGlsZXIgPSByZXF1aXJlKCcuL2xpYi9jb21waWxlci5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5naWZ5XG5zdHJpbmdpZnkuQ29tcGlsZXIgPSBDb21waWxlclxuXG5mdW5jdGlvbiBzdHJpbmdpZnkob3B0aW9ucykge1xuICB2YXIgTG9jYWwgPSB1bmhlcml0KENvbXBpbGVyKVxuICBMb2NhbC5wcm90b3R5cGUub3B0aW9ucyA9IHh0ZW5kKFxuICAgIExvY2FsLnByb3RvdHlwZS5vcHRpb25zLFxuICAgIHRoaXMuZGF0YSgnc2V0dGluZ3MnKSxcbiAgICBvcHRpb25zXG4gIClcbiAgdGhpcy5Db21waWxlciA9IExvY2FsXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIHRvZ2dsZSA9IHJlcXVpcmUoJ3N0YXRlLXRvZ2dsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcGlsZXJcblxuLy8gQ29uc3RydWN0IGEgbmV3IGNvbXBpbGVyLlxuZnVuY3Rpb24gQ29tcGlsZXIodHJlZSwgZmlsZSkge1xuICB0aGlzLmluTGluayA9IGZhbHNlXG4gIHRoaXMuaW5UYWJsZSA9IGZhbHNlXG4gIHRoaXMudHJlZSA9IHRyZWVcbiAgdGhpcy5maWxlID0gZmlsZVxuICB0aGlzLm9wdGlvbnMgPSB4dGVuZCh0aGlzLm9wdGlvbnMpXG4gIHRoaXMuc2V0T3B0aW9ucyh7fSlcbn1cblxudmFyIHByb3RvID0gQ29tcGlsZXIucHJvdG90eXBlXG5cbi8vIEVudGVyIGFuZCBleGl0IGhlbHBlcnMuICovXG5wcm90by5lbnRlckxpbmsgPSB0b2dnbGUoJ2luTGluaycsIGZhbHNlKVxucHJvdG8uZW50ZXJUYWJsZSA9IHRvZ2dsZSgnaW5UYWJsZScsIGZhbHNlKVxucHJvdG8uZW50ZXJMaW5rUmVmZXJlbmNlID0gcmVxdWlyZSgnLi91dGlsL2VudGVyLWxpbmstcmVmZXJlbmNlJylcblxuLy8gQ29uZmlndXJhdGlvbi5cbnByb3RvLm9wdGlvbnMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJylcbnByb3RvLnNldE9wdGlvbnMgPSByZXF1aXJlKCcuL3NldC1vcHRpb25zJylcblxucHJvdG8uY29tcGlsZSA9IHJlcXVpcmUoJy4vbWFjcm8vY29tcGlsZScpXG5wcm90by52aXNpdCA9IHJlcXVpcmUoJy4vbWFjcm8vb25lJylcbnByb3RvLmFsbCA9IHJlcXVpcmUoJy4vbWFjcm8vYWxsJylcbnByb3RvLmJsb2NrID0gcmVxdWlyZSgnLi9tYWNyby9ibG9jaycpXG5wcm90by52aXNpdE9yZGVyZWRJdGVtcyA9IHJlcXVpcmUoJy4vbWFjcm8vb3JkZXJlZC1pdGVtcycpXG5wcm90by52aXNpdFVub3JkZXJlZEl0ZW1zID0gcmVxdWlyZSgnLi9tYWNyby91bm9yZGVyZWQtaXRlbXMnKVxuXG4vLyBFeHBvc2UgdmlzaXRvcnMuXG5wcm90by52aXNpdG9ycyA9IHtcbiAgcm9vdDogcmVxdWlyZSgnLi92aXNpdG9ycy9yb290JyksXG4gIHRleHQ6IHJlcXVpcmUoJy4vdmlzaXRvcnMvdGV4dCcpLFxuICBoZWFkaW5nOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2hlYWRpbmcnKSxcbiAgcGFyYWdyYXBoOiByZXF1aXJlKCcuL3Zpc2l0b3JzL3BhcmFncmFwaCcpLFxuICBibG9ja3F1b3RlOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2Jsb2NrcXVvdGUnKSxcbiAgbGlzdDogcmVxdWlyZSgnLi92aXNpdG9ycy9saXN0JyksXG4gIGxpc3RJdGVtOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2xpc3QtaXRlbScpLFxuICBpbmxpbmVDb2RlOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2lubGluZS1jb2RlJyksXG4gIGNvZGU6IHJlcXVpcmUoJy4vdmlzaXRvcnMvY29kZScpLFxuICBodG1sOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2h0bWwnKSxcbiAgdGhlbWF0aWNCcmVhazogcmVxdWlyZSgnLi92aXNpdG9ycy90aGVtYXRpYy1icmVhaycpLFxuICBzdHJvbmc6IHJlcXVpcmUoJy4vdmlzaXRvcnMvc3Ryb25nJyksXG4gIGVtcGhhc2lzOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2VtcGhhc2lzJyksXG4gIGJyZWFrOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2JyZWFrJyksXG4gIGRlbGV0ZTogcmVxdWlyZSgnLi92aXNpdG9ycy9kZWxldGUnKSxcbiAgbGluazogcmVxdWlyZSgnLi92aXNpdG9ycy9saW5rJyksXG4gIGxpbmtSZWZlcmVuY2U6IHJlcXVpcmUoJy4vdmlzaXRvcnMvbGluay1yZWZlcmVuY2UnKSxcbiAgaW1hZ2VSZWZlcmVuY2U6IHJlcXVpcmUoJy4vdmlzaXRvcnMvaW1hZ2UtcmVmZXJlbmNlJyksXG4gIGRlZmluaXRpb246IHJlcXVpcmUoJy4vdmlzaXRvcnMvZGVmaW5pdGlvbicpLFxuICBpbWFnZTogcmVxdWlyZSgnLi92aXNpdG9ycy9pbWFnZScpLFxuICBmb290bm90ZTogcmVxdWlyZSgnLi92aXNpdG9ycy9mb290bm90ZScpLFxuICBmb290bm90ZVJlZmVyZW5jZTogcmVxdWlyZSgnLi92aXNpdG9ycy9mb290bm90ZS1yZWZlcmVuY2UnKSxcbiAgZm9vdG5vdGVEZWZpbml0aW9uOiByZXF1aXJlKCcuL3Zpc2l0b3JzL2Zvb3Rub3RlLWRlZmluaXRpb24nKSxcbiAgdGFibGU6IHJlcXVpcmUoJy4vdmlzaXRvcnMvdGFibGUnKSxcbiAgdGFibGVDZWxsOiByZXF1aXJlKCcuL3Zpc2l0b3JzL3RhYmxlLWNlbGwnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZm06IHRydWUsXG4gIGNvbW1vbm1hcms6IGZhbHNlLFxuICBwZWRhbnRpYzogZmFsc2UsXG4gIGVudGl0aWVzOiAnZmFsc2UnLFxuICBzZXRleHQ6IGZhbHNlLFxuICBjbG9zZUF0eDogZmFsc2UsXG4gIGxvb3NlVGFibGU6IGZhbHNlLFxuICBzcGFjZWRUYWJsZTogdHJ1ZSxcbiAgcGFkZGVkVGFibGU6IHRydWUsXG4gIHN0cmluZ0xlbmd0aDogc3RyaW5nTGVuZ3RoLFxuICBpbmNyZW1lbnRMaXN0TWFya2VyOiB0cnVlLFxuICBmZW5jZXM6IGZhbHNlLFxuICBmZW5jZTogJ2AnLFxuICBidWxsZXQ6ICctJyxcbiAgbGlzdEl0ZW1JbmRlbnQ6ICd0YWInLFxuICBydWxlOiAnKicsXG4gIHJ1bGVTcGFjZXM6IHRydWUsXG4gIHJ1bGVSZXBldGl0aW9uOiAzLFxuICBzdHJvbmc6ICcqJyxcbiAgZW1waGFzaXM6ICdfJ1xufVxuXG5mdW5jdGlvbiBzdHJpbmdMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmxlbmd0aFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgYWxwaGFudW1lcmljID0gcmVxdWlyZSgnaXMtYWxwaGFudW1lcmljJylcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKVxudmFyIGVzY2FwZXMgPSByZXF1aXJlKCdtYXJrZG93bi1lc2NhcGVzJylcbnZhciBwcmVmaXggPSByZXF1aXJlKCcuL3V0aWwvZW50aXR5LXByZWZpeC1sZW5ndGgnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxudmFyIHRhYiA9ICdcXHQnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgbnVtYmVyU2lnbiA9ICcjJ1xudmFyIGFtcGVyc2FuZCA9ICcmJ1xudmFyIGxlZnRQYXJlbnRoZXNpcyA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcbnZhciBhc3RlcmlzayA9ICcqJ1xudmFyIHBsdXNTaWduID0gJysnXG52YXIgZGFzaCA9ICctJ1xudmFyIGRvdCA9ICcuJ1xudmFyIGNvbG9uID0gJzonXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgYmFja3NsYXNoID0gJ1xcXFwnXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgdW5kZXJzY29yZSA9ICdfJ1xudmFyIGdyYXZlQWNjZW50ID0gJ2AnXG52YXIgdmVydGljYWxCYXIgPSAnfCdcbnZhciB0aWxkZSA9ICd+J1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xuXG52YXIgZW50aXRpZXMgPSB7XG4gICc8JzogJyZsdDsnLFxuICAnOic6ICcmI3gzQTsnLFxuICAnJic6ICcmYW1wOycsXG4gICd8JzogJyYjeDdDOycsXG4gICd+JzogJyYjeDdFOydcbn1cblxudmFyIHNob3J0Y3V0ID0gJ3Nob3J0Y3V0J1xudmFyIG1haWx0byA9ICdtYWlsdG8nXG52YXIgaHR0cHMgPSAnaHR0cHMnXG52YXIgaHR0cCA9ICdodHRwJ1xuXG52YXIgYmxhbmtFeHByZXNzaW9uID0gL1xcblxccyokL1xuXG4vLyBGYWN0b3J5IHRvIGVzY2FwZSBjaGFyYWN0ZXJzLlxuZnVuY3Rpb24gZmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiBlc2NhcGVcblxuICAvLyBFc2NhcGUgcHVuY3R1YXRpb24gY2hhcmFjdGVycyBpbiBhIG5vZGXigJlzIHZhbHVlLlxuICBmdW5jdGlvbiBlc2NhcGUodmFsdWUsIG5vZGUsIHBhcmVudCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBnZm0gPSBvcHRpb25zLmdmbVxuICAgIHZhciBjb21tb25tYXJrID0gb3B0aW9ucy5jb21tb25tYXJrXG4gICAgdmFyIHBlZGFudGljID0gb3B0aW9ucy5wZWRhbnRpY1xuICAgIHZhciBtYXJrZXJzID0gY29tbW9ubWFyayA/IFtkb3QsIHJpZ2h0UGFyZW50aGVzaXNdIDogW2RvdF1cbiAgICB2YXIgc2libGluZ3MgPSBwYXJlbnQgJiYgcGFyZW50LmNoaWxkcmVuXG4gICAgdmFyIGluZGV4ID0gc2libGluZ3MgJiYgc2libGluZ3MuaW5kZXhPZihub2RlKVxuICAgIHZhciBwcmV2ID0gc2libGluZ3MgJiYgc2libGluZ3NbaW5kZXggLSAxXVxuICAgIHZhciBuZXh0ID0gc2libGluZ3MgJiYgc2libGluZ3NbaW5kZXggKyAxXVxuICAgIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgICB2YXIgZXNjYXBhYmxlID0gZXNjYXBlcyhvcHRpb25zKVxuICAgIHZhciBwb3NpdGlvbiA9IC0xXG4gICAgdmFyIHF1ZXVlID0gW11cbiAgICB2YXIgZXNjYXBlZCA9IHF1ZXVlXG4gICAgdmFyIGFmdGVyTmV3TGluZVxuICAgIHZhciBjaGFyYWN0ZXJcbiAgICB2YXIgd29yZENoYXJCZWZvcmVcbiAgICB2YXIgd29yZENoYXJBZnRlclxuICAgIHZhciBvZmZzZXRcbiAgICB2YXIgcmVwbGFjZVxuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIGFmdGVyTmV3TGluZSA9IHRleHQocHJldikgJiYgYmxhbmtFeHByZXNzaW9uLnRlc3QocHJldi52YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJOZXdMaW5lID1cbiAgICAgICAgIXBhcmVudCB8fCBwYXJlbnQudHlwZSA9PT0gJ3Jvb3QnIHx8IHBhcmVudC50eXBlID09PSAncGFyYWdyYXBoJ1xuICAgIH1cblxuICAgIHdoaWxlICgrK3Bvc2l0aW9uIDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQocG9zaXRpb24pXG4gICAgICByZXBsYWNlID0gZmFsc2VcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJ1xcbicpIHtcbiAgICAgICAgYWZ0ZXJOZXdMaW5lID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgY2hhcmFjdGVyID09PSBiYWNrc2xhc2ggfHxcbiAgICAgICAgY2hhcmFjdGVyID09PSBncmF2ZUFjY2VudCB8fFxuICAgICAgICBjaGFyYWN0ZXIgPT09IGFzdGVyaXNrIHx8XG4gICAgICAgIGNoYXJhY3RlciA9PT0gbGVmdFNxdWFyZUJyYWNrZXQgfHxcbiAgICAgICAgY2hhcmFjdGVyID09PSBsZXNzVGhhbiB8fFxuICAgICAgICAoY2hhcmFjdGVyID09PSBhbXBlcnNhbmQgJiYgcHJlZml4KHZhbHVlLnNsaWNlKHBvc2l0aW9uKSkgPiAwKSB8fFxuICAgICAgICAoY2hhcmFjdGVyID09PSByaWdodFNxdWFyZUJyYWNrZXQgJiYgc2VsZi5pbkxpbmspIHx8XG4gICAgICAgIChnZm0gJiYgY2hhcmFjdGVyID09PSB0aWxkZSAmJiB2YWx1ZS5jaGFyQXQocG9zaXRpb24gKyAxKSA9PT0gdGlsZGUpIHx8XG4gICAgICAgIChnZm0gJiZcbiAgICAgICAgICBjaGFyYWN0ZXIgPT09IHZlcnRpY2FsQmFyICYmXG4gICAgICAgICAgKHNlbGYuaW5UYWJsZSB8fCBhbGlnbm1lbnQodmFsdWUsIHBvc2l0aW9uKSkpIHx8XG4gICAgICAgIChjaGFyYWN0ZXIgPT09IHVuZGVyc2NvcmUgJiZcbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBsZWFkaW5nL3RyYWlsaW5nIHVuZGVyc2NvcmVzIHRvIHRoZSBtdWx0aW5vZGUgdmVyc2lvbiBiZWxvdy5cbiAgICAgICAgICBwb3NpdGlvbiA+IDAgJiZcbiAgICAgICAgICBwb3NpdGlvbiA8IGxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAocGVkYW50aWMgfHxcbiAgICAgICAgICAgICFhbHBoYW51bWVyaWModmFsdWUuY2hhckF0KHBvc2l0aW9uIC0gMSkpIHx8XG4gICAgICAgICAgICAhYWxwaGFudW1lcmljKHZhbHVlLmNoYXJBdChwb3NpdGlvbiArIDEpKSkpIHx8XG4gICAgICAgIChnZm0gJiYgIXNlbGYuaW5MaW5rICYmIGNoYXJhY3RlciA9PT0gY29sb24gJiYgcHJvdG9jb2wocXVldWUuam9pbignJykpKVxuICAgICAgKSB7XG4gICAgICAgIHJlcGxhY2UgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKGFmdGVyTmV3TGluZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hhcmFjdGVyID09PSBncmVhdGVyVGhhbiB8fFxuICAgICAgICAgIGNoYXJhY3RlciA9PT0gbnVtYmVyU2lnbiB8fFxuICAgICAgICAgIGNoYXJhY3RlciA9PT0gYXN0ZXJpc2sgfHxcbiAgICAgICAgICBjaGFyYWN0ZXIgPT09IGRhc2ggfHxcbiAgICAgICAgICBjaGFyYWN0ZXIgPT09IHBsdXNTaWduXG4gICAgICAgICkge1xuICAgICAgICAgIHJlcGxhY2UgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoZGVjaW1hbChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgb2Zmc2V0ID0gcG9zaXRpb24gKyAxXG5cbiAgICAgICAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWRlY2ltYWwodmFsdWUuY2hhckF0KG9mZnNldCkpKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCsrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hcmtlcnMuaW5kZXhPZih2YWx1ZS5jaGFyQXQob2Zmc2V0KSkgIT09IC0xKSB7XG4gICAgICAgICAgICBuZXh0ID0gdmFsdWUuY2hhckF0KG9mZnNldCArIDEpXG5cbiAgICAgICAgICAgIGlmICghbmV4dCB8fCBuZXh0ID09PSBzcGFjZSB8fCBuZXh0ID09PSB0YWIgfHwgbmV4dCA9PT0gbGluZUZlZWQpIHtcbiAgICAgICAgICAgICAgcXVldWUucHVzaCh2YWx1ZS5zbGljZShwb3NpdGlvbiwgb2Zmc2V0KSlcbiAgICAgICAgICAgICAgcG9zaXRpb24gPSBvZmZzZXRcbiAgICAgICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KHBvc2l0aW9uKVxuICAgICAgICAgICAgICByZXBsYWNlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYWZ0ZXJOZXdMaW5lICYmICF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYWZ0ZXJOZXdMaW5lID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgcXVldWUucHVzaChyZXBsYWNlID8gb25lKGNoYXJhY3RlcikgOiBjaGFyYWN0ZXIpXG4gICAgfVxuXG4gICAgLy8gTXVsdGktbm9kZSB2ZXJzaW9ucy5cbiAgICBpZiAoc2libGluZ3MgJiYgdGV4dChub2RlKSkge1xuICAgICAgLy8gQ2hlY2sgZm9yIGFuIG9wZW5pbmcgcGFyZW50aGVzZXMgYWZ0ZXIgYSBsaW5rLXJlZmVyZW5jZSAod2hpY2ggY2FuIGJlXG4gICAgICAvLyBqb2luZWQgYnkgd2hpdGUtc3BhY2UpLlxuICAgICAgaWYgKHByZXYgJiYgcHJldi5yZWZlcmVuY2VUeXBlID09PSBzaG9ydGN1dCkge1xuICAgICAgICBwb3NpdGlvbiA9IC0xXG4gICAgICAgIGxlbmd0aCA9IGVzY2FwZWQubGVuZ3RoXG5cbiAgICAgICAgd2hpbGUgKCsrcG9zaXRpb24gPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSBlc2NhcGVkW3Bvc2l0aW9uXVxuXG4gICAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gc3BhY2UgfHwgY2hhcmFjdGVyID09PSB0YWIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gbGVmdFBhcmVudGhlc2lzIHx8IGNoYXJhY3RlciA9PT0gY29sb24pIHtcbiAgICAgICAgICAgIGVzY2FwZWRbcG9zaXRpb25dID0gb25lKGNoYXJhY3RlcilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgbm9kZSBpcyBhbGwgc3BhY2VzIC8gdGFicywgcHJlY2VkZWQgYnkgYSBzaG9ydGN1dCxcbiAgICAgICAgLy8gYW5kIGZvbGxvd2VkIGJ5IGEgdGV4dCBzdGFydGluZyB3aXRoIGAoYCwgZXNjYXBlIGl0LlxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGV4dChuZXh0KSAmJlxuICAgICAgICAgIHBvc2l0aW9uID09PSBsZW5ndGggJiZcbiAgICAgICAgICBuZXh0LnZhbHVlLmNoYXJBdCgwKSA9PT0gbGVmdFBhcmVudGhlc2lzXG4gICAgICAgICkge1xuICAgICAgICAgIGVzY2FwZWQucHVzaChiYWNrc2xhc2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlIG5vbi1hdXRvLWxpbmtzIGFyZSBub3Qgc2VlbiBhcyBsaW5rcy4gIFRoaXMgcGF0dGVybiBuZWVkcyB0b1xuICAgICAgLy8gY2hlY2sgdGhlIHByZWNlZGluZyBub2RlcyB0b28uXG4gICAgICBpZiAoXG4gICAgICAgIGdmbSAmJlxuICAgICAgICAhc2VsZi5pbkxpbmsgJiZcbiAgICAgICAgdGV4dChwcmV2KSAmJlxuICAgICAgICB2YWx1ZS5jaGFyQXQoMCkgPT09IGNvbG9uICYmXG4gICAgICAgIHByb3RvY29sKHByZXYudmFsdWUuc2xpY2UoLTYpKVxuICAgICAgKSB7XG4gICAgICAgIGVzY2FwZWRbMF0gPSBvbmUoY29sb24pXG4gICAgICB9XG5cbiAgICAgIC8vIEVzY2FwZSBhbXBlcnNhbmQgaWYgaXQgd291bGQgb3RoZXJ3aXNlIHN0YXJ0IGFuIGVudGl0eS5cbiAgICAgIGlmIChcbiAgICAgICAgdGV4dChuZXh0KSAmJlxuICAgICAgICB2YWx1ZS5jaGFyQXQobGVuZ3RoIC0gMSkgPT09IGFtcGVyc2FuZCAmJlxuICAgICAgICBwcmVmaXgoYW1wZXJzYW5kICsgbmV4dC52YWx1ZSkgIT09IDBcbiAgICAgICkge1xuICAgICAgICBlc2NhcGVkW2VzY2FwZWQubGVuZ3RoIC0gMV0gPSBvbmUoYW1wZXJzYW5kKVxuICAgICAgfVxuXG4gICAgICAvLyBFc2NhcGUgZXhjbGFtYXRpb24gbWFya3MgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgbGlua3MuXG4gICAgICBpZiAoXG4gICAgICAgIG5leHQgJiZcbiAgICAgICAgbmV4dC50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgdmFsdWUuY2hhckF0KGxlbmd0aCAtIDEpID09PSBleGNsYW1hdGlvbk1hcmtcbiAgICAgICkge1xuICAgICAgICBlc2NhcGVkW2VzY2FwZWQubGVuZ3RoIC0gMV0gPSBvbmUoZXhjbGFtYXRpb25NYXJrKVxuICAgICAgfVxuXG4gICAgICAvLyBFc2NhcGUgZG91YmxlIHRpbGRlcyBpbiBHRk0uXG4gICAgICBpZiAoXG4gICAgICAgIGdmbSAmJlxuICAgICAgICB0ZXh0KG5leHQpICYmXG4gICAgICAgIHZhbHVlLmNoYXJBdChsZW5ndGggLSAxKSA9PT0gdGlsZGUgJiZcbiAgICAgICAgbmV4dC52YWx1ZS5jaGFyQXQoMCkgPT09IHRpbGRlXG4gICAgICApIHtcbiAgICAgICAgZXNjYXBlZC5zcGxpY2UoZXNjYXBlZC5sZW5ndGggLSAxLCAwLCBiYWNrc2xhc2gpXG4gICAgICB9XG5cbiAgICAgIC8vIEVzY2FwZSB1bmRlcnNjb3JlcywgYnV0IG5vdCBtaWQtd29yZCAodW5sZXNzIGluIHBlZGFudGljIG1vZGUpLlxuICAgICAgd29yZENoYXJCZWZvcmUgPSB0ZXh0KHByZXYpICYmIGFscGhhbnVtZXJpYyhwcmV2LnZhbHVlLnNsaWNlKC0xKSlcbiAgICAgIHdvcmRDaGFyQWZ0ZXIgPSB0ZXh0KG5leHQpICYmIGFscGhhbnVtZXJpYyhuZXh0LnZhbHVlLmNoYXJBdCgwKSlcblxuICAgICAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUgPT09IHVuZGVyc2NvcmUgJiZcbiAgICAgICAgICAocGVkYW50aWMgfHwgIXdvcmRDaGFyQmVmb3JlIHx8ICF3b3JkQ2hhckFmdGVyKVxuICAgICAgICApIHtcbiAgICAgICAgICBlc2NhcGVkLnVuc2hpZnQoYmFja3NsYXNoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUuY2hhckF0KDApID09PSB1bmRlcnNjb3JlICYmXG4gICAgICAgICAgKHBlZGFudGljIHx8ICF3b3JkQ2hhckJlZm9yZSB8fCAhYWxwaGFudW1lcmljKHZhbHVlLmNoYXJBdCgxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGVzY2FwZWQudW5zaGlmdChiYWNrc2xhc2gpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUuY2hhckF0KGxlbmd0aCAtIDEpID09PSB1bmRlcnNjb3JlICYmXG4gICAgICAgICAgKHBlZGFudGljIHx8XG4gICAgICAgICAgICAhd29yZENoYXJBZnRlciB8fFxuICAgICAgICAgICAgIWFscGhhbnVtZXJpYyh2YWx1ZS5jaGFyQXQobGVuZ3RoIC0gMikpKVxuICAgICAgICApIHtcbiAgICAgICAgICBlc2NhcGVkLnNwbGljZShlc2NhcGVkLmxlbmd0aCAtIDEsIDAsIGJhY2tzbGFzaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlc2NhcGVkLmpvaW4oJycpXG5cbiAgICBmdW5jdGlvbiBvbmUoY2hhcmFjdGVyKSB7XG4gICAgICByZXR1cm4gZXNjYXBhYmxlLmluZGV4T2YoY2hhcmFjdGVyKSA9PT0gLTFcbiAgICAgICAgPyBlbnRpdGllc1tjaGFyYWN0ZXJdXG4gICAgICAgIDogYmFja3NsYXNoICsgY2hhcmFjdGVyXG4gICAgfVxuICB9XG59XG5cbi8vIENoZWNrIGlmIGBpbmRleGAgaW4gYHZhbHVlYCBpcyBpbnNpZGUgYW4gYWxpZ25tZW50IHJvdy5cbmZ1bmN0aW9uIGFsaWdubWVudCh2YWx1ZSwgaW5kZXgpIHtcbiAgdmFyIHN0YXJ0ID0gdmFsdWUubGFzdEluZGV4T2YobGluZUZlZWQsIGluZGV4KVxuICB2YXIgZW5kID0gdmFsdWUuaW5kZXhPZihsaW5lRmVlZCwgaW5kZXgpXG4gIHZhciBjaGFyXG5cbiAgZW5kID0gZW5kID09PSAtMSA/IHZhbHVlLmxlbmd0aCA6IGVuZFxuXG4gIHdoaWxlICgrK3N0YXJ0IDwgZW5kKSB7XG4gICAgY2hhciA9IHZhbHVlLmNoYXJBdChzdGFydClcblxuICAgIGlmIChcbiAgICAgIGNoYXIgIT09IGNvbG9uICYmXG4gICAgICBjaGFyICE9PSBkYXNoICYmXG4gICAgICBjaGFyICE9PSBzcGFjZSAmJlxuICAgICAgY2hhciAhPT0gdmVydGljYWxCYXJcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbi8vIENoZWNrIGlmIGBub2RlYCBpcyBhIHRleHQgbm9kZS5cbmZ1bmN0aW9uIHRleHQobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiBub2RlLnR5cGUgPT09ICd0ZXh0J1xufVxuXG4vLyBDaGVjayBpZiBgdmFsdWVgIGVuZHMgaW4gYSBwcm90b2NvbC5cbmZ1bmN0aW9uIHByb3RvY29sKHZhbHVlKSB7XG4gIHZhciB2YWwgPSB2YWx1ZS5zbGljZSgtNikudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gdmFsID09PSBtYWlsdG8gfHwgdmFsLnNsaWNlKC01KSA9PT0gaHR0cHMgfHwgdmFsLnNsaWNlKC00KSA9PT0gaHR0cFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYWxsXG5cbi8vIFZpc2l0IGFsbCBjaGlsZHJlbiBvZiBgcGFyZW50YC5cbmZ1bmN0aW9uIGFsbChwYXJlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciByZXN1bHRzID0gW11cbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdHNbaW5kZXhdID0gc2VsZi52aXNpdChjaGlsZHJlbltpbmRleF0sIHBhcmVudClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja1xuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xuXG52YXIgYmxhbmsgPSBsaW5lRmVlZCArIGxpbmVGZWVkXG52YXIgdHJpcGxlID0gYmxhbmsgKyBsaW5lRmVlZFxudmFyIGNvbW1lbnQgPSBibGFuayArICc8IS0tLS0+JyArIGJsYW5rXG5cbi8vIFN0cmluZ2lmeSBhIGJsb2NrIG5vZGUgd2l0aCBibG9jayBjaGlsZHJlbiAoZS5nLiwgYHJvb3RgIG9yIGBibG9ja3F1b3RlYCkuXG4vLyBLbm93cyBhYm91dCBjb2RlIGZvbGxvd2luZyBhIGxpc3QsIG9yIGFkamFjZW50IGxpc3RzIHdpdGggc2ltaWxhciBidWxsZXRzLFxuLy8gYW5kIHBsYWNlcyBhbiBleHRyYSBsaW5lIGZlZWQgYmV0d2VlbiB0aGVtLlxuZnVuY3Rpb24gYmxvY2sobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG9wdGlvbnMgPSBzZWxmLm9wdGlvbnNcbiAgdmFyIGZlbmNlcyA9IG9wdGlvbnMuZmVuY2VzXG4gIHZhciBnYXAgPSBvcHRpb25zLmNvbW1vbm1hcmsgPyBjb21tZW50IDogdHJpcGxlXG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHByZXZcbiAgdmFyIGNoaWxkXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBwcmV2ID0gY2hpbGRcbiAgICBjaGlsZCA9IGNoaWxkcmVuW2luZGV4XVxuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIC8vIEEgbGlzdCBwcmVjZWRpbmcgYW5vdGhlciBsaXN0IHRoYXQgYXJlIGVxdWFsbHkgb3JkZXJlZCwgb3IgYVxuICAgICAgLy8gbGlzdCBwcmVjZWRpbmcgYW4gaW5kZW50ZWQgY29kZSBibG9jaywgbmVlZCBhIGdhcCBiZXR3ZWVuIHRoZW0sXG4gICAgICAvLyBzbyBhcyBub3QgdG8gc2VlIHRoZW0gYXMgb25lIGxpc3QsIG9yIGNvbnRlbnQgb2YgdGhlIGxpc3QsXG4gICAgICAvLyByZXNwZWN0aXZlbHkuXG4gICAgICAvL1xuICAgICAgLy8gSW4gY29tbW9ubWFyaywgb25seSBzb21ldGhpbmcgdGhhdCBicmVha3MgYm90aCB1cCBjYW4gZG8gdGhhdCxcbiAgICAgIC8vIHNvIHdlIG9wdCBmb3IgYW4gZW1wdHksIGludmlzaWJsZSBjb21tZW50LiAgSW4gb3RoZXIgZmxhdm91cnMsXG4gICAgICAvLyB0d28gYmxhbmsgbGluZXMgYXJlIGZpbmUuXG4gICAgICBpZiAoXG4gICAgICAgIHByZXYudHlwZSA9PT0gJ2xpc3QnICYmXG4gICAgICAgICgoY2hpbGQudHlwZSA9PT0gJ2xpc3QnICYmIHByZXYub3JkZXJlZCA9PT0gY2hpbGQub3JkZXJlZCkgfHxcbiAgICAgICAgICAoY2hpbGQudHlwZSA9PT0gJ2NvZGUnICYmICFjaGlsZC5sYW5nICYmICFmZW5jZXMpKVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGdhcClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGJsYW5rKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlcy5wdXNoKHNlbGYudmlzaXQoY2hpbGQsIG5vZGUpKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKCcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb21wYWN0ID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1jb21wYWN0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjb21waWxlXG5cbi8vIFN0cmluZ2lmeSB0aGUgZ2l2ZW4gdHJlZS5cbmZ1bmN0aW9uIGNvbXBpbGUoKSB7XG4gIHJldHVybiB0aGlzLnZpc2l0KGNvbXBhY3QodGhpcy50cmVlLCB0aGlzLm9wdGlvbnMuY29tbW9ubWFyaykpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBvbmVcblxuZnVuY3Rpb24gb25lKG5vZGUsIHBhcmVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHZpc2l0b3JzID0gc2VsZi52aXNpdG9yc1xuXG4gIC8vIEZhaWwgb24gdW5rbm93biBub2Rlcy5cbiAgaWYgKHR5cGVvZiB2aXNpdG9yc1tub2RlLnR5cGVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgc2VsZi5maWxlLmZhaWwoXG4gICAgICBuZXcgRXJyb3IoXG4gICAgICAgICdNaXNzaW5nIGNvbXBpbGVyIGZvciBub2RlIG9mIHR5cGUgYCcgKyBub2RlLnR5cGUgKyAnYDogYCcgKyBub2RlICsgJ2AnXG4gICAgICApLFxuICAgICAgbm9kZVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB2aXNpdG9yc1tub2RlLnR5cGVdLmNhbGwoc2VsZiwgbm9kZSwgcGFyZW50KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gb3JkZXJlZEl0ZW1zXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgZG90ID0gJy4nXG5cbnZhciBibGFuayA9IGxpbmVGZWVkICsgbGluZUZlZWRcblxuLy8gVmlzaXQgb3JkZXJlZCBsaXN0IGl0ZW1zLlxuLy9cbi8vIFN0YXJ0cyB0aGUgbGlzdCB3aXRoXG4vLyBgbm9kZS5zdGFydGAgYW5kIGluY3JlbWVudHMgZWFjaCBmb2xsb3dpbmcgbGlzdCBpdGVtXG4vLyBidWxsZXQgYnkgb25lOlxuLy9cbi8vICAgICAyLiBmb29cbi8vICAgICAzLiBiYXJcbi8vXG4vLyBJbiBgaW5jcmVtZW50TGlzdE1hcmtlcjogZmFsc2VgIG1vZGUsIGRvZXMgbm90IGluY3JlbWVudFxuLy8gZWFjaCBtYXJrZXIgYW5kIHN0YXlzIG9uIGBub2RlLnN0YXJ0YDpcbi8vXG4vLyAgICAgMS4gZm9vXG4vLyAgICAgMS4gYmFyXG5mdW5jdGlvbiBvcmRlcmVkSXRlbXMobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGZuID0gc2VsZi52aXNpdG9ycy5saXN0SXRlbVxuICB2YXIgaW5jcmVtZW50ID0gc2VsZi5vcHRpb25zLmluY3JlbWVudExpc3RNYXJrZXJcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBzdGFydCA9IG5vZGUuc3RhcnRcbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBidWxsZXRcblxuICBzdGFydCA9IHN0YXJ0ID09IG51bGwgPyAxIDogc3RhcnRcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGJ1bGxldCA9IChpbmNyZW1lbnQgPyBzdGFydCArIGluZGV4IDogc3RhcnQpICsgZG90XG4gICAgdmFsdWVzW2luZGV4XSA9IGZuLmNhbGwoc2VsZiwgY2hpbGRyZW5baW5kZXhdLCBub2RlLCBpbmRleCwgYnVsbGV0KVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKG5vZGUuc3ByZWFkID8gYmxhbmsgOiBsaW5lRmVlZClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVub3JkZXJlZEl0ZW1zXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG5cbnZhciBibGFuayA9IGxpbmVGZWVkICsgbGluZUZlZWRcblxuLy8gVmlzaXQgdW5vcmRlcmVkIGxpc3QgaXRlbXMuICBVc2VzIGBvcHRpb25zLmJ1bGxldGAgYXMgZWFjaCBpdGVt4oCZcyBidWxsZXQuXG5mdW5jdGlvbiB1bm9yZGVyZWRJdGVtcyhub2RlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgYnVsbGV0ID0gc2VsZi5vcHRpb25zLmJ1bGxldFxuICB2YXIgZm4gPSBzZWxmLnZpc2l0b3JzLmxpc3RJdGVtXG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgdmFsdWVzID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlc1tpbmRleF0gPSBmbi5jYWxsKHNlbGYsIGNoaWxkcmVuW2luZGV4XSwgbm9kZSwgaW5kZXgsIGJ1bGxldClcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihub2RlLnNwcmVhZCA/IGJsYW5rIDogbGluZUZlZWQpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGVuY29kZSA9IHJlcXVpcmUoJ3N0cmluZ2lmeS1lbnRpdGllcycpXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJylcbnZhciBlc2NhcGVGYWN0b3J5ID0gcmVxdWlyZSgnLi9lc2NhcGUnKVxudmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi91dGlsL2lkZW50aXR5JylcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRPcHRpb25zXG5cbi8vIE1hcCBvZiBhcHBsaWNhYmxlIGVudW1zLlxudmFyIG1hcHMgPSB7XG4gIGVudGl0aWVzOiB7dHJ1ZTogdHJ1ZSwgZmFsc2U6IHRydWUsIG51bWJlcnM6IHRydWUsIGVzY2FwZTogdHJ1ZX0sXG4gIGJ1bGxldDogeycqJzogdHJ1ZSwgJy0nOiB0cnVlLCAnKyc6IHRydWV9LFxuICBydWxlOiB7Jy0nOiB0cnVlLCBfOiB0cnVlLCAnKic6IHRydWV9LFxuICBsaXN0SXRlbUluZGVudDoge3RhYjogdHJ1ZSwgbWl4ZWQ6IHRydWUsIDE6IHRydWV9LFxuICBlbXBoYXNpczoge186IHRydWUsICcqJzogdHJ1ZX0sXG4gIHN0cm9uZzoge186IHRydWUsICcqJzogdHJ1ZX0sXG4gIGZlbmNlOiB7J2AnOiB0cnVlLCAnfic6IHRydWV9XG59XG5cbi8vIEV4cG9zZSBgdmFsaWRhdGVgLlxudmFyIHZhbGlkYXRlID0ge1xuICBib29sZWFuOiB2YWxpZGF0ZUJvb2xlYW4sXG4gIHN0cmluZzogdmFsaWRhdGVTdHJpbmcsXG4gIG51bWJlcjogdmFsaWRhdGVOdW1iZXIsXG4gIGZ1bmN0aW9uOiB2YWxpZGF0ZUZ1bmN0aW9uXG59XG5cbi8vIFNldCBvcHRpb25zLiAgRG9lcyBub3Qgb3ZlcndyaXRlIHByZXZpb3VzbHkgc2V0IG9wdGlvbnMuXG5mdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjdXJyZW50ID0gc2VsZi5vcHRpb25zXG4gIHZhciBydWxlUmVwZXRpdGlvblxuICB2YXIga2V5XG5cbiAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB4dGVuZChvcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSBgJyArIG9wdGlvbnMgKyAnYCBmb3Igc2V0dGluZyBgb3B0aW9uc2AnKVxuICB9XG5cbiAgZm9yIChrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICB2YWxpZGF0ZVt0eXBlb2YgZGVmYXVsdHNba2V5XV0ob3B0aW9ucywga2V5LCBjdXJyZW50W2tleV0sIG1hcHNba2V5XSlcbiAgfVxuXG4gIHJ1bGVSZXBldGl0aW9uID0gb3B0aW9ucy5ydWxlUmVwZXRpdGlvblxuXG4gIGlmIChydWxlUmVwZXRpdGlvbiAmJiBydWxlUmVwZXRpdGlvbiA8IDMpIHtcbiAgICByYWlzZShydWxlUmVwZXRpdGlvbiwgJ29wdGlvbnMucnVsZVJlcGV0aXRpb24nKVxuICB9XG5cbiAgc2VsZi5lbmNvZGUgPSBlbmNvZGVGYWN0b3J5KFN0cmluZyhvcHRpb25zLmVudGl0aWVzKSlcbiAgc2VsZi5lc2NhcGUgPSBlc2NhcGVGYWN0b3J5KG9wdGlvbnMpXG5cbiAgc2VsZi5vcHRpb25zID0gb3B0aW9uc1xuXG4gIHJldHVybiBzZWxmXG59XG5cbi8vIFZhbGlkYXRlIGEgdmFsdWUgdG8gYmUgYm9vbGVhbi4gRGVmYXVsdHMgdG8gYGRlZmAuICBSYWlzZXMgYW4gZXhjZXB0aW9uIHdpdGhcbi8vIGBjb250ZXh0W25hbWVdYCB3aGVuIG5vdCBhIGJvb2xlYW4uXG5mdW5jdGlvbiB2YWxpZGF0ZUJvb2xlYW4oY29udGV4dCwgbmFtZSwgZGVmKSB7XG4gIHZhciB2YWx1ZSA9IGNvbnRleHRbbmFtZV1cblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHZhbHVlID0gZGVmXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpIHtcbiAgICByYWlzZSh2YWx1ZSwgJ29wdGlvbnMuJyArIG5hbWUpXG4gIH1cblxuICBjb250ZXh0W25hbWVdID0gdmFsdWVcbn1cblxuLy8gVmFsaWRhdGUgYSB2YWx1ZSB0byBiZSBib29sZWFuLiBEZWZhdWx0cyB0byBgZGVmYC4gIFJhaXNlcyBhbiBleGNlcHRpb24gd2l0aFxuLy8gYGNvbnRleHRbbmFtZV1gIHdoZW4gbm90IGEgYm9vbGVhbi5cbmZ1bmN0aW9uIHZhbGlkYXRlTnVtYmVyKGNvbnRleHQsIG5hbWUsIGRlZikge1xuICB2YXIgdmFsdWUgPSBjb250ZXh0W25hbWVdXG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB2YWx1ZSA9IGRlZlxuICB9XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgIHJhaXNlKHZhbHVlLCAnb3B0aW9ucy4nICsgbmFtZSlcbiAgfVxuXG4gIGNvbnRleHRbbmFtZV0gPSB2YWx1ZVxufVxuXG4vLyBWYWxpZGF0ZSBhIHZhbHVlIHRvIGJlIGluIGBtYXBgLiBEZWZhdWx0cyB0byBgZGVmYC4gIFJhaXNlcyBhbiBleGNlcHRpb25cbi8vIHdpdGggYGNvbnRleHRbbmFtZV1gIHdoZW4gbm90IGluIGBtYXBgLlxuZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoY29udGV4dCwgbmFtZSwgZGVmLCBtYXApIHtcbiAgdmFyIHZhbHVlID0gY29udGV4dFtuYW1lXVxuXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdmFsdWUgPSBkZWZcbiAgfVxuXG4gIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuXG4gIGlmICghKHZhbHVlIGluIG1hcCkpIHtcbiAgICByYWlzZSh2YWx1ZSwgJ29wdGlvbnMuJyArIG5hbWUpXG4gIH1cblxuICBjb250ZXh0W25hbWVdID0gdmFsdWVcbn1cblxuLy8gVmFsaWRhdGUgYSB2YWx1ZSB0byBiZSBmdW5jdGlvbi4gRGVmYXVsdHMgdG8gYGRlZmAuICBSYWlzZXMgYW4gZXhjZXB0aW9uXG4vLyB3aXRoIGBjb250ZXh0W25hbWVdYCB3aGVuIG5vdCBhIGZ1bmN0aW9uLlxuZnVuY3Rpb24gdmFsaWRhdGVGdW5jdGlvbihjb250ZXh0LCBuYW1lLCBkZWYpIHtcbiAgdmFyIHZhbHVlID0gY29udGV4dFtuYW1lXVxuXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdmFsdWUgPSBkZWZcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICByYWlzZSh2YWx1ZSwgJ29wdGlvbnMuJyArIG5hbWUpXG4gIH1cblxuICBjb250ZXh0W25hbWVdID0gdmFsdWVcbn1cblxuLy8gRmFjdG9yeSB0byBlbmNvZGUgSFRNTCBlbnRpdGllcy4gIENyZWF0ZXMgYSBuby1vcGVyYXRpb24gZnVuY3Rpb24gd2hlblxuLy8gYHR5cGVgIGlzIGAnZmFsc2UnYCwgYSBmdW5jdGlvbiB3aGljaCBlbmNvZGVzIHVzaW5nIG5hbWVkIHJlZmVyZW5jZXMgd2hlblxuLy8gYHR5cGVgIGlzIGAndHJ1ZSdgLCBhbmQgYSBmdW5jdGlvbiB3aGljaCBlbmNvZGVzIHVzaW5nIG51bWJlcmVkIHJlZmVyZW5jZXNcbi8vIHdoZW4gYHR5cGVgIGlzIGAnbnVtYmVycydgLlxuZnVuY3Rpb24gZW5jb2RlRmFjdG9yeSh0eXBlKSB7XG4gIHZhciBvcHRpb25zID0ge31cblxuICBpZiAodHlwZSA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBpZGVudGl0eVxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICd0cnVlJykge1xuICAgIG9wdGlvbnMudXNlTmFtZWRSZWZlcmVuY2VzID0gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdlc2NhcGUnKSB7XG4gICAgb3B0aW9ucy5lc2NhcGVPbmx5ID0gdHJ1ZVxuICAgIG9wdGlvbnMudXNlTmFtZWRSZWZlcmVuY2VzID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIHdyYXBwZWRcblxuICAvLyBFbmNvZGUgSFRNTCBlbnRpdGllcyB1c2luZyB0aGUgYm91bmQgb3B0aW9ucy5cbiAgZnVuY3Rpb24gd3JhcHBlZCh2YWx1ZSkge1xuICAgIHJldHVybiBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXG4gIH1cbn1cblxuLy8gVGhyb3cgYW4gZXhjZXB0aW9uIHdpdGggaW4gaXRzIGBtZXNzYWdlYCBgdmFsdWVgIGFuZCBgbmFtZWAuXG5mdW5jdGlvbiByYWlzZSh2YWx1ZSwgbmFtZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWUgYCcgKyB2YWx1ZSArICdgIGZvciBzZXR0aW5nIGAnICsgbmFtZSArICdgJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZW50aXR5UHJlZml4TGVuZ3RoID0gcmVxdWlyZSgnLi9lbnRpdHktcHJlZml4LWxlbmd0aCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY29weVxuXG52YXIgYW1wZXJzYW5kID0gJyYnXG5cbnZhciBwdW5jdHVhdGlvbkV4cHByZXNpb24gPSAvWy0hXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX5fXS9cblxuLy8gRm9yIHNob3J0Y3V0IGFuZCBjb2xsYXBzZWQgcmVmZXJlbmNlIGxpbmtzLCB0aGUgY29udGVudHMgaXMgYWxzbyBhblxuLy8gaWRlbnRpZmllciwgc28gd2UgbmVlZCB0byByZXN0b3JlIHRoZSBvcmlnaW5hbCBlbmNvZGluZyBhbmQgZXNjYXBpbmdcbi8vIHRoYXQgd2VyZSBwcmVzZW50IGluIHRoZSBzb3VyY2Ugc3RyaW5nLlxuLy9cbi8vIFRoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIHVuZXNjYXBlZCAmIHVuZW5jb2RlZCB2YWx1ZSBmcm9tIHNob3J0Y3V04oCZc1xuLy8gY2hpbGQgbm9kZXMgYW5kIHRoZSBpZGVudGlmaWVyIGFuZCBlbmNvZGVzIHRoZSBmb3JtZXIgYWNjb3JkaW5nIHRvXG4vLyB0aGUgbGF0dGVyLlxuZnVuY3Rpb24gY29weSh2YWx1ZSwgaWRlbnRpZmllcikge1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBjb3VudCA9IGlkZW50aWZpZXIubGVuZ3RoXG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgcG9zaXRpb24gPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHN0YXJ0XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgLy8gVGFrZSBuZXh0IG5vbi1wdW5jdHVhdGlvbiBjaGFyYWN0ZXJzIGZyb20gYHZhbHVlYC5cbiAgICBzdGFydCA9IGluZGV4XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGggJiYgIXB1bmN0dWF0aW9uRXhwcHJlc2lvbi50ZXN0KHZhbHVlLmNoYXJBdChpbmRleCkpKSB7XG4gICAgICBpbmRleCArPSAxXG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2godmFsdWUuc2xpY2Uoc3RhcnQsIGluZGV4KSlcblxuICAgIC8vIEFkdmFuY2UgYHBvc2l0aW9uYCB0byB0aGUgbmV4dCBwdW5jdHVhdGlvbiBjaGFyYWN0ZXIuXG4gICAgd2hpbGUgKFxuICAgICAgcG9zaXRpb24gPCBjb3VudCAmJlxuICAgICAgIXB1bmN0dWF0aW9uRXhwcHJlc2lvbi50ZXN0KGlkZW50aWZpZXIuY2hhckF0KHBvc2l0aW9uKSlcbiAgICApIHtcbiAgICAgIHBvc2l0aW9uICs9IDFcbiAgICB9XG5cbiAgICAvLyBUYWtlIG5leHQgcHVuY3R1YXRpb24gY2hhcmFjdGVycyBmcm9tIGBpZGVudGlmaWVyYC5cbiAgICBzdGFydCA9IHBvc2l0aW9uXG5cbiAgICB3aGlsZSAoXG4gICAgICBwb3NpdGlvbiA8IGNvdW50ICYmXG4gICAgICBwdW5jdHVhdGlvbkV4cHByZXNpb24udGVzdChpZGVudGlmaWVyLmNoYXJBdChwb3NpdGlvbikpXG4gICAgKSB7XG4gICAgICBpZiAoaWRlbnRpZmllci5jaGFyQXQocG9zaXRpb24pID09PSBhbXBlcnNhbmQpIHtcbiAgICAgICAgcG9zaXRpb24gKz0gZW50aXR5UHJlZml4TGVuZ3RoKGlkZW50aWZpZXIuc2xpY2UocG9zaXRpb24pKVxuICAgICAgfVxuXG4gICAgICBwb3NpdGlvbiArPSAxXG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2goaWRlbnRpZmllci5zbGljZShzdGFydCwgcG9zaXRpb24pKVxuXG4gICAgLy8gQWR2YW5jZSBgaW5kZXhgIHRvIHRoZSBuZXh0IG5vbi1wdW5jdHVhdGlvbiBjaGFyYWN0ZXIuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoICYmIHB1bmN0dWF0aW9uRXhwcHJlc2lvbi50ZXN0KHZhbHVlLmNoYXJBdChpbmRleCkpKSB7XG4gICAgICBpbmRleCArPSAxXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZW5jbG9zZVxuXG52YXIgcXVvdGF0aW9uTWFyayA9ICdcIidcbnZhciBhcG9zdHJvcGhlID0gXCInXCJcblxuLy8gVGhlcmUgaXMgY3VycmVudGx5IG5vIHdheSB0byBzdXBwb3J0IG5lc3RlZCBkZWxpbWl0ZXJzIGFjcm9zcyBNYXJrZG93bi5wbCxcbi8vIENvbW1vbk1hcmssIGFuZCBHaXRIdWIgKFJlZENhcnBldCkuICBUaGUgZm9sbG93aW5nIGNvZGUgc3VwcG9ydHMgTWFya2Rvd24ucGxcbi8vIGFuZCBHaXRIdWIuXG4vLyBDb21tb25NYXJrIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiBtaXhpbmcgZG91YmxlLSBhbmQgc2luZ2xlIHF1b3RlcyBpbnNpZGUgYVxuLy8gdGl0bGUuXG5mdW5jdGlvbiBlbmNsb3NlKHRpdGxlKSB7XG4gIHZhciBkZWxpbWl0ZXIgPVxuICAgIHRpdGxlLmluZGV4T2YocXVvdGF0aW9uTWFyaykgPT09IC0xID8gcXVvdGF0aW9uTWFyayA6IGFwb3N0cm9waGVcbiAgcmV0dXJuIGRlbGltaXRlciArIHRpdGxlICsgZGVsaW1pdGVyXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNvdW50ID0gcmVxdWlyZSgnY2NvdW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBlbmNsb3NlXG5cbnZhciBsZWZ0UGFyZW50aGVzaXMgPSAnKCdcbnZhciByaWdodFBhcmVudGhlc2lzID0gJyknXG52YXIgbGVzc1RoYW4gPSAnPCdcbnZhciBncmVhdGVyVGhhbiA9ICc+J1xuXG52YXIgZXhwcmVzc2lvbiA9IC9cXHMvXG5cbi8vIFdyYXAgYHVybGAgaW4gYW5nbGUgYnJhY2tldHMgd2hlbiBuZWVkZWQsIG9yIHdoZW5cbi8vIGZvcmNlZC5cbi8vIEluIGxpbmtzLCBpbWFnZXMsIGFuZCBkZWZpbml0aW9ucywgdGhlIFVSTCBwYXJ0IG5lZWRzXG4vLyB0byBiZSBlbmNsb3NlZCB3aGVuIGl0OlxuLy9cbi8vIC0gaGFzIGEgbGVuZ3RoIG9mIGAwYFxuLy8gLSBjb250YWlucyB3aGl0ZS1zcGFjZVxuLy8gLSBoYXMgbW9yZSBvciBsZXNzIG9wZW5pbmcgdGhhbiBjbG9zaW5nIHBhcmVudGhlc2VzXG5mdW5jdGlvbiBlbmNsb3NlKHVyaSwgYWx3YXlzKSB7XG4gIGlmIChcbiAgICBhbHdheXMgfHxcbiAgICB1cmkubGVuZ3RoID09PSAwIHx8XG4gICAgZXhwcmVzc2lvbi50ZXN0KHVyaSkgfHxcbiAgICBjb3VudCh1cmksIGxlZnRQYXJlbnRoZXNpcykgIT09IGNvdW50KHVyaSwgcmlnaHRQYXJlbnRoZXNpcylcbiAgKSB7XG4gICAgcmV0dXJuIGxlc3NUaGFuICsgdXJpICsgZ3JlYXRlclRoYW5cbiAgfVxuXG4gIHJldHVybiB1cmlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JylcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRlclxuXG4vLyBTaG9ydGN1dCBhbmQgY29sbGFwc2VkIGxpbmsgcmVmZXJlbmNlcyBuZWVkIG5vIGVzY2FwaW5nIGFuZCBlbmNvZGluZyBkdXJpbmdcbi8vIHRoZSBwcm9jZXNzaW5nIG9mIGNoaWxkIG5vZGVzIChpdCBtdXN0IGJlIGltcGxpZWQgZnJvbSBpZGVudGlmaWVyKS5cbi8vXG4vLyBUaGlzIHRvZ2dsZXIgdHVybnMgZW5jb2RpbmcgYW5kIGVzY2FwaW5nIG9mZiBmb3Igc2hvcnRjdXQgYW5kIGNvbGxhcHNlZFxuLy8gcmVmZXJlbmNlcy5cbi8vXG4vLyBJbXBsaWVzIGBlbnRlckxpbmtgLlxuZnVuY3Rpb24gZW50ZXIoY29tcGlsZXIsIG5vZGUpIHtcbiAgdmFyIGVuY29kZSA9IGNvbXBpbGVyLmVuY29kZVxuICB2YXIgZXNjYXBlID0gY29tcGlsZXIuZXNjYXBlXG4gIHZhciBleGl0TGluayA9IGNvbXBpbGVyLmVudGVyTGluaygpXG5cbiAgaWYgKG5vZGUucmVmZXJlbmNlVHlwZSAhPT0gJ3Nob3J0Y3V0JyAmJiBub2RlLnJlZmVyZW5jZVR5cGUgIT09ICdjb2xsYXBzZWQnKSB7XG4gICAgcmV0dXJuIGV4aXRMaW5rXG4gIH1cblxuICBjb21waWxlci5lc2NhcGUgPSBpZGVudGl0eVxuICBjb21waWxlci5lbmNvZGUgPSBpZGVudGl0eVxuXG4gIHJldHVybiBleGl0XG5cbiAgZnVuY3Rpb24gZXhpdCgpIHtcbiAgICBjb21waWxlci5lbmNvZGUgPSBlbmNvZGVcbiAgICBjb21waWxlci5lc2NhcGUgPSBlc2NhcGVcbiAgICBleGl0TGluaygpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxlbmd0aFxuXG52YXIgYW1wZXJzYW5kID0gJyYnXG5cbi8vIFJldHVybnMgdGhlIGxlbmd0aCBvZiBIVE1MIGVudGl0eSB0aGF0IGlzIGEgcHJlZml4IG9mIHRoZSBnaXZlbiBzdHJpbmdcbi8vIChleGNsdWRpbmcgdGhlIGFtcGVyc2FuZCksIDAgaWYgaXQgZG9lcyBub3Qgc3RhcnQgd2l0aCBhbiBlbnRpdHkuXG5mdW5jdGlvbiBsZW5ndGgodmFsdWUpIHtcbiAgdmFyIHByZWZpeFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIEN1cnJlbnRseSBhbHNvIHRlc3RlZCBmb3IgYXQgaW1wbGVtZW50aW9uLCBidXQgd2VcbiAgICoga2VlcCBpdCBoZXJlIGJlY2F1c2UgdGhhdOKAmXMgcHJvcGVyLiAqL1xuICBpZiAodmFsdWUuY2hhckF0KDApICE9PSBhbXBlcnNhbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcHJlZml4ID0gdmFsdWUuc3BsaXQoYW1wZXJzYW5kLCAyKS5qb2luKGFtcGVyc2FuZClcblxuICByZXR1cm4gcHJlZml4Lmxlbmd0aCAtIGRlY29kZShwcmVmaXgpLmxlbmd0aFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHlcblxuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsYWJlbFxuXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcblxudmFyIHNob3J0Y3V0ID0gJ3Nob3J0Y3V0J1xudmFyIGNvbGxhcHNlZCA9ICdjb2xsYXBzZWQnXG5cbi8vIFN0cmluZ2lmeSBhIHJlZmVyZW5jZSBsYWJlbC5cbi8vIEJlY2F1c2UgbGluayByZWZlcmVuY2VzIGFyZSBlYXNpbHksIG1pc3Rha2luZ2x5LCBjcmVhdGVkIChmb3IgZXhhbXBsZSxcbi8vIGBbZm9vXWApLCByZWZlcmVuY2Ugbm9kZXMgaGF2ZSBhbiBleHRyYSBwcm9wZXJ0eSBkZXBpY3RpbmcgaG93IGl0IGxvb2tlZCBpblxuLy8gdGhlIG9yaWdpbmFsIGRvY3VtZW50LCBzbyBzdHJpbmdpZmljYXRpb24gY2FuIGNhdXNlIG1pbmltYWwgY2hhbmdlcy5cbmZ1bmN0aW9uIGxhYmVsKG5vZGUpIHtcbiAgdmFyIHR5cGUgPSBub2RlLnJlZmVyZW5jZVR5cGVcblxuICBpZiAodHlwZSA9PT0gc2hvcnRjdXQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgbGVmdFNxdWFyZUJyYWNrZXQgK1xuICAgICh0eXBlID09PSBjb2xsYXBzZWQgPyAnJyA6IG5vZGUubGFiZWwgfHwgbm9kZS5pZGVudGlmaWVyKSArXG4gICAgcmlnaHRTcXVhcmVCcmFja2V0XG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbm1vZHVsZS5leHBvcnRzID0gcGFkXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcblxudmFyIHRhYlNpemUgPSA0XG5cbi8vIFBhZCBgdmFsdWVgIHdpdGggYGxldmVsICogdGFiU2l6ZWAgc3BhY2VzLiAgUmVzcGVjdHMgbGluZXMuICBJZ25vcmVzIGVtcHR5XG4vLyBsaW5lcy5cbmZ1bmN0aW9uIHBhZCh2YWx1ZSwgbGV2ZWwpIHtcbiAgdmFyIHZhbHVlcyA9IHZhbHVlLnNwbGl0KGxpbmVGZWVkKVxuICB2YXIgaW5kZXggPSB2YWx1ZXMubGVuZ3RoXG4gIHZhciBwYWRkaW5nID0gcmVwZWF0KHNwYWNlLCBsZXZlbCAqIHRhYlNpemUpXG5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICBpZiAodmFsdWVzW2luZGV4XS5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhbHVlc1tpbmRleF0gPSBwYWRkaW5nICsgdmFsdWVzW2luZGV4XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihsaW5lRmVlZClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrcXVvdGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGdyZWF0ZXJUaGFuID0gJz4nXG5cbmZ1bmN0aW9uIGJsb2NrcXVvdGUobm9kZSkge1xuICB2YXIgdmFsdWVzID0gdGhpcy5ibG9jayhub2RlKS5zcGxpdChsaW5lRmVlZClcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciB2YWx1ZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdXG4gICAgcmVzdWx0W2luZGV4XSA9ICh2YWx1ZSA/IHNwYWNlIDogJycpICsgdmFsdWVcbiAgfVxuXG4gIHJldHVybiBncmVhdGVyVGhhbiArIHJlc3VsdC5qb2luKGxpbmVGZWVkICsgZ3JlYXRlclRoYW4pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsaW5lQnJlYWtcblxudmFyIGJhY2tzbGFzaCA9ICdcXFxcJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xuXG52YXIgY29tbW9ubWFyayA9IGJhY2tzbGFzaCArIGxpbmVGZWVkXG52YXIgbm9ybWFsID0gc3BhY2UgKyBzcGFjZSArIGxpbmVGZWVkXG5cbmZ1bmN0aW9uIGxpbmVCcmVhaygpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb21tb25tYXJrID8gY29tbW9ubWFyayA6IG5vcm1hbFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzdHJlYWsgPSByZXF1aXJlKCdsb25nZXN0LXN0cmVhaycpXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgcGFkID0gcmVxdWlyZSgnLi4vdXRpbC9wYWQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGVcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIHRpbGRlID0gJ34nXG52YXIgZ3JhdmVBY2NlbnQgPSAnYCdcblxuLy8gU3RyaW5naWZ5IGNvZGUuXG4vLyBDcmVhdGVzIGluZGVudGVkIGNvZGUgd2hlbjpcbi8vXG4vLyAtIE5vIGxhbmd1YWdlIHRhZyBleGlzdHNcbi8vIC0gTm90IGluIGBmZW5jZXM6IHRydWVgIG1vZGVcbi8vIC0gQSBub24tZW1wdHkgdmFsdWUgZXhpc3RzXG4vL1xuLy8gT3RoZXJ3aXNlLCBHRk0gZmVuY2VkIGNvZGUgaXMgY3JlYXRlZDpcbi8vXG4vLyBgYGBgbWFya2Rvd25cbi8vIGBgYGpzXG4vLyBmb28oKTtcbi8vIGBgYFxuLy8gYGBgYFxuLy9cbi8vIFdoZW4gaW4gYGBmZW5jZTogYH5gIGBgIG1vZGUsIHVzZXMgdGlsZGVzIGFzIGZlbmNlczpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gfn5+anNcbi8vIGZvbygpO1xuLy8gfn5+XG4vLyBgYGBcbi8vXG4vLyBLbm93cyBhYm91dCBpbnRlcm5hbCBmZW5jZXM6XG4vL1xuLy8gYGBgYGBtYXJrZG93blxuLy8gYGBgYG1hcmtkb3duXG4vLyBgYGBqYXZhc2NyaXB0XG4vLyBmb28oKTtcbi8vIGBgYFxuLy8gYGBgYFxuLy8gYGBgYGBcbmZ1bmN0aW9uIGNvZGUobm9kZSwgcGFyZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlXG4gIHZhciBvcHRpb25zID0gc2VsZi5vcHRpb25zXG4gIHZhciBtYXJrZXIgPSBvcHRpb25zLmZlbmNlXG4gIHZhciBpbmZvID0gbm9kZS5sYW5nIHx8ICcnXG4gIHZhciBmZW5jZVxuXG4gIGlmIChpbmZvICYmIG5vZGUubWV0YSkge1xuICAgIGluZm8gKz0gc3BhY2UgKyBub2RlLm1ldGFcbiAgfVxuXG4gIGluZm8gPSBzZWxmLmVuY29kZShzZWxmLmVzY2FwZShpbmZvLCBub2RlKSlcblxuICAvLyBXaXRob3V0IChuZWVkZWQpIGZlbmNlcy5cbiAgaWYgKFxuICAgICFpbmZvICYmXG4gICAgIW9wdGlvbnMuZmVuY2VzICYmXG4gICAgdmFsdWUgJiZcbiAgICB2YWx1ZS5jaGFyQXQoMCkgIT09IGxpbmVGZWVkICYmXG4gICAgdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpICE9PSBsaW5lRmVlZFxuICApIHtcbiAgICAvLyBUaHJvdyB3aGVuIHBlZGFudGljLCBpbiBhIGxpc3QgaXRlbSB3aGljaCBpc27igJl0IGNvbXBpbGVkIHVzaW5nIGEgdGFiLlxuICAgIGlmIChcbiAgICAgIHBhcmVudCAmJlxuICAgICAgcGFyZW50LnR5cGUgPT09ICdsaXN0SXRlbScgJiZcbiAgICAgIG9wdGlvbnMubGlzdEl0ZW1JbmRlbnQgIT09ICd0YWInICYmXG4gICAgICBvcHRpb25zLnBlZGFudGljXG4gICAgKSB7XG4gICAgICBzZWxmLmZpbGUuZmFpbChcbiAgICAgICAgJ0Nhbm5vdCBpbmRlbnQgY29kZSBwcm9wZXJseS4gU2VlIGh0dHBzOi8vZ2l0LmlvL2Z4S1I4JyxcbiAgICAgICAgbm9kZS5wb3NpdGlvblxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBwYWQodmFsdWUsIDEpXG4gIH1cblxuICAvLyBCYWNrdGlja3MgaW4gdGhlIGluZm8gc3RyaW5nIGRvbuKAmXQgd29yayB3aXRoIGJhY2t0aWNrIGZlbmNlZCBjb2RlLlxuICAvLyBCYWNrdGlja3MgKGFuZCB0aWxkZXMpIGFyZSBmaW5lIGluIHRpbGRlIGZlbmNlZCBjb2RlLlxuICBpZiAobWFya2VyID09PSBncmF2ZUFjY2VudCAmJiBpbmZvLmluZGV4T2YoZ3JhdmVBY2NlbnQpICE9PSAtMSkge1xuICAgIG1hcmtlciA9IHRpbGRlXG4gIH1cblxuICBmZW5jZSA9IHJlcGVhdChtYXJrZXIsIE1hdGgubWF4KHN0cmVhayh2YWx1ZSwgbWFya2VyKSArIDEsIDMpKVxuXG4gIHJldHVybiBmZW5jZSArIGluZm8gKyBsaW5lRmVlZCArIHZhbHVlICsgbGluZUZlZWQgKyBmZW5jZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1cmkgPSByZXF1aXJlKCcuLi91dGlsL2VuY2xvc2UtdXJpJylcbnZhciB0aXRsZSA9IHJlcXVpcmUoJy4uL3V0aWwvZW5jbG9zZS10aXRsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvblxuXG52YXIgc3BhY2UgPSAnICdcbnZhciBjb2xvbiA9ICc6J1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG5cbi8vIFN0cmluZ2lmeSBhbiBVUkwgZGVmaW5pdGlvbi5cbi8vXG4vLyBJcyBzbWFydCBhYm91dCBlbmNsb3NpbmcgYHVybGAgKHNlZSBgZW5jbG9zZVVSSSgpYCkgYW5kIGB0aXRsZWAgKHNlZVxuLy8gYGVuY2xvc2VUaXRsZSgpYCkuXG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIFtmb29dOiA8Zm9vIGF0IGJhciBkb3QgY29tPiAnQW4gXCJleGFtcGxlXCIgZS1tYWlsJ1xuLy8gYGBgXG5mdW5jdGlvbiBkZWZpbml0aW9uKG5vZGUpIHtcbiAgdmFyIGNvbnRlbnQgPSB1cmkobm9kZS51cmwpXG5cbiAgaWYgKG5vZGUudGl0bGUpIHtcbiAgICBjb250ZW50ICs9IHNwYWNlICsgdGl0bGUobm9kZS50aXRsZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgbGVmdFNxdWFyZUJyYWNrZXQgK1xuICAgIChub2RlLmxhYmVsIHx8IG5vZGUuaWRlbnRpZmllcikgK1xuICAgIHJpZ2h0U3F1YXJlQnJhY2tldCArXG4gICAgY29sb24gK1xuICAgIHNwYWNlICtcbiAgICBjb250ZW50XG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmlrZXRocm91Z2hcblxudmFyIHRpbGRlID0gJ34nXG5cbnZhciBmZW5jZSA9IHRpbGRlICsgdGlsZGVcblxuZnVuY3Rpb24gc3RyaWtldGhyb3VnaChub2RlKSB7XG4gIHJldHVybiBmZW5jZSArIHRoaXMuYWxsKG5vZGUpLmpvaW4oJycpICsgZmVuY2Vcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcGhhc2lzXG5cbnZhciB1bmRlcnNjb3JlID0gJ18nXG52YXIgYXN0ZXJpc2sgPSAnKidcblxuLy8gU3RyaW5naWZ5IGFuIGBlbXBoYXNpc2AuXG4vL1xuLy8gVGhlIG1hcmtlciB1c2VkIGlzIGNvbmZpZ3VyYWJsZSB0aHJvdWdoIGBlbXBoYXNpc2AsIHdoaWNoIGRlZmF1bHRzIHRvIGFuXG4vLyB1bmRlcnNjb3JlIChgJ18nYCkgYnV0IGFsc28gYWNjZXB0cyBhbiBhc3RlcmlzayAoYCcqJ2ApOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAqZm9vKlxuLy8gYGBgXG4vL1xuLy8gSW4gYHBlZGFudGljYCBtb2RlLCB0ZXh0IHdoaWNoIGl0c2VsZiBjb250YWlucyBhbiB1bmRlcnNjb3JlIHdpbGwgY2F1c2UgdGhlXG4vLyBtYXJrZXIgdG8gZGVmYXVsdCB0byBhbiBhc3RlcmlzayBpbnN0ZWFkOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAqZm9vX2Jhcipcbi8vIGBgYFxuZnVuY3Rpb24gZW1waGFzaXMobm9kZSkge1xuICB2YXIgbWFya2VyID0gdGhpcy5vcHRpb25zLmVtcGhhc2lzXG4gIHZhciBjb250ZW50ID0gdGhpcy5hbGwobm9kZSkuam9pbignJylcblxuICAvLyBXaGVuIGluIHBlZGFudGljIG1vZGUsIHByZXZlbnQgdXNpbmcgdW5kZXJzY29yZSBhcyB0aGUgbWFya2VyIHdoZW4gdGhlcmVcbiAgLy8gYXJlIHVuZGVyc2NvcmVzIGluIHRoZSBjb250ZW50LlxuICBpZiAoXG4gICAgdGhpcy5vcHRpb25zLnBlZGFudGljICYmXG4gICAgbWFya2VyID09PSB1bmRlcnNjb3JlICYmXG4gICAgY29udGVudC5pbmRleE9mKG1hcmtlcikgIT09IC0xXG4gICkge1xuICAgIG1hcmtlciA9IGFzdGVyaXNrXG4gIH1cblxuICByZXR1cm4gbWFya2VyICsgY29udGVudCArIG1hcmtlclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGNvbG9uID0gJzonXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcbnZhciBjYXJldCA9ICdeJ1xuXG52YXIgdGFiU2l6ZSA9IDRcbnZhciBibGFuayA9IGxpbmVGZWVkICsgbGluZUZlZWRcbnZhciBpbmRlbnQgPSByZXBlYXQoc3BhY2UsIHRhYlNpemUpXG5cbm1vZHVsZS5leHBvcnRzID0gZm9vdG5vdGVEZWZpbml0aW9uXG5cbmZ1bmN0aW9uIGZvb3Rub3RlRGVmaW5pdGlvbihub2RlKSB7XG4gIHZhciBjb250ZW50ID0gdGhpcy5hbGwobm9kZSkuam9pbihibGFuayArIGluZGVudClcblxuICByZXR1cm4gKFxuICAgIGxlZnRTcXVhcmVCcmFja2V0ICtcbiAgICBjYXJldCArXG4gICAgKG5vZGUubGFiZWwgfHwgbm9kZS5pZGVudGlmaWVyKSArXG4gICAgcmlnaHRTcXVhcmVCcmFja2V0ICtcbiAgICBjb2xvbiArXG4gICAgc3BhY2UgK1xuICAgIGNvbnRlbnRcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZm9vdG5vdGVSZWZlcmVuY2VcblxudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgY2FyZXQgPSAnXidcblxuZnVuY3Rpb24gZm9vdG5vdGVSZWZlcmVuY2Uobm9kZSkge1xuICByZXR1cm4gKFxuICAgIGxlZnRTcXVhcmVCcmFja2V0ICtcbiAgICBjYXJldCArXG4gICAgKG5vZGUubGFiZWwgfHwgbm9kZS5pZGVudGlmaWVyKSArXG4gICAgcmlnaHRTcXVhcmVCcmFja2V0XG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZvb3Rub3RlXG5cbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIGNhcmV0ID0gJ14nXG5cbmZ1bmN0aW9uIGZvb3Rub3RlKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICBsZWZ0U3F1YXJlQnJhY2tldCArIGNhcmV0ICsgdGhpcy5hbGwobm9kZSkuam9pbignJykgKyByaWdodFNxdWFyZUJyYWNrZXRcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSBoZWFkaW5nXG5cbnZhciBsaW5lRmVlZCA9ICdcXG4nXG52YXIgc3BhY2UgPSAnICdcbnZhciBudW1iZXJTaWduID0gJyMnXG52YXIgZGFzaCA9ICctJ1xudmFyIGVxdWFsc1RvID0gJz0nXG5cbi8vIFN0cmluZ2lmeSBhIGhlYWRpbmcuXG4vL1xuLy8gSW4gYHNldGV4dDogdHJ1ZWAgbW9kZSBhbmQgd2hlbiBgZGVwdGhgIGlzIHNtYWxsZXIgdGhhbiB0aHJlZSwgY3JlYXRlcyBhXG4vLyBzZXRleHQgaGVhZGVyOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBGb29cbi8vID09PVxuLy8gYGBgXG4vL1xuLy8gT3RoZXJ3aXNlLCBhbiBBVFggaGVhZGVyIGlzIGdlbmVyYXRlZDpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gIyMjIEZvb1xuLy8gYGBgXG4vL1xuLy8gSW4gYGNsb3NlQXR4OiB0cnVlYCBtb2RlLCB0aGUgaGVhZGVyIGlzIGNsb3NlZCB3aXRoIGhhc2hlczpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gIyMjIEZvbyAjIyNcbi8vIGBgYFxuZnVuY3Rpb24gaGVhZGluZyhub2RlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZGVwdGggPSBub2RlLmRlcHRoXG4gIHZhciBzZXRleHQgPSBzZWxmLm9wdGlvbnMuc2V0ZXh0XG4gIHZhciBjbG9zZUF0eCA9IHNlbGYub3B0aW9ucy5jbG9zZUF0eFxuICB2YXIgY29udGVudCA9IHNlbGYuYWxsKG5vZGUpLmpvaW4oJycpXG4gIHZhciBwcmVmaXhcblxuICBpZiAoc2V0ZXh0ICYmIGRlcHRoIDwgMykge1xuICAgIHJldHVybiAoXG4gICAgICBjb250ZW50ICsgbGluZUZlZWQgKyByZXBlYXQoZGVwdGggPT09IDEgPyBlcXVhbHNUbyA6IGRhc2gsIGNvbnRlbnQubGVuZ3RoKVxuICAgIClcbiAgfVxuXG4gIHByZWZpeCA9IHJlcGVhdChudW1iZXJTaWduLCBub2RlLmRlcHRoKVxuXG4gIHJldHVybiBwcmVmaXggKyBzcGFjZSArIGNvbnRlbnQgKyAoY2xvc2VBdHggPyBzcGFjZSArIHByZWZpeCA6ICcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaHRtbFxuXG5mdW5jdGlvbiBodG1sKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudmFsdWVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbGFiZWwgPSByZXF1aXJlKCcuLi91dGlsL2xhYmVsJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbWFnZVJlZmVyZW5jZVxuXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcbnZhciBleGNsYW1hdGlvbk1hcmsgPSAnISdcblxuZnVuY3Rpb24gaW1hZ2VSZWZlcmVuY2Uobm9kZSkge1xuICByZXR1cm4gKFxuICAgIGV4Y2xhbWF0aW9uTWFyayArXG4gICAgbGVmdFNxdWFyZUJyYWNrZXQgK1xuICAgICh0aGlzLmVuY29kZShub2RlLmFsdCwgbm9kZSkgfHwgJycpICtcbiAgICByaWdodFNxdWFyZUJyYWNrZXQgK1xuICAgIGxhYmVsKG5vZGUpXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdXJpID0gcmVxdWlyZSgnLi4vdXRpbC9lbmNsb3NlLXVyaScpXG52YXIgdGl0bGUgPSByZXF1aXJlKCcuLi91dGlsL2VuY2xvc2UtdGl0bGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGltYWdlXG5cbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxlZnRQYXJlbnRoZXNpcyA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIGV4Y2xhbWF0aW9uTWFyayA9ICchJ1xuXG4vLyBTdHJpbmdpZnkgYW4gaW1hZ2UuXG4vL1xuLy8gSXMgc21hcnQgYWJvdXQgZW5jbG9zaW5nIGB1cmxgIChzZWUgYGVuY2xvc2VVUkkoKWApIGFuZCBgdGl0bGVgIChzZWVcbi8vIGBlbmNsb3NlVGl0bGUoKWApLlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyAhW2Zvb10oPC9mYXYgaWNvbi5wbmc+ICdNeSBcImZhdm91cml0ZVwiIGljb24nKVxuLy8gYGBgXG4vL1xuLy8gU3VwcG9ydHMgbmFtZWQgZW50aXRpZXMgaW4gYHVybGAsIGBhbHRgLCBhbmQgYHRpdGxlYCB3aGVuIGluXG4vLyBgc2V0dGluZ3MuZW5jb2RlYCBtb2RlLlxuZnVuY3Rpb24gaW1hZ2Uobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNvbnRlbnQgPSB1cmkoc2VsZi5lbmNvZGUobm9kZS51cmwgfHwgJycsIG5vZGUpKVxuICB2YXIgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKClcbiAgdmFyIGFsdCA9IHNlbGYuZW5jb2RlKHNlbGYuZXNjYXBlKG5vZGUuYWx0IHx8ICcnLCBub2RlKSlcblxuICBleGl0KClcblxuICBpZiAobm9kZS50aXRsZSkge1xuICAgIGNvbnRlbnQgKz0gc3BhY2UgKyB0aXRsZShzZWxmLmVuY29kZShub2RlLnRpdGxlLCBub2RlKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgZXhjbGFtYXRpb25NYXJrICtcbiAgICBsZWZ0U3F1YXJlQnJhY2tldCArXG4gICAgYWx0ICtcbiAgICByaWdodFNxdWFyZUJyYWNrZXQgK1xuICAgIGxlZnRQYXJlbnRoZXNpcyArXG4gICAgY29udGVudCArXG4gICAgcmlnaHRQYXJlbnRoZXNpc1xuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHN0cmVhayA9IHJlcXVpcmUoJ2xvbmdlc3Qtc3RyZWFrJylcbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSBpbmxpbmVDb2RlXG5cbnZhciBncmF2ZUFjY2VudENoYXIgPSAnYCdcbnZhciBsaW5lRmVlZCA9IDEwIC8vICAnXFxuJ1xudmFyIHNwYWNlID0gMzIgLy8gJyAnXG52YXIgZ3JhdmVBY2NlbnQgPSA5NiAvLyAgJ2AnXG5cbi8vIFN0cmluZ2lmeSBpbmxpbmUgY29kZS5cbi8vXG4vLyBLbm93cyBhYm91dCBpbnRlcm5hbCB0aWNrcyAoYFxcYGApLCBhbmQgZW5zdXJlcyBvbmUgbW9yZSB0aWNrIGlzIHVzZWQgdG9cbi8vIGVuY2xvc2UgdGhlIGlubGluZSBjb2RlOlxuLy9cbi8vIGBgYGBtYXJrZG93blxuLy8gYGBgZm9vIGBgYmFyYGAgYmF6YGBgXG4vLyBgYGBgXG4vL1xuLy8gRXZlbiBrbm93cyBhYm91dCBpbml0YWwgYW5kIGZpbmFsIHRpY2tzOlxuLy9cbi8vIGBgbWFya2Rvd25cbi8vIGBgIGBmb28gYGBcbi8vIGBgIGZvb2AgYGBcbi8vIGBgYFxuZnVuY3Rpb24gaW5saW5lQ29kZShub2RlKSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWVcbiAgdmFyIHRpY2tzID0gcmVwZWF0KGdyYXZlQWNjZW50Q2hhciwgc3RyZWFrKHZhbHVlLCBncmF2ZUFjY2VudENoYXIpICsgMSlcbiAgdmFyIHN0YXJ0ID0gdGlja3NcbiAgdmFyIGVuZCA9IHRpY2tzXG4gIHZhciBoZWFkID0gdmFsdWUuY2hhckNvZGVBdCgwKVxuICB2YXIgdGFpbCA9IHZhbHVlLmNoYXJDb2RlQXQodmFsdWUubGVuZ3RoIC0gMSlcbiAgdmFyIHdyYXAgPSBmYWxzZVxuICB2YXIgaW5kZXhcbiAgdmFyIGxlbmd0aFxuXG4gIGlmIChoZWFkID09PSBncmF2ZUFjY2VudCB8fCB0YWlsID09PSBncmF2ZUFjY2VudCkge1xuICAgIHdyYXAgPSB0cnVlXG4gIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMiAmJiB3cyhoZWFkKSAmJiB3cyh0YWlsKSkge1xuICAgIGluZGV4ID0gMVxuICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCAtIDFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoIXdzKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpKSkge1xuICAgICAgICB3cmFwID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh3cmFwKSB7XG4gICAgc3RhcnQgKz0gJyAnXG4gICAgZW5kID0gJyAnICsgZW5kXG4gIH1cblxuICByZXR1cm4gc3RhcnQgKyB2YWx1ZSArIGVuZFxufVxuXG5mdW5jdGlvbiB3cyhjb2RlKSB7XG4gIHJldHVybiBjb2RlID09PSBsaW5lRmVlZCB8fCBjb2RlID09PSBzcGFjZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb3B5ID0gcmVxdWlyZSgnLi4vdXRpbC9jb3B5LWlkZW50aWZpZXItZW5jb2RpbmcnKVxudmFyIGxhYmVsID0gcmVxdWlyZSgnLi4vdXRpbC9sYWJlbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlua1JlZmVyZW5jZVxuXG52YXIgbGVmdFNxdWFyZUJyYWNrZXQgPSAnWydcbnZhciByaWdodFNxdWFyZUJyYWNrZXQgPSAnXSdcblxudmFyIHNob3J0Y3V0ID0gJ3Nob3J0Y3V0J1xudmFyIGNvbGxhcHNlZCA9ICdjb2xsYXBzZWQnXG5cbmZ1bmN0aW9uIGxpbmtSZWZlcmVuY2Uobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHR5cGUgPSBub2RlLnJlZmVyZW5jZVR5cGVcbiAgdmFyIGV4aXQgPSBzZWxmLmVudGVyTGlua1JlZmVyZW5jZShzZWxmLCBub2RlKVxuICB2YXIgdmFsdWUgPSBzZWxmLmFsbChub2RlKS5qb2luKCcnKVxuXG4gIGV4aXQoKVxuXG4gIGlmICh0eXBlID09PSBzaG9ydGN1dCB8fCB0eXBlID09PSBjb2xsYXBzZWQpIHtcbiAgICB2YWx1ZSA9IGNvcHkodmFsdWUsIG5vZGUubGFiZWwgfHwgbm9kZS5pZGVudGlmaWVyKVxuICB9XG5cbiAgcmV0dXJuIGxlZnRTcXVhcmVCcmFja2V0ICsgdmFsdWUgKyByaWdodFNxdWFyZUJyYWNrZXQgKyBsYWJlbChub2RlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1cmkgPSByZXF1aXJlKCcuLi91dGlsL2VuY2xvc2UtdXJpJylcbnZhciB0aXRsZSA9IHJlcXVpcmUoJy4uL3V0aWwvZW5jbG9zZS10aXRsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlua1xuXG52YXIgc3BhY2UgPSAnICdcbnZhciBsZWZ0U3F1YXJlQnJhY2tldCA9ICdbJ1xudmFyIHJpZ2h0U3F1YXJlQnJhY2tldCA9ICddJ1xudmFyIGxlZnRQYXJlbnRoZXNpcyA9ICcoJ1xudmFyIHJpZ2h0UGFyZW50aGVzaXMgPSAnKSdcblxuLy8gRXhwcmVzc2lvbiBmb3IgYSBwcm90b2NvbDpcbi8vIFNlZSA8aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pZm9ybV9SZXNvdXJjZV9JZGVudGlmaWVyI0dlbmVyaWNfc3ludGF4Pi5cbnZhciBwcm90b2NvbCA9IC9eW2Etel1bYS16Ky4tXSs6XFwvPy9pXG5cbi8vIFN0cmluZ2lmeSBhIGxpbmsuXG4vL1xuLy8gV2hlbiBubyB0aXRsZSBleGlzdHMsIHRoZSBjb21waWxlZCBgY2hpbGRyZW5gIGVxdWFsIGB1cmxgLCBhbmQgYHVybGAgc3RhcnRzXG4vLyB3aXRoIGEgcHJvdG9jb2wsIGFuIGF1dG8gbGluayBpcyBjcmVhdGVkOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyA8aHR0cDovL2V4YW1wbGUuY29tPlxuLy8gYGBgXG4vL1xuLy8gT3RoZXJ3aXNlLCBpcyBzbWFydCBhYm91dCBlbmNsb3NpbmcgYHVybGAgKHNlZSBgZW5jbG9zZVVSSSgpYCkgYW5kIGB0aXRsZWBcbi8vIChzZWUgYGVuY2xvc2VUaXRsZSgpYCkuXG4vLyBgYGBcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gW2Zvb10oPGZvbyBhdCBiYXIgZG90IGNvbT4gJ0FuIFwiZXhhbXBsZVwiIGUtbWFpbCcpXG4vLyBgYGBcbi8vXG4vLyBTdXBwb3J0cyBuYW1lZCBlbnRpdGllcyBpbiB0aGUgYHVybGAgYW5kIGB0aXRsZWAgd2hlbiBpbiBgc2V0dGluZ3MuZW5jb2RlYFxuLy8gbW9kZS5cbmZ1bmN0aW9uIGxpbmsobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNvbnRlbnQgPSBzZWxmLmVuY29kZShub2RlLnVybCB8fCAnJywgbm9kZSlcbiAgdmFyIGV4aXQgPSBzZWxmLmVudGVyTGluaygpXG4gIHZhciBlc2NhcGVkID0gc2VsZi5lbmNvZGUoc2VsZi5lc2NhcGUobm9kZS51cmwgfHwgJycsIG5vZGUpKVxuICB2YXIgdmFsdWUgPSBzZWxmLmFsbChub2RlKS5qb2luKCcnKVxuXG4gIGV4aXQoKVxuXG4gIGlmIChub2RlLnRpdGxlID09IG51bGwgJiYgcHJvdG9jb2wudGVzdChjb250ZW50KSAmJiBlc2NhcGVkID09PSB2YWx1ZSkge1xuICAgIC8vIEJhY2tzbGFzaCBlc2NhcGVzIGRvIG5vdCB3b3JrIGluIGF1dG9saW5rcywgc28gd2UgZG8gbm90IGVzY2FwZS5cbiAgICByZXR1cm4gdXJpKHNlbGYuZW5jb2RlKG5vZGUudXJsKSwgdHJ1ZSlcbiAgfVxuXG4gIGNvbnRlbnQgPSB1cmkoY29udGVudClcblxuICBpZiAobm9kZS50aXRsZSkge1xuICAgIGNvbnRlbnQgKz0gc3BhY2UgKyB0aXRsZShzZWxmLmVuY29kZShzZWxmLmVzY2FwZShub2RlLnRpdGxlLCBub2RlKSwgbm9kZSkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIGxlZnRTcXVhcmVCcmFja2V0ICtcbiAgICB2YWx1ZSArXG4gICAgcmlnaHRTcXVhcmVCcmFja2V0ICtcbiAgICBsZWZ0UGFyZW50aGVzaXMgK1xuICAgIGNvbnRlbnQgK1xuICAgIHJpZ2h0UGFyZW50aGVzaXNcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciBwYWQgPSByZXF1aXJlKCcuLi91dGlsL3BhZCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdEl0ZW1cblxudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxlZnRTcXVhcmVCcmFja2V0ID0gJ1snXG52YXIgcmlnaHRTcXVhcmVCcmFja2V0ID0gJ10nXG52YXIgbG93ZXJjYXNlWCA9ICd4J1xuXG52YXIgY2VpbCA9IE1hdGguY2VpbFxudmFyIGJsYW5rID0gbGluZUZlZWQgKyBsaW5lRmVlZFxuXG52YXIgdGFiU2l6ZSA9IDRcblxuLy8gU3RyaW5naWZ5IGEgbGlzdCBpdGVtLlxuLy9cbi8vIFByZWZpeGVzIHRoZSBjb250ZW50IHdpdGggYSBjaGVja2VkIGNoZWNrYm94IHdoZW4gYGNoZWNrZWQ6IHRydWVgOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBbeF0gZm9vXG4vLyBgYGBcbi8vXG4vLyBQcmVmaXhlcyB0aGUgY29udGVudCB3aXRoIGFuIHVuY2hlY2tlZCBjaGVja2JveCB3aGVuIGBjaGVja2VkOiBmYWxzZWA6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIFsgXSBmb29cbi8vIGBgYFxuZnVuY3Rpb24gbGlzdEl0ZW0obm9kZSwgcGFyZW50LCBwb3NpdGlvbiwgYnVsbGV0KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc3R5bGUgPSBzZWxmLm9wdGlvbnMubGlzdEl0ZW1JbmRlbnRcbiAgdmFyIG1hcmtlciA9IGJ1bGxldCB8fCBzZWxmLm9wdGlvbnMuYnVsbGV0XG4gIHZhciBzcHJlYWQgPSBub2RlLnNwcmVhZCA9PSBudWxsID8gdHJ1ZSA6IG5vZGUuc3ByZWFkXG4gIHZhciBjaGVja2VkID0gbm9kZS5jaGVja2VkXG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHZhbHVlXG4gIHZhciBpbmRlbnRcbiAgdmFyIHNwYWNpbmdcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlc1tpbmRleF0gPSBzZWxmLnZpc2l0KGNoaWxkcmVuW2luZGV4XSwgbm9kZSlcbiAgfVxuXG4gIHZhbHVlID0gdmFsdWVzLmpvaW4oc3ByZWFkID8gYmxhbmsgOiBsaW5lRmVlZClcblxuICBpZiAodHlwZW9mIGNoZWNrZWQgPT09ICdib29sZWFuJykge1xuICAgIC8vIE5vdGU6IEnigJlkIGxpa2UgdG8gYmUgYWJsZSB0byBvbmx5IGFkZCB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgY2hlY2sgYW5kXG4gICAgLy8gdGhlIHZhbHVlLCBidXQgdW5mb3J0dW5hdGVseSBnaXRodWIgZG9lcyBub3Qgc3VwcG9ydCBlbXB0eSBsaXN0LWl0ZW1zXG4gICAgLy8gd2l0aCBhIGNoZWNrYm94IDooXG4gICAgdmFsdWUgPVxuICAgICAgbGVmdFNxdWFyZUJyYWNrZXQgK1xuICAgICAgKGNoZWNrZWQgPyBsb3dlcmNhc2VYIDogc3BhY2UpICtcbiAgICAgIHJpZ2h0U3F1YXJlQnJhY2tldCArXG4gICAgICBzcGFjZSArXG4gICAgICB2YWx1ZVxuICB9XG5cbiAgaWYgKHN0eWxlID09PSAnMScgfHwgKHN0eWxlID09PSAnbWl4ZWQnICYmIHZhbHVlLmluZGV4T2YobGluZUZlZWQpID09PSAtMSkpIHtcbiAgICBpbmRlbnQgPSBtYXJrZXIubGVuZ3RoICsgMVxuICAgIHNwYWNpbmcgPSBzcGFjZVxuICB9IGVsc2Uge1xuICAgIGluZGVudCA9IGNlaWwoKG1hcmtlci5sZW5ndGggKyAxKSAvIHRhYlNpemUpICogdGFiU2l6ZVxuICAgIHNwYWNpbmcgPSByZXBlYXQoc3BhY2UsIGluZGVudCAtIG1hcmtlci5sZW5ndGgpXG4gIH1cblxuICByZXR1cm4gdmFsdWVcbiAgICA/IG1hcmtlciArIHNwYWNpbmcgKyBwYWQodmFsdWUsIGluZGVudCAvIHRhYlNpemUpLnNsaWNlKGluZGVudClcbiAgICA6IG1hcmtlclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdFxuXG5mdW5jdGlvbiBsaXN0KG5vZGUpIHtcbiAgdmFyIGZuID0gbm9kZS5vcmRlcmVkID8gdGhpcy52aXNpdE9yZGVyZWRJdGVtcyA6IHRoaXMudmlzaXRVbm9yZGVyZWRJdGVtc1xuICByZXR1cm4gZm4uY2FsbCh0aGlzLCBub2RlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyYWdyYXBoXG5cbmZ1bmN0aW9uIHBhcmFncmFwaChub2RlKSB7XG4gIHJldHVybiB0aGlzLmFsbChub2RlKS5qb2luKCcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdFxuXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xuXG4vLyBTdHJpbmdpZnkgYSByb290LlxuLy8gQWRkcyBhIGZpbmFsIG5ld2xpbmUgdG8gZW5zdXJlIHZhbGlkIFBPU0lYIGZpbGVzLiAqL1xuZnVuY3Rpb24gcm9vdChub2RlKSB7XG4gIHZhciBkb2MgPSB0aGlzLmJsb2NrKG5vZGUpXG5cbiAgaWYgKGRvYy5jaGFyQXQoZG9jLmxlbmd0aCAtIDEpICE9PSBsaW5lRmVlZCkge1xuICAgIGRvYyArPSBsaW5lRmVlZFxuICB9XG5cbiAgcmV0dXJuIGRvY1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJvbmdcblxuLy8gU3RyaW5naWZ5IGEgYHN0cm9uZ2AuXG4vL1xuLy8gVGhlIG1hcmtlciB1c2VkIGlzIGNvbmZpZ3VyYWJsZSBieSBgc3Ryb25nYCwgd2hpY2ggZGVmYXVsdHMgdG8gYW4gYXN0ZXJpc2tcbi8vIChgJyonYCkgYnV0IGFsc28gYWNjZXB0cyBhbiB1bmRlcnNjb3JlIChgJ18nYCk6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIF9fZm9vX19cbi8vIGBgYFxuZnVuY3Rpb24gc3Ryb25nKG5vZGUpIHtcbiAgdmFyIG1hcmtlciA9IHJlcGVhdCh0aGlzLm9wdGlvbnMuc3Ryb25nLCAyKVxuICByZXR1cm4gbWFya2VyICsgdGhpcy5hbGwobm9kZSkuam9pbignJykgKyBtYXJrZXJcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmxlQ2VsbFxuXG52YXIgbGluZUZlZWQgPSAvXFxyP1xcbi9nXG5cbmZ1bmN0aW9uIHRhYmxlQ2VsbChub2RlKSB7XG4gIHJldHVybiB0aGlzLmFsbChub2RlKVxuICAgIC5qb2luKCcnKVxuICAgIC5yZXBsYWNlKGxpbmVGZWVkLCAnICcpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1hcmtkb3duVGFibGUgPSByZXF1aXJlKCdtYXJrZG93bi10YWJsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gdGFibGVcblxudmFyIHNwYWNlID0gJyAnXG52YXIgdmVydGljYWxCYXIgPSAnfCdcblxuLy8gU3RyaW5naWZ5IHRhYmxlLlxuLy9cbi8vIENyZWF0ZXMgYSBmZW5jZWQgdGFibGUgYnkgZGVmYXVsdCwgYnV0IG5vdCBpbiBgbG9vc2VUYWJsZTogdHJ1ZWAgbW9kZTpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gIEZvbyB8IEJhclxuLy8gOi06IHwgLS0tXG4vLyBCYXogfCBRdXhcbi8vXG4vLyBOT1RFOiBCZSBjYXJlZnVsIHdpdGggYGxvb3NlVGFibGU6IHRydWVgIG1vZGUsIGFzIGEgbG9vc2UgdGFibGUgaW5zaWRlIGFuXG4vLyBpbmRlbnRlZCBjb2RlIGJsb2NrIG9uIEdpdEh1YiByZW5kZXJzIGFzIGFuIGFjdHVhbCB0YWJsZSFcbi8vXG4vLyBDcmVhdGVzIGEgc3BhY2VkIHRhYmxlIGJ5IGRlZmF1bHQsIGJ1dCBub3QgaW4gYHNwYWNlZFRhYmxlOiBmYWxzZWA6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIHxGb298QmFyfFxuLy8gfDotOnwtLS18XG4vLyB8QmF6fFF1eHxcbi8vIGBgYFxuZnVuY3Rpb24gdGFibGUobm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG9wdGlvbnMgPSBzZWxmLm9wdGlvbnNcbiAgdmFyIGxvb3NlID0gb3B0aW9ucy5sb29zZVRhYmxlXG4gIHZhciBzcGFjZWQgPSBvcHRpb25zLnNwYWNlZFRhYmxlXG4gIHZhciBwYWQgPSBvcHRpb25zLnBhZGRlZFRhYmxlXG4gIHZhciBzdHJpbmdMZW5ndGggPSBvcHRpb25zLnN0cmluZ0xlbmd0aFxuICB2YXIgcm93cyA9IG5vZGUuY2hpbGRyZW5cbiAgdmFyIGluZGV4ID0gcm93cy5sZW5ndGhcbiAgdmFyIGV4aXQgPSBzZWxmLmVudGVyVGFibGUoKVxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIHN0YXJ0XG4gIHZhciBlbmRcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBzZWxmLmFsbChyb3dzW2luZGV4XSlcbiAgfVxuXG4gIGV4aXQoKVxuXG4gIGlmIChsb29zZSkge1xuICAgIHN0YXJ0ID0gJydcbiAgICBlbmQgPSAnJ1xuICB9IGVsc2UgaWYgKHNwYWNlZCkge1xuICAgIHN0YXJ0ID0gdmVydGljYWxCYXIgKyBzcGFjZVxuICAgIGVuZCA9IHNwYWNlICsgdmVydGljYWxCYXJcbiAgfSBlbHNlIHtcbiAgICBzdGFydCA9IHZlcnRpY2FsQmFyXG4gICAgZW5kID0gdmVydGljYWxCYXJcbiAgfVxuXG4gIHJldHVybiBtYXJrZG93blRhYmxlKHJlc3VsdCwge1xuICAgIGFsaWduOiBub2RlLmFsaWduLFxuICAgIHBhZDogcGFkLFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBlbmQ6IGVuZCxcbiAgICBzdHJpbmdMZW5ndGg6IHN0cmluZ0xlbmd0aCxcbiAgICBkZWxpbWl0ZXI6IHNwYWNlZCA/IHNwYWNlICsgdmVydGljYWxCYXIgKyBzcGFjZSA6IHZlcnRpY2FsQmFyXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXh0XG5cbi8vIFN0cmluZ2lmeSB0ZXh0LlxuLy8gU3VwcG9ydHMgbmFtZWQgZW50aXRpZXMgaW4gYHNldHRpbmdzLmVuY29kZTogdHJ1ZWAgbW9kZTpcbi8vXG4vLyBgYGBtYXJrZG93blxuLy8gQVQmYW1wO1Rcbi8vIGBgYFxuLy9cbi8vIFN1cHBvcnRzIG51bWJlcmVkIGVudGl0aWVzIGluIGBzZXR0aW5ncy5lbmNvZGU6IG51bWJlcnNgIG1vZGU6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vIEFUJiN4MjY7VFxuLy8gYGBgXG5mdW5jdGlvbiB0ZXh0KG5vZGUsIHBhcmVudCkge1xuICByZXR1cm4gdGhpcy5lbmNvZGUodGhpcy5lc2NhcGUobm9kZS52YWx1ZSwgbm9kZSwgcGFyZW50KSwgbm9kZSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbm1vZHVsZS5leHBvcnRzID0gdGhlbWF0aWNcblxudmFyIHNwYWNlID0gJyAnXG5cbi8vIFN0cmluZ2lmeSBhIGB0aGVtYXRpYy1icmVha2AuXG4vLyBUaGUgY2hhcmFjdGVyIHVzZWQgaXMgY29uZmlndXJhYmxlIHRocm91Z2ggYHJ1bGVgOiAoYCdfJ2ApOlxuLy9cbi8vIGBgYG1hcmtkb3duXG4vLyBfX19cbi8vIGBgYFxuLy9cbi8vIFRoZSBudW1iZXIgb2YgcmVwaXRpdGlvbnMgaXMgZGVmaW5lZCB0aHJvdWdoIGBydWxlUmVwZXRpdGlvbmAgKGA2YCk6XG4vL1xuLy8gYGBgbWFya2Rvd25cbi8vICoqKioqKlxuLy8gYGBgXG4vL1xuLy8gV2hldGhlciBzcGFjZXMgZGVsaW1pdCBlYWNoIGNoYXJhY3RlciwgaXMgY29uZmlndXJlZCB0aHJvdWdoIGBydWxlU3BhY2VzYFxuLy8gKGB0cnVlYCk6XG4vLyBgYGBtYXJrZG93blxuLy8gKiAqICpcbi8vIGBgYFxuZnVuY3Rpb24gdGhlbWF0aWMoKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG4gIHZhciBydWxlID0gcmVwZWF0KG9wdGlvbnMucnVsZSwgb3B0aW9ucy5ydWxlUmVwZXRpdGlvbilcbiAgcmV0dXJuIG9wdGlvbnMucnVsZVNwYWNlcyA/IHJ1bGUuc3BsaXQoJycpLmpvaW4oc3BhY2UpIDogcnVsZVxufVxuIiwiLyohXG4gKiByZXBlYXQtc3RyaW5nIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9yZXBlYXQtc3RyaW5nPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmVzdWx0cyBjYWNoZVxuICovXG5cbnZhciByZXMgPSAnJztcbnZhciBjYWNoZTtcblxuLyoqXG4gKiBFeHBvc2UgYHJlcGVhdGBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcGVhdDtcblxuLyoqXG4gKiBSZXBlYXQgdGhlIGdpdmVuIGBzdHJpbmdgIHRoZSBzcGVjaWZpZWQgYG51bWJlcmBcbiAqIG9mIHRpbWVzLlxuICpcbiAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpO1xuICogcmVwZWF0KCdBJywgNSk7XG4gKiAvLz0+IEFBQUFBXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmluZ2AgVGhlIHN0cmluZyB0byByZXBlYXRcbiAqIEBwYXJhbSB7TnVtYmVyfSBgbnVtYmVyYCBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJlcGVhdCB0aGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlcGVhdGVkIHN0cmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXBlYXQoc3RyLCBudW0pIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIC8vIGNvdmVyIGNvbW1vbiwgcXVpY2sgdXNlIGNhc2VzXG4gIGlmIChudW0gPT09IDEpIHJldHVybiBzdHI7XG4gIGlmIChudW0gPT09IDIpIHJldHVybiBzdHIgKyBzdHI7XG5cbiAgdmFyIG1heCA9IHN0ci5sZW5ndGggKiBudW07XG4gIGlmIChjYWNoZSAhPT0gc3RyIHx8IHR5cGVvZiBjYWNoZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjYWNoZSA9IHN0cjtcbiAgICByZXMgPSAnJztcbiAgfSBlbHNlIGlmIChyZXMubGVuZ3RoID49IG1heCkge1xuICAgIHJldHVybiByZXMuc3Vic3RyKDAsIG1heCk7XG4gIH1cblxuICB3aGlsZSAobWF4ID4gcmVzLmxlbmd0aCAmJiBudW0gPiAxKSB7XG4gICAgaWYgKG51bSAmIDEpIHtcbiAgICAgIHJlcyArPSBzdHI7XG4gICAgfVxuXG4gICAgbnVtID4+PSAxO1xuICAgIHN0ciArPSBzdHI7XG4gIH1cblxuICByZXMgKz0gc3RyO1xuICByZXMgPSByZXMuc3Vic3RyKDAsIG1heCk7XG4gIHJldHVybiByZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5mdW5jdGlvbiByZXBsYWNlRXh0KG5wYXRoLCBleHQpIHtcbiAgaWYgKHR5cGVvZiBucGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnBhdGg7XG4gIH1cblxuICBpZiAobnBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5wYXRoO1xuICB9XG5cbiAgdmFyIG5GaWxlTmFtZSA9IHBhdGguYmFzZW5hbWUobnBhdGgsIHBhdGguZXh0bmFtZShucGF0aCkpICsgZXh0O1xuICByZXR1cm4gcGF0aC5qb2luKHBhdGguZGlybmFtZShucGF0aCksIG5GaWxlTmFtZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVwbGFjZUV4dDtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnBhcnNlID0gcGFyc2VcbmV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG5cbnZhciBlbXB0eSA9ICcnXG52YXIgc3BhY2UgPSAnICdcbnZhciB3aGl0ZVNwYWNlID0gL1sgXFx0XFxuXFxyXFxmXSsvZ1xuXG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSkge1xuICB2YXIgaW5wdXQgPSBTdHJpbmcodmFsdWUgfHwgZW1wdHkpLnRyaW0oKVxuICByZXR1cm4gaW5wdXQgPT09IGVtcHR5ID8gW10gOiBpbnB1dC5zcGxpdCh3aGl0ZVNwYWNlKVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWVzKSB7XG4gIHJldHVybiB2YWx1ZXMuam9pbihzcGFjZSkudHJpbSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbi8vIENvbnN0cnVjdCBhIHN0YXRlIGB0b2dnbGVyYDogYSBmdW5jdGlvbiB3aGljaCBpbnZlcnNlcyBgcHJvcGVydHlgIGluIGNvbnRleHRcbi8vIGJhc2VkIG9uIGl0cyBjdXJyZW50IHZhbHVlLlxuLy8gVGhlIGJ5IGB0b2dnbGVyYCByZXR1cm5lZCBmdW5jdGlvbiByZXN0b3JlcyB0aGF0IHZhbHVlLlxuZnVuY3Rpb24gZmFjdG9yeShrZXksIHN0YXRlLCBjdHgpIHtcbiAgcmV0dXJuIGVudGVyXG5cbiAgZnVuY3Rpb24gZW50ZXIoKSB7XG4gICAgdmFyIGNvbnRleHQgPSBjdHggfHwgdGhpc1xuICAgIHZhciBjdXJyZW50ID0gY29udGV4dFtrZXldXG5cbiAgICBjb250ZXh0W2tleV0gPSAhc3RhdGVcblxuICAgIHJldHVybiBleGl0XG5cbiAgICBmdW5jdGlvbiBleGl0KCkge1xuICAgICAgY29udGV4dFtrZXldID0gY3VycmVudFxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ2NoYXJhY3Rlci1lbnRpdGllcy1odG1sNCcpXG52YXIgbGVnYWN5ID0gcmVxdWlyZSgnY2hhcmFjdGVyLWVudGl0aWVzLWxlZ2FjeScpXG52YXIgaGV4YWRlY2ltYWwgPSByZXF1aXJlKCdpcy1oZXhhZGVjaW1hbCcpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGFscGhhbnVtZXJpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFudW1lcmljYWwnKVxudmFyIGRhbmdlcm91cyA9IHJlcXVpcmUoJy4vZGFuZ2Vyb3VzLmpzb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZVxuZW5jb2RlLmVzY2FwZSA9IGVzY2FwZVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gTGlzdCBvZiBlbmZvcmNlZCBlc2NhcGVzLlxudmFyIGVzY2FwZXMgPSBbJ1wiJywgXCInXCIsICc8JywgJz4nLCAnJicsICdgJ11cblxuLy8gTWFwIG9mIGNoYXJhY3RlcnMgdG8gbmFtZXMuXG52YXIgY2hhcmFjdGVycyA9IGNvbnN0cnVjdCgpXG5cbi8vIERlZmF1bHQgZXNjYXBlcy5cbnZhciBkZWZhdWx0RXNjYXBlcyA9IHRvRXhwcmVzc2lvbihlc2NhcGVzKVxuXG4vLyBTdXJyb2dhdGUgcGFpcnMuXG52YXIgc3Vycm9nYXRlUGFpciA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2dcblxuLy8gTm9uLUFTQ0lJIGNoYXJhY3RlcnMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleCwgdW5pY29ybi9uby1oZXgtZXNjYXBlXG52YXIgYm1wID0gL1tcXHgwMS1cXHRcXHgwQlxcZlxceDBFLVxceDFGXFx4N0ZcXHg4MVxceDhEXFx4OEZcXHg5MFxceDlEXFx4QTAtXFx1RkZGRl0vZ1xuXG4vLyBFbmNvZGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgc3Vic2V0ID0gc2V0dGluZ3Muc3Vic2V0XG4gIHZhciBzZXQgPSBzdWJzZXQgPyB0b0V4cHJlc3Npb24oc3Vic2V0KSA6IGRlZmF1bHRFc2NhcGVzXG4gIHZhciBlc2NhcGVPbmx5ID0gc2V0dGluZ3MuZXNjYXBlT25seVxuICB2YXIgb21pdCA9IHNldHRpbmdzLm9taXRPcHRpb25hbFNlbWljb2xvbnNcblxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2Uoc2V0LCByZXBsYWNlKVxuXG4gIGlmIChzdWJzZXQgfHwgZXNjYXBlT25seSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2Uoc3Vycm9nYXRlUGFpciwgcmVwbGFjZVN1cnJvZ2F0ZVBhaXIpXG4gICAgLnJlcGxhY2UoYm1wLCByZXBsYWNlKVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VTdXJyb2dhdGVQYWlyKHBhaXIsIHBvcywgdmFsKSB7XG4gICAgcmV0dXJuIHRvSGV4UmVmZXJlbmNlKFxuICAgICAgKHBhaXIuY2hhckNvZGVBdCgwKSAtIDB4ZDgwMCkgKiAweDQwMCArXG4gICAgICAgIHBhaXIuY2hhckNvZGVBdCgxKSAtXG4gICAgICAgIDB4ZGMwMCArXG4gICAgICAgIDB4MTAwMDAsXG4gICAgICB2YWwuY2hhckF0KHBvcyArIDIpLFxuICAgICAgb21pdFxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UoY2hhciwgcG9zLCB2YWwpIHtcbiAgICByZXR1cm4gb25lKGNoYXIsIHZhbC5jaGFyQXQocG9zICsgMSksIHNldHRpbmdzKVxuICB9XG59XG5cbi8vIFNob3J0Y3V0IHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gSFRNTC5cbmZ1bmN0aW9uIGVzY2FwZSh2YWx1ZSkge1xuICByZXR1cm4gZW5jb2RlKHZhbHVlLCB7ZXNjYXBlT25seTogdHJ1ZSwgdXNlTmFtZWRSZWZlcmVuY2VzOiB0cnVlfSlcbn1cblxuLy8gRW5jb2RlIGBjaGFyYCBhY2NvcmRpbmcgdG8gYG9wdGlvbnNgLlxuZnVuY3Rpb24gb25lKGNoYXIsIG5leHQsIG9wdGlvbnMpIHtcbiAgdmFyIHNob3J0ZXN0ID0gb3B0aW9ucy51c2VTaG9ydGVzdFJlZmVyZW5jZXNcbiAgdmFyIG9taXQgPSBvcHRpb25zLm9taXRPcHRpb25hbFNlbWljb2xvbnNcbiAgdmFyIG5hbWVkXG4gIHZhciBjb2RlXG4gIHZhciBudW1lcmljXG4gIHZhciBkZWNpbWFsXG5cbiAgaWYgKChzaG9ydGVzdCB8fCBvcHRpb25zLnVzZU5hbWVkUmVmZXJlbmNlcykgJiYgb3duLmNhbGwoY2hhcmFjdGVycywgY2hhcikpIHtcbiAgICBuYW1lZCA9IHRvTmFtZWQoY2hhcmFjdGVyc1tjaGFyXSwgbmV4dCwgb21pdCwgb3B0aW9ucy5hdHRyaWJ1dGUpXG4gIH1cblxuICBpZiAoc2hvcnRlc3QgfHwgIW5hbWVkKSB7XG4gICAgY29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKVxuICAgIG51bWVyaWMgPSB0b0hleFJlZmVyZW5jZShjb2RlLCBuZXh0LCBvbWl0KVxuXG4gICAgLy8gVXNlIHRoZSBzaG9ydGVzdCBudW1lcmljIHJlZmVyZW5jZSB3aGVuIHJlcXVlc3RlZC5cbiAgICAvLyBBIHNpbXBsZSBhbGdvcml0aG0gd291bGQgdXNlIGRlY2ltYWwgZm9yIGFsbCBjb2RlIHBvaW50cyB1bmRlciAxMDAsIGFzXG4gICAgLy8gdGhvc2UgYXJlIHNob3J0ZXIgdGhhbiBoZXhhZGVjaW1hbDpcbiAgICAvL1xuICAgIC8vICogYCYjOTk7YCB2cyBgJiN4NjM7YCAoZGVjaW1hbCBzaG9ydGVyKVxuICAgIC8vICogYCYjMTAwO2AgdnMgYCYjeDY0O2AgKGVxdWFsKVxuICAgIC8vXG4gICAgLy8gSG93ZXZlciwgYmVjYXVzZSB3ZSB0YWtlIGBuZXh0YCBpbnRvIGNvbnNpZGVyYXRpb24gd2hlbiBgb21pdGAgaXMgdXNlZCxcbiAgICAvLyBBbmQgaXQgd291bGQgYmUgcG9zc2libGUgdGhhdCBkZWNpbWFscyBhcmUgc2hvcnRlciBvbiBiaWdnZXIgdmFsdWVzIGFzXG4gICAgLy8gd2VsbCBpZiBgbmV4dGAgaXMgaGV4YWRlY2ltYWwgYnV0IG5vdCBkZWNpbWFsLCB3ZSBpbnN0ZWFkIGNvbXBhcmUgYm90aC5cbiAgICBpZiAoc2hvcnRlc3QpIHtcbiAgICAgIGRlY2ltYWwgPSB0b0RlY2ltYWxSZWZlcmVuY2UoY29kZSwgbmV4dCwgb21pdClcblxuICAgICAgaWYgKGRlY2ltYWwubGVuZ3RoIDwgbnVtZXJpYy5sZW5ndGgpIHtcbiAgICAgICAgbnVtZXJpYyA9IGRlY2ltYWxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobmFtZWQgJiYgKCFzaG9ydGVzdCB8fCBuYW1lZC5sZW5ndGggPCBudW1lcmljLmxlbmd0aCkpIHtcbiAgICByZXR1cm4gbmFtZWRcbiAgfVxuXG4gIHJldHVybiBudW1lcmljXG59XG5cbi8vIFRyYW5zZm9ybSBgY29kZWAgaW50byBhbiBlbnRpdHkuXG5mdW5jdGlvbiB0b05hbWVkKG5hbWUsIG5leHQsIG9taXQsIGF0dHJpYnV0ZSkge1xuICB2YXIgdmFsdWUgPSAnJicgKyBuYW1lXG5cbiAgaWYgKFxuICAgIG9taXQgJiZcbiAgICBvd24uY2FsbChsZWdhY3ksIG5hbWUpICYmXG4gICAgZGFuZ2Vyb3VzLmluZGV4T2YobmFtZSkgPT09IC0xICYmXG4gICAgKCFhdHRyaWJ1dGUgfHwgKG5leHQgJiYgbmV4dCAhPT0gJz0nICYmICFhbHBoYW51bWVyaWNhbChuZXh0KSkpXG4gICkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJzsnXG59XG5cbi8vIFRyYW5zZm9ybSBgY29kZWAgaW50byBhIGhleGFkZWNpbWFsIGNoYXJhY3RlciByZWZlcmVuY2UuXG5mdW5jdGlvbiB0b0hleFJlZmVyZW5jZShjb2RlLCBuZXh0LCBvbWl0KSB7XG4gIHZhciB2YWx1ZSA9ICcmI3gnICsgY29kZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICByZXR1cm4gb21pdCAmJiBuZXh0ICYmICFoZXhhZGVjaW1hbChuZXh0KSA/IHZhbHVlIDogdmFsdWUgKyAnOydcbn1cblxuLy8gVHJhbnNmb3JtIGBjb2RlYCBpbnRvIGEgZGVjaW1hbCBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuZnVuY3Rpb24gdG9EZWNpbWFsUmVmZXJlbmNlKGNvZGUsIG5leHQsIG9taXQpIHtcbiAgdmFyIHZhbHVlID0gJyYjJyArIFN0cmluZyhjb2RlKVxuICByZXR1cm4gb21pdCAmJiBuZXh0ICYmICFkZWNpbWFsKG5leHQpID8gdmFsdWUgOiB2YWx1ZSArICc7J1xufVxuXG4vLyBDcmVhdGUgYW4gZXhwcmVzc2lvbiBmb3IgYGNoYXJhY3RlcnNgLlxuZnVuY3Rpb24gdG9FeHByZXNzaW9uKGNoYXJhY3RlcnMpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ1snICsgY2hhcmFjdGVycy5qb2luKCcnKSArICddJywgJ2cnKVxufVxuXG4vLyBDb25zdHJ1Y3QgdGhlIG1hcC5cbmZ1bmN0aW9uIGNvbnN0cnVjdCgpIHtcbiAgdmFyIGNoYXJzID0ge31cbiAgdmFyIG5hbWVcblxuICBmb3IgKG5hbWUgaW4gZW50aXRpZXMpIHtcbiAgICBjaGFyc1tlbnRpdGllc1tuYW1lXV0gPSBuYW1lXG4gIH1cblxuICByZXR1cm4gY2hhcnNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1UcmFpbGluZ0xpbmVzXG5cbnZhciBsaW5lID0gJ1xcbidcblxuLy8gUmVtb3ZlIGZpbmFsIG5ld2xpbmUgY2hhcmFjdGVycyBmcm9tIGB2YWx1ZWAuXG5mdW5jdGlvbiB0cmltVHJhaWxpbmdMaW5lcyh2YWx1ZSkge1xuICB2YXIgdmFsID0gU3RyaW5nKHZhbHVlKVxuICB2YXIgaW5kZXggPSB2YWwubGVuZ3RoXG5cbiAgd2hpbGUgKHZhbC5jaGFyQXQoLS1pbmRleCkgPT09IGxpbmUpIHtcbiAgICAvLyBFbXB0eVxuICB9XG5cbiAgcmV0dXJuIHZhbC5zbGljZSgwLCBpbmRleCArIDEpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdyYXAgPSByZXF1aXJlKCcuL3dyYXAuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyb3VnaFxuXG50cm91Z2gud3JhcCA9IHdyYXBcblxudmFyIHNsaWNlID0gW10uc2xpY2VcblxuLy8gQ3JlYXRlIG5ldyBtaWRkbGV3YXJlLlxuZnVuY3Rpb24gdHJvdWdoKCkge1xuICB2YXIgZm5zID0gW11cbiAgdmFyIG1pZGRsZXdhcmUgPSB7fVxuXG4gIG1pZGRsZXdhcmUucnVuID0gcnVuXG4gIG1pZGRsZXdhcmUudXNlID0gdXNlXG5cbiAgcmV0dXJuIG1pZGRsZXdhcmVcblxuICAvLyBSdW4gYGZuc2AuICBMYXN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wbGV0aW9uIGhhbmRsZXIuXG4gIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBpbnB1dCA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCAtMSlcbiAgICB2YXIgZG9uZSA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV1cblxuICAgIGlmICh0eXBlb2YgZG9uZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiBhcyBsYXN0IGFyZ3VtZW50LCBub3QgJyArIGRvbmUpXG4gICAgfVxuXG4gICAgbmV4dC5hcHBseShudWxsLCBbbnVsbF0uY29uY2F0KGlucHV0KSlcblxuICAgIC8vIFJ1biB0aGUgbmV4dCBgZm5gLCBpZiBhbnkuXG4gICAgZnVuY3Rpb24gbmV4dChlcnIpIHtcbiAgICAgIHZhciBmbiA9IGZuc1srK2luZGV4XVxuICAgICAgdmFyIHBhcmFtcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxuICAgICAgdmFyIHZhbHVlcyA9IHBhcmFtcy5zbGljZSgxKVxuICAgICAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aFxuICAgICAgdmFyIHBvcyA9IC0xXG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZG9uZShlcnIpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBDb3B5IG5vbi1udWxseSBpbnB1dCBpbnRvIHZhbHVlcy5cbiAgICAgIHdoaWxlICgrK3BvcyA8IGxlbmd0aCkge1xuICAgICAgICBpZiAodmFsdWVzW3Bvc10gPT09IG51bGwgfHwgdmFsdWVzW3Bvc10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbHVlc1twb3NdID0gaW5wdXRbcG9zXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlucHV0ID0gdmFsdWVzXG5cbiAgICAgIC8vIE5leHQgb3IgZG9uZS5cbiAgICAgIGlmIChmbikge1xuICAgICAgICB3cmFwKGZuLCBuZXh0KS5hcHBseShudWxsLCBpbnB1dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUuYXBwbHkobnVsbCwgW251bGxdLmNvbmNhdChpbnB1dCkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGBmbmAgdG8gdGhlIGxpc3QuXG4gIGZ1bmN0aW9uIHVzZShmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYGZuYCB0byBiZSBhIGZ1bmN0aW9uLCBub3QgJyArIGZuKVxuICAgIH1cblxuICAgIGZucy5wdXNoKGZuKVxuXG4gICAgcmV0dXJuIG1pZGRsZXdhcmVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcFxuXG4vLyBXcmFwIGBmbmAuXG4vLyBDYW4gYmUgc3luYyBvciBhc3luYzsgcmV0dXJuIGEgcHJvbWlzZSwgcmVjZWl2ZSBhIGNvbXBsZXRpb24gaGFuZGxlciwgcmV0dXJuXG4vLyBuZXcgdmFsdWVzIGFuZCBlcnJvcnMuXG5mdW5jdGlvbiB3cmFwKGZuLCBjYWxsYmFjaykge1xuICB2YXIgaW52b2tlZFxuXG4gIHJldHVybiB3cmFwcGVkXG5cbiAgZnVuY3Rpb24gd3JhcHBlZCgpIHtcbiAgICB2YXIgcGFyYW1zID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXG4gICAgdmFyIGNhbGxiYWNrID0gZm4ubGVuZ3RoID4gcGFyYW1zLmxlbmd0aFxuICAgIHZhciByZXN1bHRcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcGFyYW1zLnB1c2goZG9uZSlcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gZm4uYXBwbHkobnVsbCwgcGFyYW1zKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBXZWxsLCB0aGlzIGlzIHF1aXRlIHRoZSBwaWNrbGUuXG4gICAgICAvLyBgZm5gIHJlY2VpdmVkIGEgY2FsbGJhY2sgYW5kIGludm9rZWQgaXQgKHRodXMgY29udGludWluZyB0aGUgcGlwZWxpbmUpLFxuICAgICAgLy8gYnV0IGxhdGVyIGFsc28gdGhyZXcgYW4gZXJyb3IuXG4gICAgICAvLyBXZeKAmXJlIG5vdCBhYm91dCB0byByZXN0YXJ0IHRoZSBwaXBlbGluZSBhZ2Fpbiwgc28gdGhlIG9ubHkgdGhpbmcgbGVmdFxuICAgICAgLy8gdG8gZG8gaXMgdG8gdGhyb3cgdGhlIHRoaW5nIGluc3RlYWQuXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaW52b2tlZCkge1xuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZG9uZShlcnJvcilcbiAgICB9XG5cbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXN1bHQudGhlbih0aGVuLCBkb25lKVxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBkb25lKHJlc3VsdClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW4ocmVzdWx0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEludm9rZSBgbmV4dGAsIG9ubHkgb25jZS5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBpZiAoIWludm9rZWQpIHtcbiAgICAgIGludm9rZWQgPSB0cnVlXG5cbiAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cblxuICAvLyBJbnZva2UgYGRvbmVgIHdpdGggb25lIHZhbHVlLlxuICAvLyBUcmFja3MgaWYgYW4gZXJyb3IgaXMgcGFzc2VkLCB0b28uXG4gIGZ1bmN0aW9uIHRoZW4odmFsdWUpIHtcbiAgICBkb25lKG51bGwsIHZhbHVlKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaGVyaXRcblxuLy8gQ3JlYXRlIGEgY3VzdG9tIGNvbnN0cnVjdG9yIHdoaWNoIGNhbiBiZSBtb2RpZmllZCB3aXRob3V0IGFmZmVjdGluZyB0aGVcbi8vIG9yaWdpbmFsIGNsYXNzLlxuZnVuY3Rpb24gdW5oZXJpdChTdXBlcikge1xuICB2YXIgcmVzdWx0XG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG5cbiAgaW5oZXJpdHMoT2YsIFN1cGVyKVxuICBpbmhlcml0cyhGcm9tLCBPZilcblxuICAvLyBDbG9uZSB2YWx1ZXMuXG4gIHJlc3VsdCA9IE9mLnByb3RvdHlwZVxuXG4gIGZvciAoa2V5IGluIHJlc3VsdCkge1xuICAgIHZhbHVlID0gcmVzdWx0W2tleV1cblxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9ICdjb25jYXQnIGluIHZhbHVlID8gdmFsdWUuY29uY2F0KCkgOiB4dGVuZCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT2ZcblxuICAvLyBDb25zdHJ1Y3RvciBhY2NlcHRpbmcgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIGl0c2VsZiBpcyBhbiBgYXJndW1lbnRzYFxuICAvLyBvYmplY3QuXG4gIGZ1bmN0aW9uIEZyb20ocGFyYW1ldGVycykge1xuICAgIHJldHVybiBTdXBlci5hcHBseSh0aGlzLCBwYXJhbWV0ZXJzKVxuICB9XG5cbiAgLy8gQ29uc3RydWN0b3IgYWNjZXB0aW5nIHZhcmlhZGljIGFyZ3VtZW50cy5cbiAgZnVuY3Rpb24gT2YoKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE9mKSkge1xuICAgICAgcmV0dXJuIG5ldyBGcm9tKGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICByZXR1cm4gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZCcpXG52YXIgYmFpbCA9IHJlcXVpcmUoJ2JhaWwnKVxudmFyIHZmaWxlID0gcmVxdWlyZSgndmZpbGUnKVxudmFyIHRyb3VnaCA9IHJlcXVpcmUoJ3Ryb3VnaCcpXG52YXIgcGxhaW4gPSByZXF1aXJlKCdpcy1wbGFpbi1vYmonKVxuXG4vLyBFeHBvc2UgYSBmcm96ZW4gcHJvY2Vzc29yLlxubW9kdWxlLmV4cG9ydHMgPSB1bmlmaWVkKCkuZnJlZXplKClcblxudmFyIHNsaWNlID0gW10uc2xpY2VcbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBQcm9jZXNzIHBpcGVsaW5lLlxudmFyIHBpcGVsaW5lID0gdHJvdWdoKClcbiAgLnVzZShwaXBlbGluZVBhcnNlKVxuICAudXNlKHBpcGVsaW5lUnVuKVxuICAudXNlKHBpcGVsaW5lU3RyaW5naWZ5KVxuXG5mdW5jdGlvbiBwaXBlbGluZVBhcnNlKHAsIGN0eCkge1xuICBjdHgudHJlZSA9IHAucGFyc2UoY3R4LmZpbGUpXG59XG5cbmZ1bmN0aW9uIHBpcGVsaW5lUnVuKHAsIGN0eCwgbmV4dCkge1xuICBwLnJ1bihjdHgudHJlZSwgY3R4LmZpbGUsIGRvbmUpXG5cbiAgZnVuY3Rpb24gZG9uZShlcnIsIHRyZWUsIGZpbGUpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBuZXh0KGVycilcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnRyZWUgPSB0cmVlXG4gICAgICBjdHguZmlsZSA9IGZpbGVcbiAgICAgIG5leHQoKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwaXBlbGluZVN0cmluZ2lmeShwLCBjdHgpIHtcbiAgY3R4LmZpbGUuY29udGVudHMgPSBwLnN0cmluZ2lmeShjdHgudHJlZSwgY3R4LmZpbGUpXG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZmlyc3QgcHJvY2Vzc29yLlxuZnVuY3Rpb24gdW5pZmllZCgpIHtcbiAgdmFyIGF0dGFjaGVycyA9IFtdXG4gIHZhciB0cmFuc2Zvcm1lcnMgPSB0cm91Z2goKVxuICB2YXIgbmFtZXNwYWNlID0ge31cbiAgdmFyIGZyb3plbiA9IGZhbHNlXG4gIHZhciBmcmVlemVJbmRleCA9IC0xXG5cbiAgLy8gRGF0YSBtYW5hZ2VtZW50LlxuICBwcm9jZXNzb3IuZGF0YSA9IGRhdGFcblxuICAvLyBMb2NrLlxuICBwcm9jZXNzb3IuZnJlZXplID0gZnJlZXplXG5cbiAgLy8gUGx1Z2lucy5cbiAgcHJvY2Vzc29yLmF0dGFjaGVycyA9IGF0dGFjaGVyc1xuICBwcm9jZXNzb3IudXNlID0gdXNlXG5cbiAgLy8gQVBJLlxuICBwcm9jZXNzb3IucGFyc2UgPSBwYXJzZVxuICBwcm9jZXNzb3Iuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG4gIHByb2Nlc3Nvci5ydW4gPSBydW5cbiAgcHJvY2Vzc29yLnJ1blN5bmMgPSBydW5TeW5jXG4gIHByb2Nlc3Nvci5wcm9jZXNzID0gcHJvY2Vzc1xuICBwcm9jZXNzb3IucHJvY2Vzc1N5bmMgPSBwcm9jZXNzU3luY1xuXG4gIC8vIEV4cG9zZS5cbiAgcmV0dXJuIHByb2Nlc3NvclxuXG4gIC8vIENyZWF0ZSBhIG5ldyBwcm9jZXNzb3IgYmFzZWQgb24gdGhlIHByb2Nlc3NvciBpbiB0aGUgY3VycmVudCBzY29wZS5cbiAgZnVuY3Rpb24gcHJvY2Vzc29yKCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHVuaWZpZWQoKVxuICAgIHZhciBsZW5ndGggPSBhdHRhY2hlcnMubGVuZ3RoXG4gICAgdmFyIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBkZXN0aW5hdGlvbi51c2UuYXBwbHkobnVsbCwgYXR0YWNoZXJzW2luZGV4XSlcbiAgICB9XG5cbiAgICBkZXN0aW5hdGlvbi5kYXRhKGV4dGVuZCh0cnVlLCB7fSwgbmFtZXNwYWNlKSlcblxuICAgIHJldHVybiBkZXN0aW5hdGlvblxuICB9XG5cbiAgLy8gRnJlZXplOiB1c2VkIHRvIHNpZ25hbCBhIHByb2Nlc3NvciB0aGF0IGhhcyBmaW5pc2hlZCBjb25maWd1cmF0aW9uLlxuICAvL1xuICAvLyBGb3IgZXhhbXBsZSwgdGFrZSB1bmlmaWVkIGl0c2VsZjogaXTigJlzIGZyb3plbi5cbiAgLy8gUGx1Z2lucyBzaG91bGQgbm90IGJlIGFkZGVkIHRvIGl0LlxuICAvLyBSYXRoZXIsIGl0IHNob3VsZCBiZSBleHRlbmRlZCwgYnkgaW52b2tpbmcgaXQsIGJlZm9yZSBtb2RpZnlpbmcgaXQuXG4gIC8vXG4gIC8vIEluIGVzc2VuY2UsIGFsd2F5cyBpbnZva2UgdGhpcyB3aGVuIGV4cG9ydGluZyBhIHByb2Nlc3Nvci5cbiAgZnVuY3Rpb24gZnJlZXplKCkge1xuICAgIHZhciB2YWx1ZXNcbiAgICB2YXIgcGx1Z2luXG4gICAgdmFyIG9wdGlvbnNcbiAgICB2YXIgdHJhbnNmb3JtZXJcblxuICAgIGlmIChmcm96ZW4pIHtcbiAgICAgIHJldHVybiBwcm9jZXNzb3JcbiAgICB9XG5cbiAgICB3aGlsZSAoKytmcmVlemVJbmRleCA8IGF0dGFjaGVycy5sZW5ndGgpIHtcbiAgICAgIHZhbHVlcyA9IGF0dGFjaGVyc1tmcmVlemVJbmRleF1cbiAgICAgIHBsdWdpbiA9IHZhbHVlc1swXVxuICAgICAgb3B0aW9ucyA9IHZhbHVlc1sxXVxuICAgICAgdHJhbnNmb3JtZXIgPSBudWxsXG5cbiAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWx1ZXNbMV0gPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgdHJhbnNmb3JtZXIgPSBwbHVnaW4uYXBwbHkocHJvY2Vzc29yLCB2YWx1ZXMuc2xpY2UoMSkpXG5cbiAgICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdHJhbnNmb3JtZXJzLnVzZSh0cmFuc2Zvcm1lcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmcm96ZW4gPSB0cnVlXG4gICAgZnJlZXplSW5kZXggPSBJbmZpbml0eVxuXG4gICAgcmV0dXJuIHByb2Nlc3NvclxuICB9XG5cbiAgLy8gRGF0YSBtYW5hZ2VtZW50LlxuICAvLyBHZXR0ZXIgLyBzZXR0ZXIgZm9yIHByb2Nlc3Nvci1zcGVjaWZpYyBpbmZvcm10aW9uLlxuICBmdW5jdGlvbiBkYXRhKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFNldCBga2V5YC5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGFzc2VydFVuZnJvemVuKCdkYXRhJywgZnJvemVuKVxuXG4gICAgICAgIG5hbWVzcGFjZVtrZXldID0gdmFsdWVcblxuICAgICAgICByZXR1cm4gcHJvY2Vzc29yXG4gICAgICB9XG5cbiAgICAgIC8vIEdldCBga2V5YC5cbiAgICAgIHJldHVybiAob3duLmNhbGwobmFtZXNwYWNlLCBrZXkpICYmIG5hbWVzcGFjZVtrZXldKSB8fCBudWxsXG4gICAgfVxuXG4gICAgLy8gU2V0IHNwYWNlLlxuICAgIGlmIChrZXkpIHtcbiAgICAgIGFzc2VydFVuZnJvemVuKCdkYXRhJywgZnJvemVuKVxuICAgICAgbmFtZXNwYWNlID0ga2V5XG4gICAgICByZXR1cm4gcHJvY2Vzc29yXG4gICAgfVxuXG4gICAgLy8gR2V0IHNwYWNlLlxuICAgIHJldHVybiBuYW1lc3BhY2VcbiAgfVxuXG4gIC8vIFBsdWdpbiBtYW5hZ2VtZW50LlxuICAvL1xuICAvLyBQYXNzIGl0OlxuICAvLyAqICAgYW4gYXR0YWNoZXIgYW5kIG9wdGlvbnMsXG4gIC8vICogICBhIHByZXNldCxcbiAgLy8gKiAgIGEgbGlzdCBvZiBwcmVzZXRzLCBhdHRhY2hlcnMsIGFuZCBhcmd1bWVudHMgKGxpc3Qgb2YgYXR0YWNoZXJzIGFuZFxuICAvLyAgICAgb3B0aW9ucykuXG4gIGZ1bmN0aW9uIHVzZSh2YWx1ZSkge1xuICAgIHZhciBzZXR0aW5nc1xuXG4gICAgYXNzZXJ0VW5mcm96ZW4oJ3VzZScsIGZyb3plbilcblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFbXB0eS5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWRkUGx1Z2luLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICgnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgICAgICBhZGRMaXN0KHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkUHJlc2V0KHZhbHVlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHVzYWJsZSB2YWx1ZSwgbm90IGAnICsgdmFsdWUgKyAnYCcpXG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzKSB7XG4gICAgICBuYW1lc3BhY2Uuc2V0dGluZ3MgPSBleHRlbmQobmFtZXNwYWNlLnNldHRpbmdzIHx8IHt9LCBzZXR0aW5ncylcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc29yXG5cbiAgICBmdW5jdGlvbiBhZGRQcmVzZXQocmVzdWx0KSB7XG4gICAgICBhZGRMaXN0KHJlc3VsdC5wbHVnaW5zKVxuXG4gICAgICBpZiAocmVzdWx0LnNldHRpbmdzKSB7XG4gICAgICAgIHNldHRpbmdzID0gZXh0ZW5kKHNldHRpbmdzIHx8IHt9LCByZXN1bHQuc2V0dGluZ3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFkZFBsdWdpbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICBhZGRQbHVnaW4uYXBwbHkobnVsbCwgdmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkUHJlc2V0KHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHVzYWJsZSB2YWx1ZSwgbm90IGAnICsgdmFsdWUgKyAnYCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdChwbHVnaW5zKSB7XG4gICAgICB2YXIgbGVuZ3RoXG4gICAgICB2YXIgaW5kZXhcblxuICAgICAgaWYgKHBsdWdpbnMgPT09IG51bGwgfHwgcGx1Z2lucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIEVtcHR5LlxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gcGx1Z2lucykge1xuICAgICAgICBsZW5ndGggPSBwbHVnaW5zLmxlbmd0aFxuICAgICAgICBpbmRleCA9IC0xXG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBhZGQocGx1Z2luc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYSBsaXN0IG9mIHBsdWdpbnMsIG5vdCBgJyArIHBsdWdpbnMgKyAnYCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUGx1Z2luKHBsdWdpbiwgdmFsdWUpIHtcbiAgICAgIHZhciBlbnRyeSA9IGZpbmQocGx1Z2luKVxuXG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKHBsYWluKGVudHJ5WzFdKSAmJiBwbGFpbih2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IGV4dGVuZChlbnRyeVsxXSwgdmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBlbnRyeVsxXSA9IHZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRhY2hlcnMucHVzaChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZChwbHVnaW4pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXR0YWNoZXJzLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGVudHJ5XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgZW50cnkgPSBhdHRhY2hlcnNbaW5kZXhdXG5cbiAgICAgIGlmIChlbnRyeVswXSA9PT0gcGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBlbnRyeVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlIGEgZmlsZSAoaW4gc3RyaW5nIG9yIHZmaWxlIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgdW5pc3Qgbm9kZSB1c2luZ1xuICAvLyB0aGUgYFBhcnNlcmAgb24gdGhlIHByb2Nlc3Nvci5cbiAgZnVuY3Rpb24gcGFyc2UoZG9jKSB7XG4gICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG4gICAgdmFyIFBhcnNlclxuXG4gICAgZnJlZXplKClcbiAgICBQYXJzZXIgPSBwcm9jZXNzb3IuUGFyc2VyXG4gICAgYXNzZXJ0UGFyc2VyKCdwYXJzZScsIFBhcnNlcilcblxuICAgIGlmIChuZXdhYmxlKFBhcnNlciwgJ3BhcnNlJykpIHtcbiAgICAgIHJldHVybiBuZXcgUGFyc2VyKFN0cmluZyhmaWxlKSwgZmlsZSkucGFyc2UoKVxuICAgIH1cblxuICAgIHJldHVybiBQYXJzZXIoU3RyaW5nKGZpbGUpLCBmaWxlKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgfVxuXG4gIC8vIFJ1biB0cmFuc2Zvcm1zIG9uIGEgdW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGUgKGluIHN0cmluZyBvclxuICAvLyB2ZmlsZSByZXByZXNlbnRhdGlvbiksIGFzeW5jLlxuICBmdW5jdGlvbiBydW4obm9kZSwgZmlsZSwgY2IpIHtcbiAgICBhc3NlcnROb2RlKG5vZGUpXG4gICAgZnJlZXplKClcblxuICAgIGlmICghY2IgJiYgdHlwZW9mIGZpbGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gZmlsZVxuICAgICAgZmlsZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoIWNiKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG4gICAgfVxuXG4gICAgZXhlY3V0b3IobnVsbCwgY2IpXG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRyYW5zZm9ybWVycy5ydW4obm9kZSwgdmZpbGUoZmlsZSksIGRvbmUpXG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyLCB0cmVlLCBmaWxlKSB7XG4gICAgICAgIHRyZWUgPSB0cmVlIHx8IG5vZGVcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUodHJlZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihudWxsLCB0cmVlLCBmaWxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUnVuIHRyYW5zZm9ybXMgb24gYSB1bmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZSAoaW4gc3RyaW5nIG9yXG4gIC8vIHZmaWxlIHJlcHJlc2VudGF0aW9uKSwgc3luYy5cbiAgZnVuY3Rpb24gcnVuU3luYyhub2RlLCBmaWxlKSB7XG4gICAgdmFyIGNvbXBsZXRlID0gZmFsc2VcbiAgICB2YXIgcmVzdWx0XG5cbiAgICBydW4obm9kZSwgZmlsZSwgZG9uZSlcblxuICAgIGFzc2VydERvbmUoJ3J1blN5bmMnLCAncnVuJywgY29tcGxldGUpXG5cbiAgICByZXR1cm4gcmVzdWx0XG5cbiAgICBmdW5jdGlvbiBkb25lKGVyciwgdHJlZSkge1xuICAgICAgY29tcGxldGUgPSB0cnVlXG4gICAgICBiYWlsKGVycilcbiAgICAgIHJlc3VsdCA9IHRyZWVcbiAgICB9XG4gIH1cblxuICAvLyBTdHJpbmdpZnkgYSB1bmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZSAoaW4gc3RyaW5nIG9yIHZmaWxlXG4gIC8vIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgc3RyaW5nIHVzaW5nIHRoZSBgQ29tcGlsZXJgIG9uIHRoZSBwcm9jZXNzb3IuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeShub2RlLCBkb2MpIHtcbiAgICB2YXIgZmlsZSA9IHZmaWxlKGRvYylcbiAgICB2YXIgQ29tcGlsZXJcblxuICAgIGZyZWV6ZSgpXG4gICAgQ29tcGlsZXIgPSBwcm9jZXNzb3IuQ29tcGlsZXJcbiAgICBhc3NlcnRDb21waWxlcignc3RyaW5naWZ5JywgQ29tcGlsZXIpXG4gICAgYXNzZXJ0Tm9kZShub2RlKVxuXG4gICAgaWYgKG5ld2FibGUoQ29tcGlsZXIsICdjb21waWxlJykpIHtcbiAgICAgIHJldHVybiBuZXcgQ29tcGlsZXIobm9kZSwgZmlsZSkuY29tcGlsZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIENvbXBpbGVyKG5vZGUsIGZpbGUpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuICB9XG5cbiAgLy8gUGFyc2UgYSBmaWxlIChpbiBzdHJpbmcgb3IgdmZpbGUgcmVwcmVzZW50YXRpb24pIGludG8gYSB1bmlzdCBub2RlIHVzaW5nXG4gIC8vIHRoZSBgUGFyc2VyYCBvbiB0aGUgcHJvY2Vzc29yLCB0aGVuIHJ1biB0cmFuc2Zvcm1zIG9uIHRoYXQgbm9kZSwgYW5kXG4gIC8vIGNvbXBpbGUgdGhlIHJlc3VsdGluZyBub2RlIHVzaW5nIHRoZSBgQ29tcGlsZXJgIG9uIHRoZSBwcm9jZXNzb3IsIGFuZFxuICAvLyBzdG9yZSB0aGF0IHJlc3VsdCBvbiB0aGUgdmZpbGUuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoZG9jLCBjYikge1xuICAgIGZyZWV6ZSgpXG4gICAgYXNzZXJ0UGFyc2VyKCdwcm9jZXNzJywgcHJvY2Vzc29yLlBhcnNlcilcbiAgICBhc3NlcnRDb21waWxlcigncHJvY2VzcycsIHByb2Nlc3Nvci5Db21waWxlcilcblxuICAgIGlmICghY2IpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcilcbiAgICB9XG5cbiAgICBleGVjdXRvcihudWxsLCBjYilcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG5cbiAgICAgIHBpcGVsaW5lLnJ1bihwcm9jZXNzb3IsIHtmaWxlOiBmaWxlfSwgZG9uZSlcblxuICAgICAgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUoZmlsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihudWxsLCBmaWxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUHJvY2VzcyB0aGUgZ2l2ZW4gZG9jdW1lbnQgKGluIHN0cmluZyBvciB2ZmlsZSByZXByZXNlbnRhdGlvbiksIHN5bmMuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTeW5jKGRvYykge1xuICAgIHZhciBjb21wbGV0ZSA9IGZhbHNlXG4gICAgdmFyIGZpbGVcblxuICAgIGZyZWV6ZSgpXG4gICAgYXNzZXJ0UGFyc2VyKCdwcm9jZXNzU3luYycsIHByb2Nlc3Nvci5QYXJzZXIpXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3Byb2Nlc3NTeW5jJywgcHJvY2Vzc29yLkNvbXBpbGVyKVxuICAgIGZpbGUgPSB2ZmlsZShkb2MpXG5cbiAgICBwcm9jZXNzKGZpbGUsIGRvbmUpXG5cbiAgICBhc3NlcnREb25lKCdwcm9jZXNzU3luYycsICdwcm9jZXNzJywgY29tcGxldGUpXG5cbiAgICByZXR1cm4gZmlsZVxuXG4gICAgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgIGNvbXBsZXRlID0gdHJ1ZVxuICAgICAgYmFpbChlcnIpXG4gICAgfVxuICB9XG59XG5cbi8vIENoZWNrIGlmIGB2YWx1ZWAgaXMgYSBjb25zdHJ1Y3Rvci5cbmZ1bmN0aW9uIG5ld2FibGUodmFsdWUsIG5hbWUpIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiZcbiAgICB2YWx1ZS5wcm90b3R5cGUgJiZcbiAgICAvLyBBIGZ1bmN0aW9uIHdpdGgga2V5cyBpbiBpdHMgcHJvdG90eXBlIGlzIHByb2JhYmx5IGEgY29uc3RydWN0b3IuXG4gICAgLy8gQ2xhc3Nlc+KAmSBwcm90b3R5cGUgbWV0aG9kcyBhcmUgbm90IGVudW1lcmFibGUsIHNvIHdlIGNoZWNrIGlmIHNvbWUgdmFsdWVcbiAgICAvLyBleGlzdHMgaW4gdGhlIHByb3RvdHlwZS5cbiAgICAoa2V5cyh2YWx1ZS5wcm90b3R5cGUpIHx8IG5hbWUgaW4gdmFsdWUucHJvdG90eXBlKVxuICApXG59XG5cbi8vIENoZWNrIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0IHdpdGgga2V5cy5cbmZ1bmN0aW9uIGtleXModmFsdWUpIHtcbiAgdmFyIGtleVxuICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gQXNzZXJ0IGEgcGFyc2VyIGlzIGF2YWlsYWJsZS5cbmZ1bmN0aW9uIGFzc2VydFBhcnNlcihuYW1lLCBQYXJzZXIpIHtcbiAgaWYgKHR5cGVvZiBQYXJzZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBgJyArIG5hbWUgKyAnYCB3aXRob3V0IGBQYXJzZXJgJylcbiAgfVxufVxuXG4vLyBBc3NlcnQgYSBjb21waWxlciBpcyBhdmFpbGFibGUuXG5mdW5jdGlvbiBhc3NlcnRDb21waWxlcihuYW1lLCBDb21waWxlcikge1xuICBpZiAodHlwZW9mIENvbXBpbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYCcgKyBuYW1lICsgJ2Agd2l0aG91dCBgQ29tcGlsZXJgJylcbiAgfVxufVxuXG4vLyBBc3NlcnQgdGhlIHByb2Nlc3NvciBpcyBub3QgZnJvemVuLlxuZnVuY3Rpb24gYXNzZXJ0VW5mcm96ZW4obmFtZSwgZnJvemVuKSB7XG4gIGlmIChmcm96ZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IGludm9rZSBgJyArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICAnYCBvbiBhIGZyb3plbiBwcm9jZXNzb3IuXFxuQ3JlYXRlIGEgbmV3IHByb2Nlc3NvciBmaXJzdCwgYnkgaW52b2tpbmcgaXQ6IHVzZSBgcHJvY2Vzc29yKClgIGluc3RlYWQgb2YgYHByb2Nlc3NvcmAuJ1xuICAgIClcbiAgfVxufVxuXG4vLyBBc3NlcnQgYG5vZGVgIGlzIGEgdW5pc3Qgbm9kZS5cbmZ1bmN0aW9uIGFzc2VydE5vZGUobm9kZSkge1xuICBpZiAoIW5vZGUgfHwgdHlwZW9mIG5vZGUudHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIG5vZGUsIGdvdCBgJyArIG5vZGUgKyAnYCcpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IHRoYXQgYGNvbXBsZXRlYCBpcyBgdHJ1ZWAuXG5mdW5jdGlvbiBhc3NlcnREb25lKG5hbWUsIGFzeW5jTmFtZSwgY29tcGxldGUpIHtcbiAgaWYgKCFjb21wbGV0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdgJyArIG5hbWUgKyAnYCBmaW5pc2hlZCBhc3luYy4gVXNlIGAnICsgYXN5bmNOYW1lICsgJ2AgaW5zdGVhZCdcbiAgICApXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZmluZEFmdGVyXG5cbmZ1bmN0aW9uIGZpbmRBZnRlcihwYXJlbnQsIGluZGV4LCB0ZXN0KSB7XG4gIHZhciBpcyA9IGNvbnZlcnQodGVzdClcbiAgdmFyIGNoaWxkcmVuXG4gIHZhciBjaGlsZFxuICB2YXIgbGVuZ3RoXG5cbiAgaWYgKCFwYXJlbnQgfHwgIXBhcmVudC50eXBlIHx8ICFwYXJlbnQuY2hpbGRyZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBhcmVudCBub2RlJylcbiAgfVxuXG4gIGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuXG4gIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuXG4gIGlmIChpbmRleCAmJiBpbmRleC50eXBlKSB7XG4gICAgaW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKGluZGV4KVxuICB9XG5cbiAgaWYgKGlzTmFOKGluZGV4KSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPT09IEluZmluaXR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBmaW5pdGUgaW5kZXggb3IgY2hpbGQgbm9kZScpXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG5cbiAgICBpZiAoaXMoY2hpbGQsIGluZGV4LCBwYXJlbnQpKSB7XG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydFxuXG5mdW5jdGlvbiBjb252ZXJ0KHRlc3QpIHtcbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlRmFjdG9yeSh0ZXN0KVxuICB9XG5cbiAgaWYgKHRlc3QgPT09IG51bGwgfHwgdGVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG9rXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICgnbGVuZ3RoJyBpbiB0ZXN0ID8gYW55RmFjdG9yeSA6IG1hdGNoZXNGYWN0b3J5KSh0ZXN0KVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRlc3RcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24sIHN0cmluZywgb3Igb2JqZWN0IGFzIHRlc3QnKVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0QWxsKHRlc3RzKSB7XG4gIHZhciByZXN1bHRzID0gW11cbiAgdmFyIGxlbmd0aCA9IHRlc3RzLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0c1tpbmRleF0gPSBjb252ZXJ0KHRlc3RzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzXG59XG5cbi8vIFV0aWxpdHkgYXNzZXJ0IGVhY2ggcHJvcGVydHkgaW4gYHRlc3RgIGlzIHJlcHJlc2VudGVkIGluIGBub2RlYCwgYW5kIGVhY2hcbi8vIHZhbHVlcyBhcmUgc3RyaWN0bHkgZXF1YWwuXG5mdW5jdGlvbiBtYXRjaGVzRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiBtYXRjaGVzXG5cbiAgZnVuY3Rpb24gbWF0Y2hlcyhub2RlKSB7XG4gICAgdmFyIGtleVxuXG4gICAgZm9yIChrZXkgaW4gdGVzdCkge1xuICAgICAgaWYgKG5vZGVba2V5XSAhPT0gdGVzdFtrZXldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gYW55RmFjdG9yeSh0ZXN0cykge1xuICB2YXIgY2hlY2tzID0gY29udmVydEFsbCh0ZXN0cylcbiAgdmFyIGxlbmd0aCA9IGNoZWNrcy5sZW5ndGhcblxuICByZXR1cm4gbWF0Y2hlc1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMoKSB7XG4gICAgdmFyIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoY2hlY2tzW2luZGV4XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgYSBnaXZlbiBub2Rl4oCZcyB0eXBlXG4vLyBmb3Igc2FpZCBzdHJpbmcuXG5mdW5jdGlvbiB0eXBlRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiB0eXBlXG5cbiAgZnVuY3Rpb24gdHlwZShub2RlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4obm9kZSAmJiBub2RlLnR5cGUgPT09IHRlc3QpXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byByZXR1cm4gdHJ1ZS5cbmZ1bmN0aW9uIG9rKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnYXJyYXktaXRlcmF0ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gbW9kaWZpZXJGYWN0b3J5XG5cbi8vIFR1cm4gYGNhbGxiYWNrYCBpbnRvIGEgY2hpbGQtbW9kaWZpZXIgYWNjZXB0aW5nIGEgcGFyZW50LiAgU2VlXG4vLyBgYXJyYXktaXRlcmF0ZWAgZm9yIG1vcmUgaW5mby5cbmZ1bmN0aW9uIG1vZGlmaWVyRmFjdG9yeShjYWxsYmFjaykge1xuICByZXR1cm4gaXRlcmF0b3JGYWN0b3J5KHdyYXBwZXJGYWN0b3J5KGNhbGxiYWNrKSlcbn1cblxuLy8gVHVybiBgY2FsbGJhY2tgIGludG8gYSBgaXRlcmF0b3InIGFjY2VwdGluZyBhIHBhcmVudC5cbmZ1bmN0aW9uIGl0ZXJhdG9yRmFjdG9yeShjYWxsYmFjaykge1xuICByZXR1cm4gaXRlcmF0b3JcblxuICBmdW5jdGlvbiBpdGVyYXRvcihwYXJlbnQpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQgJiYgcGFyZW50LmNoaWxkcmVuXG5cbiAgICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY2hpbGRyZW4gaW4gYHBhcmVudGAgZm9yIGBtb2RpZmllcmAnKVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRlKGNoaWxkcmVuLCBjYWxsYmFjaywgcGFyZW50KVxuICB9XG59XG5cbi8vIFBhc3MgdGhlIGNvbnRleHQgYXMgdGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBjYWxsYmFja2AuXG5mdW5jdGlvbiB3cmFwcGVyRmFjdG9yeShjYWxsYmFjaykge1xuICByZXR1cm4gd3JhcHBlclxuXG4gIGZ1bmN0aW9uIHdyYXBwZXIodmFsdWUsIGluZGV4KSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKHZhbHVlLCBpbmRleCwgdGhpcylcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcbiAgLy8gTm90aGluZy5cbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBOb2RlLlxuICBpZiAob3duLmNhbGwodmFsdWUsICdwb3NpdGlvbicpIHx8IG93bi5jYWxsKHZhbHVlLCAndHlwZScpKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uKHZhbHVlLnBvc2l0aW9uKVxuICB9XG5cbiAgLy8gUG9zaXRpb24uXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ3N0YXJ0JykgfHwgb3duLmNhbGwodmFsdWUsICdlbmQnKSkge1xuICAgIHJldHVybiBwb3NpdGlvbih2YWx1ZSlcbiAgfVxuXG4gIC8vIFBvaW50LlxuICBpZiAob3duLmNhbGwodmFsdWUsICdsaW5lJykgfHwgb3duLmNhbGwodmFsdWUsICdjb2x1bW4nKSkge1xuICAgIHJldHVybiBwb2ludCh2YWx1ZSlcbiAgfVxuXG4gIC8vID9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIHBvaW50KHBvaW50KSB7XG4gIGlmICghcG9pbnQgfHwgdHlwZW9mIHBvaW50ICE9PSAnb2JqZWN0Jykge1xuICAgIHBvaW50ID0ge31cbiAgfVxuXG4gIHJldHVybiBpbmRleChwb2ludC5saW5lKSArICc6JyArIGluZGV4KHBvaW50LmNvbHVtbilcbn1cblxuZnVuY3Rpb24gcG9zaXRpb24ocG9zKSB7XG4gIGlmICghcG9zIHx8IHR5cGVvZiBwb3MgIT09ICdvYmplY3QnKSB7XG4gICAgcG9zID0ge31cbiAgfVxuXG4gIHJldHVybiBwb2ludChwb3Muc3RhcnQpICsgJy0nICsgcG9pbnQocG9zLmVuZClcbn1cblxuZnVuY3Rpb24gaW5kZXgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IDFcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0UGFyZW50c1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG5cbnZhciBDT05USU5VRSA9IHRydWVcbnZhciBTS0lQID0gJ3NraXAnXG52YXIgRVhJVCA9IGZhbHNlXG5cbnZpc2l0UGFyZW50cy5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdFBhcmVudHMuU0tJUCA9IFNLSVBcbnZpc2l0UGFyZW50cy5FWElUID0gRVhJVFxuXG5mdW5jdGlvbiB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICB2YXIgaXNcblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIGlzID0gY29udmVydCh0ZXN0KVxuXG4gIG9uZSh0cmVlLCBudWxsLCBbXSlcblxuICAvLyBWaXNpdCBhIHNpbmdsZSBub2RlLlxuICBmdW5jdGlvbiBvbmUobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB2YXIgc3VicmVzdWx0XG5cbiAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCBudWxsKSkge1xuICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICBzdWJyZXN1bHQgPSB0b1Jlc3VsdChhbGwobm9kZS5jaGlsZHJlbiwgcGFyZW50cy5jb25jYXQobm9kZSkpKVxuICAgICAgcmV0dXJuIHN1YnJlc3VsdFswXSA9PT0gRVhJVCA/IHN1YnJlc3VsdCA6IHJlc3VsdFxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vIFZpc2l0IGNoaWxkcmVuIGluIGBwYXJlbnRgLlxuICBmdW5jdGlvbiBhbGwoY2hpbGRyZW4sIHBhcmVudHMpIHtcbiAgICB2YXIgbWluID0gLTFcbiAgICB2YXIgc3RlcCA9IHJldmVyc2UgPyAtMSA6IDFcbiAgICB2YXIgaW5kZXggPSAocmV2ZXJzZSA/IGNoaWxkcmVuLmxlbmd0aCA6IG1pbikgKyBzdGVwXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgd2hpbGUgKGluZGV4ID4gbWluICYmIGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBvbmUoY2hpbGRyZW5baW5kZXhdLCBpbmRleCwgcGFyZW50cylcblxuICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gdHlwZW9mIHJlc3VsdFsxXSA9PT0gJ251bWJlcicgPyByZXN1bHRbMV0gOiBpbmRleCArIHN0ZXBcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFtDT05USU5VRSwgdmFsdWVdXG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydFxuXG5mdW5jdGlvbiBjb252ZXJ0KHRlc3QpIHtcbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlRmFjdG9yeSh0ZXN0KVxuICB9XG5cbiAgaWYgKHRlc3QgPT09IG51bGwgfHwgdGVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG9rXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICgnbGVuZ3RoJyBpbiB0ZXN0ID8gYW55RmFjdG9yeSA6IG1hdGNoZXNGYWN0b3J5KSh0ZXN0KVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRlc3RcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24sIHN0cmluZywgb3Igb2JqZWN0IGFzIHRlc3QnKVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0QWxsKHRlc3RzKSB7XG4gIHZhciByZXN1bHRzID0gW11cbiAgdmFyIGxlbmd0aCA9IHRlc3RzLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0c1tpbmRleF0gPSBjb252ZXJ0KHRlc3RzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzXG59XG5cbi8vIFV0aWxpdHkgYXNzZXJ0IGVhY2ggcHJvcGVydHkgaW4gYHRlc3RgIGlzIHJlcHJlc2VudGVkIGluIGBub2RlYCwgYW5kIGVhY2hcbi8vIHZhbHVlcyBhcmUgc3RyaWN0bHkgZXF1YWwuXG5mdW5jdGlvbiBtYXRjaGVzRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiBtYXRjaGVzXG5cbiAgZnVuY3Rpb24gbWF0Y2hlcyhub2RlKSB7XG4gICAgdmFyIGtleVxuXG4gICAgZm9yIChrZXkgaW4gdGVzdCkge1xuICAgICAgaWYgKG5vZGVba2V5XSAhPT0gdGVzdFtrZXldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gYW55RmFjdG9yeSh0ZXN0cykge1xuICB2YXIgY2hlY2tzID0gY29udmVydEFsbCh0ZXN0cylcbiAgdmFyIGxlbmd0aCA9IGNoZWNrcy5sZW5ndGhcblxuICByZXR1cm4gbWF0Y2hlc1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMoKSB7XG4gICAgdmFyIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoY2hlY2tzW2luZGV4XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgYSBnaXZlbiBub2Rl4oCZcyB0eXBlXG4vLyBmb3Igc2FpZCBzdHJpbmcuXG5mdW5jdGlvbiB0eXBlRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiB0eXBlXG5cbiAgZnVuY3Rpb24gdHlwZShub2RlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4obm9kZSAmJiBub2RlLnR5cGUgPT09IHRlc3QpXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byByZXR1cm4gdHJ1ZS5cbmZ1bmN0aW9uIG9rKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRcblxudmFyIHZpc2l0UGFyZW50cyA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpXG5cbnZhciBDT05USU5VRSA9IHZpc2l0UGFyZW50cy5DT05USU5VRVxudmFyIFNLSVAgPSB2aXNpdFBhcmVudHMuU0tJUFxudmFyIEVYSVQgPSB2aXNpdFBhcmVudHMuRVhJVFxuXG52aXNpdC5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdC5TS0lQID0gU0tJUFxudmlzaXQuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXQodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgIHZhciBpbmRleCA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbFxuICAgIHJldHVybiB2aXNpdG9yKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgc3RyaW5naWZ5ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZNZXNzYWdlXG5cbi8vIEluaGVyaXQgZnJvbSBgRXJyb3IjYC5cbmZ1bmN0aW9uIFZNZXNzYWdlUHJvdG90eXBlKCkge31cblZNZXNzYWdlUHJvdG90eXBlLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZVxuVk1lc3NhZ2UucHJvdG90eXBlID0gbmV3IFZNZXNzYWdlUHJvdG90eXBlKClcblxuLy8gTWVzc2FnZSBwcm9wZXJ0aWVzLlxudmFyIHByb3RvID0gVk1lc3NhZ2UucHJvdG90eXBlXG5cbnByb3RvLmZpbGUgPSAnJ1xucHJvdG8ubmFtZSA9ICcnXG5wcm90by5yZWFzb24gPSAnJ1xucHJvdG8ubWVzc2FnZSA9ICcnXG5wcm90by5zdGFjayA9ICcnXG5wcm90by5mYXRhbCA9IG51bGxcbnByb3RvLmNvbHVtbiA9IG51bGxcbnByb3RvLmxpbmUgPSBudWxsXG5cbi8vIENvbnN0cnVjdCBhIG5ldyBWTWVzc2FnZS5cbi8vXG4vLyBOb3RlOiBXZSBjYW5ub3QgaW52b2tlIGBFcnJvcmAgb24gdGhlIGNyZWF0ZWQgY29udGV4dCwgYXMgdGhhdCBhZGRzIHJlYWRvbmx5XG4vLyBgbGluZWAgYW5kIGBjb2x1bW5gIGF0dHJpYnV0ZXMgb24gU2FmYXJpIDksIHRodXMgdGhyb3dpbmcgYW5kIGZhaWxpbmcgdGhlXG4vLyBkYXRhLlxuZnVuY3Rpb24gVk1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbiwgb3JpZ2luKSB7XG4gIHZhciBwYXJ0c1xuICB2YXIgcmFuZ2VcbiAgdmFyIGxvY2F0aW9uXG5cbiAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICBvcmlnaW4gPSBwb3NpdGlvblxuICAgIHBvc2l0aW9uID0gbnVsbFxuICB9XG5cbiAgcGFydHMgPSBwYXJzZU9yaWdpbihvcmlnaW4pXG4gIHJhbmdlID0gc3RyaW5naWZ5KHBvc2l0aW9uKSB8fCAnMToxJ1xuXG4gIGxvY2F0aW9uID0ge1xuICAgIHN0YXJ0OiB7bGluZTogbnVsbCwgY29sdW1uOiBudWxsfSxcbiAgICBlbmQ6IHtsaW5lOiBudWxsLCBjb2x1bW46IG51bGx9XG4gIH1cblxuICAvLyBOb2RlLlxuICBpZiAocG9zaXRpb24gJiYgcG9zaXRpb24ucG9zaXRpb24pIHtcbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnBvc2l0aW9uXG4gIH1cblxuICBpZiAocG9zaXRpb24pIHtcbiAgICAvLyBQb3NpdGlvbi5cbiAgICBpZiAocG9zaXRpb24uc3RhcnQpIHtcbiAgICAgIGxvY2F0aW9uID0gcG9zaXRpb25cbiAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc3RhcnRcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUG9pbnQuXG4gICAgICBsb2NhdGlvbi5zdGFydCA9IHBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaWYgKHJlYXNvbi5zdGFjaykge1xuICAgIHRoaXMuc3RhY2sgPSByZWFzb24uc3RhY2tcbiAgICByZWFzb24gPSByZWFzb24ubWVzc2FnZVxuICB9XG5cbiAgdGhpcy5tZXNzYWdlID0gcmVhc29uXG4gIHRoaXMubmFtZSA9IHJhbmdlXG4gIHRoaXMucmVhc29uID0gcmVhc29uXG4gIHRoaXMubGluZSA9IHBvc2l0aW9uID8gcG9zaXRpb24ubGluZSA6IG51bGxcbiAgdGhpcy5jb2x1bW4gPSBwb3NpdGlvbiA/IHBvc2l0aW9uLmNvbHVtbiA6IG51bGxcbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uXG4gIHRoaXMuc291cmNlID0gcGFydHNbMF1cbiAgdGhpcy5ydWxlSWQgPSBwYXJ0c1sxXVxufVxuXG5mdW5jdGlvbiBwYXJzZU9yaWdpbihvcmlnaW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtudWxsLCBudWxsXVxuICB2YXIgaW5kZXhcblxuICBpZiAodHlwZW9mIG9yaWdpbiA9PT0gJ3N0cmluZycpIHtcbiAgICBpbmRleCA9IG9yaWdpbi5pbmRleE9mKCc6JylcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdFsxXSA9IG9yaWdpblxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbMF0gPSBvcmlnaW4uc2xpY2UoMCwgaW5kZXgpXG4gICAgICByZXN1bHRbMV0gPSBvcmlnaW4uc2xpY2UoaW5kZXggKyAxKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxudmFyIHJlcGxhY2UgPSByZXF1aXJlKCdyZXBsYWNlLWV4dCcpXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxubW9kdWxlLmV4cG9ydHMgPSBWRmlsZVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcbnZhciBwcm90byA9IFZGaWxlLnByb3RvdHlwZVxuXG4vLyBPcmRlciBvZiBzZXR0aW5nIChsZWFzdCBzcGVjaWZpYyB0byBtb3N0KSwgd2UgbmVlZCB0aGlzIGJlY2F1c2Ugb3RoZXJ3aXNlXG4vLyBge3N0ZW06ICdhJywgcGF0aDogJ34vYi5qcyd9YCB3b3VsZCB0aHJvdywgYXMgYSBwYXRoIGlzIG5lZWRlZCBiZWZvcmUgYVxuLy8gc3RlbSBjYW4gYmUgc2V0LlxudmFyIG9yZGVyID0gWydoaXN0b3J5JywgJ3BhdGgnLCAnYmFzZW5hbWUnLCAnc3RlbScsICdleHRuYW1lJywgJ2Rpcm5hbWUnXVxuXG5wcm90by50b1N0cmluZyA9IHRvU3RyaW5nXG5cbi8vIEFjY2VzcyBmdWxsIHBhdGggKGB+L2luZGV4Lm1pbi5qc2ApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAncGF0aCcsIHtnZXQ6IGdldFBhdGgsIHNldDogc2V0UGF0aH0pXG5cbi8vIEFjY2VzcyBwYXJlbnQgcGF0aCAoYH5gKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2Rpcm5hbWUnLCB7Z2V0OiBnZXREaXJuYW1lLCBzZXQ6IHNldERpcm5hbWV9KVxuXG4vLyBBY2Nlc3MgYmFzZW5hbWUgKGBpbmRleC5taW4uanNgKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2Jhc2VuYW1lJywge2dldDogZ2V0QmFzZW5hbWUsIHNldDogc2V0QmFzZW5hbWV9KVxuXG4vLyBBY2Nlc3MgZXh0bmFtZSAoYC5qc2ApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnZXh0bmFtZScsIHtnZXQ6IGdldEV4dG5hbWUsIHNldDogc2V0RXh0bmFtZX0pXG5cbi8vIEFjY2VzcyBzdGVtIChgaW5kZXgubWluYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdzdGVtJywge2dldDogZ2V0U3RlbSwgc2V0OiBzZXRTdGVtfSlcblxuLy8gQ29uc3RydWN0IGEgbmV3IGZpbGUuXG5mdW5jdGlvbiBWRmlsZShvcHRpb25zKSB7XG4gIHZhciBwcm9wXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnIHx8IGJ1ZmZlcihvcHRpb25zKSkge1xuICAgIG9wdGlvbnMgPSB7Y29udGVudHM6IG9wdGlvbnN9XG4gIH0gZWxzZSBpZiAoJ21lc3NhZ2UnIGluIG9wdGlvbnMgJiYgJ21lc3NhZ2VzJyBpbiBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWRmlsZSkpIHtcbiAgICByZXR1cm4gbmV3IFZGaWxlKG9wdGlvbnMpXG4gIH1cblxuICB0aGlzLmRhdGEgPSB7fVxuICB0aGlzLm1lc3NhZ2VzID0gW11cbiAgdGhpcy5oaXN0b3J5ID0gW11cbiAgdGhpcy5jd2QgPSBwcm9jZXNzLmN3ZCgpXG5cbiAgLy8gU2V0IHBhdGggcmVsYXRlZCBwcm9wZXJ0aWVzIGluIHRoZSBjb3JyZWN0IG9yZGVyLlxuICBpbmRleCA9IC0xXG4gIGxlbmd0aCA9IG9yZGVyLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcHJvcCA9IG9yZGVyW2luZGV4XVxuXG4gICAgaWYgKG93bi5jYWxsKG9wdGlvbnMsIHByb3ApKSB7XG4gICAgICB0aGlzW3Byb3BdID0gb3B0aW9uc1twcm9wXVxuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBub24tcGF0aCByZWxhdGVkIHByb3BlcnRpZXMuXG4gIGZvciAocHJvcCBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9yZGVyLmluZGV4T2YocHJvcCkgPT09IC0xKSB7XG4gICAgICB0aGlzW3Byb3BdID0gb3B0aW9uc1twcm9wXVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoKCkge1xuICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXVxufVxuXG5mdW5jdGlvbiBzZXRQYXRoKHBhdGgpIHtcbiAgYXNzZXJ0Tm9uRW1wdHkocGF0aCwgJ3BhdGgnKVxuXG4gIGlmIChwYXRoICE9PSB0aGlzLnBhdGgpIHtcbiAgICB0aGlzLmhpc3RvcnkucHVzaChwYXRoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldERpcm5hbWUoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguZGlybmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldERpcm5hbWUoZGlybmFtZSkge1xuICBhc3NlcnRQYXRoKHRoaXMucGF0aCwgJ2Rpcm5hbWUnKVxuICB0aGlzLnBhdGggPSBwYXRoLmpvaW4oZGlybmFtZSB8fCAnJywgdGhpcy5iYXNlbmFtZSlcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZW5hbWUoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguYmFzZW5hbWUodGhpcy5wYXRoKSA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXRCYXNlbmFtZShiYXNlbmFtZSkge1xuICBhc3NlcnROb25FbXB0eShiYXNlbmFtZSwgJ2Jhc2VuYW1lJylcbiAgYXNzZXJ0UGFydChiYXNlbmFtZSwgJ2Jhc2VuYW1lJylcbiAgdGhpcy5wYXRoID0gcGF0aC5qb2luKHRoaXMuZGlybmFtZSB8fCAnJywgYmFzZW5hbWUpXG59XG5cbmZ1bmN0aW9uIGdldEV4dG5hbWUoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguZXh0bmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldEV4dG5hbWUoZXh0bmFtZSkge1xuICB2YXIgZXh0ID0gZXh0bmFtZSB8fCAnJ1xuXG4gIGFzc2VydFBhcnQoZXh0LCAnZXh0bmFtZScpXG4gIGFzc2VydFBhdGgodGhpcy5wYXRoLCAnZXh0bmFtZScpXG5cbiAgaWYgKGV4dCkge1xuICAgIGlmIChleHQuY2hhckF0KDApICE9PSAnLicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGV4dG5hbWVgIG11c3Qgc3RhcnQgd2l0aCBgLmAnKVxuICAgIH1cblxuICAgIGlmIChleHQuaW5kZXhPZignLicsIDEpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZXh0bmFtZWAgY2Fubm90IGNvbnRhaW4gbXVsdGlwbGUgZG90cycpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5wYXRoID0gcmVwbGFjZSh0aGlzLnBhdGgsIGV4dClcbn1cblxuZnVuY3Rpb24gZ2V0U3RlbSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnXG4gICAgPyBwYXRoLmJhc2VuYW1lKHRoaXMucGF0aCwgdGhpcy5leHRuYW1lKVxuICAgIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldFN0ZW0oc3RlbSkge1xuICBhc3NlcnROb25FbXB0eShzdGVtLCAnc3RlbScpXG4gIGFzc2VydFBhcnQoc3RlbSwgJ3N0ZW0nKVxuICB0aGlzLnBhdGggPSBwYXRoLmpvaW4odGhpcy5kaXJuYW1lIHx8ICcnLCBzdGVtICsgKHRoaXMuZXh0bmFtZSB8fCAnJykpXG59XG5cbi8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIGZpbGUuXG5mdW5jdGlvbiB0b1N0cmluZyhlbmNvZGluZykge1xuICB2YXIgdmFsdWUgPSB0aGlzLmNvbnRlbnRzIHx8ICcnXG4gIHJldHVybiBidWZmZXIodmFsdWUpID8gdmFsdWUudG9TdHJpbmcoZW5jb2RpbmcpIDogU3RyaW5nKHZhbHVlKVxufVxuXG4vLyBBc3NlcnQgdGhhdCBgcGFydGAgaXMgbm90IGEgcGF0aCAoaS5lLiwgZG9lcyBub3QgY29udGFpbiBgcGF0aC5zZXBgKS5cbmZ1bmN0aW9uIGFzc2VydFBhcnQocGFydCwgbmFtZSkge1xuICBpZiAocGFydC5pbmRleE9mKHBhdGguc2VwKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnYCcgKyBuYW1lICsgJ2AgY2Fubm90IGJlIGEgcGF0aDogZGlkIG5vdCBleHBlY3QgYCcgKyBwYXRoLnNlcCArICdgJ1xuICAgIClcbiAgfVxufVxuXG4vLyBBc3NlcnQgdGhhdCBgcGFydGAgaXMgbm90IGVtcHR5LlxuZnVuY3Rpb24gYXNzZXJ0Tm9uRW1wdHkocGFydCwgbmFtZSkge1xuICBpZiAoIXBhcnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgbmFtZSArICdgIGNhbm5vdCBiZSBlbXB0eScpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IGBwYXRoYCBleGlzdHMuXG5mdW5jdGlvbiBhc3NlcnRQYXRoKHBhdGgsIG5hbWUpIHtcbiAgaWYgKCFwYXRoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZXR0aW5nIGAnICsgbmFtZSArICdgIHJlcXVpcmVzIGBwYXRoYCB0byBiZSBzZXQgdG9vJylcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBWTWVzc2FnZSA9IHJlcXVpcmUoJ3ZmaWxlLW1lc3NhZ2UnKVxudmFyIFZGaWxlID0gcmVxdWlyZSgnLi9jb3JlLmpzJylcblxubW9kdWxlLmV4cG9ydHMgPSBWRmlsZVxuXG52YXIgcHJvdG8gPSBWRmlsZS5wcm90b3R5cGVcblxucHJvdG8ubWVzc2FnZSA9IG1lc3NhZ2VcbnByb3RvLmluZm8gPSBpbmZvXG5wcm90by5mYWlsID0gZmFpbFxuXG4vLyBDcmVhdGUgYSBtZXNzYWdlIHdpdGggYHJlYXNvbmAgYXQgYHBvc2l0aW9uYC5cbi8vIFdoZW4gYW4gZXJyb3IgaXMgcGFzc2VkIGluIGFzIGByZWFzb25gLCBjb3BpZXMgdGhlIHN0YWNrLlxuZnVuY3Rpb24gbWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pIHtcbiAgdmFyIGZpbGVQYXRoID0gdGhpcy5wYXRoXG4gIHZhciBtZXNzYWdlID0gbmV3IFZNZXNzYWdlKHJlYXNvbiwgcG9zaXRpb24sIG9yaWdpbilcblxuICBpZiAoZmlsZVBhdGgpIHtcbiAgICBtZXNzYWdlLm5hbWUgPSBmaWxlUGF0aCArICc6JyArIG1lc3NhZ2UubmFtZVxuICAgIG1lc3NhZ2UuZmlsZSA9IGZpbGVQYXRoXG4gIH1cblxuICBtZXNzYWdlLmZhdGFsID0gZmFsc2VcblxuICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcblxuICByZXR1cm4gbWVzc2FnZVxufVxuXG4vLyBGYWlsOiBjcmVhdGVzIGEgdm1lc3NhZ2UsIGFzc29jaWF0ZXMgaXQgd2l0aCB0aGUgZmlsZSwgYW5kIHRocm93cyBpdC5cbmZ1bmN0aW9uIGZhaWwoKSB7XG4gIHZhciBtZXNzYWdlID0gdGhpcy5tZXNzYWdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcblxuICBtZXNzYWdlLmZhdGFsID0gdHJ1ZVxuXG4gIHRocm93IG1lc3NhZ2Vcbn1cblxuLy8gSW5mbzogY3JlYXRlcyBhIHZtZXNzYWdlLCBhc3NvY2lhdGVzIGl0IHdpdGggdGhlIGZpbGUsIGFuZCBtYXJrcyB0aGUgZmF0YWxpdHlcbi8vIGFzIG51bGwuXG5mdW5jdGlvbiBpbmZvKCkge1xuICB2YXIgbWVzc2FnZSA9IHRoaXMubWVzc2FnZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG5cbiAgbWVzc2FnZS5mYXRhbCA9IG51bGxcblxuICByZXR1cm4gbWVzc2FnZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=