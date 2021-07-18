<template>
    <div id = "swiperDemo1">

        <div class = "demo1">
            <swiper :options="demo1Option"  ref="demo1Swiper">  
                <!-- 这部分放你要渲染的那些内容 -->  
                <swiper-slide v-for="(item,index) in items" :key = "index"> 
                    <div :class= "['demo1Nav',{'demo1NavActive':nowIndex == index}]"  >{{item}}</div>
                </swiper-slide>
               
                <!-- 这是轮播的小圆点 -->  
                // <div class="swiper-pagination" slot="pagination"></div>  
            </swiper> 

             <swiper :options="demo1ContentOption"  ref="demo1ContentSwiper">  
                <!-- 这部分放你要渲染的那些内容 -->  
                <swiper-slide v-for="(item,index) in demo1ItemsContent" :key = "index"> 
                    <div class = "demo1Content"  >{{item}}</div>
                </swiper-slide>
               
                <!-- 这是轮播的小圆点 -->  
                <div class="swiper-pagination" slot="pagination"></div>  
            </swiper> 

           
        </div>
    </div>
</template>

<script>
/*
swiper栗子1说明：

基于vue实现移动端点击上方导航，内容滑动切换，内容滑动导航自动切换


注意：1.watchSlidesProgress和watchSlidesVisibility在内容内不用加,在nav可加可不加
2. const vm = this;在data内声明指向vue
*/ 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'swiperAutoNavAndContent',
    components: {  
        swiper,  
        swiperSlide  
    },  
    data(){
        const vm = this;
        return{

            items:['板块1','板块2','板块3','板块4','板块5','板块6','板块7','板块8',],
            demo1Option: {  
                // centeredSlides: true,   
                // centeredSlidesBounds: true, 
                // watchSlidesProgress: true,//watchSlidesProgress和watchSlidesVisibility在demo1ContentOption内不用加
                // watchSlidesVisibility: true,
                slideToClickedSlide: true,//点击跟随滑动
                slidesPerView: 5,//一屏共多少列
                on:{
                    tap:function(e){
                        // console.log(vm,'vm',e,e.target,'tap回调函数，当你轻触(tap)Swiper后执行。在移动端，click会有 200~300 ms延迟，所以请用tap代替click作为点击事件')
                        //  let dom=e.target.parentNode;
                        // console.log(dom);
                        // alert(this.clickedIndex);


                        vm.demo1Handle(this.clickedIndex);

                    }
                },
            }, 
            nowIndex : 0,
            demo1ItemsContent:['板块1','板块2','板块3','板块4','板块5','板块6','板块7','板块8',],
            demo1ContentOption: {  
                slideToClickedSlide: true,//点击跟随滑动
                slidesPerView: 'auto',//
                on: {
                    slideChangeTransitionEnd: function(){
                            // console.log(this.activeIndex);//回调函数，swiper从一个slide过渡到另一个slide结束时执行.切换结束时，告诉我现在是第几个slide
                            vm.demo1ContentHandle(this.activeIndex);
                        },
                    },
            }, 
            
        }
    },

    created(){
      


    },
     //定义这个sweiper对象  
    computed:{
		swiper() {  
            return this.$refs.demo1Swiper.swiper;  
        },
        demo1ContentSwiper() {  
            return this.$refs.demo1ContentSwiper.swiper;  
        },
       	
	},
    mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            // this.swiper.slideTo(0, 0, false); 

    },  
    methods: {
        demo1Handle(index){
            this.nowIndex = index;
            this.demo1ContentSwiper.slideTo(index);  
            // console.log(index,'轻触了index');
        },
        demo1ContentHandle(index){
            this.nowIndex = index;
            this.swiper.slideTo(index);  
            // console.log(index,'demo1ContentHandle')
        },

    }
    
}
</script>

<style lang="less" scoped>

#swiperDemo1{
    .demo1{
        
        .demo1Nav{
            width:100%;
            height:30px;
            line-height:30px;

        }
        .demo1NavActive{
            background:#ff6600;
            color:#fff;
        }

        .demo1Content{
            width:100%;
            height:300px;
            background:#ff6600;
        }
        
    }

}

</style>