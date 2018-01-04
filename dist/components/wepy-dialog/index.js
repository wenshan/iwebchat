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

var Dialog = function (_wepy$component) {
  _inherits(Dialog, _wepy$component);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      // 自定义 btn 列表
      // { type: 按钮类型，回调时以此作为区分依据，text: 按钮文案, color: 按钮文字颜色 }
      buttons: [],
      // 标题
      title: '',
      // 内容
      content: ' ',
      // 按钮是否展示为纵向
      buttonsShowVertical: false,
      // 是否展示确定
      showConfirm: true,
      // 确认按钮文案
      confirmText: '确定',
      // 确认按钮颜色
      confirmColor: '#3CC51F',
      // 是否展示取消
      showCancel: false,
      // 取消按钮文案
      cancelText: '取消',
      // 取消按钮颜色
      cancelColor: '#333',
      // 处理默认按钮的展示
      // 纵向排布确认按钮在上方
      showCustomBtns: false,
      show: false
    }, _this.props = {}, _this.events = {}, _this.methods = {
      _handledjDialogButtonClick: function _handledjDialogButtonClick(e) {
        var _e$currentTarget = e.currentTarget,
            currentTarget = _e$currentTarget === undefined ? {} : _e$currentTarget;
        var _currentTarget$datase = currentTarget.dataset,
            dataset = _currentTarget$datase === undefined ? {} : _currentTarget$datase;
        var resolve = this.resolve,
            reject = this.reject;
        // 重置 djDialog 里的内容

        this.show = false;
        this.$apply();
        // 自定义按钮，全部 resolve 形式返回，根据 type 区分点击按钮
        if (this.showCustomBtns) {
          resolve({ type: dataset.type });
          return;
        }

        // 默认按钮，确认为 resolve，取消为 reject
        if (dataset.type === 'confirm') {
          resolve({ type: 'confirm' });
        } else {
          resolve({ type: 'cancel' });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dialog, [{
    key: 'showDialog',
    value: function showDialog() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var t = this;
      for (var k in data) {
        t[k] = data[k];
      }
      t.$apply();
      if (t.buttons.length === 0) {
        if (t.showConfirm) {
          t.buttons.push({
            type: 'confirm',
            text: t.confirmText,
            color: t.confirmColor
          });
        }

        if (t.showCancel) {
          var cancelButton = {
            type: 'cancel',
            text: t.cancelText,
            color: t.cancelColor
          };
          if (t.buttonsShowVertical) {
            t.buttons.push(cancelButton);
          } else {
            t.buttons.unshift(cancelButton);
          }
        }
      } else {
        t.showCustomBtns = true;
      }
      t.show = true;
      t.$apply();
      return new Promise(function (resolve, reject) {
        t.resolve = resolve, t.reject = reject;
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Dialog;
}(_wepy2.default.component);

exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkRpYWxvZyIsImRhdGEiLCJidXR0b25zIiwidGl0bGUiLCJjb250ZW50IiwiYnV0dG9uc1Nob3dWZXJ0aWNhbCIsInNob3dDb25maXJtIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwic2hvd0N1c3RvbUJ0bnMiLCJzaG93IiwicHJvcHMiLCJldmVudHMiLCJtZXRob2RzIiwiX2hhbmRsZWRqRGlhbG9nQnV0dG9uQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJyZXNvbHZlIiwicmVqZWN0IiwiJGFwcGx5IiwidHlwZSIsInQiLCJrIiwibGVuZ3RoIiwicHVzaCIsInRleHQiLCJjb2xvciIsImNhbmNlbEJ1dHRvbiIsInVuc2hpZnQiLCJQcm9taXNlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEksR0FBSztBQUNEO0FBQ0E7QUFDQUMsZUFBVSxFQUhUO0FBSUQ7QUFDQUMsYUFBUSxFQUxQO0FBTUQ7QUFDQUMsZUFBVSxHQVBUO0FBUUQ7QUFDQUMsMkJBQXNCLEtBVHJCO0FBVUQ7QUFDQUMsbUJBQWMsSUFYYjtBQVlEO0FBQ0FDLG1CQUFjLElBYmI7QUFjRDtBQUNBQyxvQkFBZSxTQWZkO0FBZ0JEO0FBQ0FDLGtCQUFhLEtBakJaO0FBa0JEO0FBQ0FDLGtCQUFhLElBbkJaO0FBb0JEO0FBQ0FDLG1CQUFjLE1BckJiO0FBc0JEO0FBQ0E7QUFDQUMsc0JBQWlCLEtBeEJoQjtBQXlCREMsWUFBSztBQXpCSixLLFFBMkJMQyxLLEdBQU0sRSxRQUVOQyxNLEdBQVMsRSxRQUVUQyxPLEdBQVU7QUFDUkMsZ0NBRFEsc0NBQ21CQyxDQURuQixFQUNzQjtBQUFBLCtCQUNHQSxDQURILENBQ3BCQyxhQURvQjtBQUFBLFlBQ3BCQSxhQURvQixvQ0FDSixFQURJO0FBQUEsb0NBRUhBLGFBRkcsQ0FFcEJDLE9BRm9CO0FBQUEsWUFFcEJBLE9BRm9CLHlDQUVWLEVBRlU7QUFBQSxZQUdwQkMsT0FIb0IsR0FHQyxJQUhELENBR3BCQSxPQUhvQjtBQUFBLFlBR1ZDLE1BSFUsR0FHQyxJQUhELENBR1ZBLE1BSFU7QUFJNUI7O0FBQ0EsYUFBS1QsSUFBTCxHQUFVLEtBQVY7QUFDQSxhQUFLVSxNQUFMO0FBQ0E7QUFDQSxZQUFJLEtBQUtYLGNBQVQsRUFBeUI7QUFDdkJTLGtCQUFRLEVBQUNHLE1BQUtKLFFBQVFJLElBQWQsRUFBUjtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQSxZQUFJSixRQUFRSSxJQUFSLEtBQWlCLFNBQXJCLEVBQWdDO0FBQzlCSCxrQkFBUSxFQUFDRyxNQUFNLFNBQVAsRUFBUjtBQUNELFNBRkQsTUFFTztBQUNMSCxrQkFBUSxFQUFDRyxNQUFNLFFBQVAsRUFBUjtBQUNEO0FBQ0Y7QUFwQk8sSzs7Ozs7aUNBc0JhO0FBQUEsVUFBWHZCLElBQVcsdUVBQUosRUFBSTs7QUFDckIsVUFBSXdCLElBQUUsSUFBTjtBQUNJLFdBQUssSUFBSUMsQ0FBVCxJQUFjekIsSUFBZCxFQUFvQjtBQUNoQndCLFVBQUVDLENBQUYsSUFBT3pCLEtBQUt5QixDQUFMLENBQVA7QUFDSDtBQUNERCxRQUFFRixNQUFGO0FBQ0EsVUFBSUUsRUFBRXZCLE9BQUYsQ0FBVXlCLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsWUFBSUYsRUFBRW5CLFdBQU4sRUFBbUI7QUFDakJtQixZQUFFdkIsT0FBRixDQUFVMEIsSUFBVixDQUFlO0FBQ2JKLGtCQUFNLFNBRE87QUFFYkssa0JBQU1KLEVBQUVsQixXQUZLO0FBR2J1QixtQkFBT0wsRUFBRWpCO0FBSEksV0FBZjtBQUtEOztBQUVELFlBQUlpQixFQUFFaEIsVUFBTixFQUFrQjtBQUNoQixjQUFNc0IsZUFBZTtBQUNuQlAsa0JBQU0sUUFEYTtBQUVuQkssa0JBQU1KLEVBQUVmLFVBRlc7QUFHbkJvQixtQkFBT0wsRUFBRWQ7QUFIVSxXQUFyQjtBQUtBLGNBQUljLEVBQUVwQixtQkFBTixFQUEyQjtBQUN6Qm9CLGNBQUV2QixPQUFGLENBQVUwQixJQUFWLENBQWVHLFlBQWY7QUFDRCxXQUZELE1BRU87QUFDTE4sY0FBRXZCLE9BQUYsQ0FBVThCLE9BQVYsQ0FBa0JELFlBQWxCO0FBQ0Q7QUFDRjtBQUNGLE9BckJELE1BcUJPO0FBQ0xOLFVBQUViLGNBQUYsR0FBbUIsSUFBbkI7QUFDRDtBQUNEYSxRQUFFWixJQUFGLEdBQU8sSUFBUDtBQUNBWSxRQUFFRixNQUFGO0FBQ0YsYUFBTyxJQUFJVSxPQUFKLENBQVksVUFBQ1osT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ2xDRyxVQUFFSixPQUFGLEdBQVVBLE9BQVYsRUFDQUksRUFBRUgsTUFBRixHQUFTQSxNQURUO0FBRUwsT0FITSxDQUFQO0FBS0Q7Ozs2QkFDTSxDQUNSOzs7O0VBN0ZpQyxlQUFLWSxTOztrQkFBcEJsQyxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgZGF0YT17XG4gICAgICAgICAgLy8g6Ieq5a6a5LmJIGJ0biDliJfooahcbiAgICAgICAgICAvLyB7IHR5cGU6IOaMiemSruexu+Wei++8jOWbnuiwg+aXtuS7peatpOS9nOS4uuWMuuWIhuS+neaNru+8jHRleHQ6IOaMiemSruaWh+ahiCwgY29sb3I6IOaMiemSruaWh+Wtl+minOiJsiB9XG4gICAgICAgICAgYnV0dG9ucyA6IFtdLFxuICAgICAgICAgIC8vIOagh+mimFxuICAgICAgICAgIHRpdGxlIDogJycsXG4gICAgICAgICAgLy8g5YaF5a65XG4gICAgICAgICAgY29udGVudCA6ICcgJyxcbiAgICAgICAgICAvLyDmjInpkq7mmK/lkKblsZXnpLrkuLrnurXlkJFcbiAgICAgICAgICBidXR0b25zU2hvd1ZlcnRpY2FsIDogZmFsc2UsXG4gICAgICAgICAgLy8g5piv5ZCm5bGV56S656Gu5a6aXG4gICAgICAgICAgc2hvd0NvbmZpcm0gOiB0cnVlLFxuICAgICAgICAgIC8vIOehruiupOaMiemSruaWh+ahiFxuICAgICAgICAgIGNvbmZpcm1UZXh0IDogJ+ehruWumicsXG4gICAgICAgICAgLy8g56Gu6K6k5oyJ6ZKu6aKc6ImyXG4gICAgICAgICAgY29uZmlybUNvbG9yIDogJyMzQ0M1MUYnLFxuICAgICAgICAgIC8vIOaYr+WQpuWxleekuuWPlua2iFxuICAgICAgICAgIHNob3dDYW5jZWwgOiBmYWxzZSxcbiAgICAgICAgICAvLyDlj5bmtojmjInpkq7mlofmoYhcbiAgICAgICAgICBjYW5jZWxUZXh0IDogJ+WPlua2iCcsXG4gICAgICAgICAgLy8g5Y+W5raI5oyJ6ZKu6aKc6ImyXG4gICAgICAgICAgY2FuY2VsQ29sb3IgOiAnIzMzMycsXG4gICAgICAgICAgLy8g5aSE55CG6buY6K6k5oyJ6ZKu55qE5bGV56S6XG4gICAgICAgICAgLy8g57q15ZCR5o6S5biD56Gu6K6k5oyJ6ZKu5Zyo5LiK5pa5XG4gICAgICAgICAgc2hvd0N1c3RvbUJ0bnMgOiBmYWxzZSxcbiAgICAgICAgICBzaG93OmZhbHNlXG4gICAgICB9XG4gICAgICBwcm9wcz17XG4gICAgICB9XG4gICAgICBldmVudHMgPSB7XG4gICAgICB9XG4gICAgICBtZXRob2RzID0ge1xuICAgICAgICBfaGFuZGxlZGpEaWFsb2dCdXR0b25DbGljayhlKSB7XG4gICAgICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0ID0ge30gfSA9IGU7XG4gICAgICAgICAgY29uc3QgeyBkYXRhc2V0ID0ge30gfSA9IGN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgY29uc3QgeyByZXNvbHZlICwgcmVqZWN0IH0gPSB0aGlzO1xuICAgICAgICAgIC8vIOmHjee9riBkakRpYWxvZyDph4znmoTlhoXlrrlcbiAgICAgICAgICB0aGlzLnNob3c9ZmFsc2U7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAvLyDoh6rlrprkuYnmjInpkq7vvIzlhajpg6ggcmVzb2x2ZSDlvaLlvI/ov5Tlm57vvIzmoLnmja4gdHlwZSDljLrliIbngrnlh7vmjInpkq5cbiAgICAgICAgICBpZiAodGhpcy5zaG93Q3VzdG9tQnRucykge1xuICAgICAgICAgICAgcmVzb2x2ZSh7dHlwZTpkYXRhc2V0LnR5cGV9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDpu5jorqTmjInpkq7vvIznoa7orqTkuLogcmVzb2x2Ze+8jOWPlua2iOS4uiByZWplY3RcbiAgICAgICAgICBpZiAoZGF0YXNldC50eXBlID09PSAnY29uZmlybScpIHtcbiAgICAgICAgICAgIHJlc29sdmUoe3R5cGU6ICdjb25maXJtJ30pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHt0eXBlOiAnY2FuY2VsJ30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2hvd0RpYWxvZyAoZGF0YSA9IHt9KSB7XG4gICAgICAgIGxldCB0PXRoaXM7XG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0W2tdID0gZGF0YVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQuJGFwcGx5KCk7XG4gICAgICAgICAgICBpZiAodC5idXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBpZiAodC5zaG93Q29uZmlybSkge1xuICAgICAgICAgICAgICAgIHQuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdjb25maXJtJyxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHQuY29uZmlybVRleHQsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdC5jb25maXJtQ29sb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh0LnNob3dDYW5jZWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnY2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHQuY2FuY2VsVGV4dCxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB0LmNhbmNlbENvbG9yXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodC5idXR0b25zU2hvd1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgICB0LmJ1dHRvbnMucHVzaChjYW5jZWxCdXR0b24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0LmJ1dHRvbnMudW5zaGlmdChjYW5jZWxCdXR0b24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdC5zaG93Q3VzdG9tQnRucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0LnNob3c9dHJ1ZTtcbiAgICAgICAgICAgIHQuJGFwcGx5KCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0LnJlc29sdmU9cmVzb2x2ZSxcbiAgICAgICAgICAgICAgICB0LnJlamVjdD1yZWplY3RcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICBvbkxvYWQoKSB7XG4gICAgICB9XG4gICAgfVxuIl19