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

var Field = function (_wepy$component) {
  _inherits(Field, _wepy$component);

  function Field() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Field);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Field.__proto__ || Object.getPrototypeOf(Field)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      field: {
        twoWay: true,
        type: [Object],
        default: {}
      }
    }, _this.data = {
      value: ''
    }, _this.events = {}, _this.methods = {
      _handleFieldChange: function _handleFieldChange(event) {
        this.field = Object.assign({}, this.field, { value: event.detail.value });
        this.value = event.detail.value;
        this.$emit('FildOnChange', this, event);
      },
      _handleFieldFocus: function _handleFieldFocus(event) {
        this.$emit('FildFocus', this, event);
      },
      _handleFieldBlur: function _handleFieldBlur(event) {
        this.$emit('FildBluer', this, event);
      },
      initSetValue: function initSetValue(initData) {
        var data = Object.assign({}, this.field, initData);
        this.value = data.value;
      },
      clearInput: function clearInput() {
        this.field = Object.assign({}, this.field, { value: '' });
        this.value = '';
        this.$emit('FildOnChange', this, event);
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Field;
}(_wepy2.default.component);

exports.default = Field;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZpZWxkIiwicHJvcHMiLCJmaWVsZCIsInR3b1dheSIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiZGF0YSIsInZhbHVlIiwiZXZlbnRzIiwibWV0aG9kcyIsIl9oYW5kbGVGaWVsZENoYW5nZSIsImV2ZW50IiwiYXNzaWduIiwiZGV0YWlsIiwiJGVtaXQiLCJfaGFuZGxlRmllbGRGb2N1cyIsIl9oYW5kbGVGaWVsZEJsdXIiLCJpbml0U2V0VmFsdWUiLCJpbml0RGF0YSIsImNsZWFySW5wdXQiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDakJDLEssR0FBUTtBQUNKQyxhQUFNO0FBQ0ZDLGdCQUFRLElBRE47QUFFRkMsY0FBSyxDQUFDQyxNQUFELENBRkg7QUFHRkMsaUJBQVM7QUFIUDtBQURGLEssUUFRUkMsSSxHQUFPO0FBQ0hDLGFBQU87QUFESixLLFFBSVBDLE0sR0FBUyxFLFFBR1RDLE8sR0FBVTtBQUVSQyx3QkFGUSw4QkFFV0MsS0FGWCxFQUVrQjtBQUN4QixhQUFLVixLQUFMLEdBQWFHLE9BQU9RLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtYLEtBQXZCLEVBQThCLEVBQUVNLE9BQU9JLE1BQU1FLE1BQU4sQ0FBYU4sS0FBdEIsRUFBOUIsQ0FBYjtBQUNBLGFBQUtBLEtBQUwsR0FBYUksTUFBTUUsTUFBTixDQUFhTixLQUExQjtBQUNBLGFBQUtPLEtBQUwsQ0FBVyxjQUFYLEVBQTJCLElBQTNCLEVBQWlDSCxLQUFqQztBQUNELE9BTk87QUFRUkksdUJBUlEsNkJBUVVKLEtBUlYsRUFRaUI7QUFDdkIsYUFBS0csS0FBTCxDQUFXLFdBQVgsRUFBd0IsSUFBeEIsRUFBOEJILEtBQTlCO0FBQ0QsT0FWTztBQVlSSyxzQkFaUSw0QkFZU0wsS0FaVCxFQVlnQjtBQUN0QixhQUFLRyxLQUFMLENBQVcsV0FBWCxFQUF3QixJQUF4QixFQUE4QkgsS0FBOUI7QUFDRCxPQWRPO0FBZ0JSTSxrQkFoQlEsd0JBZ0JLQyxRQWhCTCxFQWdCZTtBQUNyQixZQUFJWixPQUFPRixPQUFPUSxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLWCxLQUF2QixFQUE4QmlCLFFBQTlCLENBQVg7QUFDQSxhQUFLWCxLQUFMLEdBQWFELEtBQUtDLEtBQWxCO0FBQ0QsT0FuQk87QUFxQlJZLGdCQXJCUSx3QkFxQk07QUFDWixhQUFLbEIsS0FBTCxHQUFhRyxPQUFPUSxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLWCxLQUF2QixFQUE4QixFQUFFTSxPQUFPLEVBQVQsRUFBOUIsQ0FBYjtBQUNBLGFBQUtBLEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBS08sS0FBTCxDQUFXLGNBQVgsRUFBMkIsSUFBM0IsRUFBaUNILEtBQWpDO0FBQ0EsYUFBS1MsTUFBTDtBQUNEO0FBMUJPLEs7Ozs7RUFoQnFCLGVBQUtDLFM7O2tCQUFuQnRCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGZpZWxkOntcbiAgICAgICAgICAgICAgICB0d29XYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTpbT2JqZWN0XSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRzID0ge1xuXG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcblxuICAgICAgICAgIF9oYW5kbGVGaWVsZENoYW5nZShldmVudCkge1xuICAgICAgICAgICAgdGhpcy5maWVsZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZmllbGQsIHsgdmFsdWU6IGV2ZW50LmRldGFpbC52YWx1ZX0pO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ0ZpbGRPbkNoYW5nZScsIHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgX2hhbmRsZUZpZWxkRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ0ZpbGRGb2N1cycsIHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgX2hhbmRsZUZpZWxkQmx1cihldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnRmlsZEJsdWVyJywgdGhpcywgZXZlbnQpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBpbml0U2V0VmFsdWUoaW5pdERhdGEpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5maWVsZCwgaW5pdERhdGEpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGNsZWFySW5wdXQgKCkge1xuICAgICAgICAgICAgdGhpcy5maWVsZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZmllbGQsIHsgdmFsdWU6ICcnfSk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdGaWxkT25DaGFuZ2UnLCB0aGlzLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuIl19