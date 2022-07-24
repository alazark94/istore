"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Client_StoreUpdate_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNav.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNav.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_SideNavList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/SideNavList */ "./resources/js/Components/SideNavList.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SideNav",
  components: {
    SideNavList: _Components_SideNavList__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavList.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavList.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_SideNavListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/SideNavListItem */ "./resources/js/Components/SideNavListItem.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SideNavLists",
  components: {
    SideNavListItem: _Components_SideNavListItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    heading: String,
    links: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavListItem.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavListItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SideNavListItem",
  props: {
    heading: String,
    link: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Client/StoreUpdate.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Client/StoreUpdate.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/AdminLayout */ "./resources/js/Shared/AdminLayout.vue");
/* harmony import */ var _Shared_ClientLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/ClientLayout */ "./resources/js/Shared/ClientLayout.vue");




var __default__ = {
  name: "StoreUpdate",
  layout: _Shared_ClientLayout__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  props: {
    store: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      name: props.store.name,
      phone: props.store.phone,
      address: props.store.address,
      city: props.store.city,
      state: props.store.state,
      country: props.store.country
    });

    var submit = function submit(id) {
      form.put("/stores/".concat(props.store.id), {
        onSuccess: function onSuccess() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            icon: 'success',
            title: 'Success',
            text: 'Store Updated Added',
            footer: '<a href="/dashboard">Go to dashboard</a>'
          });
        }
      });
    };

    var __returned__ = {
      props: props,
      form: form,
      submit: submit,
      AdminLayout: _Shared_AdminLayout__WEBPACK_IMPORTED_MODULE_2__["default"],
      ClientLayout: _Shared_ClientLayout__WEBPACK_IMPORTED_MODULE_3__["default"],
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm,
      Swal: (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default())
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/AdminLayout.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/AdminLayout.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_SideNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/SideNav */ "./resources/js/Components/SideNav.vue");
/* harmony import */ var _Shared_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Nav */ "./resources/js/Shared/Nav.vue");
/* harmony import */ var _Components_SideNavList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/SideNavList */ "./resources/js/Components/SideNavList.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminLayout",
  layout: null,
  components: {
    SideNav: _Components_SideNav__WEBPACK_IMPORTED_MODULE_0__["default"],
    Nav: _Shared_Nav__WEBPACK_IMPORTED_MODULE_1__["default"],
    SideNavList: _Components_SideNavList__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      links: [{
        url: '/dashboard',
        title: 'Dashboard'
      }, {
        url: '/stores',
        title: 'Stores'
      }, {
        url: '/users',
        title: "Users"
      }, {
        url: '/users?admins_only=true',
        title: "Admins"
      }],
      adminLinks: [{
        url: '/profile-update',
        title: 'Profile'
      }],
      storeLinks: [{
        url: "/users/".concat(this.$page.props.auth.user.id, "/stores"),
        title: 'My Stores'
      }]
    };
  },
  mounted: function mounted() {
    console.log(this.$page.props.auth.user);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ClientLayout.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ClientLayout.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_SideNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/SideNav */ "./resources/js/Components/SideNav.vue");
