'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../../components/wepy-cell/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../components/wepy-switch/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import List from '../components/list'
// alias example


// alias example
// import Counter from 'counter' // alias example
// import Group from '../components/group'
// import Toast from 'wepy-com-toast'
// import testMixin from '../mixins/test'

var Cell = function (_wepy$page) {
  _inherits(Cell, _wepy$page);

  function Cell() {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this));

    _this.config = {
      navigationBarTitleText: "Cell 单元格"
    };
    _this.$repeat = {};
    _this.$props = { "Cell1": { "cellbd": "单行列表" }, "Cell2": { "cellbd": "单行列表", "cellft": "详细信息" }, "Cell3": { "cellbd": "单行列表", "cellft": "详细信息" }, "Cell4": { "cellft": "详细信息" }, "Cell5": { "cellft": "详细信息", "className": "dj-cell--switch", "xmlns:v-bind": "", "v-bind:handleRight.sync": "handleSwitchChange" }, "Switch1": { "v-bind:checked.sync": "checked" } };
    _this.$events = {};
    _this.components = {
      Cell1: _index2.default,
      Cell2: _index2.default,
      Cell3: _index2.default,
      Cell4: _index2.default,
      Cell5: _index2.default,
      Switch1: _index4.default
      // counter1: Counter,
      // counter2: Counter,
      // list: List,
      // group: Group,
      // toast: Toast


      //mixins = [testMixin]

    };
    _this.data = {
      checked: false
    };
    _this.computed = {};
    _this.methods = {};
    _this.events = {};

    _this.handleSwitchChange = _this.handleSwitchChange.bind(_this);
    return _this;
  }

  _createClass(Cell, [{
    key: 'handleSwitchChange',
    value: function handleSwitchChange(id) {
      this.checked = !this.checked;
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Cell;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Cell , 'pages/cell/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNlbGwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQ2VsbDEiLCJDZWxsMiIsIkNlbGwzIiwiQ2VsbDQiLCJDZWxsNSIsIlN3aXRjaDEiLCJkYXRhIiwiY2hlY2tlZCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsImhhbmRsZVN3aXRjaENoYW5nZSIsImJpbmQiLCJpZCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFGQTtBQUNpRDs7O0FBQ0k7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxJOzs7QUFDbkIsa0JBQWE7QUFBQTs7QUFBQTs7QUFBQSxVQUliQyxNQUphLEdBSUo7QUFDUEMsOEJBQXdCO0FBRGpCLEtBSkk7QUFBQSxVQU9kQyxPQVBjLEdBT0osRUFQSTtBQUFBLFVBUWpCQyxNQVJpQixHQVFSLEVBQUMsU0FBUSxFQUFDLFVBQVMsTUFBVixFQUFULEVBQTJCLFNBQVEsRUFBQyxVQUFTLE1BQVYsRUFBaUIsVUFBUyxNQUExQixFQUFuQyxFQUFxRSxTQUFRLEVBQUMsVUFBUyxNQUFWLEVBQWlCLFVBQVMsTUFBMUIsRUFBN0UsRUFBK0csU0FBUSxFQUFDLFVBQVMsTUFBVixFQUF2SCxFQUF5SSxTQUFRLEVBQUMsVUFBUyxNQUFWLEVBQWlCLGFBQVksaUJBQTdCLEVBQStDLGdCQUFlLEVBQTlELEVBQWlFLDJCQUEwQixvQkFBM0YsRUFBakosRUFBa1EsV0FBVSxFQUFDLHVCQUFzQixTQUF2QixFQUE1USxFQVJRO0FBQUEsVUFTakJDLE9BVGlCLEdBU1AsRUFUTztBQUFBLFVBVWhCQyxVQVZnQixHQVVIO0FBQ1JDLDRCQURRO0FBRVJDLDRCQUZRO0FBR1JDLDRCQUhRO0FBSVJDLDRCQUpRO0FBS1JDLDRCQUxRO0FBTVJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Y7O0FBZFUsS0FWRztBQUFBLFVBMEJiQyxJQTFCYSxHQTBCTjtBQUNMQyxlQUFTO0FBREosS0ExQk07QUFBQSxVQThCYkMsUUE5QmEsR0E4QkYsRUE5QkU7QUFBQSxVQWlDYkMsT0FqQ2EsR0FpQ0gsRUFqQ0c7QUFBQSxVQXVDYkMsTUF2Q2EsR0F1Q0osRUF2Q0k7O0FBRVgsVUFBS0Msa0JBQUwsR0FBd0IsTUFBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLE9BQXhCO0FBRlc7QUFHWjs7Ozt1Q0FnQ2tCQyxFLEVBQUk7QUFDbkIsV0FBS04sT0FBTCxHQUFhLENBQUMsS0FBS0EsT0FBbkI7QUFDQSxXQUFLTyxNQUFMO0FBQ0g7Ozs2QkFJUSxDQUNSOzs7O0VBNUMrQixlQUFLQyxJOztrQkFBbEJ0QixJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIC8vIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCdcbiAgaW1wb3J0IENlbGwxIGZyb20gJ0AvY29tcG9uZW50cy93ZXB5LWNlbGwvaW5kZXgnIC8vIGFsaWFzIGV4YW1wbGVcbiAgaW1wb3J0IFN3aXRjaDEgZnJvbSAnQC9jb21wb25lbnRzL3dlcHktc3dpdGNoL2luZGV4JyAvLyBhbGlhcyBleGFtcGxlXG4gIC8vIGltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInIC8vIGFsaWFzIGV4YW1wbGVcbiAgLy8gaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnXG4gIC8vIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgLy8gaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlPXRoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwiQ2VsbCDljZXlhYPmoLxcIlxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiQ2VsbDFcIjp7XCJjZWxsYmRcIjpcIuWNleihjOWIl+ihqFwifSxcIkNlbGwyXCI6e1wiY2VsbGJkXCI6XCLljZXooYzliJfooahcIixcImNlbGxmdFwiOlwi6K+m57uG5L+h5oGvXCJ9LFwiQ2VsbDNcIjp7XCJjZWxsYmRcIjpcIuWNleihjOWIl+ihqFwiLFwiY2VsbGZ0XCI6XCLor6bnu4bkv6Hmga9cIn0sXCJDZWxsNFwiOntcImNlbGxmdFwiOlwi6K+m57uG5L+h5oGvXCJ9LFwiQ2VsbDVcIjp7XCJjZWxsZnRcIjpcIuivpue7huS/oeaBr1wiLFwiY2xhc3NOYW1lXCI6XCJkai1jZWxsLS1zd2l0Y2hcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aGFuZGxlUmlnaHQuc3luY1wiOlwiaGFuZGxlU3dpdGNoQ2hhbmdlXCJ9LFwiU3dpdGNoMVwiOntcInYtYmluZDpjaGVja2VkLnN5bmNcIjpcImNoZWNrZWRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgQ2VsbDE6IENlbGwxLFxuICAgICAgQ2VsbDI6IENlbGwxLFxuICAgICAgQ2VsbDM6IENlbGwxLFxuICAgICAgQ2VsbDQ6IENlbGwxLFxuICAgICAgQ2VsbDU6IENlbGwxLFxuICAgICAgU3dpdGNoMTpTd2l0Y2gxXG4gICAgICAvLyBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIC8vIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgLy8gbGlzdDogTGlzdCxcbiAgICAgIC8vIGdyb3VwOiBHcm91cCxcbiAgICAgIC8vIHRvYXN0OiBUb2FzdFxuICAgIH1cblxuICAgIC8vbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIGhhbmRsZVN3aXRjaENoYW5nZShpZCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQ9IXRoaXMuY2hlY2tlZDtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==