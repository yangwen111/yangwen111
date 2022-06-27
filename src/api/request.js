//axios二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css";
import store from "@/store"
console.log(nprogress)
//创建实例
const requests=axios.create({
    baseURL:"/library",
    timeout:5000,
});
//无效
// requests.defaults.headers.post['Content-Type']='application/json;charset=UTF-8';
//请求拦截器
requests.interceptors.request.use((config)=>{
    nprogress.start();
    //config对象包含一个headers
    //设置token
    config.headers["token"]=store.getters.gettoken
    return config;
})
//响应拦截器
requests.interceptors.response.use((res)=>{
//    成功回调函数
    nprogress.done();
    return res;
},(error => {
    console.log(error)
    return Promise.reject(new Error("fail"));
}))
//对外暴露 这里axios就是错的
export default requests;