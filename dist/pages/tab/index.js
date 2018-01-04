'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-tab/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import List from '../components/list'


// alias example
// import Counter from 'counter' // alias example
// import Group from '../components/group'
// import Toast from 'wepy-com-toast'
// import testMixin from '../mixins/test'

var Tab = function (_wepy$page) {
  _inherits(Tab, _wepy$page);

  function Tab() {
    _classCallCheck(this, Tab);

    var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this));

    _this.config = {
      navigationBarTitleText: "Tab 标签"
    };
    _this.$repeat = {};
    _this.$props = { "Tab1": { "xmlns:v-bind": "", "v-bind:tab.sync": "tab1", "componentId": "tab1", "v-bind:handleTabChange.once": "handleTabChange" }, "Tab2": { "componentId": "tab3", "v-bind:tab.sync": "tab3", "v-bind:handleTabChange.once": "handleTabChange" } };
    _this.$events = {};
    _this.components = {
      Tab1: _index2.default,
      Tab2: _index2.default,
      Tab3: _index2.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    };
    _this.data = {
      tab1: {
        list: [{
          id: 'all',
          title: '全部'
        }, {
          id: 'topay',
          title: '待付款'
        }, {
          id: 'tosend',
          title: '待发货'
        }, {
          id: 'send',
          title: '待收货'
        }, {
          id: 'sign',
          title: '已完成订单'
        }],
        selectedId: 'all'
      },
      tab2: {
        list: [{
          id: '1',
          title: '最新商品1'
        }, {
          id: '2',
          title: '最新商品2'
        }, {
          id: '3',
          title: '最新商品3'
        }, {
          id: '4',
          title: '最新商品4'
        }, {
          id: '5',
          title: '最新商品5'
        }, {
          id: '6',
          title: '最新商品6'
        }],
        selectedId: '1',
        scroll: true,
        height: 45
      },
      tab3: {
        list: [{
          id: '1',
          title: '商品1'
        }, {
          id: '2',
          title: '商品2'
        }, {
          id: '3',
          title: '商品3'
        }, {
          id: '4',
          title: '商品4'
        }, {
          id: '5',
          title: '商品5'
        }, {
          id: '6',
          title: '商品6'
        }],
        selectedId: '1',
        scroll: true,
        height: 45
      }
    };
    _this.computed = {};
    _this.methods = {};
    _this.events = {};

    _this.handleTabChange = _this.handleTabChange.bind(_this);
    return _this;
  }

  _createClass(Tab, [{
    key: 'handleTabChange',
    value: function handleTabChange(e) {
      var componentId = e.componentId;
      var selectedId = e.selectedId;
      this[componentId].selectedId = selectedId;
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Tab;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Tab , 'pages/tab/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRhYiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJUYWIxIiwiVGFiMiIsIlRhYjMiLCJkYXRhIiwidGFiMSIsImxpc3QiLCJpZCIsInRpdGxlIiwic2VsZWN0ZWRJZCIsInRhYjIiLCJzY3JvbGwiLCJoZWlnaHQiLCJ0YWIzIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwiaGFuZGxlVGFiQ2hhbmdlIiwiYmluZCIsImUiLCJjb21wb25lbnRJZCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztBQUMrQztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEc7OztBQUNuQixpQkFBYTtBQUFBOztBQUFBOztBQUFBLFVBSWJDLE1BSmEsR0FJSjtBQUNQQyw4QkFBd0I7QUFEakIsS0FKSTtBQUFBLFVBT2RDLE9BUGMsR0FPSixFQVBJO0FBQUEsVUFRakJDLE1BUmlCLEdBUVIsRUFBQyxRQUFPLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLE1BQXJDLEVBQTRDLGVBQWMsTUFBMUQsRUFBaUUsK0JBQThCLGlCQUEvRixFQUFSLEVBQTBILFFBQU8sRUFBQyxlQUFjLE1BQWYsRUFBc0IsbUJBQWtCLE1BQXhDLEVBQStDLCtCQUE4QixpQkFBN0UsRUFBakksRUFSUTtBQUFBLFVBU2pCQyxPQVRpQixHQVNQLEVBVE87QUFBQSxVQVVoQkMsVUFWZ0IsR0FVSDtBQUNSQywyQkFEUTtBQUVSQywyQkFGUTtBQUdSQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdGOztBQVhVLEtBVkc7QUFBQSxVQXVCYkMsSUF2QmEsR0F1Qk47QUFDTEMsWUFBTTtBQUNKQyxjQUFNLENBQUM7QUFDTEMsY0FBSSxLQURDO0FBRUxDLGlCQUFPO0FBRkYsU0FBRCxFQUdIO0FBQ0RELGNBQUksT0FESDtBQUVEQyxpQkFBTztBQUZOLFNBSEcsRUFNSDtBQUNERCxjQUFJLFFBREg7QUFFREMsaUJBQU87QUFGTixTQU5HLEVBU0g7QUFDREQsY0FBSSxNQURIO0FBRURDLGlCQUFPO0FBRk4sU0FURyxFQVlIO0FBQ0RELGNBQUksTUFESDtBQUVEQyxpQkFBTztBQUZOLFNBWkcsQ0FERjtBQWlCSkMsb0JBQVk7QUFqQlIsT0FERDtBQW9CTEMsWUFBTTtBQUNKSixjQUFNLENBQUM7QUFDTEMsY0FBSSxHQURDO0FBRUxDLGlCQUFPO0FBRkYsU0FBRCxFQUdIO0FBQ0RELGNBQUksR0FESDtBQUVEQyxpQkFBTztBQUZOLFNBSEcsRUFNSDtBQUNERCxjQUFJLEdBREg7QUFFREMsaUJBQU87QUFGTixTQU5HLEVBU0g7QUFDREQsY0FBSSxHQURIO0FBRURDLGlCQUFPO0FBRk4sU0FURyxFQVlIO0FBQ0RELGNBQUksR0FESDtBQUVEQyxpQkFBTztBQUZOLFNBWkcsRUFlSDtBQUNERCxjQUFJLEdBREg7QUFFREMsaUJBQU87QUFGTixTQWZHLENBREY7QUFvQkpDLG9CQUFZLEdBcEJSO0FBcUJKRSxnQkFBUSxJQXJCSjtBQXNCSkMsZ0JBQVE7QUF0QkosT0FwQkQ7QUE0Q0xDLFlBQU07QUFDSlAsY0FBTSxDQUFDO0FBQ0xDLGNBQUksR0FEQztBQUVMQyxpQkFBTztBQUZGLFNBQUQsRUFHSDtBQUNERCxjQUFJLEdBREg7QUFFREMsaUJBQU87QUFGTixTQUhHLEVBTUg7QUFDREQsY0FBSSxHQURIO0FBRURDLGlCQUFPO0FBRk4sU0FORyxFQVNIO0FBQ0RELGNBQUksR0FESDtBQUVEQyxpQkFBTztBQUZOLFNBVEcsRUFZSDtBQUNERCxjQUFJLEdBREg7QUFFREMsaUJBQU87QUFGTixTQVpHLEVBZUg7QUFDREQsY0FBSSxHQURIO0FBRURDLGlCQUFPO0FBRk4sU0FmRyxDQURGO0FBb0JKQyxvQkFBWSxHQXBCUjtBQXFCSkUsZ0JBQVEsSUFyQko7QUFzQkpDLGdCQUFRO0FBdEJKO0FBNUNELEtBdkJNO0FBQUEsVUE2RmJFLFFBN0ZhLEdBNkZGLEVBN0ZFO0FBQUEsVUFpR2JDLE9BakdhLEdBaUdILEVBakdHO0FBQUEsVUF5R2JDLE1BekdhLEdBeUdKLEVBekdJOztBQUVYLFVBQUtDLGVBQUwsR0FBcUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBckI7QUFGVztBQUdaOzs7O29DQWdHZUMsQyxFQUFHO0FBQ2pCLFVBQUlDLGNBQWNELEVBQUVDLFdBQXBCO0FBQ0EsVUFBSVgsYUFBYVUsRUFBRVYsVUFBbkI7QUFDQSxXQUFLVyxXQUFMLEVBQWtCWCxVQUFsQixHQUE4QkEsVUFBOUI7QUFDQSxXQUFLWSxNQUFMO0FBQ0Q7Ozs2QkFJUSxDQUNSOzs7O0VBOUc4QixlQUFLQyxJOztrQkFBakI1QixHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIC8vIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCdcbiAgaW1wb3J0IFRhYjEgZnJvbSAnQC9jb21wb25lbnRzL3dlcHktdGFiL2luZGV4JyAvLyBhbGlhcyBleGFtcGxlXG4gIC8vIGltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInIC8vIGFsaWFzIGV4YW1wbGVcbiAgLy8gaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnXG4gIC8vIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgLy8gaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5oYW5kbGVUYWJDaGFuZ2U9dGhpcy5oYW5kbGVUYWJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCJUYWIg5qCH562+XCJcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlRhYjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRhYi5zeW5jXCI6XCJ0YWIxXCIsXCJjb21wb25lbnRJZFwiOlwidGFiMVwiLFwidi1iaW5kOmhhbmRsZVRhYkNoYW5nZS5vbmNlXCI6XCJoYW5kbGVUYWJDaGFuZ2VcIn0sXCJUYWIyXCI6e1wiY29tcG9uZW50SWRcIjpcInRhYjNcIixcInYtYmluZDp0YWIuc3luY1wiOlwidGFiM1wiLFwidi1iaW5kOmhhbmRsZVRhYkNoYW5nZS5vbmNlXCI6XCJoYW5kbGVUYWJDaGFuZ2VcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgVGFiMTogVGFiMSxcbiAgICAgIFRhYjI6IFRhYjEsXG4gICAgICBUYWIzOiBUYWIxXG4gICAgICAvLyBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIC8vIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgLy8gbGlzdDogTGlzdCxcbiAgICAgIC8vIGdyb3VwOiBHcm91cCxcbiAgICAgIC8vIHRvYXN0OiBUb2FzdFxuICAgIH1cblxuICAgIC8vbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICB0YWIxOiB7XG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgaWQ6ICdhbGwnLFxuICAgICAgICAgIHRpdGxlOiAn5YWo6YOoJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWQ6ICd0b3BheScsXG4gICAgICAgICAgdGl0bGU6ICflvoXku5jmrL4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogJ3Rvc2VuZCcsXG4gICAgICAgICAgdGl0bGU6ICflvoXlj5HotKcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogJ3NlbmQnLFxuICAgICAgICAgIHRpdGxlOiAn5b6F5pS26LSnJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWQ6ICdzaWduJyxcbiAgICAgICAgICB0aXRsZTogJ+W3suWujOaIkOiuouWNlSdcbiAgICAgICAgfV0sXG4gICAgICAgIHNlbGVjdGVkSWQ6ICdhbGwnXG4gICAgICB9LFxuICAgICAgdGFiMjoge1xuICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgdGl0bGU6ICfmnIDmlrDllYblk4ExJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICB0aXRsZTogJ+acgOaWsOWVhuWTgTInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgIHRpdGxlOiAn5pyA5paw5ZWG5ZOBMydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgdGl0bGU6ICfmnIDmlrDllYblk4E0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWQ6ICc1JyxcbiAgICAgICAgICB0aXRsZTogJ+acgOaWsOWVhuWTgTUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogJzYnLFxuICAgICAgICAgIHRpdGxlOiAn5pyA5paw5ZWG5ZOBNidcbiAgICAgICAgfV0sXG4gICAgICAgIHNlbGVjdGVkSWQ6ICcxJyxcbiAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICBoZWlnaHQ6IDQ1XG4gICAgICB9LFxuICAgICAgdGFiMzoge1xuICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgdGl0bGU6ICfllYblk4ExJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICB0aXRsZTogJ+WVhuWTgTInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgIHRpdGxlOiAn5ZWG5ZOBMydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgdGl0bGU6ICfllYblk4E0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWQ6ICc1JyxcbiAgICAgICAgICB0aXRsZTogJ+WVhuWTgTUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogJzYnLFxuICAgICAgICAgIHRpdGxlOiAn5ZWG5ZOBNidcbiAgICAgICAgfV0sXG4gICAgICAgIHNlbGVjdGVkSWQ6ICcxJyxcbiAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICBoZWlnaHQ6IDQ1XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgICBoYW5kbGVUYWJDaGFuZ2UoZSkge1xuICAgICAgdmFyIGNvbXBvbmVudElkID0gZS5jb21wb25lbnRJZDtcbiAgICAgIHZhciBzZWxlY3RlZElkID0gZS5zZWxlY3RlZElkO1xuICAgICAgdGhpc1tjb21wb25lbnRJZF0uc2VsZWN0ZWRJZD0gc2VsZWN0ZWRJZDtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=