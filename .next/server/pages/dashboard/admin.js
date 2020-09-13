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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4hH8");


/***/ }),

/***/ "4hH8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./component/layouts/Dashboard/Main.js
var Main = __webpack_require__("s94b");

// CONCATENATED MODULE: ./component/views/dashboard/adminView.js

var __jsx = external_react_default.a.createElement;

const {
  Component
} = __webpack_require__("cDcd");



class adminView_AdminView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return __jsx("div", null, __jsx(Main["a" /* default */], {
      token: this.props.token
    }));
  }

}

/* harmony default export */ var adminView = (adminView_AdminView);
// EXTERNAL MODULE: ./component/layouts/Dashboard/DashboardHead.js
var DashboardHead = __webpack_require__("cEDK");

// EXTERNAL MODULE: ./component/layouts/Dashboard/DashboardBody.js
var DashboardBody = __webpack_require__("zD7C");

// CONCATENATED MODULE: ./pages/dashboard/admin.js

var admin_jsx = external_react_default.a.createElement;





class admin_Admin extends external_react_["Component"] {
  static async getInitialProps({
    query
  }) {
    return {
      query: query
    };
  }

  render() {
    return admin_jsx("div", null, admin_jsx(DashboardHead["a" /* default */], {
      title: "Admin"
    }), admin_jsx(DashboardBody["a" /* default */], null, admin_jsx(adminView, {
      token: this.props.query.token
    })));
  }

}

/* harmony default export */ var admin = __webpack_exports__["default"] = (admin_Admin);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cEDK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DashboardHead = props => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, props.title), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
  }), __jsx("link", {
    href: "/mdAssets/css/material-dashboard.css",
    rel: "stylesheet"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (DashboardHead);

/***/ }),

