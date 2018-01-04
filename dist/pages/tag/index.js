'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-tag/index.js');

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
      navigationBarTitleText: "Tag 标记"
    }, _this.components = {
      Tag1: _index2.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    }, _this.data = {}, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Tab;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Tab , 'pages/tag/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRhYiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiVGFnMSIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7OztBQURBOzs7QUFDK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRjs7QUFUYSxLLFFBV2JDLEksR0FBTyxFLFFBR1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBM0I4QixlQUFLQyxJOztrQkFBakJULEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0J1xuICBpbXBvcnQgVGFnMSBmcm9tICdAL2NvbXBvbmVudHMvd2VweS10YWcvaW5kZXgnIC8vIGFsaWFzIGV4YW1wbGVcbiAgLy8gaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcicgLy8gYWxpYXMgZXhhbXBsZVxuICAvLyBpbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCdcbiAgLy8gaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICAvLyBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCJUYWcg5qCH6K6wXCJcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIFRhZzE6IFRhZzEsXG4gICAgICAvLyBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIC8vIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgLy8gbGlzdDogTGlzdCxcbiAgICAgIC8vIGdyb3VwOiBHcm91cCxcbiAgICAgIC8vIHRvYXN0OiBUb2FzdFxuICAgIH1cblxuICAgIC8vbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==