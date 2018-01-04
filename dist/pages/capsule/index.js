'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-capsule/index.js');

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

var Capsule = function (_wepy$page) {
  _inherits(Capsule, _wepy$page);

  function Capsule() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Capsule);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Capsule.__proto__ || Object.getPrototypeOf(Capsule)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "Capsule 胶囊"
    }, _this.$repeat = {}, _this.$props = { "capsule1": { "leftText": "1折", "rightText": "限购一份" }, "capsule2": { "leftText": "1折", "rightText": "限购一份", "xmlns:v-bind": "", "v-bind:type.sync": "danger" }, "capsule3": { "leftText": "1折", "rightText": "限购一份", "color": "#38f" } }, _this.$events = {}, _this.components = {
      capsule1: _index2.default,
      capsule2: _index2.default,
      capsule3: _index2.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    }, _this.data = {}, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Capsule, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Capsule;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Capsule , 'pages/capsule/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNhcHN1bGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY2Fwc3VsZTEiLCJjYXBzdWxlMiIsImNhcHN1bGUzIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztBQUN1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxZQUFXLElBQVosRUFBaUIsYUFBWSxNQUE3QixFQUFaLEVBQWlELFlBQVcsRUFBQyxZQUFXLElBQVosRUFBaUIsYUFBWSxNQUE3QixFQUFvQyxnQkFBZSxFQUFuRCxFQUFzRCxvQkFBbUIsUUFBekUsRUFBNUQsRUFBK0ksWUFBVyxFQUFDLFlBQVcsSUFBWixFQUFpQixhQUFZLE1BQTdCLEVBQW9DLFNBQVEsTUFBNUMsRUFBMUosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsK0JBRFE7QUFFUkMsK0JBRlE7QUFHUkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRjs7QUFYVSxLLFFBYVZDLEksR0FBTyxFLFFBR1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBR1ZDLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBakNrQyxlQUFLQyxJOztrQkFBckJkLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0J1xuICBpbXBvcnQgQ2Fwc3VsZTEgZnJvbSAnQC9jb21wb25lbnRzL3dlcHktY2Fwc3VsZS9pbmRleCcgLy8gYWxpYXMgZXhhbXBsZVxuICAvLyBpbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJyAvLyBhbGlhcyBleGFtcGxlXG4gIC8vIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xuICAvLyBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIC8vIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fwc3VsZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCJDYXBzdWxlIOiDtuWbilwiXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjYXBzdWxlMVwiOntcImxlZnRUZXh0XCI6XCIx5oqYXCIsXCJyaWdodFRleHRcIjpcIumZkOi0reS4gOS7vVwifSxcImNhcHN1bGUyXCI6e1wibGVmdFRleHRcIjpcIjHmiphcIixcInJpZ2h0VGV4dFwiOlwi6ZmQ6LSt5LiA5Lu9XCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnR5cGUuc3luY1wiOlwiZGFuZ2VyXCJ9LFwiY2Fwc3VsZTNcIjp7XCJsZWZ0VGV4dFwiOlwiMeaKmFwiLFwicmlnaHRUZXh0XCI6XCLpmZDotK3kuIDku71cIixcImNvbG9yXCI6XCIjMzhmXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGNhcHN1bGUxOiBDYXBzdWxlMSxcbiAgICAgIGNhcHN1bGUyOiBDYXBzdWxlMSxcbiAgICAgIGNhcHN1bGUzOiBDYXBzdWxlMSxcbiAgICAgIC8vIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgLy8gY291bnRlcjI6IENvdW50ZXIsXG4gICAgICAvLyBsaXN0OiBMaXN0LFxuICAgICAgLy8gZ3JvdXA6IEdyb3VwLFxuICAgICAgLy8gdG9hc3Q6IFRvYXN0XG4gICAgfVxuXG4gICAgLy9taXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=