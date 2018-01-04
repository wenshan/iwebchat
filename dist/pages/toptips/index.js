'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-toptips/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import List from '../components/list'


// alias example
// import Counter from 'counter' // alias example
// import Group from '../components/group'
// import Toast from 'wepy-com-toast'
// import testMixin from '../mixins/test'

var Tab = function (_wepy$page) {
  _inherits(Tab, _wepy$page);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "Toptips 顶部提示"
    }, _this.$repeat = {}, _this.$props = { "Toptips1": { "data": "{{ djTopTips }}" } }, _this.$events = {}, _this.components = {
      Toptips1: _index2.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    }, _this.data = {}, _this.computed = {}, _this.methods = {
      showTopTips: function showTopTips() {
        this.$invoke('Toptips1', 'show', { content: '这是一个模态弹窗' });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Tab;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Tab , 'pages/toptips/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRhYiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJUb3B0aXBzMSIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzaG93VG9wVGlwcyIsIiRpbnZva2UiLCJjb250ZW50IiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0FBQ3VEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLFFBQU8saUJBQVIsRUFBWixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdGOztBQVRVLEssUUFXVkMsSSxHQUFPLEUsUUFJUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1JDLGlCQURRLHlCQUNNO0FBQ1osYUFBS0MsT0FBTCxDQUFhLFVBQWIsRUFBd0IsTUFBeEIsRUFBK0IsRUFBQ0MsU0FBUSxVQUFULEVBQS9CO0FBQ0Q7QUFITyxLLFFBS1ZDLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBbEM4QixlQUFLQyxJOztrQkFBakJmLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0J1xuICBpbXBvcnQgVG9wdGlwczEgZnJvbSAnQC9jb21wb25lbnRzL3dlcHktdG9wdGlwcy9pbmRleCcgLy8gYWxpYXMgZXhhbXBsZVxuICAvLyBpbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJyAvLyBhbGlhcyBleGFtcGxlXG4gIC8vIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xuICAvLyBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIC8vIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIlRvcHRpcHMg6aG26YOo5o+Q56S6XCJcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlRvcHRpcHMxXCI6e1wiZGF0YVwiOlwie3sgZGpUb3BUaXBzIH19XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFRvcHRpcHMxOiBUb3B0aXBzMVxuICAgICAgLy8gY291bnRlcjE6IENvdW50ZXIsXG4gICAgICAvLyBjb3VudGVyMjogQ291bnRlcixcbiAgICAgIC8vIGxpc3Q6IExpc3QsXG4gICAgICAvLyBncm91cDogR3JvdXAsXG4gICAgICAvLyB0b2FzdDogVG9hc3RcbiAgICB9XG5cbiAgICAvL21peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dUb3BUaXBzKCkge1xuICAgICAgICB0aGlzLiRpbnZva2UoJ1RvcHRpcHMxJywnc2hvdycse2NvbnRlbnQ6J+i/meaYr+S4gOS4quaooeaAgeW8ueeqlyd9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==