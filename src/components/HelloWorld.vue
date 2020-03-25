<template>
  <div class="hello">
    <h3>swiper中使用倒计时</h3>
    <count-down
      :endDate="endDate"
    ></count-down>
  </div>
</template>

<script>
import CountDown from './CountDown'
export default {
  name: 'HelloWorld',
  data() {
    return {
      endDate: Date.parse(new Date()) + 2000000000
    }
  },
  components: {
    CountDown
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
