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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CoNX");


/***/ }),

/***/ "CoNX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./component/layouts/Dashboard/Main.js
var Main = __webpack_require__("s94b");

// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__("2Hsl");
var external_react_loader_spinner_default = /*#__PURE__*/__webpack_require__.n(external_react_loader_spinner_);

// CONCATENATED MODULE: ./component/views/product/modalView.js

var __jsx = external_react_default.a.createElement;


class modalView_ProductModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberTarget: '',
      productTarget: '',
      listProduct: null,
      typeProduct: {
        provaider_id: null
      },
      title: () => {
        if (this.props.type === 'pulsa') {
          return 'Pulsa';
        } else if (this.props.type === 'data') {
          return "Paket Data";
        } else if (this.props.type === 'vdata') {
          return "Voucher Data";
        }
      },
      loading: false,
      buttonVis: false
    };
  }

  apiPpob(provaider) {
    const currentUrl = window.location.href;
    const uriSegment = currentUrl.split('/');
    const host = uriSegment[2];
    this.setLoading(true);
    const apiUrl = `http://${host}/api/product/pulsa`;
    fetch(apiUrl, {
      method: 'get',
      headers: {
        "Authorization": `Bearer ${this.props.token}`
      }
    }).then(res => res.json()).then(res => {
      this.setState({
        listProduct: res.data
      });
      this.setLoading(false);
      this.setState({
        typeProduct: {
          provaider_id: provaider
        }
      });
    });
  }

  orderHandler() {
    const {
      productTarget,
      numberTarget
    } = this.state;

    if (numberTarget || productTarget) {
      this.setState({
        buttonVis: true
      });
      this.apiPpobReqOrder(numberTarget, productTarget);
    } else {
      alert('Oops!, nomor atau produk kelupaan :)');
    }
  }

  apiPpobReqOrder(number, product) {
    const currentUrl = window.location.href;
    const uriSegment = currentUrl.split('/');
    const host = uriSegment[2];
    this.setLoading(true);
    const apiUrl = `http://${host}/api/product/pulsa/request?action=order&service=${product}&target=${number}`;
    fetch(apiUrl, {
      method: 'post',
      headers: {
        "Authorization": `Bearer ${this.props.token}`
      }
    }).then(res => res.json()).then(res => {
      this.setLoading(false);
      this.setState({
        buttonVis: false
      });

      if (res.result == false) {
        alert(res.data);
      } else if (res.status === false) {
        alert(res.msg);
      } else {
        alert('Produk berhasil dibeli laman akan segera dialihkan dalam 3 detik');
        setTimeout(() => {
          location.replace('/dashboard/home');
        }, 3000);
      }
    });
  }

  setLoading(val) {
    this.setState({
      loading: val
    });
  }

  onChangeNumber(number) {
    const three = ['0895', '0896', '0897', '0898', '0899'];
    const smart = ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'];
    const axis = ['0838', '0831', '0832', '0833'];
    const tsel = ['0811', '0812', '0813', '0821', '0822', '0852', '0853', '0823'];
    const xl = ['0817', '0818', '0819', '0859', '0877', '0878'];
    const isat = ['0814', '0815', '0816', '0855', '0856', '0857', '0858'];
    const byU = ['0851'];
    const frontNumb = number.target.value.slice(0, 4);
    this.setState({
      numberTarget: number.target.value
    });

    if (three.includes(frontNumb)) {
      this.apiPpob(3);
    } else if (smart.includes(frontNumb)) {
      this.apiPpob(5);
    } else if (xl.includes(frontNumb)) {
      this.apiPpob(6);
    } else if (tsel.includes(frontNumb)) {
      this.apiPpob(1);
    } else if (isat.includes(frontNumb)) {
      this.apiPpob(2);
    } else if (axis.includes(frontNumb)) {
      this.apiPpob(4);
    } else if (byU.includes(frontNumb)) {
      this.apiPpob(7);
    }
  }

  onChangeSelect(e) {
    this.setState({
      productTarget: e.target.value
    });
  }

  toRpID(value) {
    var reverse = value.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
  }

  render() {
    return __jsx("div", {
      className: "modal fade",
      id: "productModal",
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
    }, this.state.title()), __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7"))), __jsx("div", {
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
      value: this.state.numberTarget,
      className: "form-control",
      onChange: e => {
        this.onChangeNumber(e);
      },
      placeholder: "No Tujuan",
      type: "number",
      required: true
    }))), __jsx("div", {
      className: "form-group"
    }, __jsx("div", {
      className: "input-group input-group-merge input-group-alternative"
    }, __jsx("div", {
      className: "input-group-prepend"
    }, __jsx("span", {
      className: "input-group-text"
    }, __jsx("i", {
      className: "ni ni-email-83"
    }))), __jsx("select", {
      value: this.state.productTarget,
      onChange: e => {
        this.onChangeSelect(e);
      },
      className: "form-control"
    }, this.state.listProduct ? __jsx(external_react_default.a.Fragment, null, __jsx("option", {
      value: ""
    }, "Pilih Product"), this.state.listProduct.map(data => {
      if (data.provaider_id == this.state.typeProduct.provaider_id && data.type == this.props.type) {
        return __jsx("option", {
          value: data.product_code
        }, data.product_name);
      }
    })) : __jsx("option", null, "Service unrecognized"))))), __jsx("div", {
      className: "text-center"
    }, this.state.productTarget ? this.state.listProduct.map(data => {
      if (this.state.productTarget == data.product_code) {
        return __jsx("div", null, __jsx("h5", null, data.note), __jsx("h5", null, "Harga: ", this.toRpID(data.price)));
      }
    }) : null), __jsx("div", {
      className: "modal-footer"
    }, __jsx("button", {
      type: "button",
      className: "btn btn-secondary",
      "data-dismiss": "modal"
    }, "Tutup"), __jsx("button", {
      type: "button",
      onClick: () => {
        this.orderHandler();
      },
      className: "btn btn-primary",
      disabled: this.state.buttonVis
    }, "Beli")))), this.state.loading ? __jsx("div", {
      className: "fixed-bottom d-flex justify-content-center"
    }, __jsx(external_react_loader_spinner_default.a, {
      type: "ThreeDots",
      color: "#ffff00",
      height: 70,
      width: 70
    })) : null);
  }

}

