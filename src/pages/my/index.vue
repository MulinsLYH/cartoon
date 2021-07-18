<template>
<!-- 我的页面 -->
    <section id = "my">
    
        <div class="headImage">
            <img :src="userMessage.avatar_img" alt="">
            <p class="user">{{userMessage.nickname}}</p>
            <p class="have"><span>砖石:{{userMessage.zhuangshi}}</span><span class="xiao">小鱼干:{{userMessage.smallFish}}</span></p>
            <i>设置</i>
        </div>
        <mt-cell title="阅读历史" is-link >
            <span>更多历史</span>
        </mt-cell>
        <mt-cell title="阅读领奖" is-link>
            <span>领取更多</span>
        </mt-cell>
        <mt-cell title="离线下载" is-link>
        </mt-cell>
         <mt-cell title="我的消息" is-link>
        </mt-cell>
        <mt-cell title="我的设置" is-link>
            <span>更多设置</span>
        </mt-cell>
        <mt-cell title="帮助与反馈" is-link>
        </mt-cell>
        <tabbar></tabbar>
    </section>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar'
import {mapMutations,mapGetters,mapActions} from 'vuex'

export default {
    name:'my',
    components:{
     tabbar
    },
    data(){
        return{
            userMessage : {}
           
        }
    },
   created(){
        this.userMessage = JSON.parse(this.$comMethods.getLocalStore('userInfo')) || this.userInfo;
    } ,
    computed: {
        ...mapGetters(['userInfo']),
    },  
    watch:{
     
    },
    mounted () { // 挂载到实例上去之后调用该钩子
        
    } ,  
    methods:{
          
           
            
    },
}
</script>

<style scoped lang="less">


#my{
    width:100%;
    height:auto;
    overflow: hidden;
    .headImage{
        width: 100%;
        height: 70px;
        position: relative;
        img{
            width: 50px;
            height: 50px;
            margin: 20px 0 10px 12px;
            border-radius: 50%;
            float: left;
        }
        p.user{
            padding-top: 30px;
            margin-left: 78px;
            font-size:15px;
            font-weight:bold;
            color:#100404;
            text-align:left;
        }
        .have{
            margin:3px 0 0  78px;
            font-size:13px;
            text-align:left;
            span{
                color: rgb(201, 199, 199);
                 &.xiao{
                    padding-left: 12px;
                }
            }
           
        }
        i{
            position: absolute;
            top: 12px;
            right: 16px;
            font-size:13px;

        }
    }
    
    a{

        width: 100%;
        text-align: left;
        span{
            font-size: 13px;
             color: rgb(201, 199, 199);
        }
    }    
  
   
}


</style>
