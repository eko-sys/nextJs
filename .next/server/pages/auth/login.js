module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("891V");


/***/ }),

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "891V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./component/layouts/ArgonMainHeader.js

var __jsx = external_react_default.a.createElement;


const ArgonMainHeader = props => {
  return __jsx(head_default.a, null, __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), __jsx("meta", {
    name: "description",
    content: "Start your development with a Dashboard for Bootstrap 4."
  }), __jsx("meta", {
    name: "author",
    content: "Creative Tim"
  }), __jsx("title", null, props.title), __jsx("meta", {
    name: "keywords",
    content: "s"
  }), __jsx("meta", {
    name: "description",
    content: "Start your development with a Dashboard for Bootstrap 4."
  }), __jsx("meta", {
    itemProp: "name",
    content: "Argon - Premium Dashboard for Bootstrap 4 by Creative Tim"
  }), __jsx("meta", {
    itemProp: "description",
    content: "Start your development with a Dashboard for Bootstrap 4."
  }), __jsx("meta", {
    itemProp: "image",
    content: "/s3.amazonaws.com/creativetim_bucket/products/137/original/opt_adp_thumbnail.jpg"
  }), __jsx("meta", {
    property: "fb:app_id",
    content: "655968634437471"
  }), __jsx("meta", {
    property: "og:title",
    content: "Argon - Premium Dashboard for Bootstrap 4 by Creative Tim"
  }), __jsx("meta", {
    property: "og:type",
    content: "article"
  }), __jsx("meta", {
    property: "og:url",
    content: "https://demos.creative-tim.com/argon-dashboard/index.html"
  }), __jsx("meta", {
    property: "og:image",
    content: "/s3.amazonaws.com/creativetim_bucket/products/137/original/opt_adp_thumbnail.jpg"
  }), __jsx("meta", {
    property: "og:description",
    content: "Start your development with a Dashboard for Bootstrap 4."
  }), __jsx("meta", {
    property: "og:site_name",
    content: "Creative Tim"
  }), __jsx("link", {
    rel: "icon",
    href: "/assets/img/brand/favicon.pnsg",
    type: "image/png"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/assets/vendor/nucleo/css/nucleo.css",
    type: "text/css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/assets/vendor/%40fortawesome/fontawesome-free/css/all.min.css",
    type: "text/css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/assets/css/argon.min9f1e.css?v=1.1.0",
    type: "text/css"
  }));
};

/* harmony default export */ var layouts_ArgonMainHeader = (ArgonMainHeader);
// CONCATENATED MODULE: ./component/layouts/ArgonMainBody.js

var ArgonMainBody_jsx = external_react_default.a.createElement;

const ArgonMainBody = props => {
  return ArgonMainBody_jsx("div", {
    className: props.bgClassName
  }, props.children, ArgonMainBody_jsx("script", {
    src: "/assets/vendor/jquery/dist/jquery.min.js"
  }), ArgonMainBody_jsx("script", {
    src: "/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"
  }), ArgonMainBody_jsx("script", {
    src: "/assets/vendor/js-cookie/js.cookie.js"
  }), ArgonMainBody_jsx("script", {
    src: "/assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"
  }), ArgonMainBody_jsx("script", {
    src: "/assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"
  }), ArgonMainBody_jsx("script", {
    src: "/assets/vendor/anchor-js/anchor.min.js"
  }), ArgonMainBody_jsx("script", {
    src: "/assets/vendor/clipboard/dist/clipboard.min.js"
  }), ArgonMainBody_jsx("script", {
    src: "/assets/vendor/holderjs/holder.min.js"
  }), ArgonMainBody_jsx("script", {
    src: "/assets/vendor/prismjs/prism.js"
  }), "\\", ArgonMainBody_jsx("script", {
    src: "/assets/js/argon.min9f1e.js"
  }), ArgonMainBody_jsx("script", {
    src: "/assets/js/demo.min.js"
  }));
};

/* harmony default export */ var layouts_ArgonMainBody = (ArgonMainBody);
// EXTERNAL MODULE: ./component/views/auth/registerModalView.js
var registerModalView = __webpack_require__("Q6Mq");

// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__("2Hsl");
var external_react_loader_spinner_default = /*#__PURE__*/__webpack_require__.n(external_react_loader_spinner_);

// CONCATENATED MODULE: ./component/views/auth/loginView.js

var loginView_jsx = external_react_default.a.createElement;





