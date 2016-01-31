(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactActivity"] = factory(require("react"));
	else
		root["ReactActivity"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Spinner = exports.Sentry = exports.Levels = exports.Dots = undefined;

	var _Dots = __webpack_require__(1);

	var _Dots2 = _interopRequireDefault(_Dots);

	var _Levels = __webpack_require__(4);

	var _Levels2 = _interopRequireDefault(_Levels);

	var _Sentry = __webpack_require__(5);

	var _Sentry2 = _interopRequireDefault(_Sentry);

	var _Spinner = __webpack_require__(6);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Dots = _Dots2.default;
	exports.Levels = _Levels2.default;
	exports.Sentry = _Sentry2.default;
	exports.Spinner = _Spinner2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _activityIndicator = __webpack_require__(3);

	var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dots = _react2.default.createClass({
	  displayName: 'Dots',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      _extends({ className: 'rai-dots' }, this.props),
	      _react2.default.createElement('div', {
	        className: 'rai-circle',
	        style: this.props.getFillStyle(0.3)
	      }),
	      _react2.default.createElement('div', {
	        className: 'rai-circle',
	        style: this.props.getFillStyle(0.2)
	      }),
	      _react2.default.createElement('div', {
	        className: 'rai-circle',
	        style: this.props.getFillStyle(0.1)
	      })
	    );
	  }
	});

	exports.default = (0, _activityIndicator2.default)(Dots, 0.8, 40);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (ComposedComponent, defaultAnimationDuration) {
	  return _react2.default.createClass({
	    displayName: ComposedComponent.displayName,
	    propTypes: {
	      animationDuration: _react.PropTypes.number.isRequired,
	      speed: _react.PropTypes.number
	    },
	    getDefaultProps: function getDefaultProps() {
	      return {
	        animationDuration: defaultAnimationDuration,
	        speed: 1
	      };
	    },
	    getDelayStyle: function getDelayStyle(delay) {
	      var style = {};
	      if (delay) {
	        style.animationDelay = '-' + delay * (1 / this.props.speed) + 's';
	      }
	      return style;
	    },
	    getFillStyle: function getFillStyle(delay) {
	      var style = this.getDelayStyle(delay);
	      if (this.props.color) {
	        style.backgroundColor = this.props.color;
	      }
	      return style;
	    },
	    getBorderStyle: function getBorderStyle(delay) {
	      var style = this.getDelayStyle(delay);
	      if (this.props.color) {
	        style.borderColor = this.props.color;
	      }
	      return style;
	    },
	    render: function render() {
	      var style = {
	        animationDuration: this.props.animationDuration
	      };
	      if (this.props.size) {
	        style.fontSize = this.props.size;
	      }
	      style.animationDuration = style.animationDuration * (1 / this.props.speed) + 's';
	      return _react2.default.createElement(ComposedComponent, _extends({}, this.props, {
	        getFillStyle: this.getFillStyle,
	        getBorderStyle: this.getBorderStyle,
	        style: style
	      }));
	    }
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _activityIndicator = __webpack_require__(3);

	var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Levels = _react2.default.createClass({
	  displayName: 'Levels',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      _extends({ className: 'rai-levels' }, this.props),
	      _react2.default.createElement(
	        'div',
	        { className: 'rai-levels-container' },
	        _react2.default.createElement('div', { className: 'rai-bar', style: this.props.getFillStyle() }),
	        _react2.default.createElement('div', { className: 'rai-bar', style: this.props.getFillStyle(0.25) }),
	        _react2.default.createElement('div', { className: 'rai-bar', style: this.props.getFillStyle(0.4) })
	      )
	    );
	  }
	});

	exports.default = (0, _activityIndicator2.default)(Levels, 1.5);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _activityIndicator = __webpack_require__(3);

	var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Sentry = _react2.default.createClass({
	  displayName: 'Sentry',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      _extends({ className: 'rai-sentry' }, this.props),
	      _react2.default.createElement(
	        'div',
	        { className: 'rai-wave-container' },
	        _react2.default.createElement('div', { className: 'rai-wave', style: this.props.getBorderStyle(0) })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'rai-wave-container' },
	        _react2.default.createElement('div', { className: 'rai-wave', style: this.props.getBorderStyle(0.4) })
	      )
	    );
	  }
	});

	exports.default = (0, _activityIndicator2.default)(Sentry, 0.8);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _activityIndicator = __webpack_require__(3);

	var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Spinner = _react2.default.createClass({
	  displayName: 'Spinner',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      _extends({ className: 'rai-spinner' }, this.props),
	      _react2.default.createElement('div', { className: 'rai-spinner-outer', style: this.props.getBorderStyle() }),
	      _react2.default.createElement('div', { className: 'rai-spinner-inner', style: this.props.getBorderStyle() })
	    );
	  }
	});

	exports.default = (0, _activityIndicator2.default)(Spinner, 0.6);

/***/ }
/******/ ])
});
;