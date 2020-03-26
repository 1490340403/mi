import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
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
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
