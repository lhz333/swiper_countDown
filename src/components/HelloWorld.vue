<template>
  <div class="hello">
    <h3>swiper中使用倒计时</h3>
    <swiper ref="swiper" class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in arr" :key="index">
        <count-down :endDate="item.endDate"></count-down>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import CountDown from './CountDown'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HelloWorld',
  data () {
    return {
      arr: [{
        endDate: Date.parse(new Date()) + 100000000
      }, {
        endDate: Date.parse(new Date()) + 1000000000
      }, {
        endDate: Date.parse(new Date()) + 2000000000
      }],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        observer: true,
        observeParents: true,
        preventLinksPropagation: true,
        paginationClickable: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        on: {
          // 回调函数，swiper从一个slide过渡到另一个slide结束时执行。
          slideChangeTransitionEnd () {
            // 在Loop模式下Swiper切换到指定slide。切换到的是slide索引是realIndex
            this.slideToLoop(this.realIndex, 0, false)
          }
        }
      }
    }
  },
  components: {
    CountDown,
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.swiper {
  position: relative;
}
.swiper .swiper-slide {
  height: 50px;
  line-height: 50px;
}
.swiper.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0;
}
</style>
