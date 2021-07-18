<template>
  <div id="changeMulRowsAndCol">
        <p>{{mulRowsAndColTitle}}</p>
        <rows-and-columns ref = "mulrow" :dataList ="newList" :rows = "rows"></rows-and-columns>
        <ul class= "btn" v-show="isShow">
            <li>更多</li>
            <li  @click="change">换一批</li>
        </ul> 
  </div>
</template>

<script>
/**
小栗子说明：
1）有余数：
固定10条数据，只能切换展示4条
2）无余数：qList 是num的几陪
3)最少8条


 */


import rowsAndColumns from '@/components/rowsAndColumns/rows-and-columns.vue'
 
export default {
  name: 'changeMulRowsAndCol',
  props:{
      mulRowsAndColTitle:{
          type:String,
          default:'热血番'
      },
      //一行展示的列数 2或3

      rows:{
          type:Number,
          default:2
      },
    //一页展示list数量
      num:{
          type:Number,
          default:4
      },
      isShow:{
          type:Boolean,
          default:false

      }
  },
  components:{
      rowsAndColumns,
  },
  data () {
    return {
            // qList: [1,2,3,4,5,6,7,8,9,10],//有余数
            // qList: [1,2,3,4,5,6,7,8,9,10,11,12],//是num的几陪
            qList: [//数据请求获取的
                {id:0,imgsrc:'/static/images/swiperDemo/swiperImages4.jpg',title:'斗罗大陆1',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                {id:1,imgsrc:'/static/images/swiperDemo/swiperImages5.jpg',title:'斗罗大陆2',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                {id:2,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',title:'斗罗大陆3',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                {id:3,imgsrc:'/static/images/swiperDemo/swiperImages4.jpg',title:'斗罗大陆4',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                {id:4,imgsrc:'/static/images/swiperDemo/swiperImages5.jpg',title:'斗罗大陆5',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                {id:5,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',title:'斗罗大陆6',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                {id:6,imgsrc:'/static/images/swiperDemo/swiperImages4.jpg',title:'斗罗大陆7',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                {id:7,imgsrc:'/static/images/swiperDemo/swiperImages5.jpg',title:'斗罗大陆8',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                {id:8,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',title:'斗罗大陆9',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                {id:9,imgsrc:'/static/images/swiperDemo/swiperImages4.jpg',title:'斗罗大陆10',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                {id:10,imgsrc:'/static/images/swiperDemo/swiperImages5.jpg',title:'斗罗大陆11',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                {id:11,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',title:'斗罗大陆12',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},

             ],
            //处理后的list
            newList: [],
            //截取第几组的开始参数
            timeStart: 0,
            //截取第几组的结束参数
            timeEnd: 1,
            //默认为0组
            group: 0,
            //一页展示list数量
            // num: 4,
            //点击的次数
            clickNum: 0,
            //一行展示的列数 2或3
            // rows : 2,

    }                                                                                                   
  },
  created() {
    
    this.getData();
  },
  mounted(){
  },
  methods:{ 
            getData(){
                let that = this;
                 if(!that.$parent.getList()){
                    return
                }
                this.$parent.getList().then(res => {
                    var data = res.data.list;
                    this.qList = data.slice(0,12);
                    this.renderR();
                })
                .catch(err => {
        
                });
            },
            change() {
                if (this.qList.length > 7 && this.qList.length > this.num) {
                    this.listen();
                    this.autoIncre();
                    this.renderR();
                    this.reset();
                }
            },
             //截取当前每组的数据
            renderR() {
                this.newList = this.qList.slice(
                this.num * this.timeStart, 
                this.num * this.timeEnd 
                 );
            },
            // 计算数据的长度，共分为几组，如果不能整除则加1

            listen(){
                var len = this.qList.length;
                this.group = len / this.num;
                if (len % this.num != 0) {
                    this.group = parseInt(this.group) + 1;
                }
            },
             //每点击一次，记录次数
            autoIncre() {
                this.clickNum++;
                this.timeStart++;
                this.timeEnd++;
            },
            reset(){
                    
               
                var yu = this.qList.length%this.num;//余数

                if(this.clickNum > this.group-2&&!yu){
                    this.timeStart =-1;
                    this.timeEnd = 0;
                    this.clickNum = -1;
                }
                // 0,1 1,2 0.5,1.5 1.5,2.5
                if (this.clickNum > this.group-2&&yu) {
                    var remainder = this.num-(this.qList.length%this.num);
                    if(this.newList.length!==this.num){
                        this.timeStart =(remainder/this.num)-1;
                        this.timeEnd = (remainder+this.num)/this.num-1;
                        for(var i = 0;i<=remainder-1;i++){
                            this.newList.push(this.qList[i])
                        }
                    }else if(this.newList.slice(0,1)[0] == this.qList.slice(-this.num)[0]){

                        this.timeStart =-1;
                        this.timeEnd = 0;
                        this.clickNum = -1;
                    }
                }
            },
          
           
            
            
           
          
          
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">

#changeMulRowsAndCol{
    width:100%;
    height:auto;
    background: rgb(244,244,244);
    padding-bottom: 8px;
    overflow:hidden;
    p{
        padding:7px 0 7px 10px;
        font-size:13px;
        font-weight:bold;
        color:#100404;
        text-align:left;
    }
    .btn{
            width:95%;
            height:20px;
            background:#e1e1e3;
            margin:0 auto;
            border-radius:9px;

        li{
            width:50%;
            height:20px;
            line-height:20px;
            border-right:1px solid #d5d5d8;
            font-size:12px;
            color:#666;
            float:left;
            &:last-child{
                border:0;
            }
        }
    }
}
</style>
