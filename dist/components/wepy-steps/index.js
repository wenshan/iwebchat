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

var Steps = function (_wepy$component) {
  _inherits(Steps, _wepy$component);

  function Steps() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Steps);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Steps.__proto__ || Object.getPrototypeOf(Steps)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: {
        defailt: ''
      },
      className: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'horizon'
      },
      hasDesc: {
        type: Boolean,
        default: false
      },
      steps: {
        type: Array,
        default: []
      }
    }, _this.events = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Steps, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Steps;
}(_wepy2.default.component);

exports.default = Steps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0ZXBzIiwicHJvcHMiLCJjb21wb25lbnRJZCIsImRlZmFpbHQiLCJjbGFzc05hbWUiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImhhc0Rlc2MiLCJCb29sZWFuIiwic3RlcHMiLCJBcnJheSIsImV2ZW50cyIsIm1ldGhvZHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFNO0FBQ0pDLG1CQUFZO0FBQ1ZDLGlCQUFRO0FBREUsT0FEUjtBQUlKQyxpQkFBVTtBQUNSQyxjQUFLQyxNQURHO0FBRVJDLGlCQUFRO0FBRkEsT0FKTjtBQVFKRixZQUFLO0FBQ0hBLGNBQUtDLE1BREY7QUFFSEMsaUJBQVE7QUFGTCxPQVJEO0FBWUpDLGVBQVE7QUFDTkgsY0FBS0ksT0FEQztBQUVORixpQkFBUTtBQUZGLE9BWko7QUFnQkpHLGFBQU07QUFDSkwsY0FBS00sS0FERDtBQUVKSixpQkFBUTtBQUZKO0FBaEJGLEssUUFxQk5LLE0sR0FBUyxFLFFBRVRDLE8sR0FBVSxFOzs7Ozs2QkFFRCxDQUNSOzs7O0VBM0JnQyxlQUFLQyxTOztrQkFBbkJkLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGVwcyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgIHByb3BzPXtcbiAgICAgICAgY29tcG9uZW50SWQ6e1xuICAgICAgICAgIGRlZmFpbHQ6JydcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOntcbiAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OicnXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6e1xuICAgICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6J2hvcml6b24nXG4gICAgICAgIH0sXG4gICAgICAgIGhhc0Rlc2M6e1xuICAgICAgICAgIHR5cGU6Qm9vbGVhbixcbiAgICAgICAgICBkZWZhdWx0OmZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHN0ZXBzOntcbiAgICAgICAgICB0eXBlOkFycmF5LFxuICAgICAgICAgIGRlZmF1bHQ6W11cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXZlbnRzID0ge1xuICAgICAgfVxuICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgfVxuICAgICAgb25Mb2FkKCkge1xuICAgICAgfVxuICAgIH1cbiJdfQ==