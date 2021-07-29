(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index.vue",
  data: function data() {
    return {
      baseUrl: window.location.origin,
      form: {
        email: null,
        password: null,
        remember: false
      },
      error: {
        message: null
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var data = {
        email: this.form.email,
        password: this.form.password
      };
      axios.post('/api/login', data).then(function (res) {
        if (res.data['status'] === 'error') {
          _this.error.message = res.data.message;
        } else if (res.data['status'] === 'success') {
          window.location.href = '/';
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-0004d9e0");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0004d9e0");

var _hoisted_1 = {
  "class": "min-h-screen bg-white flex"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "hidden lg:block relative w-0 flex-1 darken"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "absolute inset-0 h-full w-full object-cover",
  src: "/images/banners/call_of_duty_warzone_banner.jpg",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
};
var _hoisted_4 = {
  "class": "mx-auto w-full max-w-sm lg:w-96"
};
var _hoisted_5 = {
  "class": "mt-6 text-3xl font-extrabold text-gray-900"
};
var _hoisted_6 = {
  "class": "mt-8"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" prod: ");

var _hoisted_8 = {
  "class": "discord-bg px-4 py-2 rounded text-white",
  href: "https://discord.com/api/oauth2/authorize?client_id=782276432193257482&redirect_uri=https%3A%2F%2Fthe-qrew.com%2Fdiscord%2Fcallback&response_type=code&scope=email%20identify%20guilds%20guilds.join"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fab fa-discord"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" test: ");

var _hoisted_12 = {
  "class": "discord-bg px-4 py-2 rounded text-white",
  href: "https://discord.com/api/oauth2/authorize?client_id=782276432193257482&redirect_uri=http%3A%2F%2F86.85.160.129:9999%2Fdiscord%2Fcallback&response_type=code&scope=email%20identify%20guilds%20guilds.join"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fab fa-discord"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"mt-10 text-xs\" data-v-0004d9e0><li data-v-0004d9e0><span class=\"text-gray-600\" data-v-0004d9e0>Access your username and avatar</span><span class=\"block mb-2\" data-v-0004d9e0>To create your profile</span></li><li data-v-0004d9e0><span class=\"text-gray-600\" data-v-0004d9e0>Access your email address</span><span class=\"block mb-2\" data-v-0004d9e0>To link your profile</span></li><li data-v-0004d9e0><span class=\"text-gray-600\" data-v-0004d9e0>Know what servers you&#39;re in</span><span class=\"block mb-2\" data-v-0004d9e0>To check if you&#39;re part of our server</span></li><li data-v-0004d9e0><span class=\"text-gray-600\" data-v-0004d9e0>Join servers for you</span><span class=\"block mb-2\" data-v-0004d9e0>To join our server - Voice channels easily</span></li></ul>", 1);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    "class": "h-20 w-auto",
    src: "/images/icons/logo.png",
    alt: "Workflow"
  }, null, 8
  /* PROPS */
  , ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.trans('login.login')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.trans('login.discord-sign-in')), 1
  /* TEXT */
  )]), _hoisted_10, _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.trans('login.discord-sign-in')), 1
  /* TEXT */
  )]), _hoisted_14])])])]);
});

/***/ }),

/***/ "./resources/js/Pages/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Login.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_0004d9e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=0004d9e0&scoped=true */ "./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./resources/js/Pages/Login.vue?vue&type=script&lang=js");



_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Login_vue_vue_type_template_id_0004d9e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-0004d9e0"
/* hot reload */
if (false) {}

_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Login.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Login.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Login.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_0004d9e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_0004d9e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=template&id=0004d9e0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true");


/***/ })

}]);