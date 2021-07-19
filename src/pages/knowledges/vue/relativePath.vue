<template>
    <section id="relativePath">
        <h1>图片相对路径</h1>
        <h3>src不绑定变量时：</h3>
        <!-- <img src="../../../assets/lizhi.jpg"/> -->
        <h3>src绑定变量时：import相对变量</h3>
        <!-- <img :src="import_ai"/> -->
        <!-- <h3>src绑定变量时：require相对变量</h3>
        <img :src="require_ai"/> -->
    </section>
</template>

<script>

/* 

./src/assets ^\.\/.*$
Module not found: Error: Can't resolve 'style-loader' in 


样式下
background: url('~@/assets/theme/logo_blue.png') no-repeat center center;

1.相对路径: "./assets/logo_blue.png" 路径容易报错，找不到
2.没有前缀的路径 "assets/logo_blue.png" 被webpack解析为 相对路径
推荐3.带~的路径  "~@/assets/theme/logo_blue.png" 被webpack解析为 require(src/assets/theme/logo_blue.png) 动态引入   @等于/src
4.相对根目录的路径 "/assets/logo_blue.png" webpack不解析

*/
// import lizhi from '../../../assets/lizhi.jpg'
export default {
    name: 'relativePath',
    data () {
        return {
            import_ai: '',
            require_ai: ''
        }
    },
    created(){
        // this.importAi();
        // this.requireAi();
    },
    methods:{
        importAi(){
            this.import_ai = lizhi;
            console.log('import=', this.import_ai)
        },
        // requireAi(){
        //     // this.require_ai = require('../../../assets/lizhi.jpg');
        //     let imgName = 'lizhi.jpg'
        //     // this.require_ai = require('../../../assets/' + imgName);
        //     this.require_ai = require(`../../../assets/${imgName}`);
        //     console.log('require=', this.require_ai);
        // }
    }
}
</script>

<style lang="less" scoped>
#relativePath {
    color: yellowgreen;
    img {
        width: 100px;
        height: 100px;
    }
}
</style>