/* harmony default export */ var modalView = (modalView_ProductModal);
// EXTERNAL MODULE: ./component/moduleStyle/chat-box.module.css
var chat_box_module = __webpack_require__("JFIS");
var chat_box_module_default = /*#__PURE__*/__webpack_require__.n(chat_box_module);

// CONCATENATED MODULE: ./component/views/dashboard/homeView.js

var homeView_jsx = external_react_default.a.createElement;






class homeView_HomeView extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      userDataLogin: null,
      typeViewModal: null
    };
  }

  componentDidMount() {
    this.userDataApi();
  }

  userDataApi() {
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
        userDataLogin: res.data
      });
    });
  }

  toRpID(value) {
    var reverse = value.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
  }

  ProductModalView(typeProduct) {
    this.setState({
      typeViewModal: typeProduct
    });
  }

  render() {
    return homeView_jsx("div", null, homeView_jsx(Main["a" /* default */], {
      token: this.props.token
    }, homeView_jsx("div", {
      className: "col-lg-6 col-md-6 col-sm-6"
    }, homeView_jsx("div", {
      className: "card card-stats"
    }, homeView_jsx("div", {
      className: "card-header card-header-warning card-header-icon"
    }, homeView_jsx("div", {
      className: "card-icon"
    }, homeView_jsx("i", {
      className: "material-icons"
    }, "apps")), homeView_jsx("p", {
      className: "card-category"
    }, "Hello, ", this.state.userDataLogin ? this.state.userDataLogin.name : null)), homeView_jsx("div", {
      className: "card-footer"
    }, homeView_jsx("div", {
      className: "stats"
    }, homeView_jsx("i", {
      className: "material-icons text-danger"
    }, "warning"), homeView_jsx("a", {
      href: "#"
    }, "###"))))), homeView_jsx("div", {
      className: "col-lg-6 col-md-6 col-sm-6"
    }, homeView_jsx("div", {
      className: "card card-stats"
    }, homeView_jsx("div", {
      className: "card-header card-header-success card-header-icon"
    }, homeView_jsx("div", {
      className: "card-icon"
    }, homeView_jsx("i", {
      className: "material-icons"
    }, "store")), homeView_jsx("p", {
      className: "card-category"
    }, "Saldo anda"), homeView_jsx("h3", {
      className: "card-title"
    }, "Rp ", this.state.userDataLogin ? this.toRpID(this.state.userDataLogin.saldo) : null)), homeView_jsx("div", {
      className: "card-footer"
    }, homeView_jsx("div", {
      className: "stats"
    }, homeView_jsx("i", {
      className: "material-icons"
    }, "date_range"), "###")))), homeView_jsx("div", {
      className: "col-sm-6"
    }, homeView_jsx("div", {
      className: "card text-center"
    }, homeView_jsx("p", null, "Produk"), homeView_jsx("div", {
      className: "card-body"
    }, homeView_jsx("table", {
      className: "table"
    }, homeView_jsx("tbody", null, homeView_jsx("tr", {
      className: "text-center",
      style: {
        fontSize: '14px'
      }
    }, homeView_jsx("th", null, homeView_jsx("a", null, homeView_jsx("i", {
      className: "material-icons text-danger",
      onClick: () => {
        this.ProductModalView('pulsa');
      },
      "data-toggle": "modal",
      "data-target": "#productModal",
      style: {
        fontSize: '2rem'
      }
    }, "perm_phone_msg"), homeView_jsx("p", null, "Pulsa"))), homeView_jsx("th", null, homeView_jsx("a", null, homeView_jsx("i", {
      className: "material-icons text-danger",
      onClick: () => {
        this.ProductModalView('data');
      },
      "data-toggle": "modal",
      "data-target": "#productModal",
      style: {
        fontSize: '2rem'
      }
    }, "important_devices"), homeView_jsx("p", null, "Paket Data"))), homeView_jsx("th", null, homeView_jsx("a", null, homeView_jsx("i", {
      className: "material-icons text-danger",
      style: {
        fontSize: '2rem'
      }
    }, "offline_bolt"), homeView_jsx("p", null, "PLN"))), homeView_jsx("th", null, homeView_jsx("a", null, homeView_jsx("i", {
      className: "material-icons text-danger",
      style: {
        fontSize: '2rem'
      }
    }, "facebook"), homeView_jsx("p", null, "Social Media")))), homeView_jsx("tr", null, homeView_jsx("th", null, homeView_jsx("a", null, homeView_jsx("i", {
      className: "material-icons text-danger",
      onClick: () => {
        this.ProductModalView('vdata');
      },
      "data-toggle": "modal",
      "data-target": "#productModal",
      style: {
        fontSize: '2rem'
      }
    }, "language"), homeView_jsx("p", null, "Voucher Data"))))))))), homeView_jsx("div", {
      className: "col-sm-6"
    }, homeView_jsx("div", {
      className: "card"
    }, homeView_jsx("div", {
      className: "card-body"
    }, homeView_jsx("h4", {
      className: "card-title"
    }, "Public Live Chat"), homeView_jsx("div", {
      className: `${chat_box_module_default.a.chatBox}`
    }, homeView_jsx("div", {
      className: `${chat_box_module_default.a.inputBox}`
    }, homeView_jsx("div", {
      className: "input-group mb-3"
    }, homeView_jsx("div", {
      className: "input-group-append"
    }, homeView_jsx("input", {
      type: "text",
      className: `form-control ${chat_box_module_default.a.chatInput}`,
      placeholder: "Message"
    }), homeView_jsx("button", {
      type: "button",
      className: "btn btn-info btn-round"
    }, "Send")))))))), homeView_jsx("div", {
      className: "modal",
      tabindex: "-1",
      role: "dialog"
    }, homeView_jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, homeView_jsx("div", {
      className: "modal-content"
    }, homeView_jsx("div", {
      className: "modal-header"
    }, homeView_jsx("h5", {
      className: "modal-title"
    }, "Modal title"), homeView_jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, homeView_jsx("span", {
      "aria-hidden": "true"
    }, "\xD7"))), homeView_jsx("div", {
      className: "modal-body"
    }, homeView_jsx("p", null, "Modal body text goes here.")), homeView_jsx("div", {
      className: "modal-footer"
    }, homeView_jsx("button", {
      type: "button",
      className: "btn btn-primary"
    }, "Save changes"), homeView_jsx("button", {
      type: "button",
      className: "btn btn-secondary",
      "data-dismiss": "modal"
    }, "Close"))))), homeView_jsx(modalView, {
      type: this.state.typeViewModal,
      token: this.props.token
    })));
  }

}

/* harmony default export */ var homeView = (homeView_HomeView);
// EXTERNAL MODULE: ./component/layouts/Dashboard/DashboardHead.js
var DashboardHead = __webpack_require__("cEDK");

// EXTERNAL MODULE: ./component/layouts/Dashboard/DashboardBody.js
var DashboardBody = __webpack_require__("zD7C");

// CONCATENATED MODULE: ./pages/dashboard/home.js

var home_jsx = external_react_default.a.createElement;





class home_Dashboard extends external_react_["Component"] {
  static async getInitialProps({
    query
  }) {
    return {
      query: query
    };
  }

  render() {
    return home_jsx("div", null, home_jsx(DashboardHead["a" /* default */], {
      title: "Dashboard Home"
    }), home_jsx(DashboardBody["a" /* default */], null, home_jsx(homeView, {
      token: this.props.query.token
    })));
  }

}

/* harmony default export */ var home = __webpack_exports__["default"] = (home_Dashboard);

/***/ }),

/***/ "JFIS":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"chatBox": "chat-box_chatBox__2f8tO",
	"chatInput": "chat-box_chatInput__1ogbL",
	"inputBox": "chat-box_inputBox__3Saru"
};


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