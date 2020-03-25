import Vue from 'vue';
import App from './App.vue';
// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use (VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue ({
  render: h => h (App),
}).$mount ('#app');
