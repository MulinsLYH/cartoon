<template>
    <transition name="slide-fade">
        <div class="search-box" v-show="showSearch">
            <div class="search-tab">
                <div class="search-input"><input v-focus="showSearch" ref="searchInput" placeholder="请输入搜索关键词" v-model.trim="searchvalue" @keyup.enter = 'search'/></div>
                <span @click="close">取消</span>
            </div>
            <div class="search-record" v-show="isHistory">
                <h3>历史搜索<i class="fr" @click="clearRecord">x</i></h3>
                <ul class="record-item">
                    <li v-for="(item,index) in data" @click="searchItem(item)">{{item}}</li>
                </ul>
            </div>
            <global-box :isGlobalBox = "isGlobalBox" msg = "确定删除吗？" @cancel = "cancel" @sure = "sure"></global-box>
        </div>
    </transition>
</template>
<script>
import globalBox from '@/components/globalBox/global-box.vue'
export default {
    name: "",
    data() {
        return {
            searchvalue:'',
            showSearch:false,
            isGlobalBox:false,
            data:['动漫','搜索内容','斗罗','不知道什么内容','云书','搜容搜'],
            isHistory:true
        };
    },
    components:{
        globalBox
    },
    watch:{
        data(curVal,oldVal){
            
            if(curVal.length){

                this.isHistory = true;
            }else{
                this.isHistory = false;

            }
        }
    },
    methods:{
        show(){
            this.showSearch = !this.showSearch;
            if(this.$comMethods.getSessionStore('searchRecord')){
                this.data = JSON.parse(this.$comMethods.getSessionStore('searchRecord'));
            }
        },
        close(){
            this.searchvalue = '';
            this.showSearch = false;
        },
        search(){
            let ischongfu = false;
            this.data.forEach(element => {
                if(element == this.searchvalue) return ischongfu = true;
            });
            if(this.searchvalue != ''){
                if(ischongfu == false){
                    this.data.unshift(this.searchvalue);
                    this.$comMethods.setSessionStore('searchRecord',this.data);
                }
                this.$emit('searchCallBack',this.searchvalue);//需要在引用页面添加一个回调函数
            }else{
                this.$toast({
                    message :'请输入搜索内容',
                    position: 'center',
                    duration :1000,
                    callBack : function(){}
                })
            }
        },
        searchItem(value){
            this.searchvalue = value;
            this.$emit('searchCallBack',value);//需要在引用页面添加一个回调函数
            
        },
        clearRecord(){
            this.isGlobalBox = true;
        },
        cancel(){//取消删除
            this.isGlobalBox = false;
        },
        sure (){//删除帖子
            this.data = [];
            this.isGlobalBox = false;
            this.$comMethods.setSessionStore('searchRecord',this.data);
            this.$toast({
                message :'删除成功',
                callBack : function(){}
            })
        },
    },
    //自定义指令
    directives: {
        focus: {
            // 指令的定义
            inserted: function (el) {
                el.focus()
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(8px);
  opacity: 0;
}

.search-box{
    position: fixed;
    top:0;
    bottom: 0;
    left:0;
    z-index: 100;
    width:100%;
    // height:100%;
    background: rgb(255,255,255);
    overflow-y: auto;
    .search-tab{
        width: 100%;
        display: -webkit-box;
        display: -ms-box;
        padding: 8px 0;
        .search-input{
            position: relative;
            z-index: 0;
            -webkit-box-flex: 1;
            -ms-box-flex: 1;
            box-sizing: margin-box;
            height: 30px;
            margin:0 ;
            background: rgb(245,245,245);
            border-radius: 5px;
            input{
                width: 100%;
                padding:0 2.4px 0 6.4px;
                box-sizing: margin-box;
                background: none;
                border:none;
                line-height: 30px;
                font-size: 12px;
                color:rgb(51,51,51);
            }
            // &:after{
                // position: absolute;
                // top:0px;
                // left:313px;
                // z-index: 1;
                // content: '';
                // width:30px;
                // height:30px;
                // background: url('/static/images/list-icon.png') no-repeat -108px -116px;
                // background-size: 226px 159px;
            // }
        }
        span{
            display: block;
            line-height:30px;
            font-size:14px;
            color: rgb(102,102,102);
            cursor: pointer;
        }
    }
    .search-record{
        padding: 0 10px;
        text-align: left;
        h3{ 
            position:relative;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            color: #666666;
            i{
                width: 30px;
                height: 30px;
                cursor: pointer;
                text-align: center;
                // &:after{
                //     position: absolute;
                //     top:0.64px;
                //     right:0.64px;
                //     content: '';
                //     width:30px;
                //     height:40px;
                //     // background: url('~@/assets/images/list-icon.png') no-repeat -8.8px -4.32px;
                //     background: url('/static/images/list-icon.png') no-repeat -116px -59px;
                //     background-size: 226px 159px;
                // }
            }
        }
        .record-item{
            li{
                display: inline-block;
                height: 20px;
                padding: 0 10px;
                margin-right: 5px;
                margin-bottom: 5px;
                border: 0.0625rem solid #e6e6e6;
                border-radius:3px; 
                line-height: 20px;
                font-size: 14px;
                color: #333333;
                text-align: center;
            }
        }
    }
}
</style>