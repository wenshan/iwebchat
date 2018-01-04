'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-switch/index.js');

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

var Switch = function (_wepy$page) {
  _inherits(Switch, _wepy$page);

  function Switch() {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this));

    _this.config = {
      navigationBarTitleText: "Switch 开关"
    };
    _this.$repeat = {};
    _this.$props = { "Switch1": { "xmlns:v-bind": "", "v-bind:checked.sync": "syncChecked", "componentId": "sync", "v-bind:handleSwitchChange.sync": "handleSwitchChange" }, "Switch2": { "v-bind:checked.sync": "asyncChecked", "componentId": "async", "v-bind:loading.sync": "parse.getChecked(async,'loading')", "v-bind:handleSwitchChange.sync": "handleSwitchChange" }, "Switch4": { "v-bind:checked.once": "true", "v-bind:disabled.once": "true", "componentId": "switch4" } };
    _this.$events = {};
    _this.components = {
      Switch1: _index2.default,
      Switch2: _index2.default,
      Switch3: _index2.default,
      Switch4: _index2.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    };
    _this.data = {
      sync: {
        checked: true
      },
      async: {
        checked: true,
        loading: false
      }
    };
    _this.computed = {
      syncChecked: function syncChecked() {
        return this.sync.checked;
      },
      asyncChecked: function asyncChecked() {
        return this.async.checked;
      }
    };
    _this.methods = {};
    _this.events = {};

    _this.handleSwitchChange = _this.handleSwitchChange.bind(_this);
    return _this;
  }

  _createClass(Switch, [{
    key: 'handleSwitchChange',
    value: function handleSwitchChange(e) {
      var _this2 = this;

      var componentId = e.componentId;
      var checked = e.checked;

      if (componentId == 'sync') {
        // 同步开关
        this[componentId].checked = checked;
      } else if (componentId == 'async') {
        // 异步开关
        this[componentId].loading = true;
        setTimeout(function () {
          _this2[componentId].loading = false;
          _this2[componentId].checked = checked;
          _this2.$apply();
        }, 500);
      }
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Switch;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Switch , 'pages/switch/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN3aXRjaCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTd2l0Y2gxIiwiU3dpdGNoMiIsIlN3aXRjaDMiLCJTd2l0Y2g0IiwiZGF0YSIsInN5bmMiLCJjaGVja2VkIiwiYXN5bmMiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJzeW5jQ2hlY2tlZCIsImFzeW5jQ2hlY2tlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJoYW5kbGVTd2l0Y2hDaGFuZ2UiLCJiaW5kIiwiZSIsImNvbXBvbmVudElkIiwic2V0VGltZW91dCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztBQUNxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE07OztBQUNuQixvQkFBYTtBQUFBOztBQUFBOztBQUFBLFVBSWJDLE1BSmEsR0FJSjtBQUNQQyw4QkFBd0I7QUFEakIsS0FKSTtBQUFBLFVBT2RDLE9BUGMsR0FPSixFQVBJO0FBQUEsVUFRakJDLE1BUmlCLEdBUVIsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLGFBQXpDLEVBQXVELGVBQWMsTUFBckUsRUFBNEUsa0NBQWlDLG9CQUE3RyxFQUFYLEVBQThJLFdBQVUsRUFBQyx1QkFBc0IsY0FBdkIsRUFBc0MsZUFBYyxPQUFwRCxFQUE0RCx1QkFBc0IsbUNBQWxGLEVBQXNILGtDQUFpQyxvQkFBdkosRUFBeEosRUFBcVUsV0FBVSxFQUFDLHVCQUFzQixNQUF2QixFQUE4Qix3QkFBdUIsTUFBckQsRUFBNEQsZUFBYyxTQUExRSxFQUEvVSxFQVJRO0FBQUEsVUFTakJDLE9BVGlCLEdBU1AsRUFUTztBQUFBLFVBVWhCQyxVQVZnQixHQVVIO0FBQ1JDLDhCQURRO0FBRVJDLDhCQUZRO0FBR1JDLDhCQUhRO0FBSVJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Y7O0FBWlUsS0FWRztBQUFBLFVBd0JiQyxJQXhCYSxHQXdCTjtBQUNMQyxZQUFNO0FBQ0pDLGlCQUFTO0FBREwsT0FERDtBQUlMQyxhQUFPO0FBQ0xELGlCQUFTLElBREo7QUFFTEUsaUJBQVM7QUFGSjtBQUpGLEtBeEJNO0FBQUEsVUFrQ2JDLFFBbENhLEdBa0NGO0FBQ1RDLGlCQURTLHlCQUNJO0FBQ1gsZUFBTyxLQUFLTCxJQUFMLENBQVVDLE9BQWpCO0FBQ0QsT0FIUTtBQUlUSyxrQkFKUywwQkFJSztBQUNaLGVBQU8sS0FBS0osS0FBTCxDQUFXRCxPQUFsQjtBQUNEO0FBTlEsS0FsQ0U7QUFBQSxVQTJDYk0sT0EzQ2EsR0EyQ0gsRUEzQ0c7QUFBQSxVQStEYkMsTUEvRGEsR0ErREosRUEvREk7O0FBRVgsVUFBS0Msa0JBQUwsR0FBd0IsTUFBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLE9BQXhCO0FBRlc7QUFHWjs7Ozt1Q0EwQ2tCQyxDLEVBQUc7QUFBQTs7QUFDcEIsVUFBSUMsY0FBY0QsRUFBRUMsV0FBcEI7QUFDQSxVQUFJWCxVQUFVVSxFQUFFVixPQUFoQjs7QUFFQSxVQUFJVyxlQUFlLE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0UsYUFBS0EsV0FBTCxFQUFrQlgsT0FBbEIsR0FBMEJBLE9BQTFCO0FBQ0gsT0FIRCxNQUdPLElBQUlXLGVBQWUsT0FBbkIsRUFBNEI7QUFDakM7QUFDQSxhQUFLQSxXQUFMLEVBQWtCVCxPQUFsQixHQUEwQixJQUExQjtBQUNBVSxtQkFBVyxZQUFNO0FBQ2YsaUJBQUtELFdBQUwsRUFBa0JULE9BQWxCLEdBQTJCLEtBQTNCO0FBQ0EsaUJBQUtTLFdBQUwsRUFBa0JYLE9BQWxCLEdBQTJCQSxPQUEzQjtBQUNBLGlCQUFLYSxNQUFMO0FBQ0QsU0FKRCxFQUlHLEdBSkg7QUFLRDtBQUNELFdBQUtBLE1BQUw7QUFDRDs7OzZCQUlRLENBQ1I7Ozs7RUFwRWlDLGVBQUtDLEk7O2tCQUFwQjNCLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0J1xuICBpbXBvcnQgU3dpdGNoMSBmcm9tICdAL2NvbXBvbmVudHMvd2VweS1zd2l0Y2gvaW5kZXgnIC8vIGFsaWFzIGV4YW1wbGVcbiAgLy8gaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcicgLy8gYWxpYXMgZXhhbXBsZVxuICAvLyBpbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCdcbiAgLy8gaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICAvLyBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmhhbmRsZVN3aXRjaENoYW5nZT10aGlzLmhhbmRsZVN3aXRjaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIlN3aXRjaCDlvIDlhbNcIlxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiU3dpdGNoMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y2hlY2tlZC5zeW5jXCI6XCJzeW5jQ2hlY2tlZFwiLFwiY29tcG9uZW50SWRcIjpcInN5bmNcIixcInYtYmluZDpoYW5kbGVTd2l0Y2hDaGFuZ2Uuc3luY1wiOlwiaGFuZGxlU3dpdGNoQ2hhbmdlXCJ9LFwiU3dpdGNoMlwiOntcInYtYmluZDpjaGVja2VkLnN5bmNcIjpcImFzeW5jQ2hlY2tlZFwiLFwiY29tcG9uZW50SWRcIjpcImFzeW5jXCIsXCJ2LWJpbmQ6bG9hZGluZy5zeW5jXCI6XCJwYXJzZS5nZXRDaGVja2VkKGFzeW5jLCdsb2FkaW5nJylcIixcInYtYmluZDpoYW5kbGVTd2l0Y2hDaGFuZ2Uuc3luY1wiOlwiaGFuZGxlU3dpdGNoQ2hhbmdlXCJ9LFwiU3dpdGNoNFwiOntcInYtYmluZDpjaGVja2VkLm9uY2VcIjpcInRydWVcIixcInYtYmluZDpkaXNhYmxlZC5vbmNlXCI6XCJ0cnVlXCIsXCJjb21wb25lbnRJZFwiOlwic3dpdGNoNFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBTd2l0Y2gxOiBTd2l0Y2gxLFxuICAgICAgU3dpdGNoMjogU3dpdGNoMSxcbiAgICAgIFN3aXRjaDM6IFN3aXRjaDEsXG4gICAgICBTd2l0Y2g0OiBTd2l0Y2gxLFxuICAgICAgLy8gY291bnRlcjE6IENvdW50ZXIsXG4gICAgICAvLyBjb3VudGVyMjogQ291bnRlcixcbiAgICAgIC8vIGxpc3Q6IExpc3QsXG4gICAgICAvLyBncm91cDogR3JvdXAsXG4gICAgICAvLyB0b2FzdDogVG9hc3RcbiAgICB9XG5cbiAgICAvL21peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgc3luYzoge1xuICAgICAgICBjaGVja2VkOiB0cnVlXG4gICAgICB9LFxuICAgICAgYXN5bmM6IHtcbiAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBzeW5jQ2hlY2tlZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5zeW5jLmNoZWNrZWQ7XG4gICAgICB9LFxuICAgICAgYXN5bmNDaGVja2VkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmFzeW5jLmNoZWNrZWQ7XG4gICAgICB9LFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIGhhbmRsZVN3aXRjaENoYW5nZShlKSB7XG4gICAgICB2YXIgY29tcG9uZW50SWQgPSBlLmNvbXBvbmVudElkO1xuICAgICAgdmFyIGNoZWNrZWQgPSBlLmNoZWNrZWQ7XG5cbiAgICAgIGlmIChjb21wb25lbnRJZCA9PSAnc3luYycpIHtcbiAgICAgICAgLy8g5ZCM5q2l5byA5YWzXG4gICAgICAgICAgdGhpc1tjb21wb25lbnRJZF0uY2hlY2tlZD1jaGVja2VkO1xuICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRJZCA9PSAnYXN5bmMnKSB7XG4gICAgICAgIC8vIOW8guatpeW8gOWFs1xuICAgICAgICB0aGlzW2NvbXBvbmVudElkXS5sb2FkaW5nPXRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXNbY29tcG9uZW50SWRdLmxvYWRpbmc9IGZhbHNlO1xuICAgICAgICAgIHRoaXNbY29tcG9uZW50SWRdLmNoZWNrZWQ9IGNoZWNrZWQ7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=