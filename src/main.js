import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios';
Vue.config.productionTip = false

//引入mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);

//配置公共api
// Axios.defaults.baseURL = "http://www.sinya.online/api/";
Axios.defaults.baseURL = "http://localhost:8899/api/";

//挂载axios
Vue.prototype.$axios = Axios;


import "mint-ui/lib/style.css";
import "../static/global.css";
import moment from "moment";

//自定义日期过滤器，可自定义格式类型
Vue.filter("formatDateYMD", function(value, formatStr="YYYY-MM-DD"){
  if(isNaN(value)&&!isNaN(Date.parse(value))){
    return moment(new Date(value)).format(formatStr);
  }
  return new TypeError("需要传入日期")
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
