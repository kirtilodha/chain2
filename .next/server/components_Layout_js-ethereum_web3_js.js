exports.id = "components_Layout_js-ethereum_web3_js";
exports.ids = ["components_Layout_js-ethereum_web3_js"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\components\\Header.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    style: {
      marginTop: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__.Link, {
    route: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 16
    }
  }, "BuyIt")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Menu, {
    position: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__.Link, {
    route: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Products")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__.Link, {
    route: "/products/new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 14
    }
  }, "+"))));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\components\\Layout.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("link", {
    async: true,
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), props.children);
});

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;

if (false) {} else {
  //on the server or user doesn't have metamask
  const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)( //providing our provider
  "https://rinkeby.infura.io/v3/a50273c548074e82b4b1e77976f16a5f");
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")(); //for vairable routing


routes.add('/products/new', '/products/new') //what url, which page
.add('/products/myProducts', '/products/myProducts').add('/products/:address', '/products/show').add('/products/:address/requests', '/products/requests/index') //when variable is present in url
.add('/products/:address/requests/new', '/products/requests/new');
module.exports = routes;

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFpbjIvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvLi9ldGhlcmV1bS93ZWIzLmpzIiwid2VicGFjazovL2NoYWluMi8uL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJtYXJnaW5Ub3AiLCJwcm9wcyIsImNoaWxkcmVuIiwid2ViMyIsInByb3ZpZGVyIiwiV2ViMyIsInJvdXRlcyIsInJlcXVpcmUiLCJhZGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLCtEQUFjLE1BQUk7QUFDZCxTQUNJLE1BQUMsbURBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBQ0EsZUFBUyxFQUFFO0FBQVosS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRztBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESCxDQUZKLEVBTUksTUFBQyx3REFBRDtBQUFXLFlBQVEsRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRjtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREUsQ0FEQSxFQUtJLE1BQUMseUNBQUQ7QUFBTSxTQUFLLEVBQUMsZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREcsQ0FMSixDQU5KLENBREo7QUFrQkgsQ0FuQkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFFQSwrREFBZUMsS0FBSyxJQUFHO0FBQ25CLFNBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFDSSxTQUFLLE1BRFQ7QUFFSSxPQUFHLEVBQUMsWUFGUjtBQUdJLFFBQUksRUFBQyxrRUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FESixFQVFJLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0tBLEtBQUssQ0FBQ0MsUUFUWCxDQURKO0FBYUgsQ0FkRCxFOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUEsSUFBSUMsSUFBSjs7QUFFQSxJQUFHLEtBQUgsRUFBc0UsRUFBdEUsTUFJTTtBQUNGO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLElBQUlDLG9FQUFKLEVBQWlDO0FBQzlDLGlFQURhLENBQWpCO0FBR0FGLE1BQUksR0FBRyxJQUFJRSw2Q0FBSixDQUFTRCxRQUFULENBQVA7QUFDSDs7QUFDRCwrREFBZUQsSUFBZixFOzs7Ozs7Ozs7O0FDZkEsTUFBTUcsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQVAsRUFBZixDLENBRUE7OztBQUNBRCxNQUFNLENBQ0xFLEdBREQsQ0FDSyxlQURMLEVBQ3NCLGVBRHRCLEVBQ3VDO0FBRHZDLENBRUNBLEdBRkQsQ0FFSyxzQkFGTCxFQUU2QixzQkFGN0IsRUFHQ0EsR0FIRCxDQUdLLG9CQUhMLEVBRzJCLGdCQUgzQixFQUlDQSxHQUpELENBSUssNkJBSkwsRUFJb0MsMEJBSnBDLEVBSWdFO0FBSmhFLENBS0NBLEdBTEQsQ0FLSyxpQ0FMTCxFQUt3Qyx3QkFMeEM7QUFTQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQixDIiwiZmlsZSI6ImNvbXBvbmVudHNfTGF5b3V0X2pzLWV0aGVyZXVtX3dlYjNfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0KCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8TWVudSBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnfX0+XHJcblxyXG4gICAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPkJ1eUl0PC9hPiBcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5Qcm9kdWN0czwvYT4gXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvcHJvZHVjdHMvbmV3XCI+XHJcbiAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+KzwvYT4gXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5NZW51PlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgIGFzeW5jXHJcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcclxuICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuXHJcbmxldCB3ZWIzO1xyXG5cclxuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy53ZWIzIT09ICd1bmRlZmluZWQnKXsgLy8gcnVubmluZyBpbiBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBhdmFpbGFibGVcclxuXHJcbiAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuXHJcbn0gZWxzZXtcclxuICAgIC8vb24gdGhlIHNlcnZlciBvciB1c2VyIGRvZXNuJ3QgaGF2ZSBtZXRhbWFza1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKCAvL3Byb3ZpZGluZyBvdXIgcHJvdmlkZXJcclxuICAgICAgICBcImh0dHBzOi8vcmlua2VieS5pbmZ1cmEuaW8vdjMvYTUwMjczYzU0ODA3NGU4MmI0YjFlNzc5NzZmMTZhNWZcIlxyXG4gICAgKTtcclxuICAgIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2ViMzsiLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKCk7XHJcblxyXG4vL2ZvciB2YWlyYWJsZSByb3V0aW5nXHJcbnJvdXRlc1xyXG4uYWRkKCcvcHJvZHVjdHMvbmV3JywgJy9wcm9kdWN0cy9uZXcnKSAvL3doYXQgdXJsLCB3aGljaCBwYWdlXHJcbi5hZGQoJy9wcm9kdWN0cy9teVByb2R1Y3RzJywgJy9wcm9kdWN0cy9teVByb2R1Y3RzJykgXHJcbi5hZGQoJy9wcm9kdWN0cy86YWRkcmVzcycsICcvcHJvZHVjdHMvc2hvdycpXHJcbi5hZGQoJy9wcm9kdWN0cy86YWRkcmVzcy9yZXF1ZXN0cycsICcvcHJvZHVjdHMvcmVxdWVzdHMvaW5kZXgnKSAvL3doZW4gdmFyaWFibGUgaXMgcHJlc2VudCBpbiB1cmxcclxuLmFkZCgnL3Byb2R1Y3RzLzphZGRyZXNzL3JlcXVlc3RzL25ldycsICcvcHJvZHVjdHMvcmVxdWVzdHMvbmV3Jyk7XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVzOyJdLCJzb3VyY2VSb290IjoiIn0=