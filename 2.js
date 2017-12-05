webpackJsonp([2],{

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(677)

var Component = __webpack_require__(22)(
  /* script */
  __webpack_require__(679),
  /* template */
  __webpack_require__(680),
  /* scopeId */
  "data-v-0af05852",
  /* cssModules */
  null
)
Component.options.__file = "/data/data/working/circe/lbt-wallet/src/components/check-transaction/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0af05852", Component.options)
  } else {
    hotAPI.reload("data-v-0af05852", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 521:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 523:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(527);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(531)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(529);
var createDesc = __webpack_require__(540);
module.exports = __webpack_require__(525) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(521);
var core = __webpack_require__(523);
var ctx = __webpack_require__(534);
var hide = __webpack_require__(526);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(524);
var IE8_DOM_DEFINE = __webpack_require__(555);
var toPrimitive = __webpack_require__(550);
var dP = Object.defineProperty;

exports.f = __webpack_require__(525) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 530:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(544);
var defined = __webpack_require__(538);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 533:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(535);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 537:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 538:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(527);
var document = __webpack_require__(521).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(556);
var enumBugKeys = __webpack_require__(546);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(545)('keys');
var uid = __webpack_require__(543);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 543:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(533);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(521);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ 546:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 548:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(527);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(537);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(538);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 553:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(525) && !__webpack_require__(531)(function () {
  return Object.defineProperty(__webpack_require__(539)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(530);
var toIObject = __webpack_require__(532);
var arrayIndexOf = __webpack_require__(558)(false);
var IE_PROTO = __webpack_require__(542)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(532);
var toLength = __webpack_require__(551);
var toAbsoluteIndex = __webpack_require__(559);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(537);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(562), __esModule: true };

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(563);
module.exports = __webpack_require__(523).Object.assign;


/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(528);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(564) });


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(541);
var gOPS = __webpack_require__(553);
var pIE = __webpack_require__(548);
var toObject = __webpack_require__(552);
var IObject = __webpack_require__(544);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(531)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(678);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("b6039388", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0af05852\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0af05852\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "\n.input-group[data-v-0af05852] {\n  width: 100%;\n}\n.text-white[data-v-0af05852] {\n  color: #fff;\n}\n.input-group-addon[data-v-0af05852] {\n  color: inherit\n}\n.qr-code-container[data-v-0af05852] {\n  display: flex;\n  justify-content: center;\n}\n.qr-code[data-v-0af05852] {\n  max-width: 200px;\n  min-width: 100px;\n}\n.qr-code img[data-v-0af05852] {\n  background: #fff;\n  max-width: 100%;\n  height: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_jquery_dist_jquery_min__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_jquery_dist_jquery_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vendor_jquery_dist_jquery_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web3__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(149);

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





/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['txHashParam'],
  data: function data() {
    return {
      loading: false,
      showTxInfo: false,
      txHash: '',
      txInfo: {}
    };
  },
  computed: {
    TxStatus: function TxStatus() {
      return __WEBPACK_IMPORTED_MODULE_2__services_web3__["a" /* TX_STATUS */];
    }
  },
  mounted: function mounted() {
    if (this.txHashParam) {
      this.txHash = this.txHashParam;
      this.checkTransaction();
    }
  },
  methods: {
    checkTransaction: function checkTransaction() {
      var _this = this;

      this.showTxInfo = false;
      this.txInfo = {};
      if (!this.isValidTxHash(this.txHash)) {
        toastr.error('Invalid transaction hash');
        return;
      }
      this.loading = true;
      try {
        __WEBPACK_IMPORTED_MODULE_2__services_web3__["c" /* web3Service */].getTransactionByHash(this.txHash, function (data) {
          _this.txInfo = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, data);
          if (_this.txInfo.status != __WEBPACK_IMPORTED_MODULE_2__services_web3__["a" /* TX_STATUS */].NOT_FOUND) {
            _this.txInfo = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(_this.txInfo, {
              status: __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* utils */].capitalizeString(data.status, '_'),
              amount: __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* utils */].formatNumber(data.amount) + ' ' + "LBT",
              gasPriceFormated: __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* utils */].formatNumber(data.gasPrice) + ' WEI ( ' + __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* utils */].formatNumber(__WEBPACK_IMPORTED_MODULE_2__services_web3__["d" /* web3Utils */].weiToGWei(data.gasPrice)) + ' GWEI )',
              gasLimitFormated: __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* utils */].formatNumber(data.gasLimit)
            });
          }
          _this.showTxInfo = true;
          _this.loading = false;
        });
      } catch (e) {
        toastr.error(e.message);
      }
    },
    isValidTxHash: function isValidTxHash(txHash) {
      return __WEBPACK_IMPORTED_MODULE_2__services_web3__["d" /* web3Utils */].isValidTxHash(txHash);
    }
  }
});

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('b-row', {
    class: {
      'ld-loading': _vm.loading
    }
  }, [_c('div', {
    staticClass: "loader"
  }, [_c('div', {
    staticClass: "loader-bar"
  })]), _vm._v(" "), _c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "md": "12"
    }
  }, [_c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "panel-header"
  }, [_vm._v(" ")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body text-center"
  }, [_c('b-row', [_c('b-col', {
    staticClass: "col-md-offset-2 form-horizontal",
    attrs: {
      "md": "8"
    }
  }, [_c('b-form', {
    staticClass: "encrypted-wallet",
    on: {
      "submit": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.checkTransaction($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Tx Hash")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "6"
    }
  }, [_c('b-form-input', {
    attrs: {
      "state": _vm.isValidTxHash(_vm.txHash),
      "placeholder": ""
    },
    model: {
      value: (_vm.txHash),
      callback: function($$v) {
        _vm.txHash = $$v
      },
      expression: "txHash"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "2",
      "sm": "3"
    }
  }, [_c('b-btn', {
    staticClass: "btn-accent btn-block",
    on: {
      "click": function($event) {
        _vm.checkTransaction()
      }
    }
  }, [_vm._v("Check")])], 1)], 1)])], 1)], 1)], 1)])])], 1)], 1), _vm._v(" "), (_vm.showTxInfo && _vm.txInfo.status == _vm.TxStatus.NOT_FOUND) ? _c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('hr'), _vm._v(" "), _c('b-row', [_c('b-col', {
    staticClass: "col-sm-offset-1",
    attrs: {
      "sm": "10"
    }
  }, [_c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('h4', [_vm._v("Transaction Not Found")])])], 1)], 1)])])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.showTxInfo && _vm.txInfo.status != _vm.TxStatus.NOT_FOUND) ? _c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('hr'), _vm._v(" "), _c('b-row', [_c('b-col', {
    staticClass: "col-sm-offset-1",
    attrs: {
      "sm": "10"
    }
  }, [_c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('h4', [_vm._v("Transaction Found")])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Tx Hash\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.hash))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Tx Status\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.status))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                From Address\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.from))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                To Address\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.to))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Amount\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.amount))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Nonce\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.nonce))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Gas Limit\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.gasLimitFormated))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Gas Price\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.gasPriceFormated))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Data\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.data))])])], 1)], 1)])])], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0af05852", module.exports)
  }
}

/***/ })

});