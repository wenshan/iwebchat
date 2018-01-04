'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var djToptips = function (_wepy$component) {
  _inherits(djToptips, _wepy$component);

  function djToptips() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, djToptips);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = djToptips.__proto__ || Object.getPrototypeOf(djToptips)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      topTips: {},
      animationData: {}
    }, _this.methods = {
      show: function show(_ref2, event) {
        var _this2 = this;

        var _ref2$content = _ref2.content,
            content = _ref2$content === undefined ? '' : _ref2$content,
            _ref2$options = _ref2.options,
            options = _ref2$options === undefined ? {} : _ref2$options;

        console.log('showdjTopTips', content, options);
        var topTips = this.topTips || {};
        // 如果已经有一个计时器在了，就清理掉先
        if (topTips.timer) {
          clearTimeout(topTips.timer);
          topTips.timer = undefined;
        }

        if (typeof options === 'number') {
          options = {
            duration: options
          };
        }

        // options参数默认参数扩展
        options = Object.assign({
          duration: 3000
        }, options);

        // 原生动画
        var animation = _wepy2.default.createAnimation({
          duration: 400,
          timingFunction: 'ease'
        });
        this.animation = animation;

        var toggle = function toggle() {
          wx.createSelectorQuery().select('.dj-toptips').boundingClientRect(function (rect) {
            _this2.topTips.show ? animation.translateY().step() : animation.translateY(-rect.height).step();
            _this2.animationData = animation.export();
            _this2.$apply();
          }).exec();
        };

        // 设置定时器，定时关闭topTips
        var timer = setTimeout(function () {
          _this2.topTips.show = false;
          _this2.topTips.timer = undefined;
          toggle();
        }, options.duration);

        // 展示出topTips
        this.topTips = {
          show: true,
          content: content,
          timer: timer
        };
        toggle();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return djToptips;
}(_wepy2.default.component);

exports.default = djToptips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRqVG9wdGlwcyIsInByb3BzIiwiZGF0YSIsInRvcFRpcHMiLCJhbmltYXRpb25EYXRhIiwibWV0aG9kcyIsInNob3ciLCJldmVudCIsImNvbnRlbnQiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsInRpbWVyIiwiY2xlYXJUaW1lb3V0IiwidW5kZWZpbmVkIiwiZHVyYXRpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJhbmltYXRpb24iLCJjcmVhdGVBbmltYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsInRvZ2dsZSIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJ0cmFuc2xhdGVZIiwic3RlcCIsImhlaWdodCIsImV4cG9ydCIsIiRhcHBseSIsImV4ZWMiLCJzZXRUaW1lb3V0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVEsRSxRQUNSQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLHFCQUFlO0FBRlYsSyxRQUlQQyxPLEdBQVU7QUFDUkMsVUFEUSx1QkFDNkJDLEtBRDdCLEVBQ29DO0FBQUE7O0FBQUEsa0NBQXJDQyxPQUFxQztBQUFBLFlBQXJDQSxPQUFxQyxpQ0FBM0IsRUFBMkI7QUFBQSxrQ0FBdkJDLE9BQXVCO0FBQUEsWUFBdkJBLE9BQXVCLGlDQUFiLEVBQWE7O0FBQzFDQyxnQkFBUUMsR0FBUixDQUFZLGVBQVosRUFBNkJILE9BQTdCLEVBQXNDQyxPQUF0QztBQUNBLFlBQUlOLFVBQVUsS0FBS0EsT0FBTCxJQUFnQixFQUE5QjtBQUNBO0FBQ0EsWUFBSUEsUUFBUVMsS0FBWixFQUFtQjtBQUNqQkMsdUJBQWFWLFFBQVFTLEtBQXJCO0FBQ0FULGtCQUFRUyxLQUFSLEdBQWdCRSxTQUFoQjtBQUNEOztBQUVELFlBQUksT0FBT0wsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQkEsb0JBQVU7QUFDUk0sc0JBQVVOO0FBREYsV0FBVjtBQUdEOztBQUVEO0FBQ0FBLGtCQUFVTyxPQUFPQyxNQUFQLENBQWM7QUFDdEJGLG9CQUFVO0FBRFksU0FBZCxFQUVQTixPQUZPLENBQVY7O0FBSUE7QUFDQSxZQUFJUyxZQUFZLGVBQUtDLGVBQUwsQ0FBcUI7QUFDbkNKLG9CQUFVLEdBRHlCO0FBRW5DSywwQkFBZ0I7QUFGbUIsU0FBckIsQ0FBaEI7QUFJQSxhQUFLRixTQUFMLEdBQWlCQSxTQUFqQjs7QUFFQSxZQUFNRyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQkMsYUFBR0MsbUJBQUgsR0FDR0MsTUFESCxDQUNVLGFBRFYsRUFFR0Msa0JBRkgsQ0FFc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzVCLG1CQUFLdkIsT0FBTCxDQUFhRyxJQUFiLEdBQ0lZLFVBQVVTLFVBQVYsR0FBdUJDLElBQXZCLEVBREosR0FFSVYsVUFBVVMsVUFBVixDQUFxQixDQUFDRCxLQUFLRyxNQUEzQixFQUFtQ0QsSUFBbkMsRUFGSjtBQUdBLG1CQUFLeEIsYUFBTCxHQUFxQmMsVUFBVVksTUFBVixFQUFyQjtBQUNBLG1CQUFLQyxNQUFMO0FBQ0QsV0FSSCxFQVFLQyxJQVJMO0FBU0QsU0FWRDs7QUFZQTtBQUNBLFlBQUlwQixRQUFRcUIsV0FBVyxZQUFNO0FBQzNCLGlCQUFLOUIsT0FBTCxDQUFhRyxJQUFiLEdBQW9CLEtBQXBCO0FBQ0EsaUJBQUtILE9BQUwsQ0FBYVMsS0FBYixHQUFxQkUsU0FBckI7QUFDQU87QUFDRCxTQUpXLEVBSVRaLFFBQVFNLFFBSkMsQ0FBWjs7QUFNQTtBQUNBLGFBQUtaLE9BQUwsR0FBZTtBQUNiRyxnQkFBTSxJQURPO0FBRWJFLDBCQUZhO0FBR2JJO0FBSGEsU0FBZjtBQUtBUztBQUNEO0FBdERPLEs7Ozs7RUFOMkIsZUFBS2EsUzs7a0JBQXZCbEMsUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGpUb3B0aXBzIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHt9XG4gIGRhdGEgPSB7XG4gICAgdG9wVGlwczoge30sXG4gICAgYW5pbWF0aW9uRGF0YToge31cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNob3coeyBjb250ZW50ID0gJycsIG9wdGlvbnMgPSB7fSB9LCBldmVudCkge1xuICAgICAgY29uc29sZS5sb2coJ3Nob3dkalRvcFRpcHMnLCBjb250ZW50LCBvcHRpb25zKVxuICAgICAgbGV0IHRvcFRpcHMgPSB0aGlzLnRvcFRpcHMgfHwge31cbiAgICAgIC8vIOWmguaenOW3sue7j+acieS4gOS4quiuoeaXtuWZqOWcqOS6hu+8jOWwsea4heeQhuaOieWFiFxuICAgICAgaWYgKHRvcFRpcHMudGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRvcFRpcHMudGltZXIpXG4gICAgICAgIHRvcFRpcHMudGltZXIgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJykge1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGR1cmF0aW9uOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gb3B0aW9uc+WPguaVsOm7mOiupOWPguaVsOaJqeWxlVxuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgLy8g5Y6f55Sf5Yqo55S7XG4gICAgICBsZXQgYW5pbWF0aW9uID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnXG4gICAgICB9KVxuICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cblxuICAgICAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICAgICAgICAuc2VsZWN0KCcuZGotdG9wdGlwcycpXG4gICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdCgocmVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b3BUaXBzLnNob3dcbiAgICAgICAgICAgICAgPyBhbmltYXRpb24udHJhbnNsYXRlWSgpLnN0ZXAoKVxuICAgICAgICAgICAgICA6IGFuaW1hdGlvbi50cmFuc2xhdGVZKC1yZWN0LmhlaWdodCkuc3RlcCgpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB9KS5leGVjKClcbiAgICAgIH1cblxuICAgICAgLy8g6K6+572u5a6a5pe25Zmo77yM5a6a5pe25YWz6ZetdG9wVGlwc1xuICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudG9wVGlwcy5zaG93ID0gZmFsc2VcbiAgICAgICAgdGhpcy50b3BUaXBzLnRpbWVyID0gdW5kZWZpbmVkXG4gICAgICAgIHRvZ2dsZSgpXG4gICAgICB9LCBvcHRpb25zLmR1cmF0aW9uKVxuXG4gICAgICAvLyDlsZXnpLrlh7p0b3BUaXBzXG4gICAgICB0aGlzLnRvcFRpcHMgPSB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIHRpbWVyXG4gICAgICB9XG4gICAgICB0b2dnbGUoKVxuICAgIH1cbiAgfVxufVxuIl19