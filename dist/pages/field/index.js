'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-field/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldEx = function (_wepy$page) {
    _inherits(FieldEx, _wepy$page);

    function FieldEx() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FieldEx);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FieldEx.__proto__ || Object.getPrototypeOf(FieldEx)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: 'Field 输入法框'
        }, _this.$repeat = {}, _this.$props = { "Field1": { "xmlns:v-bind": "", "v-bind:field.sync": "fieldName" }, "Field2": { "v-bind:field.sync": "fieldTel" }, "Field3": { "v-bind:field.sync": "fieldAddress" }, "Field4": { "v-bind:field.sync": "fieldNotitle" }, "Field5": { "v-bind:field.sync": "fieldTotalPrice" }, "Field6": { "v-bind:field.sync": "fieldExcludePrice" }, "Field7": { "v-bind:field.sync": "fieldNotitleWraped" }, "Field8": { "v-bind:field.sync": "fieldFormName" }, "Field9": { "v-bind:field.sync": "fieldFormTel" } }, _this.$events = {}, _this.components = {
            Field1: _index2.default,
            Field2: _index2.default,
            Field3: _index2.default,
            Field4: _index2.default,
            Field5: _index2.default,
            Field6: _index2.default,
            Field7: _index2.default,
            Field8: _index2.default,
            Field9: _index2.default
        }, _this.data = {
            // 基础类型输入框配置
            fieldName: {
                name: 'fieldName',
                title: '收货人',
                placeholder: '名字',
                value: '123'
            },
            fieldTel: {
                error: true,
                name: 'fieldTel',
                title: '联系电话',
                inputType: 'number',
                placeholder: '请输入手机号',
                value: '123'
            },
            fieldAddress: {
                name: 'fieldAddress',
                title: '详细地址',
                type: 'textarea',
                placeholder: '请输入详细地址'
            },
            // 无标题输入框
            fieldNotitle: {
                placeholder: '请输入收货人姓名',
                value: '',
                name: 'fieldNotitle',
                componentId: 'textarea:test'
            },
            // 圆角输入框
            fieldTotalPrice: {
                right: true,
                name: 'fieldTotalPrice',
                mode: 'wrapped',
                title: '消费总额',
                inputType: 'number',
                placeholder: '询问收银员后输入'
            },
            fieldExcludePrice: {
                right: true,
                error: true,
                name: 'fieldExcludePrice',
                mode: 'wrapped',
                title: '不参与优惠金额',
                inputType: 'number',
                placeholder: '询问收银员后输入'
            },
            fieldNotitleWraped: {
                mode: 'wrapped',
                inputType: 'number',
                placeholder: '请输入消费金额'
            },
            // Form 中使用输入框
            fieldFormName: {
                name: 'fieldFormName',
                placeholder: '请输入收货人姓名',
                componentId: 'form:test:name'
            },
            fieldFormTel: {
                name: 'fieldFormTel',
                inputType: 'tel',
                placeholder: '请输入收货人手机号码',
                componentId: 'form:test:tel'
            }
        }, _this.methods = {
            clearInput: function clearInput() {
                this.$invoke('Field1', 'clearInput', {});
                this.$invoke('Field2', 'clearInput', {});
                this.$invoke('Field3', 'clearInput', {});
                this.$apply();
            },
            clearTextarea: function clearTextarea() {
                this.$invoke('Field4', 'clearInput', {});
            }
        }, _this.events = {
            /*
             * Field
             * event1 => 子组件this， event2 => 子组件event
             * FildOnChange => 子组件onchange 事件
             */
            'FildOnChange': function FildOnChange(event1, event2) {
                console.log(event2.currentTarget);
                console.log(event2, 'FildOnChange');
            }
        }, _this.initSetValue = function () {
            _this.$invoke('Field3', 'initSetValue', { value: 1000000 });
        }, _this.onReady = function () {
            _this.initSetValue();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return FieldEx;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(FieldEx , 'pages/field/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZpZWxkRXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiRmllbGQxIiwiRmllbGQyIiwiRmllbGQzIiwiRmllbGQ0IiwiRmllbGQ1IiwiRmllbGQ2IiwiRmllbGQ3IiwiRmllbGQ4IiwiRmllbGQ5IiwiZGF0YSIsImZpZWxkTmFtZSIsIm5hbWUiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJmaWVsZFRlbCIsImVycm9yIiwiaW5wdXRUeXBlIiwiZmllbGRBZGRyZXNzIiwidHlwZSIsImZpZWxkTm90aXRsZSIsImNvbXBvbmVudElkIiwiZmllbGRUb3RhbFByaWNlIiwicmlnaHQiLCJtb2RlIiwiZmllbGRFeGNsdWRlUHJpY2UiLCJmaWVsZE5vdGl0bGVXcmFwZWQiLCJmaWVsZEZvcm1OYW1lIiwiZmllbGRGb3JtVGVsIiwibWV0aG9kcyIsImNsZWFySW5wdXQiLCIkaW52b2tlIiwiJGFwcGx5IiwiY2xlYXJUZXh0YXJlYSIsImV2ZW50cyIsImV2ZW50MSIsImV2ZW50MiIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiaW5pdFNldFZhbHVlIiwib25SZWFkeSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsV0FBdkMsRUFBVixFQUE4RCxVQUFTLEVBQUMscUJBQW9CLFVBQXJCLEVBQXZFLEVBQXdHLFVBQVMsRUFBQyxxQkFBb0IsY0FBckIsRUFBakgsRUFBc0osVUFBUyxFQUFDLHFCQUFvQixjQUFyQixFQUEvSixFQUFvTSxVQUFT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Ozs7O0VBcEhnQyxlQUFLRSxJOztrQkFBckJqRCxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IEZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy93ZXB5LWZpZWxkL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZEV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdGaWVsZCDovpPlhaXms5XmoYYnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkZpZWxkMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZmllbGQuc3luY1wiOlwiZmllbGROYW1lXCJ9LFwiRmllbGQyXCI6e1widi1iaW5kOmZpZWxkLnN5bmNcIjpcImZpZWxkVGVsXCJ9LFwiRmllbGQzXCI6e1widi1iaW5kOmZpZWxkLnN5bmNcIjpcImZpZWxkQWRkcmVzc1wifSxcIkZpZWxkNFwiOntcInYtYmluZDpmaWVsZC5zeW5jXCI6XCJmaWVsZE5vdGl0bGVcIn0sXCJGaWVsZDVcIjp7XCJ2LWJpbmQ6ZmllbGQuc3luY1wiOlwiZmllbGRUb3RhbFByaWNlXCJ9LFwiRmllbGQ2XCI6e1widi1iaW5kOmZpZWxkLnN5bmNcIjpcImZpZWxkRXhjbHVkZVByaWNlXCJ9LFwiRmllbGQ3XCI6e1widi1iaW5kOmZpZWxkLnN5bmNcIjpcImZpZWxkTm90aXRsZVdyYXBlZFwifSxcIkZpZWxkOFwiOntcInYtYmluZDpmaWVsZC5zeW5jXCI6XCJmaWVsZEZvcm1OYW1lXCJ9LFwiRmllbGQ5XCI6e1widi1iaW5kOmZpZWxkLnN5bmNcIjpcImZpZWxkRm9ybVRlbFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgIEZpZWxkMTogRmllbGQsXG4gICAgICAgIEZpZWxkMjogRmllbGQsXG4gICAgICAgIEZpZWxkMzogRmllbGQsXG4gICAgICAgIEZpZWxkNDogRmllbGQsXG4gICAgICAgIEZpZWxkNTogRmllbGQsXG4gICAgICAgIEZpZWxkNjogRmllbGQsXG4gICAgICAgIEZpZWxkNzogRmllbGQsXG4gICAgICAgIEZpZWxkODogRmllbGQsXG4gICAgICAgIEZpZWxkOTogRmllbGRcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgICAvLyDln7rnoYDnsbvlnovovpPlhaXmoYbphY3nva5cbiAgICAgICAgZmllbGROYW1lOntcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZE5hbWUnLFxuICAgICAgICAgICAgdGl0bGU6ICfmlLbotKfkuronLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICflkI3lrZcnLFxuICAgICAgICAgICAgdmFsdWU6ICcxMjMnXG4gICAgICAgIH0sXG4gICAgICAgIGZpZWxkVGVsOiB7XG4gICAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZFRlbCcsXG4gICAgICAgICAgICB0aXRsZTogJ+iBlOezu+eUteivnScsXG4gICAgICAgICAgICBpbnB1dFR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXmiYvmnLrlj7cnLFxuICAgICAgICAgICAgdmFsdWU6ICcxMjMnXG4gICAgICAgIH0sXG4gICAgICAgIGZpZWxkQWRkcmVzczoge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkQWRkcmVzcycsXG4gICAgICAgICAgICB0aXRsZTogJ+ivpue7huWcsOWdgCcsXG4gICAgICAgICAgICB0eXBlOiAndGV4dGFyZWEnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXor6bnu4blnLDlnYAnXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaXoOagh+mimOi+k+WFpeahhlxuICAgICAgICBmaWVsZE5vdGl0bGU6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5pS26LSn5Lq65aeT5ZCNJyxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZE5vdGl0bGUnLFxuICAgICAgICAgICAgY29tcG9uZW50SWQ6ICd0ZXh0YXJlYTp0ZXN0J1xuICAgICAgICB9LFxuICAgICAgICAvLyDlnIbop5LovpPlhaXmoYZcbiAgICAgICAgZmllbGRUb3RhbFByaWNlOiB7XG4gICAgICAgICAgICByaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZFRvdGFsUHJpY2UnLFxuICAgICAgICAgICAgbW9kZTogJ3dyYXBwZWQnLFxuICAgICAgICAgICAgdGl0bGU6ICfmtojotLnmgLvpop0nLFxuICAgICAgICAgICAgaW5wdXRUeXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6K+i6Zeu5pS26ZO25ZGY5ZCO6L6T5YWlJ1xuICAgICAgICB9LFxuICAgICAgICBmaWVsZEV4Y2x1ZGVQcmljZToge1xuICAgICAgICAgICAgcmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZEV4Y2x1ZGVQcmljZScsXG4gICAgICAgICAgICBtb2RlOiAnd3JhcHBlZCcsXG4gICAgICAgICAgICB0aXRsZTogJ+S4jeWPguS4juS8mOaDoOmHkeminScsXG4gICAgICAgICAgICBpbnB1dFR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfor6Lpl67mlLbpk7blkZjlkI7ovpPlhaUnXG4gICAgICAgIH0sXG4gICAgICAgIGZpZWxkTm90aXRsZVdyYXBlZDoge1xuICAgICAgICAgICAgbW9kZTogJ3dyYXBwZWQnLFxuICAgICAgICAgICAgaW5wdXRUeXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5raI6LS56YeR6aKdJ1xuICAgICAgICB9LFxuICAgICAgICAvLyBGb3JtIOS4reS9v+eUqOi+k+WFpeahhlxuICAgICAgICBmaWVsZEZvcm1OYW1lOiB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGRGb3JtTmFtZScsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeaUtui0p+S6uuWnk+WQjScsXG4gICAgICAgICAgICBjb21wb25lbnRJZDogJ2Zvcm06dGVzdDpuYW1lJ1xuICAgICAgICB9LFxuICAgICAgICBmaWVsZEZvcm1UZWw6IHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZEZvcm1UZWwnLFxuICAgICAgICAgICAgaW5wdXRUeXBlOiAndGVsJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5pS26LSn5Lq65omL5py65Y+356CBJyxcbiAgICAgICAgICAgIGNvbXBvbmVudElkOiAnZm9ybTp0ZXN0OnRlbCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGNsZWFySW5wdXQgKCl7XG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ0ZpZWxkMScsICdjbGVhcklucHV0Jywge30pO1xuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdGaWVsZDInLCAnY2xlYXJJbnB1dCcsIHt9KTtcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnRmllbGQzJywgJ2NsZWFySW5wdXQnLCB7fSk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclRleHRhcmVhICgpe1xuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdGaWVsZDQnLCAnY2xlYXJJbnB1dCcsIHt9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICAgLypcbiAgICAgICAgICogRmllbGRcbiAgICAgICAgICogZXZlbnQxID0+IOWtkOe7hOS7tnRoaXPvvIwgZXZlbnQyID0+IOWtkOe7hOS7tmV2ZW50XG4gICAgICAgICAqIEZpbGRPbkNoYW5nZSA9PiDlrZDnu4Tku7ZvbmNoYW5nZSDkuovku7ZcbiAgICAgICAgICovXG4gICAgICAgICdGaWxkT25DaGFuZ2UnOiAoZXZlbnQxLCBldmVudDIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50Mi5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50MiwnRmlsZE9uQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0U2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuJGludm9rZSgnRmllbGQzJywgJ2luaXRTZXRWYWx1ZScsIHt2YWx1ZToxMDAwMDAwfSk7XG4gICAgfVxuXG4gICAgb25SZWFkeSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0U2V0VmFsdWUoKTtcbiAgICB9XG5cbn1cblxuIl19