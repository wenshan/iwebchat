'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-style/index.js');

var _index2 = _interopRequireDefault(_index);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '小程序基础组件UI库'
        }, _this.components = {}, _this.data = {
            base: {
                title: '基础组件',
                content: [{
                    name: 'Badge 徽章',
                    path: '/pages/badge/index'
                }, {
                    name: 'Button 按钮',
                    path: '/pages/btn/index'
                }, {
                    name: 'Capsule 胶囊',
                    path: '/pages/capsule/index'
                }, {
                    name: 'Card 卡片',
                    path: '/pages/card/index'
                }, {
                    name: 'Cell 单元格',
                    path: '/pages/cell/index'
                }, {
                    name: 'Helper 基础样式',
                    path: '/pages/helper/index'
                }, {
                    name: 'Icon 图标',
                    path: '/pages/icon/index'
                }, {
                    name: 'Layout 布局',
                    path: '/pages/layout/index'
                }, {
                    name: 'Loadmore 加载',
                    path: '/pages/loadmore/index'
                }, {
                    name: 'Noticebar 通告栏',
                    path: '/pages/noticebar/index'
                }, {
                    name: 'Panel 面板',
                    path: '/pages/wepy-panel/index'
                }, {
                    name: 'Popup 弹出层',
                    path: '/pages/popup/index'
                }, {
                    name: 'Select 选择',
                    path: '/pages/select/index'
                }, {
                    name: 'Stepper 计数器',
                    path: '/pages/stepper/index'
                }, {
                    name: 'Steps 步骤条',
                    path: '/pages/steps/index'
                }, {
                    name: 'Switch 开关',
                    path: '/pages/switch/index'
                }, {
                    name: 'Tab 标签',
                    path: '/pages/tab/index'
                }, {
                    name: 'Tag 标记',
                    path: '/pages/tag/index'
                }]
            },
            form: {
                title: '表单',
                content: [{
                    name: 'Field 输入框',
                    path: '/pages/field/index'
                }]
            },
            action: {
                title: '操作反馈',
                content: [{
                    name: 'Dialog 弹出框',
                    path: '/pages/dialog/index'
                }, {
                    name: 'Toast 轻提示',
                    path: '/pages/toast/index'
                }, {
                    name: 'Toptips 顶部提示',
                    path: '/pages/toptips/index'
                }]
            }
        }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/dashboard/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiYmFzZSIsInRpdGxlIiwiY29udGVudCIsIm5hbWUiLCJwYXRoIiwiZm9ybSIsImFjdGlvbiIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBQ0ZDLHVCQUFPLE1BREw7QUFFRkMseUJBQVMsQ0FDTDtBQUNJQywwQkFBTSxVQURWO0FBRUlDLDBCQUFNO0FBRlYsaUJBREssRUFJRjtBQUNDRCwwQkFBTSxXQURQO0FBRUNDLDBCQUFNO0FBRlAsaUJBSkUsRUFPRjtBQUNDRCwwQkFBTSxZQURQO0FBRUNDLDBCQUFNO0FBRlAsaUJBUEUsRUFVRjtBQUNDRCwwQkFBTSxTQURQO0FBRUNDLDBCQUFNO0FBRlAsaUJBVkUsRUFhRjtBQUNDRCwwQkFBTSxVQURQO0FBRUNDLDBCQUFNO0FBRlAsaUJBYkUsRUFnQkY7QUFDQ0QsMEJBQU0sYUFEUDtBQUVDQywwQkFBTTtBQUZQLGlCQWhCRSxFQW1CRjtBQUNDRCwwQkFBTSxTQURQO0FBRUNDLDBCQUFNO0FBRlAsaUJBbkJFLEVBc0JGO0FBQ0NELDBCQUFNLFdBRFA7QUFFQ0MsMEJBQU07QUFGUCxpQkF0QkUsRUF5QkY7QUFDQ0QsMEJBQU0sYUFEUDtBQUVDQywwQkFBTTtBQUZQLGlCQXpCRSxFQTRCRjtBQUNDRCwwQkFBTSxlQURQO0FBRUNDLDBCQUFNO0FBRlAsaUJBNUJFLEVBK0JGO0FBQ0NELDBCQUFNLFVBRFA7QUFFQ0MsMEJBQU07QUFGUCxpQkEvQkUsRUFrQ0Y7QUFDQ0QsMEJBQU0sV0FEUDtBQUVDQywwQkFBTTtBQUZQLGlCQWxDRSxFQXFDRjtBQUNDRCwwQkFBTSxXQURQO0FBRUNDLDBCQUFNO0FBRlAsaUJBckNFLEVBd0NGO0FBQ0NELDBCQUFNLGFBRFA7QUFFQ0MsMEJBQU07QUFGUCxpQkF4Q0UsRUEyQ0Y7QUFDQ0QsMEJBQU0sV0FEUDtBQUVDQywwQkFBTTtBQUZQLGlCQTNDRSxFQThDRjtBQUNDRCwwQkFBTSxXQURQO0FBRUNDLDBCQUFNO0FBRlAsaUJBOUNFLEVBaURGO0FBQ0NELDBCQUFNLFFBRFA7QUFFQ0MsMEJBQU07QUFGUCxpQkFqREUsRUFvREY7QUFDQ0QsMEJBQU0sUUFEUDtBQUVDQywwQkFBTTtBQUZQLGlCQXBERTtBQUZQLGFBREg7QUE2REhDLGtCQUFNO0FBQ0ZKLHVCQUFPLElBREw7QUFFRkMseUJBQVMsQ0FDTDtBQUNJQywwQkFBTSxXQURWO0FBRUlDLDBCQUFNO0FBRlYsaUJBREs7QUFGUCxhQTdESDtBQXNFSEUsb0JBQVE7QUFDSkwsdUJBQU8sTUFESDtBQUVKQyx5QkFBUyxDQUNMO0FBQ0lDLDBCQUFNLFlBRFY7QUFFSUMsMEJBQU07QUFGVixpQkFESyxFQUlGO0FBQ0NELDBCQUFNLFdBRFA7QUFFQ0MsMEJBQU07QUFGUCxpQkFKRSxFQU9GO0FBQ0NELDBCQUFNLGNBRFA7QUFFQ0MsMEJBQU07QUFGUCxpQkFQRTtBQUZMO0FBdEVMLFMsUUF1RlBHLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OztpQ0FJQSxDQUVSOzs7O0VBdkdnQyxlQUFLQyxJOztrQkFBbkJkLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFN0eWxlIGZyb20gJ0AvY29tcG9uZW50cy93ZXB5LXN0eWxlL2luZGV4J1xuICBpbXBvcnQgY29tcG9uZW50c0NvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP56iL5bqP5Z+656GA57uE5Lu2VUnlupMnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICAgIHRpdGxlOiAn5Z+656GA57uE5Lu2JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdCYWRnZSDlvr3nq6AnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2JhZGdlL2luZGV4J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0J1dHRvbiDmjInpkq4nLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2J0bi9pbmRleCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDYXBzdWxlIOiDtuWbiicsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvY2Fwc3VsZS9pbmRleCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDYXJkIOWNoeeJhycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvY2FyZC9pbmRleCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDZWxsIOWNleWFg+agvCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvY2VsbC9pbmRleCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdIZWxwZXIg5Z+656GA5qC35byPJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJy9wYWdlcy9oZWxwZXIvaW5kZXgnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSWNvbiDlm77moIcnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2ljb24vaW5kZXgnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTGF5b3V0IOW4g+WxgCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvbGF5b3V0L2luZGV4J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0xvYWRtb3JlIOWKoOi9vScsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvbG9hZG1vcmUvaW5kZXgnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTm90aWNlYmFyIOmAmuWRiuagjycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvbm90aWNlYmFyL2luZGV4J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1BhbmVsIOmdouadvycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvd2VweS1wYW5lbC9pbmRleCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdQb3B1cCDlvLnlh7rlsYInLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL3BvcHVwL2luZGV4J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NlbGVjdCDpgInmi6knLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL3NlbGVjdC9pbmRleCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTdGVwcGVyIOiuoeaVsOWZqCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvc3RlcHBlci9pbmRleCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTdGVwcyDmraXpqqTmnaEnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL3N0ZXBzL2luZGV4J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1N3aXRjaCDlvIDlhbMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL3N3aXRjaC9pbmRleCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdUYWIg5qCH562+JyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJy9wYWdlcy90YWIvaW5kZXgnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVGFnIOagh+iusCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvdGFnL2luZGV4J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgdGl0bGU6ICfooajljZUnLFxuICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0ZpZWxkIOi+k+WFpeahhicsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvZmllbGQvaW5kZXgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pON5L2c5Y+N6aaIJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdEaWFsb2cg5by55Ye65qGGJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJy9wYWdlcy9kaWFsb2cvaW5kZXgnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVG9hc3Qg6L275o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJy9wYWdlcy90b2FzdC9pbmRleCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdUb3B0aXBzIOmhtumDqOaPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvdG9wdGlwcy9pbmRleCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuICB9XG4iXX0=