/* harmony import */ var _Shared_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Nav */ "./resources/js/Shared/Nav.vue");
/* harmony import */ var _Components_SideNavList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/SideNavList */ "./resources/js/Components/SideNavList.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminLayout",
  layout: null,
  components: {
    SideNav: _Components_SideNav__WEBPACK_IMPORTED_MODULE_0__["default"],
    Nav: _Shared_Nav__WEBPACK_IMPORTED_MODULE_1__["default"],
    SideNavList: _Components_SideNavList__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      links: [{
        url: "/dashboard",
        title: "Dashboard"
      }, {
        url: "/profile-update",
        title: "Profile"
      }, {
        url: "/users/".concat(this.$page.props.auth.user.id, "/stores"),
        title: "My Stores"
      }]
    };
  },
  mounted: function mounted() {
    console.log(this.$page.props.auth.user);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_NavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/NavLink */ "./resources/js/Shared/NavLink.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Nav",
  components: {
    NavLink: _Shared_NavLink__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NavLink',
  props: {
    active: Boolean
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNav.vue?vue&type=template&id=66f2e05e":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNav.vue?vue&type=template&id=66f2e05e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-gray-900 text-white py-5 pt-5 space-y-10"
};
var _hoisted_2 = {
  "class": "rounded-full bg-white w-1/2 mx-auto border border-gray-400"
};
var _hoisted_3 = {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 512.001 512.001",
  style: {
    "enable-background": "new 0 0 512.001 512.001"
  },
  "xml:space": "preserve"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<path style=\"fill:#6D5B4D;\" d=\"M462.178,357.76c-10.387-41.776-16.322-86.452-16.322-128.708l0,0H256l-85.742,100.44L256,437.282\n\tc62.522,0,125.044-12.222,184.393-36.666C457.267,393.666,466.582,375.47,462.178,357.76z\"></path><path style=\"fill:#827061;\" d=\"M66.144,229.052L66.144,229.052c0,42.256-5.935,86.932-16.322,128.708\n\tc-4.403,17.709,4.912,35.906,21.784,42.856C130.956,425.06,193.479,437.282,256,437.282v-208.23H66.144z\"></path><path style=\"fill:#6F7475;\" d=\"M349.127,407.944c-6.42-7.507-13.728-14.229-21.769-20.001\n\tc-20.094-14.429-44.731-22.929-71.358-22.929s-51.264,8.499-71.359,22.929c-8.039,5.773-15.349,12.494-21.769,20.001\n\tc-17.611,20.595-28.512,47.098-29.311,76.126c11.796,5.702,24.054,10.59,36.696,14.626c3.574,1.14,7.18,2.211,10.814,3.212\n\tc0.478,0.131,0.955,0.26,1.434,0.388c23.432,6.315,48.066,9.705,73.493,9.705c25.427,0,50.061-3.389,73.493-9.705\n\tc0.478-0.129,0.957-0.256,1.434-0.388c3.635-1.001,7.24-2.07,10.814-3.212c6.225-1.987,12.344-4.206,18.373-6.603\n\tc3.68-1.464,7.335-2.978,10.936-4.591c2.48-1.111,4.945-2.251,7.387-3.432C377.64,455.04,366.738,428.539,349.127,407.944z\"></path><path style=\"fill:#7F8383;\" d=\"M182.508,487.168c0-23.66,19.352-43.836,43.012-43.76c3.771,0.012,7.428,0.512,10.909,1.439\n\tc1.29,0.343,2.585,0.652,3.885,0.926c7.762,1.635,15.075-4.243,15.075-12.175l0,0c0-6.227-4.593-11.567-10.774-12.331\n\tc-24.146-2.986-45.383-15.346-59.971-33.323c-8.039,5.773-15.349,12.494-21.769,20.001c-17.611,20.595-28.512,47.098-29.311,76.126\n\tc11.796,5.702,24.054,10.59,36.696,14.626c4.043,1.291,8.126,2.49,12.246,3.601c0.001-0.001,0.001-0.001,0.002-0.002v-14.794\n\tV487.168z\"></path><path style=\"fill:#6F7475;\" d=\"M162.874,407.944c-17.611,20.595-28.512,47.098-29.311,76.126\n\tc11.796,5.702,24.054,10.59,36.696,14.626c3.574,1.14,7.18,2.211,10.814,3.212c0.478,0.131,0.955,0.26,1.434,0.388v-20.919\n\tC182.508,454.629,175.359,429.55,162.874,407.944z\"></path><path style=\"fill:#5F6568;\" d=\"M349.127,407.944c-3.397,5.878-6.393,12.017-8.962,18.373c-6.876,17.006-10.671,35.589-10.671,55.061\n\tv20.917c0.478-0.129,0.957-0.256,1.434-0.388c3.635-1.001,7.24-2.07,10.814-3.212c6.225-1.987,12.344-4.206,18.373-6.603\n\tc3.68-1.464,7.335-2.978,10.936-4.591c2.48-1.111,4.945-2.251,7.387-3.432C377.64,455.04,366.738,428.539,349.127,407.944z\"></path><path style=\"fill:#CE9276;\" d=\"M445.857,175.158c-8.988,0-17.464,2.166-24.961,5.98C403.426,115.06,352.874,54.986,289.83,38.664\n\tL115.365,362.147c1.143,0.741,2.292,1.477,3.476,2.179l0,0c84.201,49.914,190.12,49.914,274.321,0l0,0\n\tc29.732-17.625,46.501-47.666,48.018-79.14c1.543,0.13,3.1,0.212,4.678,0.212c30.442,0,55.12-24.678,55.12-55.12\n\tS476.299,175.158,445.857,175.158z\"></path><path style=\"fill:#DFB296;\" d=\"M382.722,219.334c-3.999-9.929-6.507-20.398-7.538-31.052\n\tc-5.625-58.089-38.548-116.146-85.352-149.618c-8.426-2.182-17.072-3.591-25.896-4.119c-2.631-0.157-5.274-0.249-7.935-0.249\n\tc-78.337,0-144.402,69.289-164.902,146.839c-7.495-3.814-15.97-5.977-24.954-5.977c-30.442,0-55.12,24.678-55.12,55.12\n\ts24.678,55.12,55.12,55.12c1.58,0,3.139-0.082,4.685-0.212c1.463,30.214,16.983,59.107,44.534,76.962\n\tc74.142,25.927,157.505,18.493,226.352-22.319l0,0C384.5,314.464,400.47,263.391,382.722,219.334z\"></path><circle style=\"fill:#CE9276;\" cx=\"66.144\" cy=\"230.277\" r=\"18.373\"></circle><circle style=\"fill:#BD7155;\" cx=\"445.857\" cy=\"230.277\" r=\"18.373\"></circle><path style=\"fill:#CE9276;\" d=\"M410.79,170.099c-8.773-9.583-22.791-12.692-34.561-7.19c-0.082,0.038-0.163,0.077-0.245,0.115\n\tc-37.415,17.805-77.548,26.832-119.285,26.832c-41.937,0-82.242-9.109-119.796-27.074c-0.085-0.04-0.169-0.081-0.254-0.12\n\tc-12.12-5.692-26.573-2.509-35.556,7.42l-9.996,11.048c14.964,7.618,25.988,21.862,29.196,38.874\n\tc0.015-0.007,0.029-0.013,0.043-0.021c2.84-1.333,6.085-1.448,8.983-0.245c40.351,16.755,83.117,25.236,127.379,25.236\n\tc45.774,0,89.959-9.075,131.535-26.996c1.104,0.737,2.279,1.372,3.488,1.946c3.226-16.973,14.237-31.183,29.172-38.79\n\tL410.79,170.099z M135.2,202.376L135.2,202.376L135.2,202.376L135.2,202.376z\"></path><g><path style=\"fill:#474641;\" d=\"M335.618,211.904h-36.746c-5.073,0-9.187,4.113-9.187,9.187c0,5.073,4.113,9.187,9.187,9.187\n\t\tc0,10.147,8.226,18.373,18.373,18.373s18.373-8.226,18.373-18.373c5.073,0,9.187-4.113,9.187-9.187\n\t\tC344.804,216.017,340.691,211.904,335.618,211.904z\"></path><path style=\"fill:#474641;\" d=\"M213.13,211.904h-36.746c-5.073,0-9.187,4.113-9.187,9.187c0,5.073,4.113,9.187,9.187,9.187\n\t\tc0,10.147,8.226,18.373,18.373,18.373c10.147,0,18.373-8.226,18.373-18.373c5.073,0,9.187-4.113,9.187-9.187\n\t\tC222.316,216.017,218.203,211.904,213.13,211.904z\"></path><path style=\"fill:#474641;\" d=\"M274.374,239.464h-36.746c-5.073,0-9.187,4.113-9.187,9.187c0,15.197,12.363,27.56,27.56,27.56\n\t\ts27.56-12.363,27.56-27.56C283.56,243.577,279.447,239.464,274.374,239.464z\"></path></g><path style=\"fill:#BB9430;\" d=\"M445.771,174.954c0,0.065,0,0.141,0,0.208c0.058,0,0.114-0.005,0.173-0.005c0-0.065,0-0.14,0-0.203\n\tH445.771z\"></path><path style=\"fill:#6D5B4D;\" d=\"M295.985,0.671c-20.716-4.179-40.071,11.696-40.071,32.904c0-21.208-19.354-37.083-40.071-32.904\n\tC130.232,17.94,66.058,89.411,66.058,174.954c0,0.064,0,0.138,0,0.203h0.173c8.984,0,17.459,2.163,24.954,5.977\n\tc6.727,3.422,12.663,8.175,17.445,13.927c0.012-0.045,0.026-0.092,0.038-0.137c1.959-6.974,9.81-10.404,16.345-7.278\n\tc39.878,19.076,84.531,29.769,131.687,29.769c46.935,0,91.39-10.596,131.126-29.506c6.277-2.987,13.803,0.327,15.682,7.02\n\tl0.037,0.131c4.782-5.752,10.718-10.503,17.445-13.927c7.446-3.789,15.861-5.944,24.782-5.971c0-0.066,0-0.142,0-0.208\n\tC445.771,89.411,381.596,17.94,295.985,0.671z\"></path><g style=\"opacity:0.8;\"><path style=\"fill:#827061;\" d=\"M343.748,146.929c-14.309-81.816-87.834-113.354-87.834-113.354\n\t\tc0-21.208-19.354-37.083-40.071-32.904c-51.809,10.451-95.748,40.76-122.378,82.019c-8.386,12.992-6.58,30.074,4.354,41.009l0,0\n\t\tc40.875,40.875,95.848,65.061,153.645,66.109c1.742,0.032,3.486,0.048,5.234,0.048c21.554,0,42.679-2.415,63.223-7.201\n\t\tC336.05,178.898,346.601,163.241,343.748,146.929z\"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>", 30);

var _hoisted_34 = [_hoisted_4];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_3, _hoisted_34))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavList.vue?vue&type=template&id=7e5ae10f":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavList.vue?vue&type=template&id=7e5ae10f ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-gray-400 font-bold text-sm px-4"
};
var _hoisted_2 = {
  "class": "divide-y-2 divide-gray-400"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SideNavListItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SideNavListItem");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.heading), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.links, function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SideNavListItem, {
      link: link
    }, null, 8
    /* PROPS */
    , ["link"])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavListItem.vue?vue&type=template&id=d5fa297c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavListItem.vue?vue&type=template&id=d5fa297c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "py-2 px-4 w-full hover:bg-gray-500"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.link.url
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.link.title), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Client/StoreUpdate.vue?vue&type=template&id=ca0499e2":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Client/StoreUpdate.vue?vue&type=template&id=ca0499e2 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-white p-8 rounded-xl w-full lg:w-10/12 mx-auto my-3"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-3xl mb-6"
}, "Create Store", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "mb-6"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": "block mb-2 uppercase font-bold text-xs text-gray-700"
}, " Name ", -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  "class": "block text-red-500 text-xs mt-1"
};
var _hoisted_6 = {
  "class": "mb-6"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "phone",
  "class": "block mb-2 uppercase font-bold text-xs text-gray-700"
}, " Phone ", -1
/* HOISTED */
);

