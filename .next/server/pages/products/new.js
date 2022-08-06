(function() {
var exports = {};
exports.id = "pages/products/new";
exports.ids = ["pages/products/new"];
exports.modules = {

/***/ "./pages/products/new.js":
/*!*******************************!*\
  !*** ./pages/products/new.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/main */ "./ethereum/main.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\pages\\products\\new.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class ChainNew extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      price: '',
      errorMessage: '',
      loading: false
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      this.setState({
        loading: true,
        errorMessage: ""
      });

      try {
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();
        await _ethereum_main__WEBPACK_IMPORTED_MODULE_3__.default.methods.createChain(this.state.price).send({
          from: accounts[0]
        });
        _routes__WEBPACK_IMPORTED_MODULE_5__.Router.pushRoute('/');
      } catch (err) {
        this.setState({
          errorMessage: err.message
        });
      }

      this.setState({
        loading: false
      });
    });
  }

  render() {
    return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 14
      }
    }, "Create a New Product"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onSubmit: this.onSubmit,
      error: !!this.state.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 14
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }, "Price"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
      label: "wei",
      labelPosition: "right",
      value: this.state.price,
      onChange: event => this.setState({
        price: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
      error: true,
      header: "Oops!",
      content: this.state.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
      primary: true,
      loading: this.state.loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, "Create!")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ChainNew);

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
var __webpack_exports__ = __webpack_require__.X(0, ["ethereum_main_js-routes_js","components_Layout_js"], function() { return __webpack_exec__("./pages/products/new.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFpbjIvLi9wYWdlcy9wcm9kdWN0cy9uZXcuanMiLCJ3ZWJwYWNrOi8vY2hhaW4yL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2hhaW4yL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbIkNoYWluTmV3IiwiQ29tcG9uZW50IiwicHJpY2UiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiYWNjb3VudHMiLCJ3ZWIzIiwibWFpbiIsInN0YXRlIiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJlcnIiLCJtZXNzYWdlIiwicmVuZGVyIiwib25TdWJtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFOLFNBQXVCQyw0Q0FBdkIsQ0FBaUM7QUFBQTtBQUFBOztBQUFBLG1DQUNyQjtBQUNKQyxXQUFLLEVBQUUsRUFESDtBQUVKQyxrQkFBWSxFQUFFLEVBRlY7QUFHSkMsYUFBTyxFQUFDO0FBSEosS0FEcUI7O0FBQUEsc0NBTWxCLE1BQU1DLEtBQU4sSUFBYztBQUNyQkEsV0FBSyxDQUFDQyxjQUFOO0FBRUEsV0FBS0MsUUFBTCxDQUFjO0FBQUNILGVBQU8sRUFBQyxJQUFUO0FBQWNELG9CQUFZLEVBQUM7QUFBM0IsT0FBZDs7QUFDQSxVQUFHO0FBQ0MsY0FBTUssUUFBUSxHQUFFLE1BQU1DLG1FQUFBLEVBQXRCO0FBQ0EsY0FBTUMsdUVBQUEsQ0FBeUIsS0FBS0MsS0FBTCxDQUFXVCxLQUFwQyxFQUEyQ1UsSUFBM0MsQ0FBZ0Q7QUFDbERDLGNBQUksRUFBQ0wsUUFBUSxDQUFDLENBQUQ7QUFEcUMsU0FBaEQsQ0FBTjtBQUdBTSw2REFBQSxDQUFpQixHQUFqQjtBQUVILE9BUEQsQ0FPRSxPQUFNQyxHQUFOLEVBQVU7QUFDUixhQUFLUixRQUFMLENBQWM7QUFBQ0osc0JBQVksRUFBQ1ksR0FBRyxDQUFDQztBQUFsQixTQUFkO0FBQ0g7O0FBQ0QsV0FBS1QsUUFBTCxDQUFjO0FBQUNILGVBQU8sRUFBQztBQUFULE9BQWQ7QUFDSCxLQXJCNEI7QUFBQTs7QUFzQjdCYSxRQUFNLEdBQUU7QUFDSixXQUNBLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREwsRUFFSyxNQUFDLG1EQUFEO0FBQU0sY0FBUSxFQUFFLEtBQUtDLFFBQXJCO0FBQStCLFdBQUssRUFBRSxDQUFDLENBQUMsS0FBS1AsS0FBTCxDQUFXUixZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUksTUFBQyxvREFBRDtBQUFPLFdBQUssRUFBQyxLQUFiO0FBQ0MsbUJBQWEsRUFBQyxPQURmO0FBRUMsV0FBSyxFQUFFLEtBQUtRLEtBQUwsQ0FBV1QsS0FGbkI7QUFHQyxjQUFRLEVBQUVHLEtBQUssSUFBRyxLQUFLRSxRQUFMLENBQWM7QUFBQ0wsYUFBSyxFQUFDRyxLQUFLLENBQUNjLE1BQU4sQ0FBYUM7QUFBcEIsT0FBZCxDQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FESCxFQVNPLE1BQUMsc0RBQUQ7QUFBUyxXQUFLLE1BQWQ7QUFBZSxZQUFNLEVBQUMsT0FBdEI7QUFBOEIsYUFBTyxFQUFFLEtBQUtULEtBQUwsQ0FBV1IsWUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRQLEVBVUcsTUFBQyxxREFBRDtBQUFRLGFBQU8sTUFBZjtBQUFnQixhQUFPLEVBQUUsS0FBS1EsS0FBTCxDQUFXUCxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZILENBRkwsQ0FEQTtBQWdCRjs7QUF2QzJCOztBQXlDakMsK0RBQWVKLFFBQWYsRTs7Ozs7Ozs7Ozs7QUNoREEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvcHJvZHVjdHMvbmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IHtGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBtYWluIGZyb20gJy4uLy4uL2V0aGVyZXVtL21haW4nO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgUm91dGVyfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgQ2hhaW5OZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJycsXHJcbiAgICAgICAgbG9hZGluZzpmYWxzZVxyXG4gICAgfTtcclxuICAgIG9uU3VibWl0ID0gYXN5bmMoZXZlbnQpPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlLGVycm9yTWVzc2FnZTpcIlwifSk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cz0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgYXdhaXQgbWFpbi5tZXRob2RzLmNyZWF0ZUNoYWluKHRoaXMuc3RhdGUucHJpY2UpLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTphY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTplcnIubWVzc2FnZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgIDxoMz5DcmVhdGUgYSBOZXcgUHJvZHVjdDwvaDM+XHJcbiAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJ3ZWlcIlxyXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50PT4gdGhpcy5zZXRTdGF0ZSh7cHJpY2U6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PkNyZWF0ZSE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICl9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hhaW5OZXc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9