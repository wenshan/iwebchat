# toast组件

## 说明
官方toast组件只支持显示`success`，`loading`两种icon，因此需要一个更加个性化的toast组件。

## 使用

### 安装组件
```
npm install @f2e/wepy-toast --save
```

### 引入组件
```javascript
// index.wpy
<template>
    <component id="toast"></component>
</template>
<script>
    import wepy from 'wepy';
    import Toast from 'wepy-toast';

    export default class Index extends wepy.page {
        components = {
            toast: Toast
        };
    }
</script>
```


### 调用方法
```javascript
let promise = this.$invoke('toast', 'show', {
    title: '自定义标题',
    img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png',
});

promise.then((d) => {
    console.log('toast done');
});
```
