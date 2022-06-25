import Vue from 'vue';
import Vuex from 'vuex';
//浏览器刷新后还有值
import createPersistedState from "vuex-persistedstate";
//需要使用插件一次
Vue.use(Vuex);
//仓库存储数据

//对外暴露Store实例
export default new Vuex.Store({
    plugins:[createPersistedState()],
    //数据 不提供外部访问
    state:{
        token:''
    },
    //操作state的数据 这里改变了其他都改变
    mutations:{
         settoken(state,token){
             state.token=token;
             window.localStorage.setItem("token",token);
         }
    },
    actions:{},
    getters:{
        gettoken:function (state){
            if(state.token) {
                return state.token;
            }
            return window.localStorage.getItem("token")
        }
    }
})