var _hoisted_8 = {
  key: 0,
  "class": "block text-red-500 text-xs mt-1"
};
var _hoisted_9 = {
  "class": "mb-6"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "address",
  "class": "block mb-2 uppercase font-bold text-xs text-gray-700"
}, " Address ", -1
/* HOISTED */
);

var _hoisted_11 = {
  key: 0,
  "class": "block text-red-500 text-xs mt-1"
};
var _hoisted_12 = {
  "class": "mb-6"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "city",
  "class": "block mb-2 uppercase font-bold text-xs text-gray-700"
}, " City ", -1
/* HOISTED */
);

var _hoisted_14 = {
  key: 0,
  "class": "block text-red-500 text-xs mt-1"
};
var _hoisted_15 = {
  "class": "mb-6"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "State",
  "class": "block mb-2 uppercase font-bold text-xs text-gray-700"
}, " State ", -1
/* HOISTED */
);

var _hoisted_17 = {
  key: 0,
  "class": "block text-red-500 text-xs mt-1"
};
var _hoisted_18 = {
  "class": "mb-6"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "country",
  "class": "block mb-2 uppercase font-bold text-xs text-gray-700"
}, " Country ", -1
/* HOISTED */
);

var _hoisted_20 = {
  key: 0,
  "class": "block text-red-500 text-xs mt-1"
};
var _hoisted_21 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Create Store"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.submit && $setup.submit.apply($setup, arguments);
    }, ["prevent"])),
    "class": "grid grid-cols-2 gap-10"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.name = $event;
    }),
    type: "text",
    name: "name",
    id: "name",
    "class": "border rounded border-gray-400 p-2 w-full"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name]]), $setup.form.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.name), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.phone = $event;
    }),
    type: "tel",
    name: "phone",
    id: "phone",
    "class": "border rounded border-gray-400 p-2 w-full"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.phone]]), $setup.form.errors.phone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.phone), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.address = $event;
    }),
    type: "text",
    name: "address",
    id: "address",
    "class": "border rounded border-gray-400 p-2 w-full"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.address]]), $setup.form.errors.address ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.address), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.city = $event;
    }),
    type: "text",
    name: "city",
    id: "city",
    "class": "border rounded border-gray-400 p-2 w-full"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.city]]), $setup.form.errors.city ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.city), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.form.state = $event;
    }),
    type: "text",
    name: "state",
    id: "state",
    "class": "border rounded border-gray-400 p-2 w-full"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.state]]), $setup.form.errors.state ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.state), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.form.country = $event;
    }),
    type: "text",
    name: "country",
    id: "country",
    "class": "border rounded border-gray-400 p-2 w-full"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.country]]), $setup.form.errors.country ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.country), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 disabled:bg-gray-200 disabled:text-gray-700",
    disabled: $setup.form.processing
  }, " Submit ", 8
  /* PROPS */
  , _hoisted_21)])], 32
  /* HYDRATE_EVENTS */
  )])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/AdminLayout.vue?vue&type=template&id=653ed7a6":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/AdminLayout.vue?vue&type=template&id=653ed7a6 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex divide-x-2 divide-gray-400"
};
var _hoisted_2 = {
  "class": "flex justify-center"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create Store ");

var _hoisted_4 = {
  "class": "w-full"
};
var _hoisted_5 = {
  "class": "bg-gray-900 p-6"
};
var _hoisted_6 = {
  "class": "flex justify-between"
};
var _hoisted_7 = {
  "class": "flex items-center text-white"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("iStore");

var _hoisted_9 = {
  "class": "ml-4 text-sm"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SideNavList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SideNavList");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_SideNav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SideNav");

  var _component_Nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Nav");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SideNav, {
    "class": "w-60 min-h-screen"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SideNavList, {
        links: $data.links,
        heading: "Admin"
      }, null, 8
      /* PROPS */
      , ["links"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SideNavList, {
        links: $data.adminLinks,
        heading: "Profile"
      }, null, 8
      /* PROPS */
      , ["links"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SideNavList, {
        links: $data.storeLinks,
        heading: "Store"
      }, null, 8
      /* PROPS */
      , ["links"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        "class": "border border-gray-400 rounded mx-auto px-4 py-2 bg-blue-600 hover:bg-blue-900",
        href: "/users/".concat(_ctx.$page.props.auth.user.id, "/stores/create")
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_3];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])])];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    "class": "text-lg font-bold"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, " Welcome back, " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.username), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Nav, {
    "class": "text-white"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ClientLayout.vue?vue&type=template&id=594debb1":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ClientLayout.vue?vue&type=template&id=594debb1 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex divide-x-2 divide-gray-400"
};
var _hoisted_2 = {
  "class": "flex justify-center"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create Store ");

var _hoisted_4 = {
  "class": "w-full"
};
var _hoisted_5 = {
  "class": "bg-gray-900 p-6"
};
var _hoisted_6 = {
  "class": "flex justify-between"
};
var _hoisted_7 = {
  "class": "flex items-center text-white"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("iStore");

var _hoisted_9 = {
  "class": "ml-4 text-sm"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SideNavList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SideNavList");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_SideNav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SideNav");

  var _component_Nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Nav");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SideNav, {
    "class": "w-60 min-h-screen"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SideNavList, {
        links: $data.links,
        heading: "Management"
      }, null, 8
      /* PROPS */
      , ["links"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        "class": "border border-gray-400 rounded mx-auto px-4 py-2 bg-blue-600 hover:bg-blue-900",
        href: "/users/".concat(_ctx.$page.props.auth.user.id, "/stores/create")
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_3];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])])];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    "class": "text-lg font-bold"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, " Welcome back, " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.username), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Nav, {
    "class": "text-white"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex ml-6 space-x-4 list-inside"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Logout ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NavLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavLink");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavLink, {
    href: "/logout",
    as: "button",
    method: "post"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    _: 1
    /* STABLE */

  })])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Link"], {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["hover:underline", {
      'font-bold underline': $props.active
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["class"]);
}

