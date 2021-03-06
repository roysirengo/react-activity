'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _activityIndicator = require('../activityIndicator');

var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dots = _react2.default.createClass({
  displayName: 'Dots',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { style: this.props.style, className: 'rai-dots' },
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

exports.default = (0, _activityIndicator2.default)(Dots, 0.8);