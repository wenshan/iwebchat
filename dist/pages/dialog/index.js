'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-dialog/index.js');

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

var Dialog = function (_wepy$page) {
  _inherits(Dialog, _wepy$page);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "Dialog 弹出框"
    }, _this.components = {
      Dialog1: _index2.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    }, _this.data = {
      checked: false
    }, _this.computed = {}, _this.methods = {
      toggleBaseDialog: function toggleBaseDialog() {
        this.$invoke('Dialog1', 'showDialog', {
          title: '弹窗',
          content: '这是一个模态弹窗',
          showCancel: true
        });
      },
      toggleWithoutTitleDialog: function toggleWithoutTitleDialog() {
        this.$invoke('Dialog1', 'showDialog', {
          content: '这是一个模态弹窗'
        });
      },
      toggleButtonDialog: function toggleButtonDialog() {
        this.$invoke('Dialog1', 'showDialog', {
          title: '弹窗',
          content: '这是一个模态弹窗',
          buttons: [{
            text: '现金支付',
            color: 'red',
            type: 'cash'
          }, {
            text: '微信支付',
            color: '#3CC51F',
            type: 'wechat'
          }, {
            text: '取消',
            type: 'cancel'
          }]
        });
      },
      toggleVerticalDialog: function toggleVerticalDialog() {
        this.$invoke('Dialog1', 'showDialog', {
          title: '弹窗',
          content: '这是一个模态弹窗',
          buttonsShowVertical: true,
          buttons: [{
            text: '现金支付',
            color: 'red',
            type: 'cash'
          }, {
            text: '微信支付',
            color: '#3CC51F',
            type: 'wechat'
          }, {
            text: '取消',
            type: 'cancel'
          }]
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dialog, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Dialog;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Dialog , 'pages/dialog/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkRpYWxvZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiRGlhbG9nMSIsImRhdGEiLCJjaGVja2VkIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9nZ2xlQmFzZURpYWxvZyIsIiRpbnZva2UiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwidG9nZ2xlV2l0aG91dFRpdGxlRGlhbG9nIiwidG9nZ2xlQnV0dG9uRGlhbG9nIiwiYnV0dG9ucyIsInRleHQiLCJjb2xvciIsInR5cGUiLCJ0b2dnbGVWZXJ0aWNhbERpYWxvZyIsImJ1dHRvbnNTaG93VmVydGljYWwiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7OztBQURBOzs7QUFDcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRjs7QUFUYSxLLFFBV2JDLEksR0FBTztBQUNMQyxlQUFTO0FBREosSyxRQUlQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsc0JBRFEsOEJBQ1c7QUFDakIsYUFBS0MsT0FBTCxDQUFhLFNBQWIsRUFBdUIsWUFBdkIsRUFBb0M7QUFDbENDLGlCQUFPLElBRDJCO0FBRWxDQyxtQkFBUyxVQUZ5QjtBQUdsQ0Msc0JBQVk7QUFIc0IsU0FBcEM7QUFLRCxPQVBPO0FBU1JDLDhCQVRRLHNDQVNtQjtBQUN6QixhQUFLSixPQUFMLENBQWEsU0FBYixFQUF1QixZQUF2QixFQUFvQztBQUNsQ0UsbUJBQVM7QUFEeUIsU0FBcEM7QUFHRCxPQWJPO0FBZVJHLHdCQWZRLGdDQWVhO0FBQ3JCLGFBQUtMLE9BQUwsQ0FBYSxTQUFiLEVBQXVCLFlBQXZCLEVBQW9DO0FBQ2hDQyxpQkFBTyxJQUR5QjtBQUVoQ0MsbUJBQVMsVUFGdUI7QUFHaENJLG1CQUFTLENBQUM7QUFDUkMsa0JBQU0sTUFERTtBQUVSQyxtQkFBTyxLQUZDO0FBR1JDLGtCQUFNO0FBSEUsV0FBRCxFQUlOO0FBQ0RGLGtCQUFNLE1BREw7QUFFREMsbUJBQU8sU0FGTjtBQUdEQyxrQkFBTTtBQUhMLFdBSk0sRUFRTjtBQUNERixrQkFBTSxJQURMO0FBRURFLGtCQUFNO0FBRkwsV0FSTTtBQUh1QixTQUFwQztBQWdCQyxPQWhDTztBQWtDUkMsMEJBbENRLGtDQWtDZTtBQUN2QixhQUFLVixPQUFMLENBQWEsU0FBYixFQUF1QixZQUF2QixFQUFvQztBQUNoQ0MsaUJBQU8sSUFEeUI7QUFFaENDLG1CQUFTLFVBRnVCO0FBR2hDUywrQkFBcUIsSUFIVztBQUloQ0wsbUJBQVMsQ0FBQztBQUNSQyxrQkFBTSxNQURFO0FBRVJDLG1CQUFPLEtBRkM7QUFHUkMsa0JBQU07QUFIRSxXQUFELEVBSU47QUFDREYsa0JBQU0sTUFETDtBQUVEQyxtQkFBTyxTQUZOO0FBR0RDLGtCQUFNO0FBSEwsV0FKTSxFQVFOO0FBQ0RGLGtCQUFNLElBREw7QUFFREUsa0JBQU07QUFGTCxXQVJNO0FBSnVCLFNBQXBDO0FBaUJDO0FBcERPLEssUUF1RFZHLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBakZpQyxlQUFLQyxJOztrQkFBcEJ2QixNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIC8vIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCdcbiAgaW1wb3J0IERpYWxvZzEgZnJvbSAnQC9jb21wb25lbnRzL3dlcHktZGlhbG9nL2luZGV4JyAvLyBhbGlhcyBleGFtcGxlXG4gIC8vIGltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInIC8vIGFsaWFzIGV4YW1wbGVcbiAgLy8gaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnXG4gIC8vIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgLy8gaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwiRGlhbG9nIOW8ueWHuuahhlwiXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBEaWFsb2cxOiBEaWFsb2cxLFxuICAgICAgLy8gY291bnRlcjE6IENvdW50ZXIsXG4gICAgICAvLyBjb3VudGVyMjogQ291bnRlcixcbiAgICAgIC8vIGxpc3Q6IExpc3QsXG4gICAgICAvLyBncm91cDogR3JvdXAsXG4gICAgICAvLyB0b2FzdDogVG9hc3RcbiAgICB9XG5cbiAgICAvL21peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9nZ2xlQmFzZURpYWxvZygpIHtcbiAgICAgICAgdGhpcy4kaW52b2tlKCdEaWFsb2cxJywnc2hvd0RpYWxvZycse1xuICAgICAgICAgIHRpdGxlOiAn5by556qXJyxcbiAgICAgICAgICBjb250ZW50OiAn6L+Z5piv5LiA5Liq5qih5oCB5by556qXJyxcbiAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgdG9nZ2xlV2l0aG91dFRpdGxlRGlhbG9nKCkge1xuICAgICAgICB0aGlzLiRpbnZva2UoJ0RpYWxvZzEnLCdzaG93RGlhbG9nJyx7XG4gICAgICAgICAgY29udGVudDogJ+i/meaYr+S4gOS4quaooeaAgeW8ueeqlydcbiAgICAgICAgfSlcbiAgICAgIH0sXG5cbiAgICAgIHRvZ2dsZUJ1dHRvbkRpYWxvZygpIHtcbiAgICAgIHRoaXMuJGludm9rZSgnRGlhbG9nMScsJ3Nob3dEaWFsb2cnLHtcbiAgICAgICAgICB0aXRsZTogJ+W8ueeqlycsXG4gICAgICAgICAgY29udGVudDogJ+i/meaYr+S4gOS4quaooeaAgeW8ueeqlycsXG4gICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgIHRleHQ6ICfnjrDph5HmlK/ku5gnLFxuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgdHlwZTogJ2Nhc2gnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdGV4dDogJ+W+ruS/oeaUr+S7mCcsXG4gICAgICAgICAgICBjb2xvcjogJyMzQ0M1MUYnLFxuICAgICAgICAgICAgdHlwZTogJ3dlY2hhdCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0ZXh0OiAn5Y+W5raIJyxcbiAgICAgICAgICAgIHR5cGU6ICdjYW5jZWwnXG4gICAgICAgICAgfV1cbiAgICAgICAgfSlcbiAgICAgIH0sXG5cbiAgICAgIHRvZ2dsZVZlcnRpY2FsRGlhbG9nKCkge1xuICAgICAgdGhpcy4kaW52b2tlKCdEaWFsb2cxJywnc2hvd0RpYWxvZycse1xuICAgICAgICAgIHRpdGxlOiAn5by556qXJyxcbiAgICAgICAgICBjb250ZW50OiAn6L+Z5piv5LiA5Liq5qih5oCB5by556qXJyxcbiAgICAgICAgICBidXR0b25zU2hvd1ZlcnRpY2FsOiB0cnVlLFxuICAgICAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgICAgICB0ZXh0OiAn546w6YeR5pSv5LuYJyxcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgIHR5cGU6ICdjYXNoJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRleHQ6ICflvq7kv6HmlK/ku5gnLFxuICAgICAgICAgICAgY29sb3I6ICcjM0NDNTFGJyxcbiAgICAgICAgICAgIHR5cGU6ICd3ZWNoYXQnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdGV4dDogJ+WPlua2iCcsXG4gICAgICAgICAgICB0eXBlOiAnY2FuY2VsJ1xuICAgICAgICAgIH1dXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==