/***/ "s94b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Main extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      home: null,
      history: null,
      userRole: null,
      logout: async () => {
        (await confirm('Continue logout?')) ? location.replace('/logout') : null;
      }
    };
  }

  componentDidMount() {
    this.activeLink();
    const currentUrl = window.location.href;
    const uriSegment = currentUrl.split('/');
    const host = uriSegment[2];
    const url = `http://${host}/api/user/info?type=detail`;
    fetch(url, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${this.props.token}`
      }
    }).then(res => res.json()).then(res => {
      this.setState({
        userRole: res.data.role_id
      });
    });
  }

  activeLink() {
    const currentUrl = window.location.href;
    const uriSegment = currentUrl.split('/');
    const pageActive = uriSegment[4];
    const fillterUrl = pageActive.replace(/[^a-zA-Z0-9-_]/g, '');
    this.setState({
      [fillterUrl]: 'active'
    });
  }

  render() {
    return __jsx("div", null, __jsx("div", {
      className: "wrapper "
    }, __jsx("div", {
      className: "sidebar",
      "data-color": "purple",
      "data-background-color": "white",
      "data-image": "/mdAssets/img/sidebar-1.jpg"
    }, __jsx("div", {
      className: "logo"
    }, __jsx("a", {
      href: "#",
      className: "simple-text logo-normal"
    }, "DigiNet Pedia")), __jsx("div", {
      className: "sidebar-wrapper"
    }, __jsx("ul", {
      className: "nav"
    }, this.state.userRole === 1 ? __jsx("li", {
      className: "nav-item " + this.state.admin
    }, __jsx("a", {
      className: "nav-link",
      href: "/dashboard/admin"
    }, __jsx("i", {
      className: "material-icons"
    }, "admin_panel_settings"), __jsx("p", null, "Admin"))) : null, __jsx("li", {
      className: "nav-item " + this.state.home
    }, __jsx("a", {
      className: "nav-link",
      href: "/dashboard/home"
    }, __jsx("i", {
      className: "material-icons"
    }, "dashboard"), __jsx("p", null, "Dashboard"))), __jsx("li", {
      className: "nav-item " + this.state.history
    }, __jsx("a", {
      className: "nav-link",
      href: "/dashboard/history"
    }, __jsx("i", {
      className: "material-icons"
    }, "print"), __jsx("p", null, "History")))))), __jsx("div", {
      className: "main-panel"
    }, __jsx("nav", {
      className: "navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "navbar-wrapper"
    }, __jsx("a", {
      className: "navbar-brand",
      href: "#"
    }, "Dashboard")), __jsx("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "aria-controls": "navigation-index",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, __jsx("span", {
      className: "sr-only"
    }, "Toggle navigation"), __jsx("span", {
      className: "navbar-toggler-icon icon-bar"
    }), __jsx("span", {
      className: "navbar-toggler-icon icon-bar"
    }), __jsx("span", {
      className: "navbar-toggler-icon icon-bar"
    })), __jsx("div", {
      className: "collapse navbar-collapse justify-content-end"
    }, __jsx("form", {
      className: "navbar-form"
    }, __jsx("div", {
      className: "input-group no-border"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Search..."
    }), __jsx("button", {
      type: "submit",
      className: "btn btn-white btn-round btn-just-icon"
    }, __jsx("i", {
      className: "material-icons"
    }, "search"), __jsx("div", {
      className: "ripple-container"
    })))), __jsx("ul", {
      className: "navbar-nav"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      className: "nav-link",
      href: "#"
    }, __jsx("i", {
      className: "material-icons"
    }, "dashboard"), __jsx("p", {
      className: "d-lg-none d-md-block"
    }, "Stats"))), __jsx("li", {
      className: "nav-item dropdown"
    }, __jsx("a", {
      className: "nav-link",
      href: "#",
      id: "navbarDropdownMenuLink",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }, __jsx("i", {
      className: "material-icons"
    }, "notifications"), __jsx("span", {
      className: "notification"
    }, "5"), __jsx("p", {
      className: "d-lg-none d-md-block"
    }, "Some Actions")), __jsx("div", {
      className: "dropdown-menu dropdown-menu-right",
      "aria-labelledby": "navbarDropdownMenuLink"
    }, __jsx("a", {
      className: "dropdown-item",
      href: "#"
    }, "#"))), __jsx("li", {
      className: "nav-item dropdown"
    }, __jsx("a", {
      className: "nav-link",
      href: "#",
      id: "navbarDropdownProfile",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }, __jsx("i", {
      className: "material-icons"
    }, "person"), __jsx("p", {
      className: "d-lg-none d-md-block"
    }, "Account")), __jsx("div", {
      className: "dropdown-menu dropdown-menu-right",
      "aria-labelledby": "navbarDropdownProfile"
    }, __jsx("a", {
      className: "dropdown-item",
      href: "#"
    }, "Profile"), __jsx("a", {
      className: "dropdown-item",
      href: "#"
    }, "Settings"), __jsx("div", {
      className: "dropdown-divider"
    }), __jsx("a", {
      className: "dropdown-item",
      onClick: () => {
        this.state.logout();
      },
      href: "#"
    }, "Log out"))))))), __jsx("div", {
      className: "content"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "row"
    }, this.props.children))))), __jsx("div", {
      className: "fixed-plugin"
    }, __jsx("div", {
      className: "dropdown show-dropdown"
    }, __jsx("a", {
      href: "#",
      "data-toggle": "dropdown"
    }, __jsx("i", {
      className: "fa fa-cog fa-2x"
    }, " ")), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "header-title"
    }, " Sidebar Filters"), __jsx("li", {
      className: "adjustments-line"
    }, __jsx("a", {
      href: "#",
      className: "switch-trigger active-color"
    }, __jsx("div", {
      className: "badge-colors ml-auto mr-auto"
    }, __jsx("span", {
      className: "badge filter badge-purple",
      "data-color": "purple"
    }), __jsx("span", {
      className: "badge filter badge-azure",
      "data-color": "azure"
    }), __jsx("span", {
      className: "badge filter badge-green",
      "data-color": "green"
    }), __jsx("span", {
      className: "badge filter badge-warning",
      "data-color": "orange"
    }), __jsx("span", {
      className: "badge filter badge-danger",
      "data-color": "danger"
    }), __jsx("span", {
      className: "badge filter badge-rose active",
      "data-color": "rose"
    })), __jsx("div", {
      className: "clearfix"
    }))), __jsx("li", {
      className: "header-title"
    }, "Images"), __jsx("li", {
      className: "active"
    }, __jsx("a", {
      className: "img-holder switch-trigger",
      href: "#"
    }, __jsx("img", {
      src: "/mdAssets/img/sidebar-1.jpg",
      alt: ""
    }))), __jsx("li", null, __jsx("a", {
      className: "img-holder switch-trigger",
      href: "#"
    }, __jsx("img", {
      src: "/mdAssets/img/sidebar-2.jpg",
      alt: ""
    }))), __jsx("li", null, __jsx("a", {
      className: "img-holder switch-trigger",
      href: "#"
    }, __jsx("img", {
      src: "/mdAssets/img/sidebar-3.jpg",
      alt: ""
    }))), __jsx("li", null, __jsx("a", {
      className: "img-holder switch-trigger",
      href: "#"
    }, __jsx("img", {
      src: "/mdAssets/img/sidebar-4.jpg",
      alt: ""
    }))), __jsx("li", {
      className: "header-title"
    }, "DigiNet Pedia"), __jsx("li", {
      className: "button-container text-center"
    }, __jsx("button", {
      id: "twitter",
      className: "btn btn-round btn-twitter"
    }, __jsx("i", {
      className: "fa fa-twitter"
    }), " "), __jsx("button", {
      id: "facebook",
      className: "btn btn-round btn-facebook"
    }, __jsx("i", {
      className: "fa fa-facebook-f"
    }), " "), __jsx("br", null), __jsx("br", null))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zD7C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DashboardBody = props => {
  return __jsx("div", {
    className: props.bgClassName
  }, props.children, __jsx("script", {
    src: "https://code.jquery.com/jquery-3.5.1.js",
    integrity: "sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=",
    crossOrigin: "anonymous"
  }), __jsx("script", {
    src: "/mdAssets/js/core/popper.min.js"
  }), __jsx("script", {
    src: "/mdAssets/js/core/bootstrap-material-design.min.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/perfect-scrollbar.jquery.min.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/moment.min.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/sweetalert2.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/jquery.validate.min.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/jquery.bootstrap-wizard.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/bootstrap-selectpicker.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/bootstrap-datetimepicker.min.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/jquery.dataTables.min.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/bootstrap-tagsinput.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/jasny-bootstrap.min.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/fullcalendar.min.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/jquery-jvectormap.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/nouislider.min.js"
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/arrive.min.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/chartist.min.js"
  }), __jsx("script", {
    src: "/mdAssets/js/plugins/bootstrap-notify.js"
  }), __jsx("script", {
    src: "/mdAssets/js/material-dashboard.js?v=2.1.2",
    type: "text/javascript"
  }), __jsx("script", {
    src: "/mdAssets/js/err/nav.js"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (DashboardBody);

/***/ })

/******/ });