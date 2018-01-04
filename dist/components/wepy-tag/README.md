## Tag 标签

### 使用指南
在 app.wxss 中引入组件库所有样式
```css
@import "path/to/zanui-weapp/dist/index.wxss";
```

### 代码演示
直接在元素上添加`dj-tag`类即可。同时支持 danger, warn, primary 三种主题色。

添加`dj-tag--disabled`以后，会以不可用形式展示
```html
<view class="dj-tag">灰色</view>
<view class="dj-tag dj-tag--danger">会员折扣</view>
<view class="dj-tag dj-tag--warn">返现</view>
<view class="dj-tag dj-tag--primary">返现</view>
<!-- 不可用样式 -->
<view class="dj-tag dj-tag--disabled">不可用</view>
```

添加`dj-tag--plain`以后，即可展示镂空样式标签
```html
<view class="dj-tag dj-tag--warn dj-tag--plain">返现</view>
```
