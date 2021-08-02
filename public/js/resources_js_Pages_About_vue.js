"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_About_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/FooterComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/FooterComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FooterComponent"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PageComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PageComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterComponent */ "./resources/js/Components/FooterComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PageComponent",
  components: {
    FooterComponent: _FooterComponent__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: ['isActive'],
  data: function data() {
    return {
      active: {
        home: false,
        about: false,
        curriculum_vitae: false,
        contact: false
      }
    };
  },
  methods: {
    getActiveState: function getActiveState() {
      this.active.home = false;
      this.active.about = false;
      this.active.curriculum_vitae = false;
      this.active.contact = false;

      if (this.isActive === 'home') {
        this.active.home = 'active';
      }

      if (this.isActive === 'about') {
        this.active.about = 'active';
      }

      if (this.isActive === 'curriculum-vitae') {
        this.active.curriculum_vitae = 'active';
      }

      if (this.isActive === 'contact') {
        this.active.contact = 'active';
      }
    }
  },
  created: function created() {
    this.getActiveState();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_PageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/PageComponent */ "./resources/js/Components/PageComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "About",
  components: {
    PageComponent: _Components_PageComponent__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/FooterComponent.vue?vue&type=template&id=d726c5b2&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/FooterComponent.vue?vue&type=template&id=d726c5b2&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-d726c5b2");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-d726c5b2");

var _hoisted_1 = {
  "class": "px-4 lg:px-0"
};
var _hoisted_2 = {
  "class": "max-w-7xl mx-auto grid grid-cols-3 gap-4 py-20 lg:py-40"
};
var _hoisted_3 = {
  "class": "col-span-3 md:col-span-2 xl:col-span-1"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "subtitle"
}, " Bakje pleur? ", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-4 text-gray-600"
}, " Ik drink mijn koffie graag met melk en suiker - Nog steeds geïnteresseerd? Zullen we eens aan tafel gaan zitten onder het genot van een bakje koffie!? ", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "pb-4 text-gray-600"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Nog niet overtuigd? Neem dan een kijkje op mijn CV");

var _hoisted_8 = {
  "class": "pt-4"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Ik lust wel een koffie");

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "hidden md:block lg:col-start-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "images/coffee_drinking_man.png",
  alt: "man met computer"
})], -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "bg-gray-900 py-10 lg:py-20 text-gray-300 text-sm"
};
var _hoisted_12 = {
  "class": "max-w-7xl mx-auto"
};
var _hoisted_13 = {
  "class": "grid grid-cols-5 px-4 lg:px-0"
};
var _hoisted_14 = {
  "class": "col-span-5 lg:col-span-2"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "images/logo.png",
  alt: "logo"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "pt-3"
}, " Noord-Brabant, Nederland ", -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-center"
}, "© 2021. Wesley Hiraki", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: "/curriculum-vitae",
    "class": "text-sm text-gray-300 hover:text-gray-500"
  }, {
    "default": _withId(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: "/contact",
    "class": "py-4 px-10 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 rounded uppercase text-white shadow"
  }, {
    "default": _withId(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  })])]), _hoisted_10])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: "/"
  }, {
    "default": _withId(function () {
      return [_hoisted_15];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_16])]), _hoisted_17])])], 64
  /* STABLE_FRAGMENT */
  );
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PageComponent.vue?vue&type=template&id=723d33f3&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PageComponent.vue?vue&type=template&id=723d33f3&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-723d33f3");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-723d33f3");