/***/ }),

/***/ "./resources/js/Components/SideNav.vue":
/*!*********************************************!*\
  !*** ./resources/js/Components/SideNav.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideNav_vue_vue_type_template_id_66f2e05e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNav.vue?vue&type=template&id=66f2e05e */ "./resources/js/Components/SideNav.vue?vue&type=template&id=66f2e05e");
/* harmony import */ var _SideNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNav.vue?vue&type=script&lang=js */ "./resources/js/Components/SideNav.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SideNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SideNav_vue_vue_type_template_id_66f2e05e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/SideNav.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/SideNavList.vue":
/*!*************************************************!*\
  !*** ./resources/js/Components/SideNavList.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideNavList_vue_vue_type_template_id_7e5ae10f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNavList.vue?vue&type=template&id=7e5ae10f */ "./resources/js/Components/SideNavList.vue?vue&type=template&id=7e5ae10f");
/* harmony import */ var _SideNavList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNavList.vue?vue&type=script&lang=js */ "./resources/js/Components/SideNavList.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SideNavList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SideNavList_vue_vue_type_template_id_7e5ae10f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/SideNavList.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/SideNavListItem.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Components/SideNavListItem.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideNavListItem_vue_vue_type_template_id_d5fa297c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNavListItem.vue?vue&type=template&id=d5fa297c */ "./resources/js/Components/SideNavListItem.vue?vue&type=template&id=d5fa297c");
/* harmony import */ var _SideNavListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNavListItem.vue?vue&type=script&lang=js */ "./resources/js/Components/SideNavListItem.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SideNavListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SideNavListItem_vue_vue_type_template_id_d5fa297c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/SideNavListItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Client/StoreUpdate.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Client/StoreUpdate.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StoreUpdate_vue_vue_type_template_id_ca0499e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreUpdate.vue?vue&type=template&id=ca0499e2 */ "./resources/js/Pages/Client/StoreUpdate.vue?vue&type=template&id=ca0499e2");
/* harmony import */ var _StoreUpdate_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreUpdate.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Client/StoreUpdate.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_StoreUpdate_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StoreUpdate_vue_vue_type_template_id_ca0499e2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Client/StoreUpdate.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/AdminLayout.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/AdminLayout.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminLayout_vue_vue_type_template_id_653ed7a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=template&id=653ed7a6 */ "./resources/js/Shared/AdminLayout.vue?vue&type=template&id=653ed7a6");
/* harmony import */ var _AdminLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=script&lang=js */ "./resources/js/Shared/AdminLayout.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AdminLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AdminLayout_vue_vue_type_template_id_653ed7a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/AdminLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/ClientLayout.vue":
/*!**********************************************!*\
  !*** ./resources/js/Shared/ClientLayout.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientLayout_vue_vue_type_template_id_594debb1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientLayout.vue?vue&type=template&id=594debb1 */ "./resources/js/Shared/ClientLayout.vue?vue&type=template&id=594debb1");
