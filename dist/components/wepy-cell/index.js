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

var Cell = function (_wepy$component) {
  _inherits(Cell, _wepy$component);

  function Cell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cell.__proto__ || Object.getPrototypeOf(Cell)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: {
        default: ''
      },
      cellbd: {
        type: String,
        default: ''
      },
      cellft: {
        type: String,
        default: ''
      },
      className: {
        type: String,
        default: 'default'
      },
      handleClick: {
        type: Function,
        default: function _default(v) {
          return v;
        }
      },
      handleLeft: {
        type: Function,
        default: function _default(v) {
          return v;
        }
      },
      handleRight: {
        type: Function,
        default: function _default(v) {
          return v;
        }
      }
    }, _this.events = {}, _this.methods = {
      handletap: function handletap(id) {
        if (this.handleClick) {
          this.handleClick(id);
        }
      },
      handleLeftIcon: function handleLeftIcon(id) {
        if (this.handleLeft) {
          this.handleLeft(id);
        }
      },
      handleRightIcon: function handleRightIcon(id) {
        if (this.handleRight) {
          this.handleRight(id);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cell, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Cell;
}(_wepy2.default.component);

exports.default = Cell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNlbGwiLCJwcm9wcyIsImNvbXBvbmVudElkIiwiZGVmYXVsdCIsImNlbGxiZCIsInR5cGUiLCJTdHJpbmciLCJjZWxsZnQiLCJjbGFzc05hbWUiLCJoYW5kbGVDbGljayIsIkZ1bmN0aW9uIiwidiIsImhhbmRsZUxlZnQiLCJoYW5kbGVSaWdodCIsImV2ZW50cyIsIm1ldGhvZHMiLCJoYW5kbGV0YXAiLCJpZCIsImhhbmRsZUxlZnRJY29uIiwiaGFuZGxlUmlnaHRJY29uIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBTztBQUNMQyxtQkFBWTtBQUNWQyxpQkFBUTtBQURFLE9BRFA7QUFJTEMsY0FBTztBQUNMQyxjQUFNQyxNQUREO0FBRUxILGlCQUFTO0FBRkosT0FKRjtBQVFMSSxjQUFPO0FBQ0xGLGNBQU1DLE1BREQ7QUFFTEgsaUJBQVM7QUFGSixPQVJGO0FBWUxLLGlCQUFXO0FBQ1RILGNBQU1DLE1BREc7QUFFVEgsaUJBQVM7QUFGQSxPQVpOO0FBZ0JMTSxtQkFBWTtBQUNWSixjQUFLSyxRQURLO0FBRVZQLGlCQUFRLGtCQUFTUSxDQUFULEVBQVc7QUFBQyxpQkFBT0EsQ0FBUDtBQUFTO0FBRm5CLE9BaEJQO0FBb0JMQyxrQkFBVztBQUNUUCxjQUFLSyxRQURJO0FBRVRQLGlCQUFRLGtCQUFTUSxDQUFULEVBQVc7QUFBQyxpQkFBT0EsQ0FBUDtBQUFTO0FBRnBCLE9BcEJOO0FBd0JMRSxtQkFBWTtBQUNWUixjQUFLSyxRQURLO0FBRVZQLGlCQUFRLGtCQUFTUSxDQUFULEVBQVc7QUFBQyxpQkFBT0EsQ0FBUDtBQUFTO0FBRm5CO0FBeEJQLEssUUE2QlBHLE0sR0FBUyxFLFFBRVRDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxFQURGLEVBQ0s7QUFDWCxZQUFHLEtBQUtSLFdBQVIsRUFBb0I7QUFDbEIsZUFBS0EsV0FBTCxDQUFpQlEsRUFBakI7QUFDRDtBQUNGLE9BTE87QUFNUkMsb0JBTlEsMEJBTU9ELEVBTlAsRUFNVTtBQUNoQixZQUFHLEtBQUtMLFVBQVIsRUFBbUI7QUFDakIsZUFBS0EsVUFBTCxDQUFnQkssRUFBaEI7QUFDRDtBQUNGLE9BVk87QUFZUkUscUJBWlEsMkJBWVFGLEVBWlIsRUFZVztBQUNqQixZQUFHLEtBQUtKLFdBQVIsRUFBb0I7QUFDbEIsZUFBS0EsV0FBTCxDQUFpQkksRUFBakI7QUFDRDtBQUVGO0FBakJPLEs7Ozs7OzZCQW9CRCxDQUNSOzs7O0VBckQrQixlQUFLRyxTOztrQkFBbEJwQixJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgIHByb3BzPSB7XG4gICAgICAgIGNvbXBvbmVudElkOntcbiAgICAgICAgICBkZWZhdWx0OicnXG4gICAgICAgIH0sXG4gICAgICAgIGNlbGxiZDp7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGNlbGxmdDp7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQ2xpY2s6e1xuICAgICAgICAgIHR5cGU6RnVuY3Rpb24sXG4gICAgICAgICAgZGVmYXVsdDpmdW5jdGlvbih2KXtyZXR1cm4gdn1cbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlTGVmdDp7XG4gICAgICAgICAgdHlwZTpGdW5jdGlvbixcbiAgICAgICAgICBkZWZhdWx0OmZ1bmN0aW9uKHYpe3JldHVybiB2fVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVSaWdodDp7XG4gICAgICAgICAgdHlwZTpGdW5jdGlvbixcbiAgICAgICAgICBkZWZhdWx0OmZ1bmN0aW9uKHYpe3JldHVybiB2fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudHMgPSB7XG4gICAgICB9XG4gICAgICBtZXRob2RzID0ge1xuICAgICAgICBoYW5kbGV0YXAoaWQpe1xuICAgICAgICAgIGlmKHRoaXMuaGFuZGxlQ2xpY2spe1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbGljayhpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVMZWZ0SWNvbihpZCl7XG4gICAgICAgICAgaWYodGhpcy5oYW5kbGVMZWZ0KXtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTGVmdChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZVJpZ2h0SWNvbihpZCl7XG4gICAgICAgICAgaWYodGhpcy5oYW5kbGVSaWdodCl7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJpZ2h0KGlkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbkxvYWQoKSB7XG4gICAgICB9XG4gICAgfVxuIl19