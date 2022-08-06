self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/main */ "./ethereum/main.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\pages\\dashboard.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);








function ChainIndex() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      chains = _useState[0],
      setChains = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      role = _useState2[0],
      setRole = _useState2[1];

  var isRegistered = /*#__PURE__*/function () {
    var _ref = (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var accounts, status, _role;

      return C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return _ethereum_main__WEBPACK_IMPORTED_MODULE_3__.default.methods.isRegistered(accounts[0]).call();

            case 6:
              status = _context.sent;
              _context.next = 9;
              return _ethereum_main__WEBPACK_IMPORTED_MODULE_3__.default.methods.checkUser(accounts[0]).call();

            case 9:
              _role = _context.sent;
              setRole(_role);
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function isRegistered(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  function renderChains() {
    var _this = this;

    var items = chains.map(function (address) {
      return {
        header: address,
        description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_6__.Link, {
          route: "/products/".concat(address),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 11
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
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
        lineNumber: 35,
        columnNumber: 12
      }
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var chains = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var chains;
        return C_Users_kirti_OneDrive_Desktop_Study_work_Mitacs_chain2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ethereum_main__WEBPACK_IMPORTED_MODULE_3__.default.methods.getDeployedChains().call();

              case 2:
                chains = _context2.sent;
                setChains(chains);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function chains() {
        return _ref2.apply(this, arguments);
      };
    }();

    chains();
    isRegistered();
  }, []);
  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "All Products"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), role == "buyer" && __jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_6__.Link, {
    route: "/products/new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    floated: "right",
    content: "Add Product",
    icon: "add circle",
    primary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_6__.Link, {
    route: "/products/myProducts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    floated: "right",
    content: "Your Products",
    primary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }))))), renderChains());
} // class ChainIndex extends Component {
//   static async getInitialProps() {
//     const chains = await main.methods.getDeployedChains().call();
//     const accounts = await web3.eth.getAccounts();
//     const ownChains = await main.methods.checkUser(accounts[0]).call();
//     return { chains };
//   }
//   isRegistered = async (e) => {
//     try {
//       const accounts = await web3.eth.getAccounts();
//       const status = await main.methods.isRegistered(accounts[0]).call();
//       const role = await main.methods.checkUser(accounts[0]).call();
//       console.log(role);
//     } catch (err) {
//       console.log(err);
//     }
//     return status[0];
//   };
//   renderChains() {
//     const items = this.props.chains.map((address) => {
//       return {
//         header: address,
//         description: (
//           <Link route={`/products/${address}`}>
//             <a> View Product</a>
//           </Link>
//         ),
//         fluid: true, //css to stretch
//       };
//     });
//     return <Card.Group items={items} />;
//   }
//   render() {
//     return (
//       <Layout>
//         <div>
//           <h3>All Products</h3>
//           <Link route="/products/new">
//             <a>
//               <Button
//                 floated="right"
//                 content="Add Product"
//                 icon="add circle"
//                 primary={true}
//               />
//             </a>
//           </Link>
//         </div>
//         <div>{this.renderChains()}</div>
//       </Layout>
//     );
//   }
// }


_s(ChainIndex, "tJKtEhuE9YBzlhV7SzQcoITKI1c=");

_c = ChainIndex;
/* harmony default export */ __webpack_exports__["default"] = (ChainIndex);

var _c;

