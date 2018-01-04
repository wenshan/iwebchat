'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-noticebar/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoticebarEx = function (_wepy$page) {
    _inherits(NoticebarEx, _wepy$page);

    function NoticebarEx() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NoticebarEx);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NoticebarEx.__proto__ || Object.getPrototypeOf(NoticebarEx)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: 'Noticebar 通告栏'
        }, _this.$repeat = {}, _this.$props = { "Noticebar1": { "xmlns:v-bind": "", "v-bind:noticebar.sync": "movable" }, "Noticebar2": { "v-bind:noticebar.sync": "static1" }, "Noticebar3": { "v-bind:noticebar.sync": "static2" } }, _this.$events = {}, _this.components = {
            Noticebar1: _index2.default,
            Noticebar2: _index2.default,
            Noticebar3: _index2.default
        }, _this.data = {
            movable: {
                componentId: 'movable',
                text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
                type: 'movable'
            },
            static1: {
                componentId: 'static1',
                text: '足协杯战线连续第2年上演广州德比战',
                type: 'static1'
            },
            static2: {
                componentId: 'static2',
                text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
                type: 'static2'
            }
        }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NoticebarEx, [{
        key: 'onReady',
        value: function onReady() {
            var _this2 = this;

            setTimeout(function () {
                _this2.$invoke('Noticebar1', 'initZanNoticeBarScroll', {});
            }, 1000);
        }
    }]);

    return NoticebarEx;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(NoticebarEx , 'pages/noticebar/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk5vdGljZWJhckV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIk5vdGljZWJhcjEiLCJOb3RpY2ViYXIyIiwiTm90aWNlYmFyMyIsImRhdGEiLCJtb3ZhYmxlIiwiY29tcG9uZW50SWQiLCJ0ZXh0IiwidHlwZSIsInN0YXRpYzEiLCJzdGF0aWMyIiwibWV0aG9kcyIsImV2ZW50cyIsInNldFRpbWVvdXQiLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztvTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIseUJBQXdCLFNBQTNDLEVBQWQsRUFBb0UsY0FBYSxFQUFDLHlCQUF3QixTQUF6QixFQUFqRixFQUFxSCxjQUFhLEVBQUMseUJBQXdCLFNBQXpCLEVBQWxJLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ05DLHVDQURNO0FBRU5DLHVDQUZNO0FBR05DO0FBSE0sUyxRQU1WQyxJLEdBQU87QUFDSEMscUJBQVM7QUFDTEMsNkJBQWEsU0FEUjtBQUVMQyxzQkFBTSw2Q0FGRDtBQUdMQyxzQkFBTTtBQUhELGFBRE47QUFNSEMscUJBQVM7QUFDTEgsNkJBQWEsU0FEUjtBQUVMQyxzQkFBTSxtQkFGRDtBQUdMQyxzQkFBTTtBQUhELGFBTk47QUFXSEUscUJBQVM7QUFDTEosNkJBQWEsU0FEUjtBQUVMQyxzQkFBTSw2Q0FGRDtBQUdMQyxzQkFBTTtBQUhEO0FBWE4sUyxRQWtCUEcsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7O2tDQUlDO0FBQUE7O0FBQ05DLHVCQUFXLFlBQU07QUFDakIsdUJBQUtDLE9BQUwsQ0FBYSxZQUFiLEVBQTJCLHdCQUEzQixFQUFxRCxFQUFyRDtBQUNILGFBRkcsRUFFRCxJQUZDO0FBSUg7Ozs7RUE3Q29DLGVBQUtDLEk7O2tCQUF6QnJCLFciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgTm90aWNlYmFyIGZyb20gJ0AvY29tcG9uZW50cy93ZXB5LW5vdGljZWJhci9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWNlYmFyRXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ05vdGljZWJhciDpgJrlkYrmoI8nXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIk5vdGljZWJhcjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm5vdGljZWJhci5zeW5jXCI6XCJtb3ZhYmxlXCJ9LFwiTm90aWNlYmFyMlwiOntcInYtYmluZDpub3RpY2ViYXIuc3luY1wiOlwic3RhdGljMVwifSxcIk5vdGljZWJhcjNcIjp7XCJ2LWJpbmQ6bm90aWNlYmFyLnN5bmNcIjpcInN0YXRpYzJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICBOb3RpY2ViYXIxOiBOb3RpY2ViYXIsXG4gICAgICAgIE5vdGljZWJhcjI6IE5vdGljZWJhcixcbiAgICAgICAgTm90aWNlYmFyMzogTm90aWNlYmFyXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgbW92YWJsZToge1xuICAgICAgICAgICAgY29tcG9uZW50SWQ6ICdtb3ZhYmxlJyxcbiAgICAgICAgICAgIHRleHQ6ICfotrPljY/mna/miJjnur/ov57nu63nrKwy5bm05LiK5ryU5bm/5bee5b635q+U5oiY77yM5LiK6LWb5a2j5Y2K5Yaz6LWb5LiK5oGS5aSn5Lul5Lik5Zue5ZCINS0z55qE5oC75q+U5YiG5reY5rGw5a+M5Yqb44CCJyxcbiAgICAgICAgICAgIHR5cGU6ICdtb3ZhYmxlJ1xuICAgICAgICB9LFxuICAgICAgICBzdGF0aWMxOiB7XG4gICAgICAgICAgICBjb21wb25lbnRJZDogJ3N0YXRpYzEnLFxuICAgICAgICAgICAgdGV4dDogJ+i2s+WNj+adr+aImOe6v+i/nue7reesrDLlubTkuIrmvJTlub/lt57lvrfmr5TmiJgnLFxuICAgICAgICAgICAgdHlwZTogJ3N0YXRpYzEnXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRpYzI6IHtcbiAgICAgICAgICAgIGNvbXBvbmVudElkOiAnc3RhdGljMicsXG4gICAgICAgICAgICB0ZXh0OiAn6Laz5Y2P5p2v5oiY57q/6L+e57ut56ysMuW5tOS4iua8lOW5v+W3nuW+t+avlOaImO+8jOS4iui1m+Wto+WNiuWGs+i1m+S4iuaBkuWkp+S7peS4pOWbnuWQiDUtM+eahOaAu+avlOWIhua3mOaxsOWvjOWKm+OAgicsXG4gICAgICAgICAgICB0eXBlOiAnc3RhdGljMidcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvblJlYWR5ICgpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy4kaW52b2tlKCdOb3RpY2ViYXIxJywgJ2luaXRaYW5Ob3RpY2VCYXJTY3JvbGwnLCB7fSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==