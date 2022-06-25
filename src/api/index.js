//当前这个模块：API进行统一管理
import requests from "@/api/request";
// export const bookList=()=>{
// //    发请求
//      return requests(
//         {
//             url:"/bookList",
//             method:"get"
//         }
//     )
// }
//书籍列表
export const bookList=()=>requests({url:"/book/bookList",method:"get"});
export const login =(username,password)=>requests({url:"/user/login",method:"post",data:{username:username,password:password}})
export const oneBook=(id)=>requests({url:"/book/oneBook/"+id,method:"get"});
export const changeBook=(book)=>requests({url:"/book/changeBook",method:"post",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    data:book});
export const addBook=(book)=>requests({url:"/book/addBook",method:"post",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    data:book});