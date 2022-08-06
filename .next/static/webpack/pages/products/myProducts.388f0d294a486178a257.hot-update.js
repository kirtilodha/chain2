self["webpackHotUpdate_N_E"]("pages/products/myProducts",{

/***/ "./pages/products/myProducts.js":
/*!**************************************!*\
  !*** ./pages/products/myProducts.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/main */ "./ethereum/main.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\pages\\products\\myProducts.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);








function MyProducts() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      myChains = _useState[0],
      setMyChains = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var myChains = /*#__PURE__*/function () {
      var _ref = (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var accounts, items;
        return C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;
                _context.next = 5;
                return _ethereum_main__WEBPACK_IMPORTED_MODULE_3__.default.methods.getOwnChains(accounts[0]).call();

              case 5:
                items = _context.sent;
                setMyChains(items);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function myChains() {
        return _ref.apply(this, arguments);
      };
    }();

    myChains();
  }, []);

  function render() {
    var _this = this;

    var items = myChains.map(function (address) {
      return {
        header: address,
        description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_6__.Link, {
          route: "/products/".concat(address),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }
        }, " View Product")),
        fluid: true //css to stretch

      };
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Group, {
      items: items,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    });
  }

  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_5__.default, {
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

_s(MyProducts, "6JUPr/Pq63DgFl/aZMfg4mB/JGk=");

_c = MyProducts;
/* harmony default export */ __webpack_exports__["default"] = (MyProducts);

var _c;

$RefreshReg$(_c, "MyProducts");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvbXlQcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJNeVByb2R1Y3RzIiwidXNlU3RhdGUiLCJteUNoYWlucyIsInNldE15Q2hhaW5zIiwidXNlRWZmZWN0Iiwid2ViMyIsImFjY291bnRzIiwibWFpbiIsImNhbGwiLCJpdGVtcyIsInJlbmRlciIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxrQkFDVUMsK0NBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDYkMsUUFEYTtBQUFBLE1BQ0pDLFdBREk7O0FBR3BCQyxrREFBUyxDQUFDLFlBQUk7QUFDWixRQUFNRixRQUFRO0FBQUEsdVdBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDU0csbUVBQUEsRUFEVDs7QUFBQTtBQUNSQyx3QkFEUTtBQUFBO0FBQUEsdUJBRU1DLHdFQUFBLENBQTBCRCxRQUFRLENBQUMsQ0FBRCxDQUFsQyxFQUF1Q0UsSUFBdkMsRUFGTjs7QUFBQTtBQUVSQyxxQkFGUTtBQUdkTiwyQkFBVyxDQUFDTSxLQUFELENBQVg7O0FBSGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQSxzQkFBUlAsUUFBUTtBQUFBO0FBQUE7QUFBQSxPQUFkOztBQUtBQSxZQUFRO0FBQ1QsR0FQUSxFQU9QLEVBUE8sQ0FBVDs7QUFRQSxXQUFTUSxNQUFULEdBQWlCO0FBQUE7O0FBQ2YsUUFBTUQsS0FBSyxHQUFHUCxRQUFRLENBQUNTLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVc7QUFDcEMsYUFBTTtBQUNKQyxjQUFNLEVBQUVELE9BREo7QUFFSkUsbUJBQVcsRUFDVCxNQUFDLHlDQUFEO0FBQU0sZUFBSyxzQkFBZUYsT0FBZixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBSEU7QUFPSkcsYUFBSyxFQUFFLElBUEgsQ0FPUzs7QUFQVCxPQUFOO0FBU0QsS0FWYSxDQUFkO0FBV0EsV0FBTyxNQUFDLHlEQUFEO0FBQVksV0FBSyxFQUFFTixLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFFRCxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBSUtDLE1BQU0sRUFKWCxDQURGLENBREY7QUFVRDs7R0FwQ1FWLFU7O0tBQUFBLFU7QUFzQ1QsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvbXlQcm9kdWN0cy4zODhmMGQyOTRhNDg2MTc4YTI1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtYWluIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9tYWluXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC5qc1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlQcm9kdWN0cygpIHtcclxuICBjb25zdCBbbXlDaGFpbnMsc2V0TXlDaGFpbnNdPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgbXlDaGFpbnM9IGFzeW5jICgpPT57XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBtYWluLm1ldGhvZHMuZ2V0T3duQ2hhaW5zKGFjY291bnRzWzBdKS5jYWxsKCk7XHJcbiAgICAgIHNldE15Q2hhaW5zKGl0ZW1zKTtcclxuICAgIH1cclxuICAgIG15Q2hhaW5zKCk7XHJcbiAgfSxbXSlcclxuICBmdW5jdGlvbiByZW5kZXIoKXtcclxuICAgIGNvbnN0IGl0ZW1zID0gbXlDaGFpbnMubWFwKChhZGRyZXNzKT0+e1xyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICA8TGluayByb3V0ZT17YC9wcm9kdWN0cy8ke2FkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgIDxhPiBWaWV3IFByb2R1Y3Q8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBmbHVpZDogdHJ1ZSwgLy9jc3MgdG8gc3RyZXRjaFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5BbGwgUHJvZHVjdHM8L2gzPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgIHtyZW5kZXIoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeVByb2R1Y3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9