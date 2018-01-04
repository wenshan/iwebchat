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

var Tab = function (_wepy$component) {
  _inherits(Tab, _wepy$component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: {
        default: ''
      },
      tab: {
        type: Object,
        default: { list: [] }
      },
      fixed: {
        type: Boolean,
        default: false
      },
      handleTabChange: {
        type: Function,
        default: function _default(v) {
          return v;
        }
      }
    }, _this.events = {}, _this.methods = {
      _handledjTabChange: function _handledjTabChange(e) {
        var dataset = e.currentTarget.dataset;
        var componentId = dataset.componentId;
        var selectedId = dataset.itemId;
        var data = { componentId: componentId, selectedId: selectedId };
        if (this.handleTabChange) {
          this.handleTabChange(data);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Tab;
}(_wepy2.default.component);

exports.default = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRhYiIsInByb3BzIiwiY29tcG9uZW50SWQiLCJkZWZhdWx0IiwidGFiIiwidHlwZSIsIk9iamVjdCIsImxpc3QiLCJmaXhlZCIsIkJvb2xlYW4iLCJoYW5kbGVUYWJDaGFuZ2UiLCJGdW5jdGlvbiIsInYiLCJldmVudHMiLCJtZXRob2RzIiwiX2hhbmRsZWRqVGFiQ2hhbmdlIiwiZSIsImRhdGFzZXQiLCJjdXJyZW50VGFyZ2V0Iiwic2VsZWN0ZWRJZCIsIml0ZW1JZCIsImRhdGEiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsSyxHQUFNO0FBQ0pDLG1CQUFZO0FBQ1ZDLGlCQUFRO0FBREUsT0FEUjtBQUlKQyxXQUFJO0FBQ0ZDLGNBQUtDLE1BREg7QUFFRkgsaUJBQVEsRUFBQ0ksTUFBSyxFQUFOO0FBRk4sT0FKQTtBQVFKQyxhQUFNO0FBQ0pILGNBQUtJLE9BREQ7QUFFSk4saUJBQVE7QUFGSixPQVJGO0FBWUpPLHVCQUFnQjtBQUNkTCxjQUFLTSxRQURTO0FBRWRSLGlCQUFRLGtCQUFTUyxDQUFULEVBQVc7QUFBQyxpQkFBT0EsQ0FBUDtBQUFTO0FBRmY7QUFaWixLLFFBaUJOQyxNLEdBQVMsRSxRQUVUQyxPLEdBQVU7QUFDUkMsd0JBRFEsOEJBQ1dDLENBRFgsRUFDYztBQUNwQixZQUFJQyxVQUFVRCxFQUFFRSxhQUFGLENBQWdCRCxPQUE5QjtBQUNBLFlBQUlmLGNBQWNlLFFBQVFmLFdBQTFCO0FBQ0EsWUFBSWlCLGFBQWFGLFFBQVFHLE1BQXpCO0FBQ0EsWUFBSUMsT0FBTyxFQUFFbkIsd0JBQUYsRUFBZWlCLHNCQUFmLEVBQVg7QUFDQSxZQUFJLEtBQUtULGVBQVQsRUFBMEI7QUFDeEIsZUFBS0EsZUFBTCxDQUFxQlcsSUFBckI7QUFDRDtBQUNGO0FBVE8sSzs7Ozs7NkJBV0QsQ0FDUjs7OztFQWhDOEIsZUFBS0MsUzs7a0JBQWpCdEIsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgIHByb3BzPXtcbiAgICAgICAgY29tcG9uZW50SWQ6e1xuICAgICAgICAgIGRlZmF1bHQ6JydcbiAgICAgICAgfSxcbiAgICAgICAgdGFiOntcbiAgICAgICAgICB0eXBlOk9iamVjdCxcbiAgICAgICAgICBkZWZhdWx0OntsaXN0OltdfVxuICAgICAgICB9LFxuICAgICAgICBmaXhlZDp7XG4gICAgICAgICAgdHlwZTpCb29sZWFuLFxuICAgICAgICAgIGRlZmF1bHQ6ZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlVGFiQ2hhbmdlOntcbiAgICAgICAgICB0eXBlOkZ1bmN0aW9uLFxuICAgICAgICAgIGRlZmF1bHQ6ZnVuY3Rpb24odil7cmV0dXJuIHZ9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV2ZW50cyA9IHtcbiAgICAgIH1cbiAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIF9oYW5kbGVkalRhYkNoYW5nZShlKSB7XG4gICAgICAgICAgdmFyIGRhdGFzZXQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgICB2YXIgY29tcG9uZW50SWQgPSBkYXRhc2V0LmNvbXBvbmVudElkO1xuICAgICAgICAgIHZhciBzZWxlY3RlZElkID0gZGF0YXNldC5pdGVtSWQ7XG4gICAgICAgICAgdmFyIGRhdGEgPSB7IGNvbXBvbmVudElkLCBzZWxlY3RlZElkIH07XG4gICAgICAgICAgaWYgKHRoaXMuaGFuZGxlVGFiQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRhYkNoYW5nZShkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgb25Mb2FkKCkge1xuICAgICAgfVxuICAgIH1cbiJdfQ==