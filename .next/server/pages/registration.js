(function() {
var exports = {};
exports.id = "pages/registration";
exports.ids = ["pages/registration"];
exports.modules = {

/***/ "./pages/registration.js":
/*!*******************************!*\
  !*** ./pages/registration.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/main */ "./ethereum/main.js");
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\pages\\registration.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function Auth() {
  const {
    0: account,
    1: setAccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""); //   const { MainContract, account, initialized, isRegistered } = useCallContext();

  const {
    0: role,
    1: setRole
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const handleRoleChange = e => {
    setRole(e.target.value);
  };

  const registerUser = async e => {
    event.preventDefault();

    try {
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__.default.eth.getAccounts();
      await _ethereum_main__WEBPACK_IMPORTED_MODULE_3__.default.methods.createUser(role).send({
        from: accounts[0]
      });
      setAccount(accounts[0]);
      console.log("success");
      _routes__WEBPACK_IMPORTED_MODULE_2__.Router.pushRoute('/');
    } catch (err) {
      console.log(err);
    }
  };

  const isRegistered = async e => {
    try {
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__.default.eth.getAccounts();
      const status = await _ethereum_main__WEBPACK_IMPORTED_MODULE_3__.default.methods.isRegistered(accounts[0]).call();
      const role = await _ethereum_main__WEBPACK_IMPORTED_MODULE_3__.default.methods.checkUser(accounts[0]).call();

      if (status[0] && role == "buyer") {
        _routes__WEBPACK_IMPORTED_MODULE_2__.Router.pushRoute('/');
      } else if (status[0] && role == "seller") {
        _routes__WEBPACK_IMPORTED_MODULE_2__.Router.pushRoute('/products/new');
      }
    } catch (err) {
      console.log(err);
    }

    return status[0];
  };

  const userRole = async e => {
    const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__.default.eth.getAccounts();
    const status = await _ethereum_main__WEBPACK_IMPORTED_MODULE_3__.default.methods.checkUser(accounts[0]).call();

    if (status == "buyer") {
      _routes__WEBPACK_IMPORTED_MODULE_2__.Router.pushRoute('/');
    } else if (status == "seller") {
      _routes__WEBPACK_IMPORTED_MODULE_2__.Router.pushRoute('/products/new');
    }
  };

  return __jsx("div", {
    className: "authDiv",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "authCardHolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "authCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("font", {
    size: "3",
    className: "agoraTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "Registration Page"))), __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("form", {
    onSubmit: registerUser,
    style: {
      margin: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "form-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "Role"), __jsx("input", {
    className: "form-control",
    placeholder: "Are you a buyer or seller?",
    onChange: handleRoleChange,
    value: role,
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }), __jsx("button", {
    onClick: userRole,
    className: "authButtons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, "Give role"), isRegistered() && __jsx("button", {
    onClick: registerUser,
    className: "authButtons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "SIGN UP")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Auth);

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
var __webpack_exports__ = __webpack_require__.X(0, ["ethereum_main_js-routes_js"], function() { return __webpack_exec__("./pages/registration.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFpbjIvLi9wYWdlcy9yZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vY2hhaW4yL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJBdXRoIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJ1c2VTdGF0ZSIsInJvbGUiLCJzZXRSb2xlIiwiaGFuZGxlUm9sZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlZ2lzdGVyVXNlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhY2NvdW50cyIsIndlYjMiLCJtYWluIiwic2VuZCIsImZyb20iLCJjb25zb2xlIiwibG9nIiwiUm91dGVyIiwiZXJyIiwiaXNSZWdpc3RlcmVkIiwic3RhdHVzIiwiY2FsbCIsInVzZXJSb2xlIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZCxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENBQUMsRUFBRCxDQUF0QyxDQURjLENBRWhCOztBQUVFLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDOztBQUVBLFFBQU1HLGdCQUFnQixHQUFJQyxDQUFELElBQU87QUFDOUJGLFdBQU8sQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsWUFBWSxHQUFHLE1BQU9ILENBQVAsSUFBYTtBQUNoQ0ksU0FBSyxDQUFDQyxjQUFOOztBQUVJLFFBQUc7QUFDQyxZQUFNQyxRQUFRLEdBQUUsTUFBTUMsbUVBQUEsRUFBdEI7QUFDQSxZ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QUE7QUFBQSxJQUZGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFrQkU7QUFBUSxXQUFPLEVBQUVxQixRQUFqQjtBQUEyQixhQUFTLEVBQUMsYUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkYsRUFxQklILFlBQVksTUFFWjtBQUFRLFdBQU8sRUFBRVosWUFBakI7QUFBK0IsYUFBUyxFQUFDLGFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkosQ0FERixFQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUJGLENBUEYsQ0FERixDQUZGLENBREY7QUE4Q0Q7O0FBRUQsK0RBQWVWLElBQWYsRTs7Ozs7Ozs7Ozs7QUM5R0EseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvcmVnaXN0cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBtYWluIGZyb20gJy4uL2V0aGVyZXVtL21haW4nO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEF1dGgoKSB7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbi8vICAgY29uc3QgeyBNYWluQ29udHJhY3QsIGFjY291bnQsIGluaXRpYWxpemVkLCBpc1JlZ2lzdGVyZWQgfSA9IHVzZUNhbGxDb250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSb2xlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFJvbGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHM9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IG1haW4ubWV0aG9kcy5jcmVhdGVVc2VyKHJvbGUpLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTphY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuY29uc3QgaXNSZWdpc3RlcmVkID0gYXN5bmMgKGUpPT57XHJcbiAgdHJ5e1xyXG4gICAgY29uc3QgYWNjb3VudHM9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBtYWluLm1ldGhvZHMuaXNSZWdpc3RlcmVkKGFjY291bnRzWzBdKS5jYWxsKCk7XHJcbiAgICBjb25zdCByb2xlID0gYXdhaXQgbWFpbi5tZXRob2RzLmNoZWNrVXNlcihhY2NvdW50c1swXSkuY2FsbCgpO1xyXG4gICAgaWYoc3RhdHVzWzBdICYmIHJvbGU9PVwiYnV5ZXJcIil7XHJcbiAgICAgIFJvdXRlci5wdXNoUm91dGUoJy8nKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc3RhdHVzWzBdICYmIHJvbGU9PVwic2VsbGVyXCIpe1xyXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvcHJvZHVjdHMvbmV3Jyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaChlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbiAgICBcclxuICAgIHJldHVybiBzdGF0dXNbMF07XHJcbn1cclxuXHJcbmNvbnN0IHVzZXJSb2xlID0gYXN5bmMgKGUpPT57XHJcbiAgICBjb25zdCBhY2NvdW50cz0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IG1haW4ubWV0aG9kcy5jaGVja1VzZXIoYWNjb3VudHNbMF0pLmNhbGwoKTtcclxuICAgIGlmKHN0YXR1cz09XCJidXllclwiKXtcclxuICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzdGF0dXM9PVwic2VsbGVyXCIpe1xyXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvcHJvZHVjdHMvbmV3Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aERpdlwiPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoQ2FyZEhvbGRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aENhcmRcIj5cclxuICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgIDxmb250IHNpemU9XCIzXCIgY2xhc3NOYW1lPVwiYWdvcmFUaXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxiPlJlZ2lzdHJhdGlvbiBQYWdlPC9iPlxyXG4gICAgICAgICAgICA8L2ZvbnQ+XHJcbiAgICAgICAgICA8L2NlbnRlcj5cclxuXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cmVnaXN0ZXJVc2VyfSBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+Um9sZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFyZSB5b3UgYSBidXllciBvciBzZWxsZXI/XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSb2xlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JvbGV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPldhbGxldCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudH1cclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3VzZXJSb2xlfSBjbGFzc05hbWU9XCJhdXRoQnV0dG9uc1wiPkdpdmUgcm9sZTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc1JlZ2lzdGVyZWQoKVxyXG4gICAgICAgICAgICAgICAgJiZcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVnaXN0ZXJVc2VyfSBjbGFzc05hbWU9XCJhdXRoQnV0dG9uc1wiPlNJR04gVVA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9