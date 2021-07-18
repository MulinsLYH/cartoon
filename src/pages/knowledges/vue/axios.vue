<template>
    <section>

    </section>
</template>

<script>
//配置main.js
// 引入axios已封的文件
// import axios from './config/axios'

// Vue.prototype.$axios = axios;//将已封装axios挂载在vue实例原型上

// import { login } from "@/api/user";
export default {
    data(){
        return{

        }
    },
    created(){
        // this.interface();
        // this.http2();
    },
    methods: {
        //不推荐---因为再mockjs中get请求，参数接收不到
        http1(){
            //这个是配置axios的请求方式
            let that = this;
            let json = {
                username: "admin",
                password: "123456"
            }
            that.$apihttp.post('/user/login',json).then((res) => {
                console.log('H-token',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        //推荐
        http2(){
            let that = this;
            let json = {
                username: "admin",
                password: "123456"
            }
            that.$apihttp({
                url: '/user/login',
                method: 'get',
                data: json
            }).then((res) => {
                console.log('H-token',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        //封装接口在一处，单个变量用
        interface(){
            let json = {
                username: "admin",
                password: "123456"
            }
            login(json).then(res => {
                console.log('返回的参数',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>
