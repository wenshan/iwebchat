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

var Noticebar = function (_wepy$component) {
    _inherits(Noticebar, _wepy$component);

    function Noticebar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Noticebar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Noticebar.__proto__ || Object.getPrototypeOf(Noticebar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            noticebar: {
                twoWay: true,
                type: [Object],
                default: {}
            }
        }, _this.data = {
            animationData: {
                width: undefined,
                wrapWidth: undefined,
                animation: null,
                resetAnimation: null
            }
        }, _this.methods = {
            initZanNoticeBarScroll: function initZanNoticeBarScroll() {
                var _self = this;
                var componentId = this.noticebar.componentId;
                console.log(this, componentId);
                var currentComponent = this.animationData;
                wx.createSelectorQuery().select('#' + componentId + '__content').boundingClientRect(function (rect) {
                    console.log(rect, 'rect');
                    if (rect && rect.width) {
                        currentComponent.width = rect.width;
                        wx.createSelectorQuery().select('#' + componentId + '__content-wrap').boundingClientRect(function (rect) {
                            currentComponent.wrapWidth = rect.width;
                            if (currentComponent.wrapWidth < currentComponent.width) {
                                var mstime = currentComponent.width / 40 * 1000;
                                currentComponent.animation = wx.createAnimation({
                                    duration: mstime,
                                    timingFunction: 'linear'
                                });
                                currentComponent.resetAnimation = wx.createAnimation({
                                    duration: 0,
                                    timingFunction: 'linear'
                                });
                                _self.scrollZanNoticeBar(componentId, mstime);
                            }
                        }).exec();
                    } else {
                        console.warn('页面缺少 noticebar 元素');
                    }
                }).exec();
            }
        }, _this.scrollZanNoticeBar = function (componentId, mstime) {
            var currentComponent = _this.animationData;
            var resetAnimationData = currentComponent.resetAnimation.translateX(currentComponent.wrapWidth).step();
            var aninationData = currentComponent.animation.translateX(-mstime * 40 / 1000).step();
            setTimeout(function () {
                _this.animationData = aninationData.export();
            }, 100);

            setTimeout(function () {
                _this.scrollZanNoticeBar(componentId, mstime);
            }, mstime);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Noticebar;
}(_wepy2.default.component);

exports.default = Noticebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk5vdGljZWJhciIsInByb3BzIiwibm90aWNlYmFyIiwidHdvV2F5IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJkYXRhIiwiYW5pbWF0aW9uRGF0YSIsIndpZHRoIiwidW5kZWZpbmVkIiwid3JhcFdpZHRoIiwiYW5pbWF0aW9uIiwicmVzZXRBbmltYXRpb24iLCJtZXRob2RzIiwiaW5pdFphbk5vdGljZUJhclNjcm9sbCIsIl9zZWxmIiwiY29tcG9uZW50SWQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudENvbXBvbmVudCIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJtc3RpbWUiLCJjcmVhdGVBbmltYXRpb24iLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwic2Nyb2xsWmFuTm90aWNlQmFyIiwiZXhlYyIsIndhcm4iLCJyZXNldEFuaW1hdGlvbkRhdGEiLCJ0cmFuc2xhdGVYIiwic3RlcCIsImFuaW5hdGlvbkRhdGEiLCJzZXRUaW1lb3V0IiwiZXhwb3J0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ2pCQyxLLEdBQVE7QUFDSkMsdUJBQVU7QUFDTkMsd0JBQVEsSUFERjtBQUVOQyxzQkFBSyxDQUFDQyxNQUFELENBRkM7QUFHTkMseUJBQVM7QUFISDtBQUROLFMsUUFRUkMsSSxHQUFPO0FBQ0hDLDJCQUFlO0FBQ1hDLHVCQUFPQyxTQURJO0FBRVhDLDJCQUFXRCxTQUZBO0FBR1hFLDJCQUFXLElBSEE7QUFJWEMsZ0NBQWdCO0FBSkw7QUFEWixTLFFBUVBDLE8sR0FBVTtBQUVOQyxrQ0FGTSxvQ0FFbUI7QUFDckIsb0JBQUlDLFFBQVEsSUFBWjtBQUNBLG9CQUFNQyxjQUFjLEtBQUtmLFNBQUwsQ0FBZWUsV0FBbkM7QUFDQUMsd0JBQVFDLEdBQVIsQ0FBWSxJQUFaLEVBQWlCRixXQUFqQjtBQUNBLG9CQUFJRyxtQkFBbUIsS0FBS1osYUFBNUI7QUFDQWEsbUJBQUdDLG1CQUFILEdBQXlCQyxNQUF6QixPQUFvQ04sV0FBcEMsZ0JBQTRETyxrQkFBNUQsQ0FBK0UsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pGUCw0QkFBUUMsR0FBUixDQUFZTSxJQUFaLEVBQWlCLE1BQWpCO0FBQ0Esd0JBQUlBLFFBQVFBLEtBQUtoQixLQUFqQixFQUF3QjtBQUNwQlcseUNBQWlCWCxLQUFqQixHQUF5QmdCLEtBQUtoQixLQUE5QjtBQUNBWSwyQkFBR0MsbUJBQUgsR0FBeUJDLE1BQXpCLE9BQW9DTixXQUFwQyxxQkFBaUVPLGtCQUFqRSxDQUFvRixVQUFDQyxJQUFELEVBQVU7QUFDMUZMLDZDQUFpQlQsU0FBakIsR0FBNkJjLEtBQUtoQixLQUFsQztBQUNKLGdDQUFJVyxpQkFBaUJULFNBQWpCLEdBQTZCUyxpQkFBaUJYLEtBQWxELEVBQXlEO0FBQ3JELG9DQUFJaUIsU0FBU04saUJBQWlCWCxLQUFqQixHQUF5QixFQUF6QixHQUE4QixJQUEzQztBQUNBVyxpREFBaUJSLFNBQWpCLEdBQTZCUyxHQUFHTSxlQUFILENBQW1CO0FBQzVDQyw4Q0FBVUYsTUFEa0M7QUFFNUNHLG9EQUFnQjtBQUY0QixpQ0FBbkIsQ0FBN0I7QUFJQVQsaURBQWlCUCxjQUFqQixHQUFrQ1EsR0FBR00sZUFBSCxDQUFtQjtBQUNqREMsOENBQVUsQ0FEdUM7QUFFakRDLG9EQUFnQjtBQUZpQyxpQ0FBbkIsQ0FBbEM7QUFJQWIsc0NBQU1jLGtCQUFOLENBQXlCYixXQUF6QixFQUFzQ1MsTUFBdEM7QUFDSDtBQUNKLHlCQWRHLEVBY0RLLElBZEM7QUFlSCxxQkFqQkQsTUFpQk87QUFDSGIsZ0NBQVFjLElBQVIsQ0FBYSxtQkFBYjtBQUNIO0FBQ0osaUJBdEJHLEVBc0JERCxJQXRCQztBQXVCSDtBQTlCSyxTLFFBaUNWRCxrQixHQUFxQixVQUFDYixXQUFELEVBQWNTLE1BQWQsRUFBeUI7QUFDMUMsZ0JBQUlOLG1CQUFtQixNQUFLWixhQUE1QjtBQUNBLGdCQUFJeUIscUJBQXFCYixpQkFBaUJQLGNBQWpCLENBQWdDcUIsVUFBaEMsQ0FBMkNkLGlCQUFpQlQsU0FBNUQsRUFBdUV3QixJQUF2RSxFQUF6QjtBQUNJLGdCQUFJQyxnQkFBZ0JoQixpQkFBaUJSLFNBQWpCLENBQTJCc0IsVUFBM0IsQ0FBc0MsQ0FBQ1IsTUFBRCxHQUFVLEVBQVYsR0FBZSxJQUFyRCxFQUEyRFMsSUFBM0QsRUFBcEI7QUFDQUUsdUJBQVcsWUFBTTtBQUNqQixzQkFBSzdCLGFBQUwsR0FBcUI0QixjQUFjRSxNQUFkLEVBQXJCO0FBQ0gsYUFGRyxFQUVELEdBRkM7O0FBSUFELHVCQUFXLFlBQU07QUFDakIsc0JBQUtQLGtCQUFMLENBQXdCYixXQUF4QixFQUFxQ1MsTUFBckM7QUFDSCxhQUZHLEVBRURBLE1BRkM7QUFHUCxTOzs7O0VBN0RrQyxlQUFLYSxTOztrQkFBdkJ2QyxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWNlYmFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgICBub3RpY2ViYXI6e1xuICAgICAgICAgICAgdHdvV2F5OiB0cnVlLFxuICAgICAgICAgICAgdHlwZTpbT2JqZWN0XSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgICBhbmltYXRpb25EYXRhOiB7XG4gICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgd3JhcFdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBhbmltYXRpb246IG51bGwsXG4gICAgICAgICAgICByZXNldEFuaW1hdGlvbjogbnVsbFxuICAgICAgICB9XG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuXG4gICAgICAgIGluaXRaYW5Ob3RpY2VCYXJTY3JvbGwoKSB7XG4gICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SWQgPSB0aGlzLm5vdGljZWJhci5jb21wb25lbnRJZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMsY29tcG9uZW50SWQpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRDb21wb25lbnQgPSB0aGlzLmFuaW1hdGlvbkRhdGE7XG4gICAgICAgICAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KGAjJHtjb21wb25lbnRJZH1fX2NvbnRlbnRgKS5ib3VuZGluZ0NsaWVudFJlY3QoKHJlY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlY3QsJ3JlY3QnKTtcbiAgICAgICAgICAgIGlmIChyZWN0ICYmIHJlY3Qud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LndpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KGAjJHtjb21wb25lbnRJZH1fX2NvbnRlbnQtd3JhcGApLmJvdW5kaW5nQ2xpZW50UmVjdCgocmVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LndyYXBXaWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnQud3JhcFdpZHRoIDwgY3VycmVudENvbXBvbmVudC53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXN0aW1lID0gY3VycmVudENvbXBvbmVudC53aWR0aCAvIDQwICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5hbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IG1zdGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5yZXNldEFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYuc2Nyb2xsWmFuTm90aWNlQmFyKGNvbXBvbmVudElkLCBtc3RpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmV4ZWMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCfpobXpnaLnvLrlsJEgbm90aWNlYmFyIOWFg+e0oCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5leGVjKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxaYW5Ob3RpY2VCYXIgPSAoY29tcG9uZW50SWQsIG1zdGltZSkgPT4ge1xuICAgICAgICB2YXIgY3VycmVudENvbXBvbmVudCA9IHRoaXMuYW5pbWF0aW9uRGF0YTtcbiAgICAgICAgdmFyIHJlc2V0QW5pbWF0aW9uRGF0YSA9IGN1cnJlbnRDb21wb25lbnQucmVzZXRBbmltYXRpb24udHJhbnNsYXRlWChjdXJyZW50Q29tcG9uZW50LndyYXBXaWR0aCkuc3RlcCgpO1xuICAgICAgICAgICAgdmFyIGFuaW5hdGlvbkRhdGEgPSBjdXJyZW50Q29tcG9uZW50LmFuaW1hdGlvbi50cmFuc2xhdGVYKC1tc3RpbWUgKiA0MCAvIDEwMDApLnN0ZXAoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gYW5pbmF0aW9uRGF0YS5leHBvcnQoKTtcbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFphbk5vdGljZUJhcihjb21wb25lbnRJZCwgbXN0aW1lKTtcbiAgICAgICAgfSwgbXN0aW1lKTtcbiAgICB9XG59XG4iXX0=