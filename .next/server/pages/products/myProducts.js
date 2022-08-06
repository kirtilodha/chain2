(function() {
var exports = {};
exports.id = "pages/products/myProducts";
exports.ids = ["pages/products/myProducts"];
exports.modules = {

/***/ "./pages/products/myProducts.js":
/*!**************************************!*\
  !*** ./pages/products/myProducts.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethereum_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ethereum/main */ "./ethereum/main.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\pages\\products\\myProducts.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








function MyProducts() {
  const {
    0: myChains,
    1: setMyChains
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const myChains = async () => {
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__.default.eth.getAccounts();
      const items = await _ethereum_main__WEBPACK_IMPORTED_MODULE_1__.default.methods.getOwnChains(accounts[0]).call();
      setMyChains(items);
    };

    myChains();
  }, []);

  function render() {
    const items = myChains.map(address => {
      return {
        header: address,
        description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {
          route: `/products/${address}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }
        }, __jsx("a", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }
        }, " View Product")),
        fluid: true //css to stretch

      };
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {
      items: items,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    });
  }

  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "All Products"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), render()));
}

/* harmony default export */ __webpack_exports__["default"] = (MyProducts);

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["ethereum_main_js-routes_js","components_Layout_js"], function() { return __webpack_exec__("./pages/products/myProducts.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFpbjIvLi9wYWdlcy9wcm9kdWN0cy9teVByb2R1Y3RzLmpzIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8vY2hhaW4yL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY2hhaW4yL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJNeVByb2R1Y3RzIiwibXlDaGFpbnMiLCJzZXRNeUNoYWlucyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWNjb3VudHMiLCJ3ZWIzIiwiaXRlbXMiLCJtYWluIiwiY2FsbCIsInJlbmRlciIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUNwQixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUVBQyxrREFBUyxDQUFDLE1BQUk7QUFDWixVQUFNSCxRQUFRLEdBQUUsWUFBVTtBQUN4QixZQUFNSSxRQUFRLEdBQUcsTUFBTUMsbUVBQUEsRUFBdkI7QUFDQSxZQUFNQyxLQUFLLEdBQUcsTUFBTUMsd0VBQUEsQ0FBMEJILFFBQVEsQ0FBQyxDQUFELENBQWxDLEVBQXVDSSxJQUF2QyxFQUFwQjtBQUNBUCxpQkFBVyxDQUFDSyxLQUFELENBQVg7QUFDRCxLQUpEOztBQUtBTixZQUFRO0FBQ1QsR0FQUSxFQU9QLEVBUE8sQ0FBVDs7QUFRQSxXQUFTUyxNQUFULEdBQWlCO0FBQ2YsVUFBTUgsS0FBSyxHQUFHTixRQUFRLENBQUNVLEdBQVQsQ0FBY0MsT0FBRCxJQUFXO0FBQ3BDLGFBQU07QUFDSkMsY0FBTSxFQUFFRCxPQURKO0FBRUpFLG1CQUFXLEVBQ1QsTUFBQyx5Q0FBRDtBQUFNLGVBQUssRUFBRyxhQUFZRixPQUFRLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBSEU7QUFPSkcsYUFBSyxFQUFFLElBUEgsQ0FPUzs7QUFQVCxPQUFOO0FBU0QsS0FWYSxDQUFkO0FBV0EsV0FBTyxNQUFDLHlEQUFEO0FBQVksV0FBSyxFQUFFUixLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFFRCxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBSUtHLE1BQU0sRUFKWCxDQURGLENBREY7QUFVRDs7QUFFRCwrREFBZVYsVUFBZixFOzs7Ozs7Ozs7OztBQzlDQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9wcm9kdWN0cy9teVByb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtYWluIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9tYWluXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC5qc1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlQcm9kdWN0cygpIHtcclxuICBjb25zdCBbbXlDaGFpbnMsc2V0TXlDaGFpbnNdPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgbXlDaGFpbnM9IGFzeW5jICgpPT57XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBtYWluLm1ldGhvZHMuZ2V0T3duQ2hhaW5zKGFjY291bnRzWzBdKS5jYWxsKCk7XHJcbiAgICAgIHNldE15Q2hhaW5zKGl0ZW1zKTtcclxuICAgIH1cclxuICAgIG15Q2hhaW5zKCk7XHJcbiAgfSxbXSlcclxuICBmdW5jdGlvbiByZW5kZXIoKXtcclxuICAgIGNvbnN0IGl0ZW1zID0gbXlDaGFpbnMubWFwKChhZGRyZXNzKT0+e1xyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICA8TGluayByb3V0ZT17YC9wcm9kdWN0cy8ke2FkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgIDxhPiBWaWV3IFByb2R1Y3Q8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBmbHVpZDogdHJ1ZSwgLy9jc3MgdG8gc3RyZXRjaFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5BbGwgUHJvZHVjdHM8L2gzPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgIHtyZW5kZXIoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeVByb2R1Y3RzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=