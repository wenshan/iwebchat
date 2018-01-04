'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-card/index.js');

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

var Card = function (_wepy$page) {
  _inherits(Card, _wepy$page);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "Card 卡片"
    }, _this.$repeat = {}, _this.$props = { "card1": { "src": "https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg", "rightText": "¥ 999.99", "leftText": "红烧牛肉【虚拟商品】【有库存】【有sku】" } }, _this.$events = {}, _this.components = {
      card1: _index2.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    }, _this.data = {
      loading: true,
      disabled: true
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Card, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Card;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Card , 'pages/card/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY2FyZDEiLCJkYXRhIiwibG9hZGluZyIsImRpc2FibGVkIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0FBQ2lEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLE9BQU0sMEhBQVAsRUFBa0ksYUFBWSxVQUE5SSxFQUF5SixZQUFXLHVCQUFwSyxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Y7O0FBVFUsSyxRQVdWQyxJLEdBQU87QUFDTEMsZUFBUSxJQURIO0FBRUxDLGdCQUFTO0FBRkosSyxRQUtQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUdWQyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQWpDK0IsZUFBS0MsSTs7a0JBQWxCZCxJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIC8vIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCdcbiAgaW1wb3J0IENhcmQxIGZyb20gJ0AvY29tcG9uZW50cy93ZXB5LWNhcmQvaW5kZXgnIC8vIGFsaWFzIGV4YW1wbGVcbiAgLy8gaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcicgLy8gYWxpYXMgZXhhbXBsZVxuICAvLyBpbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCdcbiAgLy8gaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICAvLyBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwiQ2FyZCDljaHniYdcIlxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY2FyZDFcIjp7XCJzcmNcIjpcImh0dHBzOi8vaW1nLnl6Y2RuLmNuL3VwbG9hZF9maWxlcy8yMDE2LzExLzI1L0ZwcVBYbHJNUmpLd0pzOFZkVHUzWkRKQ2o0ajUuanBlZz9pbWFnZVZpZXcyLzIvdy8yMDAvaC8yMDAvcS85MC9mb3JtYXQvanBlZ1wiLFwicmlnaHRUZXh0XCI6XCLCpSA5OTkuOTlcIixcImxlZnRUZXh0XCI6XCLnuqLng6fniZvogonjgJDomZrmi5/llYblk4HjgJHjgJDmnInlupPlrZjjgJHjgJDmnIlza3XjgJFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgY2FyZDE6IENhcmQxLFxuICAgICAgLy8gY291bnRlcjE6IENvdW50ZXIsXG4gICAgICAvLyBjb3VudGVyMjogQ291bnRlcixcbiAgICAgIC8vIGxpc3Q6IExpc3QsXG4gICAgICAvLyBncm91cDogR3JvdXAsXG4gICAgICAvLyB0b2FzdDogVG9hc3RcbiAgICB9XG5cbiAgICAvL21peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgbG9hZGluZzp0cnVlLFxuICAgICAgZGlzYWJsZWQ6dHJ1ZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==