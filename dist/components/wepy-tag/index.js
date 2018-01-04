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

var Tag = function (_wepy$component) {
  _inherits(Tag, _wepy$component);

  function Tag() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tag.__proto__ || Object.getPrototypeOf(Tag)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: {
        default: null
      },
      className: {
        type: String,
        default: 'default'
      },
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      disabled: {
        type: Boolean,
        default: false
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

  _createClass(Tag, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Tag;
}(_wepy2.default.component);

exports.default = Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRhZyIsInByb3BzIiwiY29tcG9uZW50SWQiLCJkZWZhdWx0IiwiY2xhc3NOYW1lIiwidHlwZSIsIlN0cmluZyIsInNpemUiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJoYW5kbGVDbGljayIsIkZ1bmN0aW9uIiwidiIsImV2ZW50cyIsIm1ldGhvZHMiLCJoYW5kbGV0YXAiLCJpZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUNxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxLLEdBQU07QUFDSkMsbUJBQVk7QUFDVkMsaUJBQVE7QUFERSxPQURSO0FBSUpDLGlCQUFXO0FBQ1RDLGNBQU1DLE1BREc7QUFFVEgsaUJBQVM7QUFGQSxPQUpQO0FBUU5FLFlBQU07QUFDSkEsY0FBTUMsTUFERjtBQUVKSCxpQkFBUztBQUZMLE9BUkE7QUFZTkksWUFBTUQsTUFaQTtBQWFORSxnQkFBUztBQUNQSCxjQUFLSSxPQURFO0FBRVBOLGlCQUFRO0FBRkQsT0FiSDtBQWlCTk8sbUJBQVk7QUFDVkwsY0FBS00sUUFESztBQUVWUixpQkFBUSxrQkFBU1MsQ0FBVCxFQUFXO0FBQUMsaUJBQU9BLENBQVA7QUFBUztBQUZuQjtBQWpCTixLLFFBc0JOQyxNLEdBQVMsRSxRQUVUQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsRUFERixFQUNLO0FBQ1gsYUFBS04sV0FBTCxDQUFpQk0sRUFBakI7QUFDRDtBQUhPLEs7Ozs7OzZCQU1ELENBQ1I7Ozs7RUFoQzhCLGVBQUtDLFM7O2tCQUFqQmpCLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWcgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICBwcm9wcz17XG4gICAgICAgIGNvbXBvbmVudElkOntcbiAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgICAgICB9LFxuICAgICAgdHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgICAgfSxcbiAgICAgIHNpemU6IFN0cmluZyxcbiAgICAgIGRpc2FibGVkOntcbiAgICAgICAgdHlwZTpCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OmZhbHNlXG4gICAgICB9LFxuICAgICAgaGFuZGxlQ2xpY2s6e1xuICAgICAgICB0eXBlOkZ1bmN0aW9uLFxuICAgICAgICBkZWZhdWx0OmZ1bmN0aW9uKHYpe3JldHVybiB2fVxuICAgICAgfVxuICAgIH1cbiAgICAgIGV2ZW50cyA9IHtcbiAgICAgIH1cbiAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGhhbmRsZXRhcChpZCl7XG4gICAgICAgICAgdGhpcy5oYW5kbGVDbGljayhpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Mb2FkKCkge1xuICAgICAgfVxuICAgIH1cbiJdfQ==