<template>
<!-- 知识点页面 -->
    <section id = "knowledgesIndex">
        <head-title :headTitle = 'headTitle' :isShow = 'true' :isGoBack = 'false'></head-title>
             <ul class="knowledgesIndexWrap">
                <li :class="{active:typeIndex == index}" v-for="(item,index) in typeDataList" @click="typeChange(index)">{{item.type}}</li>
            </ul>
             <ul class="knowledgesIndexWrap" v-show="typeIndex==0">
                <li :class="{active:knowledgesIndex == index}" v-for="(item,index) in dataList" @click="change(index)">{{item.type}}</li>
            </ul>
            <ul class="knowledgesIndexWrap"  v-show="typeIndex==1">
                <li :class="{active:jsIndex == index}" v-for="(item,index) in jsDataList" @click="jsDataChange(index)">{{item.type}}</li>
            </ul>
            <ul class="knowledgesIndexWrap"  v-show="typeIndex==2">
                <li :class="{active:vueIndex == index}" v-for="(item,index) in vueDataList" @click="vueDataChange(index)">{{item.type}}</li>
            </ul>
            <div class="children">
                <router-view></router-view>
            </div>
        <tabbar></tabbar>
    </section>
</template>

<script>


import headTitle from '@/components/headTitle'
import tabbar from '@/components/tabbar/tabbar'


