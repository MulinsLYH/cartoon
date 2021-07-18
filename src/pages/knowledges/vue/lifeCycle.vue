<template>
<!-- vue-cli脚手架 
vue h5即是html5: 
    1.<!DOCTYPE html>声明，这样浏览器才能获知文档类型
    2.<meta charset="utf-8">“utf-8”是一种字符编码，使浏览器做“翻译”工作

app.vue:  
    1.<router-view>路由视图
    2.<keep-alive><router-view></router-view></keep-alive>实现页面缓存，加速页面加载
    当引入keep-alive的时候，页面第一次进入，钩子的触发顺序created-> mounted-> activated，退出时触发deactivated.
    当再次进入（前进或者后退）时，只触发activated。
    3.多文件全局css，类级别最高,可覆盖类名作用,但是要有样式嵌套，不然影响全局
    @import 'assets/index.less';
    样式span:nth-of-type(1)虽然好用,但对子集span都有影响,注意使用就行
    4.//全局接口

main.js
    1.vue的原型
    Vue.prototype.$axios = axios;
    Vue.prototype.$domain = 'vue原型变量';
    Vue.prototype.$teacher = function(){}//全局方法--不推荐
    2.路由拦截
    router.beforeEach((to, from, next) => {
    router.afterEach(transition => {
    //在vue项目中使用Nprogress.js进度条，希望每次页面载入的时候，浏览器顶部有载入动画  npm install nprogress --save
    3.Vue.config.productionTip = false
    //阻止启动生产消息
    4.创建和挂载vue实例
    new Vue({
        el: '#app',//绑定index.html的id
        router,//路由
        store,//vue原型的vuex
        components: { App },
        template: '<app/>'
    })
    5.加载js或css
    import '../static/capital/flexible.js';
    6.引入组件
    //引入iview组件(不支持移动端)  npm install iview --save
    import iView from 'iview'
    import 'iview/dist/styles/iview.css'
    Vue.use(iView);
    //引入element-ui  npm install element-ui --save
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    Vue.use(ElementUI);
    //使用mint-ui  npm install mint-ui --save
    import MintUI from 'mint-ui'
    import 'mint-ui/lib/style.css'
    Vue.use(MintUI);
    //引入ydui  npm install vue-ydui --save    npm install ydui-district --save
    import YDUI from 'vue-ydui';
    import 'vue-ydui/dist/ydui.rem.css';
    import 'vue-ydui/dist/ydui.px.css';
    import 'vue-ydui/dist/ydui.base.css';
    Vue.use(YDUI);
    7.pc端适配(不好用)  https://blog.csdn.net/weixin_41257563/article/details/97266234
    utils.js
        // const px2remLoader = {
        //   loader: 'px2rem-loader',
        //   options: {
        //     remUnit: 192
        //   }
        // }
        const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoader] : [cssLoader, px2remLoader]
    npm install lib-flexible --save
    npm install px2rem-loader --save-dev
    import '../static/capital/flexible.js';//加载js，并540改document.body.clientWidth
    配置build/utils.js，加入px2rem-loader

router/index.js
    1.export default new Router({
        mode: 'history',//vue 路径去掉#
    2.//引入路由的三种引入方式
        // import Twelve from '../pages/index/twelve';
        //@代表'/src'
        //import Twelve from '@/components/miss/twelve';
        //优化好
        //const Twelve = resolve => require(['@/pages/index/twelve'],resolve);
        //component: resolve => require(['../components/page/Login.vue'], resolve)
    3.  //重点:路由参数解决刷新丢失问题
        // 1.meta是路由参数,却不在path路径上,可以打印this或者打印this.$route看,用this.$route.meta获取
        // 2.路由传参,在路径上
    4.使用children: []
        路由跳转在这个children域内，包括$router.push跳转，要是children域内找不到就找parent域内
        parent用watch监听子域路由变化

请看build/utils.js配置
    //vue全局使用less样式文件
    // https://www.jianshu.com/p/2b1cd98c3062
    //安装npm install sass-resources-loader --save-dev
浏览器title的图标
    https://www.cnblogs.com/softwarefang/p/9405537.html
    favicon.ico在线制作
    http://www.faviconico.org/favicon -->
    <section id="lifeCycle">生命周期</section>
</template>

<script>
export default {
    name: 'lifeCycle',//组件名，用Vue.component时name相当于id
    props: ['importance'],//数据-父传子的绑定值
    components: {},//子父组件
    data(){//数据
        return{

        }
    },
    beforeCreate(){//创建前-用于拦截跳转---少用

    },
    created(){//创建后-无dom操作,用于创建数据---常用

    },
    mounted(){//挂在前-用于dom操作---常用

    },
    activated(){//移动端-创建前

    },
    beforeDestroy(){//销毁前-用于该页关闭后执行---用下面一个

    },
    destroyed() {//销毁后-用于该页关闭后执行---常用

    },
    computed:{//计算属性-用于vuex的getter

    },
    filters:{//过滤筛选

    },
    watch: {//监听数据变化，如输入框，路由变化

    },
    methods: {//方法

    }
}
</script>

<style lang="less" scoped>
#lifeCycle{
    .mixin_div(100%,50px,none,@color_blueviolet,center);
}
</style>


