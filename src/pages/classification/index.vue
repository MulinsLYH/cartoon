<template>
<!-- 分类页面 -->
    <section id = "classificationIndex">
        <head-title :headTitle = 'headTitle' :isShow = 'true'></head-title>
        
         <more  @loaddata="loaddata" :params="params" class="wrap" ref = "wrapper" classNameA = "wrapper">
             <ul class="classificationWrap">
                <li :class="{active:classificationIndex == index}" v-for="(item,index) in dataList" @click="change(index)">{{item.type}}</li>
            </ul>

            <ul class="classificationWrap">
                <li :class="{active:newDataIndex == index}" v-for="(item,index) in newDataList" @click="changeNewDataList(index)">{{item.type}}</li>
                <span @click="spread">{{isSpreadText}}<i  :class="{spreadActive:isSpread}"></i></span>
            </ul>
            <ul class="classificationWrap" v-show="isSpread">
                <li :class="{active:statusDataIndex == index}" v-for="(item,index) in statusDataList" @click="changeStatusDataList(index)">{{item.type}}</li>
            </ul>
            <ul class="classificationWrap" v-show="isSpread">
                <li :class="{active:paymentDataIndex == index}" v-for="(item,index) in paymentDataList" @click="changePaymentDataList(index)">{{item.type}}</li>
            </ul>
            <ul class="classificationWrap" v-show="isSpread">
                <li :class="{active:nationDataIndex == index}" v-for="(item,index) in nationDataList" @click="changeNationDataList(index)">{{item.type}}</li>
            </ul>
            <div class="content1">
                <rows-and-columns  :dataList ="liatdata" :rows = 3 :isAutoHeight = 'true '@go = "go"></rows-and-columns>
            </div> 
        </more> 
        <tabbar></tabbar>
    </section>
</template>

<script>


import headTitle from '@/components/headTitle'
import more from '@/components/scroll/list-scroll.vue'
import rowsAndColumns from '@/components/rowsAndColumns/rows-and-columns.vue'
import api from '@/api/yScoll.js'
import tabbar from '@/components/tabbar/tabbar'


export default {
    name:'classificationIndex',
    components:{
        headTitle,
        more,
        rowsAndColumns,
        tabbar
    },
    data(){
        return{
            headTitle : '分类',
            dataList:[
                {id:0,type:'全部'},
                {id:1,type:'恋爱'},
                {id:2,type:'剧情'},
                {id:3,type:'日常'},
                {id:4,type:'恐怖'},
                {id:5,type:'犯罪'},
                {id:6,type:'悬疑'},
                {id:7,type:'武侠'},
                {id:8,type:'历史'},
                {id:9,type:'战争'},
                {id:10,type:'冒险'},
            ],
            classificationIndex:0,
            newDataList:[
                {id:0,type:'最热'},
                {id:1,type:'最新'},
                {id:2,type:'口碑'},
            ],
            newDataIndex:0,
            statusDataList:[
                {id:0,type:'全部'},
                {id:1,type:'连载'},
                {id:2,type:'完结'},
            ],
            statusDataIndex : 0,
            paymentDataList:[
                {id:0,type:'全部'},
                {id:1,type:'免费'},
                {id:2,type:'付费'},
                {id:3,type:'v会员'},
            ],
            paymentDataIndex: 0,
            nationDataList:[
                {id:0,type:'全部'},
                {id:1,type:'国漫'},
                {id:2,type:'日漫'},
                {id:3,type:'韩漫'},
            ],
            nationDataIndex : 0,
            isSpread : true,
            isSpreadText: '收起',
            liatdata:[//数据请求获取的
               
             ],
        }
    },
   created(){
        
    } ,
    computed: {
        //请求的接口以及参数
        params(){
            return {params:{cartoon:'CURRENT_CARTOON_ID',current_page:1,page_size:10,classificationIndex:this.classificationIndex+'',newDataIndex:this.newDataIndex+'',statusDataIndex:this.statusDataIndex+'',paymentDataIndex:this.paymentDataIndex+'',nationDataIndex:this.nationDataIndex+''}}
        }
    },  
    watch:{
     
    },
    mounted () { // 挂载到实例上去之后调用该钩子
        
    } ,  
    methods:{
          
            change(index){
                this.classificationIndex = index;
                this.$refs.wrapper.refreshFn(this.params)
            },
            changeNewDataList(index){
                this.newDataIndex = index;
                this.$refs.wrapper.refreshFn(this.params)
            },
            changeStatusDataList(index){
                this.statusDataIndex = index;
                this.$refs.wrapper.refreshFn(this.params)
            },
            changePaymentDataList(index){
                this.paymentDataIndex = index;
                this.$refs.wrapper.refreshFn(this.params)
            },
            changeNationDataList(index){
                this.nationDataIndex = index;
                this.$refs.wrapper.refreshFn(this.params)
            },
            spread(){
                this.isSpread = !this.isSpread;
                this.isSpread == true ? this.isSpreadText = '收起':this.isSpreadText = '展开';
            },
             //接收请求回来的数据
            loaddata(res){
                if(res.list.length == 0){
                    this.liatdata = [];
                }
                res.list.forEach(element => {
                    this.liatdata.push(element);
                });
            },
            getyList(){
                return api.queryClassificationList(this.params)          
            },
            //跳转至内页
            go(id){
                console.log(id)
                // this.$router.push(`/activeContent/${id}`);
            },
           
            
    },
}
</script>

<style scoped lang="less">
@import "~@/common/css/mixin.less";

#classificationIndex{
    width:100%;
    height:auto;
    overflow: hidden;
    ul.classificationWrap{

        .mixin_float(100%,auto,left);
        padding-left: 6px;
        background:@color_purple;
        li{
            padding: 10px 13px;
            color:@color_gray2;
            font-size: 13px;
            float: left;
            &.active{
                color:@color_white2;
            }
        }
        
        span{
            display: inline-block;
            padding: 10px 13px;
            color:@color_gray2;
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
   
   
}


</style>

<style>

</style>