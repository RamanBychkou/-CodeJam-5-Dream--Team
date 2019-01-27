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
exports.push([module.i, "/* reset */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/* end of reset */\r\n\r\nhtml{\r\n  min-height: 100vh;\r\n  position: relative;\r\n  border-bottom: solid 1vh #003f62;\r\n}\r\nbody{\r\n  background-color: #0075a6;\r\n}\r\n\r\n/* header */\r\n\r\nheader{\r\n  width: 100%;\r\n  min-height: 20vh;\r\n  background-color: #018dc8;\r\n}\r\n.wrapper{\r\n\tmax-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 4vw;\r\n\r\n}\r\n.headline{\r\n  position: relative;\r\n  height: 10vh;\r\n  line-height: 10vh;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  color: rgb(233, 232, 232);\r\n}\r\n.headline h1{\r\n  padding-top: 2vh;\r\n}\r\n.headline select{\r\n  position: absolute;\r\n  top: 2vh;\r\n  right: 0vw;\r\n  color: #0075a6;\r\n}\r\n.menu{\r\n\tdisplay: flex;\r\n\tmax-height: 90px;\r\n\tjustify-content: space-between;\r\n}\r\nnav{\r\n  display: flex;\r\n  justify-content: right;\r\n  flex-basis: 635px;\r\n  padding-right: 3vw;\r\n\tfont-size: 16px;\r\n  line-height: 89px;\r\n}\r\nnav div{\r\n\ttext-align: center;\r\n}\r\nnav div:not(:last-of-type){\r\n\tmargin-right: 65px;\r\n}\r\nnav div:first-of-type{\r\n\tmargin-right: 64px;\r\n}\r\nnav div:hover a{\r\n\tcolor: rgba(255,255,255,1);\r\n}\r\nnav a{\r\n\ttext-decoration: none;\r\n  color: rgb(200, 200, 200);\r\n  font-size: 1.15rem;\r\n\tfont-family: Lato;\r\n}\r\n.header-stick{\r\n\tposition: absolute;\r\n\ttop: 80px;\r\n\twidth: 60%;\r\n\theight: 1px;\r\n\tbackground-color: rgba(255,255,255,0.15)\r\n}\r\n\r\n /* description */\r\n\r\n .description{\r\n   box-sizing: border-box;\r\n   min-height: 25vh;\r\n   margin-top: 5vh;\r\n   padding: 2vh 1vw;\r\n   background-color: white;\r\n   text-align: justify;\r\n   font-size: 1.05rem;\r\n   color: rgb(17, 83, 17);\r\n   border: solid white 5px;\r\n   border-radius: 5px;\r\n }\r\n .description h2{\r\n  padding-bottom: 1vh;\r\n  text-align: center;\r\n  font-size:1.4rem;\r\n}\r\n\r\n /* author of the day */\r\n\r\n .author-of-the-day{\r\n   margin: 10vh 0;\r\n   padding: 2vh 1vw;\r\n   background-color: white;\r\n   color: rgb(17, 83, 17);\r\n   border: solid white 5px;\r\n   border-radius: 5px;\r\n }\r\n .author-of-the-day h2{\r\n   padding-bottom: 1vh;\r\n   text-align: center;\r\n   font-size:1.4rem;\r\n }\r\n\r\n /* about us */\r\n\r\n .about-us .wrapper{\r\n  box-sizing: border-box;\r\n  margin: 10vh auto;\r\n\tpadding: 5vh 0 10vh;\r\n  min-height: 400px;\r\n}\r\n.about-us .wrapper h2{\r\n  margin-bottom: 2vh;\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n  color: #c0bb72;\r\n}\r\n.about-us-our-team{\r\n  display:flex;\r\n  justify-content: space-around;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n\tbox-sizing: border-box;\r\n\tflex-grow: 1;\r\n\tpadding-left: 21px;\r\n  min-height: 195px;\r\n}\r\n.about-us-our-team-item div{\r\n\tmargin: 0 auto;\r\n}\r\n.about-us-our-team .photo{\r\n\tmargin-bottom: 15px;\r\n\twidth: 90px;\r\n  height: 90px;\r\n\tborder: 5px solid #c0bb72;\r\n\tborder-radius: 90px;\r\n}\r\n.about-us-our-team .andrey .photo{\r\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\r\n  background-size: 100%;\r\n}\r\n.about-us-our-team .oleg .photo{\r\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\r\n  background-size: 100%;\r\n}\r\n.about-us-our-team .roman .photo{\r\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat;\r\n  background-size: 100%;\r\n}\r\n.about-us-our-team .yegor .photo{\r\n  background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat;\r\n  background-size: 100%;\r\n}\r\n.about-us-our-team p{\r\n\tpadding-bottom: 11px;\r\n\tfont-size: 17px;\r\n\tfont-family: Lato Semibold;\r\n}\r\n.about-us-our-team-item .profession{\r\n\tpadding-bottom: 8px;\r\n\tfont-family: Lato Regular;\r\n\tfont-size: 16px;\r\n\tcolor: #8e8e8e;\r\n}\r\n.about-us-our-team .social{\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tmargin: 0 auto;\r\n\twidth: 85px;\r\n}\r\n.about-us-our-team .social a{\r\n\tdisplay: block;\r\n\tflex-grow: 1;\r\n}\r\n.about-us-our-team .social i{\r\n\tfont-size: 14px;\r\n\tcolor: #bfbfbf;\r\n}\r\n.about-us-our-team .social i:hover{\r\n\tcolor: #c5bd45;\r\n}\r\n\r\n/* footer */\r\n\r\nfooter{\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 10vh;\r\n  margin-top: 10vh;\r\n  background-color: #003f62;\r\n}\r\nfooter div{\r\n  height: 10vh;\r\n  line-height: 10vh;\r\n  color: white;\r\n}\r\nfooter .flex-conteiner{\r\n  display: flex;\r\n  height: 10vh;\r\n  justify-content: space-around;\r\n}\r\nfooter .fa-envelope{\r\n  margin-right: 0.5vw;\r\n\tfont-size: 14px;\r\n  color: #bfbfbf;\r\n}\r\nfooter .fa-envelope:hover{\r\n\tcolor: #c5bd45;\r\n}\r\n\r\n/* producers */\r\n\r\n/* main */\r\n\r\n.main {\r\n  margin: 0px auto;\r\n}\r\n\r\n.search {\r\n   display: flex;\r\n   justify-content: center;\r\n   margin-top: 40px\r\n}\r\n\r\n.search-figure {\r\n   box-sizing: border-box;\r\n   width: 40%;\r\n   margin-right: 20px;\r\n   border: 3px solid white;\r\n   border-radius: 3px;\r\n   color:  #9c851f;\r\n}\r\n\r\n.search-button{\r\n   height: 30px;\r\n   width: 8%;\r\n   background: #00a651;\r\n   color: white;\r\n   border: 3px solid #00a651;\r\n   border-radius: 3px;\r\n}\r\n\r\n.search-button:hover {\r\n   color: #ebc72f;\r\n   box-shadow: 0 0 5px #ebc72f;\r\n}\r\n\r\n/* start main > item-autor */\r\n\r\n.item-autor {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.autor {\r\n   width: 60%;\r\n   margin: 20px;\r\n   padding: 20px;\r\n   background-color: white;\r\n   border: 5px solid white;\r\n   border-radius: 5px; \r\n}\r\n.item-autor-title{\r\n   font-size: 1.2rem;\r\n   text-align: center;\r\n}\r\n\r\n.item-autor-title-link{\r\n   text-decoration: none;\r\n   color: #333333;\r\n}\r\n\r\n.autor-discription {\r\n   margin-top: 10px;\r\n}\r\n\r\n/* The end main > item-autor */\r\n\r\n/* ////////////////////The end  main /////////////////// */\r\n\r\n\r\n/* media */\r\n\r\n@media (min-width: 1200px) {\r\n  .about-us-our-team-item{\r\n    width: 25%;\r\n    text-align: center;\r\n  }\r\n}\r\n@media (max-width: 920px) {\r\n  nav{\r\n    margin-left: 3vw;\r\n  }\r\n  .header-stick{\r\n    display: none;\r\n  }\r\n  .about-us-our-team-item{\r\n    width: 50%;\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n    text-align: center;\r\n  }\r\n}\r\n@media (max-width: 500px) {\r\n  html{\r\n    font-size: 14px;\r\n  }\r\n  .header-stick{\r\n    display: none;\r\n  }\r\n  h1{\r\n    font-size: 1.4rem;\r\n  }\r\n  header{\r\n    height: 58vh;\r\n  }\r\n  .menu{\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  nav{\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n  nav div{\r\n    width: 100%;\r\n    height: 10vh;\r\n    margin: 0!important;  \r\n    text-align: center;\r\n  }\r\n  .about-us-our-team{\r\n    padding-left: 0;\r\n  }\r\n  .about-us-our-team-item{\r\n    padding-top: 25px;\r\n    padding-bottom: 10px;\r\n    width: 100%;\r\n    text-align: center;\r\n    border-bottom: dotted #c0bb72 1px;\r\n    border-bottom-width: 5px;\r\n  }\r\n  .about-us-our-team-item:first-of-type{\r\n    border-top: dotted #c0bb72 1px;\r\n    border-top-width: 5px;\r\n  }\r\n  footer .flex-conteiner{\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 12px;\r\n  }\r\n  footer div{\r\n    padding-top: 2vh;\r\n    height: 3vh!important;\r\n    line-height: 3vh!important;\r\n  }\r\n}\r\n\r\n/* Oleg */\r\n\r\n@media (max-width:320px)  { \r\n  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */\r\n  .search {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n  }\r\n  \r\n  .search-figure {\r\n      width: 80%;\r\n      margin-right: 5px;\r\n      height: 20px;\r\n  }\r\n  \r\n  .search-button{\r\n      height: 30px;\r\n      width: 60%;\r\n      margin-top: 5px;\r\n      background: #00a651;\r\n      color: white;\r\n      border: 3px solid #00a651;\r\n      border-radius: 3px;\r\n  }\r\n\r\n  .search-button:hover {\r\n      background: #00a651;\r\n      color: #ebc72f;\r\n      box-shadow: 0 0 5px #ebc72f;\r\n  }\r\n\r\n  .autor {\r\n      width: 95%;\r\n      padding: 5px;\r\n      border: 1px solid #333333;\r\n      margin: 10px;\r\n  }\r\n}\r\n@media (max-width:480px)  { \r\n  /* smartphones, Android phones, landscape iPhone */\r\n\r\n  .search {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n  }\r\n  \r\n  .search-figure {\r\n      width: 90%;\r\n      margin-right: 5px;\r\n      height: 20px;\r\n  }\r\n  \r\n  .search-button{\r\n      height: 30px;\r\n      width: 30%;\r\n      margin-top: 5px;\r\n      background: #00a651;\r\n      color: white;\r\n      border: 3px solid #00a651;\r\n      border-radius: 3px;\r\n  }\r\n\r\n  .search-button:hover {\r\n      background: #00a651;\r\n      color: #ebc72f;\r\n      box-shadow: 0 0 5px #ebc72f;\r\n  }\r\n\r\n  .autor {\r\n      width: 80%;\r\n      padding: 5px;\r\n      border: 1px solid #333333;\r\n      margin: 10px;\r\n  }\r\n}\r\n@media (max-width:600px)  {\r\n   /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ \r\n  \r\n   .search {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n  }\r\n  \r\n  .search-figure {\r\n      width: 90%;\r\n      margin-right: 5px;\r\n      height: 20px;\r\n  }\r\n  \r\n  .search-button{\r\n      height: 30px;\r\n      width: 40%;\r\n      margin-top: 5px;\r\n      background: #00a651;\r\n      color: white;\r\n      border: 3px solid #00a651;\r\n      border-radius: 3px;\r\n  }\r\n\r\n  .search-button:hover {\r\n      background: #00a651;\r\n      color: #ebc72f;\r\n      box-shadow: 0 0 5px #ebc72f;\r\n  }\r\n\r\n  .autor {\r\n      width: 80%;\r\n      padding: 5px;\r\n      border: 1px solid #333333;\r\n      margin: 10px;\r\n  }}\r\n@media (max-width:801px)  {\r\n   /* tablet, landscape iPad, lo-res laptops ands desktops */\r\n   .search {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n  }\r\n  \r\n  .search-figure {\r\n      width: 80%;\r\n      margin-right: 5px;\r\n      height: 20px;\r\n  }\r\n  \r\n  .search-button{\r\n      height: 30px;\r\n      width: 35%;\r\n      margin-top: 5px;\r\n      background: #00a651;\r\n      color: white;\r\n      border: 3px solid #00a651;\r\n      border-radius: 3px;\r\n  }\r\n\r\n  .search-button:hover {\r\n      background: #00a651;\r\n      color: #ebc72f;\r\n      box-shadow: 0 0 5px #ebc72f;\r\n  }\r\n\r\n  .autor {\r\n      width: 80%;\r\n      padding: 5px;\r\n      border: 1px solid #333333;\r\n      margin: 10px;\r\n  }\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n.search-container {\r\n    display: flex;\r\n    margin: 50px 0 10vh;\r\n    padding: 0 20px;\r\n    color: #afaba8;\r\n}\r\n.search-container .search-view {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 200px;\r\n    color: #d4cac4;\r\n}\r\n.search-container .search-view .search-view-title {\r\n    font-weight: 900;\r\n}\r\n.search-container .search-view label {\r\n    margin-top: 20px;\r\n}\r\n.search-container .search-view input {\r\n    margin: 5px 0;\r\n}\r\n.search-container .search-view .search-btn {\r\n    margin-top: 20px;\r\n    padding: 0.7em 1.5em;\r\n    color: #fff;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    background: #0092cb;\r\n    outline: none;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    transition: 0.3s background;\r\n}\r\n.search-container .search-view .search-btn:hover {\r\n    background: #00a651;\r\n}\r\n.search-container .search-view .search-btn:active {\r\n    background: #218a54;\r\n}\r\n.search-container .searching-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: calc(100% - 200px);\r\n    padding: 20px;\r\n}\r\n.search-container .searching-list .searching-item {\r\n    display: flex;\r\n    margin: 10px 5px;\r\n    padding-left: 25%;\r\n}\r\n.search-container .searching-list .searching-item img {\r\n    height: 150px;\r\n    width: 150px;\r\n    margin: 10px;\r\n    border-radius: 5px;\r\n    object-fit: cover;\r\n    cursor: pointer;\r\n}\r\n.search-container .searching-list .searching-item .info-view {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.search-container .searching-list .searching-item .info-view .author-name {\r\n    margin: 15px 0;\r\n    color: rgb(37, 37, 37);\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n}\r\n.search-container .searching-list .searching-item .info-view .author-name:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n.search-container .searching-list .searching-item .info-view .author-location {\r\n    font-style: italic;\r\n}\r\n\r\n@media (max-width:768px) {\r\n    .search-container {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .search-container .searching-list{\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media (max-width:500px) {\r\n    .search-container {\r\n        align-items: center;\r\n        padding: 0 10px;\r\n    }\r\n\r\n    .search-container .searching-list {\r\n        padding: 0;\r\n    }\r\n\r\n    .search-container .searching-list .searching-item {\r\n        padding-left: 0;\r\n    }\r\n}\r\n", ""]);



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

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  eng: {
    environment: {
      pageTitle: 'Culture portal of Belarus',
      pageHeader: 'Producers cinema of Belarus',
      linkToMain: 'Main',
      linkToProducers: 'Producers',
      linkToAuthors: 'Authors',
      titleWhoAreWe: 'Who Are We',
      textWhoAreWe: 'This portal provides information about the most famous film Directors of the Republic of Belarus. Using this portal, please note that this resource was created on the knees, and nevertheless contains translations into Belarusian and English.You can use search by filmmakers.\n' + ' This resource provides extensive information on the most famous film Directors, namely: you can read the biography, see the photo gallery, also see the location where a certain author worked, and in most cases see the works on which they worked.\n',
      textAuthorOfDay: 'Author of the day',
      textAuthors: 'Authors',
      author1: 'Andrei Saiko',
      author2: 'Aleh Sazonik',
      author3: 'Roman Bychckov',
      author4: 'Yahor Remizau',
      textFooter: '&copy; 2019 DREAM TEAM',
      textSearching: 'Search',
      textName: 'Name:',
      textPlace: 'City / place of born',
      textBtnSearch: 'Find',
      textUnluckyResult: 'No one found'
    },
    producers: [{
      name: 'Victor N. Dashuk',
      personPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/GoEast_2014_Viktar_Dashuk_2.jpg/800px-GoEast_2014_Viktar_Dashuk_2.jpg',
      cityBirth: 'S. Portage hoyniksky district Gomel region.',
      birthday: '16 September 1938.',
      video: 'https://www.youtube.com/watch?v=M2IJK0eWGfM',
      gallery: ['http://hojniki.ucoz.ru/books/dashuk_partreht.jpg', 'http://hojniki.ucoz.ru/pictures/dashuk_dlja_tehkstu_3a.jpg', 'https://www.dw.com/image/17619539_303.jpg', 'https://upload.wikimedia.org/wikipedia/ru/3/37/Daschuk.jpg'],
      biography: [{
        action: 'He graduated from the Faculty of BSU',
        date: '1960'
      }, {
        action: 'He graduated from the highest courses of scriptwriters and directors in Moscow',
        date: '1967'
      }, {
        action: 'Winner of the Leninsky Komsomol Prize of Belarus',
        date: '1976'
      }, {
        action: 'Honored Artist of the BSSR',
        date: '1977'
      }, {
        action: 'Head of the workshop directing documentaries',
        date: '1989—1993'
      }, {
        action: 'Created studio "Mr. D."',
        date: '1993—2005'
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631451.1479131432!2d29.359081033272837!3d51.81335863954663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d5ec6c2de695a7%3A0x686f5bd6f9e46f49!2sKhoyniki+District!5e0!3m2!1sen!2sby!4v1548507046991',
      works: [{
        name: 'House',
        date: '1970'
      }, {
        name: 'Madness of the brave',
        date: '1970'
      }, {
        name: 'Died a long time ago the battle ',
        date: '1970'
      }, {
        name: 'Cuckoo was cooing ',
        date: '1972'
      }, {
        name: 'Biography Polonaise in a minor ',
        date: '1973'
      }, {
        name: 'I am from the fire village ',
        date: '1975-1978'
      }, {
        name: 'Pipe ',
        date: '1981'
      }, {
        name: 'Two hundred eighty-eighth autumn ',
        date: '1981'
      }, {
        name: 'Vasil Bykov. Climbing ',
        date: '1984'
      }]
    }, {
      name: 'Ptashuk, Mikhail Nikolaevich',
      personPhoto: 'https://belprauda.org/wp-content/uploads/2017/10/juri1509_3id0c_logo-768x502.jpg',
      cityBirth: 'B. Feduki Lahovich district',
      birthday: '28 января 1943.',
      video: 'https://www.youtube.com/watch?v=ELRs1o4Atq4',
      gallery: ['https://baj.by/sites/default/files/event/preview/maxresdefault_2.jpg', 'https://novychas.by/images/image_5.jpg', 'https://novychas.by/images/hqdefault_1_logo_1.jpg'],
      biography: [{
        action: 'He graduated from the directing Department of The theater school named after Shukin',
        date: '1967'
      }, {
        action: 'Lenin Komsomol prize',
        date: '1980'
      }, {
        action: 'Honored artist of the BSSR ',
        date: '1982'
      }, {
        action: 'State prize of the BSSR ',
        date: '1982'
      }, {
        action: 'People\'s artist of BSSR ',
        date: '1990'
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451960.75635366654!2d25.638775558347778!3d52.98184348039909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d8c36455cf6d71%3A0xc282e33ad6af2989!2sFeduki!5e0!3m2!1sen!2sby!4v1548507238821',
      works: [{
        name: 'Лесные качели',
        date: '1975 '
      }, {
        name: 'Время выбрало нас ',
        date: '1978 '
      }, {
        name: 'возьму твою боль',
        date: '1980 '
      }, {
        name: 'Черный замок Ольшанский',
        date: '1984 '
      }, {
        name: 'Знак беды ',
        date: '1986 '
      }, {
        name: 'Наш бронепоезд',
        date: '1988 '
      }, {
        name: 'Кооператив" Политбюро',
        date: '1992 '
      }]
    }, {
      name: 'Vladimir V. Moroz',
      personPhoto: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Vladimir_Moroz.JPG',
      cityBirth: 'Kossovo, Ivatsevichi district',
      birthday: '11 June 1953',
      video: 'https://www.youtube.com/watch?v=j05sTGoFxXo',
      gallery: ['https://lit-bel.org/assets/images/2015/News/maroz_07.JPG', 'https://archive.li/Rr1E2/e33ce6d2b532e2ad8aebca0c3b5f506d5e745a3f.jpg', 'https://time.graphics/uploadedFiles/500/00/5f/005f0b02e6d44ad37ebae2d3b2772dc2.jpg', 'https://www.sb.by/upload/iblock/c02/c021bfd5414d2efb1a8baf92d52bd967.jpg'],
      biography: [{
        action: 'Vladimir Moroz was born',
        date: '11.06.1953'
      }, {
        action: 'He graduated from high school in the village of Domanovo ',
        date: '1970'
      }, {
        action: 'Graduated from the architectural faculty of the Belarusian Polytechnic Institute',
        date: '1975'
      }, {
        action: 'Gorky Literature Institute in Moscow',
        date: '1983'
      }, {
        action: 'He worked as an engineer at the production and technical Association “Integral “',
        date: '1975-1977'
      }, {
        action: 'Lead Editor of the Chronicle Studio of the National Film Studio Belarusfilm.',
        date: 'С 2005 года '
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392828.2846757159!2d25.097497298875826!3d52.79788059697341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4720a9b2642580d1%3A0xe62933db7d07ea19!2sKosava!5e0!3m2!1sen!2sby!4v1548507387573',
      works: [{
        name: 'И пусть нам вечным памятником будет ',
        date: '2006'
      }, {
        name: 'Нефтяная жемчужина Беларуси ',
        date: '2006'
      }, {
        name: 'Лазер Алферова',
        date: '2008'
      }, {
        name: 'Мифологемы Родина',
        date: '2009'
      }, {
        name: 'Беларусьфильм 2010 ',
        date: '2010'
      }]
    }, {
      name: 'Victor T. Tourov',
      personPhoto: 'https://gdb.rferl.org/A6BD8A06-B0CF-4DE2-8484-594F3C96452E_cx0_cy49_cw0_w1023_r1_s.jpg',
      cityBirth: 'Mogilev',
      birthday: '25 October 1936',
      video: 'https://www.youtube.com/watch?v=pTwHQE4NYJo',
      gallery: ['http://gdb.rferl.org/93E39899-7DEB-4379-84A5-3EBFFA9CA35F_w610_r0_s.jpg', 'http://gdb.rferl.org/4CBECE67-E2A5-4AF8-93F1-1ABE36E35814_w610_r0_s.jpg', 'http://gdb.rferl.org/B60F3D39-BE2A-4AEC-849F-67E0DBE42740_w610_r0_s.jpg'],
      biography: [{
        action: 'Director of the Studio "Belarusfilm"',
        date: 'Since 1959'
      }, {
        action: 'He graduated from the directing Department of all-Union state Institute of cinematography',
        date: '1961'
      }, {
        action: 'Secretary of the Union of cinematographers of Belarus',
        date: '1976—1981'
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150509.0807704434!2d30.211493474950785!3d53.883683185460626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d0521c52844571%3A0xcf85d14239bb73b6!2sMogilev!5e0!3m2!1sen!2sby!4v1548507515846',
      works: [{
        name: 'Через кладбище',
        date: '1965'
      }, {
        name: 'Я родом из детства',
        date: '1966'
      }, {
        name: 'Сыновья идут в бой',
        date: '1969'
      }, {
        name: 'Время ее сыновей',
        date: '1974'
      }, {
        name: 'Высокая кровь',
        date: '1989'
      }, {
        name: 'Черный аист',
        date: '1993'
      }, {
        name: 'Шляхтич Завальня',
        date: '1994'
      }]
    }, {
      name: 'Yuri Viktorovich Tarich',
      personPhoto: 'https://upload.wikimedia.org/wikipedia/ru/9/98/Yury_tarich.jpg',
      cityBirth: 'Polotsk',
      birthday: '12 (24) January 1885',
      video: 'https://www.youtube.com/watch?v=n6l17pIZdTg',
      gallery: ['http://imperiaduhu.by/gistoryia/gist-novychas/novy -20-1/malun-20-1/pershynec/lesnaia-byl-taruch.jpg', 'http://kino-rodina.by/tarich_.gif', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bust_to_Yuri_Tarich.JPG/300px-Bust_to_Yuri_Tarich.JPG'],
      biography: [{
        action: 'He studied at the law faculty of Moscow University',
        date: '1903—1905'
      }, {
        action: 'he was arrested as a member of the Warsaw military revolutionary organization of the RSDLP and deported to the village of Tara in Tobolsk province. ',
        date: 'In December 1905'
      }, {
        action: 'he was an actor in Tobolsk, then in Chita, Lipetsk, Tambov, Vilnius. During the First world war he served in the army, where he received the rank of Lieutenant.',
        date: 'Since 1907'
      }, {
        action: 'in Moscow, actor and Director of a number of leading theaters (including worked with V. Meyerhold)',
        date: 'Since 1917 '
      }, {
        action: '— one of the leaders of the cadet Theater of the Kremlin.',
        date: '1920—1924 '
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72309.17018509451!2d28.711650910649787!3d55.50342244224693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c48e045ec357b3%3A0x9b6f7ca39a88cc2b!2sPolatsk!5e0!3m2!1sen!2sby!4v1548507608227',
      works: [{
        name: 'Банда отца Кныша',
        date: '1924 '
      }, {
        name: 'враги',
        date: '1924 '
      }, {
        name: 'волки',
        date: '1925'
      }, {
        name: 'Марокко',
        date: '1925'
      }, {
        name: 'первые огни',
        date: '1925'
      }, {
        name: 'Крылья холопа',
        date: '1926'
      }, {
        name: 'Булат',
        date: '1926'
      }, {
        name: 'Лесная быль',
        date: '1926'
      }, {
        name: 'свои и чужие',
        date: '1928'
      }]
    }]
  },
  ru: {
    environment: {
      pageTitle: 'Портал культуры Беларуси',
      pageHeader: 'Режисёры кино Беларуси',
      linkToMain: 'Главная',
      linkToProducers: 'Режисёры',
      linkToAuthors: 'Авторы',
      titleWhoAreWe: 'Кто мы',
      textWhoAreWe: 'На данном портале представлена информация о наиболее известных кинорежиссеров Республики Беларусь. Пользуясь данным порталом прошу заметить что данный ресурс создавался на коленках, и тем не менее содержит переводы на белорусский и английский языки.Вы можете использовать поиск по кинорежиссерам.\n' + ' Данный ресурс предоставляет обширную информацию по наиболее известным кинорежиссерам, а именно: вы можете ознакомиться с биографией, посмотреть фотогалерею, также увидеть локацию где работал определенный автор, и в большинстве случаев посмотреть  произведения на которыми они трудились.\n',
      textAuthorOfDay: 'Автор дня',
      textAuthors: 'Авторы',
      author1: 'Андрей Сайко',
      author2: 'Олег Сазоник',
      author3: 'Роман Бучков',
      author4: 'Егор Ремизов',
      textFooter: '&copy; 2019 Команда мечты',
      textSearching: 'Поиск',
      textName: 'Имя:',
      textPlace: 'Город / место рождения',
      textBtnSearch: 'Найти',
      textUnluckyResult: 'Ничего не найдено'
    },
    producers: [{
      name: 'Виктор Никифорович Дашук',
      personPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/GoEast_2014_Viktar_Dashuk_2.jpg/800px-GoEast_2014_Viktar_Dashuk_2.jpg',
      cityBirth: 'с. Волок Хойникского р - на Гомельской обл.',
      birthday: '16 сентября 1938г.',
      video: 'https://www.youtube.com/watch?v=M2IJK0eWGfM',
      gallery: ['http://hojniki.ucoz.ru/books/dashuk_partreht.jpg', 'http://hojniki.ucoz.ru/pictures/dashuk_dlja_tehkstu_3a.jpg', 'https://www.dw.com/image/17619539_303.jpg', 'https://upload.wikimedia.org/wikipedia/ru/3/37/Daschuk.jpg'],
      biography: [{
        action: 'Закончил факультет БГУ',
        date: '1960'
      }, {
        action: 'Закончил высшие курсы сценаристов и режисёров в Москве',
        date: '1967'
      }, {
        action: 'Лоуреат премии Ленинского комсомола Беларуси',
        date: '1976'
      }, {
        action: 'Заслуженный деятель исскуств БССР',
        date: '1977'
      }, {
        action: 'Руководитель мастерской режиссуры документального кино',
        date: '1989—1993'
      }, {
        action: 'Создал студию «Господин Д.»',
        date: '1993—2005'
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631451.1479131432!2d29.359081033272837!3d51.81335863954663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d5ec6c2de695a7%3A0x686f5bd6f9e46f49!2sKhoyniki+District!5e0!3m2!1sen!2sby!4v1548507046991',
      works: [{
        name: 'Дом',
        date: '1970'
      }, {
        name: 'Безумие храбрых',
        date: '1970'
      }, {
        name: 'Давным-давно умер бой ',
        date: '1970'
      }, {
        name: 'Кукушка куковала',
        date: '1972'
      }, {
        name: 'Биография Полонеза ля минор ',
        date: '1973'
      }, {
        name: 'Я из огненной деревни ',
        date: '1975-1978'
      }, {
        name: 'Прощание ',
        date: '1980'
      }, {
        name: 'У войны не женское лицо ',
        date: '1980-1984'
      }, {
        name: 'Труба',
        date: '1981'
      }]
    }, {
      name: 'Пташук, Михаил Николаевич',
      personPhoto: 'https://belprauda.org/wp-content/uploads/2017/10/juri1509_3id0c_logo-768x502.jpg',
      cityBirth: 'В. Федюки Ляховичского р-на',
      birthday: '28 января 1943.',
      video: 'https://www.youtube.com/watch?v=ELRs1o4Atq4',
      gallery: ['https://baj.by/sites/default/files/event/preview/maxresdefault_2.jpg', 'https://novychas.by/images/image_5.jpg', 'https://novychas.by/images/hqdefault_1_logo_1.jpg'],
      biography: [{
        action: 'Окончил режиссерский факультет Театрального училища имени Б. Щукина',
        date: '1967'
      }, {
        action: 'Премия Ленинского комсомола ',
        date: '1980'
      }, {
        action: 'Заслуженный деятель искусств БССР',
        date: '1982'
      }, {
        action: 'Государственная премия БССР ',
        date: '1982'
      }, {
        action: 'Народный артист БССР ',
        date: '1990'
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451960.75635366654!2d25.638775558347778!3d52.98184348039909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d8c36455cf6d71%3A0xc282e33ad6af2989!2sFeduki!5e0!3m2!1sen!2sby!4v1548507238821',
      works: [{
        name: 'Лесные качели',
        date: '1975 '
      }, {
        name: 'Время выбрало нас ',
        date: '1978 '
      }, {
        name: 'возьму твою боль',
        date: '1980 '
      }, {
        name: 'Черный замок Ольшанский',
        date: '1984 '
      }, {
        name: 'Знак беды ',
        date: '1986 '
      }, {
        name: 'Наш бронепоезд',
        date: '1988 '
      }, {
        name: 'Кооператив" Политбюро',
        date: '1992 '
      }]
    }, {
      name: 'Мороз Владимир Викентьевич',
      personPhoto: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Vladimir_Moroz.JPG',
      cityBirth: 'Коссово, Ивацевичский район',
      birthday: '11 июня 1953',
      video: 'https://www.youtube.com/watch?v=j05sTGoFxXo',
      gallery: ['https://lit-bel.org/assets/images/2015/News/maroz_07.JPG', 'https://archive.li/Rr1E2/e33ce6d2b532e2ad8aebca0c3b5f506d5e745a3f.jpg', 'https://time.graphics/uploadedFiles/500/00/5f/005f0b02e6d44ad37ebae2d3b2772dc2.jpg', 'https://www.sb.by/upload/iblock/c02/c021bfd5414d2efb1a8baf92d52bd967.jpg'],
      biography: [{
        action: 'Мороз Владимир, родился',
        date: '11.06.1953'
      }, {
        action: 'Среднюю школу окончил в деревне Доманово',
        date: '1970'
      }, {
        action: 'Окончил архитектурный факультет Белорусского политехнического института',
        date: '1975'
      }, {
        action: 'Литературный институт имени А. М. Горького в Москве',
        date: '1983'
      }, {
        action: 'Работал инженером на производственно-техническом объединении “Интеграл”',
        date: '1975-1977'
      }, {
        action: 'ведущий редактор студии "Летопись" Национальной киностудии "Беларусьфильм".',
        date: 'С 2005 года '
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392828.2846757159!2d25.097497298875826!3d52.79788059697341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4720a9b2642580d1%3A0xe62933db7d07ea19!2sKosava!5e0!3m2!1sen!2sby!4v1548507387573',
      works: [{
        name: 'И пусть нам вечным памятником будет ',
        date: '2006'
      }, {
        name: 'Нефтяная жемчужина Беларуси ',
        date: '2006'
      }, {
        name: 'Лазер Алферова',
        date: '2008'
      }, {
        name: 'Мифологемы Родина',
        date: '2009'
      }, {
        name: 'Беларусьфильм 2010 ',
        date: '2010'
      }]
    }, {
      name: 'Виктор Тимофеевич Туров',
      personPhoto: 'https://gdb.rferl.org/A6BD8A06-B0CF-4DE2-8484-594F3C96452E_cx0_cy49_cw0_w1023_r1_s.jpg',
      cityBirth: 'Могилев ',
      birthday: '25 октября 1936',
      video: 'https://www.youtube.com/watch?v=pTwHQE4NYJo',
      gallery: ['http://gdb.rferl.org/93E39899-7DEB-4379-84A5-3EBFFA9CA35F_w610_r0_s.jpg', 'http://gdb.rferl.org/4CBECE67-E2A5-4AF8-93F1-1ABE36E35814_w610_r0_s.jpg', 'http://gdb.rferl.org/B60F3D39-BE2A-4AEC-849F-67E0DBE42740_w610_r0_s.jpg'],
      biography: [{
        action: 'режиссер киностудии Беларусьфильм',
        date: 'С 1959'
      }, {
        action: 'Окончил режиссерский факультет Всесоюзного государственного института кинематографии',
        date: '1961'
      }, {
        action: 'первый секретарь правления Союза кинематографистов Беларуси',
        date: '1976—1981'
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150509.0807704434!2d30.211493474950785!3d53.883683185460626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d0521c52844571%3A0xcf85d14239bb73b6!2sMogilev!5e0!3m2!1sen!2sby!4v1548507515846',
      works: [{
        name: 'Через кладбище',
        date: '1965'
      }, {
        name: 'Я родом из детства',
        date: '1966'
      }, {
        name: 'Сыновья идут в бой',
        date: '1969'
      }, {
        name: 'Время ее сыновей',
        date: '1974'
      }, {
        name: 'Высокая кровь',
        date: '1989'
      }, {
        name: 'Черный аист',
        date: '1993'
      }, {
        name: 'Шляхтич Завальня',
        date: '1994'
      }]
    }, {
      name: ' Юрий Викторович Тарич',
      personPhoto: 'https://upload.wikimedia.org/wikipedia/ru/9/98/Yury_tarich.jpg',
      cityBirth: 'Полоцк',
      birthday: '12 (24) января 1885',
      video: 'https://www.youtube.com/watch?v=n6l17pIZdTg',
      gallery: ['http://imperiaduhu.by/gistoryia/gist-novychas/novy -20-1/malun-20-1/pershynec/lesnaia-byl-taruch.jpg', 'http://kino-rodina.by/tarich_.gif', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bust_to_Yuri_Tarich.JPG/300px-Bust_to_Yuri_Tarich.JPG'],
      biography: [{
        action: 'Учился на юридическом факультете Московского университета ',
        date: '1903—1905'
      }, {
        action: 'арестован как член Варшавской военно-революционной организации РСДРП и выслан в деревню Тара Тобольской губернии. ',
        date: 'В декабре 1905'
      }, {
        action: 'был актером в Тобольске, затем в Чите, Липецке, Тамбове, Вильнюсе. Во время Первой мировой служил в действующей армии, где получил звание поручика.',
        date: 'С 1907'
      }, {
        action: 'в Москве, актер и режиссер ряда ведущих театров (работал в том числе с В. Мейерхольдам)',
        date: 'С 1917'
      }, {
        action: '— один из руководителей курсантского Театра Кремля.',
        date: '1920—1924 '
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72309.17018509451!2d28.711650910649787!3d55.50342244224693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c48e045ec357b3%3A0x9b6f7ca39a88cc2b!2sPolatsk!5e0!3m2!1sen!2sby!4v1548507608227',
      works: [{
        name: 'Банда отца Кныша',
        date: '1924 '
      }, {
        name: 'враги',
        date: '1924 '
      }, {
        name: 'волки',
        date: '1925'
      }, {
        name: 'Марокко',
        date: '1925'
      }, {
        name: 'первые огни',
        date: '1925'
      }, {
        name: 'Крылья холопа',
        date: '1926'
      }, {
        name: 'Булат',
        date: '1926'
      }, {
        name: 'Лесная быль',
        date: '1926'
      }, {
        name: 'свои и чужие',
        date: '1928'
      }]
    }]
  },
  by: {
    environment: {
      pageTitle: 'Партал культуры Беларусі',
      pageHeader: 'Вытворцы кіно Беларусі',
      linkToMain: 'Галоуная',
      linkToProducers: 'Рэжысёры',
      linkToAuthors: 'Аўтары',
      titleWhoAreWe: 'Хто мы',
      textWhoAreWe: 'На дадзеным партале прадстаўлена інфармацыя аб найбольш вядомых кінарэжысёраў Рэспублікі Беларусь. Карыстаючыся дадзеных парталам прашу заўважыць што дадзены рэсурс ствараўся на каленках, і тым не менш утрымлівае пераклады на беларускую і англійскую мовы.Вы можаце выкарыстоўваць пошук па кінарэжысёрам.\n' + ' Дадзены рэсурс прадастаўляе шырокую інфармацыю па найбольш вядомым кінарэжысёрам, а менавіта: вы можаце азнаёміцца з біяграфіяй, паглядзець фотагалерэю, таксама ўбачыць лакацыі дзе працаваў пэўны аўтар, і ў большасці выпадкаў паглядзець творы на якімі яны працавалі.\n',
      textAuthorOfDay: 'Аўтар дня',
      textAuthors: 'Аўтары',
      author1: 'Андрэй Сайка',
      author2: 'Алег Сазоннiк',
      author3: 'Раман Бучкоу',
      author4: 'Ягор Рэмiзоу',
      textFooter: '&copy; 2019 Каманда мары',
      textSearching: 'Пошук',
      textName: 'Імя:',
      textPlace: 'Горад / месца нараджэння',
      textBtnSearch: 'Знайсці',
      textUnluckyResult: 'Нічога не знойдзена'
    },
    producers: [{
      name: 'Віктар Нічыпаравіч Дашук',
      personPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/GoEast_2014_Viktar_Dashuk_2.jpg/800px-GoEast_2014_Viktar_Dashuk_2.jpg',
      cityBirth: 'с. Валок Хойніцкага р-на Гомельскай вобл.',
      birthday: '16 Верасеня 1938г.',
      video: 'https://www.youtube.com/watch?v=M2IJK0eWGfM',
      gallery: ['https://upload.wikimedia.org/wikipedia/ru/3/37/Daschuk.jpg', 'https://www.dw.com/image/17619539_303.jpg', 'http://hojniki.ucoz.ru/pictures/dashuk_dlja_tehkstu_3a.jpg', 'http://hojniki.ucoz.ru/books/dashuk_partreht.jpg'],
      biography: [{
        action: 'Скончыў факультэт журналістыкі БДУ',
        date: '1960'
      }, {
        action: 'Скончыў вышэйшыя курсы сцэнарыстаў і рэжысёраў у Маскве',
        date: '1967'
      }, {
        action: 'Лаўрэат прэміі Ленінскага камсамола Беларусі',
        date: '1976'
      }, {
        action: 'Заслужаны дзеяч мастацтваў БССР',
        date: '1977'
      }, {
        action: 'Кіраўнік майстэрні рэжысуры дакументальнага кіно',
        date: '1989—1993'
      }, {
        action: 'Стварыў студыю «Спадар Д.»',
        date: '1993—2005'
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631451.1479131432!2d29.359081033272837!3d51.81335863954663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d5ec6c2de695a7%3A0x686f5bd6f9e46f49!2sKhoyniki+District!5e0!3m2!1sen!2sby!4v1548507046991',
      works: [{
        name: 'Дом ',
        date: '1970'
      }, {
        name: 'Вар\'яцтву адважных',
        date: '1970'
      }, {
        name: 'Даўным-даўно скончаны бой',
        date: '1970'
      }, {
        name: 'Зязюля кукавала',
        date: '1972'
      }, {
        name: 'Біяграфія паланэза ля мінор ',
        date: '1973'
      }, {
        name: 'Я з вогненнай вёскі',
        date: '1975-1978'
      }, {
        name: 'Развітанне',
        date: '1980'
      }, {
        name: 'У вайны не жаночы твар',
        date: '1980-1984'
      }, {
        name: 'Труба',
        date: '1981'
      }]
    }, {
      name: 'Міхаіл Мікалаевіч Пташук',
      personPhoto: 'https://belprauda.org/wp-content/uploads/2017/10/juri1509_3id0c_logo-768x502.jpg',
      cityBirth: 'в. Фядзюкі Ляхавіцкага р-на',
      birthday: '28 студзеня 1943.',
      video: 'https://www.youtube.com/watch?v=ELRs1o4Atq4',
      gallery: ['https://baj.by/sites/default/files/event/preview/maxresdefault_2.jpg', 'https://novychas.by/images/image_5.jpg', 'https://novychas.by/images/hqdefault_1_logo_1.jpg'],
      biography: [{
        action: 'Скончыў рэжысёрскі факультэт Тэатральнага вучылішча імя Б. Шчукіна',
        date: '1967'
      }, {
        action: 'Прэмія Ленінскага камсамола',
        date: '1980'
      }, {
        action: 'Заслужаны дзеяч мастацтваў БССР ',
        date: '1982'
      }, {
        action: 'Дзяржаўная прэмія БССР ',
        date: '1982'
      }, {
        action: 'Народны артыст БССР',
        date: '1990'
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451960.75635366654!2d25.638775558347778!3d52.98184348039909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d8c36455cf6d71%3A0xc282e33ad6af2989!2sFeduki!5e0!3m2!1sen!2sby!4v1548507238821',
      works: [{
        name: 'Лясныя арэлі',
        date: '1975 '
      }, {
        name: 'Час выбраў нас',
        date: '1978 '
      }, {
        name: 'Вазьму твой боль',
        date: '1980 '
      }, {
        name: 'Чорны замак Альшанскі',
        date: '1984 '
      }, {
        name: 'Знак бяды',
        date: '1986 '
      }, {
        name: 'Наш браняпоезд',
        date: '1988 '
      }, {
        name: 'Кааператыў „Палітбюро“',
        date: ''
      }]
    }, {
      name: 'Мароз Уладзімір Вікенцьевіч',
      personPhoto: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Vladimir_Moroz.JPG',
      cityBirth: 'Косава, Івацэвіцкі раён',
      birthday: '11 чэрвеня 1953',
      video: 'https://www.youtube.com/watch?v=j05sTGoFxXo',
      gallery: ['https://lit-bel.org/assets/images/2015/News/maroz_07.JPG', 'https://archive.li/Rr1E2/e33ce6d2b532e2ad8aebca0c3b5f506d5e745a3f.jpg', 'https://time.graphics/uploadedFiles/500/00/5f/005f0b02e6d44ad37ebae2d3b2772dc2.jpg', 'https://www.sb.by/upload/iblock/c02/c021bfd5414d2efb1a8baf92d52bd967.jpg'],
      biography: [{
        action: 'Мароз Уладзімір, нарадзіўся ',
        date: '11.06.1953'
      }, {
        action: 'Сярэднюю школу скончыў у вёсцы Даманава ',
        date: '1970'
      }, {
        action: 'Скончыў архітэктурны факультэт Беларускага політэхнічнага інстытута',
        date: '1975'
      }, {
        action: 'Літаратурны інстытут імя А.М.Горкага ў Маскве',
        date: '1983'
      }, {
        action: 'Працаваў інжынерам на Вытворча-тэхнічным аб’яднанні “Інтэграл”',
        date: '1975-1977'
      }, {
        action: 'вядучы рэдактар студыі “Летапіс” Нацыянальнай кінастудыі “Беларусьфільм”.',
        date: 'З 2005 года '
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392828.2846757159!2d25.097497298875826!3d52.79788059697341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4720a9b2642580d1%3A0xe62933db7d07ea19!2sKosava!5e0!3m2!1sen!2sby!4v1548507387573',
      works: [{
        name: 'І хай нам вечным помнікам будзе',
        date: '2006'
      }, {
        name: 'Нафтавая жамчужына Беларусі',
        date: '2006'
      }, {
        name: 'Лазер Алфёрова',
        date: '2008'
      }, {
        name: 'Міфалагемы Родзіна',
        date: '2009'
      }, {
        name: 'Беларусьфільм 2010 ',
        date: '2010'
      }]
    }, {
      name: 'Віктар Цімафеевіч Тураў',
      personPhoto: 'https://gdb.rferl.org/A6BD8A06-B0CF-4DE2-8484-594F3C96452E_cx0_cy49_cw0_w1023_r1_s.jpg',
      cityBirth: 'Магілёў',
      birthday: '25 кастрычніка 1936',
      video: 'https://www.youtube.com/watch?v=pTwHQE4NYJo',
      gallery: ['http://gdb.rferl.org/93E39899-7DEB-4379-84A5-3EBFFA9CA35F_w610_r0_s.jpg', 'http://gdb.rferl.org/4CBECE67-E2A5-4AF8-93F1-1ABE36E35814_w610_r0_s.jpg', 'http://gdb.rferl.org/B60F3D39-BE2A-4AEC-849F-67E0DBE42740_w610_r0_s.jpg'],
      biography: [{
        action: 'рэжысёр кінастудыі «Беларусьфільм»',
        date: 'З 1959'
      }, {
        action: 'Скончыў рэжысёрскі факультэт Усесаюзнага дзяржаўнага інстытута кінематаграфіі',
        date: '1961'
      }, {
        action: 'першы сакратар праўлення Саюза кінематаграфістаў Беларусі',
        date: '1976—1981'
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150509.0807704434!2d30.211493474950785!3d53.883683185460626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d0521c52844571%3A0xcf85d14239bb73b6!2sMogilev!5e0!3m2!1sen!2sby!4v1548507515846',
      works: [{
        name: 'Праз могілкі',
        date: '1965'
      }, {
        name: 'Я родам з дзяцінства',
        date: '1966'
      }, {
        name: 'Сыны ідуць у бой',
        date: '1969'
      }, {
        name: 'Час яе сыноў',
        date: '1974'
      }, {
        name: 'Высокая кроў',
        date: '1989'
      }, {
        name: 'Чорны бусел',
        date: '1993'
      }, {
        name: 'Шляхціч Завальня',
        date: '1994'
      }]
    }, {
      name: 'Юрый Віктаравіч Тарыч',
      personPhoto: 'https://upload.wikimedia.org/wikipedia/ru/9/98/Yury_tarich.jpg',
      cityBirth: 'Полацк',
      birthday: '12 (24) студзеня 1885',
      video: 'https://www.youtube.com/watch?v=n6l17pIZdTg',
      gallery: ['http://imperiaduhu.by/gistoryia/gist-novychas/novy -20-1/malun-20-1/pershynec/lesnaia-byl-taruch.jpg', 'http://kino-rodina.by/tarich_.gif', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bust_to_Yuri_Tarich.JPG/300px-Bust_to_Yuri_Tarich.JPG'],
      biography: [{
        action: 'Вучыўся на юрыдычным факультэце Маскоўскага ўніверсітэта ',
        date: '1903—1905'
      }, {
        action: 'арыштаваны як член Варшаўскай ваенна-рэвалюцыйнай арганізацыі РСДРП і высланы ў вёску Тара Табольскай губерніі.',
        date: 'У снежні 1905 '
      }, {
        action: 'быў акцёрам у Табольску, затым у Чыце, Ліпецку, Тамбове, Вільні. Пад час Першай Сусветнай служыў у дзеючай арміі, дзе атрымаў званне паручніка.',
        date: 'З 1907'
      }, {
        action: 'у Маскве, акцёр і рэжысёр шэрагу вядучых тэатраў (працаваў у тым ліку з У. Мейерхольдам).',
        date: 'З 1917'
      }, {
        action: '— адзін з кіраўнікоў Курсанцкага тэатра Крамля.',
        date: '1920—1924 '
      }],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72309.17018509451!2d28.711650910649787!3d55.50342244224693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c48e045ec357b3%3A0x9b6f7ca39a88cc2b!2sPolatsk!5e0!3m2!1sen!2sby!4v1548507608227',
      works: [{
        name: 'Банда бацькі Кныша',
        date: '1924 '
      }, {
        name: 'Ворагі',
        date: '1924 '
      }, {
        name: 'ваўкі',
        date: '1925'
      }, {
        name: 'Марока',
        date: '1925'
      }, {
        name: 'першыя агні ',
        date: '1925'
      }, {
        name: 'Крылы халопа ',
        date: '1926'
      }, {
        name: 'Булат',
        date: '1926'
      }, {
        name: 'Лясная быль',
        date: '1926'
      }, {
        name: 'свае і чужыя',
        date: '1928'
      }]
    }]
  }
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _searching_item_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searching-item.template */ "./src/js/searching-item.template.js");



function getUrlVars() {
  const vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
}

const {
  log
} = console;
const ourLocation = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
const searchingNameEl = document.getElementById('name');
const locationEl = document.getElementById('location');
const findBtn = document.getElementById('find-btn');
const searchingListEl = document.getElementById('searching-list');
const pageHeaderEl = document.getElementById('pageHeader');
const linkToMainEl = document.getElementById('linkToMain');
const linkToProducersEl = document.getElementById('linkToProducers');
const linkToAuthorsEl = document.getElementById('linkToAuthors');
const textWhoAreWeEl = document.getElementById('textWhoAreWe');
const textAuthorOfDayEl = document.getElementById('textAuthorOfDay');
const textFooterEl = document.getElementById('textFooter');
const textSearchingEl = document.getElementById('textSearching');
const textNameEl = document.getElementById('textName');
const textPlaceEl = document.getElementById('textPlace');
const titleWhoAreWeEl = document.getElementById('titleWhoAreWe');
const author1El = document.getElementById('author1');
const author2El = document.getElementById('author2');
const author3El = document.getElementById('author3');
const author4El = document.getElementById('author4');
let {
  lang
} = getUrlVars();

function changeLang(language) {
  document.title = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.pageTitle;
  if (pageHeaderEl) pageHeaderEl.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.pageHeader;
  if (linkToMainEl) linkToMainEl.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.linkToMain;
  if (linkToProducersEl) linkToProducersEl.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.linkToProducers;
  if (linkToAuthorsEl) linkToAuthorsEl.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.linkToAuthors;
  if (textWhoAreWeEl) textWhoAreWeEl.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.textWhoAreWe;
  if (textAuthorOfDayEl) textAuthorOfDayEl.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.textAuthorOfDay;
  if (textFooterEl) textFooterEl.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.textFooter;
  if (textSearchingEl) textSearchingEl.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.textSearching;
  if (textNameEl) textNameEl.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.textName;
  if (textPlaceEl) textPlaceEl.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.textPlace;
  if (findBtn) findBtn.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.textBtnSearch;
  if (titleWhoAreWeEl) titleWhoAreWeEl.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.titleWhoAreWe;
  if (author1El) author1El.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.author1;
  if (author2El) author2El.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.author2;
  if (author3El) author3El.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.author3;
  if (author4El) author4El.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][language].environment.author4;
}

function findPersons(obj, language, name = '', location = '') {
  const list = [];

  for (let i = 0, len = obj[language].producers.length; i < len; i += 1) {
    const producerName = obj[language].producers[i]['name'].toLowerCase();
    const producerLocation = obj[language].producers[i]['cityBirth'].toLowerCase();

    if (producerName.includes(name.toLowerCase())) {
      if (producerLocation.includes(location.toLowerCase())) list.push(obj[language].producers[i]);
    }
  }

  return list;
}

function clearSearchingList() {
  const len = searchingListEl.children.length;

  for (let i = 0; i < len; i += 1) {
    searchingListEl.children[0].remove();
  }
}

function addPersons(persons = []) {
  if (persons.length === 0) {
    const message = document.createElement('div');
    message.innerText = _data__WEBPACK_IMPORTED_MODULE_0__["default"][lang].environment.textUnluckyResult;
    searchingListEl.appendChild(message);
    log(searchingListEl);
    return;
  }

  for (let i = 0, len = persons.length; i < len; i += 1) {
    const newItem = document.createElement('div');
    newItem.innerHTML = _searching_item_template__WEBPACK_IMPORTED_MODULE_1__["default"];
    const img = newItem.querySelector('img');
    const authorPhotoLink = newItem.querySelector('.author-link');
    const authorName = newItem.querySelector('.author-name');
    const authorLocation = newItem.querySelector('.author-location');
    img.setAttribute('src', persons[i].personPhoto);
    authorName.innerText = persons[i].name;
    authorPhotoLink.setAttribute('href', `person.html?lang=${lang}&name=${persons[i].name}`);
    authorName.setAttribute('href', `person.html?lang=${lang}&name=${persons[i].name}`);
    authorLocation.innerText = persons[i].cityBirth;
    searchingListEl.appendChild(newItem.children[0]);
  }
}

if (!lang) lang = 'ru';
changeLang(lang);

if (ourLocation === 'producers.html') {
  // if (getUrlVars().name) searchingNameEl.value = decodeURI(getUrlVars().name);
  changeLang(lang);
  findBtn.addEventListener('click', () => {
    clearSearchingList();
    const persons = findPersons(_data__WEBPACK_IMPORTED_MODULE_0__["default"], lang, searchingNameEl.value, locationEl.value);
    addPersons(persons);
  });
  searchingNameEl.addEventListener('keyup', event => {
    if (event.key === 'Enter') findBtn.click();
  });
  locationEl.addEventListener('keyup', event => {
    if (event.key === 'Enter') findBtn.click();
  });
  findBtn.click();
}

/***/ }),

/***/ "./src/js/searching-item.template.js":
/*!*******************************************!*\
  !*** ./src/js/searching-item.template.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<div class="searching-item">
    <a class="author-link" href=""><img src="" alt=""></a>
    <div class="info-view">
        <a href="" class="author-name"></a>
        <span class="author-location"></span>
    </div>
</div>
`);

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