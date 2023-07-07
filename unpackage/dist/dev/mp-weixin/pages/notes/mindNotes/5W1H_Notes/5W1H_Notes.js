(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/notes/mindNotes/5W1H_Notes/5W1H_Notes"],{

/***/ 105:
/*!*********************************************************************************************************!*\
  !*** D:/HbuiderProjects/newmemo/main.js?{"page":"pages%2Fnotes%2FmindNotes%2F5W1H_Notes%2F5W1H_Notes"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _W1H_Notes = _interopRequireDefault(__webpack_require__(/*! ./pages/notes/mindNotes/5W1H_Notes/5W1H_Notes.vue */ 106));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_W1H_Notes.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 106:
/*!**********************************************************************************!*\
  !*** D:/HbuiderProjects/newmemo/pages/notes/mindNotes/5W1H_Notes/5W1H_Notes.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _5W1H_Notes_vue_vue_type_template_id_3111fcd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5W1H_Notes.vue?vue&type=template&id=3111fcd0& */ 107);
/* harmony import */ var _5W1H_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./5W1H_Notes.vue?vue&type=script&lang=js& */ 109);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _5W1H_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _5W1H_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _5W1H_Notes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./5W1H_Notes.vue?vue&type=style&index=0&lang=css& */ 111);
/* harmony import */ var _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _5W1H_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _5W1H_Notes_vue_vue_type_template_id_3111fcd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _5W1H_Notes_vue_vue_type_template_id_3111fcd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _5W1H_Notes_vue_vue_type_template_id_3111fcd0___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/notes/mindNotes/5W1H_Notes/5W1H_Notes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 107:
/*!*****************************************************************************************************************!*\
  !*** D:/HbuiderProjects/newmemo/pages/notes/mindNotes/5W1H_Notes/5W1H_Notes.vue?vue&type=template&id=3111fcd0& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_template_id_3111fcd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./5W1H_Notes.vue?vue&type=template&id=3111fcd0& */ 108);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_template_id_3111fcd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_template_id_3111fcd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_template_id_3111fcd0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_template_id_3111fcd0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 108:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HbuiderProjects/newmemo/pages/notes/mindNotes/5W1H_Notes/5W1H_Notes.vue?vue&type=template&id=3111fcd0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniRow: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-row/components/uni-row/uni-row */ "uni_modules/uni-row/components/uni-row/uni-row").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-row/components/uni-row/uni-row.vue */ 151))
    },
    uniCol: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-row/components/uni-col/uni-col */ "uni_modules/uni-row/components/uni-col/uni-col").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-row/components/uni-col/uni-col.vue */ 158))
    },
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 135))
    },
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 165))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.tags_1, function (tag, index) {
    var $orig = _vm.__get_orig(tag)
    var g0 = _vm.selectedTags.includes(index)
    return {
      $orig: $orig,
      g0: g0,
    }
  })
  var l1 = _vm.__map(_vm.tags_1, function (tag, index) {
    var $orig = _vm.__get_orig(tag)
    var g1 = _vm.selectedTags.includes(index)
    return {
      $orig: $orig,
      g1: g1,
    }
  })
  var l2 = _vm.__map(_vm.tags_2, function (tag, index) {
    var $orig = _vm.__get_orig(tag)
    var g2 = _vm.selectedTags.includes(index + 5)
    return {
      $orig: $orig,
      g2: g2,
    }
  })
  var l3 = _vm.__map(_vm.tags_3, function (tag, index) {
    var $orig = _vm.__get_orig(tag)
    var g3 = _vm.selectedTags.includes(index + 10)
    return {
      $orig: $orig,
      g3: g3,
    }
  })
  var l4 = _vm.__map(_vm.tags_4, function (tag, index) {
    var $orig = _vm.__get_orig(tag)
    var g4 = _vm.selectedTags.includes(index + 15)
    return {
      $orig: $orig,
      g4: g4,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1,
        l2: l2,
        l3: l3,
        l4: l4,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 109:
/*!***********************************************************************************************************!*\
  !*** D:/HbuiderProjects/newmemo/pages/notes/mindNotes/5W1H_Notes/5W1H_Notes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./5W1H_Notes.vue?vue&type=script&lang=js& */ 110);
/* harmony import */ var _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 110:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HbuiderProjects/newmemo/pages/notes/mindNotes/5W1H_Notes/5W1H_Notes.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      titleValue: '',
      type: 'center',
      gutter: 0,
      nvueWidth: 730,
      tags_1: ['情感', '摄影', '搞笑', '游戏', '绘画'],
      tags_2: ['运动', '旅行', '美食', '穿搭', '学习'],
      tags_3: ['音乐', '护肤', '壁纸', '手工', '心理'],
      tags_4: ['动漫', '职场', '机车', '家装', '文化'],
      selectedTags: [],
      max: 10,
      questionsWhatBoxes: [],
      answerWhatBoxes: [],
      questionsWhereBoxes: [],
      answerWhereBoxes: [],
      questionsWhenBoxes: [],
      answerWhenBoxes: [],
      questionsWhyBoxes: [],
      answerWhyBoxes: [],
      questionsWhoBoxes: [],
      answerWhoBoxes: [],
      questionsHowBoxes: [],
      answerHowBoxes: [],
      checkboxValue: []
    };
  },
  methods: {
    handleSubmit: function handleSubmit(event) {
      console.log("?");
      event.preventDefault();

      // Get all the question and answer inputs
      var questionInputs = Array.from(document.querySelectorAll('.qWhat, .qWhere, .qWhen, .qWhy, .qWho, .qHow'));
      var answerInputs = Array.from(document.querySelectorAll('.aWhat, .aWhere, .aWhen, .aWhy, .aWho, .aHow'));

      // Extract the values from the inputs and concatenate them
      var questions = questionInputs.map(function (input) {
        return input.value;
      });
      var answers = answerInputs.map(function (input) {
        return input.value;
      });
      var allQuestions = questions.join(';'); // Join questions with a separator
      var allAnswers = answers.join(';'); // Join answers with a separator

      // Set the form values
      this.$refs.openidInput.value = uni.getStorageSync('openid');
      this.$refs.titleValueInput.value = this.titleValue;
      this.$refs.selectedTagsInput.value = this.selectedTags;
      this.$refs.publicValueInput.value = this.checkboxValue.includes('cb') ? 1 : 0;

      // Append the concatenated questions and answers to the form data
      var questionsInput = document.createElement('input');
      questionsInput.name = 'questions';
      questionsInput.value = allQuestions;
      questionsInput.type = 'hidden';
      event.target.appendChild(questionsInput);
      var answersInput = document.createElement('input');
      answersInput.name = 'answers';
      answersInput.value = allAnswers;
      answersInput.type = 'hidden';
      event.target.appendChild(answersInput);

      // Submit the form
      event.target.submit();
    },
    /* saveData() {
    let data={};
    
       // 获取What部分的非空输入框的内容
       if (this.$refs.qWhatInput && this.$refs.qWhatInput.value.trim() !== '') {
    	// console.log($refs.qWhatInput.value)
         data.qWhat = this.$refs.qWhatInput.value.trim();
       }
       if (this.$refs.aWhatInput && this.$refs.aWhatInput.value.trim() !== '') {
         data.aWhat = this.$refs.aWhatInput.value.trim();
       }
       for (let i = 0; i < this.questionsWhatBoxes.length; i++) {
         const qInput = this.$refs.qWhatInput[i];
         const aInput = this.$refs.aWhatInput[i];
         if (qInput && qInput.value.trim() !== '') {
           data[`qWhat${i}`] = qInput.value.trim();
         }
         if (aInput && aInput.value.trim() !== '') {
           data[`aWhat${i}`] = aInput.value.trim();
         }
       }
    //获取Where部分的非空输入框的内容
        if (this.$refs.qWhereInput && this.$refs.qWhereInput.value.trim() !== '') {
          data.qWhere = this.$refs.qWhereInput.value.trim();
        }
        if (this.$refs.aWhereInput && this.$refs.aWhereInput.value.trim() !== '') {
          data.aWhere = this.$refs.aWhereInput.value.trim();
        }
        for (let i = 0; i < this.questionsWhereBoxes.length; i++) {
          const qInput = this.$refs.qWhereInput[i];
          const aInput = this.$refs.aWhereInput[i];
          if (qInput && qInput.value.trim() !== '') {
            data[`qWhere${i}`] = qInput.value.trim();
          }
          if (aInput && aInput.value.trim() !== '') {
            data[`aWhere${i}`] = aInput.value.trim();
          }
        }
    
        //获取When部分的非空输入框的内容
        if (this.$refs.qWhenInput && this.$refs.qWhenInput.value.trim() !== '') {
          data.qWhen = this.$refs.qWhenInput.value.trim();
        }
        if (this.$refs.aWhenInput && this.$refs.aWhenInput.value.trim() !== '') {
          data.aWhen = this.$refs.aWhenInput.value.trim();
        }
        for (let i = 0; i < this.questionsWhenBoxes.length; i++) {
          const qInput = this.$refs.qWhenInput[i];
          const aInput = this.$refs.aWhenInput[i];
          if (qInput && qInput.value.trim() !== '') {
            data[`qWhen${i}`] = qInput.value.trim();
          }
          if (aInput && aInput.value.trim() !== '') {
            data[`aWhen${i}`] = aInput.value.trim();
          }
        }
    	
    	//获取Why部分的非空输入框的内容
    	    if (this.$refs.qWhyInput && this.$refs.qWhyInput.value.trim() !== '') {
    	      data.qWhy = this.$refs.qWhyInput.value.trim();
    	    }
    	    if (this.$refs.aWhyInput && this.$refs.aWhyInput.value.trim() !== '') {
    	      data.aWhy = this.$refs.aWhyInput.value.trim();
    	    }
    	    for (let i = 0; i < this.questionsWhyBoxes.length; i++) {
    	      const qInput = this.$refs.qWhyInput[i];
    	      const aInput = this.$refs.aWhyInput[i];
    	      if (qInput && qInput.value.trim() !== '') {
    	        data[`qWhy${i}`] = qInput.value.trim();
    	      }
    	      if (aInput && aInput.value.trim() !== '') {
    	        data[`aWhy${i}`] = aInput.value.trim();
    	      }
    	    }
    		
    		//获取Who部分的非空输入框的内容
    		    if (this.$refs.qWhoInput && this.$refs.qWhoInput.value.trim() !== '') {
    		      data.qWho = this.$refs.qWhoInput.value.trim();
    		    }
    		    if (this.$refs.aWhoInput && this.$refs.aWhoInput.value.trim() !== '') {
    		      data.aWho = this.$refs.aWhoInput.value.trim();
    		    }
    		    for (let i = 0; i < this.questionsWhoBoxes.length; i++) {
    		      const qInput = this.$refs.qWhoInput[i];
    		      const aInput = this.$refs.aWhoInput[i];
    		      if (qInput && qInput.value.trim() !== '') {
    		        data[`qWho${i}`] = qInput.value.trim();
    		      }
    		      if (aInput && aInput.value.trim() !== '') {
    		        data[`aWho${i}`] = aInput.value.trim();
    		      }
    		    }
    //获取How部分的非空输入框的内容
        if (this.$refs.qHowInput && this.$refs.qHowInput.value.trim() !== '') {
          data.qHow = this.$refs.qHowInput.value.trim();
        }
        if (this.$refs.aHowInput && this.$refs.aHowInput.value.trim() !== '') {
          data.aHow = this.$refs.aHowInput.value.trim();
        }
        for (let i = 0; i < this.questionsHowBoxes.length; i++) {
          const qInput = this.$refs.qHowInput[i];
          const aInput = this.$refs.aHowInput[i];
          if (qInput && qInput.value.trim() !== '') {
            data[`qHow${i}`] = qInput.value.trim();
          }
          if (aInput && aInput.value.trim() !== '') {
            data[`aHow${i}`] = aInput.value.trim();
          }
        }
    const jsonData = JSON.stringify(data);
    console.log(jsonData)
    const openid = wx.getStorageSync('openid')
    var publicValue
    if (this.checkboxValue.includes("cb")) {
       publicValue=1
    } else {
    	publicValue=0
        }
    let noteData = {
      openid:this.openid,
      title: this.titleValue,
      selectedTags: this.selectedTags,
      data:jsonData,
      publicValue:this.publicValue,
    }; 
          uni.request({
            url: '后端',
            method: 'POST',
            data: noteData,
            success: function (res) {
              console.log(res);
            }
          });
     }, */
    QuestionsWhat: function QuestionsWhat() {
      this.questionsWhatBoxes.push({});
    },
    QuestionsWhere: function QuestionsWhere() {
      this.questionsWhereBoxes.push({});
    },
    QuestionsWhen: function QuestionsWhen() {
      this.questionsWhenBoxes.push({});
    },
    QuestionsWhy: function QuestionsWhy() {
      this.questionsWhyBoxes.push({});
    },
    QuestionsWho: function QuestionsWho() {
      this.questionsWhoBoxes.push({});
    },
    QuestionsHow: function QuestionsHow() {
      this.questionsHowBoxes.push({});
    },
    toggleTagButton: function toggleTagButton(index) {
      selectedTags: this.selectedTags;
      var filledCount = this.selectedTags.length;
      // Check if the clicked button is already selected
      var selectedIndex = this.selectedTags.indexOf(index);
      if (selectedIndex > -1) {
        // Button is already selected, remove it from the selected tags
        this.selectedTags.splice(selectedIndex, 1);
      } else {
        if (filledCount < this.max) {
          // Button is not selected and max limit is not reached, add it to the selected tags
          this.selectedTags.push(index);
        }
      }
    },
    isTagFilled: function isTagFilled(index) {
      // Check if the button at the given index is selected
      return this.selectedTags.includes(index);
    },
    change: function change(e) {
      /* console.log('当前模式：' + e.type + ',状态：' + e.show); */
    },
    toggle: function toggle(type) {
      this.type = type;
      // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
      this.$refs.popup.open(type);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 111:
/*!*******************************************************************************************************************!*\
  !*** D:/HbuiderProjects/newmemo/pages/notes/mindNotes/5W1H_Notes/5W1H_Notes.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../soft_setup/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./5W1H_Notes.vue?vue&type=style&index=0&lang=css& */ 112);
/* harmony import */ var _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_setup_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_5W1H_Notes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 112:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HbuiderProjects/newmemo/pages/notes/mindNotes/5W1H_Notes/5W1H_Notes.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[105,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/notes/mindNotes/5W1H_Notes/5W1H_Notes.js.map