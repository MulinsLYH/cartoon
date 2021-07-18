

<template>
  <section id="swiperDemo4">
    <div class="swiper-box" style="height: 500px">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide
          v-for="(item, index) in bgIamges"
          :key="index"
          :style="{ backgroundImage: 'url(' + item + ')' }"
        ></swiper-slide>

        <div
          class="swiper-button-next swiper-button-white"
          slot="button-next"
        ></div>
        <div
          class="swiper-button-prev swiper-button-white"
          slot="button-prev"
        ></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper
        :options="swiperOptionThumbs"
        class="gallery-thumbs"
        ref="swiperThumbs"
      >
        <swiper-slide
          v-for="(item, index) in bgIamges"
          :key="index"
          :style="{ backgroundImage: 'url(' + item + ')' }"
        ></swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
/**
swiper栗子1说明：1)缩略图

2)https://www.sucaihuo.com/js/4337.html


 */
export default {
  name: "swiperThumbs",
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        spaceBetween: 10, //缩略图间距
        slidesPerView: "auto",
        centeredSlides: true,
        slideToClickedSlide: true, //点击跟随滑动
        watchSlidesVisibility: true, //防止不可点击
      },
      bgIamges: [
        "/static/images/swiperDemo/swiperImages1.jpg",
        "/static/images/swiperDemo/swiperImages2.jpg",
        "/static/images/swiperDemo/swiperImages3.jpg",
        "/static/images/swiperDemo/swiperImages1.jpg",
        "/static/images/swiperDemo/swiperImages2.jpg",
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      // console.log(swiperTop)
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style lang="less" scoped>
#swiperDemo4 {
   

  .swiper-container {
    background-color: #000;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
    // &.slide-1 {
    //   background-image:url('/static/images/swiperDemo/swiperImages1.jpg');
    // }
    // &.slide-2 {
    //   background-image:url('/static/images/swiperDemo/swiperImages2.jpg');
    // }
    // &.slide-3 {
    //   background-image:url('/static/images/swiperDemo/swiperImages3.jpg');
    // }
    // &.slide-4 {
    //   background-image:url('/static/images/swiperDemo/swiperImages1.jpg');
    // }
    // &.slide-5 {
    //   background-image:url('/static/images/swiperDemo/swiperImages2.jpg');
    // }
  }
  .gallery-top {
    height: 80% !important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20% !important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>




