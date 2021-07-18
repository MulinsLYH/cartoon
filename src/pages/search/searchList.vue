<template>
  <section id="searchList">
        <scroll  @loaddata="loaddata" :params="params" :searchvalue="searchvalue">
            <div class="content1">
                <rows-and-columns  :dataList ="liatdata" :rows = 3 :isAutoHeight = 'true '@go = "go"></rows-and-columns>
            </div>
        </scroll>
  </section>
</template>

<script>
import scroll from '@/components/scroll/list-scroll.vue'
import search from '@/components/search/search.vue'
import rowsAndColumns from '@/components/rowsAndColumns/rows-and-columns.vue'
import api from '@/api/yScoll.js/'
export default {
    name: 'searchList',
    components:{
        scroll,
        search,
        rowsAndColumns
    },
    data () {
        return {
            searchvalue:'',
            liatdata:[//数据请求获取的
                // {id:0,imgsrc:'/static/images/swiperDemo/swiperImages4.jpg',title:'斗罗大陆1',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                // {id:1,imgsrc:'/static/images/swiperDemo/swiperImages5.jpg',title:'斗罗大陆2',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                // {id:2,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',title:'斗罗大陆3',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                // {id:3,imgsrc:'/static/images/swiperDemo/swiperImages4.jpg',title:'斗罗大陆4',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                // {id:4,imgsrc:'/static/images/swiperDemo/swiperImages5.jpg',title:'斗罗大陆5',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                // {id:5,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',title:'斗罗大陆6',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                // {id:6,imgsrc:'/static/images/swiperDemo/swiperImages4.jpg',title:'斗罗大陆7',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                // {id:7,imgsrc:'/static/images/swiperDemo/swiperImages5.jpg',title:'斗罗大陆8',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                // {id:8,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',title:'斗罗大陆9',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                // {id:9,imgsrc:'/static/images/swiperDemo/swiperImages4.jpg',title:'斗罗大陆10',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                // {id:10,imgsrc:'/static/images/swiperDemo/swiperImages5.jpg',title:'斗罗大陆11',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
                // {id:11,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',title:'斗罗大陆12',des:'描述描述描述描述描述描述描述描述描述描述描述描述'},
             ],
        }
    },
    created () {
        this.searchvalue = this.$route.params.value//接收搜索关键词
    },
    methods:{
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
            return api.querySearchList(this.params)        
        },
        //跳转至内页
        go(id){
            console.log(id)
            // this.$router.push(`/activeContent/${id}`);
        },
        
    },
    computed: {
        //请求的接口以及参数
        params(){ 
            return {params:{cartoon:'CURRENT_CARTOON_ID',current_page:1,page_size:10,keyword:this.searchvalue}}
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">
#searchList{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgb(244,244,244);
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.list-fade-enter-active {
  transition: all .3s ease;
}
.list-fade-leave-active {
  transition: all .3s ease;
}
.list-fade-enter, .list-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(1rem);
  opacity: 0;
}

</style>
