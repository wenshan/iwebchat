## Button 按钮

### 使用指南
在 app.wxss 中引入组件库所有样式
```css
@import "path/to/zanui-weapp/dist/index.wxss";
```

### 代码演示

#### 基础用法
```html
<button class="dj-btn">取消订单</button>
```

#### 按钮类型
按钮支持额外的三种类型 primary, danger, warn
```html
<button class="dj-btn dj-btn--primary">确认付款</button>
<button class="dj-btn dj-btn--danger">确认付款</button>
<button class="dj-btn dj-btn--warn">确认付款</button>
```

#### 按钮大小
按钮支持额外三种大小 large, small, mini
```html
<button class="dj-btn dj-btn--large">确认付款</button>
<button class="dj-btn dj-btn--small">取消订单</button>
<button class="dj-btn dj-btn--mini">确认付款</button>
```

#### 其他
按钮支持镂空状态，可以直接使用 dj-btn--plain
```html
<button class="dj-btn dj-btn--primary dj-btn--plain">确认付款</button>
```
同时支持加载状态，可以使用 dj-btn--loading 获得
```html
<button class="dj-btn dj-btn--loading">确认付款</button>
```

![](https://img.yzcdn.cn/public_files/2017/02/08/1b1e39ed3dc6b63519a68ba1e2650cfc.png)
