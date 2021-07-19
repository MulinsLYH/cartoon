<template>
    <section id="cache">
<!-- 浏览器缓存 -->
    </section>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.cookies();
        this.cookies2();
    },
    methods: {
        //浏览器开启都存在，关闭就删除   运行在服务器端
        sessionStorage(){
            sessionStorage.setItem('test_session','1jx-dk3');//设置
            sessionStorage.getItem('test_session');//获取
            // sessionStorage.removeItem('test_session');//删除
        },
        //永久，除非浏览器上手动删除
        localStorage(){
            localStorage.setItem('test_local','8sk-sy9');
            // localStorage.getItem('test_local');
            // localStorage.removeItem('test_local');
        },
        //可以设置有效时间，过了就删除  运行在客户端
        cookies(){
            // https://www.jianshu.com/p/535b53989b39
            // npm install vue-cookies --save
            // main.js配置
            // import VueCookies from 'vue-cookies'
            // Vue.use(VueCookies)

            // this.$cookies.set("test_u890", "value", "expireTimes", "path", "domain", "secure");
            
            // this.$cookies.set("test_cookies","GH1.1.1689020474.1484362313","2m");
            // this.$cookies.get("test_cookies");
            // this.$cookies.remove("test_cookies");
        },
        cookies2(){
            let json = {
                name: 'jsi-s',
                value: 'nin_876',
                date: '2h'
            }
            window.document.cookie = json.name + "=" + json.value + ";path=/;expires=" + json.date;
        }
    }
}
</script>

<style lang="less" scoped>
#cache{

}
</style>


