<template>
    <section id="rem">
        <!-- 移动端适配 -->
        <!-- 注意:谷歌浏览器最小字体为12像素,项目要用大于12的字体，选16就好
        应用自动转换px为rem   https://www.cnblogs.com/wangqiao170/p/8652505.html
        npm install postcss-pxtorem --save-dev
        配置postcssrc.js文件，而16为字体大小
        plugins 属性加入
        "postcss-pxtorem": {
        "rootValue": 16,
        "propList": ["*"]
        } -->
        
        <div class="adapt">移动端px转rem</div>
        <!-- 移动端适配概念:res配置的是字体大小font-size,根据字体大小定义盒子的宽高
        字体大小为变量，并非固定是16-->
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
/*  375的设计图量像素除以16 */
/*  40/16= 2.5rem
    margin，border也得转rem,除了百分比，移动端像素都要转rem
    如今使用自动转换，不用计算
*/
#rem{
    .adapt{
        width: 345px;
        height: 40px;
        margin-left: 15px;
        background: plum;
        text-align: center;
        line-height: 40px;
        color: white;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid red;
    }
}
</style>


