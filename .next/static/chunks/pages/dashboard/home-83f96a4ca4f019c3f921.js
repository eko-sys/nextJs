_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{CoNX:function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),o=a.n(n),r=a("HaE+"),i=a("1OyB"),s=a("vuIU"),c=a("Ji7U"),l=a("md7G"),u=a("foSv"),d=a("q1tI"),p=a.n(d),m=a("s94b"),h=a("jkUL"),f=a.n(h),v=p.a.createElement;function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(l.a)(this,a)}}var g=function(t){Object(c.a)(a,t);var e=b(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={numberTarget:"",productTarget:"",listProduct:null,typeProduct:{provaider_id:null},title:function(){return"pulsa"===n.props.type?"Pulsa":"data"===n.props.type?"Paket Data":"vdata"===n.props.type?"Voucher Data":void 0},loading:!1,buttonVis:!1},n}return Object(s.a)(a,[{key:"apiPpob",value:function(t){var e=this,a=window.location.href.split("/")[2];this.setLoading(!0);var n="http://".concat(a,"/api/product/pulsa");fetch(n,{method:"get",headers:{Authorization:"Bearer ".concat(this.props.token)}}).then((function(t){return t.json()})).then((function(a){e.setState({listProduct:a.data}),e.setLoading(!1),e.setState({typeProduct:{provaider_id:t}})}))}},{key:"orderHandler",value:function(){var t=this.state,e=t.productTarget,a=t.numberTarget;a||e?(this.setState({buttonVis:!0}),this.apiPpobReqOrder(a,e)):alert("Oops!, nomor atau produk kelupaan :)")}},{key:"apiPpobReqOrder",value:function(t,e){var a=this,n=window.location.href.split("/")[2];this.setLoading(!0);var o="http://".concat(n,"/api/product/pulsa/request?action=order&service=").concat(e,"&target=").concat(t);fetch(o,{method:"post",headers:{Authorization:"Bearer ".concat(this.props.token)}}).then((function(t){return t.json()})).then((function(t){a.setLoading(!1),a.setState({buttonVis:!1}),0==t.result?alert(t.data):!1===t.status?alert(t.msg):(alert("Produk berhasil dibeli laman akan segera dialihkan dalam 3 detik"),setTimeout((function(){location.replace("/dashboard/home")}),3e3))}))}},{key:"setLoading",value:function(t){this.setState({loading:t})}},{key:"onChangeNumber",value:function(t){var e=t.target.value.slice(0,4);this.setState({numberTarget:t.target.value}),["0895","0896","0897","0898","0899"].includes(e)?this.apiPpob(3):["0881","0882","0883","0884","0885","0886","0887","0888","0889"].includes(e)?this.apiPpob(5):["0817","0818","0819","0859","0877","0878"].includes(e)?this.apiPpob(6):["0811","0812","0813","0821","0822","0852","0853","0823"].includes(e)?this.apiPpob(1):["0814","0815","0816","0855","0856","0857","0858"].includes(e)?this.apiPpob(2):["0838","0831","0832","0833"].includes(e)?this.apiPpob(4):["0851"].includes(e)&&this.apiPpob(7)}},{key:"onChangeSelect",value:function(t){this.setState({productTarget:t.target.value})}},{key:"toRpID",value:function(t){var e=t.toString().split("").reverse().join("").match(/\d{1,3}/g);return e=e.join(".").split("").reverse().join("")}},{key:"render",value:function(){var t=this;return v("div",{className:"modal fade",id:"productModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},v("div",{className:"modal-dialog modal-dialog-centered",role:"document"},v("div",{className:"modal-content"},v("div",{className:"modal-header"},v("h5",{className:"modal-title",id:"exampleModalLabel"},this.state.title()),v("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},v("span",{"aria-hidden":"true"},"\xd7"))),v("div",{className:"modal-body"},v("div",{className:"form-group mb-3"},v("div",{className:"input-group input-group-merge input-group-alternative"},v("div",{className:"input-group-prepend"},v("span",{className:"input-group-text"},v("i",{className:"ni ni-email-83"}))),v("input",{value:this.state.numberTarget,className:"form-control",onChange:function(e){t.onChangeNumber(e)},placeholder:"No Tujuan",type:"number",required:!0}))),v("div",{className:"form-group"},v("div",{className:"input-group input-group-merge input-group-alternative"},v("div",{className:"input-group-prepend"},v("span",{className:"input-group-text"},v("i",{className:"ni ni-email-83"}))),v("select",{value:this.state.productTarget,onChange:function(e){t.onChangeSelect(e)},className:"form-control"},this.state.listProduct?v(p.a.Fragment,null,v("option",{value:""},"Pilih Product"),this.state.listProduct.map((function(e){if(e.provaider_id==t.state.typeProduct.provaider_id&&e.type==t.props.type)return v("option",{value:e.product_code},e.product_name)}))):v("option",null,"Service unrecognized"))))),v("div",{className:"text-center"},this.state.productTarget?this.state.listProduct.map((function(e){if(t.state.productTarget==e.product_code)return v("div",null,v("h5",null,e.note),v("h5",null,"Harga: ",t.toRpID(e.price)))})):null),v("div",{className:"modal-footer"},v("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Tutup"),v("button",{type:"button",onClick:function(){t.orderHandler()},className:"btn btn-primary",disabled:this.state.buttonVis},"Beli")))),this.state.loading?v("div",{className:"fixed-bottom d-flex justify-content-center"},v(f.a,{type:"ThreeDots",color:"#ffff00",height:70,width:70})):null)}}]),a}(p.a.Component),y=a("JFIS"),N=a.n(y),k=p.a.createElement;function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(l.a)(this,a)}}var x=function(t){Object(c.a)(a,t);var e=P(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={userDataLogin:null,typeViewModal:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.userDataApi()}},{key:"userDataApi",value:function(){var t=this,e=window.location.href.split("/")[2],a="http://".concat(e,"/api/user/info?type=detail");fetch(a,{method:"get",headers:{Authorization:"Bearer ".concat(this.props.token)}}).then((function(t){return t.json()})).then((function(e){t.setState({userDataLogin:e.data})}))}},{key:"toRpID",value:function(t){var e=t.toString().split("").reverse().join("").match(/\d{1,3}/g);return e=e.join(".").split("").reverse().join("")}},{key:"ProductModalView",value:function(t){this.setState({typeViewModal:t})}},{key:"render",value:function(){var t=this;return k("div",null,k(m.a,{token:this.props.token},k("div",{className:"col-lg-6 col-md-6 col-sm-6"},k("div",{className:"card card-stats"},k("div",{className:"card-header card-header-warning card-header-icon"},k("div",{className:"card-icon"},k("i",{className:"material-icons"},"apps")),k("p",{className:"card-category"},"Hello, ",this.state.userDataLogin?this.state.userDataLogin.name:null)),k("div",{className:"card-footer"},k("div",{className:"stats"},k("i",{className:"material-icons text-danger"},"warning"),k("a",{href:"#"},"###"))))),k("div",{className:"col-lg-6 col-md-6 col-sm-6"},k("div",{className:"card card-stats"},k("div",{className:"card-header card-header-success card-header-icon"},k("div",{className:"card-icon"},k("i",{className:"material-icons"},"store")),k("p",{className:"card-category"},"Saldo anda"),k("h3",{className:"card-title"},"Rp ",this.state.userDataLogin?this.toRpID(this.state.userDataLogin.saldo):null)),k("div",{className:"card-footer"},k("div",{className:"stats"},k("i",{className:"material-icons"},"date_range"),"###")))),k("div",{className:"col-sm-6"},k("div",{className:"card text-center"},k("p",null,"Produk"),k("div",{className:"card-body"},k("table",{className:"table"},k("tbody",null,k("tr",{className:"text-center",style:{fontSize:"14px"}},k("th",null,k("a",null,k("i",{className:"material-icons text-danger",onClick:function(){t.ProductModalView("pulsa")},"data-toggle":"modal","data-target":"#productModal",style:{fontSize:"2rem"}},"perm_phone_msg"),k("p",null,"Pulsa"))),k("th",null,k("a",null,k("i",{className:"material-icons text-danger",onClick:function(){t.ProductModalView("data")},"data-toggle":"modal","data-target":"#productModal",style:{fontSize:"2rem"}},"important_devices"),k("p",null,"Paket Data"))),k("th",null,k("a",null,k("i",{className:"material-icons text-danger",style:{fontSize:"2rem"}},"offline_bolt"),k("p",null,"PLN"))),k("th",null,k("a",null,k("i",{className:"material-icons text-danger",style:{fontSize:"2rem"}},"facebook"),k("p",null,"Social Media")))),k("tr",null,k("th",null,k("a",null,k("i",{className:"material-icons text-danger",onClick:function(){t.ProductModalView("vdata")},"data-toggle":"modal","data-target":"#productModal",style:{fontSize:"2rem"}},"language"),k("p",null,"Voucher Data"))))))))),k("div",{className:"col-sm-6"},k("div",{className:"card"},k("div",{className:"card-body"},k("h4",{className:"card-title"},"Public Live Chat"),k("div",{className:"".concat(N.a.chatBox)},k("div",{className:"".concat(N.a.inputBox)},k("div",{className:"input-group mb-3"},k("div",{className:"input-group-append"},k("input",{type:"text",className:"form-control ".concat(N.a.chatInput),placeholder:"Message"}),k("button",{type:"button",className:"btn btn-info btn-round"},"Send")))))))),k("div",{className:"modal",tabindex:"-1",role:"dialog"},k("div",{className:"modal-dialog",role:"document"},k("div",{className:"modal-content"},k("div",{className:"modal-header"},k("h5",{className:"modal-title"},"Modal title"),k("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},k("span",{"aria-hidden":"true"},"\xd7"))),k("div",{className:"modal-body"},k("p",null,"Modal body text goes here.")),k("div",{className:"modal-footer"},k("button",{type:"button",className:"btn btn-primary"},"Save changes"),k("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))),k(g,{type:this.state.typeViewModal,token:this.props.token})))}}]),a}(d.Component),_=a("cEDK"),j=a("zD7C"),S=p.a.createElement;function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(l.a)(this,a)}}var D=function(t){Object(c.a)(a,t);var e=w(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return S("div",null,S(_.a,{title:"Dashboard Home"}),S(j.a,null,S(x,{token:this.props.query.token})))}}],[{key:"getInitialProps",value:function(){var t=Object(r.a)(o.a.mark((function t(e){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.query,t.abrupt("return",{query:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),a}(d.Component);e.default=D},JFIS:function(t,e,a){t.exports={chatBox:"chat-box_chatBox__2f8tO",chatInput:"chat-box_chatInput__1ogbL",inputBox:"chat-box_inputBox__3Saru"}},Ky4x:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/home",function(){return a("CoNX")}])}},[["Ky4x",0,2,1,5,3]]]);