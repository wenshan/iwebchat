'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loadmore = function (_wepy$component) {
    _inherits(Loadmore, _wepy$component);

    function Loadmore() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Loadmore);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loadmore.__proto__ || Object.getPrototypeOf(Loadmore)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            nomore: {
                type: Boolean,
                default: false
            },
            nodata: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Loadmore;
}(_wepy2.default.component);

exports.default = Loadmore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkxvYWRtb3JlIiwicHJvcHMiLCJub21vcmUiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJub2RhdGEiLCJsb2FkaW5nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ2pCQyxLLEdBQVE7QUFDSkMsb0JBQVE7QUFDSkMsc0JBQUtDLE9BREQ7QUFFSkMseUJBQVM7QUFGTCxhQURKO0FBS0pDLG9CQUFRO0FBQ0pILHNCQUFLQyxPQUREO0FBRUpDLHlCQUFTO0FBRkwsYUFMSjtBQVNKRSxxQkFBUztBQUNMSixzQkFBS0MsT0FEQTtBQUVMQyx5QkFBUztBQUZKO0FBVEwsUzs7OztFQUQwQixlQUFLRyxTOztrQkFBdEJSLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkbW9yZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgICAgbm9tb3JlOiB7XG4gICAgICAgICAgICB0eXBlOkJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBub2RhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6Qm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6Qm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9O1xufVxuIl19