var _hoisted_1 = {
  "class": "shadow w-full"
};
var _hoisted_2 = {
  "class": "max-w-7xl mx-auto"
};
var _hoisted_3 = {
  "class": "flex m-auto"
};
var _hoisted_4 = {
  "class": "pt-7"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "images/logo.png",
  alt: "logo"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Home");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Over");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("CV");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Contact");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_footer_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("footer-component");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("nav", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: "/"
  }, {
    "default": _withId(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": ["nav", $data.active.home],
    href: "/"
  }, {
    "default": _withId(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": ["nav", $data.active.about],
    href: "/about"
  }, {
    "default": _withId(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": ["nav", $data.active.curriculum_vitae],
    href: "/curriculum-vitae"
  }, {
    "default": _withId(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": ["nav", $data.active.contact],
    href: "/contact"
  }, {
    "default": _withId(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_footer_component)], 64
  /* STABLE_FRAGMENT */
  );
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-169e1534");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-169e1534");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "max-w-7xl mx-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "h-96 bg-gradient-to-bl from-blue-400 to-indigo-700 rounded"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "pt-56 text-center text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "text-4xl"
}, "Over Mij")])])])], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", {
  "class": "py-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "max-w-7xl mx-auto text-gray-700 px-4 lg:px-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "text-2xl font-semibold text-black"
}, " Waarom programmeren!? "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Al sinds jongs af aan toon ik interesse in het omgaan met een computer. Allereest begon ik met het spelen van spellen (offline). Ken je die tijd nog? Met een inbelverbinding... "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Toen we uiteindelijk de mogelijkheid kregen om online te kunnen spelen, kwam ik in een spel terecht, waarbij ze modificaties gebruikten (C++). Op oogslag raakte ik hieraan geobsedeerd en moest en zou dit zelf ook kunnen. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Na flink wat pogingen was het uiteindelijk gelukt. Dat was ook het moment dat ik in de toekomst hiermee verder wou gaan. In 2009 had ik het voortgezet onderwijs afgerond en ben ik een opleiding Applicatie & Media- ontwikkeling begonnen. Omdat ik voorheen al zelfkennis had opgedaan met programmeren verliep de opleiding niet soepel. De docenten wisten niet wat ze met mij aan moesten, omdat ik overal al een antwoord op had. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Ook begonnen mijn cijfers langzaam achteruit te gaan, tot het moment dat ik had besloten om te stoppen met de opleiding medio 2012. Met de redenen dat ik geen uitdaging had en dat de docenten niet wisten wat ze met mij aan moesten. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "text-2xl font-semibold text-black pt-4"
}, " Wat nu? "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Nu ben ik officieel een schoolverlater... Met bovenstaande reden heb ik mijn best gedaan, helaas tevergeefs, om aan een baan te komen als ontwikkelaar. Na verschillende sollicitaties heb ik besloten om verder te gaan in de horeca. Bijkomend dat ik in de tussentijd zelf verder kennis op deed op het programmeer gebied. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "text-2xl font-semibold text-black pt-4"
}, " Werken in de horeca? "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Ik vind het super leuk om met mensen (oftewel gasten in horeca term) en ze een leuke dag te laten beleven. De klant is koning! Tijdens het werken heb ik verschillende functies gehad. Begleider van grote groepen, barman, chef tot aan eerste medewerker. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Ik vind het super leuk om met mensen (oftewel gasten in horeca term) en ze een leuke dag te laten beleven. De klant is koning! Tijdens het werken heb ik verschillende functies gehad. Van begleider van grote groepen, barman, chef tot aan eerste medewerker. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Ook al had ik het goed naar mijn zin, ontbrak er voor mijn gevoel toch nog iets. Ik wilde dolgraag een software ontwikkelaar worden, omdat ik een schoolverlater was zonder een diploma kreeg ik niet de kans om dit beroep te kunnen beoefenen. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "text-2xl font-semibold text-black pt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back2School "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "text-base text-gray-600"
}, "nog niet")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Eind 2016 heb ik besloten om, wanneer het nieuwe schooljaar begint, weer terug te gaan in de schoolbanken. Januari 2017 heb ik afscheid genomen van mijn horecabaan en wou ik van de vrijheid genieten. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " 23 maart 2017, de dag dat het spel PlayerUnknown's Battlegrounds uit kwam! Het eerste Battle Royale spel dat ik speelde. Niet wetende dat ik hier +1.000 uur in zou investeren binnen 6 maanden tijd. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Na 10-tallen uren het spel gespeeld te hebben, kwam er een bekendmaking dat mensen zichzelf konden opgeven om toegang te krijgen tot Custom Games. Custom Games geef de host (eigenaar) de mogelijkheid om bepaalde onderdelen in het spel aan te passen. Na een week kreeg ik eindelijk bericht dat ik was geaccepteerd! "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Maar wat heb je er nu eigenlijk aan als je geen 99 andere spelers kan vinden. Dit was het moment dat ik bij mezelf dacht om te gaan streamen op Twitch. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "text-2xl font-semibold text-black pt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Twitch "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "text-base text-gray-600"
}, "#streamingplatform")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Sinds dag 1 van het streamen trok het een groot aantal mensen aan. Ze vonden het leuk om te spelen met aangepaste spelinstellingen! Mijn kanaal groeide uit tot ~10.000 volgers binnen 2 maanden. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " De hele dag spelletjes spelen, mensen entertainen en ook nog eens geld verdienen! Is dat niet ieder zijn droom? Nou, niet voor mij. Ik miste namelijk nog het onderdeel programmeren. Eenmaal aangekomen in augustus ben ik wederom begonnen met dezelfde opleiding. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "text-2xl font-semibold text-black pt-4"
}, " Diploma! "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Tussen 2017 - 2020 heb ik alles neergelegd en ben ik volledig voor mijn diploma gegaan. Gelukkig had ik een mentor, tevens ook de vakdocent die programmeer lessen gaf, die begreep dat ik voor liep op mijn klasgenoten. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "pb-2 text-sm text-gray-500 italic"
}, " In de tijd tussen het werken in de horeca en het streamen had ik het nooit opgegeven om stil te staan in de programmeer wereld. Bijleren vindt ik belangrijk en dat deed ik ook. Frameworks zoals Laravel, React en Vue kwamen zelfs aan bod! "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " In de 3 jaar dat ik weer op school had gezeten heb ik 3x een stage periode gehad. Deze heb ik allemaal netjes afgerond met een goed en voldoendes. Ook heb ik nu eindelijk mijn diploma behaald. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "text-2xl font-semibold text-black pt-4"
}, " Diploma behaald, werk binnen no time? "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Dat viel me toch nog vies tegen. Na verschillende sollicitatie gesprekken te hebben gehad in de regio, kreeg ik bij alle te horen dat ze eigelijk op zoek waren naar iemand met meer kennis en werk-ervaring. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Dit kwam, omdat de meeste personeelsleden vanuit thuis werkten (Covid-19) en het hen niet verstandig leek, om een starter te introduceren in het vak. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Met geluk had ik op dat moment nog contact met mijn stagebegeleider van het eerste en tweede schooljaar. Zij vroegen of ik misschien zin had om een keer op de koffie kon komen. Ik aarzelde niet en plande direct een afspraak in. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Helaas konden zij me op dat moment geen baan aan bieden als Software Developer, maar wel als Project Manager. Omdat ik werkzoekende was had ik besloten om deze functie te dragen. Er is vaak besproken om mij te betrekken in het ontwikkelen van websites/applicaties, maar helaas is er nooit iets echt van gekomen. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Dit is ook de reden, waarom ik per augustus niet meer werkzaam ben binnen het bedrijf, omdat ik graag als ontwikkelaar wil doorgaan! ")])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "bg-gray-100 py-10"
};
var _hoisted_4 = {
  "class": "max-w-7xl mx-auto text-gray-700 px-4 lg:px-0 text-center font-bold"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "py-2"
}, " Ben je na het lezen van dit bericht nog steeds niet overtuigd dat ik je toekomstige medewerker of collega wordt? ", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "pt-10"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa-solid fa-arrow-right-long ml-3 animate-pulse text-2xl text-blue-700 mr-1"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Bekijk Mijn CV");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_page_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("page-component");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_page_component, {
    isActive: "about"
  }, {
    "default": _withId(function () {
      return [_hoisted_1, _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
        href: "/curriculum-vitae",
        "class": "py-4 px-10 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 rounded uppercase text-white shadow"
      }, {
        "default": _withId(function () {
          return [_hoisted_8];
        }),
        _: 1
        /* STABLE */

      })])])])];
    }),
    _: 1
    /* STABLE */

  });
});