export default {
    name:'knowledgesIndex',
    components:{
        headTitle,
        tabbar
    },
    data(){
        return{
            headTitle : '知识点',
            typeDataList:[
                {id:0,type:'swiper'},
                {id:1,type:'js'},
                {id:2,type:'vue'},
            ],
            typeIndex:this.$comMethods.getSessionStore('typeIndex')||0,
            dataList:[
                {id:0,type:'内容滑动导航自动切换'},
                {id:1,type:'切换效果'},
                {id:2,type:'经典'},
                {id:3,type:'缩略图'},
                {id:4,type:'网格分布'},
            ],
            knowledgesIndex:this.$route.meta.index||0,
            jsDataList:[
                {id:0,type:'es6'},
                {id:1,type:'js基础1'},
                {id:2,type:'js基础2'},
                {id:3,type:'js基础3'},
                {id:4,type:'进修'},
                {id:5,type:'js例子'},
            ],
            jsIndex:this.$route.meta.index||0,

            // vue指令
             vueDataList:[
                {id:0,type:'vue指令'},
                {id:1,type:'vue修饰符'},
                {id:2,type:'生命周期'},
                {id:3,type:'vuex'},
                {id:4,type:'组件遍历'},
                {id:5,type:'路由传参'},
                {id:6,type:'动态样式'},
                {id:7,type:'引用less'},
                {id:8,type:'子父通讯'},
                {id:9,type:'全局方法'},
                {id:10,type:'watch监听'},
                {id:11,type:'computed'},
                {id:12,type:'filters'},
                {id:13,type:'transition'},
                {id:14,type:'refs'},
                {id:15,type:'mock模拟接口'},
                {id:16,type:'缓存'},
                {id:17,type:'axios配置'},
                {id:18,type:'图片相对路径'},
            ],
            vueIndex:this.$route.meta.index||0,
            isSpread : false,
            isSpreadText: '收起',
       
        }
    },
   created(){
        
    } ,
    computed: {
       
    },  
    watch:{
        $route(to, from) {//监听路由变化，前提要有视图<router-view></router-view>
            if(to.name == 'swiperAutoNavAndContent'){
                this.$comMethods.setSessionStore('typeIndex',0);
                this.knowledgesIndex = 0;
            }
        },
    },
    mounted () { // 挂载到实例上去之后调用该钩子
        
    },  
    methods:{
                   
            typeChange(index){
                this.typeIndex = index;
                this.$comMethods.setSessionStore('typeIndex',index);
                switch(index){
                    case 0:
                        this.$router.push('/swiperAutoNavAndContent')
                        this.knowledgesIndex = 0;
                        break;//break结束以下流程,如果不使用break，不管上面一个条件是否成立都继续向下判断
                    case 1:
                        this.$router.push('/es6')
                        this.jsIndex=0;

                        break;
                    case 2:
                        this.$router.push('/vTag')
                        this.vueIndex=0
                        break;
                    default://以上case均不成立，才执行
                        this.$router.push('/swiperAutoNavAndContent')
                }
            },
            change(index){
                this.knowledgesIndex = index;
                switch(index){
                    case 0:
                        this.$router.push('/swiperAutoNavAndContent')
                        break;//break结束以下流程,如果不使用break，不管上面一个条件是否成立都继续向下判断
                    case 1:
                        this.$router.push('/swiperCoverflow')
                        break;
                    case 2:
                        this.$router.push('/swiperNavigation')
                        break;
                    case 3:
                        this.$router.push('/swiperThumbs')
                        break;
                     case 4:
                        this.$router.push('/swiperGrid')
                        break;
                    
                    default://以上case均不成立，才执行
                        this.$router.push('/swiperAutoNavAndContent')
                }
            },
         jsDataChange(index){
                this.jsIndex= index;
                switch(index){
                    case 0:
                        this.$router.push('/es6')
                        break;//break结束以下流程,如果不使用break，不管上面一个条件是否成立都继续向下判断
                    case 1:
                        this.$router.push('/learn1')
                        break;
                    case 2:
                        this.$router.push('/learn2')
                        break;
                    case 3:
                        this.$router.push('/learn3')
                        break;
                     case 4:
                        this.$router.push('/processing')
                        break;
                     case 5:
                        this.$router.push('/jsDemo')
                        break;
                  
                    default://以上case均不成立，才执行
                        this.$router.push('/es6')
                }
            },
            vueDataChange(index){
                this.vueIndex= index;
                switch(index){
                    case 0:
                        this.$router.push('/vTag')
                        break;//break结束以下流程,如果不使用break，不管上面一个条件是否成立都继续向下判断
                    case 1:
                        this.$router.push('/modifier')
                        break;
                    case 2:
                        this.$router.push('/lifecycle')
                        break;
                    case 3:
                        this.$router.push('/vuex')
                        break;
                     case 4:
                        this.$router.push('/ergodic')
                        break;
                     case 5:
                        this.$router.push('/router')
                        break;
                    case 6:
                        this.$router.push('/class')
                        break;
                     case 7:
                        this.$router.push('/quote')
                        break;
                     case 8:
                        this.$router.push('/parent')
                        break;
                     case 9:
                        this.$router.push('/public')
                        break;
                     case 10:
                        this.$router.push('/watch')
                        break;
                     case 11:
                        this.$router.push('/computed')
                        break;
                     case 12:
                        this.$router.push('/filters')
                        break;
                     case 13:
                        this.$router.push('/transition')
                        break;
                     case 14:
                        this.$router.push('/refs')
                        break;
                     case 15:
                        this.$router.push('/mock')
                        break;
                     case 16:
                        this.$router.push('/cache')
                        break;
                     case 17:
                        this.$router.push('/axios')
                        break;
                     case 18:
                        this.$router.push('/relativePath')
                        break;
                    
                    default://以上case均不成立，才执行
                        this.$router.push('/vTag')
                }
            },
            
          
            
    },
}
</script>

<style scoped lang="less">
@import "~@/common/css/mixin.less";

#knowledgesIndex{
    width:100%;
    height:auto;
    padding: 40px 0 0 0;
    overflow: hidden;
    ul.knowledgesIndexWrap{

        width: 100%;
        height: auto;
        padding-left: 6px;
        background: rgb(244, 244, 244);
        float: left;
        li{
            padding: 10px 13px;
            color: #333;
            font-size: 13px;
            float: left;
            &.active{
            color:@color_white2;
            }
        }
        span{
            display: inline-block;
            padding: 10px 13px;
            color: #333;
            font-size: 13px;
            position: relative;
            right: -62px;
            i{
                position: absolute;
                top: -25%;
                right: 0;
                width:0; 
                height:0;
                margin-top: 20px;
                border-width:5px;
                border-style:solid;
                border-color:transparent transparent  #000 transparent;
                 &.spreadActive{
                    position: absolute;
                    top: -12%;
                    right: 0;
                    width:0; 
                    height:0;
                    margin-top: 20px;
                    border-width:5px;
                    border-style:solid;
                    border-color: #000 transparent transparent  transparent;

                }
            }
        }
        
    }
    .children{
        padding: 180px 0 56px 0;
    }
   
   
}
</style>

