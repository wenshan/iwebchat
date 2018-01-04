'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-toast/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToastEx = function (_wepy$page) {
    _inherits(ToastEx, _wepy$page);

    function ToastEx() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ToastEx);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToastEx.__proto__ || Object.getPrototypeOf(ToastEx)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: 'Toast 轻提示'
        }, _this.components = {
            Toast: _index2.default
        }, _this.data = {}, _this.methods = {
            toast: function toast() {
                var pages = getCurrentPages();

                var promise = this.$invoke('Toast', 'show', {
                    title: '自定义标题',
                    img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
                });

                promise.then(function (d) {
                    console.log('wepy-toast done');
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return ToastEx;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(ToastEx , 'pages/toast/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRvYXN0RXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIlRvYXN0IiwiZGF0YSIsIm1ldGhvZHMiLCJ0b2FzdCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFaUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLFUsR0FBYTtBQUNUQztBQURTLFMsUUFJYkMsSSxHQUFPLEUsUUFFUEMsTyxHQUFVO0FBQ05DLGlCQURNLG1CQUNHO0FBQ0wsb0JBQUlDLFFBQVFDLGlCQUFaOztBQUVBLG9CQUFJQyxVQUFVLEtBQUtDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE1BQXRCLEVBQThCO0FBQ3hDQywyQkFBTyxPQURpQztBQUV4Q0MseUJBQUs7QUFGbUMsaUJBQTlCLENBQWQ7O0FBS0FILHdCQUFRSSxJQUFSLENBQWEsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BCQyw0QkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0MsaUJBRkQ7QUFHSDtBQVpLLFMsUUFlVkMsTSxHQUFTLEU7Ozs7RUF6QndCLGVBQUtDLEk7O2tCQUFyQm5CLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBUb2FzdCBmcm9tICdAL2NvbXBvbmVudHMvd2VweS10b2FzdC9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3RFeCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnVG9hc3Qg6L275o+Q56S6J1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgICBUb2FzdDogVG9hc3RcbiAgICB9XG5cbiAgICBkYXRhID0ge31cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIHRvYXN0ICgpIHtcbiAgICAgICAgICAgIGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuXG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgnVG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXG4gICAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJ1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2VweS10b2FzdCBkb25lJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG59XG4iXX0=