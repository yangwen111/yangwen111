import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import login from '../views/login'
import bookList from "@/views/bookList";
import edit from "@/views/edit";
//使用插件
Vue.use(VueRouter)
//配置路由
export default new VueRouter({
    mode:"history",//去掉路由中的#
    routes: [
        {
            path:"/bookList",
            component:bookList,
            name:"booklist"
        },
        {
            path:"/login",
            component:login,
            meta:{
                show:true
            }
        },
        {
            path:"/edit",
            name:"editbook",
            component:edit,
        },
        {
            //    重定向，当项目访问/时，立马跳转到首页
            path: '/',
            redirect:"/login"
        }
    ]
})