/* harmony import */ var _ClientLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientLayout.vue?vue&type=script&lang=js */ "./resources/js/Shared/ClientLayout.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ClientLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ClientLayout_vue_vue_type_template_id_594debb1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/ClientLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Nav.vue":
/*!*************************************!*\
  !*** ./resources/js/Shared/Nav.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.vue?vue&type=template&id=42f6d0f7 */ "./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7");
/* harmony import */ var _Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.vue?vue&type=script&lang=js */ "./resources/js/Shared/Nav.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Nav.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/NavLink.vue":
/*!*****************************************!*\
  !*** ./resources/js/Shared/NavLink.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavLink_vue_vue_type_template_id_6c59dede__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink.vue?vue&type=template&id=6c59dede */ "./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede");
/* harmony import */ var _NavLink_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLink.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Shared/NavLink.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_alazarkassahun_code_istore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavLink_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavLink_vue_vue_type_template_id_6c59dede__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/NavLink.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/SideNav.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/SideNav.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideNav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNav.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/SideNavList.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/SideNavList.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNavList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNavList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideNavList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/SideNavListItem.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/SideNavListItem.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNavListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNavListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideNavListItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavListItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Client/StoreUpdate.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Client/StoreUpdate.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StoreUpdate_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StoreUpdate_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StoreUpdate.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Client/StoreUpdate.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/AdminLayout.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/AdminLayout.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/AdminLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/ClientLayout.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/ClientLayout.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ClientLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Nav.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/Shared/Nav.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/NavLink.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/NavLink.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavLink.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/SideNav.vue?vue&type=template&id=66f2e05e":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/SideNav.vue?vue&type=template&id=66f2e05e ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNav_vue_vue_type_template_id_66f2e05e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNav_vue_vue_type_template_id_66f2e05e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideNav.vue?vue&type=template&id=66f2e05e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNav.vue?vue&type=template&id=66f2e05e");


