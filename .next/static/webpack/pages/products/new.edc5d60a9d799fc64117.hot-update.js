self["webpackHotUpdate_N_E"]("pages/products/new",{

/***/ "./pages/products/new.js":
/*!*******************************!*\
  !*** ./pages/products/new.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/main */ "./ethereum/main.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* module decorator */ module = __webpack_require__.hmd(module);









var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\pages\\products\\new.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_9___default().createElement);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var ChainNew = /*#__PURE__*/function (_Component) {
  (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(ChainNew, _Component);

  var _super = _createSuper(ChainNew);

  function ChainNew() {
    var _this;

    (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, ChainNew);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__.default)((0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "state", {
      price: ''
    });

    (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__.default)((0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref = (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {
        var accounts;
        return C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                _context.next = 6;
                return _ethereum_main__WEBPACK_IMPORTED_MODULE_11__.default.methods.createChain(_this.state.price).send({
                  from: accounts[0]
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(ChainNew, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_10__.default, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 14
        }
      }, "Create a New Product"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Form, {
        onSubmit: this.onSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 14
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Form.Field, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }
      }, "Price"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Input, {
        label: "wei",
        labelPosition: "right",
        value: this.state.price,
        onChange: function onChange(event) {
          return _this2.setState({
            price: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
        primary: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }
      }, "Create!")));
    }
  }]);

  return ChainNew;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);

/* harmony default export */ __webpack_exports__["default"] = (ChainNew);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvbmV3LmpzIl0sIm5hbWVzIjpbIkNoYWluTmV3IiwicHJpY2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2ViMyIsImFjY291bnRzIiwibWFpbiIsInN0YXRlIiwic2VuZCIsImZyb20iLCJvblN1Ym1pdCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxROzs7Ozs7Ozs7Ozs7Ozs7OzhXQUNNO0FBQ0pDLFdBQUssRUFBRTtBQURILEs7Ozt1V0FHRyxpQkFBTUMsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUEEscUJBQUssQ0FBQ0MsY0FBTjtBQURPO0FBQUEsdUJBR2VDLG9FQUFBLEVBSGY7O0FBQUE7QUFHREMsd0JBSEM7QUFBQTtBQUFBLHVCQUlEQyx3RUFBQSxDQUF5QixNQUFLQyxLQUFMLENBQVdOLEtBQXBDLEVBQTJDTyxJQUEzQyxDQUFnRDtBQUNsREMsc0JBQUksRUFBQ0osUUFBUSxDQUFDLENBQUQ7QUFEcUMsaUJBQWhELENBSkM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7OzZCQVFIO0FBQUE7O0FBQ0osYUFDQSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURMLEVBRUssTUFBQyxvREFBRDtBQUFNLGdCQUFRLEVBQUUsS0FBS0ssUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFSSxNQUFDLHFEQUFEO0FBQU8sYUFBSyxFQUFDLEtBQWI7QUFDQyxxQkFBYSxFQUFDLE9BRGY7QUFFQyxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXTixLQUZuQjtBQUdDLGdCQUFRLEVBQUUsa0JBQUFDLEtBQUs7QUFBQSxpQkFBRyxNQUFJLENBQUNTLFFBQUwsQ0FBYztBQUFDVixpQkFBSyxFQUFDQyxLQUFLLENBQUNVLE1BQU4sQ0FBYUM7QUFBcEIsV0FBZCxDQUFIO0FBQUEsU0FIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBREgsRUFTRyxNQUFDLHNEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEgsQ0FGTCxDQURBO0FBZUY7Ozs7RUE1QmlCQyw0Qzs7QUE4QnZCLCtEQUFlZCxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL25ldy5lZGM1ZDYwYTlkNzk5ZmM2NDExNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IHtGb3JtLCBCdXR0b24sIElucHV0fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBtYWluIGZyb20gJy4uLy4uL2V0aGVyZXVtL21haW4nO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuXHJcbmNsYXNzIENoYWluTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHByaWNlOiAnJ1xyXG4gICAgfTtcclxuICAgIG9uU3VibWl0ID0gYXN5bmMoZXZlbnQpPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWNjb3VudHM9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgbWFpbi5tZXRob2RzLmNyZWF0ZUNoYWluKHRoaXMuc3RhdGUucHJpY2UpLnNlbmQoe1xyXG4gICAgICAgICAgICBmcm9tOmFjY291bnRzWzBdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgPGgzPkNyZWF0ZSBhIE5ldyBQcm9kdWN0PC9oMz5cclxuICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwid2VpXCJcclxuICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudD0+IHRoaXMuc2V0U3RhdGUoe3ByaWNlOmV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PkNyZWF0ZSE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICl9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hhaW5OZXc7Il0sInNvdXJjZVJvb3QiOiIifQ==