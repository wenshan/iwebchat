'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-steps/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Steps = function (_wepy$page) {
  _inherits(Steps, _wepy$page);

  function Steps() {
    _classCallCheck(this, Steps);

    var _this = _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this));

    _this.config = {
      navigationBarTitleText: "Steps 步骤条"
    };
    _this.$repeat = {};
    _this.$props = { "Steps1": { "type": "horizon", "xmlns:v-bind": "", "v-bind:steps.sync": "steps" }, "Steps2": { "type": "horizon", "v-bind:steps.sync": "steps2" }, "Steps3": { "type": "horizon", "v-bind:steps.sync": "steps3" }, "Steps4": { "type": "horizon", "v-bind:steps.sync": "steps3", "v-bind:hasDesc.sync": "true" }, "Steps5": { "type": "vertical", "v-bind:steps.sync": "steps", "v-bind:hasDesc.sync": "true" }, "Steps6": { "type": "vertical", "v-bind:steps.sync": "steps" }, "Steps7": { "type": "vertical", "v-bind:steps.sync": "steps", "className": "my-class" } };
    _this.$events = {};
    _this.components = {
      Steps1: _index2.default,
      Steps2: _index2.default,
      Steps3: _index2.default,
      Steps4: _index2.default,
      Steps5: _index2.default,
      Steps6: _index2.default,
      Steps7: _index2.default,
      Steps8: _index2.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    };
    _this.data = {
      steps: [{
        current: true,
        done: true,
        text: '步骤一',
        desc: '10.01'
      }, {
        done: false,
        current: false,
        text: '步骤二',
        desc: '10.02'
      }, {
        done: false,
        current: false,
        text: '步骤三'
      }],
      steps2: [{
        current: false,
        done: true,
        text: '步骤一',
        desc: '10.01'
      }, {
        done: true,
        current: true,
        text: '步骤二',
        desc: '10.02'
      }, {
        done: false,
        current: false,
        text: '步骤三',
        desc: '10.03'
      }],
      steps3: [{
        current: false,
        done: true,
        text: '步骤一',
        desc: '10.01'
      }, {
        done: true,
        current: false,
        text: '步骤二',
        desc: '10.02'
      }, {
        done: true,
        current: true,
        text: '步骤三',
        desc: '10.03'
      }]
    };
    _this.computed = {};
    _this.methods = {};
    _this.events = {};
    return _this;
  }

  _createClass(Steps, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Steps;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Steps , 'pages/steps/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0ZXBzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlN0ZXBzMSIsIlN0ZXBzMiIsIlN0ZXBzMyIsIlN0ZXBzNCIsIlN0ZXBzNSIsIlN0ZXBzNiIsIlN0ZXBzNyIsIlN0ZXBzOCIsImRhdGEiLCJzdGVwcyIsImN1cnJlbnQiLCJkb25lIiwidGV4dCIsImRlc2MiLCJzdGVwczIiLCJzdGVwczMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7OztBQUNuQixtQkFBYTtBQUFBOztBQUFBOztBQUFBLFVBR2JDLE1BSGEsR0FHSjtBQUNQQyw4QkFBd0I7QUFEakIsS0FISTtBQUFBLFVBTWRDLE9BTmMsR0FNSixFQU5JO0FBQUEsVUFPakJDLE1BUGlCLEdBT1IsRUFBQyxVQUFTLEVBQUMsUUFBTyxTQUFSLEVBQWtCLGdCQUFlLEVBQWpDLEVBQW9DLHFCQUFvQixPQUF4RCxFQUFWLEVBQTJFLFVBQVMsRUFBQyxRQUFPLFNBQVIsRUFBa0IscUJBQW9CLFFBQXRDLEVBQXBGLEVBQW9JLFVBQVMsRUFBQyxRQUFPLFNBQVIsRUFBa0IscUJBQW9CLFFBQXRDLEVBQTdJLEVBQTZMLFVBQVMsRUFBQyxRQUFPLFNBQVIsRUFBa0IscUJBQW9CLFFBQXRDLEVBQStDLHVCQUFzQixNQUFyRSxFQUF0TSxFQUFtUixVQUFTLEVBQUMsUUFBTyxVQUFSLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyx1QkFBc0IsTUFBckUsRUFBNVIsRUFBeVcsVUFBUyxFQUFDLFFBQU8sVUFBUixFQUFtQixxQkFBb0IsT0FBdkMsRUFBbFgsRUFBa2EsVUFBUyxFQUFDLFFBQU8sVUFBUixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0MsYUFBWSxVQUEzRCxFQUEzYSxFQVBRO0FBQUEsVUFRakJDLE9BUmlCLEdBUVAsRUFSTztBQUFBLFVBU2hCQyxVQVRnQixHQVNIO0FBQ1JDLDZCQURRO0FBRVJDLDZCQUZRO0FBR1JDLDZCQUhRO0FBSVJDLDZCQUpRO0FBS1JDLDZCQUxRO0FBTVJDLDZCQU5RO0FBT1JDLDZCQVBRO0FBUVJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Y7O0FBaEJVLEtBVEc7QUFBQSxVQTJCYkMsSUEzQmEsR0EyQk47QUFDTEMsYUFBTyxDQUNMO0FBQ0VDLGlCQUFTLElBRFg7QUFFRUMsY0FBTSxJQUZSO0FBR0VDLGNBQU0sS0FIUjtBQUlFQyxjQUFNO0FBSlIsT0FESyxFQU9MO0FBQ0VGLGNBQU0sS0FEUjtBQUVFRCxpQkFBUyxLQUZYO0FBR0VFLGNBQU0sS0FIUjtBQUlFQyxjQUFNO0FBSlIsT0FQSyxFQWFMO0FBQ0VGLGNBQU0sS0FEUjtBQUVFRCxpQkFBUyxLQUZYO0FBR0VFLGNBQU07QUFIUixPQWJLLENBREY7QUFvQkxFLGNBQVEsQ0FDTjtBQUNFSixpQkFBUyxLQURYO0FBRUVDLGNBQU0sSUFGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsY0FBTTtBQUpSLE9BRE0sRUFPTjtBQUNFRixjQUFNLElBRFI7QUFFRUQsaUJBQVMsSUFGWDtBQUdFRSxjQUFNLEtBSFI7QUFJRUMsY0FBTTtBQUpSLE9BUE0sRUFhTjtBQUNFRixjQUFNLEtBRFI7QUFFRUQsaUJBQVMsS0FGWDtBQUdFRSxjQUFNLEtBSFI7QUFJRUMsY0FBTTtBQUpSLE9BYk0sQ0FwQkg7QUF3Q0xFLGNBQVEsQ0FDTjtBQUNFTCxpQkFBUyxLQURYO0FBRUVDLGNBQU0sSUFGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsY0FBTTtBQUpSLE9BRE0sRUFPTjtBQUNFRixjQUFNLElBRFI7QUFFRUQsaUJBQVMsS0FGWDtBQUdFRSxjQUFNLEtBSFI7QUFJRUMsY0FBTTtBQUpSLE9BUE0sRUFhTjtBQUNFRixjQUFNLElBRFI7QUFFRUQsaUJBQVMsSUFGWDtBQUdFRSxjQUFNLEtBSFI7QUFJRUMsY0FBTTtBQUpSLE9BYk07QUF4Q0gsS0EzQk07QUFBQSxVQXlGYkcsUUF6RmEsR0F5RkYsRUF6RkU7QUFBQSxVQTRGYkMsT0E1RmEsR0E0RkgsRUE1Rkc7QUFBQSxVQThGYkMsTUE5RmEsR0E4RkosRUE5Rkk7QUFBQTtBQUVaOzs7OzZCQStGUSxDQUVSOzs7O0VBcEdnQyxlQUFLQyxJOztrQkFBbkIxQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgU3RlcHMxIGZyb20gJ0AvY29tcG9uZW50cy93ZXB5LXN0ZXBzL2luZGV4J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGVwcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwiU3RlcHMg5q2l6aqk5p2hXCJcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlN0ZXBzMVwiOntcInR5cGVcIjpcImhvcml6b25cIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3RlcHMuc3luY1wiOlwic3RlcHNcIn0sXCJTdGVwczJcIjp7XCJ0eXBlXCI6XCJob3Jpem9uXCIsXCJ2LWJpbmQ6c3RlcHMuc3luY1wiOlwic3RlcHMyXCJ9LFwiU3RlcHMzXCI6e1widHlwZVwiOlwiaG9yaXpvblwiLFwidi1iaW5kOnN0ZXBzLnN5bmNcIjpcInN0ZXBzM1wifSxcIlN0ZXBzNFwiOntcInR5cGVcIjpcImhvcml6b25cIixcInYtYmluZDpzdGVwcy5zeW5jXCI6XCJzdGVwczNcIixcInYtYmluZDpoYXNEZXNjLnN5bmNcIjpcInRydWVcIn0sXCJTdGVwczVcIjp7XCJ0eXBlXCI6XCJ2ZXJ0aWNhbFwiLFwidi1iaW5kOnN0ZXBzLnN5bmNcIjpcInN0ZXBzXCIsXCJ2LWJpbmQ6aGFzRGVzYy5zeW5jXCI6XCJ0cnVlXCJ9LFwiU3RlcHM2XCI6e1widHlwZVwiOlwidmVydGljYWxcIixcInYtYmluZDpzdGVwcy5zeW5jXCI6XCJzdGVwc1wifSxcIlN0ZXBzN1wiOntcInR5cGVcIjpcInZlcnRpY2FsXCIsXCJ2LWJpbmQ6c3RlcHMuc3luY1wiOlwic3RlcHNcIixcImNsYXNzTmFtZVwiOlwibXktY2xhc3NcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU3RlcHMxOiBTdGVwczEsXG4gICAgICBTdGVwczI6IFN0ZXBzMSxcbiAgICAgIFN0ZXBzMzogU3RlcHMxLFxuICAgICAgU3RlcHM0OiBTdGVwczEsXG4gICAgICBTdGVwczU6IFN0ZXBzMSxcbiAgICAgIFN0ZXBzNjogU3RlcHMxLFxuICAgICAgU3RlcHM3OiBTdGVwczEsXG4gICAgICBTdGVwczg6IFN0ZXBzMVxuICAgICAgLy8gY291bnRlcjE6IENvdW50ZXIsXG4gICAgICAvLyBjb3VudGVyMjogQ291bnRlcixcbiAgICAgIC8vIGxpc3Q6IExpc3QsXG4gICAgICAvLyBncm91cDogR3JvdXAsXG4gICAgICAvLyB0b2FzdDogVG9hc3RcbiAgICB9XG5cbiAgICAvL21peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgc3RlcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGN1cnJlbnQ6IHRydWUsXG4gICAgICAgICAgZG9uZTogdHJ1ZSxcbiAgICAgICAgICB0ZXh0OiAn5q2l6aqk5LiAJyxcbiAgICAgICAgICBkZXNjOiAnMTAuMDEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgICB0ZXh0OiAn5q2l6aqk5LqMJyxcbiAgICAgICAgICBkZXNjOiAnMTAuMDInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgICB0ZXh0OiAn5q2l6aqk5LiJJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RlcHMyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgIHRleHQ6ICfmraXpqqTkuIAnLFxuICAgICAgICAgIGRlc2M6ICcxMC4wMSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgICAgY3VycmVudDogdHJ1ZSxcbiAgICAgICAgICB0ZXh0OiAn5q2l6aqk5LqMJyxcbiAgICAgICAgICBkZXNjOiAnMTAuMDInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgICB0ZXh0OiAn5q2l6aqk5LiJJyxcbiAgICAgICAgICBkZXNjOiAnMTAuMDMnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGVwczM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgICAgdGV4dDogJ+atpemqpOS4gCcsXG4gICAgICAgICAgZGVzYzogJzEwLjAxJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZG9uZTogdHJ1ZSxcbiAgICAgICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgICB0ZXh0OiAn5q2l6aqk5LqMJyxcbiAgICAgICAgICBkZXNjOiAnMTAuMDInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgIGN1cnJlbnQ6IHRydWUsXG4gICAgICAgICAgdGV4dDogJ+atpemqpOS4iScsXG4gICAgICAgICAgZGVzYzogJzEwLjAzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcblxuICAgIH1cbiAgfVxuIl19