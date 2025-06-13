/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/hard-shell-tacos.jpg.jpg */ \"./src/assets/hard-shell-tacos.jpg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/contactBackground2.jpg */ \"./src/assets/contactBackground2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --main-background-color: rgb(209, 230, 247);\n    --header-background-color: rgb(255, 255, 255);\n    --nav-buttons-background-color: rgb(255, 255, 255);\n    --nav-button-text-color: rgb(170, 79, 0);\n    --home-screen-text-color: rgb(255, 255, 255);\n    --background-menu-color: rgb(198, 153, 86);\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n    width: 100%;\n    background-color: white;\n    /* margin-bottom: 5px; */\n    position: fixed;\n    padding: 0;\n    top: 0;\n    \n}\n.navButton {\n    background-color: var(--nav-buttons-background-color);\n    background:\n        linear-gradient(\n            rgba(255, 255, 255, 0.6), \n            rgba(255, 255, 255, 0.6)\n        );\n    color: var(--nav-button-text-color);\n    font-weight: 900;\n    border: none;\n    border-radius: 10px;\n    height: 50px;\n    width: 100px;\n    transition: 300ms;\n    margin: 0px 10px;\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 900;\n    font-size: 1.1rem;\n}\n.navButton:hover {\n    scale: 1.05;\n    cursor: pointer;\n}\n\n/* Home screen styling */\n#content {\n    padding-top: 8vh;\n}\n.homeScreenDiv {\n    width: 100%;\n    height: 60vh;\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n    color: var(--home-screen-text-color);\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-size: xx-large;\n    background:\n        linear-gradient(\n            rgba(0, 0, 0, 0.6), \n            rgba(0, 0, 0, 0.6)\n        ),\n        url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center;\n    background-size: cover;\n    \n}\n.message {\n    margin-top: 80px;\n    display: flex;\n    flex-direction: column;\n}\n.historyDiv {\n    height: 300px;\n    background-color: white;\n    color: black;\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n.historyMessage {\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    padding-top: 20%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-bottom: 20%;\n}\n.historyPicture {\n    padding-top: 15%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-bottom: 10%;\n}\n.historyPic {\n    width: 100%;\n    border-radius: 10%;\n}\n\n/* Menu screen styling */\n.menuDiv {\n    max-width: 100%;\n    min-width: none;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    padding-bottom: 50px;\n}\n\n.item {\n    background-color: rgb(247, 247, 247);\n    background:\n        linear-gradient(\n            rgba(255, 255, 255, 0.7), \n            rgba(255, 255, 255, 0.7)\n        );\n    box-sizing: border-box;\n    height: auto;\n    width: 400px;\n    color: rgb(0, 0, 0);\n    display: grid;\n    grid-template-rows: 340px 1fr 2fr 1fr;\n    justify-items: center;\n    text-align: center;\n    border-radius: 20px;\n    margin: 20px;\n    font-size: 1.3rem;\n\n}\n.itemPicture img {\n    width: 100%;\n    border-radius: 10px;\n}\n\n.itemName {\n    text-align: center;\n    align-self: start;\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n.itemIngredients {\n    \n}\n.itemPrice {\n    font-weight: bold;\n}\n\n.orderItemButton {\n    height: 30px;\n    width: 80px;\n    background-color: orange;\n    border-radius: 10px;\n    \n}\n.orderItemButton:hover {\n    cursor: pointer;\n    scale: 1.1;\n}\n/* Contact page */\n.topDiv {\n    background:\n        linear-gradient(\n            rgba(0, 0, 0, 0.7), \n            rgba(0, 0, 0, 0.7)\n        ),\n        url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center;\n    background-size: cover;\n    height: 60vh;\n    color: white;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: center;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-size: 0.9rem;\n}\n.addressDiv {\n    width: 200px;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    margin: 10px;\n}\n.emailPhoneDiv {\n    width: 250px;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    margin: 10px;\n}\n.socialsDiv {\n    width: 200px;\n    height: 200px;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.iconsDiv {\n    display: flex;\n    justify-content: space-around;\n}\nh1 {\n    font-weight: bold;\n    margin: 0;\n}\n.socialsDiv img {\n    margin: 10px;\n    cursor: pointer;\n    transition: transform 0.2s ease;\n    height: 40px;\n}\n.socialsDiv img:hover {\n    transform: scale(1.3);\n}\n\n.bookTableButton {\n    border: solid 2px white;\n    width: 100%;\n    height: 45px;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-size: large;\n    background-color: transparent;\n    color: white;\n}\n.bookTableButton:hover {\n    color: black;\n    background-color: white;\n}\n\n.bottomDiv {\n    display: flex;\n    flex-direction: column;\n}\n\n.formHeaderDiv {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-size: 3rem;\n    text-align: center;\n    padding: 20px 0px;\n    width: 100%;\n}\n\n\n/* Form styling */\n.formDiv {\n    display: flex;\n    justify-content: center;\n}\n.contactForm {\n    justify-self: center;\n    width: 80%;\n    padding: 50px;\n    margin: 0;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-size: 1.4rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.formRow {\n    margin-bottom: 20px;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    flex-wrap: wrap;\n\n}\n#formRow1 {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.formRow input {\n    border: none;\n    border-bottom: solid 1px black;\n    width: 100%;\n    padding: 10px;\n    font-size: 1.3rem;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n.formRow label {\n    margin-bottom: 15px;\n}\n#name {\n    width: 80%;\n}\n#phone {\n    width: 100%;\n}\ninput,label {\n    display: flex;\n    flex-direction: column;\n}\n.nameDiv {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n}\n.phoneDiv {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n}\n\n.formButton {\n    width: 150px;\n    height: 50px;\n    border: solid 4px black;\n    background-color: transparent;\n    align-self: center;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    cursor: pointer;\n    font-size: 1.3rem;\n}\n.formButton:hover {\n    background-color: black;\n    color: white;\n}\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/contactBackground.jpg":
/*!******************************************!*\
  !*** ./src/assets/contactBackground.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d37f2287cc079a383af3.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/contactBackground.jpg?");

/***/ }),

