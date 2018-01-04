'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-loadmore/index.js');

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
            "navigationBarTitleText": "Loadmore 加载"
        }, _this.$repeat = {}, _this.$props = { "Loadmore1": { "xmlns:v-bind": "", "v-bind:loading.sync": "true" }, "Loadmore2": { "v-bind:nodata.sync": "true" }, "Loadmore3": { "v-bind:nomore.sync": "true" } }, _this.$events = {}, _this.components = {
            Loadmore1: _index2.default,
            Loadmore2: _index2.default,
            Loadmore3: _index2.default
        }, _this.data = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return IconEx;
}(_wepy2.default.page);

exports.default = IconEx;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkljb25FeCIsImNvbmZpZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkxvYWRtb3JlMSIsIkxvYWRtb3JlMiIsIkxvYWRtb3JlMyIsImRhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFDakJDLE0sR0FBUztBQUNMLHNDQUEwQjtBQURyQixTLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsTUFBekMsRUFBYixFQUE4RCxhQUFZLEVBQUMsc0JBQXFCLE1BQXRCLEVBQTFFLEVBQXdHLGFBQVksRUFBQyxzQkFBcUIsTUFBdEIsRUFBcEgsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTkMsc0NBRE07QUFFTkMsc0NBRk07QUFHTkM7QUFITSxTLFFBS1ZDLEksR0FBTyxFOzs7O0VBWnlCLGVBQUtDLEk7O2tCQUFwQlYsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBMb2FkbW9yZSBmcm9tICdAL2NvbXBvbmVudHMvd2VweS1sb2FkbW9yZS9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIFwibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOiBcIkxvYWRtb3JlIOWKoOi9vVwiXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJMb2FkbW9yZTFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxvYWRpbmcuc3luY1wiOlwidHJ1ZVwifSxcIkxvYWRtb3JlMlwiOntcInYtYmluZDpub2RhdGEuc3luY1wiOlwidHJ1ZVwifSxcIkxvYWRtb3JlM1wiOntcInYtYmluZDpub21vcmUuc3luY1wiOlwidHJ1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgIExvYWRtb3JlMTpMb2FkbW9yZSxcbiAgICAgICAgTG9hZG1vcmUyOkxvYWRtb3JlLFxuICAgICAgICBMb2FkbW9yZTM6TG9hZG1vcmVcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbn1cblxuIl19