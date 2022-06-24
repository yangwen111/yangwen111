//axios二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css";
console.log(nprogress)
//创建实例
const requests=axios.create({
    baseURL:"/library",
    timeout:5000,
});
//请求拦截器
requests.interceptors.request.use((config)=>{
    nprogress.start();
    //config对象包含一个headers
    return config;
})
//响应拦截器
requests.interceptors.response.use((res)=>{
//    成功回调函数
    nprogress.done();
    return res.data;
},(error => {
    console.log(error)
    return Promise.reject(new Error("faile"));
}))
//对外暴露 这里axios就是错的
export default requests;