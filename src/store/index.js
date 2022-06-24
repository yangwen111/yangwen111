import Vue from 'vue';
import Vuex from 'vuex';
//需要使用插件一次
Vue.use(Vuex);
//仓库存储数据

//对外暴露Store实例
export default new Vuex.Store({
    state:{data:1},
    mutations:{},
    actions:{},
    getters:{}
})