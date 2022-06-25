import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import axios from 'axios';
import store from "@/store"
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI);
//全局挂载
Vue.prototype.$axios=axios;
//最大的组件所有的组件都在他下面
new Vue({
  store,
  //让所有组件都有一个store对象
  axios,
  //注册仓库：组件省上会多一个$store属性
  router,
  render: h => h(App),
}).$mount('#app')