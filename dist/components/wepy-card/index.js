'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_wepy$component) {
  _inherits(Card, _wepy$component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: {
        default: ''
      },
      className: {
        type: String,
        default: 'default'
      },
      src: {
        type: String,
        default: 'default'
      },
      leftText: {
        type: [String, Number],
        default: ''
      },
      rightText: {
        type: [String, Number],
        default: ''
      },
      handleClick: {
        type: Function,
        default: function _default(v) {
          return v;
        }
      }
    }, _this.events = {}, _this.methods = {
      handletap: function handletap(id) {
        this.handleClick(id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Card, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Card;
}(_wepy2.default.component);

exports.default = Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImNvbXBvbmVudElkIiwiZGVmYXVsdCIsImNsYXNzTmFtZSIsInR5cGUiLCJTdHJpbmciLCJzcmMiLCJsZWZ0VGV4dCIsIk51bWJlciIsInJpZ2h0VGV4dCIsImhhbmRsZUNsaWNrIiwiRnVuY3Rpb24iLCJ2IiwiZXZlbnRzIiwibWV0aG9kcyIsImhhbmRsZXRhcCIsImlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBTTtBQUNKQyxtQkFBWTtBQUNWQyxpQkFBUTtBQURFLE9BRFI7QUFJSkMsaUJBQVc7QUFDVEMsY0FBTUMsTUFERztBQUVUSCxpQkFBUztBQUZBLE9BSlA7QUFRSkksV0FBSztBQUNIRixjQUFNQyxNQURIO0FBRUhILGlCQUFTO0FBRk4sT0FSRDtBQVlKSyxnQkFBUztBQUNQSCxjQUFLLENBQUNDLE1BQUQsRUFBUUcsTUFBUixDQURFO0FBRVBOLGlCQUFRO0FBRkQsT0FaTDtBQWdCSk8saUJBQVU7QUFDUkwsY0FBSyxDQUFDQyxNQUFELEVBQVFHLE1BQVIsQ0FERztBQUVSTixpQkFBUTtBQUZBLE9BaEJOO0FBb0JKUSxtQkFBWTtBQUNWTixjQUFLTyxRQURLO0FBRVZULGlCQUFRLGtCQUFTVSxDQUFULEVBQVc7QUFBQyxpQkFBT0EsQ0FBUDtBQUFTO0FBRm5CO0FBcEJSLEssUUF5Qk5DLE0sR0FBUyxFLFFBRVRDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxFQURGLEVBQ0s7QUFDWCxhQUFLTixXQUFMLENBQWlCTSxFQUFqQjtBQUNEO0FBSE8sSzs7Ozs7NkJBTUQsQ0FDUjs7OztFQW5DK0IsZUFBS0MsUzs7a0JBQWxCbEIsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICBwcm9wcz17XG4gICAgICAgIGNvbXBvbmVudElkOntcbiAgICAgICAgICBkZWZhdWx0OicnXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICAgICAgfSxcbiAgICAgICAgc3JjOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgICAgICB9LFxuICAgICAgICBsZWZ0VGV4dDp7XG4gICAgICAgICAgdHlwZTpbU3RyaW5nLE51bWJlcl0sXG4gICAgICAgICAgZGVmYXVsdDonJ1xuICAgICAgICB9LFxuICAgICAgICByaWdodFRleHQ6e1xuICAgICAgICAgIHR5cGU6W1N0cmluZyxOdW1iZXJdLFxuICAgICAgICAgIGRlZmF1bHQ6JydcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQ2xpY2s6e1xuICAgICAgICAgIHR5cGU6RnVuY3Rpb24sXG4gICAgICAgICAgZGVmYXVsdDpmdW5jdGlvbih2KXtyZXR1cm4gdn1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXZlbnRzID0ge1xuICAgICAgfVxuICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgaGFuZGxldGFwKGlkKXtcbiAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbkxvYWQoKSB7XG4gICAgICB9XG4gICAgfVxuIl19