<template>
    <div id="home">
        <div class="containss" style="width:5.208rem;"><span>{{youcanyouup}}home===&&&{{money}}</span></div>
        <div class="children">
            <router-view/>
        </div>
    </div>
</template>

<script>
	import {mapMutations,mapGetters,mapActions} from 'vuex'
import api from '@/api/user'
export default {
    name: 'home',
    data(){
        return{

        }
    },

    created(){
        sessionStorage.setItem('token','hy-886544')
        // this.http1()
        // this.$comMethods.sb()

        this.$store.commit('chiji',{title: 'money',params: 9966999222});//调用mutation方法，并传递数据

		// this.$store.dispatch('yaya','yaydsa');//调用action+


    },
    computed:{
			...mapGetters(['youcanyouup','money'])
		},
    methods: {
           //推荐
        http1(){
            //这个是配置axios的请求方式，但没有封装好api
            let that = this;
            let json = {
                username: "gggg",
                password: "1234567890"
            }
        
            that.$axios.post('/backend/account/checklogin',json).then((res) => {
                console.log('H-token',res);
            }).catch((err)=>{
                // console.log('error',err);
            })
        },
         http1(){
            //这个是配置axios的请求方式，但没有封装好api
            let that = this;
            let json = {
                username: "gggg",
                password: "1234567890"
            }
        
           api.login(json).then((res) => {
                console.log('H-token',res);
            }).catch((err)=>{
                // console.log('error',err);
            })
        },
    }
    
}
</script>

<style lang="less" scoped>
#home{
    @color_dimgray: #735885;//center说明字体
    .mixin_div(100%,400px,red,blue,center);
    .containss{
        .mixin_div(50%,400px,red,blue,center);
        float: left;
        span{
            color: @color_dimgray;
        }
    }
    .children{
        .mixin_div(50%,300px,blue,brown,center);
        float: right;
    }
}
</style>