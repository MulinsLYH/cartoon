<template>
  <div>

     <scroll  
      :data="xList"
      :scrollX="scrollX"
      :listenScroll = 'listenScroll'
       @scroll = 'scrollFn'
       @scrollToEnd = 'scrollToEnd'
        v-show = "xType == 1"  class="xWrapper">
             <ul  class="cartoon-types" ref = "content">
                 <li v-for = "(item,index) in xList" :class = "{on : index == listIndex}" @click = "change(index)">{{item}}</li>
            </ul>

		       <!--  <div class="loading" v-if = "loading" ref = "loading">{{ loadingText }}<img src="/static/images/loading1.gif" v-if = "loadingGif"/></div>-->
						<slot></slot>
        </scroll> 

        <div class= "xPicList"   v-show = "xType == 2" >
           <p class="xPicListTitle">{{xPicListTitle}}<span>更多 ></span></p>

            <scroll  
              :data="xHistoyList"
                :scrollX="xHistoryscrollX"
                :listenScroll = 'xHistoryListenScroll'
                @scroll = 'xHistoryscrollFn'
                @scrollToEnd = 'xHistoryscrollToEnd'
                 class="xPicListWrapper">
                      
                      <ul  class="picList"  ref = "picListContent">
                          <li v-for = "(item,index) in xHistoyList" :key = "index">
                                <img :src="item.imgsrc"/>
                                <h5>{{item.title}}</h5>
                                <p>{{item.alreadyRead}}话/{{item.read}}话</p>
                          </li>
                      </ul>
                    <!--<div class="loading" v-if = "xHistoryLoading" ref = "xHistoryLoading">{{ xHistoryLoadingText }}<img src="/static/images/loading1.gif" v-if = "xHistoryLoadingGif"/></div>-->
                      <slot></slot>
               </scroll> 
        </div>
  </div>
</template>

<script>

// 最好用vue-awesome-swiper做
import api from '@/api/xScoll'

import scroll from '@/components/scroll/scroll.vue'
import BScroll from 'better-scroll'

