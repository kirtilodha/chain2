(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\pages\\_app.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function App({
  Component,
  pageProps
}) {
  return __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }));
}

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")(); //for vairable routing


routes.add('/', 'index').add('/products/new', '/products/new') //what url, which page
.add('/products/myProducts', '/products/myProducts').add('/products/:address', '/products/show').add('/products/:address/requests', '/products/requests/index') //when variable is present in url
.add('/products/:address/requests/new', '/products/requests/new');
module.exports = routes;

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFpbjIvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2NoYWluMi8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBdUM7QUFDbEQsU0FDQSxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREE7QUFHRCxDOzs7Ozs7Ozs7O0FDUkgsTUFBTUMsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQVAsRUFBZixDLENBRUE7OztBQUNBRCxNQUFNLENBQ0xFLEdBREQsQ0FDSyxHQURMLEVBQ1MsT0FEVCxFQUVDQSxHQUZELENBRUssZUFGTCxFQUVzQixlQUZ0QixFQUV1QztBQUZ2QyxDQUdDQSxHQUhELENBR0ssc0JBSEwsRUFHNkIsc0JBSDdCLEVBSUNBLEdBSkQsQ0FJSyxvQkFKTCxFQUkyQixnQkFKM0IsRUFLQ0EsR0FMRCxDQUtLLDZCQUxMLEVBS29DLDBCQUxwQyxFQUtnRTtBQUxoRSxDQU1DQSxHQU5ELENBTUssaUNBTkwsRUFNd0Msd0JBTnhDO0FBVUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosTUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgKVxyXG4gIH0iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKCk7XHJcblxyXG4vL2ZvciB2YWlyYWJsZSByb3V0aW5nXHJcbnJvdXRlc1xyXG4uYWRkKCcvJywnaW5kZXgnKVxyXG4uYWRkKCcvcHJvZHVjdHMvbmV3JywgJy9wcm9kdWN0cy9uZXcnKSAvL3doYXQgdXJsLCB3aGljaCBwYWdlXHJcbi5hZGQoJy9wcm9kdWN0cy9teVByb2R1Y3RzJywgJy9wcm9kdWN0cy9teVByb2R1Y3RzJykgXHJcbi5hZGQoJy9wcm9kdWN0cy86YWRkcmVzcycsICcvcHJvZHVjdHMvc2hvdycpXHJcbi5hZGQoJy9wcm9kdWN0cy86YWRkcmVzcy9yZXF1ZXN0cycsICcvcHJvZHVjdHMvcmVxdWVzdHMvaW5kZXgnKSAvL3doZW4gdmFyaWFibGUgaXMgcHJlc2VudCBpbiB1cmxcclxuLmFkZCgnL3Byb2R1Y3RzLzphZGRyZXNzL3JlcXVlc3RzL25ldycsICcvcHJvZHVjdHMvcmVxdWVzdHMvbmV3Jyk7XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==