/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, $, Popper) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.4.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.4.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
    LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          } else if (input.type === 'checkbox') {
            if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            }
          } else {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            triggerChangeEvent = false;
          }

          if (triggerChangeEvent) {
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName$1.ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(Selector$1.INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(Event$1.LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(Selector$1.INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(ClassName$1.ACTIVE);
      } else {
        button.classList.remove(ClassName$1.ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(ClassName$1.ACTIVE);
      } else {
        _button.classList.remove(ClassName$1.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.4.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default, {}, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2({}, Default, {}, $(this).data());

        if (_typeof(config) === 'object') {
          _config = _objectSpread2({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.4.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$1, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.4.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.4.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDE_PREVENTED: "hidePrevented" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show',
    STATIC: 'modal-static'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$3, {}, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(ClassName$5.STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(ClassName$5.STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(Selector$5.MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2({}, $(target).data(), {}, $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.4.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector$6.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.4.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.4.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$6, {}, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.4.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.4.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(Event$a.SHOW);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      Util.reflow(this._element);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      var hideEvent = $.Event(Event$a.HIDE);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(ClassName$a.HIDE);

        $(_this3._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);

 // j'importe bootstrap.js depuis node_modules
// import owlCarousel from 'owl.carousel'; /* si il y a un carousel */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/charlinemathus/Documents/PROJETS/3aProject/src/js/main.js */"./src/js/main.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2xzL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdGFiLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRQYXJlbnROb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UmVmZXJlbmNlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzSUUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc09mZnNldENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFJvb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9maW5kQ29tbW9uT2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaW5jbHVkZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEJvcmRlcnNTaXplLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0V2luZG93U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNGaXhlZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRCb3VuZGFyaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T3V0ZXJTaXplcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UG9wcGVyT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9maW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9ydW5Nb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzTW9kaWZpZXJFbmFibGVkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9kZXN0cm95LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0dXBFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZW5hYmxlRXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9yZW1vdmVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNOdW1lcmljLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0U3R5bGVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9hcHBseVN0eWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Um91bmRlZE9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvY29tcHV0ZVN0eWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNNb2RpZmllclJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2Fycm93LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9jbG9ja3dpc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9rZWVwVG9nZXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9zaGlmdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2lubmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiVFJBTlNJVElPTl9FTkQiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImhhbmRsZSIsIiQiLCJldmVudCIsImNhbGxlZCIsIlV0aWwiLCJzZXRUaW1lb3V0IiwiZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJkb2N1bWVudCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJocmVmQXR0ciIsImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJyZWZsb3ciLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsInN1cHBvcnRzVHJhbnNpdGlvbkVuZCIsIkJvb2xlYW4iLCJpc0VsZW1lbnQiLCJvYmoiLCJ0eXBlQ2hlY2tDb25maWciLCJPYmplY3QiLCJleHBlY3RlZFR5cGVzIiwiY29uZmlnVHlwZXMiLCJ2YWx1ZSIsImNvbmZpZyIsInZhbHVlVHlwZSIsInRvVHlwZSIsImNvbXBvbmVudE5hbWUiLCJmaW5kU2hhZG93Um9vdCIsInJvb3QiLCJqUXVlcnlEZXRlY3Rpb24iLCJ2ZXJzaW9uIiwibWluTWFqb3IiLCJsdE1ham9yIiwibWluTWlub3IiLCJtaW5QYXRjaCIsIm1heE1ham9yIiwic2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQiLCJOQU1FIiwiVkVSU0lPTiIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiREFUQV9BUElfS0VZIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiU2VsZWN0b3IiLCJESVNNSVNTIiwiRXZlbnQiLCJDTE9TRSIsIkNMT1NFRCIsIkNMSUNLX0RBVEFfQVBJIiwiQ2xhc3NOYW1lIiwiQUxFUlQiLCJGQURFIiwiU0hPVyIsIkFsZXJ0IiwiY2xvc2UiLCJyb290RWxlbWVudCIsImN1c3RvbUV2ZW50IiwiZGlzcG9zZSIsIl9nZXRSb290RWxlbWVudCIsInBhcmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsImNsb3NlRXZlbnQiLCJfcmVtb3ZlRWxlbWVudCIsIl9kZXN0cm95RWxlbWVudCIsIl9qUXVlcnlJbnRlcmZhY2UiLCIkZWxlbWVudCIsImRhdGEiLCJfaGFuZGxlRGlzbWlzcyIsImFsZXJ0SW5zdGFuY2UiLCJBQ1RJVkUiLCJCVVRUT04iLCJGT0NVUyIsIkRBVEFfVE9HR0xFX0NBUlJPVCIsIkRBVEFfVE9HR0xFUyIsIkRBVEFfVE9HR0xFIiwiREFUQV9UT0dHTEVTX0JVVFRPTlMiLCJJTlBVVCIsIkZPQ1VTX0JMVVJfREFUQV9BUEkiLCJMT0FEX0RBVEFfQVBJIiwiQnV0dG9uIiwidG9nZ2xlIiwidHJpZ2dlckNoYW5nZUV2ZW50IiwiYWRkQXJpYVByZXNzZWQiLCJpbnB1dCIsImFjdGl2ZUVsZW1lbnQiLCJidXR0b24iLCJpbnB1dEJ0biIsImJ1dHRvbnMiLCJpIiwibGVuIiwiQVJST1dfTEVGVF9LRVlDT0RFIiwiQVJST1dfUklHSFRfS0VZQ09ERSIsIlRPVUNIRVZFTlRfQ09NUEFUX1dBSVQiLCJTV0lQRV9USFJFU0hPTEQiLCJEZWZhdWx0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInNsaWRlIiwicGF1c2UiLCJ3cmFwIiwidG91Y2giLCJEZWZhdWx0VHlwZSIsIkRpcmVjdGlvbiIsIk5FWFQiLCJQUkVWIiwiTEVGVCIsIlJJR0hUIiwiU0xJREUiLCJTTElEIiwiS0VZRE9XTiIsIk1PVVNFRU5URVIiLCJNT1VTRUxFQVZFIiwiVE9VQ0hTVEFSVCIsIlRPVUNITU9WRSIsIlRPVUNIRU5EIiwiUE9JTlRFUkRPV04iLCJQT0lOVEVSVVAiLCJEUkFHX1NUQVJUIiwiQ0FST1VTRUwiLCJJVEVNIiwiUE9JTlRFUl9FVkVOVCIsIkFDVElWRV9JVEVNIiwiSVRFTV9JTUciLCJORVhUX1BSRVYiLCJJTkRJQ0FUT1JTIiwiREFUQV9TTElERSIsIkRBVEFfUklERSIsIlBvaW50ZXJUeXBlIiwiVE9VQ0giLCJQRU4iLCJDYXJvdXNlbCIsIm5hdmlnYXRvciIsIndpbmRvdyIsIm5leHQiLCJuZXh0V2hlblZpc2libGUiLCJwcmV2IiwiY2xlYXJJbnRlcnZhbCIsImN5Y2xlIiwic2V0SW50ZXJ2YWwiLCJ0byIsImFjdGl2ZUluZGV4IiwiaW5kZXgiLCJkaXJlY3Rpb24iLCJfZ2V0Q29uZmlnIiwiX2hhbmRsZVN3aXBlIiwiYWJzRGVsdGF4IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCJzdGFydCIsIm1vdmUiLCJlbmQiLCJjbGVhclRpbWVvdXQiLCJlIiwiX2tleWRvd24iLCJfZ2V0SXRlbUluZGV4IiwiX2dldEl0ZW1CeURpcmVjdGlvbiIsImlzTmV4dERpcmVjdGlvbiIsImlzUHJldkRpcmVjdGlvbiIsImxhc3RJdGVtSW5kZXgiLCJpc0dvaW5nVG9XcmFwIiwiZGVsdGEiLCJpdGVtSW5kZXgiLCJfdHJpZ2dlclNsaWRlRXZlbnQiLCJ0YXJnZXRJbmRleCIsImZyb21JbmRleCIsInNsaWRlRXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwiZnJvbSIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiaW5kaWNhdG9ycyIsIm5leHRJbmRpY2F0b3IiLCJfc2xpZGUiLCJhY3RpdmVFbGVtZW50SW5kZXgiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJpc0N5Y2xpbmciLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwiZXZlbnREaXJlY3Rpb25OYW1lIiwic2xpZEV2ZW50IiwibmV4dEVsZW1lbnRJbnRlcnZhbCIsInBhcnNlSW50IiwiX2NvbmZpZyIsImFjdGlvbiIsIl9kYXRhQXBpQ2xpY2tIYW5kbGVyIiwidGFyZ2V0Iiwic2xpZGVJbmRleCIsImNhcm91c2VscyIsIiRjYXJvdXNlbCIsIlNIT1dOIiwiSElERSIsIkhJRERFTiIsIkNPTExBUFNFIiwiQ09MTEFQU0lORyIsIkNPTExBUFNFRCIsIkRpbWVuc2lvbiIsIldJRFRIIiwiSEVJR0hUIiwiQUNUSVZFUyIsIkNvbGxhcHNlIiwidG9nZ2xlTGlzdCIsImVsZW0iLCJmaWx0ZXJFbGVtZW50IiwiZm91bmRFbGVtIiwic2hvdyIsImFjdGl2ZXMiLCJhY3RpdmVzRGF0YSIsInN0YXJ0RXZlbnQiLCJkaW1lbnNpb24iLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwic2Nyb2xsU2l6ZSIsImhpZGUiLCJ0cmlnZ2VyQXJyYXlMZW5ndGgiLCJ0cmlnZ2VyIiwiJGVsZW0iLCJzZXRUcmFuc2l0aW9uaW5nIiwiX2dldERpbWVuc2lvbiIsImhhc1dpZHRoIiwiX2dldFBhcmVudCIsImNoaWxkcmVuIiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsImlzT3BlbiIsInRyaWdnZXJBcnJheSIsIl9nZXRUYXJnZXRGcm9tRWxlbWVudCIsIiR0aGlzIiwiJHRyaWdnZXIiLCJzZWxlY3RvcnMiLCIkdGFyZ2V0IiwiRVNDQVBFX0tFWUNPREUiLCJTUEFDRV9LRVlDT0RFIiwiVEFCX0tFWUNPREUiLCJBUlJPV19VUF9LRVlDT0RFIiwiQVJST1dfRE9XTl9LRVlDT0RFIiwiUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIiwiUkVHRVhQX0tFWURPV04iLCJDTElDSyIsIktFWURPV05fREFUQV9BUEkiLCJLRVlVUF9EQVRBX0FQSSIsIkRJU0FCTEVEIiwiRFJPUFVQIiwiRFJPUFJJR0hUIiwiRFJPUExFRlQiLCJNRU5VUklHSFQiLCJNRU5VTEVGVCIsIlBPU0lUSU9OX1NUQVRJQyIsIkZPUk1fQ0hJTEQiLCJNRU5VIiwiTkFWQkFSX05BViIsIlZJU0lCTEVfSVRFTVMiLCJBdHRhY2htZW50TWFwIiwiVE9QIiwiVE9QRU5EIiwiQk9UVE9NIiwiQk9UVE9NRU5EIiwiUklHSFRFTkQiLCJMRUZURU5EIiwib2Zmc2V0IiwiZmxpcCIsImJvdW5kYXJ5IiwicmVmZXJlbmNlIiwiZGlzcGxheSIsInBvcHBlckNvbmZpZyIsIkRyb3Bkb3duIiwiaXNBY3RpdmUiLCJ1c2VQb3BwZXIiLCJfZWxlbWVudCIsInNob3dFdmVudCIsInJlZmVyZW5jZUVsZW1lbnQiLCJoaWRlRXZlbnQiLCJ1cGRhdGUiLCJfZ2V0TWVudUVsZW1lbnQiLCJfZ2V0UGxhY2VtZW50IiwiJHBhcmVudERyb3Bkb3duIiwicGxhY2VtZW50IiwiX2RldGVjdE5hdmJhciIsIl9nZXRPZmZzZXQiLCJfZ2V0UG9wcGVyQ29uZmlnIiwibW9kaWZpZXJzIiwiZW5hYmxlZCIsInByZXZlbnRPdmVyZmxvdyIsImJvdW5kYXJpZXNFbGVtZW50IiwiX2NsZWFyTWVudXMiLCJ0b2dnbGVzIiwiY29udGV4dCIsImRyb3Bkb3duTWVudSIsIl9nZXRQYXJlbnRGcm9tRWxlbWVudCIsIl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpdGVtcyIsImJhY2tkcm9wIiwiZm9jdXMiLCJISURFX1BSRVZFTlRFRCIsIkZPQ1VTSU4iLCJSRVNJWkUiLCJDTElDS19ESVNNSVNTIiwiS0VZRE9XTl9ESVNNSVNTIiwiTU9VU0VVUF9ESVNNSVNTIiwiTU9VU0VET1dOX0RJU01JU1MiLCJTQ1JPTExBQkxFIiwiU0NST0xMQkFSX01FQVNVUkVSIiwiQkFDS0RST1AiLCJPUEVOIiwiU1RBVElDIiwiRElBTE9HIiwiTU9EQUxfQk9EWSIsIkRBVEFfRElTTUlTUyIsIkZJWEVEX0NPTlRFTlQiLCJTVElDS1lfQ09OVEVOVCIsIk1vZGFsIiwidHJhbnNpdGlvbiIsImhhbmRsZVVwZGF0ZSIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiaGlkZUV2ZW50UHJldmVudGVkIiwibW9kYWxUcmFuc2l0aW9uRHVyYXRpb24iLCJfc2hvd0VsZW1lbnQiLCJtb2RhbEJvZHkiLCJOb2RlIiwic2hvd25FdmVudCIsInRyYW5zaXRpb25Db21wbGV0ZSIsIl9lbmZvcmNlRm9jdXMiLCJfc2V0RXNjYXBlRXZlbnQiLCJfc2V0UmVzaXplRXZlbnQiLCJfaGlkZU1vZGFsIiwiX3JlbW92ZUJhY2tkcm9wIiwiX3Nob3dCYWNrZHJvcCIsImFuaW1hdGUiLCJjYWxsYmFjayIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiY2FsbGJhY2tSZW1vdmUiLCJfYWRqdXN0RGlhbG9nIiwiaXNNb2RhbE92ZXJmbG93aW5nIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJfY2hlY2tTY3JvbGxiYXIiLCJyZWN0IiwiX3NldFNjcm9sbGJhciIsImZpeGVkQ29udGVudCIsInN0aWNreUNvbnRlbnQiLCJhY3R1YWxQYWRkaW5nIiwiY2FsY3VsYXRlZFBhZGRpbmciLCJhY3R1YWxNYXJnaW4iLCJjYWxjdWxhdGVkTWFyZ2luIiwiX3Jlc2V0U2Nyb2xsYmFyIiwicGFkZGluZyIsImVsZW1lbnRzIiwibWFyZ2luIiwiX2dldFNjcm9sbGJhcldpZHRoIiwic2Nyb2xsRGl2Iiwic2Nyb2xsYmFyV2lkdGgiLCJ1cmlBdHRycyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJEZWZhdWx0V2hpdGVsaXN0IiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYXR0ck5hbWUiLCJhdHRyIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJyZWdFeHAiLCJhdHRyUmVnZXgiLCJsIiwidW5zYWZlSHRtbCIsInNhbml0aXplRm4iLCJkb21QYXJzZXIiLCJjcmVhdGVkRG9jdW1lbnQiLCJ3aGl0ZWxpc3RLZXlzIiwiZWwiLCJlbE5hbWUiLCJhdHRyaWJ1dGVMaXN0Iiwid2hpdGVsaXN0ZWRBdHRyaWJ1dGVzIiwid2hpdGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZSIsIkNMQVNTX1BSRUZJWCIsIkJTQ0xTX1BSRUZJWF9SRUdFWCIsIkRJU0FMTE9XRURfQVRUUklCVVRFUyIsImFuaW1hdGlvbiIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImh0bWwiLCJjb250YWluZXIiLCJmYWxsYmFja1BsYWNlbWVudCIsInNhbml0aXplIiwiQVVUTyIsIkhvdmVyU3RhdGUiLCJPVVQiLCJJTlNFUlRFRCIsIkZPQ1VTT1VUIiwiVE9PTFRJUCIsIlRPT0xUSVBfSU5ORVIiLCJBUlJPVyIsIlRyaWdnZXIiLCJIT1ZFUiIsIk1BTlVBTCIsIlRvb2x0aXAiLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsImRhdGFLZXkiLCJzaGFkb3dSb290IiwiaXNJblRoZURvbSIsInRpcCIsInRpcElkIiwiYXR0YWNobWVudCIsInByZXZIb3ZlclN0YXRlIiwiaXNXaXRoQ29udGVudCIsImFkZEF0dGFjaG1lbnRDbGFzcyIsImdldFRpcEVsZW1lbnQiLCJzZXRDb250ZW50Iiwic2V0RWxlbWVudENvbnRlbnQiLCJjb250ZW50Iiwic2FuaXRpemVIdG1sIiwiZ2V0VGl0bGUiLCJkZWZhdWx0QnNDb25maWciLCJiZWhhdmlvciIsImFycm93Iiwib25DcmVhdGUiLCJvblVwZGF0ZSIsIl9nZXRDb250YWluZXIiLCJfZ2V0QXR0YWNobWVudCIsIl9zZXRMaXN0ZW5lcnMiLCJ0cmlnZ2VycyIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsInRpdGxlVHlwZSIsIl9lbnRlciIsIl9sZWF2ZSIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiZGF0YUF0dHJpYnV0ZXMiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJfY2xlYW5UaXBDbGFzcyIsIiR0aXAiLCJ0YWJDbGFzcyIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJwb3BwZXJJbnN0YW5jZSIsInBvcHBlckRhdGEiLCJfZml4VHJhbnNpdGlvbiIsImluaXRDb25maWdBbmltYXRpb24iLCJUSVRMRSIsIkNPTlRFTlQiLCJQb3BvdmVyIiwiX2dldENvbnRlbnQiLCJtZXRob2QiLCJBQ1RJVkFURSIsIlNDUk9MTCIsIkRST1BET1dOX0lURU0iLCJEUk9QRE9XTl9NRU5VIiwiREFUQV9TUFkiLCJOQVZfTElTVF9HUk9VUCIsIk5BVl9MSU5LUyIsIk5BVl9JVEVNUyIsIkxJU1RfSVRFTVMiLCJEUk9QRE9XTiIsIkRST1BET1dOX0lURU1TIiwiRFJPUERPV05fVE9HR0xFIiwiT2Zmc2V0TWV0aG9kIiwiT0ZGU0VUIiwiUE9TSVRJT04iLCJTY3JvbGxTcHkiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJ0YXJnZXRzIiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJpdGVtIiwiaWQiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJfcHJvY2VzcyIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIm1heFNjcm9sbCIsIm9mZnNldExlbmd0aCIsImlzQWN0aXZlVGFyZ2V0IiwiX2FjdGl2YXRlIiwicXVlcmllcyIsIiRsaW5rIiwiX2NsZWFyIiwibm9kZSIsInNjcm9sbFNweXMiLCJzY3JvbGxTcHlzTGVuZ3RoIiwiJHNweSIsIkFDVElWRV9VTCIsIkRST1BET1dOX0FDVElWRV9DSElMRCIsIlRhYiIsImxpc3RFbGVtZW50IiwiaXRlbVNlbGVjdG9yIiwicHJldmlvdXMiLCJoaWRkZW5FdmVudCIsImFjdGl2ZUVsZW1lbnRzIiwiYWN0aXZlIiwiaXNUcmFuc2l0aW9uaW5nIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93blRvZ2dsZUxpc3QiLCJTSE9XSU5HIiwiYXV0b2hpZGUiLCJUb2FzdCIsIl9jbG9zZSIsInRpbWVvdXREdXJhdGlvbiIsImxvbmdlclRpbWVvdXRCcm93c2VycyIsImlzQnJvd3NlciIsInNjaGVkdWxlZCIsInN1cHBvcnRzTWljcm9UYXNrcyIsImdldFR5cGUiLCJmdW5jdGlvblRvQ2hlY2siLCJjc3MiLCJwcm9wZXJ0eSIsImdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZ2V0U2Nyb2xsUGFyZW50IiwiZ2V0UGFyZW50Tm9kZSIsImlzSUUxMSIsImlzSUUxMCIsIm5vT2Zmc2V0UGFyZW50IiwiaXNJRSIsIm9mZnNldFBhcmVudCIsIm5vZGVOYW1lIiwiZ2V0T2Zmc2V0UGFyZW50IiwiZ2V0Um9vdCIsImVsZW1lbnQxIiwiZWxlbWVudDIiLCJvcmRlciIsInJhbmdlIiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJpc09mZnNldENvbnRhaW5lciIsImVsZW1lbnQxcm9vdCIsImZpbmRDb21tb25PZmZzZXRQYXJlbnQiLCJzaWRlIiwidXBwZXJTaWRlIiwic2Nyb2xsaW5nRWxlbWVudCIsInN1YnRyYWN0IiwiZ2V0U2Nyb2xsIiwic2Nyb2xsTGVmdCIsIm1vZGlmaWVyIiwic2lkZUEiLCJheGlzIiwic2lkZUIiLCJzdHlsZXMiLCJib2R5IiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRTaXplIiwib2Zmc2V0cyIsImhlaWdodCIsInJlc3VsdCIsInRvcCIsInNpemVzIiwiZ2V0V2luZG93U2l6ZXMiLCJ3aWR0aCIsImhvcml6U2Nyb2xsYmFyIiwidmVydFNjcm9sbGJhciIsImdldEJvcmRlcnNTaXplIiwiZ2V0Q2xpZW50UmVjdCIsImZpeGVkUG9zaXRpb24iLCJydW5Jc0lFIiwiaXNIVE1MIiwiY2hpbGRyZW5SZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsInNjcm9sbFBhcmVudCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImluY2x1ZGVTY3JvbGwiLCJleGNsdWRlU2Nyb2xsIiwicmVsYXRpdmVPZmZzZXQiLCJnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUiLCJwYXJlbnROb2RlIiwiaXNGaXhlZCIsImJvdW5kYXJpZXMiLCJsZWZ0IiwiZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUiLCJib3VuZGFyaWVzTm9kZSIsInBvcHBlciIsImlzUGFkZGluZ051bWJlciIsImdldEJvdW5kYXJpZXMiLCJyZWN0cyIsInJlZlJlY3QiLCJib3R0b20iLCJzb3J0ZWRBcmVhcyIsImdldEFyZWEiLCJmaWx0ZXJlZEFyZWFzIiwiY29tcHV0ZWRQbGFjZW1lbnQiLCJ2YXJpYXRpb24iLCJjb21tb25PZmZzZXRQYXJlbnQiLCJ4IiwieSIsImhhc2giLCJyaWdodCIsInBvcHBlclJlY3QiLCJnZXRPdXRlclNpemVzIiwicG9wcGVyT2Zmc2V0cyIsImlzSG9yaXoiLCJtYWluU2lkZSIsInNlY29uZGFyeVNpZGUiLCJtZWFzdXJlbWVudCIsInNlY29uZGFyeU1lYXN1cmVtZW50IiwicmVmZXJlbmNlT2Zmc2V0cyIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwiQXJyYXkiLCJhcnIiLCJjdXIiLCJtYXRjaCIsIm1vZGlmaWVyc1RvUnVuIiwiZW5kcyIsImZpbmRJbmRleCIsImZuIiwiaXNGdW5jdGlvbiIsImdldFJlZmVyZW5jZU9mZnNldHMiLCJjb21wdXRlQXV0b1BsYWNlbWVudCIsImdldFBvcHBlck9mZnNldHMiLCJydW5Nb2RpZmllcnMiLCJuYW1lIiwicHJlZml4ZXMiLCJ1cHBlclByb3AiLCJ0b0NoZWNrIiwiaXNNb2RpZmllckVuYWJsZWQiLCJnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUiLCJvd25lckRvY3VtZW50IiwiaXNCb2R5IiwicGFzc2l2ZSIsInN0YXRlIiwic2Nyb2xsRWxlbWVudCIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIm4iLCJpc05hTiIsImlzRmluaXRlIiwidW5pdCIsImlzTnVtZXJpYyIsImF0dHJpYnV0ZXMiLCJvcHRpb25zIiwicG9zaXRpb24iLCJyb3VuZCIsImZsb29yIiwibm9Sb3VuZCIsInJlZmVyZW5jZVdpZHRoIiwicG9wcGVyV2lkdGgiLCJpc1ZlcnRpY2FsIiwiaXNWYXJpYXRpb24iLCJzYW1lV2lkdGhQYXJpdHkiLCJib3RoT2RkV2lkdGgiLCJob3Jpem9udGFsVG9JbnRlZ2VyIiwidmVydGljYWxUb0ludGVnZXIiLCJpc0ZpcmVmb3giLCJsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24iLCJncHVBY2NlbGVyYXRpb24iLCJvZmZzZXRQYXJlbnRSZWN0IiwiZ2V0Um91bmRlZE9mZnNldHMiLCJwcmVmaXhlZFByb3BlcnR5IiwiaW52ZXJ0VG9wIiwiaW52ZXJ0TGVmdCIsInJlcXVlc3RpbmciLCJpc1JlcXVpcmVkIiwicmVxdWVzdGVkIiwiaXNNb2RpZmllclJlcXVpcmVkIiwiYXJyb3dFbGVtZW50Iiwic2lkZUNhcGl0YWxpemVkIiwiYWx0U2lkZSIsIm9wU2lkZSIsImFycm93RWxlbWVudFNpemUiLCJjZW50ZXIiLCJwb3BwZXJNYXJnaW5TaWRlIiwicG9wcGVyQm9yZGVyU2lkZSIsInNpZGVWYWx1ZSIsInZhbGlkUGxhY2VtZW50cyIsInBsYWNlbWVudHMiLCJjb3VudGVyIiwiQkVIQVZJT1JTIiwicGxhY2VtZW50T3Bwb3NpdGUiLCJmbGlwT3JkZXIiLCJjbG9ja3dpc2UiLCJyZWZPZmZzZXRzIiwib3ZlcmxhcHNSZWYiLCJvdmVyZmxvd3NMZWZ0Iiwib3ZlcmZsb3dzUmlnaHQiLCJvdmVyZmxvd3NUb3AiLCJvdmVyZmxvd3NCb3R0b20iLCJvdmVyZmxvd3NCb3VuZGFyaWVzIiwiZmxpcHBlZFZhcmlhdGlvbkJ5UmVmIiwiZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCIsImZsaXBwZWRWYXJpYXRpb24iLCJnZXRPcHBvc2l0ZVZhcmlhdGlvbiIsInNwbGl0Iiwic3RyIiwic2l6ZSIsInVzZUhlaWdodCIsImZyYWdtZW50cyIsImZyYWciLCJkaXZpZGVyIiwic3BsaXRSZWdleCIsIm9wcyIsIm1lcmdlV2l0aFByZXZpb3VzIiwidG9WYWx1ZSIsIm9wIiwiaW5kZXgyIiwiYmFzZVBsYWNlbWVudCIsInBhcnNlT2Zmc2V0IiwidHJhbnNmb3JtUHJvcCIsInBvcHBlclN0eWxlcyIsInRyYW5zZm9ybSIsImNoZWNrIiwic2hpZnR2YXJpYXRpb24iLCJzaGlmdE9mZnNldHMiLCJib3VuZCIsInN1YnRyYWN0TGVuZ3RoIiwic2hpZnQiLCJrZWVwVG9nZXRoZXIiLCJpbm5lciIsInVuZGVmaW5lZCIsIlBvcHBlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlYm91bmNlIiwibW9kaWZpZXJPcHRpb25zIiwiZXZlbnRzRW5hYmxlZCIsImRlc3Ryb3kiLCJlbmFibGVFdmVudExpc3RlbmVycyIsImRpc2FibGVFdmVudExpc3RlbmVycyIsIlV0aWxzIiwiUG9wcGVyVXRpbHMiLCJEZWZhdWx0cyIsImciLCJGdW5jdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTFGVVAsRUFQckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcUJBLE9Bb0haUSxLQXBIWVIsR0FvSEosQ0FBQyx5Q0FBRCxRQUFrRFMsV0FwSDlDVDtBQUFBQSxPQXNIWjVDLFVBdEhZNEMsR0FzSEM1QyxVQXRIRDRDO0FBQUFBLE9Bd0haVSxRQXhIWVYsR0F3SERVLFFBeEhDVjs7Ozs7Ozs7Ozs7Ozs7O0FDWnJCLElBQUlXLENBQUosQyxDQUVBOztBQUNBQSxDQUFDLEdBQUksWUFBVztBQUNmLFNBQU8sSUFBUDtBQUNBLENBRkcsRUFBSjs7QUFJQSxJQUFJO0FBQ0g7QUFDQUEsR0FBQyxHQUFHQSxDQUFDLElBQUksSUFBSUMsUUFBSixDQUFhLGFBQWIsR0FBVDtBQUNBLENBSEQsQ0FHRSxPQUFPL2xCLENBQVAsRUFBVTtBQUNYO0FBQ0EsTUFBSSxRQUFPcEIsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUF0QixFQUFnQ2tuQixDQUFDLEdBQUdsbkIsTUFBSjtBQUNoQyxDLENBRUQ7QUFDQTtBQUNBOzs7QUFFQW9uQixNQUFNLENBQUNDLE9BQVAsR0FBaUJILENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FDb0I7QUFDcEI7O0FBSUE5dkIsNkNBQUMsQ0FBQ1MsUUFBRCxDQUFELENBQVl5dkIsS0FBWixDQUFrQixZQUFZLENBSTdCLENBSkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSx3QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiB1dGlsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcbmNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcblxuLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuZnVuY3Rpb24gdG9UeXBlKG9iaikge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gIHJldHVybiB7XG4gICAgYmluZFR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgIGRlbGVnYXRlVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgaGFuZGxlKGV2ZW50KSB7XG4gICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMpKSB7XG4gICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZpbmVkXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcblxuICAkKHRoaXMpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgY2FsbGVkID0gdHJ1ZVxuICB9KVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMpXG4gICAgfVxuICB9LCBkdXJhdGlvbilcblxuICByZXR1cm4gdGhpc1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvclxuICAkLmV2ZW50LnNwZWNpYWxbVXRpbC5UUkFOU0lUSU9OX0VORF0gPSBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KClcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHVibGljIFV0aWwgQXBpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFV0aWwgPSB7XG5cbiAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuXG4gIGdldFVJRChwcmVmaXgpIHtcbiAgICBkbyB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKSAvLyBcIn5+XCIgYWN0cyBsaWtlIGEgZmFzdGVyIE1hdGguZmxvb3IoKSBoZXJlXG4gICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcbiAgICByZXR1cm4gcHJlZml4XG4gIH0sXG5cbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcblxuICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgICAgY29uc3QgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiAnJ1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxuXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgICBsZXQgdHJhbnNpdGlvbkR1cmF0aW9uID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxuICAgIGxldCB0cmFuc2l0aW9uRGVsYXkgPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kZWxheScpXG5cbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gICAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICAgIHJldHVybiAocGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG4gIH0sXG5cbiAgcmVmbG93KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfSxcblxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS50cmlnZ2VyKFRSQU5TSVRJT05fRU5EKVxuICB9LFxuXG4gIC8vIFRPRE86IFJlbW92ZSBpbiB2NVxuICBzdXBwb3J0c1RyYW5zaXRpb25FbmQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oVFJBTlNJVElPTl9FTkQpXG4gIH0sXG5cbiAgaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGVcbiAgfSxcblxuICB0eXBlQ2hlY2tDb25maWcoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY29uZmlnVHlwZXMpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZmlnVHlwZXMsIHByb3BlcnR5KSkge1xuICAgICAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IHZhbHVlICAgICAgICAgPSBjb25maWdbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSAgICAgPSB2YWx1ZSAmJiBVdGlsLmlzRWxlbWVudCh2YWx1ZSlcbiAgICAgICAgICA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogYCArXG4gICAgICAgICAgICBgT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYCArXG4gICAgICAgICAgICBgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBmaW5kU2hhZG93Um9vdChlbGVtZW50KSB7XG4gICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gVXRpbC5maW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG4gIH0sXG5cbiAgalF1ZXJ5RGV0ZWN0aW9uKCkge1xuICAgIGlmICh0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkuIGpRdWVyeSBtdXN0IGJlIGluY2x1ZGVkIGJlZm9yZSBCb290c3RyYXBcXCdzIEphdmFTY3JpcHQuJylcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJzaW9uID0gJC5mbi5qcXVlcnkuc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpXG4gICAgY29uc3QgbWluTWFqb3IgPSAxXG4gICAgY29uc3QgbHRNYWpvciA9IDJcbiAgICBjb25zdCBtaW5NaW5vciA9IDlcbiAgICBjb25zdCBtaW5QYXRjaCA9IDFcbiAgICBjb25zdCBtYXhNYWpvciA9IDRcblxuICAgIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGF0IGxlYXN0IGpRdWVyeSB2MS45LjEgYnV0IGxlc3MgdGhhbiB2NC4wLjAnKVxuICAgIH1cbiAgfVxufVxuXG5VdGlsLmpRdWVyeURldGVjdGlvbigpXG5zZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpXG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdhbGVydCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmFsZXJ0J1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBESVNNSVNTIDogJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIENMT1NFICAgICAgICAgIDogYGNsb3NlJHtFVkVOVF9LRVl9YCxcbiAgQ0xPU0VEICAgICAgICAgOiBgY2xvc2VkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgQUxFUlQgOiAnYWxlcnQnLFxuICBGQURFICA6ICdmYWRlJyxcbiAgU0hPVyAgOiAnc2hvdydcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEFsZXJ0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBjbG9zZShlbGVtZW50KSB7XG4gICAgbGV0IHJvb3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICByb290RWxlbWVudCA9IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudClcblxuICAgIGlmIChjdXN0b21FdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChyb290RWxlbWVudClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgIGxldCBwYXJlbnQgICAgID0gZmFsc2VcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcGFyZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KGAuJHtDbGFzc05hbWUuQUxFUlR9YClbMF1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfdHJpZ2dlckNsb3NlRXZlbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGNsb3NlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNMT1NFKVxuXG4gICAgJChlbGVtZW50KS50cmlnZ2VyKGNsb3NlRXZlbnQpXG4gICAgcmV0dXJuIGNsb3NlRXZlbnRcbiAgfVxuXG4gIF9yZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKCEkKGVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgICQoZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKGV2ZW50KSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50LCBldmVudCkpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpXG4gICAgICAuZGV0YWNoKClcbiAgICAgIC50cmlnZ2VyKEV2ZW50LkNMT1NFRClcbiAgICAgIC5yZW1vdmUoKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhICAgICAgID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQWxlcnQodGhpcylcbiAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9oYW5kbGVEaXNtaXNzKGFsZXJ0SW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBhbGVydEluc3RhbmNlLmNsb3NlKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oXG4gIEV2ZW50LkNMSUNLX0RBVEFfQVBJLFxuICBTZWxlY3Rvci5ESVNNSVNTLFxuICBBbGVydC5faGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSlcbilcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSAgICAgICAgICAgICA9IEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBbGVydFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdidXR0b24nXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5idXR0b24nXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBBQ1RJVkUgOiAnYWN0aXZlJyxcbiAgQlVUVE9OIDogJ2J0bicsXG4gIEZPQ1VTICA6ICdmb2N1cydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERBVEFfVE9HR0xFX0NBUlJPVCAgIDogJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLFxuICBEQVRBX1RPR0dMRVMgICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJyxcbiAgREFUQV9UT0dHTEUgICAgICAgICAgOiAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uXCJdJyxcbiAgREFUQV9UT0dHTEVTX0JVVFRPTlMgOiAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSAuYnRuJyxcbiAgSU5QVVQgICAgICAgICAgICAgICAgOiAnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKScsXG4gIEFDVElWRSAgICAgICAgICAgICAgIDogJy5hY3RpdmUnLFxuICBCVVRUT04gICAgICAgICAgICAgICA6ICcuYnRuJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgQ0xJQ0tfREFUQV9BUEkgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gIEZPQ1VTX0JMVVJfREFUQV9BUEkgOiBgZm9jdXMke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX0gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBibHVyJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgTE9BRF9EQVRBX0FQSSAgICAgICA6IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgbGV0IHRyaWdnZXJDaGFuZ2VFdmVudCA9IHRydWVcbiAgICBsZXQgYWRkQXJpYVByZXNzZWQgPSB0cnVlXG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoXG4gICAgICBTZWxlY3Rvci5EQVRBX1RPR0dMRVNcbiAgICApWzBdXG5cbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLklOUFVUKVxuXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSkpIHtcbiAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2VFdmVudCA9IGZhbHNlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSByb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkFDVElWRSlcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQudGFnTmFtZSA9PT0gJ0xBQkVMJyAmJiBpbnB1dC5jaGVja2VkID09PSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKSkge1xuICAgICAgICAgICAgdHJpZ2dlckNoYW5nZUV2ZW50ID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgaXQncyBub3QgYSByYWRpbyBidXR0b24gb3IgY2hlY2tib3ggZG9uJ3QgYWRkIGEgcG9pbnRsZXNzL2ludmFsaWQgY2hlY2tlZCBwcm9wZXJ0eSB0byB0aGUgaW5wdXRcbiAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgICAkKGlucHV0KS50cmlnZ2VyKCdjaGFuZ2UnKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQuZm9jdXMoKVxuICAgICAgICBhZGRBcmlhUHJlc3NlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5fZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpKSB7XG4gICAgICBpZiAoYWRkQXJpYVByZXNzZWQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsXG4gICAgICAgICAgIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5BQ1RJVkUpKVxuICAgICAgfVxuXG4gICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRV9DQVJST1QsIChldmVudCkgPT4ge1xuICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXRcblxuICAgIGlmICghJChidXR0b24pLmhhc0NsYXNzKENsYXNzTmFtZS5CVVRUT04pKSB7XG4gICAgICBidXR0b24gPSAkKGJ1dHRvbikuY2xvc2VzdChTZWxlY3Rvci5CVVRUT04pWzBdXG4gICAgfVxuXG4gICAgaWYgKCFidXR0b24gfHwgYnV0dG9uLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3ggYnVnICMxNTQwOTk1XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlucHV0QnRuID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSU5QVVQpXG5cbiAgICAgIGlmIChpbnB1dEJ0biAmJiAoaW5wdXRCdG4uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGlucHV0QnRuLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKSAvLyB3b3JrIGFyb3VuZCBGaXJlZm94IGJ1ZyAjMTU0MDk5NVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGJ1dHRvbiksICd0b2dnbGUnKVxuICAgIH1cbiAgfSlcbiAgLm9uKEV2ZW50LkZPQ1VTX0JMVVJfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFX0NBUlJPVCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU2VsZWN0b3IuQlVUVE9OKVswXVxuICAgICQoYnV0dG9uKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuRk9DVVMsIC9eZm9jdXMoaW4pPyQvLnRlc3QoZXZlbnQudHlwZSkpXG4gIH0pXG5cbiQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIC8vIGVuc3VyZSBjb3JyZWN0IGFjdGl2ZSBjbGFzcyBpcyBzZXQgdG8gbWF0Y2ggdGhlIGNvbnRyb2xzJyBhY3R1YWwgdmFsdWVzL3N0YXRlc1xuXG4gIC8vIGZpbmQgYWxsIGNoZWNrYm94ZXMvcmVhZGlvIGJ1dHRvbnMgaW5zaWRlIGRhdGEtdG9nZ2xlIGdyb3Vwc1xuICBsZXQgYnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1RPR0dMRVNfQlVUVE9OUykpXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBidXR0b25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYnV0dG9uID0gYnV0dG9uc1tpXVxuICAgIGNvbnN0IGlucHV0ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSU5QVVQpXG4gICAgaWYgKGlucHV0LmNoZWNrZWQgfHwgaW5wdXQuaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfVxuICB9XG5cbiAgLy8gZmluZCBhbGwgYnV0dG9uIHRvZ2dsZXNcbiAgYnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBidXR0b25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYnV0dG9uID0gYnV0dG9uc1tpXVxuICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuQUNUSVZFKVxuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuQUNUSVZFKVxuICAgIH1cbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQnV0dG9uXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgICAgID0gJ2Nhcm91c2VsJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICAgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgICA9ICQuZm5bTkFNRV1cbmNvbnN0IEFSUk9XX0xFRlRfS0VZQ09ERSAgICAgPSAzNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBsZWZ0IGFycm93IGtleVxuY29uc3QgQVJST1dfUklHSFRfS0VZQ09ERSAgICA9IDM5IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHJpZ2h0IGFycm93IGtleVxuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCAgICAgICAgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpbnRlcnZhbCA6IDUwMDAsXG4gIGtleWJvYXJkIDogdHJ1ZSxcbiAgc2xpZGUgICAgOiBmYWxzZSxcbiAgcGF1c2UgICAgOiAnaG92ZXInLFxuICB3cmFwICAgICA6IHRydWUsXG4gIHRvdWNoICAgIDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWwgOiAnKG51bWJlcnxib29sZWFuKScsXG4gIGtleWJvYXJkIDogJ2Jvb2xlYW4nLFxuICBzbGlkZSAgICA6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgcGF1c2UgICAgOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHdyYXAgICAgIDogJ2Jvb2xlYW4nLFxuICB0b3VjaCAgICA6ICdib29sZWFuJ1xufVxuXG5jb25zdCBEaXJlY3Rpb24gPSB7XG4gIE5FWFQgICAgIDogJ25leHQnLFxuICBQUkVWICAgICA6ICdwcmV2JyxcbiAgTEVGVCAgICAgOiAnbGVmdCcsXG4gIFJJR0hUICAgIDogJ3JpZ2h0J1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgU0xJREUgICAgICAgICAgOiBgc2xpZGUke0VWRU5UX0tFWX1gLFxuICBTTElEICAgICAgICAgICA6IGBzbGlkJHtFVkVOVF9LRVl9YCxcbiAgS0VZRE9XTiAgICAgICAgOiBga2V5ZG93biR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVIgICAgIDogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFICAgICA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YCxcbiAgVE9VQ0hTVEFSVCAgICAgOiBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWAsXG4gIFRPVUNITU9WRSAgICAgIDogYHRvdWNobW92ZSR7RVZFTlRfS0VZfWAsXG4gIFRPVUNIRU5EICAgICAgIDogYHRvdWNoZW5kJHtFVkVOVF9LRVl9YCxcbiAgUE9JTlRFUkRPV04gICAgOiBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gLFxuICBQT0lOVEVSVVAgICAgICA6IGBwb2ludGVydXAke0VWRU5UX0tFWX1gLFxuICBEUkFHX1NUQVJUICAgICA6IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gLFxuICBMT0FEX0RBVEFfQVBJICA6IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgQ0FST1VTRUwgICAgICA6ICdjYXJvdXNlbCcsXG4gIEFDVElWRSAgICAgICAgOiAnYWN0aXZlJyxcbiAgU0xJREUgICAgICAgICA6ICdzbGlkZScsXG4gIFJJR0hUICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbS1yaWdodCcsXG4gIExFRlQgICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbS1sZWZ0JyxcbiAgTkVYVCAgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtLW5leHQnLFxuICBQUkVWICAgICAgICAgIDogJ2Nhcm91c2VsLWl0ZW0tcHJldicsXG4gIElURU0gICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbScsXG4gIFBPSU5URVJfRVZFTlQgOiAncG9pbnRlci1ldmVudCdcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIEFDVElWRSAgICAgIDogJy5hY3RpdmUnLFxuICBBQ1RJVkVfSVRFTSA6ICcuYWN0aXZlLmNhcm91c2VsLWl0ZW0nLFxuICBJVEVNICAgICAgICA6ICcuY2Fyb3VzZWwtaXRlbScsXG4gIElURU1fSU1HICAgIDogJy5jYXJvdXNlbC1pdGVtIGltZycsXG4gIE5FWFRfUFJFViAgIDogJy5jYXJvdXNlbC1pdGVtLW5leHQsIC5jYXJvdXNlbC1pdGVtLXByZXYnLFxuICBJTkRJQ0FUT1JTICA6ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycycsXG4gIERBVEFfU0xJREUgIDogJ1tkYXRhLXNsaWRlXSwgW2RhdGEtc2xpZGUtdG9dJyxcbiAgREFUQV9SSURFICAgOiAnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJ1xufVxuXG5jb25zdCBQb2ludGVyVHlwZSA9IHtcbiAgVE9VQ0ggOiAndG91Y2gnLFxuICBQRU4gICA6ICdwZW4nXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuY2xhc3MgQ2Fyb3VzZWwge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9pdGVtcyAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2ludGVydmFsICAgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1BhdXNlZCAgICAgID0gZmFsc2VcbiAgICB0aGlzLl9pc1NsaWRpbmcgICAgID0gZmFsc2VcbiAgICB0aGlzLnRvdWNoVGltZW91dCAgID0gbnVsbFxuICAgIHRoaXMudG91Y2hTdGFydFggICAgPSAwXG4gICAgdGhpcy50b3VjaERlbHRhWCAgICA9IDBcblxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICA9IGVsZW1lbnRcbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JTkRJQ0FUT1JTKVxuICAgIHRoaXMuX3RvdWNoU3VwcG9ydGVkICAgID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgICB0aGlzLl9wb2ludGVyRXZlbnQgICAgICA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudCB8fCB3aW5kb3cuTVNQb2ludGVyRXZlbnQpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIG5leHQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKERpcmVjdGlvbi5ORVhUKVxuICAgIH1cbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmXG4gICAgICAoJCh0aGlzLl9lbGVtZW50KS5pcygnOnZpc2libGUnKSAmJiAkKHRoaXMuX2VsZW1lbnQpLmNzcygndmlzaWJpbGl0eScpICE9PSAnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoRGlyZWN0aW9uLlBSRVYpXG4gICAgfVxuICB9XG5cbiAgcGF1c2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk5FWFRfUFJFVikpIHtcbiAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudClcbiAgICAgIHRoaXMuY3ljbGUodHJ1ZSlcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICB9XG5cbiAgY3ljbGUoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPyB0aGlzLm5leHRXaGVuVmlzaWJsZSA6IHRoaXMubmV4dCkuYmluZCh0aGlzKSxcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgdG8oaW5kZXgpIHtcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkFDVElWRV9JVEVNKVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudClcblxuICAgIGlmIChpbmRleCA+IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFdmVudC5TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBpbmRleCA+IGFjdGl2ZUluZGV4XG4gICAgICA/IERpcmVjdGlvbi5ORVhUXG4gICAgICA6IERpcmVjdGlvbi5QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShkaXJlY3Rpb24sIHRoaXMuX2l0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2l0ZW1zICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2ludGVydmFsICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzU2xpZGluZyAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgICAgID0gbnVsbFxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YXggPSBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRheCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRheCAvIHRoaXMudG91Y2hEZWx0YVhcblxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICAvLyBzd2lwZSBsZWZ0XG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIHRoaXMucHJldigpXG4gICAgfVxuXG4gICAgLy8gc3dpcGUgcmlnaHRcbiAgICBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub24oRXZlbnQuS0VZRE9XTiwgKGV2ZW50KSA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbihFdmVudC5NT1VTRUVOVEVSLCAoZXZlbnQpID0+IHRoaXMucGF1c2UoZXZlbnQpKVxuICAgICAgICAub24oRXZlbnQuTU9VU0VMRUFWRSwgKGV2ZW50KSA9PiB0aGlzLmN5Y2xlKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAoIXRoaXMuX3RvdWNoU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiBQb2ludGVyVHlwZVtldmVudC5vcmlnaW5hbEV2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC5vcmlnaW5hbEV2ZW50LmNsaWVudFhcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAvLyBlbnN1cmUgc3dpcGluZyB3aXRoIG9uZSB0b3VjaCBhbmQgbm90IHBpbmNoaW5nXG4gICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIFBvaW50ZXJUeXBlW2V2ZW50Lm9yaWdpbmFsRXZlbnQucG9pbnRlclR5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KChldmVudCkgPT4gdGhpcy5jeWNsZShldmVudCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuSVRFTV9JTUcpKS5vbihFdmVudC5EUkFHX1NUQVJULCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuUE9JTlRFUkRPV04sIChldmVudCkgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5QT0lOVEVSVVAsIChldmVudCkgPT4gZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5QT0lOVEVSX0VWRU5UKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlRPVUNIU1RBUlQsIChldmVudCkgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5UT1VDSE1PVkUsIChldmVudCkgPT4gbW92ZShldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlRPVUNIRU5ELCAoZXZlbnQpID0+IGVuZChldmVudCkpXG4gICAgfVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlDT0RFOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMucHJldigpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWUNPREU6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5uZXh0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgdGhpcy5faXRlbXMgPSBlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgPyBbXS5zbGljZS5jYWxsKGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLklURU0pKVxuICAgICAgOiBbXVxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGVsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudCkge1xuICAgIGNvbnN0IGlzTmV4dERpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFRcbiAgICBjb25zdCBpc1ByZXZEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWXG4gICAgY29uc3QgYWN0aXZlSW5kZXggICAgID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbGFzdEl0ZW1JbmRleCAgID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMVxuICAgIGNvbnN0IGlzR29pbmdUb1dyYXAgICA9IGlzUHJldkRpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmV4dERpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gbGFzdEl0ZW1JbmRleFxuXG4gICAgaWYgKGlzR29pbmdUb1dyYXAgJiYgIXRoaXMuX2NvbmZpZy53cmFwKSB7XG4gICAgICByZXR1cm4gYWN0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhICAgICA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlBSRVYgPyAtMSA6IDFcbiAgICBjb25zdCBpdGVtSW5kZXggPSAoYWN0aXZlSW5kZXggKyBkZWx0YSkgJSB0aGlzLl9pdGVtcy5sZW5ndGhcblxuICAgIHJldHVybiBpdGVtSW5kZXggPT09IC0xXG4gICAgICA/IHRoaXMuX2l0ZW1zW3RoaXMuX2l0ZW1zLmxlbmd0aCAtIDFdIDogdGhpcy5faXRlbXNbaXRlbUluZGV4XVxuICB9XG5cbiAgX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGV2ZW50RGlyZWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5BQ1RJVkVfSVRFTSkpXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0xJREUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGZyb21JbmRleCxcbiAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgIH0pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZGVFdmVudClcblxuICAgIHJldHVybiBzbGlkZUV2ZW50XG4gIH1cblxuICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICBjb25zdCBpbmRpY2F0b3JzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkFDVElWRSkpXG4gICAgICAkKGluZGljYXRvcnMpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuXG4gICAgICBjb25zdCBuZXh0SW5kaWNhdG9yID0gdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQuY2hpbGRyZW5bXG4gICAgICAgIHRoaXMuX2dldEl0ZW1JbmRleChlbGVtZW50KVxuICAgICAgXVxuXG4gICAgICBpZiAobmV4dEluZGljYXRvcikge1xuICAgICAgICAkKG5leHRJbmRpY2F0b3IpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3NsaWRlKGRpcmVjdGlvbiwgZWxlbWVudCkge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQUNUSVZFX0lURU0pXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgICA9IGVsZW1lbnQgfHwgYWN0aXZlRWxlbWVudCAmJlxuICAgICAgdGhpcy5fZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KVxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG5cbiAgICBsZXQgZGlyZWN0aW9uYWxDbGFzc05hbWVcbiAgICBsZXQgb3JkZXJDbGFzc05hbWVcbiAgICBsZXQgZXZlbnREaXJlY3Rpb25OYW1lXG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCkge1xuICAgICAgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBDbGFzc05hbWUuTEVGVFxuICAgICAgb3JkZXJDbGFzc05hbWUgPSBDbGFzc05hbWUuTkVYVFxuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRGlyZWN0aW9uLkxFRlRcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBDbGFzc05hbWUuUklHSFRcbiAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ2xhc3NOYW1lLlBSRVZcbiAgICAgIGV2ZW50RGlyZWN0aW9uTmFtZSA9IERpcmVjdGlvbi5SSUdIVFxuICAgIH1cblxuICAgIGlmIChuZXh0RWxlbWVudCAmJiAkKG5leHRFbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuQUNUSVZFKSkge1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0aGlzLl90cmlnZ2VyU2xpZGVFdmVudChuZXh0RWxlbWVudCwgZXZlbnREaXJlY3Rpb25OYW1lKVxuICAgIGlmIChzbGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnQpXG5cbiAgICBjb25zdCBzbGlkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNMSUQsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgIH0pXG5cbiAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0xJREUpKSB7XG4gICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhvcmRlckNsYXNzTmFtZSlcblxuICAgICAgVXRpbC5yZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICAgICQoYWN0aXZlRWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgY29uc3QgbmV4dEVsZW1lbnRJbnRlcnZhbCA9IHBhcnNlSW50KG5leHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlcnZhbCcpLCAxMClcbiAgICAgIGlmIChuZXh0RWxlbWVudEludGVydmFsKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBuZXh0RWxlbWVudEludGVydmFsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgfVxuXG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZUVsZW1lbnQpXG5cbiAgICAgICQoYWN0aXZlRWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgICAgICAgJChuZXh0RWxlbWVudClcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhgJHtkaXJlY3Rpb25hbENsYXNzTmFtZX0gJHtvcmRlckNsYXNzTmFtZX1gKVxuICAgICAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKGAke0NsYXNzTmFtZS5BQ1RJVkV9ICR7b3JkZXJDbGFzc05hbWV9ICR7ZGlyZWN0aW9uYWxDbGFzc05hbWV9YClcblxuICAgICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkRXZlbnQpLCAwKVxuICAgICAgICB9KVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudClcbiAgICB9XG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgbGV0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiQodGhpcykuZGF0YSgpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBfY29uZmlnID0ge1xuICAgICAgICAgIC4uLl9jb25maWcsXG4gICAgICAgICAgLi4uY29uZmlnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0gdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBjb25maWcgOiBfY29uZmlnLnNsaWRlXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IENhcm91c2VsKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbYWN0aW9uXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2FjdGlvbn1cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVthY3Rpb25dKClcbiAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnRlcnZhbCAmJiBfY29uZmlnLnJpZGUpIHtcbiAgICAgICAgZGF0YS5wYXVzZSgpXG4gICAgICAgIGRhdGEuY3ljbGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2RhdGFBcGlDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gJChzZWxlY3RvcilbMF1cblxuICAgIGlmICghdGFyZ2V0IHx8ICEkKHRhcmdldCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNBUk9VU0VMKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uJCh0YXJnZXQpLmRhdGEoKSxcbiAgICAgIC4uLiQodGhpcykuZGF0YSgpXG4gICAgfVxuICAgIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZS10bycpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgY29uZmlnLmludGVydmFsID0gZmFsc2VcbiAgICB9XG5cbiAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpLnRvKHNsaWRlSW5kZXgpXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1NMSURFLCBDYXJvdXNlbC5fZGF0YUFwaUNsaWNrSGFuZGxlcilcblxuJCh3aW5kb3cpLm9uKEV2ZW50LkxPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRBVEFfUklERSkpXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjYXJvdXNlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCAkY2Fyb3VzZWwgPSAkKGNhcm91c2Vsc1tpXSlcbiAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJGNhcm91c2VsLCAkY2Fyb3VzZWwuZGF0YSgpKVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENhcm91c2VsXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdjb2xsYXBzZSdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHRvZ2dsZSA6IHRydWUsXG4gIHBhcmVudCA6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICB0b2dnbGUgOiAnYm9vbGVhbicsXG4gIHBhcmVudCA6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgU0hPVyAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSElERSAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIFNIT1cgICAgICAgOiAnc2hvdycsXG4gIENPTExBUFNFICAgOiAnY29sbGFwc2UnLFxuICBDT0xMQVBTSU5HIDogJ2NvbGxhcHNpbmcnLFxuICBDT0xMQVBTRUQgIDogJ2NvbGxhcHNlZCdcbn1cblxuY29uc3QgRGltZW5zaW9uID0ge1xuICBXSURUSCAgOiAnd2lkdGgnLFxuICBIRUlHSFQgOiAnaGVpZ2h0J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgQUNUSVZFUyAgICAgOiAnLnNob3csIC5jb2xsYXBzaW5nJyxcbiAgREFUQV9UT0dHTEUgOiAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBDb2xsYXBzZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgID0gZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJHtlbGVtZW50LmlkfVwiXSxgICtcbiAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXRhcmdldD1cIiMke2VsZW1lbnQuaWR9XCJdYFxuICAgICkpXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRBVEFfVE9HR0xFKSlcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgZWxlbSA9IHRvZ2dsZUxpc3RbaV1cbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcbiAgICAgICAgLmZpbHRlcigoZm91bmRFbGVtKSA9PiBmb3VuZEVsZW0gPT09IGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCAmJiBmaWx0ZXJFbGVtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGxcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlc1xuICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgYWN0aXZlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQUNUSVZFUykpXG4gICAgICAgIC5maWx0ZXIoKGVsZW0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50JykgPT09IHRoaXMuX2NvbmZpZy5wYXJlbnRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICB9KVxuXG4gICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWN0aXZlcyA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgYWN0aXZlc0RhdGEgPSAkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvcikuZGF0YShEQVRBX0tFWSlcbiAgICAgIGlmIChhY3RpdmVzRGF0YSAmJiBhY3RpdmVzRGF0YS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1cpXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChhY3RpdmVzKS5ub3QodGhpcy5fc2VsZWN0b3IpLCAnaGlkZScpXG4gICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgICQoYWN0aXZlcykuZGF0YShEQVRBX0tFWSwgbnVsbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDBcblxuICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAkKHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpXG4gICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuU0hPV04pXG4gICAgfVxuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKVxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8XG4gICAgICAhJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUpXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIGNvbnN0IHRyaWdnZXJBcnJheUxlbmd0aCA9IHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGhcbiAgICBpZiAodHJpZ2dlckFycmF5TGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyQXJyYXlMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlckFycmF5W2ldXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRyaWdnZXIpXG5cbiAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgJGVsZW0gPSAkKFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKVxuICAgICAgICAgIGlmICghJGVsZW0uaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgICAgICAkKHRyaWdnZXIpLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpXG4gICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAudHJpZ2dlcihFdmVudC5ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9IG51bGxcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIGNvbnN0IGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhEaW1lbnNpb24uV0lEVEgpXG4gICAgcmV0dXJuIGhhc1dpZHRoID8gRGltZW5zaW9uLldJRFRIIDogRGltZW5zaW9uLkhFSUdIVFxuICB9XG5cbiAgX2dldFBhcmVudCgpIHtcbiAgICBsZXQgcGFyZW50XG5cbiAgICBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRcblxuICAgICAgLy8gSXQncyBhIGpRdWVyeSBvYmplY3RcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRbMF1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb25maWcucGFyZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdG9yID1cbiAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXBhcmVudD1cIiR7dGhpcy5fY29uZmlnLnBhcmVudH1cIl1gXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuICAgICQoY2hpbGRyZW4pLmVhY2goKGksIGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhcbiAgICAgICAgQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpLFxuICAgICAgICBbZWxlbWVudF1cbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcbiAgICBjb25zdCBpc09wZW4gPSAkKGVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKHRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICQodHJpZ2dlckFycmF5KVxuICAgICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGxcbiAgfVxuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhICAgICAgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uJHRoaXMuZGF0YSgpLFxuICAgICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ29sbGFwc2UodGhpcywgX2NvbmZpZylcbiAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0ICR0cmlnZ2VyID0gJCh0aGlzKVxuICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuICBjb25zdCBzZWxlY3RvcnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuXG4gICQoc2VsZWN0b3JzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJCh0aGlzKVxuICAgIGNvbnN0IGRhdGEgICAgPSAkdGFyZ2V0LmRhdGEoREFUQV9LRVkpXG4gICAgY29uc3QgY29uZmlnICA9IGRhdGEgPyAndG9nZ2xlJyA6ICR0cmlnZ2VyLmRhdGEoKVxuICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkdGFyZ2V0LCBjb25maWcpXG4gIH0pXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBQb3BwZXIgZnJvbSAncG9wcGVyLmpzJ1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgICAgICAgPSAnZHJvcGRvd24nXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgICAgICAgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgICAgICA9ICQuZm5bTkFNRV1cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFICAgICAgICAgICA9IDI3IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIEVzY2FwZSAoRXNjKSBrZXlcbmNvbnN0IFNQQUNFX0tFWUNPREUgICAgICAgICAgICA9IDMyIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHNwYWNlIGtleVxuY29uc3QgVEFCX0tFWUNPREUgICAgICAgICAgICAgID0gOSAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB0YWIga2V5XG5jb25zdCBBUlJPV19VUF9LRVlDT0RFICAgICAgICAgPSAzOCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB1cCBhcnJvdyBrZXlcbmNvbnN0IEFSUk9XX0RPV05fS0VZQ09ERSAgICAgICA9IDQwIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGRvd24gYXJyb3cga2V5XG5jb25zdCBSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0ggPSAzIC8vIE1vdXNlRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRoZSByaWdodCBidXR0b24gKGFzc3VtaW5nIGEgcmlnaHQtaGFuZGVkIG1vdXNlKVxuY29uc3QgUkVHRVhQX0tFWURPV04gICAgICAgICAgID0gbmV3IFJlZ0V4cChgJHtBUlJPV19VUF9LRVlDT0RFfXwke0FSUk9XX0RPV05fS0VZQ09ERX18JHtFU0NBUEVfS0VZQ09ERX1gKVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERSAgICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0sgICAgICAgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RBVEFfQVBJICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICBLRVlET1dOX0RBVEFfQVBJIDogYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICBLRVlVUF9EQVRBX0FQSSAgIDogYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIERJU0FCTEVEICAgICAgICA6ICdkaXNhYmxlZCcsXG4gIFNIT1cgICAgICAgICAgICA6ICdzaG93JyxcbiAgRFJPUFVQICAgICAgICAgIDogJ2Ryb3B1cCcsXG4gIERST1BSSUdIVCAgICAgICA6ICdkcm9wcmlnaHQnLFxuICBEUk9QTEVGVCAgICAgICAgOiAnZHJvcGxlZnQnLFxuICBNRU5VUklHSFQgICAgICAgOiAnZHJvcGRvd24tbWVudS1yaWdodCcsXG4gIE1FTlVMRUZUICAgICAgICA6ICdkcm9wZG93bi1tZW51LWxlZnQnLFxuICBQT1NJVElPTl9TVEFUSUMgOiAncG9zaXRpb24tc3RhdGljJ1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgREFUQV9UT0dHTEUgICA6ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsXG4gIEZPUk1fQ0hJTEQgICAgOiAnLmRyb3Bkb3duIGZvcm0nLFxuICBNRU5VICAgICAgICAgIDogJy5kcm9wZG93bi1tZW51JyxcbiAgTkFWQkFSX05BViAgICA6ICcubmF2YmFyLW5hdicsXG4gIFZJU0lCTEVfSVRFTVMgOiAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG59XG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIFRPUCAgICAgICA6ICd0b3Atc3RhcnQnLFxuICBUT1BFTkQgICAgOiAndG9wLWVuZCcsXG4gIEJPVFRPTSAgICA6ICdib3R0b20tc3RhcnQnLFxuICBCT1RUT01FTkQgOiAnYm90dG9tLWVuZCcsXG4gIFJJR0hUICAgICA6ICdyaWdodC1zdGFydCcsXG4gIFJJR0hURU5EICA6ICdyaWdodC1lbmQnLFxuICBMRUZUICAgICAgOiAnbGVmdC1zdGFydCcsXG4gIExFRlRFTkQgICA6ICdsZWZ0LWVuZCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0ICAgICAgIDogMCxcbiAgZmxpcCAgICAgICAgIDogdHJ1ZSxcbiAgYm91bmRhcnkgICAgIDogJ3Njcm9sbFBhcmVudCcsXG4gIHJlZmVyZW5jZSAgICA6ICd0b2dnbGUnLFxuICBkaXNwbGF5ICAgICAgOiAnZHluYW1pYycsXG4gIHBvcHBlckNvbmZpZyA6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldCAgICAgICA6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICBmbGlwICAgICAgICAgOiAnYm9vbGVhbicsXG4gIGJvdW5kYXJ5ICAgICA6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgcmVmZXJlbmNlICAgIDogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBkaXNwbGF5ICAgICAgOiAnc3RyaW5nJyxcbiAgcG9wcGVyQ29uZmlnIDogJyhudWxsfG9iamVjdCknXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgID0gZWxlbWVudFxuICAgIHRoaXMuX3BvcHBlciAgID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9tZW51ICAgICA9IHRoaXMuX2dldE1lbnVFbGVtZW50KClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBEcm9wZG93bi5fY2xlYXJNZW51cygpXG5cbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2hvdyh0cnVlKVxuICB9XG5cbiAgc2hvdyh1c2VQb3BwZXIgPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSB8fCAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCByZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgJChwYXJlbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0b3RhbGx5IFBvcHBlci5qcyBmb3IgRHJvcGRvd24gaW4gTmF2YmFyXG4gICAgaWYgKCF0aGlzLl9pbk5hdmJhciAmJiB1c2VQb3BwZXIpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgZm9yIFBvcHBlciBkZXBlbmRlbmN5XG4gICAgICAgKiBQb3BwZXIgLSBodHRwczovL3BvcHBlci5qcy5vcmdcbiAgICAgICAqL1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcvKScpXG4gICAgICB9XG5cbiAgICAgIGxldCByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHBhcmVudFxuICAgICAgfSBlbHNlIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0J3MgalF1ZXJ5IGVsZW1lbnRcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlLmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVswXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGJvdW5kYXJ5IGlzIG5vdCBgc2Nyb2xsUGFyZW50YCwgdGhlbiBzZXQgcG9zaXRpb24gdG8gYHN0YXRpY2BcbiAgICAgIC8vIHRvIGFsbG93IHRoZSBtZW51IHRvIFwiZXNjYXBlXCIgdGhlIHNjcm9sbCBwYXJlbnQncyBib3VuZGFyaWVzXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI0MjUxXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJvdW5kYXJ5ICE9PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgICAkKHBhcmVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlBPU0lUSU9OX1NUQVRJQylcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCkpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAgICQocGFyZW50KS5jbG9zZXN0KFNlbGVjdG9yLk5BVkJBUl9OQVYpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgJCh0aGlzLl9tZW51KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAkKHBhcmVudClcbiAgICAgIC50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuU0hPV04sIHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkgfHwgISQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9tZW51KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAkKHBhcmVudClcbiAgICAgIC50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX21lbnUgPSBudWxsXG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0ssIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi4kKHRoaXMuX2VsZW1lbnQpLmRhdGEoKSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9tZW51KSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICB0aGlzLl9tZW51ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTUVOVSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX21lbnVcbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgJHBhcmVudERyb3Bkb3duID0gJCh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgbGV0IHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuQk9UVE9NXG5cbiAgICAvLyBIYW5kbGUgZHJvcHVwXG4gICAgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUFVQKSkge1xuICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5UT1BcbiAgICAgIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5NRU5VUklHSFQpKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuVE9QRU5EXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BSSUdIVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuUklHSFRcbiAgICB9IGVsc2UgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUExFRlQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkxFRlRcbiAgICB9IGVsc2UgaWYgKCQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLk1FTlVSSUdIVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuQk9UVE9NRU5EXG4gICAgfVxuICAgIHJldHVybiBwbGFjZW1lbnRcbiAgfVxuXG4gIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgcmV0dXJuICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdCgnLm5hdmJhcicpLmxlbmd0aCA+IDBcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge31cblxuICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2Zmc2V0LmZuID0gKGRhdGEpID0+IHtcbiAgICAgICAgZGF0YS5vZmZzZXRzID0ge1xuICAgICAgICAgIC4uLmRhdGEub2Zmc2V0cyxcbiAgICAgICAgICAuLi50aGlzLl9jb25maWcub2Zmc2V0KGRhdGEub2Zmc2V0cywgdGhpcy5fZWxlbWVudCkgfHwge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgIGZsaXA6IHtcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLl9jb25maWcuZmxpcFxuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlci5qcyBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBwb3BwZXJDb25maWcubW9kaWZpZXJzLmFwcGx5U3R5bGUgPSB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnBvcHBlckNvbmZpZyxcbiAgICAgIC4uLnRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWdcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bih0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9jbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIChldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIHx8XG4gICAgICBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoICE9PSBUQUJfS0VZQ09ERSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKVxuICAgICAgY29uc3QgY29udGV4dCA9ICQodG9nZ2xlc1tpXSkuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRvZ2dsZXNbaV1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGNvbnRleHQuX21lbnVcbiAgICAgIGlmICghJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgICAgICAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoID09PSBUQUJfS0VZQ09ERSkgJiZcbiAgICAgICAgICAkLmNvbnRhaW5zKHBhcmVudCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgICB9XG5cbiAgICAgIHRvZ2dsZXNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcblxuICAgICAgaWYgKGNvbnRleHQuX3BvcHBlcikge1xuICAgICAgICBjb250ZXh0Ll9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB9XG5cbiAgICAgICQoZHJvcGRvd25NZW51KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgICQocGFyZW50KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgcGFyZW50XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgc3RhdGljIF9kYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gQW5kIG5vdCBhIGtleSBpbiBSRUdFWFBfS0VZRE9XTiA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgLSBJZiBrZXkgaXMgb3RoZXIgdGhhbiBlc2NhcGVcbiAgICAvLyAgICAtIElmIGtleSBpcyBub3QgdXAgb3IgZG93biA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpXG4gICAgICA/IGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoICE9PSBFU0NBUEVfS0VZQ09ERSAmJlxuICAgICAgKGV2ZW50LndoaWNoICE9PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgZXZlbnQud2hpY2ggIT09IEFSUk9XX1VQX0tFWUNPREUgfHxcbiAgICAgICAgJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU2VsZWN0b3IuTUVOVSkubGVuZ3RoKSA6ICFSRUdFWFBfS0VZRE9XTi50ZXN0KGV2ZW50LndoaWNoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCAgID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMpXG4gICAgY29uc3QgaXNBY3RpdmUgPSAkKHBhcmVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCBpc0FjdGl2ZSAmJiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFKSkge1xuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICBjb25zdCB0b2dnbGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5EQVRBX1RPR0dMRSlcbiAgICAgICAgJCh0b2dnbGUpLnRyaWdnZXIoJ2ZvY3VzJylcbiAgICAgIH1cblxuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbGljaycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpdGVtcyA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuVklTSUJMRV9JVEVNUykpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiAkKGl0ZW0pLmlzKCc6dmlzaWJsZScpKVxuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpXG5cbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX1VQX0tFWUNPREUgJiYgaW5kZXggPiAwKSB7IC8vIFVwXG4gICAgICBpbmRleC0tXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7IC8vIERvd25cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBpbmRleCA9IDBcbiAgICB9XG5cbiAgICBpdGVtc1tpbmRleF0uZm9jdXMoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEV2ZW50LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuTUVOVSwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgLm9uKGAke0V2ZW50LkNMSUNLX0RBVEFfQVBJfSAke0V2ZW50LktFWVVQX0RBVEFfQVBJfWAsIERyb3Bkb3duLl9jbGVhck1lbnVzKVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZScpXG4gIH0pXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuRk9STV9DSElMRCwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdtb2RhbCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuY29uc3QgRVNDQVBFX0tFWUNPREUgICAgID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcCA6IHRydWUsXG4gIGtleWJvYXJkIDogdHJ1ZSxcbiAgZm9jdXMgICAgOiB0cnVlLFxuICBzaG93ICAgICA6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wIDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZCA6ICdib29sZWFuJyxcbiAgZm9jdXMgICAgOiAnYm9vbGVhbicsXG4gIHNob3cgICAgIDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElERV9QUkVWRU5URUQgICAgOiBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU4gICAgICAgICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBSRVNJWkUgICAgICAgICAgICA6IGByZXNpemUke0VWRU5UX0tFWX1gLFxuICBDTElDS19ESVNNSVNTICAgICA6IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgS0VZRE9XTl9ESVNNSVNTICAgOiBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VVUF9ESVNNSVNTICAgOiBgbW91c2V1cC5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VET1dOX0RJU01JU1MgOiBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSAgICA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBTQ1JPTExBQkxFICAgICAgICAgOiAnbW9kYWwtZGlhbG9nLXNjcm9sbGFibGUnLFxuICBTQ1JPTExCQVJfTUVBU1VSRVIgOiAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnLFxuICBCQUNLRFJPUCAgICAgICAgICAgOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBPUEVOICAgICAgICAgICAgICAgOiAnbW9kYWwtb3BlbicsXG4gIEZBREUgICAgICAgICAgICAgICA6ICdmYWRlJyxcbiAgU0hPVyAgICAgICAgICAgICAgIDogJ3Nob3cnLFxuICBTVEFUSUMgICAgICAgICAgICAgOiAnbW9kYWwtc3RhdGljJ1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgRElBTE9HICAgICAgICAgOiAnLm1vZGFsLWRpYWxvZycsXG4gIE1PREFMX0JPRFkgICAgIDogJy5tb2RhbC1ib2R5JyxcbiAgREFUQV9UT0dHTEUgICAgOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxuICBEQVRBX0RJU01JU1MgICA6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICBGSVhFRF9DT05URU5UICA6ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJyxcbiAgU1RJQ0tZX0NPTlRFTlQgOiAnLnN0aWNreS10b3AnXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5ESUFMT0cpXG4gICAgdGhpcy5fYmFja2Ryb3AgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gZmFsc2VcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gZmFsc2VcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgICAgID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gMFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAodGhpcy5faXNTaG93biB8fCBzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG5cbiAgICB0aGlzLl9jaGVja1Njcm9sbGJhcigpXG4gICAgdGhpcy5fc2V0U2Nyb2xsYmFyKClcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihcbiAgICAgIEV2ZW50LkNMSUNLX0RJU01JU1MsXG4gICAgICBTZWxlY3Rvci5EQVRBX0RJU01JU1MsXG4gICAgICAoZXZlbnQpID0+IHRoaXMuaGlkZShldmVudClcbiAgICApXG5cbiAgICAkKHRoaXMuX2RpYWxvZykub24oRXZlbnQuTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKEV2ZW50Lk1PVVNFVVBfRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmICghdGhpcy5faXNTaG93biB8fCBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuQ0xJQ0tfRElTTUlTUylcbiAgICAkKHRoaXMuX2RpYWxvZykub2ZmKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTKVxuXG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uICA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIChldmVudCkgPT4gdGhpcy5faGlkZU1vZGFsKGV2ZW50KSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZU1vZGFsKClcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIFt3aW5kb3csIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2RpYWxvZ11cbiAgICAgIC5mb3JFYWNoKChodG1sRWxlbWVudCkgPT4gJChodG1sRWxlbWVudCkub2ZmKEVWRU5UX0tFWSkpXG5cbiAgICAvKipcbiAgICAgKiBgZG9jdW1lbnRgIGhhcyAyIGV2ZW50cyBgRXZlbnQuRk9DVVNJTmAgYW5kIGBFdmVudC5DTElDS19EQVRBX0FQSWBcbiAgICAgKiBEbyBub3QgbW92ZSBgZG9jdW1lbnRgIGluIGBodG1sRWxlbWVudHNgIGFycmF5XG4gICAgICogSXQgd2lsbCByZW1vdmUgYEV2ZW50LkNMSUNLX0RBVEFfQVBJYCBldmVudCB0aGF0IHNob3VsZCByZW1haW5cbiAgICAgKi9cbiAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuRk9DVVNJTilcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNTaG93biAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gbnVsbFxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBudWxsXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nICAgICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gbnVsbFxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnN0IGhpZGVFdmVudFByZXZlbnRlZCA9ICQuRXZlbnQoRXZlbnQuSElERV9QUkVWRU5URUQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnRQcmV2ZW50ZWQpXG4gICAgICBpZiAoaGlkZUV2ZW50UHJldmVudGVkLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuU1RBVElDKVxuXG4gICAgICBjb25zdCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLlNUQVRJQylcbiAgICAgIH0pXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gdGhpcy5fZGlhbG9nID8gdGhpcy5fZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTU9EQUxfQk9EWSkgOiBudWxsXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAvLyBEb24ndCBtb3ZlIG1vZGFsJ3MgRE9NIHBvc2l0aW9uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuXG4gICAgaWYgKCQodGhpcy5fZGlhbG9nKS5oYXNDbGFzcyhDbGFzc05hbWUuU0NST0xMQUJMRSkgJiYgbW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTiwge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpXG5cbiAgICAgICQodGhpcy5fZGlhbG9nKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfZW5mb3JjZUZvY3VzKCkge1xuICAgICQoZG9jdW1lbnQpXG4gICAgICAub2ZmKEV2ZW50LkZPQ1VTSU4pIC8vIEd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgLm9uKEV2ZW50LkZPQ1VTSU4sIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5LRVlET1dOX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuS0VZRE9XTl9ESVNNSVNTKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgKGV2ZW50KSA9PiB0aGlzLmhhbmRsZVVwZGF0ZShldmVudCkpXG4gICAgfSBlbHNlIHtcbiAgICAgICQod2luZG93KS5vZmYoRXZlbnQuUkVTSVpFKVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4ge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fcmVzZXRTY3JvbGxiYXIoKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlKClcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgID8gQ2xhc3NOYW1lLkZBREUgOiAnJ1xuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDbGFzc05hbWUuQkFDS0RST1BcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChhbmltYXRlKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgfSlcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fYmFja2Ryb3ApXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIGNvbnN0IGNhbGxiYWNrUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZW1vdmVCYWNrZHJvcCgpXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFja1JlbW92ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgLy8gdG9kbyAoZmF0KTogdGhlc2Ugc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgb3V0IG9mIG1vZGFsLmpzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9XG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIGlmICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICB9XG5cbiAgX2NoZWNrU2Nyb2xsYmFyKCkge1xuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSByZWN0LmxlZnQgKyByZWN0LnJpZ2h0IDwgd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKClcbiAgfVxuXG4gIF9zZXRTY3JvbGxiYXIoKSB7XG4gICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAvLyBOb3RlOiBET01Ob2RlLnN0eWxlLnBhZGRpbmdSaWdodCByZXR1cm5zIHRoZSBhY3R1YWwgdmFsdWUgb3IgJycgaWYgbm90IHNldFxuICAgICAgLy8gICB3aGlsZSAkKERPTU5vZGUpLmNzcygncGFkZGluZy1yaWdodCcpIHJldHVybnMgdGhlIGNhbGN1bGF0ZWQgdmFsdWUgb3IgMCBpZiBub3Qgc2V0XG4gICAgICBjb25zdCBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuRklYRURfQ09OVEVOVCkpXG4gICAgICBjb25zdCBzdGlja3lDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlNUSUNLWV9DT05URU5UKSlcblxuICAgICAgLy8gQWRqdXN0IGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuICAgICAgJChmaXhlZENvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFBhZGRpbmcgPSBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodFxuICAgICAgICBjb25zdCBjYWxjdWxhdGVkUGFkZGluZyA9ICQoZWxlbWVudCkuY3NzKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgIC5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZylcbiAgICAgICAgICAuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGp1c3Qgc3RpY2t5IGNvbnRlbnQgbWFyZ2luXG4gICAgICAkKHN0aWNreUNvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbE1hcmdpbiA9IGVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHRcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE1hcmdpbiA9ICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnKVxuICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgLmRhdGEoJ21hcmdpbi1yaWdodCcsIGFjdHVhbE1hcmdpbilcbiAgICAgICAgICAuY3NzKCdtYXJnaW4tcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRNYXJnaW4pIC0gdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgICAgfSlcblxuICAgICAgLy8gQWRqdXN0IGJvZHkgcGFkZGluZ1xuICAgICAgY29uc3QgYWN0dWFsUGFkZGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0XG4gICAgICBjb25zdCBjYWxjdWxhdGVkUGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuY3NzKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICQoZG9jdW1lbnQuYm9keSlcbiAgICAgICAgLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKVxuICAgICAgICAuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgfVxuXG4gICAgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhDbGFzc05hbWUuT1BFTilcbiAgfVxuXG4gIF9yZXNldFNjcm9sbGJhcigpIHtcbiAgICAvLyBSZXN0b3JlIGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuICAgIGNvbnN0IGZpeGVkQ29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5GSVhFRF9DT05URU5UKSlcbiAgICAkKGZpeGVkQ29udGVudCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSAkKGVsZW1lbnQpLmRhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJ1xuICAgIH0pXG5cbiAgICAvLyBSZXN0b3JlIHN0aWNreSBjb250ZW50XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7U2VsZWN0b3IuU1RJQ0tZX0NPTlRFTlR9YCkpXG4gICAgJChlbGVtZW50cykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG1hcmdpbiA9ICQoZWxlbWVudCkuZGF0YSgnbWFyZ2luLXJpZ2h0JylcbiAgICAgIGlmICh0eXBlb2YgbWFyZ2luICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JywgbWFyZ2luKS5yZW1vdmVEYXRhKCdtYXJnaW4tcmlnaHQnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBSZXN0b3JlIGJvZHkgcGFkZGluZ1xuICAgIGNvbnN0IHBhZGRpbmcgPSAkKGRvY3VtZW50LmJvZHkpLmRhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlRGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nID8gcGFkZGluZyA6ICcnXG4gIH1cblxuICBfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7IC8vIHRoeCBkLndhbHNoXG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ2xhc3NOYW1lLlNDUk9MTEJBUl9NRUFTVVJFUlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KVxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uJCh0aGlzKS5kYXRhKCksXG4gICAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IE1vZGFsKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldClcbiAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5zaG93KSB7XG4gICAgICAgIGRhdGEuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBsZXQgdGFyZ2V0XG4gIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG5cbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgfVxuXG4gIGNvbnN0IGNvbmZpZyA9ICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKVxuICAgID8gJ3RvZ2dsZScgOiB7XG4gICAgICAuLi4kKHRhcmdldCkuZGF0YSgpLFxuICAgICAgLi4uJCh0aGlzKS5kYXRhKClcbiAgICB9XG5cbiAgaWYgKHRoaXMudGFnTmFtZSA9PT0gJ0EnIHx8IHRoaXMudGFnTmFtZSA9PT0gJ0FSRUEnKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3QgJHRhcmdldCA9ICQodGFyZ2V0KS5vbmUoRXZlbnQuU0hPVywgKHNob3dFdmVudCkgPT4ge1xuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIC8vIE9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICR0YXJnZXQub25lKEV2ZW50LkhJRERFTiwgKCkgPT4ge1xuICAgICAgaWYgKCQodGhpcykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcsIHRoaXMpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IE1vZGFsXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogdG9vbHMvc2FuaXRpemVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCB1cmlBdHRycyA9IFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl1cblxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0V2hpdGVsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdhbHQnLCAndGl0bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gIGxpOiBbXSxcbiAgb2w6IFtdLFxuICBwOiBbXSxcbiAgcHJlOiBbXSxcbiAgczogW10sXG4gIHNtYWxsOiBbXSxcbiAgc3BhbjogW10sXG4gIHN1YjogW10sXG4gIHN1cDogW10sXG4gIHN0cm9uZzogW10sXG4gIHU6IFtdLFxuICB1bDogW11cbn1cblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZSk6fFteJjovPyNdKig/OlsvPyNdfCQpKS9naVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFthLXowLTkrL10rPSokL2lcblxuZnVuY3Rpb24gYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkge1xuICBjb25zdCBhdHRyTmFtZSA9IGF0dHIubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICBpZiAodXJpQXR0cnMuaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihhdHRyLm5vZGVWYWx1ZS5tYXRjaChTQUZFX1VSTF9QQVRURVJOKSB8fCBhdHRyLm5vZGVWYWx1ZS5tYXRjaChEQVRBX1VSTF9QQVRURVJOKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3QgcmVnRXhwID0gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKChhdHRyUmVnZXgpID0+IGF0dHJSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSByZWdFeHAubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGF0dHJOYW1lLm1hdGNoKHJlZ0V4cFtpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgd2hpdGVMaXN0LCBzYW5pdGl6ZUZuKSB7XG4gIGlmICh1bnNhZmVIdG1sLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bnNhZmVIdG1sXG4gIH1cblxuICBpZiAoc2FuaXRpemVGbiAmJiB0eXBlb2Ygc2FuaXRpemVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzYW5pdGl6ZUZuKHVuc2FmZUh0bWwpXG4gIH1cblxuICBjb25zdCBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpXG4gIGNvbnN0IGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpXG4gIGNvbnN0IHdoaXRlbGlzdEtleXMgPSBPYmplY3Qua2V5cyh3aGl0ZUxpc3QpXG4gIGNvbnN0IGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChjcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZWwgPSBlbGVtZW50c1tpXVxuICAgIGNvbnN0IGVsTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICh3aGl0ZWxpc3RLZXlzLmluZGV4T2YoZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5zbGljZS5jYWxsKGVsLmF0dHJpYnV0ZXMpXG4gICAgY29uc3Qgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KHdoaXRlTGlzdFsnKiddIHx8IFtdLCB3aGl0ZUxpc3RbZWxOYW1lXSB8fCBbXSlcblxuICAgIGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHIsIHdoaXRlbGlzdGVkQXR0cmlidXRlcykpIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIubm9kZU5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUxcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogdG9vbHRpcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgRGVmYXVsdFdoaXRlbGlzdCxcbiAgc2FuaXRpemVIdG1sXG59IGZyb20gJy4vdG9vbHMvc2FuaXRpemVyJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICA9ICd0b29sdGlwJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgID0gJ2JzLnRvb2x0aXAnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgID0gJC5mbltOQU1FXVxuY29uc3QgQ0xBU1NfUFJFRklYICAgICAgICAgID0gJ2JzLXRvb2x0aXAnXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggICAgPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5jb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBbJ3Nhbml0aXplJywgJ3doaXRlTGlzdCcsICdzYW5pdGl6ZUZuJ11cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbiAgICAgICAgIDogJ2Jvb2xlYW4nLFxuICB0ZW1wbGF0ZSAgICAgICAgICA6ICdzdHJpbmcnLFxuICB0aXRsZSAgICAgICAgICAgICA6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlciAgICAgICAgICAgOiAnc3RyaW5nJyxcbiAgZGVsYXkgICAgICAgICAgICAgOiAnKG51bWJlcnxvYmplY3QpJyxcbiAgaHRtbCAgICAgICAgICAgICAgOiAnYm9vbGVhbicsXG4gIHNlbGVjdG9yICAgICAgICAgIDogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICBwbGFjZW1lbnQgICAgICAgICA6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIG9mZnNldCAgICAgICAgICAgIDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIGNvbnRhaW5lciAgICAgICAgIDogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gIGZhbGxiYWNrUGxhY2VtZW50IDogJyhzdHJpbmd8YXJyYXkpJyxcbiAgYm91bmRhcnkgICAgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIHNhbml0aXplICAgICAgICAgIDogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuICAgICAgICA6ICcobnVsbHxmdW5jdGlvbiknLFxuICB3aGl0ZUxpc3QgICAgICAgICA6ICdvYmplY3QnLFxuICBwb3BwZXJDb25maWcgICAgICA6ICcobnVsbHxvYmplY3QpJ1xufVxuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBBVVRPICAgOiAnYXV0bycsXG4gIFRPUCAgICA6ICd0b3AnLFxuICBSSUdIVCAgOiAncmlnaHQnLFxuICBCT1RUT00gOiAnYm90dG9tJyxcbiAgTEVGVCAgIDogJ2xlZnQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbiAgICAgICAgIDogdHJ1ZSxcbiAgdGVtcGxhdGUgICAgICAgICAgOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gIHRyaWdnZXIgICAgICAgICAgIDogJ2hvdmVyIGZvY3VzJyxcbiAgdGl0bGUgICAgICAgICAgICAgOiAnJyxcbiAgZGVsYXkgICAgICAgICAgICAgOiAwLFxuICBodG1sICAgICAgICAgICAgICA6IGZhbHNlLFxuICBzZWxlY3RvciAgICAgICAgICA6IGZhbHNlLFxuICBwbGFjZW1lbnQgICAgICAgICA6ICd0b3AnLFxuICBvZmZzZXQgICAgICAgICAgICA6IDAsXG4gIGNvbnRhaW5lciAgICAgICAgIDogZmFsc2UsXG4gIGZhbGxiYWNrUGxhY2VtZW50IDogJ2ZsaXAnLFxuICBib3VuZGFyeSAgICAgICAgICA6ICdzY3JvbGxQYXJlbnQnLFxuICBzYW5pdGl6ZSAgICAgICAgICA6IHRydWUsXG4gIHNhbml0aXplRm4gICAgICAgIDogbnVsbCxcbiAgd2hpdGVMaXN0ICAgICAgICAgOiBEZWZhdWx0V2hpdGVsaXN0LFxuICBwb3BwZXJDb25maWcgICAgICA6IG51bGxcbn1cblxuY29uc3QgSG92ZXJTdGF0ZSA9IHtcbiAgU0hPVyA6ICdzaG93JyxcbiAgT1VUICA6ICdvdXQnXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRCAgIDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0sgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU4gICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUICAgOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSIDogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFIDogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRkFERSA6ICdmYWRlJyxcbiAgU0hPVyA6ICdzaG93J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgVE9PTFRJUCAgICAgICA6ICcudG9vbHRpcCcsXG4gIFRPT0xUSVBfSU5ORVIgOiAnLnRvb2x0aXAtaW5uZXInLFxuICBBUlJPVyAgICAgICAgIDogJy5hcnJvdydcbn1cblxuY29uc3QgVHJpZ2dlciA9IHtcbiAgSE9WRVIgIDogJ2hvdmVyJyxcbiAgRk9DVVMgIDogJ2ZvY3VzJyxcbiAgQ0xJQ0sgIDogJ2NsaWNrJyxcbiAgTUFOVUFMIDogJ21hbnVhbCdcbn1cblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9vbHRpcCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnLyknKVxuICAgIH1cblxuICAgIC8vIHByaXZhdGVcbiAgICB0aGlzLl9pc0VuYWJsZWQgICAgID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgICAgICAgPSAwXG4gICAgdGhpcy5faG92ZXJTdGF0ZSAgICA9ICcnXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyICAgICAgICA9IG51bGxcblxuICAgIC8vIFByb3RlY3RlZFxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbmZpZyAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMudGlwICAgICA9IG51bGxcblxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gRVZFTlRfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICAgIGxldCBjb250ZXh0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICAgIClcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG5cbiAgICAkLnJlbW92ZURhdGEodGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuXG4gICAgJCh0aGlzLmVsZW1lbnQpLm9mZih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcbiAgICAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub2ZmKCdoaWRlLmJzLm1vZGFsJywgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgJCh0aGlzLnRpcCkucmVtb3ZlKClcbiAgICB9XG5cbiAgICB0aGlzLl9pc0VuYWJsZWQgICAgID0gbnVsbFxuICAgIHRoaXMuX3RpbWVvdXQgICAgICAgPSBudWxsXG4gICAgdGhpcy5faG92ZXJTdGF0ZSAgICA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbFxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuY29uZmlnICA9IG51bGxcbiAgICB0aGlzLnRpcCAgICAgPSBudWxsXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICgkKHRoaXMuZWxlbWVudCkuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpXG4gICAgaWYgKHRoaXMuaXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gVXRpbC5maW5kU2hhZG93Um9vdCh0aGlzLmVsZW1lbnQpXG4gICAgICBjb25zdCBpc0luVGhlRG9tID0gJC5jb250YWlucyhcbiAgICAgICAgc2hhZG93Um9vdCAhPT0gbnVsbCA/IHNoYWRvd1Jvb3QgOiB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIHRoaXMuZWxlbWVudFxuICAgICAgKVxuXG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXAgICA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgICBjb25zdCB0aXBJZCA9IFV0aWwuZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSlcblxuICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgICAgdGhpcy5zZXRDb250ZW50KClcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBsYWNlbWVudCAgPSB0eXBlb2YgdGhpcy5jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdGhpcy5jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLmVsZW1lbnQpXG4gICAgICAgIDogdGhpcy5jb25maWcucGxhY2VtZW50XG5cbiAgICAgIGNvbnN0IGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudClcbiAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpXG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2dldENvbnRhaW5lcigpXG4gICAgICAkKHRpcCkuZGF0YSh0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuXG4gICAgICBpZiAoISQuY29udGFpbnModGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLnRpcCkpIHtcbiAgICAgICAgJCh0aXApLmFwcGVuZFRvKGNvbnRhaW5lcilcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRClcblxuICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcih0aGlzLmVsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKVxuXG4gICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgIHRoaXMuX2ZpeFRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuICAgICAgICB0aGlzLl9ob3ZlclN0YXRlICAgICA9IG51bGxcblxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKVxuXG4gICAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLnRpcClcblxuICAgICAgICAkKHRoaXMudGlwKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGlwICAgICAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSlcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIb3ZlclN0YXRlLlNIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5DTElDS10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5GT0NVU10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5IT1ZFUl0gPSBmYWxzZVxuXG4gICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aXApXG5cbiAgICAgICQodGlwKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoYCR7Q0xBU1NfUFJFRklYfS0ke2F0dGFjaG1lbnR9YClcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJCh0aXAucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5UT09MVElQX0lOTkVSKSksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoYCR7Q2xhc3NOYW1lLkZBREV9ICR7Q2xhc3NOYW1lLlNIT1d9YClcbiAgfVxuXG4gIHNldEVsZW1lbnRDb250ZW50KCRlbGVtZW50LCBjb250ZW50KSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnb2JqZWN0JyAmJiAoY29udGVudC5ub2RlVHlwZSB8fCBjb250ZW50LmpxdWVyeSkpIHtcbiAgICAgIC8vIENvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgICAgaWYgKCEkKGNvbnRlbnQpLnBhcmVudCgpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICRlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50LnRleHQoJChjb250ZW50KS50ZXh0KCkpXG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuc2FuaXRpemUpIHtcbiAgICAgICAgY29udGVudCA9IHNhbml0aXplSHRtbChjb250ZW50LCB0aGlzLmNvbmZpZy53aGl0ZUxpc3QsIHRoaXMuY29uZmlnLnNhbml0aXplRm4pXG4gICAgICB9XG5cbiAgICAgICRlbGVtZW50Lmh0bWwoY29udGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsZW1lbnQudGV4dChjb250ZW50KVxuICAgIH1cbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGxldCB0aXRsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB0aGlzLmNvbmZpZy50aXRsZS5jYWxsKHRoaXMuZWxlbWVudClcbiAgICAgICAgOiB0aGlzLmNvbmZpZy50aXRsZVxuICAgIH1cblxuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc0NvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgYmVoYXZpb3I6IHRoaXMuY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50XG4gICAgICAgIH0sXG4gICAgICAgIGFycm93OiB7XG4gICAgICAgICAgZWxlbWVudDogU2VsZWN0b3IuQVJST1dcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkNyZWF0ZTogKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblVwZGF0ZTogKGRhdGEpID0+IHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNDb25maWcsXG4gICAgICAuLi50aGlzLmNvbmZpZy5wb3BwZXJDb25maWdcbiAgICB9XG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHt9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2Zmc2V0LmZuID0gKGRhdGEpID0+IHtcbiAgICAgICAgZGF0YS5vZmZzZXRzID0ge1xuICAgICAgICAgIC4uLmRhdGEub2Zmc2V0cyxcbiAgICAgICAgICAuLi50aGlzLmNvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzLCB0aGlzLmVsZW1lbnQpIHx8IHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5jb25maWcub2Zmc2V0XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldENvbnRhaW5lcigpIHtcbiAgICBpZiAodGhpcy5jb25maWcuY29udGFpbmVyID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHlcbiAgICB9XG5cbiAgICBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5jb25maWcuY29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuICQodGhpcy5jb25maWcuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHJldHVybiAkKGRvY3VtZW50KS5maW5kKHRoaXMuY29uZmlnLmNvbnRhaW5lcilcbiAgfVxuXG4gIF9nZXRBdHRhY2htZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLm9uKFxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssXG4gICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLnRvZ2dsZShldmVudClcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUcmlnZ2VyLk1BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUlxuICAgICAgICAgID8gdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSXG4gICAgICAgICAgOiB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU5cbiAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSXG4gICAgICAgICAgPyB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkVcbiAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVRcblxuICAgICAgICAkKHRoaXMuZWxlbWVudClcbiAgICAgICAgICAub24oXG4gICAgICAgICAgICBldmVudEluLFxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgICAoZXZlbnQpID0+IHRoaXMuX2VudGVyKGV2ZW50KVxuICAgICAgICAgIClcbiAgICAgICAgICAub24oXG4gICAgICAgICAgICBldmVudE91dCxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLl9sZWF2ZShldmVudClcbiAgICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9uKFxuICAgICAgJ2hpZGUuYnMubW9kYWwnLFxuICAgICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlclxuICAgIClcblxuICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgc2VsZWN0b3I6ICcnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLFxuICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICcnXG4gICAgICApXG5cbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpXG4gICAgfVxuICB9XG5cbiAgX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICApXG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXG4gICAgICBdID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICgkKGNvbnRleHQuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1dcblxuICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuc2hvdylcbiAgfVxuXG4gIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgKVxuICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJcbiAgICAgIF0gPSBmYWxzZVxuICAgIH1cblxuICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuT1VUXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSlcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIGZvciAoY29uc3QgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9ICQodGhpcy5lbGVtZW50KS5kYXRhKClcblxuICAgIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKVxuICAgICAgLmZvckVhY2goKGRhdGFBdHRyKSA9PiB7XG4gICAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaW5kZXhPZihkYXRhQXR0cikgIT09IC0xKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIGlmIChjb25maWcuc2FuaXRpemUpIHtcbiAgICAgIGNvbmZpZy50ZW1wbGF0ZSA9IHNhbml0aXplSHRtbChjb25maWcudGVtcGxhdGUsIGNvbmZpZy53aGl0ZUxpc3QsIGNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICBjb25zdCBjb25maWcgPSB7fVxuXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuY29uZmlnW2tleV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0ICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoKSB7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKHRhYkNsYXNzLmpvaW4oJycpKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UocG9wcGVyRGF0YSkge1xuICAgIGNvbnN0IHBvcHBlckluc3RhbmNlID0gcG9wcGVyRGF0YS5pbnN0YW5jZVxuICAgIHRoaXMudGlwID0gcG9wcGVySW5zdGFuY2UucG9wcGVyXG4gICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChwb3BwZXJEYXRhLnBsYWNlbWVudCkpXG4gIH1cblxuICBfZml4VHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGluaXRDb25maWdBbmltYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRpb25cblxuICAgIGlmICh0aXAuZ2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcpICE9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gZmFsc2VcbiAgICB0aGlzLmhpZGUoKVxuICAgIHRoaXMuc2hvdygpXG4gICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gaW5pdENvbmZpZ0FuaW1hdGlvblxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb29sdGlwXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdwb3BvdmVyJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMucG9wb3ZlcidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cbmNvbnN0IENMQVNTX1BSRUZJWCAgICAgICAgPSAnYnMtcG9wb3ZlcidcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCAgPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdCxcbiAgcGxhY2VtZW50IDogJ3JpZ2h0JyxcbiAgdHJpZ2dlciAgIDogJ2NsaWNrJyxcbiAgY29udGVudCAgIDogJycsXG4gIHRlbXBsYXRlICA6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50IDogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRkFERSA6ICdmYWRlJyxcbiAgU0hPVyA6ICdzaG93J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgVElUTEUgICA6ICcucG9wb3Zlci1oZWFkZXInLFxuICBDT05URU5UIDogJy5wb3BvdmVyLWJvZHknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRCAgIDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0sgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU4gICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUICAgOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSIDogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFIDogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBFVkVOVF9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBPdmVycmlkZXNcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKGAke0NMQVNTX1BSRUZJWH0tJHthdHRhY2htZW50fWApXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF1cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG5cbiAgICAvLyBXZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IuVElUTEUpLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9nZXRDb250ZW50KClcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LmNhbGwodGhpcy5lbGVtZW50KVxuICAgIH1cbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTZWxlY3Rvci5DT05URU5UKSwgY29udGVudClcblxuICAgICR0aXAucmVtb3ZlQ2xhc3MoYCR7Q2xhc3NOYW1lLkZBREV9ICR7Q2xhc3NOYW1lLlNIT1d9YClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JykgfHxcbiAgICAgIHRoaXMuY29uZmlnLmNvbnRlbnRcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0ICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFBvcG92ZXJcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gUG9wb3Zlci5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdzY3JvbGxzcHknXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldCA6IDEwLFxuICBtZXRob2QgOiAnYXV0bycsXG4gIHRhcmdldCA6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQgOiAnbnVtYmVyJyxcbiAgbWV0aG9kIDogJ3N0cmluZycsXG4gIHRhcmdldCA6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgQUNUSVZBVEUgICAgICA6IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWAsXG4gIFNDUk9MTCAgICAgICAgOiBgc2Nyb2xsJHtFVkVOVF9LRVl9YCxcbiAgTE9BRF9EQVRBX0FQSSA6IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIERST1BET1dOX0lURU0gOiAnZHJvcGRvd24taXRlbScsXG4gIERST1BET1dOX01FTlUgOiAnZHJvcGRvd24tbWVudScsXG4gIEFDVElWRSAgICAgICAgOiAnYWN0aXZlJ1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgREFUQV9TUFkgICAgICAgIDogJ1tkYXRhLXNweT1cInNjcm9sbFwiXScsXG4gIEFDVElWRSAgICAgICAgICA6ICcuYWN0aXZlJyxcbiAgTkFWX0xJU1RfR1JPVVAgIDogJy5uYXYsIC5saXN0LWdyb3VwJyxcbiAgTkFWX0xJTktTICAgICAgIDogJy5uYXYtbGluaycsXG4gIE5BVl9JVEVNUyAgICAgICA6ICcubmF2LWl0ZW0nLFxuICBMSVNUX0lURU1TICAgICAgOiAnLmxpc3QtZ3JvdXAtaXRlbScsXG4gIERST1BET1dOICAgICAgICA6ICcuZHJvcGRvd24nLFxuICBEUk9QRE9XTl9JVEVNUyAgOiAnLmRyb3Bkb3duLWl0ZW0nLFxuICBEUk9QRE9XTl9UT0dHTEUgOiAnLmRyb3Bkb3duLXRvZ2dsZSdcbn1cblxuY29uc3QgT2Zmc2V0TWV0aG9kID0ge1xuICBPRkZTRVQgICA6ICdvZmZzZXQnLFxuICBQT1NJVElPTiA6ICdwb3NpdGlvbidcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFNjcm9sbFNweSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3NlbGVjdG9yICAgICAgPSBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NlbGVjdG9yLk5BVl9MSU5LU30sYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U2VsZWN0b3IuTElTVF9JVEVNU30sYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U2VsZWN0b3IuRFJPUERPV05fSVRFTVN9YFxuICAgIHRoaXMuX29mZnNldHMgICAgICAgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgICAgICAgPSBbXVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IDBcblxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub24oRXZlbnQuU0NST0xMLCAoZXZlbnQpID0+IHRoaXMuX3Byb2Nlc3MoZXZlbnQpKVxuXG4gICAgdGhpcy5yZWZyZXNoKClcbiAgICB0aGlzLl9wcm9jZXNzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3dcbiAgICAgID8gT2Zmc2V0TWV0aG9kLk9GRlNFVCA6IE9mZnNldE1ldGhvZC5QT1NJVElPTlxuXG4gICAgY29uc3Qgb2Zmc2V0TWV0aG9kID0gdGhpcy5fY29uZmlnLm1ldGhvZCA9PT0gJ2F1dG8nXG4gICAgICA/IGF1dG9NZXRob2QgOiB0aGlzLl9jb25maWcubWV0aG9kXG5cbiAgICBjb25zdCBvZmZzZXRCYXNlID0gb2Zmc2V0TWV0aG9kID09PSBPZmZzZXRNZXRob2QuUE9TSVRJT05cbiAgICAgID8gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOiAwXG5cbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cblxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG5cbiAgICBjb25zdCB0YXJnZXRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yKSlcblxuICAgIHRhcmdldHNcbiAgICAgIC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IHRhcmdldFxuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgICAgIGlmICh0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgaWYgKHRhcmdldEJDUi53aWR0aCB8fCB0YXJnZXRCQ1IuaGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBUT0RPIChmYXQpOiByZW1vdmUgc2tldGNoIHJlbGlhbmNlIG9uIGpRdWVyeSBwb3NpdGlvbi9vZmZzZXRcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICQodGFyZ2V0KVtvZmZzZXRNZXRob2RdKCkudG9wICsgb2Zmc2V0QmFzZSxcbiAgICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3JcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxuICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pXG4gICAgICAgIHRoaXMuX3RhcmdldHMucHVzaChpdGVtWzFdKVxuICAgICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcblxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3NlbGVjdG9yICAgICAgPSBudWxsXG4gICAgdGhpcy5fb2Zmc2V0cyAgICAgICA9IG51bGxcbiAgICB0aGlzLl90YXJnZXRzICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBpZCA9ICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnKVxuICAgICAgaWYgKCFpZCkge1xuICAgICAgICBpZCA9IFV0aWwuZ2V0VUlEKE5BTUUpXG4gICAgICAgICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnLCBpZClcbiAgICAgIH1cbiAgICAgIGNvbmZpZy50YXJnZXQgPSBgIyR7aWR9YFxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3dcbiAgICAgID8gdGhpcy5fc2Nyb2xsRWxlbWVudC5wYWdlWU9mZnNldCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG4gIH1cblxuICBfZ2V0U2Nyb2xsSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIClcbiAgfVxuXG4gIF9nZXRPZmZzZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvd1xuICAgICAgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgX3Byb2Nlc3MoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wICAgID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICBjb25zdCBtYXhTY3JvbGwgICAgPSB0aGlzLl9jb25maWcub2Zmc2V0ICtcbiAgICAgIHNjcm9sbEhlaWdodCAtXG4gICAgICB0aGlzLl9nZXRPZmZzZXRIZWlnaHQoKVxuXG4gICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1swXSAmJiB0aGlzLl9vZmZzZXRzWzBdID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgdGhpcy5fY2xlYXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0TGVuZ3RoID0gdGhpcy5fb2Zmc2V0cy5sZW5ndGhcbiAgICBmb3IgKGxldCBpID0gb2Zmc2V0TGVuZ3RoOyBpLS07KSB7XG4gICAgICBjb25zdCBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJlxuICAgICAgICAgIHNjcm9sbFRvcCA+PSB0aGlzLl9vZmZzZXRzW2ldICYmXG4gICAgICAgICAgKHR5cGVvZiB0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pXG5cbiAgICAgIGlmIChpc0FjdGl2ZVRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl90YXJnZXRzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcblxuICAgIHRoaXMuX2NsZWFyKClcblxuICAgIGNvbnN0IHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3RvclxuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoKHNlbGVjdG9yKSA9PiBgJHtzZWxlY3Rvcn1bZGF0YS10YXJnZXQ9XCIke3RhcmdldH1cIl0sJHtzZWxlY3Rvcn1baHJlZj1cIiR7dGFyZ2V0fVwiXWApXG5cbiAgICBjb25zdCAkbGluayA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJpZXMuam9pbignLCcpKSkpXG5cbiAgICBpZiAoJGxpbmsuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX0lURU0pKSB7XG4gICAgICAkbGluay5jbG9zZXN0KFNlbGVjdG9yLkRST1BET1dOKS5maW5kKFNlbGVjdG9yLkRST1BET1dOX1RPR0dMRSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICRsaW5rLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgICRsaW5rLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgICRsaW5rLnBhcmVudHMoU2VsZWN0b3IuTkFWX0xJU1RfR1JPVVApLnByZXYoYCR7U2VsZWN0b3IuTkFWX0xJTktTfSwgJHtTZWxlY3Rvci5MSVNUX0lURU1TfWApLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlIHdoZW4gLm5hdi1saW5rIGlzIGluc2lkZSAubmF2LWl0ZW1cbiAgICAgICRsaW5rLnBhcmVudHMoU2VsZWN0b3IuTkFWX0xJU1RfR1JPVVApLnByZXYoU2VsZWN0b3IuTkFWX0lURU1TKS5jaGlsZHJlbihTZWxlY3Rvci5OQVZfTElOS1MpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS50cmlnZ2VyKEV2ZW50LkFDVElWQVRFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcbiAgICB9KVxuICB9XG5cbiAgX2NsZWFyKCkge1xuICAgIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcikpXG4gICAgICAuZmlsdGVyKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKSlcbiAgICAgIC5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLkFDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBTY3JvbGxTcHkodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IHNjcm9sbFNweXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9TUFkpKVxuICBjb25zdCBzY3JvbGxTcHlzTGVuZ3RoID0gc2Nyb2xsU3B5cy5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gc2Nyb2xsU3B5c0xlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0ICRzcHkgPSAkKHNjcm9sbFNweXNbaV0pXG4gICAgU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkc3B5LCAkc3B5LmRhdGEoKSlcbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gU2Nyb2xsU3B5XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNweVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ3RhYidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBEUk9QRE9XTl9NRU5VIDogJ2Ryb3Bkb3duLW1lbnUnLFxuICBBQ1RJVkUgICAgICAgIDogJ2FjdGl2ZScsXG4gIERJU0FCTEVEICAgICAgOiAnZGlzYWJsZWQnLFxuICBGQURFICAgICAgICAgIDogJ2ZhZGUnLFxuICBTSE9XICAgICAgICAgIDogJ3Nob3cnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEUk9QRE9XTiAgICAgICAgICAgICAgOiAnLmRyb3Bkb3duJyxcbiAgTkFWX0xJU1RfR1JPVVAgICAgICAgIDogJy5uYXYsIC5saXN0LWdyb3VwJyxcbiAgQUNUSVZFICAgICAgICAgICAgICAgIDogJy5hY3RpdmUnLFxuICBBQ1RJVkVfVUwgICAgICAgICAgICAgOiAnPiBsaSA+IC5hY3RpdmUnLFxuICBEQVRBX1RPR0dMRSAgICAgICAgICAgOiAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS10b2dnbGU9XCJsaXN0XCJdJyxcbiAgRFJPUERPV05fVE9HR0xFICAgICAgIDogJy5kcm9wZG93bi10b2dnbGUnLFxuICBEUk9QRE9XTl9BQ1RJVkVfQ0hJTEQgOiAnPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiZcbiAgICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpIHx8XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHRhcmdldFxuICAgIGxldCBwcmV2aW91c1xuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yLk5BVl9MSVNUX0dST1VQKVswXVxuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAobGlzdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGl0ZW1TZWxlY3RvciA9IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnVUwnIHx8IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnT0wnID8gU2VsZWN0b3IuQUNUSVZFX1VMIDogU2VsZWN0b3IuQUNUSVZFXG4gICAgICBwcmV2aW91cyA9ICQubWFrZUFycmF5KCQobGlzdEVsZW1lbnQpLmZpbmQoaXRlbVNlbGVjdG9yKSlcbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXNbcHJldmlvdXMubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgIH0pXG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZUV2ZW50KVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8XG4gICAgICAgIGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2YXRlKFxuICAgICAgdGhpcy5fZWxlbWVudCxcbiAgICAgIGxpc3RFbGVtZW50XG4gICAgKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoaWRkZW5FdmVudCA9ICQuRXZlbnQoRXZlbnQuSElEREVOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KVxuXG4gICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGRlbkV2ZW50KVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0LCB0YXJnZXQucGFyZW50Tm9kZSwgY29tcGxldGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hY3RpdmF0ZShlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudHMgPSBjb250YWluZXIgJiYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBjb250YWluZXIubm9kZU5hbWUgPT09ICdPTCcpXG4gICAgICA/ICQoY29udGFpbmVyKS5maW5kKFNlbGVjdG9yLkFDVElWRV9VTClcbiAgICAgIDogJChjb250YWluZXIpLmNoaWxkcmVuKFNlbGVjdG9yLkFDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnRzWzBdXG4gICAgY29uc3QgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgKGFjdGl2ZSAmJiAkKGFjdGl2ZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4gdGhpcy5fdHJhbnNpdGlvbkNvbXBsZXRlKFxuICAgICAgZWxlbWVudCxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKVxuXG4gICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlKVxuXG4gICAgICAkKGFjdGl2ZSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgJChhY3RpdmUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duQ2hpbGQgPSAkKGFjdGl2ZS5wYXJlbnROb2RlKS5maW5kKFxuICAgICAgICBTZWxlY3Rvci5EUk9QRE9XTl9BQ1RJVkVfQ0hJTERcbiAgICAgIClbMF1cblxuICAgICAgaWYgKGRyb3Bkb3duQ2hpbGQpIHtcbiAgICAgICAgJChkcm9wZG93bkNoaWxkKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJChlbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIFV0aWwucmVmbG93KGVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlNIT1cpXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiAkKGVsZW1lbnQucGFyZW50Tm9kZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX01FTlUpKSB7XG4gICAgICBjb25zdCBkcm9wZG93bkVsZW1lbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IuRFJPUERPV04pWzBdXG5cbiAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25Ub2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkcm9wZG93bkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpKVxuXG4gICAgICAgICQoZHJvcGRvd25Ub2dnbGVMaXN0KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhID0gJHRoaXMuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVGFiKHRoaXMpXG4gICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIFRhYi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3Nob3cnKVxuICB9KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gVGFiLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUYWJcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVGFiLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IHRvYXN0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICd0b2FzdCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy50b2FzdCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEV2ZW50ID0ge1xuICBDTElDS19ESVNNSVNTIDogYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBISURFICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRkFERSAgICA6ICdmYWRlJyxcbiAgSElERSAgICA6ICdoaWRlJyxcbiAgU0hPVyAgICA6ICdzaG93JyxcbiAgU0hPV0lORyA6ICdzaG93aW5nJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uIDogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZSAgOiAnYm9vbGVhbicsXG4gIGRlbGF5ICAgICA6ICdudW1iZXInXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbiA6IHRydWUsXG4gIGF1dG9oaWRlICA6IHRydWUsXG4gIGRlbGF5ICAgICA6IDUwMFxufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgREFUQV9ESVNNSVNTIDogJ1tkYXRhLWRpc21pc3M9XCJ0b2FzdFwiXSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVylcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuU0hPV0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuU0hPVylcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LlNIT1dOKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5ISURFKVxuICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5TSE9XSU5HKVxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xvc2UoKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5TSE9XKVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LkNMSUNLX0RJU01JU1MpXG5cbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLiQodGhpcy5fZWxlbWVudCkuZGF0YSgpLFxuICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgIE5BTUUsXG4gICAgICBjb25maWcsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKFxuICAgICAgRXZlbnQuQ0xJQ0tfRElTTUlTUyxcbiAgICAgIFNlbGVjdG9yLkRBVEFfRElTTUlTUyxcbiAgICAgICgpID0+IHRoaXMuaGlkZSgpXG4gICAgKVxuICB9XG5cbiAgX2Nsb3NlKCkge1xuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5ISURFKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLlNIT1cpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhICAgICAgID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvYXN0KHRoaXMsIF9jb25maWcpXG4gICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gICAgICAgICAgICAgPSBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9hc3RcbiQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsImV4cG9ydCBkZWZhdWx0IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCc7XG4iLCJpbXBvcnQgaXNCcm93c2VyIGZyb20gJy4vaXNCcm93c2VyJztcblxuY29uc3QgdGltZW91dER1cmF0aW9uID0gKGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGxvbmdlclRpbWVvdXRCcm93c2VycyA9IFsnRWRnZScsICdUcmlkZW50JywgJ0ZpcmVmb3gnXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb25nZXJUaW1lb3V0QnJvd3NlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihsb25nZXJUaW1lb3V0QnJvd3NlcnNbaV0pID49IDApIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn0oKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWNyb3Rhc2tEZWJvdW5jZShmbikge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIHdpbmRvdy5Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGNhbGxlZCA9IGZhbHNlXG4gICAgICBmbigpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFza0RlYm91bmNlKGZuKSB7XG4gIGxldCBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoIXNjaGVkdWxlZCkge1xuICAgICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0sIHRpbWVvdXREdXJhdGlvbik7XG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBzdXBwb3J0c01pY3JvVGFza3MgPSBpc0Jyb3dzZXIgJiYgd2luZG93LlByb21pc2VcblxuXG4vKipcbiogQ3JlYXRlIGEgZGVib3VuY2VkIHZlcnNpb24gb2YgYSBtZXRob2QsIHRoYXQncyBhc3luY2hyb25vdXNseSBkZWZlcnJlZFxuKiBidXQgY2FsbGVkIGluIHRoZSBtaW5pbXVtIHRpbWUgcG9zc2libGUuXG4qXG4qIEBtZXRob2RcbiogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuKiBAYXJndW1lbnQge0Z1bmN0aW9ufSBmblxuKiBAcmV0dXJucyB7RnVuY3Rpb259XG4qL1xuZXhwb3J0IGRlZmF1bHQgKHN1cHBvcnRzTWljcm9UYXNrc1xuICA/IG1pY3JvdGFza0RlYm91bmNlXG4gIDogdGFza0RlYm91bmNlKTtcbiIsIi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QW55fSBmdW5jdGlvblRvQ2hlY2sgLSB2YXJpYWJsZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0bzogaXMgYSBmdW5jdGlvbj9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcbiAgY29uc3QgZ2V0VHlwZSA9IHt9O1xuICByZXR1cm4gKFxuICAgIGZ1bmN0aW9uVG9DaGVjayAmJlxuICAgIGdldFR5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gICk7XG59XG4iLCIvKipcbiAqIEdldCBDU1MgY29tcHV0ZWQgcHJvcGVydHkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgY29uc3QgY3NzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gIHJldHVybiBwcm9wZXJ0eSA/IGNzc1twcm9wZXJ0eV0gOiBjc3M7XG59XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHBhcmVudE5vZGUgb3IgdGhlIGhvc3Qgb2YgdGhlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUgfHwgZWxlbWVudC5ob3N0O1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHNjcm9sbCBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gUmV0dXJuIGJvZHksIGBnZXRTY3JvbGxgIHdpbGwgdGFrZSBjYXJlIHRvIGdldCB0aGUgY29ycmVjdCBgc2Nyb2xsVG9wYCBmcm9tIGl0XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5XG4gIH1cblxuICBzd2l0Y2ggKGVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICBjYXNlICdIVE1MJzpcbiAgICBjYXNlICdCT0RZJzpcbiAgICAgIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keVxuICAgIGNhc2UgJyNkb2N1bWVudCc6XG4gICAgICByZXR1cm4gZWxlbWVudC5ib2R5XG4gIH1cblxuICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgY29uc3QgeyBvdmVyZmxvdywgb3ZlcmZsb3dYLCBvdmVyZmxvd1kgfSA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgaWYgKC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xufVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSByZWZlcmVuY2Ugbm9kZSBvZiB0aGUgcmVmZXJlbmNlIG9iamVjdCwgb3IgdGhlIHJlZmVyZW5jZSBvYmplY3QgaXRzZWxmLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpIHtcbiAgcmV0dXJuIHJlZmVyZW5jZSAmJiByZWZlcmVuY2UucmVmZXJlbmNlTm9kZSA/IHJlZmVyZW5jZS5yZWZlcmVuY2VOb2RlIDogcmVmZXJlbmNlO1xufVxuIiwiaW1wb3J0IGlzQnJvd3NlciBmcm9tICcuL2lzQnJvd3Nlcic7XG5cbmNvbnN0IGlzSUUxMSA9IGlzQnJvd3NlciAmJiAhISh3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbmNvbnN0IGlzSUUxMCA9IGlzQnJvd3NlciAmJiAvTVNJRSAxMC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge051bWJlcn0gdmVyc2lvbiB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGlzSUVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJRSh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uID09PSAxMSkge1xuICAgIHJldHVybiBpc0lFMTE7XG4gIH1cbiAgaWYgKHZlcnNpb24gPT09IDEwKSB7XG4gICAgcmV0dXJuIGlzSUUxMDtcbiAgfVxuICByZXR1cm4gaXNJRTExIHx8IGlzSUUxMDtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcbi8qKlxuICogUmV0dXJucyB0aGUgb2Zmc2V0IHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gb2Zmc2V0IHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgY29uc3Qgbm9PZmZzZXRQYXJlbnQgPSBpc0lFKDEwKSA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIGxldCBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBudWxsO1xuICAvLyBTa2lwIGhpZGRlbiBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGFuIG9mZnNldFBhcmVudFxuICB3aGlsZSAob2Zmc2V0UGFyZW50ID09PSBub09mZnNldFBhcmVudCAmJiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xuICAgIG9mZnNldFBhcmVudCA9IChlbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFBhcmVudDtcbiAgfVxuXG4gIGNvbnN0IG5vZGVOYW1lID0gb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudC5ub2RlTmFtZTtcblxuICBpZiAoIW5vZGVOYW1lIHx8IG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIC5vZmZzZXRQYXJlbnQgd2lsbCByZXR1cm4gdGhlIGNsb3Nlc3QgVEgsIFREIG9yIFRBQkxFIGluIGNhc2VcbiAgLy8gbm8gb2Zmc2V0UGFyZW50IGlzIHByZXNlbnQsIEkgaGF0ZSB0aGlzIGpvYi4uLlxuICBpZiAoXG4gICAgWydUSCcsICdURCcsICdUQUJMRSddLmluZGV4T2Yob2Zmc2V0UGFyZW50Lm5vZGVOYW1lKSAhPT0gLTEgJiZcbiAgICBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkob2Zmc2V0UGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYydcbiAgKSB7XG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudDtcbn1cbiIsImltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi9nZXRPZmZzZXRQYXJlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09mZnNldENvbnRhaW5lcihlbGVtZW50KSB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGVsZW1lbnQ7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgbm9kZU5hbWUgPT09ICdIVE1MJyB8fCBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkgPT09IGVsZW1lbnRcbiAgKTtcbn1cbiIsIi8qKlxuICogRmluZHMgdGhlIHJvb3Qgbm9kZSAoZG9jdW1lbnQsIHNoYWRvd0RPTSByb290KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcm9vdCBub2RlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvb3Qobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGdldFJvb3Qobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuIiwiaW1wb3J0IGlzT2Zmc2V0Q29udGFpbmVyIGZyb20gJy4vaXNPZmZzZXRDb250YWluZXInO1xuaW1wb3J0IGdldFJvb3QgZnJvbSAnLi9nZXRSb290JztcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi9nZXRPZmZzZXRQYXJlbnQnO1xuXG4vKipcbiAqIEZpbmRzIHRoZSBvZmZzZXQgcGFyZW50IGNvbW1vbiB0byB0aGUgdHdvIHByb3ZpZGVkIG5vZGVzXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQxXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gY29tbW9uIG9mZnNldCBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZWxlbWVudDIpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudDEgfHwgIWVsZW1lbnQxLm5vZGVUeXBlIHx8ICFlbGVtZW50MiB8fCAhZWxlbWVudDIubm9kZVR5cGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBtYWtlIHN1cmUgdG8gZ2l2ZSBhcyBcInN0YXJ0XCIgdGhlIGVsZW1lbnQgdGhhdCBjb21lcyBmaXJzdCBpbiB0aGUgRE9NXG4gIGNvbnN0IG9yZGVyID1cbiAgICBlbGVtZW50MS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50MikgJlxuICAgIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xuICBjb25zdCBzdGFydCA9IG9yZGVyID8gZWxlbWVudDEgOiBlbGVtZW50MjtcbiAgY29uc3QgZW5kID0gb3JkZXIgPyBlbGVtZW50MiA6IGVsZW1lbnQxO1xuXG4gIC8vIEdldCBjb21tb24gYW5jZXN0b3IgY29udGFpbmVyXG4gIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xuICByYW5nZS5zZXRFbmQoZW5kLCAwKTtcbiAgY29uc3QgeyBjb21tb25BbmNlc3RvckNvbnRhaW5lciB9ID0gcmFuZ2U7XG5cbiAgLy8gQm90aCBub2RlcyBhcmUgaW5zaWRlICNkb2N1bWVudFxuICBpZiAoXG4gICAgKGVsZW1lbnQxICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciAmJlxuICAgICAgZWxlbWVudDIgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSB8fFxuICAgIHN0YXJ0LmNvbnRhaW5zKGVuZClcbiAgKSB7XG4gICAgaWYgKGlzT2Zmc2V0Q29udGFpbmVyKGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQoY29tbW9uQW5jZXN0b3JDb250YWluZXIpO1xuICB9XG5cbiAgLy8gb25lIG9mIHRoZSBub2RlcyBpcyBpbnNpZGUgc2hhZG93RE9NLCBmaW5kIHdoaWNoIG9uZVxuICBjb25zdCBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcbiAgaWYgKGVsZW1lbnQxcm9vdC5ob3N0KSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDFyb290Lmhvc3QsIGVsZW1lbnQyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZ2V0Um9vdChlbGVtZW50MikuaG9zdCk7XG4gIH1cbn1cbiIsIi8qKlxuICogR2V0cyB0aGUgc2Nyb2xsIHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50IGluIHRoZSBnaXZlbiBzaWRlICh0b3AgYW5kIGxlZnQpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzaWRlIGB0b3BgIG9yIGBsZWZ0YFxuICogQHJldHVybnMge251bWJlcn0gYW1vdW50IG9mIHNjcm9sbGVkIHBpeGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGwoZWxlbWVudCwgc2lkZSA9ICd0b3AnKSB7XG4gIGNvbnN0IHVwcGVyU2lkZSA9IHNpZGUgPT09ICd0b3AnID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gIGNvbnN0IG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgY29uc3QgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3Qgc2Nyb2xsaW5nRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGh0bWw7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnRbdXBwZXJTaWRlXTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50W3VwcGVyU2lkZV07XG59XG4iLCJpbXBvcnQgZ2V0U2Nyb2xsIGZyb20gJy4vZ2V0U2Nyb2xsJztcblxuLypcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgLSBSZWN0IG9iamVjdCB5b3Ugd2FudCB0byBjaGFuZ2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBmcm9tIHRoZSBmdW5jdGlvbiByZWFkcyB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHBhcmFtIHtCb29sZWFufSBzdWJ0cmFjdCAtIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIHN1YnRyYWN0IHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY3QgLSBUaGUgbW9kaWZpZXIgcmVjdCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5jbHVkZVNjcm9sbChyZWN0LCBlbGVtZW50LCBzdWJ0cmFjdCA9IGZhbHNlKSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgY29uc3QgbW9kaWZpZXIgPSBzdWJ0cmFjdCA/IC0xIDogMTtcbiAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmV0dXJuIHJlY3Q7XG59XG4iLCIvKlxuICogSGVscGVyIHRvIGRldGVjdCBib3JkZXJzIG9mIGEgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcbiAqIFJlc3VsdCBvZiBgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5YCBvbiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGF4aXMgLSBgeGAgb3IgYHlgXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGJvcmRlcnMgLSBUaGUgYm9yZGVycyBzaXplIG9mIHRoZSBnaXZlbiBheGlzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCBheGlzKSB7XG4gIGNvbnN0IHNpZGVBID0gYXhpcyA9PT0gJ3gnID8gJ0xlZnQnIDogJ1RvcCc7XG4gIGNvbnN0IHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gKFxuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVBfVdpZHRoYF0sIDEwKSArXG4gICAgcGFyc2VGbG9hdChzdHlsZXNbYGJvcmRlciR7c2lkZUJ9V2lkdGhgXSwgMTApXG4gICk7XG59XG4iLCJpbXBvcnQgaXNJRSBmcm9tICcuL2lzSUUnO1xuXG5mdW5jdGlvbiBnZXRTaXplKGF4aXMsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KFxuICAgIGJvZHlbYG9mZnNldCR7YXhpc31gXSxcbiAgICBib2R5W2BzY3JvbGwke2F4aXN9YF0sXG4gICAgaHRtbFtgY2xpZW50JHtheGlzfWBdLFxuICAgIGh0bWxbYG9mZnNldCR7YXhpc31gXSxcbiAgICBodG1sW2BzY3JvbGwke2F4aXN9YF0sXG4gICAgaXNJRSgxMClcbiAgICAgID8gKHBhcnNlSW50KGh0bWxbYG9mZnNldCR7YXhpc31gXSkgKyBcbiAgICAgIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbYG1hcmdpbiR7YXhpcyA9PT0gJ0hlaWdodCcgPyAnVG9wJyA6ICdMZWZ0J31gXSkgKyBcbiAgICAgIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbYG1hcmdpbiR7YXhpcyA9PT0gJ0hlaWdodCcgPyAnQm90dG9tJyA6ICdSaWdodCd9YF0pKVxuICAgIDogMCBcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2l6ZXMoZG9jdW1lbnQpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBpc0lFKDEwKSAmJiBnZXRDb21wdXRlZFN0eWxlKGh0bWwpO1xuXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBnZXRTaXplKCdIZWlnaHQnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSxcbiAgICB3aWR0aDogZ2V0U2l6ZSgnV2lkdGgnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSxcbiAgfTtcbn1cbiIsIi8qKlxuICogR2l2ZW4gZWxlbWVudCBvZmZzZXRzLCBnZW5lcmF0ZSBhbiBvdXRwdXQgc2ltaWxhciB0byBnZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvZmZzZXRzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDbGllbnRSZWN0IGxpa2Ugb3V0cHV0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaWVudFJlY3Qob2Zmc2V0cykge1xuICByZXR1cm4ge1xuICAgIC4uLm9mZnNldHMsXG4gICAgcmlnaHQ6IG9mZnNldHMubGVmdCArIG9mZnNldHMud2lkdGgsXG4gICAgYm90dG9tOiBvZmZzZXRzLnRvcCArIG9mZnNldHMuaGVpZ2h0LFxuICB9O1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgZ2V0Qm9yZGVyc1NpemUgZnJvbSAnLi9nZXRCb3JkZXJzU2l6ZSc7XG5pbXBvcnQgZ2V0V2luZG93U2l6ZXMgZnJvbSAnLi9nZXRXaW5kb3dTaXplcyc7XG5pbXBvcnQgZ2V0U2Nyb2xsIGZyb20gJy4vZ2V0U2Nyb2xsJztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgaXNJRSBmcm9tICcuL2lzSUUnO1xuXG4vKipcbiAqIEdldCBib3VuZGluZyBjbGllbnQgcmVjdCBvZiBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IGNsaWVudCByZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIGxldCByZWN0ID0ge307XG5cbiAgLy8gSUUxMCAxMCBGSVg6IFBsZWFzZSwgZG9uJ3QgYXNrLCB0aGUgZWxlbWVudCBpc24ndFxuICAvLyBjb25zaWRlcmVkIGluIERPTSBpbiBzb21lIGNpcmN1bXN0YW5jZXMuLi5cbiAgLy8gVGhpcyBpc24ndCByZXByb2R1Y2libGUgaW4gSUUxMCBjb21wYXRpYmlsaXR5IG1vZGUgb2YgSUUxMVxuICB0cnkge1xuICAgIGlmIChpc0lFKDEwKSkge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICAgICAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQ7XG4gICAgICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICB9XG4gIGNhdGNoKGUpe31cblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wLFxuICB9O1xuXG4gIC8vIHN1YnRyYWN0IHNjcm9sbGJhciBzaXplIGZyb20gc2l6ZXNcbiAgY29uc3Qgc2l6ZXMgPSBlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcgPyBnZXRXaW5kb3dTaXplcyhlbGVtZW50Lm93bmVyRG9jdW1lbnQpIDoge307XG4gIGNvbnN0IHdpZHRoID1cbiAgICBzaXplcy53aWR0aCB8fCBlbGVtZW50LmNsaWVudFdpZHRoIHx8IHJlc3VsdC53aWR0aDtcbiAgY29uc3QgaGVpZ2h0ID1cbiAgICBzaXplcy5oZWlnaHQgfHwgZWxlbWVudC5jbGllbnRIZWlnaHQgfHwgcmVzdWx0LmhlaWdodDtcblxuICBsZXQgaG9yaXpTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldFdpZHRoIC0gd2lkdGg7XG4gIGxldCB2ZXJ0U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQ7XG5cbiAgLy8gaWYgYW4gaHlwb3RoZXRpY2FsIHNjcm9sbGJhciBpcyBkZXRlY3RlZCwgd2UgbXVzdCBiZSBzdXJlIGl0J3Mgbm90IGEgYGJvcmRlcmBcbiAgLy8gd2UgbWFrZSB0aGlzIGNoZWNrIGNvbmRpdGlvbmFsIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gIGlmIChob3JpelNjcm9sbGJhciB8fCB2ZXJ0U2Nyb2xsYmFyKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xuICAgIGhvcml6U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3gnKTtcbiAgICB2ZXJ0U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3knKTtcblxuICAgIHJlc3VsdC53aWR0aCAtPSBob3JpelNjcm9sbGJhcjtcbiAgICByZXN1bHQuaGVpZ2h0IC09IHZlcnRTY3JvbGxiYXI7XG4gIH1cblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChyZXN1bHQpO1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgaW5jbHVkZVNjcm9sbCBmcm9tICcuL2luY2x1ZGVTY3JvbGwnO1xuaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tICcuL2dldFNjcm9sbFBhcmVudCc7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gJy4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0JztcbmltcG9ydCBydW5Jc0lFIGZyb20gJy4vaXNJRSc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuL2dldENsaWVudFJlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoY2hpbGRyZW4sIHBhcmVudCwgZml4ZWRQb3NpdGlvbiA9IGZhbHNlKSB7XG4gIGNvbnN0IGlzSUUxMCA9IHJ1bklzSUUoMTApO1xuICBjb25zdCBpc0hUTUwgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJztcbiAgY29uc3QgY2hpbGRyZW5SZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGNoaWxkcmVuKTtcbiAgY29uc3QgcGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xuICBjb25zdCBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xuXG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQpO1xuICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlclRvcFdpZHRoLCAxMCk7XG4gIGNvbnN0IGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCwgMTApO1xuXG4gIC8vIEluIGNhc2VzIHdoZXJlIHRoZSBwYXJlbnQgaXMgZml4ZWQsIHdlIG11c3QgaWdub3JlIG5lZ2F0aXZlIHNjcm9sbCBpbiBvZmZzZXQgY2FsY1xuICBpZihmaXhlZFBvc2l0aW9uICYmIGlzSFRNTCkge1xuICAgIHBhcmVudFJlY3QudG9wID0gTWF0aC5tYXgocGFyZW50UmVjdC50b3AsIDApO1xuICAgIHBhcmVudFJlY3QubGVmdCA9IE1hdGgubWF4KHBhcmVudFJlY3QubGVmdCwgMCk7XG4gIH1cbiAgbGV0IG9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHtcbiAgICB0b3A6IGNoaWxkcmVuUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcCAtIGJvcmRlclRvcFdpZHRoLFxuICAgIGxlZnQ6IGNoaWxkcmVuUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0IC0gYm9yZGVyTGVmdFdpZHRoLFxuICAgIHdpZHRoOiBjaGlsZHJlblJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBjaGlsZHJlblJlY3QuaGVpZ2h0LFxuICB9KTtcbiAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSAwO1xuICBvZmZzZXRzLm1hcmdpbkxlZnQgPSAwO1xuXG4gIC8vIFN1YnRyYWN0IG1hcmdpbnMgb2YgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgaXQncyBiZWluZyB1c2VkIGFzIHBhcmVudFxuICAvLyB3ZSBkbyB0aGlzIG9ubHkgb24gSFRNTCBiZWNhdXNlIGl0J3MgdGhlIG9ubHkgZWxlbWVudCB0aGF0IGJlaGF2ZXNcbiAgLy8gZGlmZmVyZW50bHkgd2hlbiBtYXJnaW5zIGFyZSBhcHBsaWVkIHRvIGl0LiBUaGUgbWFyZ2lucyBhcmUgaW5jbHVkZWQgaW5cbiAgLy8gdGhlIGJveCBvZiB0aGUgZG9jdW1lbnRFbGVtZW50LCBpbiB0aGUgb3RoZXIgY2FzZXMgbm90LlxuICBpZiAoIWlzSUUxMCAmJiBpc0hUTUwpIHtcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3AsIDEwKTtcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCwgMTApO1xuXG4gICAgb2Zmc2V0cy50b3AgLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5ib3R0b20gLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5sZWZ0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG4gICAgb2Zmc2V0cy5yaWdodCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuXG4gICAgLy8gQXR0YWNoIG1hcmdpblRvcCBhbmQgbWFyZ2luTGVmdCBiZWNhdXNlIGluIHNvbWUgY2lyY3Vtc3RhbmNlcyB3ZSBtYXkgbmVlZCB0aGVtXG4gICAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdDtcbiAgfVxuXG4gIGlmIChcbiAgICBpc0lFMTAgJiYgIWZpeGVkUG9zaXRpb25cbiAgICAgID8gcGFyZW50LmNvbnRhaW5zKHNjcm9sbFBhcmVudClcbiAgICAgIDogcGFyZW50ID09PSBzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50Lm5vZGVOYW1lICE9PSAnQk9EWSdcbiAgKSB7XG4gICAgb2Zmc2V0cyA9IGluY2x1ZGVTY3JvbGwob2Zmc2V0cywgcGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufVxuIiwiaW1wb3J0IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0U2Nyb2xsIGZyb20gJy4vZ2V0U2Nyb2xsJztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50LCBleGNsdWRlU2Nyb2xsID0gZmFsc2UpIHtcbiAgY29uc3QgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KGh0bWwuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChodG1sLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwpIDogMDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwsICdsZWZ0JykgOiAwO1xuXG4gIGNvbnN0IG9mZnNldCA9IHtcbiAgICB0b3A6IHNjcm9sbFRvcCAtIHJlbGF0aXZlT2Zmc2V0LnRvcCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpblRvcCxcbiAgICBsZWZ0OiBzY3JvbGxMZWZ0IC0gcmVsYXRpdmVPZmZzZXQubGVmdCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpbkxlZnQsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9O1xuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KG9mZnNldCk7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgZml4ZWQgb3IgaXMgaW5zaWRlIGEgZml4ZWQgcGFyZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gY3VzdG9tQ29udGFpbmVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvIFwiaXNGaXhlZD9cIlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0ZpeGVkKGVsZW1lbnQpIHtcbiAgY29uc3Qgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc0ZpeGVkKHBhcmVudE5vZGUpO1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgaXNJRSBmcm9tICcuL2lzSUUnO1xuLyoqXG4gKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBmaXJzdCB0cmFuc2Zvcm1lZCBwYXJlbnQgb3IgZG9jdW1lbnRFbGVtZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LnBhcmVudEVsZW1lbnQgfHwgaXNJRSgpKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuICBsZXQgZWwgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIHdoaWxlIChlbCAmJiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWwsICd0cmFuc2Zvcm0nKSA9PT0gJ25vbmUnKSB7XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbn1cbiIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcbmltcG9ydCBnZXRSZWZlcmVuY2VOb2RlIGZyb20gJy4vZ2V0UmVmZXJlbmNlTm9kZSc7XG5pbXBvcnQgZmluZENvbW1vbk9mZnNldFBhcmVudCBmcm9tICcuL2ZpbmRDb21tb25PZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlIGZyb20gJy4vZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlJztcbmltcG9ydCBnZXRXaW5kb3dTaXplcyBmcm9tICcuL2dldFdpbmRvd1NpemVzJztcbmltcG9ydCBpc0ZpeGVkIGZyb20gJy4vaXNGaXhlZCc7XG5pbXBvcnQgZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCBmcm9tICcuL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQnO1xuXG4vKipcbiAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFkZGluZ1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQgLSBFbGVtZW50IHVzZWQgdG8gZGVmaW5lIHRoZSBib3VuZGFyaWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZpeGVkUG9zaXRpb24gLSBJcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb29yZGluYXRlcyBvZiB0aGUgYm91bmRhcmllc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGFyaWVzKFxuICBwb3BwZXIsXG4gIHJlZmVyZW5jZSxcbiAgcGFkZGluZyxcbiAgYm91bmRhcmllc0VsZW1lbnQsXG4gIGZpeGVkUG9zaXRpb24gPSBmYWxzZVxuKSB7XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG5cbiAgbGV0IGJvdW5kYXJpZXMgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG5cbiAgLy8gSGFuZGxlIHZpZXdwb3J0IGNhc2VcbiAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAndmlld3BvcnQnICkge1xuICAgIGJvdW5kYXJpZXMgPSBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUob2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbiAgfVxuXG4gIGVsc2Uge1xuICAgIC8vIEhhbmRsZSBvdGhlciBjYXNlcyBiYXNlZCBvbiBET00gZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXNcbiAgICBsZXQgYm91bmRhcmllc05vZGU7XG4gICAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShyZWZlcmVuY2UpKTtcbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKFxuICAgICAgYm91bmRhcmllc05vZGUsXG4gICAgICBvZmZzZXRQYXJlbnQsXG4gICAgICBmaXhlZFBvc2l0aW9uXG4gICAgKTtcblxuICAgIC8vIEluIGNhc2Ugb2YgSFRNTCwgd2UgbmVlZCBhIGRpZmZlcmVudCBjb21wdXRhdGlvblxuICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gZ2V0V2luZG93U2l6ZXMocG9wcGVyLm93bmVyRG9jdW1lbnQpO1xuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gaGVpZ2h0ICsgb2Zmc2V0cy50b3A7XG4gICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xuICAgICAgYm91bmRhcmllcy5yaWdodCA9IHdpZHRoICsgb2Zmc2V0cy5sZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcbiAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBwYWRkaW5nc1xuICBwYWRkaW5nID0gcGFkZGluZyB8fCAwO1xuICBjb25zdCBpc1BhZGRpbmdOdW1iZXIgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ251bWJlcic7XG4gIGJvdW5kYXJpZXMubGVmdCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5sZWZ0IHx8IDA7IFxuICBib3VuZGFyaWVzLnRvcCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy50b3AgfHwgMDsgXG4gIGJvdW5kYXJpZXMucmlnaHQgLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcucmlnaHQgfHwgMDsgXG4gIGJvdW5kYXJpZXMuYm90dG9tIC09IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmJvdHRvbSB8fCAwOyBcblxuICByZXR1cm4gYm91bmRhcmllcztcbn1cbiIsImltcG9ydCBnZXRCb3VuZGFyaWVzIGZyb20gJy4uL3V0aWxzL2dldEJvdW5kYXJpZXMnO1xuXG5mdW5jdGlvbiBnZXRBcmVhKHsgd2lkdGgsIGhlaWdodCB9KSB7XG4gIHJldHVybiB3aWR0aCAqIGhlaWdodDtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBgYXV0b2AgcGxhY2VtZW50IHRvIHRoZSBwbGFjZW1lbnQgd2l0aCBtb3JlXG4gKiBhdmFpbGFibGUgc3BhY2UuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgcGxhY2VtZW50LFxuICByZWZSZWN0LFxuICBwb3BwZXIsXG4gIHJlZmVyZW5jZSxcbiAgYm91bmRhcmllc0VsZW1lbnQsXG4gIHBhZGRpbmcgPSAwXG4pIHtcbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxuICAgIHBvcHBlcixcbiAgICByZWZlcmVuY2UsXG4gICAgcGFkZGluZyxcbiAgICBib3VuZGFyaWVzRWxlbWVudFxuICApO1xuXG4gIGNvbnN0IHJlY3RzID0ge1xuICAgIHRvcDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlZlJlY3QudG9wIC0gYm91bmRhcmllcy50b3AsXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMucmlnaHQgLSByZWZSZWN0LnJpZ2h0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodCxcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuYm90dG9tIC0gcmVmUmVjdC5ib3R0b20sXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICB3aWR0aDogcmVmUmVjdC5sZWZ0IC0gYm91bmRhcmllcy5sZWZ0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodCxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHNvcnRlZEFyZWFzID0gT2JqZWN0LmtleXMocmVjdHMpXG4gICAgLm1hcChrZXkgPT4gKHtcbiAgICAgIGtleSxcbiAgICAgIC4uLnJlY3RzW2tleV0sXG4gICAgICBhcmVhOiBnZXRBcmVhKHJlY3RzW2tleV0pLFxuICAgIH0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiLmFyZWEgLSBhLmFyZWEpO1xuXG4gIGNvbnN0IGZpbHRlcmVkQXJlYXMgPSBzb3J0ZWRBcmVhcy5maWx0ZXIoXG4gICAgKHsgd2lkdGgsIGhlaWdodCB9KSA9PlxuICAgICAgd2lkdGggPj0gcG9wcGVyLmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSBwb3BwZXIuY2xpZW50SGVpZ2h0XG4gICk7XG5cbiAgY29uc3QgY29tcHV0ZWRQbGFjZW1lbnQgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDBcbiAgICA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5XG4gICAgOiBzb3J0ZWRBcmVhc1swXS5rZXk7XG5cbiAgY29uc3QgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/IGAtJHt2YXJpYXRpb259YCA6ICcnKTtcbn1cbiIsImltcG9ydCBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50IGZyb20gJy4vZmluZENvbW1vbk9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcbmltcG9ydCBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0UmVmZXJlbmNlTm9kZSBmcm9tICcuL2dldFJlZmVyZW5jZU5vZGUnO1xuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSByZWZlcmVuY2UgLSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtFbGVtZW50fSBmaXhlZFBvc2l0aW9uIC0gaXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UsIGZpeGVkUG9zaXRpb24gPSBudWxsKSB7XG4gIGNvbnN0IGNvbW1vbk9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpKTtcbiAgcmV0dXJuIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShyZWZlcmVuY2UsIGNvbW1vbk9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgb3V0ZXIgc2l6ZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQgKG9mZnNldCBzaXplICsgbWFyZ2lucylcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge09iamVjdH0gb2JqZWN0IGNvbnRhaW5pbmcgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE91dGVyU2l6ZXMoZWxlbWVudCkge1xuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICBjb25zdCB4ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wIHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tIHx8IDApO1xuICBjb25zdCB5ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblJpZ2h0IHx8IDApO1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGggKyB5LFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgKyB4LFxuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgY29uc3QgaGFzaCA9IHsgbGVmdDogJ3JpZ2h0JywgcmlnaHQ6ICdsZWZ0JywgYm90dG9tOiAndG9wJywgdG9wOiAnYm90dG9tJyB9O1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBtYXRjaGVkID0+IGhhc2hbbWF0Y2hlZF0pO1xufVxuIiwiaW1wb3J0IGdldE91dGVyU2l6ZXMgZnJvbSAnLi9nZXRPdXRlclNpemVzJztcbmltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuL2dldE9wcG9zaXRlUGxhY2VtZW50JztcblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gLSBDU1MgcG9zaXRpb24gdGhlIFBvcHBlciB3aWxsIGdldCBhcHBsaWVkXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzIC0gdGhlIHJlZmVyZW5jZSBvZmZzZXRzICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7U3RyaW5nfSBwbGFjZW1lbnQgLSBvbmUgb2YgdGhlIHZhbGlkIHBsYWNlbWVudCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UG9wcGVyT2Zmc2V0cyhwb3BwZXIsIHJlZmVyZW5jZU9mZnNldHMsIHBsYWNlbWVudCkge1xuICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICAvLyBHZXQgcG9wcGVyIG5vZGUgc2l6ZXNcbiAgY29uc3QgcG9wcGVyUmVjdCA9IGdldE91dGVyU2l6ZXMocG9wcGVyKTtcblxuICAvLyBBZGQgcG9zaXRpb24sIHdpZHRoIGFuZCBoZWlnaHQgdG8gb3VyIG9mZnNldHMgb2JqZWN0XG4gIGNvbnN0IHBvcHBlck9mZnNldHMgPSB7XG4gICAgd2lkdGg6IHBvcHBlclJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBwb3BwZXJSZWN0LmhlaWdodCxcbiAgfTtcblxuICAvLyBkZXBlbmRpbmcgYnkgdGhlIHBvcHBlciBwbGFjZW1lbnQgd2UgaGF2ZSB0byBjb21wdXRlIGl0cyBvZmZzZXRzIHNsaWdodGx5IGRpZmZlcmVudGx5XG4gIGNvbnN0IGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICBjb25zdCBtYWluU2lkZSA9IGlzSG9yaXogPyAndG9wJyA6ICdsZWZ0JztcbiAgY29uc3Qgc2Vjb25kYXJ5U2lkZSA9IGlzSG9yaXogPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICBjb25zdCBzZWNvbmRhcnlNZWFzdXJlbWVudCA9ICFpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIHBvcHBlck9mZnNldHNbbWFpblNpZGVdID1cbiAgICByZWZlcmVuY2VPZmZzZXRzW21haW5TaWRlXSArXG4gICAgcmVmZXJlbmNlT2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC1cbiAgICBwb3BwZXJSZWN0W21lYXN1cmVtZW50XSAvIDI7XG4gIGlmIChwbGFjZW1lbnQgPT09IHNlY29uZGFyeVNpZGUpIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID1cbiAgICAgIHJlZmVyZW5jZU9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSBwb3BwZXJSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XTtcbiAgfSBlbHNlIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID1cbiAgICAgIHJlZmVyZW5jZU9mZnNldHNbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQoc2Vjb25kYXJ5U2lkZSldO1xuICB9XG5cbiAgcmV0dXJuIHBvcHBlck9mZnNldHM7XG59XG4iLCIvKipcbiAqIE1pbWljcyB0aGUgYGZpbmRgIG1ldGhvZCBvZiBBcnJheVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kKGFyciwgY2hlY2spIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kIGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcbiAgICByZXR1cm4gYXJyLmZpbmQoY2hlY2spO1xuICB9XG5cbiAgLy8gdXNlIGBmaWx0ZXJgIHRvIG9idGFpbiB0aGUgc2FtZSBiZWhhdmlvciBvZiBgZmluZGBcbiAgcmV0dXJuIGFyci5maWx0ZXIoY2hlY2spWzBdO1xufVxuIiwiaW1wb3J0IGZpbmQgZnJvbSAnLi9maW5kJztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBtYXRjaGluZyBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZEluZGV4KGFyciwgcHJvcCwgdmFsdWUpIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kSW5kZXggaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5maW5kSW5kZXgoY3VyID0+IGN1cltwcm9wXSA9PT0gdmFsdWUpO1xuICB9XG5cbiAgLy8gdXNlIGBmaW5kYCArIGBpbmRleE9mYCBpZiBgZmluZEluZGV4YCBpc24ndCBzdXBwb3J0ZWRcbiAgY29uc3QgbWF0Y2ggPSBmaW5kKGFyciwgb2JqID0+IG9ialtwcm9wXSA9PT0gdmFsdWUpO1xuICByZXR1cm4gYXJyLmluZGV4T2YobWF0Y2gpO1xufVxuIiwiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmltcG9ydCBmaW5kSW5kZXggZnJvbSAnLi9maW5kSW5kZXgnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Q2xpZW50UmVjdCc7XG5cbi8qKlxuICogTG9vcCB0cm91Z2ggdGhlIGxpc3Qgb2YgbW9kaWZpZXJzIGFuZCBydW4gdGhlbSBpbiBvcmRlcixcbiAqIGVhY2ggb2YgdGhlbSB3aWxsIHRoZW4gZWRpdCB0aGUgZGF0YSBvYmplY3QuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGVuZHMgLSBPcHRpb25hbCBtb2RpZmllciBuYW1lIHVzZWQgYXMgc3RvcHBlclxuICogQHJldHVybnMge2RhdGFPYmplY3R9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bk1vZGlmaWVycyhtb2RpZmllcnMsIGRhdGEsIGVuZHMpIHtcbiAgY29uc3QgbW9kaWZpZXJzVG9SdW4gPSBlbmRzID09PSB1bmRlZmluZWRcbiAgICA/IG1vZGlmaWVyc1xuICAgIDogbW9kaWZpZXJzLnNsaWNlKDAsIGZpbmRJbmRleChtb2RpZmllcnMsICduYW1lJywgZW5kcykpO1xuXG4gIG1vZGlmaWVyc1RvUnVuLmZvckVhY2gobW9kaWZpZXIgPT4ge1xuICAgIGlmIChtb2RpZmllclsnZnVuY3Rpb24nXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgY29uc29sZS53YXJuKCdgbW9kaWZpZXIuZnVuY3Rpb25gIGlzIGRlcHJlY2F0ZWQsIHVzZSBgbW9kaWZpZXIuZm5gIScpO1xuICAgIH1cbiAgICBjb25zdCBmbiA9IG1vZGlmaWVyWydmdW5jdGlvbiddIHx8IG1vZGlmaWVyLmZuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIGlmIChtb2RpZmllci5lbmFibGVkICYmIGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAvLyBBZGQgcHJvcGVydGllcyB0byBvZmZzZXRzIHRvIG1ha2UgdGhlbSBhIGNvbXBsZXRlIGNsaWVudFJlY3Qgb2JqZWN0XG4gICAgICAvLyB3ZSBkbyB0aGlzIGJlZm9yZSBlYWNoIG1vZGlmaWVyIHRvIG1ha2Ugc3VyZSB0aGUgcHJldmlvdXMgb25lIGRvZXNuJ3RcbiAgICAgIC8vIG1lc3Mgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuICAgICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSk7XG5cbiAgICAgIGRhdGEgPSBmbihkYXRhLCBtb2RpZmllcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tICcuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudCc7XG5pbXBvcnQgZ2V0UmVmZXJlbmNlT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzJztcbmltcG9ydCBnZXRQb3BwZXJPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFBvcHBlck9mZnNldHMnO1xuaW1wb3J0IHJ1bk1vZGlmaWVycyBmcm9tICcuLi91dGlscy9ydW5Nb2RpZmllcnMnO1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIsIGNvbXB1dGluZyB0aGUgbmV3IG9mZnNldHMgYW5kIGFwcGx5aW5nXG4gKiB0aGUgbmV3IHN0eWxlLjxiciAvPlxuICogUHJlZmVyIGBzY2hlZHVsZVVwZGF0ZWAgb3ZlciBgdXBkYXRlYCBiZWNhdXNlIG9mIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgLy8gaWYgcG9wcGVyIGlzIGRlc3Ryb3llZCwgZG9uJ3QgcGVyZm9ybSBhbnkgZnVydGhlciB1cGRhdGVcbiAgaWYgKHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgZGF0YSA9IHtcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICBzdHlsZXM6IHt9LFxuICAgIGFycm93U3R5bGVzOiB7fSxcbiAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICBmbGlwcGVkOiBmYWxzZSxcbiAgICBvZmZzZXRzOiB7fSxcbiAgfTtcblxuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZU9mZnNldHMoXG4gICAgdGhpcy5zdGF0ZSxcbiAgICB0aGlzLnBvcHBlcixcbiAgICB0aGlzLnJlZmVyZW5jZSxcbiAgICB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZFxuICApO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBkYXRhLnBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KFxuICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSxcbiAgICB0aGlzLnBvcHBlcixcbiAgICB0aGlzLnJlZmVyZW5jZSxcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmdcbiAgKTtcblxuICAvLyBzdG9yZSB0aGUgY29tcHV0ZWQgcGxhY2VtZW50IGluc2lkZSBgb3JpZ2luYWxQbGFjZW1lbnRgXG4gIGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcblxuICBkYXRhLnBvc2l0aW9uRml4ZWQgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZDtcblxuICAvLyBjb21wdXRlIHRoZSBwb3BwZXIgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0UG9wcGVyT2Zmc2V0cyhcbiAgICB0aGlzLnBvcHBlcixcbiAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlLFxuICAgIGRhdGEucGxhY2VtZW50XG4gICk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlci5wb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkXG4gICAgPyAnZml4ZWQnXG4gICAgOiAnYWJzb2x1dGUnO1xuXG4gIC8vIHJ1biB0aGUgbW9kaWZpZXJzXG4gIGRhdGEgPSBydW5Nb2RpZmllcnModGhpcy5tb2RpZmllcnMsIGRhdGEpO1xuXG4gIC8vIHRoZSBmaXJzdCBgdXBkYXRlYCB3aWxsIGNhbGwgYG9uQ3JlYXRlYCBjYWxsYmFja1xuICAvLyB0aGUgb3RoZXIgb25lcyB3aWxsIGNhbGwgYG9uVXBkYXRlYCBjYWxsYmFja1xuICBpZiAoIXRoaXMuc3RhdGUuaXNDcmVhdGVkKSB7XG4gICAgdGhpcy5zdGF0ZS5pc0NyZWF0ZWQgPSB0cnVlO1xuICAgIHRoaXMub3B0aW9ucy5vbkNyZWF0ZShkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm9wdGlvbnMub25VcGRhdGUoZGF0YSk7XG4gIH1cbn1cbiIsIi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgaXMgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc01vZGlmaWVyRW5hYmxlZChtb2RpZmllcnMsIG1vZGlmaWVyTmFtZSkge1xuICByZXR1cm4gbW9kaWZpZXJzLnNvbWUoXG4gICAgKHsgbmFtZSwgZW5hYmxlZCB9KSA9PiBlbmFibGVkICYmIG5hbWUgPT09IG1vZGlmaWVyTmFtZVxuICApO1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIHByZWZpeGVkIHN1cHBvcnRlZCBwcm9wZXJ0eSBuYW1lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHkgKGNhbWVsQ2FzZSlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHByZWZpeGVkIHByb3BlcnR5IChjYW1lbENhc2Ugb3IgUGFzY2FsQ2FzZSwgZGVwZW5kaW5nIG9uIHRoZSB2ZW5kb3IgcHJlZml4KVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUocHJvcGVydHkpIHtcbiAgY29uc3QgcHJlZml4ZXMgPSBbZmFsc2UsICdtcycsICdXZWJraXQnLCAnTW96JywgJ08nXTtcbiAgY29uc3QgdXBwZXJQcm9wID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgY29uc3QgdG9DaGVjayA9IHByZWZpeCA/IGAke3ByZWZpeH0ke3VwcGVyUHJvcH1gIDogcHJvcGVydHk7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW3RvQ2hlY2tdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRvQ2hlY2s7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IGlzTW9kaWZpZXJFbmFibGVkIGZyb20gJy4uL3V0aWxzL2lzTW9kaWZpZXJFbmFibGVkJztcbmltcG9ydCBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUgZnJvbSAnLi4vdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lJztcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgcG9wcGVyLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXN0cm95KCkge1xuICB0aGlzLnN0YXRlLmlzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAvLyB0b3VjaCBET00gb25seSBpZiBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgaXMgZW5hYmxlZFxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQodGhpcy5tb2RpZmllcnMsICdhcHBseVN0eWxlJykpIHtcbiAgICB0aGlzLnBvcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50Jyk7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS50b3AgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5ib3R0b20gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS53aWxsQ2hhbmdlID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGVbZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKV0gPSAnJztcbiAgfVxuXG4gIHRoaXMuZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgLy8gcmVtb3ZlIHRoZSBwb3BwZXIgaWYgdXNlciBleHBsaWNpdGx5IGFza2VkIGZvciB0aGUgZGVsZXRpb24gb24gZGVzdHJveVxuICAvLyBkbyBub3QgdXNlIGByZW1vdmVgIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnQgaXRcbiAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVPbkRlc3Ryb3kpIHtcbiAgICB0aGlzLnBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wcGVyKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbiIsIi8qKlxuICogR2V0IHRoZSB3aW5kb3cgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtXaW5kb3d9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtZW50KSB7XG4gIGNvbnN0IG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHdpbmRvdztcbn1cbiIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tICcuL2dldFdpbmRvdyc7XG5cbmZ1bmN0aW9uIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhzY3JvbGxQYXJlbnQsIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cykge1xuICBjb25zdCBpc0JvZHkgPSBzY3JvbGxQYXJlbnQubm9kZU5hbWUgPT09ICdCT0RZJztcbiAgY29uc3QgdGFyZ2V0ID0gaXNCb2R5ID8gc2Nyb2xsUGFyZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiBzY3JvbGxQYXJlbnQ7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIGlmICghaXNCb2R5KSB7XG4gICAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKFxuICAgICAgZ2V0U2Nyb2xsUGFyZW50KHRhcmdldC5wYXJlbnROb2RlKSxcbiAgICAgIGV2ZW50LFxuICAgICAgY2FsbGJhY2ssXG4gICAgICBzY3JvbGxQYXJlbnRzXG4gICAgKTtcbiAgfVxuICBzY3JvbGxQYXJlbnRzLnB1c2godGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBTZXR1cCBuZWVkZWQgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoXG4gIHJlZmVyZW5jZSxcbiAgb3B0aW9ucyxcbiAgc3RhdGUsXG4gIHVwZGF0ZUJvdW5kXG4pIHtcbiAgLy8gUmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBzdGF0ZS51cGRhdGVCb3VuZCA9IHVwZGF0ZUJvdW5kO1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIC8vIFNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICBjb25zdCBzY3JvbGxFbGVtZW50ID0gZ2V0U2Nyb2xsUGFyZW50KHJlZmVyZW5jZSk7XG4gIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhcbiAgICBzY3JvbGxFbGVtZW50LFxuICAgICdzY3JvbGwnLFxuICAgIHN0YXRlLnVwZGF0ZUJvdW5kLFxuICAgIHN0YXRlLnNjcm9sbFBhcmVudHNcbiAgKTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IHNjcm9sbEVsZW1lbnQ7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSB0cnVlO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCBzZXR1cEV2ZW50TGlzdGVuZXJzIGZyb20gJy4uL3V0aWxzL3NldHVwRXZlbnRMaXN0ZW5lcnMnO1xuXG4vKipcbiAqIEl0IHdpbGwgYWRkIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCBzdGFydCByZWNhbGN1bGF0aW5nXG4gKiBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAoIXRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIHRoaXMuc3RhdGUgPSBzZXR1cEV2ZW50TGlzdGVuZXJzKFxuICAgICAgdGhpcy5yZWZlcmVuY2UsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICB0aGlzLnN0YXRlLFxuICAgICAgdGhpcy5zY2hlZHVsZVVwZGF0ZVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSAnLi9nZXRXaW5kb3cnO1xuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBzdGF0ZSkge1xuICAvLyBSZW1vdmUgcmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG5cbiAgLy8gUmVtb3ZlIHNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RhdGUudXBkYXRlQm91bmQpO1xuICB9KTtcblxuICAvLyBSZXNldCBzdGF0ZVxuICBzdGF0ZS51cGRhdGVCb3VuZCA9IG51bGw7XG4gIHN0YXRlLnNjcm9sbFBhcmVudHMgPSBbXTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IG51bGw7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IHJlbW92ZUV2ZW50TGlzdGVuZXJzIGZyb20gJy4uL3V0aWxzL3JlbW92ZUV2ZW50TGlzdGVuZXJzJztcblxuLyoqXG4gKiBJdCB3aWxsIHJlbW92ZSByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgd29uJ3QgcmVjYWxjdWxhdGUgcG9wcGVyIHBvc2l0aW9uXG4gKiB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC4gSXQgYWxzbyB3b24ndCB0cmlnZ2VyIGBvblVwZGF0ZWAgY2FsbGJhY2sgYW55bW9yZSxcbiAqIHVubGVzcyB5b3UgY2FsbCBgdXBkYXRlYCBtZXRob2QgbWFudWFsbHkuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICAgIHRoaXMuc3RhdGUgPSByZW1vdmVFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5zdGF0ZSk7XG4gIH1cbn1cbiIsIi8qKlxuICogVGVsbHMgaWYgYSBnaXZlbiBpbnB1dCBpcyBhIG51bWJlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHsqfSBpbnB1dCB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuIG4gIT09ICcnICYmICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cbiIsImltcG9ydCBpc051bWVyaWMgZnJvbSAnLi9pc051bWVyaWMnO1xuXG4vKipcbiAqIFNldCB0aGUgc3R5bGUgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgc3R5bGUgdG9cbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGxldCB1bml0ID0gJyc7XG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAgaWYgKFxuICAgICAgWyd3aWR0aCcsICdoZWlnaHQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uaW5kZXhPZihwcm9wKSAhPT1cbiAgICAgICAgLTEgJiZcbiAgICAgIGlzTnVtZXJpYyhzdHlsZXNbcHJvcF0pXG4gICAgKSB7XG4gICAgICB1bml0ID0gJ3B4JztcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXSArIHVuaXQ7XG4gIH0pO1xufVxuIiwiLyoqXG4gKiBTZXQgdGhlIGF0dHJpYnV0ZXMgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgYXR0cmlidXRlcyB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1twcm9wXTtcbiAgICBpZiAodmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wLCBhdHRyaWJ1dGVzW3Byb3BdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBzZXRTdHlsZXMgZnJvbSAnLi4vdXRpbHMvc2V0U3R5bGVzJztcbmltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gJy4uL3V0aWxzL3NldEF0dHJpYnV0ZXMnO1xuaW1wb3J0IGdldFJlZmVyZW5jZU9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UmVmZXJlbmNlT2Zmc2V0cyc7XG5pbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQnO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuc3R5bGVzIC0gTGlzdCBvZiBzdHlsZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5hdHRyaWJ1dGVzIC0gTGlzdCBvZiBhdHRyaWJ1dGUgcHJvcGVydGllcyAtIHZhbHVlcyB0byBhcHBseSB0byBwb3BwZXIgZWxlbWVudFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIHNhbWUgZGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlTdHlsZShkYXRhKSB7XG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLnN0eWxlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIGluIHRoaXMgd2F5IHdlIGNhbiBtYWtlIHRoZSAzcmQgcGFydHkgbW9kaWZpZXJzIGFkZCBjdXN0b20gc3R5bGVzIHRvIGl0XG4gIC8vIEJlIGF3YXJlLCBtb2RpZmllcnMgY291bGQgb3ZlcnJpZGUgdGhlIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgcHJldmlvdXNcbiAgLy8gbGluZXMgb2YgdGhpcyBtb2RpZmllciFcbiAgc2V0U3R5bGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLnN0eWxlcyk7XG5cbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuYXR0cmlidXRlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIHRoZXkgd2lsbCBiZSBzZXQgYXMgSFRNTCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gIHNldEF0dHJpYnV0ZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuYXR0cmlidXRlcyk7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGRlZmluZWQgYW5kIGFycm93U3R5bGVzIGhhcyBzb21lIHByb3BlcnRpZXNcbiAgaWYgKGRhdGEuYXJyb3dFbGVtZW50ICYmIE9iamVjdC5rZXlzKGRhdGEuYXJyb3dTdHlsZXMpLmxlbmd0aCkge1xuICAgIHNldFN0eWxlcyhkYXRhLmFycm93RWxlbWVudCwgZGF0YS5hcnJvd1N0eWxlcyk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHgtcGxhY2VtZW50IGF0dHJpYnV0ZSBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGJlY2F1c2UgaXQgY291bGQgYmUgdXNlZFxuICogdG8gYWRkIG1hcmdpbnMgdG8gdGhlIHBvcHBlciBtYXJnaW5zIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQgdG8gZ2V0IHRoZVxuICogY29ycmVjdCBwb3BwZXIgb2Zmc2V0cy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIubW9kaWZpZXJzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCBlbGVtZW50IHVzZWQgYXMgcG9wcGVyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFBvcHBlci5qcyBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0eWxlT25Mb2FkKFxuICByZWZlcmVuY2UsXG4gIHBvcHBlcixcbiAgb3B0aW9ucyxcbiAgbW9kaWZpZXJPcHRpb25zLFxuICBzdGF0ZVxuKSB7XG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICBjb25zdCByZWZlcmVuY2VPZmZzZXRzID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gIC8vIG1vZGlmaWVycyB3aWxsIGJlIGFibGUgdG8gZWRpdCBgcGxhY2VtZW50YCBpZiBuZWVkZWRcbiAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIGNvbnN0IHBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KFxuICAgIG9wdGlvbnMucGxhY2VtZW50LFxuICAgIHJlZmVyZW5jZU9mZnNldHMsXG4gICAgcG9wcGVyLFxuICAgIHJlZmVyZW5jZSxcbiAgICBvcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZ1xuICApO1xuXG4gIHBvcHBlci5zZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JywgcGxhY2VtZW50KTtcblxuICAvLyBBcHBseSBgcG9zaXRpb25gIHRvIHBvcHBlciBiZWZvcmUgYW55dGhpbmcgZWxzZSBiZWNhdXNlXG4gIC8vIHdpdGhvdXQgdGhlIHBvc2l0aW9uIGFwcGxpZWQgd2UgY2FuJ3QgZ3VhcmFudGVlIGNvcnJlY3QgY29tcHV0YXRpb25zXG4gIHNldFN0eWxlcyhwb3BwZXIsIHsgcG9zaXRpb246IG9wdGlvbnMucG9zaXRpb25GaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnIH0pO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gc2hvdWxkUm91bmQgLSBJZiB0aGUgb2Zmc2V0cyBzaG91bGQgYmUgcm91bmRlZCBhdCBhbGxcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwb3BwZXIncyBwb3NpdGlvbiBvZmZzZXRzIHJvdW5kZWRcbiAqXG4gKiBUaGUgdGFsZSBvZiBwaXhlbC1wZXJmZWN0IHBvc2l0aW9uaW5nLiBJdCdzIHN0aWxsIG5vdCAxMDAlIHBlcmZlY3QsIGJ1dCBhc1xuICogZ29vZCBhcyBpdCBjYW4gYmUgd2l0aGluIHJlYXNvbi5cbiAqIERpc2N1c3Npb24gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvcHVsbC83MTVcbiAqXG4gKiBMb3cgRFBJIHNjcmVlbnMgY2F1c2UgYSBwb3BwZXIgdG8gYmUgYmx1cnJ5IGlmIG5vdCB1c2luZyBmdWxsIHBpeGVscyAoU2FmYXJpXG4gKiBhcyB3ZWxsIG9uIEhpZ2ggRFBJIHNjcmVlbnMpLlxuICpcbiAqIEZpcmVmb3ggcHJlZmVycyBubyByb3VuZGluZyBmb3IgcG9zaXRpb25pbmcgYW5kIGRvZXMgbm90IGhhdmUgYmx1cnJpbmVzcyBvblxuICogaGlnaCBEUEkgc2NyZWVucy5cbiAqXG4gKiBPbmx5IGhvcml6b250YWwgcGxhY2VtZW50IGFuZCBsZWZ0L3JpZ2h0IHZhbHVlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHNob3VsZFJvdW5kKSB7XG4gIGNvbnN0IHsgcG9wcGVyLCByZWZlcmVuY2UgfSA9IGRhdGEub2Zmc2V0cztcbiAgY29uc3QgeyByb3VuZCwgZmxvb3IgfSA9IE1hdGg7XG4gIGNvbnN0IG5vUm91bmQgPSB2ID0+IHY7XG4gIFxuICBjb25zdCByZWZlcmVuY2VXaWR0aCA9IHJvdW5kKHJlZmVyZW5jZS53aWR0aCk7XG4gIGNvbnN0IHBvcHBlcldpZHRoID0gcm91bmQocG9wcGVyLndpZHRoKTtcbiAgXG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XG4gIGNvbnN0IGlzVmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuaW5kZXhPZignLScpICE9PSAtMTtcbiAgY29uc3Qgc2FtZVdpZHRoUGFyaXR5ID0gcmVmZXJlbmNlV2lkdGggJSAyID09PSBwb3BwZXJXaWR0aCAlIDI7XG4gIGNvbnN0IGJvdGhPZGRXaWR0aCA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gMSAmJiBwb3BwZXJXaWR0aCAlIDIgPT09IDE7XG5cbiAgY29uc3QgaG9yaXpvbnRhbFRvSW50ZWdlciA9ICFzaG91bGRSb3VuZFxuICAgID8gbm9Sb3VuZFxuICAgIDogaXNWZXJ0aWNhbCB8fCBpc1ZhcmlhdGlvbiB8fCBzYW1lV2lkdGhQYXJpdHlcbiAgICA/IHJvdW5kXG4gICAgOiBmbG9vcjtcbiAgY29uc3QgdmVydGljYWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogcm91bmQ7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBob3Jpem9udGFsVG9JbnRlZ2VyKFxuICAgICAgYm90aE9kZFdpZHRoICYmICFpc1ZhcmlhdGlvbiAmJiBzaG91bGRSb3VuZFxuICAgICAgICA/IHBvcHBlci5sZWZ0IC0gMVxuICAgICAgICA6IHBvcHBlci5sZWZ0XG4gICAgKSxcbiAgICB0b3A6IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci50b3ApLFxuICAgIGJvdHRvbTogdmVydGljYWxUb0ludGVnZXIocG9wcGVyLmJvdHRvbSksXG4gICAgcmlnaHQ6IGhvcml6b250YWxUb0ludGVnZXIocG9wcGVyLnJpZ2h0KSxcbiAgfTtcbn1cbiIsImltcG9ydCBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUgZnJvbSAnLi4vdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lJztcbmltcG9ydCBmaW5kIGZyb20gJy4uL3V0aWxzL2ZpbmQnO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuLi91dGlscy9nZXRPZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QnO1xuaW1wb3J0IGdldFJvdW5kZWRPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFJvdW5kZWRPZmZzZXRzJztcbmltcG9ydCBpc0Jyb3dzZXIgZnJvbSAnLi4vdXRpbHMvaXNCcm93c2VyJztcblxuY29uc3QgaXNGaXJlZm94ID0gaXNCcm93c2VyICYmIC9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZVN0eWxlKGRhdGEsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyB4LCB5IH0gPSBvcHRpb25zO1xuICBjb25zdCB7IHBvcHBlciB9ID0gZGF0YS5vZmZzZXRzO1xuXG4gIC8vIFJlbW92ZSB0aGlzIGxlZ2FjeSBzdXBwb3J0IGluIFBvcHBlci5qcyB2MlxuICBjb25zdCBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gPSBmaW5kKFxuICAgIGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLFxuICAgIG1vZGlmaWVyID0+IG1vZGlmaWVyLm5hbWUgPT09ICdhcHBseVN0eWxlJ1xuICApLmdwdUFjY2VsZXJhdGlvbjtcbiAgaWYgKGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1dBUk5JTkc6IGBncHVBY2NlbGVyYXRpb25gIG9wdGlvbiBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllciBhbmQgd2lsbCBub3QgYmUgc3VwcG9ydGVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBQb3BwZXIuanMhJ1xuICAgICk7XG4gIH1cbiAgY29uc3QgZ3B1QWNjZWxlcmF0aW9uID1cbiAgICBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZFxuICAgICAgPyBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb25cbiAgICAgIDogb3B0aW9ucy5ncHVBY2NlbGVyYXRpb247XG5cbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuXG4gIC8vIFN0eWxlc1xuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246IHBvcHBlci5wb3NpdGlvbixcbiAgfTtcblxuICBjb25zdCBvZmZzZXRzID0gZ2V0Um91bmRlZE9mZnNldHMoXG4gICAgZGF0YSxcbiAgICB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA8IDIgfHwgIWlzRmlyZWZveFxuICApO1xuXG4gIGNvbnN0IHNpZGVBID0geCA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nO1xuICBjb25zdCBzaWRlQiA9IHkgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG4gIC8vIGlmIGdwdUFjY2VsZXJhdGlvbiBpcyBzZXQgdG8gYHRydWVgIGFuZCB0cmFuc2Zvcm0gaXMgc3VwcG9ydGVkLFxuICAvLyAgd2UgdXNlIGB0cmFuc2xhdGUzZGAgdG8gYXBwbHkgdGhlIHBvc2l0aW9uIHRvIHRoZSBwb3BwZXIgd2VcbiAgLy8gYXV0b21hdGljYWxseSB1c2UgdGhlIHN1cHBvcnRlZCBwcmVmaXhlZCB2ZXJzaW9uIGlmIG5lZWRlZFxuICBjb25zdCBwcmVmaXhlZFByb3BlcnR5ID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcblxuICAvLyBub3csIGxldCdzIG1ha2UgYSBzdGVwIGJhY2sgYW5kIGxvb2sgYXQgdGhpcyBjb2RlIGNsb3NlbHkgKHd0Zj8pXG4gIC8vIElmIHRoZSBjb250ZW50IG9mIHRoZSBwb3BwZXIgZ3Jvd3Mgb25jZSBpdCdzIGJlZW4gcG9zaXRpb25lZCwgaXRcbiAgLy8gbWF5IGhhcHBlbiB0aGF0IHRoZSBwb3BwZXIgZ2V0cyBtaXNwbGFjZWQgYmVjYXVzZSBvZiB0aGUgbmV3IGNvbnRlbnRcbiAgLy8gb3ZlcmZsb3dpbmcgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRvIGF2b2lkIHRoaXMgcHJvYmxlbSwgd2UgcHJvdmlkZSB0d28gb3B0aW9ucyAoeCBhbmQgeSksIHdoaWNoIGFsbG93XG4gIC8vIHRoZSBjb25zdW1lciB0byBkZWZpbmUgdGhlIG9mZnNldCBvcmlnaW4uXG4gIC8vIElmIHdlIHBvc2l0aW9uIGEgcG9wcGVyIG9uIHRvcCBvZiBhIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSBjYW4gc2V0XG4gIC8vIGB4YCB0byBgdG9wYCB0byBtYWtlIHRoZSBwb3BwZXIgZ3JvdyB0b3dhcmRzIGl0cyB0b3AgaW5zdGVhZCBvZlxuICAvLyBpdHMgYm90dG9tLlxuICBsZXQgbGVmdCwgdG9wO1xuICBpZiAoc2lkZUEgPT09ICdib3R0b20nKSB7XG4gICAgLy8gd2hlbiBvZmZzZXRQYXJlbnQgaXMgPGh0bWw+IHRoZSBwb3NpdGlvbmluZyBpcyByZWxhdGl2ZSB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gKGV4Y2x1ZGluZyB0aGUgc2Nyb2xsYmFyKVxuICAgIC8vIGFuZCBub3QgdGhlIGJvdHRvbSBvZiB0aGUgaHRtbCBlbGVtZW50XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICB0b3AgPSAtb2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3AgPSAtb2Zmc2V0UGFyZW50UmVjdC5oZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gb2Zmc2V0cy50b3A7XG4gIH1cbiAgaWYgKHNpZGVCID09PSAncmlnaHQnKSB7XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudC5jbGllbnRXaWR0aCArIG9mZnNldHMucmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSAtb2Zmc2V0UGFyZW50UmVjdC53aWR0aCArIG9mZnNldHMucmlnaHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlZnQgPSBvZmZzZXRzLmxlZnQ7XG4gIH1cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbiAmJiBwcmVmaXhlZFByb3BlcnR5KSB7XG4gICAgc3R5bGVzW3ByZWZpeGVkUHJvcGVydHldID0gYHRyYW5zbGF0ZTNkKCR7bGVmdH1weCwgJHt0b3B9cHgsIDApYDtcbiAgICBzdHlsZXNbc2lkZUFdID0gMDtcbiAgICBzdHlsZXNbc2lkZUJdID0gMDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0nO1xuICB9IGVsc2Uge1xuICAgIC8vIG90aHdlcmlzZSwgd2UgdXNlIHRoZSBzdGFuZGFyZCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCBhbmQgYHJpZ2h0YCBwcm9wZXJ0aWVzXG4gICAgY29uc3QgaW52ZXJ0VG9wID0gc2lkZUEgPT09ICdib3R0b20nID8gLTEgOiAxO1xuICAgIGNvbnN0IGludmVydExlZnQgPSBzaWRlQiA9PT0gJ3JpZ2h0JyA/IC0xIDogMTtcbiAgICBzdHlsZXNbc2lkZUFdID0gdG9wICogaW52ZXJ0VG9wO1xuICAgIHN0eWxlc1tzaWRlQl0gPSBsZWZ0ICogaW52ZXJ0TGVmdDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9IGAke3NpZGVBfSwgJHtzaWRlQn1gO1xuICB9XG5cbiAgLy8gQXR0cmlidXRlc1xuICBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICAgICd4LXBsYWNlbWVudCc6IGRhdGEucGxhY2VtZW50LFxuICB9O1xuXG4gIC8vIFVwZGF0ZSBgZGF0YWAgYXR0cmlidXRlcywgc3R5bGVzIGFuZCBhcnJvd1N0eWxlc1xuICBkYXRhLmF0dHJpYnV0ZXMgPSB7IC4uLmF0dHJpYnV0ZXMsIC4uLmRhdGEuYXR0cmlidXRlcyB9O1xuICBkYXRhLnN0eWxlcyA9IHsgLi4uc3R5bGVzLCAuLi5kYXRhLnN0eWxlcyB9O1xuICBkYXRhLmFycm93U3R5bGVzID0geyAuLi5kYXRhLm9mZnNldHMuYXJyb3csIC4uLmRhdGEuYXJyb3dTdHlsZXMgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBmaW5kIGZyb20gJy4vZmluZCc7XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgZGVwZW5kcyBmcm9tIGFub3RoZXIgb25lLjxiciAvPlxuICogSXQgY2hlY2tzIGlmIHRoZSBuZWVkZWQgbW9kaWZpZXIgaXMgbGlzdGVkIGFuZCBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzIC0gbGlzdCBvZiBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0aW5nTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGluZyBtb2RpZmllclxuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RlZE5hbWUgLSBuYW1lIG9mIHJlcXVlc3RlZCBtb2RpZmllclxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTW9kaWZpZXJSZXF1aXJlZChcbiAgbW9kaWZpZXJzLFxuICByZXF1ZXN0aW5nTmFtZSxcbiAgcmVxdWVzdGVkTmFtZVxuKSB7XG4gIGNvbnN0IHJlcXVlc3RpbmcgPSBmaW5kKG1vZGlmaWVycywgKHsgbmFtZSB9KSA9PiBuYW1lID09PSByZXF1ZXN0aW5nTmFtZSk7XG5cbiAgY29uc3QgaXNSZXF1aXJlZCA9XG4gICAgISFyZXF1ZXN0aW5nICYmXG4gICAgbW9kaWZpZXJzLnNvbWUobW9kaWZpZXIgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbW9kaWZpZXIubmFtZSA9PT0gcmVxdWVzdGVkTmFtZSAmJlxuICAgICAgICBtb2RpZmllci5lbmFibGVkICYmXG4gICAgICAgIG1vZGlmaWVyLm9yZGVyIDwgcmVxdWVzdGluZy5vcmRlclxuICAgICAgKTtcbiAgICB9KTtcblxuICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICBjb25zdCByZXF1ZXN0aW5nID0gYFxcYCR7cmVxdWVzdGluZ05hbWV9XFxgYDtcbiAgICBjb25zdCByZXF1ZXN0ZWQgPSBgXFxgJHtyZXF1ZXN0ZWROYW1lfVxcYGA7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYCR7cmVxdWVzdGVkfSBtb2RpZmllciBpcyByZXF1aXJlZCBieSAke3JlcXVlc3Rpbmd9IG1vZGlmaWVyIGluIG9yZGVyIHRvIHdvcmssIGJlIHN1cmUgdG8gaW5jbHVkZSBpdCBiZWZvcmUgJHtyZXF1ZXN0aW5nfSFgXG4gICAgKTtcbiAgfVxuICByZXR1cm4gaXNSZXF1aXJlZDtcbn1cbiIsImltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldENsaWVudFJlY3QnO1xuaW1wb3J0IGdldE91dGVyU2l6ZXMgZnJvbSAnLi4vdXRpbHMvZ2V0T3V0ZXJTaXplcyc7XG5pbXBvcnQgaXNNb2RpZmllclJlcXVpcmVkIGZyb20gJy4uL3V0aWxzL2lzTW9kaWZpZXJSZXF1aXJlZCc7XG5pbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4uL3V0aWxzL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcnJvdyhkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGFycm93IGRlcGVuZHMgb24ga2VlcFRvZ2V0aGVyIGluIG9yZGVyIHRvIHdvcmtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdhcnJvdycsICdrZWVwVG9nZXRoZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgbGV0IGFycm93RWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgbm90IGZvdW5kLCBkb24ndCBydW4gdGhlIG1vZGlmaWVyXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB0aGUgYXJyb3dFbGVtZW50IGlzbid0IGEgcXVlcnkgc2VsZWN0b3Igd2UgbXVzdCBjaGVjayB0aGF0IHRoZVxuICAgIC8vIHByb3ZpZGVkIERPTSBub2RlIGlzIGNoaWxkIG9mIGl0cyBwb3BwZXIgbm9kZVxuICAgIGlmICghZGF0YS5pbnN0YW5jZS5wb3BwZXIuY29udGFpbnMoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnV0FSTklORzogYGFycm93LmVsZW1lbnRgIG11c3QgYmUgY2hpbGQgb2YgaXRzIHBvcHBlciBlbGVtZW50ISdcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBkYXRhLm9mZnNldHM7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gIGNvbnN0IGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIGNvbnN0IHNpZGVDYXBpdGFsaXplZCA9IGlzVmVydGljYWwgPyAnVG9wJyA6ICdMZWZ0JztcbiAgY29uc3Qgc2lkZSA9IHNpZGVDYXBpdGFsaXplZC50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICBjb25zdCBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICBjb25zdCBhcnJvd0VsZW1lbnRTaXplID0gZ2V0T3V0ZXJTaXplcyhhcnJvd0VsZW1lbnQpW2xlbl07XG5cbiAgLy9cbiAgLy8gZXh0ZW5kcyBrZWVwVG9nZXRoZXIgYmVoYXZpb3IgbWFraW5nIHN1cmUgdGhlIHBvcHBlciBhbmQgaXRzXG4gIC8vIHJlZmVyZW5jZSBoYXZlIGVub3VnaCBwaXhlbHMgaW4gY29uanVuY3Rpb25cbiAgLy9cblxuICAvLyB0b3AvbGVmdCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUgPCBwb3BwZXJbc2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC09XG4gICAgICBwb3BwZXJbc2lkZV0gLSAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcbiAgfVxuICAvLyBib3R0b20vcmlnaHQgc2lkZVxuICBpZiAocmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSA+IHBvcHBlcltvcFNpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSArPVxuICAgICAgcmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSAtIHBvcHBlcltvcFNpZGVdO1xuICB9XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuXG4gIC8vIGNvbXB1dGUgY2VudGVyIG9mIHRoZSBwb3BwZXJcbiAgY29uc3QgY2VudGVyID0gcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW2xlbl0gLyAyIC0gYXJyb3dFbGVtZW50U2l6ZSAvIDI7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHBvcHBlciBvZmZzZXRzXG4gIC8vIHRha2UgcG9wcGVyIG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXG4gIGNvbnN0IGNzcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIGNvbnN0IHBvcHBlck1hcmdpblNpZGUgPSBwYXJzZUZsb2F0KGNzc1tgbWFyZ2luJHtzaWRlQ2FwaXRhbGl6ZWR9YF0sIDEwKTtcbiAgY29uc3QgcG9wcGVyQm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2Bib3JkZXIke3NpZGVDYXBpdGFsaXplZH1XaWR0aGBdLCAxMCk7XG4gIGxldCBzaWRlVmFsdWUgPVxuICAgIGNlbnRlciAtIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLSBwb3BwZXJNYXJnaW5TaWRlIC0gcG9wcGVyQm9yZGVyU2lkZTtcblxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyBwb3BwZXJcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4ocG9wcGVyW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcblxuICBkYXRhLmFycm93RWxlbWVudCA9IGFycm93RWxlbWVudDtcbiAgZGF0YS5vZmZzZXRzLmFycm93ID0ge1xuICAgIFtzaWRlXTogTWF0aC5yb3VuZChzaWRlVmFsdWUpLFxuICAgIFthbHRTaWRlXTogJycsIC8vIG1ha2Ugc3VyZSB0byB1bnNldCBhbnkgZXZlbnR1YWwgYWx0U2lkZSB2YWx1ZSBmcm9tIHRoZSBET00gbm9kZVxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCB2YXJpYXRpb24gb2YgdGhlIGdpdmVuIG9uZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCB2YXJpYXRpb25cbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50IHZhcmlhdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pIHtcbiAgaWYgKHZhcmlhdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICByZXR1cm4gJ3N0YXJ0JztcbiAgfSBlbHNlIGlmICh2YXJpYXRpb24gPT09ICdzdGFydCcpIHtcbiAgICByZXR1cm4gJ2VuZCc7XG4gIH1cbiAgcmV0dXJuIHZhcmlhdGlvbjtcbn1cbiIsIi8qKlxuICogTGlzdCBvZiBhY2NlcHRlZCBwbGFjZW1lbnRzIHRvIHVzZSBhcyB2YWx1ZXMgb2YgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbi48YnIgLz5cbiAqIFZhbGlkIHBsYWNlbWVudHMgYXJlOlxuICogLSBgYXV0b2BcbiAqIC0gYHRvcGBcbiAqIC0gYHJpZ2h0YFxuICogLSBgYm90dG9tYFxuICogLSBgbGVmdGBcbiAqXG4gKiBFYWNoIHBsYWNlbWVudCBjYW4gaGF2ZSBhIHZhcmlhdGlvbiBmcm9tIHRoaXMgbGlzdDpcbiAqIC0gYC1zdGFydGBcbiAqIC0gYC1lbmRgXG4gKlxuICogVmFyaWF0aW9ucyBhcmUgaW50ZXJwcmV0ZWQgZWFzaWx5IGlmIHlvdSB0aGluayBvZiB0aGVtIGFzIHRoZSBsZWZ0IHRvIHJpZ2h0XG4gKiB3cml0dGVuIGxhbmd1YWdlcy4gSG9yaXpvbnRhbGx5IChgdG9wYCBhbmQgYGJvdHRvbWApLCBgc3RhcnRgIGlzIGxlZnQgYW5kIGBlbmRgXG4gKiBpcyByaWdodC48YnIgLz5cbiAqIFZlcnRpY2FsbHkgKGBsZWZ0YCBhbmQgYHJpZ2h0YCksIGBzdGFydGAgaXMgdG9wIGFuZCBgZW5kYCBpcyBib3R0b20uXG4gKlxuICogU29tZSB2YWxpZCBleGFtcGxlcyBhcmU6XG4gKiAtIGB0b3AtZW5kYCAob24gdG9wIG9mIHJlZmVyZW5jZSwgcmlnaHQgYWxpZ25lZClcbiAqIC0gYHJpZ2h0LXN0YXJ0YCAob24gcmlnaHQgb2YgcmVmZXJlbmNlLCB0b3AgYWxpZ25lZClcbiAqIC0gYGJvdHRvbWAgKG9uIGJvdHRvbSwgY2VudGVyZWQpXG4gKiAtIGBhdXRvLWVuZGAgKG9uIHRoZSBzaWRlIHdpdGggbW9yZSBzcGFjZSBhdmFpbGFibGUsIGFsaWdubWVudCBkZXBlbmRzIGJ5IHBsYWNlbWVudClcbiAqXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAZW51bSB7U3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAbWV0aG9kIHBsYWNlbWVudHNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgW1xuICAnYXV0by1zdGFydCcsXG4gICdhdXRvJyxcbiAgJ2F1dG8tZW5kJyxcbiAgJ3RvcC1zdGFydCcsXG4gICd0b3AnLFxuICAndG9wLWVuZCcsXG4gICdyaWdodC1zdGFydCcsXG4gICdyaWdodCcsXG4gICdyaWdodC1lbmQnLFxuICAnYm90dG9tLWVuZCcsXG4gICdib3R0b20nLFxuICAnYm90dG9tLXN0YXJ0JyxcbiAgJ2xlZnQtZW5kJyxcbiAgJ2xlZnQnLFxuICAnbGVmdC1zdGFydCcsXG5dO1xuIiwiaW1wb3J0IHBsYWNlbWVudHMgZnJvbSAnLi4vbWV0aG9kcy9wbGFjZW1lbnRzJztcblxuLy8gR2V0IHJpZCBvZiBgYXV0b2AgYGF1dG8tc3RhcnRgIGFuZCBgYXV0by1lbmRgXG5jb25zdCB2YWxpZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLnNsaWNlKDMpO1xuXG4vKipcbiAqIEdpdmVuIGFuIGluaXRpYWwgcGxhY2VtZW50LCByZXR1cm5zIGFsbCB0aGUgc3Vic2VxdWVudCBwbGFjZW1lbnRzXG4gKiBjbG9ja3dpc2UgKG9yIGNvdW50ZXItY2xvY2t3aXNlKS5cbiAqXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IC0gQSB2YWxpZCBwbGFjZW1lbnQgKGl0IGFjY2VwdHMgdmFyaWF0aW9ucylcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gY291bnRlciAtIFNldCB0byB0cnVlIHRvIHdhbGsgdGhlIHBsYWNlbWVudHMgY291bnRlcmNsb2Nrd2lzZVxuICogQHJldHVybnMge0FycmF5fSBwbGFjZW1lbnRzIGluY2x1ZGluZyB0aGVpciB2YXJpYXRpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb2Nrd2lzZShwbGFjZW1lbnQsIGNvdW50ZXIgPSBmYWxzZSkge1xuICBjb25zdCBpbmRleCA9IHZhbGlkUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCk7XG4gIGNvbnN0IGFyciA9IHZhbGlkUGxhY2VtZW50c1xuICAgIC5zbGljZShpbmRleCArIDEpXG4gICAgLmNvbmNhdCh2YWxpZFBsYWNlbWVudHMuc2xpY2UoMCwgaW5kZXgpKTtcbiAgcmV0dXJuIGNvdW50ZXIgPyBhcnIucmV2ZXJzZSgpIDogYXJyO1xufVxuIiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gJy4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50JztcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvbiBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvbic7XG5pbXBvcnQgZ2V0UG9wcGVyT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRQb3BwZXJPZmZzZXRzJztcbmltcG9ydCBydW5Nb2RpZmllcnMgZnJvbSAnLi4vdXRpbHMvcnVuTW9kaWZpZXJzJztcbmltcG9ydCBnZXRCb3VuZGFyaWVzIGZyb20gJy4uL3V0aWxzL2dldEJvdW5kYXJpZXMnO1xuaW1wb3J0IGlzTW9kaWZpZXJFbmFibGVkIGZyb20gJy4uL3V0aWxzL2lzTW9kaWZpZXJFbmFibGVkJztcbmltcG9ydCBjbG9ja3dpc2UgZnJvbSAnLi4vdXRpbHMvY2xvY2t3aXNlJztcblxuY29uc3QgQkVIQVZJT1JTID0ge1xuICBGTElQOiAnZmxpcCcsXG4gIENMT0NLV0lTRTogJ2Nsb2Nrd2lzZScsXG4gIENPVU5URVJDTE9DS1dJU0U6ICdjb3VudGVyY2xvY2t3aXNlJyxcbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmbGlwKGRhdGEsIG9wdGlvbnMpIHtcbiAgLy8gaWYgYGlubmVyYCBtb2RpZmllciBpcyBlbmFibGVkLCB3ZSBjYW4ndCB1c2UgdGhlIGBmbGlwYCBtb2RpZmllclxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdpbm5lcicpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoZGF0YS5mbGlwcGVkICYmIGRhdGEucGxhY2VtZW50ID09PSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50KSB7XG4gICAgLy8gc2VlbXMgbGlrZSBmbGlwIGlzIHRyeWluZyB0byBsb29wLCBwcm9iYWJseSB0aGVyZSdzIG5vdCBlbm91Z2ggc3BhY2Ugb24gYW55IG9mIHRoZSBmbGlwcGFibGUgc2lkZXNcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxuICAgIGRhdGEuaW5zdGFuY2UucG9wcGVyLFxuICAgIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLFxuICAgIG9wdGlvbnMucGFkZGluZyxcbiAgICBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgIGRhdGEucG9zaXRpb25GaXhlZFxuICApO1xuXG4gIGxldCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBsZXQgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBsZXQgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVsxXSB8fCAnJztcblxuICBsZXQgZmxpcE9yZGVyID0gW107XG5cbiAgc3dpdGNoIChvcHRpb25zLmJlaGF2aW9yKSB7XG4gICAgY2FzZSBCRUhBVklPUlMuRkxJUDpcbiAgICAgIGZsaXBPcmRlciA9IFtwbGFjZW1lbnQsIHBsYWNlbWVudE9wcG9zaXRlXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ09VTlRFUkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGZsaXBPcmRlciA9IG9wdGlvbnMuYmVoYXZpb3I7XG4gIH1cblxuICBmbGlwT3JkZXIuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICBpZiAocGxhY2VtZW50ICE9PSBzdGVwIHx8IGZsaXBPcmRlci5sZW5ndGggPT09IGluZGV4ICsgMSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICBjb25zdCBwb3BwZXJPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcbiAgICBjb25zdCByZWZPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcblxuICAgIC8vIHVzaW5nIGZsb29yIGJlY2F1c2UgdGhlIHJlZmVyZW5jZSBvZmZzZXRzIG1heSBjb250YWluIGRlY2ltYWxzIHdlIGFyZSBub3QgZ29pbmcgdG8gY29uc2lkZXIgaGVyZVxuICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICBjb25zdCBvdmVybGFwc1JlZiA9XG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihyZWZPZmZzZXRzLmxlZnQpKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJlxuICAgICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IocmVmT2Zmc2V0cy5yaWdodCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJlxuICAgICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihyZWZPZmZzZXRzLnRvcCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJlxuICAgICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihyZWZPZmZzZXRzLmJvdHRvbSkpO1xuXG4gICAgY29uc3Qgb3ZlcmZsb3dzTGVmdCA9IGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihib3VuZGFyaWVzLmxlZnQpO1xuICAgIGNvbnN0IG92ZXJmbG93c1JpZ2h0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcbiAgICBjb25zdCBvdmVyZmxvd3NUb3AgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihib3VuZGFyaWVzLnRvcCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzQm90dG9tID1cbiAgICAgIGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKGJvdW5kYXJpZXMuYm90dG9tKTtcblxuICAgIGNvbnN0IG92ZXJmbG93c0JvdW5kYXJpZXMgPVxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c0xlZnQpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgb3ZlcmZsb3dzVG9wKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgb3ZlcmZsb3dzQm90dG9tKTtcblxuICAgIC8vIGZsaXAgdGhlIHZhcmlhdGlvbiBpZiByZXF1aXJlZFxuICAgIGNvbnN0IGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbkJ5UmVmID1cbiAgICAgICEhb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyAmJlxuICAgICAgKChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgICAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c1RvcCkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzQm90dG9tKSk7XG5cbiAgICAvLyBmbGlwcyB2YXJpYXRpb24gaWYgcG9wcGVyIGNvbnRlbnQgb3ZlcmZsb3dzIGJvdW5kYXJpZXNcbiAgICBjb25zdCBmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50ID1cbiAgICAgICEhb3B0aW9ucy5mbGlwVmFyaWF0aW9uc0J5Q29udGVudCAmJlxuICAgICAgKChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgICAgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0JvdHRvbSkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzVG9wKSk7XG5cbiAgICBjb25zdCBmbGlwcGVkVmFyaWF0aW9uID0gZmxpcHBlZFZhcmlhdGlvbkJ5UmVmIHx8IGZsaXBwZWRWYXJpYXRpb25CeUNvbnRlbnQ7XG5cbiAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcyB8fCBmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAvLyB0aGlzIGJvb2xlYW4gdG8gZGV0ZWN0IGFueSBmbGlwIGxvb3BcbiAgICAgIGRhdGEuZmxpcHBlZCA9IHRydWU7XG5cbiAgICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IGZsaXBPcmRlcltpbmRleCArIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgICB2YXJpYXRpb24gPSBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBkYXRhLnBsYWNlbWVudCA9IHBsYWNlbWVudCArICh2YXJpYXRpb24gPyAnLScgKyB2YXJpYXRpb24gOiAnJyk7XG5cbiAgICAgIC8vIHRoaXMgb2JqZWN0IGNvbnRhaW5zIGBwb3NpdGlvbmAsIHdlIHdhbnQgdG8gcHJlc2VydmUgaXQgYWxvbmcgd2l0aFxuICAgICAgLy8gYW55IGFkZGl0aW9uYWwgcHJvcGVydHkgd2UgbWF5IGFkZCBpbiB0aGUgZnV0dXJlXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0ge1xuICAgICAgICAuLi5kYXRhLm9mZnNldHMucG9wcGVyLFxuICAgICAgICAuLi5nZXRQb3BwZXJPZmZzZXRzKFxuICAgICAgICAgIGRhdGEuaW5zdGFuY2UucG9wcGVyLFxuICAgICAgICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgICAgICAgZGF0YS5wbGFjZW1lbnRcbiAgICAgICAgKSxcbiAgICAgIH07XG5cbiAgICAgIGRhdGEgPSBydW5Nb2RpZmllcnMoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGRhdGEsICdmbGlwJyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIvKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga2VlcFRvZ2V0aGVyKGRhdGEpIHtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICBjb25zdCBzaWRlID0gaXNWZXJ0aWNhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcbiAgY29uc3Qgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICBjb25zdCBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgaWYgKHBvcHBlcltzaWRlXSA8IGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9XG4gICAgICBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkgLSBwb3BwZXJbbWVhc3VyZW1lbnRdO1xuICB9XG4gIGlmIChwb3BwZXJbb3BTaWRlXSA+IGZsb29yKHJlZmVyZW5jZVtzaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPSBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgaXNOdW1lcmljIGZyb20gJy4uL3V0aWxzL2lzTnVtZXJpYyc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRDbGllbnRSZWN0JztcbmltcG9ydCBmaW5kIGZyb20gJy4uL3V0aWxzL2ZpbmQnO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdmFsdWUgKyB1bml0IGludG8gYSBweCB2YWx1ZSBudW1iZXJcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzdHIgLSBWYWx1ZSArIHVuaXQgc3RyaW5nXG4gKiBAYXJndW1lbnQge1N0cmluZ30gbWVhc3VyZW1lbnQgLSBgaGVpZ2h0YCBvciBgd2lkdGhgXG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfVxuICogVmFsdWUgaW4gcGl4ZWxzLCBvciBvcmlnaW5hbCBzdHJpbmcgaWYgbm8gdmFsdWVzIHdlcmUgZXh0cmFjdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpIHtcbiAgLy8gc2VwYXJhdGUgdmFsdWUgZnJvbSB1bml0XG4gIGNvbnN0IHNwbGl0ID0gc3RyLm1hdGNoKC8oKD86XFwtfFxcKyk/XFxkKlxcLj9cXGQqKSguKikvKTtcbiAgY29uc3QgdmFsdWUgPSArc3BsaXRbMV07XG4gIGNvbnN0IHVuaXQgPSBzcGxpdFsyXTtcblxuICAvLyBJZiBpdCdzIG5vdCBhIG51bWJlciBpdCdzIGFuIG9wZXJhdG9yLCBJIGd1ZXNzXG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgaWYgKHVuaXQuaW5kZXhPZignJScpID09PSAwKSB7XG4gICAgbGV0IGVsZW1lbnQ7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICBjYXNlICclcCc6XG4gICAgICAgIGVsZW1lbnQgPSBwb3BwZXJPZmZzZXRzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyUnOlxuICAgICAgY2FzZSAnJXInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudCA9IHJlZmVyZW5jZU9mZnNldHM7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjdCA9IGdldENsaWVudFJlY3QoZWxlbWVudCk7XG4gICAgcmV0dXJuIHJlY3RbbWVhc3VyZW1lbnRdIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3ZoJyB8fCB1bml0ID09PSAndncnKSB7XG4gICAgLy8gaWYgaXMgYSB2aCBvciB2dywgd2UgY2FsY3VsYXRlIHRoZSBzaXplIGJhc2VkIG9uIHRoZSB2aWV3cG9ydFxuICAgIGxldCBzaXplO1xuICAgIGlmICh1bml0ID09PSAndmgnKSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggfHwgMFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemUgLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBpcyBhbiBleHBsaWNpdCBwaXhlbCB1bml0LCB3ZSBnZXQgcmlkIG9mIHRoZSB1bml0IGFuZCBrZWVwIHRoZSB2YWx1ZVxuICAgIC8vIGlmIGlzIGFuIGltcGxpY2l0IHVuaXQsIGl0J3MgcHgsIGFuZCB3ZSByZXR1cm4ganVzdCB0aGUgdmFsdWVcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhbiBgb2Zmc2V0YCBzdHJpbmcgdG8gZXh0cmFwb2xhdGUgYHhgIGFuZCBgeWAgbnVtZXJpYyBvZmZzZXRzLlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IG9mZnNldFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gYmFzZVBsYWNlbWVudFxuICogQHJldHVybnMge0FycmF5fSBhIHR3byBjZWxscyBhcnJheSB3aXRoIHggYW5kIHkgb2Zmc2V0cyBpbiBudW1iZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU9mZnNldChcbiAgb2Zmc2V0LFxuICBwb3BwZXJPZmZzZXRzLFxuICByZWZlcmVuY2VPZmZzZXRzLFxuICBiYXNlUGxhY2VtZW50XG4pIHtcbiAgY29uc3Qgb2Zmc2V0cyA9IFswLCAwXTtcblxuICAvLyBVc2UgaGVpZ2h0IGlmIHBsYWNlbWVudCBpcyBsZWZ0IG9yIHJpZ2h0IGFuZCBpbmRleCBpcyAwIG90aGVyd2lzZSB1c2Ugd2lkdGhcbiAgLy8gaW4gdGhpcyB3YXkgdGhlIGZpcnN0IG9mZnNldCB3aWxsIHVzZSBhbiBheGlzIGFuZCB0aGUgc2Vjb25kIG9uZVxuICAvLyB3aWxsIHVzZSB0aGUgb3RoZXIgb25lXG4gIGNvbnN0IHVzZUhlaWdodCA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gIC8vIFNwbGl0IHRoZSBvZmZzZXQgc3RyaW5nIHRvIG9idGFpbiBhIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kc1xuICAvLyBUaGUgcmVnZXggYWRkcmVzc2VzIHZhbHVlcyB3aXRoIHRoZSBwbHVzIG9yIG1pbnVzIHNpZ24gaW4gZnJvbnQgKCsxMCwgLTIwLCBldGMpXG4gIGNvbnN0IGZyYWdtZW50cyA9IG9mZnNldC5zcGxpdCgvKFxcK3xcXC0pLykubWFwKGZyYWcgPT4gZnJhZy50cmltKCkpO1xuXG4gIC8vIERldGVjdCBpZiB0aGUgb2Zmc2V0IHN0cmluZyBjb250YWlucyBhIHBhaXIgb2YgdmFsdWVzIG9yIGEgc2luZ2xlIG9uZVxuICAvLyB0aGV5IGNvdWxkIGJlIHNlcGFyYXRlZCBieSBjb21tYSBvciBzcGFjZVxuICBjb25zdCBkaXZpZGVyID0gZnJhZ21lbnRzLmluZGV4T2YoXG4gICAgZmluZChmcmFnbWVudHMsIGZyYWcgPT4gZnJhZy5zZWFyY2goLyx8XFxzLykgIT09IC0xKVxuICApO1xuXG4gIGlmIChmcmFnbWVudHNbZGl2aWRlcl0gJiYgZnJhZ21lbnRzW2RpdmlkZXJdLmluZGV4T2YoJywnKSA9PT0gLTEpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnT2Zmc2V0cyBzZXBhcmF0ZWQgYnkgd2hpdGUgc3BhY2UocykgYXJlIGRlcHJlY2F0ZWQsIHVzZSBhIGNvbW1hICgsKSBpbnN0ZWFkLidcbiAgICApO1xuICB9XG5cbiAgLy8gSWYgZGl2aWRlciBpcyBmb3VuZCwgd2UgZGl2aWRlIHRoZSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHMgdG8gZGl2aWRlXG4gIC8vIHRoZW0gYnkgb2ZzZXQgWCBhbmQgWS5cbiAgY29uc3Qgc3BsaXRSZWdleCA9IC9cXHMqLFxccyp8XFxzKy87XG4gIGxldCBvcHMgPSBkaXZpZGVyICE9PSAtMVxuICAgID8gW1xuICAgICAgICBmcmFnbWVudHNcbiAgICAgICAgICAuc2xpY2UoMCwgZGl2aWRlcilcbiAgICAgICAgICAuY29uY2F0KFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMF1dKSxcbiAgICAgICAgW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVsxXV0uY29uY2F0KFxuICAgICAgICAgIGZyYWdtZW50cy5zbGljZShkaXZpZGVyICsgMSlcbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICA6IFtmcmFnbWVudHNdO1xuXG4gIC8vIENvbnZlcnQgdGhlIHZhbHVlcyB3aXRoIHVuaXRzIHRvIGFic29sdXRlIHBpeGVscyB0byBhbGxvdyBvdXIgY29tcHV0YXRpb25zXG4gIG9wcyA9IG9wcy5tYXAoKG9wLCBpbmRleCkgPT4ge1xuICAgIC8vIE1vc3Qgb2YgdGhlIHVuaXRzIHJlbHkgb24gdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwb3BwZXJcbiAgICBjb25zdCBtZWFzdXJlbWVudCA9IChpbmRleCA9PT0gMSA/ICF1c2VIZWlnaHQgOiB1c2VIZWlnaHQpXG4gICAgICA/ICdoZWlnaHQnXG4gICAgICA6ICd3aWR0aCc7XG4gICAgbGV0IG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgIG9wXG4gICAgICAgIC8vIFRoaXMgYWdncmVnYXRlcyBhbnkgYCtgIG9yIGAtYCBzaWduIHRoYXQgYXJlbid0IGNvbnNpZGVyZWQgb3BlcmF0b3JzXG4gICAgICAgIC8vIGUuZy46IDEwICsgKzUgPT4gWzEwLCArLCArNV1cbiAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmIChhW2EubGVuZ3RoIC0gMV0gPT09ICcnICYmIFsnKycsICctJ10uaW5kZXhPZihiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFbYS5sZW5ndGggLSAxXSA9IGI7XG4gICAgICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1lcmdlV2l0aFByZXZpb3VzKSB7XG4gICAgICAgICAgICBhW2EubGVuZ3RoIC0gMV0gKz0gYjtcbiAgICAgICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGEuY29uY2F0KGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pXG4gICAgICAgIC8vIEhlcmUgd2UgY29udmVydCB0aGUgc3RyaW5nIHZhbHVlcyBpbnRvIG51bWJlciB2YWx1ZXMgKGluIHB4KVxuICAgICAgICAubWFwKHN0ciA9PiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpKVxuICAgICk7XG4gIH0pO1xuXG4gIC8vIExvb3AgdHJvdWdoIHRoZSBvZmZzZXRzIGFycmF5cyBhbmQgZXhlY3V0ZSB0aGUgb3BlcmF0aW9uc1xuICBvcHMuZm9yRWFjaCgob3AsIGluZGV4KSA9PiB7XG4gICAgb3AuZm9yRWFjaCgoZnJhZywgaW5kZXgyKSA9PiB7XG4gICAgICBpZiAoaXNOdW1lcmljKGZyYWcpKSB7XG4gICAgICAgIG9mZnNldHNbaW5kZXhdICs9IGZyYWcgKiAob3BbaW5kZXgyIC0gMV0gPT09ICctJyA/IC0xIDogMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAYXJndW1lbnQge051bWJlcnxTdHJpbmd9IG9wdGlvbnMub2Zmc2V0PTBcbiAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvZmZzZXQoZGF0YSwgeyBvZmZzZXQgfSkge1xuICBjb25zdCB7IHBsYWNlbWVudCwgb2Zmc2V0czogeyBwb3BwZXIsIHJlZmVyZW5jZSB9IH0gPSBkYXRhO1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgbGV0IG9mZnNldHM7XG4gIGlmIChpc051bWVyaWMoK29mZnNldCkpIHtcbiAgICBvZmZzZXRzID0gWytvZmZzZXQsIDBdO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldHMgPSBwYXJzZU9mZnNldChvZmZzZXQsIHBvcHBlciwgcmVmZXJlbmNlLCBiYXNlUGxhY2VtZW50KTtcbiAgfVxuXG4gIGlmIChiYXNlUGxhY2VtZW50ID09PSAnbGVmdCcpIHtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLmxlZnQgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzFdO1xuICB9XG5cbiAgZGF0YS5wb3BwZXIgPSBwb3BwZXI7XG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuLi91dGlscy9nZXRPZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldEJvdW5kYXJpZXMgZnJvbSAnLi4vdXRpbHMvZ2V0Qm91bmRhcmllcyc7XG5pbXBvcnQgZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lIGZyb20gJy4uL3V0aWxzL2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhkYXRhLCBvcHRpb25zKSB7XG4gIGxldCBib3VuZGFyaWVzRWxlbWVudCA9XG4gICAgb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCB8fCBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuXG4gIC8vIElmIG9mZnNldFBhcmVudCBpcyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIHJlYWxseSB3YW50IHRvXG4gIC8vIGdvIG9uZSBzdGVwIHVwIGFuZCB1c2UgdGhlIG5leHQgb2Zmc2V0UGFyZW50IGFzIHJlZmVyZW5jZSB0b1xuICAvLyBhdm9pZCB0byBtYWtlIHRoaXMgbW9kaWZpZXIgY29tcGxldGVseSB1c2VsZXNzIGFuZCBsb29rIGxpa2UgYnJva2VuXG4gIGlmIChkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSA9PT0gYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgICBib3VuZGFyaWVzRWxlbWVudCA9IGdldE9mZnNldFBhcmVudChib3VuZGFyaWVzRWxlbWVudCk7XG4gIH1cblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzZXRzIHRoZSBwb3BwZXIncyBwb3NpdGlvbiBzbyB0aGF0IHRoZSBkb2N1bWVudCBzaXplIGNhbiBiZSBjYWxjdWxhdGVkIGV4Y2x1ZGluZ1xuICAvLyB0aGUgc2l6ZSBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgaXRzZWxmXG4gIGNvbnN0IHRyYW5zZm9ybVByb3AgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpO1xuICBjb25zdCBwb3BwZXJTdHlsZXMgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5zdHlsZTsgLy8gYXNzaWdubWVudCB0byBoZWxwIG1pbmlmaWNhdGlvblxuICBjb25zdCB7IHRvcCwgbGVmdCwgW3RyYW5zZm9ybVByb3BdOiB0cmFuc2Zvcm0gfSA9IHBvcHBlclN0eWxlcztcbiAgcG9wcGVyU3R5bGVzLnRvcCA9ICcnO1xuICBwb3BwZXJTdHlsZXMubGVmdCA9ICcnO1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSAnJztcblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnBvcHBlcixcbiAgICBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSxcbiAgICBvcHRpb25zLnBhZGRpbmcsXG4gICAgYm91bmRhcmllc0VsZW1lbnQsXG4gICAgZGF0YS5wb3NpdGlvbkZpeGVkXG4gICk7XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBzdHlsZSBwcm9wZXJ0aWVzIGFmdGVyIHRoZSBvZmZzZXRzIGhhdmUgYmVlbiBjb21wdXRlZFxuICBwb3BwZXJTdHlsZXMudG9wID0gdG9wO1xuICBwb3BwZXJTdHlsZXMubGVmdCA9IGxlZnQ7XG4gIHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybTtcblxuICBvcHRpb25zLmJvdW5kYXJpZXMgPSBib3VuZGFyaWVzO1xuXG4gIGNvbnN0IG9yZGVyID0gb3B0aW9ucy5wcmlvcml0eTtcbiAgbGV0IHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgY29uc3QgY2hlY2sgPSB7XG4gICAgcHJpbWFyeShwbGFjZW1lbnQpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHBvcHBlcltwbGFjZW1lbnRdO1xuICAgICAgaWYgKFxuICAgICAgICBwb3BwZXJbcGxhY2VtZW50XSA8IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxuICAgICAgICAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1heChwb3BwZXJbcGxhY2VtZW50XSwgYm91bmRhcmllc1twbGFjZW1lbnRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IFtwbGFjZW1lbnRdOiB2YWx1ZSB9O1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5KHBsYWNlbWVudCkge1xuICAgICAgY29uc3QgbWFpblNpZGUgPSBwbGFjZW1lbnQgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgIGxldCB2YWx1ZSA9IHBvcHBlclttYWluU2lkZV07XG4gICAgICBpZiAoXG4gICAgICAgIHBvcHBlcltwbGFjZW1lbnRdID4gYm91bmRhcmllc1twbGFjZW1lbnRdICYmXG4gICAgICAgICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2VcbiAgICAgICkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWluKFxuICAgICAgICAgIHBvcHBlclttYWluU2lkZV0sXG4gICAgICAgICAgYm91bmRhcmllc1twbGFjZW1lbnRdIC1cbiAgICAgICAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgPyBwb3BwZXIud2lkdGggOiBwb3BwZXIuaGVpZ2h0KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgW21haW5TaWRlXTogdmFsdWUgfTtcbiAgICB9LFxuICB9O1xuXG4gIG9yZGVyLmZvckVhY2gocGxhY2VtZW50ID0+IHtcbiAgICBjb25zdCBzaWRlID1cbiAgICAgIFsnbGVmdCcsICd0b3AnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSc7XG4gICAgcG9wcGVyID0geyAuLi5wb3BwZXIsIC4uLmNoZWNrW3NpZGVdKHBsYWNlbWVudCkgfTtcbiAgfSk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHBvcHBlcjtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaWZ0KGRhdGEpIHtcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3Qgc2hpZnR2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICAvLyBpZiBzaGlmdCBzaGlmdHZhcmlhdGlvbiBpcyBzcGVjaWZpZWQsIHJ1biB0aGUgbW9kaWZpZXJcbiAgaWYgKHNoaWZ0dmFyaWF0aW9uKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UsIHBvcHBlciB9ID0gZGF0YS5vZmZzZXRzO1xuICAgIGNvbnN0IGlzVmVydGljYWwgPSBbJ2JvdHRvbScsICd0b3AnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcbiAgICBjb25zdCBzaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICAgIGNvbnN0IHNoaWZ0T2Zmc2V0cyA9IHtcbiAgICAgIHN0YXJ0OiB7IFtzaWRlXTogcmVmZXJlbmNlW3NpZGVdIH0sXG4gICAgICBlbmQ6IHtcbiAgICAgICAgW3NpZGVdOiByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbWVhc3VyZW1lbnRdIC0gcG9wcGVyW21lYXN1cmVtZW50XSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSB7IC4uLnBvcHBlciwgLi4uc2hpZnRPZmZzZXRzW3NoaWZ0dmFyaWF0aW9uXSB9O1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgaXNNb2RpZmllclJlcXVpcmVkIGZyb20gJy4uL3V0aWxzL2lzTW9kaWZpZXJSZXF1aXJlZCc7XG5pbXBvcnQgZmluZCBmcm9tICcuLi91dGlscy9maW5kJztcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhpZGUoZGF0YSkge1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2hpZGUnLCAncHJldmVudE92ZXJmbG93JykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbnN0IHJlZlJlY3QgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuICBjb25zdCBib3VuZCA9IGZpbmQoXG4gICAgZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsXG4gICAgbW9kaWZpZXIgPT4gbW9kaWZpZXIubmFtZSA9PT0gJ3ByZXZlbnRPdmVyZmxvdydcbiAgKS5ib3VuZGFyaWVzO1xuXG4gIGlmIChcbiAgICByZWZSZWN0LmJvdHRvbSA8IGJvdW5kLnRvcCB8fFxuICAgIHJlZlJlY3QubGVmdCA+IGJvdW5kLnJpZ2h0IHx8XG4gICAgcmVmUmVjdC50b3AgPiBib3VuZC5ib3R0b20gfHxcbiAgICByZWZSZWN0LnJpZ2h0IDwgYm91bmQubGVmdFxuICApIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSB0cnVlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IGZhbHNlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldENsaWVudFJlY3QnO1xuaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gJy4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50JztcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5uZXIoZGF0YSkge1xuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBkYXRhLm9mZnNldHM7XG4gIGNvbnN0IGlzSG9yaXogPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICBjb25zdCBzdWJ0cmFjdExlbmd0aCA9IFsndG9wJywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID09PSAtMTtcblxuICBwb3BwZXJbaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnXSA9XG4gICAgcmVmZXJlbmNlW2Jhc2VQbGFjZW1lbnRdIC1cbiAgICAoc3VidHJhY3RMZW5ndGggPyBwb3BwZXJbaXNIb3JpeiA/ICd3aWR0aCcgOiAnaGVpZ2h0J10gOiAwKTtcblxuICBkYXRhLnBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KHBvcHBlcik7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgYXBwbHlTdHlsZSwgeyBhcHBseVN0eWxlT25Mb2FkIH0gZnJvbSAnLi9hcHBseVN0eWxlJztcbmltcG9ydCBjb21wdXRlU3R5bGUgZnJvbSAnLi9jb21wdXRlU3R5bGUnO1xuaW1wb3J0IGFycm93IGZyb20gJy4vYXJyb3cnO1xuaW1wb3J0IGZsaXAgZnJvbSAnLi9mbGlwJztcbmltcG9ydCBrZWVwVG9nZXRoZXIgZnJvbSAnLi9rZWVwVG9nZXRoZXInO1xuaW1wb3J0IG9mZnNldCBmcm9tICcuL29mZnNldCc7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gJy4vcHJldmVudE92ZXJmbG93JztcbmltcG9ydCBzaGlmdCBmcm9tICcuL3NoaWZ0JztcbmltcG9ydCBoaWRlIGZyb20gJy4vaGlkZSc7XG5pbXBvcnQgaW5uZXIgZnJvbSAnLi9pbm5lcic7XG5cbi8qKlxuICogTW9kaWZpZXIgZnVuY3Rpb24sIGVhY2ggbW9kaWZpZXIgY2FuIGhhdmUgYSBmdW5jdGlvbiBvZiB0aGlzIHR5cGUgYXNzaWduZWRcbiAqIHRvIGl0cyBgZm5gIHByb3BlcnR5LjxiciAvPlxuICogVGhlc2UgZnVuY3Rpb25zIHdpbGwgYmUgY2FsbGVkIG9uIGVhY2ggdXBkYXRlLCB0aGlzIG1lYW5zIHRoYXQgeW91IG11c3RcbiAqIG1ha2Ugc3VyZSB0aGV5IGFyZSBwZXJmb3JtYW50IGVub3VnaCB0byBhdm9pZCBwZXJmb3JtYW5jZSBib3R0bGVuZWNrcy5cbiAqXG4gKiBAZnVuY3Rpb24gTW9kaWZpZXJGblxuICogQGFyZ3VtZW50IHtkYXRhT2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cblxuLyoqXG4gKiBNb2RpZmllcnMgYXJlIHBsdWdpbnMgdXNlZCB0byBhbHRlciB0aGUgYmVoYXZpb3Igb2YgeW91ciBwb3BwZXJzLjxiciAvPlxuICogUG9wcGVyLmpzIHVzZXMgYSBzZXQgb2YgOSBtb2RpZmllcnMgdG8gcHJvdmlkZSBhbGwgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdGllc1xuICogbmVlZGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICpcbiAqIFVzdWFsbHkgeW91IGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGBvcmRlcmAsIGBmbmAgYW5kIGBvbkxvYWRgIHByb3BzLlxuICogQWxsIHRoZSBvdGhlciBwcm9wZXJ0aWVzIGFyZSBjb25maWd1cmF0aW9ucyB0aGF0IGNvdWxkIGJlIHR3ZWFrZWQuXG4gKiBAbmFtZXNwYWNlIG1vZGlmaWVyc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHNoaWZ0IHRoZSBwb3BwZXIgb24gdGhlIHN0YXJ0IG9yIGVuZCBvZiBpdHMgcmVmZXJlbmNlXG4gICAqIGVsZW1lbnQuPGJyIC8+XG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgdmFyaWF0aW9uIG9mIHRoZSBgcGxhY2VtZW50YCBwcm9wZXJ0eS48YnIgLz5cbiAgICogSXQgY2FuIGJlIG9uZSBlaXRoZXIgYC1lbmRgIG9yIGAtc3RhcnRgLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgc2hpZnQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAxMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBzaGlmdCxcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGBvZmZzZXRgIG1vZGlmaWVyIGNhbiBzaGlmdCB5b3VyIHBvcHBlciBvbiBib3RoIGl0cyBheGlzLlxuICAgKlxuICAgKiBJdCBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgdW5pdHM6XG4gICAqIC0gYHB4YCBvciB1bml0LWxlc3MsIGludGVycHJldGVkIGFzIHBpeGVsc1xuICAgKiAtIGAlYCBvciBgJXJgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAqIC0gYCVwYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiAtIGB2d2AsIENTUyB2aWV3cG9ydCB3aWR0aCB1bml0XG4gICAqIC0gYHZoYCwgQ1NTIHZpZXdwb3J0IGhlaWdodCB1bml0XG4gICAqXG4gICAqIEZvciBsZW5ndGggaXMgaW50ZW5kZWQgdGhlIG1haW4gYXhpcyByZWxhdGl2ZSB0byB0aGUgcGxhY2VtZW50IG9mIHRoZSBwb3BwZXIuPGJyIC8+XG4gICAqIFRoaXMgbWVhbnMgdGhhdCBpZiB0aGUgcGxhY2VtZW50IGlzIGB0b3BgIG9yIGBib3R0b21gLCB0aGUgbGVuZ3RoIHdpbGwgYmUgdGhlXG4gICAqIGB3aWR0aGAuIEluIGNhc2Ugb2YgYGxlZnRgIG9yIGByaWdodGAsIGl0IHdpbGwgYmUgdGhlIGBoZWlnaHRgLlxuICAgKlxuICAgKiBZb3UgY2FuIHByb3ZpZGUgYSBzaW5nbGUgdmFsdWUgKGFzIGBOdW1iZXJgIG9yIGBTdHJpbmdgKSwgb3IgYSBwYWlyIG9mIHZhbHVlc1xuICAgKiBhcyBgU3RyaW5nYCBkaXZpZGVkIGJ5IGEgY29tbWEgb3Igb25lIChvciBtb3JlKSB3aGl0ZSBzcGFjZXMuPGJyIC8+XG4gICAqIFRoZSBsYXR0ZXIgaXMgYSBkZXByZWNhdGVkIG1ldGhvZCBiZWNhdXNlIGl0IGxlYWRzIHRvIGNvbmZ1c2lvbiBhbmQgd2lsbCBiZVxuICAgKiByZW1vdmVkIGluIHYyLjxiciAvPlxuICAgKiBBZGRpdGlvbmFsbHksIGl0IGFjY2VwdHMgYWRkaXRpb25zIGFuZCBzdWJ0cmFjdGlvbnMgYmV0d2VlbiBkaWZmZXJlbnQgdW5pdHMuXG4gICAqIE5vdGUgdGhhdCBtdWx0aXBsaWNhdGlvbnMgYW5kIGRpdmlzaW9ucyBhcmVuJ3Qgc3VwcG9ydGVkLlxuICAgKlxuICAgKiBWYWxpZCBleGFtcGxlcyBhcmU6XG4gICAqIGBgYFxuICAgKiAxMFxuICAgKiAnMTAlJ1xuICAgKiAnMTAsIDEwJ1xuICAgKiAnMTAlLCAxMCdcbiAgICogJzEwICsgMTAlJ1xuICAgKiAnMTAgLSA1dmggKyAzJSdcbiAgICogJy0xMHB4ICsgNXZoLCA1cHggLSA2JSdcbiAgICogYGBgXG4gICAqID4gKipOQioqOiBJZiB5b3UgZGVzaXJlIHRvIGFwcGx5IG9mZnNldHMgdG8geW91ciBwb3BwZXJzIGluIGEgd2F5IHRoYXQgbWF5IG1ha2UgdGhlbSBvdmVybGFwXG4gICAqID4gd2l0aCB0aGVpciByZWZlcmVuY2UgZWxlbWVudCwgdW5mb3J0dW5hdGVseSwgeW91IHdpbGwgaGF2ZSB0byBkaXNhYmxlIHRoZSBgZmxpcGAgbW9kaWZpZXIuXG4gICAqID4gWW91IGNhbiByZWFkIG1vcmUgb24gdGhpcyBhdCB0aGlzIFtpc3N1ZV0oaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvaXNzdWVzLzM3MykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBvZmZzZXQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAyMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBvZmZzZXQsXG4gICAgLyoqIEBwcm9wIHtOdW1iZXJ8U3RyaW5nfSBvZmZzZXQ9MFxuICAgICAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIG9mZnNldDogMCxcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBwcmV2ZW50IHRoZSBwb3BwZXIgZnJvbSBiZWluZyBwb3NpdGlvbmVkIG91dHNpZGUgdGhlIGJvdW5kYXJ5LlxuICAgKlxuICAgKiBBIHNjZW5hcmlvIGV4aXN0cyB3aGVyZSB0aGUgcmVmZXJlbmNlIGl0c2VsZiBpcyBub3Qgd2l0aGluIHRoZSBib3VuZGFyaWVzLjxiciAvPlxuICAgKiBXZSBjYW4gc2F5IGl0IGhhcyBcImVzY2FwZWQgdGhlIGJvdW5kYXJpZXNcIiDigJQgb3IganVzdCBcImVzY2FwZWRcIi48YnIgLz5cbiAgICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHBlciBzaG91bGQgZWl0aGVyOlxuICAgKlxuICAgKiAtIGRldGFjaCBmcm9tIHRoZSByZWZlcmVuY2UgYW5kIHJlbWFpbiBcInRyYXBwZWRcIiBpbiB0aGUgYm91bmRhcmllcywgb3JcbiAgICogLSBpZiBpdCBzaG91bGQgaWdub3JlIHRoZSBib3VuZGFyeSBhbmQgXCJlc2NhcGUgd2l0aCBpdHMgcmVmZXJlbmNlXCJcbiAgICpcbiAgICogV2hlbiBgZXNjYXBlV2l0aFJlZmVyZW5jZWAgaXMgc2V0IHRvYHRydWVgIGFuZCByZWZlcmVuY2UgaXMgY29tcGxldGVseVxuICAgKiBvdXRzaWRlIGl0cyBib3VuZGFyaWVzLCB0aGUgcG9wcGVyIHdpbGwgb3ZlcmZsb3cgKG9yIGNvbXBsZXRlbHkgbGVhdmUpXG4gICAqIHRoZSBib3VuZGFyaWVzIGluIG9yZGVyIHRvIHJlbWFpbiBhdHRhY2hlZCB0byB0aGUgZWRnZSBvZiB0aGUgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTMwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogcHJldmVudE92ZXJmbG93LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtBcnJheX0gW3ByaW9yaXR5PVsnbGVmdCcsJ3JpZ2h0JywndG9wJywnYm90dG9tJ11dXG4gICAgICogUG9wcGVyIHdpbGwgdHJ5IHRvIHByZXZlbnQgb3ZlcmZsb3cgZm9sbG93aW5nIHRoZXNlIHByaW9yaXRpZXMgYnkgZGVmYXVsdCxcbiAgICAgKiB0aGVuLCBpdCBjb3VsZCBvdmVyZmxvdyBvbiB0aGUgbGVmdCBhbmQgb24gdG9wIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcHJpb3JpdHk6IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ10sXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogQW1vdW50IG9mIHBpeGVsIHVzZWQgdG8gZGVmaW5lIGEgbWluaW11bSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBib3VuZGFyaWVzXG4gICAgICogYW5kIHRoZSBwb3BwZXIuIFRoaXMgbWFrZXMgc3VyZSB0aGUgcG9wcGVyIGFsd2F5cyBoYXMgYSBsaXR0bGUgcGFkZGluZ1xuICAgICAqIGJldHdlZW4gdGhlIGVkZ2VzIG9mIGl0cyBjb250YWluZXJcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSdzY3JvbGxQYXJlbnQnXG4gICAgICogQm91bmRhcmllcyB1c2VkIGJ5IHRoZSBtb2RpZmllci4gQ2FuIGJlIGBzY3JvbGxQYXJlbnRgLCBgd2luZG93YCxcbiAgICAgKiBgdmlld3BvcnRgIG9yIGFueSBET00gZWxlbWVudC5cbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3Njcm9sbFBhcmVudCcsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSBzdXJlIHRoZSByZWZlcmVuY2UgYW5kIGl0cyBwb3BwZXIgc3RheSBuZWFyIGVhY2ggb3RoZXJcbiAgICogd2l0aG91dCBsZWF2aW5nIGFueSBnYXAgYmV0d2VlbiB0aGUgdHdvLiBFc3BlY2lhbGx5IHVzZWZ1bCB3aGVuIHRoZSBhcnJvdyBpc1xuICAgKiBlbmFibGVkIGFuZCB5b3Ugd2FudCB0byBlbnN1cmUgdGhhdCBpdCBwb2ludHMgdG8gaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBJdCBjYXJlcyBvbmx5IGFib3V0IHRoZSBmaXJzdCBheGlzLiBZb3UgY2FuIHN0aWxsIGhhdmUgcG9wcGVycyB3aXRoIG1hcmdpblxuICAgKiBiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGtlZXBUb2dldGhlcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj00MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDQwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGtlZXBUb2dldGhlcixcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBtb2RpZmllciBpcyB1c2VkIHRvIG1vdmUgdGhlIGBhcnJvd0VsZW1lbnRgIG9mIHRoZSBwb3BwZXIgdG8gbWFrZVxuICAgKiBzdXJlIGl0IGlzIHBvc2l0aW9uZWQgYmV0d2VlbiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgYW5kIGl0cyBwb3BwZXIgZWxlbWVudC5cbiAgICogSXQgd2lsbCByZWFkIHRoZSBvdXRlciBzaXplIG9mIHRoZSBgYXJyb3dFbGVtZW50YCBub2RlIHRvIGRldGVjdCBob3cgbWFueVxuICAgKiBwaXhlbHMgb2YgY29uanVuY3Rpb24gYXJlIG5lZWRlZC5cbiAgICpcbiAgICogSXQgaGFzIG5vIGVmZmVjdCBpZiBubyBgYXJyb3dFbGVtZW50YCBpcyBwcm92aWRlZC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFycm93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTUwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXJyb3csXG4gICAgLyoqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGVsZW1lbnQ9J1t4LWFycm93XScgLSBTZWxlY3RvciBvciBub2RlIHVzZWQgYXMgYXJyb3cgKi9cbiAgICBlbGVtZW50OiAnW3gtYXJyb3ddJyxcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBmbGlwIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQgd2hlbiBpdCBzdGFydHMgdG8gb3ZlcmxhcCBpdHNcbiAgICogcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICpcbiAgICogKipOT1RFOioqIHRoaXMgbW9kaWZpZXIgd2lsbCBpbnRlcnJ1cHQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlIGFuZCB3aWxsXG4gICAqIHJlc3RhcnQgaXQgaWYgaXQgZGV0ZWN0cyB0aGUgbmVlZCB0byBmbGlwIHRoZSBwbGFjZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBmbGlwOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTYwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogZmxpcCxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEFycmF5fSBiZWhhdmlvcj0nZmxpcCdcbiAgICAgKiBUaGUgYmVoYXZpb3IgdXNlZCB0byBjaGFuZ2UgdGhlIHBvcHBlcidzIHBsYWNlbWVudC4gSXQgY2FuIGJlIG9uZSBvZlxuICAgICAqIGBmbGlwYCwgYGNsb2Nrd2lzZWAsIGBjb3VudGVyY2xvY2t3aXNlYCBvciBhbiBhcnJheSB3aXRoIGEgbGlzdCBvZiB2YWxpZFxuICAgICAqIHBsYWNlbWVudHMgKHdpdGggb3B0aW9uYWwgdmFyaWF0aW9ucylcbiAgICAgKi9cbiAgICBiZWhhdmlvcjogJ2ZsaXAnLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBmbGlwIGlmIGl0IGhpdHMgdGhlIGVkZ2VzIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0ndmlld3BvcnQnXG4gICAgICogVGhlIGVsZW1lbnQgd2hpY2ggd2lsbCBkZWZpbmUgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIHBvcHBlciBwb3NpdGlvbi5cbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgbmV2ZXIgYmUgcGxhY2VkIG91dHNpZGUgb2YgdGhlIGRlZmluZWQgYm91bmRhcmllc1xuICAgICAqIChleGNlcHQgaWYgYGtlZXBUb2dldGhlcmAgaXMgZW5hYmxlZClcbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3ZpZXdwb3J0JyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZmxpcFZhcmlhdGlvbnM9ZmFsc2VcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgc3dpdGNoIHBsYWNlbWVudCB2YXJpYXRpb24gYmV0d2VlbiBgLXN0YXJ0YCBhbmQgYC1lbmRgIHdoZW5cbiAgICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgb3ZlcmxhcHMgaXRzIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zQnlDb250ZW50PWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHBvcHBlciBlbGVtZW50IG92ZXJsYXBzIGl0cyByZWZlcmVuY2UgYm91bmRhcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBvcmlnaW5hbCBwbGFjZW1lbnQgc2hvdWxkIGhhdmUgYSBzZXQgdmFyaWF0aW9uLlxuICAgICAqL1xuICAgIGZsaXBWYXJpYXRpb25zQnlDb250ZW50OiBmYWxzZSxcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHRoZSBwb3BwZXIgZmxvdyB0b3dhcmQgdGhlIGlubmVyIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQnkgZGVmYXVsdCwgd2hlbiB0aGlzIG1vZGlmaWVyIGlzIGRpc2FibGVkLCB0aGUgcG9wcGVyIHdpbGwgYmUgcGxhY2VkIG91dHNpZGVcbiAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaW5uZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA3MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPWZhbHNlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGlubmVyLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGhpZGUgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgZWxlbWVudCBpcyBvdXRzaWRlIG9mIHRoZVxuICAgKiBwb3BwZXIgYm91bmRhcmllcy4gSXQgd2lsbCBzZXQgYSBgeC1vdXQtb2YtYm91bmRhcmllc2AgYXR0cmlidXRlIHdoaWNoIGNhblxuICAgKiBiZSB1c2VkIHRvIGhpZGUgd2l0aCBhIENTUyBzZWxlY3RvciB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBpc1xuICAgKiBvdXQgb2YgYm91bmRhcmllcy5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaGlkZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDgwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGhpZGUsXG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBzdHlsZSB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGVsZW1lbnQgdG8gZ2V0c1xuICAgKiBwcm9wZXJseSBwb3NpdGlvbmVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyBtb2RpZmllciB3aWxsIG5vdCB0b3VjaCB0aGUgRE9NLCBpdCBqdXN0IHByZXBhcmVzIHRoZSBzdHlsZXNcbiAgICogc28gdGhhdCBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgY2FuIGFwcGx5IGl0LiBUaGlzIHNlcGFyYXRpb24gaXMgdXNlZnVsXG4gICAqIGluIGNhc2UgeW91IG5lZWQgdG8gcmVwbGFjZSBgYXBwbHlTdHlsZWAgd2l0aCBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogVGhpcyBtb2RpZmllciBoYXMgYDg1MGAgYXMgYG9yZGVyYCB2YWx1ZSB0byBtYWludGFpbiBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAqIHdpdGggcHJldmlvdXMgdmVyc2lvbnMgb2YgUG9wcGVyLmpzLiBFeHBlY3QgdGhlIG1vZGlmaWVycyBvcmRlcmluZyBtZXRob2RcbiAgICogdG8gY2hhbmdlIGluIGZ1dHVyZSBtYWpvciB2ZXJzaW9ucyBvZiB0aGUgbGlicmFyeS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGNvbXB1dGVTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04NTAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDg1MCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGNvbXB1dGVTdHlsZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHRydWUsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2JvdHRvbSddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBYIGF4aXMgKGBib3R0b21gIG9yIGB0b3BgKS4gQUtBIFggb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgYm90dG9tYFxuICAgICAqL1xuICAgIHg6ICdib3R0b20nLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdsZWZ0J11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFkgYXhpcyAoYGxlZnRgIG9yIGByaWdodGApLiBBS0EgWSBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGByaWdodGBcbiAgICAgKi9cbiAgICB5OiAncmlnaHQnLFxuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSBjb21wdXRlZCBzdHlsZXMgdG8gdGhlIHBvcHBlciBlbGVtZW50LlxuICAgKlxuICAgKiBBbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIGFyZSBsaW1pdGVkIHRvIHRoaXMgbW9kaWZpZXIuIFRoaXMgaXMgdXNlZnVsIGluIGNhc2VcbiAgICogeW91IHdhbnQgdG8gaW50ZWdyYXRlIFBvcHBlci5qcyBpbnNpZGUgYSBmcmFtZXdvcmsgb3IgdmlldyBsaWJyYXJ5IGFuZCB5b3VcbiAgICogd2FudCB0byBkZWxlZ2F0ZSBhbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIHRvIGl0LlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgeW91IGRpc2FibGUgdGhpcyBtb2RpZmllciwgeW91IG11c3QgbWFrZSBzdXJlIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiBoYXMgaXRzIHBvc2l0aW9uIHNldCB0byBgYWJzb2x1dGVgIGJlZm9yZSBQb3BwZXIuanMgY2FuIGRvIGl0cyB3b3JrIVxuICAgKlxuICAgKiBKdXN0IGRpc2FibGUgdGhpcyBtb2RpZmllciBhbmQgZGVmaW5lIHlvdXIgb3duIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgZWZmZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXBwbHlTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj05MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDkwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFwcGx5U3R5bGUsXG4gICAgLyoqIEBwcm9wIHtGdW5jdGlvbn0gKi9cbiAgICBvbkxvYWQ6IGFwcGx5U3R5bGVPbkxvYWQsXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjEwLjAsIHRoZSBwcm9wZXJ0eSBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllclxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzRCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdW5kZWZpbmVkLFxuICB9LFxufTtcblxuLyoqXG4gKiBUaGUgYGRhdGFPYmplY3RgIGlzIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW5mb3JtYXRpb24gdXNlZCBieSBQb3BwZXIuanMuXG4gKiBUaGlzIG9iamVjdCBpcyBwYXNzZWQgdG8gbW9kaWZpZXJzIGFuZCB0byB0aGUgYG9uQ3JlYXRlYCBhbmQgYG9uVXBkYXRlYCBjYWxsYmFja3MuXG4gKiBAbmFtZSBkYXRhT2JqZWN0XG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5pbnN0YW5jZSBUaGUgUG9wcGVyLmpzIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5wbGFjZW1lbnQgUGxhY2VtZW50IGFwcGxpZWQgdG8gcG9wcGVyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCBQbGFjZW1lbnQgb3JpZ2luYWxseSBkZWZpbmVkIG9uIGluaXRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5mbGlwcGVkIFRydWUgaWYgcG9wcGVyIGhhcyBiZWVuIGZsaXBwZWQgYnkgZmxpcCBtb2RpZmllclxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmhpZGUgVHJ1ZSBpZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0IG9mIGJvdW5kYXJpZXMsIHVzZWZ1bCB0byBrbm93IHdoZW4gdG8gaGlkZSB0aGUgcG9wcGVyXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBkYXRhLmFycm93RWxlbWVudCBOb2RlIHVzZWQgYXMgYXJyb3cgYnkgYXJyb3cgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLnN0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmFycm93U3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGFycm93LiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYm91bmRhcmllcyBPZmZzZXRzIG9mIHRoZSBwb3BwZXIgYm91bmRhcmllc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cyBUaGUgbWVhc3VyZW1lbnRzIG9mIHBvcHBlciwgcmVmZXJlbmNlIGFuZCBhcnJvdyBlbGVtZW50c1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5wb3BwZXIgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMuYXJyb3ddIGB0b3BgIGFuZCBgbGVmdGAgb2Zmc2V0cywgb25seSBvbmUgb2YgdGhlbSB3aWxsIGJlIGRpZmZlcmVudCBmcm9tIDBcbiAqL1xuIiwiaW1wb3J0IG1vZGlmaWVycyBmcm9tICcuLi9tb2RpZmllcnMvaW5kZXgnO1xuXG4vKipcbiAqIERlZmF1bHQgb3B0aW9ucyBwcm92aWRlZCB0byBQb3BwZXIuanMgY29uc3RydWN0b3IuPGJyIC8+XG4gKiBUaGVzZSBjYW4gYmUgb3ZlcnJpZGRlbiB1c2luZyB0aGUgYG9wdGlvbnNgIGFyZ3VtZW50IG9mIFBvcHBlci5qcy48YnIgLz5cbiAqIFRvIG92ZXJyaWRlIGFuIG9wdGlvbiwgc2ltcGx5IHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWVcbiAqIHN0cnVjdHVyZSBvZiB0aGUgYG9wdGlvbnNgIG9iamVjdCwgYXMgdGhlIDNyZCBhcmd1bWVudC4gRm9yIGV4YW1wbGU6XG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmLCBwb3AsIHtcbiAqICAgbW9kaWZpZXJzOiB7XG4gKiAgICAgcHJldmVudE92ZXJmbG93OiB7IGVuYWJsZWQ6IGZhbHNlIH1cbiAqICAgfVxuICogfSlcbiAqIGBgYFxuICogQHR5cGUge09iamVjdH1cbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogUG9wcGVyJ3MgcGxhY2VtZW50LlxuICAgKiBAcHJvcCB7UG9wcGVyLnBsYWNlbWVudHN9IHBsYWNlbWVudD0nYm90dG9tJ1xuICAgKi9cbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcblxuICAvKipcbiAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiB5b3Ugd2FudCBwb3BwZXIgdG8gcG9zaXRpb24gaXQgc2VsZiBpbiAnZml4ZWQnIG1vZGVcbiAgICogQHByb3Age0Jvb2xlYW59IHBvc2l0aW9uRml4ZWQ9ZmFsc2VcbiAgICovXG4gIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGV2ZW50cyAocmVzaXplLCBzY3JvbGwpIGFyZSBpbml0aWFsbHkgZW5hYmxlZC5cbiAgICogQHByb3Age0Jvb2xlYW59IGV2ZW50c0VuYWJsZWQ9dHJ1ZVxuICAgKi9cbiAgZXZlbnRzRW5hYmxlZDogdHJ1ZSxcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gYXV0b21hdGljYWxseSByZW1vdmUgdGhlIHBvcHBlciB3aGVuXG4gICAqIHlvdSBjYWxsIHRoZSBgZGVzdHJveWAgbWV0aG9kLlxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcmVtb3ZlT25EZXN0cm95PWZhbHNlXG4gICAqL1xuICByZW1vdmVPbkRlc3Ryb3k6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIGNyZWF0ZWQuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uQ3JlYXRlfVxuICAgKi9cbiAgb25DcmVhdGU6ICgpID0+IHt9LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIHVwZGF0ZWQuIFRoaXMgY2FsbGJhY2sgaXMgbm90IGNhbGxlZFxuICAgKiBvbiB0aGUgaW5pdGlhbGl6YXRpb24vY3JlYXRpb24gb2YgdGhlIHBvcHBlciwgYnV0IG9ubHkgb24gc3Vic2VxdWVudFxuICAgKiB1cGRhdGVzLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvblVwZGF0ZX1cbiAgICovXG4gIG9uVXBkYXRlOiAoKSA9PiB7fSxcblxuICAvKipcbiAgICogTGlzdCBvZiBtb2RpZmllcnMgdXNlZCB0byBtb2RpZnkgdGhlIG9mZnNldHMgYmVmb3JlIHRoZXkgYXJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci5cbiAgICogVGhleSBwcm92aWRlIG1vc3Qgb2YgdGhlIGZ1bmN0aW9uYWxpdGllcyBvZiBQb3BwZXIuanMuXG4gICAqIEBwcm9wIHttb2RpZmllcnN9XG4gICAqL1xuICBtb2RpZmllcnMsXG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBvbkNyZWF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgb25VcGRhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG4iLCIvLyBVdGlsc1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi91dGlscy9pc0Z1bmN0aW9uJztcblxuLy8gTWV0aG9kc1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuL21ldGhvZHMvdXBkYXRlJztcbmltcG9ydCBkZXN0cm95IGZyb20gJy4vbWV0aG9kcy9kZXN0cm95JztcbmltcG9ydCBlbmFibGVFdmVudExpc3RlbmVycyBmcm9tICcuL21ldGhvZHMvZW5hYmxlRXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IGRpc2FibGVFdmVudExpc3RlbmVycyBmcm9tICcuL21ldGhvZHMvZGlzYWJsZUV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCBEZWZhdWx0cyBmcm9tICcuL21ldGhvZHMvZGVmYXVsdHMnO1xuaW1wb3J0IHBsYWNlbWVudHMgZnJvbSAnLi9tZXRob2RzL3BsYWNlbWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BwZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBQb3BwZXIuanMgaW5zdGFuY2UuXG4gICAqIEBjbGFzcyBQb3BwZXJcbiAgICogQHBhcmFtIHtFbGVtZW50fHJlZmVyZW5jZU9iamVjdH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIC8gWE1MIGVsZW1lbnQgdXNlZCBhcyB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gWW91ciBjdXN0b20gb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgb25lcyBkZWZpbmVkIGluIFtEZWZhdWx0c10oI2RlZmF1bHRzKVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGluc3RhbmNlIC0gVGhlIGdlbmVyYXRlZCBQb3BwZXIuanMgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAvLyBtYWtlIHVwZGF0ZSgpIGRlYm91bmNlZCwgc28gdGhhdCBpdCBvbmx5IHJ1bnMgYXQgbW9zdCBvbmNlLXBlci10aWNrXG4gICAgdGhpcy51cGRhdGUgPSBkZWJvdW5jZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIHdpdGgge30gd2UgY3JlYXRlIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBvcHRpb25zIGluc2lkZSBpdFxuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uUG9wcGVyLkRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG5cbiAgICAvLyBpbml0IHN0YXRlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRGVzdHJveWVkOiBmYWxzZSxcbiAgICAgIGlzQ3JlYXRlZDogZmFsc2UsXG4gICAgICBzY3JvbGxQYXJlbnRzOiBbXSxcbiAgICB9O1xuXG4gICAgLy8gZ2V0IHJlZmVyZW5jZSBhbmQgcG9wcGVyIGVsZW1lbnRzIChhbGxvdyBqUXVlcnkgd3JhcHBlcnMpXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLmpxdWVyeSA/IHJlZmVyZW5jZVswXSA6IHJlZmVyZW5jZTtcbiAgICB0aGlzLnBvcHBlciA9IHBvcHBlciAmJiBwb3BwZXIuanF1ZXJ5ID8gcG9wcGVyWzBdIDogcG9wcGVyO1xuXG4gICAgLy8gRGVlcCBtZXJnZSBtb2RpZmllcnMgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh7XG4gICAgICAuLi5Qb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzLFxuICAgICAgLi4ub3B0aW9ucy5tb2RpZmllcnMsXG4gICAgfSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gPSB7XG4gICAgICAgIC8vIElmIGl0J3MgYSBidWlsdC1pbiBtb2RpZmllciwgdXNlIGl0IGFzIGJhc2VcbiAgICAgICAgLi4uKFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnNbbmFtZV0gfHwge30pLFxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgY3VzdG9tIG9wdGlvbnMsIG92ZXJyaWRlIGFuZCBtZXJnZSB3aXRoIGRlZmF1bHQgb25lc1xuICAgICAgICAuLi4ob3B0aW9ucy5tb2RpZmllcnMgPyBvcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA6IHt9KSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBSZWZhY3RvcmluZyBtb2RpZmllcnMnIGxpc3QgKE9iamVjdCA9PiBBcnJheSlcbiAgICB0aGlzLm1vZGlmaWVycyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tb2RpZmllcnMpXG4gICAgICAubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLm1vZGlmaWVyc1tuYW1lXSxcbiAgICAgIH0pKVxuICAgICAgLy8gc29ydCB0aGUgbW9kaWZpZXJzIGJ5IG9yZGVyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xuXG4gICAgLy8gbW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSB3aGVuIFBvcHBlci5qcyBnZXQgaW5pdGVkXG4gICAgLy8gc3VjaCBjb2RlIGlzIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIG9mIGl0cyBtb2RpZmllclxuICAgIC8vIHRoZXkgY291bGQgYWRkIG5ldyBwcm9wZXJ0aWVzIHRvIHRoZWlyIG9wdGlvbnMgY29uZmlndXJhdGlvblxuICAgIC8vIEJFIEFXQVJFOiBkb24ndCBhZGQgb3B0aW9ucyB0byBgb3B0aW9ucy5tb2RpZmllcnMubmFtZWAgYnV0IHRvIGBtb2RpZmllck9wdGlvbnNgIVxuICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2gobW9kaWZpZXJPcHRpb25zID0+IHtcbiAgICAgIGlmIChtb2RpZmllck9wdGlvbnMuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQpKSB7XG4gICAgICAgIG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQoXG4gICAgICAgICAgdGhpcy5yZWZlcmVuY2UsXG4gICAgICAgICAgdGhpcy5wb3BwZXIsXG4gICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgIG1vZGlmaWVyT3B0aW9ucyxcbiAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBmaXJlIHRoZSBmaXJzdCB1cGRhdGUgdG8gcG9zaXRpb24gdGhlIHBvcHBlciBpbiB0aGUgcmlnaHQgcGxhY2VcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgY29uc3QgZXZlbnRzRW5hYmxlZCA9IHRoaXMub3B0aW9ucy5ldmVudHNFbmFibGVkO1xuICAgIGlmIChldmVudHNFbmFibGVkKSB7XG4gICAgICAvLyBzZXR1cCBldmVudCBsaXN0ZW5lcnMsIHRoZXkgd2lsbCB0YWtlIGNhcmUgb2YgdXBkYXRlIHRoZSBwb3NpdGlvbiBpbiBzcGVjaWZpYyBzaXR1YXRpb25zXG4gICAgICB0aGlzLmVuYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkID0gZXZlbnRzRW5hYmxlZDtcbiAgfVxuXG4gIC8vIFdlIGNhbid0IHVzZSBjbGFzcyBwcm9wZXJ0aWVzIGJlY2F1c2UgdGhleSBkb24ndCBnZXQgbGlzdGVkIGluIHRoZVxuICAvLyBjbGFzcyBwcm90b3R5cGUgYW5kIGJyZWFrIHN0dWZmIGxpa2UgU2lub24gc3R1YnNcbiAgdXBkYXRlKCkge1xuICAgIHJldHVybiB1cGRhdGUuY2FsbCh0aGlzKTtcbiAgfVxuICBkZXN0cm95KCkge1xuICAgIHJldHVybiBkZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbiAgZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIGVuYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gIH1cbiAgZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHJldHVybiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2hlZHVsZXMgYW4gdXBkYXRlLiBJdCB3aWxsIHJ1biBvbiB0aGUgbmV4dCBVSSB1cGRhdGUgYXZhaWxhYmxlLlxuICAgKiBAbWV0aG9kIHNjaGVkdWxlVXBkYXRlXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG4gIHNjaGVkdWxlVXBkYXRlID0gKCkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiB1dGlsaXRpZXMgdXNlZnVsIHdoZW4gd3JpdGluZyBjdXN0b20gbW9kaWZpZXJzLlxuICAgKiBTdGFydGluZyBmcm9tIHZlcnNpb24gMS43LCB0aGlzIG1ldGhvZCBpcyBhdmFpbGFibGUgb25seSBpZiB5b3VcbiAgICogaW5jbHVkZSBgcG9wcGVyLXV0aWxzLmpzYCBiZWZvcmUgYHBvcHBlci5qc2AuXG4gICAqXG4gICAqICoqREVQUkVDQVRJT04qKjogVGhpcyB3YXkgdG8gYWNjZXNzIFBvcHBlclV0aWxzIGlzIGRlcHJlY2F0ZWRcbiAgICogYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MiEgVXNlIHRoZSBQb3BwZXJVdGlscyBtb2R1bGUgZGlyZWN0bHkgaW5zdGVhZC5cbiAgICogRHVlIHRvIHRoZSBoaWdoIGluc3RhYmlsaXR5IG9mIHRoZSBtZXRob2RzIGNvbnRhaW5lZCBpbiBVdGlscywgd2UgY2FuJ3RcbiAgICogZ3VhcmFudGVlIHRoZW0gdG8gZm9sbG93IHNlbXZlci4gVXNlIHRoZW0gYXQgeW91ciBvd24gcmlzayFcbiAgICogQHN0YXRpY1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuOFxuICAgKiBAbWVtYmVyIFV0aWxzXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG4gIHN0YXRpYyBVdGlscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCkuUG9wcGVyVXRpbHM7XG5cbiAgc3RhdGljIHBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuXG4gIHN0YXRpYyBEZWZhdWx0cyA9IERlZmF1bHRzO1xufVxuXG4vKipcbiAqIFRoZSBgcmVmZXJlbmNlT2JqZWN0YCBpcyBhbiBvYmplY3QgdGhhdCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgY29tcGF0aWJsZSB3aXRoIFBvcHBlci5qc1xuICogYW5kIGxldHMgeW91IHVzZSBpdCBhcyByZXBsYWNlbWVudCBvZiBhIHJlYWwgRE9NIG5vZGUuPGJyIC8+XG4gKiBZb3UgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBwb3NpdGlvbiBhIHBvcHBlciByZWxhdGl2ZWx5IHRvIGEgc2V0IG9mIGNvb3JkaW5hdGVzXG4gKiBpbiBjYXNlIHlvdSBkb24ndCBoYXZlIGEgRE9NIG5vZGUgdG8gdXNlIGFzIHJlZmVyZW5jZS5cbiAqXG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmZXJlbmNlT2JqZWN0LCBwb3BwZXJOb2RlKTtcbiAqIGBgYFxuICpcbiAqIE5COiBUaGlzIGZlYXR1cmUgaXNuJ3Qgc3VwcG9ydGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuICogQG5hbWUgcmVmZXJlbmNlT2JqZWN0XG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBkYXRhLmdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzZXQgb2YgY29vcmRpbmF0ZXMgY29tcGF0aWJsZSB3aXRoIHRoZSBuYXRpdmUgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAgbWV0aG9kLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50V2lkdGhcbiAqIEFuIEVTNiBnZXR0ZXIgdGhhdCB3aWxsIHJldHVybiB0aGUgd2lkdGggb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRIZWlnaHRcbiAqIEFuIEVTNiBnZXR0ZXIgdGhhdCB3aWxsIHJldHVybiB0aGUgaGVpZ2h0IG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICovXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdib290c3RyYXAnOyAvLyBqJ2ltcG9ydGUgYm9vdHN0cmFwLmpzIGRlcHVpcyBub2RlX21vZHVsZXNcbi8vIGltcG9ydCBvd2xDYXJvdXNlbCBmcm9tICdvd2wuY2Fyb3VzZWwnOyAvKiBzaSBpbCB5IGEgdW4gY2Fyb3VzZWwgKi9cblxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICBcblxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==