export default {
  name: '',
  components:{
		scroll
  },
  props: {
			xParams: {
              type:Object,
              default: null
      },
      xList : {
            type:Array,
            default: null
      },
      xType : {
            type:String,
            default:1
      },
      xHistoryParams: {
              type:Object,
              default: null
      },
      xHistoyList : {
            type:Array,
            default: null
      },
      xPicListTitle:{
            type:String,
            default:''
      }
 
		},
  data () {
    return {
    	 listenScroll : true,
     	 scrollX : true,
     	 listIndex : 0,
     	 loading : true,
        loadingText : '',
        loadingGif:true,

        x2datalist:[
          {index:0,imgsrc:'/static/images/home/douluo.png'},
          {index:2,imgsrc:'/static/images/home/douluo.png'},
          
          {index:3,imgsrc:'/static/images/home/douluo.png'},
          {index:4,imgsrc:'/static/images/home/douluo.png'},
          {index:5,imgsrc:'/static/images/home/douluo.png'},
          {index:6,imgsrc:'/static/images/home/douluo.png'},
          {index:7,imgsrc:'/static/images/home/douluo.png'},
          ],
          xHistoryListenScroll: true,
          xHistoryscrollX: true,
          xHistoryLoading : true,
          xHistoryLoadingText : '',
          xHistoryLoadingGif:true,
          xHistoryPulldown:false,

    }
  },
  created(){
    // console.log(this.xHistoyList,'xxxxssssxxxxx')
    if(this.xParams){
  		this.initData();
    }
    if(this.xHistoryParams){
      this.initxHistoryData();
    }
      
  },
  mounted(){
  		this.setWidth();
      this.picListContent();
    },
  methods:{
  		
  	 scrollFn(pos){  //触发监测滚动事件
      // console.log(pos.x)
     },
     xHistoryscrollFn(pos){  //触发监测滚动事件
      // console.log(pos.x)
     },
  	initData(){
      let that = this;
      if(!that.$parent.getxList()){
        return
      }
       that.$parent.getxList().then((res)=>{
              if(res.data.code == 1){
                    if(res.data.xList.length ==0){
                        that.pulldown = true;
                        that.loading = true;
                        that.loadingGif = false;
                        if(that.xParams.page==1){
                            that.loadingText = '暂无数据'
                            that.$emit('loaddata',res);
                        }else{
                            that.loadingText = '已加载全部数据'
                        }
                        return 
                    }
                    that.$emit('loaddata',res);
                    that.loading = false;
                }
          }).catch(err =>{
            that.$toast({
                message :'加载失败',
                position: 'center',
                duration :1000,
                callBack : function(){
                    that.loading = false;

                }
            })
          })
      },
      initxHistoryData(){
        let that = this;
        if(!that.$parent.getxHistoryList()){
          return
        }
        that.$parent.getxHistoryList().then((res)=>{
              if(res.data.code == 200){
                    if(res.data.list.length ==0){
                        that.xHistoryPulldown = true;
                        that.xHistoryLoading = true;
                        that.xHistoryLoadingGif = false;
                        if(that.xHistoryParams.page==1){
                            that.xHistoryLoadingText = '暂无数据'
                            that.$emit('xHistoryLoaddata',res);
                        }else{
                            that.xHistoryLoadingText = '已加载全部数据'
                        }
                        return 
                    }
                console.log(res,'xHistorysssLoadData')
                    that.$emit('xHistoryLoadData',res);
                    that.xHistoryLoading = false;
                }
          }).catch(err =>{
            that.$toast({
                message :"加载失败",
                position: 'center',
                duration :1000,
                callBack : function(){
                    that.xHistoryLoading = false;
                }
            })
          })
      },
     
     setWidth(){
  		 this.$nextTick(() => {
            var content = this.$refs.content;
            var li = content.children;
            var width = 0;
            for( let i=0;i<li.length;i++)
            {
                width += li[i].offsetWidth;
            }
            content.style.width = width + 4 +'px'; 
            
        });
  	},
    picListContent(){
  		 this.$nextTick(() => {
            var picListContent = this.$refs.picListContent;
            var li = picListContent.children;
            var width = 0;
            for( let i=0;i<li.length;i++)
            {
                width += li[i].offsetWidth + 11;
            }
            picListContent.style.width = width+'px'; 
            
        });
  	},
  	change(value){
        let that = this;

        that.listIndex = value
        window.clearTimeout(this.timer);//清除定时器
        that.timer = window.setTimeout(function () {
                that.xParams.type = that.xList[value];
                if(that.$refs.scrolllist){
                  that.$parent.refreshscolllist(that.xParams);
                }
                  that.initData()
        }, 400)
        // if(value != 0){
        //     that.$toast({
        //         message :"敬请期待",
        //         position: 'center',
        //         duration :1000,
        //         callBack : function(){}
        //     })
        // }
  	},
   scrollToEnd(){
        if(this.xType!='1'){
          return false
        }
        if(!this.pulldown){
        	 this.loading = true;
            this.loadingGif = true;
            this.xParams.page ++;
            this.initData();
         }
     },
     xHistoryscrollToEnd(){
        if(this.xType!='2'){
          return false
        }
        if(!this.xHistoryPulldown){
        	 this.xHistoryLoading = true;
            this.xHistoryLoadingGif = true;
            this.xHistoryParams.page ++;
            this.initxHistoryData();
         }
     },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">
.xPicList{
        width: 100%;
        height: auto;
      
      p.xPicListTitle{
        padding:12px 0 5px 10px;

        font-size:13px;
        font-weight:bold;
        color:#100404;
        text-align:left;
        background: #f4f4f4;  

        span{
          padding: 0 13px 0 10px;
          font-size:12px;
          font-weight: normal;
          color:#666;
          float:right;
        }
      }
    .xPicListWrapper{
       
        width:100%;
        background: #f4f4f4;  
        padding-bottom: 7px;
        overflow:hidden;                                      
  
          .picList{
              width:101%;
              float: left;
              overflow-y: hidden;
              li{
                height:130px;
                background:#fff;
                margin-left: 11px;
                border-radius:4px; 
                float: left;
                font-size: 12px;
                color: #666;
                cursor:pointer;
                img{
                  width:80px;
                  height:80px;

                }

                h5{
                  padding:5px 7px 7px 5px;
                  text-align:left;
                  color:#000;
                  
                }
                p{
                    padding-left:5px;
                    text-align:left;
                    color:#999;
                }
              }
           
      }
      	.loading{
            img{
                width: 30px;
                padding-top: 5px;
            }
          }
    }
}

.xWrapper{
	  position: relative;
    top: 6px;
   
    width:100%;
    background: #f4f4f4; 
    overflow:hidden;                                      
	.loading{
    img{
        width: 30px;
        padding-top: 5px;
    }
  }
  .cartoon-types{
          width: 101%;
			    height: 30px;
          // 高亮背景
          background:#511115;
          float: left;
          overflow-y: hidden;
          li{

            height: 30px;
            line-height: 30px;
            padding-left: 10px;
            padding-right: 10px;
            float: left;
            font-size: 12px;
            color: #666;
            cursor:pointer;
          }
          // 按钮高亮
          .on{
            font-size:16px;
            color:#fff;
          }
  }
	
}

</style>
