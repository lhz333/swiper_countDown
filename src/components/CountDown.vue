<template>
  <div class="count-down">{{countDownTime}}</div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      countDownNum: 0,
      timer: null
    }
  },
  components: {},
  props: {
    endDate: {
      type: Number
    }
  },
  computed: {
    countDownTime () {
      return this.getCountdownString(this.countDownNum)
    }
  },
  methods: {
    countTime () {
      this.countDownNum = this.getCountdownTime(); //获取倒计时初始值
      if (this.countDownNum <= 0) {
        clearInterval(this.timer);
        return;
      }
      this.timer = setInterval(() => {
        this.countDownNum -= 1000;
        if (this.countDownNum <= 0) {
          clearInterval(this.timer);
        }
      }, 1000)
    },

    getCountdownString (time) {
      if (time <= 0) return ''
      var d = Math.floor(time / 1000 / 60 / 60 / 24);
      var h = Math.floor(time / 1000 / 60 / 60 % 24);
      var m = Math.floor(time / 1000 / 60 % 60);
      var s = Math.floor(time / 1000 % 60);
      d = d < 10 ? `0${d}` : d;
      s = s < 10 ? `0${s}` : s;
      m = m < 10 ? `0${m}` : m;
      h = h < 10 ? `0${h}` : h;
      var string = `${h}时${m}分${s}秒`;
      if (d > 0) {
        string = `${d}天${string}`;
      }
      return string;
    },

    getCountdownTime () {
      var time = this.endDate - this.getNowTimeStamp();
      return time;
    },

    getNowTimeStamp () {
      var timestamp = Date.parse(new Date());
      return timestamp;
    }
  },
  created () {

  },
  mounted () {
    // this.countTime()
  },
  deactivated () {
    clearInterval(this.timer);
  },
  beforeDestroy () {
    clearInterval(this.timer);
  },
  watch: {
    endDate: {
      deep: true,
      immediate: true,
      handler () {
        clearInterval(this.timer);
        this.countTime()
      }
    }
  }
}
</script>

<style scoped>
.count-down {
  font-size: 14px;
}
</style>