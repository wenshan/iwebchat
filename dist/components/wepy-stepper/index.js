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

var Stepper = function (_wepy$component) {
  _inherits(Stepper, _wepy$component);

  function Stepper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Stepper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Stepper.__proto__ || Object.getPrototypeOf(Stepper)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: {
        default: ''
      },
      className: {
        type: String,
        default: ''
      },
      step: {
        type: Object,
        default: {
          min: 0,
          max: 20,
          stepper: 10
        }
      },
      size: {
        type: String,
        default: null
      },
      handleStepperChange: {
        type: Function,
        default: function _default(v) {
          return v;
        }
      }
    }, _this.events = {}, _this.methods = {
      _handledjStepperMinus: function _handledjStepperMinus(e) {
        this.handle(e, -1);
      },
      _handledjStepperPlus: function _handledjStepperPlus(e) {
        this.handle(e, +1);
      },
      _handledjStepperBlur: function _handledjStepperBlur(e) {
        var _this2 = this;

        var dataset = e.currentTarget.dataset;
        var componentId = dataset.componentId;
        var max = +dataset.max;
        var min = +dataset.min;
        var value = e.detail.value;

        if (!value) {
          setTimeout(function () {
            _this2.callback(componentId, min);
          }, 16);
          this.callback(componentId, value);
          return '' + value;
        }

        value = +value;
        if (value > max) {
          value = max;
        } else if (value < min) {
          value = min;
        }

        this.callback(componentId, value);

        return '' + value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Stepper, [{
    key: 'handle',
    value: function handle(e, num) {
      var dataset = e.currentTarget.dataset;
      var componentId = dataset.componentId;
      var disabled = dataset.disabled;
      var stepper = +dataset.stepper;

      if (disabled) return null;

      this.callback(componentId, stepper + num);
    }
  }, {
    key: 'callback',
    value: function callback(componentId, stepper) {
      stepper = +stepper;
      var e = { componentId: componentId, stepper: stepper };

      if (this.handleStepperChange) {
        this.handleStepperChange(e);
      } else {
        console.warn('页面缺少 handleStepperChange 回调函数');
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Stepper;
}(_wepy2.default.component);

exports.default = Stepper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0ZXBwZXIiLCJwcm9wcyIsImNvbXBvbmVudElkIiwiZGVmYXVsdCIsImNsYXNzTmFtZSIsInR5cGUiLCJTdHJpbmciLCJzdGVwIiwiT2JqZWN0IiwibWluIiwibWF4Iiwic3RlcHBlciIsInNpemUiLCJoYW5kbGVTdGVwcGVyQ2hhbmdlIiwiRnVuY3Rpb24iLCJ2IiwiZXZlbnRzIiwibWV0aG9kcyIsIl9oYW5kbGVkalN0ZXBwZXJNaW51cyIsImUiLCJoYW5kbGUiLCJfaGFuZGxlZGpTdGVwcGVyUGx1cyIsIl9oYW5kbGVkalN0ZXBwZXJCbHVyIiwiZGF0YXNldCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImRldGFpbCIsInNldFRpbWVvdXQiLCJjYWxsYmFjayIsIm51bSIsImRpc2FibGVkIiwiY29uc29sZSIsIndhcm4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSyxHQUFNO0FBQ0pDLG1CQUFZO0FBQ1ZDLGlCQUFRO0FBREUsT0FEUjtBQUlKQyxpQkFBVTtBQUNSQyxjQUFLQyxNQURHO0FBRVJILGlCQUFRO0FBRkEsT0FKTjtBQVFKSSxZQUFLO0FBQ0hGLGNBQUtHLE1BREY7QUFFSEwsaUJBQVE7QUFDTk0sZUFBSSxDQURFO0FBRU5DLGVBQUksRUFGRTtBQUdOQyxtQkFBUTtBQUhGO0FBRkwsT0FSRDtBQWdCSkMsWUFBSztBQUNIUCxjQUFLQyxNQURGO0FBRUhILGlCQUFRO0FBRkwsT0FoQkQ7QUFvQkpVLDJCQUFvQjtBQUNsQlIsY0FBS1MsUUFEYTtBQUVsQlgsaUJBQVEsa0JBQVNZLENBQVQsRUFBVztBQUFDLGlCQUFPQSxDQUFQO0FBQVM7QUFGWDtBQXBCaEIsSyxRQXlCTkMsTSxHQUFTLEUsUUFFVEMsTyxHQUFVO0FBRVJDLDJCQUZRLGlDQUVjQyxDQUZkLEVBRWlCO0FBQ3ZCLGFBQUtDLE1BQUwsQ0FBWUQsQ0FBWixFQUFlLENBQUMsQ0FBaEI7QUFDRCxPQUpPO0FBTVJFLDBCQU5RLGdDQU1hRixDQU5iLEVBTWdCO0FBQ3RCLGFBQUtDLE1BQUwsQ0FBWUQsQ0FBWixFQUFlLENBQUMsQ0FBaEI7QUFDRCxPQVJPO0FBVVJHLDBCQVZRLGdDQVVhSCxDQVZiLEVBVWdCO0FBQUE7O0FBQ3RCLFlBQUlJLFVBQVVKLEVBQUVLLGFBQUYsQ0FBZ0JELE9BQTlCO0FBQ0EsWUFBSXJCLGNBQWNxQixRQUFRckIsV0FBMUI7QUFDQSxZQUFJUSxNQUFNLENBQUNhLFFBQVFiLEdBQW5CO0FBQ0EsWUFBSUQsTUFBTSxDQUFDYyxRQUFRZCxHQUFuQjtBQUNBLFlBQUlnQixRQUFRTixFQUFFTyxNQUFGLENBQVNELEtBQXJCOztBQUVBLFlBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1ZFLHFCQUFXLFlBQU07QUFDZixtQkFBS0MsUUFBTCxDQUFjMUIsV0FBZCxFQUEyQk8sR0FBM0I7QUFDRCxXQUZELEVBRUcsRUFGSDtBQUdBLGVBQUttQixRQUFMLENBQWMxQixXQUFkLEVBQTJCdUIsS0FBM0I7QUFDQSxpQkFBTyxLQUFLQSxLQUFaO0FBQ0Q7O0FBRURBLGdCQUFRLENBQUNBLEtBQVQ7QUFDQSxZQUFJQSxRQUFRZixHQUFaLEVBQWlCO0FBQ2ZlLGtCQUFRZixHQUFSO0FBQ0QsU0FGRCxNQUVPLElBQUllLFFBQVFoQixHQUFaLEVBQWlCO0FBQ3RCZ0Isa0JBQVFoQixHQUFSO0FBQ0Q7O0FBRUQsYUFBS21CLFFBQUwsQ0FBYzFCLFdBQWQsRUFBMkJ1QixLQUEzQjs7QUFFQSxlQUFPLEtBQUtBLEtBQVo7QUFDRDtBQW5DTyxLOzs7OzsyQkFzQ0ROLEMsRUFBR1UsRyxFQUFLO0FBQ2IsVUFBSU4sVUFBVUosRUFBRUssYUFBRixDQUFnQkQsT0FBOUI7QUFDQSxVQUFJckIsY0FBY3FCLFFBQVFyQixXQUExQjtBQUNBLFVBQUk0QixXQUFXUCxRQUFRTyxRQUF2QjtBQUNBLFVBQUluQixVQUFVLENBQUNZLFFBQVFaLE9BQXZCOztBQUVBLFVBQUltQixRQUFKLEVBQWMsT0FBTyxJQUFQOztBQUVkLFdBQUtGLFFBQUwsQ0FBYzFCLFdBQWQsRUFBMkJTLFVBQVVrQixHQUFyQztBQUNEOzs7NkJBRVEzQixXLEVBQWFTLE8sRUFBUztBQUM3QkEsZ0JBQVUsQ0FBQ0EsT0FBWDtBQUNBLFVBQUlRLElBQUksRUFBRWpCLHdCQUFGLEVBQWVTLGdCQUFmLEVBQVI7O0FBRUEsVUFBSSxLQUFLRSxtQkFBVCxFQUE4QjtBQUM1QixhQUFLQSxtQkFBTCxDQUF5Qk0sQ0FBekI7QUFDRCxPQUZELE1BRU87QUFDTFksZ0JBQVFDLElBQVIsQ0FBYSwrQkFBYjtBQUNEO0FBQ0Y7Ozs2QkFDTSxDQUNSOzs7O0VBeEZrQyxlQUFLQyxTOztrQkFBckJqQyxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RlcHBlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgIHByb3BzPXtcbiAgICAgICAgY29tcG9uZW50SWQ6e1xuICAgICAgICAgIGRlZmF1bHQ6JydcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOntcbiAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OicnXG4gICAgICAgIH0sXG4gICAgICAgIHN0ZXA6e1xuICAgICAgICAgIHR5cGU6T2JqZWN0LFxuICAgICAgICAgIGRlZmF1bHQ6e1xuICAgICAgICAgICAgbWluOjAsXG4gICAgICAgICAgICBtYXg6MjAsXG4gICAgICAgICAgICBzdGVwcGVyOjEwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzaXplOntcbiAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlU3RlcHBlckNoYW5nZTp7XG4gICAgICAgICAgdHlwZTpGdW5jdGlvbixcbiAgICAgICAgICBkZWZhdWx0OmZ1bmN0aW9uKHYpe3JldHVybiB2fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudHMgPSB7XG4gICAgICB9XG4gICAgICBtZXRob2RzID0ge1xuXG4gICAgICAgIF9oYW5kbGVkalN0ZXBwZXJNaW51cyhlKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGUoZSwgLTEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9oYW5kbGVkalN0ZXBwZXJQbHVzKGUpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZShlLCArMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2hhbmRsZWRqU3RlcHBlckJsdXIoZSkge1xuICAgICAgICAgIHZhciBkYXRhc2V0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgdmFyIGNvbXBvbmVudElkID0gZGF0YXNldC5jb21wb25lbnRJZDtcbiAgICAgICAgICB2YXIgbWF4ID0gK2RhdGFzZXQubWF4O1xuICAgICAgICAgIHZhciBtaW4gPSArZGF0YXNldC5taW47XG4gICAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG5cbiAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb21wb25lbnRJZCwgbWluKTtcbiAgICAgICAgICAgIH0sIDE2KTtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29tcG9uZW50SWQsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiAnJyArIHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhbHVlID0gK3ZhbHVlO1xuICAgICAgICAgIGlmICh2YWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgdmFsdWUgPSBtYXg7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IG1pbikge1xuICAgICAgICAgICAgdmFsdWUgPSBtaW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5jYWxsYmFjayhjb21wb25lbnRJZCwgdmFsdWUpO1xuXG4gICAgICAgICAgcmV0dXJuICcnICsgdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGhhbmRsZShlLCBudW0pIHtcbiAgICAgICAgICB2YXIgZGF0YXNldCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgIHZhciBjb21wb25lbnRJZCA9IGRhdGFzZXQuY29tcG9uZW50SWQ7XG4gICAgICAgICAgdmFyIGRpc2FibGVkID0gZGF0YXNldC5kaXNhYmxlZDtcbiAgICAgICAgICB2YXIgc3RlcHBlciA9ICtkYXRhc2V0LnN0ZXBwZXI7XG5cbiAgICAgICAgICBpZiAoZGlzYWJsZWQpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgdGhpcy5jYWxsYmFjayhjb21wb25lbnRJZCwgc3RlcHBlciArIG51bSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhjb21wb25lbnRJZCwgc3RlcHBlcikge1xuICAgICAgICAgIHN0ZXBwZXIgPSArc3RlcHBlcjtcbiAgICAgICAgICB2YXIgZSA9IHsgY29tcG9uZW50SWQsIHN0ZXBwZXIgfTtcblxuICAgICAgICAgIGlmICh0aGlzLmhhbmRsZVN0ZXBwZXJDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RlcHBlckNoYW5nZShlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCfpobXpnaLnvLrlsJEgaGFuZGxlU3RlcHBlckNoYW5nZSDlm57osIPlh73mlbAnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIG9uTG9hZCgpIHtcbiAgICAgIH1cbiAgICB9XG4iXX0=