/***/ "./src/assets/contactBackground2.jpg":
/*!*******************************************!*\
  !*** ./src/assets/contactBackground2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"abfee519fb9b3d281ce1.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/contactBackground2.jpg?");

/***/ }),

/***/ "./src/assets/hard-shell-tacos.jpg.jpg":
/*!*********************************************!*\
  !*** ./src/assets/hard-shell-tacos.jpg.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"415ed5c39fc7e28a2625.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/hard-shell-tacos.jpg.jpg?");

/***/ }),

/***/ "./src/assets/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/facebook.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed57b640744ceccd3f18.svg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/icons/facebook.svg?");

/***/ }),

/***/ "./src/assets/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"58343ea253613167c66a.svg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/icons/instagram.svg?");

/***/ }),

/***/ "./src/assets/icons/twitter.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/twitter.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cace40f86d59be2debfe.svg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/icons/twitter.svg?");

/***/ }),

/***/ "./src/assets/menu/alpastor-tacos.png":
/*!********************************************!*\
  !*** ./src/assets/menu/alpastor-tacos.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6baf62ed7f75e9346b78.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/menu/alpastor-tacos.png?");

/***/ }),

/***/ "./src/assets/menu/birria-tacos.png":
/*!******************************************!*\
  !*** ./src/assets/menu/birria-tacos.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57113cdac4371f0078b5.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/menu/birria-tacos.png?");

/***/ }),

/***/ "./src/assets/menu/carne-asado-tacos.png":
/*!***********************************************!*\
  !*** ./src/assets/menu/carne-asado-tacos.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d6469835bdd06fc5889.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/menu/carne-asado-tacos.png?");

/***/ }),

/***/ "./src/assets/menu/chicken-tinga-tacos.png":
/*!*************************************************!*\
  !*** ./src/assets/menu/chicken-tinga-tacos.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5f0ce4c7ae3149bb562e.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/menu/chicken-tinga-tacos.png?");

/***/ }),

/***/ "./src/assets/menu/crispy-fish-tacos.png":
/*!***********************************************!*\
  !*** ./src/assets/menu/crispy-fish-tacos.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"417c991e8f59c7473f52.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/menu/crispy-fish-tacos.png?");

/***/ }),

