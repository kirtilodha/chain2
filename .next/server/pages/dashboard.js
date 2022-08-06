(function() {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethereum_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ethereum/main */ "./ethereum/main.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\pages\\dashboard.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








function ChainIndex() {
  const {
    0: chains,
    1: setChains
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: role,
    1: setRole
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const isRegistered = async e => {
    try {
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__.default.eth.getAccounts();
      const status = await _ethereum_main__WEBPACK_IMPORTED_MODULE_1__.default.methods.isRegistered(accounts[0]).call();
      const role = await _ethereum_main__WEBPACK_IMPORTED_MODULE_1__.default.methods.checkUser(accounts[0]).call();
      setRole(role);
    } catch (err) {
      console.log(err);
    }
  };

  function renderChains() {
    const items = chains.map(address => {
      return {
        header: address,
        description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {
          route: `/products/${address}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 11
          }
        }, __jsx("a", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
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
        lineNumber: 35,
        columnNumber: 12
      }
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const chains = async () => {
      const chains = await _ethereum_main__WEBPACK_IMPORTED_MODULE_1__.default.methods.getDeployedChains().call();
      setChains(chains);
    };

    chains();
    isRegistered();
  }, []);
  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_4__.default, {
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
  }), role == "buyer" && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {
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
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
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
  }))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {
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
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
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


/* harmony default export */ __webpack_exports__["default"] = (ChainIndex);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["ethereum_main_js-routes_js","components_Layout_js"], function() { return __webpack_exec__("./pages/dashboard.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFpbjIvLi9wYWdlcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vY2hhaW4yL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2hhaW4yL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbIkNoYWluSW5kZXgiLCJjaGFpbnMiLCJzZXRDaGFpbnMiLCJ1c2VTdGF0ZSIsInJvbGUiLCJzZXRSb2xlIiwiaXNSZWdpc3RlcmVkIiwiZSIsImFjY291bnRzIiwid2ViMyIsInN0YXR1cyIsIm1haW4iLCJjYWxsIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlbmRlckNoYWlucyIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxVQUFULEdBQXNCO0FBQ3BCLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7O0FBRUEsUUFBTUcsWUFBWSxHQUFHLE1BQU9DLENBQVAsSUFBYTtBQUNoQyxRQUFJO0FBQ0YsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLG1FQUFBLEVBQXZCO0FBQ0EsWUFBTUMsTUFBTSxHQUFHLE1BQU1DLHdFQUFBLENBQTBCSCxRQUFRLENBQUMsQ0FBRCxDQUFsQyxF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QTtBQUNBOzs7QUFDQSwrREFBZWhCLFVBQWYsRTs7Ozs7Ozs7Ozs7QUN6SUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtYWluIGZyb20gXCIuLi9ldGhlcmV1bS9tYWluXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC5qc1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xyXG5mdW5jdGlvbiBDaGFpbkluZGV4KCkge1xyXG4gIGNvbnN0IFtjaGFpbnMsIHNldENoYWluc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGlzUmVnaXN0ZXJlZCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IG1haW4ubWV0aG9kcy5pc1JlZ2lzdGVyZWQoYWNjb3VudHNbMF0pLmNhbGwoKTtcclxuICAgICAgY29uc3Qgcm9sZSA9IGF3YWl0IG1haW4ubWV0aG9kcy5jaGVja1VzZXIoYWNjb3VudHNbMF0pLmNhbGwoKTtcclxuICAgICAgc2V0Um9sZShyb2xlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckNoYWlucygpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gY2hhaW5zLm1hcCgoYWRkcmVzcykgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgPExpbmsgcm91dGU9e2AvcHJvZHVjdHMvJHthZGRyZXNzfWB9PlxyXG4gICAgICAgICAgICA8YT4gVmlldyBQcm9kdWN0PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICksXHJcbiAgICAgICAgZmx1aWQ6IHRydWUsIC8vY3NzIHRvIHN0cmV0Y2hcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjaGFpbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNoYWlucyA9IGF3YWl0IG1haW4ubWV0aG9kcy5nZXREZXBsb3llZENoYWlucygpLmNhbGwoKTtcclxuICAgICAgc2V0Q2hhaW5zKGNoYWlucyk7XHJcbiAgICB9O1xyXG4gICAgY2hhaW5zKCk7XHJcbiAgICBpc1JlZ2lzdGVyZWQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5BbGwgUHJvZHVjdHM8L2gzPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICB7cm9sZSA9PSBcImJ1eWVyXCIgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvcHJvZHVjdHMvbmV3XCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJBZGQgUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL3Byb2R1Y3RzL215UHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIllvdXIgUHJvZHVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cmVuZGVyQ2hhaW5zKCl9XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG4vLyBjbGFzcyBDaGFpbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4vLyAgICAgY29uc3QgY2hhaW5zID0gYXdhaXQgbWFpbi5tZXRob2RzLmdldERlcGxveWVkQ2hhaW5zKCkuY2FsbCgpO1xyXG4vLyAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4vLyAgICAgY29uc3Qgb3duQ2hhaW5zID0gYXdhaXQgbWFpbi5tZXRob2RzLmNoZWNrVXNlcihhY2NvdW50c1swXSkuY2FsbCgpO1xyXG5cclxuLy8gICAgIHJldHVybiB7IGNoYWlucyB9O1xyXG4vLyAgIH1cclxuLy8gICBpc1JlZ2lzdGVyZWQgPSBhc3luYyAoZSkgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4vLyAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBtYWluLm1ldGhvZHMuaXNSZWdpc3RlcmVkKGFjY291bnRzWzBdKS5jYWxsKCk7XHJcbi8vICAgICAgIGNvbnN0IHJvbGUgPSBhd2FpdCBtYWluLm1ldGhvZHMuY2hlY2tVc2VyKGFjY291bnRzWzBdKS5jYWxsKCk7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHJvbGUpO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIHN0YXR1c1swXTtcclxuLy8gICB9O1xyXG4vLyAgIHJlbmRlckNoYWlucygpIHtcclxuLy8gICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5jaGFpbnMubWFwKChhZGRyZXNzKSA9PiB7XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbi8vICAgICAgICAgICA8TGluayByb3V0ZT17YC9wcm9kdWN0cy8ke2FkZHJlc3N9YH0+XHJcbi8vICAgICAgICAgICAgIDxhPiBWaWV3IFByb2R1Y3Q8L2E+XHJcbi8vICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgKSxcclxuLy8gICAgICAgICBmbHVpZDogdHJ1ZSwgLy9jc3MgdG8gc3RyZXRjaFxyXG4vLyAgICAgICB9O1xyXG4vLyAgICAgfSk7XHJcbi8vICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgIDxoMz5BbGwgUHJvZHVjdHM8L2gzPlxyXG5cclxuLy8gICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL3Byb2R1Y3RzL25ld1wiPlxyXG4vLyAgICAgICAgICAgICA8YT5cclxuLy8gICAgICAgICAgICAgICA8QnV0dG9uXHJcbi8vICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgY29udGVudD1cIkFkZCBQcm9kdWN0XCJcclxuLy8gICAgICAgICAgICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcclxuLy8gICAgICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9XHJcbi8vICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXY+e3RoaXMucmVuZGVyQ2hhaW5zKCl9PC9kaXY+XHJcbi8vICAgICAgIDwvTGF5b3V0PlxyXG4vLyAgICAgKTtcclxuLy8gICB9XHJcbi8vIH1cclxuZXhwb3J0IGRlZmF1bHQgQ2hhaW5JbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9