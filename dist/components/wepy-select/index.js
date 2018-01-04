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

var Select = function (_wepy$component) {
  _inherits(Select, _wepy$component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: {
        default: ''
      },
      items: {
        type: Array,
        default: []
      },
      checkedValue: {
        type: [String, Number],
        default: ''
      },
      activeColor: {
        type: [String, Number],
        default: ''
      },
      handleSelectChange: {
        type: Function,
        default: function _default(v) {
          return v;
        }
      }
    }, _this.events = {}, _this.methods = {
      _handleSelectChange: function _handleSelectChange(componentId, e) {
        var componentId = componentId;
        var value = e.detail.value;
        if (this.handleSelectChange) {
          this.handleSelectChange({ componentId: componentId, value: value });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Select;
}(_wepy2.default.component);

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNlbGVjdCIsInByb3BzIiwiY29tcG9uZW50SWQiLCJkZWZhdWx0IiwiaXRlbXMiLCJ0eXBlIiwiQXJyYXkiLCJjaGVja2VkVmFsdWUiLCJTdHJpbmciLCJOdW1iZXIiLCJhY3RpdmVDb2xvciIsImhhbmRsZVNlbGVjdENoYW5nZSIsIkZ1bmN0aW9uIiwidiIsImV2ZW50cyIsIm1ldGhvZHMiLCJfaGFuZGxlU2VsZWN0Q2hhbmdlIiwiZSIsInZhbHVlIiwiZGV0YWlsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBTTtBQUNKQyxtQkFBWTtBQUNWQyxpQkFBUTtBQURFLE9BRFI7QUFJSkMsYUFBTTtBQUNKQyxjQUFLQyxLQUREO0FBRUpILGlCQUFRO0FBRkosT0FKRjtBQVFKSSxvQkFBYTtBQUNYRixjQUFLLENBQUNHLE1BQUQsRUFBUUMsTUFBUixDQURNO0FBRVhOLGlCQUFRO0FBRkcsT0FSVDtBQVlKTyxtQkFBWTtBQUNWTCxjQUFLLENBQUNHLE1BQUQsRUFBUUMsTUFBUixDQURLO0FBRVZOLGlCQUFRO0FBRkUsT0FaUjtBQWdCSlEsMEJBQW1CO0FBQ2pCTixjQUFLTyxRQURZO0FBRWpCVCxpQkFBUSxrQkFBU1UsQ0FBVCxFQUFXO0FBQUMsaUJBQU9BLENBQVA7QUFBUztBQUZaO0FBaEJmLEssUUFxQk5DLE0sR0FBUyxFLFFBRVRDLE8sR0FBVTtBQUNOQyx5QkFETSwrQkFDY2QsV0FEZCxFQUMwQmUsQ0FEMUIsRUFDNkI7QUFDakMsWUFBSWYsY0FBY0EsV0FBbEI7QUFDQSxZQUFJZ0IsUUFBUUQsRUFBRUUsTUFBRixDQUFTRCxLQUFyQjtBQUNBLFlBQUcsS0FBS1Asa0JBQVIsRUFBMkI7QUFDekIsZUFBS0Esa0JBQUwsQ0FBd0IsRUFBQ1Qsd0JBQUQsRUFBY2dCLFlBQWQsRUFBeEI7QUFDRDtBQUNGO0FBUEssSzs7Ozs7NkJBU0QsQ0FDUjs7OztFQWxDaUMsZUFBS0UsUzs7a0JBQXBCcEIsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgIHByb3BzPXtcbiAgICAgICAgY29tcG9uZW50SWQ6e1xuICAgICAgICAgIGRlZmF1bHQ6JydcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbXM6e1xuICAgICAgICAgIHR5cGU6QXJyYXksXG4gICAgICAgICAgZGVmYXVsdDpbXVxuICAgICAgICB9LFxuICAgICAgICBjaGVja2VkVmFsdWU6e1xuICAgICAgICAgIHR5cGU6W1N0cmluZyxOdW1iZXJdLFxuICAgICAgICAgIGRlZmF1bHQ6JydcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlQ29sb3I6e1xuICAgICAgICAgIHR5cGU6W1N0cmluZyxOdW1iZXJdLFxuICAgICAgICAgIGRlZmF1bHQ6JydcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlU2VsZWN0Q2hhbmdlOntcbiAgICAgICAgICB0eXBlOkZ1bmN0aW9uLFxuICAgICAgICAgIGRlZmF1bHQ6ZnVuY3Rpb24odil7cmV0dXJuIHZ9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV2ZW50cyA9IHtcbiAgICAgIH1cbiAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgX2hhbmRsZVNlbGVjdENoYW5nZShjb21wb25lbnRJZCxlKSB7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgaWYodGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2Upe1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZSh7Y29tcG9uZW50SWQsIHZhbHVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBvbkxvYWQoKSB7XG4gICAgICB9XG4gICAgfVxuIl19