<template>
    <div id = "swiperDemo">

        <div class = "demo1 swiper-no-swiping">
            <swiper :options="swiperOption"  ref="mySwiper">  
                <!-- 这部分放你要渲染的那些内容 -->  
                <swiper-slide v-for="(item,index) in items" :key = "index"> 
                    <img  :src="item" class="index_img" >
                </swiper-slide>  
                <!-- 这是轮播的小圆点 -->  
                <div class="swiper-pagination" slot="pagination"></div>  
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>

                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>  
        </div>
    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'swiperDemo',
    components: {  
        swiper,  
        swiperSlide  
    },  
    data(){
        return{
            items:['/static/images/swiperDemo/swiperImages1.jpg','/static/images/swiperDemo/swiperImages2.jpg','/static/images/swiperDemo/swiperImages3.jpg','/static/images/swiperDemo/swiperImages1.jpg','/static/images/swiperDemo/swiperImages2.jpg','/static/images/swiperDemo/swiperImages3.jpg','/static/images/swiperDemo/swiperImages3.jpg',],
                swiperOption: {  
                    pagination: '.swiper-pagination',  
                    slidesPerView: 3,//一行显示3个
                    slidesPerColumn: 2,//显示2行
                    spaceBetween : 10,
                    loop:true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    },  
                }, 
                swiperSlides: [1, 2, 3, 4, 5]  
        }
    },

    created(){
      


    },
     //定义这个sweiper对象  
    computed:{
		swiper() {  
            return this.$refs.mySwiper.swiper;  
        }  	
	},
    mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            // this.swiper.lockSwipes();//禁止滑动  
            // console.log(this.swiper)
    },  
    methods: {
      
    }
    
}
</script>

<style lang="less" scoped>

#swiperDemo{
   

    .demo1{

         .swiper-slide{
            width:100%;
            height:100px;
            overflow:hidden;
        }

         .swiper-slide-active{
            width:100%;
            height:100px;
            overflow:hidden;
        }
        img{
            width:100%;
            height:100px;
        }
    }

}

</style>