$RefreshReg$(_c, "ChainIndex");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkNoYWluSW5kZXgiLCJ1c2VTdGF0ZSIsImNoYWlucyIsInNldENoYWlucyIsInJvbGUiLCJzZXRSb2xlIiwiaXNSZWdpc3RlcmVkIiwiZSIsIndlYjMiLCJhY2NvdW50cyIsIm1haW4iLCJjYWxsIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInJlbmRlckNoYWlucyIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUNiQyxNQURhO0FBQUEsTUFDTEMsU0FESzs7QUFBQSxtQkFFSUYsK0NBQVEsQ0FBQyxFQUFELENBRlo7QUFBQSxNQUViRyxJQUZhO0FBQUEsTUFFUEMsT0FGTzs7QUFJcEIsTUFBTUMsWUFBWTtBQUFBLHFXQUFHLGlCQUFPQyxDQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU1DLG1FQUFBLEVBRk47O0FBQUE7QUFFWEMsc0JBRlc7QUFBQTtBQUFBLHFCQUdJQyx3RUFBQSxDQUEwQkQsUUFBUSxDQUFDLENBQUQsQ0FBbEMsRUFBdUNFLElBQXZDLEVBSEo7O0FBQUE7QUFHWEMsb0JBSFc7QUFBQTtBQUFBLHFCQUlFRixxRUFBQSxDQUF1QkQsUUFBUSxDQUFDLENBQUQsQ0FBL0IsRUFBb0NFLElBQXBDLEVBSkY7O0FBQUE7QUFJWFAsbUJBSlc7QUFLakJDLHFCQUFPLENBQUNELEtBQUQsQ0FBUDtBQUxpQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9qQlMscUJBQU8sQ0FBQ0MsR0FB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QUFrSVQsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmU1YWY0MTYyNjQyZGNlMDRhYWI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1haW4gZnJvbSBcIi4uL2V0aGVyZXVtL21haW5cIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0LmpzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcbmZ1bmN0aW9uIENoYWluSW5kZXgoKSB7XHJcbiAgY29uc3QgW2NoYWlucywgc2V0Q2hhaW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaXNSZWdpc3RlcmVkID0gYXN5bmMgKGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgbWFpbi5tZXRob2RzLmlzUmVnaXN0ZXJlZChhY2NvdW50c1swXSkuY2FsbCgpO1xyXG4gICAgICBjb25zdCByb2xlID0gYXdhaXQgbWFpbi5tZXRob2RzLmNoZWNrVXNlcihhY2NvdW50c1swXSkuY2FsbCgpO1xyXG4gICAgICBzZXRSb2xlKHJvbGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyQ2hhaW5zKCkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBjaGFpbnMubWFwKChhZGRyZXNzKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICA8TGluayByb3V0ZT17YC9wcm9kdWN0cy8ke2FkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgIDxhPiBWaWV3IFByb2R1Y3Q8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBmbHVpZDogdHJ1ZSwgLy9jc3MgdG8gc3RyZXRjaFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNoYWlucyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgY2hhaW5zID0gYXdhaXQgbWFpbi5tZXRob2RzLmdldERlcGxveWVkQ2hhaW5zKCkuY2FsbCgpO1xyXG4gICAgICBzZXRDaGFpbnMoY2hhaW5zKTtcclxuICAgIH07XHJcbiAgICBjaGFpbnMoKTtcclxuICAgIGlzUmVnaXN0ZXJlZCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPkFsbCBQcm9kdWN0czwvaDM+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIHtyb2xlID09IFwiYnV5ZXJcIiAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGluayByb3V0ZT1cIi9wcm9kdWN0cy9uZXdcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIkFkZCBQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgaWNvbj1cImFkZCBjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvcHJvZHVjdHMvbXlQcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PVwiWW91ciBQcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtyZW5kZXJDaGFpbnMoKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGNsYXNzIENoYWluSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbi8vICAgICBjb25zdCBjaGFpbnMgPSBhd2FpdCBtYWluLm1ldGhvZHMuZ2V0RGVwbG95ZWRDaGFpbnMoKS5jYWxsKCk7XHJcbi8vICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbi8vICAgICBjb25zdCBvd25DaGFpbnMgPSBhd2FpdCBtYWluLm1ldGhvZHMuY2hlY2tVc2VyKGFjY291bnRzWzBdKS5jYWxsKCk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHsgY2hhaW5zIH07XHJcbi8vICAgfVxyXG4vLyAgIGlzUmVnaXN0ZXJlZCA9IGFzeW5jIChlKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbi8vICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IG1haW4ubWV0aG9kcy5pc1JlZ2lzdGVyZWQoYWNjb3VudHNbMF0pLmNhbGwoKTtcclxuLy8gICAgICAgY29uc3Qgcm9sZSA9IGF3YWl0IG1haW4ubWV0aG9kcy5jaGVja1VzZXIoYWNjb3VudHNbMF0pLmNhbGwoKTtcclxuLy8gICAgICAgY29uc29sZS5sb2cocm9sZSk7XHJcbi8vICAgICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gc3RhdHVzWzBdO1xyXG4vLyAgIH07XHJcbi8vICAgcmVuZGVyQ2hhaW5zKCkge1xyXG4vLyAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNoYWlucy5tYXAoKGFkZHJlc3MpID0+IHtcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246IChcclxuLy8gICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL3Byb2R1Y3RzLyR7YWRkcmVzc31gfT5cclxuLy8gICAgICAgICAgICAgPGE+IFZpZXcgUHJvZHVjdDwvYT5cclxuLy8gICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICApLFxyXG4vLyAgICAgICAgIGZsdWlkOiB0cnVlLCAvL2NzcyB0byBzdHJldGNoXHJcbi8vICAgICAgIH07XHJcbi8vICAgICB9KTtcclxuLy8gICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmVuZGVyKCkge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPExheW91dD5cclxuLy8gICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgPGgzPkFsbCBQcm9kdWN0czwvaDM+XHJcblxyXG4vLyAgICAgICAgICAgPExpbmsgcm91dGU9XCIvcHJvZHVjdHMvbmV3XCI+XHJcbi8vICAgICAgICAgICAgIDxhPlxyXG4vLyAgICAgICAgICAgICAgIDxCdXR0b25cclxuLy8gICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbi8vICAgICAgICAgICAgICAgICBjb250ZW50PVwiQWRkIFByb2R1Y3RcIlxyXG4vLyAgICAgICAgICAgICAgICAgaWNvbj1cImFkZCBjaXJjbGVcIlxyXG4vLyAgICAgICAgICAgICAgICAgcHJpbWFyeT17dHJ1ZX1cclxuLy8gICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdj57dGhpcy5yZW5kZXJDaGFpbnMoKX08L2Rpdj5cclxuLy8gICAgICAgPC9MYXlvdXQ+XHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5leHBvcnQgZGVmYXVsdCBDaGFpbkluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9