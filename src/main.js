import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css'  //引入样式
const mock=false
if(mock){
  require('./mock/index.js')
}
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;
axios.interceptors.response.use(function (response) {
  const res=response.data
  if(res.status==0){
    return res.data
  }else if(res.status==10){
    window.location.href = '/#/login';
    return Promise.reject(res);
  }else{
    alert(res.msg)
  }
}, function (error) {
  alert('错误')
  return Promise.reject(error);
});
Vue.use(vueSwiper)
Vue.use(VueAxios,axios)
Vue.use(VueLazyload, {
  loading:'/imgs/loading-svg/loading-bars.svg'//加载中图片，一定要有，不然会一直重复加载占位图
 
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
