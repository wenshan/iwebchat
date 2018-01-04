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

var Btn = function (_wepy$component) {
  _inherits(Btn, _wepy$component);

  function Btn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Btn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Btn.__proto__ || Object.getPrototypeOf(Btn)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: {
        default: ''
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
      nativeType: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      },
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
        if (this.handleClick) {
          this.handleClick(id);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Btn, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Btn;
}(_wepy2.default.component);

exports.default = Btn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkJ0biIsInByb3BzIiwiY29tcG9uZW50SWQiLCJkZWZhdWx0IiwiY2xhc3NOYW1lIiwidHlwZSIsIlN0cmluZyIsInNpemUiLCJuYXRpdmVUeXBlIiwibG9hZGluZyIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImhhbmRsZUNsaWNrIiwiRnVuY3Rpb24iLCJ2IiwiZXZlbnRzIiwibWV0aG9kcyIsImhhbmRsZXRhcCIsImlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLEssR0FBTTtBQUNKQyxtQkFBWTtBQUNWQyxpQkFBUTtBQURFLE9BRFI7QUFJSkMsaUJBQVc7QUFDVEMsY0FBTUMsTUFERztBQUVUSCxpQkFBUztBQUZBLE9BSlA7QUFRSkUsWUFBTTtBQUNKQSxjQUFNQyxNQURGO0FBRUpILGlCQUFTO0FBRkwsT0FSRjtBQVlKSSxZQUFNRCxNQVpGO0FBYUpFLGtCQUFZO0FBQ1ZILGNBQU1DLE1BREk7QUFFVkgsaUJBQVM7QUFGQyxPQWJSO0FBaUJKTSxlQUFRO0FBQ05KLGNBQUtLLE9BREM7QUFFTlAsaUJBQVE7QUFGRixPQWpCSjtBQXFCSlEsZ0JBQVM7QUFDUE4sY0FBS0ssT0FERTtBQUVQUCxpQkFBUTtBQUZELE9BckJMO0FBeUJKUyxtQkFBWTtBQUNWUCxjQUFLUSxRQURLO0FBRVZWLGlCQUFRLGtCQUFTVyxDQUFULEVBQVc7QUFBQyxpQkFBT0EsQ0FBUDtBQUFTO0FBRm5CO0FBekJSLEssUUE4Qk5DLE0sR0FBUyxFLFFBRVRDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxFQURGLEVBQ0s7QUFDWCxZQUFHLEtBQUtOLFdBQVIsRUFBb0I7QUFDbEIsZUFBS0EsV0FBTCxDQUFpQk0sRUFBakI7QUFDRDtBQUNGO0FBTE8sSzs7Ozs7NkJBUUQsQ0FDUjs7OztFQTFDOEIsZUFBS0MsUzs7a0JBQWpCbkIsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ0biBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgIHByb3BzPXtcbiAgICAgICAgY29tcG9uZW50SWQ6e1xuICAgICAgICAgIGRlZmF1bHQ6JydcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiBTdHJpbmcsXG4gICAgICAgIG5hdGl2ZVR5cGU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZzp7XG4gICAgICAgICAgdHlwZTpCb29sZWFuLFxuICAgICAgICAgIGRlZmF1bHQ6ZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6e1xuICAgICAgICAgIHR5cGU6Qm9vbGVhbixcbiAgICAgICAgICBkZWZhdWx0OmZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrOntcbiAgICAgICAgICB0eXBlOkZ1bmN0aW9uLFxuICAgICAgICAgIGRlZmF1bHQ6ZnVuY3Rpb24odil7cmV0dXJuIHZ9XG4gICAgICAgIH1cbiAgICB9XG4gICAgICBldmVudHMgPSB7XG4gICAgICB9XG4gICAgICBtZXRob2RzID0ge1xuICAgICAgICBoYW5kbGV0YXAoaWQpe1xuICAgICAgICAgIGlmKHRoaXMuaGFuZGxlQ2xpY2spe1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbGljayhpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uTG9hZCgpIHtcbiAgICAgIH1cbiAgfVxuIl19