/***/ "./src/assets/menu/jackfruit-barbacoa-tacos.png":
/*!******************************************************!*\
  !*** ./src/assets/menu/jackfruit-barbacoa-tacos.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e8c0b9d25e7f55fabe7.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/menu/jackfruit-barbacoa-tacos.png?");

/***/ }),

/***/ "./src/assets/menu/polo-asado-tacos.png":
/*!**********************************************!*\
  !*** ./src/assets/menu/polo-asado-tacos.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a3e4b5e1fe81d69e1da.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/menu/polo-asado-tacos.png?");

/***/ }),

/***/ "./src/assets/menu/tofu-al-carbon-tacos.png":
/*!**************************************************!*\
  !*** ./src/assets/menu/tofu-al-carbon-tacos.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7699bfd257c98c5f4cba.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/menu/tofu-al-carbon-tacos.png?");

/***/ }),

/***/ "./src/assets/menu/veggie-delight-tacos.png":
/*!**************************************************!*\
  !*** ./src/assets/menu/veggie-delight-tacos.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c5e7c959a6eb77fa3cb.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/menu/veggie-delight-tacos.png?");

/***/ }),

/***/ "./src/assets/restaurant-outside-photo.png":
/*!*************************************************!*\
  !*** ./src/assets/restaurant-outside-photo.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68947fc0bb18d51b785f.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/restaurant-outside-photo.png?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateContactPage: () => (/* binding */ generateContactPage)\n/* harmony export */ });\n/* harmony import */ var _assets_contactBackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/contactBackground.jpg */ \"./src/assets/contactBackground.jpg\");\n/* harmony import */ var _assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/facebook.svg */ \"./src/assets/icons/facebook.svg\");\n/* harmony import */ var _assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/twitter.svg */ \"./src/assets/icons/twitter.svg\");\n/* harmony import */ var _assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/instagram.svg */ \"./src/assets/icons/instagram.svg\");\n\n\n\n\n\nfunction generateContactPage() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    //Create elements\n    const contactDiv = document.createElement('div')\n    const topDiv = document.createElement('div');\n    const addressDiv = document.createElement('div');\n    const emailPhoneDiv = document.createElement('div');\n    const socialsDiv = document.createElement('div');\n    const bottomDiv = document.createElement('div');\n    const address = document.createElement('h1');\n    const street = document.createElement('h2');\n    const city = document.createElement('h2');\n    const emailHeader = document.createElement('h1')\n    const email = document.createElement('h2')\n    const phoneHeader = document.createElement('h1')\n    const phone = document.createElement('h2')\n    const iconsDiv = document.createElement('div')\n    const bookingDiv = document.createElement('div')\n    const facebookIcon = document.createElement('img')\n    const twitterIcon = document.createElement('img')\n    const instagramIcon = document.createElement('img')\n    const bookTableButton = document.createElement('button')\n    const formHeaderDiv = document.createElement('div')\n    const formDiv = document.createElement('div')\n    // Append divs\n    content.appendChild(contactDiv)\n    contactDiv.append(topDiv, bottomDiv)\n    topDiv.append(addressDiv, emailPhoneDiv, socialsDiv)\n    addressDiv.append(address, street, city)\n    emailPhoneDiv.append(emailHeader, email, phoneHeader, phone)\n    socialsDiv.append(iconsDiv, bookingDiv)\n    iconsDiv.append(facebookIcon, twitterIcon, instagramIcon)\n    bookingDiv.append(bookTableButton)\n    bottomDiv.append(formHeaderDiv, formDiv)\n\n    //Creating classes\n    contactDiv.classList.add('contactDiv')\n    topDiv.classList.add('topDiv')\n    addressDiv.classList.add('addressDiv')\n    emailPhoneDiv.classList.add('emailPhoneDiv')\n    socialsDiv.classList.add('socialsDiv')\n    iconsDiv.classList.add('iconsDiv')\n    bottomDiv.classList.add('bottomDiv')\n    bookTableButton.classList.add('bookTableButton')\n    formHeaderDiv.classList.add('formHeaderDiv')\n    //Inner HTML\n    address.innerHTML = \"Address\"\n    street.innerHTML = \"22 Beach Avenue\"\n    city.innerHTML = \"Los Angeles, California\"\n    emailHeader.innerHTML = \"Email\"\n    email.innerHTML = \"dendytacos@mail.com\"\n    phoneHeader.innerHTML = \"Phone\"\n    phone.innerHTML = \"+1-222-222-2222\"\n    bookTableButton.innerHTML = \"Book a table\"\n    formHeaderDiv.innerHTML = \"Contact\"\n    //Icons\n    facebookIcon.src = _assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_1__;\n    twitterIcon.src = _assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_2__;\n    instagramIcon.src = _assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_3__;\n\n    //Creating the form\n    const contactForm = document.createElement('form')\n    formDiv.classList.add('formDiv')\n    formDiv.append(contactForm)\n    const formRow1 = document.createElement('div')\n    const formRow2 = document.createElement('div')\n    const formRow3 = document.createElement('div')\n    contactForm.classList.add('contactForm')\n    const inputName = document.createElement('input')\n    const nameLabel = document.createElement('label')\n    const inputPhone = document.createElement('input')\n    const phoneLabel = document.createElement('label')\n    const inputEmail = document.createElement('input')\n    const emailLabel = document.createElement('label')\n    const inputMessage = document.createElement('input')\n    const messageLabel = document.createElement('label')\n    const formButton = document.createElement('button')\n    const nameDiv = document.createElement('div')\n    const phoneDiv = document.createElement('div')\n    \n    contactForm.append(formRow1, formRow2, formRow3, formButton)\n    formRow1.append(nameDiv, phoneDiv)\n    nameDiv.append(nameLabel, inputName)\n    phoneDiv.append(phoneLabel, inputPhone)\n    formRow2.append(emailLabel, inputEmail)\n    formRow3.append(messageLabel, inputMessage)\n    formRow1.classList.add('formRow')\n    formRow2.classList.add('formRow')\n    formRow3.classList.add('formRow')\n    formRow1.setAttribute('id', 'formRow1')\n    formRow2.setAttribute('id', 'formRow2')\n    formRow3.setAttribute('id', 'formRow3')\n    //Name attributes\n    nameLabel.setAttribute('for', 'name')\n    nameLabel.innerHTML = \"Name\"\n    inputName.setAttribute(\"type\", \"text\")\n    inputName.setAttribute(\"id\", \"name\")\n    nameDiv.classList.add('nameDiv')\n    //Phone attributes\n    phoneLabel.setAttribute('for', 'phone')\n    phoneLabel.innerHTML = \"Phone\"\n    inputPhone.setAttribute('type', \"tel\")\n    inputPhone.setAttribute('id', \"phone\")\n    phoneDiv.classList.add('phoneDiv')\n    //Email attributes\n    emailLabel.setAttribute('for', 'email')\n    emailLabel.innerHTML = \"Email\"\n    inputEmail.setAttribute('type', 'email')\n    inputEmail.setAttribute('id', 'email')\n    //Message attribute\n    messageLabel.setAttribute('for', 'message')\n    messageLabel.innerHTML = \"Message\"\n    inputMessage.setAttribute('type', 'text')\n    inputMessage.setAttribute('id', 'message')\n    //Button\n    formButton.innerHTML = \"Submit\"\n    formButton.classList.add('formButton')\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_hard_shell_tacos_jpg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/hard-shell-tacos.jpg.jpg */ \"./src/assets/hard-shell-tacos.jpg.jpg\");\n/* harmony import */ var _assets_restaurant_outside_photo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/restaurant-outside-photo.png */ \"./src/assets/restaurant-outside-photo.png\");\n\n\n\nfunction createHomePage() {\n    //Creating elements\n    console.log('the Home button is working');\n    const content = document.getElementById('content');\n    content.innerHTML = \"\";\n    const homeScreenDiv = document.createElement('div');\n    const messageDiv = document.createElement('div');\n    const h1 = document.createElement('h1')\n    const h2 = document.createElement('h2')\n    const historyDiv = document.createElement('div')\n    const historyMessage = document.createElement('div')\n    const historyPicture = document.createElement('div')\n    const historyPic = document.createElement('img')\n    historyPic.src = _assets_restaurant_outside_photo_png__WEBPACK_IMPORTED_MODULE_1__;\n\n    // Appending elements\n    content.appendChild(homeScreenDiv)\n    content.appendChild(historyDiv)\n    homeScreenDiv.appendChild(messageDiv)\n    messageDiv.appendChild(h1)\n    messageDiv.appendChild(h2)\n    historyDiv.appendChild(historyMessage)\n    historyDiv.appendChild(historyPicture)\n    historyPicture.appendChild(historyPic)\n    // Adding classes\n    homeScreenDiv.classList.add(\"homeScreenDiv\")\n    messageDiv.classList.add(\"message\")\n    historyDiv.classList.add(\"historyDiv\")\n    historyMessage.classList.add(\"historyMessage\")\n    historyPicture.classList.add(\"historyPicture\")\n    historyPic.classList.add(\"historyPic\")\n    historyPicture.appendChild(historyPic)\n    // Adding innerHTML\n    h1.innerHTML = \"Welcome to Dendy Tacos!\";\n    h2.innerHTML = \"If only they were real...\";\n    historyMessage.innerHTML = \"Welcome guests! My name is Max Dendy! After studying web-development for 8 straight months I became craving some authentic mexican tacos. (I'm still unable to explain this strange phenomenon.) Since there is no places in my hometown that could provide me this divine dish, I had to open up my own. That is how Dendy Tacos was born!\"\n    historyPic.innerHTML = `<img class=\"historyPic\" src=\"./assets/restaurant-outside-photo.png\">`\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconsole.log(\"this is working\")\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const homeButton = document.getElementById('homeButton');\n    if (homeButton) {\n        homeButton.addEventListener('click', () => {\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n        })\n    } else {\n        console.error('homeButton not found')\n    }\n})\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const menuButton = document.getElementById('menuButton');\n    if (menuButton) {\n        menuButton.addEventListener('click', () => {\n            \n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n            ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.addToDiv)(_menu_js__WEBPACK_IMPORTED_MODULE_2__.myMenu)\n            console.log(_menu_js__WEBPACK_IMPORTED_MODULE_2__.myMenu)\n        })\n        \n    } else {\n        console.error('menuButton not found')\n    }\n})\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const contactButton = document.getElementById('contactButton');\n    if (contactButton) {\n        contactButton.addEventListener('click', () => {\n            \n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.generateContactPage)()\n        })\n        \n    } else {\n        console.error('contactButton not found')\n    }\n})\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuItem: () => (/* binding */ MenuItem),\n/* harmony export */   addItemToMenu: () => (/* binding */ addItemToMenu),\n/* harmony export */   addToDiv: () => (/* binding */ addToDiv),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   myMenu: () => (/* binding */ myMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_alpastor_tacos_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu/alpastor-tacos.png */ \"./src/assets/menu/alpastor-tacos.png\");\n/* harmony import */ var _assets_menu_birria_tacos_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/menu/birria-tacos.png */ \"./src/assets/menu/birria-tacos.png\");\n/* harmony import */ var _assets_menu_carne_asado_tacos_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/menu/carne-asado-tacos.png */ \"./src/assets/menu/carne-asado-tacos.png\");\n/* harmony import */ var _assets_menu_chicken_tinga_tacos_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/menu/chicken-tinga-tacos.png */ \"./src/assets/menu/chicken-tinga-tacos.png\");\n/* harmony import */ var _assets_menu_crispy_fish_tacos_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/menu/crispy-fish-tacos.png */ \"./src/assets/menu/crispy-fish-tacos.png\");\n/* harmony import */ var _assets_menu_jackfruit_barbacoa_tacos_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/menu/jackfruit-barbacoa-tacos.png */ \"./src/assets/menu/jackfruit-barbacoa-tacos.png\");\n/* harmony import */ var _assets_menu_polo_asado_tacos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/menu/polo-asado-tacos.png */ \"./src/assets/menu/polo-asado-tacos.png\");\n/* harmony import */ var _assets_menu_veggie_delight_tacos_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/menu/veggie-delight-tacos.png */ \"./src/assets/menu/veggie-delight-tacos.png\");\n/* harmony import */ var _assets_menu_tofu_al_carbon_tacos_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/menu/tofu-al-carbon-tacos.png */ \"./src/assets/menu/tofu-al-carbon-tacos.png\");\n/* harmony import */ var _assets_hard_shell_tacos_jpg_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/hard-shell-tacos.jpg.jpg */ \"./src/assets/hard-shell-tacos.jpg.jpg\");\n\n\n\n\n\n\n\n\n\n\n\nfunction generateMenu() {\n\n    content.innerHTML = '';\n}\n\nconst myMenu = [];\n\nclass MenuItem {\n    constructor(name, ingredients, price, picture) {\n        this.name = name;\n        this.ingredients = ingredients;\n        this.price = price;\n        this.picture = picture;\n    }\n}\n\nfunction addItemToMenu(name, ingredients, price, picture) {\n    let item = new MenuItem(name, ingredients, price, picture)\n    myMenu.push(item);\n}\n\naddItemToMenu(\"Al Pastor Taco\", \"Marinated pork, pineapple, onions, cilantro on corn tortillas\", 3.45, _assets_menu_alpastor_tacos_png__WEBPACK_IMPORTED_MODULE_0__)\naddItemToMenu(\"Birria Tacos\", \"Slow-braised beef, melted cheese, cilantro, corn tortillas\", 10.49, _assets_menu_birria_tacos_png__WEBPACK_IMPORTED_MODULE_1__)\naddItemToMenu(\"Pollo Asado Tacos\", \"Grilled chicken, mango salsa, crema, flour tortillas\", 8.49, _assets_menu_polo_asado_tacos_png__WEBPACK_IMPORTED_MODULE_6__)\naddItemToMenu(\"Carne Asado Tacos\", \"Char-grilled steak, pico de gallo, cotija cheese, corn tortillas\", 9.99, _assets_menu_carne_asado_tacos_png__WEBPACK_IMPORTED_MODULE_2__)\naddItemToMenu(\"Crispy Fish Tacos\", \"Beer-battered white fish, cabbage slaw, chipotle mayo, flour tortillas\", 9.25, _assets_menu_crispy_fish_tacos_png__WEBPACK_IMPORTED_MODULE_4__)\naddItemToMenu(\"Tinga de Pollo Tacos\", \"Shredded chicken in chipotle sauce, pickled onions, avocado, corn tortillas\", 8.75, _assets_menu_chicken_tinga_tacos_png__WEBPACK_IMPORTED_MODULE_3__)\naddItemToMenu(\"Veggie Delight Taco\", \"Grilled zucchini, bell peppers, vegan crema, corn tortillas\", 7.75, _assets_menu_veggie_delight_tacos_png__WEBPACK_IMPORTED_MODULE_7__)\naddItemToMenu(\"Jackfruit Barbacoa Taco\", \"Smoky jackfruit, red onion, cilantro-lime sauce, corn tortillas\", 8.25, _assets_menu_jackfruit_barbacoa_tacos_png__WEBPACK_IMPORTED_MODULE_5__)\naddItemToMenu(\"Tofu Al Carbon Taco\", \"Marinated grilled tofu, roasted corn, salsa verde, flour tortillas\", 7.75, _assets_menu_tofu_al_carbon_tacos_png__WEBPACK_IMPORTED_MODULE_8__)\n\nfunction addToDiv(menuArray) {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    const menuDiv = document.createElement('div');\n    menuDiv.classList.add('menuDiv')\n    menuDiv.setAttribute(\"id\", \"menuDiv\");\n    content.appendChild(menuDiv)\n    var div = document.getElementById('menuDiv');\n    for(let i = 0; i < menuArray.length; i++) {\n        const item = document.createElement('div')\n        item.classList.add('item')\n        const itemPic = document.createElement('div')\n        itemPic.classList.add(\"itemPicture\")\n        const itemName = document.createElement('div')\n        itemName.classList.add(\"itemName\")\n        const ingredients = document.createElement('div')\n        ingredients.classList.add(\"itemIngredients\")\n        const price = document.createElement('div')\n        price.classList.add('itemPrice')\n        const button = document.createElement('button')\n        button.classList.add('orderItemButton')\n        const image = document.createElement('img')\n        image.src = menuArray[i].picture\n        menuDiv.appendChild(item)\n        item.appendChild(itemPic)\n        itemPic.appendChild(image)\n        item.appendChild(itemName)\n        item.appendChild(ingredients)\n        item.appendChild(price)\n        \n        itemName.innerHTML = (menuArray[i].name)\n        ingredients.innerHTML = (menuArray[i].ingredients)\n        price.innerHTML = (`$${menuArray[i].price}`)\n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;