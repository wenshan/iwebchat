'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-button/index.js');

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

var Btn = function (_wepy$page) {
  _inherits(Btn, _wepy$page);

  function Btn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Btn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Btn.__proto__ || Object.getPrototypeOf(Btn)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "Button 按钮"
    }, _this.$repeat = {}, _this.$props = { "btn2": { "type": "primary" }, "btn3": { "type": "danger" }, "btn4": { "type": "warn" }, "btn5": { "type": "primary", "size": "large" }, "btn6": { "type": "warn", "size": "large" }, "btn7": { "type": "danger", "size": "large" }, "btn8": { "size": "small" }, "btn9": { "type": "primary", "size": "small" }, "btn10": { "type": "primary", "size": "mini" }, "btn11": { "xmlns:v-bind": "", "v-bind:loading.once": "loading", "type": "primary", "size": "mini" }, "btn12": { "v-bind:disabled.sync": "disabled", "type": "primary", "size": "mini" } }, _this.$events = {}, _this.components = {
      btn1: _index2.default,
      btn2: _index2.default,
      btn3: _index2.default,
      btn4: _index2.default,
      btn5: _index2.default,
      btn6: _index2.default,
      btn7: _index2.default,
      btn8: _index2.default,
      btn9: _index2.default,
      btn10: _index2.default,
      btn11: _index2.default,
      btn12: _index2.default
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

  _createClass(Btn, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this);
    }
  }]);

  return Btn;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Btn , 'pages/btn/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkJ0biIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJidG4xIiwiYnRuMiIsImJ0bjMiLCJidG40IiwiYnRuNSIsImJ0bjYiLCJidG43IiwiYnRuOCIsImJ0bjkiLCJidG4xMCIsImJ0bjExIiwiYnRuMTIiLCJkYXRhIiwibG9hZGluZyIsImRpc2FibGVkIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztBQUNrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxRQUFPLFNBQVIsRUFBUixFQUEyQixRQUFPLEVBQUMsUUFBTyxRQUFSLEVBQWxDLEVBQW9ELFFBQU8sRUFBQyxRQUFPLE1BQVIsRUFBM0QsRUFBMkUsUUFBTyxFQUFDLFFBQU8sU0FBUixFQUFrQixRQUFPLE9BQXpCLEVBQWxGLEVBQW9ILFFBQU8sRUFBQyxRQUFPLE1BQVIsRUFBZSxRQUFPLE9BQXRCLEVBQTNILEVBQTBKLFFBQU8sRUFBQyxRQUFPLFFBQVIsRUFBaUIsUUFBTyxPQUF4QixFQUFqSyxFQUFrTSxRQUFPLEVBQUMsUUFBTyxPQUFSLEVBQXpNLEVBQTBOLFFBQU8sRUFBQyxRQUFPLFNBQVIsRUFBa0IsUUFBTyxPQUF6QixFQUFqTyxFQUFtUSxTQUFRLEVBQUMsUUFBTyxTQUFSLEVBQWtCLFFBQU8sTUFBekIsRUFBM1EsRUFBNFMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixTQUF6QyxFQUFtRCxRQUFPLFNBQTFELEVBQW9FLFFBQU8sTUFBM0UsRUFBcFQsRUFBdVksU0FBUSxFQUFDLHdCQUF1QixVQUF4QixFQUFtQyxRQUFPLFNBQTFDLEVBQW9ELFFBQU8sTUFBM0QsRUFBL1ksRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsMkJBRFE7QUFFUkMsMkJBRlE7QUFHUkMsMkJBSFE7QUFJUkMsMkJBSlE7QUFLUkMsMkJBTFE7QUFNUkMsMkJBTlE7QUFPUkMsMkJBUFE7QUFRUkMsMkJBUlE7QUFTUkMsMkJBVFE7QUFVUkMsNEJBVlE7QUFXUkMsNEJBWFE7QUFZUkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRjs7QUFwQlUsSyxRQXNCVkMsSSxHQUFPO0FBQ0xDLGVBQVEsSUFESDtBQUVMQyxnQkFBUztBQUZKLEssUUFLUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFHVkMsTSxHQUFTLEU7Ozs7OzZCQUdBO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7Ozs7RUE3QzhCLGVBQUtDLEk7O2tCQUFqQjNCLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0J1xuICBpbXBvcnQgQnRuMSBmcm9tICdAL2NvbXBvbmVudHMvd2VweS1idXR0b24vaW5kZXgnIC8vIGFsaWFzIGV4YW1wbGVcbiAgLy8gaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcicgLy8gYWxpYXMgZXhhbXBsZVxuICAvLyBpbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCdcbiAgLy8gaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICAvLyBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ0biBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCJCdXR0b24g5oyJ6ZKuXCJcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImJ0bjJcIjp7XCJ0eXBlXCI6XCJwcmltYXJ5XCJ9LFwiYnRuM1wiOntcInR5cGVcIjpcImRhbmdlclwifSxcImJ0bjRcIjp7XCJ0eXBlXCI6XCJ3YXJuXCJ9LFwiYnRuNVwiOntcInR5cGVcIjpcInByaW1hcnlcIixcInNpemVcIjpcImxhcmdlXCJ9LFwiYnRuNlwiOntcInR5cGVcIjpcIndhcm5cIixcInNpemVcIjpcImxhcmdlXCJ9LFwiYnRuN1wiOntcInR5cGVcIjpcImRhbmdlclwiLFwic2l6ZVwiOlwibGFyZ2VcIn0sXCJidG44XCI6e1wic2l6ZVwiOlwic21hbGxcIn0sXCJidG45XCI6e1widHlwZVwiOlwicHJpbWFyeVwiLFwic2l6ZVwiOlwic21hbGxcIn0sXCJidG4xMFwiOntcInR5cGVcIjpcInByaW1hcnlcIixcInNpemVcIjpcIm1pbmlcIn0sXCJidG4xMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bG9hZGluZy5vbmNlXCI6XCJsb2FkaW5nXCIsXCJ0eXBlXCI6XCJwcmltYXJ5XCIsXCJzaXplXCI6XCJtaW5pXCJ9LFwiYnRuMTJcIjp7XCJ2LWJpbmQ6ZGlzYWJsZWQuc3luY1wiOlwiZGlzYWJsZWRcIixcInR5cGVcIjpcInByaW1hcnlcIixcInNpemVcIjpcIm1pbmlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgYnRuMTogQnRuMSxcbiAgICAgIGJ0bjI6IEJ0bjEsXG4gICAgICBidG4zOiBCdG4xLFxuICAgICAgYnRuNDogQnRuMSxcbiAgICAgIGJ0bjU6IEJ0bjEsXG4gICAgICBidG42OiBCdG4xLFxuICAgICAgYnRuNzogQnRuMSxcbiAgICAgIGJ0bjg6IEJ0bjEsXG4gICAgICBidG45OiBCdG4xLFxuICAgICAgYnRuMTA6IEJ0bjEsXG4gICAgICBidG4xMTogQnRuMSxcbiAgICAgIGJ0bjEyOiBCdG4xXG4gICAgICAvLyBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIC8vIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgLy8gbGlzdDogTGlzdCxcbiAgICAgIC8vIGdyb3VwOiBHcm91cCxcbiAgICAgIC8vIHRvYXN0OiBUb2FzdFxuICAgIH1cblxuICAgIC8vbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICBsb2FkaW5nOnRydWUsXG4gICAgICBkaXNhYmxlZDp0cnVlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICB9XG4gIH1cbiJdfQ==