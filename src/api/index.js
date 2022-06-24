//当前这个模块：API进行统一管理
import axios from "axios";
// export const bookList=()=>{
// //    发请求
//      return axios(
//         {
//             url:"/bookList",
//             method:"get"
//         }
//     )
// }
//书籍列表
const BASE_URL="/library";
export const bookList=()=>axios({url:BASE_URL+"/book/bookList",method:"get"});
export const login =(username,password)=>axios({url:BASE_URL+"/user/login",method:"post",data:{username:username,password:password}})
export const oneBook=(id)=>axios({url:BASE_URL+"/book/oneBook/"+id,method:"get"});