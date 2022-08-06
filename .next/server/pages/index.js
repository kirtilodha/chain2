(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/main */ "./ethereum/main.js");
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\pages\\index.js";

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
      _routes__WEBPACK_IMPORTED_MODULE_2__.Router.pushRoute('/dashboard');
    } catch (err) {
      console.log(err);
    }

    return status[0];
  };

  return __jsx("div", {
    className: "authDiv",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "authCardHolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "authCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("font", {
    size: "3",
    className: "agoraTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "form-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), isRegistered() && __jsx("button", {
    onClick: registerUser,
    className: "authButtons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "SIGN UP")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
var __webpack_exports__ = __webpack_require__.X(0, ["ethereum_main_js-routes_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFpbjIvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2hhaW4yL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbIkF1dGgiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsInVzZVN0YXRlIiwicm9sZSIsInNldFJvbGUiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVnaXN0ZXJVc2VyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFjY291bnRzIiwid2ViMyIsIm1haW4iLCJzZW5kIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJlcnIiLCJpc1JlZ2lzdGVyZWQiLCJzdGF0dXMiLCJjYWxsIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZCxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENBQUMsRUFBRCxDQUF0QyxDQURjLENBRWhCOztBQUVFLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDOztBQUVBLFFBQU1HLGdCQUFnQixHQUFJQyxDQUFELElBQU87QUFDOUJGLFdBQU8sQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsWUFBWSxHQUFHLE1BQU9ILENBQVAsSUFBYTtBQUNoQ0ksU0FBSyxDQUFDQyxjQUFOOztBQUVJLFFBQUc7QUFDQyxZQUFNQyxRQUFRLEdBQUUsTUFBTUMsbUVBQUEsRUFBdEI7QUFDQSxZQUFNQyxzRUFBQSxDQUF3QlgsSUFBeEIsRUFBOEJZLElBQTlCLENBQW1DO0FBQ3JDQyxZQUFJLEVBQUNKLFFBQVEsQ0FBQyxDQUFEO0FBRHdCLE9BQW5DLENBQU47QUFHQVgsZ0JBQVUsQ0FBQ1csUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUFWO0FBQ0FLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUMsMkRBQUEsQ0FBaUIsR0FBakI7QUFFSCxLQVRELENBU0UsT0FBTUMsR0FBTixFQUFVO0FBQ1JILGFBQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaO0FBQ0g7QUFDTixHQWZEOztBQWdCRixRQUFNQyxZQUFZLEdBQUcsTUFBT2YsQ0FBUCxJQUFXO0FBQzlCLFFBQUc7QUFDRCxZQUFNTSxRQUFRLEdBQUUsTUFBTUMsbUVBQUEsRUFBdEI7QUFDQSxZQUFNUyxNQUFNLEdBQUcsTUFBTVIsd0VBQUEsQ0FBMEJGLFFBQVEsQ0FBQyxDQUFELENBQWxDLEVBQXVDVyxJQUF2QyxFQUFyQjtBQUNBLFlBQU1wQixJQUFJLEdBQUcsTUFBTVcscUVBQUEsQ0FBdUJGLFFBQVEsQ0FBQyxDQUFELENBQS9CLEVBQW9DVyxJQUFwQyxFQUFuQjtBQUNBSiwyREFBQSxDQUFpQixZQUFqQjtBQUVELEtBTkQsQ0FNRSxPQUFNQyxHQUFOLEVBQVU7QUFDVkgsYUFBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVo7QUFDRDs7QUFFQyxXQUFPRSxNQUFNLENBQUMsQ0FBRCxDQUFiO0FBQ0gsR0FaRDs7QUFjRSxTQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLGFBQVMsRUFBQyxZQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixDQURGLENBREYsRUFPRSxxRUFDRTtBQUFNLFlBQVEsRUFBRWIsWUFBaEI7QUFBOEIsU0FBSyxFQUFFO0FBQUVlLFlBQU0sRUFBRTtBQUFWLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLGFBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUNFLGFBQVMsRUFBQyxjQURaO0FBRUUsZUFBVyxFQUFDLDRCQUZkO0FBR0UsWUFBUSxFQUFFbkIsZ0JBSFo7QUFJRSxTQUFLLEVBQUVGLElBSlQ7QUFLRSxRQUFJLEVBQUMsTUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFxQklrQixZQUFZLE1BRVo7QUFBUSxXQUFPLEVBQUVaLFlBQWpCO0FBQStCLGFBQVMsRUFBQyxhQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJKLENBREYsRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVCRixDQVBGLENBREYsQ0FGRixDQURGO0FBOENEOztBQUVELCtEQUFlVixJQUFmLEU7Ozs7Ozs7Ozs7O0FDL0ZBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBtYWluIGZyb20gJy4uL2V0aGVyZXVtL21haW4nO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEF1dGgoKSB7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbi8vICAgY29uc3QgeyBNYWluQ29udHJhY3QsIGFjY291bnQsIGluaXRpYWxpemVkLCBpc1JlZ2lzdGVyZWQgfSA9IHVzZUNhbGxDb250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSb2xlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFJvbGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHM9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IG1haW4ubWV0aG9kcy5jcmVhdGVVc2VyKHJvbGUpLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTphY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuY29uc3QgaXNSZWdpc3RlcmVkID0gYXN5bmMgKGUpPT57XHJcbiAgdHJ5e1xyXG4gICAgY29uc3QgYWNjb3VudHM9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBtYWluLm1ldGhvZHMuaXNSZWdpc3RlcmVkKGFjY291bnRzWzBdKS5jYWxsKCk7XHJcbiAgICBjb25zdCByb2xlID0gYXdhaXQgbWFpbi5tZXRob2RzLmNoZWNrVXNlcihhY2NvdW50c1swXSkuY2FsbCgpO1xyXG4gICAgUm91dGVyLnB1c2hSb3V0ZSgnL2Rhc2hib2FyZCcpO1xyXG5cclxuICB9IGNhdGNoKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHN0YXR1c1swXTtcclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoRGl2XCI+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhDYXJkSG9sZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoQ2FyZFwiPlxyXG4gICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgPGZvbnQgc2l6ZT1cIjNcIiBjbGFzc05hbWU9XCJhZ29yYVRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGI+UmVnaXN0cmF0aW9uIFBhZ2U8L2I+XHJcbiAgICAgICAgICAgIDwvZm9udD5cclxuICAgICAgICAgIDwvY2VudGVyPlxyXG5cclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtyZWdpc3RlclVzZXJ9IHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Sb2xlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXJlIHlvdSBhIGJ1eWVyIG9yIHNlbGxlcj9cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJvbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cm9sZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgey8qIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+V2FsbGV0IGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50fVxyXG4gICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8YnIgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3VzZXJSb2xlfSBjbGFzc05hbWU9XCJhdXRoQnV0dG9uc1wiPkdpdmUgcm9sZTwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNSZWdpc3RlcmVkKClcclxuICAgICAgICAgICAgICAgICYmXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlZ2lzdGVyVXNlcn0gY2xhc3NOYW1lPVwiYXV0aEJ1dHRvbnNcIj5TSUdOIFVQPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==