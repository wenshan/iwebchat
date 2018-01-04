'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Capsule = function (_wepy$component) {
  _inherits(Capsule, _wepy$component);

  function Capsule() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Capsule);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Capsule.__proto__ || Object.getPrototypeOf(Capsule)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: {
        default: ''
      },
      className: {
        type: String,
        default: 'default'
      },
      type: {
        type: String,
        default: 'default'
      },
      color: {
        type: String,
        default: ''
      },
      leftText: {
        type: [String, Number],
        default: ''
      },
      rightText: {
        type: [String, Number],
        default: ''
      },
      handleClick: {
        type: Function,
        default: function _default(v) {
          return v;
        }
      }
    }, _this.events = {}, _this.methods = {
      handletap: function handletap(id) {
        this.handleClick(id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Capsule, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Capsule;
}(_wepy2.default.component);

exports.default = Capsule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNhcHN1bGUiLCJwcm9wcyIsImNvbXBvbmVudElkIiwiZGVmYXVsdCIsImNsYXNzTmFtZSIsInR5cGUiLCJTdHJpbmciLCJjb2xvciIsImxlZnRUZXh0IiwiTnVtYmVyIiwicmlnaHRUZXh0IiwiaGFuZGxlQ2xpY2siLCJGdW5jdGlvbiIsInYiLCJldmVudHMiLCJtZXRob2RzIiwiaGFuZGxldGFwIiwiaWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSyxHQUFNO0FBQ0pDLG1CQUFZO0FBQ1ZDLGlCQUFRO0FBREUsT0FEUjtBQUlKQyxpQkFBVztBQUNUQyxjQUFNQyxNQURHO0FBRVRILGlCQUFTO0FBRkEsT0FKUDtBQVFKRSxZQUFNO0FBQ0pBLGNBQU1DLE1BREY7QUFFSkgsaUJBQVM7QUFGTCxPQVJGO0FBWUpJLGFBQU87QUFDTEYsY0FBTUMsTUFERDtBQUVMSCxpQkFBUztBQUZKLE9BWkg7QUFnQkpLLGdCQUFTO0FBQ1BILGNBQUssQ0FBQ0MsTUFBRCxFQUFRRyxNQUFSLENBREU7QUFFUE4saUJBQVE7QUFGRCxPQWhCTDtBQW9CSk8saUJBQVU7QUFDUkwsY0FBSyxDQUFDQyxNQUFELEVBQVFHLE1BQVIsQ0FERztBQUVSTixpQkFBUTtBQUZBLE9BcEJOO0FBd0JKUSxtQkFBWTtBQUNWTixjQUFLTyxRQURLO0FBRVZULGlCQUFRLGtCQUFTVSxDQUFULEVBQVc7QUFBQyxpQkFBT0EsQ0FBUDtBQUFTO0FBRm5CO0FBeEJSLEssUUE2Qk5DLE0sR0FBUyxFLFFBRVRDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxFQURGLEVBQ0s7QUFDWCxhQUFLTixXQUFMLENBQWlCTSxFQUFqQjtBQUNEO0FBSE8sSzs7Ozs7NkJBTUQsQ0FDUjs7OztFQXZDa0MsZUFBS0MsUzs7a0JBQXJCbEIsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcHN1bGUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICBwcm9wcz17XG4gICAgICAgIGNvbXBvbmVudElkOntcbiAgICAgICAgICBkZWZhdWx0OicnXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgbGVmdFRleHQ6e1xuICAgICAgICAgIHR5cGU6W1N0cmluZyxOdW1iZXJdLFxuICAgICAgICAgIGRlZmF1bHQ6JydcbiAgICAgICAgfSxcbiAgICAgICAgcmlnaHRUZXh0OntcbiAgICAgICAgICB0eXBlOltTdHJpbmcsTnVtYmVyXSxcbiAgICAgICAgICBkZWZhdWx0OicnXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrOntcbiAgICAgICAgICB0eXBlOkZ1bmN0aW9uLFxuICAgICAgICAgIGRlZmF1bHQ6ZnVuY3Rpb24odil7cmV0dXJuIHZ9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV2ZW50cyA9IHtcbiAgICAgIH1cbiAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGhhbmRsZXRhcChpZCl7XG4gICAgICAgICAgdGhpcy5oYW5kbGVDbGljayhpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Mb2FkKCkge1xuICAgICAgfVxuICAgIH1cbiJdfQ==