import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import axios from 'axios';
import store from "@/store"
Vue.config.productionTip = false
Vue.use(ElementUI);
//全局挂载
Vue.prototype.$axios=axios;
new Vue({
  store,
  axios,
  //注册仓库：组件省上会多一个$store属性
  router,
  render: h => h(App),
}).$mount('#app')