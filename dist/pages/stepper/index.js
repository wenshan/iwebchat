'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-stepper/index.js');

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
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

    _this.config = {
      navigationBarTitleText: "Dialog 弹出框"
    };
    _this.$repeat = {};
    _this.$props = { "Stepper1": { "componentId": "stepper1", "xmlns:v-bind": "", "v-bind:step.sync": "stepper1", "v-bind:handleStepperChange.once": "handleStepperChange" }, "Stepper2": { "componentId": "stepper2", "v-bind:step.sync": "stepper2", "v-bind:handleStepperChange.once": "handleStepperChange" }, "Stepper3": { "componentId": "stepper3", "v-bind:step.sync": "stepper3", "size": "small", "v-bind:handleStepperChange.once": "handleStepperChange" } };
    _this.$events = {};
    _this.components = {
      Stepper1: _index2.default,
      Stepper2: _index2.default,
      Stepper3: _index2.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    };
    _this.data = {
      stepper1: {
        stepper: 10,
        min: 1,
        max: 20
      },
      stepper2: {
        stepper: 1,
        min: 1,
        max: 1
      },
      stepper3: {
        stepper: 10,
        min: 1,
        max: 20
      }
    };
    _this.computed = {};
    _this.methods = {};
    _this.events = {};

    _this.handleStepperChange = _this.handleStepperChange.bind(_this);
    return _this;
  }

  _createClass(Card, [{
    key: 'handleStepperChange',
    value: function handleStepperChange(e) {
      var componentId = e.componentId;
      var stepper = e.stepper;
      this[componentId].stepper = stepper;
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Card;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Card , 'pages/stepper/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3RlcHBlcjEiLCJTdGVwcGVyMiIsIlN0ZXBwZXIzIiwiZGF0YSIsInN0ZXBwZXIxIiwic3RlcHBlciIsIm1pbiIsIm1heCIsInN0ZXBwZXIyIiwic3RlcHBlcjMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJoYW5kbGVTdGVwcGVyQ2hhbmdlIiwiYmluZCIsImUiLCJjb21wb25lbnRJZCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztBQUN1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7OztBQUNuQixrQkFBYTtBQUFBOztBQUFBOztBQUFBLFVBSWJDLE1BSmEsR0FJSjtBQUNQQyw4QkFBd0I7QUFEakIsS0FKSTtBQUFBLFVBT2RDLE9BUGMsR0FPSixFQVBJO0FBQUEsVUFRakJDLE1BUmlCLEdBUVIsRUFBQyxZQUFXLEVBQUMsZUFBYyxVQUFmLEVBQTBCLGdCQUFlLEVBQXpDLEVBQTRDLG9CQUFtQixVQUEvRCxFQUEwRSxtQ0FBa0MscUJBQTVHLEVBQVosRUFBK0ksWUFBVyxFQUFDLGVBQWMsVUFBZixFQUEwQixvQkFBbUIsVUFBN0MsRUFBd0QsbUNBQWtDLHFCQUExRixFQUExSixFQUEyUSxZQUFXLEVBQUMsZUFBYyxVQUFmLEVBQTBCLG9CQUFtQixVQUE3QyxFQUF3RCxRQUFPLE9BQS9ELEVBQXVFLG1DQUFrQyxxQkFBekcsRUFBdFIsRUFSUTtBQUFBLFVBU2pCQyxPQVRpQixHQVNQLEVBVE87QUFBQSxVQVVoQkMsVUFWZ0IsR0FVSDtBQUNSQywrQkFEUTtBQUVSQywrQkFGUTtBQUdSQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdGOztBQVhVLEtBVkc7QUFBQSxVQXVCYkMsSUF2QmEsR0F1Qk47QUFDTEMsZ0JBQVU7QUFDUkMsaUJBQVMsRUFERDtBQUVSQyxhQUFLLENBRkc7QUFHUkMsYUFBSztBQUhHLE9BREw7QUFNTEMsZ0JBQVU7QUFDUkgsaUJBQVMsQ0FERDtBQUVSQyxhQUFLLENBRkc7QUFHUkMsYUFBSztBQUhHLE9BTkw7QUFXTEUsZ0JBQVU7QUFDUkosaUJBQVMsRUFERDtBQUVSQyxhQUFLLENBRkc7QUFHUkMsYUFBSztBQUhHO0FBWEwsS0F2Qk07QUFBQSxVQXlDYkcsUUF6Q2EsR0F5Q0YsRUF6Q0U7QUFBQSxVQTRDYkMsT0E1Q2EsR0E0Q0gsRUE1Q0c7QUFBQSxVQW9EYkMsTUFwRGEsR0FvREosRUFwREk7O0FBRVgsVUFBS0MsbUJBQUwsR0FBeUIsTUFBS0EsbUJBQUwsQ0FBeUJDLElBQXpCLE9BQXpCO0FBRlc7QUFHWjs7Ozt3Q0EyQ21CQyxDLEVBQUc7QUFDckIsVUFBSUMsY0FBY0QsRUFBRUMsV0FBcEI7QUFDQSxVQUFJWCxVQUFVVSxFQUFFVixPQUFoQjtBQUNBLFdBQUtXLFdBQUwsRUFBa0JYLE9BQWxCLEdBQTBCQSxPQUExQjtBQUNBLFdBQUtZLE1BQUw7QUFDRDs7OzZCQUlRLENBQ1I7Ozs7RUF6RCtCLGVBQUtDLEk7O2tCQUFsQnpCLEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0J1xuICBpbXBvcnQgU3RlcHBlcjEgZnJvbSAnQC9jb21wb25lbnRzL3dlcHktc3RlcHBlci9pbmRleCcgLy8gYWxpYXMgZXhhbXBsZVxuICAvLyBpbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJyAvLyBhbGlhcyBleGFtcGxlXG4gIC8vIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xuICAvLyBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIC8vIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmhhbmRsZVN0ZXBwZXJDaGFuZ2U9dGhpcy5oYW5kbGVTdGVwcGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwiRGlhbG9nIOW8ueWHuuahhlwiXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTdGVwcGVyMVwiOntcImNvbXBvbmVudElkXCI6XCJzdGVwcGVyMVwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzdGVwLnN5bmNcIjpcInN0ZXBwZXIxXCIsXCJ2LWJpbmQ6aGFuZGxlU3RlcHBlckNoYW5nZS5vbmNlXCI6XCJoYW5kbGVTdGVwcGVyQ2hhbmdlXCJ9LFwiU3RlcHBlcjJcIjp7XCJjb21wb25lbnRJZFwiOlwic3RlcHBlcjJcIixcInYtYmluZDpzdGVwLnN5bmNcIjpcInN0ZXBwZXIyXCIsXCJ2LWJpbmQ6aGFuZGxlU3RlcHBlckNoYW5nZS5vbmNlXCI6XCJoYW5kbGVTdGVwcGVyQ2hhbmdlXCJ9LFwiU3RlcHBlcjNcIjp7XCJjb21wb25lbnRJZFwiOlwic3RlcHBlcjNcIixcInYtYmluZDpzdGVwLnN5bmNcIjpcInN0ZXBwZXIzXCIsXCJzaXplXCI6XCJzbWFsbFwiLFwidi1iaW5kOmhhbmRsZVN0ZXBwZXJDaGFuZ2Uub25jZVwiOlwiaGFuZGxlU3RlcHBlckNoYW5nZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBTdGVwcGVyMTogU3RlcHBlcjEsXG4gICAgICBTdGVwcGVyMjogU3RlcHBlcjEsXG4gICAgICBTdGVwcGVyMzogU3RlcHBlcjEsXG4gICAgICAvLyBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIC8vIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgLy8gbGlzdDogTGlzdCxcbiAgICAgIC8vIGdyb3VwOiBHcm91cCxcbiAgICAgIC8vIHRvYXN0OiBUb2FzdFxuICAgIH1cblxuICAgIC8vbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICBzdGVwcGVyMToge1xuICAgICAgICBzdGVwcGVyOiAxMCxcbiAgICAgICAgbWluOiAxLFxuICAgICAgICBtYXg6IDIwXG4gICAgICB9LFxuICAgICAgc3RlcHBlcjI6IHtcbiAgICAgICAgc3RlcHBlcjogMSxcbiAgICAgICAgbWluOiAxLFxuICAgICAgICBtYXg6IDFcbiAgICAgIH0sXG4gICAgICBzdGVwcGVyMzoge1xuICAgICAgICBzdGVwcGVyOiAxMCxcbiAgICAgICAgbWluOiAxLFxuICAgICAgICBtYXg6IDIwXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG4gICAgaGFuZGxlU3RlcHBlckNoYW5nZShlKSB7XG4gICAgICB2YXIgY29tcG9uZW50SWQgPSBlLmNvbXBvbmVudElkO1xuICAgICAgdmFyIHN0ZXBwZXIgPSBlLnN0ZXBwZXI7XG4gICAgICB0aGlzW2NvbXBvbmVudElkXS5zdGVwcGVyPXN0ZXBwZXI7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19