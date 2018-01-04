'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-popup/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopupEx = function (_wepy$page) {
    _inherits(PopupEx, _wepy$page);

    function PopupEx() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PopupEx);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopupEx.__proto__ || Object.getPrototypeOf(PopupEx)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: 'Popup 弹出层'
        }, _this.data = {
            showPopup: false,
            showLeftPopup: false,
            showRightPopup: false,
            showTopPopup: false,
            showBottomPopup: false
        }, _this.events = {}, _this.methods = {
            togglePopup: function togglePopup() {
                this.showPopup = !this.showPopup;
            },
            toggleLeftPopup: function toggleLeftPopup() {
                this.showLeftPopup = !this.showLeftPopup;
            },
            toggleRightPopup: function toggleRightPopup() {
                this.showRightPopup = !this.showRightPopup;
            },
            toggleBottomPopup: function toggleBottomPopup() {
                this.showBottomPopup = !this.showBottomPopup;
            },
            toggleTopPopup: function toggleTopPopup() {
                this.showTopPopup = !this.showTopPopup;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return PopupEx;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(PopupEx , 'pages/popup/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlBvcHVwRXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNob3dQb3B1cCIsInNob3dMZWZ0UG9wdXAiLCJzaG93UmlnaHRQb3B1cCIsInNob3dUb3BQb3B1cCIsInNob3dCb3R0b21Qb3B1cCIsImV2ZW50cyIsIm1ldGhvZHMiLCJ0b2dnbGVQb3B1cCIsInRvZ2dsZUxlZnRQb3B1cCIsInRvZ2dsZVJpZ2h0UG9wdXAiLCJ0b2dnbGVCb3R0b21Qb3B1cCIsInRvZ2dsZVRvcFBvcHVwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsSSxHQUFPO0FBQ0hDLHVCQUFXLEtBRFI7QUFFSEMsMkJBQWUsS0FGWjtBQUdIQyw0QkFBZ0IsS0FIYjtBQUlIQywwQkFBYyxLQUpYO0FBS0hDLDZCQUFpQjtBQUxkLFMsUUFRUEMsTSxHQUFTLEUsUUFJVEMsTyxHQUFVO0FBQ05DLHVCQURNLHlCQUNRO0FBQ1YscUJBQUtQLFNBQUwsR0FBaUIsQ0FBQyxLQUFLQSxTQUF2QjtBQUNILGFBSEs7QUFLTlEsMkJBTE0sNkJBS1k7QUFDZCxxQkFBS1AsYUFBTCxHQUFxQixDQUFDLEtBQUtBLGFBQTNCO0FBQ0gsYUFQSztBQVNOUSw0QkFUTSw4QkFTYTtBQUNmLHFCQUFLUCxjQUFMLEdBQXNCLENBQUMsS0FBS0EsY0FBNUI7QUFDSCxhQVhLO0FBYU5RLDZCQWJNLCtCQWFjO0FBQ2hCLHFCQUFLTixlQUFMLEdBQXVCLENBQUMsS0FBS0EsZUFBN0I7QUFDSCxhQWZLO0FBaUJOTywwQkFqQk0sNEJBaUJXO0FBQ2IscUJBQUtSLFlBQUwsR0FBb0IsQ0FBQyxLQUFLQSxZQUExQjtBQUNIO0FBbkJLLFM7Ozs7RUFsQnVCLGVBQUtTLEk7O2tCQUFyQmhCLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgUG9wdXAgZnJvbSAnQC9jb21wb25lbnRzL3dlcHktcG9wdXAvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwRXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnUG9wdXAg5by55Ye65bGCJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICAgIHNob3dMZWZ0UG9wdXA6IGZhbHNlLFxuICAgICAgICBzaG93UmlnaHRQb3B1cDogZmFsc2UsXG4gICAgICAgIHNob3dUb3BQb3B1cDogZmFsc2UsXG4gICAgICAgIHNob3dCb3R0b21Qb3B1cDogZmFsc2VcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgICB0b2dnbGVQb3B1cCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BvcHVwID0gIXRoaXMuc2hvd1BvcHVwO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZUxlZnRQb3B1cCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xlZnRQb3B1cCA9ICF0aGlzLnNob3dMZWZ0UG9wdXA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9nZ2xlUmlnaHRQb3B1cCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0UG9wdXAgPSAhdGhpcy5zaG93UmlnaHRQb3B1cDtcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGVCb3R0b21Qb3B1cCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0JvdHRvbVBvcHVwID0gIXRoaXMuc2hvd0JvdHRvbVBvcHVwO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZVRvcFBvcHVwKCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9wUG9wdXAgPSAhdGhpcy5zaG93VG9wUG9wdXA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==