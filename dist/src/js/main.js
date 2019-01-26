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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../img/andrey.jpg */ "./src/img/andrey.jpg"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../img/Oleg.jpg */ "./src/img/Oleg.jpg"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../img/Roman.png */ "./src/img/Roman.png"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../img/Yegor.jpg */ "./src/img/Yegor.jpg"));

// Module
exports.push([module.i, "/* reset */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/* end of reset */\r\n\r\nbody{\r\n  background-color: #0075a6;\r\n}\r\n\r\n/* header */\r\n\r\nheader{\r\n  width: 100%;\r\n  min-height: 20vh;\r\n  background-color: #018dc8;\r\n}\r\n.wrapper{\r\n\tmax-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 4vw;\r\n\r\n}\r\n.headline{\r\n  height: 10vh;\r\n  line-height: 10vh;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  color: rgb(233, 232, 232);\r\n}\r\n.menu{\r\n\tdisplay: flex;\r\n\tmax-height: 90px;\r\n\tjustify-content: space-between;\r\n}\r\nnav{\r\n  display: flex;\r\n  justify-content: right;\r\n  flex-basis: 635px;\r\n  padding-right: 3vw;\r\n\tfont-size: 16px;\r\n  line-height: 89px;\r\n}\r\nnav div{\r\n\ttext-align: center;\r\n}\r\nnav div:not(:last-of-type){\r\n\tmargin-right: 65px;\r\n}\r\nnav div:first-of-type{\r\n\tmargin-right: 64px;\r\n}\r\nnav div:hover a{\r\n\tcolor: rgba(255,255,255,1);\r\n}\r\nnav a{\r\n\ttext-decoration: none;\r\n  color: rgb(200, 200, 200);\r\n  font-size: 1.15rem;\r\n\tfont-family: Lato;\r\n}\r\n.header-stick{\r\n\tposition: absolute;\r\n\ttop: 80px;\r\n\twidth: 60%;\r\n\theight: 1px;\r\n\tbackground-color: rgba(255,255,255,0.15)\r\n}\r\n\r\n /* description */\r\n\r\n .description{\r\n   box-sizing: border-box;\r\n   min-height: 25vh;\r\n   margin-top: 5vh;\r\n   padding: 2vh 1vw;\r\n   background-color: white;\r\n   text-align: justify;\r\n   font-size: 1.05rem;\r\n   color: rgb(17, 83, 17);\r\n   border: solid white 5px;\r\n   border-radius: 5px;\r\n }\r\n .description h2{\r\n  padding-bottom: 1vh;\r\n  text-align: center;\r\n  font-size:1.4rem;\r\n}\r\n\r\n /* author of the day */\r\n\r\n .author-of-the-day{\r\n   margin: 10vh 0;\r\n   padding: 2vh 1vw;\r\n   background-color: white;\r\n   color: rgb(17, 83, 17);\r\n   border: solid white 5px;\r\n   border-radius: 5px;\r\n }\r\n .author-of-the-day h2{\r\n   padding-bottom: 1vh;\r\n   text-align: center;\r\n   font-size:1.4rem;\r\n }\r\n\r\n /* about us */\r\n\r\n .about-us .wrapper{\r\n  box-sizing: border-box;\r\n  margin: 10vh auto;\r\n\tpadding: 5vh 0 10vh;\r\n  min-height: 400px;\r\n}\r\n.about-us .wrapper h2{\r\n  margin-bottom: 2vh;\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n  color: #c0bb72;\r\n}\r\n.about-us-our-team{\r\n  display:flex;\r\n  justify-content: space-around;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n\tbox-sizing: border-box;\r\n\tflex-grow: 1;\r\n\tpadding-left: 21px;\r\n  min-height: 195px;\r\n}\r\n.about-us-our-team-item div{\r\n\tmargin: 0 auto;\r\n}\r\n.about-us-our-team .photo{\r\n\tmargin-bottom: 15px;\r\n\twidth: 90px;\r\n  height: 90px;\r\n\tborder: 5px solid #c0bb72;\r\n\tborder-radius: 90px;\r\n}\r\n.about-us-our-team .andrey .photo{\r\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\r\n  background-size: 100%;\r\n}\r\n.about-us-our-team .oleg .photo{\r\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\r\n  background-size: 100%;\r\n}\r\n.about-us-our-team .roman .photo{\r\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat;\r\n  background-size: 100%;\r\n}\r\n.about-us-our-team .yegor .photo{\r\n  background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat;\r\n  background-size: 100%;\r\n}\r\n.about-us-our-team p{\r\n\tpadding-bottom: 11px;\r\n\tfont-size: 17px;\r\n\tfont-family: Lato Semibold;\r\n}\r\n.about-us-our-team-item .profession{\r\n\tpadding-bottom: 8px;\r\n\tfont-family: Lato Regular;\r\n\tfont-size: 16px;\r\n\tcolor: #8e8e8e;\r\n}\r\n.about-us-our-team .social{\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tmargin: 0 auto;\r\n\twidth: 85px;\r\n}\r\n.about-us-our-team .social a{\r\n\tdisplay: block;\r\n\tflex-grow: 1;\r\n}\r\n.about-us-our-team .social i{\r\n\tfont-size: 14px;\r\n\tcolor: #bfbfbf;\r\n}\r\n.about-us-our-team .social i:hover{\r\n\tcolor: #c5bd45;\r\n}\r\n\r\n/* footer */\r\n\r\nfooter{\r\n  height: 10vh;\r\n  background-color: #003f62;\r\n}\r\nfooter div{\r\n  height: 10vh;\r\n  line-height: 10vh;\r\n  color: white;\r\n}\r\nfooter .flex-conteiner{\r\n  display: flex;\r\n  height: 10vh;\r\n  justify-content: space-around;\r\n}\r\nfooter .fa-envelope{\r\n  margin-right: 0.5vw;\r\n\tfont-size: 14px;\r\n  color: #bfbfbf;\r\n}\r\nfooter .fa-envelope:hover{\r\n\tcolor: #c5bd45;\r\n}\r\n\r\n/* producers */\r\n\r\n/* main */\r\n\r\n.main {\r\n  margin: 0px auto;\r\n}\r\n\r\n.search {\r\n   display: flex;\r\n   justify-content: center;\r\n   margin-top: 40px\r\n}\r\n\r\n.search-figure {\r\n   box-sizing: border-box;\r\n   width: 40%;\r\n   margin-right: 20px;\r\n   border: 3px solid white;\r\n   border-radius: 3px;\r\n   color:  #9c851f;\r\n}\r\n\r\n.search-button{\r\n   height: 30px;\r\n   width: 8%;\r\n   background: #00a651;\r\n   color: white;\r\n   border: 3px solid #00a651;\r\n   border-radius: 3px;\r\n}\r\n\r\n.search-button:hover {\r\n   color: #ebc72f;\r\n   box-shadow: 0 0 5px #ebc72f;\r\n}\r\n\r\n/* start main > item-autor */\r\n\r\n.item-autor {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.autor {\r\n   width: 60%;\r\n   margin: 20px;\r\n   padding: 20px;\r\n   background-color: white;\r\n   border: 5px solid white;\r\n   border-radius: 5px; \r\n}\r\n.item-autor-title{\r\n   font-size: 1.2rem;\r\n   text-align: center;\r\n}\r\n\r\n.item-autor-title-link{\r\n   text-decoration: none;\r\n   color: #333333;\r\n}\r\n\r\n.autor-discription {\r\n   margin-top: 10px;\r\n}\r\n\r\n/* The end main > item-autor */\r\n\r\n/* ////////////////////The end  main /////////////////// */\r\n\r\n\r\n/* media */\r\n\r\n@media (min-width: 1200px) {\r\n  .about-us-our-team-item{\r\n    width: 25%;\r\n    text-align: center;\r\n  }\r\n}\r\n@media (max-width: 920px) {\r\n  nav{\r\n    margin-left: 3vw;\r\n  }\r\n  .header-stick{\r\n    display: none;\r\n  }\r\n  .about-us-our-team-item{\r\n    width: 50%;\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n    text-align: center;\r\n  }\r\n}\r\n@media (max-width: 500px) {\r\n  html{\r\n    font-size: 14px;\r\n  }\r\n  .header-stick{\r\n    display: none;\r\n  }\r\n  h1{\r\n    font-size: 1.4rem;\r\n  }\r\n  header{\r\n    height: 58vh;\r\n  }\r\n  .menu{\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  nav{\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n  nav div{\r\n    width: 100%;\r\n    height: 10vh;\r\n    margin: 0!important;  \r\n    text-align: center;\r\n  }\r\n  .about-us-our-team-item{\r\n    padding-top: 25px;\r\n    padding-bottom: 10px;\r\n    width: 100%;\r\n    text-align: center;\r\n    border-bottom: dotted #c0bb72 1px;\r\n    border-bottom-width: 5px;\r\n  }\r\n  .about-us-our-team-item:first-of-type{\r\n    border-top: dotted #c0bb72 1px;\r\n    border-top-width: 5px;\r\n  }\r\n  footer .flex-conteiner{\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 12px;\r\n  }\r\n  footer div{\r\n    padding-top: 2vh;\r\n    height: 3vh!important;\r\n    line-height: 3vh!important;\r\n  }\r\n}\r\n\r\n/* Oleg */\r\n\r\n@media (max-width:320px)  { \r\n  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */\r\n  .search {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n  }\r\n  \r\n  .search-figure {\r\n      width: 80%;\r\n      margin-right: 5px;\r\n      height: 20px;\r\n  }\r\n  \r\n  .search-button{\r\n      height: 30px;\r\n      width: 60%;\r\n      margin-top: 5px;\r\n      background: #00a651;\r\n      color: white;\r\n      border: 3px solid #00a651;\r\n      border-radius: 3px;\r\n  }\r\n\r\n  .search-button:hover {\r\n      background: #00a651;\r\n      color: #ebc72f;\r\n      box-shadow: 0 0 5px #ebc72f;\r\n  }\r\n\r\n  .autor {\r\n      width: 95%;\r\n      padding: 5px;\r\n      border: 1px solid #333333;\r\n      margin: 10px;\r\n  }\r\n}\r\n@media (max-width:480px)  { \r\n  /* smartphones, Android phones, landscape iPhone */\r\n\r\n  .search {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n  }\r\n  \r\n  .search-figure {\r\n      width: 90%;\r\n      margin-right: 5px;\r\n      height: 20px;\r\n  }\r\n  \r\n  .search-button{\r\n      height: 30px;\r\n      width: 30%;\r\n      margin-top: 5px;\r\n      background: #00a651;\r\n      color: white;\r\n      border: 3px solid #00a651;\r\n      border-radius: 3px;\r\n  }\r\n\r\n  .search-button:hover {\r\n      background: #00a651;\r\n      color: #ebc72f;\r\n      box-shadow: 0 0 5px #ebc72f;\r\n  }\r\n\r\n  .autor {\r\n      width: 80%;\r\n      padding: 5px;\r\n      border: 1px solid #333333;\r\n      margin: 10px;\r\n  }\r\n}\r\n@media (max-width:600px)  {\r\n   /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ \r\n  \r\n   .search {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n  }\r\n  \r\n  .search-figure {\r\n      width: 90%;\r\n      margin-right: 5px;\r\n      height: 20px;\r\n  }\r\n  \r\n  .search-button{\r\n      height: 30px;\r\n      width: 40%;\r\n      margin-top: 5px;\r\n      background: #00a651;\r\n      color: white;\r\n      border: 3px solid #00a651;\r\n      border-radius: 3px;\r\n  }\r\n\r\n  .search-button:hover {\r\n      background: #00a651;\r\n      color: #ebc72f;\r\n      box-shadow: 0 0 5px #ebc72f;\r\n  }\r\n\r\n  .autor {\r\n      width: 80%;\r\n      padding: 5px;\r\n      border: 1px solid #333333;\r\n      margin: 10px;\r\n  }}\r\n@media (max-width:801px)  {\r\n   /* tablet, landscape iPad, lo-res laptops ands desktops */\r\n   .search {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n  }\r\n  \r\n  .search-figure {\r\n      width: 80%;\r\n      margin-right: 5px;\r\n      height: 20px;\r\n  }\r\n  \r\n  .search-button{\r\n      height: 30px;\r\n      width: 35%;\r\n      margin-top: 5px;\r\n      background: #00a651;\r\n      color: white;\r\n      border: 3px solid #00a651;\r\n      border-radius: 3px;\r\n  }\r\n\r\n  .search-button:hover {\r\n      background: #00a651;\r\n      color: #ebc72f;\r\n      box-shadow: 0 0 5px #ebc72f;\r\n  }\r\n\r\n  .autor {\r\n      width: 80%;\r\n      padding: 5px;\r\n      border: 1px solid #333333;\r\n      margin: 10px;\r\n  }\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/img/Oleg.jpg":
/*!**************************!*\
  !*** ./src/img/Oleg.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Oleg.jpg";

/***/ }),

/***/ "./src/img/Roman.png":
/*!***************************!*\
  !*** ./src/img/Roman.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Roman.png";

/***/ }),

/***/ "./src/img/Yegor.jpg":
/*!***************************!*\
  !*** ./src/img/Yegor.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Yegor.jpg";

/***/ }),

/***/ "./src/img/andrey.jpg":
/*!****************************!*\
  !*** ./src/img/andrey.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/andrey.jpg";

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/index.js ./src/css/style.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/css/style.css */"./src/css/style.css");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map