<template>
    <section id="import-ex">
        <div class="quality">
            <span>{{loading}}</span>
        </div>
    </section>
</template>

<script>
// 引用js
import constroller from './quote/quote_constroller.js';
export default constroller;
</script>

<style lang="less" rel="stylesheet/less" scoped>
//安装less依赖  要配置
// cnpm install less less-loader --save
// 使用:https://www.cnblogs.com/lin-dong/p/6711224.html  至  https://www.cnblogs.com/mafeng/p/7692279.html
@import './quote/quote_constroller.less';
// 以下不建议
//安装scss依赖  无需配置
// npm install node-sass sass-loader -D
</style>