class loginView_LoginView extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      load: {
        isLoading: false
      },
      errForm: {
        err: false,
        msg: null
      }
    };
  }

  onChangeHandler(to, e) {
    this.setState({
      [to]: e.target.value
    });
  }

  setLoading(val) {
    this.setState({
      load: {
        isLoading: val
      }
    });
  }

  errFormHandler() {
    let {
      email,
      password
    } = this.state;
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email && !password) {
      this.setState({
        errForm: {
          msg: 'Email dan password tidak boleh kosong!',
          err: true
        }
      });
    } else if (!email) {
      this.setState({
        errForm: {
          msg: 'Email tidak boleh kosong!',
          err: true
        }
      });
    } else if (!password) {
      this.setState({
        errForm: {
          msg: 'Password tidak boleh kosong!',
          err: true
        }
      });
    } else {
      this.handleLogin();
    }
  }

  onSubmit() {
    this.errFormHandler();
  }

  handleLogin() {
    this.setLoading(true);
    let {
      email,
      password
    } = this.state;
    const currentUrl = window.location.href;
    const uriSegment = currentUrl.split('/');
    const host = uriSegment[2];
    const url = `http://${host}/api/auth/login?email=${email}&password=${password}`;
    fetch(url, {
      method: 'post'
    }).then(res => res.json()).then(res => {
      this.setLoading(false);

      if (res.status === true) {
        location.replace('/dashboard/home');
      } else {
        this.setState({
          errForm: {
            msg: 'Email atau password anda salah!',
            err: true
          }
        });
      }
    });
  }

  render() {
    return loginView_jsx("div", null, loginView_jsx(layouts_ArgonMainHeader, {
      title: "Login Account",
      logoIconSite: "/assets/img/brand/favicon"
    }), loginView_jsx(layouts_ArgonMainBody, {
      bgClassName: "bg-default"
    }, loginView_jsx("nav", {
      id: "navbar-main",
      className: "navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light"
    }, loginView_jsx("div", {
      className: "container"
    }, loginView_jsx("a", {
      className: "navbar-brand",
      href: "#"
    }), loginView_jsx("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbar-collapse",
      "aria-controls": "navbar-collapse",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, loginView_jsx("span", {
      className: "navbar-toggler-icon"
    })), loginView_jsx("div", {
      className: "navbar-collapse navbar-custom-collapse collapse",
      id: "navbar-collapse"
    }, loginView_jsx("div", {
      className: "navbar-collapse-header"
    }, loginView_jsx("div", {
      className: "row"
    }, loginView_jsx("div", {
      className: "col-6 collapse-brand"
    }, loginView_jsx("a", {
      href: "/"
    }, loginView_jsx("p", null, "DigiNet Pedia"))), loginView_jsx("div", {
      className: "col-6 collapse-close"
    }, loginView_jsx("button", {
      type: "button",
      className: "navbar-toggler",
      "data-toggle": "collapse",
      "data-target": "#navbar-collapse",
      "aria-controls": "navbar-collapse",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, loginView_jsx("span", null), loginView_jsx("span", null))))), loginView_jsx("ul", {
      className: "navbar-nav mr-auto"
    }, loginView_jsx("li", {
      className: "nav-item"
    }, loginView_jsx("a", {
      href: "#",
      className: "nav-link"
    }, loginView_jsx("span", {
      className: "nav-link-inner--text"
    }, "Dashboard"))), loginView_jsx("li", {
      className: "nav-item"
    }, loginView_jsx("a", {
      href: "#",
      className: "nav-link"
    }, loginView_jsx("span", {
      className: "nav-link-inner--text"
    }, "Login"))), loginView_jsx("li", {
      className: "nav-item"
    }, loginView_jsx("a", {
      href: "#",
      "data-toggle": "modal",
      "data-target": "#registerModal",
      className: "nav-link"
    }, loginView_jsx("span", {
      className: "nav-link-inner--text"
    }, "Daftar")))), loginView_jsx("hr", {
      className: "d-lg-none"
    }), loginView_jsx("ul", {
      className: "navbar-nav align-items-lg-center ml-lg-auto"
    }, loginView_jsx("li", {
      className: "nav-item"
    }, loginView_jsx("a", {
      className: "nav-link nav-link-icon",
      href: "#",
      target: "_blank",
      "data-toggle": "tooltip",
      "data-original-title": "Like us on Facebook"
    }, loginView_jsx("i", {
      className: "fab fa-facebook-square"
    }), loginView_jsx("span", {
      className: "nav-link-inner--text d-lg-none"
    }, "Facebook"))), loginView_jsx("li", {
      className: "nav-item"
    }, loginView_jsx("a", {
      className: "nav-link nav-link-icon",
      href: "#",
      target: "_blank",
      "data-toggle": "tooltip",
      "data-original-title": "Follow us on Instagram"
    }, loginView_jsx("i", {
      className: "fab fa-instagram"
    }), loginView_jsx("span", {
      className: "nav-link-inner--text d-lg-none"
    }, "Instagram"))), loginView_jsx("li", {
      className: "nav-item"
    }, loginView_jsx("a", {
      className: "nav-link nav-link-icon",
      href: "#",
      target: "_blank",
      "data-toggle": "tooltip",
      "data-original-title": "Follow us on Twitter"
    }, loginView_jsx("i", {
      className: "fab fa-twitter-square"
    }), loginView_jsx("span", {
      className: "nav-link-inner--text d-lg-none"
    }, "Twitter"))), loginView_jsx("li", {
      className: "nav-item"
    }, loginView_jsx("a", {
      className: "nav-link nav-link-icon",
      href: "#",
      target: "_blank",
      "data-toggle": "tooltip",
      "data-original-title": "Star us on Github"
    }, loginView_jsx("i", {
      className: "fab fa-github"
    }), loginView_jsx("span", {
      className: "nav-link-inner--text d-lg-none"
    }, "Github"))))))), loginView_jsx("div", {
      className: "main-content"
    }, loginView_jsx("div", {
      className: "header bg-gradient-primary py-7 py-lg-8 pt-lg-9"
    }, loginView_jsx("div", {
      className: "container"
    }, loginView_jsx("div", {
      className: "header-body text-center mb-7"
    }, loginView_jsx("div", {
      className: "row justify-content-center"
    }, loginView_jsx("div", {
      className: "col-xl-5 col-lg-6 col-md-8 px-5"
    }, loginView_jsx("h1", {
      className: "text-white"
    }, "Selamat Datang!"), loginView_jsx("p", {
      className: "text-lead text-white"
    }, "Silahkan login untuk memulai!"))))), loginView_jsx("div", {
      className: "separator separator-bottom separator-skew zindex-100"
    }, loginView_jsx("svg", {
      x: "0",
      y: "0",
      viewBox: "0 0 2560 100",
      preserveAspectRatio: "none",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, loginView_jsx("polygon", {
      className: "fill-default",
      points: "2560 0 2560 100 0 100"
    })))), loginView_jsx("div", {
      className: "container mt--8 pb-5"
    }, loginView_jsx("div", {
      className: "row justify-content-center"
    }, loginView_jsx("div", {
      className: "col-lg-5 col-md-7"
    }, loginView_jsx("div", {
      className: "card bg-secondary border-0 mb-0"
    }, loginView_jsx("div", {
      className: "card-header bg-transparent pb-5"
    }, loginView_jsx("div", {
      className: "text-muted text-center mt-2 mb-3"
    }, loginView_jsx("small", null, "Login dengan")), loginView_jsx("div", {
      className: "btn-wrapper text-center"
    }, loginView_jsx("a", {
      href: "#",
      className: "btn btn-neutral btn-icon"
    }, loginView_jsx("span", {
      className: "btn-inner--icon"
    }, loginView_jsx("img", {
      src: "/assets/img/icons/common/github.svg"
    })), loginView_jsx("span", {
      className: "btn-inner--text"
    }, "Github")), loginView_jsx("a", {
      href: "#",
      className: "btn btn-neutral btn-icon"
    }, loginView_jsx("span", {
      className: "btn-inner--icon"
    }, loginView_jsx("img", {
      src: "/assets/img/icons/common/google.svg"
    })), loginView_jsx("span", {
      className: "btn-inner--text"
    }, "Google")))), loginView_jsx("div", {
      className: "card-body px-lg-5 py-lg-5 mb-80"
    }, loginView_jsx("div", {
      className: "fixed-bottom d-flex justify-content-center"
    }, this.state.load.isLoading === true ? loginView_jsx(external_react_loader_spinner_default.a, {
      type: "ThreeDots",
      color: "#00BFFF",
      height: 70,
      width: 70
    }) : null), loginView_jsx("div", {
      className: "text-center text-muted mb-4"
    }, loginView_jsx("small", null, "Or sign in with credentials")), this.state.errForm.err === true ? loginView_jsx("div", {
      className: "alert alert-warning alert-dismissible fade show",
      role: "alert"
    }, loginView_jsx("span", {
      className: "alert-icon"
    }), loginView_jsx("span", {
      className: "alert-text"
    }, loginView_jsx("strong", null, "Peringatan! "), this.state.errForm.msg), loginView_jsx("button", {
      onClick: () => {
        this.setState({
          errForm: {
            err: false
          }
        });
      },
      type: "button",
      className: "close",
      "data-dismiss": "alert",
      "aria-label": "Close"
    }, loginView_jsx("span", {
      "aria-hidden": "true"
    }, "\xD7"))) : null, loginView_jsx("div", null, loginView_jsx("div", {
      className: "form-group mb-3"
    }, loginView_jsx("div", {
      className: "input-group input-group-merge input-group-alternative"
    }, loginView_jsx("div", {
      className: "input-group-prepend"
    }, loginView_jsx("span", {
      className: "input-group-text"
    }, loginView_jsx("i", {
      className: "ni ni-email-83"
    }))), loginView_jsx("input", {
      name: "email",
      value: this.state.email,
      onChange: e => {
        this.onChangeHandler('email', e);
      },
      className: "form-control",
      placeholder: "Email",
      type: "email",
      required: true
    }))), loginView_jsx("div", {
      className: "form-group"
    }, loginView_jsx("div", {
      className: "input-group input-group-merge input-group-alternative"
    }, loginView_jsx("div", {
      className: "input-group-prepend"
    }, loginView_jsx("span", {
      className: "input-group-text"
    }, loginView_jsx("i", {
      className: "ni ni-lock-circle-open"
    }))), loginView_jsx("input", {
      name: "password",
      value: this.state.password,
      onChange: e => {
        this.onChangeHandler('password', e);
      },
      className: "form-control",
      placeholder: "Password",
      type: "password",
      required: true
    }))), loginView_jsx("div", {
      className: "custom-control custom-control-alternative custom-checkbox"
    }, loginView_jsx("input", {
      className: "custom-control-input",
      id: " customCheckLogin",
      type: "checkbox"
    }), loginView_jsx("label", {
      className: "custom-control-label",
      htmlFor: " customCheckLogin"
    }, loginView_jsx("span", {
      className: "text-muted"
    }, "Remember me"))), loginView_jsx("div", {
      className: "text-center"
    }, loginView_jsx("button", {
      type: "submit",
      onClick: () => {
        this.onSubmit();
      },
      className: "btn btn-primary my-4"
    }, "Sign in"))))), loginView_jsx("div", {
      className: "row mt-3"
    }, loginView_jsx("div", {
      className: "col-6"
    }, loginView_jsx("a", {
      href: "#",
      className: "text-light"
    }, loginView_jsx("small", null, "Lupa Password?"))), loginView_jsx("div", {
      className: "col-6 text-right"
    }, loginView_jsx("a", {
      href: "#",
      className: "text-light",
      "data-toggle": "modal",
      "data-target": "#registerModal"
    }, loginView_jsx("small", null, "Buat akun baru")))))))), loginView_jsx("footer", {
      className: "py-5",
      id: "footer-main"
    }, loginView_jsx("div", {
      className: "container"
    }, loginView_jsx("div", {
      className: "row align-items-center justify-content-xl-between"
    }, loginView_jsx("div", {
      className: "col-xl-6"
    }, loginView_jsx("div", {
      className: "copyright text-center text-xl-left text-muted"
    }, "\xA9 2019 - ", new Date().getFullYear(), " ", loginView_jsx("a", {
      href: "#",
      className: "font-weight-bold ml-1",
      target: "_blank"
    }, "DigiNet Team"))), loginView_jsx("div", {
      className: "col-xl-6"
    }, loginView_jsx("ul", {
      className: "nav nav-footer justify-content-center justify-content-xl-end"
    }, loginView_jsx("li", {
      className: "nav-item"
    }, loginView_jsx("a", {
      href: "#",
      className: "nav-link",
      target: "_blank"
    }, "DigiNet Pedia")), loginView_jsx("li", {
      className: "nav-item"
    }, loginView_jsx("a", {
      href: "#",
      className: "nav-link",
      target: "_blank"
    }, "About Us")), loginView_jsx("li", {
      className: "nav-item"
    }, loginView_jsx("a", {
      href: "#",
      className: "nav-link",
      target: "_blank"
    }, "Blog")), loginView_jsx("li", {
      className: "nav-item"
    }, loginView_jsx("a", {
      href: "#",
      className: "nav-link",
      target: "_blank"
    }, "License"))))))), loginView_jsx(registerModalView["a" /* default */], null)));
  }

}

/* harmony default export */ var loginView = (loginView_LoginView);
// CONCATENATED MODULE: ./pages/auth/login.js

var login_jsx = external_react_default.a.createElement;


class login_Login extends external_react_default.a.Component {
  static async getInitialProps({
    query
  }) {
    return {
      query: query
    };
  }

  render() {
    return login_jsx("div", null, login_jsx(loginView, {
      query: this.props.query
    }));
  }

}

/* harmony default export */ var login = __webpack_exports__["default"] = (login_Login);

/***/ }),

