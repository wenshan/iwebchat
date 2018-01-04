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

var Switch = function (_wepy$component) {
  _inherits(Switch, _wepy$component);

  function Switch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: {
        default: ''
      },
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      handleSwitchChange: {
        type: Function,
        default: function _default(v) {
          return v;
        }
      }
    }, _this.events = {}, _this.methods = {
      _handledjSwitchChange: function _handledjSwitchChange(e) {
        var dataset = e.currentTarget.dataset;
        var loading = dataset.loading,
            disabled = dataset.disabled,
            componentId = dataset.componentId;

        var checked = !dataset.checked;

        if (loading || disabled) return;

        console.info('[dj:switch:change]', { checked: checked, componentId: componentId });
        if (this.handleSwitchChange) {
          this.handleSwitchChange({
            checked: checked,
            componentId: componentId
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Switch, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Switch;
}(_wepy2.default.component);

exports.default = Switch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN3aXRjaCIsInByb3BzIiwiY29tcG9uZW50SWQiLCJkZWZhdWx0IiwiY2hlY2tlZCIsInR5cGUiLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwiaGFuZGxlU3dpdGNoQ2hhbmdlIiwiRnVuY3Rpb24iLCJ2IiwiZXZlbnRzIiwibWV0aG9kcyIsIl9oYW5kbGVkalN3aXRjaENoYW5nZSIsImUiLCJkYXRhc2V0IiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJpbmZvIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBTTtBQUNKQyxtQkFBWTtBQUNWQyxpQkFBUTtBQURFLE9BRFI7QUFJSkMsZUFBUTtBQUNOQyxjQUFLQyxPQURDO0FBRU5ILGlCQUFRO0FBRkYsT0FKSjtBQVFKSSxnQkFBUztBQUNQRixjQUFLQyxPQURFO0FBRVBILGlCQUFRO0FBRkQsT0FSTDtBQVlKSyxlQUFRO0FBQ05ILGNBQUtDLE9BREM7QUFFTkgsaUJBQVE7QUFGRixPQVpKO0FBZ0JKTSwwQkFBbUI7QUFDakJKLGNBQUtLLFFBRFk7QUFFakJQLGlCQUFRLGtCQUFTUSxDQUFULEVBQVc7QUFBQyxpQkFBT0EsQ0FBUDtBQUFTO0FBRlo7QUFoQmYsSyxRQXFCTkMsTSxHQUFTLEUsUUFFVEMsTyxHQUFVO0FBRVJDLDJCQUZRLGlDQUVjQyxDQUZkLEVBRWlCO0FBQ3ZCLFlBQUlDLFVBQVVELEVBQUVFLGFBQUYsQ0FBZ0JELE9BQTlCO0FBRHVCLFlBRWpCUixPQUZpQixHQUVrQlEsT0FGbEIsQ0FFakJSLE9BRmlCO0FBQUEsWUFFUkQsUUFGUSxHQUVrQlMsT0FGbEIsQ0FFUlQsUUFGUTtBQUFBLFlBRUVMLFdBRkYsR0FFa0JjLE9BRmxCLENBRUVkLFdBRkY7O0FBR3ZCLFlBQUlFLFVBQVUsQ0FBQ1ksUUFBUVosT0FBdkI7O0FBRUEsWUFBSUksV0FBV0QsUUFBZixFQUF5Qjs7QUFFekJXLGdCQUFRQyxJQUFSLENBQWEsb0JBQWIsRUFBbUMsRUFBRWYsZ0JBQUYsRUFBV0Ysd0JBQVgsRUFBbkM7QUFDQSxZQUFJLEtBQUtPLGtCQUFULEVBQTZCO0FBQzNCLGVBQUtBLGtCQUFMLENBQXdCO0FBQ3RCTCw0QkFEc0I7QUFFdEJGO0FBRnNCLFdBQXhCO0FBSUQ7QUFDRjtBQWhCTyxLOzs7Ozs2QkFtQkQsQ0FDUjs7OztFQTVDaUMsZUFBS2tCLFM7O2tCQUFwQnBCLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICBwcm9wcz17XG4gICAgICAgIGNvbXBvbmVudElkOntcbiAgICAgICAgICBkZWZhdWx0OicnXG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrZWQ6e1xuICAgICAgICAgIHR5cGU6Qm9vbGVhbixcbiAgICAgICAgICBkZWZhdWx0OmZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOntcbiAgICAgICAgICB0eXBlOkJvb2xlYW4sXG4gICAgICAgICAgZGVmYXVsdDpmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nOntcbiAgICAgICAgICB0eXBlOkJvb2xlYW4sXG4gICAgICAgICAgZGVmYXVsdDpmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVTd2l0Y2hDaGFuZ2U6e1xuICAgICAgICAgIHR5cGU6RnVuY3Rpb24sXG4gICAgICAgICAgZGVmYXVsdDpmdW5jdGlvbih2KXtyZXR1cm4gdn1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXZlbnRzID0ge1xuICAgICAgfVxuICAgICAgbWV0aG9kcyA9IHtcblxuICAgICAgICBfaGFuZGxlZGpTd2l0Y2hDaGFuZ2UoZSkge1xuICAgICAgICAgIGxldCBkYXRhc2V0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgbGV0IHsgbG9hZGluZywgZGlzYWJsZWQsIGNvbXBvbmVudElkIH0gPSBkYXRhc2V0O1xuICAgICAgICAgIGxldCBjaGVja2VkID0gIWRhdGFzZXQuY2hlY2tlZDtcblxuICAgICAgICAgIGlmIChsb2FkaW5nIHx8IGRpc2FibGVkKSByZXR1cm47XG5cbiAgICAgICAgICBjb25zb2xlLmluZm8oJ1tkajpzd2l0Y2g6Y2hhbmdlXScsIHsgY2hlY2tlZCwgY29tcG9uZW50SWQgfSk7XG4gICAgICAgICAgaWYgKHRoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVN3aXRjaENoYW5nZSh7XG4gICAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICAgIGNvbXBvbmVudElkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICBvbkxvYWQoKSB7XG4gICAgICB9XG4gICAgfVxuIl19