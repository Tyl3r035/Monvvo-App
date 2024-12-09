(self["webpackChunkmonvvo_app"] = self["webpackChunkmonvvo_app"] || []).push([[96],{

/***/ 2730:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */

(function (global, factory) {
  ( false ? 0 : _typeof2(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var hasOwnProperty = Object.hasOwnProperty,
    setPrototypeOf = Object.setPrototypeOf,
    isFrozen = Object.isFrozen,
    getPrototypeOf = Object.getPrototypeOf,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
    seal = Object.seal,
    create = Object.create; // eslint-disable-line import/no-mutable-exports
  var _ref = typeof Reflect !== 'undefined' && Reflect,
    apply = _ref.apply,
    construct = _ref.construct;
  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }
  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }
  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }
  if (!construct) {
    construct = function construct(Func, args) {
      return _construct(Func, _toConsumableArray(args));
    };
  }
  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringToString = unapply(String.prototype.toString);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return construct(func, args);
    };
  }

  /* Add properties to a lookup table */
  function addToSet(set, array, transformCaseFunc) {
    var _transformCaseFunc;
    transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }
    var l = array.length;
    while (l--) {
      var element = array[l];
      if (typeof element === 'string') {
        var lcElement = transformCaseFunc(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }
          element = lcElement;
        }
      }
      set[element] = true;
    }
    return set;
  }

  /* Shallow clone an object */
  function clone(object) {
    var newObject = create(null);
    var property;
    for (property in object) {
      if (apply(hasOwnProperty, object, [property]) === true) {
        newObject[property] = object[property];
      }
    }
    return newObject;
  }

  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */
  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf(object);
    }
    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }
    return fallbackValue;
  }
  var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

  // SVG
  var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

  // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.
  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

  // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.
  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  var text = freeze(['#text']);
  var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  var DOCTYPE_NAME = seal(/^html$/i);
  var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };

  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */
  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }

    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';
    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }
    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');
    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html) {
          return html;
        },
        createScriptURL: function createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };
  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '2.5.7';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];
    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }
    var originalDocument = window.document;
    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      Element = window.Element,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      HTMLFormElement = window.HTMLFormElement,
      DOMParser = window.DOMParser,
      trustedTypes = window.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode');

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }
    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
    var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      createDocumentFragment = _document.createDocumentFragment,
      getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var documentMode = {};
    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}
    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined && documentMode !== 9;
    var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
      ERB_EXPR$1 = ERB_EXPR,
      TMPLIT_EXPR$1 = TMPLIT_EXPR,
      DATA_ATTR$1 = DATA_ATTR,
      ARIA_ATTR$1 = ARIA_ATTR,
      IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE$1 = ATTR_WHITESPACE,
      CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
    var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */
    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));

    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */
    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    var ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */
    var ALLOW_SELF_CLOSE_IN_ATTR = true;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Output should be safe even for XML used within HTML and alike.
     * This means, DOMPurify removes comments when containing risky content.
     */
    var SAFE_FOR_XML = true;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Track whether config is already set on this instance of DOMPurify. */
    var SET_CONFIG = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    var FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    var RETURN_DOM_FRAGMENT = false;

    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    var RETURN_TRUSTED_TYPE = false;

    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */
    var SANITIZE_DOM = true;

    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */
    var SANITIZE_NAMED_PROPS = false;
    var SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    var IN_PLACE = false;

    /* Allow usage of profiles like html, svg and mathMl */
    var USE_PROFILES = {};

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */
    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;

    /* Allowed XHTML+XML namespaces */
    var ALLOWED_NAMESPACES = null;
    var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);

    /* Parsing of strict XHTML documents */
    var PARSER_MEDIA_TYPE;
    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    var transformCaseFunc;

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');
    var isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };

    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity
    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }

      /* Shield configuration object from tampering */
      if (!cfg || _typeof(cfg) !== 'object') {
        cfg = {};
      }

      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);
      PARSER_MEDIA_TYPE =
      // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;

      // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;

      /* Set configuration parameters */
      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS),
      // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }

      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }

      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }

      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }

      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }

      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }

      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }
      CONFIG = cfg;
    };
    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    var HTML_INTEGRATION_POINTS = addToSet({}, ['annotation-xml']);

    // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.
    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);

    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */
    var ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);

    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */
    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element);

      // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }
      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);
      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }
      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        }

        // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }

        // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.
        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        }

        // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        }

        // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace
        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      }

      // For XHTML and XML documents that support custom namespaces
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      }

      // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.
      return false;
    };

    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */
    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });
      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };

    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */
    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }
      node.removeAttribute(name);

      // We void attribute values for unremovable "is"" attributes
      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };

    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */
    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc;
      var leadingWhitespace;
      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }
      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }

      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {
          // Syntax error if dirtyPayload is invalid xml
        }
      }
      var body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }

      /* Work on whole document or just its body */
      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };

    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */
    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null, false);
    };

    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */
    var _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };

    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */
    var _isNode = function _isNode(object) {
      return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */
    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }
      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */
    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content;

      /* Execute a hook if present */
      _executeHook('beforeSanitizeElements', currentNode, null);

      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Check if tagname contains Unicode */
      if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Now let's check the element's type and name */
      var tagName = transformCaseFunc(currentNode.nodeName);

      /* Execute a hook if present */
      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });

      /* Detect mXSS attempts abusing namespace confusion */
      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Mitigate a problem with templates inside select */
      if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove any ocurrence of processing instructions */
      if (currentNode.nodeType === 7) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove any kind of possibly harmful comments */
      if (SAFE_FOR_XML && currentNode.nodeType === 8 && regExpTest(/<[/\w]/g, currentNode.data)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }

        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            var childCount = childNodes.length;
            for (var i = childCount - 1; i >= 0; --i) {
              var childClone = cloneNode(childNodes[i], true);
              childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
              parentNode.insertBefore(childClone, getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }

      /* Check whether element has a valid namespace */
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Make sure that older browsers don't get fallback-tag mXSS */
      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
        content = stringReplace(content, ERB_EXPR$1, ' ');
        content = stringReplace(content, TMPLIT_EXPR$1, ' ');
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeElements', currentNode, null);
      return false;
    };

    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }

      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ;else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ;else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) ||
        // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ;else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ;else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ;else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ;else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ;else if (value) {
        return false;
      } else ;
      return true;
    };

    /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */
    var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
      return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT$1);
    };

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */
    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr;
      var value;
      var lcName;
      var l;
      /* Execute a hook if present */
      _executeHook('beforeSanitizeAttributes', currentNode, null);
      var attributes = currentNode.attributes;

      /* Check if we have attributes; if not we might have a text node */
      if (!attributes) {
        return;
      }
      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;

      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        attr = attributes[l];
        var _attr = attr,
          name = _attr.name,
          namespaceURI = _attr.namespaceURI;
        value = name === 'value' ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);

        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;

        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }

        /* Remove attribute */
        _removeAttribute(name, currentNode);

        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }

        /* Work around a security issue in jQuery 3.0 */
        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
          value = stringReplace(value, ERB_EXPR$1, ' ');
          value = stringReplace(value, TMPLIT_EXPR$1, ' ');
        }

        /* Is `value` valid for this attribute? */
        var lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }

        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */
        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode);

          // Prefix the value and later re-create the attribute with the sanitized value
          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }

        /* Work around a security issue with comments inside attributes */
        if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Handle attributes that require Trusted Types */
        if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ;else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }
              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }

        /* Handle invalid data-* attribute set by try-catching it */
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_) {}
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */
    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode;
      var shadowIterator = _createIterator(fragment);

      /* Execute a hook if present */
      _executeHook('beforeSanitizeShadowDOM', fragment, null);
      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);

        /* Sanitize tags and elements */
        if (_sanitizeElements(shadowNode)) {
          continue;
        }

        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(shadowNode);
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty) {
      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body;
      var importedNode;
      var currentNode;
      var oldNode;
      var returnNode;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }

      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }

      /* Check we can run. Otherwise fall back or ignore */
      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }
          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }
        return dirty;
      }

      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }

      /* Clean up removed elements */
      DOMPurify.removed = [];

      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }
      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          var tagName = transformCaseFunc(dirty.nodeName);
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        /* Initialize the document to work on */
        body = _initDocument(dirty);

        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }

      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }

      /* Get node iterator */
      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }

        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }

        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(currentNode);
        oldNode = currentNode;
      }
      oldNode = null;

      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }

      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

      /* Serialize doctype if allowed */
      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }

      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, ' ');
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };

    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */
    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };

    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };

    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }
      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };

    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }
      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };

    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */
    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };

    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */
    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };

    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */
    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };
    return DOMPurify;
  }
  var purify = createDOMPurify();
  return purify;
});

/***/ }),

/***/ 5462:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  'use strict';

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
   Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
   THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return _assign.apply(this, arguments);
  };
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || from);
  }
  var Bounds = /** @class */function () {
    function Bounds(left, top, width, height) {
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
    }
    Bounds.prototype.add = function (x, y, w, h) {
      return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
    };
    Bounds.fromClientRect = function (context, clientRect) {
      return new Bounds(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
    };
    Bounds.fromDOMRectList = function (context, domRectList) {
      var domRect = Array.from(domRectList).find(function (rect) {
        return rect.width !== 0;
      });
      return domRect ? new Bounds(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height) : Bounds.EMPTY;
    };
    Bounds.EMPTY = new Bounds(0, 0, 0, 0);
    return Bounds;
  }();
  var parseBounds = function parseBounds(context, node) {
    return Bounds.fromClientRect(context, node.getBoundingClientRect());
  };
  var parseDocumentSize = function parseDocumentSize(document) {
    var body = document.body;
    var documentElement = document.documentElement;
    if (!body || !documentElement) {
      throw new Error("Unable to get document size");
    }
    var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
    var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
    return new Bounds(0, 0, width, height);
  };

  /*
   * css-line-break 2.1.0 <https://github.com/niklasvh/css-line-break#readme>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */
  var toCodePoints$1 = function toCodePoints$1(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
      var value = str.charCodeAt(i++);
      if (value >= 0xd800 && value <= 0xdbff && i < length) {
        var extra = str.charCodeAt(i++);
        if ((extra & 0xfc00) === 0xdc00) {
          codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
        } else {
          codePoints.push(value);
          i--;
        }
      } else {
        codePoints.push(value);
      }
    }
    return codePoints;
  };
  var fromCodePoint$1 = function fromCodePoint$1() {
    var codePoints = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      codePoints[_i] = arguments[_i];
    }
    if (String.fromCodePoint) {
      return String.fromCodePoint.apply(String, codePoints);
    }
    var length = codePoints.length;
    if (!length) {
      return '';
    }
    var codeUnits = [];
    var index = -1;
    var result = '';
    while (++index < length) {
      var codePoint = codePoints[index];
      if (codePoint <= 0xffff) {
        codeUnits.push(codePoint);
      } else {
        codePoint -= 0x10000;
        codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
      }
      if (index + 1 === length || codeUnits.length > 0x4000) {
        result += String.fromCharCode.apply(String, codeUnits);
        codeUnits.length = 0;
      }
    }
    return result;
  };
  var chars$2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // Use a lookup table to find the index.
  var lookup$2 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
  for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
    lookup$2[chars$2.charCodeAt(i$2)] = i$2;
  }

  /*
   * utrie 1.0.2 <https://github.com/niklasvh/utrie>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */
  var chars$1$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // Use a lookup table to find the index.
  var lookup$1$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
  for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
    lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
  }
  var decode$1 = function decode$1(base64) {
    var bufferLength = base64.length * 0.75,
      len = base64.length,
      i,
      p = 0,
      encoded1,
      encoded2,
      encoded3,
      encoded4;
    if (base64[base64.length - 1] === '=') {
      bufferLength--;
      if (base64[base64.length - 2] === '=') {
        bufferLength--;
      }
    }
    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
    for (i = 0; i < len; i += 4) {
      encoded1 = lookup$1$1[base64.charCodeAt(i)];
      encoded2 = lookup$1$1[base64.charCodeAt(i + 1)];
      encoded3 = lookup$1$1[base64.charCodeAt(i + 2)];
      encoded4 = lookup$1$1[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
  };
  var polyUint16Array$1 = function polyUint16Array$1(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 2) {
      bytes.push(buffer[i + 1] << 8 | buffer[i]);
    }
    return bytes;
  };
  var polyUint32Array$1 = function polyUint32Array$1(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 4) {
      bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
    }
    return bytes;
  };

  /** Shift size for getting the index-2 table offset. */
  var UTRIE2_SHIFT_2$1 = 5;
  /** Shift size for getting the index-1 table offset. */
  var UTRIE2_SHIFT_1$1 = 6 + 5;
  /**
   * Shift size for shifting left the index array values.
   * Increases possible data size with 16-bit index values at the cost
   * of compactability.
   * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
   */
  var UTRIE2_INDEX_SHIFT$1 = 2;
  /**
   * Difference between the two shift sizes,
   * for getting an index-1 offset from an index-2 offset. 6=11-5
   */
  var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
  /**
   * The part of the index-2 table for U+D800..U+DBFF stores values for
   * lead surrogate code _units_ not code _points_.
   * Values for lead surrogate code _points_ are indexed with this portion of the table.
   * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
   */
  var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 0x10000 >> UTRIE2_SHIFT_2$1;
  /** Number of entries in a data block. 32=0x20 */
  var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
  /** Mask for getting the lower bits for the in-data-block offset. */
  var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
  var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 0x400 >> UTRIE2_SHIFT_2$1;
  /** Count the lengths of both BMP pieces. 2080=0x820 */
  var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
  /**
   * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
   * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
   */
  var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
  var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
  /**
   * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
   * Variable length, for code points up to highStart, where the last single-value range starts.
   * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
   * (For 0x100000 supplementary code points U+10000..U+10ffff.)
   *
   * The part of the index-2 table for supplementary code points starts
   * after this index-1 table.
   *
   * Both the index-1 table and the following part of the index-2 table
   * are omitted completely if there is only BMP data.
   */
  var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
  /**
   * Number of index-1 entries for the BMP. 32=0x20
   * This part of the index-1 table is omitted from the serialized form.
   */
  var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 0x10000 >> UTRIE2_SHIFT_1$1;
  /** Number of entries in an index-2 block. 64=0x40 */
  var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
  /** Mask for getting the lower bits for the in-index-2-block offset. */
  var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
  var slice16$1 = function slice16$1(view, start, end) {
    if (view.slice) {
      return view.slice(start, end);
    }
    return new Uint16Array(Array.prototype.slice.call(view, start, end));
  };
  var slice32$1 = function slice32$1(view, start, end) {
    if (view.slice) {
      return view.slice(start, end);
    }
    return new Uint32Array(Array.prototype.slice.call(view, start, end));
  };
  var createTrieFromBase64$1 = function createTrieFromBase64$1(base64, _byteLength) {
    var buffer = decode$1(base64);
    var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
    var headerLength = 24;
    var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
    return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
  };
  var Trie$1 = /** @class */function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
      this.initialValue = initialValue;
      this.errorValue = errorValue;
      this.highStart = highStart;
      this.highValueIndex = highValueIndex;
      this.index = index;
      this.data = data;
    }
    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */
    Trie.prototype.get = function (codePoint) {
      var ix;
      if (codePoint >= 0) {
        if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
          // Ordinary BMP code point, excluding leading surrogates.
          // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
          // 16 bit data is stored in the index array itself.
          ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }
        if (codePoint <= 0xffff) {
          // Lead Surrogate Code Point.  A Separate index section is stored for
          // lead surrogate code units and code points.
          //   The main index has the code unit data.
          //   For this function, we need the code point data.
          // Note: this expression could be refactored for slightly improved efficiency, but
          //       surrogate code points will be so rare in practice that it's not worth it.
          ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 0xd800 >> UTRIE2_SHIFT_2$1)];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }
        if (codePoint < this.highStart) {
          // Supplemental code point, use two-level lookup.
          ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
          ix = this.index[ix];
          ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
          ix = this.index[ix];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }
        if (codePoint <= 0x10ffff) {
          return this.data[this.highValueIndex];
        }
      }
      // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
      return this.errorValue;
    };
    return Trie;
  }();

  /*
   * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */
  var chars$3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // Use a lookup table to find the index.
  var lookup$3 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
  for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
    lookup$3[chars$3.charCodeAt(i$3)] = i$3;
  }
  var base64$1 = 'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==';
  var LETTER_NUMBER_MODIFIER = 50;
  // Non-tailorable Line Breaking Classes
  var BK = 1; //  Cause a line break (after)
  var CR$1 = 2; //  Cause a line break (after), except between CR and LF
  var LF$1 = 3; //  Cause a line break (after)
  var CM = 4; //  Prohibit a line break between the character and the preceding character
  var NL = 5; //  Cause a line break (after)
  var WJ = 7; //  Prohibit line breaks before and after
  var ZW = 8; //  Provide a break opportunity
  var GL = 9; //  Prohibit line breaks before and after
  var SP = 10; // Enable indirect line breaks
  var ZWJ$1 = 11; // Prohibit line breaks within joiner sequences
  // Break Opportunities
  var B2 = 12; //  Provide a line break opportunity before and after the character
  var BA = 13; //  Generally provide a line break opportunity after the character
  var BB = 14; //  Generally provide a line break opportunity before the character
  var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
  var CB = 16; //   Provide a line break opportunity contingent on additional information
  // Characters Prohibiting Certain Breaks
  var CL = 17; //  Prohibit line breaks before
  var CP = 18; //  Prohibit line breaks before
  var EX = 19; //  Prohibit line breaks before
  var IN = 20; //  Allow only indirect line breaks between pairs
  var NS = 21; //  Allow only indirect line breaks before
  var OP = 22; //  Prohibit line breaks after
  var QU = 23; //  Act like they are both opening and closing
  // Numeric Context
  var IS = 24; //  Prevent breaks after any and before numeric
  var NU = 25; //  Form numeric expressions for line breaking purposes
  var PO = 26; //  Do not break following a numeric expression
  var PR = 27; //  Do not break in front of a numeric expression
  var SY = 28; //  Prevent a break before; and allow a break after
  // Other Characters
  var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
  var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
  var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
  var EB = 32; //  Do not break from following Emoji Modifier
  var EM = 33; //  Do not break from preceding Emoji Base
  var H2 = 34; //  Form Korean syllable blocks
  var H3 = 35; //  Form Korean syllable blocks
  var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
  var ID = 37; //  Break before or after; except in some numeric context
  var JL = 38; //  Form Korean syllable blocks
  var JV = 39; //  Form Korean syllable blocks
  var JT = 40; //  Form Korean syllable blocks
  var RI$1 = 41; //  Keep pairs together. For pairs; break before and after other classes
  var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
  var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions
  var ea_OP = [0x2329, 0xff08];
  var BREAK_MANDATORY = '!';
  var BREAK_NOT_ALLOWED$1 = '×';
  var BREAK_ALLOWED$1 = '÷';
  var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
  var ALPHABETICS = [AL, HL];
  var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
  var SPACE$1 = [SP, ZW];
  var PREFIX_POSTFIX = [PR, PO];
  var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
  var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
  var HYPHEN = [HY, BA];
  var codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints, lineBreak) {
    if (lineBreak === void 0) {
      lineBreak = 'strict';
    }
    var types = [];
    var indices = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
      var classType = UnicodeTrie$1.get(codePoint);
      if (classType > LETTER_NUMBER_MODIFIER) {
        categories.push(true);
        classType -= LETTER_NUMBER_MODIFIER;
      } else {
        categories.push(false);
      }
      if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
        // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
        if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
          indices.push(index);
          return types.push(CB);
        }
      }
      if (classType === CM || classType === ZWJ$1) {
        // LB10 Treat any remaining combining mark or ZWJ as AL.
        if (index === 0) {
          indices.push(index);
          return types.push(AL);
        }
        // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
        // the base character in all of the following rules. Treat ZWJ as if it were CM.
        var prev = types[index - 1];
        if (LINE_BREAKS.indexOf(prev) === -1) {
          indices.push(indices[index - 1]);
          return types.push(prev);
        }
        indices.push(index);
        return types.push(AL);
      }
      indices.push(index);
      if (classType === CJ) {
        return types.push(lineBreak === 'strict' ? NS : ID);
      }
      if (classType === SA) {
        return types.push(AL);
      }
      if (classType === AI) {
        return types.push(AL);
      }
      // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
      // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
      // to take into account the actual line breaking properties for these characters.
      if (classType === XX) {
        if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
          return types.push(ID);
        } else {
          return types.push(AL);
        }
      }
      types.push(classType);
    });
    return [indices, types, categories];
  };
  var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
      var i = currentIndex;
      while (i <= classTypes.length) {
        i++;
        var next = classTypes[i];
        if (next === b) {
          return true;
        }
        if (next !== SP) {
          break;
        }
      }
    }
    if (current === SP) {
      var i = currentIndex;
      while (i > 0) {
        i--;
        var prev = classTypes[i];
        if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
          var n = currentIndex;
          while (n <= classTypes.length) {
            n++;
            var next = classTypes[n];
            if (next === b) {
              return true;
            }
            if (next !== SP) {
              break;
            }
          }
        }
        if (prev !== SP) {
          break;
        }
      }
    }
    return false;
  };
  var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
      var type = classTypes[i];
      if (type === SP) {
        i--;
      } else {
        return type;
      }
    }
    return 0;
  };
  var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
      return BREAK_NOT_ALLOWED$1;
    }
    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
      return BREAK_NOT_ALLOWED$1;
    }
    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];
    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];
    if (current === CR$1 && next === LF$1) {
      return BREAK_NOT_ALLOWED$1;
    }
    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
      return BREAK_MANDATORY;
    }
    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB7 Do not break before spaces or zero width space.
    if (SPACE$1.indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
      return BREAK_ALLOWED$1;
    }
    // LB8a Do not break after a zero width joiner.
    if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
      return BREAK_NOT_ALLOWED$1;
    }
    // zwj emojis
    if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB18 Break after spaces.
    if (current === SP) {
      return BREAK_ALLOWED$1;
    }
    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
      return BREAK_ALLOWED$1;
    }
    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB22 Do not break before ellipsis.
    if (next === IN) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB23 Do not break between digits and letters.
    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
    // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU ||
    // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    }
    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
      var prevIndex = currentIndex;
      while (prevIndex >= 0) {
        var type = classTypes[prevIndex];
        if (type === NU) {
          return BREAK_NOT_ALLOWED$1;
        } else if ([SY, IS].indexOf(type) !== -1) {
          prevIndex--;
        } else {
          break;
        }
      }
    }
    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
      var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
      while (prevIndex >= 0) {
        var type = classTypes[prevIndex];
        if (type === NU) {
          return BREAK_NOT_ALLOWED$1;
        } else if ([SY, IS].indexOf(type) !== -1) {
          prevIndex--;
        } else {
          break;
        }
      }
    }
    // LB26 Do not break a Korean syllable.
    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB27 Treat a Korean Syllable Block the same as ID.
    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
      return BREAK_NOT_ALLOWED$1;
    }
    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI$1 && next === RI$1) {
      var i = indicies[currentIndex];
      var count = 1;
      while (i > 0) {
        i--;
        if (classTypes[i] === RI$1) {
          count++;
        } else {
          break;
        }
      }
      if (count % 2 !== 0) {
        return BREAK_NOT_ALLOWED$1;
      }
    }
    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
      return BREAK_NOT_ALLOWED$1;
    }
    return BREAK_ALLOWED$1;
  };
  var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) {
      options = {
        lineBreak: 'normal',
        wordBreak: 'normal'
      };
    }
    var _a = codePointsToCharacterClasses(codePoints, options.lineBreak),
      indicies = _a[0],
      classTypes = _a[1],
      isLetterNumber = _a[2];
    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
      classTypes = classTypes.map(function (type) {
        return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
      });
    }
    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (letterNumber, i) {
      return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : undefined;
    return [indicies, classTypes, forbiddenBreakpoints];
  };
  var Break = /** @class */function () {
    function Break(codePoints, lineBreak, start, end) {
      this.codePoints = codePoints;
      this.required = lineBreak === BREAK_MANDATORY;
      this.start = start;
      this.end = end;
    }
    Break.prototype.slice = function () {
      return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
    };
    return Break;
  }();
  var LineBreaker = function LineBreaker(str, options) {
    var codePoints = toCodePoints$1(str);
    var _a = cssFormattedClasses(codePoints, options),
      indicies = _a[0],
      classTypes = _a[1],
      forbiddenBreakpoints = _a[2];
    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;
    return {
      next: function next() {
        if (nextIndex >= length) {
          return {
            done: true,
            value: null
          };
        }
        var lineBreak = BREAK_NOT_ALLOWED$1;
        while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1) {}
        if (lineBreak !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
          var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
          lastEnd = nextIndex;
          return {
            value: value,
            done: false
          };
        }
        return {
          done: true,
          value: null
        };
      }
    };
  };

  // https://www.w3.org/TR/css-syntax-3
  var FLAG_UNRESTRICTED = 1 << 0;
  var FLAG_ID = 1 << 1;
  var FLAG_INTEGER = 1 << 2;
  var FLAG_NUMBER = 1 << 3;
  var LINE_FEED = 0x000a;
  var SOLIDUS = 0x002f;
  var REVERSE_SOLIDUS = 0x005c;
  var CHARACTER_TABULATION = 0x0009;
  var SPACE = 0x0020;
  var QUOTATION_MARK = 0x0022;
  var EQUALS_SIGN = 0x003d;
  var NUMBER_SIGN = 0x0023;
  var DOLLAR_SIGN = 0x0024;
  var PERCENTAGE_SIGN = 0x0025;
  var APOSTROPHE = 0x0027;
  var LEFT_PARENTHESIS = 0x0028;
  var RIGHT_PARENTHESIS = 0x0029;
  var LOW_LINE = 0x005f;
  var HYPHEN_MINUS = 0x002d;
  var EXCLAMATION_MARK = 0x0021;
  var LESS_THAN_SIGN = 0x003c;
  var GREATER_THAN_SIGN = 0x003e;
  var COMMERCIAL_AT = 0x0040;
  var LEFT_SQUARE_BRACKET = 0x005b;
  var RIGHT_SQUARE_BRACKET = 0x005d;
  var CIRCUMFLEX_ACCENT = 0x003d;
  var LEFT_CURLY_BRACKET = 0x007b;
  var QUESTION_MARK = 0x003f;
  var RIGHT_CURLY_BRACKET = 0x007d;
  var VERTICAL_LINE = 0x007c;
  var TILDE = 0x007e;
  var CONTROL = 0x0080;
  var REPLACEMENT_CHARACTER = 0xfffd;
  var ASTERISK = 0x002a;
  var PLUS_SIGN = 0x002b;
  var COMMA = 0x002c;
  var COLON = 0x003a;
  var SEMICOLON = 0x003b;
  var FULL_STOP = 0x002e;
  var NULL = 0x0000;
  var BACKSPACE = 0x0008;
  var LINE_TABULATION = 0x000b;
  var SHIFT_OUT = 0x000e;
  var INFORMATION_SEPARATOR_ONE = 0x001f;
  var DELETE = 0x007f;
  var EOF = -1;
  var ZERO = 0x0030;
  var a = 0x0061;
  var e = 0x0065;
  var f = 0x0066;
  var u = 0x0075;
  var z = 0x007a;
  var A = 0x0041;
  var E = 0x0045;
  var F = 0x0046;
  var U = 0x0055;
  var Z = 0x005a;
  var isDigit = function isDigit(codePoint) {
    return codePoint >= ZERO && codePoint <= 0x0039;
  };
  var isSurrogateCodePoint = function isSurrogateCodePoint(codePoint) {
    return codePoint >= 0xd800 && codePoint <= 0xdfff;
  };
  var isHex = function isHex(codePoint) {
    return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
  };
  var isLowerCaseLetter = function isLowerCaseLetter(codePoint) {
    return codePoint >= a && codePoint <= z;
  };
  var isUpperCaseLetter = function isUpperCaseLetter(codePoint) {
    return codePoint >= A && codePoint <= Z;
  };
  var isLetter = function isLetter(codePoint) {
    return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
  };
  var isNonASCIICodePoint = function isNonASCIICodePoint(codePoint) {
    return codePoint >= CONTROL;
  };
  var isWhiteSpace = function isWhiteSpace(codePoint) {
    return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
  };
  var isNameStartCodePoint = function isNameStartCodePoint(codePoint) {
    return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
  };
  var isNameCodePoint = function isNameCodePoint(codePoint) {
    return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
  };
  var isNonPrintableCodePoint = function isNonPrintableCodePoint(codePoint) {
    return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
  };
  var isValidEscape = function isValidEscape(c1, c2) {
    if (c1 !== REVERSE_SOLIDUS) {
      return false;
    }
    return c2 !== LINE_FEED;
  };
  var isIdentifierStart = function isIdentifierStart(c1, c2, c3) {
    if (c1 === HYPHEN_MINUS) {
      return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
    } else if (isNameStartCodePoint(c1)) {
      return true;
    } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
      return true;
    }
    return false;
  };
  var isNumberStart = function isNumberStart(c1, c2, c3) {
    if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
      if (isDigit(c2)) {
        return true;
      }
      return c2 === FULL_STOP && isDigit(c3);
    }
    if (c1 === FULL_STOP) {
      return isDigit(c2);
    }
    return isDigit(c1);
  };
  var stringToNumber = function stringToNumber(codePoints) {
    var c = 0;
    var sign = 1;
    if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
      if (codePoints[c] === HYPHEN_MINUS) {
        sign = -1;
      }
      c++;
    }
    var integers = [];
    while (isDigit(codePoints[c])) {
      integers.push(codePoints[c++]);
    }
    var _int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
    if (codePoints[c] === FULL_STOP) {
      c++;
    }
    var fraction = [];
    while (isDigit(codePoints[c])) {
      fraction.push(codePoints[c++]);
    }
    var fracd = fraction.length;
    var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
    if (codePoints[c] === E || codePoints[c] === e) {
      c++;
    }
    var expsign = 1;
    if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
      if (codePoints[c] === HYPHEN_MINUS) {
        expsign = -1;
      }
      c++;
    }
    var exponent = [];
    while (isDigit(codePoints[c])) {
      exponent.push(codePoints[c++]);
    }
    var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
    return sign * (_int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
  };
  var LEFT_PARENTHESIS_TOKEN = {
    type: 2 /* LEFT_PARENTHESIS_TOKEN */
  };
  var RIGHT_PARENTHESIS_TOKEN = {
    type: 3 /* RIGHT_PARENTHESIS_TOKEN */
  };
  var COMMA_TOKEN = {
    type: 4 /* COMMA_TOKEN */
  };
  var SUFFIX_MATCH_TOKEN = {
    type: 13 /* SUFFIX_MATCH_TOKEN */
  };
  var PREFIX_MATCH_TOKEN = {
    type: 8 /* PREFIX_MATCH_TOKEN */
  };
  var COLUMN_TOKEN = {
    type: 21 /* COLUMN_TOKEN */
  };
  var DASH_MATCH_TOKEN = {
    type: 9 /* DASH_MATCH_TOKEN */
  };
  var INCLUDE_MATCH_TOKEN = {
    type: 10 /* INCLUDE_MATCH_TOKEN */
  };
  var LEFT_CURLY_BRACKET_TOKEN = {
    type: 11 /* LEFT_CURLY_BRACKET_TOKEN */
  };
  var RIGHT_CURLY_BRACKET_TOKEN = {
    type: 12 /* RIGHT_CURLY_BRACKET_TOKEN */
  };
  var SUBSTRING_MATCH_TOKEN = {
    type: 14 /* SUBSTRING_MATCH_TOKEN */
  };
  var BAD_URL_TOKEN = {
    type: 23 /* BAD_URL_TOKEN */
  };
  var BAD_STRING_TOKEN = {
    type: 1 /* BAD_STRING_TOKEN */
  };
  var CDO_TOKEN = {
    type: 25 /* CDO_TOKEN */
  };
  var CDC_TOKEN = {
    type: 24 /* CDC_TOKEN */
  };
  var COLON_TOKEN = {
    type: 26 /* COLON_TOKEN */
  };
  var SEMICOLON_TOKEN = {
    type: 27 /* SEMICOLON_TOKEN */
  };
  var LEFT_SQUARE_BRACKET_TOKEN = {
    type: 28 /* LEFT_SQUARE_BRACKET_TOKEN */
  };
  var RIGHT_SQUARE_BRACKET_TOKEN = {
    type: 29 /* RIGHT_SQUARE_BRACKET_TOKEN */
  };
  var WHITESPACE_TOKEN = {
    type: 31 /* WHITESPACE_TOKEN */
  };
  var EOF_TOKEN = {
    type: 32 /* EOF_TOKEN */
  };
  var Tokenizer = /** @class */function () {
    function Tokenizer() {
      this._value = [];
    }
    Tokenizer.prototype.write = function (chunk) {
      this._value = this._value.concat(toCodePoints$1(chunk));
    };
    Tokenizer.prototype.read = function () {
      var tokens = [];
      var token = this.consumeToken();
      while (token !== EOF_TOKEN) {
        tokens.push(token);
        token = this.consumeToken();
      }
      return tokens;
    };
    Tokenizer.prototype.consumeToken = function () {
      var codePoint = this.consumeCodePoint();
      switch (codePoint) {
        case QUOTATION_MARK:
          return this.consumeStringToken(QUOTATION_MARK);
        case NUMBER_SIGN:
          var c1 = this.peekCodePoint(0);
          var c2 = this.peekCodePoint(1);
          var c3 = this.peekCodePoint(2);
          if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
            var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
            var value = this.consumeName();
            return {
              type: 5 /* HASH_TOKEN */,
              value: value,
              flags: flags
            };
          }
          break;
        case DOLLAR_SIGN:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return SUFFIX_MATCH_TOKEN;
          }
          break;
        case APOSTROPHE:
          return this.consumeStringToken(APOSTROPHE);
        case LEFT_PARENTHESIS:
          return LEFT_PARENTHESIS_TOKEN;
        case RIGHT_PARENTHESIS:
          return RIGHT_PARENTHESIS_TOKEN;
        case ASTERISK:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return SUBSTRING_MATCH_TOKEN;
          }
          break;
        case PLUS_SIGN:
          if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          break;
        case COMMA:
          return COMMA_TOKEN;
        case HYPHEN_MINUS:
          var e1 = codePoint;
          var e2 = this.peekCodePoint(0);
          var e3 = this.peekCodePoint(1);
          if (isNumberStart(e1, e2, e3)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          if (isIdentifierStart(e1, e2, e3)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeIdentLikeToken();
          }
          if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
            this.consumeCodePoint();
            this.consumeCodePoint();
            return CDC_TOKEN;
          }
          break;
        case FULL_STOP:
          if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          break;
        case SOLIDUS:
          if (this.peekCodePoint(0) === ASTERISK) {
            this.consumeCodePoint();
            while (true) {
              var c = this.consumeCodePoint();
              if (c === ASTERISK) {
                c = this.consumeCodePoint();
                if (c === SOLIDUS) {
                  return this.consumeToken();
                }
              }
              if (c === EOF) {
                return this.consumeToken();
              }
            }
          }
          break;
        case COLON:
          return COLON_TOKEN;
        case SEMICOLON:
          return SEMICOLON_TOKEN;
        case LESS_THAN_SIGN:
          if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
            this.consumeCodePoint();
            this.consumeCodePoint();
            return CDO_TOKEN;
          }
          break;
        case COMMERCIAL_AT:
          var a1 = this.peekCodePoint(0);
          var a2 = this.peekCodePoint(1);
          var a3 = this.peekCodePoint(2);
          if (isIdentifierStart(a1, a2, a3)) {
            var value = this.consumeName();
            return {
              type: 7 /* AT_KEYWORD_TOKEN */,
              value: value
            };
          }
          break;
        case LEFT_SQUARE_BRACKET:
          return LEFT_SQUARE_BRACKET_TOKEN;
        case REVERSE_SOLIDUS:
          if (isValidEscape(codePoint, this.peekCodePoint(0))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeIdentLikeToken();
          }
          break;
        case RIGHT_SQUARE_BRACKET:
          return RIGHT_SQUARE_BRACKET_TOKEN;
        case CIRCUMFLEX_ACCENT:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return PREFIX_MATCH_TOKEN;
          }
          break;
        case LEFT_CURLY_BRACKET:
          return LEFT_CURLY_BRACKET_TOKEN;
        case RIGHT_CURLY_BRACKET:
          return RIGHT_CURLY_BRACKET_TOKEN;
        case u:
        case U:
          var u1 = this.peekCodePoint(0);
          var u2 = this.peekCodePoint(1);
          if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
            this.consumeCodePoint();
            this.consumeUnicodeRangeToken();
          }
          this.reconsumeCodePoint(codePoint);
          return this.consumeIdentLikeToken();
        case VERTICAL_LINE:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return DASH_MATCH_TOKEN;
          }
          if (this.peekCodePoint(0) === VERTICAL_LINE) {
            this.consumeCodePoint();
            return COLUMN_TOKEN;
          }
          break;
        case TILDE:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return INCLUDE_MATCH_TOKEN;
          }
          break;
        case EOF:
          return EOF_TOKEN;
      }
      if (isWhiteSpace(codePoint)) {
        this.consumeWhiteSpace();
        return WHITESPACE_TOKEN;
      }
      if (isDigit(codePoint)) {
        this.reconsumeCodePoint(codePoint);
        return this.consumeNumericToken();
      }
      if (isNameStartCodePoint(codePoint)) {
        this.reconsumeCodePoint(codePoint);
        return this.consumeIdentLikeToken();
      }
      return {
        type: 6 /* DELIM_TOKEN */,
        value: fromCodePoint$1(codePoint)
      };
    };
    Tokenizer.prototype.consumeCodePoint = function () {
      var value = this._value.shift();
      return typeof value === 'undefined' ? -1 : value;
    };
    Tokenizer.prototype.reconsumeCodePoint = function (codePoint) {
      this._value.unshift(codePoint);
    };
    Tokenizer.prototype.peekCodePoint = function (delta) {
      if (delta >= this._value.length) {
        return -1;
      }
      return this._value[delta];
    };
    Tokenizer.prototype.consumeUnicodeRangeToken = function () {
      var digits = [];
      var codePoint = this.consumeCodePoint();
      while (isHex(codePoint) && digits.length < 6) {
        digits.push(codePoint);
        codePoint = this.consumeCodePoint();
      }
      var questionMarks = false;
      while (codePoint === QUESTION_MARK && digits.length < 6) {
        digits.push(codePoint);
        codePoint = this.consumeCodePoint();
        questionMarks = true;
      }
      if (questionMarks) {
        var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) {
          return digit === QUESTION_MARK ? ZERO : digit;
        })), 16);
        var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) {
          return digit === QUESTION_MARK ? F : digit;
        })), 16);
        return {
          type: 30 /* UNICODE_RANGE_TOKEN */,
          start: start_1,
          end: end
        };
      }
      var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
      if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
        this.consumeCodePoint();
        codePoint = this.consumeCodePoint();
        var endDigits = [];
        while (isHex(codePoint) && endDigits.length < 6) {
          endDigits.push(codePoint);
          codePoint = this.consumeCodePoint();
        }
        var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
        return {
          type: 30 /* UNICODE_RANGE_TOKEN */,
          start: start,
          end: end
        };
      } else {
        return {
          type: 30 /* UNICODE_RANGE_TOKEN */,
          start: start,
          end: start
        };
      }
    };
    Tokenizer.prototype.consumeIdentLikeToken = function () {
      var value = this.consumeName();
      if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
        this.consumeCodePoint();
        return this.consumeUrlToken();
      } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
        this.consumeCodePoint();
        return {
          type: 19 /* FUNCTION_TOKEN */,
          value: value
        };
      }
      return {
        type: 20 /* IDENT_TOKEN */,
        value: value
      };
    };
    Tokenizer.prototype.consumeUrlToken = function () {
      var value = [];
      this.consumeWhiteSpace();
      if (this.peekCodePoint(0) === EOF) {
        return {
          type: 22 /* URL_TOKEN */,
          value: ''
        };
      }
      var next = this.peekCodePoint(0);
      if (next === APOSTROPHE || next === QUOTATION_MARK) {
        var stringToken = this.consumeStringToken(this.consumeCodePoint());
        if (stringToken.type === 0 /* STRING_TOKEN */) {
          this.consumeWhiteSpace();
          if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
            this.consumeCodePoint();
            return {
              type: 22 /* URL_TOKEN */,
              value: stringToken.value
            };
          }
        }
        this.consumeBadUrlRemnants();
        return BAD_URL_TOKEN;
      }
      while (true) {
        var codePoint = this.consumeCodePoint();
        if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
          return {
            type: 22 /* URL_TOKEN */,
            value: fromCodePoint$1.apply(void 0, value)
          };
        } else if (isWhiteSpace(codePoint)) {
          this.consumeWhiteSpace();
          if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
            this.consumeCodePoint();
            return {
              type: 22 /* URL_TOKEN */,
              value: fromCodePoint$1.apply(void 0, value)
            };
          }
          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        } else if (codePoint === REVERSE_SOLIDUS) {
          if (isValidEscape(codePoint, this.peekCodePoint(0))) {
            value.push(this.consumeEscapedCodePoint());
          } else {
            this.consumeBadUrlRemnants();
            return BAD_URL_TOKEN;
          }
        } else {
          value.push(codePoint);
        }
      }
    };
    Tokenizer.prototype.consumeWhiteSpace = function () {
      while (isWhiteSpace(this.peekCodePoint(0))) {
        this.consumeCodePoint();
      }
    };
    Tokenizer.prototype.consumeBadUrlRemnants = function () {
      while (true) {
        var codePoint = this.consumeCodePoint();
        if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
          return;
        }
        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          this.consumeEscapedCodePoint();
        }
      }
    };
    Tokenizer.prototype.consumeStringSlice = function (count) {
      var SLICE_STACK_SIZE = 50000;
      var value = '';
      while (count > 0) {
        var amount = Math.min(SLICE_STACK_SIZE, count);
        value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
        count -= amount;
      }
      this._value.shift();
      return value;
    };
    Tokenizer.prototype.consumeStringToken = function (endingCodePoint) {
      var value = '';
      var i = 0;
      do {
        var codePoint = this._value[i];
        if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
          value += this.consumeStringSlice(i);
          return {
            type: 0 /* STRING_TOKEN */,
            value: value
          };
        }
        if (codePoint === LINE_FEED) {
          this._value.splice(0, i);
          return BAD_STRING_TOKEN;
        }
        if (codePoint === REVERSE_SOLIDUS) {
          var next = this._value[i + 1];
          if (next !== EOF && next !== undefined) {
            if (next === LINE_FEED) {
              value += this.consumeStringSlice(i);
              i = -1;
              this._value.shift();
            } else if (isValidEscape(codePoint, next)) {
              value += this.consumeStringSlice(i);
              value += fromCodePoint$1(this.consumeEscapedCodePoint());
              i = -1;
            }
          }
        }
        i++;
      } while (true);
    };
    Tokenizer.prototype.consumeNumber = function () {
      var repr = [];
      var type = FLAG_INTEGER;
      var c1 = this.peekCodePoint(0);
      if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
        repr.push(this.consumeCodePoint());
      }
      while (isDigit(this.peekCodePoint(0))) {
        repr.push(this.consumeCodePoint());
      }
      c1 = this.peekCodePoint(0);
      var c2 = this.peekCodePoint(1);
      if (c1 === FULL_STOP && isDigit(c2)) {
        repr.push(this.consumeCodePoint(), this.consumeCodePoint());
        type = FLAG_NUMBER;
        while (isDigit(this.peekCodePoint(0))) {
          repr.push(this.consumeCodePoint());
        }
      }
      c1 = this.peekCodePoint(0);
      c2 = this.peekCodePoint(1);
      var c3 = this.peekCodePoint(2);
      if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
        repr.push(this.consumeCodePoint(), this.consumeCodePoint());
        type = FLAG_NUMBER;
        while (isDigit(this.peekCodePoint(0))) {
          repr.push(this.consumeCodePoint());
        }
      }
      return [stringToNumber(repr), type];
    };
    Tokenizer.prototype.consumeNumericToken = function () {
      var _a = this.consumeNumber(),
        number = _a[0],
        flags = _a[1];
      var c1 = this.peekCodePoint(0);
      var c2 = this.peekCodePoint(1);
      var c3 = this.peekCodePoint(2);
      if (isIdentifierStart(c1, c2, c3)) {
        var unit = this.consumeName();
        return {
          type: 15 /* DIMENSION_TOKEN */,
          number: number,
          flags: flags,
          unit: unit
        };
      }
      if (c1 === PERCENTAGE_SIGN) {
        this.consumeCodePoint();
        return {
          type: 16 /* PERCENTAGE_TOKEN */,
          number: number,
          flags: flags
        };
      }
      return {
        type: 17 /* NUMBER_TOKEN */,
        number: number,
        flags: flags
      };
    };
    Tokenizer.prototype.consumeEscapedCodePoint = function () {
      var codePoint = this.consumeCodePoint();
      if (isHex(codePoint)) {
        var hex = fromCodePoint$1(codePoint);
        while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
          hex += fromCodePoint$1(this.consumeCodePoint());
        }
        if (isWhiteSpace(this.peekCodePoint(0))) {
          this.consumeCodePoint();
        }
        var hexCodePoint = parseInt(hex, 16);
        if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) {
          return REPLACEMENT_CHARACTER;
        }
        return hexCodePoint;
      }
      if (codePoint === EOF) {
        return REPLACEMENT_CHARACTER;
      }
      return codePoint;
    };
    Tokenizer.prototype.consumeName = function () {
      var result = '';
      while (true) {
        var codePoint = this.consumeCodePoint();
        if (isNameCodePoint(codePoint)) {
          result += fromCodePoint$1(codePoint);
        } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          result += fromCodePoint$1(this.consumeEscapedCodePoint());
        } else {
          this.reconsumeCodePoint(codePoint);
          return result;
        }
      }
    };
    return Tokenizer;
  }();
  var Parser = /** @class */function () {
    function Parser(tokens) {
      this._tokens = tokens;
    }
    Parser.create = function (value) {
      var tokenizer = new Tokenizer();
      tokenizer.write(value);
      return new Parser(tokenizer.read());
    };
    Parser.parseValue = function (value) {
      return Parser.create(value).parseComponentValue();
    };
    Parser.parseValues = function (value) {
      return Parser.create(value).parseComponentValues();
    };
    Parser.prototype.parseComponentValue = function () {
      var token = this.consumeToken();
      while (token.type === 31 /* WHITESPACE_TOKEN */) {
        token = this.consumeToken();
      }
      if (token.type === 32 /* EOF_TOKEN */) {
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      }
      this.reconsumeToken(token);
      var value = this.consumeComponentValue();
      do {
        token = this.consumeToken();
      } while (token.type === 31 /* WHITESPACE_TOKEN */);
      if (token.type === 32 /* EOF_TOKEN */) {
        return value;
      }
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    };
    Parser.prototype.parseComponentValues = function () {
      var values = [];
      while (true) {
        var value = this.consumeComponentValue();
        if (value.type === 32 /* EOF_TOKEN */) {
          return values;
        }
        values.push(value);
        values.push();
      }
    };
    Parser.prototype.consumeComponentValue = function () {
      var token = this.consumeToken();
      switch (token.type) {
        case 11 /* LEFT_CURLY_BRACKET_TOKEN */:
        case 28 /* LEFT_SQUARE_BRACKET_TOKEN */:
        case 2 /* LEFT_PARENTHESIS_TOKEN */:
          return this.consumeSimpleBlock(token.type);
        case 19 /* FUNCTION_TOKEN */:
          return this.consumeFunction(token);
      }
      return token;
    };
    Parser.prototype.consumeSimpleBlock = function (type) {
      var block = {
        type: type,
        values: []
      };
      var token = this.consumeToken();
      while (true) {
        if (token.type === 32 /* EOF_TOKEN */ || isEndingTokenFor(token, type)) {
          return block;
        }
        this.reconsumeToken(token);
        block.values.push(this.consumeComponentValue());
        token = this.consumeToken();
      }
    };
    Parser.prototype.consumeFunction = function (functionToken) {
      var cssFunction = {
        name: functionToken.value,
        values: [],
        type: 18 /* FUNCTION */
      };
      while (true) {
        var token = this.consumeToken();
        if (token.type === 32 /* EOF_TOKEN */ || token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */) {
          return cssFunction;
        }
        this.reconsumeToken(token);
        cssFunction.values.push(this.consumeComponentValue());
      }
    };
    Parser.prototype.consumeToken = function () {
      var token = this._tokens.shift();
      return typeof token === 'undefined' ? EOF_TOKEN : token;
    };
    Parser.prototype.reconsumeToken = function (token) {
      this._tokens.unshift(token);
    };
    return Parser;
  }();
  var isDimensionToken = function isDimensionToken(token) {
    return token.type === 15 /* DIMENSION_TOKEN */;
  };
  var isNumberToken = function isNumberToken(token) {
    return token.type === 17 /* NUMBER_TOKEN */;
  };
  var isIdentToken = function isIdentToken(token) {
    return token.type === 20 /* IDENT_TOKEN */;
  };
  var isStringToken = function isStringToken(token) {
    return token.type === 0 /* STRING_TOKEN */;
  };
  var isIdentWithValue = function isIdentWithValue(token, value) {
    return isIdentToken(token) && token.value === value;
  };
  var nonWhiteSpace = function nonWhiteSpace(token) {
    return token.type !== 31 /* WHITESPACE_TOKEN */;
  };
  var nonFunctionArgSeparator = function nonFunctionArgSeparator(token) {
    return token.type !== 31 /* WHITESPACE_TOKEN */ && token.type !== 4 /* COMMA_TOKEN */;
  };
  var parseFunctionArgs = function parseFunctionArgs(tokens) {
    var args = [];
    var arg = [];
    tokens.forEach(function (token) {
      if (token.type === 4 /* COMMA_TOKEN */) {
        if (arg.length === 0) {
          throw new Error("Error parsing function args, zero tokens for arg");
        }
        args.push(arg);
        arg = [];
        return;
      }
      if (token.type !== 31 /* WHITESPACE_TOKEN */) {
        arg.push(token);
      }
    });
    if (arg.length) {
      args.push(arg);
    }
    return args;
  };
  var isEndingTokenFor = function isEndingTokenFor(token, type) {
    if (type === 11 /* LEFT_CURLY_BRACKET_TOKEN */ && token.type === 12 /* RIGHT_CURLY_BRACKET_TOKEN */) {
      return true;
    }
    if (type === 28 /* LEFT_SQUARE_BRACKET_TOKEN */ && token.type === 29 /* RIGHT_SQUARE_BRACKET_TOKEN */) {
      return true;
    }
    return type === 2 /* LEFT_PARENTHESIS_TOKEN */ && token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */;
  };
  var isLength = function isLength(token) {
    return token.type === 17 /* NUMBER_TOKEN */ || token.type === 15 /* DIMENSION_TOKEN */;
  };
  var isLengthPercentage = function isLengthPercentage(token) {
    return token.type === 16 /* PERCENTAGE_TOKEN */ || isLength(token);
  };
  var parseLengthPercentageTuple = function parseLengthPercentageTuple(tokens) {
    return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
  };
  var ZERO_LENGTH = {
    type: 17 /* NUMBER_TOKEN */,
    number: 0,
    flags: FLAG_INTEGER
  };
  var FIFTY_PERCENT = {
    type: 16 /* PERCENTAGE_TOKEN */,
    number: 50,
    flags: FLAG_INTEGER
  };
  var HUNDRED_PERCENT = {
    type: 16 /* PERCENTAGE_TOKEN */,
    number: 100,
    flags: FLAG_INTEGER
  };
  var getAbsoluteValueForTuple = function getAbsoluteValueForTuple(tuple, width, height) {
    var x = tuple[0],
      y = tuple[1];
    return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
  };
  var getAbsoluteValue = function getAbsoluteValue(token, parent) {
    if (token.type === 16 /* PERCENTAGE_TOKEN */) {
      return token.number / 100 * parent;
    }
    if (isDimensionToken(token)) {
      switch (token.unit) {
        case 'rem':
        case 'em':
          return 16 * token.number;
        // TODO use correct font-size
        case 'px':
        default:
          return token.number;
      }
    }
    return token.number;
  };
  var DEG = 'deg';
  var GRAD = 'grad';
  var RAD = 'rad';
  var TURN = 'turn';
  var angle = {
    name: 'angle',
    parse: function parse(_context, value) {
      if (value.type === 15 /* DIMENSION_TOKEN */) {
        switch (value.unit) {
          case DEG:
            return Math.PI * value.number / 180;
          case GRAD:
            return Math.PI / 200 * value.number;
          case RAD:
            return value.number;
          case TURN:
            return Math.PI * 2 * value.number;
        }
      }
      throw new Error("Unsupported angle type");
    }
  };
  var isAngle = function isAngle(value) {
    if (value.type === 15 /* DIMENSION_TOKEN */) {
      if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
        return true;
      }
    }
    return false;
  };
  var parseNamedSide = function parseNamedSide(tokens) {
    var sideOrCorner = tokens.filter(isIdentToken).map(function (ident) {
      return ident.value;
    }).join(' ');
    switch (sideOrCorner) {
      case 'to bottom right':
      case 'to right bottom':
      case 'left top':
      case 'top left':
        return [ZERO_LENGTH, ZERO_LENGTH];
      case 'to top':
      case 'bottom':
        return deg(0);
      case 'to bottom left':
      case 'to left bottom':
      case 'right top':
      case 'top right':
        return [ZERO_LENGTH, HUNDRED_PERCENT];
      case 'to right':
      case 'left':
        return deg(90);
      case 'to top left':
      case 'to left top':
      case 'right bottom':
      case 'bottom right':
        return [HUNDRED_PERCENT, HUNDRED_PERCENT];
      case 'to bottom':
      case 'top':
        return deg(180);
      case 'to top right':
      case 'to right top':
      case 'left bottom':
      case 'bottom left':
        return [HUNDRED_PERCENT, ZERO_LENGTH];
      case 'to left':
      case 'right':
        return deg(270);
    }
    return 0;
  };
  var deg = function deg(_deg) {
    return Math.PI * _deg / 180;
  };
  var color$1 = {
    name: 'color',
    parse: function parse(context, value) {
      if (value.type === 18 /* FUNCTION */) {
        var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
        if (typeof colorFunction === 'undefined') {
          throw new Error("Attempting to parse an unsupported color function \"" + value.name + "\"");
        }
        return colorFunction(context, value.values);
      }
      if (value.type === 5 /* HASH_TOKEN */) {
        if (value.value.length === 3) {
          var r = value.value.substring(0, 1);
          var g = value.value.substring(1, 2);
          var b = value.value.substring(2, 3);
          return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
        }
        if (value.value.length === 4) {
          var r = value.value.substring(0, 1);
          var g = value.value.substring(1, 2);
          var b = value.value.substring(2, 3);
          var a = value.value.substring(3, 4);
          return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
        }
        if (value.value.length === 6) {
          var r = value.value.substring(0, 2);
          var g = value.value.substring(2, 4);
          var b = value.value.substring(4, 6);
          return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
        }
        if (value.value.length === 8) {
          var r = value.value.substring(0, 2);
          var g = value.value.substring(2, 4);
          var b = value.value.substring(4, 6);
          var a = value.value.substring(6, 8);
          return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
        }
      }
      if (value.type === 20 /* IDENT_TOKEN */) {
        var namedColor = COLORS[value.value.toUpperCase()];
        if (typeof namedColor !== 'undefined') {
          return namedColor;
        }
      }
      return COLORS.TRANSPARENT;
    }
  };
  var isTransparent = function isTransparent(color) {
    return (0xff & color) === 0;
  };
  var asString = function asString(color) {
    var alpha = 0xff & color;
    var blue = 0xff & color >> 8;
    var green = 0xff & color >> 16;
    var red = 0xff & color >> 24;
    return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
  };
  var pack = function pack(r, g, b, a) {
    return (r << 24 | g << 16 | b << 8 | Math.round(a * 255) << 0) >>> 0;
  };
  var getTokenColorValue = function getTokenColorValue(token, i) {
    if (token.type === 17 /* NUMBER_TOKEN */) {
      return token.number;
    }
    if (token.type === 16 /* PERCENTAGE_TOKEN */) {
      var max = i === 3 ? 1 : 255;
      return i === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
    }
    return 0;
  };
  var rgb = function rgb(_context, args) {
    var tokens = args.filter(nonFunctionArgSeparator);
    if (tokens.length === 3) {
      var _a = tokens.map(getTokenColorValue),
        r = _a[0],
        g = _a[1],
        b = _a[2];
      return pack(r, g, b, 1);
    }
    if (tokens.length === 4) {
      var _b = tokens.map(getTokenColorValue),
        r = _b[0],
        g = _b[1],
        b = _b[2],
        a = _b[3];
      return pack(r, g, b, a);
    }
    return 0;
  };
  function hue2rgb(t1, t2, hue) {
    if (hue < 0) {
      hue += 1;
    }
    if (hue >= 1) {
      hue -= 1;
    }
    if (hue < 1 / 6) {
      return (t2 - t1) * hue * 6 + t1;
    } else if (hue < 1 / 2) {
      return t2;
    } else if (hue < 2 / 3) {
      return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
    } else {
      return t1;
    }
  }
  var hsl = function hsl(context, args) {
    var tokens = args.filter(nonFunctionArgSeparator);
    var hue = tokens[0],
      saturation = tokens[1],
      lightness = tokens[2],
      alpha = tokens[3];
    var h = (hue.type === 17 /* NUMBER_TOKEN */ ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
    var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
    var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
    var a = typeof alpha !== 'undefined' && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
    if (s === 0) {
      return pack(l * 255, l * 255, l * 255, 1);
    }
    var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
    var t1 = l * 2 - t2;
    var r = hue2rgb(t1, t2, h + 1 / 3);
    var g = hue2rgb(t1, t2, h);
    var b = hue2rgb(t1, t2, h - 1 / 3);
    return pack(r * 255, g * 255, b * 255, a);
  };
  var SUPPORTED_COLOR_FUNCTIONS = {
    hsl: hsl,
    hsla: hsl,
    rgb: rgb,
    rgba: rgb
  };
  var parseColor = function parseColor(context, value) {
    return color$1.parse(context, Parser.create(value).parseComponentValue());
  };
  var COLORS = {
    ALICEBLUE: 0xf0f8ffff,
    ANTIQUEWHITE: 0xfaebd7ff,
    AQUA: 0x00ffffff,
    AQUAMARINE: 0x7fffd4ff,
    AZURE: 0xf0ffffff,
    BEIGE: 0xf5f5dcff,
    BISQUE: 0xffe4c4ff,
    BLACK: 0x000000ff,
    BLANCHEDALMOND: 0xffebcdff,
    BLUE: 0x0000ffff,
    BLUEVIOLET: 0x8a2be2ff,
    BROWN: 0xa52a2aff,
    BURLYWOOD: 0xdeb887ff,
    CADETBLUE: 0x5f9ea0ff,
    CHARTREUSE: 0x7fff00ff,
    CHOCOLATE: 0xd2691eff,
    CORAL: 0xff7f50ff,
    CORNFLOWERBLUE: 0x6495edff,
    CORNSILK: 0xfff8dcff,
    CRIMSON: 0xdc143cff,
    CYAN: 0x00ffffff,
    DARKBLUE: 0x00008bff,
    DARKCYAN: 0x008b8bff,
    DARKGOLDENROD: 0xb886bbff,
    DARKGRAY: 0xa9a9a9ff,
    DARKGREEN: 0x006400ff,
    DARKGREY: 0xa9a9a9ff,
    DARKKHAKI: 0xbdb76bff,
    DARKMAGENTA: 0x8b008bff,
    DARKOLIVEGREEN: 0x556b2fff,
    DARKORANGE: 0xff8c00ff,
    DARKORCHID: 0x9932ccff,
    DARKRED: 0x8b0000ff,
    DARKSALMON: 0xe9967aff,
    DARKSEAGREEN: 0x8fbc8fff,
    DARKSLATEBLUE: 0x483d8bff,
    DARKSLATEGRAY: 0x2f4f4fff,
    DARKSLATEGREY: 0x2f4f4fff,
    DARKTURQUOISE: 0x00ced1ff,
    DARKVIOLET: 0x9400d3ff,
    DEEPPINK: 0xff1493ff,
    DEEPSKYBLUE: 0x00bfffff,
    DIMGRAY: 0x696969ff,
    DIMGREY: 0x696969ff,
    DODGERBLUE: 0x1e90ffff,
    FIREBRICK: 0xb22222ff,
    FLORALWHITE: 0xfffaf0ff,
    FORESTGREEN: 0x228b22ff,
    FUCHSIA: 0xff00ffff,
    GAINSBORO: 0xdcdcdcff,
    GHOSTWHITE: 0xf8f8ffff,
    GOLD: 0xffd700ff,
    GOLDENROD: 0xdaa520ff,
    GRAY: 0x808080ff,
    GREEN: 0x008000ff,
    GREENYELLOW: 0xadff2fff,
    GREY: 0x808080ff,
    HONEYDEW: 0xf0fff0ff,
    HOTPINK: 0xff69b4ff,
    INDIANRED: 0xcd5c5cff,
    INDIGO: 0x4b0082ff,
    IVORY: 0xfffff0ff,
    KHAKI: 0xf0e68cff,
    LAVENDER: 0xe6e6faff,
    LAVENDERBLUSH: 0xfff0f5ff,
    LAWNGREEN: 0x7cfc00ff,
    LEMONCHIFFON: 0xfffacdff,
    LIGHTBLUE: 0xadd8e6ff,
    LIGHTCORAL: 0xf08080ff,
    LIGHTCYAN: 0xe0ffffff,
    LIGHTGOLDENRODYELLOW: 0xfafad2ff,
    LIGHTGRAY: 0xd3d3d3ff,
    LIGHTGREEN: 0x90ee90ff,
    LIGHTGREY: 0xd3d3d3ff,
    LIGHTPINK: 0xffb6c1ff,
    LIGHTSALMON: 0xffa07aff,
    LIGHTSEAGREEN: 0x20b2aaff,
    LIGHTSKYBLUE: 0x87cefaff,
    LIGHTSLATEGRAY: 0x778899ff,
    LIGHTSLATEGREY: 0x778899ff,
    LIGHTSTEELBLUE: 0xb0c4deff,
    LIGHTYELLOW: 0xffffe0ff,
    LIME: 0x00ff00ff,
    LIMEGREEN: 0x32cd32ff,
    LINEN: 0xfaf0e6ff,
    MAGENTA: 0xff00ffff,
    MAROON: 0x800000ff,
    MEDIUMAQUAMARINE: 0x66cdaaff,
    MEDIUMBLUE: 0x0000cdff,
    MEDIUMORCHID: 0xba55d3ff,
    MEDIUMPURPLE: 0x9370dbff,
    MEDIUMSEAGREEN: 0x3cb371ff,
    MEDIUMSLATEBLUE: 0x7b68eeff,
    MEDIUMSPRINGGREEN: 0x00fa9aff,
    MEDIUMTURQUOISE: 0x48d1ccff,
    MEDIUMVIOLETRED: 0xc71585ff,
    MIDNIGHTBLUE: 0x191970ff,
    MINTCREAM: 0xf5fffaff,
    MISTYROSE: 0xffe4e1ff,
    MOCCASIN: 0xffe4b5ff,
    NAVAJOWHITE: 0xffdeadff,
    NAVY: 0x000080ff,
    OLDLACE: 0xfdf5e6ff,
    OLIVE: 0x808000ff,
    OLIVEDRAB: 0x6b8e23ff,
    ORANGE: 0xffa500ff,
    ORANGERED: 0xff4500ff,
    ORCHID: 0xda70d6ff,
    PALEGOLDENROD: 0xeee8aaff,
    PALEGREEN: 0x98fb98ff,
    PALETURQUOISE: 0xafeeeeff,
    PALEVIOLETRED: 0xdb7093ff,
    PAPAYAWHIP: 0xffefd5ff,
    PEACHPUFF: 0xffdab9ff,
    PERU: 0xcd853fff,
    PINK: 0xffc0cbff,
    PLUM: 0xdda0ddff,
    POWDERBLUE: 0xb0e0e6ff,
    PURPLE: 0x800080ff,
    REBECCAPURPLE: 0x663399ff,
    RED: 0xff0000ff,
    ROSYBROWN: 0xbc8f8fff,
    ROYALBLUE: 0x4169e1ff,
    SADDLEBROWN: 0x8b4513ff,
    SALMON: 0xfa8072ff,
    SANDYBROWN: 0xf4a460ff,
    SEAGREEN: 0x2e8b57ff,
    SEASHELL: 0xfff5eeff,
    SIENNA: 0xa0522dff,
    SILVER: 0xc0c0c0ff,
    SKYBLUE: 0x87ceebff,
    SLATEBLUE: 0x6a5acdff,
    SLATEGRAY: 0x708090ff,
    SLATEGREY: 0x708090ff,
    SNOW: 0xfffafaff,
    SPRINGGREEN: 0x00ff7fff,
    STEELBLUE: 0x4682b4ff,
    TAN: 0xd2b48cff,
    TEAL: 0x008080ff,
    THISTLE: 0xd8bfd8ff,
    TOMATO: 0xff6347ff,
    TRANSPARENT: 0x00000000,
    TURQUOISE: 0x40e0d0ff,
    VIOLET: 0xee82eeff,
    WHEAT: 0xf5deb3ff,
    WHITE: 0xffffffff,
    WHITESMOKE: 0xf5f5f5ff,
    YELLOW: 0xffff00ff,
    YELLOWGREEN: 0x9acd32ff
  };
  var backgroundClip = {
    name: 'background-clip',
    initialValue: 'border-box',
    prefix: false,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      return tokens.map(function (token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case 'padding-box':
              return 1 /* PADDING_BOX */;
            case 'content-box':
              return 2 /* CONTENT_BOX */;
          }
        }
        return 0 /* BORDER_BOX */;
      });
    }
  };
  var backgroundColor = {
    name: "background-color",
    initialValue: 'transparent',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'color'
  };
  var parseColorStop = function parseColorStop(context, args) {
    var color = color$1.parse(context, args[0]);
    var stop = args[1];
    return stop && isLengthPercentage(stop) ? {
      color: color,
      stop: stop
    } : {
      color: color,
      stop: null
    };
  };
  var processColorStops = function processColorStops(stops, lineLength) {
    var first = stops[0];
    var last = stops[stops.length - 1];
    if (first.stop === null) {
      first.stop = ZERO_LENGTH;
    }
    if (last.stop === null) {
      last.stop = HUNDRED_PERCENT;
    }
    var processStops = [];
    var previous = 0;
    for (var i = 0; i < stops.length; i++) {
      var stop_1 = stops[i].stop;
      if (stop_1 !== null) {
        var absoluteValue = getAbsoluteValue(stop_1, lineLength);
        if (absoluteValue > previous) {
          processStops.push(absoluteValue);
        } else {
          processStops.push(previous);
        }
        previous = absoluteValue;
      } else {
        processStops.push(null);
      }
    }
    var gapBegin = null;
    for (var i = 0; i < processStops.length; i++) {
      var stop_2 = processStops[i];
      if (stop_2 === null) {
        if (gapBegin === null) {
          gapBegin = i;
        }
      } else if (gapBegin !== null) {
        var gapLength = i - gapBegin;
        var beforeGap = processStops[gapBegin - 1];
        var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
        for (var g = 1; g <= gapLength; g++) {
          processStops[gapBegin + g - 1] = gapValue * g;
        }
        gapBegin = null;
      }
    }
    return stops.map(function (_a, i) {
      var color = _a.color;
      return {
        color: color,
        stop: Math.max(Math.min(1, processStops[i] / lineLength), 0)
      };
    });
  };
  var getAngleFromCorner = function getAngleFromCorner(corner, width, height) {
    var centerX = width / 2;
    var centerY = height / 2;
    var x = getAbsoluteValue(corner[0], width) - centerX;
    var y = centerY - getAbsoluteValue(corner[1], height);
    return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
  };
  var calculateGradientDirection = function calculateGradientDirection(angle, width, height) {
    var radian = typeof angle === 'number' ? angle : getAngleFromCorner(angle, width, height);
    var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var halfLineLength = lineLength / 2;
    var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
    var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
    return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
  };
  var distance = function distance(a, b) {
    return Math.sqrt(a * a + b * b);
  };
  var findCorner = function findCorner(width, height, x, y, closest) {
    var corners = [[0, 0], [0, height], [width, 0], [width, height]];
    return corners.reduce(function (stat, corner) {
      var cx = corner[0],
        cy = corner[1];
      var d = distance(x - cx, y - cy);
      if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
        return {
          optimumCorner: corner,
          optimumDistance: d
        };
      }
      return stat;
    }, {
      optimumDistance: closest ? Infinity : -Infinity,
      optimumCorner: null
    }).optimumCorner;
  };
  var calculateRadius = function calculateRadius(gradient, x, y, width, height) {
    var rx = 0;
    var ry = 0;
    switch (gradient.size) {
      case 0 /* CLOSEST_SIDE */:
        // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
        // If the shape is an ellipse, it exactly meets the closest side in each dimension.
        if (gradient.shape === 0 /* CIRCLE */) {
          rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
        } else if (gradient.shape === 1 /* ELLIPSE */) {
          rx = Math.min(Math.abs(x), Math.abs(x - width));
          ry = Math.min(Math.abs(y), Math.abs(y - height));
        }
        break;
      case 2 /* CLOSEST_CORNER */:
        // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
        // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
        if (gradient.shape === 0 /* CIRCLE */) {
          rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
        } else if (gradient.shape === 1 /* ELLIPSE */) {
          // Compute the ratio ry/rx (which is to be the same as for "closest-side")
          var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
          var _a = findCorner(width, height, x, y, true),
            cx = _a[0],
            cy = _a[1];
          rx = distance(cx - x, (cy - y) / c);
          ry = c * rx;
        }
        break;
      case 1 /* FARTHEST_SIDE */:
        // Same as closest-side, except the ending shape is sized based on the farthest side(s)
        if (gradient.shape === 0 /* CIRCLE */) {
          rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
        } else if (gradient.shape === 1 /* ELLIPSE */) {
          rx = Math.max(Math.abs(x), Math.abs(x - width));
          ry = Math.max(Math.abs(y), Math.abs(y - height));
        }
        break;
      case 3 /* FARTHEST_CORNER */:
        // Same as closest-corner, except the ending shape is sized based on the farthest corner.
        // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
        if (gradient.shape === 0 /* CIRCLE */) {
          rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
        } else if (gradient.shape === 1 /* ELLIPSE */) {
          // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
          var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
          var _b = findCorner(width, height, x, y, false),
            cx = _b[0],
            cy = _b[1];
          rx = distance(cx - x, (cy - y) / c);
          ry = c * rx;
        }
        break;
    }
    if (Array.isArray(gradient.size)) {
      rx = getAbsoluteValue(gradient.size[0], width);
      ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
    }
    return [rx, ry];
  };
  var linearGradient = function linearGradient(context, tokens) {
    var angle$1 = deg(180);
    var stops = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
      if (i === 0) {
        var firstToken = arg[0];
        if (firstToken.type === 20 /* IDENT_TOKEN */ && firstToken.value === 'to') {
          angle$1 = parseNamedSide(arg);
          return;
        } else if (isAngle(firstToken)) {
          angle$1 = angle.parse(context, firstToken);
          return;
        }
      }
      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    });
    return {
      angle: angle$1,
      stops: stops,
      type: 1 /* LINEAR_GRADIENT */
    };
  };
  var prefixLinearGradient = function prefixLinearGradient(context, tokens) {
    var angle$1 = deg(180);
    var stops = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
      if (i === 0) {
        var firstToken = arg[0];
        if (firstToken.type === 20 /* IDENT_TOKEN */ && ['top', 'left', 'right', 'bottom'].indexOf(firstToken.value) !== -1) {
          angle$1 = parseNamedSide(arg);
          return;
        } else if (isAngle(firstToken)) {
          angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
          return;
        }
      }
      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    });
    return {
      angle: angle$1,
      stops: stops,
      type: 1 /* LINEAR_GRADIENT */
    };
  };
  var webkitGradient = function webkitGradient(context, tokens) {
    var angle = deg(180);
    var stops = [];
    var type = 1 /* LINEAR_GRADIENT */;
    var shape = 0 /* CIRCLE */;
    var size = 3 /* FARTHEST_CORNER */;
    var position = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
      var firstToken = arg[0];
      if (i === 0) {
        if (isIdentToken(firstToken) && firstToken.value === 'linear') {
          type = 1 /* LINEAR_GRADIENT */;
          return;
        } else if (isIdentToken(firstToken) && firstToken.value === 'radial') {
          type = 2 /* RADIAL_GRADIENT */;
          return;
        }
      }
      if (firstToken.type === 18 /* FUNCTION */) {
        if (firstToken.name === 'from') {
          var color = color$1.parse(context, firstToken.values[0]);
          stops.push({
            stop: ZERO_LENGTH,
            color: color
          });
        } else if (firstToken.name === 'to') {
          var color = color$1.parse(context, firstToken.values[0]);
          stops.push({
            stop: HUNDRED_PERCENT,
            color: color
          });
        } else if (firstToken.name === 'color-stop') {
          var values = firstToken.values.filter(nonFunctionArgSeparator);
          if (values.length === 2) {
            var color = color$1.parse(context, values[1]);
            var stop_1 = values[0];
            if (isNumberToken(stop_1)) {
              stops.push({
                stop: {
                  type: 16 /* PERCENTAGE_TOKEN */,
                  number: stop_1.number * 100,
                  flags: stop_1.flags
                },
                color: color
              });
            }
          }
        }
      }
    });
    return type === 1 /* LINEAR_GRADIENT */ ? {
      angle: (angle + deg(180)) % deg(360),
      stops: stops,
      type: type
    } : {
      size: size,
      shape: shape,
      stops: stops,
      position: position,
      type: type
    };
  };
  var CLOSEST_SIDE = 'closest-side';
  var FARTHEST_SIDE = 'farthest-side';
  var CLOSEST_CORNER = 'closest-corner';
  var FARTHEST_CORNER = 'farthest-corner';
  var CIRCLE = 'circle';
  var ELLIPSE = 'ellipse';
  var COVER = 'cover';
  var CONTAIN = 'contain';
  var radialGradient = function radialGradient(context, tokens) {
    var shape = 0 /* CIRCLE */;
    var size = 3 /* FARTHEST_CORNER */;
    var stops = [];
    var position = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
      var isColorStop = true;
      if (i === 0) {
        var isAtPosition_1 = false;
        isColorStop = arg.reduce(function (acc, token) {
          if (isAtPosition_1) {
            if (isIdentToken(token)) {
              switch (token.value) {
                case 'center':
                  position.push(FIFTY_PERCENT);
                  return acc;
                case 'top':
                case 'left':
                  position.push(ZERO_LENGTH);
                  return acc;
                case 'right':
                case 'bottom':
                  position.push(HUNDRED_PERCENT);
                  return acc;
              }
            } else if (isLengthPercentage(token) || isLength(token)) {
              position.push(token);
            }
          } else if (isIdentToken(token)) {
            switch (token.value) {
              case CIRCLE:
                shape = 0 /* CIRCLE */;
                return false;
              case ELLIPSE:
                shape = 1 /* ELLIPSE */;
                return false;
              case 'at':
                isAtPosition_1 = true;
                return false;
              case CLOSEST_SIDE:
                size = 0 /* CLOSEST_SIDE */;
                return false;
              case COVER:
              case FARTHEST_SIDE:
                size = 1 /* FARTHEST_SIDE */;
                return false;
              case CONTAIN:
              case CLOSEST_CORNER:
                size = 2 /* CLOSEST_CORNER */;
                return false;
              case FARTHEST_CORNER:
                size = 3 /* FARTHEST_CORNER */;
                return false;
            }
          } else if (isLength(token) || isLengthPercentage(token)) {
            if (!Array.isArray(size)) {
              size = [];
            }
            size.push(token);
            return false;
          }
          return acc;
        }, isColorStop);
      }
      if (isColorStop) {
        var colorStop = parseColorStop(context, arg);
        stops.push(colorStop);
      }
    });
    return {
      size: size,
      shape: shape,
      stops: stops,
      position: position,
      type: 2 /* RADIAL_GRADIENT */
    };
  };
  var prefixRadialGradient = function prefixRadialGradient(context, tokens) {
    var shape = 0 /* CIRCLE */;
    var size = 3 /* FARTHEST_CORNER */;
    var stops = [];
    var position = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
      var isColorStop = true;
      if (i === 0) {
        isColorStop = arg.reduce(function (acc, token) {
          if (isIdentToken(token)) {
            switch (token.value) {
              case 'center':
                position.push(FIFTY_PERCENT);
                return false;
              case 'top':
              case 'left':
                position.push(ZERO_LENGTH);
                return false;
              case 'right':
              case 'bottom':
                position.push(HUNDRED_PERCENT);
                return false;
            }
          } else if (isLengthPercentage(token) || isLength(token)) {
            position.push(token);
            return false;
          }
          return acc;
        }, isColorStop);
      } else if (i === 1) {
        isColorStop = arg.reduce(function (acc, token) {
          if (isIdentToken(token)) {
            switch (token.value) {
              case CIRCLE:
                shape = 0 /* CIRCLE */;
                return false;
              case ELLIPSE:
                shape = 1 /* ELLIPSE */;
                return false;
              case CONTAIN:
              case CLOSEST_SIDE:
                size = 0 /* CLOSEST_SIDE */;
                return false;
              case FARTHEST_SIDE:
                size = 1 /* FARTHEST_SIDE */;
                return false;
              case CLOSEST_CORNER:
                size = 2 /* CLOSEST_CORNER */;
                return false;
              case COVER:
              case FARTHEST_CORNER:
                size = 3 /* FARTHEST_CORNER */;
                return false;
            }
          } else if (isLength(token) || isLengthPercentage(token)) {
            if (!Array.isArray(size)) {
              size = [];
            }
            size.push(token);
            return false;
          }
          return acc;
        }, isColorStop);
      }
      if (isColorStop) {
        var colorStop = parseColorStop(context, arg);
        stops.push(colorStop);
      }
    });
    return {
      size: size,
      shape: shape,
      stops: stops,
      position: position,
      type: 2 /* RADIAL_GRADIENT */
    };
  };
  var isLinearGradient = function isLinearGradient(background) {
    return background.type === 1 /* LINEAR_GRADIENT */;
  };
  var isRadialGradient = function isRadialGradient(background) {
    return background.type === 2 /* RADIAL_GRADIENT */;
  };
  var image = {
    name: 'image',
    parse: function parse(context, value) {
      if (value.type === 22 /* URL_TOKEN */) {
        var image_1 = {
          url: value.value,
          type: 0 /* URL */
        };
        context.cache.addImage(value.value);
        return image_1;
      }
      if (value.type === 18 /* FUNCTION */) {
        var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
        if (typeof imageFunction === 'undefined') {
          throw new Error("Attempting to parse an unsupported image function \"" + value.name + "\"");
        }
        return imageFunction(context, value.values);
      }
      throw new Error("Unsupported image type " + value.type);
    }
  };
  function isSupportedImage(value) {
    return !(value.type === 20 /* IDENT_TOKEN */ && value.value === 'none') && (value.type !== 18 /* FUNCTION */ || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
  }
  var SUPPORTED_IMAGE_FUNCTIONS = {
    'linear-gradient': linearGradient,
    '-moz-linear-gradient': prefixLinearGradient,
    '-ms-linear-gradient': prefixLinearGradient,
    '-o-linear-gradient': prefixLinearGradient,
    '-webkit-linear-gradient': prefixLinearGradient,
    'radial-gradient': radialGradient,
    '-moz-radial-gradient': prefixRadialGradient,
    '-ms-radial-gradient': prefixRadialGradient,
    '-o-radial-gradient': prefixRadialGradient,
    '-webkit-radial-gradient': prefixRadialGradient,
    '-webkit-gradient': webkitGradient
  };
  var backgroundImage = {
    name: 'background-image',
    initialValue: 'none',
    type: 1 /* LIST */,
    prefix: false,
    parse: function parse(context, tokens) {
      if (tokens.length === 0) {
        return [];
      }
      var first = tokens[0];
      if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
        return [];
      }
      return tokens.filter(function (value) {
        return nonFunctionArgSeparator(value) && isSupportedImage(value);
      }).map(function (value) {
        return image.parse(context, value);
      });
    }
  };
  var backgroundOrigin = {
    name: 'background-origin',
    initialValue: 'border-box',
    prefix: false,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      return tokens.map(function (token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case 'padding-box':
              return 1 /* PADDING_BOX */;
            case 'content-box':
              return 2 /* CONTENT_BOX */;
          }
        }
        return 0 /* BORDER_BOX */;
      });
    }
  };
  var backgroundPosition = {
    name: 'background-position',
    initialValue: '0% 0%',
    type: 1 /* LIST */,
    prefix: false,
    parse: function parse(_context, tokens) {
      return parseFunctionArgs(tokens).map(function (values) {
        return values.filter(isLengthPercentage);
      }).map(parseLengthPercentageTuple);
    }
  };
  var backgroundRepeat = {
    name: 'background-repeat',
    initialValue: 'repeat',
    prefix: false,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      return parseFunctionArgs(tokens).map(function (values) {
        return values.filter(isIdentToken).map(function (token) {
          return token.value;
        }).join(' ');
      }).map(parseBackgroundRepeat);
    }
  };
  var parseBackgroundRepeat = function parseBackgroundRepeat(value) {
    switch (value) {
      case 'no-repeat':
        return 1 /* NO_REPEAT */;
      case 'repeat-x':
      case 'repeat no-repeat':
        return 2 /* REPEAT_X */;
      case 'repeat-y':
      case 'no-repeat repeat':
        return 3 /* REPEAT_Y */;
      case 'repeat':
      default:
        return 0 /* REPEAT */;
    }
  };
  var BACKGROUND_SIZE;
  (function (BACKGROUND_SIZE) {
    BACKGROUND_SIZE["AUTO"] = "auto";
    BACKGROUND_SIZE["CONTAIN"] = "contain";
    BACKGROUND_SIZE["COVER"] = "cover";
  })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
  var backgroundSize = {
    name: 'background-size',
    initialValue: '0',
    prefix: false,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      return parseFunctionArgs(tokens).map(function (values) {
        return values.filter(isBackgroundSizeInfoToken);
      });
    }
  };
  var isBackgroundSizeInfoToken = function isBackgroundSizeInfoToken(value) {
    return isIdentToken(value) || isLengthPercentage(value);
  };
  var borderColorForSide = function borderColorForSide(side) {
    return {
      name: "border-" + side + "-color",
      initialValue: 'transparent',
      prefix: false,
      type: 3 /* TYPE_VALUE */,
      format: 'color'
    };
  };
  var borderTopColor = borderColorForSide('top');
  var borderRightColor = borderColorForSide('right');
  var borderBottomColor = borderColorForSide('bottom');
  var borderLeftColor = borderColorForSide('left');
  var borderRadiusForSide = function borderRadiusForSide(side) {
    return {
      name: "border-radius-" + side,
      initialValue: '0 0',
      prefix: false,
      type: 1 /* LIST */,
      parse: function parse(_context, tokens) {
        return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
      }
    };
  };
  var borderTopLeftRadius = borderRadiusForSide('top-left');
  var borderTopRightRadius = borderRadiusForSide('top-right');
  var borderBottomRightRadius = borderRadiusForSide('bottom-right');
  var borderBottomLeftRadius = borderRadiusForSide('bottom-left');
  var borderStyleForSide = function borderStyleForSide(side) {
    return {
      name: "border-" + side + "-style",
      initialValue: 'solid',
      prefix: false,
      type: 2 /* IDENT_VALUE */,
      parse: function parse(_context, style) {
        switch (style) {
          case 'none':
            return 0 /* NONE */;
          case 'dashed':
            return 2 /* DASHED */;
          case 'dotted':
            return 3 /* DOTTED */;
          case 'double':
            return 4 /* DOUBLE */;
        }
        return 1 /* SOLID */;
      }
    };
  };
  var borderTopStyle = borderStyleForSide('top');
  var borderRightStyle = borderStyleForSide('right');
  var borderBottomStyle = borderStyleForSide('bottom');
  var borderLeftStyle = borderStyleForSide('left');
  var borderWidthForSide = function borderWidthForSide(side) {
    return {
      name: "border-" + side + "-width",
      initialValue: '0',
      type: 0 /* VALUE */,
      prefix: false,
      parse: function parse(_context, token) {
        if (isDimensionToken(token)) {
          return token.number;
        }
        return 0;
      }
    };
  };
  var borderTopWidth = borderWidthForSide('top');
  var borderRightWidth = borderWidthForSide('right');
  var borderBottomWidth = borderWidthForSide('bottom');
  var borderLeftWidth = borderWidthForSide('left');
  var color = {
    name: "color",
    initialValue: 'transparent',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'color'
  };
  var direction = {
    name: 'direction',
    initialValue: 'ltr',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, direction) {
      switch (direction) {
        case 'rtl':
          return 1 /* RTL */;
        case 'ltr':
        default:
          return 0 /* LTR */;
      }
    }
  };
  var display = {
    name: 'display',
    initialValue: 'inline-block',
    prefix: false,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      return tokens.filter(isIdentToken).reduce(function (bit, token) {
        return bit | parseDisplayValue(token.value);
      }, 0 /* NONE */);
    }
  };
  var parseDisplayValue = function parseDisplayValue(display) {
    switch (display) {
      case 'block':
      case '-webkit-box':
        return 2 /* BLOCK */;
      case 'inline':
        return 4 /* INLINE */;
      case 'run-in':
        return 8 /* RUN_IN */;
      case 'flow':
        return 16 /* FLOW */;
      case 'flow-root':
        return 32 /* FLOW_ROOT */;
      case 'table':
        return 64 /* TABLE */;
      case 'flex':
      case '-webkit-flex':
        return 128 /* FLEX */;
      case 'grid':
      case '-ms-grid':
        return 256 /* GRID */;
      case 'ruby':
        return 512 /* RUBY */;
      case 'subgrid':
        return 1024 /* SUBGRID */;
      case 'list-item':
        return 2048 /* LIST_ITEM */;
      case 'table-row-group':
        return 4096 /* TABLE_ROW_GROUP */;
      case 'table-header-group':
        return 8192 /* TABLE_HEADER_GROUP */;
      case 'table-footer-group':
        return 16384 /* TABLE_FOOTER_GROUP */;
      case 'table-row':
        return 32768 /* TABLE_ROW */;
      case 'table-cell':
        return 65536 /* TABLE_CELL */;
      case 'table-column-group':
        return 131072 /* TABLE_COLUMN_GROUP */;
      case 'table-column':
        return 262144 /* TABLE_COLUMN */;
      case 'table-caption':
        return 524288 /* TABLE_CAPTION */;
      case 'ruby-base':
        return 1048576 /* RUBY_BASE */;
      case 'ruby-text':
        return 2097152 /* RUBY_TEXT */;
      case 'ruby-base-container':
        return 4194304 /* RUBY_BASE_CONTAINER */;
      case 'ruby-text-container':
        return 8388608 /* RUBY_TEXT_CONTAINER */;
      case 'contents':
        return 16777216 /* CONTENTS */;
      case 'inline-block':
        return 33554432 /* INLINE_BLOCK */;
      case 'inline-list-item':
        return 67108864 /* INLINE_LIST_ITEM */;
      case 'inline-table':
        return 134217728 /* INLINE_TABLE */;
      case 'inline-flex':
        return 268435456 /* INLINE_FLEX */;
      case 'inline-grid':
        return 536870912 /* INLINE_GRID */;
    }
    return 0 /* NONE */;
  };
  var _float = {
    name: 'float',
    initialValue: 'none',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, _float2) {
      switch (_float2) {
        case 'left':
          return 1 /* LEFT */;
        case 'right':
          return 2 /* RIGHT */;
        case 'inline-start':
          return 3 /* INLINE_START */;
        case 'inline-end':
          return 4 /* INLINE_END */;
      }
      return 0 /* NONE */;
    }
  };
  var letterSpacing = {
    name: 'letter-spacing',
    initialValue: '0',
    prefix: false,
    type: 0 /* VALUE */,
    parse: function parse(_context, token) {
      if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'normal') {
        return 0;
      }
      if (token.type === 17 /* NUMBER_TOKEN */) {
        return token.number;
      }
      if (token.type === 15 /* DIMENSION_TOKEN */) {
        return token.number;
      }
      return 0;
    }
  };
  var LINE_BREAK;
  (function (LINE_BREAK) {
    LINE_BREAK["NORMAL"] = "normal";
    LINE_BREAK["STRICT"] = "strict";
  })(LINE_BREAK || (LINE_BREAK = {}));
  var lineBreak = {
    name: 'line-break',
    initialValue: 'normal',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, lineBreak) {
      switch (lineBreak) {
        case 'strict':
          return LINE_BREAK.STRICT;
        case 'normal':
        default:
          return LINE_BREAK.NORMAL;
      }
    }
  };
  var lineHeight = {
    name: 'line-height',
    initialValue: 'normal',
    prefix: false,
    type: 4 /* TOKEN_VALUE */
  };
  var computeLineHeight = function computeLineHeight(token, fontSize) {
    if (isIdentToken(token) && token.value === 'normal') {
      return 1.2 * fontSize;
    } else if (token.type === 17 /* NUMBER_TOKEN */) {
      return fontSize * token.number;
    } else if (isLengthPercentage(token)) {
      return getAbsoluteValue(token, fontSize);
    }
    return fontSize;
  };
  var listStyleImage = {
    name: 'list-style-image',
    initialValue: 'none',
    type: 0 /* VALUE */,
    prefix: false,
    parse: function parse(context, token) {
      if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
        return null;
      }
      return image.parse(context, token);
    }
  };
  var listStylePosition = {
    name: 'list-style-position',
    initialValue: 'outside',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, position) {
      switch (position) {
        case 'inside':
          return 0 /* INSIDE */;
        case 'outside':
        default:
          return 1 /* OUTSIDE */;
      }
    }
  };
  var listStyleType = {
    name: 'list-style-type',
    initialValue: 'none',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, type) {
      switch (type) {
        case 'disc':
          return 0 /* DISC */;
        case 'circle':
          return 1 /* CIRCLE */;
        case 'square':
          return 2 /* SQUARE */;
        case 'decimal':
          return 3 /* DECIMAL */;
        case 'cjk-decimal':
          return 4 /* CJK_DECIMAL */;
        case 'decimal-leading-zero':
          return 5 /* DECIMAL_LEADING_ZERO */;
        case 'lower-roman':
          return 6 /* LOWER_ROMAN */;
        case 'upper-roman':
          return 7 /* UPPER_ROMAN */;
        case 'lower-greek':
          return 8 /* LOWER_GREEK */;
        case 'lower-alpha':
          return 9 /* LOWER_ALPHA */;
        case 'upper-alpha':
          return 10 /* UPPER_ALPHA */;
        case 'arabic-indic':
          return 11 /* ARABIC_INDIC */;
        case 'armenian':
          return 12 /* ARMENIAN */;
        case 'bengali':
          return 13 /* BENGALI */;
        case 'cambodian':
          return 14 /* CAMBODIAN */;
        case 'cjk-earthly-branch':
          return 15 /* CJK_EARTHLY_BRANCH */;
        case 'cjk-heavenly-stem':
          return 16 /* CJK_HEAVENLY_STEM */;
        case 'cjk-ideographic':
          return 17 /* CJK_IDEOGRAPHIC */;
        case 'devanagari':
          return 18 /* DEVANAGARI */;
        case 'ethiopic-numeric':
          return 19 /* ETHIOPIC_NUMERIC */;
        case 'georgian':
          return 20 /* GEORGIAN */;
        case 'gujarati':
          return 21 /* GUJARATI */;
        case 'gurmukhi':
          return 22 /* GURMUKHI */;
        case 'hebrew':
          return 22 /* HEBREW */;
        case 'hiragana':
          return 23 /* HIRAGANA */;
        case 'hiragana-iroha':
          return 24 /* HIRAGANA_IROHA */;
        case 'japanese-formal':
          return 25 /* JAPANESE_FORMAL */;
        case 'japanese-informal':
          return 26 /* JAPANESE_INFORMAL */;
        case 'kannada':
          return 27 /* KANNADA */;
        case 'katakana':
          return 28 /* KATAKANA */;
        case 'katakana-iroha':
          return 29 /* KATAKANA_IROHA */;
        case 'khmer':
          return 30 /* KHMER */;
        case 'korean-hangul-formal':
          return 31 /* KOREAN_HANGUL_FORMAL */;
        case 'korean-hanja-formal':
          return 32 /* KOREAN_HANJA_FORMAL */;
        case 'korean-hanja-informal':
          return 33 /* KOREAN_HANJA_INFORMAL */;
        case 'lao':
          return 34 /* LAO */;
        case 'lower-armenian':
          return 35 /* LOWER_ARMENIAN */;
        case 'malayalam':
          return 36 /* MALAYALAM */;
        case 'mongolian':
          return 37 /* MONGOLIAN */;
        case 'myanmar':
          return 38 /* MYANMAR */;
        case 'oriya':
          return 39 /* ORIYA */;
        case 'persian':
          return 40 /* PERSIAN */;
        case 'simp-chinese-formal':
          return 41 /* SIMP_CHINESE_FORMAL */;
        case 'simp-chinese-informal':
          return 42 /* SIMP_CHINESE_INFORMAL */;
        case 'tamil':
          return 43 /* TAMIL */;
        case 'telugu':
          return 44 /* TELUGU */;
        case 'thai':
          return 45 /* THAI */;
        case 'tibetan':
          return 46 /* TIBETAN */;
        case 'trad-chinese-formal':
          return 47 /* TRAD_CHINESE_FORMAL */;
        case 'trad-chinese-informal':
          return 48 /* TRAD_CHINESE_INFORMAL */;
        case 'upper-armenian':
          return 49 /* UPPER_ARMENIAN */;
        case 'disclosure-open':
          return 50 /* DISCLOSURE_OPEN */;
        case 'disclosure-closed':
          return 51 /* DISCLOSURE_CLOSED */;
        case 'none':
        default:
          return -1 /* NONE */;
      }
    }
  };
  var marginForSide = function marginForSide(side) {
    return {
      name: "margin-" + side,
      initialValue: '0',
      prefix: false,
      type: 4 /* TOKEN_VALUE */
    };
  };
  var marginTop = marginForSide('top');
  var marginRight = marginForSide('right');
  var marginBottom = marginForSide('bottom');
  var marginLeft = marginForSide('left');
  var overflow = {
    name: 'overflow',
    initialValue: 'visible',
    prefix: false,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      return tokens.filter(isIdentToken).map(function (overflow) {
        switch (overflow.value) {
          case 'hidden':
            return 1 /* HIDDEN */;
          case 'scroll':
            return 2 /* SCROLL */;
          case 'clip':
            return 3 /* CLIP */;
          case 'auto':
            return 4 /* AUTO */;
          case 'visible':
          default:
            return 0 /* VISIBLE */;
        }
      });
    }
  };
  var overflowWrap = {
    name: 'overflow-wrap',
    initialValue: 'normal',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, overflow) {
      switch (overflow) {
        case 'break-word':
          return "break-word" /* BREAK_WORD */;
        case 'normal':
        default:
          return "normal" /* NORMAL */;
      }
    }
  };
  var paddingForSide = function paddingForSide(side) {
    return {
      name: "padding-" + side,
      initialValue: '0',
      prefix: false,
      type: 3 /* TYPE_VALUE */,
      format: 'length-percentage'
    };
  };
  var paddingTop = paddingForSide('top');
  var paddingRight = paddingForSide('right');
  var paddingBottom = paddingForSide('bottom');
  var paddingLeft = paddingForSide('left');
  var textAlign = {
    name: 'text-align',
    initialValue: 'left',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, textAlign) {
      switch (textAlign) {
        case 'right':
          return 2 /* RIGHT */;
        case 'center':
        case 'justify':
          return 1 /* CENTER */;
        case 'left':
        default:
          return 0 /* LEFT */;
      }
    }
  };
  var position = {
    name: 'position',
    initialValue: 'static',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, position) {
      switch (position) {
        case 'relative':
          return 1 /* RELATIVE */;
        case 'absolute':
          return 2 /* ABSOLUTE */;
        case 'fixed':
          return 3 /* FIXED */;
        case 'sticky':
          return 4 /* STICKY */;
      }
      return 0 /* STATIC */;
    }
  };
  var textShadow = {
    name: 'text-shadow',
    initialValue: 'none',
    type: 1 /* LIST */,
    prefix: false,
    parse: function parse(context, tokens) {
      if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
        return [];
      }
      return parseFunctionArgs(tokens).map(function (values) {
        var shadow = {
          color: COLORS.TRANSPARENT,
          offsetX: ZERO_LENGTH,
          offsetY: ZERO_LENGTH,
          blur: ZERO_LENGTH
        };
        var c = 0;
        for (var i = 0; i < values.length; i++) {
          var token = values[i];
          if (isLength(token)) {
            if (c === 0) {
              shadow.offsetX = token;
            } else if (c === 1) {
              shadow.offsetY = token;
            } else {
              shadow.blur = token;
            }
            c++;
          } else {
            shadow.color = color$1.parse(context, token);
          }
        }
        return shadow;
      });
    }
  };
  var textTransform = {
    name: 'text-transform',
    initialValue: 'none',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, textTransform) {
      switch (textTransform) {
        case 'uppercase':
          return 2 /* UPPERCASE */;
        case 'lowercase':
          return 1 /* LOWERCASE */;
        case 'capitalize':
          return 3 /* CAPITALIZE */;
      }
      return 0 /* NONE */;
    }
  };
  var transform$1 = {
    name: 'transform',
    initialValue: 'none',
    prefix: true,
    type: 0 /* VALUE */,
    parse: function parse(_context, token) {
      if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
        return null;
      }
      if (token.type === 18 /* FUNCTION */) {
        var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
        if (typeof transformFunction === 'undefined') {
          throw new Error("Attempting to parse an unsupported transform function \"" + token.name + "\"");
        }
        return transformFunction(token.values);
      }
      return null;
    }
  };
  var matrix = function matrix(args) {
    var values = args.filter(function (arg) {
      return arg.type === 17 /* NUMBER_TOKEN */;
    }).map(function (arg) {
      return arg.number;
    });
    return values.length === 6 ? values : null;
  };
  // doesn't support 3D transforms at the moment
  var matrix3d = function matrix3d(args) {
    var values = args.filter(function (arg) {
      return arg.type === 17 /* NUMBER_TOKEN */;
    }).map(function (arg) {
      return arg.number;
    });
    var a1 = values[0],
      b1 = values[1];
    values[2];
    values[3];
    var a2 = values[4],
      b2 = values[5];
    values[6];
    values[7];
    values[8];
    values[9];
    values[10];
    values[11];
    var a4 = values[12],
      b4 = values[13];
    values[14];
    values[15];
    return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
  };
  var SUPPORTED_TRANSFORM_FUNCTIONS = {
    matrix: matrix,
    matrix3d: matrix3d
  };
  var DEFAULT_VALUE = {
    type: 16 /* PERCENTAGE_TOKEN */,
    number: 50,
    flags: FLAG_INTEGER
  };
  var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
  var transformOrigin = {
    name: 'transform-origin',
    initialValue: '50% 50%',
    prefix: true,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      var origins = tokens.filter(isLengthPercentage);
      if (origins.length !== 2) {
        return DEFAULT;
      }
      return [origins[0], origins[1]];
    }
  };
  var visibility = {
    name: 'visible',
    initialValue: 'none',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, visibility) {
      switch (visibility) {
        case 'hidden':
          return 1 /* HIDDEN */;
        case 'collapse':
          return 2 /* COLLAPSE */;
        case 'visible':
        default:
          return 0 /* VISIBLE */;
      }
    }
  };
  var WORD_BREAK;
  (function (WORD_BREAK) {
    WORD_BREAK["NORMAL"] = "normal";
    WORD_BREAK["BREAK_ALL"] = "break-all";
    WORD_BREAK["KEEP_ALL"] = "keep-all";
  })(WORD_BREAK || (WORD_BREAK = {}));
  var wordBreak = {
    name: 'word-break',
    initialValue: 'normal',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, wordBreak) {
      switch (wordBreak) {
        case 'break-all':
          return WORD_BREAK.BREAK_ALL;
        case 'keep-all':
          return WORD_BREAK.KEEP_ALL;
        case 'normal':
        default:
          return WORD_BREAK.NORMAL;
      }
    }
  };
  var zIndex = {
    name: 'z-index',
    initialValue: 'auto',
    prefix: false,
    type: 0 /* VALUE */,
    parse: function parse(_context, token) {
      if (token.type === 20 /* IDENT_TOKEN */) {
        return {
          auto: true,
          order: 0
        };
      }
      if (isNumberToken(token)) {
        return {
          auto: false,
          order: token.number
        };
      }
      throw new Error("Invalid z-index number parsed");
    }
  };
  var time = {
    name: 'time',
    parse: function parse(_context, value) {
      if (value.type === 15 /* DIMENSION_TOKEN */) {
        switch (value.unit.toLowerCase()) {
          case 's':
            return 1000 * value.number;
          case 'ms':
            return value.number;
        }
      }
      throw new Error("Unsupported time type");
    }
  };
  var opacity = {
    name: 'opacity',
    initialValue: '1',
    type: 0 /* VALUE */,
    prefix: false,
    parse: function parse(_context, token) {
      if (isNumberToken(token)) {
        return token.number;
      }
      return 1;
    }
  };
  var textDecorationColor = {
    name: "text-decoration-color",
    initialValue: 'transparent',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'color'
  };
  var textDecorationLine = {
    name: 'text-decoration-line',
    initialValue: 'none',
    prefix: false,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      return tokens.filter(isIdentToken).map(function (token) {
        switch (token.value) {
          case 'underline':
            return 1 /* UNDERLINE */;
          case 'overline':
            return 2 /* OVERLINE */;
          case 'line-through':
            return 3 /* LINE_THROUGH */;
          case 'none':
            return 4 /* BLINK */;
        }
        return 0 /* NONE */;
      }).filter(function (line) {
        return line !== 0 /* NONE */;
      });
    }
  };
  var fontFamily = {
    name: "font-family",
    initialValue: '',
    prefix: false,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      var accumulator = [];
      var results = [];
      tokens.forEach(function (token) {
        switch (token.type) {
          case 20 /* IDENT_TOKEN */:
          case 0 /* STRING_TOKEN */:
            accumulator.push(token.value);
            break;
          case 17 /* NUMBER_TOKEN */:
            accumulator.push(token.number.toString());
            break;
          case 4 /* COMMA_TOKEN */:
            results.push(accumulator.join(' '));
            accumulator.length = 0;
            break;
        }
      });
      if (accumulator.length) {
        results.push(accumulator.join(' '));
      }
      return results.map(function (result) {
        return result.indexOf(' ') === -1 ? result : "'" + result + "'";
      });
    }
  };
  var fontSize = {
    name: "font-size",
    initialValue: '0',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'length'
  };
  var fontWeight = {
    name: 'font-weight',
    initialValue: 'normal',
    type: 0 /* VALUE */,
    prefix: false,
    parse: function parse(_context, token) {
      if (isNumberToken(token)) {
        return token.number;
      }
      if (isIdentToken(token)) {
        switch (token.value) {
          case 'bold':
            return 700;
          case 'normal':
          default:
            return 400;
        }
      }
      return 400;
    }
  };
  var fontVariant = {
    name: 'font-variant',
    initialValue: 'none',
    type: 1 /* LIST */,
    prefix: false,
    parse: function parse(_context, tokens) {
      return tokens.filter(isIdentToken).map(function (token) {
        return token.value;
      });
    }
  };
  var fontStyle = {
    name: 'font-style',
    initialValue: 'normal',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function parse(_context, overflow) {
      switch (overflow) {
        case 'oblique':
          return "oblique" /* OBLIQUE */;
        case 'italic':
          return "italic" /* ITALIC */;
        case 'normal':
        default:
          return "normal" /* NORMAL */;
      }
    }
  };
  var contains = function contains(bit, value) {
    return (bit & value) !== 0;
  };
  var content = {
    name: 'content',
    initialValue: 'none',
    type: 1 /* LIST */,
    prefix: false,
    parse: function parse(_context, tokens) {
      if (tokens.length === 0) {
        return [];
      }
      var first = tokens[0];
      if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
        return [];
      }
      return tokens;
    }
  };
  var counterIncrement = {
    name: 'counter-increment',
    initialValue: 'none',
    prefix: true,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      if (tokens.length === 0) {
        return null;
      }
      var first = tokens[0];
      if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
        return null;
      }
      var increments = [];
      var filtered = tokens.filter(nonWhiteSpace);
      for (var i = 0; i < filtered.length; i++) {
        var counter = filtered[i];
        var next = filtered[i + 1];
        if (counter.type === 20 /* IDENT_TOKEN */) {
          var increment = next && isNumberToken(next) ? next.number : 1;
          increments.push({
            counter: counter.value,
            increment: increment
          });
        }
      }
      return increments;
    }
  };
  var counterReset = {
    name: 'counter-reset',
    initialValue: 'none',
    prefix: true,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      if (tokens.length === 0) {
        return [];
      }
      var resets = [];
      var filtered = tokens.filter(nonWhiteSpace);
      for (var i = 0; i < filtered.length; i++) {
        var counter = filtered[i];
        var next = filtered[i + 1];
        if (isIdentToken(counter) && counter.value !== 'none') {
          var reset = next && isNumberToken(next) ? next.number : 0;
          resets.push({
            counter: counter.value,
            reset: reset
          });
        }
      }
      return resets;
    }
  };
  var duration = {
    name: 'duration',
    initialValue: '0s',
    prefix: false,
    type: 1 /* LIST */,
    parse: function parse(context, tokens) {
      return tokens.filter(isDimensionToken).map(function (token) {
        return time.parse(context, token);
      });
    }
  };
  var quotes = {
    name: 'quotes',
    initialValue: 'none',
    prefix: true,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      if (tokens.length === 0) {
        return null;
      }
      var first = tokens[0];
      if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
        return null;
      }
      var quotes = [];
      var filtered = tokens.filter(isStringToken);
      if (filtered.length % 2 !== 0) {
        return null;
      }
      for (var i = 0; i < filtered.length; i += 2) {
        var open_1 = filtered[i].value;
        var close_1 = filtered[i + 1].value;
        quotes.push({
          open: open_1,
          close: close_1
        });
      }
      return quotes;
    }
  };
  var getQuote = function getQuote(quotes, depth, open) {
    if (!quotes) {
      return '';
    }
    var quote = quotes[Math.min(depth, quotes.length - 1)];
    if (!quote) {
      return '';
    }
    return open ? quote.open : quote.close;
  };
  var boxShadow = {
    name: 'box-shadow',
    initialValue: 'none',
    type: 1 /* LIST */,
    prefix: false,
    parse: function parse(context, tokens) {
      if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
        return [];
      }
      return parseFunctionArgs(tokens).map(function (values) {
        var shadow = {
          color: 0x000000ff,
          offsetX: ZERO_LENGTH,
          offsetY: ZERO_LENGTH,
          blur: ZERO_LENGTH,
          spread: ZERO_LENGTH,
          inset: false
        };
        var c = 0;
        for (var i = 0; i < values.length; i++) {
          var token = values[i];
          if (isIdentWithValue(token, 'inset')) {
            shadow.inset = true;
          } else if (isLength(token)) {
            if (c === 0) {
              shadow.offsetX = token;
            } else if (c === 1) {
              shadow.offsetY = token;
            } else if (c === 2) {
              shadow.blur = token;
            } else {
              shadow.spread = token;
            }
            c++;
          } else {
            shadow.color = color$1.parse(context, token);
          }
        }
        return shadow;
      });
    }
  };
  var paintOrder = {
    name: 'paint-order',
    initialValue: 'normal',
    prefix: false,
    type: 1 /* LIST */,
    parse: function parse(_context, tokens) {
      var DEFAULT_VALUE = [0 /* FILL */, 1 /* STROKE */, 2 /* MARKERS */];
      var layers = [];
      tokens.filter(isIdentToken).forEach(function (token) {
        switch (token.value) {
          case 'stroke':
            layers.push(1 /* STROKE */);
            break;
          case 'fill':
            layers.push(0 /* FILL */);
            break;
          case 'markers':
            layers.push(2 /* MARKERS */);
            break;
        }
      });
      DEFAULT_VALUE.forEach(function (value) {
        if (layers.indexOf(value) === -1) {
          layers.push(value);
        }
      });
      return layers;
    }
  };
  var webkitTextStrokeColor = {
    name: "-webkit-text-stroke-color",
    initialValue: 'currentcolor',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'color'
  };
  var webkitTextStrokeWidth = {
    name: "-webkit-text-stroke-width",
    initialValue: '0',
    type: 0 /* VALUE */,
    prefix: false,
    parse: function parse(_context, token) {
      if (isDimensionToken(token)) {
        return token.number;
      }
      return 0;
    }
  };
  var CSSParsedDeclaration = /** @class */function () {
    function CSSParsedDeclaration(context, declaration) {
      var _a, _b;
      this.animationDuration = parse(context, duration, declaration.animationDuration);
      this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
      this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
      this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
      this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
      this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
      this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
      this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
      this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
      this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
      this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
      this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
      this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
      this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
      this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
      this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
      this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
      this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
      this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
      this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
      this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
      this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
      this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
      this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
      this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
      this.color = parse(context, color, declaration.color);
      this.direction = parse(context, direction, declaration.direction);
      this.display = parse(context, display, declaration.display);
      this["float"] = parse(context, _float, declaration.cssFloat);
      this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
      this.fontSize = parse(context, fontSize, declaration.fontSize);
      this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
      this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
      this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
      this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
      this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
      this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
      this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
      this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
      this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
      this.marginTop = parse(context, marginTop, declaration.marginTop);
      this.marginRight = parse(context, marginRight, declaration.marginRight);
      this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
      this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
      this.opacity = parse(context, opacity, declaration.opacity);
      var overflowTuple = parse(context, overflow, declaration.overflow);
      this.overflowX = overflowTuple[0];
      this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
      this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
      this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
      this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
      this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
      this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
      this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
      this.position = parse(context, position, declaration.position);
      this.textAlign = parse(context, textAlign, declaration.textAlign);
      this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
      this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
      this.textShadow = parse(context, textShadow, declaration.textShadow);
      this.textTransform = parse(context, textTransform, declaration.textTransform);
      this.transform = parse(context, transform$1, declaration.transform);
      this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
      this.visibility = parse(context, visibility, declaration.visibility);
      this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
      this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
      this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
      this.zIndex = parse(context, zIndex, declaration.zIndex);
    }
    CSSParsedDeclaration.prototype.isVisible = function () {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0 /* VISIBLE */;
    };
    CSSParsedDeclaration.prototype.isTransparent = function () {
      return isTransparent(this.backgroundColor);
    };
    CSSParsedDeclaration.prototype.isTransformed = function () {
      return this.transform !== null;
    };
    CSSParsedDeclaration.prototype.isPositioned = function () {
      return this.position !== 0 /* STATIC */;
    };
    CSSParsedDeclaration.prototype.isPositionedWithZIndex = function () {
      return this.isPositioned() && !this.zIndex.auto;
    };
    CSSParsedDeclaration.prototype.isFloating = function () {
      return this["float"] !== 0 /* NONE */;
    };
    CSSParsedDeclaration.prototype.isInlineLevel = function () {
      return contains(this.display, 4 /* INLINE */) || contains(this.display, 33554432 /* INLINE_BLOCK */) || contains(this.display, 268435456 /* INLINE_FLEX */) || contains(this.display, 536870912 /* INLINE_GRID */) || contains(this.display, 67108864 /* INLINE_LIST_ITEM */) || contains(this.display, 134217728 /* INLINE_TABLE */);
    };
    return CSSParsedDeclaration;
  }();
  var CSSParsedPseudoDeclaration = /** @class */function () {
    function CSSParsedPseudoDeclaration(context, declaration) {
      this.content = parse(context, content, declaration.content);
      this.quotes = parse(context, quotes, declaration.quotes);
    }
    return CSSParsedPseudoDeclaration;
  }();
  var CSSParsedCounterDeclaration = /** @class */function () {
    function CSSParsedCounterDeclaration(context, declaration) {
      this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
      this.counterReset = parse(context, counterReset, declaration.counterReset);
    }
    return CSSParsedCounterDeclaration;
  }();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var parse = function parse(context, descriptor, style) {
    var tokenizer = new Tokenizer();
    var value = style !== null && typeof style !== 'undefined' ? style.toString() : descriptor.initialValue;
    tokenizer.write(value);
    var parser = new Parser(tokenizer.read());
    switch (descriptor.type) {
      case 2 /* IDENT_VALUE */:
        var token = parser.parseComponentValue();
        return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
      case 0 /* VALUE */:
        return descriptor.parse(context, parser.parseComponentValue());
      case 1 /* LIST */:
        return descriptor.parse(context, parser.parseComponentValues());
      case 4 /* TOKEN_VALUE */:
        return parser.parseComponentValue();
      case 3 /* TYPE_VALUE */:
        switch (descriptor.format) {
          case 'angle':
            return angle.parse(context, parser.parseComponentValue());
          case 'color':
            return color$1.parse(context, parser.parseComponentValue());
          case 'image':
            return image.parse(context, parser.parseComponentValue());
          case 'length':
            var length_1 = parser.parseComponentValue();
            return isLength(length_1) ? length_1 : ZERO_LENGTH;
          case 'length-percentage':
            var value_1 = parser.parseComponentValue();
            return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
          case 'time':
            return time.parse(context, parser.parseComponentValue());
        }
        break;
    }
  };
  var elementDebuggerAttribute = 'data-html2canvas-debug';
  var getElementDebugType = function getElementDebugType(element) {
    var attribute = element.getAttribute(elementDebuggerAttribute);
    switch (attribute) {
      case 'all':
        return 1 /* ALL */;
      case 'clone':
        return 2 /* CLONE */;
      case 'parse':
        return 3 /* PARSE */;
      case 'render':
        return 4 /* RENDER */;
      default:
        return 0 /* NONE */;
    }
  };
  var isDebugging = function isDebugging(element, type) {
    var elementType = getElementDebugType(element);
    return elementType === 1 /* ALL */ || type === elementType;
  };
  var ElementContainer = /** @class */function () {
    function ElementContainer(context, element) {
      this.context = context;
      this.textNodes = [];
      this.elements = [];
      this.flags = 0;
      if (isDebugging(element, 3 /* PARSE */)) {
        debugger;
      }
      this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
      if (isHTMLElementNode(element)) {
        if (this.styles.animationDuration.some(function (duration) {
          return duration > 0;
        })) {
          element.style.animationDuration = '0s';
        }
        if (this.styles.transform !== null) {
          // getBoundingClientRect takes transforms into account
          element.style.transform = 'none';
        }
      }
      this.bounds = parseBounds(this.context, element);
      if (isDebugging(element, 4 /* RENDER */)) {
        this.flags |= 16 /* DEBUG_RENDER */;
      }
    }
    return ElementContainer;
  }();

  /*
   * text-segmentation 1.0.3 <https://github.com/niklasvh/text-segmentation>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */
  var base64 = 'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=';

  /*
   * utrie 1.0.2 <https://github.com/niklasvh/utrie>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */
  var chars$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // Use a lookup table to find the index.
  var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
  for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
    lookup$1[chars$1.charCodeAt(i$1)] = i$1;
  }
  var decode = function decode(base64) {
    var bufferLength = base64.length * 0.75,
      len = base64.length,
      i,
      p = 0,
      encoded1,
      encoded2,
      encoded3,
      encoded4;
    if (base64[base64.length - 1] === '=') {
      bufferLength--;
      if (base64[base64.length - 2] === '=') {
        bufferLength--;
      }
    }
    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
    for (i = 0; i < len; i += 4) {
      encoded1 = lookup$1[base64.charCodeAt(i)];
      encoded2 = lookup$1[base64.charCodeAt(i + 1)];
      encoded3 = lookup$1[base64.charCodeAt(i + 2)];
      encoded4 = lookup$1[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
  };
  var polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 2) {
      bytes.push(buffer[i + 1] << 8 | buffer[i]);
    }
    return bytes;
  };
  var polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 4) {
      bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
    }
    return bytes;
  };

  /** Shift size for getting the index-2 table offset. */
  var UTRIE2_SHIFT_2 = 5;
  /** Shift size for getting the index-1 table offset. */
  var UTRIE2_SHIFT_1 = 6 + 5;
  /**
   * Shift size for shifting left the index array values.
   * Increases possible data size with 16-bit index values at the cost
   * of compactability.
   * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
   */
  var UTRIE2_INDEX_SHIFT = 2;
  /**
   * Difference between the two shift sizes,
   * for getting an index-1 offset from an index-2 offset. 6=11-5
   */
  var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
  /**
   * The part of the index-2 table for U+D800..U+DBFF stores values for
   * lead surrogate code _units_ not code _points_.
   * Values for lead surrogate code _points_ are indexed with this portion of the table.
   * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
   */
  var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
  /** Number of entries in a data block. 32=0x20 */
  var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
  /** Mask for getting the lower bits for the in-data-block offset. */
  var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
  var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
  /** Count the lengths of both BMP pieces. 2080=0x820 */
  var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
  /**
   * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
   * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
   */
  var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
  var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
  /**
   * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
   * Variable length, for code points up to highStart, where the last single-value range starts.
   * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
   * (For 0x100000 supplementary code points U+10000..U+10ffff.)
   *
   * The part of the index-2 table for supplementary code points starts
   * after this index-1 table.
   *
   * Both the index-1 table and the following part of the index-2 table
   * are omitted completely if there is only BMP data.
   */
  var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
  /**
   * Number of index-1 entries for the BMP. 32=0x20
   * This part of the index-1 table is omitted from the serialized form.
   */
  var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
  /** Number of entries in an index-2 block. 64=0x40 */
  var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
  /** Mask for getting the lower bits for the in-index-2-block offset. */
  var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
  var slice16 = function slice16(view, start, end) {
    if (view.slice) {
      return view.slice(start, end);
    }
    return new Uint16Array(Array.prototype.slice.call(view, start, end));
  };
  var slice32 = function slice32(view, start, end) {
    if (view.slice) {
      return view.slice(start, end);
    }
    return new Uint32Array(Array.prototype.slice.call(view, start, end));
  };
  var createTrieFromBase64 = function createTrieFromBase64(base64, _byteLength) {
    var buffer = decode(base64);
    var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
    var headerLength = 24;
    var index = slice16(view16, headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
  };
  var Trie = /** @class */function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
      this.initialValue = initialValue;
      this.errorValue = errorValue;
      this.highStart = highStart;
      this.highValueIndex = highValueIndex;
      this.index = index;
      this.data = data;
    }
    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */
    Trie.prototype.get = function (codePoint) {
      var ix;
      if (codePoint >= 0) {
        if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
          // Ordinary BMP code point, excluding leading surrogates.
          // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
          // 16 bit data is stored in the index array itself.
          ix = this.index[codePoint >> UTRIE2_SHIFT_2];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }
        if (codePoint <= 0xffff) {
          // Lead Surrogate Code Point.  A Separate index section is stored for
          // lead surrogate code units and code points.
          //   The main index has the code unit data.
          //   For this function, we need the code point data.
          // Note: this expression could be refactored for slightly improved efficiency, but
          //       surrogate code points will be so rare in practice that it's not worth it.
          ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }
        if (codePoint < this.highStart) {
          // Supplemental code point, use two-level lookup.
          ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
          ix = this.index[ix];
          ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
          ix = this.index[ix];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }
        if (codePoint <= 0x10ffff) {
          return this.data[this.highValueIndex];
        }
      }
      // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
      return this.errorValue;
    };
    return Trie;
  }();

  /*
   * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // Use a lookup table to find the index.
  var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }
  var Prepend = 1;
  var CR = 2;
  var LF = 3;
  var Control = 4;
  var Extend = 5;
  var SpacingMark = 7;
  var L = 8;
  var V = 9;
  var T = 10;
  var LV = 11;
  var LVT = 12;
  var ZWJ = 13;
  var Extended_Pictographic = 14;
  var RI = 15;
  var toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
      var value = str.charCodeAt(i++);
      if (value >= 0xd800 && value <= 0xdbff && i < length) {
        var extra = str.charCodeAt(i++);
        if ((extra & 0xfc00) === 0xdc00) {
          codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
        } else {
          codePoints.push(value);
          i--;
        }
      } else {
        codePoints.push(value);
      }
    }
    return codePoints;
  };
  var fromCodePoint = function fromCodePoint() {
    var codePoints = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      codePoints[_i] = arguments[_i];
    }
    if (String.fromCodePoint) {
      return String.fromCodePoint.apply(String, codePoints);
    }
    var length = codePoints.length;
    if (!length) {
      return '';
    }
    var codeUnits = [];
    var index = -1;
    var result = '';
    while (++index < length) {
      var codePoint = codePoints[index];
      if (codePoint <= 0xffff) {
        codeUnits.push(codePoint);
      } else {
        codePoint -= 0x10000;
        codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
      }
      if (index + 1 === length || codeUnits.length > 0x4000) {
        result += String.fromCharCode.apply(String, codeUnits);
        codeUnits.length = 0;
      }
    }
    return result;
  };
  var UnicodeTrie = createTrieFromBase64(base64);
  var BREAK_NOT_ALLOWED = '×';
  var BREAK_ALLOWED = '÷';
  var codePointToClass = function codePointToClass(codePoint) {
    return UnicodeTrie.get(codePoint);
  };
  var _graphemeBreakAtIndex = function _graphemeBreakAtIndex(_codePoints, classTypes, index) {
    var prevIndex = index - 2;
    var prev = classTypes[prevIndex];
    var current = classTypes[index - 1];
    var next = classTypes[index];
    // GB3 Do not break between a CR and LF
    if (current === CR && next === LF) {
      return BREAK_NOT_ALLOWED;
    }
    // GB4 Otherwise, break before and after controls.
    if (current === CR || current === LF || current === Control) {
      return BREAK_ALLOWED;
    }
    // GB5
    if (next === CR || next === LF || next === Control) {
      return BREAK_ALLOWED;
    }
    // Do not break Hangul syllable sequences.
    // GB6
    if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED;
    }
    // GB7
    if ((current === LV || current === V) && (next === V || next === T)) {
      return BREAK_NOT_ALLOWED;
    }
    // GB8
    if ((current === LVT || current === T) && next === T) {
      return BREAK_NOT_ALLOWED;
    }
    // GB9 Do not break before extending characters or ZWJ.
    if (next === ZWJ || next === Extend) {
      return BREAK_NOT_ALLOWED;
    }
    // Do not break before SpacingMarks, or after Prepend characters.
    // GB9a
    if (next === SpacingMark) {
      return BREAK_NOT_ALLOWED;
    }
    // GB9a
    if (current === Prepend) {
      return BREAK_NOT_ALLOWED;
    }
    // GB11 Do not break within emoji modifier sequences or emoji zwj sequences.
    if (current === ZWJ && next === Extended_Pictographic) {
      while (prev === Extend) {
        prev = classTypes[--prevIndex];
      }
      if (prev === Extended_Pictographic) {
        return BREAK_NOT_ALLOWED;
      }
    }
    // GB12 Do not break within emoji flag sequences.
    // That is, do not break between regional indicator (RI) symbols
    // if there is an odd number of RI characters before the break point.
    if (current === RI && next === RI) {
      var countRI = 0;
      while (prev === RI) {
        countRI++;
        prev = classTypes[--prevIndex];
      }
      if (countRI % 2 === 0) {
        return BREAK_NOT_ALLOWED;
      }
    }
    return BREAK_ALLOWED;
  };
  var GraphemeBreaker = function GraphemeBreaker(str) {
    var codePoints = toCodePoints(str);
    var length = codePoints.length;
    var index = 0;
    var lastEnd = 0;
    var classTypes = codePoints.map(codePointToClass);
    return {
      next: function next() {
        if (index >= length) {
          return {
            done: true,
            value: null
          };
        }
        var graphemeBreak = BREAK_NOT_ALLOWED;
        while (index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {}
        if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
          var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
          lastEnd = index;
          return {
            value: value,
            done: false
          };
        }
        return {
          done: true,
          value: null
        };
      }
    };
  };
  var splitGraphemes = function splitGraphemes(str) {
    var breaker = GraphemeBreaker(str);
    var graphemes = [];
    var bk;
    while (!(bk = breaker.next()).done) {
      if (bk.value) {
        graphemes.push(bk.value.slice());
      }
    }
    return graphemes;
  };
  var testRangeBounds = function testRangeBounds(document) {
    var TEST_HEIGHT = 123;
    if (document.createRange) {
      var range = document.createRange();
      if (range.getBoundingClientRect) {
        var testElement = document.createElement('boundtest');
        testElement.style.height = TEST_HEIGHT + "px";
        testElement.style.display = 'block';
        document.body.appendChild(testElement);
        range.selectNode(testElement);
        var rangeBounds = range.getBoundingClientRect();
        var rangeHeight = Math.round(rangeBounds.height);
        document.body.removeChild(testElement);
        if (rangeHeight === TEST_HEIGHT) {
          return true;
        }
      }
    }
    return false;
  };
  var testIOSLineBreak = function testIOSLineBreak(document) {
    var testElement = document.createElement('boundtest');
    testElement.style.width = '50px';
    testElement.style.display = 'block';
    testElement.style.fontSize = '12px';
    testElement.style.letterSpacing = '0px';
    testElement.style.wordSpacing = '0px';
    document.body.appendChild(testElement);
    var range = document.createRange();
    testElement.innerHTML = typeof ''.repeat === 'function' ? '&#128104;'.repeat(10) : '';
    var node = testElement.firstChild;
    var textList = toCodePoints$1(node.data).map(function (i) {
      return fromCodePoint$1(i);
    });
    var offset = 0;
    var prev = {};
    // ios 13 does not handle range getBoundingClientRect line changes correctly #2177
    var supports = textList.every(function (text, i) {
      range.setStart(node, offset);
      range.setEnd(node, offset + text.length);
      var rect = range.getBoundingClientRect();
      offset += text.length;
      var boundAhead = rect.x > prev.x || rect.y > prev.y;
      prev = rect;
      if (i === 0) {
        return true;
      }
      return boundAhead;
    });
    document.body.removeChild(testElement);
    return supports;
  };
  var testCORS = function testCORS() {
    return typeof new Image().crossOrigin !== 'undefined';
  };
  var testResponseType = function testResponseType() {
    return typeof new XMLHttpRequest().responseType === 'string';
  };
  var testSVG = function testSVG(document) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    if (!ctx) {
      return false;
    }
    img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      ctx.drawImage(img, 0, 0);
      canvas.toDataURL();
    } catch (e) {
      return false;
    }
    return true;
  };
  var isGreenPixel = function isGreenPixel(data) {
    return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
  };
  var testForeignObject = function testForeignObject(document) {
    var canvas = document.createElement('canvas');
    var size = 100;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    if (!ctx) {
      return Promise.reject(false);
    }
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(0, 0, size, size);
    var img = new Image();
    var greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    var svg = createForeignObjectSVG(size, size, 0, 0, img);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size, size);
    return loadSerializedSVG$1(svg).then(function (img) {
      ctx.drawImage(img, 0, 0);
      var data = ctx.getImageData(0, 0, size, size).data;
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, size, size);
      var node = document.createElement('div');
      node.style.backgroundImage = "url(" + greenImageSrc + ")";
      node.style.height = size + "px";
      // Firefox 55 does not render inline <img /> tags
      return isGreenPixel(data) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
    }).then(function (img) {
      ctx.drawImage(img, 0, 0);
      // Edge does not render background-images
      return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    })["catch"](function () {
      return false;
    });
  };
  var createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width.toString());
    svg.setAttributeNS(null, 'height', height.toString());
    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x.toString());
    foreignObject.setAttributeNS(null, 'y', y.toString());
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svg;
  };
  var loadSerializedSVG$1 = function loadSerializedSVG$1(svg) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () {
        return resolve(img);
      };
      img.onerror = reject;
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
  };
  var FEATURES = {
    get SUPPORT_RANGE_BOUNDS() {
      var value = testRangeBounds(document);
      Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', {
        value: value
      });
      return value;
    },
    get SUPPORT_WORD_BREAKING() {
      var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
      Object.defineProperty(FEATURES, 'SUPPORT_WORD_BREAKING', {
        value: value
      });
      return value;
    },
    get SUPPORT_SVG_DRAWING() {
      var value = testSVG(document);
      Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', {
        value: value
      });
      return value;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
      Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', {
        value: value
      });
      return value;
    },
    get SUPPORT_CORS_IMAGES() {
      var value = testCORS();
      Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', {
        value: value
      });
      return value;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var value = testResponseType();
      Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', {
        value: value
      });
      return value;
    },
    get SUPPORT_CORS_XHR() {
      var value = 'withCredentials' in new XMLHttpRequest();
      Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', {
        value: value
      });
      return value;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var value = !!(typeof Intl !== 'undefined' && Intl.Segmenter);
      Object.defineProperty(FEATURES, 'SUPPORT_NATIVE_TEXT_SEGMENTATION', {
        value: value
      });
      return value;
    }
  };
  var TextBounds = /** @class */function () {
    function TextBounds(text, bounds) {
      this.text = text;
      this.bounds = bounds;
    }
    return TextBounds;
  }();
  var parseTextBounds = function parseTextBounds(context, value, styles, node) {
    var textList = breakText(value, styles);
    var textBounds = [];
    var offset = 0;
    textList.forEach(function (text) {
      if (styles.textDecorationLine.length || text.trim().length > 0) {
        if (FEATURES.SUPPORT_RANGE_BOUNDS) {
          var clientRects = createRange(node, offset, text.length).getClientRects();
          if (clientRects.length > 1) {
            var subSegments = segmentGraphemes(text);
            var subOffset_1 = 0;
            subSegments.forEach(function (subSegment) {
              textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
              subOffset_1 += subSegment.length;
            });
          } else {
            textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
          }
        } else {
          var replacementNode = node.splitText(text.length);
          textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
          node = replacementNode;
        }
      } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
        node = node.splitText(text.length);
      }
      offset += text.length;
    });
    return textBounds;
  };
  var getWrapperBounds = function getWrapperBounds(context, node) {
    var ownerDocument = node.ownerDocument;
    if (ownerDocument) {
      var wrapper = ownerDocument.createElement('html2canvaswrapper');
      wrapper.appendChild(node.cloneNode(true));
      var parentNode = node.parentNode;
      if (parentNode) {
        parentNode.replaceChild(wrapper, node);
        var bounds = parseBounds(context, wrapper);
        if (wrapper.firstChild) {
          parentNode.replaceChild(wrapper.firstChild, wrapper);
        }
        return bounds;
      }
    }
    return Bounds.EMPTY;
  };
  var createRange = function createRange(node, offset, length) {
    var ownerDocument = node.ownerDocument;
    if (!ownerDocument) {
      throw new Error('Node has no owner document');
    }
    var range = ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return range;
  };
  var segmentGraphemes = function segmentGraphemes(value) {
    if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var segmenter = new Intl.Segmenter(void 0, {
        granularity: 'grapheme'
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return Array.from(segmenter.segment(value)).map(function (segment) {
        return segment.segment;
      });
    }
    return splitGraphemes(value);
  };
  var segmentWords = function segmentWords(value, styles) {
    if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var segmenter = new Intl.Segmenter(void 0, {
        granularity: 'word'
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return Array.from(segmenter.segment(value)).map(function (segment) {
        return segment.segment;
      });
    }
    return breakWords(value, styles);
  };
  var breakText = function breakText(value, styles) {
    return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
  };
  // https://drafts.csswg.org/css-text/#word-separator
  var wordSeparators = [0x0020, 0x00a0, 0x1361, 0x10100, 0x10101, 0x1039, 0x1091];
  var breakWords = function breakWords(str, styles) {
    var breaker = LineBreaker(str, {
      lineBreak: styles.lineBreak,
      wordBreak: styles.overflowWrap === "break-word" /* BREAK_WORD */ ? 'break-word' : styles.wordBreak
    });
    var words = [];
    var bk;
    var _loop_1 = function _loop_1() {
      if (bk.value) {
        var value = bk.value.slice();
        var codePoints = toCodePoints$1(value);
        var word_1 = '';
        codePoints.forEach(function (codePoint) {
          if (wordSeparators.indexOf(codePoint) === -1) {
            word_1 += fromCodePoint$1(codePoint);
          } else {
            if (word_1.length) {
              words.push(word_1);
            }
            words.push(fromCodePoint$1(codePoint));
            word_1 = '';
          }
        });
        if (word_1.length) {
          words.push(word_1);
        }
      }
    };
    while (!(bk = breaker.next()).done) {
      _loop_1();
    }
    return words;
  };
  var TextContainer = /** @class */function () {
    function TextContainer(context, node, styles) {
      this.text = transform(node.data, styles.textTransform);
      this.textBounds = parseTextBounds(context, this.text, styles, node);
    }
    return TextContainer;
  }();
  var transform = function transform(text, _transform) {
    switch (_transform) {
      case 1 /* LOWERCASE */:
        return text.toLowerCase();
      case 3 /* CAPITALIZE */:
        return text.replace(CAPITALIZE, capitalize);
      case 2 /* UPPERCASE */:
        return text.toUpperCase();
      default:
        return text;
    }
  };
  var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
  var capitalize = function capitalize(m, p1, p2) {
    if (m.length > 0) {
      return p1 + p2.toUpperCase();
    }
    return m;
  };
  var ImageElementContainer = /** @class */function (_super) {
    __extends(ImageElementContainer, _super);
    function ImageElementContainer(context, img) {
      var _this = _super.call(this, context, img) || this;
      _this.src = img.currentSrc || img.src;
      _this.intrinsicWidth = img.naturalWidth;
      _this.intrinsicHeight = img.naturalHeight;
      _this.context.cache.addImage(_this.src);
      return _this;
    }
    return ImageElementContainer;
  }(ElementContainer);
  var CanvasElementContainer = /** @class */function (_super) {
    __extends(CanvasElementContainer, _super);
    function CanvasElementContainer(context, canvas) {
      var _this = _super.call(this, context, canvas) || this;
      _this.canvas = canvas;
      _this.intrinsicWidth = canvas.width;
      _this.intrinsicHeight = canvas.height;
      return _this;
    }
    return CanvasElementContainer;
  }(ElementContainer);
  var SVGElementContainer = /** @class */function (_super) {
    __extends(SVGElementContainer, _super);
    function SVGElementContainer(context, img) {
      var _this = _super.call(this, context, img) || this;
      var s = new XMLSerializer();
      var bounds = parseBounds(context, img);
      img.setAttribute('width', bounds.width + "px");
      img.setAttribute('height', bounds.height + "px");
      _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
      _this.intrinsicWidth = img.width.baseVal.value;
      _this.intrinsicHeight = img.height.baseVal.value;
      _this.context.cache.addImage(_this.svg);
      return _this;
    }
    return SVGElementContainer;
  }(ElementContainer);
  var LIElementContainer = /** @class */function (_super) {
    __extends(LIElementContainer, _super);
    function LIElementContainer(context, element) {
      var _this = _super.call(this, context, element) || this;
      _this.value = element.value;
      return _this;
    }
    return LIElementContainer;
  }(ElementContainer);
  var OLElementContainer = /** @class */function (_super) {
    __extends(OLElementContainer, _super);
    function OLElementContainer(context, element) {
      var _this = _super.call(this, context, element) || this;
      _this.start = element.start;
      _this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
      return _this;
    }
    return OLElementContainer;
  }(ElementContainer);
  var CHECKBOX_BORDER_RADIUS = [{
    type: 15 /* DIMENSION_TOKEN */,
    flags: 0,
    unit: 'px',
    number: 3
  }];
  var RADIO_BORDER_RADIUS = [{
    type: 16 /* PERCENTAGE_TOKEN */,
    flags: 0,
    number: 50
  }];
  var reformatInputBounds = function reformatInputBounds(bounds) {
    if (bounds.width > bounds.height) {
      return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
    } else if (bounds.width < bounds.height) {
      return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
    }
    return bounds;
  };
  var getInputValue = function getInputValue(node) {
    var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("\u2022") : node.value;
    return value.length === 0 ? node.placeholder || '' : value;
  };
  var CHECKBOX = 'checkbox';
  var RADIO = 'radio';
  var PASSWORD = 'password';
  var INPUT_COLOR = 0x2a2a2aff;
  var InputElementContainer = /** @class */function (_super) {
    __extends(InputElementContainer, _super);
    function InputElementContainer(context, input) {
      var _this = _super.call(this, context, input) || this;
      _this.type = input.type.toLowerCase();
      _this.checked = input.checked;
      _this.value = getInputValue(input);
      if (_this.type === CHECKBOX || _this.type === RADIO) {
        _this.styles.backgroundColor = 0xdededeff;
        _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 0xa5a5a5ff;
        _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
        _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1 /* SOLID */;
        _this.styles.backgroundClip = [0 /* BORDER_BOX */];
        _this.styles.backgroundOrigin = [0 /* BORDER_BOX */];
        _this.bounds = reformatInputBounds(_this.bounds);
      }
      switch (_this.type) {
        case CHECKBOX:
          _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
          break;
        case RADIO:
          _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
          break;
      }
      return _this;
    }
    return InputElementContainer;
  }(ElementContainer);
  var SelectElementContainer = /** @class */function (_super) {
    __extends(SelectElementContainer, _super);
    function SelectElementContainer(context, element) {
      var _this = _super.call(this, context, element) || this;
      var option = element.options[element.selectedIndex || 0];
      _this.value = option ? option.text || '' : '';
      return _this;
    }
    return SelectElementContainer;
  }(ElementContainer);
  var TextareaElementContainer = /** @class */function (_super) {
    __extends(TextareaElementContainer, _super);
    function TextareaElementContainer(context, element) {
      var _this = _super.call(this, context, element) || this;
      _this.value = element.value;
      return _this;
    }
    return TextareaElementContainer;
  }(ElementContainer);
  var IFrameElementContainer = /** @class */function (_super) {
    __extends(IFrameElementContainer, _super);
    function IFrameElementContainer(context, iframe) {
      var _this = _super.call(this, context, iframe) || this;
      _this.src = iframe.src;
      _this.width = parseInt(iframe.width, 10) || 0;
      _this.height = parseInt(iframe.height, 10) || 0;
      _this.backgroundColor = _this.styles.backgroundColor;
      try {
        if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
          _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
          // http://www.w3.org/TR/css3-background/#special-backgrounds
          var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
          var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
          _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
        }
      } catch (e) {}
      return _this;
    }
    return IFrameElementContainer;
  }(ElementContainer);
  var LIST_OWNERS = ['OL', 'UL', 'MENU'];
  var _parseNodeTree = function parseNodeTree(context, node, parent, root) {
    for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
      nextNode = childNode.nextSibling;
      if (isTextNode(childNode) && childNode.data.trim().length > 0) {
        parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
      } else if (isElementNode(childNode)) {
        if (isSlotElement(childNode) && childNode.assignedNodes) {
          childNode.assignedNodes().forEach(function (childNode) {
            return _parseNodeTree(context, childNode, parent, root);
          });
        } else {
          var container = createContainer(context, childNode);
          if (container.styles.isVisible()) {
            if (createsRealStackingContext(childNode, container, root)) {
              container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
            } else if (createsStackingContext(container.styles)) {
              container.flags |= 2 /* CREATES_STACKING_CONTEXT */;
            }
            if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
              container.flags |= 8 /* IS_LIST_OWNER */;
            }
            parent.elements.push(container);
            childNode.slot;
            if (childNode.shadowRoot) {
              _parseNodeTree(context, childNode.shadowRoot, container, root);
            } else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
              _parseNodeTree(context, childNode, container, root);
            }
          }
        }
      }
    }
  };
  var createContainer = function createContainer(context, element) {
    if (isImageElement(element)) {
      return new ImageElementContainer(context, element);
    }
    if (isCanvasElement(element)) {
      return new CanvasElementContainer(context, element);
    }
    if (isSVGElement(element)) {
      return new SVGElementContainer(context, element);
    }
    if (isLIElement(element)) {
      return new LIElementContainer(context, element);
    }
    if (isOLElement(element)) {
      return new OLElementContainer(context, element);
    }
    if (isInputElement(element)) {
      return new InputElementContainer(context, element);
    }
    if (isSelectElement(element)) {
      return new SelectElementContainer(context, element);
    }
    if (isTextareaElement(element)) {
      return new TextareaElementContainer(context, element);
    }
    if (isIFrameElement(element)) {
      return new IFrameElementContainer(context, element);
    }
    return new ElementContainer(context, element);
  };
  var parseTree = function parseTree(context, element) {
    var container = createContainer(context, element);
    container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
    _parseNodeTree(context, element, container, container);
    return container;
  };
  var createsRealStackingContext = function createsRealStackingContext(node, container, root) {
    return container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || isBodyElement(node) && root.styles.isTransparent();
  };
  var createsStackingContext = function createsStackingContext(styles) {
    return styles.isPositioned() || styles.isFloating();
  };
  var isTextNode = function isTextNode(node) {
    return node.nodeType === Node.TEXT_NODE;
  };
  var isElementNode = function isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  };
  var isHTMLElementNode = function isHTMLElementNode(node) {
    return isElementNode(node) && typeof node.style !== 'undefined' && !isSVGElementNode(node);
  };
  var isSVGElementNode = function isSVGElementNode(element) {
    return _typeof(element.className) === 'object';
  };
  var isLIElement = function isLIElement(node) {
    return node.tagName === 'LI';
  };
  var isOLElement = function isOLElement(node) {
    return node.tagName === 'OL';
  };
  var isInputElement = function isInputElement(node) {
    return node.tagName === 'INPUT';
  };
  var isHTMLElement = function isHTMLElement(node) {
    return node.tagName === 'HTML';
  };
  var isSVGElement = function isSVGElement(node) {
    return node.tagName === 'svg';
  };
  var isBodyElement = function isBodyElement(node) {
    return node.tagName === 'BODY';
  };
  var isCanvasElement = function isCanvasElement(node) {
    return node.tagName === 'CANVAS';
  };
  var isVideoElement = function isVideoElement(node) {
    return node.tagName === 'VIDEO';
  };
  var isImageElement = function isImageElement(node) {
    return node.tagName === 'IMG';
  };
  var isIFrameElement = function isIFrameElement(node) {
    return node.tagName === 'IFRAME';
  };
  var isStyleElement = function isStyleElement(node) {
    return node.tagName === 'STYLE';
  };
  var isScriptElement = function isScriptElement(node) {
    return node.tagName === 'SCRIPT';
  };
  var isTextareaElement = function isTextareaElement(node) {
    return node.tagName === 'TEXTAREA';
  };
  var isSelectElement = function isSelectElement(node) {
    return node.tagName === 'SELECT';
  };
  var isSlotElement = function isSlotElement(node) {
    return node.tagName === 'SLOT';
  };
  // https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
  var isCustomElement = function isCustomElement(node) {
    return node.tagName.indexOf('-') > 0;
  };
  var CounterState = /** @class */function () {
    function CounterState() {
      this.counters = {};
    }
    CounterState.prototype.getCounterValue = function (name) {
      var counter = this.counters[name];
      if (counter && counter.length) {
        return counter[counter.length - 1];
      }
      return 1;
    };
    CounterState.prototype.getCounterValues = function (name) {
      var counter = this.counters[name];
      return counter ? counter : [];
    };
    CounterState.prototype.pop = function (counters) {
      var _this = this;
      counters.forEach(function (counter) {
        return _this.counters[counter].pop();
      });
    };
    CounterState.prototype.parse = function (style) {
      var _this = this;
      var counterIncrement = style.counterIncrement;
      var counterReset = style.counterReset;
      var canReset = true;
      if (counterIncrement !== null) {
        counterIncrement.forEach(function (entry) {
          var counter = _this.counters[entry.counter];
          if (counter && entry.increment !== 0) {
            canReset = false;
            if (!counter.length) {
              counter.push(1);
            }
            counter[Math.max(0, counter.length - 1)] += entry.increment;
          }
        });
      }
      var counterNames = [];
      if (canReset) {
        counterReset.forEach(function (entry) {
          var counter = _this.counters[entry.counter];
          counterNames.push(entry.counter);
          if (!counter) {
            counter = _this.counters[entry.counter] = [];
          }
          counter.push(entry.reset);
        });
      }
      return counterNames;
    };
    return CounterState;
  }();
  var ROMAN_UPPER = {
    integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  };
  var ARMENIAN = {
    integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
  };
  var HEBREW = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
  };
  var GEORGIAN = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
  };
  var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
    if (value < min || value > max) {
      return createCounterText(value, fallback, suffix.length > 0);
    }
    return symbols.integers.reduce(function (string, integer, index) {
      while (value >= integer) {
        value -= integer;
        string += symbols.values[index];
      }
      return string;
    }, '') + suffix;
  };
  var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
    var string = '';
    do {
      if (!isNumeric) {
        value--;
      }
      string = resolver(value) + string;
      value /= codePointRangeLength;
    } while (value * codePointRangeLength >= codePointRangeLength);
    return string;
  };
  var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
    var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
    return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
      return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
    }) + suffix);
  };
  var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols, suffix) {
    if (suffix === void 0) {
      suffix = '. ';
    }
    var codePointRangeLength = symbols.length;
    return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
      return symbols[Math.floor(codePoint % codePointRangeLength)];
    }) + suffix;
  };
  var CJK_ZEROS = 1 << 0;
  var CJK_TEN_COEFFICIENTS = 1 << 1;
  var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
  var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
  var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
    if (value < -9999 || value > 9999) {
      return createCounterText(value, 4 /* CJK_DECIMAL */, suffix.length > 0);
    }
    var tmp = Math.abs(value);
    var string = suffix;
    if (tmp === 0) {
      return numbers[0] + string;
    }
    for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
      var coefficient = tmp % 10;
      if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== '') {
        string = numbers[coefficient] + string;
      } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) {
        string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
      } else if (coefficient === 1 && digit > 0) {
        string = multipliers[digit - 1] + string;
      }
      tmp = Math.floor(tmp / 10);
    }
    return (value < 0 ? negativeSign : '') + string;
  };
  var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
  var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
  var JAPANESE_NEGATIVE = 'マイナス';
  var KOREAN_NEGATIVE = '마이너스';
  var createCounterText = function createCounterText(value, type, appendSuffix) {
    var defaultSuffix = appendSuffix ? '. ' : '';
    var cjkSuffix = appendSuffix ? '、' : '';
    var koreanSuffix = appendSuffix ? ', ' : '';
    var spaceSuffix = appendSuffix ? ' ' : '';
    switch (type) {
      case 0 /* DISC */:
        return '•' + spaceSuffix;
      case 1 /* CIRCLE */:
        return '◦' + spaceSuffix;
      case 2 /* SQUARE */:
        return '◾' + spaceSuffix;
      case 5 /* DECIMAL_LEADING_ZERO */:
        var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
        return string.length < 4 ? "0" + string : string;
      case 4 /* CJK_DECIMAL */:
        return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
      case 6 /* LOWER_ROMAN */:
        return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
      case 7 /* UPPER_ROMAN */:
        return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix);
      case 8 /* LOWER_GREEK */:
        return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
      case 9 /* LOWER_ALPHA */:
        return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
      case 10 /* UPPER_ALPHA */:
        return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
      case 11 /* ARABIC_INDIC */:
        return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
      case 12 /* ARMENIAN */:
      case 49 /* UPPER_ARMENIAN */:
        return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix);
      case 35 /* LOWER_ARMENIAN */:
        return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
      case 13 /* BENGALI */:
        return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
      case 14 /* CAMBODIAN */:
      case 30 /* KHMER */:
        return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
      case 15 /* CJK_EARTHLY_BRANCH */:
        return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
      case 16 /* CJK_HEAVENLY_STEM */:
        return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
      case 17 /* CJK_IDEOGRAPHIC */:
      case 48 /* TRAD_CHINESE_INFORMAL */:
        return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
      case 47 /* TRAD_CHINESE_FORMAL */:
        return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
      case 42 /* SIMP_CHINESE_INFORMAL */:
        return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
      case 41 /* SIMP_CHINESE_FORMAL */:
        return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
      case 26 /* JAPANESE_INFORMAL */:
        return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
      case 25 /* JAPANESE_FORMAL */:
        return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
      case 31 /* KOREAN_HANGUL_FORMAL */:
        return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
      case 33 /* KOREAN_HANJA_INFORMAL */:
        return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
      case 32 /* KOREAN_HANJA_FORMAL */:
        return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
      case 18 /* DEVANAGARI */:
        return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
      case 20 /* GEORGIAN */:
        return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3 /* DECIMAL */, defaultSuffix);
      case 21 /* GUJARATI */:
        return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
      case 22 /* GURMUKHI */:
        return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
      case 22 /* HEBREW */:
        return createAdditiveCounter(value, 1, 10999, HEBREW, 3 /* DECIMAL */, defaultSuffix);
      case 23 /* HIRAGANA */:
        return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
      case 24 /* HIRAGANA_IROHA */:
        return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
      case 27 /* KANNADA */:
        return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
      case 28 /* KATAKANA */:
        return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
      case 29 /* KATAKANA_IROHA */:
        return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
      case 34 /* LAO */:
        return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
      case 37 /* MONGOLIAN */:
        return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
      case 38 /* MYANMAR */:
        return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
      case 39 /* ORIYA */:
        return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
      case 40 /* PERSIAN */:
        return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
      case 43 /* TAMIL */:
        return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
      case 44 /* TELUGU */:
        return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
      case 45 /* THAI */:
        return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
      case 46 /* TIBETAN */:
        return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
      case 3 /* DECIMAL */:
      default:
        return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
  };
  var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';
  var DocumentCloner = /** @class */function () {
    function DocumentCloner(context, element, options) {
      this.context = context;
      this.options = options;
      this.scrolledElements = [];
      this.referenceElement = element;
      this.counters = new CounterState();
      this.quoteDepth = 0;
      if (!element.ownerDocument) {
        throw new Error('Cloned element does not have an owner document');
      }
      this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
    }
    DocumentCloner.prototype.toIFrame = function (ownerDocument, windowSize) {
      var _this = this;
      var iframe = createIFrameContainer(ownerDocument, windowSize);
      if (!iframe.contentWindow) {
        return Promise.reject("Unable to find iframe window");
      }
      var scrollX = ownerDocument.defaultView.pageXOffset;
      var scrollY = ownerDocument.defaultView.pageYOffset;
      var cloneWindow = iframe.contentWindow;
      var documentClone = cloneWindow.document;
      /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
       if window url is about:blank, we can assign the url to current by writing onto the document
       */
      var iframeLoad = iframeLoader(iframe).then(function () {
        return __awaiter(_this, void 0, void 0, function () {
          var onclone, referenceElement;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                this.scrolledElements.forEach(restoreNodeScroll);
                if (cloneWindow) {
                  cloneWindow.scrollTo(windowSize.left, windowSize.top);
                  if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                    this.context.logger.warn('Unable to restore scroll position for cloned document');
                    this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                  }
                }
                onclone = this.options.onclone;
                referenceElement = this.clonedReferenceElement;
                if (typeof referenceElement === 'undefined') {
                  return [2 /*return*/, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                }
                if (!(documentClone.fonts && documentClone.fonts.ready)) return [3 /*break*/, 2];
                return [4 /*yield*/, documentClone.fonts.ready];
              case 1:
                _a.sent();
                _a.label = 2;
              case 2:
                if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [3 /*break*/, 4];
                return [4 /*yield*/, imagesReady(documentClone)];
              case 3:
                _a.sent();
                _a.label = 4;
              case 4:
                if (typeof onclone === 'function') {
                  return [2 /*return*/, Promise.resolve().then(function () {
                    return onclone(documentClone, referenceElement);
                  }).then(function () {
                    return iframe;
                  })];
                }
                return [2 /*return*/, iframe];
            }
          });
        });
      });
      documentClone.open();
      documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
      // Chrome scrolls the parent document for some reason after the write to the cloned window???
      restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
      documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
      documentClone.close();
      return iframeLoad;
    };
    DocumentCloner.prototype.createElementClone = function (node) {
      if (isDebugging(node, 2 /* CLONE */)) {
        debugger;
      }
      if (isCanvasElement(node)) {
        return this.createCanvasClone(node);
      }
      if (isVideoElement(node)) {
        return this.createVideoClone(node);
      }
      if (isStyleElement(node)) {
        return this.createStyleClone(node);
      }
      var clone = node.cloneNode(false);
      if (isImageElement(clone)) {
        if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
          clone.src = node.currentSrc;
          clone.srcset = '';
        }
        if (clone.loading === 'lazy') {
          clone.loading = 'eager';
        }
      }
      if (isCustomElement(clone)) {
        return this.createCustomElementClone(clone);
      }
      return clone;
    };
    DocumentCloner.prototype.createCustomElementClone = function (node) {
      var clone = document.createElement('html2canvascustomelement');
      copyCSSStyles(node.style, clone);
      return clone;
    };
    DocumentCloner.prototype.createStyleClone = function (node) {
      try {
        var sheet = node.sheet;
        if (sheet && sheet.cssRules) {
          var css = [].slice.call(sheet.cssRules, 0).reduce(function (css, rule) {
            if (rule && typeof rule.cssText === 'string') {
              return css + rule.cssText;
            }
            return css;
          }, '');
          var style = node.cloneNode(false);
          style.textContent = css;
          return style;
        }
      } catch (e) {
        // accessing node.sheet.cssRules throws a DOMException
        this.context.logger.error('Unable to access cssRules property', e);
        if (e.name !== 'SecurityError') {
          throw e;
        }
      }
      return node.cloneNode(false);
    };
    DocumentCloner.prototype.createCanvasClone = function (canvas) {
      var _a;
      if (this.options.inlineImages && canvas.ownerDocument) {
        var img = canvas.ownerDocument.createElement('img');
        try {
          img.src = canvas.toDataURL();
          return img;
        } catch (e) {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
        }
      }
      var clonedCanvas = canvas.cloneNode(false);
      try {
        clonedCanvas.width = canvas.width;
        clonedCanvas.height = canvas.height;
        var ctx = canvas.getContext('2d');
        var clonedCtx = clonedCanvas.getContext('2d');
        if (clonedCtx) {
          if (!this.options.allowTaint && ctx) {
            clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
          } else {
            var gl = (_a = canvas.getContext('webgl2')) !== null && _a !== void 0 ? _a : canvas.getContext('webgl');
            if (gl) {
              var attribs = gl.getContextAttributes();
              if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                this.context.logger.warn('Unable to clone WebGL context as it has preserveDrawingBuffer=false', canvas);
              }
            }
            clonedCtx.drawImage(canvas, 0, 0);
          }
        }
        return clonedCanvas;
      } catch (e) {
        this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
      }
      return clonedCanvas;
    };
    DocumentCloner.prototype.createVideoClone = function (video) {
      var canvas = video.ownerDocument.createElement('canvas');
      canvas.width = video.offsetWidth;
      canvas.height = video.offsetHeight;
      var ctx = canvas.getContext('2d');
      try {
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          if (!this.options.allowTaint) {
            ctx.getImageData(0, 0, canvas.width, canvas.height);
          }
        }
        return canvas;
      } catch (e) {
        this.context.logger.info("Unable to clone video as it is tainted", video);
      }
      var blankCanvas = video.ownerDocument.createElement('canvas');
      blankCanvas.width = video.offsetWidth;
      blankCanvas.height = video.offsetHeight;
      return blankCanvas;
    };
    DocumentCloner.prototype.appendChildNode = function (clone, child, copyStyles) {
      if (!isElementNode(child) || !isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' || !this.options.ignoreElements(child))) {
        if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
          clone.appendChild(this.cloneNode(child, copyStyles));
        }
      }
    };
    DocumentCloner.prototype.cloneChildNodes = function (node, clone, copyStyles) {
      var _this = this;
      for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
        if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === 'function') {
          var assignedNodes = child.assignedNodes();
          if (assignedNodes.length) {
            assignedNodes.forEach(function (assignedNode) {
              return _this.appendChildNode(clone, assignedNode, copyStyles);
            });
          }
        } else {
          this.appendChildNode(clone, child, copyStyles);
        }
      }
    };
    DocumentCloner.prototype.cloneNode = function (node, copyStyles) {
      if (isTextNode(node)) {
        return document.createTextNode(node.data);
      }
      if (!node.ownerDocument) {
        return node.cloneNode(false);
      }
      var window = node.ownerDocument.defaultView;
      if (window && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
        var clone = this.createElementClone(node);
        clone.style.transitionProperty = 'none';
        var style = window.getComputedStyle(node);
        var styleBefore = window.getComputedStyle(node, ':before');
        var styleAfter = window.getComputedStyle(node, ':after');
        if (this.referenceElement === node && isHTMLElementNode(clone)) {
          this.clonedReferenceElement = clone;
        }
        if (isBodyElement(clone)) {
          createPseudoHideStyles(clone);
        }
        var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
        var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
        if (isCustomElement(node)) {
          copyStyles = true;
        }
        if (!isVideoElement(node)) {
          this.cloneChildNodes(node, clone, copyStyles);
        }
        if (before) {
          clone.insertBefore(before, clone.firstChild);
        }
        var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
        if (after) {
          clone.appendChild(after);
        }
        this.counters.pop(counters);
        if (style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node) || copyStyles) {
          copyCSSStyles(style, clone);
        }
        if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
          this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
        }
        if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone) || isSelectElement(clone))) {
          clone.value = node.value;
        }
        return clone;
      }
      return node.cloneNode(false);
    };
    DocumentCloner.prototype.resolvePseudoContent = function (node, clone, style, pseudoElt) {
      var _this = this;
      if (!style) {
        return;
      }
      var value = style.content;
      var document = clone.ownerDocument;
      if (!document || !value || value === 'none' || value === '-moz-alt-content' || style.display === 'none') {
        return;
      }
      this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
      var declaration = new CSSParsedPseudoDeclaration(this.context, style);
      var anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
      copyCSSStyles(style, anonymousReplacedElement);
      declaration.content.forEach(function (token) {
        if (token.type === 0 /* STRING_TOKEN */) {
          anonymousReplacedElement.appendChild(document.createTextNode(token.value));
        } else if (token.type === 22 /* URL_TOKEN */) {
          var img = document.createElement('img');
          img.src = token.value;
          img.style.opacity = '1';
          anonymousReplacedElement.appendChild(img);
        } else if (token.type === 18 /* FUNCTION */) {
          if (token.name === 'attr') {
            var attr = token.values.filter(isIdentToken);
            if (attr.length) {
              anonymousReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
            }
          } else if (token.name === 'counter') {
            var _a = token.values.filter(nonFunctionArgSeparator),
              counter = _a[0],
              counterStyle = _a[1];
            if (counter && isIdentToken(counter)) {
              var counterState = _this.counters.getCounterValue(counter.value);
              var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3 /* DECIMAL */;
              anonymousReplacedElement.appendChild(document.createTextNode(createCounterText(counterState, counterType, false)));
            }
          } else if (token.name === 'counters') {
            var _b = token.values.filter(nonFunctionArgSeparator),
              counter = _b[0],
              delim = _b[1],
              counterStyle = _b[2];
            if (counter && isIdentToken(counter)) {
              var counterStates = _this.counters.getCounterValues(counter.value);
              var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3 /* DECIMAL */;
              var separator = delim && delim.type === 0 /* STRING_TOKEN */ ? delim.value : '';
              var text = counterStates.map(function (value) {
                return createCounterText(value, counterType_1, false);
              }).join(separator);
              anonymousReplacedElement.appendChild(document.createTextNode(text));
            }
          } else ;
        } else if (token.type === 20 /* IDENT_TOKEN */) {
          switch (token.value) {
            case 'open-quote':
              anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
              break;
            case 'close-quote':
              anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
              break;
            default:
              // safari doesn't parse string tokens correctly because of lack of quotes
              anonymousReplacedElement.appendChild(document.createTextNode(token.value));
          }
        }
      });
      anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
      var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
      if (isSVGElementNode(clone)) {
        clone.className.baseValue += newClassName;
      } else {
        clone.className += newClassName;
      }
      return anonymousReplacedElement;
    };
    DocumentCloner.destroy = function (container) {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
        return true;
      }
      return false;
    };
    return DocumentCloner;
  }();
  var PseudoElementType;
  (function (PseudoElementType) {
    PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
    PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
  })(PseudoElementType || (PseudoElementType = {}));
  var createIFrameContainer = function createIFrameContainer(ownerDocument, bounds) {
    var cloneIframeContainer = ownerDocument.createElement('iframe');
    cloneIframeContainer.className = 'html2canvas-container';
    cloneIframeContainer.style.visibility = 'hidden';
    cloneIframeContainer.style.position = 'fixed';
    cloneIframeContainer.style.left = '-10000px';
    cloneIframeContainer.style.top = '0px';
    cloneIframeContainer.style.border = '0';
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
    ownerDocument.body.appendChild(cloneIframeContainer);
    return cloneIframeContainer;
  };
  var imageReady = function imageReady(img) {
    return new Promise(function (resolve) {
      if (img.complete) {
        resolve();
        return;
      }
      if (!img.src) {
        resolve();
        return;
      }
      img.onload = resolve;
      img.onerror = resolve;
    });
  };
  var imagesReady = function imagesReady(document) {
    return Promise.all([].slice.call(document.images, 0).map(imageReady));
  };
  var iframeLoader = function iframeLoader(iframe) {
    return new Promise(function (resolve, reject) {
      var cloneWindow = iframe.contentWindow;
      if (!cloneWindow) {
        return reject("No window assigned for iframe");
      }
      var documentClone = cloneWindow.document;
      cloneWindow.onload = iframe.onload = function () {
        cloneWindow.onload = iframe.onload = null;
        var interval = setInterval(function () {
          if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
            clearInterval(interval);
            resolve(iframe);
          }
        }, 50);
      };
    });
  };
  var ignoredStyleProperties = ['all', 'd', 'content' // Safari shows pseudoelements if content is set
  ];
  var copyCSSStyles = function copyCSSStyles(style, target) {
    // Edge does not provide value for cssText
    for (var i = style.length - 1; i >= 0; i--) {
      var property = style.item(i);
      if (ignoredStyleProperties.indexOf(property) === -1) {
        target.style.setProperty(property, style.getPropertyValue(property));
      }
    }
    return target;
  };
  var serializeDoctype = function serializeDoctype(doctype) {
    var str = '';
    if (doctype) {
      str += '<!DOCTYPE ';
      if (doctype.name) {
        str += doctype.name;
      }
      if (doctype.internalSubset) {
        str += doctype.internalSubset;
      }
      if (doctype.publicId) {
        str += "\"" + doctype.publicId + "\"";
      }
      if (doctype.systemId) {
        str += "\"" + doctype.systemId + "\"";
      }
      str += '>';
    }
    return str;
  };
  var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument && ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
      ownerDocument.defaultView.scrollTo(x, y);
    }
  };
  var restoreNodeScroll = function restoreNodeScroll(_a) {
    var element = _a[0],
      x = _a[1],
      y = _a[2];
    element.scrollLeft = x;
    element.scrollTop = y;
  };
  var PSEUDO_BEFORE = ':before';
  var PSEUDO_AFTER = ':after';
  var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
  var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
  var PSEUDO_HIDE_ELEMENT_STYLE = "{\n    content: \"\" !important;\n    display: none !important;\n}";
  var createPseudoHideStyles = function createPseudoHideStyles(body) {
    createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
  };
  var createStyles = function createStyles(body, styles) {
    var document = body.ownerDocument;
    if (document) {
      var style = document.createElement('style');
      style.textContent = styles;
      body.appendChild(style);
    }
  };
  var CacheStorage = /** @class */function () {
    function CacheStorage() {}
    CacheStorage.getOrigin = function (url) {
      var link = CacheStorage._link;
      if (!link) {
        return 'about:blank';
      }
      link.href = url;
      link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
      return link.protocol + link.hostname + link.port;
    };
    CacheStorage.isSameOrigin = function (src) {
      return CacheStorage.getOrigin(src) === CacheStorage._origin;
    };
    CacheStorage.setContext = function (window) {
      CacheStorage._link = window.document.createElement('a');
      CacheStorage._origin = CacheStorage.getOrigin(window.location.href);
    };
    CacheStorage._origin = 'about:blank';
    return CacheStorage;
  }();
  var Cache = /** @class */function () {
    function Cache(context, _options) {
      this.context = context;
      this._options = _options;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this._cache = {};
    }
    Cache.prototype.addImage = function (src) {
      var result = Promise.resolve();
      if (this.has(src)) {
        return result;
      }
      if (isBlobImage(src) || isRenderable(src)) {
        (this._cache[src] = this.loadImage(src))["catch"](function () {
          // prevent unhandled rejection
        });
        return result;
      }
      return result;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cache.prototype.match = function (src) {
      return this._cache[src];
    };
    Cache.prototype.loadImage = function (key) {
      return __awaiter(this, void 0, void 0, function () {
        var isSameOrigin, useCORS, useProxy, src;
        var _this = this;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              isSameOrigin = CacheStorage.isSameOrigin(key);
              useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
              useProxy = !isInlineImage(key) && !isSameOrigin && !isBlobImage(key) && typeof this._options.proxy === 'string' && FEATURES.SUPPORT_CORS_XHR && !useCORS;
              if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !isBlobImage(key) && !useProxy && !useCORS) {
                return [2 /*return*/];
              }
              src = key;
              if (!useProxy) return [3 /*break*/, 2];
              return [4 /*yield*/, this.proxy(src)];
            case 1:
              src = _a.sent();
              _a.label = 2;
            case 2:
              this.context.logger.debug("Added image " + key.substring(0, 256));
              return [4 /*yield*/, new Promise(function (resolve, reject) {
                var img = new Image();
                img.onload = function () {
                  return resolve(img);
                };
                img.onerror = reject;
                //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                if (isInlineBase64Image(src) || useCORS) {
                  img.crossOrigin = 'anonymous';
                }
                img.src = src;
                if (img.complete === true) {
                  // Inline XML images may fail to parse, throwing an Error later on
                  setTimeout(function () {
                    return resolve(img);
                  }, 500);
                }
                if (_this._options.imageTimeout > 0) {
                  setTimeout(function () {
                    return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                  }, _this._options.imageTimeout);
                }
              })];
            case 3:
              return [2 /*return*/, _a.sent()];
          }
        });
      });
    };
    Cache.prototype.has = function (key) {
      return typeof this._cache[key] !== 'undefined';
    };
    Cache.prototype.keys = function () {
      return Promise.resolve(Object.keys(this._cache));
    };
    Cache.prototype.proxy = function (src) {
      var _this = this;
      var proxy = this._options.proxy;
      if (!proxy) {
        throw new Error('No proxy defined');
      }
      var key = src.substring(0, 256);
      return new Promise(function (resolve, reject) {
        var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
          if (xhr.status === 200) {
            if (responseType === 'text') {
              resolve(xhr.response);
            } else {
              var reader_1 = new FileReader();
              reader_1.addEventListener('load', function () {
                return resolve(reader_1.result);
              }, false);
              reader_1.addEventListener('error', function (e) {
                return reject(e);
              }, false);
              reader_1.readAsDataURL(xhr.response);
            }
          } else {
            reject("Failed to proxy resource " + key + " with status code " + xhr.status);
          }
        };
        xhr.onerror = reject;
        var queryString = proxy.indexOf('?') > -1 ? '&' : '?';
        xhr.open('GET', "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
        if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
          xhr.responseType = responseType;
        }
        if (_this._options.imageTimeout) {
          var timeout_1 = _this._options.imageTimeout;
          xhr.timeout = timeout_1;
          xhr.ontimeout = function () {
            return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
          };
        }
        xhr.send();
      });
    };
    return Cache;
  }();
  var INLINE_SVG = /^data:image\/svg\+xml/i;
  var INLINE_BASE64 = /^data:image\/.*;base64,/i;
  var INLINE_IMG = /^data:image\/.*/i;
  var isRenderable = function isRenderable(src) {
    return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
  };
  var isInlineImage = function isInlineImage(src) {
    return INLINE_IMG.test(src);
  };
  var isInlineBase64Image = function isInlineBase64Image(src) {
    return INLINE_BASE64.test(src);
  };
  var isBlobImage = function isBlobImage(src) {
    return src.substr(0, 4) === 'blob';
  };
  var isSVG = function isSVG(src) {
    return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
  };
  var Vector = /** @class */function () {
    function Vector(x, y) {
      this.type = 0 /* VECTOR */;
      this.x = x;
      this.y = y;
    }
    Vector.prototype.add = function (deltaX, deltaY) {
      return new Vector(this.x + deltaX, this.y + deltaY);
    };
    return Vector;
  }();
  var lerp = function lerp(a, b, t) {
    return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
  };
  var BezierCurve = /** @class */function () {
    function BezierCurve(start, startControl, endControl, end) {
      this.type = 1 /* BEZIER_CURVE */;
      this.start = start;
      this.startControl = startControl;
      this.endControl = endControl;
      this.end = end;
    }
    BezierCurve.prototype.subdivide = function (t, firstHalf) {
      var ab = lerp(this.start, this.startControl, t);
      var bc = lerp(this.startControl, this.endControl, t);
      var cd = lerp(this.endControl, this.end, t);
      var abbc = lerp(ab, bc, t);
      var bccd = lerp(bc, cd, t);
      var dest = lerp(abbc, bccd, t);
      return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
    };
    BezierCurve.prototype.add = function (deltaX, deltaY) {
      return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
    };
    BezierCurve.prototype.reverse = function () {
      return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
    };
    return BezierCurve;
  }();
  var isBezierCurve = function isBezierCurve(path) {
    return path.type === 1 /* BEZIER_CURVE */;
  };
  var BoundCurves = /** @class */function () {
    function BoundCurves(element) {
      var styles = element.styles;
      var bounds = element.bounds;
      var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height),
        tlh = _a[0],
        tlv = _a[1];
      var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height),
        trh = _b[0],
        trv = _b[1];
      var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height),
        brh = _c[0],
        brv = _c[1];
      var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height),
        blh = _d[0],
        blv = _d[1];
      var factors = [];
      factors.push((tlh + trh) / bounds.width);
      factors.push((blh + brh) / bounds.width);
      factors.push((tlv + blv) / bounds.height);
      factors.push((trv + brv) / bounds.height);
      var maxFactor = Math.max.apply(Math, factors);
      if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
      }
      var topWidth = bounds.width - trh;
      var rightHeight = bounds.height - brv;
      var bottomWidth = bounds.width - brh;
      var leftHeight = bounds.height - blv;
      var borderTopWidth = styles.borderTopWidth;
      var borderRightWidth = styles.borderRightWidth;
      var borderBottomWidth = styles.borderBottomWidth;
      var borderLeftWidth = styles.borderLeftWidth;
      var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
      var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
      var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
      var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
      this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3, tlh - borderLeftWidth / 3, tlv - borderTopWidth / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3);
      this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 3, trh - borderRightWidth / 3, trv - borderTopWidth / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + borderTopWidth / 3);
      this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 3, brv - borderBottomWidth / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
      this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + leftHeight, blh - borderLeftWidth / 3, blv - borderBottomWidth / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
      this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3, tlh - borderLeftWidth * 2 / 3, tlv - borderTopWidth * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3);
      this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth * 2 / 3, trh - borderRightWidth * 2 / 3, trv - borderTopWidth * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3);
      this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth * 2 / 3, brv - borderBottomWidth * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth * 2 / 3, bounds.top + bounds.height - borderBottomWidth * 2 / 3);
      this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth * 2 / 3, blv - borderBottomWidth * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth * 2 / 3, bounds.top + bounds.height - borderBottomWidth * 2 / 3);
      this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2, tlh - borderLeftWidth / 2, tlv - borderTopWidth / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2);
      this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 2, trh - borderRightWidth / 2, trv - borderTopWidth / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + borderTopWidth / 2);
      this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 2, brv - borderBottomWidth / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
      this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + leftHeight, blh - borderLeftWidth / 2, blv - borderBottomWidth / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
      this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
      this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
      this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
      this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
      this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
      this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderRightWidth ? 0 : Math.max(0, trh - borderRightWidth), Math.max(0, trv - borderTopWidth), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
      this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth), Math.max(0, brh - borderRightWidth), Math.max(0, brv - borderBottomWidth), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
      this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth), Math.max(0, blh - borderLeftWidth), Math.max(0, blv - borderBottomWidth), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
      this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
      this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
      this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
      this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
    }
    return BoundCurves;
  }();
  var CORNER;
  (function (CORNER) {
    CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
    CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
    CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
    CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
  })(CORNER || (CORNER = {}));
  var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = r1 * kappa; // control point offset horizontal
    var oy = r2 * kappa; // control point offset vertical
    var xm = x + r1; // x-middle
    var ym = y + r2; // y-middle
    switch (position) {
      case CORNER.TOP_LEFT:
        return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
      case CORNER.TOP_RIGHT:
        return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
      case CORNER.BOTTOM_RIGHT:
        return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
      case CORNER.BOTTOM_LEFT:
      default:
        return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
    }
  };
  var calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
    return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
  };
  var calculateContentBoxPath = function calculateContentBoxPath(curves) {
    return [curves.topLeftContentBox, curves.topRightContentBox, curves.bottomRightContentBox, curves.bottomLeftContentBox];
  };
  var calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
    return [curves.topLeftPaddingBox, curves.topRightPaddingBox, curves.bottomRightPaddingBox, curves.bottomLeftPaddingBox];
  };
  var TransformEffect = /** @class */function () {
    function TransformEffect(offsetX, offsetY, matrix) {
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.matrix = matrix;
      this.type = 0 /* TRANSFORM */;
      this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
    }
    return TransformEffect;
  }();
  var ClipEffect = /** @class */function () {
    function ClipEffect(path, target) {
      this.path = path;
      this.target = target;
      this.type = 1 /* CLIP */;
    }
    return ClipEffect;
  }();
  var OpacityEffect = /** @class */function () {
    function OpacityEffect(opacity) {
      this.opacity = opacity;
      this.type = 2 /* OPACITY */;
      this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
    }
    return OpacityEffect;
  }();
  var isTransformEffect = function isTransformEffect(effect) {
    return effect.type === 0 /* TRANSFORM */;
  };
  var isClipEffect = function isClipEffect(effect) {
    return effect.type === 1 /* CLIP */;
  };
  var isOpacityEffect = function isOpacityEffect(effect) {
    return effect.type === 2 /* OPACITY */;
  };
  var equalPath = function equalPath(a, b) {
    if (a.length === b.length) {
      return a.some(function (v, i) {
        return v === b[i];
      });
    }
    return false;
  };
  var transformPath = function transformPath(path, deltaX, deltaY, deltaW, deltaH) {
    return path.map(function (point, index) {
      switch (index) {
        case 0:
          return point.add(deltaX, deltaY);
        case 1:
          return point.add(deltaX + deltaW, deltaY);
        case 2:
          return point.add(deltaX + deltaW, deltaY + deltaH);
        case 3:
          return point.add(deltaX, deltaY + deltaH);
      }
      return point;
    });
  };
  var StackingContext = /** @class */function () {
    function StackingContext(container) {
      this.element = container;
      this.inlineLevel = [];
      this.nonInlineLevel = [];
      this.negativeZIndex = [];
      this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
      this.positiveZIndex = [];
      this.nonPositionedFloats = [];
      this.nonPositionedInlineLevel = [];
    }
    return StackingContext;
  }();
  var ElementPaint = /** @class */function () {
    function ElementPaint(container, parent) {
      this.container = container;
      this.parent = parent;
      this.effects = [];
      this.curves = new BoundCurves(this.container);
      if (this.container.styles.opacity < 1) {
        this.effects.push(new OpacityEffect(this.container.styles.opacity));
      }
      if (this.container.styles.transform !== null) {
        var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
        var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
        var matrix = this.container.styles.transform;
        this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
      }
      if (this.container.styles.overflowX !== 0 /* VISIBLE */) {
        var borderBox = calculateBorderBoxPath(this.curves);
        var paddingBox = calculatePaddingBoxPath(this.curves);
        if (equalPath(borderBox, paddingBox)) {
          this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
        } else {
          this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */));
          this.effects.push(new ClipEffect(paddingBox, 4 /* CONTENT */));
        }
      }
    }
    ElementPaint.prototype.getEffects = function (target) {
      var inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(this.container.styles.position) === -1;
      var parent = this.parent;
      var effects = this.effects.slice(0);
      while (parent) {
        var croplessEffects = parent.effects.filter(function (effect) {
          return !isClipEffect(effect);
        });
        if (inFlow || parent.container.styles.position !== 0 /* STATIC */ || !parent.parent) {
          effects.unshift.apply(effects, croplessEffects);
          inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(parent.container.styles.position) === -1;
          if (parent.container.styles.overflowX !== 0 /* VISIBLE */) {
            var borderBox = calculateBorderBoxPath(parent.curves);
            var paddingBox = calculatePaddingBoxPath(parent.curves);
            if (!equalPath(borderBox, paddingBox)) {
              effects.unshift(new ClipEffect(paddingBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
            }
          }
        } else {
          effects.unshift.apply(effects, croplessEffects);
        }
        parent = parent.parent;
      }
      return effects.filter(function (effect) {
        return contains(effect.target, target);
      });
    };
    return ElementPaint;
  }();
  var _parseStackTree = function parseStackTree(parent, stackingContext, realStackingContext, listItems) {
    parent.container.elements.forEach(function (child) {
      var treatAsRealStackingContext = contains(child.flags, 4 /* CREATES_REAL_STACKING_CONTEXT */);
      var createsStackingContext = contains(child.flags, 2 /* CREATES_STACKING_CONTEXT */);
      var paintContainer = new ElementPaint(child, parent);
      if (contains(child.styles.display, 2048 /* LIST_ITEM */)) {
        listItems.push(paintContainer);
      }
      var listOwnerItems = contains(child.flags, 8 /* IS_LIST_OWNER */) ? [] : listItems;
      if (treatAsRealStackingContext || createsStackingContext) {
        var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
        var stack = new StackingContext(paintContainer);
        if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
          var order_1 = child.styles.zIndex.order;
          if (order_1 < 0) {
            var index_1 = 0;
            parentStack.negativeZIndex.some(function (current, i) {
              if (order_1 > current.element.container.styles.zIndex.order) {
                index_1 = i;
                return false;
              } else if (index_1 > 0) {
                return true;
              }
              return false;
            });
            parentStack.negativeZIndex.splice(index_1, 0, stack);
          } else if (order_1 > 0) {
            var index_2 = 0;
            parentStack.positiveZIndex.some(function (current, i) {
              if (order_1 >= current.element.container.styles.zIndex.order) {
                index_2 = i + 1;
                return false;
              } else if (index_2 > 0) {
                return true;
              }
              return false;
            });
            parentStack.positiveZIndex.splice(index_2, 0, stack);
          } else {
            parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
          }
        } else {
          if (child.styles.isFloating()) {
            parentStack.nonPositionedFloats.push(stack);
          } else {
            parentStack.nonPositionedInlineLevel.push(stack);
          }
        }
        _parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
      } else {
        if (child.styles.isInlineLevel()) {
          stackingContext.inlineLevel.push(paintContainer);
        } else {
          stackingContext.nonInlineLevel.push(paintContainer);
        }
        _parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
      }
      if (contains(child.flags, 8 /* IS_LIST_OWNER */)) {
        processListItems(child, listOwnerItems);
      }
    });
  };
  var processListItems = function processListItems(owner, elements) {
    var numbering = owner instanceof OLElementContainer ? owner.start : 1;
    var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
    for (var i = 0; i < elements.length; i++) {
      var item = elements[i];
      if (item.container instanceof LIElementContainer && typeof item.container.value === 'number' && item.container.value !== 0) {
        numbering = item.container.value;
      }
      item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
      numbering += reversed ? -1 : 1;
    }
  };
  var parseStackingContexts = function parseStackingContexts(container) {
    var paintContainer = new ElementPaint(container, null);
    var root = new StackingContext(paintContainer);
    var listItems = [];
    _parseStackTree(paintContainer, root, root, listItems);
    processListItems(paintContainer.container, listItems);
    return root;
  };
  var parsePathForBorder = function parsePathForBorder(curves, borderSide) {
    switch (borderSide) {
      case 0:
        return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
      case 1:
        return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
      case 2:
        return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
      case 3:
      default:
        return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
    }
  };
  var parsePathForBorderDoubleOuter = function parsePathForBorderDoubleOuter(curves, borderSide) {
    switch (borderSide) {
      case 0:
        return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
      case 1:
        return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
      case 2:
        return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
      case 3:
      default:
        return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
    }
  };
  var parsePathForBorderDoubleInner = function parsePathForBorderDoubleInner(curves, borderSide) {
    switch (borderSide) {
      case 0:
        return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
      case 1:
        return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
      case 2:
        return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
      case 3:
      default:
        return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
    }
  };
  var parsePathForBorderStroke = function parsePathForBorderStroke(curves, borderSide) {
    switch (borderSide) {
      case 0:
        return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
      case 1:
        return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
      case 2:
        return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
      case 3:
      default:
        return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
    }
  };
  var createStrokePathFromCurves = function createStrokePathFromCurves(outer1, outer2) {
    var path = [];
    if (isBezierCurve(outer1)) {
      path.push(outer1.subdivide(0.5, false));
    } else {
      path.push(outer1);
    }
    if (isBezierCurve(outer2)) {
      path.push(outer2.subdivide(0.5, true));
    } else {
      path.push(outer2);
    }
    return path;
  };
  var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
    var path = [];
    if (isBezierCurve(outer1)) {
      path.push(outer1.subdivide(0.5, false));
    } else {
      path.push(outer1);
    }
    if (isBezierCurve(outer2)) {
      path.push(outer2.subdivide(0.5, true));
    } else {
      path.push(outer2);
    }
    if (isBezierCurve(inner2)) {
      path.push(inner2.subdivide(0.5, true).reverse());
    } else {
      path.push(inner2);
    }
    if (isBezierCurve(inner1)) {
      path.push(inner1.subdivide(0.5, false).reverse());
    } else {
      path.push(inner1);
    }
    return path;
  };
  var paddingBox = function paddingBox(element) {
    var bounds = element.bounds;
    var styles = element.styles;
    return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
  };
  var contentBox = function contentBox(element) {
    var styles = element.styles;
    var bounds = element.bounds;
    var paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width);
    var paddingRight = getAbsoluteValue(styles.paddingRight, bounds.width);
    var paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width);
    var paddingBottom = getAbsoluteValue(styles.paddingBottom, bounds.width);
    return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
  };
  var calculateBackgroundPositioningArea = function calculateBackgroundPositioningArea(backgroundOrigin, element) {
    if (backgroundOrigin === 0 /* BORDER_BOX */) {
      return element.bounds;
    }
    if (backgroundOrigin === 2 /* CONTENT_BOX */) {
      return contentBox(element);
    }
    return paddingBox(element);
  };
  var calculateBackgroundPaintingArea = function calculateBackgroundPaintingArea(backgroundClip, element) {
    if (backgroundClip === 0 /* BORDER_BOX */) {
      return element.bounds;
    }
    if (backgroundClip === 2 /* CONTENT_BOX */) {
      return contentBox(element);
    }
    return paddingBox(element);
  };
  var calculateBackgroundRendering = function calculateBackgroundRendering(container, index, intrinsicSize) {
    var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
    var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
    var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
    var sizeWidth = backgroundImageSize[0],
      sizeHeight = backgroundImageSize[1];
    var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
    var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
    var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
    var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
    return [path, offsetX, offsetY, sizeWidth, sizeHeight];
  };
  var isAuto = function isAuto(token) {
    return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
  };
  var hasIntrinsicValue = function hasIntrinsicValue(value) {
    return typeof value === 'number';
  };
  var calculateBackgroundSize = function calculateBackgroundSize(size, _a, bounds) {
    var intrinsicWidth = _a[0],
      intrinsicHeight = _a[1],
      intrinsicProportion = _a[2];
    var first = size[0],
      second = size[1];
    if (!first) {
      return [0, 0];
    }
    if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
      return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
    }
    var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
    if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
      if (hasIntrinsicValue(intrinsicProportion)) {
        var targetRatio = bounds.width / bounds.height;
        return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
      }
      return [bounds.width, bounds.height];
    }
    var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
    var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
    var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
    // If the background-size is auto or auto auto:
    if (isAuto(first) && (!second || isAuto(second))) {
      // If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
      if (hasIntrinsicWidth && hasIntrinsicHeight) {
        return [intrinsicWidth, intrinsicHeight];
      }
      // If the image has no intrinsic dimensions and has no intrinsic proportions,
      // it's rendered at the size of the background positioning area.
      if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
        return [bounds.width, bounds.height];
      }
      // TODO If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
      // If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
      // The other dimension is computed using the specified dimension and the intrinsic proportions.
      if (hasIntrinsicDimensions && hasIntrinsicProportion) {
        var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
        var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
        return [width_1, height_1];
      }
      // If the image has only one intrinsic dimension but has no intrinsic proportions,
      // it's rendered using the specified dimension and the other dimension of the background positioning area.
      var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
      var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
      return [width_2, height_2];
    }
    // If the image has intrinsic proportions, it's stretched to the specified dimension.
    // The unspecified dimension is computed using the specified dimension and the intrinsic proportions.
    if (hasIntrinsicProportion) {
      var width_3 = 0;
      var height_3 = 0;
      if (isLengthPercentage(first)) {
        width_3 = getAbsoluteValue(first, bounds.width);
      } else if (isLengthPercentage(second)) {
        height_3 = getAbsoluteValue(second, bounds.height);
      }
      if (isAuto(first)) {
        width_3 = height_3 * intrinsicProportion;
      } else if (!second || isAuto(second)) {
        height_3 = width_3 / intrinsicProportion;
      }
      return [width_3, height_3];
    }
    // If the image has no intrinsic proportions, it's stretched to the specified dimension.
    // The unspecified dimension is computed using the image's corresponding intrinsic dimension,
    // if there is one. If there is no such intrinsic dimension,
    // it becomes the corresponding dimension of the background positioning area.
    var width = null;
    var height = null;
    if (isLengthPercentage(first)) {
      width = getAbsoluteValue(first, bounds.width);
    } else if (second && isLengthPercentage(second)) {
      height = getAbsoluteValue(second, bounds.height);
    }
    if (width !== null && (!second || isAuto(second))) {
      height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
    }
    if (height !== null && isAuto(first)) {
      width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
    }
    if (width !== null && height !== null) {
      return [width, height];
    }
    throw new Error("Unable to calculate background-size for element");
  };
  var getBackgroundValueForIndex = function getBackgroundValueForIndex(values, index) {
    var value = values[index];
    if (typeof value === 'undefined') {
      return values[0];
    }
    return value;
  };
  var calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
    var x = _a[0],
      y = _a[1];
    var width = _b[0],
      height = _b[1];
    switch (repeat) {
      case 2 /* REPEAT_X */:
        return [new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))];
      case 3 /* REPEAT_Y */:
        return [new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))];
      case 1 /* NO_REPEAT */:
        return [new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)), new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))];
      default:
        return [new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))];
    }
  };
  var SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  var SAMPLE_TEXT = 'Hidden Text';
  var FontMetrics = /** @class */function () {
    function FontMetrics(document) {
      this._data = {};
      this._document = document;
    }
    FontMetrics.prototype.parseMetrics = function (fontFamily, fontSize) {
      var container = this._document.createElement('div');
      var img = this._document.createElement('img');
      var span = this._document.createElement('span');
      var body = this._document.body;
      container.style.visibility = 'hidden';
      container.style.fontFamily = fontFamily;
      container.style.fontSize = fontSize;
      container.style.margin = '0';
      container.style.padding = '0';
      container.style.whiteSpace = 'nowrap';
      body.appendChild(container);
      img.src = SMALL_IMAGE;
      img.width = 1;
      img.height = 1;
      img.style.margin = '0';
      img.style.padding = '0';
      img.style.verticalAlign = 'baseline';
      span.style.fontFamily = fontFamily;
      span.style.fontSize = fontSize;
      span.style.margin = '0';
      span.style.padding = '0';
      span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
      container.appendChild(span);
      container.appendChild(img);
      var baseline = img.offsetTop - span.offsetTop + 2;
      container.removeChild(span);
      container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
      container.style.lineHeight = 'normal';
      img.style.verticalAlign = 'super';
      var middle = img.offsetTop - container.offsetTop + 2;
      body.removeChild(container);
      return {
        baseline: baseline,
        middle: middle
      };
    };
    FontMetrics.prototype.getMetrics = function (fontFamily, fontSize) {
      var key = fontFamily + " " + fontSize;
      if (typeof this._data[key] === 'undefined') {
        this._data[key] = this.parseMetrics(fontFamily, fontSize);
      }
      return this._data[key];
    };
    return FontMetrics;
  }();
  var Renderer = /** @class */function () {
    function Renderer(context, options) {
      this.context = context;
      this.options = options;
    }
    return Renderer;
  }();
  var MASK_OFFSET = 10000;
  var CanvasRenderer = /** @class */function (_super) {
    __extends(CanvasRenderer, _super);
    function CanvasRenderer(context, options) {
      var _this = _super.call(this, context, options) || this;
      _this._activeEffects = [];
      _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
      _this.ctx = _this.canvas.getContext('2d');
      if (!options.canvas) {
        _this.canvas.width = Math.floor(options.width * options.scale);
        _this.canvas.height = Math.floor(options.height * options.scale);
        _this.canvas.style.width = options.width + "px";
        _this.canvas.style.height = options.height + "px";
      }
      _this.fontMetrics = new FontMetrics(document);
      _this.ctx.scale(_this.options.scale, _this.options.scale);
      _this.ctx.translate(-options.x, -options.y);
      _this.ctx.textBaseline = 'bottom';
      _this._activeEffects = [];
      _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
      return _this;
    }
    CanvasRenderer.prototype.applyEffects = function (effects) {
      var _this = this;
      while (this._activeEffects.length) {
        this.popEffect();
      }
      effects.forEach(function (effect) {
        return _this.applyEffect(effect);
      });
    };
    CanvasRenderer.prototype.applyEffect = function (effect) {
      this.ctx.save();
      if (isOpacityEffect(effect)) {
        this.ctx.globalAlpha = effect.opacity;
      }
      if (isTransformEffect(effect)) {
        this.ctx.translate(effect.offsetX, effect.offsetY);
        this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
        this.ctx.translate(-effect.offsetX, -effect.offsetY);
      }
      if (isClipEffect(effect)) {
        this.path(effect.path);
        this.ctx.clip();
      }
      this._activeEffects.push(effect);
    };
    CanvasRenderer.prototype.popEffect = function () {
      this._activeEffects.pop();
      this.ctx.restore();
    };
    CanvasRenderer.prototype.renderStack = function (stack) {
      return __awaiter(this, void 0, void 0, function () {
        var styles;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              styles = stack.element.container.styles;
              if (!styles.isVisible()) return [3 /*break*/, 2];
              return [4 /*yield*/, this.renderStackContent(stack)];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              return [2 /*return*/];
          }
        });
      });
    };
    CanvasRenderer.prototype.renderNode = function (paint) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (contains(paint.container.flags, 16 /* DEBUG_RENDER */)) {
                debugger;
              }
              if (!paint.container.styles.isVisible()) return [3 /*break*/, 3];
              return [4 /*yield*/, this.renderNodeBackgroundAndBorders(paint)];
            case 1:
              _a.sent();
              return [4 /*yield*/, this.renderNodeContent(paint)];
            case 2:
              _a.sent();
              _a.label = 3;
            case 3:
              return [2 /*return*/];
          }
        });
      });
    };
    CanvasRenderer.prototype.renderTextWithLetterSpacing = function (text, letterSpacing, baseline) {
      var _this = this;
      if (letterSpacing === 0) {
        this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
      } else {
        var letters = segmentGraphemes(text.text);
        letters.reduce(function (left, letter) {
          _this.ctx.fillText(letter, left, text.bounds.top + baseline);
          return left + _this.ctx.measureText(letter).width;
        }, text.bounds.left);
      }
    };
    CanvasRenderer.prototype.createFontStyle = function (styles) {
      var fontVariant = styles.fontVariant.filter(function (variant) {
        return variant === 'normal' || variant === 'small-caps';
      }).join('');
      var fontFamily = fixIOSSystemFonts(styles.fontFamily).join(', ');
      var fontSize = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
      return [[styles.fontStyle, fontVariant, styles.fontWeight, fontSize, fontFamily].join(' '), fontFamily, fontSize];
    };
    CanvasRenderer.prototype.renderTextNode = function (text, styles) {
      return __awaiter(this, void 0, void 0, function () {
        var _a, font, fontFamily, fontSize, _b, baseline, middle, paintOrder;
        var _this = this;
        return __generator(this, function (_c) {
          _a = this.createFontStyle(styles), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
          this.ctx.font = font;
          this.ctx.direction = styles.direction === 1 /* RTL */ ? 'rtl' : 'ltr';
          this.ctx.textAlign = 'left';
          this.ctx.textBaseline = 'alphabetic';
          _b = this.fontMetrics.getMetrics(fontFamily, fontSize), baseline = _b.baseline, middle = _b.middle;
          paintOrder = styles.paintOrder;
          text.textBounds.forEach(function (text) {
            paintOrder.forEach(function (paintOrderLayer) {
              switch (paintOrderLayer) {
                case 0 /* FILL */:
                  _this.ctx.fillStyle = asString(styles.color);
                  _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                  var textShadows = styles.textShadow;
                  if (textShadows.length && text.text.trim().length) {
                    textShadows.slice(0).reverse().forEach(function (textShadow) {
                      _this.ctx.shadowColor = asString(textShadow.color);
                      _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
                      _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
                      _this.ctx.shadowBlur = textShadow.blur.number;
                      _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                    });
                    _this.ctx.shadowColor = '';
                    _this.ctx.shadowOffsetX = 0;
                    _this.ctx.shadowOffsetY = 0;
                    _this.ctx.shadowBlur = 0;
                  }
                  if (styles.textDecorationLine.length) {
                    _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                    styles.textDecorationLine.forEach(function (textDecorationLine) {
                      switch (textDecorationLine) {
                        case 1 /* UNDERLINE */:
                          // Draws a line at the baseline of the font
                          // TODO As some browsers display the line as more than 1px if the font-size is big,
                          // need to take that into account both in position and size
                          _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);
                          break;
                        case 2 /* OVERLINE */:
                          _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);
                          break;
                        case 3 /* LINE_THROUGH */:
                          // TODO try and find exact position for line-through
                          _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);
                          break;
                      }
                    });
                  }
                  break;
                case 1 /* STROKE */:
                  if (styles.webkitTextStrokeWidth && text.text.trim().length) {
                    _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                    _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    _this.ctx.lineJoin = !!window.chrome ? 'miter' : 'round';
                    _this.ctx.strokeText(text.text, text.bounds.left, text.bounds.top + baseline);
                  }
                  _this.ctx.strokeStyle = '';
                  _this.ctx.lineWidth = 0;
                  _this.ctx.lineJoin = 'miter';
                  break;
              }
            });
          });
          return [2 /*return*/];
        });
      });
    };
    CanvasRenderer.prototype.renderReplacedElement = function (container, curves, image) {
      if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
        var box = contentBox(container);
        var path = calculatePaddingBoxPath(curves);
        this.path(path);
        this.ctx.save();
        this.ctx.clip();
        this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
        this.ctx.restore();
      }
    };
    CanvasRenderer.prototype.renderNodeContent = function (paint) {
      return __awaiter(this, void 0, void 0, function () {
        var container, curves, styles, _i, _a, child, image, image, iframeRenderer, canvas, size, _b, fontFamily, fontSize, baseline, bounds, x, textBounds, img, image, url, fontFamily, bounds;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              this.applyEffects(paint.getEffects(4 /* CONTENT */));
              container = paint.container;
              curves = paint.curves;
              styles = container.styles;
              _i = 0, _a = container.textNodes;
              _c.label = 1;
            case 1:
              if (!(_i < _a.length)) return [3 /*break*/, 4];
              child = _a[_i];
              return [4 /*yield*/, this.renderTextNode(child, styles)];
            case 2:
              _c.sent();
              _c.label = 3;
            case 3:
              _i++;
              return [3 /*break*/, 1];
            case 4:
              if (!(container instanceof ImageElementContainer)) return [3 /*break*/, 8];
              _c.label = 5;
            case 5:
              _c.trys.push([5, 7,, 8]);
              return [4 /*yield*/, this.context.cache.match(container.src)];
            case 6:
              image = _c.sent();
              this.renderReplacedElement(container, curves, image);
              return [3 /*break*/, 8];
            case 7:
              _c.sent();
              this.context.logger.error("Error loading image " + container.src);
              return [3 /*break*/, 8];
            case 8:
              if (container instanceof CanvasElementContainer) {
                this.renderReplacedElement(container, curves, container.canvas);
              }
              if (!(container instanceof SVGElementContainer)) return [3 /*break*/, 12];
              _c.label = 9;
            case 9:
              _c.trys.push([9, 11,, 12]);
              return [4 /*yield*/, this.context.cache.match(container.svg)];
            case 10:
              image = _c.sent();
              this.renderReplacedElement(container, curves, image);
              return [3 /*break*/, 12];
            case 11:
              _c.sent();
              this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
              return [3 /*break*/, 12];
            case 12:
              if (!(container instanceof IFrameElementContainer && container.tree)) return [3 /*break*/, 14];
              iframeRenderer = new CanvasRenderer(this.context, {
                scale: this.options.scale,
                backgroundColor: container.backgroundColor,
                x: 0,
                y: 0,
                width: container.width,
                height: container.height
              });
              return [4 /*yield*/, iframeRenderer.render(container.tree)];
            case 13:
              canvas = _c.sent();
              if (container.width && container.height) {
                this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
              }
              _c.label = 14;
            case 14:
              if (container instanceof InputElementContainer) {
                size = Math.min(container.bounds.width, container.bounds.height);
                if (container.type === CHECKBOX) {
                  if (container.checked) {
                    this.ctx.save();
                    this.path([new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)]);
                    this.ctx.fillStyle = asString(INPUT_COLOR);
                    this.ctx.fill();
                    this.ctx.restore();
                  }
                } else if (container.type === RADIO) {
                  if (container.checked) {
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                    this.ctx.fillStyle = asString(INPUT_COLOR);
                    this.ctx.fill();
                    this.ctx.restore();
                  }
                }
              }
              if (isTextInputElement(container) && container.value.length) {
                _b = this.createFontStyle(styles), fontFamily = _b[0], fontSize = _b[1];
                baseline = this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
                this.ctx.font = fontFamily;
                this.ctx.fillStyle = asString(styles.color);
                this.ctx.textBaseline = 'alphabetic';
                this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                bounds = contentBox(container);
                x = 0;
                switch (container.styles.textAlign) {
                  case 1 /* CENTER */:
                    x += bounds.width / 2;
                    break;
                  case 2 /* RIGHT */:
                    x += bounds.width;
                    break;
                }
                textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                this.ctx.save();
                this.path([new Vector(bounds.left, bounds.top), new Vector(bounds.left + bounds.width, bounds.top), new Vector(bounds.left + bounds.width, bounds.top + bounds.height), new Vector(bounds.left, bounds.top + bounds.height)]);
                this.ctx.clip();
                this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                this.ctx.restore();
                this.ctx.textBaseline = 'alphabetic';
                this.ctx.textAlign = 'left';
              }
              if (!contains(container.styles.display, 2048 /* LIST_ITEM */)) return [3 /*break*/, 20];
              if (!(container.styles.listStyleImage !== null)) return [3 /*break*/, 19];
              img = container.styles.listStyleImage;
              if (!(img.type === 0 /* URL */)) return [3 /*break*/, 18];
              image = void 0;
              url = img.url;
              _c.label = 15;
            case 15:
              _c.trys.push([15, 17,, 18]);
              return [4 /*yield*/, this.context.cache.match(url)];
            case 16:
              image = _c.sent();
              this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
              return [3 /*break*/, 18];
            case 17:
              _c.sent();
              this.context.logger.error("Error loading list-style-image " + url);
              return [3 /*break*/, 18];
            case 18:
              return [3 /*break*/, 20];
            case 19:
              if (paint.listValue && container.styles.listStyleType !== -1 /* NONE */) {
                fontFamily = this.createFontStyle(styles)[0];
                this.ctx.font = fontFamily;
                this.ctx.fillStyle = asString(styles.color);
                this.ctx.textBaseline = 'middle';
                this.ctx.textAlign = 'right';
                bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                this.ctx.textBaseline = 'bottom';
                this.ctx.textAlign = 'left';
              }
              _c.label = 20;
            case 20:
              return [2 /*return*/];
          }
        });
      });
    };
    CanvasRenderer.prototype.renderStackContent = function (stack) {
      return __awaiter(this, void 0, void 0, function () {
        var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
        return __generator(this, function (_p) {
          switch (_p.label) {
            case 0:
              if (contains(stack.element.container.flags, 16 /* DEBUG_RENDER */)) {
                debugger;
              }
              // https://www.w3.org/TR/css-position-3/#painting-order
              // 1. the background and borders of the element forming the stacking context.
              return [4 /*yield*/, this.renderNodeBackgroundAndBorders(stack.element)];
            case 1:
              // https://www.w3.org/TR/css-position-3/#painting-order
              // 1. the background and borders of the element forming the stacking context.
              _p.sent();
              _i = 0, _a = stack.negativeZIndex;
              _p.label = 2;
            case 2:
              if (!(_i < _a.length)) return [3 /*break*/, 5];
              child = _a[_i];
              return [4 /*yield*/, this.renderStack(child)];
            case 3:
              _p.sent();
              _p.label = 4;
            case 4:
              _i++;
              return [3 /*break*/, 2];
            case 5:
              // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
              return [4 /*yield*/, this.renderNodeContent(stack.element)];
            case 6:
              // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
              _p.sent();
              _b = 0, _c = stack.nonInlineLevel;
              _p.label = 7;
            case 7:
              if (!(_b < _c.length)) return [3 /*break*/, 10];
              child = _c[_b];
              return [4 /*yield*/, this.renderNode(child)];
            case 8:
              _p.sent();
              _p.label = 9;
            case 9:
              _b++;
              return [3 /*break*/, 7];
            case 10:
              _d = 0, _e = stack.nonPositionedFloats;
              _p.label = 11;
            case 11:
              if (!(_d < _e.length)) return [3 /*break*/, 14];
              child = _e[_d];
              return [4 /*yield*/, this.renderStack(child)];
            case 12:
              _p.sent();
              _p.label = 13;
            case 13:
              _d++;
              return [3 /*break*/, 11];
            case 14:
              _f = 0, _g = stack.nonPositionedInlineLevel;
              _p.label = 15;
            case 15:
              if (!(_f < _g.length)) return [3 /*break*/, 18];
              child = _g[_f];
              return [4 /*yield*/, this.renderStack(child)];
            case 16:
              _p.sent();
              _p.label = 17;
            case 17:
              _f++;
              return [3 /*break*/, 15];
            case 18:
              _h = 0, _j = stack.inlineLevel;
              _p.label = 19;
            case 19:
              if (!(_h < _j.length)) return [3 /*break*/, 22];
              child = _j[_h];
              return [4 /*yield*/, this.renderNode(child)];
            case 20:
              _p.sent();
              _p.label = 21;
            case 21:
              _h++;
              return [3 /*break*/, 19];
            case 22:
              _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
              _p.label = 23;
            case 23:
              if (!(_k < _l.length)) return [3 /*break*/, 26];
              child = _l[_k];
              return [4 /*yield*/, this.renderStack(child)];
            case 24:
              _p.sent();
              _p.label = 25;
            case 25:
              _k++;
              return [3 /*break*/, 23];
            case 26:
              _m = 0, _o = stack.positiveZIndex;
              _p.label = 27;
            case 27:
              if (!(_m < _o.length)) return [3 /*break*/, 30];
              child = _o[_m];
              return [4 /*yield*/, this.renderStack(child)];
            case 28:
              _p.sent();
              _p.label = 29;
            case 29:
              _m++;
              return [3 /*break*/, 27];
            case 30:
              return [2 /*return*/];
          }
        });
      });
    };
    CanvasRenderer.prototype.mask = function (paths) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(this.canvas.width, 0);
      this.ctx.lineTo(this.canvas.width, this.canvas.height);
      this.ctx.lineTo(0, this.canvas.height);
      this.ctx.lineTo(0, 0);
      this.formatPath(paths.slice(0).reverse());
      this.ctx.closePath();
    };
    CanvasRenderer.prototype.path = function (paths) {
      this.ctx.beginPath();
      this.formatPath(paths);
      this.ctx.closePath();
    };
    CanvasRenderer.prototype.formatPath = function (paths) {
      var _this = this;
      paths.forEach(function (point, index) {
        var start = isBezierCurve(point) ? point.start : point;
        if (index === 0) {
          _this.ctx.moveTo(start.x, start.y);
        } else {
          _this.ctx.lineTo(start.x, start.y);
        }
        if (isBezierCurve(point)) {
          _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
        }
      });
    };
    CanvasRenderer.prototype.renderRepeat = function (path, pattern, offsetX, offsetY) {
      this.path(path);
      this.ctx.fillStyle = pattern;
      this.ctx.translate(offsetX, offsetY);
      this.ctx.fill();
      this.ctx.translate(-offsetX, -offsetY);
    };
    CanvasRenderer.prototype.resizeImage = function (image, width, height) {
      var _a;
      if (image.width === width && image.height === height) {
        return image;
      }
      var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
      var canvas = ownerDocument.createElement('canvas');
      canvas.width = Math.max(1, width);
      canvas.height = Math.max(1, height);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
      return canvas;
    };
    CanvasRenderer.prototype.renderBackgroundImage = function (container) {
      return __awaiter(this, void 0, void 0, function () {
        var index, _loop_1, this_1, _i, _a, backgroundImage;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              index = container.styles.backgroundImage.length - 1;
              _loop_1 = function _loop_1(backgroundImage) {
                var image, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position, x, y, _g, rx, ry, radialGradient_1, midX, midY, f, invF;
                return __generator(this, function (_h) {
                  switch (_h.label) {
                    case 0:
                      if (!(backgroundImage.type === 0 /* URL */)) return [3 /*break*/, 5];
                      image = void 0;
                      url = backgroundImage.url;
                      _h.label = 1;
                    case 1:
                      _h.trys.push([1, 3,, 4]);
                      return [4 /*yield*/, this_1.context.cache.match(url)];
                    case 2:
                      image = _h.sent();
                      return [3 /*break*/, 4];
                    case 3:
                      _h.sent();
                      this_1.context.logger.error("Error loading background-image " + url);
                      return [3 /*break*/, 4];
                    case 4:
                      if (image) {
                        _c = calculateBackgroundRendering(container, index, [image.width, image.height, image.width / image.height]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                        pattern = this_1.ctx.createPattern(this_1.resizeImage(image, width, height), 'repeat');
                        this_1.renderRepeat(path, pattern, x, y);
                      }
                      return [3 /*break*/, 6];
                    case 5:
                      if (isLinearGradient(backgroundImage)) {
                        _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                        _e = calculateGradientDirection(backgroundImage.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                        canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;
                        ctx = canvas.getContext('2d');
                        gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                        processColorStops(backgroundImage.stops, lineLength).forEach(function (colorStop) {
                          return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                        });
                        ctx.fillStyle = gradient_1;
                        ctx.fillRect(0, 0, width, height);
                        if (width > 0 && height > 0) {
                          pattern = this_1.ctx.createPattern(canvas, 'repeat');
                          this_1.renderRepeat(path, pattern, x, y);
                        }
                      } else if (isRadialGradient(backgroundImage)) {
                        _f = calculateBackgroundRendering(container, index, [null, null, null]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                        position = backgroundImage.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage.position;
                        x = getAbsoluteValue(position[0], width);
                        y = getAbsoluteValue(position[position.length - 1], height);
                        _g = calculateRadius(backgroundImage, x, y, width, height), rx = _g[0], ry = _g[1];
                        if (rx > 0 && ry > 0) {
                          radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                          processColorStops(backgroundImage.stops, rx * 2).forEach(function (colorStop) {
                            return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                          });
                          this_1.path(path);
                          this_1.ctx.fillStyle = radialGradient_1;
                          if (rx !== ry) {
                            midX = container.bounds.left + 0.5 * container.bounds.width;
                            midY = container.bounds.top + 0.5 * container.bounds.height;
                            f = ry / rx;
                            invF = 1 / f;
                            this_1.ctx.save();
                            this_1.ctx.translate(midX, midY);
                            this_1.ctx.transform(1, 0, 0, f, 0, 0);
                            this_1.ctx.translate(-midX, -midY);
                            this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                            this_1.ctx.restore();
                          } else {
                            this_1.ctx.fill();
                          }
                        }
                      }
                      _h.label = 6;
                    case 6:
                      index--;
                      return [2 /*return*/];
                  }
                });
              };
              this_1 = this;
              _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
              _b.label = 1;
            case 1:
              if (!(_i < _a.length)) return [3 /*break*/, 4];
              backgroundImage = _a[_i];
              return [5 /*yield**/, _loop_1(backgroundImage)];
            case 2:
              _b.sent();
              _b.label = 3;
            case 3:
              _i++;
              return [3 /*break*/, 1];
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };
    CanvasRenderer.prototype.renderSolidBorder = function (color, side, curvePoints) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.path(parsePathForBorder(curvePoints, side));
          this.ctx.fillStyle = asString(color);
          this.ctx.fill();
          return [2 /*return*/];
        });
      });
    };
    CanvasRenderer.prototype.renderDoubleBorder = function (color, width, side, curvePoints) {
      return __awaiter(this, void 0, void 0, function () {
        var outerPaths, innerPaths;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(width < 3)) return [3 /*break*/, 2];
              return [4 /*yield*/, this.renderSolidBorder(color, side, curvePoints)];
            case 1:
              _a.sent();
              return [2 /*return*/];
            case 2:
              outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
              this.path(outerPaths);
              this.ctx.fillStyle = asString(color);
              this.ctx.fill();
              innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
              this.path(innerPaths);
              this.ctx.fill();
              return [2 /*return*/];
          }
        });
      });
    };
    CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function (paint) {
      return __awaiter(this, void 0, void 0, function () {
        var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
        var _this = this;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.applyEffects(paint.getEffects(2 /* BACKGROUND_BORDERS */));
              styles = paint.container.styles;
              hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
              borders = [{
                style: styles.borderTopStyle,
                color: styles.borderTopColor,
                width: styles.borderTopWidth
              }, {
                style: styles.borderRightStyle,
                color: styles.borderRightColor,
                width: styles.borderRightWidth
              }, {
                style: styles.borderBottomStyle,
                color: styles.borderBottomColor,
                width: styles.borderBottomWidth
              }, {
                style: styles.borderLeftStyle,
                color: styles.borderLeftColor,
                width: styles.borderLeftWidth
              }];
              backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
              if (!(hasBackground || styles.boxShadow.length)) return [3 /*break*/, 2];
              this.ctx.save();
              this.path(backgroundPaintingArea);
              this.ctx.clip();
              if (!isTransparent(styles.backgroundColor)) {
                this.ctx.fillStyle = asString(styles.backgroundColor);
                this.ctx.fill();
              }
              return [4 /*yield*/, this.renderBackgroundImage(paint.container)];
            case 1:
              _a.sent();
              this.ctx.restore();
              styles.boxShadow.slice(0).reverse().forEach(function (shadow) {
                _this.ctx.save();
                var borderBoxArea = calculateBorderBoxPath(paint.curves);
                var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                if (shadow.inset) {
                  _this.path(borderBoxArea);
                  _this.ctx.clip();
                  _this.mask(shadowPaintingArea);
                } else {
                  _this.mask(borderBoxArea);
                  _this.ctx.clip();
                  _this.path(shadowPaintingArea);
                }
                _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                _this.ctx.shadowOffsetY = shadow.offsetY.number;
                _this.ctx.shadowColor = asString(shadow.color);
                _this.ctx.shadowBlur = shadow.blur.number;
                _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : 'rgba(0,0,0,1)';
                _this.ctx.fill();
                _this.ctx.restore();
              });
              _a.label = 2;
            case 2:
              side = 0;
              _i = 0, borders_1 = borders;
              _a.label = 3;
            case 3:
              if (!(_i < borders_1.length)) return [3 /*break*/, 13];
              border = borders_1[_i];
              if (!(border.style !== 0 /* NONE */ && !isTransparent(border.color) && border.width > 0)) return [3 /*break*/, 11];
              if (!(border.style === 2 /* DASHED */)) return [3 /*break*/, 5];
              return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2 /* DASHED */)];
            case 4:
              _a.sent();
              return [3 /*break*/, 11];
            case 5:
              if (!(border.style === 3 /* DOTTED */)) return [3 /*break*/, 7];
              return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3 /* DOTTED */)];
            case 6:
              _a.sent();
              return [3 /*break*/, 11];
            case 7:
              if (!(border.style === 4 /* DOUBLE */)) return [3 /*break*/, 9];
              return [4 /*yield*/, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
            case 8:
              _a.sent();
              return [3 /*break*/, 11];
            case 9:
              return [4 /*yield*/, this.renderSolidBorder(border.color, side, paint.curves)];
            case 10:
              _a.sent();
              _a.label = 11;
            case 11:
              side++;
              _a.label = 12;
            case 12:
              _i++;
              return [3 /*break*/, 3];
            case 13:
              return [2 /*return*/];
          }
        });
      });
    };
    CanvasRenderer.prototype.renderDashedDottedBorder = function (color, width, side, curvePoints, style) {
      return __awaiter(this, void 0, void 0, function () {
        var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
        return __generator(this, function (_a) {
          this.ctx.save();
          strokePaths = parsePathForBorderStroke(curvePoints, side);
          boxPaths = parsePathForBorder(curvePoints, side);
          if (style === 2 /* DASHED */) {
            this.path(boxPaths);
            this.ctx.clip();
          }
          if (isBezierCurve(boxPaths[0])) {
            startX = boxPaths[0].start.x;
            startY = boxPaths[0].start.y;
          } else {
            startX = boxPaths[0].x;
            startY = boxPaths[0].y;
          }
          if (isBezierCurve(boxPaths[1])) {
            endX = boxPaths[1].end.x;
            endY = boxPaths[1].end.y;
          } else {
            endX = boxPaths[1].x;
            endY = boxPaths[1].y;
          }
          if (side === 0 || side === 2) {
            length = Math.abs(startX - endX);
          } else {
            length = Math.abs(startY - endY);
          }
          this.ctx.beginPath();
          if (style === 3 /* DOTTED */) {
            this.formatPath(strokePaths);
          } else {
            this.formatPath(boxPaths.slice(0, 2));
          }
          dashLength = width < 3 ? width * 3 : width * 2;
          spaceLength = width < 3 ? width * 2 : width;
          if (style === 3 /* DOTTED */) {
            dashLength = width;
            spaceLength = width;
          }
          useLineDash = true;
          if (length <= dashLength * 2) {
            useLineDash = false;
          } else if (length <= dashLength * 2 + spaceLength) {
            multiplier = length / (2 * dashLength + spaceLength);
            dashLength *= multiplier;
            spaceLength *= multiplier;
          } else {
            numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
            minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
            maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
            spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
          }
          if (useLineDash) {
            if (style === 3 /* DOTTED */) {
              this.ctx.setLineDash([0, dashLength + spaceLength]);
            } else {
              this.ctx.setLineDash([dashLength, spaceLength]);
            }
          }
          if (style === 3 /* DOTTED */) {
            this.ctx.lineCap = 'round';
            this.ctx.lineWidth = width;
          } else {
            this.ctx.lineWidth = width * 2 + 1.1;
          }
          this.ctx.strokeStyle = asString(color);
          this.ctx.stroke();
          this.ctx.setLineDash([]);
          // dashed round edge gap
          if (style === 2 /* DASHED */) {
            if (isBezierCurve(boxPaths[0])) {
              path1 = boxPaths[3];
              path2 = boxPaths[0];
              this.ctx.beginPath();
              this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
              this.ctx.stroke();
            }
            if (isBezierCurve(boxPaths[1])) {
              path1 = boxPaths[1];
              path2 = boxPaths[2];
              this.ctx.beginPath();
              this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
              this.ctx.stroke();
            }
          }
          this.ctx.restore();
          return [2 /*return*/];
        });
      });
    };
    CanvasRenderer.prototype.render = function (element) {
      return __awaiter(this, void 0, void 0, function () {
        var stack;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (this.options.backgroundColor) {
                this.ctx.fillStyle = asString(this.options.backgroundColor);
                this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
              }
              stack = parseStackingContexts(element);
              return [4 /*yield*/, this.renderStack(stack)];
            case 1:
              _a.sent();
              this.applyEffects([]);
              return [2 /*return*/, this.canvas];
          }
        });
      });
    };
    return CanvasRenderer;
  }(Renderer);
  var isTextInputElement = function isTextInputElement(container) {
    if (container instanceof TextareaElementContainer) {
      return true;
    } else if (container instanceof SelectElementContainer) {
      return true;
    } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
      return true;
    }
    return false;
  };
  var calculateBackgroundCurvedPaintingArea = function calculateBackgroundCurvedPaintingArea(clip, curves) {
    switch (clip) {
      case 0 /* BORDER_BOX */:
        return calculateBorderBoxPath(curves);
      case 2 /* CONTENT_BOX */:
        return calculateContentBoxPath(curves);
      case 1 /* PADDING_BOX */:
      default:
        return calculatePaddingBoxPath(curves);
    }
  };
  var canvasTextAlign = function canvasTextAlign(textAlign) {
    switch (textAlign) {
      case 1 /* CENTER */:
        return 'center';
      case 2 /* RIGHT */:
        return 'right';
      case 0 /* LEFT */:
      default:
        return 'left';
    }
  };
  // see https://github.com/niklasvh/html2canvas/pull/2645
  var iOSBrokenFonts = ['-apple-system', 'system-ui'];
  var fixIOSSystemFonts = function fixIOSSystemFonts(fontFamilies) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? fontFamilies.filter(function (fontFamily) {
      return iOSBrokenFonts.indexOf(fontFamily) === -1;
    }) : fontFamilies;
  };
  var ForeignObjectRenderer = /** @class */function (_super) {
    __extends(ForeignObjectRenderer, _super);
    function ForeignObjectRenderer(context, options) {
      var _this = _super.call(this, context, options) || this;
      _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
      _this.ctx = _this.canvas.getContext('2d');
      _this.options = options;
      _this.canvas.width = Math.floor(options.width * options.scale);
      _this.canvas.height = Math.floor(options.height * options.scale);
      _this.canvas.style.width = options.width + "px";
      _this.canvas.style.height = options.height + "px";
      _this.ctx.scale(_this.options.scale, _this.options.scale);
      _this.ctx.translate(-options.x, -options.y);
      _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
      return _this;
    }
    ForeignObjectRenderer.prototype.render = function (element) {
      return __awaiter(this, void 0, void 0, function () {
        var svg, img;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
              return [4 /*yield*/, loadSerializedSVG(svg)];
            case 1:
              img = _a.sent();
              if (this.options.backgroundColor) {
                this.ctx.fillStyle = asString(this.options.backgroundColor);
                this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
              }
              this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
              return [2 /*return*/, this.canvas];
          }
        });
      });
    };
    return ForeignObjectRenderer;
  }(Renderer);
  var loadSerializedSVG = function loadSerializedSVG(svg) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.onerror = reject;
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
  };
  var Logger = /** @class */function () {
    function Logger(_a) {
      var id = _a.id,
        enabled = _a.enabled;
      this.id = id;
      this.enabled = enabled;
      this.start = Date.now();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.debug = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.enabled) {
        // eslint-disable-next-line no-console
        if (typeof window !== 'undefined' && window.console && typeof console.debug === 'function') {
          // eslint-disable-next-line no-console
          console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        } else {
          this.info.apply(this, args);
        }
      }
    };
    Logger.prototype.getTime = function () {
      return Date.now() - this.start;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.info = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.enabled) {
        // eslint-disable-next-line no-console
        if (typeof window !== 'undefined' && window.console && typeof console.info === 'function') {
          // eslint-disable-next-line no-console
          console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        }
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.warn = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.enabled) {
        // eslint-disable-next-line no-console
        if (typeof window !== 'undefined' && window.console && typeof console.warn === 'function') {
          // eslint-disable-next-line no-console
          console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        } else {
          this.info.apply(this, args);
        }
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.error = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.enabled) {
        // eslint-disable-next-line no-console
        if (typeof window !== 'undefined' && window.console && typeof console.error === 'function') {
          // eslint-disable-next-line no-console
          console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        } else {
          this.info.apply(this, args);
        }
      }
    };
    Logger.instances = {};
    return Logger;
  }();
  var Context = /** @class */function () {
    function Context(options, windowBounds) {
      var _a;
      this.windowBounds = windowBounds;
      this.instanceName = "#" + Context.instanceCount++;
      this.logger = new Logger({
        id: this.instanceName,
        enabled: options.logging
      });
      this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
    }
    Context.instanceCount = 1;
    return Context;
  }();
  var html2canvas = function html2canvas(element, options) {
    if (options === void 0) {
      options = {};
    }
    return renderElement(element, options);
  };
  if (typeof window !== 'undefined') {
    CacheStorage.setContext(window);
  }
  var renderElement = function renderElement(element, opts) {
    return __awaiter(void 0, void 0, void 0, function () {
      var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor, renderOptions, canvas, renderer, root, renderer;
      var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
      return __generator(this, function (_u) {
        switch (_u.label) {
          case 0:
            if (!element || _typeof(element) !== 'object') {
              return [2 /*return*/, Promise.reject('Invalid element provided as first argument')];
            }
            ownerDocument = element.ownerDocument;
            if (!ownerDocument) {
              throw new Error("Element is not attached to a Document");
            }
            defaultView = ownerDocument.defaultView;
            if (!defaultView) {
              throw new Error("Document is not attached to a Window");
            }
            resourceOptions = {
              allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
              imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15000,
              proxy: opts.proxy,
              useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
            };
            contextOptions = _assign({
              logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true,
              cache: opts.cache
            }, resourceOptions);
            windowOptions = {
              windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
              windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
              scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
              scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
            };
            windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
            context = new Context(contextOptions, windowBounds);
            foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
            cloneOptions = {
              allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
              onclone: opts.onclone,
              ignoreElements: opts.ignoreElements,
              inlineImages: foreignObjectRendering,
              copyStyles: foreignObjectRendering
            };
            context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
            documentCloner = new DocumentCloner(context, element, cloneOptions);
            clonedElement = documentCloner.clonedReferenceElement;
            if (!clonedElement) {
              return [2 /*return*/, Promise.reject("Unable to find element in cloned iframe")];
            }
            return [4 /*yield*/, documentCloner.toIFrame(ownerDocument, windowBounds)];
          case 1:
            container = _u.sent();
            _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ? parseDocumentSize(clonedElement.ownerDocument) : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
            backgroundColor = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
            renderOptions = {
              canvas: opts.canvas,
              backgroundColor: backgroundColor,
              scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
              x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
              y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
              width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
              height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
            };
            if (!foreignObjectRendering) return [3 /*break*/, 3];
            context.logger.debug("Document cloned, using foreign object rendering");
            renderer = new ForeignObjectRenderer(context, renderOptions);
            return [4 /*yield*/, renderer.render(clonedElement)];
          case 2:
            canvas = _u.sent();
            return [3 /*break*/, 5];
          case 3:
            context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
            context.logger.debug("Starting DOM parsing");
            root = parseTree(context, clonedElement);
            if (backgroundColor === root.styles.backgroundColor) {
              root.styles.backgroundColor = COLORS.TRANSPARENT;
            }
            context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
            renderer = new CanvasRenderer(context, renderOptions);
            return [4 /*yield*/, renderer.render(root)];
          case 4:
            canvas = _u.sent();
            _u.label = 5;
          case 5:
            if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
              if (!DocumentCloner.destroy(container)) {
                context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
              }
            }
            context.logger.debug("Finished rendering");
            return [2 /*return*/, canvas];
        }
      });
    });
  };
  var parseBackgroundColor = function parseBackgroundColor(context, element, backgroundColorOverride) {
    var ownerDocument = element.ownerDocument;
    // http://www.w3.org/TR/css3-background/#special-backgrounds
    var documentBackgroundColor = ownerDocument.documentElement ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
    var bodyBackgroundColor = ownerDocument.body ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
    var defaultBackgroundColor = typeof backgroundColorOverride === 'string' ? parseColor(context, backgroundColorOverride) : backgroundColorOverride === null ? COLORS.TRANSPARENT : 0xffffffff;
    return element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
  };
  return html2canvas;
});

/***/ }),

/***/ 1527:
/***/ (function(module) {

// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(this);

/***/ }),

/***/ 2750:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var now = __webpack_require__(1527),
  root = typeof window === 'undefined' ? __webpack_require__.g : window,
  vendors = ['moz', 'webkit'],
  suffix = 'AnimationFrame',
  raf = root['request' + suffix],
  caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0,
    id = 0,
    queue = [],
    frameDuration = 1000 / 60;
  raf = function raf(callback) {
    if (queue.length === 0) {
      var _now = now(),
        next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        var _loop = function _loop() {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        };
        for (var i = 0; i < cp.length; i++) {
          _loop();
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };
  caf = function caf(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}
module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};
module.exports.cancel = function () {
  caf.apply(root, arguments);
};
module.exports.polyfill = function (object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

/***/ }),

/***/ 5099:
/***/ ((module) => {

/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/

module.exports = function (color_string) {
  this.ok = false;
  this.alpha = 1.0;

  // strip any leading #
  if (color_string.charAt(0) == '#') {
    // remove # if any
    color_string = color_string.substr(1, 6);
  }
  color_string = color_string.replace(/ /g, '');
  color_string = color_string.toLowerCase();

  // before getting into regexps, try simple matches
  // and overwrite the input
  var simple_colors = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dodgerblue: '1e90ff',
    feldspar: 'd19275',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgrey: 'd3d3d3',
    lightgreen: '90ee90',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslateblue: '8470ff',
    lightslategray: '778899',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '00ff00',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'ff00ff',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370d8',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'd87093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '663399',
    red: 'ff0000',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    violetred: 'd02090',
    wheat: 'f5deb3',
    white: 'ffffff',
    whitesmoke: 'f5f5f5',
    yellow: 'ffff00',
    yellowgreen: '9acd32'
  };
  color_string = simple_colors[color_string] || color_string;
  // emd of simple type-in colors

  // array of color definition objects
  var color_defs = [{
    re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
    example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
    process: function process(bits) {
      return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3]), parseFloat(bits[4])];
    }
  }, {
    re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
    example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
    process: function process(bits) {
      return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3])];
    }
  }, {
    re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    example: ['#00ff00', '336699'],
    process: function process(bits) {
      return [parseInt(bits[1], 16), parseInt(bits[2], 16), parseInt(bits[3], 16)];
    }
  }, {
    re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    example: ['#fb0', 'f0f'],
    process: function process(bits) {
      return [parseInt(bits[1] + bits[1], 16), parseInt(bits[2] + bits[2], 16), parseInt(bits[3] + bits[3], 16)];
    }
  }];

  // search through the definitions to find a match
  for (var i = 0; i < color_defs.length; i++) {
    var re = color_defs[i].re;
    var processor = color_defs[i].process;
    var bits = re.exec(color_string);
    if (bits) {
      var channels = processor(bits);
      this.r = channels[0];
      this.g = channels[1];
      this.b = channels[2];
      if (channels.length > 3) {
        this.alpha = channels[3];
      }
      this.ok = true;
    }
  }

  // validate/cleanup values
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
  this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
  this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
  this.alpha = this.alpha < 0 ? 0 : this.alpha > 1.0 || isNaN(this.alpha) ? 1.0 : this.alpha;

  // some getters
  this.toRGB = function () {
    return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
  };
  this.toRGBA = function () {
    return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
  };
  this.toHex = function () {
    var r = this.r.toString(16);
    var g = this.g.toString(16);
    var b = this.b.toString(16);
    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;
    return '#' + r + g + b;
  };

  // help
  this.getHelpXML = function () {
    var examples = new Array();
    // add regexps
    for (var i = 0; i < color_defs.length; i++) {
      var example = color_defs[i].example;
      for (var j = 0; j < example.length; j++) {
        examples[examples.length] = example[j];
      }
    }
    // add type-in colors
    for (var sc in simple_colors) {
      examples[examples.length] = sc;
    }
    var xml = document.createElement('ul');
    xml.setAttribute('id', 'rgbcolor-examples');
    for (var i = 0; i < examples.length; i++) {
      try {
        var list_item = document.createElement('li');
        var list_color = new RGBColor(examples[i]);
        var example_div = document.createElement('div');
        example_div.style.cssText = 'margin: 3px; ' + 'border: 1px solid black; ' + 'background:' + list_color.toHex() + '; ' + 'color:' + list_color.toHex();
        example_div.appendChild(document.createTextNode('test'));
        var list_item_value = document.createTextNode(' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex());
        list_item.appendChild(example_div);
        list_item.appendChild(list_item_value);
        xml.appendChild(list_item);
      } catch (e) {}
    }
    return xml;
  };
};

/***/ }),

/***/ 4174:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isCallable = __webpack_require__(7793);
var tryToString = __webpack_require__(9691);
var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};

/***/ }),

/***/ 6632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isConstructor = __webpack_require__(1665);
var tryToString = __webpack_require__(9691);
var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};

/***/ }),

/***/ 5358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isPossiblePrototype = __webpack_require__(5337);
var $String = String;
var $TypeError = TypeError;
module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

/***/ }),

/***/ 3353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var wellKnownSymbol = __webpack_require__(207);
var create = __webpack_require__(1876);
var defineProperty = (__webpack_require__(3189).f);
var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ 5505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var charAt = (__webpack_require__(2963).charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

/***/ }),

/***/ 3339:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isPrototypeOf = __webpack_require__(5453);
var $TypeError = TypeError;
module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};

/***/ }),

/***/ 2099:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isObject = __webpack_require__(822);
var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};

/***/ }),

/***/ 925:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toIndexedObject = __webpack_require__(1929);
var toAbsoluteIndex = __webpack_require__(8702);
var lengthOfArrayLike = __webpack_require__(7794);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function createMethod(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};
module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),

/***/ 1154:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(3555);
module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () {
      return 1;
    }, 1);
  });
};

/***/ }),

/***/ 8290:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var aCallable = __webpack_require__(4174);
var toObject = __webpack_require__(7721);
var IndexedObject = __webpack_require__(3427);
var lengthOfArrayLike = __webpack_require__(7794);
var $TypeError = TypeError;
var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function createMethod(IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError(REDUCE_EMPTY);
      }
    }
    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};
module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

/***/ }),

/***/ 8220:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
module.exports = uncurryThis([].slice);

/***/ }),

/***/ 2328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var wellKnownSymbol = __webpack_require__(207);
var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;
try {
  var called = 0;
  var iteratorWithReturn = {
    next: function next() {
      return {
        done: !!called++
      };
    },
    'return': function _return() {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {/* empty */}
module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) {
    return false;
  } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function next() {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };
    exec(object);
  } catch (error) {/* empty */}
  return ITERATION_SUPPORT;
};

/***/ }),

/***/ 2908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};

/***/ }),

/***/ 1143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var TO_STRING_TAG_SUPPORT = __webpack_require__(744);
var isCallable = __webpack_require__(7793);
var classofRaw = __webpack_require__(2908);
var wellKnownSymbol = __webpack_require__(207);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (error) {/* empty */}
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
  // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O)
  // ES3 arguments fallback
  : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

/***/ }),

/***/ 1672:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasOwn = __webpack_require__(9581);
var ownKeys = __webpack_require__(523);
var getOwnPropertyDescriptorModule = __webpack_require__(1263);
var definePropertyModule = __webpack_require__(3189);
module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

/***/ }),

/***/ 1408:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var wellKnownSymbol = __webpack_require__(207);
var MATCH = wellKnownSymbol('match');
module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) {/* empty */}
  }
  return false;
};

/***/ }),

/***/ 8231:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(3555);
module.exports = !fails(function () {
  function F() {/* empty */}
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),

/***/ 3773:
/***/ ((module) => {

"use strict";


// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return {
    value: value,
    done: done
  };
};

/***/ }),

/***/ 4703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(6912);
var definePropertyModule = __webpack_require__(3189);
var createPropertyDescriptor = __webpack_require__(3120);
module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ 3120:
/***/ ((module) => {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ 3110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var makeBuiltIn = __webpack_require__(8031);
var defineProperty = __webpack_require__(3189);
module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, {
    getter: true
  });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, {
    setter: true
  });
  return defineProperty.f(target, name, descriptor);
};

/***/ }),

/***/ 6932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isCallable = __webpack_require__(7793);
var definePropertyModule = __webpack_require__(3189);
var makeBuiltIn = __webpack_require__(8031);
var defineGlobalProperty = __webpack_require__(4261);
module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
    } catch (error) {/* empty */}
    if (simple) O[key] = value;else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  }
  return O;
};

/***/ }),

/***/ 4261:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    globalThis[key] = value;
  }
  return value;
};

/***/ }),

/***/ 6912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(3555);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] !== 7;
});

/***/ }),

/***/ 8819:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
var isObject = __webpack_require__(822);
var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ 6092:
/***/ ((module) => {

"use strict";


// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

/***/ }),

/***/ 5908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(8819);
var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

/***/ }),

/***/ 7091:
/***/ ((module) => {

"use strict";


// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ 8445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var userAgent = __webpack_require__(7723);
module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';

/***/ }),

/***/ 2420:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var userAgent = __webpack_require__(7723);

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

/***/ }),

/***/ 8458:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ENVIRONMENT = __webpack_require__(1955);
module.exports = ENVIRONMENT === 'NODE';

/***/ }),

/***/ 6584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var userAgent = __webpack_require__(7723);
module.exports = /web0s(?!.*chrome)/i.test(userAgent);

/***/ }),

/***/ 7723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;
module.exports = userAgent ? String(userAgent) : '';

/***/ }),

/***/ 3835:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
var userAgent = __webpack_require__(7723);
var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
module.exports = version;

/***/ }),

/***/ 1955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* global Bun, Deno -- detection */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var globalThis = __webpack_require__(7652);
var userAgent = __webpack_require__(7723);
var classof = __webpack_require__(2908);
var userAgentStartsWith = function userAgentStartsWith(string) {
  return userAgent.slice(0, string.length) === string;
};
module.exports = function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis.Deno && _typeof(Deno.version) == 'object') return 'DENO';
  if (classof(globalThis.process) === 'process') return 'NODE';
  if (globalThis.window && globalThis.document) return 'BROWSER';
  return 'REST';
}();

/***/ }),

/***/ 346:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var globalThis = __webpack_require__(7652);
var getOwnPropertyDescriptor = (__webpack_require__(1263).f);
var createNonEnumerableProperty = __webpack_require__(4703);
var defineBuiltIn = __webpack_require__(6932);
var defineGlobalProperty = __webpack_require__(4261);
var copyConstructorProperties = __webpack_require__(1672);
var isForced = __webpack_require__(2344);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (_typeof(sourceProperty) == _typeof(targetProperty)) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ 3555:
/***/ ((module) => {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ 6736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(9915);
var call = __webpack_require__(8633);
var defineBuiltIn = __webpack_require__(6932);
var regexpExec = __webpack_require__(9199);
var fails = __webpack_require__(3555);
var wellKnownSymbol = __webpack_require__(207);
var createNonEnumerableProperty = __webpack_require__(4703);
var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;
module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    O[SYMBOL] = function () {
      return 7;
    };
    return ''[KEY](O) !== 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () {
        return re;
      };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }
    re.exec = function () {
      execCalled = true;
      return null;
    };
    re[SYMBOL]('');
    return !execCalled;
  });
  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: call(nativeRegExpMethod, regexp, str, arg2)
          };
        }
        return {
          done: true,
          value: call(nativeMethod, str, regexp, arg2)
        };
      }
      return {
        done: false
      };
    });
    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }
  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

/***/ }),

/***/ 1701:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var NATIVE_BIND = __webpack_require__(1044);
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

/***/ }),

/***/ 1740:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(896);
var aCallable = __webpack_require__(4174);
var NATIVE_BIND = __webpack_require__(1044);
var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 1044:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(3555);
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () {/* empty */}.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

/***/ }),

/***/ 8633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var NATIVE_BIND = __webpack_require__(1044);
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

/***/ }),

/***/ 2626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(6912);
var hasOwn = __webpack_require__(9581);
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

/***/ }),

/***/ 9910:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var aCallable = __webpack_require__(4174);
module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {/* empty */}
};

/***/ }),

/***/ 896:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classofRaw = __webpack_require__(2908);
var uncurryThis = __webpack_require__(7252);
module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

/***/ }),

/***/ 7252:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var NATIVE_BIND = __webpack_require__(1044);
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};

/***/ }),

/***/ 5595:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
var isCallable = __webpack_require__(7793);
var aFunction = function aFunction(argument) {
  return isCallable(argument) ? argument : undefined;
};
module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};

/***/ }),

/***/ 4935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(1143);
var getMethod = __webpack_require__(5394);
var isNullOrUndefined = __webpack_require__(3201);
var Iterators = __webpack_require__(2177);
var wellKnownSymbol = __webpack_require__(207);
var ITERATOR = wellKnownSymbol('iterator');
module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, '@@iterator') || Iterators[classof(it)];
};

/***/ }),

/***/ 1613:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var call = __webpack_require__(8633);
var aCallable = __webpack_require__(4174);
var anObject = __webpack_require__(2099);
var tryToString = __webpack_require__(9691);
var getIteratorMethod = __webpack_require__(4935);
var $TypeError = TypeError;
module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};

/***/ }),

/***/ 5394:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var aCallable = __webpack_require__(4174);
var isNullOrUndefined = __webpack_require__(3201);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

/***/ }),

/***/ 642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var toObject = __webpack_require__(7721);
var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$':
        return '$';
      case '&':
        return matched;
      case '`':
        return stringSlice(str, 0, position);
      case "'":
        return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default:
        // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

/***/ }),

/***/ 7652:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var check = function check(it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
// eslint-disable-next-line es/no-global-this -- safe
check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) ||
// eslint-disable-next-line no-restricted-globals -- safe
check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check((typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) == 'object' && __webpack_require__.g) || check(_typeof(this) == 'object' && this) ||
// eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

/***/ }),

/***/ 9581:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var toObject = __webpack_require__(7721);
var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

/***/ }),

/***/ 1529:
/***/ ((module) => {

"use strict";


module.exports = {};

/***/ }),

/***/ 4505:
/***/ ((module) => {

"use strict";


module.exports = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) {/* empty */}
};

/***/ }),

/***/ 8209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getBuiltIn = __webpack_require__(5595);
module.exports = getBuiltIn('document', 'documentElement');

/***/ }),

/***/ 1985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(6912);
var fails = __webpack_require__(3555);
var createElement = __webpack_require__(8819);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a !== 7;
});

/***/ }),

/***/ 3427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var fails = __webpack_require__(3555);
var classof = __webpack_require__(2908);
var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

/***/ }),

/***/ 4526:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var isCallable = __webpack_require__(7793);
var store = __webpack_require__(6105);
var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}
module.exports = store.inspectSource;

/***/ }),

/***/ 5745:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var NATIVE_WEAK_MAP = __webpack_require__(8434);
var globalThis = __webpack_require__(7652);
var isObject = __webpack_require__(822);
var createNonEnumerableProperty = __webpack_require__(4703);
var hasOwn = __webpack_require__(9581);
var shared = __webpack_require__(6105);
var sharedKey = __webpack_require__(7395);
var hiddenKeys = __webpack_require__(1529);
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;
var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};
var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function set(it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function get(it) {
    return store.get(it) || {};
  };
  has = function has(it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function set(it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function get(it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function has(it) {
    return hasOwn(it, STATE);
  };
}
module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),

/***/ 5325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var wellKnownSymbol = __webpack_require__(207);
var Iterators = __webpack_require__(2177);
var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ 9868:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(2908);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};

/***/ }),

/***/ 7793:
/***/ ((module) => {

"use strict";


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var documentAll = (typeof document === "undefined" ? "undefined" : _typeof(document)) == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

/***/ }),

/***/ 1665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var fails = __webpack_require__(3555);
var isCallable = __webpack_require__(7793);
var classof = __webpack_require__(1143);
var getBuiltIn = __webpack_require__(5595);
var inspectSource = __webpack_require__(4526);
var noop = function noop() {/* empty */};
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

/***/ }),

/***/ 2344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(3555);
var isCallable = __webpack_require__(7793);
var replacement = /#|\.prototype\./;
var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ 3201:
/***/ ((module) => {

"use strict";


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};

/***/ }),

/***/ 822:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var isCallable = __webpack_require__(7793);
module.exports = function (it) {
  return _typeof(it) == 'object' ? it !== null : isCallable(it);
};

/***/ }),

/***/ 5337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isObject = __webpack_require__(822);
module.exports = function (argument) {
  return isObject(argument) || argument === null;
};

/***/ }),

/***/ 5463:
/***/ ((module) => {

"use strict";


module.exports = false;

/***/ }),

/***/ 88:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isObject = __webpack_require__(822);
var classof = __webpack_require__(2908);
var wellKnownSymbol = __webpack_require__(207);
var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};

/***/ }),

/***/ 9081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var getBuiltIn = __webpack_require__(5595);
var isCallable = __webpack_require__(7793);
var isPrototypeOf = __webpack_require__(5453);
var USE_SYMBOL_AS_UID = __webpack_require__(3988);
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

/***/ }),

/***/ 6304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var bind = __webpack_require__(1740);
var call = __webpack_require__(8633);
var anObject = __webpack_require__(2099);
var tryToString = __webpack_require__(9691);
var isArrayIteratorMethod = __webpack_require__(5325);
var lengthOfArrayLike = __webpack_require__(7794);
var isPrototypeOf = __webpack_require__(5453);
var getIterator = __webpack_require__(1613);
var getIteratorMethod = __webpack_require__(4935);
var iteratorClose = __webpack_require__(575);
var $TypeError = TypeError;
var Result = function Result(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;
  var stop = function stop(condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };
  var callFn = function callFn(value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      }
      return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }
  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (_typeof(result) == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  }
  return new Result(false);
};

/***/ }),

/***/ 575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var call = __webpack_require__(8633);
var anObject = __webpack_require__(2099);
var getMethod = __webpack_require__(5394);
module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

/***/ }),

/***/ 7766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IteratorPrototype = (__webpack_require__(7517).IteratorPrototype);
var create = __webpack_require__(1876);
var createPropertyDescriptor = __webpack_require__(3120);
var setToStringTag = __webpack_require__(6563);
var Iterators = __webpack_require__(2177);
var returnThis = function returnThis() {
  return this;
};
module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, {
    next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

/***/ }),

/***/ 2020:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var call = __webpack_require__(8633);
var IS_PURE = __webpack_require__(5463);
var FunctionName = __webpack_require__(2626);
var isCallable = __webpack_require__(7793);
var createIteratorConstructor = __webpack_require__(7766);
var getPrototypeOf = __webpack_require__(4263);
var setPrototypeOf = __webpack_require__(9603);
var setToStringTag = __webpack_require__(6563);
var createNonEnumerableProperty = __webpack_require__(4703);
var defineBuiltIn = __webpack_require__(6932);
var wellKnownSymbol = __webpack_require__(207);
var Iterators = __webpack_require__(2177);
var IteratorsCore = __webpack_require__(7517);
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function returnThis() {
  return this;
};
module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);
  var getIterationMethod = function getIterationMethod(KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function () {
      return new IteratorConstructor(this);
    };
  };
  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() {
        return call(nativeIterator, this);
      };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
      name: DEFAULT
    });
  }
  Iterators[NAME] = defaultIterator;
  return methods;
};

/***/ }),

/***/ 7517:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(3555);
var isCallable = __webpack_require__(7793);
var isObject = __webpack_require__(822);
var create = __webpack_require__(1876);
var getPrototypeOf = __webpack_require__(4263);
var defineBuiltIn = __webpack_require__(6932);
var wellKnownSymbol = __webpack_require__(207);
var IS_PURE = __webpack_require__(5463);
var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}
module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),

/***/ 2177:
/***/ ((module) => {

"use strict";


module.exports = {};

/***/ }),

/***/ 7794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toLength = __webpack_require__(1362);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};

/***/ }),

/***/ 8031:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var fails = __webpack_require__(3555);
var isCallable = __webpack_require__(7793);
var hasOwn = __webpack_require__(9581);
var DESCRIPTORS = __webpack_require__(6912);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(2626).CONFIGURABLE);
var inspectSource = __webpack_require__(4526);
var InternalStateModule = __webpack_require__(5745);
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () {/* empty */}, 'length', {
    value: 8
  }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
    if (DESCRIPTORS) defineProperty(value, 'name', {
      value: name,
      configurable: true
    });else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', {
      value: options.arity
    });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', {
        writable: false
      });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) {/* empty */}
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  }
  return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

/***/ }),

/***/ 2289:
/***/ ((module) => {

"use strict";


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

/***/ }),

/***/ 4127:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
var safeGetBuiltIn = __webpack_require__(1297);
var bind = __webpack_require__(1740);
var macrotask = (__webpack_require__(1373).set);
var Queue = __webpack_require__(9149);
var IS_IOS = __webpack_require__(2420);
var IS_IOS_PEBBLE = __webpack_require__(8445);
var IS_WEBOS_WEBKIT = __webpack_require__(6584);
var IS_NODE = __webpack_require__(8458);
var MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
var document = globalThis.document;
var process = globalThis.process;
var Promise = globalThis.Promise;
var microtask = safeGetBuiltIn('queueMicrotask');
var notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask) {
  var queue = new Queue();
  var flush = function flush() {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, {
      characterData: true
    });
    notify = function notify() {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function notify() {
      then(flush);
    };
    // Node.js without promises
  } else if (IS_NODE) {
    notify = function notify() {
      process.nextTick(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessage
    // - onreadystatechange
    // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind(macrotask, globalThis);
    notify = function notify() {
      macrotask(flush);
    };
  }
  microtask = function microtask(fn) {
    if (!queue.head) notify();
    queue.add(fn);
  };
}
module.exports = microtask;

/***/ }),

/***/ 5607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var aCallable = __webpack_require__(4174);
var $TypeError = TypeError;
var PromiseCapability = function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),

/***/ 2715:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(88);
var $TypeError = TypeError;
module.exports = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  }
  return it;
};

/***/ }),

/***/ 1876:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(2099);
var definePropertiesModule = __webpack_require__(3469);
var enumBugKeys = __webpack_require__(7091);
var hiddenKeys = __webpack_require__(1529);
var html = __webpack_require__(8209);
var documentCreateElement = __webpack_require__(8819);
var sharedKey = __webpack_require__(7395);
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function EmptyConstructor() {/* empty */};
var scriptTag = function scriptTag(content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var _NullProtoObject = function NullProtoObject() {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {/* ignore */}
  _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return _NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

/***/ }),

/***/ 3469:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(6912);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3218);
var definePropertyModule = __webpack_require__(3189);
var anObject = __webpack_require__(2099);
var toIndexedObject = __webpack_require__(1929);
var objectKeys = __webpack_require__(6844);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

/***/ }),

/***/ 3189:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(6912);
var IE8_DOM_DEFINE = __webpack_require__(1985);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3218);
var anObject = __webpack_require__(2099);
var toPropertyKey = __webpack_require__(5821);
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 1263:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(6912);
var call = __webpack_require__(8633);
var propertyIsEnumerableModule = __webpack_require__(7433);
var createPropertyDescriptor = __webpack_require__(3120);
var toIndexedObject = __webpack_require__(1929);
var toPropertyKey = __webpack_require__(5821);
var hasOwn = __webpack_require__(9581);
var IE8_DOM_DEFINE = __webpack_require__(1985);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {/* empty */}
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

/***/ }),

/***/ 1020:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var internalObjectKeys = __webpack_require__(4632);
var enumBugKeys = __webpack_require__(7091);
var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ 8193:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 4263:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasOwn = __webpack_require__(9581);
var isCallable = __webpack_require__(7793);
var toObject = __webpack_require__(7721);
var sharedKey = __webpack_require__(7395);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8231);
var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object ? ObjectPrototype : null;
};

/***/ }),

/***/ 5453:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
module.exports = uncurryThis({}.isPrototypeOf);

/***/ }),

/***/ 4632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var hasOwn = __webpack_require__(9581);
var toIndexedObject = __webpack_require__(1929);
var indexOf = (__webpack_require__(925).indexOf);
var hiddenKeys = __webpack_require__(1529);
var push = uncurryThis([].push);
module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

/***/ }),

/***/ 6844:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var internalObjectKeys = __webpack_require__(4632);
var enumBugKeys = __webpack_require__(7091);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ 7433:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

/***/ }),

/***/ 9603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(9910);
var isObject = __webpack_require__(822);
var requireObjectCoercible = __webpack_require__(1778);
var aPossiblePrototype = __webpack_require__(5358);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {/* empty */}
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

/***/ }),

/***/ 250:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var call = __webpack_require__(8633);
var isCallable = __webpack_require__(7793);
var isObject = __webpack_require__(822);
var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 523:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getBuiltIn = __webpack_require__(5595);
var uncurryThis = __webpack_require__(7252);
var getOwnPropertyNamesModule = __webpack_require__(1020);
var getOwnPropertySymbolsModule = __webpack_require__(8193);
var anObject = __webpack_require__(2099);
var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ 8035:
/***/ ((module) => {

"use strict";


module.exports = function (exec) {
  try {
    return {
      error: false,
      value: exec()
    };
  } catch (error) {
    return {
      error: true,
      value: error
    };
  }
};

/***/ }),

/***/ 488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
var NativePromiseConstructor = __webpack_require__(218);
var isCallable = __webpack_require__(7793);
var isForced = __webpack_require__(2344);
var inspectSource = __webpack_require__(4526);
var wellKnownSymbol = __webpack_require__(207);
var ENVIRONMENT = __webpack_require__(1955);
var IS_PURE = __webpack_require__(5463);
var V8_VERSION = __webpack_require__(3835);
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) {
      resolve(1);
    });
    var FakePromise = function FakePromise(exec) {
      exec(function () {/* empty */}, function () {/* empty */});
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () {/* empty */}) instanceof FakePromise;
    if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  }
  return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT;
});
module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};

/***/ }),

/***/ 218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
module.exports = globalThis.Promise;

/***/ }),

/***/ 9994:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(2099);
var isObject = __webpack_require__(822);
var newPromiseCapability = __webpack_require__(5607);
module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),

/***/ 7253:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var NativePromiseConstructor = __webpack_require__(218);
var checkCorrectnessOfIteration = __webpack_require__(2328);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(488).CONSTRUCTOR);
module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () {/* empty */});
});

/***/ }),

/***/ 9149:
/***/ ((module) => {

"use strict";


var Queue = function Queue() {
  this.head = null;
  this.tail = null;
};
Queue.prototype = {
  add: function add(item) {
    var entry = {
      item: item,
      next: null
    };
    var tail = this.tail;
    if (tail) tail.next = entry;else this.head = entry;
    this.tail = entry;
  },
  get: function get() {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};
module.exports = Queue;

/***/ }),

/***/ 3246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var call = __webpack_require__(8633);
var anObject = __webpack_require__(2099);
var isCallable = __webpack_require__(7793);
var classof = __webpack_require__(2908);
var regexpExec = __webpack_require__(9199);
var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};

/***/ }),

/***/ 9199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(8633);
var uncurryThis = __webpack_require__(7252);
var toString = __webpack_require__(6979);
var regexpFlags = __webpack_require__(6671);
var stickyHelpers = __webpack_require__(2601);
var shared = __webpack_require__(6077);
var create = __webpack_require__(1876);
var getInternalState = (__webpack_require__(5745).get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(8095);
var UNSUPPORTED_NCG = __webpack_require__(8602);
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();
var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;
    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }
    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;
    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }
      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }
    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = call(nativeExec, sticky ? reCopy : re, strCopy);
    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }
    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }
    return match;
  };
}
module.exports = patchedExec;

/***/ }),

/***/ 6671:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(2099);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ 286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var call = __webpack_require__(8633);
var hasOwn = __webpack_require__(9581);
var isPrototypeOf = __webpack_require__(5453);
var regExpFlags = __webpack_require__(6671);
var RegExpPrototype = RegExp.prototype;
module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R) ? call(regExpFlags, R) : flags;
};

/***/ }),

/***/ 2601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(3555);
var globalThis = __webpack_require__(7652);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = globalThis.RegExp;
var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});
module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};

/***/ }),

/***/ 8095:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(3555);
var globalThis = __webpack_require__(7652);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = globalThis.RegExp;
module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});

/***/ }),

/***/ 8602:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(3555);
var globalThis = __webpack_require__(7652);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = globalThis.RegExp;
module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/***/ }),

/***/ 1778:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isNullOrUndefined = __webpack_require__(3201);
var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ 1297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
var DESCRIPTORS = __webpack_require__(6912);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
module.exports = function (name) {
  if (!DESCRIPTORS) return globalThis[name];
  var descriptor = getOwnPropertyDescriptor(globalThis, name);
  return descriptor && descriptor.value;
};

/***/ }),

/***/ 6685:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getBuiltIn = __webpack_require__(5595);
var defineBuiltInAccessor = __webpack_require__(3110);
var wellKnownSymbol = __webpack_require__(207);
var DESCRIPTORS = __webpack_require__(6912);
var SPECIES = wellKnownSymbol('species');
module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  }
};

/***/ }),

/***/ 6563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var defineProperty = (__webpack_require__(3189).f);
var hasOwn = __webpack_require__(9581);
var wellKnownSymbol = __webpack_require__(207);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

/***/ }),

/***/ 7395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var shared = __webpack_require__(6077);
var uid = __webpack_require__(7284);
var keys = shared('keys');
module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ 6105:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IS_PURE = __webpack_require__(5463);
var globalThis = __webpack_require__(7652);
var defineGlobalProperty = __webpack_require__(4261);
var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
  version: '3.39.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

/***/ }),

/***/ 6077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var store = __webpack_require__(6105);
module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};

/***/ }),

/***/ 5153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(2099);
var aConstructor = __webpack_require__(6632);
var isNullOrUndefined = __webpack_require__(3201);
var wellKnownSymbol = __webpack_require__(207);
var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};

/***/ }),

/***/ 2963:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var toIntegerOrInfinity = __webpack_require__(8623);
var toString = __webpack_require__(6979);
var requireObjectCoercible = __webpack_require__(1778);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);
var createMethod = function createMethod(CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};
module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

/***/ }),

/***/ 9094:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var PROPER_FUNCTION_NAME = (__webpack_require__(2626).PROPER);
var fails = __webpack_require__(3555);
var whitespaces = __webpack_require__(7712);
var non = "\u200B\x85\u180E";

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

/***/ }),

/***/ 5310:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var requireObjectCoercible = __webpack_require__(1778);
var toString = __webpack_require__(6979);
var whitespaces = __webpack_require__(7712);
var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function createMethod(TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};
module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

/***/ }),

/***/ 1051:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(3835);
var fails = __webpack_require__(3555);
var globalThis = __webpack_require__(7652);
var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
  // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ 1373:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
var apply = __webpack_require__(1701);
var bind = __webpack_require__(1740);
var isCallable = __webpack_require__(7793);
var hasOwn = __webpack_require__(9581);
var fails = __webpack_require__(3555);
var html = __webpack_require__(8209);
var arraySlice = __webpack_require__(8220);
var createElement = __webpack_require__(8819);
var validateArgumentsLength = __webpack_require__(112);
var IS_IOS = __webpack_require__(2420);
var IS_NODE = __webpack_require__(8458);
var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;
fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = globalThis.location;
});
var run = function run(id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var runner = function runner(id) {
  return function () {
    run(id);
  };
};
var eventListener = function eventListener(event) {
  run(event.data);
};
var globalPostMessageDefer = function globalPostMessageDefer(id) {
  // old engines have not location.origin
  globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function defer(id) {
      process.nextTick(runner(id));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(runner(id));
    };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (globalThis.addEventListener && isCallable(globalThis.postMessage) && !globalThis.importScripts && $location && $location.protocol !== 'file:' && !fails(globalPostMessageDefer)) {
    defer = globalPostMessageDefer;
    globalThis.addEventListener('message', eventListener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function defer(id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function defer(id) {
      setTimeout(runner(id), 0);
    };
  }
}
module.exports = {
  set: set,
  clear: clear
};

/***/ }),

/***/ 8702:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toIntegerOrInfinity = __webpack_require__(8623);
var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ 1929:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(3427);
var requireObjectCoercible = __webpack_require__(1778);
module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ 8623:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var trunc = __webpack_require__(2289);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

/***/ }),

/***/ 1362:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toIntegerOrInfinity = __webpack_require__(8623);
var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ 7721:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var requireObjectCoercible = __webpack_require__(1778);
var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ 237:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var call = __webpack_require__(8633);
var isObject = __webpack_require__(822);
var isSymbol = __webpack_require__(9081);
var getMethod = __webpack_require__(5394);
var ordinaryToPrimitive = __webpack_require__(250);
var wellKnownSymbol = __webpack_require__(207);
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

/***/ }),

/***/ 5821:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPrimitive = __webpack_require__(237);
var isSymbol = __webpack_require__(9081);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

/***/ }),

/***/ 744:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var wellKnownSymbol = __webpack_require__(207);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),

/***/ 6979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(1143);
var $String = String;
module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

/***/ }),

/***/ 9691:
/***/ ((module) => {

"use strict";


var $String = String;
module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};

/***/ }),

/***/ 7284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(7252);
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

/***/ }),

/***/ 3988:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-disable es/no-symbol -- required for testing */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var NATIVE_SYMBOL = __webpack_require__(1051);
module.exports = NATIVE_SYMBOL && !Symbol.sham && _typeof(Symbol.iterator) == 'symbol';

/***/ }),

/***/ 3218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(6912);
var fails = __webpack_require__(3555);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {/* empty */}, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

/***/ }),

/***/ 112:
/***/ ((module) => {

"use strict";


var $TypeError = TypeError;
module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};

/***/ }),

/***/ 8434:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
var isCallable = __webpack_require__(7793);
var WeakMap = globalThis.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

/***/ }),

/***/ 207:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
var shared = __webpack_require__(6077);
var hasOwn = __webpack_require__(9581);
var uid = __webpack_require__(7284);
var NATIVE_SYMBOL = __webpack_require__(1051);
var USE_SYMBOL_AS_UID = __webpack_require__(3988);
var _Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol['for'] || _Symbol : _Symbol && _Symbol.withoutSetter || uid;
module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(_Symbol, name) ? _Symbol[name] : createWellKnownSymbol('Symbol.' + name);
  }
  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ 7712:
/***/ ((module) => {

"use strict";


// a string of all valid unicode whitespaces
module.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002" + "\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

/***/ }),

/***/ 3296:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(346);
var uncurryThis = __webpack_require__(896);
var $indexOf = (__webpack_require__(925).indexOf);
var arrayMethodIsStrict = __webpack_require__(1154);
var nativeIndexOf = uncurryThis([].indexOf);
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
    // convert -0 to +0
    ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
  }
});

/***/ }),

/***/ 7908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toIndexedObject = __webpack_require__(1929);
var addToUnscopables = __webpack_require__(3353);
var Iterators = __webpack_require__(2177);
var InternalStateModule = __webpack_require__(5745);
var defineProperty = (__webpack_require__(3189).f);
var defineIterator = __webpack_require__(2020);
var createIterResultObject = __webpack_require__(3773);
var IS_PURE = __webpack_require__(5463);
var DESCRIPTORS = __webpack_require__(6912);
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind
  });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys':
      return createIterResultObject(index, false);
    case 'values':
      return createIterResultObject(target[index], false);
  }
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', {
    value: 'values'
  });
} catch (error) {/* empty */}

/***/ }),

/***/ 2124:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var $reduce = (__webpack_require__(8290).left);
var arrayMethodIsStrict = __webpack_require__(1154);
var CHROME_VERSION = __webpack_require__(3835);
var IS_NODE = __webpack_require__(8458);

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 4806:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var uncurryThis = __webpack_require__(7252);
var isArray = __webpack_require__(9868);
var nativeReverse = uncurryThis([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({
  target: 'Array',
  proto: true,
  forced: String(test) === String(test.reverse())
}, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse(this);
  }
});

/***/ }),

/***/ 8839:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var call = __webpack_require__(8633);
var aCallable = __webpack_require__(4174);
var newPromiseCapabilityModule = __webpack_require__(5607);
var perform = __webpack_require__(8035);
var iterate = __webpack_require__(6304);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(7253);

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({
  target: 'Promise',
  stat: true,
  forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

/***/ }),

/***/ 3679:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var IS_PURE = __webpack_require__(5463);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(488).CONSTRUCTOR);
var NativePromiseConstructor = __webpack_require__(218);
var getBuiltIn = __webpack_require__(5595);
var isCallable = __webpack_require__(7793);
var defineBuiltIn = __webpack_require__(6932);
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({
  target: 'Promise',
  proto: true,
  forced: FORCED_PROMISE_CONSTRUCTOR,
  real: true
}, {
  'catch': function _catch(onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, {
      unsafe: true
    });
  }
}

/***/ }),

/***/ 3240:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var IS_PURE = __webpack_require__(5463);
var IS_NODE = __webpack_require__(8458);
var globalThis = __webpack_require__(7652);
var call = __webpack_require__(8633);
var defineBuiltIn = __webpack_require__(6932);
var setPrototypeOf = __webpack_require__(9603);
var setToStringTag = __webpack_require__(6563);
var setSpecies = __webpack_require__(6685);
var aCallable = __webpack_require__(4174);
var isCallable = __webpack_require__(7793);
var isObject = __webpack_require__(822);
var anInstance = __webpack_require__(3339);
var speciesConstructor = __webpack_require__(5153);
var task = (__webpack_require__(1373).set);
var microtask = __webpack_require__(4127);
var hostReportErrors = __webpack_require__(4505);
var perform = __webpack_require__(8035);
var Queue = __webpack_require__(9149);
var InternalStateModule = __webpack_require__(5745);
var NativePromiseConstructor = __webpack_require__(218);
var PromiseConstructorDetection = __webpack_require__(488);
var newPromiseCapabilityModule = __webpack_require__(5607);
var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = globalThis.TypeError;
var document = globalThis.document;
var process = globalThis.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && globalThis.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};
var callReaction = function callReaction(reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};
var notify = function notify(state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};
var dispatchEvent = function dispatchEvent(name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    globalThis.dispatchEvent(event);
  } else event = {
    promise: promise,
    reason: reason
  };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};
var onUnhandled = function onUnhandled(state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};
var isUnhandled = function isUnhandled(state) {
  return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function onHandleUnhandled(state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};
var bind = function bind(fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};
var internalReject = function internalReject(state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};
var _internalResolve = function internalResolve(state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = {
          done: false
        };
        try {
          call(then, value, bind(_internalResolve, wrapper, state), bind(internalReject, wrapper, state));
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({
      done: false
    }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(_internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: null
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(_internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;
    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
      }, {
        unsafe: true
      });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) {/* empty */}

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

// `Promise` constructor
// https://tc39.es/ecma262/#sec-promise-executor
$({
  global: true,
  constructor: true,
  wrap: true,
  forced: FORCED_PROMISE_CONSTRUCTOR
}, {
  Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

/***/ }),

/***/ 2478:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(3240);
__webpack_require__(8839);
__webpack_require__(3679);
__webpack_require__(7155);
__webpack_require__(2045);
__webpack_require__(9508);

/***/ }),

/***/ 7155:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var call = __webpack_require__(8633);
var aCallable = __webpack_require__(4174);
var newPromiseCapabilityModule = __webpack_require__(5607);
var perform = __webpack_require__(8035);
var iterate = __webpack_require__(6304);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(7253);

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({
  target: 'Promise',
  stat: true,
  forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

/***/ }),

/***/ 2045:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var newPromiseCapabilityModule = __webpack_require__(5607);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(488).CONSTRUCTOR);

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({
  target: 'Promise',
  stat: true,
  forced: FORCED_PROMISE_CONSTRUCTOR
}, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});

/***/ }),

/***/ 9508:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var getBuiltIn = __webpack_require__(5595);
var IS_PURE = __webpack_require__(5463);
var NativePromiseConstructor = __webpack_require__(218);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(488).CONSTRUCTOR);
var promiseResolve = __webpack_require__(9994);
var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({
  target: 'Promise',
  stat: true,
  forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR
}, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});

/***/ }),

/***/ 9915:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var exec = __webpack_require__(9199);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec
}, {
  exec: exec
});

/***/ }),

/***/ 249:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var PROPER_FUNCTION_NAME = (__webpack_require__(2626).PROPER);
var defineBuiltIn = __webpack_require__(6932);
var anObject = __webpack_require__(2099);
var $toString = __webpack_require__(6979);
var fails = __webpack_require__(3555);
var getRegExpFlags = __webpack_require__(286);
var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function () {
  return nativeToString.call({
    source: 'a',
    flags: 'b'
  }) !== '/a/b';
});
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, {
    unsafe: true
  });
}

/***/ }),

/***/ 9669:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var uncurryThis = __webpack_require__(896);
var getOwnPropertyDescriptor = (__webpack_require__(1263).f);
var toLength = __webpack_require__(1362);
var toString = __webpack_require__(6979);
var notARegExp = __webpack_require__(2715);
var requireObjectCoercible = __webpack_require__(1778);
var correctIsRegExpLogic = __webpack_require__(1408);
var IS_PURE = __webpack_require__(5463);
var slice = uncurryThis(''.slice);
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({
  target: 'String',
  proto: true,
  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return slice(that, end - search.length, end) === search;
  }
});

/***/ }),

/***/ 3791:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var uncurryThis = __webpack_require__(7252);
var notARegExp = __webpack_require__(2715);
var requireObjectCoercible = __webpack_require__(1778);
var toString = __webpack_require__(6979);
var correctIsRegExpLogic = __webpack_require__(1408);
var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({
  target: 'String',
  proto: true,
  forced: !correctIsRegExpLogic('includes')
}, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(toString(requireObjectCoercible(this)), toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 3885:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var call = __webpack_require__(8633);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(6736);
var anObject = __webpack_require__(2099);
var isNullOrUndefined = __webpack_require__(3201);
var toLength = __webpack_require__(1362);
var toString = __webpack_require__(6979);
var requireObjectCoercible = __webpack_require__(1778);
var getMethod = __webpack_require__(5394);
var advanceStringIndex = __webpack_require__(5505);
var regExpExec = __webpack_require__(3246);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
  // `String.prototype.match` method
  // https://tc39.es/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = requireObjectCoercible(this);
    var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
    return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
  },
  // `RegExp.prototype[@@match]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
  function (string) {
    var rx = anObject(this);
    var S = toString(string);
    var res = maybeCallNative(nativeMatch, rx, S);
    if (res.done) return res.value;
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;
    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = toString(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }
    return n === 0 ? null : A;
  }];
});

/***/ }),

/***/ 9012:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var apply = __webpack_require__(1701);
var call = __webpack_require__(8633);
var uncurryThis = __webpack_require__(7252);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(6736);
var fails = __webpack_require__(3555);
var anObject = __webpack_require__(2099);
var isCallable = __webpack_require__(7793);
var isNullOrUndefined = __webpack_require__(3201);
var toIntegerOrInfinity = __webpack_require__(8623);
var toLength = __webpack_require__(1362);
var toString = __webpack_require__(6979);
var requireObjectCoercible = __webpack_require__(1778);
var advanceStringIndex = __webpack_require__(5505);
var getMethod = __webpack_require__(5394);
var getSubstitution = __webpack_require__(642);
var regExpExec = __webpack_require__(3246);
var wellKnownSymbol = __webpack_require__(207);
var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
}();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
}();
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
  return [
  // `String.prototype.replace` method
  // https://tc39.es/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
    return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace, toString(O), searchValue, replaceValue);
  },
  // `RegExp.prototype[@@replace]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
  function (string, replaceValue) {
    var rx = anObject(this);
    var S = toString(string);
    if (typeof replaceValue == 'string' && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, '$<') === -1) {
      var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
      if (res.done) return res.value;
    }
    var functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    var global = rx.global;
    var fullUnicode;
    if (global) {
      fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }
    var results = [];
    var result;
    while (true) {
      result = regExpExec(rx, S);
      if (result === null) break;
      push(results, result);
      if (!global) break;
      var matchStr = toString(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }
    var accumulatedResult = '';
    var nextSourcePosition = 0;
    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = toString(result[0]);
      var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
      var captures = [];
      var replacement;
      // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
      for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
      var namedCaptures = result.groups;
      if (functionalReplace) {
        var replacerArgs = concat([matched], captures, position, S);
        if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
        replacement = toString(apply(replaceValue, undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }
      if (position >= nextSourcePosition) {
        accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }
    return accumulatedResult + stringSlice(S, nextSourcePosition);
  }];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

/***/ }),

/***/ 4244:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var call = __webpack_require__(8633);
var uncurryThis = __webpack_require__(7252);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(6736);
var anObject = __webpack_require__(2099);
var isNullOrUndefined = __webpack_require__(3201);
var requireObjectCoercible = __webpack_require__(1778);
var speciesConstructor = __webpack_require__(5153);
var advanceStringIndex = __webpack_require__(5505);
var toLength = __webpack_require__(1362);
var toString = __webpack_require__(6979);
var getMethod = __webpack_require__(5394);
var regExpExec = __webpack_require__(3246);
var stickyHelpers = __webpack_require__(2601);
var fails = __webpack_require__(3555);
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var push = uncurryThis([].push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () {
    return originalExec.apply(this, arguments);
  };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});
var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
// eslint-disable-next-line regexp/no-empty-group -- required for testing
'test'.split(/(?:)/, -1).length !== 4 || 'ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 ||
// eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
'.'.split(/()()/).length > 1 || ''.split(/.?/).length;

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
    return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
  } : nativeSplit;
  return [
  // `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
    return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
  },
  // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var rx = anObject(this);
    var S = toString(string);
    if (!BUGGY) {
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
    }
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y');
    // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.
    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];
    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
      var e;
      if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        push(A, stringSlice(S, p, q));
        if (A.length === lim) return A;
        for (var i = 1; i <= z.length - 1; i++) {
          push(A, z[i]);
          if (A.length === lim) return A;
        }
        q = p = e;
      }
    }
    push(A, stringSlice(S, p));
    return A;
  }];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

/***/ }),

/***/ 1796:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var uncurryThis = __webpack_require__(896);
var getOwnPropertyDescriptor = (__webpack_require__(1263).f);
var toLength = __webpack_require__(1362);
var toString = __webpack_require__(6979);
var notARegExp = __webpack_require__(2715);
var requireObjectCoercible = __webpack_require__(1778);
var correctIsRegExpLogic = __webpack_require__(1408);
var IS_PURE = __webpack_require__(5463);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({
  target: 'String',
  proto: true,
  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return stringSlice(that, index, index + search.length) === search;
  }
});

/***/ }),

/***/ 1454:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(346);
var $trim = (__webpack_require__(5310).trim);
var forcedStringTrimMethod = __webpack_require__(9094);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({
  target: 'String',
  proto: true,
  forced: forcedStringTrimMethod('trim')
}, {
  trim: function trim() {
    return $trim(this);
  }
});

/***/ }),

/***/ 7893:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var globalThis = __webpack_require__(7652);
var DOMIterables = __webpack_require__(6092);
var DOMTokenListPrototype = __webpack_require__(5908);
var ArrayIteratorMethods = __webpack_require__(7908);
var createNonEnumerableProperty = __webpack_require__(4703);
var setToStringTag = __webpack_require__(6563);
var wellKnownSymbol = __webpack_require__(207);
var ITERATOR = wellKnownSymbol('iterator');
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};
for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype, COLLECTION_NAME);
}
handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

/***/ }),

/***/ 8180:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ 4169:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AElement: () => (/* binding */ AElement),
  AnimateColorElement: () => (/* binding */ AnimateColorElement),
  AnimateElement: () => (/* binding */ AnimateElement),
  AnimateTransformElement: () => (/* binding */ AnimateTransformElement),
  BoundingBox: () => (/* binding */ BoundingBox),
  CB1: () => (/* binding */ CB1),
  CB2: () => (/* binding */ CB2),
  CB3: () => (/* binding */ CB3),
  CB4: () => (/* binding */ CB4),
  Canvg: () => (/* binding */ Canvg),
  CircleElement: () => (/* binding */ CircleElement),
  ClipPathElement: () => (/* binding */ ClipPathElement),
  DefsElement: () => (/* binding */ DefsElement),
  DescElement: () => (/* binding */ DescElement),
  Document: () => (/* binding */ Document),
  Element: () => (/* binding */ Element),
  EllipseElement: () => (/* binding */ EllipseElement),
  FeColorMatrixElement: () => (/* binding */ FeColorMatrixElement),
  FeCompositeElement: () => (/* binding */ FeCompositeElement),
  FeDropShadowElement: () => (/* binding */ FeDropShadowElement),
  FeGaussianBlurElement: () => (/* binding */ FeGaussianBlurElement),
  FeMorphologyElement: () => (/* binding */ FeMorphologyElement),
  FilterElement: () => (/* binding */ FilterElement),
  Font: () => (/* binding */ Font),
  FontElement: () => (/* binding */ FontElement),
  FontFaceElement: () => (/* binding */ FontFaceElement),
  GElement: () => (/* binding */ GElement),
  GlyphElement: () => (/* binding */ GlyphElement),
  GradientElement: () => (/* binding */ GradientElement),
  ImageElement: () => (/* binding */ ImageElement),
  LineElement: () => (/* binding */ LineElement),
  LinearGradientElement: () => (/* binding */ LinearGradientElement),
  MarkerElement: () => (/* binding */ MarkerElement),
  MaskElement: () => (/* binding */ MaskElement),
  Matrix: () => (/* binding */ Matrix),
  MissingGlyphElement: () => (/* binding */ MissingGlyphElement),
  Mouse: () => (/* binding */ Mouse),
  PSEUDO_ZERO: () => (/* binding */ PSEUDO_ZERO),
  Parser: () => (/* binding */ Parser),
  PathElement: () => (/* binding */ PathElement),
  PathParser: () => (/* binding */ PathParser),
  PatternElement: () => (/* binding */ PatternElement),
  Point: () => (/* binding */ Point),
  PolygonElement: () => (/* binding */ PolygonElement),
  PolylineElement: () => (/* binding */ PolylineElement),
  Property: () => (/* binding */ Property),
  QB1: () => (/* binding */ QB1),
  QB2: () => (/* binding */ QB2),
  QB3: () => (/* binding */ QB3),
  RadialGradientElement: () => (/* binding */ RadialGradientElement),
  RectElement: () => (/* binding */ RectElement),
  RenderedElement: () => (/* binding */ RenderedElement),
  Rotate: () => (/* binding */ Rotate),
  SVGElement: () => (/* binding */ SVGElement),
  SVGFontLoader: () => (/* binding */ SVGFontLoader),
  Scale: () => (/* binding */ Scale),
  Screen: () => (/* binding */ Screen),
  Skew: () => (/* binding */ Skew),
  SkewX: () => (/* binding */ SkewX),
  SkewY: () => (/* binding */ SkewY),
  StopElement: () => (/* binding */ StopElement),
  StyleElement: () => (/* binding */ StyleElement),
  SymbolElement: () => (/* binding */ SymbolElement),
  TRefElement: () => (/* binding */ TRefElement),
  TSpanElement: () => (/* binding */ TSpanElement),
  TextElement: () => (/* binding */ TextElement),
  TextPathElement: () => (/* binding */ TextPathElement),
  TitleElement: () => (/* binding */ TitleElement),
  Transform: () => (/* binding */ Transform),
  Translate: () => (/* binding */ Translate),
  UnknownElement: () => (/* binding */ UnknownElement),
  UseElement: () => (/* binding */ UseElement),
  ViewPort: () => (/* binding */ ViewPort),
  compressSpaces: () => (/* binding */ compressSpaces),
  "default": () => (/* binding */ Canvg),
  getSelectorSpecificity: () => (/* binding */ getSelectorSpecificity),
  normalizeAttributeName: () => (/* binding */ normalizeAttributeName),
  normalizeColor: () => (/* binding */ normalizeColor),
  parseExternalUrl: () => (/* binding */ parseExternalUrl),
  presets: () => (/* binding */ index),
  toNumbers: () => (/* binding */ toNumbers),
  trimLeft: () => (/* binding */ trimLeft),
  trimRight: () => (/* binding */ trimRight),
  vectorMagnitude: () => (/* binding */ vectorMagnitude),
  vectorsAngle: () => (/* binding */ vectorsAngle),
  vectorsRatio: () => (/* binding */ vectorsRatio)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(2478);
;// ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(3885);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(9012);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(1796);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(7908);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(7893);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(8180);
;// ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != (0,esm_typeof/* default */.A)(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,esm_typeof/* default */.A)(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == (0,esm_typeof/* default */.A)(i) ? i : i + "";
}

;// ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(2124);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__(9669);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(4244);
// EXTERNAL MODULE: ./node_modules/raf/index.js
var raf = __webpack_require__(2750);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(1454);
// EXTERNAL MODULE: ./node_modules/rgbcolor/index.js
var rgbcolor = __webpack_require__(5099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(3296);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(3791);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__(4806);
;// ./node_modules/svg-pathdata/lib/SVGPathData.module.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var _t = function t(r, e) {
  return (_t = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, r) {
    t.__proto__ = r;
  } || function (t, r) {
    for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
  })(r, e);
};
function r(r, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function i() {
    this.constructor = r;
  }
  _t(r, e), r.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}
function e(t) {
  var r = "";
  Array.isArray(t) || (t = [t]);
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    if (i.type === _.CLOSE_PATH) r += "z";else if (i.type === _.HORIZ_LINE_TO) r += (i.relative ? "h" : "H") + i.x;else if (i.type === _.VERT_LINE_TO) r += (i.relative ? "v" : "V") + i.y;else if (i.type === _.MOVE_TO) r += (i.relative ? "m" : "M") + i.x + " " + i.y;else if (i.type === _.LINE_TO) r += (i.relative ? "l" : "L") + i.x + " " + i.y;else if (i.type === _.CURVE_TO) r += (i.relative ? "c" : "C") + i.x1 + " " + i.y1 + " " + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;else if (i.type === _.SMOOTH_CURVE_TO) r += (i.relative ? "s" : "S") + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;else if (i.type === _.QUAD_TO) r += (i.relative ? "q" : "Q") + i.x1 + " " + i.y1 + " " + i.x + " " + i.y;else if (i.type === _.SMOOTH_QUAD_TO) r += (i.relative ? "t" : "T") + i.x + " " + i.y;else {
      if (i.type !== _.ARC) throw new Error('Unexpected command type "' + i.type + '" at index ' + e + ".");
      r += (i.relative ? "a" : "A") + i.rX + " " + i.rY + " " + i.xRot + " " + +i.lArcFlag + " " + +i.sweepFlag + " " + i.x + " " + i.y;
    }
  }
  return r;
}
function i(t, r) {
  var e = t[0],
    i = t[1];
  return [e * Math.cos(r) - i * Math.sin(r), e * Math.sin(r) + i * Math.cos(r)];
}
function a() {
  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
  for (var e = 0; e < t.length; e++) if ("number" != typeof t[e]) throw new Error("assertNumbers arguments[" + e + "] is not a number. " + _typeof(t[e]) + " == typeof " + t[e]);
  return !0;
}
var n = Math.PI;
function o(t, r, e) {
  t.lArcFlag = 0 === t.lArcFlag ? 0 : 1, t.sweepFlag = 0 === t.sweepFlag ? 0 : 1;
  var a = t.rX,
    o = t.rY,
    s = t.x,
    u = t.y;
  a = Math.abs(t.rX), o = Math.abs(t.rY);
  var h = i([(r - s) / 2, (e - u) / 2], -t.xRot / 180 * n),
    c = h[0],
    y = h[1],
    p = Math.pow(c, 2) / Math.pow(a, 2) + Math.pow(y, 2) / Math.pow(o, 2);
  1 < p && (a *= Math.sqrt(p), o *= Math.sqrt(p)), t.rX = a, t.rY = o;
  var m = Math.pow(a, 2) * Math.pow(y, 2) + Math.pow(o, 2) * Math.pow(c, 2),
    O = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(a, 2) * Math.pow(o, 2) - m) / m)),
    l = a * y / o * O,
    T = -o * c / a * O,
    v = i([l, T], t.xRot / 180 * n);
  t.cX = v[0] + (r + s) / 2, t.cY = v[1] + (e + u) / 2, t.phi1 = Math.atan2((y - T) / o, (c - l) / a), t.phi2 = Math.atan2((-y - T) / o, (-c - l) / a), 0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * n), 1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * n), t.phi1 *= 180 / n, t.phi2 *= 180 / n;
}
function s(t, r, e) {
  a(t, r, e);
  var i = t * t + r * r - e * e;
  if (0 > i) return [];
  if (0 === i) return [[t * e / (t * t + r * r), r * e / (t * t + r * r)]];
  var n = Math.sqrt(i);
  return [[(t * e + r * n) / (t * t + r * r), (r * e - t * n) / (t * t + r * r)], [(t * e - r * n) / (t * t + r * r), (r * e + t * n) / (t * t + r * r)]];
}
var u,
  h = Math.PI / 180;
function c(t, r, e) {
  return (1 - e) * t + e * r;
}
function y(t, r, e, i) {
  return t + Math.cos(i / 180 * n) * r + Math.sin(i / 180 * n) * e;
}
function p(t, r, e, i) {
  var a = 1e-6,
    n = r - t,
    o = e - r,
    s = 3 * n + 3 * (i - e) - 6 * o,
    u = 6 * (o - n),
    h = 3 * n;
  return Math.abs(s) < a ? [-h / u] : function (t, r, e) {
    void 0 === e && (e = 1e-6);
    var i = t * t / 4 - r;
    if (i < -e) return [];
    if (i <= e) return [-t / 2];
    var a = Math.sqrt(i);
    return [-t / 2 - a, -t / 2 + a];
  }(u / s, h / s, a);
}
function m(t, r, e, i, a) {
  var n = 1 - a;
  return t * (n * n * n) + r * (3 * n * n * a) + e * (3 * n * a * a) + i * (a * a * a);
}
!function (t) {
  function r() {
    return u(function (t, r, e) {
      return t.relative && (void 0 !== t.x1 && (t.x1 += r), void 0 !== t.y1 && (t.y1 += e), void 0 !== t.x2 && (t.x2 += r), void 0 !== t.y2 && (t.y2 += e), void 0 !== t.x && (t.x += r), void 0 !== t.y && (t.y += e), t.relative = !1), t;
    });
  }
  function e() {
    var t = NaN,
      r = NaN,
      e = NaN,
      i = NaN;
    return u(function (a, n, o) {
      return a.type & _.SMOOTH_CURVE_TO && (a.type = _.CURVE_TO, t = isNaN(t) ? n : t, r = isNaN(r) ? o : r, a.x1 = a.relative ? n - t : 2 * n - t, a.y1 = a.relative ? o - r : 2 * o - r), a.type & _.CURVE_TO ? (t = a.relative ? n + a.x2 : a.x2, r = a.relative ? o + a.y2 : a.y2) : (t = NaN, r = NaN), a.type & _.SMOOTH_QUAD_TO && (a.type = _.QUAD_TO, e = isNaN(e) ? n : e, i = isNaN(i) ? o : i, a.x1 = a.relative ? n - e : 2 * n - e, a.y1 = a.relative ? o - i : 2 * o - i), a.type & _.QUAD_TO ? (e = a.relative ? n + a.x1 : a.x1, i = a.relative ? o + a.y1 : a.y1) : (e = NaN, i = NaN), a;
    });
  }
  function n() {
    var t = NaN,
      r = NaN;
    return u(function (e, i, a) {
      if (e.type & _.SMOOTH_QUAD_TO && (e.type = _.QUAD_TO, t = isNaN(t) ? i : t, r = isNaN(r) ? a : r, e.x1 = e.relative ? i - t : 2 * i - t, e.y1 = e.relative ? a - r : 2 * a - r), e.type & _.QUAD_TO) {
        t = e.relative ? i + e.x1 : e.x1, r = e.relative ? a + e.y1 : e.y1;
        var n = e.x1,
          o = e.y1;
        e.type = _.CURVE_TO, e.x1 = ((e.relative ? 0 : i) + 2 * n) / 3, e.y1 = ((e.relative ? 0 : a) + 2 * o) / 3, e.x2 = (e.x + 2 * n) / 3, e.y2 = (e.y + 2 * o) / 3;
      } else t = NaN, r = NaN;
      return e;
    });
  }
  function u(t) {
    var r = 0,
      e = 0,
      i = NaN,
      a = NaN;
    return function (n) {
      if (isNaN(i) && !(n.type & _.MOVE_TO)) throw new Error("path must start with moveto");
      var o = t(n, r, e, i, a);
      return n.type & _.CLOSE_PATH && (r = i, e = a), void 0 !== n.x && (r = n.relative ? r + n.x : n.x), void 0 !== n.y && (e = n.relative ? e + n.y : n.y), n.type & _.MOVE_TO && (i = r, a = e), o;
    };
  }
  function O(t, r, e, i, n, o) {
    return a(t, r, e, i, n, o), u(function (a, s, u, h) {
      var c = a.x1,
        y = a.x2,
        p = a.relative && !isNaN(h),
        m = void 0 !== a.x ? a.x : p ? 0 : s,
        O = void 0 !== a.y ? a.y : p ? 0 : u;
      function l(t) {
        return t * t;
      }
      a.type & _.HORIZ_LINE_TO && 0 !== r && (a.type = _.LINE_TO, a.y = a.relative ? 0 : u), a.type & _.VERT_LINE_TO && 0 !== e && (a.type = _.LINE_TO, a.x = a.relative ? 0 : s), void 0 !== a.x && (a.x = a.x * t + O * e + (p ? 0 : n)), void 0 !== a.y && (a.y = m * r + a.y * i + (p ? 0 : o)), void 0 !== a.x1 && (a.x1 = a.x1 * t + a.y1 * e + (p ? 0 : n)), void 0 !== a.y1 && (a.y1 = c * r + a.y1 * i + (p ? 0 : o)), void 0 !== a.x2 && (a.x2 = a.x2 * t + a.y2 * e + (p ? 0 : n)), void 0 !== a.y2 && (a.y2 = y * r + a.y2 * i + (p ? 0 : o));
      var T = t * i - r * e;
      if (void 0 !== a.xRot && (1 !== t || 0 !== r || 0 !== e || 1 !== i)) if (0 === T) delete a.rX, delete a.rY, delete a.xRot, delete a.lArcFlag, delete a.sweepFlag, a.type = _.LINE_TO;else {
        var v = a.xRot * Math.PI / 180,
          f = Math.sin(v),
          N = Math.cos(v),
          x = 1 / l(a.rX),
          d = 1 / l(a.rY),
          E = l(N) * x + l(f) * d,
          A = 2 * f * N * (x - d),
          C = l(f) * x + l(N) * d,
          M = E * i * i - A * r * i + C * r * r,
          R = A * (t * i + r * e) - 2 * (E * e * i + C * t * r),
          g = E * e * e - A * t * e + C * t * t,
          I = (Math.atan2(R, M - g) + Math.PI) % Math.PI / 2,
          S = Math.sin(I),
          L = Math.cos(I);
        a.rX = Math.abs(T) / Math.sqrt(M * l(L) + R * S * L + g * l(S)), a.rY = Math.abs(T) / Math.sqrt(M * l(S) - R * S * L + g * l(L)), a.xRot = 180 * I / Math.PI;
      }
      return void 0 !== a.sweepFlag && 0 > T && (a.sweepFlag = +!a.sweepFlag), a;
    });
  }
  function l() {
    return function (t) {
      var r = {};
      for (var e in t) r[e] = t[e];
      return r;
    };
  }
  t.ROUND = function (t) {
    function r(r) {
      return Math.round(r * t) / t;
    }
    return void 0 === t && (t = 1e13), a(t), function (t) {
      return void 0 !== t.x1 && (t.x1 = r(t.x1)), void 0 !== t.y1 && (t.y1 = r(t.y1)), void 0 !== t.x2 && (t.x2 = r(t.x2)), void 0 !== t.y2 && (t.y2 = r(t.y2)), void 0 !== t.x && (t.x = r(t.x)), void 0 !== t.y && (t.y = r(t.y)), void 0 !== t.rX && (t.rX = r(t.rX)), void 0 !== t.rY && (t.rY = r(t.rY)), t;
    };
  }, t.TO_ABS = r, t.TO_REL = function () {
    return u(function (t, r, e) {
      return t.relative || (void 0 !== t.x1 && (t.x1 -= r), void 0 !== t.y1 && (t.y1 -= e), void 0 !== t.x2 && (t.x2 -= r), void 0 !== t.y2 && (t.y2 -= e), void 0 !== t.x && (t.x -= r), void 0 !== t.y && (t.y -= e), t.relative = !0), t;
    });
  }, t.NORMALIZE_HVZ = function (t, r, e) {
    return void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === e && (e = !0), u(function (i, a, n, o, s) {
      if (isNaN(o) && !(i.type & _.MOVE_TO)) throw new Error("path must start with moveto");
      return r && i.type & _.HORIZ_LINE_TO && (i.type = _.LINE_TO, i.y = i.relative ? 0 : n), e && i.type & _.VERT_LINE_TO && (i.type = _.LINE_TO, i.x = i.relative ? 0 : a), t && i.type & _.CLOSE_PATH && (i.type = _.LINE_TO, i.x = i.relative ? o - a : o, i.y = i.relative ? s - n : s), i.type & _.ARC && (0 === i.rX || 0 === i.rY) && (i.type = _.LINE_TO, delete i.rX, delete i.rY, delete i.xRot, delete i.lArcFlag, delete i.sweepFlag), i;
    });
  }, t.NORMALIZE_ST = e, t.QT_TO_C = n, t.INFO = u, t.SANITIZE = function (t) {
    void 0 === t && (t = 0), a(t);
    var r = NaN,
      e = NaN,
      i = NaN,
      n = NaN;
    return u(function (a, o, s, u, h) {
      var c = Math.abs,
        y = !1,
        p = 0,
        m = 0;
      if (a.type & _.SMOOTH_CURVE_TO && (p = isNaN(r) ? 0 : o - r, m = isNaN(e) ? 0 : s - e), a.type & (_.CURVE_TO | _.SMOOTH_CURVE_TO) ? (r = a.relative ? o + a.x2 : a.x2, e = a.relative ? s + a.y2 : a.y2) : (r = NaN, e = NaN), a.type & _.SMOOTH_QUAD_TO ? (i = isNaN(i) ? o : 2 * o - i, n = isNaN(n) ? s : 2 * s - n) : a.type & _.QUAD_TO ? (i = a.relative ? o + a.x1 : a.x1, n = a.relative ? s + a.y1 : a.y2) : (i = NaN, n = NaN), a.type & _.LINE_COMMANDS || a.type & _.ARC && (0 === a.rX || 0 === a.rY || !a.lArcFlag) || a.type & _.CURVE_TO || a.type & _.SMOOTH_CURVE_TO || a.type & _.QUAD_TO || a.type & _.SMOOTH_QUAD_TO) {
        var O = void 0 === a.x ? 0 : a.relative ? a.x : a.x - o,
          l = void 0 === a.y ? 0 : a.relative ? a.y : a.y - s;
        p = isNaN(i) ? void 0 === a.x1 ? p : a.relative ? a.x : a.x1 - o : i - o, m = isNaN(n) ? void 0 === a.y1 ? m : a.relative ? a.y : a.y1 - s : n - s;
        var T = void 0 === a.x2 ? 0 : a.relative ? a.x : a.x2 - o,
          v = void 0 === a.y2 ? 0 : a.relative ? a.y : a.y2 - s;
        c(O) <= t && c(l) <= t && c(p) <= t && c(m) <= t && c(T) <= t && c(v) <= t && (y = !0);
      }
      return a.type & _.CLOSE_PATH && c(o - u) <= t && c(s - h) <= t && (y = !0), y ? [] : a;
    });
  }, t.MATRIX = O, t.ROTATE = function (t, r, e) {
    void 0 === r && (r = 0), void 0 === e && (e = 0), a(t, r, e);
    var i = Math.sin(t),
      n = Math.cos(t);
    return O(n, i, -i, n, r - r * n + e * i, e - r * i - e * n);
  }, t.TRANSLATE = function (t, r) {
    return void 0 === r && (r = 0), a(t, r), O(1, 0, 0, 1, t, r);
  }, t.SCALE = function (t, r) {
    return void 0 === r && (r = t), a(t, r), O(t, 0, 0, r, 0, 0);
  }, t.SKEW_X = function (t) {
    return a(t), O(1, 0, Math.atan(t), 1, 0, 0);
  }, t.SKEW_Y = function (t) {
    return a(t), O(1, Math.atan(t), 0, 1, 0, 0);
  }, t.X_AXIS_SYMMETRY = function (t) {
    return void 0 === t && (t = 0), a(t), O(-1, 0, 0, 1, t, 0);
  }, t.Y_AXIS_SYMMETRY = function (t) {
    return void 0 === t && (t = 0), a(t), O(1, 0, 0, -1, 0, t);
  }, t.A_TO_C = function () {
    return u(function (t, r, e) {
      return _.ARC === t.type ? function (t, r, e) {
        var a, n, s, u;
        t.cX || o(t, r, e);
        for (var y = Math.min(t.phi1, t.phi2), p = Math.max(t.phi1, t.phi2) - y, m = Math.ceil(p / 90), O = new Array(m), l = r, T = e, v = 0; v < m; v++) {
          var f = c(t.phi1, t.phi2, v / m),
            N = c(t.phi1, t.phi2, (v + 1) / m),
            x = N - f,
            d = 4 / 3 * Math.tan(x * h / 4),
            E = [Math.cos(f * h) - d * Math.sin(f * h), Math.sin(f * h) + d * Math.cos(f * h)],
            A = E[0],
            C = E[1],
            M = [Math.cos(N * h), Math.sin(N * h)],
            R = M[0],
            g = M[1],
            I = [R + d * Math.sin(N * h), g - d * Math.cos(N * h)],
            S = I[0],
            L = I[1];
          O[v] = {
            relative: t.relative,
            type: _.CURVE_TO
          };
          var H = function H(r, e) {
            var a = i([r * t.rX, e * t.rY], t.xRot),
              n = a[0],
              o = a[1];
            return [t.cX + n, t.cY + o];
          };
          a = H(A, C), O[v].x1 = a[0], O[v].y1 = a[1], n = H(S, L), O[v].x2 = n[0], O[v].y2 = n[1], s = H(R, g), O[v].x = s[0], O[v].y = s[1], t.relative && (O[v].x1 -= l, O[v].y1 -= T, O[v].x2 -= l, O[v].y2 -= T, O[v].x -= l, O[v].y -= T), l = (u = [O[v].x, O[v].y])[0], T = u[1];
        }
        return O;
      }(t, t.relative ? 0 : r, t.relative ? 0 : e) : t;
    });
  }, t.ANNOTATE_ARCS = function () {
    return u(function (t, r, e) {
      return t.relative && (r = 0, e = 0), _.ARC === t.type && o(t, r, e), t;
    });
  }, t.CLONE = l, t.CALCULATE_BOUNDS = function () {
    var t = function t(_t2) {
        var r = {};
        for (var e in _t2) r[e] = _t2[e];
        return r;
      },
      i = r(),
      a = n(),
      h = e(),
      c = u(function (r, e, n) {
        var u = h(a(i(t(r))));
        function O(t) {
          t > c.maxX && (c.maxX = t), t < c.minX && (c.minX = t);
        }
        function l(t) {
          t > c.maxY && (c.maxY = t), t < c.minY && (c.minY = t);
        }
        if (u.type & _.DRAWING_COMMANDS && (O(e), l(n)), u.type & _.HORIZ_LINE_TO && O(u.x), u.type & _.VERT_LINE_TO && l(u.y), u.type & _.LINE_TO && (O(u.x), l(u.y)), u.type & _.CURVE_TO) {
          O(u.x), l(u.y);
          for (var T = 0, v = p(e, u.x1, u.x2, u.x); T < v.length; T++) {
            0 < (w = v[T]) && 1 > w && O(m(e, u.x1, u.x2, u.x, w));
          }
          for (var f = 0, N = p(n, u.y1, u.y2, u.y); f < N.length; f++) {
            0 < (w = N[f]) && 1 > w && l(m(n, u.y1, u.y2, u.y, w));
          }
        }
        if (u.type & _.ARC) {
          O(u.x), l(u.y), o(u, e, n);
          for (var x = u.xRot / 180 * Math.PI, d = Math.cos(x) * u.rX, E = Math.sin(x) * u.rX, A = -Math.sin(x) * u.rY, C = Math.cos(x) * u.rY, M = u.phi1 < u.phi2 ? [u.phi1, u.phi2] : -180 > u.phi2 ? [u.phi2 + 360, u.phi1 + 360] : [u.phi2, u.phi1], R = M[0], g = M[1], I = function I(t) {
              var r = t[0],
                e = t[1],
                i = 180 * Math.atan2(e, r) / Math.PI;
              return i < R ? i + 360 : i;
            }, S = 0, L = s(A, -d, 0).map(I); S < L.length; S++) {
            (w = L[S]) > R && w < g && O(y(u.cX, d, A, w));
          }
          for (var H = 0, U = s(C, -E, 0).map(I); H < U.length; H++) {
            var w;
            (w = U[H]) > R && w < g && l(y(u.cY, E, C, w));
          }
        }
        return r;
      });
    return c.minX = 1 / 0, c.maxX = -1 / 0, c.minY = 1 / 0, c.maxY = -1 / 0, c;
  };
}(u || (u = {}));
var O,
  l = function () {
    function t() {}
    return t.prototype.round = function (t) {
      return this.transform(u.ROUND(t));
    }, t.prototype.toAbs = function () {
      return this.transform(u.TO_ABS());
    }, t.prototype.toRel = function () {
      return this.transform(u.TO_REL());
    }, t.prototype.normalizeHVZ = function (t, r, e) {
      return this.transform(u.NORMALIZE_HVZ(t, r, e));
    }, t.prototype.normalizeST = function () {
      return this.transform(u.NORMALIZE_ST());
    }, t.prototype.qtToC = function () {
      return this.transform(u.QT_TO_C());
    }, t.prototype.aToC = function () {
      return this.transform(u.A_TO_C());
    }, t.prototype.sanitize = function (t) {
      return this.transform(u.SANITIZE(t));
    }, t.prototype.translate = function (t, r) {
      return this.transform(u.TRANSLATE(t, r));
    }, t.prototype.scale = function (t, r) {
      return this.transform(u.SCALE(t, r));
    }, t.prototype.rotate = function (t, r, e) {
      return this.transform(u.ROTATE(t, r, e));
    }, t.prototype.matrix = function (t, r, e, i, a, n) {
      return this.transform(u.MATRIX(t, r, e, i, a, n));
    }, t.prototype.skewX = function (t) {
      return this.transform(u.SKEW_X(t));
    }, t.prototype.skewY = function (t) {
      return this.transform(u.SKEW_Y(t));
    }, t.prototype.xSymmetry = function (t) {
      return this.transform(u.X_AXIS_SYMMETRY(t));
    }, t.prototype.ySymmetry = function (t) {
      return this.transform(u.Y_AXIS_SYMMETRY(t));
    }, t.prototype.annotateArcs = function () {
      return this.transform(u.ANNOTATE_ARCS());
    }, t;
  }(),
  T = function T(t) {
    return " " === t || "\t" === t || "\r" === t || "\n" === t;
  },
  v = function v(t) {
    return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0);
  },
  f = function (t) {
    function e() {
      var r = t.call(this) || this;
      return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
    }
    return r(e, t), e.prototype.finish = function (t) {
      if (void 0 === t && (t = []), this.parse(" ", t), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
      return t;
    }, e.prototype.parse = function (t, r) {
      var e = this;
      void 0 === r && (r = []);
      for (var i = function i(t) {
          r.push(t), e.curArgs.length = 0, e.canParseCommandOrComma = !0;
        }, a = 0; a < t.length; a++) {
        var n = t[a],
          o = !(this.curCommandType !== _.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber),
          s = v(n) && ("0" === this.curNumber && "0" === n || o);
        if (!v(n) || s) {
          if ("e" !== n && "E" !== n) {
            if ("-" !== n && "+" !== n || !this.curNumberHasExp || this.curNumberHasExpDigits) {
              if ("." !== n || this.curNumberHasExp || this.curNumberHasDecimal || o) {
                if (this.curNumber && -1 !== this.curCommandType) {
                  var u = Number(this.curNumber);
                  if (isNaN(u)) throw new SyntaxError("Invalid number ending at " + a);
                  if (this.curCommandType === _.ARC) if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                    if (0 > u) throw new SyntaxError('Expected positive number, got "' + u + '" at index "' + a + '"');
                  } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + a + '"');
                  this.curArgs.push(u), this.curArgs.length === N[this.curCommandType] && (_.HORIZ_LINE_TO === this.curCommandType ? i({
                    type: _.HORIZ_LINE_TO,
                    relative: this.curCommandRelative,
                    x: u
                  }) : _.VERT_LINE_TO === this.curCommandType ? i({
                    type: _.VERT_LINE_TO,
                    relative: this.curCommandRelative,
                    y: u
                  }) : this.curCommandType === _.MOVE_TO || this.curCommandType === _.LINE_TO || this.curCommandType === _.SMOOTH_QUAD_TO ? (i({
                    type: this.curCommandType,
                    relative: this.curCommandRelative,
                    x: this.curArgs[0],
                    y: this.curArgs[1]
                  }), _.MOVE_TO === this.curCommandType && (this.curCommandType = _.LINE_TO)) : this.curCommandType === _.CURVE_TO ? i({
                    type: _.CURVE_TO,
                    relative: this.curCommandRelative,
                    x1: this.curArgs[0],
                    y1: this.curArgs[1],
                    x2: this.curArgs[2],
                    y2: this.curArgs[3],
                    x: this.curArgs[4],
                    y: this.curArgs[5]
                  }) : this.curCommandType === _.SMOOTH_CURVE_TO ? i({
                    type: _.SMOOTH_CURVE_TO,
                    relative: this.curCommandRelative,
                    x2: this.curArgs[0],
                    y2: this.curArgs[1],
                    x: this.curArgs[2],
                    y: this.curArgs[3]
                  }) : this.curCommandType === _.QUAD_TO ? i({
                    type: _.QUAD_TO,
                    relative: this.curCommandRelative,
                    x1: this.curArgs[0],
                    y1: this.curArgs[1],
                    x: this.curArgs[2],
                    y: this.curArgs[3]
                  }) : this.curCommandType === _.ARC && i({
                    type: _.ARC,
                    relative: this.curCommandRelative,
                    rX: this.curArgs[0],
                    rY: this.curArgs[1],
                    xRot: this.curArgs[2],
                    lArcFlag: this.curArgs[3],
                    sweepFlag: this.curArgs[4],
                    x: this.curArgs[5],
                    y: this.curArgs[6]
                  })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
                }
                if (!T(n)) if ("," === n && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;else if ("+" !== n && "-" !== n && "." !== n) {
                  if (s) this.curNumber = n, this.curNumberHasDecimal = !1;else {
                    if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + a + ".");
                    if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ". Command cannot follow comma");
                    if (this.canParseCommandOrComma = !1, "z" !== n && "Z" !== n) {
                      if ("h" === n || "H" === n) this.curCommandType = _.HORIZ_LINE_TO, this.curCommandRelative = "h" === n;else if ("v" === n || "V" === n) this.curCommandType = _.VERT_LINE_TO, this.curCommandRelative = "v" === n;else if ("m" === n || "M" === n) this.curCommandType = _.MOVE_TO, this.curCommandRelative = "m" === n;else if ("l" === n || "L" === n) this.curCommandType = _.LINE_TO, this.curCommandRelative = "l" === n;else if ("c" === n || "C" === n) this.curCommandType = _.CURVE_TO, this.curCommandRelative = "c" === n;else if ("s" === n || "S" === n) this.curCommandType = _.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === n;else if ("q" === n || "Q" === n) this.curCommandType = _.QUAD_TO, this.curCommandRelative = "q" === n;else if ("t" === n || "T" === n) this.curCommandType = _.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === n;else {
                        if ("a" !== n && "A" !== n) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ".");
                        this.curCommandType = _.ARC, this.curCommandRelative = "a" === n;
                      }
                    } else r.push({
                      type: _.CLOSE_PATH
                    }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                  }
                } else this.curNumber = n, this.curNumberHasDecimal = "." === n;
              } else this.curNumber += n, this.curNumberHasDecimal = !0;
            } else this.curNumber += n;
          } else this.curNumber += n, this.curNumberHasExp = !0;
        } else this.curNumber += n, this.curNumberHasExpDigits = this.curNumberHasExp;
      }
      return r;
    }, e.prototype.transform = function (t) {
      return Object.create(this, {
        parse: {
          value: function value(r, e) {
            void 0 === e && (e = []);
            for (var i = 0, a = Object.getPrototypeOf(this).parse.call(this, r); i < a.length; i++) {
              var n = a[i],
                o = t(n);
              Array.isArray(o) ? e.push.apply(e, o) : e.push(o);
            }
            return e;
          }
        }
      });
    }, e;
  }(l),
  _ = function (t) {
    function i(r) {
      var e = t.call(this) || this;
      return e.commands = "string" == typeof r ? i.parse(r) : r, e;
    }
    return r(i, t), i.prototype.encode = function () {
      return i.encode(this.commands);
    }, i.prototype.getBounds = function () {
      var t = u.CALCULATE_BOUNDS();
      return this.transform(t), t;
    }, i.prototype.transform = function (t) {
      for (var r = [], e = 0, i = this.commands; e < i.length; e++) {
        var a = t(i[e]);
        Array.isArray(a) ? r.push.apply(r, a) : r.push(a);
      }
      return this.commands = r, this;
    }, i.encode = function (t) {
      return e(t);
    }, i.parse = function (t) {
      var r = new f(),
        e = [];
      return r.parse(t, e), r.finish(e), e;
    }, i.CLOSE_PATH = 1, i.MOVE_TO = 2, i.HORIZ_LINE_TO = 4, i.VERT_LINE_TO = 8, i.LINE_TO = 16, i.CURVE_TO = 32, i.SMOOTH_CURVE_TO = 64, i.QUAD_TO = 128, i.SMOOTH_QUAD_TO = 256, i.ARC = 512, i.LINE_COMMANDS = i.LINE_TO | i.HORIZ_LINE_TO | i.VERT_LINE_TO, i.DRAWING_COMMANDS = i.HORIZ_LINE_TO | i.VERT_LINE_TO | i.LINE_TO | i.CURVE_TO | i.SMOOTH_CURVE_TO | i.QUAD_TO | i.SMOOTH_QUAD_TO | i.ARC, i;
  }(l),
  N = ((O = {})[_.MOVE_TO] = 2, O[_.LINE_TO] = 2, O[_.HORIZ_LINE_TO] = 1, O[_.VERT_LINE_TO] = 1, O[_.CLOSE_PATH] = 0, O[_.QUAD_TO] = 4, O[_.SMOOTH_QUAD_TO] = 2, O[_.CURVE_TO] = 6, O[_.SMOOTH_CURVE_TO] = 4, O[_.ARC] = 7, O);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(249);
;// ./node_modules/stackblur-canvas/dist/stackblur-es.js
function stackblur_es_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    stackblur_es_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    stackblur_es_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return stackblur_es_typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/* eslint-disable no-bitwise -- used for calculations */

/* eslint-disable unicorn/prefer-query-selector -- aiming at
  backward-compatibility */

/**
* StackBlur - a fast almost Gaussian Blur For Canvas
*
* In case you find this class useful - especially in commercial projects -
* I am not totally unhappy for a small donation to my PayPal account
* mario@quasimondo.de
*
* Or support me on flattr:
* {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
*
* @module StackBlur
* @author Mario Klingemann
* Contact: mario@quasimondo.com
* Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
* Twitter: @quasimondo
*
* @copyright (c) 2010 Mario Klingemann
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
var mulTable = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
var shgTable = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
/**
 * @param {string|HTMLImageElement} img
 * @param {string|HTMLCanvasElement} canvas
 * @param {Float} radius
 * @param {boolean} blurAlphaChannel
 * @param {boolean} useOffset
 * @param {boolean} skipStyles
 * @returns {undefined}
 */

function processImage(img, canvas, radius, blurAlphaChannel, useOffset, skipStyles) {
  if (typeof img === 'string') {
    img = document.getElementById(img);
  }
  if (!img || Object.prototype.toString.call(img).slice(8, -1) === 'HTMLImageElement' && !('naturalWidth' in img)) {
    return;
  }
  var dimensionType = useOffset ? 'offset' : 'natural';
  var w = img[dimensionType + 'Width'];
  var h = img[dimensionType + 'Height']; // add ImageBitmap support,can blur texture source

  if (Object.prototype.toString.call(img).slice(8, -1) === 'ImageBitmap') {
    w = img.width;
    h = img.height;
  }
  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }
  if (!canvas || !('getContext' in canvas)) {
    return;
  }
  if (!skipStyles) {
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
  }
  canvas.width = w;
  canvas.height = h;
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, w, h);
  context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, w, h);
  if (isNaN(radius) || radius < 1) {
    return;
  }
  if (blurAlphaChannel) {
    processCanvasRGBA(canvas, 0, 0, w, h, radius);
  } else {
    processCanvasRGB(canvas, 0, 0, w, h, radius);
  }
}
/**
 * @param {string|HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @throws {Error|TypeError}
 * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
 */

function getImageDataFromCanvas(canvas, topX, topY, width, height) {
  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }
  if (!canvas || stackblur_es_typeof(canvas) !== 'object' || !('getContext' in canvas)) {
    throw new TypeError('Expecting canvas with `getContext` method ' + 'in processCanvasRGB(A) calls!');
  }
  var context = canvas.getContext('2d');
  try {
    return context.getImageData(topX, topY, width, height);
  } catch (e) {
    throw new Error('unable to access image data: ' + e);
  }
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */

function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }
  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */

function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;
  for (var i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();
    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }
  stack.next = stackStart;
  var stackIn = null,
    stackOut = null,
    yw = 0,
    yi = 0;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];
  for (var y = 0; y < height; y++) {
    stack = stackStart;
    var pr = pixels[yi],
      pg = pixels[yi + 1],
      pb = pixels[yi + 2],
      pa = pixels[yi + 3];
    for (var _i = 0; _i < radiusPlus1; _i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }
    var rInSum = 0,
      gInSum = 0,
      bInSum = 0,
      aInSum = 0,
      rOutSum = radiusPlus1 * pr,
      gOutSum = radiusPlus1 * pg,
      bOutSum = radiusPlus1 * pb,
      aOutSum = radiusPlus1 * pa,
      rSum = sumFactor * pr,
      gSum = sumFactor * pg,
      bSum = sumFactor * pb,
      aSum = sumFactor * pa;
    for (var _i2 = 1; _i2 < radiusPlus1; _i2++) {
      var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
      var r = pixels[p],
        g = pixels[p + 1],
        b = pixels[p + 2],
        a = pixels[p + 3];
      var rbs = radiusPlus1 - _i2;
      rSum += (stack.r = r) * rbs;
      gSum += (stack.g = g) * rbs;
      bSum += (stack.b = b) * rbs;
      aSum += (stack.a = a) * rbs;
      rInSum += r;
      gInSum += g;
      bInSum += b;
      aInSum += a;
      stack = stack.next;
    }
    stackIn = stackStart;
    stackOut = stackEnd;
    for (var x = 0; x < width; x++) {
      var paInitial = aSum * mulSum >>> shgSum;
      pixels[yi + 3] = paInitial;
      if (paInitial !== 0) {
        var _a2 = 255 / paInitial;
        pixels[yi] = (rSum * mulSum >>> shgSum) * _a2;
        pixels[yi + 1] = (gSum * mulSum >>> shgSum) * _a2;
        pixels[yi + 2] = (bSum * mulSum >>> shgSum) * _a2;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }
      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      aSum -= aOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      aOutSum -= stackIn.a;
      var _p = x + radius + 1;
      _p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[_p];
      gInSum += stackIn.g = pixels[_p + 1];
      bInSum += stackIn.b = pixels[_p + 2];
      aInSum += stackIn.a = pixels[_p + 3];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      aSum += aInSum;
      stackIn = stackIn.next;
      var _stackOut = stackOut,
        _r = _stackOut.r,
        _g = _stackOut.g,
        _b = _stackOut.b,
        _a = _stackOut.a;
      rOutSum += _r;
      gOutSum += _g;
      bOutSum += _b;
      aOutSum += _a;
      rInSum -= _r;
      gInSum -= _g;
      bInSum -= _b;
      aInSum -= _a;
      stackOut = stackOut.next;
      yi += 4;
    }
    yw += width;
  }
  for (var _x = 0; _x < width; _x++) {
    yi = _x << 2;
    var _pr = pixels[yi],
      _pg = pixels[yi + 1],
      _pb = pixels[yi + 2],
      _pa = pixels[yi + 3],
      _rOutSum = radiusPlus1 * _pr,
      _gOutSum = radiusPlus1 * _pg,
      _bOutSum = radiusPlus1 * _pb,
      _aOutSum = radiusPlus1 * _pa,
      _rSum = sumFactor * _pr,
      _gSum = sumFactor * _pg,
      _bSum = sumFactor * _pb,
      _aSum = sumFactor * _pa;
    stack = stackStart;
    for (var _i3 = 0; _i3 < radiusPlus1; _i3++) {
      stack.r = _pr;
      stack.g = _pg;
      stack.b = _pb;
      stack.a = _pa;
      stack = stack.next;
    }
    var yp = width;
    var _gInSum = 0,
      _bInSum = 0,
      _aInSum = 0,
      _rInSum = 0;
    for (var _i4 = 1; _i4 <= radius; _i4++) {
      yi = yp + _x << 2;
      var _rbs = radiusPlus1 - _i4;
      _rSum += (stack.r = _pr = pixels[yi]) * _rbs;
      _gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
      _bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
      _aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
      _rInSum += _pr;
      _gInSum += _pg;
      _bInSum += _pb;
      _aInSum += _pa;
      stack = stack.next;
      if (_i4 < heightMinus1) {
        yp += width;
      }
    }
    yi = _x;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (var _y = 0; _y < height; _y++) {
      var _p2 = yi << 2;
      pixels[_p2 + 3] = _pa = _aSum * mulSum >>> shgSum;
      if (_pa > 0) {
        _pa = 255 / _pa;
        pixels[_p2] = (_rSum * mulSum >>> shgSum) * _pa;
        pixels[_p2 + 1] = (_gSum * mulSum >>> shgSum) * _pa;
        pixels[_p2 + 2] = (_bSum * mulSum >>> shgSum) * _pa;
      } else {
        pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
      }
      _rSum -= _rOutSum;
      _gSum -= _gOutSum;
      _bSum -= _bOutSum;
      _aSum -= _aOutSum;
      _rOutSum -= stackIn.r;
      _gOutSum -= stackIn.g;
      _bOutSum -= stackIn.b;
      _aOutSum -= stackIn.a;
      _p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
      _rSum += _rInSum += stackIn.r = pixels[_p2];
      _gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
      _bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
      _aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
      stackIn = stackIn.next;
      _rOutSum += _pr = stackOut.r;
      _gOutSum += _pg = stackOut.g;
      _bOutSum += _pb = stackOut.b;
      _aOutSum += _pa = stackOut.a;
      _rInSum -= _pr;
      _gInSum -= _pg;
      _bInSum -= _pb;
      _aInSum -= _pa;
      stackOut = stackOut.next;
      yi += width;
    }
  }
  return imageData;
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */

function processCanvasRGB(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }
  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */

function processImageDataRGB(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;
  for (var i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();
    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }
  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];
  var p, rbs;
  var yw = 0,
    yi = 0;
  for (var y = 0; y < height; y++) {
    var pr = pixels[yi],
      pg = pixels[yi + 1],
      pb = pixels[yi + 2],
      rOutSum = radiusPlus1 * pr,
      gOutSum = radiusPlus1 * pg,
      bOutSum = radiusPlus1 * pb,
      rSum = sumFactor * pr,
      gSum = sumFactor * pg,
      bSum = sumFactor * pb;
    stack = stackStart;
    for (var _i5 = 0; _i5 < radiusPlus1; _i5++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }
    var rInSum = 0,
      gInSum = 0,
      bInSum = 0;
    for (var _i6 = 1; _i6 < radiusPlus1; _i6++) {
      p = yi + ((widthMinus1 < _i6 ? widthMinus1 : _i6) << 2);
      rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - _i6);
      gSum += (stack.g = pg = pixels[p + 1]) * rbs;
      bSum += (stack.b = pb = pixels[p + 2]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      stack = stack.next;
    }
    stackIn = stackStart;
    stackOut = stackEnd;
    for (var x = 0; x < width; x++) {
      pixels[yi] = rSum * mulSum >>> shgSum;
      pixels[yi + 1] = gSum * mulSum >>> shgSum;
      pixels[yi + 2] = bSum * mulSum >>> shgSum;
      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[p];
      gInSum += stackIn.g = pixels[p + 1];
      bInSum += stackIn.b = pixels[p + 2];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      stackOut = stackOut.next;
      yi += 4;
    }
    yw += width;
  }
  for (var _x2 = 0; _x2 < width; _x2++) {
    yi = _x2 << 2;
    var _pr2 = pixels[yi],
      _pg2 = pixels[yi + 1],
      _pb2 = pixels[yi + 2],
      _rOutSum2 = radiusPlus1 * _pr2,
      _gOutSum2 = radiusPlus1 * _pg2,
      _bOutSum2 = radiusPlus1 * _pb2,
      _rSum2 = sumFactor * _pr2,
      _gSum2 = sumFactor * _pg2,
      _bSum2 = sumFactor * _pb2;
    stack = stackStart;
    for (var _i7 = 0; _i7 < radiusPlus1; _i7++) {
      stack.r = _pr2;
      stack.g = _pg2;
      stack.b = _pb2;
      stack = stack.next;
    }
    var _rInSum2 = 0,
      _gInSum2 = 0,
      _bInSum2 = 0;
    for (var _i8 = 1, yp = width; _i8 <= radius; _i8++) {
      yi = yp + _x2 << 2;
      _rSum2 += (stack.r = _pr2 = pixels[yi]) * (rbs = radiusPlus1 - _i8);
      _gSum2 += (stack.g = _pg2 = pixels[yi + 1]) * rbs;
      _bSum2 += (stack.b = _pb2 = pixels[yi + 2]) * rbs;
      _rInSum2 += _pr2;
      _gInSum2 += _pg2;
      _bInSum2 += _pb2;
      stack = stack.next;
      if (_i8 < heightMinus1) {
        yp += width;
      }
    }
    yi = _x2;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (var _y2 = 0; _y2 < height; _y2++) {
      p = yi << 2;
      pixels[p] = _rSum2 * mulSum >>> shgSum;
      pixels[p + 1] = _gSum2 * mulSum >>> shgSum;
      pixels[p + 2] = _bSum2 * mulSum >>> shgSum;
      _rSum2 -= _rOutSum2;
      _gSum2 -= _gOutSum2;
      _bSum2 -= _bOutSum2;
      _rOutSum2 -= stackIn.r;
      _gOutSum2 -= stackIn.g;
      _bOutSum2 -= stackIn.b;
      p = _x2 + ((p = _y2 + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      _rSum2 += _rInSum2 += stackIn.r = pixels[p];
      _gSum2 += _gInSum2 += stackIn.g = pixels[p + 1];
      _bSum2 += _bInSum2 += stackIn.b = pixels[p + 2];
      stackIn = stackIn.next;
      _rOutSum2 += _pr2 = stackOut.r;
      _gOutSum2 += _pg2 = stackOut.g;
      _bOutSum2 += _pb2 = stackOut.b;
      _rInSum2 -= _pr2;
      _gInSum2 -= _pg2;
      _bInSum2 -= _pb2;
      stackOut = stackOut.next;
      yi += width;
    }
  }
  return imageData;
}
/**
 *
 */

var BlurStack =
/**
 * Set properties.
 */
function BlurStack() {
  _classCallCheck(this, BlurStack);
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
};

;// ./node_modules/canvg/lib/index.es.js
function index_es_typeof(o) { "@babel/helpers - typeof"; return index_es_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, index_es_typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == index_es_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function index_es_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == index_es_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != index_es_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != index_es_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == index_es_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(index_es_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }





















/**
 * Options preset for `OffscreenCanvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @returns Preset object.
 */
function offscreen() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    DOMParserFallback = _ref4.DOMParser;
  var preset = {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser: DOMParserFallback,
    createCanvas: function createCanvas(width, height) {
      return new OffscreenCanvas(width, height);
    },
    createImage: function createImage(url) {
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, blob, img;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url);
            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.blob();
            case 5:
              blob = _context.sent;
              _context.next = 8;
              return createImageBitmap(blob);
            case 8:
              img = _context.sent;
              return _context.abrupt("return", img);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  };
  if (typeof DOMParser !== 'undefined' || typeof DOMParserFallback === 'undefined') {
    Reflect.deleteProperty(preset, 'DOMParser');
  }
  return preset;
}

/**
 * Options preset for `node-canvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @param config.canvas - `node-canvas` exports.
 * @param config.fetch - WHATWG-compatible `fetch` function.
 * @returns Preset object.
 */
function node(_ref) {
  var DOMParser = _ref.DOMParser,
    canvas = _ref.canvas,
    fetch = _ref.fetch;
  return {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser: DOMParser,
    fetch: fetch,
    createCanvas: canvas.createCanvas,
    createImage: canvas.loadImage
  };
}
var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  offscreen: offscreen,
  node: node
});

/**
 * HTML-safe compress white-spaces.
 * @param str - String to compress.
 * @returns String.
 */
function compressSpaces(str) {
  return str.replace(/(?!\u3000)\s+/gm, ' ');
}
/**
 * HTML-safe left trim.
 * @param str - String to trim.
 * @returns String.
 */

function trimLeft(str) {
  return str.replace(/^[\n \t]+/, '');
}
/**
 * HTML-safe right trim.
 * @param str - String to trim.
 * @returns String.
 */

function trimRight(str) {
  return str.replace(/[\n \t]+$/, '');
}
/**
 * String to numbers array.
 * @param str - Numbers string.
 * @returns Numbers array.
 */

function toNumbers(str) {
  var matches = (str || '').match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return matches.map(parseFloat);
} // Microsoft Edge fix

var allUppercase = /^[A-Z-]+$/;
/**
 * Normalize attribute name.
 * @param name - Attribute name.
 * @returns Normalized attribute name.
 */

function normalizeAttributeName(name) {
  if (allUppercase.test(name)) {
    return name.toLowerCase();
  }
  return name;
}
/**
 * Parse external URL.
 * @param url - CSS url string.
 * @returns Parsed URL.
 */

function parseExternalUrl(url) {
  //                      single quotes [2]
  //                      v         double quotes [3]
  //                      v         v         no quotes [4]
  //                      v         v         v
  var urlMatch = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(url) || [];
  return urlMatch[2] || urlMatch[3] || urlMatch[4];
}
/**
 * Transform floats to integers in rgb colors.
 * @param color - Color to normalize.
 * @returns Normalized color.
 */

function normalizeColor(color) {
  if (!color.startsWith('rgb')) {
    return color;
  }
  var rgbParts = 3;
  var normalizedColor = color.replace(/\d+(\.\d+)?/g, function (num, isFloat) {
    return rgbParts-- && isFloat ? String(Math.round(parseFloat(num))) : num;
  });
  return normalizedColor;
}

// slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js
var attributeRegex = /(\[[^\]]+\])/g;
var idRegex = /(#[^\s+>~.[:]+)/g;
var classRegex = /(\.[^\s+>~.[:]+)/g;
var pseudoElementRegex = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
var pseudoClassWithBracketsRegex = /(:[\w-]+\([^)]*\))/gi;
var pseudoClassRegex = /(:[^\s+>~.[:]+)/g;
var elementRegex = /([^\s+>~.[:]+)/g;
function findSelectorMatch(selector, regex) {
  var matches = regex.exec(selector);
  if (!matches) {
    return [selector, 0];
  }
  return [selector.replace(regex, ' '), matches.length];
}
/**
 * Measure selector specificity.
 * @param selector - Selector to measure.
 * @returns Specificity.
 */

function getSelectorSpecificity(selector) {
  var specificity = [0, 0, 0];
  var currentSelector = selector.replace(/:not\(([^)]*)\)/g, '     $1 ').replace(/{[\s\S]*/gm, ' ');
  var delta = 0;
  var _findSelectorMatch = findSelectorMatch(currentSelector, attributeRegex);
  var _findSelectorMatch2 = _slicedToArray(_findSelectorMatch, 2);
  currentSelector = _findSelectorMatch2[0];
  delta = _findSelectorMatch2[1];
  specificity[1] += delta;
  var _findSelectorMatch3 = findSelectorMatch(currentSelector, idRegex);
  var _findSelectorMatch4 = _slicedToArray(_findSelectorMatch3, 2);
  currentSelector = _findSelectorMatch4[0];
  delta = _findSelectorMatch4[1];
  specificity[0] += delta;
  var _findSelectorMatch5 = findSelectorMatch(currentSelector, classRegex);
  var _findSelectorMatch6 = _slicedToArray(_findSelectorMatch5, 2);
  currentSelector = _findSelectorMatch6[0];
  delta = _findSelectorMatch6[1];
  specificity[1] += delta;
  var _findSelectorMatch7 = findSelectorMatch(currentSelector, pseudoElementRegex);
  var _findSelectorMatch8 = _slicedToArray(_findSelectorMatch7, 2);
  currentSelector = _findSelectorMatch8[0];
  delta = _findSelectorMatch8[1];
  specificity[2] += delta;
  var _findSelectorMatch9 = findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex);
  var _findSelectorMatch10 = _slicedToArray(_findSelectorMatch9, 2);
  currentSelector = _findSelectorMatch10[0];
  delta = _findSelectorMatch10[1];
  specificity[1] += delta;
  var _findSelectorMatch11 = findSelectorMatch(currentSelector, pseudoClassRegex);
  var _findSelectorMatch12 = _slicedToArray(_findSelectorMatch11, 2);
  currentSelector = _findSelectorMatch12[0];
  delta = _findSelectorMatch12[1];
  specificity[1] += delta;
  currentSelector = currentSelector.replace(/[*\s+>~]/g, ' ').replace(/[#.]/g, ' ');
  // lgtm [js/useless-assignment-to-local]
  var _findSelectorMatch13 = findSelectorMatch(currentSelector, elementRegex);
  var _findSelectorMatch14 = _slicedToArray(_findSelectorMatch13, 2);
  currentSelector = _findSelectorMatch14[0];
  delta = _findSelectorMatch14[1];
  specificity[2] += delta;
  return specificity.join('');
}
var PSEUDO_ZERO = .00000001;
/**
 * Vector magnitude.
 * @param v
 * @returns Number result.
 */

function vectorMagnitude(v) {
  return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
}
/**
 * Ratio between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */

function vectorsRatio(u, v) {
  return (u[0] * v[0] + u[1] * v[1]) / (vectorMagnitude(u) * vectorMagnitude(v));
}
/**
 * Angle between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */

function vectorsAngle(u, v) {
  return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v));
}
function CB1(t) {
  return t * t * t;
}
function CB2(t) {
  return 3 * t * t * (1 - t);
}
function CB3(t) {
  return 3 * t * (1 - t) * (1 - t);
}
function CB4(t) {
  return (1 - t) * (1 - t) * (1 - t);
}
function QB1(t) {
  return t * t;
}
function QB2(t) {
  return 2 * t * (1 - t);
}
function QB3(t) {
  return (1 - t) * (1 - t);
}
var Property = /*#__PURE__*/function () {
  function Property(document, name, value) {
    index_es_classCallCheck(this, Property);
    this.document = document;
    this.name = name;
    this.value = value;
    this.isNormalizedColor = false;
  }
  return _createClass(Property, [{
    key: "split",
    value: function split() {
      var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
      var document = this.document,
        name = this.name;
      return compressSpaces(this.getString()).trim().split(separator).map(function (value) {
        return new Property(document, name, value);
      });
    }
  }, {
    key: "hasValue",
    value: function hasValue(zeroIsValue) {
      var value = this.value;
      return value !== null && value !== '' && (zeroIsValue || value !== 0) && typeof value !== 'undefined';
    }
  }, {
    key: "isString",
    value: function isString(regexp) {
      var value = this.value;
      var result = typeof value === 'string';
      if (!result || !regexp) {
        return result;
      }
      return regexp.test(value);
    }
  }, {
    key: "isUrlDefinition",
    value: function isUrlDefinition() {
      return this.isString(/^url\(/);
    }
  }, {
    key: "isPixels",
    value: function isPixels() {
      if (!this.hasValue()) {
        return false;
      }
      var asString = this.getString();
      switch (true) {
        case asString.endsWith('px'):
        case /^[0-9]+$/.test(asString):
          return true;
        default:
          return false;
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
      return this;
    }
  }, {
    key: "getValue",
    value: function getValue(def) {
      if (typeof def === 'undefined' || this.hasValue()) {
        return this.value;
      }
      return def;
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      if (!this.hasValue()) {
        if (typeof def === 'undefined') {
          return 0;
        }
        return parseFloat(def);
      }
      var value = this.value;
      var n = parseFloat(value);
      if (this.isString(/%$/)) {
        n /= 100.0;
      }
      return n;
    }
  }, {
    key: "getString",
    value: function getString(def) {
      if (typeof def === 'undefined' || this.hasValue()) {
        return typeof this.value === 'undefined' ? '' : String(this.value);
      }
      return String(def);
    }
  }, {
    key: "getColor",
    value: function getColor(def) {
      var color = this.getString(def);
      if (this.isNormalizedColor) {
        return color;
      }
      this.isNormalizedColor = true;
      color = normalizeColor(color);
      this.value = color;
      return color;
    }
  }, {
    key: "getDpi",
    value: function getDpi() {
      return 96.0; // TODO: compute?
    }
  }, {
    key: "getRem",
    value: function getRem() {
      return this.document.rootEmSize;
    }
  }, {
    key: "getEm",
    value: function getEm() {
      return this.document.emSize;
    }
  }, {
    key: "getUnits",
    value: function getUnits() {
      return this.getString().replace(/[0-9.-]/g, '');
    }
  }, {
    key: "getPixels",
    value: function getPixels(axisOrIsFontSize) {
      var processPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.hasValue()) {
        return 0;
      }
      var _ref5 = typeof axisOrIsFontSize === 'boolean' ? [undefined, axisOrIsFontSize] : [axisOrIsFontSize],
        _ref6 = _slicedToArray(_ref5, 2),
        axis = _ref6[0],
        isFontSize = _ref6[1];
      var viewPort = this.document.screen.viewPort;
      switch (true) {
        case this.isString(/vmin$/):
          return this.getNumber() / 100.0 * Math.min(viewPort.computeSize('x'), viewPort.computeSize('y'));
        case this.isString(/vmax$/):
          return this.getNumber() / 100.0 * Math.max(viewPort.computeSize('x'), viewPort.computeSize('y'));
        case this.isString(/vw$/):
          return this.getNumber() / 100.0 * viewPort.computeSize('x');
        case this.isString(/vh$/):
          return this.getNumber() / 100.0 * viewPort.computeSize('y');
        case this.isString(/rem$/):
          return this.getNumber() * this.getRem();
        case this.isString(/em$/):
          return this.getNumber() * this.getEm();
        case this.isString(/ex$/):
          return this.getNumber() * this.getEm() / 2.0;
        case this.isString(/px$/):
          return this.getNumber();
        case this.isString(/pt$/):
          return this.getNumber() * this.getDpi() * (1.0 / 72.0);
        case this.isString(/pc$/):
          return this.getNumber() * 15;
        case this.isString(/cm$/):
          return this.getNumber() * this.getDpi() / 2.54;
        case this.isString(/mm$/):
          return this.getNumber() * this.getDpi() / 25.4;
        case this.isString(/in$/):
          return this.getNumber() * this.getDpi();
        case this.isString(/%$/) && isFontSize:
          return this.getNumber() * this.getEm();
        case this.isString(/%$/):
          return this.getNumber() * viewPort.computeSize(axis);
        default:
          {
            var n = this.getNumber();
            if (processPercent && n < 1.0) {
              return n * viewPort.computeSize(axis);
            }
            return n;
          }
      }
    }
  }, {
    key: "getMilliseconds",
    value: function getMilliseconds() {
      if (!this.hasValue()) {
        return 0;
      }
      if (this.isString(/ms$/)) {
        return this.getNumber();
      }
      return this.getNumber() * 1000;
    }
  }, {
    key: "getRadians",
    value: function getRadians() {
      if (!this.hasValue()) {
        return 0;
      }
      switch (true) {
        case this.isString(/deg$/):
          return this.getNumber() * (Math.PI / 180.0);
        case this.isString(/grad$/):
          return this.getNumber() * (Math.PI / 200.0);
        case this.isString(/rad$/):
          return this.getNumber();
        default:
          return this.getNumber() * (Math.PI / 180.0);
      }
    }
  }, {
    key: "getDefinition",
    value: function getDefinition() {
      var asString = this.getString();
      var name = /#([^)'"]+)/.exec(asString);
      if (name) {
        name = name[1];
      }
      if (!name) {
        name = asString;
      }
      return this.document.definitions[name];
    }
  }, {
    key: "getFillStyleDefinition",
    value: function getFillStyleDefinition(element, opacity) {
      var def = this.getDefinition();
      if (!def) {
        return null;
      } // gradient

      if (typeof def.createGradient === 'function') {
        return def.createGradient(this.document.ctx, element, opacity);
      } // pattern

      if (typeof def.createPattern === 'function') {
        if (def.getHrefAttribute().hasValue()) {
          var patternTransform = def.getAttribute('patternTransform');
          def = def.getHrefAttribute().getDefinition();
          if (patternTransform.hasValue()) {
            def.getAttribute('patternTransform', true).setValue(patternTransform.value);
          }
        }
        return def.createPattern(this.document.ctx, element, opacity);
      }
      return null;
    }
  }, {
    key: "getTextBaseline",
    value: function getTextBaseline() {
      if (!this.hasValue()) {
        return null;
      }
      return Property.textBaselineMapping[this.getString()];
    }
  }, {
    key: "addOpacity",
    value: function addOpacity(opacity) {
      var value = this.getColor();
      var len = value.length;
      var commas = 0; // Simulate old RGBColor version, which can't parse rgba.

      for (var i = 0; i < len; i++) {
        if (value[i] === ',') {
          commas++;
        }
        if (commas === 3) {
          break;
        }
      }
      if (opacity.hasValue() && this.isString() && commas !== 3) {
        var color = new rgbcolor(value);
        if (color.ok) {
          color.alpha = opacity.getNumber();
          value = color.toRGBA();
        }
      }
      return new Property(this.document, this.name, value);
    }
  }], [{
    key: "empty",
    value: function empty(document) {
      return new Property(document, 'EMPTY', '');
    }
  }]);
}();
Property.textBaselineMapping = {
  'baseline': 'alphabetic',
  'before-edge': 'top',
  'text-before-edge': 'top',
  'middle': 'middle',
  'central': 'middle',
  'after-edge': 'bottom',
  'text-after-edge': 'bottom',
  'ideographic': 'ideographic',
  'alphabetic': 'alphabetic',
  'hanging': 'hanging',
  'mathematical': 'alphabetic'
};
var ViewPort = /*#__PURE__*/function () {
  function ViewPort() {
    index_es_classCallCheck(this, ViewPort);
    this.viewPorts = [];
  }
  return _createClass(ViewPort, [{
    key: "clear",
    value: function clear() {
      this.viewPorts = [];
    }
  }, {
    key: "setCurrent",
    value: function setCurrent(width, height) {
      this.viewPorts.push({
        width: width,
        height: height
      });
    }
  }, {
    key: "removeCurrent",
    value: function removeCurrent() {
      this.viewPorts.pop();
    }
  }, {
    key: "getCurrent",
    value: function getCurrent() {
      var viewPorts = this.viewPorts;
      return viewPorts[viewPorts.length - 1];
    }
  }, {
    key: "width",
    get: function get() {
      return this.getCurrent().width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.getCurrent().height;
    }
  }, {
    key: "computeSize",
    value: function computeSize(d) {
      if (typeof d === 'number') {
        return d;
      }
      if (d === 'x') {
        return this.width;
      }
      if (d === 'y') {
        return this.height;
      }
      return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
    }
  }]);
}();
var Point = /*#__PURE__*/function () {
  function Point(x, y) {
    index_es_classCallCheck(this, Point);
    this.x = x;
    this.y = y;
  }
  return _createClass(Point, [{
    key: "angleTo",
    value: function angleTo(point) {
      return Math.atan2(point.y - this.y, point.x - this.x);
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(transform) {
      var x = this.x,
        y = this.y;
      var xp = x * transform[0] + y * transform[2] + transform[4];
      var yp = x * transform[1] + y * transform[3] + transform[5];
      this.x = xp;
      this.y = yp;
    }
  }], [{
    key: "parse",
    value: function parse(point) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var _toNumbers = toNumbers(point),
        _toNumbers2 = _slicedToArray(_toNumbers, 2),
        _toNumbers2$ = _toNumbers2[0],
        x = _toNumbers2$ === void 0 ? defaultValue : _toNumbers2$,
        _toNumbers2$2 = _toNumbers2[1],
        y = _toNumbers2$2 === void 0 ? defaultValue : _toNumbers2$2;
      return new Point(x, y);
    }
  }, {
    key: "parseScale",
    value: function parseScale(scale) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var _toNumbers3 = toNumbers(scale),
        _toNumbers4 = _slicedToArray(_toNumbers3, 2),
        _toNumbers4$ = _toNumbers4[0],
        x = _toNumbers4$ === void 0 ? defaultValue : _toNumbers4$,
        _toNumbers4$2 = _toNumbers4[1],
        y = _toNumbers4$2 === void 0 ? x : _toNumbers4$2;
      return new Point(x, y);
    }
  }, {
    key: "parsePath",
    value: function parsePath(path) {
      var points = toNumbers(path);
      var len = points.length;
      var pathPoints = [];
      for (var i = 0; i < len; i += 2) {
        pathPoints.push(new Point(points[i], points[i + 1]));
      }
      return pathPoints;
    }
  }]);
}();
var Mouse = /*#__PURE__*/function () {
  function Mouse(screen) {
    index_es_classCallCheck(this, Mouse);
    this.screen = screen;
    this.working = false;
    this.events = [];
    this.eventElements = []; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

    this.onClick = this.onClick.bind(this); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

    this.onMouseMove = this.onMouseMove.bind(this);
  }
  return _createClass(Mouse, [{
    key: "isWorking",
    value: function isWorking() {
      return this.working;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.working) {
        return;
      }
      var screen = this.screen,
        onClick = this.onClick,
        onMouseMove = this.onMouseMove;
      var canvas = screen.ctx.canvas;
      canvas.onclick = onClick;
      canvas.onmousemove = onMouseMove;
      this.working = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.working) {
        return;
      }
      var canvas = this.screen.ctx.canvas;
      this.working = false;
      canvas.onclick = null;
      canvas.onmousemove = null;
    }
  }, {
    key: "hasEvents",
    value: function hasEvents() {
      return this.working && this.events.length > 0;
    }
  }, {
    key: "runEvents",
    value: function runEvents() {
      if (!this.working) {
        return;
      }
      var document = this.screen,
        events = this.events,
        eventElements = this.eventElements;
      var style = document.ctx.canvas.style;
      if (style) {
        style.cursor = '';
      }
      events.forEach(function (_ref, i) {
        var run = _ref.run;
        var element = eventElements[i];
        while (element) {
          run(element);
          element = element.parent;
        }
      }); // done running, clear

      this.events = [];
      this.eventElements = [];
    }
  }, {
    key: "checkPath",
    value: function checkPath(element, ctx) {
      if (!this.working || !ctx) {
        return;
      }
      var events = this.events,
        eventElements = this.eventElements;
      events.forEach(function (_ref2, i) {
        var x = _ref2.x,
          y = _ref2.y;
        if (!eventElements[i] && ctx.isPointInPath && ctx.isPointInPath(x, y)) {
          eventElements[i] = element;
        }
      });
    }
  }, {
    key: "checkBoundingBox",
    value: function checkBoundingBox(element, boundingBox) {
      if (!this.working || !boundingBox) {
        return;
      }
      var events = this.events,
        eventElements = this.eventElements;
      events.forEach(function (_ref3, i) {
        var x = _ref3.x,
          y = _ref3.y;
        if (!eventElements[i] && boundingBox.isPointInBox(x, y)) {
          eventElements[i] = element;
        }
      });
    }
  }, {
    key: "mapXY",
    value: function mapXY(x, y) {
      var _this$screen = this.screen,
        window = _this$screen.window,
        ctx = _this$screen.ctx;
      var point = new Point(x, y);
      var element = ctx.canvas;
      while (element) {
        point.x -= element.offsetLeft;
        point.y -= element.offsetTop;
        element = element.offsetParent;
      }
      if (window.scrollX) {
        point.x += window.scrollX;
      }
      if (window.scrollY) {
        point.y += window.scrollY;
      }
      return point;
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      var _this$mapXY = this.mapXY(event.clientX, event.clientY),
        x = _this$mapXY.x,
        y = _this$mapXY.y;
      this.events.push({
        type: 'onclick',
        x: x,
        y: y,
        run: function run(eventTarget) {
          if (eventTarget.onClick) {
            eventTarget.onClick();
          }
        }
      });
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var _this$mapXY2 = this.mapXY(event.clientX, event.clientY),
        x = _this$mapXY2.x,
        y = _this$mapXY2.y;
      this.events.push({
        type: 'onmousemove',
        x: x,
        y: y,
        run: function run(eventTarget) {
          if (eventTarget.onMouseMove) {
            eventTarget.onMouseMove();
          }
        }
      });
    }
  }]);
}();
var defaultWindow = typeof window !== 'undefined' ? window : null;
var defaultFetch$1 = typeof fetch !== 'undefined' ? fetch.bind(undefined) // `fetch` depends on context: `someObject.fetch(...)` will throw error.
: null;
var Screen = /*#__PURE__*/function () {
  function Screen(ctx) {
    index_es_classCallCheck(this, Screen);
    var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref7$fetch = _ref7.fetch,
      fetch = _ref7$fetch === void 0 ? defaultFetch$1 : _ref7$fetch,
      _ref7$window = _ref7.window,
      window = _ref7$window === void 0 ? defaultWindow : _ref7$window;
    this.ctx = ctx;
    this.FRAMERATE = 30;
    this.MAX_VIRTUAL_PIXELS = 30000;
    this.CLIENT_WIDTH = 800;
    this.CLIENT_HEIGHT = 600;
    this.viewPort = new ViewPort();
    this.mouse = new Mouse(this);
    this.animations = [];
    this.waits = [];
    this.frameDuration = 0;
    this.isReadyLock = false;
    this.isFirstRender = true;
    this.intervalId = null;
    this.window = window;
    this.fetch = fetch;
  }
  return _createClass(Screen, [{
    key: "wait",
    value: function wait(checker) {
      this.waits.push(checker);
    }
  }, {
    key: "ready",
    value: function ready() {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      if (!this.readyPromise) {
        return Promise.resolve();
      }
      return this.readyPromise;
    }
  }, {
    key: "isReady",
    value: function isReady() {
      if (this.isReadyLock) {
        return true;
      }
      var isReadyLock = this.waits.every(function (_) {
        return _();
      });
      if (isReadyLock) {
        this.waits = [];
        if (this.resolveReady) {
          this.resolveReady();
        }
      }
      this.isReadyLock = isReadyLock;
      return isReadyLock;
    }
  }, {
    key: "setDefaults",
    value: function setDefaults(ctx) {
      // initial values and defaults
      ctx.strokeStyle = 'rgba(0,0,0,0)';
      ctx.lineCap = 'butt';
      ctx.lineJoin = 'miter';
      ctx.miterLimit = 4;
    }
  }, {
    key: "setViewBox",
    value: function setViewBox(_ref) {
      var document = _ref.document,
        ctx = _ref.ctx,
        aspectRatio = _ref.aspectRatio,
        width = _ref.width,
        desiredWidth = _ref.desiredWidth,
        height = _ref.height,
        desiredHeight = _ref.desiredHeight,
        _ref$minX = _ref.minX,
        minX = _ref$minX === void 0 ? 0 : _ref$minX,
        _ref$minY = _ref.minY,
        minY = _ref$minY === void 0 ? 0 : _ref$minY,
        refX = _ref.refX,
        refY = _ref.refY,
        _ref$clip = _ref.clip,
        clip = _ref$clip === void 0 ? false : _ref$clip,
        _ref$clipX = _ref.clipX,
        clipX = _ref$clipX === void 0 ? 0 : _ref$clipX,
        _ref$clipY = _ref.clipY,
        clipY = _ref$clipY === void 0 ? 0 : _ref$clipY;
      // aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
      var cleanAspectRatio = compressSpaces(aspectRatio).replace(/^defer\s/, ''); // ignore defer

      var _cleanAspectRatio$spl = cleanAspectRatio.split(' '),
        _cleanAspectRatio$spl2 = _slicedToArray(_cleanAspectRatio$spl, 2),
        aspectRatioAlign = _cleanAspectRatio$spl2[0],
        aspectRatioMeetOrSlice = _cleanAspectRatio$spl2[1];
      var align = aspectRatioAlign || 'xMidYMid';
      var meetOrSlice = aspectRatioMeetOrSlice || 'meet'; // calculate scale

      var scaleX = width / desiredWidth;
      var scaleY = height / desiredHeight;
      var scaleMin = Math.min(scaleX, scaleY);
      var scaleMax = Math.max(scaleX, scaleY);
      var finalDesiredWidth = desiredWidth;
      var finalDesiredHeight = desiredHeight;
      if (meetOrSlice === 'meet') {
        finalDesiredWidth *= scaleMin;
        finalDesiredHeight *= scaleMin;
      }
      if (meetOrSlice === 'slice') {
        finalDesiredWidth *= scaleMax;
        finalDesiredHeight *= scaleMax;
      }
      var refXProp = new Property(document, 'refX', refX);
      var refYProp = new Property(document, 'refY', refY);
      var hasRefs = refXProp.hasValue() && refYProp.hasValue();
      if (hasRefs) {
        ctx.translate(-scaleMin * refXProp.getPixels('x'), -scaleMin * refYProp.getPixels('y'));
      }
      if (clip) {
        var scaledClipX = scaleMin * clipX;
        var scaledClipY = scaleMin * clipY;
        ctx.beginPath();
        ctx.moveTo(scaledClipX, scaledClipY);
        ctx.lineTo(width, scaledClipY);
        ctx.lineTo(width, height);
        ctx.lineTo(scaledClipX, height);
        ctx.closePath();
        ctx.clip();
      }
      if (!hasRefs) {
        var isMeetMinY = meetOrSlice === 'meet' && scaleMin === scaleY;
        var isSliceMaxY = meetOrSlice === 'slice' && scaleMax === scaleY;
        var isMeetMinX = meetOrSlice === 'meet' && scaleMin === scaleX;
        var isSliceMaxX = meetOrSlice === 'slice' && scaleMax === scaleX;
        if (align.startsWith('xMid') && (isMeetMinY || isSliceMaxY)) {
          ctx.translate(width / 2.0 - finalDesiredWidth / 2.0, 0);
        }
        if (align.endsWith('YMid') && (isMeetMinX || isSliceMaxX)) {
          ctx.translate(0, height / 2.0 - finalDesiredHeight / 2.0);
        }
        if (align.startsWith('xMax') && (isMeetMinY || isSliceMaxY)) {
          ctx.translate(width - finalDesiredWidth, 0);
        }
        if (align.endsWith('YMax') && (isMeetMinX || isSliceMaxX)) {
          ctx.translate(0, height - finalDesiredHeight);
        }
      } // scale

      switch (true) {
        case align === 'none':
          ctx.scale(scaleX, scaleY);
          break;
        case meetOrSlice === 'meet':
          ctx.scale(scaleMin, scaleMin);
          break;
        case meetOrSlice === 'slice':
          ctx.scale(scaleMax, scaleMax);
          break;
      } // translate

      ctx.translate(-minX, -minY);
    }
  }, {
    key: "start",
    value: function start(element) {
      var _this3 = this;
      var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref8$enableRedraw = _ref8.enableRedraw,
        enableRedraw = _ref8$enableRedraw === void 0 ? false : _ref8$enableRedraw,
        _ref8$ignoreMouse = _ref8.ignoreMouse,
        ignoreMouse = _ref8$ignoreMouse === void 0 ? false : _ref8$ignoreMouse,
        _ref8$ignoreAnimation = _ref8.ignoreAnimation,
        ignoreAnimation = _ref8$ignoreAnimation === void 0 ? false : _ref8$ignoreAnimation,
        _ref8$ignoreDimension = _ref8.ignoreDimensions,
        ignoreDimensions = _ref8$ignoreDimension === void 0 ? false : _ref8$ignoreDimension,
        _ref8$ignoreClear = _ref8.ignoreClear,
        ignoreClear = _ref8$ignoreClear === void 0 ? false : _ref8$ignoreClear,
        forceRedraw = _ref8.forceRedraw,
        scaleWidth = _ref8.scaleWidth,
        scaleHeight = _ref8.scaleHeight,
        offsetX = _ref8.offsetX,
        offsetY = _ref8.offsetY;
      var FRAMERATE = this.FRAMERATE,
        mouse = this.mouse;
      var frameDuration = 1000 / FRAMERATE;
      this.frameDuration = frameDuration;
      this.readyPromise = new Promise(function (resolve) {
        _this3.resolveReady = resolve;
      });
      if (this.isReady()) {
        this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
      }
      if (!enableRedraw) {
        return;
      }
      var now = Date.now();
      var then = now;
      var delta = 0;
      var _tick = function tick() {
        now = Date.now();
        delta = now - then;
        if (delta >= frameDuration) {
          then = now - delta % frameDuration;
          if (_this3.shouldUpdate(ignoreAnimation, forceRedraw)) {
            _this3.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
            mouse.runEvents();
          }
        }
        _this3.intervalId = raf(_tick);
      };
      if (!ignoreMouse) {
        mouse.start();
      }
      this.intervalId = raf(_tick);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.intervalId) {
        raf.cancel(this.intervalId);
        this.intervalId = null;
      }
      this.mouse.stop();
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(ignoreAnimation, forceRedraw) {
      // need update from animations?
      if (!ignoreAnimation) {
        var frameDuration = this.frameDuration;
        var shouldUpdate = this.animations.reduce(function (shouldUpdate, animation) {
          return animation.update(frameDuration) || shouldUpdate;
        }, false);
        if (shouldUpdate) {
          return true;
        }
      } // need update from redraw?

      if (typeof forceRedraw === 'function' && forceRedraw()) {
        return true;
      }
      if (!this.isReadyLock && this.isReady()) {
        return true;
      } // need update from mouse events?

      if (this.mouse.hasEvents()) {
        return true;
      }
      return false;
    }
  }, {
    key: "render",
    value: function render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
      var CLIENT_WIDTH = this.CLIENT_WIDTH,
        CLIENT_HEIGHT = this.CLIENT_HEIGHT,
        viewPort = this.viewPort,
        ctx = this.ctx,
        isFirstRender = this.isFirstRender;
      var canvas = ctx.canvas;
      viewPort.clear();
      if (canvas.width && canvas.height) {
        viewPort.setCurrent(canvas.width, canvas.height);
      } else {
        viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
      }
      var widthStyle = element.getStyle('width');
      var heightStyle = element.getStyle('height');
      if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== 'number' && typeof scaleHeight !== 'number')) {
        // set canvas size
        if (widthStyle.hasValue()) {
          canvas.width = widthStyle.getPixels('x');
          if (canvas.style) {
            canvas.style.width = "".concat(canvas.width, "px");
          }
        }
        if (heightStyle.hasValue()) {
          canvas.height = heightStyle.getPixels('y');
          if (canvas.style) {
            canvas.style.height = "".concat(canvas.height, "px");
          }
        }
      }
      var cWidth = canvas.clientWidth || canvas.width;
      var cHeight = canvas.clientHeight || canvas.height;
      if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
        cWidth = widthStyle.getPixels('x');
        cHeight = heightStyle.getPixels('y');
      }
      viewPort.setCurrent(cWidth, cHeight);
      if (typeof offsetX === 'number') {
        element.getAttribute('x', true).setValue(offsetX);
      }
      if (typeof offsetY === 'number') {
        element.getAttribute('y', true).setValue(offsetY);
      }
      if (typeof scaleWidth === 'number' || typeof scaleHeight === 'number') {
        var viewBox = toNumbers(element.getAttribute('viewBox').getString());
        var xRatio = 0;
        var yRatio = 0;
        if (typeof scaleWidth === 'number') {
          var _widthStyle = element.getStyle('width');
          if (_widthStyle.hasValue()) {
            xRatio = _widthStyle.getPixels('x') / scaleWidth;
          } else if (!isNaN(viewBox[2])) {
            xRatio = viewBox[2] / scaleWidth;
          }
        }
        if (typeof scaleHeight === 'number') {
          var _heightStyle = element.getStyle('height');
          if (_heightStyle.hasValue()) {
            yRatio = _heightStyle.getPixels('y') / scaleHeight;
          } else if (!isNaN(viewBox[3])) {
            yRatio = viewBox[3] / scaleHeight;
          }
        }
        if (!xRatio) {
          xRatio = yRatio;
        }
        if (!yRatio) {
          yRatio = xRatio;
        }
        element.getAttribute('width', true).setValue(scaleWidth);
        element.getAttribute('height', true).setValue(scaleHeight);
        var transformStyle = element.getStyle('transform', true, true);
        transformStyle.setValue("".concat(transformStyle.getString(), " scale(").concat(1.0 / xRatio, ", ").concat(1.0 / yRatio, ")"));
      } // clear and render

      if (!ignoreClear) {
        ctx.clearRect(0, 0, cWidth, cHeight);
      }
      element.render(ctx);
      if (isFirstRender) {
        this.isFirstRender = false;
      }
    }
  }]);
}();
Screen.defaultWindow = defaultWindow;
Screen.defaultFetch = defaultFetch$1;
var defaultFetch = Screen.defaultFetch;
var DefaultDOMParser = typeof DOMParser !== 'undefined' ? DOMParser : null;
var Parser = /*#__PURE__*/function () {
  function Parser() {
    index_es_classCallCheck(this, Parser);
    var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref9$fetch = _ref9.fetch,
      fetch = _ref9$fetch === void 0 ? defaultFetch : _ref9$fetch,
      _ref9$DOMParser = _ref9.DOMParser,
      DOMParser = _ref9$DOMParser === void 0 ? DefaultDOMParser : _ref9$DOMParser;
    this.fetch = fetch;
    this.DOMParser = DOMParser;
  }
  return _createClass(Parser, [{
    key: "parse",
    value: function parse(resource) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!resource.startsWith('<')) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", _this.parseFromString(resource));
            case 2:
              return _context2.abrupt("return", _this.load(resource));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }, {
    key: "parseFromString",
    value: function parseFromString(xml) {
      var parser = new this.DOMParser();
      try {
        return this.checkDocument(parser.parseFromString(xml, 'image/svg+xml'));
      } catch (err) {
        return this.checkDocument(parser.parseFromString(xml, 'text/xml'));
      }
    }
  }, {
    key: "checkDocument",
    value: function checkDocument(document) {
      var parserError = document.getElementsByTagName('parsererror')[0];
      if (parserError) {
        throw new Error(parserError.textContent);
      }
      return document;
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response, xml;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this2.fetch(url);
            case 2:
              response = _context3.sent;
              _context3.next = 5;
              return response.text();
            case 5:
              xml = _context3.sent;
              return _context3.abrupt("return", _this2.parseFromString(xml));
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  }]);
}();
var Translate = /*#__PURE__*/function () {
  function Translate(_, point) {
    index_es_classCallCheck(this, Translate);
    this.type = 'translate';
    this.point = null;
    this.point = Point.parse(point);
  }
  return _createClass(Translate, [{
    key: "apply",
    value: function apply(ctx) {
      var _this$point = this.point,
        x = _this$point.x,
        y = _this$point.y;
      ctx.translate(x || 0.0, y || 0.0);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var _this$point2 = this.point,
        x = _this$point2.x,
        y = _this$point2.y;
      ctx.translate(-1.0 * x || 0.0, -1.0 * y || 0.0);
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var _this$point3 = this.point,
        x = _this$point3.x,
        y = _this$point3.y;
      point.applyTransform([1, 0, 0, 1, x || 0.0, y || 0.0]);
    }
  }]);
}();
var Rotate = /*#__PURE__*/function () {
  function Rotate(document, rotate, transformOrigin) {
    index_es_classCallCheck(this, Rotate);
    this.type = 'rotate';
    this.angle = null;
    this.originX = null;
    this.originY = null;
    this.cx = 0;
    this.cy = 0;
    var numbers = toNumbers(rotate);
    this.angle = new Property(document, 'angle', numbers[0]);
    this.originX = transformOrigin[0];
    this.originY = transformOrigin[1];
    this.cx = numbers[1] || 0;
    this.cy = numbers[2] || 0;
  }
  return _createClass(Rotate, [{
    key: "apply",
    value: function apply(ctx) {
      var cx = this.cx,
        cy = this.cy,
        originX = this.originX,
        originY = this.originY,
        angle = this.angle;
      var tx = cx + originX.getPixels('x');
      var ty = cy + originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.rotate(angle.getRadians());
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var cx = this.cx,
        cy = this.cy,
        originX = this.originX,
        originY = this.originY,
        angle = this.angle;
      var tx = cx + originX.getPixels('x');
      var ty = cy + originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.rotate(-1.0 * angle.getRadians());
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var cx = this.cx,
        cy = this.cy,
        angle = this.angle;
      var rad = angle.getRadians();
      point.applyTransform([1, 0, 0, 1, cx || 0.0, cy || 0.0 // this.p.y
      ]);
      point.applyTransform([Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 0, 0]);
      point.applyTransform([1, 0, 0, 1, -cx || 0.0, -cy || 0.0 // -this.p.y
      ]);
    }
  }]);
}();
var Scale = /*#__PURE__*/function () {
  function Scale(_, scale, transformOrigin) {
    index_es_classCallCheck(this, Scale);
    this.type = 'scale';
    this.scale = null;
    this.originX = null;
    this.originY = null;
    var scaleSize = Point.parseScale(scale); // Workaround for node-canvas

    if (scaleSize.x === 0 || scaleSize.y === 0) {
      scaleSize.x = PSEUDO_ZERO;
      scaleSize.y = PSEUDO_ZERO;
    }
    this.scale = scaleSize;
    this.originX = transformOrigin[0];
    this.originY = transformOrigin[1];
  }
  return _createClass(Scale, [{
    key: "apply",
    value: function apply(ctx) {
      var _this$scale = this.scale,
        x = _this$scale.x,
        y = _this$scale.y,
        originX = this.originX,
        originY = this.originY;
      var tx = originX.getPixels('x');
      var ty = originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.scale(x, y || x);
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var _this$scale2 = this.scale,
        x = _this$scale2.x,
        y = _this$scale2.y,
        originX = this.originX,
        originY = this.originY;
      var tx = originX.getPixels('x');
      var ty = originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.scale(1.0 / x, 1.0 / y || x);
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var _this$scale3 = this.scale,
        x = _this$scale3.x,
        y = _this$scale3.y;
      point.applyTransform([x || 0.0, 0, 0, y || 0.0, 0, 0]);
    }
  }]);
}();
var Matrix = /*#__PURE__*/function () {
  function Matrix(_, matrix, transformOrigin) {
    index_es_classCallCheck(this, Matrix);
    this.type = 'matrix';
    this.matrix = [];
    this.originX = null;
    this.originY = null;
    this.matrix = toNumbers(matrix);
    this.originX = transformOrigin[0];
    this.originY = transformOrigin[1];
  }
  return _createClass(Matrix, [{
    key: "apply",
    value: function apply(ctx) {
      var originX = this.originX,
        originY = this.originY,
        matrix = this.matrix;
      var tx = originX.getPixels('x');
      var ty = originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var originX = this.originX,
        originY = this.originY,
        matrix = this.matrix;
      var a = matrix[0];
      var b = matrix[2];
      var c = matrix[4];
      var d = matrix[1];
      var e = matrix[3];
      var f = matrix[5];
      var g = 0.0;
      var h = 0.0;
      var i = 1.0;
      var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
      var tx = originX.getPixels('x');
      var ty = originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      point.applyTransform(this.matrix);
    }
  }]);
}();
var Skew = /*#__PURE__*/function (_Matrix) {
  function Skew(document, skew, transformOrigin) {
    var _this4;
    index_es_classCallCheck(this, Skew);
    _this4 = _callSuper(this, Skew, [document, skew, transformOrigin]);
    _this4.type = 'skew';
    _this4.angle = null;
    _this4.angle = new Property(document, 'angle', skew);
    return _this4;
  }
  _inherits(Skew, _Matrix);
  return _createClass(Skew);
}(Matrix);
var SkewX = /*#__PURE__*/function (_Skew) {
  function SkewX(document, skew, transformOrigin) {
    var _this5;
    index_es_classCallCheck(this, SkewX);
    _this5 = _callSuper(this, SkewX, [document, skew, transformOrigin]);
    _this5.type = 'skewX';
    _this5.matrix = [1, 0, Math.tan(_this5.angle.getRadians()), 1, 0, 0];
    return _this5;
  }
  _inherits(SkewX, _Skew);
  return _createClass(SkewX);
}(Skew);
var SkewY = /*#__PURE__*/function (_Skew2) {
  function SkewY(document, skew, transformOrigin) {
    var _this6;
    index_es_classCallCheck(this, SkewY);
    _this6 = _callSuper(this, SkewY, [document, skew, transformOrigin]);
    _this6.type = 'skewY';
    _this6.matrix = [1, Math.tan(_this6.angle.getRadians()), 0, 1, 0, 0];
    return _this6;
  }
  _inherits(SkewY, _Skew2);
  return _createClass(SkewY);
}(Skew);
function parseTransforms(transform) {
  return compressSpaces(transform).trim().replace(/\)([a-zA-Z])/g, ') $1').replace(/\)(\s?,\s?)/g, ') ').split(/\s(?=[a-z])/);
}
function parseTransform(transform) {
  var _transform$split = transform.split('('),
    _transform$split2 = _slicedToArray(_transform$split, 2),
    type = _transform$split2[0],
    value = _transform$split2[1];
  return [type.trim(), value.trim().replace(')', '')];
}
var Transform = /*#__PURE__*/function () {
  function Transform(document, transform, transformOrigin) {
    var _this7 = this;
    index_es_classCallCheck(this, Transform);
    this.document = document;
    this.transforms = [];
    var data = parseTransforms(transform);
    data.forEach(function (transform) {
      if (transform === 'none') {
        return;
      }
      var _parseTransform = parseTransform(transform),
        _parseTransform2 = _slicedToArray(_parseTransform, 2),
        type = _parseTransform2[0],
        value = _parseTransform2[1];
      var TransformType = Transform.transformTypes[type];
      if (typeof TransformType !== 'undefined') {
        _this7.transforms.push(new TransformType(_this7.document, value, transformOrigin));
      }
    });
  }
  return _createClass(Transform, [{
    key: "apply",
    value: function apply(ctx) {
      var transforms = this.transforms;
      var len = transforms.length;
      for (var i = 0; i < len; i++) {
        transforms[i].apply(ctx);
      }
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var transforms = this.transforms;
      var len = transforms.length;
      for (var i = len - 1; i >= 0; i--) {
        transforms[i].unapply(ctx);
      }
    } // TODO: applyToPoint unused ... remove?
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var transforms = this.transforms;
      var len = transforms.length;
      for (var i = 0; i < len; i++) {
        transforms[i].applyToPoint(point);
      }
    }
  }], [{
    key: "fromElement",
    value: function fromElement(document, element) {
      var transformStyle = element.getStyle('transform', false, true);
      var _element$getStyle$spl = element.getStyle('transform-origin', false, true).split(),
        _element$getStyle$spl2 = _slicedToArray(_element$getStyle$spl, 2),
        transformOriginXProperty = _element$getStyle$spl2[0],
        _element$getStyle$spl3 = _element$getStyle$spl2[1],
        transformOriginYProperty = _element$getStyle$spl3 === void 0 ? transformOriginXProperty : _element$getStyle$spl3;
      var transformOrigin = [transformOriginXProperty, transformOriginYProperty];
      if (transformStyle.hasValue()) {
        return new Transform(document, transformStyle.getString(), transformOrigin);
      }
      return null;
    }
  }]);
}();
Transform.transformTypes = {
  translate: Translate,
  rotate: Rotate,
  scale: Scale,
  matrix: Matrix,
  skewX: SkewX,
  skewY: SkewY
};
var Element = /*#__PURE__*/function () {
  function Element(document, node) {
    var _this8 = this;
    index_es_classCallCheck(this, Element);
    var captureTextNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    this.document = document;
    this.node = node;
    this.captureTextNodes = captureTextNodes;
    this.attributes = {};
    this.styles = {};
    this.stylesSpecificity = {};
    this.animationFrozen = false;
    this.animationFrozenValue = '';
    this.parent = null;
    this.children = [];
    if (!node || node.nodeType !== 1) {
      // ELEMENT_NODE
      return;
    } // add attributes

    Array.from(node.attributes).forEach(function (attribute) {
      var nodeName = normalizeAttributeName(attribute.nodeName);
      _this8.attributes[nodeName] = new Property(document, nodeName, attribute.value);
    });
    this.addStylesFromStyleDefinition(); // add inline styles

    if (this.getAttribute('style').hasValue()) {
      var styles = this.getAttribute('style').getString().split(';').map(function (_) {
        return _.trim();
      });
      styles.forEach(function (style) {
        if (!style) {
          return;
        }
        var _style$split$map = style.split(':').map(function (_) {
            return _.trim();
          }),
          _style$split$map2 = _slicedToArray(_style$split$map, 2),
          name = _style$split$map2[0],
          value = _style$split$map2[1];
        _this8.styles[name] = new Property(document, name, value);
      });
    }
    var definitions = document.definitions;
    var id = this.getAttribute('id'); // add id

    if (id.hasValue()) {
      if (!definitions[id.getString()]) {
        definitions[id.getString()] = this;
      }
    }
    Array.from(node.childNodes).forEach(function (childNode) {
      if (childNode.nodeType === 1) {
        _this8.addChild(childNode); // ELEMENT_NODE
      } else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
        var textNode = document.createTextNode(childNode);
        if (textNode.getText().length > 0) {
          _this8.addChild(textNode); // TEXT_NODE
        }
      }
    });
  }
  return _createClass(Element, [{
    key: "getAttribute",
    value: function getAttribute(name) {
      var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var attr = this.attributes[name];
      if (!attr && createIfNotExists) {
        var _attr = new Property(this.document, name, '');
        this.attributes[name] = _attr;
        return _attr;
      }
      return attr || Property.empty(this.document);
    }
  }, {
    key: "getHrefAttribute",
    value: function getHrefAttribute() {
      for (var key in this.attributes) {
        if (key === 'href' || key.endsWith(':href')) {
          return this.attributes[key];
        }
      }
      return Property.empty(this.document);
    }
  }, {
    key: "getStyle",
    value: function getStyle(name) {
      var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var skipAncestors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var style = this.styles[name];
      if (style) {
        return style;
      }
      var attr = this.getAttribute(name);
      if (attr !== null && attr !== void 0 && attr.hasValue()) {
        this.styles[name] = attr; // move up to me to cache

        return attr;
      }
      if (!skipAncestors) {
        var parent = this.parent;
        if (parent) {
          var parentStyle = parent.getStyle(name);
          if (parentStyle !== null && parentStyle !== void 0 && parentStyle.hasValue()) {
            return parentStyle;
          }
        }
      }
      if (createIfNotExists) {
        var _style = new Property(this.document, name, '');
        this.styles[name] = _style;
        return _style;
      }
      return style || Property.empty(this.document);
    }
  }, {
    key: "render",
    value: function render(ctx) {
      // don't render display=none
      // don't render visibility=hidden
      if (this.getStyle('display').getString() === 'none' || this.getStyle('visibility').getString() === 'hidden') {
        return;
      }
      ctx.save();
      if (this.getStyle('mask').hasValue()) {
        // mask
        var mask = this.getStyle('mask').getDefinition();
        if (mask) {
          this.applyEffects(ctx);
          mask.apply(ctx, this);
        }
      } else if (this.getStyle('filter').getValue('none') !== 'none') {
        // filter
        var filter = this.getStyle('filter').getDefinition();
        if (filter) {
          this.applyEffects(ctx);
          filter.apply(ctx, this);
        }
      } else {
        this.setContext(ctx);
        this.renderChildren(ctx);
        this.clearContext(ctx);
      }
      ctx.restore();
    }
  }, {
    key: "setContext",
    value: function setContext(_) {// NO RENDER
    }
  }, {
    key: "applyEffects",
    value: function applyEffects(ctx) {
      // transform
      var transform = Transform.fromElement(this.document, this);
      if (transform) {
        transform.apply(ctx);
      } // clip

      var clipPathStyleProp = this.getStyle('clip-path', false, true);
      if (clipPathStyleProp.hasValue()) {
        var clip = clipPathStyleProp.getDefinition();
        if (clip) {
          clip.apply(ctx);
        }
      }
    }
  }, {
    key: "clearContext",
    value: function clearContext(_) {// NO RENDER
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      this.children.forEach(function (child) {
        child.render(ctx);
      });
    }
  }, {
    key: "addChild",
    value: function addChild(childNode) {
      var child = childNode instanceof Element ? childNode : this.document.createElement(childNode);
      child.parent = this;
      if (!Element.ignoreChildTypes.includes(child.type)) {
        this.children.push(child);
      }
    }
  }, {
    key: "matchesSelector",
    value: function matchesSelector(selector) {
      var _node$getAttribute;
      var node = this.node;
      if (typeof node.matches === 'function') {
        return node.matches(selector);
      }
      var styleClasses = (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'class');
      if (!styleClasses || styleClasses === '') {
        return false;
      }
      return styleClasses.split(' ').some(function (styleClass) {
        return ".".concat(styleClass) === selector;
      });
    }
  }, {
    key: "addStylesFromStyleDefinition",
    value: function addStylesFromStyleDefinition() {
      var _this$document = this.document,
        styles = _this$document.styles,
        stylesSpecificity = _this$document.stylesSpecificity;
      for (var selector in styles) {
        if (!selector.startsWith('@') && this.matchesSelector(selector)) {
          var style = styles[selector];
          var specificity = stylesSpecificity[selector];
          if (style) {
            for (var name in style) {
              var existingSpecificity = this.stylesSpecificity[name];
              if (typeof existingSpecificity === 'undefined') {
                existingSpecificity = '000';
              }
              if (specificity >= existingSpecificity) {
                this.styles[name] = style[name];
                this.stylesSpecificity[name] = specificity;
              }
            }
          }
        }
      }
    }
  }, {
    key: "removeStyles",
    value: function removeStyles(element, ignoreStyles) {
      var toRestore = ignoreStyles.reduce(function (toRestore, name) {
        var styleProp = element.getStyle(name);
        if (!styleProp.hasValue()) {
          return toRestore;
        }
        var value = styleProp.getString();
        styleProp.setValue('');
        return [].concat(_toConsumableArray(toRestore), [[name, value]]);
      }, []);
      return toRestore;
    }
  }, {
    key: "restoreStyles",
    value: function restoreStyles(element, styles) {
      styles.forEach(function (_ref) {
        var _ref10 = _slicedToArray(_ref, 2),
          name = _ref10[0],
          value = _ref10[1];
        element.getStyle(name, true).setValue(value);
      });
    }
  }, {
    key: "isFirstChild",
    value: function isFirstChild() {
      var _this$parent;
      return ((_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.children.indexOf(this)) === 0;
    }
  }]);
}();
Element.ignoreChildTypes = ['title'];
var UnknownElement = /*#__PURE__*/function (_Element) {
  function UnknownElement(document, node, captureTextNodes) {
    index_es_classCallCheck(this, UnknownElement);
    return _callSuper(this, UnknownElement, [document, node, captureTextNodes]);
  }
  _inherits(UnknownElement, _Element);
  return _createClass(UnknownElement);
}(Element);
function wrapFontFamily(fontFamily) {
  var trimmed = fontFamily.trim();
  return /^('|")/.test(trimmed) ? trimmed : "\"".concat(trimmed, "\"");
}
function prepareFontFamily(fontFamily) {
  return typeof process === 'undefined' ? fontFamily : fontFamily.trim().split(',').map(wrapFontFamily).join(',');
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
 * @param fontStyle
 * @returns CSS font style.
 */

function prepareFontStyle(fontStyle) {
  if (!fontStyle) {
    return '';
  }
  var targetFontStyle = fontStyle.trim().toLowerCase();
  switch (targetFontStyle) {
    case 'normal':
    case 'italic':
    case 'oblique':
    case 'inherit':
    case 'initial':
    case 'unset':
      return targetFontStyle;
    default:
      if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) {
        return targetFontStyle;
      }
      return '';
  }
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
 * @param fontWeight
 * @returns CSS font weight.
 */

function prepareFontWeight(fontWeight) {
  if (!fontWeight) {
    return '';
  }
  var targetFontWeight = fontWeight.trim().toLowerCase();
  switch (targetFontWeight) {
    case 'normal':
    case 'bold':
    case 'lighter':
    case 'bolder':
    case 'inherit':
    case 'initial':
    case 'unset':
      return targetFontWeight;
    default:
      if (/^[\d.]+$/.test(targetFontWeight)) {
        return targetFontWeight;
      }
      return '';
  }
}
var Font = /*#__PURE__*/function () {
  function Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
    index_es_classCallCheck(this, Font);
    var inheritFont = inherit ? typeof inherit === 'string' ? Font.parse(inherit) : inherit : {};
    this.fontFamily = fontFamily || inheritFont.fontFamily;
    this.fontSize = fontSize || inheritFont.fontSize;
    this.fontStyle = fontStyle || inheritFont.fontStyle;
    this.fontWeight = fontWeight || inheritFont.fontWeight;
    this.fontVariant = fontVariant || inheritFont.fontVariant;
  }
  return _createClass(Font, [{
    key: "toString",
    value: function toString() {
      return [prepareFontStyle(this.fontStyle), this.fontVariant, prepareFontWeight(this.fontWeight), this.fontSize,
      // Wrap fontFamily only on nodejs and only for canvas.ctx
      prepareFontFamily(this.fontFamily)].join(' ').trim();
    }
  }], [{
    key: "parse",
    value: function parse() {
      var font = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var inherit = arguments.length > 1 ? arguments[1] : undefined;
      var fontStyle = '';
      var fontVariant = '';
      var fontWeight = '';
      var fontSize = '';
      var fontFamily = '';
      var parts = compressSpaces(font).trim().split(' ');
      var set = {
        fontSize: false,
        fontStyle: false,
        fontWeight: false,
        fontVariant: false
      };
      parts.forEach(function (part) {
        switch (true) {
          case !set.fontStyle && Font.styles.includes(part):
            if (part !== 'inherit') {
              fontStyle = part;
            }
            set.fontStyle = true;
            break;
          case !set.fontVariant && Font.variants.includes(part):
            if (part !== 'inherit') {
              fontVariant = part;
            }
            set.fontStyle = true;
            set.fontVariant = true;
            break;
          case !set.fontWeight && Font.weights.includes(part):
            if (part !== 'inherit') {
              fontWeight = part;
            }
            set.fontStyle = true;
            set.fontVariant = true;
            set.fontWeight = true;
            break;
          case !set.fontSize:
            if (part !== 'inherit') {
              var _part$split = part.split('/');
              var _part$split2 = _slicedToArray(_part$split, 1);
              fontSize = _part$split2[0];
            }
            set.fontStyle = true;
            set.fontVariant = true;
            set.fontWeight = true;
            set.fontSize = true;
            break;
          default:
            if (part !== 'inherit') {
              fontFamily += part;
            }
        }
      });
      return new Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
    }
  }]);
}();
Font.styles = 'normal|italic|oblique|inherit';
Font.variants = 'normal|small-caps|inherit';
Font.weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit';
var BoundingBox = /*#__PURE__*/function () {
  function BoundingBox() {
    index_es_classCallCheck(this, BoundingBox);
    var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.NaN;
    var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.NaN;
    var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.NaN;
    var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.NaN;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.addPoint(x1, y1);
    this.addPoint(x2, y2);
  }
  return _createClass(BoundingBox, [{
    key: "x",
    get: function get() {
      return this.x1;
    }
  }, {
    key: "y",
    get: function get() {
      return this.y1;
    }
  }, {
    key: "width",
    get: function get() {
      return this.x2 - this.x1;
    }
  }, {
    key: "height",
    get: function get() {
      return this.y2 - this.y1;
    }
  }, {
    key: "addPoint",
    value: function addPoint(x, y) {
      if (typeof x !== 'undefined') {
        if (isNaN(this.x1) || isNaN(this.x2)) {
          this.x1 = x;
          this.x2 = x;
        }
        if (x < this.x1) {
          this.x1 = x;
        }
        if (x > this.x2) {
          this.x2 = x;
        }
      }
      if (typeof y !== 'undefined') {
        if (isNaN(this.y1) || isNaN(this.y2)) {
          this.y1 = y;
          this.y2 = y;
        }
        if (y < this.y1) {
          this.y1 = y;
        }
        if (y > this.y2) {
          this.y2 = y;
        }
      }
    }
  }, {
    key: "addX",
    value: function addX(x) {
      this.addPoint(x, null);
    }
  }, {
    key: "addY",
    value: function addY(y) {
      this.addPoint(null, y);
    }
  }, {
    key: "addBoundingBox",
    value: function addBoundingBox(boundingBox) {
      if (!boundingBox) {
        return;
      }
      var x1 = boundingBox.x1,
        y1 = boundingBox.y1,
        x2 = boundingBox.x2,
        y2 = boundingBox.y2;
      this.addPoint(x1, y1);
      this.addPoint(x2, y2);
    }
  }, {
    key: "sumCubic",
    value: function sumCubic(t, p0, p1, p2, p3) {
      return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
    }
  }, {
    key: "bezierCurveAdd",
    value: function bezierCurveAdd(forX, p0, p1, p2, p3) {
      var b = 6 * p0 - 12 * p1 + 6 * p2;
      var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
      var c = 3 * p1 - 3 * p0;
      if (a === 0) {
        if (b === 0) {
          return;
        }
        var t = -c / b;
        if (0 < t && t < 1) {
          if (forX) {
            this.addX(this.sumCubic(t, p0, p1, p2, p3));
          } else {
            this.addY(this.sumCubic(t, p0, p1, p2, p3));
          }
        }
        return;
      }
      var b2ac = Math.pow(b, 2) - 4 * c * a;
      if (b2ac < 0) {
        return;
      }
      var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
      if (0 < t1 && t1 < 1) {
        if (forX) {
          this.addX(this.sumCubic(t1, p0, p1, p2, p3));
        } else {
          this.addY(this.sumCubic(t1, p0, p1, p2, p3));
        }
      }
      var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
      if (0 < t2 && t2 < 1) {
        if (forX) {
          this.addX(this.sumCubic(t2, p0, p1, p2, p3));
        } else {
          this.addY(this.sumCubic(t2, p0, p1, p2, p3));
        }
      }
    } // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
  }, {
    key: "addBezierCurve",
    value: function addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
      this.addPoint(p0x, p0y);
      this.addPoint(p3x, p3y);
      this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
      this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
    }
  }, {
    key: "addQuadraticCurve",
    value: function addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
      var cp1x = p0x + 2 / 3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)

      var cp1y = p0y + 2 / 3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)

      var cp2x = cp1x + 1 / 3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)

      var cp2y = cp1y + 1 / 3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)

      this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
    }
  }, {
    key: "isPointInBox",
    value: function isPointInBox(x, y) {
      var x1 = this.x1,
        y1 = this.y1,
        x2 = this.x2,
        y2 = this.y2;
      return x1 <= x && x <= x2 && y1 <= y && y <= y2;
    }
  }]);
}();
var PathParser = /*#__PURE__*/function (_SVGPathData) {
  function PathParser(path) {
    var _this9;
    index_es_classCallCheck(this, PathParser);
    _this9 = _callSuper(this, PathParser, [path // Fix spaces after signs.
    .replace(/([+\-.])\s+/gm, '$1') // Remove invalid part.
    .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, '')]);
    _this9.control = null;
    _this9.start = null;
    _this9.current = null;
    _this9.command = null;
    _this9.commands = _this9.commands;
    _this9.i = -1;
    _this9.previousCommand = null;
    _this9.points = [];
    _this9.angles = [];
    return _this9;
  }
  _inherits(PathParser, _SVGPathData);
  return _createClass(PathParser, [{
    key: "reset",
    value: function reset() {
      this.i = -1;
      this.command = null;
      this.previousCommand = null;
      this.start = new Point(0, 0);
      this.control = new Point(0, 0);
      this.current = new Point(0, 0);
      this.points = [];
      this.angles = [];
    }
  }, {
    key: "isEnd",
    value: function isEnd() {
      var i = this.i,
        commands = this.commands;
      return i >= commands.length - 1;
    }
  }, {
    key: "next",
    value: function next() {
      var command = this.commands[++this.i];
      this.previousCommand = this.command;
      this.command = command;
      return command;
    }
  }, {
    key: "getPoint",
    value: function getPoint() {
      var xProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
      var yProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';
      var point = new Point(this.command[xProp], this.command[yProp]);
      return this.makeAbsolute(point);
    }
  }, {
    key: "getAsControlPoint",
    value: function getAsControlPoint(xProp, yProp) {
      var point = this.getPoint(xProp, yProp);
      this.control = point;
      return point;
    }
  }, {
    key: "getAsCurrentPoint",
    value: function getAsCurrentPoint(xProp, yProp) {
      var point = this.getPoint(xProp, yProp);
      this.current = point;
      return point;
    }
  }, {
    key: "getReflectedControlPoint",
    value: function getReflectedControlPoint() {
      var previousCommand = this.previousCommand.type;
      if (previousCommand !== _.CURVE_TO && previousCommand !== _.SMOOTH_CURVE_TO && previousCommand !== _.QUAD_TO && previousCommand !== _.SMOOTH_QUAD_TO) {
        return this.current;
      } // reflect point

      var _this$current = this.current,
        cx = _this$current.x,
        cy = _this$current.y,
        _this$control = this.control,
        ox = _this$control.x,
        oy = _this$control.y;
      var point = new Point(2 * cx - ox, 2 * cy - oy);
      return point;
    }
  }, {
    key: "makeAbsolute",
    value: function makeAbsolute(point) {
      if (this.command.relative) {
        var _this$current2 = this.current,
          x = _this$current2.x,
          y = _this$current2.y;
        point.x += x;
        point.y += y;
      }
      return point;
    }
  }, {
    key: "addMarker",
    value: function addMarker(point, from, priorTo) {
      var points = this.points,
        angles = this.angles; // if the last angle isn't filled in because we didn't have this point yet ...

      if (priorTo && angles.length > 0 && !angles[angles.length - 1]) {
        angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
      }
      this.addMarkerAngle(point, from ? from.angleTo(point) : null);
    }
  }, {
    key: "addMarkerAngle",
    value: function addMarkerAngle(point, angle) {
      this.points.push(point);
      this.angles.push(angle);
    }
  }, {
    key: "getMarkerPoints",
    value: function getMarkerPoints() {
      return this.points;
    }
  }, {
    key: "getMarkerAngles",
    value: function getMarkerAngles() {
      var angles = this.angles;
      var len = angles.length;
      for (var i = 0; i < len; i++) {
        if (!angles[i]) {
          for (var j = i + 1; j < len; j++) {
            if (angles[j]) {
              angles[i] = angles[j];
              break;
            }
          }
        }
      }
      return angles;
    }
  }]);
}(_);
var RenderedElement = /*#__PURE__*/function (_Element2) {
  function RenderedElement() {
    var _this10;
    index_es_classCallCheck(this, RenderedElement);
    _this10 = _callSuper(this, RenderedElement, arguments);
    _this10.modifiedEmSizeStack = false;
    return _this10;
  }
  _inherits(RenderedElement, _Element2);
  return _createClass(RenderedElement, [{
    key: "calculateOpacity",
    value: function calculateOpacity() {
      var opacity = 1.0; // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this

      var element = this;
      while (element) {
        var opacityStyle = element.getStyle('opacity', false, true); // no ancestors on style call

        if (opacityStyle.hasValue(true)) {
          opacity *= opacityStyle.getNumber();
        }
        element = element.parent;
      }
      return opacity;
    }
  }, {
    key: "setContext",
    value: function setContext(ctx) {
      var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!fromMeasure) {
        // causes stack overflow when measuring text with gradients
        // fill
        var fillStyleProp = this.getStyle('fill');
        var fillOpacityStyleProp = this.getStyle('fill-opacity');
        var strokeStyleProp = this.getStyle('stroke');
        var strokeOpacityProp = this.getStyle('stroke-opacity');
        if (fillStyleProp.isUrlDefinition()) {
          var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);
          if (fillStyle) {
            ctx.fillStyle = fillStyle;
          }
        } else if (fillStyleProp.hasValue()) {
          if (fillStyleProp.getString() === 'currentColor') {
            fillStyleProp.setValue(this.getStyle('color').getColor());
          }
          var _fillStyle = fillStyleProp.getColor();
          if (_fillStyle !== 'inherit') {
            ctx.fillStyle = _fillStyle === 'none' ? 'rgba(0,0,0,0)' : _fillStyle;
          }
        }
        if (fillOpacityStyleProp.hasValue()) {
          var _fillStyle2 = new Property(this.document, 'fill', ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();
          ctx.fillStyle = _fillStyle2;
        } // stroke

        if (strokeStyleProp.isUrlDefinition()) {
          var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);
          if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
          }
        } else if (strokeStyleProp.hasValue()) {
          if (strokeStyleProp.getString() === 'currentColor') {
            strokeStyleProp.setValue(this.getStyle('color').getColor());
          }
          var _strokeStyle = strokeStyleProp.getString();
          if (_strokeStyle !== 'inherit') {
            ctx.strokeStyle = _strokeStyle === 'none' ? 'rgba(0,0,0,0)' : _strokeStyle;
          }
        }
        if (strokeOpacityProp.hasValue()) {
          var _strokeStyle2 = new Property(this.document, 'stroke', ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();
          ctx.strokeStyle = _strokeStyle2;
        }
        var strokeWidthStyleProp = this.getStyle('stroke-width');
        if (strokeWidthStyleProp.hasValue()) {
          var newLineWidth = strokeWidthStyleProp.getPixels();
          ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO // browsers don't respect 0 (or node-canvas? :-)
          : newLineWidth;
        }
        var strokeLinecapStyleProp = this.getStyle('stroke-linecap');
        var strokeLinejoinStyleProp = this.getStyle('stroke-linejoin');
        var strokeMiterlimitProp = this.getStyle('stroke-miterlimit'); // NEED TEST
        // const pointOrderStyleProp = this.getStyle('paint-order');

        var strokeDasharrayStyleProp = this.getStyle('stroke-dasharray');
        var strokeDashoffsetProp = this.getStyle('stroke-dashoffset');
        if (strokeLinecapStyleProp.hasValue()) {
          ctx.lineCap = strokeLinecapStyleProp.getString();
        }
        if (strokeLinejoinStyleProp.hasValue()) {
          ctx.lineJoin = strokeLinejoinStyleProp.getString();
        }
        if (strokeMiterlimitProp.hasValue()) {
          ctx.miterLimit = strokeMiterlimitProp.getNumber();
        } // NEED TEST
        // if (pointOrderStyleProp.hasValue()) {
        // 	// ?
        // 	ctx.paintOrder = pointOrderStyleProp.getValue();
        // }

        if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== 'none') {
          var gaps = toNumbers(strokeDasharrayStyleProp.getString());
          if (typeof ctx.setLineDash !== 'undefined') {
            ctx.setLineDash(gaps);
          } else
            // @ts-expect-error Handle browser prefix.
            if (typeof ctx.webkitLineDash !== 'undefined') {
              // @ts-expect-error Handle browser prefix.
              ctx.webkitLineDash = gaps;
            } else
              // @ts-expect-error Handle browser prefix.
              if (typeof ctx.mozDash !== 'undefined' && !(gaps.length === 1 && gaps[0] === 0)) {
                // @ts-expect-error Handle browser prefix.
                ctx.mozDash = gaps;
              }
          var offset = strokeDashoffsetProp.getPixels();
          if (typeof ctx.lineDashOffset !== 'undefined') {
            ctx.lineDashOffset = offset;
          } else
            // @ts-expect-error Handle browser prefix.
            if (typeof ctx.webkitLineDashOffset !== 'undefined') {
              // @ts-expect-error Handle browser prefix.
              ctx.webkitLineDashOffset = offset;
            } else
              // @ts-expect-error Handle browser prefix.
              if (typeof ctx.mozDashOffset !== 'undefined') {
                // @ts-expect-error Handle browser prefix.
                ctx.mozDashOffset = offset;
              }
        }
      } // font

      this.modifiedEmSizeStack = false;
      if (typeof ctx.font !== 'undefined') {
        var fontStyleProp = this.getStyle('font');
        var fontStyleStyleProp = this.getStyle('font-style');
        var fontVariantStyleProp = this.getStyle('font-variant');
        var fontWeightStyleProp = this.getStyle('font-weight');
        var fontSizeStyleProp = this.getStyle('font-size');
        var fontFamilyStyleProp = this.getStyle('font-family');
        var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : '', fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
        fontStyleStyleProp.setValue(font.fontStyle);
        fontVariantStyleProp.setValue(font.fontVariant);
        fontWeightStyleProp.setValue(font.fontWeight);
        fontSizeStyleProp.setValue(font.fontSize);
        fontFamilyStyleProp.setValue(font.fontFamily);
        ctx.font = font.toString();
        if (fontSizeStyleProp.isPixels()) {
          this.document.emSize = fontSizeStyleProp.getPixels();
          this.modifiedEmSizeStack = true;
        }
      }
      if (!fromMeasure) {
        // effects
        this.applyEffects(ctx); // opacity

        ctx.globalAlpha = this.calculateOpacity();
      }
    }
  }, {
    key: "clearContext",
    value: function clearContext(ctx) {
      _superPropGet(RenderedElement, "clearContext", this, 3)([ctx]);
      if (this.modifiedEmSizeStack) {
        this.document.popEmSize();
      }
    }
  }]);
}(Element);
var PathElement = /*#__PURE__*/function (_RenderedElement) {
  function PathElement(document, node, captureTextNodes) {
    var _this11;
    index_es_classCallCheck(this, PathElement);
    _this11 = _callSuper(this, PathElement, [document, node, captureTextNodes]);
    _this11.type = 'path';
    _this11.pathParser = null;
    _this11.pathParser = new PathParser(_this11.getAttribute('d').getString());
    return _this11;
  }
  _inherits(PathElement, _RenderedElement);
  return _createClass(PathElement, [{
    key: "path",
    value: function path(ctx) {
      var pathParser = this.pathParser;
      var boundingBox = new BoundingBox();
      pathParser.reset();
      if (ctx) {
        ctx.beginPath();
      }
      while (!pathParser.isEnd()) {
        switch (pathParser.next().type) {
          case PathParser.MOVE_TO:
            this.pathM(ctx, boundingBox);
            break;
          case PathParser.LINE_TO:
            this.pathL(ctx, boundingBox);
            break;
          case PathParser.HORIZ_LINE_TO:
            this.pathH(ctx, boundingBox);
            break;
          case PathParser.VERT_LINE_TO:
            this.pathV(ctx, boundingBox);
            break;
          case PathParser.CURVE_TO:
            this.pathC(ctx, boundingBox);
            break;
          case PathParser.SMOOTH_CURVE_TO:
            this.pathS(ctx, boundingBox);
            break;
          case PathParser.QUAD_TO:
            this.pathQ(ctx, boundingBox);
            break;
          case PathParser.SMOOTH_QUAD_TO:
            this.pathT(ctx, boundingBox);
            break;
          case PathParser.ARC:
            this.pathA(ctx, boundingBox);
            break;
          case PathParser.CLOSE_PATH:
            this.pathZ(ctx, boundingBox);
            break;
        }
      }
      return boundingBox;
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox(_) {
      return this.path();
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      var pathParser = this.pathParser;
      var points = pathParser.getMarkerPoints();
      var angles = pathParser.getMarkerAngles();
      var markers = points.map(function (point, i) {
        return [point, angles[i]];
      });
      return markers;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      this.path(ctx);
      this.document.screen.mouse.checkPath(this, ctx);
      var fillRuleStyleProp = this.getStyle('fill-rule');
      if (ctx.fillStyle !== '') {
        if (fillRuleStyleProp.getString('inherit') !== 'inherit') {
          ctx.fill(fillRuleStyleProp.getString());
        } else {
          ctx.fill();
        }
      }
      if (ctx.strokeStyle !== '') {
        if (this.getAttribute('vector-effect').getString() === 'non-scaling-stroke') {
          ctx.save();
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.stroke();
          ctx.restore();
        } else {
          ctx.stroke();
        }
      }
      var markers = this.getMarkers();
      if (markers) {
        var markersLastIndex = markers.length - 1;
        var markerStartStyleProp = this.getStyle('marker-start');
        var markerMidStyleProp = this.getStyle('marker-mid');
        var markerEndStyleProp = this.getStyle('marker-end');
        if (markerStartStyleProp.isUrlDefinition()) {
          var marker = markerStartStyleProp.getDefinition();
          var _markers$ = _slicedToArray(markers[0], 2),
            point = _markers$[0],
            angle = _markers$[1];
          marker.render(ctx, point, angle);
        }
        if (markerMidStyleProp.isUrlDefinition()) {
          var _marker = markerMidStyleProp.getDefinition();
          for (var i = 1; i < markersLastIndex; i++) {
            var _markers$i = _slicedToArray(markers[i], 2),
              _point = _markers$i[0],
              _angle = _markers$i[1];
            _marker.render(ctx, _point, _angle);
          }
        }
        if (markerEndStyleProp.isUrlDefinition()) {
          var _marker2 = markerEndStyleProp.getDefinition();
          var _markers$markersLastI = _slicedToArray(markers[markersLastIndex], 2),
            _point2 = _markers$markersLastI[0],
            _angle2 = _markers$markersLastI[1];
          _marker2.render(ctx, _point2, _angle2);
        }
      }
    }
  }, {
    key: "pathM",
    value: function pathM(ctx, boundingBox) {
      var pathParser = this.pathParser;
      var _PathElement$pathM = PathElement.pathM(pathParser),
        point = _PathElement$pathM.point;
      var x = point.x,
        y = point.y;
      pathParser.addMarker(point);
      boundingBox.addPoint(x, y);
      if (ctx) {
        ctx.moveTo(x, y);
      }
    }
  }, {
    key: "pathL",
    value: function pathL(ctx, boundingBox) {
      var pathParser = this.pathParser;
      var _PathElement$pathL = PathElement.pathL(pathParser),
        current = _PathElement$pathL.current,
        point = _PathElement$pathL.point;
      var x = point.x,
        y = point.y;
      pathParser.addMarker(point, current);
      boundingBox.addPoint(x, y);
      if (ctx) {
        ctx.lineTo(x, y);
      }
    }
  }, {
    key: "pathH",
    value: function pathH(ctx, boundingBox) {
      var pathParser = this.pathParser;
      var _PathElement$pathH = PathElement.pathH(pathParser),
        current = _PathElement$pathH.current,
        point = _PathElement$pathH.point;
      var x = point.x,
        y = point.y;
      pathParser.addMarker(point, current);
      boundingBox.addPoint(x, y);
      if (ctx) {
        ctx.lineTo(x, y);
      }
    }
  }, {
    key: "pathV",
    value: function pathV(ctx, boundingBox) {
      var pathParser = this.pathParser;
      var _PathElement$pathV = PathElement.pathV(pathParser),
        current = _PathElement$pathV.current,
        point = _PathElement$pathV.point;
      var x = point.x,
        y = point.y;
      pathParser.addMarker(point, current);
      boundingBox.addPoint(x, y);
      if (ctx) {
        ctx.lineTo(x, y);
      }
    }
  }, {
    key: "pathC",
    value: function pathC(ctx, boundingBox) {
      var pathParser = this.pathParser;
      var _PathElement$pathC = PathElement.pathC(pathParser),
        current = _PathElement$pathC.current,
        point = _PathElement$pathC.point,
        controlPoint = _PathElement$pathC.controlPoint,
        currentPoint = _PathElement$pathC.currentPoint;
      pathParser.addMarker(currentPoint, controlPoint, point);
      boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      if (ctx) {
        ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
    }
  }, {
    key: "pathS",
    value: function pathS(ctx, boundingBox) {
      var pathParser = this.pathParser;
      var _PathElement$pathS = PathElement.pathS(pathParser),
        current = _PathElement$pathS.current,
        point = _PathElement$pathS.point,
        controlPoint = _PathElement$pathS.controlPoint,
        currentPoint = _PathElement$pathS.currentPoint;
      pathParser.addMarker(currentPoint, controlPoint, point);
      boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      if (ctx) {
        ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
    }
  }, {
    key: "pathQ",
    value: function pathQ(ctx, boundingBox) {
      var pathParser = this.pathParser;
      var _PathElement$pathQ = PathElement.pathQ(pathParser),
        current = _PathElement$pathQ.current,
        controlPoint = _PathElement$pathQ.controlPoint,
        currentPoint = _PathElement$pathQ.currentPoint;
      pathParser.addMarker(currentPoint, controlPoint, controlPoint);
      boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      if (ctx) {
        ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
    }
  }, {
    key: "pathT",
    value: function pathT(ctx, boundingBox) {
      var pathParser = this.pathParser;
      var _PathElement$pathT = PathElement.pathT(pathParser),
        current = _PathElement$pathT.current,
        controlPoint = _PathElement$pathT.controlPoint,
        currentPoint = _PathElement$pathT.currentPoint;
      pathParser.addMarker(currentPoint, controlPoint, controlPoint);
      boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      if (ctx) {
        ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
    }
  }, {
    key: "pathA",
    value: function pathA(ctx, boundingBox) {
      var pathParser = this.pathParser;
      var _PathElement$pathA = PathElement.pathA(pathParser),
        currentPoint = _PathElement$pathA.currentPoint,
        rX = _PathElement$pathA.rX,
        rY = _PathElement$pathA.rY,
        sweepFlag = _PathElement$pathA.sweepFlag,
        xAxisRotation = _PathElement$pathA.xAxisRotation,
        centp = _PathElement$pathA.centp,
        a1 = _PathElement$pathA.a1,
        ad = _PathElement$pathA.ad; // for markers

      var dir = 1 - sweepFlag ? 1.0 : -1.0;
      var ah = a1 + dir * (ad / 2.0);
      var halfWay = new Point(centp.x + rX * Math.cos(ah), centp.y + rY * Math.sin(ah));
      pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
      pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
      boundingBox.addPoint(currentPoint.x, currentPoint.y); // TODO: this is too naive, make it better

      if (ctx && !isNaN(a1) && !isNaN(ad)) {
        var r = rX > rY ? rX : rY;
        var sx = rX > rY ? 1 : rX / rY;
        var sy = rX > rY ? rY / rX : 1;
        ctx.translate(centp.x, centp.y);
        ctx.rotate(xAxisRotation);
        ctx.scale(sx, sy);
        ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag));
        ctx.scale(1 / sx, 1 / sy);
        ctx.rotate(-xAxisRotation);
        ctx.translate(-centp.x, -centp.y);
      }
    }
  }, {
    key: "pathZ",
    value: function pathZ(ctx, boundingBox) {
      PathElement.pathZ(this.pathParser);
      if (ctx) {
        // only close path if it is not a straight line
        if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) {
          ctx.closePath();
        }
      }
    }
  }], [{
    key: "pathM",
    value: function pathM(pathParser) {
      var point = pathParser.getAsCurrentPoint();
      pathParser.start = pathParser.current;
      return {
        point: point
      };
    }
  }, {
    key: "pathL",
    value: function pathL(pathParser) {
      var current = pathParser.current;
      var point = pathParser.getAsCurrentPoint();
      return {
        current: current,
        point: point
      };
    }
  }, {
    key: "pathH",
    value: function pathH(pathParser) {
      var current = pathParser.current,
        command = pathParser.command;
      var point = new Point((command.relative ? current.x : 0) + command.x, current.y);
      pathParser.current = point;
      return {
        current: current,
        point: point
      };
    }
  }, {
    key: "pathV",
    value: function pathV(pathParser) {
      var current = pathParser.current,
        command = pathParser.command;
      var point = new Point(current.x, (command.relative ? current.y : 0) + command.y);
      pathParser.current = point;
      return {
        current: current,
        point: point
      };
    }
  }, {
    key: "pathC",
    value: function pathC(pathParser) {
      var current = pathParser.current;
      var point = pathParser.getPoint('x1', 'y1');
      var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
      var currentPoint = pathParser.getAsCurrentPoint();
      return {
        current: current,
        point: point,
        controlPoint: controlPoint,
        currentPoint: currentPoint
      };
    }
  }, {
    key: "pathS",
    value: function pathS(pathParser) {
      var current = pathParser.current;
      var point = pathParser.getReflectedControlPoint();
      var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
      var currentPoint = pathParser.getAsCurrentPoint();
      return {
        current: current,
        point: point,
        controlPoint: controlPoint,
        currentPoint: currentPoint
      };
    }
  }, {
    key: "pathQ",
    value: function pathQ(pathParser) {
      var current = pathParser.current;
      var controlPoint = pathParser.getAsControlPoint('x1', 'y1');
      var currentPoint = pathParser.getAsCurrentPoint();
      return {
        current: current,
        controlPoint: controlPoint,
        currentPoint: currentPoint
      };
    }
  }, {
    key: "pathT",
    value: function pathT(pathParser) {
      var current = pathParser.current;
      var controlPoint = pathParser.getReflectedControlPoint();
      pathParser.control = controlPoint;
      var currentPoint = pathParser.getAsCurrentPoint();
      return {
        current: current,
        controlPoint: controlPoint,
        currentPoint: currentPoint
      };
    }
  }, {
    key: "pathA",
    value: function pathA(pathParser) {
      var current = pathParser.current,
        command = pathParser.command;
      var rX = command.rX,
        rY = command.rY,
        xRot = command.xRot,
        lArcFlag = command.lArcFlag,
        sweepFlag = command.sweepFlag;
      var xAxisRotation = xRot * (Math.PI / 180.0);
      var currentPoint = pathParser.getAsCurrentPoint(); // Conversion from endpoint to center parameterization
      // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
      // x1', y1'

      var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2.0, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2.0); // adjust radii

      var l = Math.pow(currp.x, 2) / Math.pow(rX, 2) + Math.pow(currp.y, 2) / Math.pow(rY, 2);
      if (l > 1) {
        rX *= Math.sqrt(l);
        rY *= Math.sqrt(l);
      } // cx', cy'

      var s = (lArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rX, 2) * Math.pow(rY, 2) - Math.pow(rX, 2) * Math.pow(currp.y, 2) - Math.pow(rY, 2) * Math.pow(currp.x, 2)) / (Math.pow(rX, 2) * Math.pow(currp.y, 2) + Math.pow(rY, 2) * Math.pow(currp.x, 2)));
      if (isNaN(s)) {
        s = 0;
      }
      var cpp = new Point(s * rX * currp.y / rY, s * -rY * currp.x / rX); // cx, cy

      var centp = new Point((current.x + currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y); // initial angle

      var a1 = vectorsAngle([1, 0], [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY]); // θ1
      // angle delta

      var u = [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY];
      var v = [(-currp.x - cpp.x) / rX, (-currp.y - cpp.y) / rY];
      var ad = vectorsAngle(u, v); // Δθ

      if (vectorsRatio(u, v) <= -1) {
        ad = Math.PI;
      }
      if (vectorsRatio(u, v) >= 1) {
        ad = 0;
      }
      return {
        currentPoint: currentPoint,
        rX: rX,
        rY: rY,
        sweepFlag: sweepFlag,
        xAxisRotation: xAxisRotation,
        centp: centp,
        a1: a1,
        ad: ad
      };
    }
  }, {
    key: "pathZ",
    value: function pathZ(pathParser) {
      pathParser.current = pathParser.start;
    }
  }]);
}(RenderedElement);
var GlyphElement = /*#__PURE__*/function (_PathElement) {
  function GlyphElement(document, node, captureTextNodes) {
    var _this12;
    index_es_classCallCheck(this, GlyphElement);
    _this12 = _callSuper(this, GlyphElement, [document, node, captureTextNodes]);
    _this12.type = 'glyph';
    _this12.horizAdvX = _this12.getAttribute('horiz-adv-x').getNumber();
    _this12.unicode = _this12.getAttribute('unicode').getString();
    _this12.arabicForm = _this12.getAttribute('arabic-form').getString();
    return _this12;
  }
  _inherits(GlyphElement, _PathElement);
  return _createClass(GlyphElement);
}(PathElement);
var TextElement = /*#__PURE__*/function (_RenderedElement2) {
  function TextElement(document, node, captureTextNodes) {
    var _this13;
    index_es_classCallCheck(this, TextElement);
    _this13 = _callSuper(this, TextElement, [document, node, (this instanceof TextElement ? this.constructor : void 0) === TextElement ? true : captureTextNodes]);
    _this13.type = 'text';
    _this13.x = 0;
    _this13.y = 0;
    _this13.measureCache = -1;
    return _this13;
  }
  _inherits(TextElement, _RenderedElement2);
  return _createClass(TextElement, [{
    key: "setContext",
    value: function setContext(ctx) {
      var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      _superPropGet(TextElement, "setContext", this, 3)([ctx, fromMeasure]);
      var textBaseline = this.getStyle('dominant-baseline').getTextBaseline() || this.getStyle('alignment-baseline').getTextBaseline();
      if (textBaseline) {
        ctx.textBaseline = textBaseline;
      }
    }
  }, {
    key: "initializeCoordinates",
    value: function initializeCoordinates() {
      this.x = 0;
      this.y = 0;
      this.leafTexts = [];
      this.textChunkStart = 0;
      this.minX = Number.POSITIVE_INFINITY;
      this.maxX = Number.NEGATIVE_INFINITY;
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox(ctx) {
      var _this14 = this;
      if (this.type !== 'text') {
        return this.getTElementBoundingBox(ctx);
      } // first, calculate child positions

      this.initializeCoordinates();
      this.adjustChildCoordinatesRecursive(ctx);
      var boundingBox = null; // then calculate bounding box

      this.children.forEach(function (_, i) {
        var childBoundingBox = _this14.getChildBoundingBox(ctx, _this14, _this14, i);
        if (!boundingBox) {
          boundingBox = childBoundingBox;
        } else {
          boundingBox.addBoundingBox(childBoundingBox);
        }
      });
      return boundingBox;
    }
  }, {
    key: "getFontSize",
    value: function getFontSize() {
      var document = this.document,
        parent = this.parent;
      var inheritFontSize = Font.parse(document.ctx.font).fontSize;
      var fontSize = parent.getStyle('font-size').getNumber(inheritFontSize);
      return fontSize;
    }
  }, {
    key: "getTElementBoundingBox",
    value: function getTElementBoundingBox(ctx) {
      var fontSize = this.getFontSize();
      return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
    }
  }, {
    key: "getGlyph",
    value: function getGlyph(font, text, i) {
      var _char = text[i];
      var glyph = null;
      if (font.isArabic) {
        var len = text.length;
        var prevChar = text[i - 1];
        var nextChar = text[i + 1];
        var arabicForm = 'isolated';
        if ((i === 0 || prevChar === ' ') && i < len - 1 && nextChar !== ' ') {
          arabicForm = 'terminal';
        }
        if (i > 0 && prevChar !== ' ' && i < len - 1 && nextChar !== ' ') {
          arabicForm = 'medial';
        }
        if (i > 0 && prevChar !== ' ' && (i === len - 1 || nextChar === ' ')) {
          arabicForm = 'initial';
        }
        if (typeof font.glyphs[_char] !== 'undefined') {
          // NEED TEST
          var maybeGlyph = font.glyphs[_char];
          glyph = maybeGlyph instanceof GlyphElement ? maybeGlyph : maybeGlyph[arabicForm];
        }
      } else {
        glyph = font.glyphs[_char];
      }
      if (!glyph) {
        glyph = font.missingGlyph;
      }
      return glyph;
    }
  }, {
    key: "getText",
    value: function getText() {
      return '';
    }
  }, {
    key: "getTextFromNode",
    value: function getTextFromNode(node) {
      var textNode = node || this.node;
      var childNodes = Array.from(textNode.parentNode.childNodes);
      var index = childNodes.indexOf(textNode);
      var lastIndex = childNodes.length - 1;
      var text = compressSpaces(
      // textNode.value
      // || textNode.text
      textNode.textContent || '');
      if (index === 0) {
        text = trimLeft(text);
      }
      if (index === lastIndex) {
        text = trimRight(text);
      }
      return text;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      var _this15 = this;
      if (this.type !== 'text') {
        this.renderTElementChildren(ctx);
        return;
      } // first, calculate child positions

      this.initializeCoordinates();
      this.adjustChildCoordinatesRecursive(ctx); // then render

      this.children.forEach(function (_, i) {
        _this15.renderChild(ctx, _this15, _this15, i);
      });
      var mouse = this.document.screen.mouse; // Do not calc bounding box if mouse is not working.

      if (mouse.isWorking()) {
        mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
      }
    }
  }, {
    key: "renderTElementChildren",
    value: function renderTElementChildren(ctx) {
      var document = this.document,
        parent = this.parent;
      var renderText = this.getText();
      var customFont = parent.getStyle('font-family').getDefinition();
      if (customFont) {
        var unitsPerEm = customFont.fontFace.unitsPerEm;
        var ctxFont = Font.parse(document.ctx.font);
        var fontSize = parent.getStyle('font-size').getNumber(ctxFont.fontSize);
        var fontStyle = parent.getStyle('font-style').getString(ctxFont.fontStyle);
        var scale = fontSize / unitsPerEm;
        var text = customFont.isRTL ? renderText.split('').reverse().join('') : renderText;
        var dx = toNumbers(parent.getAttribute('dx').getString());
        var len = text.length;
        for (var i = 0; i < len; i++) {
          var glyph = this.getGlyph(customFont, text, i);
          ctx.translate(this.x, this.y);
          ctx.scale(scale, -scale);
          var lw = ctx.lineWidth;
          ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;
          if (fontStyle === 'italic') {
            ctx.transform(1, 0, .4, 1, 0, 0);
          }
          glyph.render(ctx);
          if (fontStyle === 'italic') {
            ctx.transform(1, 0, -.4, 1, 0, 0);
          }
          ctx.lineWidth = lw;
          ctx.scale(1 / scale, -1 / scale);
          ctx.translate(-this.x, -this.y);
          this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;
          if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) {
            this.x += dx[i];
          }
        }
        return;
      }
      var x = this.x,
        y = this.y; // NEED TEST
      // if (ctx.paintOrder === 'stroke') {
      // 	if (ctx.strokeStyle) {
      // 		ctx.strokeText(renderText, x, y);
      // 	}
      // 	if (ctx.fillStyle) {
      // 		ctx.fillText(renderText, x, y);
      // 	}
      // } else {

      if (ctx.fillStyle) {
        ctx.fillText(renderText, x, y);
      }
      if (ctx.strokeStyle) {
        ctx.strokeText(renderText, x, y);
      } // }
    }
  }, {
    key: "applyAnchoring",
    value: function applyAnchoring() {
      if (this.textChunkStart >= this.leafTexts.length) {
        return;
      } // This is basically the "Apply anchoring" part of https://www.w3.org/TR/SVG2/text.html#TextLayoutAlgorithm.
      // The difference is that we apply the anchoring as soon as a chunk is finished. This saves some extra looping.
      // Vertical text is not supported.

      var firstElement = this.leafTexts[this.textChunkStart];
      var textAnchor = firstElement.getStyle('text-anchor').getString('start');
      var isRTL = false; // we treat RTL like LTR

      var shift = 0;
      if (textAnchor === 'start' && !isRTL || textAnchor === 'end' && isRTL) {
        shift = firstElement.x - this.minX;
      } else if (textAnchor === 'end' && !isRTL || textAnchor === 'start' && isRTL) {
        shift = firstElement.x - this.maxX;
      } else {
        shift = firstElement.x - (this.minX + this.maxX) / 2;
      }
      for (var i = this.textChunkStart; i < this.leafTexts.length; i++) {
        this.leafTexts[i].x += shift;
      } // start new chunk

      this.minX = Number.POSITIVE_INFINITY;
      this.maxX = Number.NEGATIVE_INFINITY;
      this.textChunkStart = this.leafTexts.length;
    }
  }, {
    key: "adjustChildCoordinatesRecursive",
    value: function adjustChildCoordinatesRecursive(ctx) {
      var _this16 = this;
      this.children.forEach(function (_, i) {
        _this16.adjustChildCoordinatesRecursiveCore(ctx, _this16, _this16, i);
      });
      this.applyAnchoring();
    }
  }, {
    key: "adjustChildCoordinatesRecursiveCore",
    value: function adjustChildCoordinatesRecursiveCore(ctx, textParent, parent, i) {
      var child = parent.children[i];
      if (child.children.length > 0) {
        child.children.forEach(function (_, i) {
          textParent.adjustChildCoordinatesRecursiveCore(ctx, textParent, child, i);
        });
      } else {
        // only leafs are relevant
        this.adjustChildCoordinates(ctx, textParent, parent, i);
      }
    }
  }, {
    key: "adjustChildCoordinates",
    value: function adjustChildCoordinates(ctx, textParent, parent, i) {
      var child = parent.children[i];
      if (typeof child.measureText !== 'function') {
        return child;
      }
      ctx.save();
      child.setContext(ctx, true);
      var xAttr = child.getAttribute('x');
      var yAttr = child.getAttribute('y');
      var dxAttr = child.getAttribute('dx');
      var dyAttr = child.getAttribute('dy');
      var customFont = child.getStyle('font-family').getDefinition();
      var isRTL = Boolean(customFont) && customFont.isRTL;
      if (i === 0) {
        // First children inherit attributes from parent(s). Positional attributes
        // are only inherited from a parent to it's first child.
        if (!xAttr.hasValue()) {
          xAttr.setValue(child.getInheritedAttribute('x'));
        }
        if (!yAttr.hasValue()) {
          yAttr.setValue(child.getInheritedAttribute('y'));
        }
        if (!dxAttr.hasValue()) {
          dxAttr.setValue(child.getInheritedAttribute('dx'));
        }
        if (!dyAttr.hasValue()) {
          dyAttr.setValue(child.getInheritedAttribute('dy'));
        }
      }
      var width = child.measureText(ctx);
      if (isRTL) {
        textParent.x -= width;
      }
      if (xAttr.hasValue()) {
        // an "x" attribute marks the start of a new chunk
        textParent.applyAnchoring();
        child.x = xAttr.getPixels('x');
        if (dxAttr.hasValue()) {
          child.x += dxAttr.getPixels('x');
        }
      } else {
        if (dxAttr.hasValue()) {
          textParent.x += dxAttr.getPixels('x');
        }
        child.x = textParent.x;
      }
      textParent.x = child.x;
      if (!isRTL) {
        textParent.x += width;
      }
      if (yAttr.hasValue()) {
        child.y = yAttr.getPixels('y');
        if (dyAttr.hasValue()) {
          child.y += dyAttr.getPixels('y');
        }
      } else {
        if (dyAttr.hasValue()) {
          textParent.y += dyAttr.getPixels('y');
        }
        child.y = textParent.y;
      }
      textParent.y = child.y; // update the current chunk and it's bounds

      textParent.leafTexts.push(child);
      textParent.minX = Math.min(textParent.minX, child.x, child.x + width);
      textParent.maxX = Math.max(textParent.maxX, child.x, child.x + width);
      child.clearContext(ctx);
      ctx.restore();
      return child;
    }
  }, {
    key: "getChildBoundingBox",
    value: function getChildBoundingBox(ctx, textParent, parent, i) {
      var child = parent.children[i]; // not a text node?

      if (typeof child.getBoundingBox !== 'function') {
        return null;
      }
      var boundingBox = child.getBoundingBox(ctx);
      if (!boundingBox) {
        return null;
      }
      child.children.forEach(function (_, i) {
        var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i);
        boundingBox.addBoundingBox(childBoundingBox);
      });
      return boundingBox;
    }
  }, {
    key: "renderChild",
    value: function renderChild(ctx, textParent, parent, i) {
      var child = parent.children[i];
      child.render(ctx);
      child.children.forEach(function (_, i) {
        textParent.renderChild(ctx, textParent, child, i);
      });
    }
  }, {
    key: "measureText",
    value: function measureText(ctx) {
      var measureCache = this.measureCache;
      if (~measureCache) {
        return measureCache;
      }
      var renderText = this.getText();
      var measure = this.measureTargetText(ctx, renderText);
      this.measureCache = measure;
      return measure;
    }
  }, {
    key: "measureTargetText",
    value: function measureTargetText(ctx, targetText) {
      if (!targetText.length) {
        return 0;
      }
      var parent = this.parent;
      var customFont = parent.getStyle('font-family').getDefinition();
      if (customFont) {
        var fontSize = this.getFontSize();
        var text = customFont.isRTL ? targetText.split('').reverse().join('') : targetText;
        var dx = toNumbers(parent.getAttribute('dx').getString());
        var len = text.length;
        var _measure = 0;
        for (var i = 0; i < len; i++) {
          var glyph = this.getGlyph(customFont, text, i);
          _measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
          if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) {
            _measure += dx[i];
          }
        }
        return _measure;
      }
      if (!ctx.measureText) {
        return targetText.length * 10;
      }
      ctx.save();
      this.setContext(ctx, true);
      var _ctx$measureText = ctx.measureText(targetText),
        measure = _ctx$measureText.width;
      this.clearContext(ctx);
      ctx.restore();
      return measure;
    }
    /**
     * Inherits positional attributes from {@link TextElement} parent(s). Attributes
     * are only inherited from a parent to its first child.
     * @param name - The attribute name.
     * @returns The attribute value or null.
     */
  }, {
    key: "getInheritedAttribute",
    value: function getInheritedAttribute(name) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias,consistent-this
      var current = this;
      while (current instanceof TextElement && current.isFirstChild()) {
        var parentAttr = current.parent.getAttribute(name);
        if (parentAttr.hasValue(true)) {
          return parentAttr.getValue('0');
        }
        current = current.parent;
      }
      return null;
    }
  }]);
}(RenderedElement);
var TSpanElement = /*#__PURE__*/function (_TextElement) {
  function TSpanElement(document, node, captureTextNodes) {
    var _this17;
    index_es_classCallCheck(this, TSpanElement);
    _this17 = _callSuper(this, TSpanElement, [document, node, (this instanceof TSpanElement ? this.constructor : void 0) === TSpanElement ? true : captureTextNodes]);
    _this17.type = 'tspan'; // if this node has children, then they own the text

    _this17.text = _this17.children.length > 0 ? '' : _this17.getTextFromNode();
    return _this17;
  }
  _inherits(TSpanElement, _TextElement);
  return _createClass(TSpanElement, [{
    key: "getText",
    value: function getText() {
      return this.text;
    }
  }]);
}(TextElement);
var TextNode = /*#__PURE__*/function (_TSpanElement) {
  function TextNode() {
    var _this18;
    index_es_classCallCheck(this, TextNode);
    _this18 = _callSuper(this, TextNode, arguments);
    _this18.type = 'textNode';
    return _this18;
  }
  _inherits(TextNode, _TSpanElement);
  return _createClass(TextNode);
}(TSpanElement);
var SVGElement = /*#__PURE__*/function (_RenderedElement3) {
  function SVGElement() {
    var _this19;
    index_es_classCallCheck(this, SVGElement);
    _this19 = _callSuper(this, SVGElement, arguments);
    _this19.type = 'svg';
    _this19.root = false;
    return _this19;
  }
  _inherits(SVGElement, _RenderedElement3);
  return _createClass(SVGElement, [{
    key: "setContext",
    value: function setContext(ctx) {
      var _this$node$parentNode;
      var document = this.document;
      var screen = document.screen,
        window = document.window;
      var canvas = ctx.canvas;
      screen.setDefaults(ctx);
      if (canvas.style && typeof ctx.font !== 'undefined' && window && typeof window.getComputedStyle !== 'undefined') {
        ctx.font = window.getComputedStyle(canvas).getPropertyValue('font');
        var fontSizeProp = new Property(document, 'fontSize', Font.parse(ctx.font).fontSize);
        if (fontSizeProp.hasValue()) {
          document.rootEmSize = fontSizeProp.getPixels('y');
          document.emSize = document.rootEmSize;
        }
      } // create new view port

      if (!this.getAttribute('x').hasValue()) {
        this.getAttribute('x', true).setValue(0);
      }
      if (!this.getAttribute('y').hasValue()) {
        this.getAttribute('y', true).setValue(0);
      }
      var _screen$viewPort = screen.viewPort,
        width = _screen$viewPort.width,
        height = _screen$viewPort.height;
      if (!this.getStyle('width').hasValue()) {
        this.getStyle('width', true).setValue('100%');
      }
      if (!this.getStyle('height').hasValue()) {
        this.getStyle('height', true).setValue('100%');
      }
      if (!this.getStyle('color').hasValue()) {
        this.getStyle('color', true).setValue('black');
      }
      var refXAttr = this.getAttribute('refX');
      var refYAttr = this.getAttribute('refY');
      var viewBoxAttr = this.getAttribute('viewBox');
      var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
      var clip = !this.root && this.getStyle('overflow').getValue('hidden') !== 'visible';
      var minX = 0;
      var minY = 0;
      var clipX = 0;
      var clipY = 0;
      if (viewBox) {
        minX = viewBox[0];
        minY = viewBox[1];
      }
      if (!this.root) {
        width = this.getStyle('width').getPixels('x');
        height = this.getStyle('height').getPixels('y');
        if (this.type === 'marker') {
          clipX = minX;
          clipY = minY;
          minX = 0;
          minY = 0;
        }
      }
      screen.viewPort.setCurrent(width, height); // Default value of transform-origin is center only for root SVG elements
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform-origin

      if (this.node // is not temporary SVGElement
      && (!this.parent || ((_this$node$parentNode = this.node.parentNode) === null || _this$node$parentNode === void 0 ? void 0 : _this$node$parentNode.nodeName) === 'foreignObject') && this.getStyle('transform', false, true).hasValue() && !this.getStyle('transform-origin', false, true).hasValue()) {
        this.getStyle('transform-origin', true, true).setValue('50% 50%');
      }
      _superPropGet(SVGElement, "setContext", this, 3)([ctx]);
      ctx.translate(this.getAttribute('x').getPixels('x'), this.getAttribute('y').getPixels('y'));
      if (viewBox) {
        width = viewBox[2];
        height = viewBox[3];
      }
      document.setViewBox({
        ctx: ctx,
        aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
        width: screen.viewPort.width,
        desiredWidth: width,
        height: screen.viewPort.height,
        desiredHeight: height,
        minX: minX,
        minY: minY,
        refX: refXAttr.getValue(),
        refY: refYAttr.getValue(),
        clip: clip,
        clipX: clipX,
        clipY: clipY
      });
      if (viewBox) {
        screen.viewPort.removeCurrent();
        screen.viewPort.setCurrent(width, height);
      }
    }
  }, {
    key: "clearContext",
    value: function clearContext(ctx) {
      _superPropGet(SVGElement, "clearContext", this, 3)([ctx]);
      this.document.screen.viewPort.removeCurrent();
    }
    /**
     * Resize SVG to fit in given size.
     * @param width
     * @param height
     * @param preserveAspectRatio
     */
  }, {
    key: "resize",
    value: function resize(width) {
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
      var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var widthAttr = this.getAttribute('width', true);
      var heightAttr = this.getAttribute('height', true);
      var viewBoxAttr = this.getAttribute('viewBox');
      var styleAttr = this.getAttribute('style');
      var originWidth = widthAttr.getNumber(0);
      var originHeight = heightAttr.getNumber(0);
      if (preserveAspectRatio) {
        if (typeof preserveAspectRatio === 'string') {
          this.getAttribute('preserveAspectRatio', true).setValue(preserveAspectRatio);
        } else {
          var preserveAspectRatioAttr = this.getAttribute('preserveAspectRatio');
          if (preserveAspectRatioAttr.hasValue()) {
            preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, '$1'));
          }
        }
      }
      widthAttr.setValue(width);
      heightAttr.setValue(height);
      if (!viewBoxAttr.hasValue()) {
        viewBoxAttr.setValue("0 0 ".concat(originWidth || width, " ").concat(originHeight || height));
      }
      if (styleAttr.hasValue()) {
        var widthStyle = this.getStyle('width');
        var heightStyle = this.getStyle('height');
        if (widthStyle.hasValue()) {
          widthStyle.setValue("".concat(width, "px"));
        }
        if (heightStyle.hasValue()) {
          heightStyle.setValue("".concat(height, "px"));
        }
      }
    }
  }]);
}(RenderedElement);
var RectElement = /*#__PURE__*/function (_PathElement2) {
  function RectElement() {
    var _this20;
    index_es_classCallCheck(this, RectElement);
    _this20 = _callSuper(this, RectElement, arguments);
    _this20.type = 'rect';
    return _this20;
  }
  _inherits(RectElement, _PathElement2);
  return _createClass(RectElement, [{
    key: "path",
    value: function path(ctx) {
      var x = this.getAttribute('x').getPixels('x');
      var y = this.getAttribute('y').getPixels('y');
      var width = this.getStyle('width', false, true).getPixels('x');
      var height = this.getStyle('height', false, true).getPixels('y');
      var rxAttr = this.getAttribute('rx');
      var ryAttr = this.getAttribute('ry');
      var rx = rxAttr.getPixels('x');
      var ry = ryAttr.getPixels('y');
      if (rxAttr.hasValue() && !ryAttr.hasValue()) {
        ry = rx;
      }
      if (ryAttr.hasValue() && !rxAttr.hasValue()) {
        rx = ry;
      }
      rx = Math.min(rx, width / 2.0);
      ry = Math.min(ry, height / 2.0);
      if (ctx) {
        var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
        ctx.beginPath(); // always start the path so we don't fill prior paths

        if (height > 0 && width > 0) {
          ctx.moveTo(x + rx, y);
          ctx.lineTo(x + width - rx, y);
          ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y, x + width, y + ry - KAPPA * ry, x + width, y + ry);
          ctx.lineTo(x + width, y + height - ry);
          ctx.bezierCurveTo(x + width, y + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y + height, x + width - rx, y + height);
          ctx.lineTo(x + rx, y + height);
          ctx.bezierCurveTo(x + rx - KAPPA * rx, y + height, x, y + height - ry + KAPPA * ry, x, y + height - ry);
          ctx.lineTo(x, y + ry);
          ctx.bezierCurveTo(x, y + ry - KAPPA * ry, x + rx - KAPPA * rx, y, x + rx, y);
          ctx.closePath();
        }
      }
      return new BoundingBox(x, y, x + width, y + height);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      return null;
    }
  }]);
}(PathElement);
var CircleElement = /*#__PURE__*/function (_PathElement3) {
  function CircleElement() {
    var _this21;
    index_es_classCallCheck(this, CircleElement);
    _this21 = _callSuper(this, CircleElement, arguments);
    _this21.type = 'circle';
    return _this21;
  }
  _inherits(CircleElement, _PathElement3);
  return _createClass(CircleElement, [{
    key: "path",
    value: function path(ctx) {
      var cx = this.getAttribute('cx').getPixels('x');
      var cy = this.getAttribute('cy').getPixels('y');
      var r = this.getAttribute('r').getPixels();
      if (ctx && r > 0) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
        ctx.closePath();
      }
      return new BoundingBox(cx - r, cy - r, cx + r, cy + r);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      return null;
    }
  }]);
}(PathElement);
var EllipseElement = /*#__PURE__*/function (_PathElement4) {
  function EllipseElement() {
    var _this22;
    index_es_classCallCheck(this, EllipseElement);
    _this22 = _callSuper(this, EllipseElement, arguments);
    _this22.type = 'ellipse';
    return _this22;
  }
  _inherits(EllipseElement, _PathElement4);
  return _createClass(EllipseElement, [{
    key: "path",
    value: function path(ctx) {
      var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
      var rx = this.getAttribute('rx').getPixels('x');
      var ry = this.getAttribute('ry').getPixels('y');
      var cx = this.getAttribute('cx').getPixels('x');
      var cy = this.getAttribute('cy').getPixels('y');
      if (ctx && rx > 0 && ry > 0) {
        ctx.beginPath();
        ctx.moveTo(cx + rx, cy);
        ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
        ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
        ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
        ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
        ctx.closePath();
      }
      return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      return null;
    }
  }]);
}(PathElement);
var LineElement = /*#__PURE__*/function (_PathElement5) {
  function LineElement() {
    var _this23;
    index_es_classCallCheck(this, LineElement);
    _this23 = _callSuper(this, LineElement, arguments);
    _this23.type = 'line';
    return _this23;
  }
  _inherits(LineElement, _PathElement5);
  return _createClass(LineElement, [{
    key: "getPoints",
    value: function getPoints() {
      return [new Point(this.getAttribute('x1').getPixels('x'), this.getAttribute('y1').getPixels('y')), new Point(this.getAttribute('x2').getPixels('x'), this.getAttribute('y2').getPixels('y'))];
    }
  }, {
    key: "path",
    value: function path(ctx) {
      var _this$getPoints = this.getPoints(),
        _this$getPoints2 = _slicedToArray(_this$getPoints, 2),
        _this$getPoints2$ = _this$getPoints2[0],
        x0 = _this$getPoints2$.x,
        y0 = _this$getPoints2$.y,
        _this$getPoints2$2 = _this$getPoints2[1],
        x1 = _this$getPoints2$2.x,
        y1 = _this$getPoints2$2.y;
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
      }
      return new BoundingBox(x0, y0, x1, y1);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      var _this$getPoints3 = this.getPoints(),
        _this$getPoints4 = _slicedToArray(_this$getPoints3, 2),
        p0 = _this$getPoints4[0],
        p1 = _this$getPoints4[1];
      var a = p0.angleTo(p1);
      return [[p0, a], [p1, a]];
    }
  }]);
}(PathElement);
var PolylineElement = /*#__PURE__*/function (_PathElement6) {
  function PolylineElement(document, node, captureTextNodes) {
    var _this24;
    index_es_classCallCheck(this, PolylineElement);
    _this24 = _callSuper(this, PolylineElement, [document, node, captureTextNodes]);
    _this24.type = 'polyline';
    _this24.points = [];
    _this24.points = Point.parsePath(_this24.getAttribute('points').getString());
    return _this24;
  }
  _inherits(PolylineElement, _PathElement6);
  return _createClass(PolylineElement, [{
    key: "path",
    value: function path(ctx) {
      var points = this.points;
      var _points = _slicedToArray(points, 1),
        _points$ = _points[0],
        x0 = _points$.x,
        y0 = _points$.y;
      var boundingBox = new BoundingBox(x0, y0);
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(x0, y0);
      }
      points.forEach(function (_ref) {
        var x = _ref.x,
          y = _ref.y;
        boundingBox.addPoint(x, y);
        if (ctx) {
          ctx.lineTo(x, y);
        }
      });
      return boundingBox;
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      var points = this.points;
      var lastIndex = points.length - 1;
      var markers = [];
      points.forEach(function (point, i) {
        if (i === lastIndex) {
          return;
        }
        markers.push([point, point.angleTo(points[i + 1])]);
      });
      if (markers.length > 0) {
        markers.push([points[points.length - 1], markers[markers.length - 1][1]]);
      }
      return markers;
    }
  }]);
}(PathElement);
var PolygonElement = /*#__PURE__*/function (_PolylineElement) {
  function PolygonElement() {
    var _this25;
    index_es_classCallCheck(this, PolygonElement);
    _this25 = _callSuper(this, PolygonElement, arguments);
    _this25.type = 'polygon';
    return _this25;
  }
  _inherits(PolygonElement, _PolylineElement);
  return _createClass(PolygonElement, [{
    key: "path",
    value: function path(ctx) {
      var boundingBox = _superPropGet(PolygonElement, "path", this, 3)([ctx]);
      var _this$points = _slicedToArray(this.points, 1),
        _this$points$ = _this$points[0],
        x = _this$points$.x,
        y = _this$points$.y;
      if (ctx) {
        ctx.lineTo(x, y);
        ctx.closePath();
      }
      return boundingBox;
    }
  }]);
}(PolylineElement);
var PatternElement = /*#__PURE__*/function (_Element3) {
  function PatternElement() {
    var _this26;
    index_es_classCallCheck(this, PatternElement);
    _this26 = _callSuper(this, PatternElement, arguments);
    _this26.type = 'pattern';
    return _this26;
  }
  _inherits(PatternElement, _Element3);
  return _createClass(PatternElement, [{
    key: "createPattern",
    value: function createPattern(ctx, _, parentOpacityProp) {
      var width = this.getStyle('width').getPixels('x', true);
      var height = this.getStyle('height').getPixels('y', true); // render me using a temporary svg element

      var patternSvg = new SVGElement(this.document, null);
      patternSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
      patternSvg.attributes.width = new Property(this.document, 'width', "".concat(width, "px"));
      patternSvg.attributes.height = new Property(this.document, 'height', "".concat(height, "px"));
      patternSvg.attributes.transform = new Property(this.document, 'transform', this.getAttribute('patternTransform').getValue());
      patternSvg.children = this.children;
      var patternCanvas = this.document.createCanvas(width, height);
      var patternCtx = patternCanvas.getContext('2d');
      var xAttr = this.getAttribute('x');
      var yAttr = this.getAttribute('y');
      if (xAttr.hasValue() && yAttr.hasValue()) {
        patternCtx.translate(xAttr.getPixels('x', true), yAttr.getPixels('y', true));
      }
      if (parentOpacityProp.hasValue()) {
        this.styles['fill-opacity'] = parentOpacityProp;
      } else {
        Reflect.deleteProperty(this.styles, 'fill-opacity');
      } // render 3x3 grid so when we transform there's no white space on edges

      for (var x = -1; x <= 1; x++) {
        for (var y = -1; y <= 1; y++) {
          patternCtx.save();
          patternSvg.attributes.x = new Property(this.document, 'x', x * patternCanvas.width);
          patternSvg.attributes.y = new Property(this.document, 'y', y * patternCanvas.height);
          patternSvg.render(patternCtx);
          patternCtx.restore();
        }
      }
      var pattern = ctx.createPattern(patternCanvas, 'repeat');
      return pattern;
    }
  }]);
}(Element);
var MarkerElement = /*#__PURE__*/function (_Element4) {
  function MarkerElement() {
    var _this27;
    index_es_classCallCheck(this, MarkerElement);
    _this27 = _callSuper(this, MarkerElement, arguments);
    _this27.type = 'marker';
    return _this27;
  }
  _inherits(MarkerElement, _Element4);
  return _createClass(MarkerElement, [{
    key: "render",
    value: function render(ctx, point, angle) {
      if (!point) {
        return;
      }
      var x = point.x,
        y = point.y;
      var orient = this.getAttribute('orient').getString('auto');
      var markerUnits = this.getAttribute('markerUnits').getString('strokeWidth');
      ctx.translate(x, y);
      if (orient === 'auto') {
        ctx.rotate(angle);
      }
      if (markerUnits === 'strokeWidth') {
        ctx.scale(ctx.lineWidth, ctx.lineWidth);
      }
      ctx.save(); // render me using a temporary svg element

      var markerSvg = new SVGElement(this.document, null);
      markerSvg.type = this.type;
      markerSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
      markerSvg.attributes.refX = new Property(this.document, 'refX', this.getAttribute('refX').getValue());
      markerSvg.attributes.refY = new Property(this.document, 'refY', this.getAttribute('refY').getValue());
      markerSvg.attributes.width = new Property(this.document, 'width', this.getAttribute('markerWidth').getValue());
      markerSvg.attributes.height = new Property(this.document, 'height', this.getAttribute('markerHeight').getValue());
      markerSvg.attributes.overflow = new Property(this.document, 'overflow', this.getAttribute('overflow').getValue());
      markerSvg.attributes.fill = new Property(this.document, 'fill', this.getAttribute('fill').getColor('black'));
      markerSvg.attributes.stroke = new Property(this.document, 'stroke', this.getAttribute('stroke').getValue('none'));
      markerSvg.children = this.children;
      markerSvg.render(ctx);
      ctx.restore();
      if (markerUnits === 'strokeWidth') {
        ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
      }
      if (orient === 'auto') {
        ctx.rotate(-angle);
      }
      ctx.translate(-x, -y);
    }
  }]);
}(Element);
var DefsElement = /*#__PURE__*/function (_Element5) {
  function DefsElement() {
    var _this28;
    index_es_classCallCheck(this, DefsElement);
    _this28 = _callSuper(this, DefsElement, arguments);
    _this28.type = 'defs';
    return _this28;
  }
  _inherits(DefsElement, _Element5);
  return _createClass(DefsElement, [{
    key: "render",
    value: function render() {// NOOP
    }
  }]);
}(Element);
var GElement = /*#__PURE__*/function (_RenderedElement4) {
  function GElement() {
    var _this29;
    index_es_classCallCheck(this, GElement);
    _this29 = _callSuper(this, GElement, arguments);
    _this29.type = 'g';
    return _this29;
  }
  _inherits(GElement, _RenderedElement4);
  return _createClass(GElement, [{
    key: "getBoundingBox",
    value: function getBoundingBox(ctx) {
      var boundingBox = new BoundingBox();
      this.children.forEach(function (child) {
        boundingBox.addBoundingBox(child.getBoundingBox(ctx));
      });
      return boundingBox;
    }
  }]);
}(RenderedElement);
var GradientElement = /*#__PURE__*/function (_Element6) {
  function GradientElement(document, node, captureTextNodes) {
    var _this30;
    index_es_classCallCheck(this, GradientElement);
    _this30 = _callSuper(this, GradientElement, [document, node, captureTextNodes]);
    _this30.attributesToInherit = ['gradientUnits'];
    _this30.stops = [];
    var _this31 = _this30,
      stops = _this31.stops,
      children = _this31.children;
    children.forEach(function (child) {
      if (child.type === 'stop') {
        stops.push(child);
      }
    });
    return _this30;
  }
  _inherits(GradientElement, _Element6);
  return _createClass(GradientElement, [{
    key: "getGradientUnits",
    value: function getGradientUnits() {
      return this.getAttribute('gradientUnits').getString('objectBoundingBox');
    }
  }, {
    key: "createGradient",
    value: function createGradient(ctx, element, parentOpacityProp) {
      var _this32 = this;
      // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
      var stopsContainer = this;
      if (this.getHrefAttribute().hasValue()) {
        stopsContainer = this.getHrefAttribute().getDefinition();
        this.inheritStopContainer(stopsContainer);
      }
      var _stopsContainer = stopsContainer,
        stops = _stopsContainer.stops;
      var gradient = this.getGradient(ctx, element);
      if (!gradient) {
        return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
      }
      stops.forEach(function (stop) {
        gradient.addColorStop(stop.offset, _this32.addParentOpacity(parentOpacityProp, stop.color));
      });
      if (this.getAttribute('gradientTransform').hasValue()) {
        // render as transformed pattern on temporary canvas
        var document = this.document;
        var _document$screen = document.screen,
          MAX_VIRTUAL_PIXELS = _document$screen.MAX_VIRTUAL_PIXELS,
          viewPort = _document$screen.viewPort;
        var _viewPort$viewPorts = _slicedToArray(viewPort.viewPorts, 1),
          rootView = _viewPort$viewPorts[0];
        var rect = new RectElement(document, null);
        rect.attributes.x = new Property(document, 'x', -MAX_VIRTUAL_PIXELS / 3.0);
        rect.attributes.y = new Property(document, 'y', -MAX_VIRTUAL_PIXELS / 3.0);
        rect.attributes.width = new Property(document, 'width', MAX_VIRTUAL_PIXELS);
        rect.attributes.height = new Property(document, 'height', MAX_VIRTUAL_PIXELS);
        var group = new GElement(document, null);
        group.attributes.transform = new Property(document, 'transform', this.getAttribute('gradientTransform').getValue());
        group.children = [rect];
        var patternSvg = new SVGElement(document, null);
        patternSvg.attributes.x = new Property(document, 'x', 0);
        patternSvg.attributes.y = new Property(document, 'y', 0);
        patternSvg.attributes.width = new Property(document, 'width', rootView.width);
        patternSvg.attributes.height = new Property(document, 'height', rootView.height);
        patternSvg.children = [group];
        var patternCanvas = document.createCanvas(rootView.width, rootView.height);
        var patternCtx = patternCanvas.getContext('2d');
        patternCtx.fillStyle = gradient;
        patternSvg.render(patternCtx);
        return patternCtx.createPattern(patternCanvas, 'no-repeat');
      }
      return gradient;
    }
  }, {
    key: "inheritStopContainer",
    value: function inheritStopContainer(stopsContainer) {
      var _this33 = this;
      this.attributesToInherit.forEach(function (attributeToInherit) {
        if (!_this33.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) {
          _this33.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
        }
      });
    }
  }, {
    key: "addParentOpacity",
    value: function addParentOpacity(parentOpacityProp, color) {
      if (parentOpacityProp.hasValue()) {
        var colorProp = new Property(this.document, 'color', color);
        return colorProp.addOpacity(parentOpacityProp).getColor();
      }
      return color;
    }
  }]);
}(Element);
var LinearGradientElement = /*#__PURE__*/function (_GradientElement) {
  function LinearGradientElement(document, node, captureTextNodes) {
    var _this34;
    index_es_classCallCheck(this, LinearGradientElement);
    _this34 = _callSuper(this, LinearGradientElement, [document, node, captureTextNodes]);
    _this34.type = 'linearGradient';
    _this34.attributesToInherit.push('x1', 'y1', 'x2', 'y2');
    return _this34;
  }
  _inherits(LinearGradientElement, _GradientElement);
  return _createClass(LinearGradientElement, [{
    key: "getGradient",
    value: function getGradient(ctx, element) {
      var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
      var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;
      if (isBoundingBoxUnits && !boundingBox) {
        return null;
      }
      if (!this.getAttribute('x1').hasValue() && !this.getAttribute('y1').hasValue() && !this.getAttribute('x2').hasValue() && !this.getAttribute('y2').hasValue()) {
        this.getAttribute('x1', true).setValue(0);
        this.getAttribute('y1', true).setValue(0);
        this.getAttribute('x2', true).setValue(1);
        this.getAttribute('y2', true).setValue(0);
      }
      var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x1').getNumber() : this.getAttribute('x1').getPixels('x');
      var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y1').getNumber() : this.getAttribute('y1').getPixels('y');
      var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x2').getNumber() : this.getAttribute('x2').getPixels('x');
      var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y2').getNumber() : this.getAttribute('y2').getPixels('y');
      if (x1 === x2 && y1 === y2) {
        return null;
      }
      return ctx.createLinearGradient(x1, y1, x2, y2);
    }
  }]);
}(GradientElement);
var RadialGradientElement = /*#__PURE__*/function (_GradientElement2) {
  function RadialGradientElement(document, node, captureTextNodes) {
    var _this35;
    index_es_classCallCheck(this, RadialGradientElement);
    _this35 = _callSuper(this, RadialGradientElement, [document, node, captureTextNodes]);
    _this35.type = 'radialGradient';
    _this35.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr');
    return _this35;
  }
  _inherits(RadialGradientElement, _GradientElement2);
  return _createClass(RadialGradientElement, [{
    key: "getGradient",
    value: function getGradient(ctx, element) {
      var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
      var boundingBox = element.getBoundingBox(ctx);
      if (isBoundingBoxUnits && !boundingBox) {
        return null;
      }
      if (!this.getAttribute('cx').hasValue()) {
        this.getAttribute('cx', true).setValue('50%');
      }
      if (!this.getAttribute('cy').hasValue()) {
        this.getAttribute('cy', true).setValue('50%');
      }
      if (!this.getAttribute('r').hasValue()) {
        this.getAttribute('r', true).setValue('50%');
      }
      var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('cx').getNumber() : this.getAttribute('cx').getPixels('x');
      var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('cy').getNumber() : this.getAttribute('cy').getPixels('y');
      var fx = cx;
      var fy = cy;
      if (this.getAttribute('fx').hasValue()) {
        fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('fx').getNumber() : this.getAttribute('fx').getPixels('x');
      }
      if (this.getAttribute('fy').hasValue()) {
        fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('fy').getNumber() : this.getAttribute('fy').getPixels('y');
      }
      var r = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2.0 * this.getAttribute('r').getNumber() : this.getAttribute('r').getPixels();
      var fr = this.getAttribute('fr').getPixels();
      return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
    }
  }]);
}(GradientElement);
var StopElement = /*#__PURE__*/function (_Element7) {
  function StopElement(document, node, captureTextNodes) {
    var _this36;
    index_es_classCallCheck(this, StopElement);
    _this36 = _callSuper(this, StopElement, [document, node, captureTextNodes]);
    _this36.type = 'stop';
    var offset = Math.max(0, Math.min(1, _this36.getAttribute('offset').getNumber()));
    var stopOpacity = _this36.getStyle('stop-opacity');
    var stopColor = _this36.getStyle('stop-color', true);
    if (stopColor.getString() === '') {
      stopColor.setValue('#000');
    }
    if (stopOpacity.hasValue()) {
      stopColor = stopColor.addOpacity(stopOpacity);
    }
    _this36.offset = offset;
    _this36.color = stopColor.getColor();
    return _this36;
  }
  _inherits(StopElement, _Element7);
  return _createClass(StopElement);
}(Element);
var AnimateElement = /*#__PURE__*/function (_Element8) {
  function AnimateElement(document, node, captureTextNodes) {
    var _this37;
    index_es_classCallCheck(this, AnimateElement);
    _this37 = _callSuper(this, AnimateElement, [document, node, captureTextNodes]);
    _this37.type = 'animate';
    _this37.duration = 0;
    _this37.initialValue = null;
    _this37.initialUnits = '';
    _this37.removed = false;
    _this37.frozen = false;
    document.screen.animations.push(_this37);
    _this37.begin = _this37.getAttribute('begin').getMilliseconds();
    _this37.maxDuration = _this37.begin + _this37.getAttribute('dur').getMilliseconds();
    _this37.from = _this37.getAttribute('from');
    _this37.to = _this37.getAttribute('to');
    _this37.values = new Property(document, 'values', null);
    var valuesAttr = _this37.getAttribute('values');
    if (valuesAttr.hasValue()) {
      _this37.values.setValue(valuesAttr.getString().split(';'));
    }
    return _this37;
  }
  _inherits(AnimateElement, _Element8);
  return _createClass(AnimateElement, [{
    key: "getProperty",
    value: function getProperty() {
      var attributeType = this.getAttribute('attributeType').getString();
      var attributeName = this.getAttribute('attributeName').getString();
      if (attributeType === 'CSS') {
        return this.parent.getStyle(attributeName, true);
      }
      return this.parent.getAttribute(attributeName, true);
    }
  }, {
    key: "calcValue",
    value: function calcValue() {
      var initialUnits = this.initialUnits;
      var _this$getProgress = this.getProgress(),
        progress = _this$getProgress.progress,
        from = _this$getProgress.from,
        to = _this$getProgress.to; // tween value linearly

      var newValue = from.getNumber() + (to.getNumber() - from.getNumber()) * progress;
      if (initialUnits === '%') {
        newValue *= 100.0; // numValue() returns 0-1 whereas properties are 0-100
      }
      return "".concat(newValue).concat(initialUnits);
    }
  }, {
    key: "update",
    value: function update(delta) {
      var parent = this.parent;
      var prop = this.getProperty(); // set initial value

      if (!this.initialValue) {
        this.initialValue = prop.getString();
        this.initialUnits = prop.getUnits();
      } // if we're past the end time

      if (this.duration > this.maxDuration) {
        var fill = this.getAttribute('fill').getString('remove'); // loop for indefinitely repeating animations

        if (this.getAttribute('repeatCount').getString() === 'indefinite' || this.getAttribute('repeatDur').getString() === 'indefinite') {
          this.duration = 0;
        } else if (fill === 'freeze' && !this.frozen) {
          this.frozen = true;
          parent.animationFrozen = true;
          parent.animationFrozenValue = prop.getString();
        } else if (fill === 'remove' && !this.removed) {
          this.removed = true;
          prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
          return true;
        }
        return false;
      }
      this.duration += delta; // if we're past the begin time

      var updated = false;
      if (this.begin < this.duration) {
        var newValue = this.calcValue(); // tween

        var typeAttr = this.getAttribute('type');
        if (typeAttr.hasValue()) {
          // for transform, etc.
          var type = typeAttr.getString();
          newValue = "".concat(type, "(").concat(newValue, ")");
        }
        prop.setValue(newValue);
        updated = true;
      }
      return updated;
    }
  }, {
    key: "getProgress",
    value: function getProgress() {
      var document = this.document,
        values = this.values;
      var result = {
        progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
      };
      if (values.hasValue()) {
        var p = result.progress * (values.getValue().length - 1);
        var lb = Math.floor(p);
        var ub = Math.ceil(p);
        result.from = new Property(document, 'from', parseFloat(values.getValue()[lb]));
        result.to = new Property(document, 'to', parseFloat(values.getValue()[ub]));
        result.progress = (p - lb) / (ub - lb);
      } else {
        result.from = this.from;
        result.to = this.to;
      }
      return result;
    }
  }]);
}(Element);
var AnimateColorElement = /*#__PURE__*/function (_AnimateElement) {
  function AnimateColorElement() {
    var _this38;
    index_es_classCallCheck(this, AnimateColorElement);
    _this38 = _callSuper(this, AnimateColorElement, arguments);
    _this38.type = 'animateColor';
    return _this38;
  }
  _inherits(AnimateColorElement, _AnimateElement);
  return _createClass(AnimateColorElement, [{
    key: "calcValue",
    value: function calcValue() {
      var _this$getProgress2 = this.getProgress(),
        progress = _this$getProgress2.progress,
        from = _this$getProgress2.from,
        to = _this$getProgress2.to;
      var colorFrom = new rgbcolor(from.getColor());
      var colorTo = new rgbcolor(to.getColor());
      if (colorFrom.ok && colorTo.ok) {
        // tween color linearly
        var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
        var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
        var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress; // ? alpha

        return "rgb(".concat(Math.floor(r), ", ").concat(Math.floor(g), ", ").concat(Math.floor(b), ")");
      }
      return this.getAttribute('from').getColor();
    }
  }]);
}(AnimateElement);
var AnimateTransformElement = /*#__PURE__*/function (_AnimateElement2) {
  function AnimateTransformElement() {
    var _this39;
    index_es_classCallCheck(this, AnimateTransformElement);
    _this39 = _callSuper(this, AnimateTransformElement, arguments);
    _this39.type = 'animateTransform';
    return _this39;
  }
  _inherits(AnimateTransformElement, _AnimateElement2);
  return _createClass(AnimateTransformElement, [{
    key: "calcValue",
    value: function calcValue() {
      var _this$getProgress3 = this.getProgress(),
        progress = _this$getProgress3.progress,
        from = _this$getProgress3.from,
        to = _this$getProgress3.to; // tween value linearly

      var transformFrom = toNumbers(from.getString());
      var transformTo = toNumbers(to.getString());
      var newValue = transformFrom.map(function (from, i) {
        var to = transformTo[i];
        return from + (to - from) * progress;
      }).join(' ');
      return newValue;
    }
  }]);
}(AnimateElement);
var FontElement = /*#__PURE__*/function (_Element9) {
  function FontElement(document, node, captureTextNodes) {
    var _this40;
    index_es_classCallCheck(this, FontElement);
    _this40 = _callSuper(this, FontElement, [document, node, captureTextNodes]);
    _this40.type = 'font';
    _this40.glyphs = {};
    _this40.horizAdvX = _this40.getAttribute('horiz-adv-x').getNumber();
    var definitions = document.definitions;
    var _this41 = _this40,
      children = _this41.children;
    var _iterator = _createForOfIteratorHelper(children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        switch (child.type) {
          case 'font-face':
            {
              _this40.fontFace = child;
              var fontFamilyStyle = child.getStyle('font-family');
              if (fontFamilyStyle.hasValue()) {
                definitions[fontFamilyStyle.getString()] = _this40;
              }
              break;
            }
          case 'missing-glyph':
            _this40.missingGlyph = child;
            break;
          case 'glyph':
            {
              var glyph = child;
              if (glyph.arabicForm) {
                _this40.isRTL = true;
                _this40.isArabic = true;
                if (typeof _this40.glyphs[glyph.unicode] === 'undefined') {
                  _this40.glyphs[glyph.unicode] = {};
                }
                _this40.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
              } else {
                _this40.glyphs[glyph.unicode] = glyph;
              }
              break;
            }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return _this40;
  }
  _inherits(FontElement, _Element9);
  return _createClass(FontElement, [{
    key: "render",
    value: function render() {// NO RENDER
    }
  }]);
}(Element);
var FontFaceElement = /*#__PURE__*/function (_Element10) {
  function FontFaceElement(document, node, captureTextNodes) {
    var _this42;
    index_es_classCallCheck(this, FontFaceElement);
    _this42 = _callSuper(this, FontFaceElement, [document, node, captureTextNodes]);
    _this42.type = 'font-face';
    _this42.ascent = _this42.getAttribute('ascent').getNumber();
    _this42.descent = _this42.getAttribute('descent').getNumber();
    _this42.unitsPerEm = _this42.getAttribute('units-per-em').getNumber();
    return _this42;
  }
  _inherits(FontFaceElement, _Element10);
  return _createClass(FontFaceElement);
}(Element);
var MissingGlyphElement = /*#__PURE__*/function (_PathElement7) {
  function MissingGlyphElement() {
    var _this43;
    index_es_classCallCheck(this, MissingGlyphElement);
    _this43 = _callSuper(this, MissingGlyphElement, arguments);
    _this43.type = 'missing-glyph';
    _this43.horizAdvX = 0;
    return _this43;
  }
  _inherits(MissingGlyphElement, _PathElement7);
  return _createClass(MissingGlyphElement);
}(PathElement);
var TRefElement = /*#__PURE__*/function (_TextElement2) {
  function TRefElement() {
    var _this44;
    index_es_classCallCheck(this, TRefElement);
    _this44 = _callSuper(this, TRefElement, arguments);
    _this44.type = 'tref';
    return _this44;
  }
  _inherits(TRefElement, _TextElement2);
  return _createClass(TRefElement, [{
    key: "getText",
    value: function getText() {
      var element = this.getHrefAttribute().getDefinition();
      if (element) {
        var firstChild = element.children[0];
        if (firstChild) {
          return firstChild.getText();
        }
      }
      return '';
    }
  }]);
}(TextElement);
var AElement = /*#__PURE__*/function (_TextElement3) {
  function AElement(document, node, captureTextNodes) {
    var _this45;
    index_es_classCallCheck(this, AElement);
    _this45 = _callSuper(this, AElement, [document, node, captureTextNodes]);
    _this45.type = 'a';
    var childNodes = node.childNodes;
    var firstChild = childNodes[0];
    var hasText = childNodes.length > 0 && Array.from(childNodes).every(function (node) {
      return node.nodeType === 3;
    });
    _this45.hasText = hasText;
    _this45.text = hasText ? _this45.getTextFromNode(firstChild) : '';
    return _this45;
  }
  _inherits(AElement, _TextElement3);
  return _createClass(AElement, [{
    key: "getText",
    value: function getText() {
      return this.text;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      if (this.hasText) {
        // render as text element
        _superPropGet(AElement, "renderChildren", this, 3)([ctx]);
        var document = this.document,
          x = this.x,
          y = this.y;
        var mouse = document.screen.mouse;
        var fontSize = new Property(document, 'fontSize', Font.parse(document.ctx.font).fontSize); // Do not calc bounding box if mouse is not working.

        if (mouse.isWorking()) {
          mouse.checkBoundingBox(this, new BoundingBox(x, y - fontSize.getPixels('y'), x + this.measureText(ctx), y));
        }
      } else if (this.children.length > 0) {
        // render as temporary group
        var g = new GElement(this.document, null);
        g.children = this.children;
        g.parent = this;
        g.render(ctx);
      }
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var window = this.document.window;
      if (window) {
        window.open(this.getHrefAttribute().getString());
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove() {
      var ctx = this.document.ctx;
      ctx.canvas.style.cursor = 'pointer';
    }
  }]);
}(TextElement);
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var TextPathElement = /*#__PURE__*/function (_TextElement4) {
  function TextPathElement(document, node, captureTextNodes) {
    var _this46;
    index_es_classCallCheck(this, TextPathElement);
    _this46 = _callSuper(this, TextPathElement, [document, node, captureTextNodes]);
    _this46.type = 'textPath';
    _this46.textWidth = 0;
    _this46.textHeight = 0;
    _this46.pathLength = -1;
    _this46.glyphInfo = null;
    _this46.letterSpacingCache = [];
    _this46.measuresCache = new Map([['', 0]]);
    var pathElement = _this46.getHrefAttribute().getDefinition();
    _this46.text = _this46.getTextFromNode();
    _this46.dataArray = _this46.parsePathData(pathElement);
    return _this46;
  }
  _inherits(TextPathElement, _TextElement4);
  return _createClass(TextPathElement, [{
    key: "getText",
    value: function getText() {
      return this.text;
    }
  }, {
    key: "path",
    value: function path(ctx) {
      var dataArray = this.dataArray;
      if (ctx) {
        ctx.beginPath();
      }
      dataArray.forEach(function (_ref) {
        var type = _ref.type,
          points = _ref.points;
        switch (type) {
          case PathParser.LINE_TO:
            if (ctx) {
              ctx.lineTo(points[0], points[1]);
            }
            break;
          case PathParser.MOVE_TO:
            if (ctx) {
              ctx.moveTo(points[0], points[1]);
            }
            break;
          case PathParser.CURVE_TO:
            if (ctx) {
              ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
            }
            break;
          case PathParser.QUAD_TO:
            if (ctx) {
              ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
            }
            break;
          case PathParser.ARC:
            {
              var _points2 = _slicedToArray(points, 8),
                cx = _points2[0],
                cy = _points2[1],
                rx = _points2[2],
                ry = _points2[3],
                theta = _points2[4],
                dTheta = _points2[5],
                psi = _points2[6],
                fs = _points2[7];
              var r = rx > ry ? rx : ry;
              var scaleX = rx > ry ? 1 : rx / ry;
              var scaleY = rx > ry ? ry / rx : 1;
              if (ctx) {
                ctx.translate(cx, cy);
                ctx.rotate(psi);
                ctx.scale(scaleX, scaleY);
                ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs));
                ctx.scale(1 / scaleX, 1 / scaleY);
                ctx.rotate(-psi);
                ctx.translate(-cx, -cy);
              }
              break;
            }
          case PathParser.CLOSE_PATH:
            if (ctx) {
              ctx.closePath();
            }
            break;
        }
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      this.setTextData(ctx);
      ctx.save();
      var textDecoration = this.parent.getStyle('text-decoration').getString();
      var fontSize = this.getFontSize();
      var glyphInfo = this.glyphInfo;
      var fill = ctx.fillStyle;
      if (textDecoration === 'underline') {
        ctx.beginPath();
      }
      glyphInfo.forEach(function (glyph, i) {
        var p0 = glyph.p0,
          p1 = glyph.p1,
          rotation = glyph.rotation,
          partialText = glyph.text;
        ctx.save();
        ctx.translate(p0.x, p0.y);
        ctx.rotate(rotation);
        if (ctx.fillStyle) {
          ctx.fillText(partialText, 0, 0);
        }
        if (ctx.strokeStyle) {
          ctx.strokeText(partialText, 0, 0);
        }
        ctx.restore();
        if (textDecoration === 'underline') {
          if (i === 0) {
            ctx.moveTo(p0.x, p0.y + fontSize / 8);
          }
          ctx.lineTo(p1.x, p1.y + fontSize / 5);
        } // // To assist with debugging visually, uncomment following
        //
        // ctx.beginPath();
        // if (i % 2)
        // 	ctx.strokeStyle = 'red';
        // else
        // 	ctx.strokeStyle = 'green';
        // ctx.moveTo(p0.x, p0.y);
        // ctx.lineTo(p1.x, p1.y);
        // ctx.stroke();
        // ctx.closePath();
      });
      if (textDecoration === 'underline') {
        ctx.lineWidth = fontSize / 20;
        ctx.strokeStyle = fill;
        ctx.stroke();
        ctx.closePath();
      }
      ctx.restore();
    }
  }, {
    key: "getLetterSpacingAt",
    value: function getLetterSpacingAt() {
      var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.letterSpacingCache[idx] || 0;
    }
  }, {
    key: "findSegmentToFitChar",
    value: function findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, dy, c, charI) {
      var offset = inputOffset;
      var glyphWidth = this.measureText(ctx, c);
      if (c === ' ' && anchor === 'justify' && textFullWidth < fullPathWidth) {
        glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
      }
      if (charI > -1) {
        offset += this.getLetterSpacingAt(charI);
      }
      var splineStep = this.textHeight / 20;
      var p0 = this.getEquidistantPointOnPath(offset, splineStep, 0);
      var p1 = this.getEquidistantPointOnPath(offset + glyphWidth, splineStep, 0);
      var segment = {
        p0: p0,
        p1: p1
      };
      var rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;
      if (dy) {
        var dyX = Math.cos(Math.PI / 2 + rotation) * dy;
        var dyY = Math.cos(-rotation) * dy;
        segment.p0 = _objectSpread$2(_objectSpread$2({}, p0), {}, {
          x: p0.x + dyX,
          y: p0.y + dyY
        });
        segment.p1 = _objectSpread$2(_objectSpread$2({}, p1), {}, {
          x: p1.x + dyX,
          y: p1.y + dyY
        });
      }
      offset += glyphWidth;
      return {
        offset: offset,
        segment: segment,
        rotation: rotation
      };
    }
  }, {
    key: "measureText",
    value: function measureText(ctx, text) {
      var measuresCache = this.measuresCache;
      var targetText = text || this.getText();
      if (measuresCache.has(targetText)) {
        return measuresCache.get(targetText);
      }
      var measure = this.measureTargetText(ctx, targetText);
      measuresCache.set(targetText, measure);
      return measure;
    } // This method supposes what all custom fonts already loaded.
    // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
    // You need to call this method manually to update glyphs cache.
  }, {
    key: "setTextData",
    value: function setTextData(ctx) {
      var _this47 = this;
      if (this.glyphInfo) {
        return;
      }
      var renderText = this.getText();
      var chars = renderText.split('');
      var spacesNumber = renderText.split(' ').length - 1;
      var dx = this.parent.getAttribute('dx').split().map(function (_) {
        return _.getPixels('x');
      });
      var dy = this.parent.getAttribute('dy').getPixels('y');
      var anchor = this.parent.getStyle('text-anchor').getString('start');
      var thisSpacing = this.getStyle('letter-spacing');
      var parentSpacing = this.parent.getStyle('letter-spacing');
      var letterSpacing = 0;
      if (!thisSpacing.hasValue() || thisSpacing.getValue() === 'inherit') {
        letterSpacing = parentSpacing.getPixels();
      } else if (thisSpacing.hasValue()) {
        if (thisSpacing.getValue() !== 'initial' && thisSpacing.getValue() !== 'unset') {
          letterSpacing = thisSpacing.getPixels();
        }
      } // fill letter-spacing cache

      var letterSpacingCache = [];
      var textLen = renderText.length;
      this.letterSpacingCache = letterSpacingCache;
      for (var i = 0; i < textLen; i++) {
        letterSpacingCache.push(typeof dx[i] !== 'undefined' ? dx[i] : letterSpacing);
      }
      var dxSum = letterSpacingCache.reduce(function (acc, cur, i) {
        return i === 0 ? 0 : acc + cur || 0;
      }, 0);
      var textWidth = this.measureText(ctx);
      var textFullWidth = Math.max(textWidth + dxSum, 0);
      this.textWidth = textWidth;
      this.textHeight = this.getFontSize();
      this.glyphInfo = [];
      var fullPathWidth = this.getPathLength();
      var startOffset = this.getStyle('startOffset').getNumber(0) * fullPathWidth;
      var offset = 0;
      if (anchor === 'middle' || anchor === 'center') {
        offset = -textFullWidth / 2;
      }
      if (anchor === 'end' || anchor === 'right') {
        offset = -textFullWidth;
      }
      offset += startOffset;
      chars.forEach(function (_char2, i) {
        // Find such segment what distance between p0 and p1 is approx. width of glyph
        var _this47$findSegmentTo = _this47.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, dy, _char2, i),
          nextOffset = _this47$findSegmentTo.offset,
          segment = _this47$findSegmentTo.segment,
          rotation = _this47$findSegmentTo.rotation;
        offset = nextOffset;
        if (!segment.p0 || !segment.p1) {
          return;
        } // const width = this.getLineLength(
        // 	segment.p0.x,
        // 	segment.p0.y,
        // 	segment.p1.x,
        // 	segment.p1.y
        // );
        // Note: Since glyphs are rendered one at a time, any kerning pair data built into the font will not be used.
        // Can foresee having a rough pair table built in that the developer can override as needed.
        // Or use "dx" attribute of the <text> node as a naive replacement
        // const kern = 0;
        // placeholder for future implementation
        // const midpoint = this.getPointOnLine(
        // 	kern + width / 2.0,
        // 	segment.p0.x, segment.p0.y, segment.p1.x, segment.p1.y
        // );

        _this47.glyphInfo.push({
          // transposeX: midpoint.x,
          // transposeY: midpoint.y,
          text: chars[i],
          p0: segment.p0,
          p1: segment.p1,
          rotation: rotation
        });
      });
    }
  }, {
    key: "parsePathData",
    value: function parsePathData(path) {
      this.pathLength = -1; // reset path length

      if (!path) {
        return [];
      }
      var pathCommands = [];
      var pathParser = path.pathParser;
      pathParser.reset(); // convert l, H, h, V, and v to L

      while (!pathParser.isEnd()) {
        var current = pathParser.current;
        var startX = current ? current.x : 0;
        var startY = current ? current.y : 0;
        var command = pathParser.next();
        var nextCommandType = command.type;
        var points = [];
        switch (command.type) {
          case PathParser.MOVE_TO:
            this.pathM(pathParser, points);
            break;
          case PathParser.LINE_TO:
            nextCommandType = this.pathL(pathParser, points);
            break;
          case PathParser.HORIZ_LINE_TO:
            nextCommandType = this.pathH(pathParser, points);
            break;
          case PathParser.VERT_LINE_TO:
            nextCommandType = this.pathV(pathParser, points);
            break;
          case PathParser.CURVE_TO:
            this.pathC(pathParser, points);
            break;
          case PathParser.SMOOTH_CURVE_TO:
            nextCommandType = this.pathS(pathParser, points);
            break;
          case PathParser.QUAD_TO:
            this.pathQ(pathParser, points);
            break;
          case PathParser.SMOOTH_QUAD_TO:
            nextCommandType = this.pathT(pathParser, points);
            break;
          case PathParser.ARC:
            points = this.pathA(pathParser);
            break;
          case PathParser.CLOSE_PATH:
            PathElement.pathZ(pathParser);
            break;
        }
        if (command.type !== PathParser.CLOSE_PATH) {
          pathCommands.push({
            type: nextCommandType,
            points: points,
            start: {
              x: startX,
              y: startY
            },
            pathLength: this.calcLength(startX, startY, nextCommandType, points)
          });
        } else {
          pathCommands.push({
            type: PathParser.CLOSE_PATH,
            points: [],
            pathLength: 0
          });
        }
      }
      return pathCommands;
    }
  }, {
    key: "pathM",
    value: function pathM(pathParser, points) {
      var _PathElement$pathM$po = PathElement.pathM(pathParser).point,
        x = _PathElement$pathM$po.x,
        y = _PathElement$pathM$po.y;
      points.push(x, y);
    }
  }, {
    key: "pathL",
    value: function pathL(pathParser, points) {
      var _PathElement$pathL$po = PathElement.pathL(pathParser).point,
        x = _PathElement$pathL$po.x,
        y = _PathElement$pathL$po.y;
      points.push(x, y);
      return PathParser.LINE_TO;
    }
  }, {
    key: "pathH",
    value: function pathH(pathParser, points) {
      var _PathElement$pathH$po = PathElement.pathH(pathParser).point,
        x = _PathElement$pathH$po.x,
        y = _PathElement$pathH$po.y;
      points.push(x, y);
      return PathParser.LINE_TO;
    }
  }, {
    key: "pathV",
    value: function pathV(pathParser, points) {
      var _PathElement$pathV$po = PathElement.pathV(pathParser).point,
        x = _PathElement$pathV$po.x,
        y = _PathElement$pathV$po.y;
      points.push(x, y);
      return PathParser.LINE_TO;
    }
  }, {
    key: "pathC",
    value: function pathC(pathParser, points) {
      var _PathElement$pathC2 = PathElement.pathC(pathParser),
        point = _PathElement$pathC2.point,
        controlPoint = _PathElement$pathC2.controlPoint,
        currentPoint = _PathElement$pathC2.currentPoint;
      points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
  }, {
    key: "pathS",
    value: function pathS(pathParser, points) {
      var _PathElement$pathS2 = PathElement.pathS(pathParser),
        point = _PathElement$pathS2.point,
        controlPoint = _PathElement$pathS2.controlPoint,
        currentPoint = _PathElement$pathS2.currentPoint;
      points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      return PathParser.CURVE_TO;
    }
  }, {
    key: "pathQ",
    value: function pathQ(pathParser, points) {
      var _PathElement$pathQ2 = PathElement.pathQ(pathParser),
        controlPoint = _PathElement$pathQ2.controlPoint,
        currentPoint = _PathElement$pathQ2.currentPoint;
      points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
  }, {
    key: "pathT",
    value: function pathT(pathParser, points) {
      var _PathElement$pathT2 = PathElement.pathT(pathParser),
        controlPoint = _PathElement$pathT2.controlPoint,
        currentPoint = _PathElement$pathT2.currentPoint;
      points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      return PathParser.QUAD_TO;
    }
  }, {
    key: "pathA",
    value: function pathA(pathParser) {
      var _PathElement$pathA2 = PathElement.pathA(pathParser),
        rX = _PathElement$pathA2.rX,
        rY = _PathElement$pathA2.rY,
        sweepFlag = _PathElement$pathA2.sweepFlag,
        xAxisRotation = _PathElement$pathA2.xAxisRotation,
        centp = _PathElement$pathA2.centp,
        a1 = _PathElement$pathA2.a1,
        ad = _PathElement$pathA2.ad;
      if (sweepFlag === 0 && ad > 0) {
        ad -= 2 * Math.PI;
      }
      if (sweepFlag === 1 && ad < 0) {
        ad += 2 * Math.PI;
      }
      return [centp.x, centp.y, rX, rY, a1, ad, xAxisRotation, sweepFlag];
    }
  }, {
    key: "calcLength",
    value: function calcLength(x, y, commandType, points) {
      var len = 0;
      var p1 = null;
      var p2 = null;
      var t = 0;
      switch (commandType) {
        case PathParser.LINE_TO:
          return this.getLineLength(x, y, points[0], points[1]);
        case PathParser.CURVE_TO:
          // Approximates by breaking curve into 100 line segments
          len = 0.0;
          p1 = this.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
          for (t = 0.01; t <= 1; t += 0.01) {
            p2 = this.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
          return len;
        case PathParser.QUAD_TO:
          // Approximates by breaking curve into 100 line segments
          len = 0.0;
          p1 = this.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
          for (t = 0.01; t <= 1; t += 0.01) {
            p2 = this.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
          return len;
        case PathParser.ARC:
          {
            // Approximates by breaking curve into line segments
            len = 0.0;
            var start = points[4]; // 4 = theta

            var dTheta = points[5]; // 5 = dTheta

            var end = points[4] + dTheta;
            var inc = Math.PI / 180.0; // 1 degree resolution

            if (Math.abs(start - end) < inc) {
              inc = Math.abs(start - end);
            } // Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi

            p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
            if (dTheta < 0) {
              // clockwise
              for (t = start - inc; t > end; t -= inc) {
                p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                p1 = p2;
              }
            } else {
              // counter-clockwise
              for (t = start + inc; t < end; t += inc) {
                p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                p1 = p2;
              }
            }
            p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
            return len;
          }
      }
      return 0;
    }
  }, {
    key: "getPointOnLine",
    value: function getPointOnLine(dist, p1x, p1y, p2x, p2y) {
      var fromX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : p1x;
      var fromY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : p1y;
      var m = (p2y - p1y) / (p2x - p1x + PSEUDO_ZERO);
      var run = Math.sqrt(dist * dist / (1 + m * m));
      if (p2x < p1x) {
        run *= -1;
      }
      var rise = m * run;
      var pt = null;
      if (p2x === p1x) {
        // vertical line
        pt = {
          x: fromX,
          y: fromY + rise
        };
      } else if ((fromY - p1y) / (fromX - p1x + PSEUDO_ZERO) === m) {
        pt = {
          x: fromX + run,
          y: fromY + rise
        };
      } else {
        var ix = 0;
        var iy = 0;
        var len = this.getLineLength(p1x, p1y, p2x, p2y);
        if (len < PSEUDO_ZERO) {
          return null;
        }
        var u = (fromX - p1x) * (p2x - p1x) + (fromY - p1y) * (p2y - p1y);
        u /= len * len;
        ix = p1x + u * (p2x - p1x);
        iy = p1y + u * (p2y - p1y);
        var pRise = this.getLineLength(fromX, fromY, ix, iy);
        var pRun = Math.sqrt(dist * dist - pRise * pRise);
        run = Math.sqrt(pRun * pRun / (1 + m * m));
        if (p2x < p1x) {
          run *= -1;
        }
        rise = m * run;
        pt = {
          x: ix + run,
          y: iy + rise
        };
      }
      return pt;
    }
  }, {
    key: "getPointOnPath",
    value: function getPointOnPath(distance) {
      var fullLen = this.getPathLength();
      var cumulativePathLength = 0;
      var p = null;
      if (distance < -0.00005 || distance - 0.00005 > fullLen) {
        return null;
      }
      var dataArray = this.dataArray;
      var _iterator2 = _createForOfIteratorHelper(dataArray),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var command = _step2.value;
          if (command && (command.pathLength < 0.00005 || cumulativePathLength + command.pathLength + 0.00005 < distance)) {
            cumulativePathLength += command.pathLength;
            continue;
          }
          var delta = distance - cumulativePathLength;
          var currentT = 0;
          switch (command.type) {
            case PathParser.LINE_TO:
              p = this.getPointOnLine(delta, command.start.x, command.start.y, command.points[0], command.points[1], command.start.x, command.start.y);
              break;
            case PathParser.ARC:
              {
                var start = command.points[4]; // 4 = theta

                var dTheta = command.points[5]; // 5 = dTheta

                var end = command.points[4] + dTheta;
                currentT = start + delta / command.pathLength * dTheta;
                if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) {
                  break;
                }
                p = this.getPointOnEllipticalArc(command.points[0], command.points[1], command.points[2], command.points[3], currentT, command.points[6]);
                break;
              }
            case PathParser.CURVE_TO:
              currentT = delta / command.pathLength;
              if (currentT > 1) {
                currentT = 1;
              }
              p = this.getPointOnCubicBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3], command.points[4], command.points[5]);
              break;
            case PathParser.QUAD_TO:
              currentT = delta / command.pathLength;
              if (currentT > 1) {
                currentT = 1;
              }
              p = this.getPointOnQuadraticBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3]);
              break;
          }
          if (p) {
            return p;
          }
          break;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return null;
    }
  }, {
    key: "getLineLength",
    value: function getLineLength(x1, y1, x2, y2) {
      return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
  }, {
    key: "getPathLength",
    value: function getPathLength() {
      if (this.pathLength === -1) {
        this.pathLength = this.dataArray.reduce(function (length, command) {
          return command.pathLength > 0 ? length + command.pathLength : length;
        }, 0);
      }
      return this.pathLength;
    }
  }, {
    key: "getPointOnCubicBezier",
    value: function getPointOnCubicBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
      var x = p4x * CB1(pct) + p3x * CB2(pct) + p2x * CB3(pct) + p1x * CB4(pct);
      var y = p4y * CB1(pct) + p3y * CB2(pct) + p2y * CB3(pct) + p1y * CB4(pct);
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getPointOnQuadraticBezier",
    value: function getPointOnQuadraticBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y) {
      var x = p3x * QB1(pct) + p2x * QB2(pct) + p1x * QB3(pct);
      var y = p3y * QB1(pct) + p2y * QB2(pct) + p1y * QB3(pct);
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getPointOnEllipticalArc",
    value: function getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
      var cosPsi = Math.cos(psi);
      var sinPsi = Math.sin(psi);
      var pt = {
        x: rx * Math.cos(theta),
        y: ry * Math.sin(theta)
      };
      return {
        x: cx + (pt.x * cosPsi - pt.y * sinPsi),
        y: cy + (pt.x * sinPsi + pt.y * cosPsi)
      };
    } // TODO need some optimisations. possibly build cache only for curved segments?
  }, {
    key: "buildEquidistantCache",
    value: function buildEquidistantCache(inputStep, inputPrecision) {
      var fullLen = this.getPathLength();
      var precision = inputPrecision || 0.25; // accuracy vs performance

      var step = inputStep || fullLen / 100;
      if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
        // Prepare cache
        this.equidistantCache = {
          step: step,
          precision: precision,
          points: []
        }; // Calculate points

        var s = 0;
        for (var l = 0; l <= fullLen; l += precision) {
          var p0 = this.getPointOnPath(l);
          var p1 = this.getPointOnPath(l + precision);
          if (!p0 || !p1) {
            continue;
          }
          s += this.getLineLength(p0.x, p0.y, p1.x, p1.y);
          if (s >= step) {
            this.equidistantCache.points.push({
              x: p0.x,
              y: p0.y,
              distance: l
            });
            s -= step;
          }
        }
      }
    }
  }, {
    key: "getEquidistantPointOnPath",
    value: function getEquidistantPointOnPath(targetDistance, step, precision) {
      this.buildEquidistantCache(step, precision);
      if (targetDistance < 0 || targetDistance - this.getPathLength() > 0.00005) {
        return null;
      }
      var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
      return this.equidistantCache.points[idx] || null;
    }
  }]);
}(TextElement);
var dataUriRegex = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
var ImageElement = /*#__PURE__*/function (_RenderedElement5) {
  function ImageElement(document, node, captureTextNodes) {
    var _this48;
    index_es_classCallCheck(this, ImageElement);
    _this48 = _callSuper(this, ImageElement, [document, node, captureTextNodes]);
    _this48.type = 'image';
    _this48.loaded = false;
    var href = _this48.getHrefAttribute().getString();
    if (!href) {
      return _possibleConstructorReturn(_this48);
    }
    var isSvg = href.endsWith('.svg') || /^\s*data:image\/svg\+xml/i.test(href);
    document.images.push(_this48);
    if (!isSvg) {
      void _this48.loadImage(href);
    } else {
      void _this48.loadSvg(href);
    }
    _this48.isSvg = isSvg;
    return _this48;
  }
  _inherits(ImageElement, _RenderedElement5);
  return _createClass(ImageElement, [{
    key: "loadImage",
    value: function loadImage(href) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var image;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _this.document.createImage(href);
            case 3:
              image = _context4.sent;
              _this.image = image;
              _context4.next = 10;
              break;
            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.error("Error while loading image \"".concat(href, "\":"), _context4.t0);
            case 10:
              _this.loaded = true;
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    }
  }, {
    key: "loadSvg",
    value: function loadSvg(href) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var match, data, response, svg;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              match = dataUriRegex.exec(href);
              if (!match) {
                _context5.next = 6;
                break;
              }
              data = match[5];
              if (match[4] === 'base64') {
                _this2.image = atob(data);
              } else {
                _this2.image = decodeURIComponent(data);
              }
              _context5.next = 19;
              break;
            case 6:
              _context5.prev = 6;
              _context5.next = 9;
              return _this2.document.fetch(href);
            case 9:
              response = _context5.sent;
              _context5.next = 12;
              return response.text();
            case 12:
              svg = _context5.sent;
              _this2.image = svg;
              _context5.next = 19;
              break;
            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](6);
              console.error("Error while loading image \"".concat(href, "\":"), _context5.t0);
            case 19:
              _this2.loaded = true;
            case 20:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[6, 16]]);
      }))();
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      var document = this.document,
        image = this.image,
        loaded = this.loaded;
      var x = this.getAttribute('x').getPixels('x');
      var y = this.getAttribute('y').getPixels('y');
      var width = this.getStyle('width').getPixels('x');
      var height = this.getStyle('height').getPixels('y');
      if (!loaded || !image || !width || !height) {
        return;
      }
      ctx.save();
      ctx.translate(x, y);
      if (this.isSvg) {
        var subDocument = document.canvg.forkString(ctx, this.image, {
          ignoreMouse: true,
          ignoreAnimation: true,
          ignoreDimensions: true,
          ignoreClear: true,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: width,
          scaleHeight: height
        });
        subDocument.document.documentElement.parent = this;
        void subDocument.render();
      } else {
        var _image = this.image;
        document.setViewBox({
          ctx: ctx,
          aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
          width: width,
          desiredWidth: _image.width,
          height: height,
          desiredHeight: _image.height
        });
        if (this.loaded) {
          if (typeof _image.complete === 'undefined' || _image.complete) {
            ctx.drawImage(_image, 0, 0);
          }
        }
      }
      ctx.restore();
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox() {
      var x = this.getAttribute('x').getPixels('x');
      var y = this.getAttribute('y').getPixels('y');
      var width = this.getStyle('width').getPixels('x');
      var height = this.getStyle('height').getPixels('y');
      return new BoundingBox(x, y, x + width, y + height);
    }
  }]);
}(RenderedElement);
var SymbolElement = /*#__PURE__*/function (_RenderedElement6) {
  function SymbolElement() {
    var _this49;
    index_es_classCallCheck(this, SymbolElement);
    _this49 = _callSuper(this, SymbolElement, arguments);
    _this49.type = 'symbol';
    return _this49;
  }
  _inherits(SymbolElement, _RenderedElement6);
  return _createClass(SymbolElement, [{
    key: "render",
    value: function render(_) {// NO RENDER
    }
  }]);
}(RenderedElement);
var SVGFontLoader = /*#__PURE__*/function () {
  function SVGFontLoader(document) {
    index_es_classCallCheck(this, SVGFontLoader);
    this.document = document;
    this.loaded = false;
    document.fonts.push(this);
  }
  return _createClass(SVGFontLoader, [{
    key: "load",
    value: function load(fontFamily, url) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var document, svgDocument, fonts;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              document = _this.document;
              _context6.next = 4;
              return document.canvg.parser.load(url);
            case 4:
              svgDocument = _context6.sent;
              fonts = svgDocument.getElementsByTagName('font');
              Array.from(fonts).forEach(function (fontNode) {
                var font = document.createElement(fontNode);
                document.definitions[fontFamily] = font;
              });
              _context6.next = 12;
              break;
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](0);
              console.error("Error while loading font \"".concat(url, "\":"), _context6.t0);
            case 12:
              _this.loaded = true;
            case 13:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 9]]);
      }))();
    }
  }]);
}();
var StyleElement = /*#__PURE__*/function (_Element11) {
  function StyleElement(document, node, captureTextNodes) {
    var _this50;
    index_es_classCallCheck(this, StyleElement);
    _this50 = _callSuper(this, StyleElement, [document, node, captureTextNodes]);
    _this50.type = 'style';
    var css = compressSpaces(Array.from(node.childNodes) // NEED TEST
    .map(function (_) {
      return _.textContent;
    }).join('').replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, '') // remove comments
    .replace(/@import.*;/g, '') // remove imports
    );
    var cssDefs = css.split('}');
    cssDefs.forEach(function (_) {
      var def = _.trim();
      if (!def) {
        return;
      }
      var cssParts = def.split('{');
      var cssClasses = cssParts[0].split(',');
      var cssProps = cssParts[1].split(';');
      cssClasses.forEach(function (_) {
        var cssClass = _.trim();
        if (!cssClass) {
          return;
        }
        var props = document.styles[cssClass] || {};
        cssProps.forEach(function (cssProp) {
          var prop = cssProp.indexOf(':');
          var name = cssProp.substr(0, prop).trim();
          var value = cssProp.substr(prop + 1, cssProp.length - prop).trim();
          if (name && value) {
            props[name] = new Property(document, name, value);
          }
        });
        document.styles[cssClass] = props;
        document.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
        if (cssClass === '@font-face') {
          //  && !nodeEnv
          var fontFamily = props['font-family'].getString().replace(/"|'/g, '');
          var srcs = props.src.getString().split(',');
          srcs.forEach(function (src) {
            if (src.indexOf('format("svg")') > 0) {
              var url = parseExternalUrl(src);
              if (url) {
                void new SVGFontLoader(document).load(fontFamily, url);
              }
            }
          });
        }
      });
    });
    return _this50;
  }
  _inherits(StyleElement, _Element11);
  return _createClass(StyleElement);
}(Element);
StyleElement.parseExternalUrl = parseExternalUrl;
var UseElement = /*#__PURE__*/function (_RenderedElement7) {
  function UseElement() {
    var _this51;
    index_es_classCallCheck(this, UseElement);
    _this51 = _callSuper(this, UseElement, arguments);
    _this51.type = 'use';
    return _this51;
  }
  _inherits(UseElement, _RenderedElement7);
  return _createClass(UseElement, [{
    key: "setContext",
    value: function setContext(ctx) {
      _superPropGet(UseElement, "setContext", this, 3)([ctx]);
      var xAttr = this.getAttribute('x');
      var yAttr = this.getAttribute('y');
      if (xAttr.hasValue()) {
        ctx.translate(xAttr.getPixels('x'), 0);
      }
      if (yAttr.hasValue()) {
        ctx.translate(0, yAttr.getPixels('y'));
      }
    }
  }, {
    key: "path",
    value: function path(ctx) {
      var element = this.element;
      if (element) {
        element.path(ctx);
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      var document = this.document,
        element = this.element;
      if (element) {
        var tempSvg = element;
        if (element.type === 'symbol') {
          // render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
          tempSvg = new SVGElement(document, null);
          tempSvg.attributes.viewBox = new Property(document, 'viewBox', element.getAttribute('viewBox').getString());
          tempSvg.attributes.preserveAspectRatio = new Property(document, 'preserveAspectRatio', element.getAttribute('preserveAspectRatio').getString());
          tempSvg.attributes.overflow = new Property(document, 'overflow', element.getAttribute('overflow').getString());
          tempSvg.children = element.children; // element is still the parent of the children

          element.styles.opacity = new Property(document, 'opacity', this.calculateOpacity());
        }
        if (tempSvg.type === 'svg') {
          var widthStyle = this.getStyle('width', false, true);
          var heightStyle = this.getStyle('height', false, true); // if symbol or svg, inherit width/height from me

          if (widthStyle.hasValue()) {
            tempSvg.attributes.width = new Property(document, 'width', widthStyle.getString());
          }
          if (heightStyle.hasValue()) {
            tempSvg.attributes.height = new Property(document, 'height', heightStyle.getString());
          }
        }
        var oldParent = tempSvg.parent;
        tempSvg.parent = this;
        tempSvg.render(ctx);
        tempSvg.parent = oldParent;
      }
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox(ctx) {
      var element = this.element;
      if (element) {
        return element.getBoundingBox(ctx);
      }
      return null;
    }
  }, {
    key: "elementTransform",
    value: function elementTransform() {
      var document = this.document,
        element = this.element;
      return Transform.fromElement(document, element);
    }
  }, {
    key: "element",
    get: function get() {
      if (!this.cachedElement) {
        this.cachedElement = this.getHrefAttribute().getDefinition();
      }
      return this.cachedElement;
    }
  }]);
}(RenderedElement);
function imGet(img, x, y, width, _height, rgba) {
  return img[y * width * 4 + x * 4 + rgba];
}
function imSet(img, x, y, width, _height, rgba, val) {
  img[y * width * 4 + x * 4 + rgba] = val;
}
function index_es_m(matrix, i, v) {
  var mi = matrix[i];
  return mi * v;
}
function index_es_c(a, m1, m2, m3) {
  return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
}
var FeColorMatrixElement = /*#__PURE__*/function (_Element12) {
  function FeColorMatrixElement(document, node, captureTextNodes) {
    var _this52;
    index_es_classCallCheck(this, FeColorMatrixElement);
    _this52 = _callSuper(this, FeColorMatrixElement, [document, node, captureTextNodes]);
    _this52.type = 'feColorMatrix';
    var matrix = toNumbers(_this52.getAttribute('values').getString());
    switch (_this52.getAttribute('type').getString('matrix')) {
      // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
      case 'saturate':
        {
          var s = matrix[0];
          /* eslint-disable array-element-newline */

          matrix = [0.213 + 0.787 * s, 0.715 - 0.715 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 + 0.285 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 - 0.715 * s, 0.072 + 0.928 * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
          /* eslint-enable array-element-newline */

          break;
        }
      case 'hueRotate':
        {
          var a = matrix[0] * Math.PI / 180.0;
          /* eslint-disable array-element-newline */

          matrix = [index_es_c(a, 0.213, 0.787, -0.213), index_es_c(a, 0.715, -0.715, -0.715), index_es_c(a, 0.072, -0.072, 0.928), 0, 0, index_es_c(a, 0.213, -0.213, 0.143), index_es_c(a, 0.715, 0.285, 0.140), index_es_c(a, 0.072, -0.072, -0.283), 0, 0, index_es_c(a, 0.213, -0.213, -0.787), index_es_c(a, 0.715, -0.715, 0.715), index_es_c(a, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
          /* eslint-enable array-element-newline */

          break;
        }
      case 'luminanceToAlpha':
        /* eslint-disable array-element-newline */
        matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        /* eslint-enable array-element-newline */

        break;
    }
    _this52.matrix = matrix;
    _this52.includeOpacity = _this52.getAttribute('includeOpacity').hasValue();
    return _this52;
  }
  _inherits(FeColorMatrixElement, _Element12);
  return _createClass(FeColorMatrixElement, [{
    key: "apply",
    value: function apply(ctx, _x, _y, width, height) {
      // assuming x==0 && y==0 for now
      var includeOpacity = this.includeOpacity,
        matrix = this.matrix;
      var srcData = ctx.getImageData(0, 0, width, height);
      for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var r = imGet(srcData.data, x, y, width, height, 0);
          var g = imGet(srcData.data, x, y, width, height, 1);
          var b = imGet(srcData.data, x, y, width, height, 2);
          var a = imGet(srcData.data, x, y, width, height, 3);
          var nr = index_es_m(matrix, 0, r) + index_es_m(matrix, 1, g) + index_es_m(matrix, 2, b) + index_es_m(matrix, 3, a) + index_es_m(matrix, 4, 1);
          var ng = index_es_m(matrix, 5, r) + index_es_m(matrix, 6, g) + index_es_m(matrix, 7, b) + index_es_m(matrix, 8, a) + index_es_m(matrix, 9, 1);
          var nb = index_es_m(matrix, 10, r) + index_es_m(matrix, 11, g) + index_es_m(matrix, 12, b) + index_es_m(matrix, 13, a) + index_es_m(matrix, 14, 1);
          var na = index_es_m(matrix, 15, r) + index_es_m(matrix, 16, g) + index_es_m(matrix, 17, b) + index_es_m(matrix, 18, a) + index_es_m(matrix, 19, 1);
          if (includeOpacity) {
            nr = 0;
            ng = 0;
            nb = 0;
            na *= a / 255;
          }
          imSet(srcData.data, x, y, width, height, 0, nr);
          imSet(srcData.data, x, y, width, height, 1, ng);
          imSet(srcData.data, x, y, width, height, 2, nb);
          imSet(srcData.data, x, y, width, height, 3, na);
        }
      }
      ctx.clearRect(0, 0, width, height);
      ctx.putImageData(srcData, 0, 0);
    }
  }]);
}(Element);
var MaskElement = /*#__PURE__*/function (_Element13) {
  function MaskElement() {
    var _this53;
    index_es_classCallCheck(this, MaskElement);
    _this53 = _callSuper(this, MaskElement, arguments);
    _this53.type = 'mask';
    return _this53;
  }
  _inherits(MaskElement, _Element13);
  return _createClass(MaskElement, [{
    key: "apply",
    value: function apply(ctx, element) {
      var document = this.document; // render as temp svg

      var x = this.getAttribute('x').getPixels('x');
      var y = this.getAttribute('y').getPixels('y');
      var width = this.getStyle('width').getPixels('x');
      var height = this.getStyle('height').getPixels('y');
      if (!width && !height) {
        var boundingBox = new BoundingBox();
        this.children.forEach(function (child) {
          boundingBox.addBoundingBox(child.getBoundingBox(ctx));
        });
        x = Math.floor(boundingBox.x1);
        y = Math.floor(boundingBox.y1);
        width = Math.floor(boundingBox.width);
        height = Math.floor(boundingBox.height);
      }
      var ignoredStyles = this.removeStyles(element, MaskElement.ignoreStyles);
      var maskCanvas = document.createCanvas(x + width, y + height);
      var maskCtx = maskCanvas.getContext('2d');
      document.screen.setDefaults(maskCtx);
      this.renderChildren(maskCtx); // convert mask to alpha with a fake node
      // TODO: refactor out apply from feColorMatrix

      new FeColorMatrixElement(document, {
        nodeType: 1,
        childNodes: [],
        attributes: [{
          nodeName: 'type',
          value: 'luminanceToAlpha'
        }, {
          nodeName: 'includeOpacity',
          value: 'true'
        }]
      }).apply(maskCtx, 0, 0, x + width, y + height);
      var tmpCanvas = document.createCanvas(x + width, y + height);
      var tmpCtx = tmpCanvas.getContext('2d');
      document.screen.setDefaults(tmpCtx);
      element.render(tmpCtx);
      tmpCtx.globalCompositeOperation = 'destination-in';
      tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, 'no-repeat');
      tmpCtx.fillRect(0, 0, x + width, y + height);
      ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, 'no-repeat');
      ctx.fillRect(0, 0, x + width, y + height); // reassign mask

      this.restoreStyles(element, ignoredStyles);
    }
  }, {
    key: "render",
    value: function render(_) {// NO RENDER
    }
  }]);
}(Element);
MaskElement.ignoreStyles = ['mask', 'transform', 'clip-path'];
var noop = function noop() {// NOOP
};
var ClipPathElement = /*#__PURE__*/function (_Element14) {
  function ClipPathElement() {
    var _this54;
    index_es_classCallCheck(this, ClipPathElement);
    _this54 = _callSuper(this, ClipPathElement, arguments);
    _this54.type = 'clipPath';
    return _this54;
  }
  _inherits(ClipPathElement, _Element14);
  return _createClass(ClipPathElement, [{
    key: "apply",
    value: function apply(ctx) {
      var document = this.document;
      var contextProto = Reflect.getPrototypeOf(ctx);
      var beginPath = ctx.beginPath,
        closePath = ctx.closePath;
      if (contextProto) {
        contextProto.beginPath = noop;
        contextProto.closePath = noop;
      }
      Reflect.apply(beginPath, ctx, []);
      this.children.forEach(function (child) {
        if (typeof child.path === 'undefined') {
          return;
        }
        var transform = typeof child.elementTransform !== 'undefined' ? child.elementTransform() : null; // handle <use />

        if (!transform) {
          transform = Transform.fromElement(document, child);
        }
        if (transform) {
          transform.apply(ctx);
        }
        child.path(ctx);
        if (contextProto) {
          contextProto.closePath = closePath;
        }
        if (transform) {
          transform.unapply(ctx);
        }
      });
      Reflect.apply(closePath, ctx, []);
      ctx.clip();
      if (contextProto) {
        contextProto.beginPath = beginPath;
        contextProto.closePath = closePath;
      }
    }
  }, {
    key: "render",
    value: function render(_) {// NO RENDER
    }
  }]);
}(Element);
var FilterElement = /*#__PURE__*/function (_Element15) {
  function FilterElement() {
    var _this55;
    index_es_classCallCheck(this, FilterElement);
    _this55 = _callSuper(this, FilterElement, arguments);
    _this55.type = 'filter';
    return _this55;
  }
  _inherits(FilterElement, _Element15);
  return _createClass(FilterElement, [{
    key: "apply",
    value: function apply(ctx, element) {
      // render as temp svg
      var document = this.document,
        children = this.children;
      var boundingBox = element.getBoundingBox(ctx);
      if (!boundingBox) {
        return;
      }
      var px = 0;
      var py = 0;
      children.forEach(function (child) {
        var efd = child.extraFilterDistance || 0;
        px = Math.max(px, efd);
        py = Math.max(py, efd);
      });
      var width = Math.floor(boundingBox.width);
      var height = Math.floor(boundingBox.height);
      var tmpCanvasWidth = width + 2 * px;
      var tmpCanvasHeight = height + 2 * py;
      if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) {
        return;
      }
      var x = Math.floor(boundingBox.x);
      var y = Math.floor(boundingBox.y);
      var ignoredStyles = this.removeStyles(element, FilterElement.ignoreStyles);
      var tmpCanvas = document.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
      var tmpCtx = tmpCanvas.getContext('2d');
      document.screen.setDefaults(tmpCtx);
      tmpCtx.translate(-x + px, -y + py);
      element.render(tmpCtx); // apply filters

      children.forEach(function (child) {
        if (typeof child.apply === 'function') {
          child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
        }
      }); // render on me

      ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y - py, tmpCanvasWidth, tmpCanvasHeight);
      this.restoreStyles(element, ignoredStyles);
    }
  }, {
    key: "render",
    value: function render(_) {// NO RENDER
    }
  }]);
}(Element);
FilterElement.ignoreStyles = ['filter', 'transform', 'clip-path'];
var FeDropShadowElement = /*#__PURE__*/function (_Element16) {
  function FeDropShadowElement(document, node, captureTextNodes) {
    var _this56;
    index_es_classCallCheck(this, FeDropShadowElement);
    _this56 = _callSuper(this, FeDropShadowElement, [document, node, captureTextNodes]);
    _this56.type = 'feDropShadow';
    _this56.addStylesFromStyleDefinition();
    return _this56;
  }
  _inherits(FeDropShadowElement, _Element16);
  return _createClass(FeDropShadowElement, [{
    key: "apply",
    value: function apply(_, _x, _y, _width, _height) {// TODO: implement
    }
  }]);
}(Element);
var FeMorphologyElement = /*#__PURE__*/function (_Element17) {
  function FeMorphologyElement() {
    var _this57;
    index_es_classCallCheck(this, FeMorphologyElement);
    _this57 = _callSuper(this, FeMorphologyElement, arguments);
    _this57.type = 'feMorphology';
    return _this57;
  }
  _inherits(FeMorphologyElement, _Element17);
  return _createClass(FeMorphologyElement, [{
    key: "apply",
    value: function apply(_, _x, _y, _width, _height) {// TODO: implement
    }
  }]);
}(Element);
var FeCompositeElement = /*#__PURE__*/function (_Element18) {
  function FeCompositeElement() {
    var _this58;
    index_es_classCallCheck(this, FeCompositeElement);
    _this58 = _callSuper(this, FeCompositeElement, arguments);
    _this58.type = 'feComposite';
    return _this58;
  }
  _inherits(FeCompositeElement, _Element18);
  return _createClass(FeCompositeElement, [{
    key: "apply",
    value: function apply(_, _x, _y, _width, _height) {// TODO: implement
    }
  }]);
}(Element);
var FeGaussianBlurElement = /*#__PURE__*/function (_Element19) {
  function FeGaussianBlurElement(document, node, captureTextNodes) {
    var _this59;
    index_es_classCallCheck(this, FeGaussianBlurElement);
    _this59 = _callSuper(this, FeGaussianBlurElement, [document, node, captureTextNodes]);
    _this59.type = 'feGaussianBlur';
    _this59.blurRadius = Math.floor(_this59.getAttribute('stdDeviation').getNumber());
    _this59.extraFilterDistance = _this59.blurRadius;
    return _this59;
  }
  _inherits(FeGaussianBlurElement, _Element19);
  return _createClass(FeGaussianBlurElement, [{
    key: "apply",
    value: function apply(ctx, x, y, width, height) {
      var document = this.document,
        blurRadius = this.blurRadius;
      var body = document.window ? document.window.document.body : null;
      var canvas = ctx.canvas; // StackBlur requires canvas be on document

      canvas.id = document.getUniqueId();
      if (body) {
        canvas.style.display = 'none';
        body.appendChild(canvas);
      }
      processCanvasRGBA(canvas, x, y, width, height, blurRadius);
      if (body) {
        body.removeChild(canvas);
      }
    }
  }]);
}(Element);
var TitleElement = /*#__PURE__*/function (_Element20) {
  function TitleElement() {
    var _this60;
    index_es_classCallCheck(this, TitleElement);
    _this60 = _callSuper(this, TitleElement, arguments);
    _this60.type = 'title';
    return _this60;
  }
  _inherits(TitleElement, _Element20);
  return _createClass(TitleElement);
}(Element);
var DescElement = /*#__PURE__*/function (_Element21) {
  function DescElement() {
    var _this61;
    index_es_classCallCheck(this, DescElement);
    _this61 = _callSuper(this, DescElement, arguments);
    _this61.type = 'desc';
    return _this61;
  }
  _inherits(DescElement, _Element21);
  return _createClass(DescElement);
}(Element);
var index_es_elements = {
  'svg': SVGElement,
  'rect': RectElement,
  'circle': CircleElement,
  'ellipse': EllipseElement,
  'line': LineElement,
  'polyline': PolylineElement,
  'polygon': PolygonElement,
  'path': PathElement,
  'pattern': PatternElement,
  'marker': MarkerElement,
  'defs': DefsElement,
  'linearGradient': LinearGradientElement,
  'radialGradient': RadialGradientElement,
  'stop': StopElement,
  'animate': AnimateElement,
  'animateColor': AnimateColorElement,
  'animateTransform': AnimateTransformElement,
  'font': FontElement,
  'font-face': FontFaceElement,
  'missing-glyph': MissingGlyphElement,
  'glyph': GlyphElement,
  'text': TextElement,
  'tspan': TSpanElement,
  'tref': TRefElement,
  'a': AElement,
  'textPath': TextPathElement,
  'image': ImageElement,
  'g': GElement,
  'symbol': SymbolElement,
  'style': StyleElement,
  'use': UseElement,
  'mask': MaskElement,
  'clipPath': ClipPathElement,
  'filter': FilterElement,
  'feDropShadow': FeDropShadowElement,
  'feMorphology': FeMorphologyElement,
  'feComposite': FeCompositeElement,
  'feColorMatrix': FeColorMatrixElement,
  'feGaussianBlur': FeGaussianBlurElement,
  'title': TitleElement,
  'desc': DescElement
};
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function createCanvas(width, height) {
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
function createImage(_x) {
  return _createImage.apply(this, arguments);
}
function _createImage() {
  _createImage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(src) {
    var anonymousCrossOrigin,
      image,
      _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          anonymousCrossOrigin = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : false;
          image = document.createElement('img');
          if (anonymousCrossOrigin) {
            image.crossOrigin = 'Anonymous';
          }
          return _context7.abrupt("return", new Promise(function (resolve, reject) {
            image.onload = function () {
              resolve(image);
            };
            image.onerror = function (_event, _source, _lineno, _colno, error) {
              reject(error);
            };
            image.src = src;
          }));
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _createImage.apply(this, arguments);
}
var Document = /*#__PURE__*/function () {
  function Document(canvg) {
    index_es_classCallCheck(this, Document);
    var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref11$rootEmSize = _ref11.rootEmSize,
      rootEmSize = _ref11$rootEmSize === void 0 ? 12 : _ref11$rootEmSize,
      _ref11$emSize = _ref11.emSize,
      emSize = _ref11$emSize === void 0 ? 12 : _ref11$emSize,
      _ref11$createCanvas = _ref11.createCanvas,
      createCanvas = _ref11$createCanvas === void 0 ? Document.createCanvas : _ref11$createCanvas,
      _ref11$createImage = _ref11.createImage,
      createImage = _ref11$createImage === void 0 ? Document.createImage : _ref11$createImage,
      anonymousCrossOrigin = _ref11.anonymousCrossOrigin;
    this.canvg = canvg;
    this.definitions = {};
    this.styles = {};
    this.stylesSpecificity = {};
    this.images = [];
    this.fonts = [];
    this.emSizeStack = [];
    this.uniqueId = 0;
    this.screen = canvg.screen;
    this.rootEmSize = rootEmSize;
    this.emSize = emSize;
    this.createCanvas = createCanvas;
    this.createImage = this.bindCreateImage(createImage, anonymousCrossOrigin);
    this.screen.wait(this.isImagesLoaded.bind(this));
    this.screen.wait(this.isFontsLoaded.bind(this));
  }
  return _createClass(Document, [{
    key: "bindCreateImage",
    value: function bindCreateImage(createImage, anonymousCrossOrigin) {
      if (typeof anonymousCrossOrigin === 'boolean') {
        return function (source, forceAnonymousCrossOrigin) {
          return createImage(source, typeof forceAnonymousCrossOrigin === 'boolean' ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
        };
      }
      return createImage;
    }
  }, {
    key: "window",
    get: function get() {
      return this.screen.window;
    }
  }, {
    key: "fetch",
    get: function get() {
      return this.screen.fetch;
    }
  }, {
    key: "ctx",
    get: function get() {
      return this.screen.ctx;
    }
  }, {
    key: "emSize",
    get: function get() {
      var emSizeStack = this.emSizeStack;
      return emSizeStack[emSizeStack.length - 1];
    },
    set: function set(value) {
      var emSizeStack = this.emSizeStack;
      emSizeStack.push(value);
    }
  }, {
    key: "popEmSize",
    value: function popEmSize() {
      var emSizeStack = this.emSizeStack;
      emSizeStack.pop();
    }
  }, {
    key: "getUniqueId",
    value: function getUniqueId() {
      return "canvg".concat(++this.uniqueId);
    }
  }, {
    key: "isImagesLoaded",
    value: function isImagesLoaded() {
      return this.images.every(function (_) {
        return _.loaded;
      });
    }
  }, {
    key: "isFontsLoaded",
    value: function isFontsLoaded() {
      return this.fonts.every(function (_) {
        return _.loaded;
      });
    }
  }, {
    key: "createDocumentElement",
    value: function createDocumentElement(document) {
      var documentElement = this.createElement(document.documentElement);
      documentElement.root = true;
      documentElement.addStylesFromStyleDefinition();
      this.documentElement = documentElement;
      return documentElement;
    }
  }, {
    key: "createElement",
    value: function createElement(node) {
      var elementType = node.nodeName.replace(/^[^:]+:/, '');
      var ElementType = Document.elementTypes[elementType];
      if (typeof ElementType !== 'undefined') {
        return new ElementType(this, node);
      }
      return new UnknownElement(this, node);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(node) {
      return new TextNode(this, node);
    }
  }, {
    key: "setViewBox",
    value: function setViewBox(config) {
      this.screen.setViewBox(_objectSpread$1({
        document: this
      }, config));
    }
  }]);
}();
Document.createCanvas = createCanvas;
Document.createImage = createImage;
Document.elementTypes = index_es_elements;
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
/**
 * SVG renderer on canvas.
 */
var Canvg = /*#__PURE__*/function () {
  /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */
  function Canvg(ctx, svg) {
    index_es_classCallCheck(this, Canvg);
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.parser = new Parser(options);
    this.screen = new Screen(ctx, options);
    this.options = options;
    var document = new Document(this, options);
    var documentElement = document.createDocumentElement(svg);
    this.document = document;
    this.documentElement = documentElement;
  }
  /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  return _createClass(Canvg, [{
    key: "fork",
    value:
    /**
     * Create new Canvg instance with inherited options.
     * @param ctx - Rendering context.
     * @param svg - SVG source string or URL.
     * @param options - Rendering options.
     * @returns Canvg instance.
     */

    function fork(ctx, svg) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return Canvg.from(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
    }
    /**
     * Create new Canvg instance with inherited options.
     * @param ctx - Rendering context.
     * @param svg - SVG source string.
     * @param options - Rendering options.
     * @returns Canvg instance.
     */
  }, {
    key: "forkString",
    value: function forkString(ctx, svg) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return Canvg.fromString(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
    }
    /**
     * Document is ready promise.
     * @returns Ready promise.
     */
  }, {
    key: "ready",
    value: function ready() {
      return this.screen.ready();
    }
    /**
     * Document is ready value.
     * @returns Is ready or not.
     */
  }, {
    key: "isReady",
    value: function isReady() {
      return this.screen.isReady();
    }
    /**
     * Render only first frame, ignoring animations and mouse.
     * @param options - Rendering options.
     */
  }, {
    key: "render",
    value: function render() {
      var _arguments2 = arguments,
        _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var options;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              options = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};
              _this.start(_objectSpread({
                enableRedraw: true,
                ignoreAnimation: true,
                ignoreMouse: true
              }, options));
              _context8.next = 4;
              return _this.ready();
            case 4:
              _this.stop();
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    }
    /**
     * Start rendering.
     * @param options - Render options.
     */
  }, {
    key: "start",
    value: function start() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var documentElement = this.documentElement,
        screen = this.screen,
        baseOptions = this.options;
      screen.start(documentElement, _objectSpread(_objectSpread({
        enableRedraw: true
      }, baseOptions), options));
    }
    /**
     * Stop rendering.
     */
  }, {
    key: "stop",
    value: function stop() {
      this.screen.stop();
    }
    /**
     * Resize SVG to fit in given size.
     * @param width
     * @param height
     * @param preserveAspectRatio
     */
  }, {
    key: "resize",
    value: function resize(width) {
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
      var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.documentElement.resize(width, height, preserveAspectRatio);
    }
  }], [{
    key: "from",
    value: function from(ctx, svg) {
      var _arguments = arguments;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var options, parser, svgDocument;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              options = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : {};
              parser = new Parser(options);
              _context9.next = 4;
              return parser.parse(svg);
            case 4:
              svgDocument = _context9.sent;
              return _context9.abrupt("return", new Canvg(ctx, svgDocument, options));
            case 6:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    }
    /**
     * Create Canvg instance from SVG source string.
     * @param ctx - Rendering context.
     * @param svg - SVG source string.
     * @param options - Rendering options.
     * @returns Canvg instance.
     */
  }, {
    key: "fromString",
    value: function fromString(ctx, svg) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var parser = new Parser(options);
      var svgDocument = parser.parseFromString(svg);
      return new Canvg(ctx, svgDocument, options);
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=vendors.adbba0be25ae0a7b97a4.js.map