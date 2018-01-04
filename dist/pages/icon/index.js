'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-icon/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconEx = function (_wepy$page) {
    _inherits(IconEx, _wepy$page);

    function IconEx() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, IconEx);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconEx.__proto__ || Object.getPrototypeOf(IconEx)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: 'Icon 图标'
        }, _this.data = {
            iconsBase: ['close', 'location', 'clock', 'gold-coin', 'chat', 'exchange', 'upgrade', 'edit', 'contact', 'passed', 'points', 'delete', 'records', 'logistics', 'check', 'checked', 'gift', 'like-o', 'like', 'qr', 'qr-invalid', 'shop', 'photograph', 'add', 'add2', 'add-o', 'photo', 'cart', 'arrow', 'search', 'clear', 'success', 'fail', 'wechat', 'alipay', 'password-view', 'wap-nav', 'password-not-view', 'wap-home', 'ecard-pay', 'balance-pay', 'peer-pay', 'credit-pay', 'debit-pay', 'other-pay', 'shopping-cart', 'browsing-history', 'goods-collect', 'shop-collect', 'receive-gift', 'send-gift', 'setting', 'coupon', 'free-postage', 'discount', 'birthday-privilege', 'member-day-privilege', 'balance-details', 'cash-back-record', 'points-mall', 'exchange-record', 'pending-payment', 'pending-orders', 'pending-deliver', 'pending-evaluate', 'cash-on-deliver', 'gift-card-pay', 'underway', 'point-gift', 'after-sale', 'edit-data', 'question', 'description', 'card', 'gift-card', 'completed', 'value-card', 'certificate', 'tosend', 'sign', 'home', 'phone', 'play', 'pause', 'stop', 'hot', 'new', 'new-arrival', 'hot-sale'],
            iconsSy: ['craftVip', 'heart', 'hearted', 'like', 'plus', 'arrow', 'address', 'address', 'agent', 'close', 'share', 'msg', 'door']
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return IconEx;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(IconEx , 'pages/icon/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkljb25FeCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaWNvbnNCYXNlIiwiaWNvbnNTeSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVRDLEksR0FBTztBQUNIQyx1QkFBVyxDQUNQLE9BRE8sRUFFUCxVQUZPLEVBR1AsT0FITyxFQUlQLFdBSk8sRUFLUCxNQUxPLEVBTVAsVUFOTyxFQU9QLFNBUE8sRUFRUCxNQVJPLEVBU1AsU0FUTyxFQVVQLFFBVk8sRUFXUCxRQVhPLEVBWVAsUUFaTyxFQWFQLFNBYk8sRUFjUCxXQWRPLEVBZVAsT0FmTyxFQWdCUCxTQWhCTyxFQWlCUCxNQWpCTyxFQWtCUCxRQWxCTyxFQW1CUCxNQW5CTyxFQW9CUCxJQXBCTyxFQXFCUCxZQXJCTyxFQXNCUCxNQXRCTyxFQXVCUCxZQXZCTyxFQXdCUCxLQXhCTyxFQXlCUCxNQXpCTyxFQTBCUCxPQTFCTyxFQTJCUCxPQTNCTyxFQTRCUCxNQTVCTyxFQTZCUCxPQTdCTyxFQThCUCxRQTlCTyxFQStCUCxPQS9CTyxFQWdDUCxTQWhDTyxFQWlDUCxNQWpDTyxFQWtDUCxRQWxDTyxFQW1DUCxRQW5DTyxFQW9DUCxlQXBDTyxFQXFDUCxTQXJDTyxFQXNDUCxtQkF0Q08sRUF1Q1AsVUF2Q08sRUF3Q1AsV0F4Q08sRUF5Q1AsYUF6Q08sRUEwQ1AsVUExQ08sRUEyQ1AsWUEzQ08sRUE0Q1AsV0E1Q08sRUE2Q1AsV0E3Q08sRUE4Q1AsZUE5Q08sRUErQ1Asa0JBL0NPLEVBZ0RQLGVBaERPLEVBaURQLGNBakRPLEVBa0RQLGNBbERPLEVBbURQLFdBbkRPLEVBb0RQLFNBcERPLEVBcURQLFFBckRPLEVBc0RQLGNBdERPLEVBdURQLFVBdkRPLEVBd0RQLG9CQXhETyxFQXlEUCxzQkF6RE8sRUEwRFAsaUJBMURPLEVBMkRQLGtCQTNETyxFQTREUCxhQTVETyxFQTZEUCxpQkE3RE8sRUE4RFAsaUJBOURPLEVBK0RQLGdCQS9ETyxFQWdFUCxpQkFoRU8sRUFpRVAsa0JBakVPLEVBa0VQLGlCQWxFTyxFQW1FUCxlQW5FTyxFQW9FUCxVQXBFTyxFQXFFUCxZQXJFTyxFQXNFUCxZQXRFTyxFQXVFUCxXQXZFTyxFQXdFUCxVQXhFTyxFQXlFUCxhQXpFTyxFQTBFUCxNQTFFTyxFQTJFUCxXQTNFTyxFQTRFUCxXQTVFTyxFQTZFUCxZQTdFTyxFQThFUCxhQTlFTyxFQStFUCxRQS9FTyxFQWdGUCxNQWhGTyxFQWlGUCxNQWpGTyxFQWtGUCxPQWxGTyxFQW1GUCxNQW5GTyxFQW9GUCxPQXBGTyxFQXFGUCxNQXJGTyxFQXNGUCxLQXRGTyxFQXVGUCxLQXZGTyxFQXdGUCxhQXhGTyxFQXlGUCxVQXpGTyxDQURSO0FBNEZIQyxxQkFBUSxDQUNKLFVBREksRUFFSixPQUZJLEVBR0osU0FISSxFQUlKLE1BSkksRUFLSixNQUxJLEVBTUosT0FOSSxFQU9KLFNBUEksRUFRSixTQVJJLEVBU0osT0FUSSxFQVVKLE9BVkksRUFXSixPQVhJLEVBWUosS0FaSSxFQWFKLE1BYkk7QUE1RkwsUzs7OztFQUx5QixlQUFLQyxJOztrQkFBcEJOLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgSWNvbiBmcm9tICdAL2NvbXBvbmVudHMvd2VweS1pY29uL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uRXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0ljb24g5Zu+5qCHJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIGljb25zQmFzZTogW1xuICAgICAgICAgICAgJ2Nsb3NlJyxcbiAgICAgICAgICAgICdsb2NhdGlvbicsXG4gICAgICAgICAgICAnY2xvY2snLFxuICAgICAgICAgICAgJ2dvbGQtY29pbicsXG4gICAgICAgICAgICAnY2hhdCcsXG4gICAgICAgICAgICAnZXhjaGFuZ2UnLFxuICAgICAgICAgICAgJ3VwZ3JhZGUnLFxuICAgICAgICAgICAgJ2VkaXQnLFxuICAgICAgICAgICAgJ2NvbnRhY3QnLFxuICAgICAgICAgICAgJ3Bhc3NlZCcsXG4gICAgICAgICAgICAncG9pbnRzJyxcbiAgICAgICAgICAgICdkZWxldGUnLFxuICAgICAgICAgICAgJ3JlY29yZHMnLFxuICAgICAgICAgICAgJ2xvZ2lzdGljcycsXG4gICAgICAgICAgICAnY2hlY2snLFxuICAgICAgICAgICAgJ2NoZWNrZWQnLFxuICAgICAgICAgICAgJ2dpZnQnLFxuICAgICAgICAgICAgJ2xpa2UtbycsXG4gICAgICAgICAgICAnbGlrZScsXG4gICAgICAgICAgICAncXInLFxuICAgICAgICAgICAgJ3FyLWludmFsaWQnLFxuICAgICAgICAgICAgJ3Nob3AnLFxuICAgICAgICAgICAgJ3Bob3RvZ3JhcGgnLFxuICAgICAgICAgICAgJ2FkZCcsXG4gICAgICAgICAgICAnYWRkMicsXG4gICAgICAgICAgICAnYWRkLW8nLFxuICAgICAgICAgICAgJ3Bob3RvJyxcbiAgICAgICAgICAgICdjYXJ0JyxcbiAgICAgICAgICAgICdhcnJvdycsXG4gICAgICAgICAgICAnc2VhcmNoJyxcbiAgICAgICAgICAgICdjbGVhcicsXG4gICAgICAgICAgICAnc3VjY2VzcycsXG4gICAgICAgICAgICAnZmFpbCcsXG4gICAgICAgICAgICAnd2VjaGF0JyxcbiAgICAgICAgICAgICdhbGlwYXknLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkLXZpZXcnLFxuICAgICAgICAgICAgJ3dhcC1uYXYnLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkLW5vdC12aWV3JyxcbiAgICAgICAgICAgICd3YXAtaG9tZScsXG4gICAgICAgICAgICAnZWNhcmQtcGF5JyxcbiAgICAgICAgICAgICdiYWxhbmNlLXBheScsXG4gICAgICAgICAgICAncGVlci1wYXknLFxuICAgICAgICAgICAgJ2NyZWRpdC1wYXknLFxuICAgICAgICAgICAgJ2RlYml0LXBheScsXG4gICAgICAgICAgICAnb3RoZXItcGF5JyxcbiAgICAgICAgICAgICdzaG9wcGluZy1jYXJ0JyxcbiAgICAgICAgICAgICdicm93c2luZy1oaXN0b3J5JyxcbiAgICAgICAgICAgICdnb29kcy1jb2xsZWN0JyxcbiAgICAgICAgICAgICdzaG9wLWNvbGxlY3QnLFxuICAgICAgICAgICAgJ3JlY2VpdmUtZ2lmdCcsXG4gICAgICAgICAgICAnc2VuZC1naWZ0JyxcbiAgICAgICAgICAgICdzZXR0aW5nJyxcbiAgICAgICAgICAgICdjb3Vwb24nLFxuICAgICAgICAgICAgJ2ZyZWUtcG9zdGFnZScsXG4gICAgICAgICAgICAnZGlzY291bnQnLFxuICAgICAgICAgICAgJ2JpcnRoZGF5LXByaXZpbGVnZScsXG4gICAgICAgICAgICAnbWVtYmVyLWRheS1wcml2aWxlZ2UnLFxuICAgICAgICAgICAgJ2JhbGFuY2UtZGV0YWlscycsXG4gICAgICAgICAgICAnY2FzaC1iYWNrLXJlY29yZCcsXG4gICAgICAgICAgICAncG9pbnRzLW1hbGwnLFxuICAgICAgICAgICAgJ2V4Y2hhbmdlLXJlY29yZCcsXG4gICAgICAgICAgICAncGVuZGluZy1wYXltZW50JyxcbiAgICAgICAgICAgICdwZW5kaW5nLW9yZGVycycsXG4gICAgICAgICAgICAncGVuZGluZy1kZWxpdmVyJyxcbiAgICAgICAgICAgICdwZW5kaW5nLWV2YWx1YXRlJyxcbiAgICAgICAgICAgICdjYXNoLW9uLWRlbGl2ZXInLFxuICAgICAgICAgICAgJ2dpZnQtY2FyZC1wYXknLFxuICAgICAgICAgICAgJ3VuZGVyd2F5JyxcbiAgICAgICAgICAgICdwb2ludC1naWZ0JyxcbiAgICAgICAgICAgICdhZnRlci1zYWxlJyxcbiAgICAgICAgICAgICdlZGl0LWRhdGEnLFxuICAgICAgICAgICAgJ3F1ZXN0aW9uJyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAnY2FyZCcsXG4gICAgICAgICAgICAnZ2lmdC1jYXJkJyxcbiAgICAgICAgICAgICdjb21wbGV0ZWQnLFxuICAgICAgICAgICAgJ3ZhbHVlLWNhcmQnLFxuICAgICAgICAgICAgJ2NlcnRpZmljYXRlJyxcbiAgICAgICAgICAgICd0b3NlbmQnLFxuICAgICAgICAgICAgJ3NpZ24nLFxuICAgICAgICAgICAgJ2hvbWUnLFxuICAgICAgICAgICAgJ3Bob25lJyxcbiAgICAgICAgICAgICdwbGF5JyxcbiAgICAgICAgICAgICdwYXVzZScsXG4gICAgICAgICAgICAnc3RvcCcsXG4gICAgICAgICAgICAnaG90JyxcbiAgICAgICAgICAgICduZXcnLFxuICAgICAgICAgICAgJ25ldy1hcnJpdmFsJyxcbiAgICAgICAgICAgICdob3Qtc2FsZSdcbiAgICAgICAgXSxcbiAgICAgICAgaWNvbnNTeTpbXG4gICAgICAgICAgICAnY3JhZnRWaXAnLFxuICAgICAgICAgICAgJ2hlYXJ0JyxcbiAgICAgICAgICAgICdoZWFydGVkJyxcbiAgICAgICAgICAgICdsaWtlJyxcbiAgICAgICAgICAgICdwbHVzJyxcbiAgICAgICAgICAgICdhcnJvdycsXG4gICAgICAgICAgICAnYWRkcmVzcycsXG4gICAgICAgICAgICAnYWRkcmVzcycsXG4gICAgICAgICAgICAnYWdlbnQnLFxuICAgICAgICAgICAgJ2Nsb3NlJyxcbiAgICAgICAgICAgICdzaGFyZScsXG4gICAgICAgICAgICAnbXNnJyxcbiAgICAgICAgICAgICdkb29yJ1xuICAgICAgICBdXG4gICAgfVxuXG59XG5cbiJdfQ==