/***/ }),

/***/ "./resources/js/Components/FooterComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Components/FooterComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterComponent_vue_vue_type_template_id_d726c5b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterComponent.vue?vue&type=template&id=d726c5b2&scoped=true */ "./resources/js/Components/FooterComponent.vue?vue&type=template&id=d726c5b2&scoped=true");
/* harmony import */ var _FooterComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterComponent.vue?vue&type=script&lang=js */ "./resources/js/Components/FooterComponent.vue?vue&type=script&lang=js");



_FooterComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _FooterComponent_vue_vue_type_template_id_d726c5b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_FooterComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-d726c5b2"
/* hot reload */
if (false) {}

_FooterComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Components/FooterComponent.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FooterComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Components/PageComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/PageComponent.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageComponent_vue_vue_type_template_id_723d33f3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageComponent.vue?vue&type=template&id=723d33f3&scoped=true */ "./resources/js/Components/PageComponent.vue?vue&type=template&id=723d33f3&scoped=true");
/* harmony import */ var _PageComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageComponent.vue?vue&type=script&lang=js */ "./resources/js/Components/PageComponent.vue?vue&type=script&lang=js");



_PageComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PageComponent_vue_vue_type_template_id_723d33f3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_PageComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-723d33f3"
/* hot reload */
if (false) {}

_PageComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Components/PageComponent.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PageComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/About.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/About.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_169e1534_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=169e1534&scoped=true */ "./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true");
/* harmony import */ var _About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js */ "./resources/js/Pages/About.vue?vue&type=script&lang=js");



_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _About_vue_vue_type_template_id_169e1534_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-169e1534"
/* hot reload */
if (false) {}

_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/About.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Components/FooterComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/FooterComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FooterComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FooterComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FooterComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/FooterComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/PageComponent.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/PageComponent.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PageComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/About.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/About.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./About.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/FooterComponent.vue?vue&type=template&id=d726c5b2&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/FooterComponent.vue?vue&type=template&id=d726c5b2&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FooterComponent_vue_vue_type_template_id_d726c5b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FooterComponent_vue_vue_type_template_id_d726c5b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FooterComponent.vue?vue&type=template&id=d726c5b2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/FooterComponent.vue?vue&type=template&id=d726c5b2&scoped=true");


/***/ }),

/***/ "./resources/js/Components/PageComponent.vue?vue&type=template&id=723d33f3&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/PageComponent.vue?vue&type=template&id=723d33f3&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageComponent_vue_vue_type_template_id_723d33f3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageComponent_vue_vue_type_template_id_723d33f3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageComponent.vue?vue&type=template&id=723d33f3&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PageComponent.vue?vue&type=template&id=723d33f3&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_template_id_169e1534_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_template_id_169e1534_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./About.vue?vue&type=template&id=169e1534&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true");


/***/ })

}]);