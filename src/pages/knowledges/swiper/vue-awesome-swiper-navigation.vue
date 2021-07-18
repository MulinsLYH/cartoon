<template>
    <div id = "swiperDemo3">

    
            <div class="about-swiper">
                <swiper :options="swiperOption"  ref="mySwiper">  
                    <!-- 这部分放你要渲染的那些内容 -->  
                    <swiper-slide v-for="(item,index) in img" :key="index">  
                        <img :src="item.imgsrc"  class="main-img"/>
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
/*
swiper栗子3说明：
                经典栗子
*/

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'swiperNavigation',
    components: {  
        swiper,  
        swiperSlide  
    },  
    data(){

        return{
            swiperOption: {  
                effect : 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,//动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
                    dynamicMainBullets: 2,//动态分页器的主指示点的数量
                    clickable :true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                direction: "horizontal",
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 20,
                observer: true,
                observeParents: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,//disableOnInteraction用户操作swiper之后，是否禁止autoplay。默认为true：停止。
                                                // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
                                                // 操作包括触碰(touch)，拖动，点击pagination等。
                },
                // /*触碰后还能够继续轮播*/ 
                autoplayDisableOnInteraction: true, 
                loop: true, 
                slideToClickedSlide: true,//点击跟随滑动

            }, 

            img:[
                {id :1.1,imgsrc:'/static/images/swiperDemo/swiperImages1.jpg',},
                {id :2,imgsrc:'/static/images/swiperDemo/swiperImages2.jpg',},
                {id :3,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',},
                {id :4,imgsrc:'/static/images/swiperDemo/swiperImages1.jpg',},
                {id :5,imgsrc:'/static/images/swiperDemo/swiperImages1.jpg',},
                {id :6,imgsrc:'/static/images/swiperDemo/swiperImages2.jpg',},
                {id :7,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',},
                {id :8,imgsrc:'/static/images/swiperDemo/swiperImages1.jpg',},
                {id :9,imgsrc:'/static/images/swiperDemo/swiperImages2.jpg',},
                {id :10,imgsrc:'/static/images/swiperDemo/swiperImages3.jpg',},

            ],

            
        }
    },
    watch:{
        
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
            if(this.img.lenght < 3) {
                this.swiper.slideTo(0, 0, false);  
            }else{
                this.swiper.slideTo(1.1, 0, false); 
            }
    },  
    methods: {
        

    }
    
}
</script>

<style lang="less" scoped>
// @keyframes scale {
//     from {
//         transform:scale(1.1);
//         -ms-transform:scale(1.1); 	/* IE 9 */
//         -moz-transform:scale(1.1); 	/* Firefox */
//         -webkit-transform:scale(1.1); /* Safari 和 Chrome */
//         -o-transform:scale(1.1); 	/* Opera */
//     }

//     to {
//         transform:scale(0.99);
//         -ms-transform:scale(0.99); 	/* IE 9 */
//         -moz-transform:scale(0.99); 	/* Firefox */
//         -webkit-transform:scale(0.99); /* Safari 和 Chrome */
//         -o-transform:scale(0.99	/* Opera */
//     }
// }
// @-webkit-keyframes scale {
//     from {
//         transform:scale(1.1);
//         -ms-transform:scale(1.1); 	/* IE 9 */
//         -moz-transform:scale(1.1); 	/* Firefox */
//         -webkit-transform:scale(1.1); /* Safari 和 Chrome */
//         -o-transform:scale(1.1); 	/* Opera */

//     }

//     to {
//         transform:scale(0.99);
//         -ms-transform:scale(0.99); 	/* IE 9 */
//         -moz-transform:scale(0.99); 	/* Firefox */
//         -webkit-transform:scale(0.99); /* Safari 和 Chrome */
//         -o-transform:scale(0.99	/* Opera */
//     }
// }

// @-moz-keyframes scale {
//     from {
//         transform:scale(1.1);
//         -ms-transform:scale(1.1); 	/* IE 9 */
//         -moz-transform:scale(1.1); 	/* Firefox */
//         -webkit-transform:scale(1.1); /* Safari 和 Chrome */
//         -o-transform:scale(1.1); 	/* Opera */
//     }

//     to {
//         transform:scale(0.99);
//         -ms-transform:scale(0.99); 	/* IE 9 */
//         -moz-transform:scale(0.99); 	/* Firefox */
//         -webkit-transform:scale(0.99); /* Safari 和 Chrome */
//         -o-transform:scale(0.99	/* Opera */
//     }
// }

// @-o-keyframes scale {
//     from {
//         transform:scale(1.1);
//         -ms-transform:scale(1.1); 	/* IE 9 */
//         -moz-transform:scale(1.1); 	/* Firefox */
//         -webkit-transform:scale(1.1); /* Safari 和 Chrome */
//         -o-transform:scale(1.1); 	/* Opera */
//     }

//     to {
//         transform:scale(0.99);
//         -ms-transform:scale(0.99); 	/* IE 9 */
//         -moz-transform:scale(0.99); 	/* Firefox */
//         -webkit-transform:scale(0.99); /* Safari 和 Chrome */
//         -o-transform:scale(0.99	/* Opera */
//     }
// }
// @-ms-keyframes scale {
//     from {
//         transform:scale(1.1);
//         -ms-transform:scale(1.1); 	/* IE 9 */
//         -moz-transform:scale(1.1); 	/* Firefox */
//         -webkit-transform:scale(1.1); /* Safari 和 Chrome */
//         -o-transform:scale(1.1); 	/* Opera */
//     }

//     to {
//         transform: scale(0.99);transform:scale(0.99);
//         -ms-transform:scale(0.99); 	/* IE 9 */
//         -moz-transform:scale(0.99); 	/* Firefox */
//         -webkit-transform:scale(0.99); /* Safari 和 Chrome */
//         -o-transform:scale(0.99	/* Opera */
//     }
// }


#swiperDemo3{
    

    .about-swiper{

        .swiper-slide{
            width:100%;
            height:230px;
            overflow:hidden;
        }

         .swiper-slide-active{
            width:100%;
            height:230px;
            overflow:hidden;
        }
        img{
            width:100%;
            height:100%;
            // animation: scale 6s linear 0.1s infinite;
            // -webkit-animation: scale 6s linear 0.1s infinite;
            // -moz-animation: scale 6s linear 0.1s infinite;
            // -o-animation: scale 6s linear 0.1s infinite;
            // -ms-animation: scale 6s linear 0.1s infinite;
        }
            
    }

}

</style>