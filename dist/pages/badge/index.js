'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-badge/index.js');

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

var Badge = function (_wepy$page) {
  _inherits(Badge, _wepy$page);

  function Badge() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Badge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Badge.__proto__ || Object.getPrototypeOf(Badge)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "Badge 徽章"
    }, _this.$repeat = {}, _this.$props = { "badge1": { "className": "demo__icon" }, "badge2": { "className": "demo__icon", "countText": "9" }, "badge3": { "className": "demo__icon", "countText": "19" }, "badge4": { "className": "demo__icon", "countText": "99+" } }, _this.$events = {}, _this.components = {
      badge1: _index2.default,
      badge2: _index2.default,
      badge3: _index2.default,
      badge4: _index2.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    }, _this.data = {}, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Badge, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Badge;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Badge , 'pages/badge/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkJhZGdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImJhZGdlMSIsImJhZGdlMiIsImJhZGdlMyIsImJhZGdlNCIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7OztBQURBOzs7QUFDbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsYUFBWSxZQUFiLEVBQVYsRUFBcUMsVUFBUyxFQUFDLGFBQVksWUFBYixFQUEwQixhQUFZLEdBQXRDLEVBQTlDLEVBQXlGLFVBQVMsRUFBQyxhQUFZLFlBQWIsRUFBMEIsYUFBWSxJQUF0QyxFQUFsRyxFQUE4SSxVQUFTLEVBQUMsYUFBWSxZQUFiLEVBQTBCLGFBQVksS0FBdEMsRUFBdkosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsNkJBRFE7QUFFUkMsNkJBRlE7QUFHUkMsNkJBSFE7QUFJUkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRjs7QUFaVSxLLFFBY1ZDLEksR0FBTyxFLFFBR1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBR1ZDLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBbENnQyxlQUFLQyxJOztrQkFBbkJmLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0J1xuICBpbXBvcnQgQmFkZ2UxIGZyb20gJ0AvY29tcG9uZW50cy93ZXB5LWJhZGdlL2luZGV4JyAvLyBhbGlhcyBleGFtcGxlXG4gIC8vIGltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInIC8vIGFsaWFzIGV4YW1wbGVcbiAgLy8gaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnXG4gIC8vIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgLy8gaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBCYWRnZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCJCYWRnZSDlvr3nq6BcIlxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYmFkZ2UxXCI6e1wiY2xhc3NOYW1lXCI6XCJkZW1vX19pY29uXCJ9LFwiYmFkZ2UyXCI6e1wiY2xhc3NOYW1lXCI6XCJkZW1vX19pY29uXCIsXCJjb3VudFRleHRcIjpcIjlcIn0sXCJiYWRnZTNcIjp7XCJjbGFzc05hbWVcIjpcImRlbW9fX2ljb25cIixcImNvdW50VGV4dFwiOlwiMTlcIn0sXCJiYWRnZTRcIjp7XCJjbGFzc05hbWVcIjpcImRlbW9fX2ljb25cIixcImNvdW50VGV4dFwiOlwiOTkrXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGJhZGdlMTogQmFkZ2UxLFxuICAgICAgYmFkZ2UyOiBCYWRnZTEsXG4gICAgICBiYWRnZTM6IEJhZGdlMSxcbiAgICAgIGJhZGdlNDogQmFkZ2UxLFxuICAgICAgLy8gY291bnRlcjE6IENvdW50ZXIsXG4gICAgICAvLyBjb3VudGVyMjogQ291bnRlcixcbiAgICAgIC8vIGxpc3Q6IExpc3QsXG4gICAgICAvLyBncm91cDogR3JvdXAsXG4gICAgICAvLyB0b2FzdDogVG9hc3RcbiAgICB9XG5cbiAgICAvL21peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==