/***/ }),

/***/ "./resources/js/Components/SideNavList.vue?vue&type=template&id=7e5ae10f":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/SideNavList.vue?vue&type=template&id=7e5ae10f ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNavList_vue_vue_type_template_id_7e5ae10f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNavList_vue_vue_type_template_id_7e5ae10f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideNavList.vue?vue&type=template&id=7e5ae10f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavList.vue?vue&type=template&id=7e5ae10f");


/***/ }),

/***/ "./resources/js/Components/SideNavListItem.vue?vue&type=template&id=d5fa297c":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/SideNavListItem.vue?vue&type=template&id=d5fa297c ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNavListItem_vue_vue_type_template_id_d5fa297c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNavListItem_vue_vue_type_template_id_d5fa297c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideNavListItem.vue?vue&type=template&id=d5fa297c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/SideNavListItem.vue?vue&type=template&id=d5fa297c");


/***/ }),

/***/ "./resources/js/Pages/Client/StoreUpdate.vue?vue&type=template&id=ca0499e2":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Client/StoreUpdate.vue?vue&type=template&id=ca0499e2 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StoreUpdate_vue_vue_type_template_id_ca0499e2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StoreUpdate_vue_vue_type_template_id_ca0499e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StoreUpdate.vue?vue&type=template&id=ca0499e2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Client/StoreUpdate.vue?vue&type=template&id=ca0499e2");


/***/ }),

/***/ "./resources/js/Shared/AdminLayout.vue?vue&type=template&id=653ed7a6":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/AdminLayout.vue?vue&type=template&id=653ed7a6 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminLayout_vue_vue_type_template_id_653ed7a6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminLayout_vue_vue_type_template_id_653ed7a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminLayout.vue?vue&type=template&id=653ed7a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/AdminLayout.vue?vue&type=template&id=653ed7a6");


/***/ }),

/***/ "./resources/js/Shared/ClientLayout.vue?vue&type=template&id=594debb1":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/ClientLayout.vue?vue&type=template&id=594debb1 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientLayout_vue_vue_type_template_id_594debb1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientLayout_vue_vue_type_template_id_594debb1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientLayout.vue?vue&type=template&id=594debb1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ClientLayout.vue?vue&type=template&id=594debb1");


/***/ }),

/***/ "./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7":
/*!*******************************************************************!*\
  !*** ./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_42f6d0f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=template&id=42f6d0f7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Nav.vue?vue&type=template&id=42f6d0f7");


/***/ }),

/***/ "./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_template_id_6c59dede__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_template_id_6c59dede__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavLink.vue?vue&type=template&id=6c59dede */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede");


/***/ })

}]);