/***/ "Q6Mq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Hsl");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class RegisterModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      passConfirm: '',
      load: {
        isLoading: false
      },
      errForm: {
        err: false,
        msg: null
      }
    };
  }

  setLoading(val) {
    this.setState({
      load: {
        isLoading: val
      }
    });
  }

  onHandleChange(to, e) {
    this.setState({
      [to]: e.target.value
    });
  }

  errFormHandler() {
    const {
      email,
      pass,
      passConfirm
    } = this.state;
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email && !pass) {
      this.setState({
        errForm: {
          msg: 'Email dan password dibutuhkan!',
          err: true
        }
      });
    } else if (!email) {
      this.setState({
        errForm: {
          msg: 'Email dibutuhkan!',
          err: true
        }
      });
    } else if (regEmail.test(email) === false) {
      this.setState({
        errForm: {
          msg: 'Email tidak valid!',
          err: true
        }
      });
    } else if (!pass) {
      this.setState({
        errForm: {
          msg: 'Password dibutuhkan!',
          err: true
        }
      });
    } else if (pass != passConfirm) {
      this.setState({
        errForm: {
          msg: 'Password konfirmasi harus sama dengan password!',
          err: true
        }
      });
    }
  }

  onSubmit() {
    this.errFormHandler();
  }

  render() {
    return __jsx("div", {
      className: "modal fade",
      id: "registerModal",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }, __jsx("div", {
      className: "modal-dialog modal-dialog-centered",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("div", {
      className: "modal-header"
    }, __jsx("h5", {
      className: "modal-title",
      id: "exampleModalLabel"
    }, "Buat akun baru!"), __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7")), this.state.errForm.err === true ? __jsx("div", {
      className: "alert alert-warning alert-dismissible fade show  fixed-top",
      role: "alert"
    }, __jsx("span", {
      className: "alert-text"
    }, __jsx("strong", null, "Peringatan! "), this.state.errForm.msg), __jsx("button", {
      onClick: () => {
        this.setState({
          errForm: {
            err: false
          }
        });
      },
      type: "button",
      className: "close",
      "data-dismiss": "alert",
      "aria-label": "Close"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7"))) : null), __jsx("div", {
      className: "modal-body"
    }, __jsx("div", {
      className: "form-group mb-3"
    }, __jsx("div", {
      className: "input-group input-group-merge input-group-alternative"
    }, __jsx("div", {
      className: "input-group-prepend"
    }, __jsx("span", {
      className: "input-group-text"
    }, __jsx("i", {
      className: "ni ni-email-83"
    }))), __jsx("input", {
      name: "email",
      value: this.state.email,
      onChange: e => {
        this.onHandleChange('email', e);
      },
      className: "form-control",
      placeholder: "Email",
      type: "email",
      required: true
    })), __jsx("div", {
      className: "form-group"
    }), __jsx("div", {
      className: "input-group input-group-merge input-group-alternative"
    }, __jsx("div", {
      className: "input-group-prepend"
    }, __jsx("span", {
      className: "input-group-text"
    }, __jsx("i", {
      className: "ni ni-lock-circle-open"
    }))), __jsx("input", {
      value: this.state.pass,
      name: "password",
      onChange: e => {
        this.onHandleChange('pass', e);
      },
      className: "form-control",
      placeholder: "Password",
      type: "password",
      required: true
    })), __jsx("div", {
      className: "form-group"
    }), __jsx("div", {
      className: "input-group input-group-merge input-group-alternative"
    }, __jsx("div", {
      className: "input-group-prepend"
    }, __jsx("span", {
      className: "input-group-text"
    }, __jsx("i", {
      className: "ni ni-lock-circle-open"
    }))), __jsx("input", {
      name: "password-confirm",
      value: this.state.passConfirm,
      onChange: e => {
        this.onHandleChange('passConfirm', e);
      },
      className: "form-control",
      placeholder: "Konfirmasi Password",
      type: "password",
      required: true
    })))), __jsx("div", {
      className: "modal-footer"
    }, __jsx("button", {
      type: "button",
      className: "btn btn-secondary",
      "data-dismiss": "modal"
    }, "Tutup"), __jsx("button", {
      type: "button",
      onClick: () => {
        this.onSubmit();
      },
      className: "btn btn-primary"
    }, "Buat Akun")))), __jsx("div", {
      className: "fixed-bottom d-flex justify-content-center"
    }, this.state.load.isLoading === true ? __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "ThreeDots",
      color: "#00BFFF",
      height: 70,
      width: 70
    }) : null));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (RegisterModal);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });