'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-select/index.js');

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

var Select = function (_wepy$page) {
  _inherits(Select, _wepy$page);

  function Select() {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this));

    _this.config = {
      navigationBarTitleText: "Select 选择"
    };
    _this.computed = {
      checkedValue1: function checkedValue1() {
        return this.checked.base;
      },
      checkedValue2: function checkedValue2() {
        return this.checked.color;
      }
    };
    _this.$repeat = {};
    _this.$props = { "Select1": { "xmlns:v-bind": "", "v-bind:items.sync": "items", "v-bind:checkedValue.sync": "checkedValue1", "componentId": "base", "v-bind:handleSelectChange.sync": "handleSelectChange" }, "Select2": { "v-bind:items.sync": "items", "v-bind:checkedValue.sync": "checkedValue2", "v-bind:activeColor.sync": "activeColor", "componentId": "color", "v-bind:handleSelectChange.sync": "handleSelectChange" } };
    _this.$events = {};
    _this.components = {
      Select1: _index2.default,
      Select2: _index2.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    };
    _this.data = {
      items: [{
        padding: 0,
        value: '1',
        name: '选项一'
      }, {
        padding: 0,
        value: '2',
        name: '选项二'
      }],

      checked: {
        base: '1',
        color: '1'
      },

      activeColor: '#4b0'
    };
    _this.methods = {};
    _this.events = {};

    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    return _this;
  }

  _createClass(Select, [{
    key: 'handleSelectChange',
    value: function handleSelectChange(_ref) {
      var componentId = _ref.componentId,
          value = _ref.value;

      this.checked[componentId] = value;
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Select;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Select , 'pages/select/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNlbGVjdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wdXRlZCIsImNoZWNrZWRWYWx1ZTEiLCJjaGVja2VkIiwiYmFzZSIsImNoZWNrZWRWYWx1ZTIiLCJjb2xvciIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlNlbGVjdDEiLCJTZWxlY3QyIiwiZGF0YSIsIml0ZW1zIiwicGFkZGluZyIsInZhbHVlIiwibmFtZSIsImFjdGl2ZUNvbG9yIiwibWV0aG9kcyIsImV2ZW50cyIsImhhbmRsZVNlbGVjdENoYW5nZSIsImJpbmQiLCJjb21wb25lbnRJZCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztBQUNxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE07OztBQUNuQixvQkFBYTtBQUFBOztBQUFBOztBQUFBLFVBSWJDLE1BSmEsR0FJSjtBQUNQQyw4QkFBd0I7QUFEakIsS0FKSTtBQUFBLFVBT2JDLFFBUGEsR0FPSjtBQUNQQyxtQkFETywyQkFDUTtBQUNiLGVBQU8sS0FBS0MsT0FBTCxDQUFhQyxJQUFwQjtBQUNELE9BSE07QUFJUEMsbUJBSk8sMkJBSVE7QUFDYixlQUFPLEtBQUtGLE9BQUwsQ0FBYUcsS0FBcEI7QUFDRDtBQU5NLEtBUEk7QUFBQSxVQWVkQyxPQWZjLEdBZUosRUFmSTtBQUFBLFVBZ0JqQkMsTUFoQmlCLEdBZ0JSLEVBQUMsV0FBVSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyw0QkFBMkIsZUFBMUUsRUFBMEYsZUFBYyxNQUF4RyxFQUErRyxrQ0FBaUMsb0JBQWhKLEVBQVgsRUFBaUwsV0FBVSxFQUFDLHFCQUFvQixPQUFyQixFQUE2Qiw0QkFBMkIsZUFBeEQsRUFBd0UsMkJBQTBCLGFBQWxHLEVBQWdILGVBQWMsT0FBOUgsRUFBc0ksa0NBQWlDLG9CQUF2SyxFQUEzTCxFQWhCUTtBQUFBLFVBaUJqQkMsT0FqQmlCLEdBaUJQLEVBakJPO0FBQUEsVUFrQmhCQyxVQWxCZ0IsR0FrQkg7QUFDUkMsOEJBRFE7QUFFUkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRjs7QUFWVSxLQWxCRztBQUFBLFVBOEJiQyxJQTlCYSxHQThCTjtBQUNMQyxhQUFPLENBQ0w7QUFDRUMsaUJBQVMsQ0FEWDtBQUVFQyxlQUFPLEdBRlQ7QUFHRUMsY0FBTTtBQUhSLE9BREssRUFNTDtBQUNFRixpQkFBUyxDQURYO0FBRUVDLGVBQU8sR0FGVDtBQUdFQyxjQUFNO0FBSFIsT0FOSyxDQURGOztBQWNMZCxlQUFTO0FBQ1BDLGNBQU0sR0FEQztBQUVQRSxlQUFPO0FBRkEsT0FkSjs7QUFtQkxZLG1CQUFhO0FBbkJSLEtBOUJNO0FBQUEsVUFvRGJDLE9BcERhLEdBb0RILEVBcERHO0FBQUEsVUEyRGJDLE1BM0RhLEdBMkRKLEVBM0RJOztBQUVYLFVBQUtDLGtCQUFMLEdBQXdCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixPQUF4QjtBQUZXO0FBR1o7Ozs7NkNBb0QwQztBQUFBLFVBQXRCQyxXQUFzQixRQUF0QkEsV0FBc0I7QUFBQSxVQUFUUCxLQUFTLFFBQVRBLEtBQVM7O0FBQ3ZDLFdBQUtiLE9BQUwsQ0FBYW9CLFdBQWIsSUFBMEJQLEtBQTFCO0FBQ0EsV0FBS1EsTUFBTDtBQUNIOzs7NkJBSVEsQ0FDUjs7OztFQWhFaUMsZUFBS0MsSTs7a0JBQXBCM0IsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnXG4gIGltcG9ydCBTZWxlY3QxIGZyb20gJ0AvY29tcG9uZW50cy93ZXB5LXNlbGVjdC9pbmRleCcgLy8gYWxpYXMgZXhhbXBsZVxuICAvLyBpbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJyAvLyBhbGlhcyBleGFtcGxlXG4gIC8vIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xuICAvLyBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIC8vIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlPXRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwiU2VsZWN0IOmAieaLqVwiXG4gICAgfVxuICAgIGNvbXB1dGVkPXtcbiAgICAgIGNoZWNrZWRWYWx1ZTEoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZC5iYXNlO1xuICAgICAgfSxcbiAgICAgIGNoZWNrZWRWYWx1ZTIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZC5jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlNlbGVjdDFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOml0ZW1zLnN5bmNcIjpcIml0ZW1zXCIsXCJ2LWJpbmQ6Y2hlY2tlZFZhbHVlLnN5bmNcIjpcImNoZWNrZWRWYWx1ZTFcIixcImNvbXBvbmVudElkXCI6XCJiYXNlXCIsXCJ2LWJpbmQ6aGFuZGxlU2VsZWN0Q2hhbmdlLnN5bmNcIjpcImhhbmRsZVNlbGVjdENoYW5nZVwifSxcIlNlbGVjdDJcIjp7XCJ2LWJpbmQ6aXRlbXMuc3luY1wiOlwiaXRlbXNcIixcInYtYmluZDpjaGVja2VkVmFsdWUuc3luY1wiOlwiY2hlY2tlZFZhbHVlMlwiLFwidi1iaW5kOmFjdGl2ZUNvbG9yLnN5bmNcIjpcImFjdGl2ZUNvbG9yXCIsXCJjb21wb25lbnRJZFwiOlwiY29sb3JcIixcInYtYmluZDpoYW5kbGVTZWxlY3RDaGFuZ2Uuc3luY1wiOlwiaGFuZGxlU2VsZWN0Q2hhbmdlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFNlbGVjdDE6IFNlbGVjdDEsXG4gICAgICBTZWxlY3QyOiBTZWxlY3QxLFxuICAgICAgLy8gY291bnRlcjE6IENvdW50ZXIsXG4gICAgICAvLyBjb3VudGVyMjogQ291bnRlcixcbiAgICAgIC8vIGxpc3Q6IExpc3QsXG4gICAgICAvLyBncm91cDogR3JvdXAsXG4gICAgICAvLyB0b2FzdDogVG9hc3RcbiAgICB9XG5cbiAgICAvL21peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICBuYW1lOiAn6YCJ6aG55LiAJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgdmFsdWU6ICcyJyxcbiAgICAgICAgICBuYW1lOiAn6YCJ6aG55LqMJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG5cbiAgICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgYmFzZTogJzEnLFxuICAgICAgICBjb2xvcjogJzEnXG4gICAgICB9LFxuXG4gICAgICBhY3RpdmVDb2xvcjogJyM0YjAnXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cbiAgICBoYW5kbGVTZWxlY3RDaGFuZ2UoeyBjb21wb25lbnRJZCwgdmFsdWUgfSkge1xuICAgICAgICB0aGlzLmNoZWNrZWRbY29tcG9uZW50SWRdPXZhbHVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19