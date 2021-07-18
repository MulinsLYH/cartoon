<template>
    <div id = "swiperDemo2">

        <div class="about-swiper">
                <swiper :options="swiperOption"  ref="mySwiper">  
                    <!-- 这部分放你要渲染的那些内容 -->  
                    <swiper-slide v-for="(item,index) in img" :key="index">  
                        <img :src="item.imgsrc"  class="main-img"/>
                    </swiper-slide> 
                    <!-- 这是轮播的小圆点 -->  
                    <div class="swiper-pagination" slot="pagination"></div>  
                </swiper>  
            </div>  
    </div>
</template>

<script>
/*
swiper栗子2说明：

参数名	        默认                        	描述
rotate       	50	                     slide做3d旋转时Y轴的旋转角度
stretch      	0	                     每个slide之间的拉伸值，越大slide靠得越紧。5.3.6 后可使用%百分比
depth           100	                     slide的位置深度。值越大z轴距离越远，看起来越小。
modifier	    1	                    depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。
slideShadows	true	                 是否开启slide阴影

*/ 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'swiperCoverflow',
    components: {  
        swiper,  
        swiperSlide  
    },  
    data(){

        return{
            swiperOption: {  
                effect : 'coverflow',//切换效果
                slidesPerView:1.2,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 30,
                    stretch: 10,
                    depth: 100,
                    modifier:2,//图片与图片之间的距离,缩小
                    slideShadows : true//是否有阴影
                }

            }, 
            img:[
                {id :1,imgsrc:'/static/images/swiperDemo/swiperImages1.jpg',},
                {id :2,imgsrc:'/static/images/swiperDemo/swiperImages2.jpg',},
                {id :3,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',},
                {id :4,imgsrc:'/static/images/swiperDemo/swiperImages1.jpg',},

            ],
            items:[],
            
        }
    },

    created(){
    //   this.$axios.get(`/api/v1/index/index/about?park=CURRENT_PARK_ID`)
    //         .then((res)=>{
    //             if(res.data.code == 1){
    //                 this.items = res.data.data;
    //                 this.img = res.data.data.album;
    //             }
    //         }).catch(err =>{
    //             this.$toast({
    //                 message :'加载失败',
    //                 position: 'center',
    //                 duration :1000,
    //                 callBack : function(){}
    //         })
    //     })


    },
     //定义这个sweiper对象  
    computed:{
		swiper() {  
            return this.$refs.mySwiper.swiper;  
        }  
	},
    mounted () {  
           
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法 
            if(this.img.lenght < 3) {
                this.swiper.slideTo(0, 0, false);  
            }else{
                this.swiper.slideTo(1, 0, false); 
            }

    },  
    methods: {
        

    }
    
}
</script>

<style lang="less" scoped>

#swiperDemo2{
  

    .about-swiper{
        width:100%;
        height:200px;
        img{
            width:100%;
            height:200px;
        }
    }

}

</style>