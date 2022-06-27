<template>
  <div>
<!--    获取数据-->
    <h1>欢迎您：{{$route.params.user.username}}</h1>
    <el-container>
      <el-header>
        <h2>书籍清单</h2>
      </el-header>
      <el-main>
        <div style="position:relative;margin-left: 575px;margin-bottom: 10px">
<!--          添加书籍-->
          <el-button style="position:absolute;right:560px;bottom: -2px;height:33px " @click="addBook">添加书籍</el-button>
<!--          搜索框-->
          <search @getname="getsearchname"></search>
        </div>
        <el-table
            :data="searcdata"
            border
            style="width: 80%">
          <el-table-column
              class="column"
              prop="id"
              label="序号"
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="书名"
              width="180">
          </el-table-column>
          <el-table-column
              prop="price"
              label="价格">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" @click="del(scope.row.id)">删除</el-button>
              <el-button type="success" @click="editBook(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
<!--    :后面的值为props中的元素-->
    <div v-if="dialogshow">
<!--      方法必须放在前面-->
    <editBookDialog @flushbook="getflush" :flag="flag" :data="book" :dialogshow="dialogshow"></editBookDialog>
    </div>
  </div>
</template>
<script>
import {bookList,delBook} from "@/api";
import editBookDialog from "@/views/editBookDialog";
import search from "@/views/search";
export default {
  name: "bookList",
  components:{
    editBookDialog,
    search
  },
  data(){
    return{
      tableData:[],
      searcdata:[],
      dialogshow:false,
      book:'',
      flashflag:true,
      bookname:'',
      flag:1
    }
  },
  methods:{
    addBook(){
      this.flag=2;
      this.dialogshow=!this.dialogshow;
    },
    getsearchname(bookname){
      this.bookname=bookname;
      this.searcdata=[]
       if(this.bookname==''){
         this.searcdata.push(...this.tableData);
       }else{
          this.tableData.forEach(item=>{
             //查询的方法
             if(item.name.search(this.bookname)!=-1){
                 this.searcdata.push(item);
             }
          })
       }
    },
    getflush(){
      this.flashflag=!this.flashflag;
    },
    getBookList(){
      this.tableData=[]
      bookList().then(res=>{
          let data=res.data;
          if(data.code==="000"){
              //简写方式
              this.tableData.push(...data.result);
              this.searcdata=[]
              this.searcdata.push(...data.result);
          }
      })
    },
    del(index){
      const that=this;
      that.tableData=[];
      that.searcdata=[];
      delBook(index).then((response)=>{
        response.data.result.forEach(item=>{
          that.tableData.push(item);
          that.searcdata.push(item);
        })
      })
    },
    editBook(data){
          //这里如果名字为edit则会出错
          // this.$router.push({name:"editbook",params:{
          //     data:data
          // }})
      this.flag=1;
      this.dialogshow=!this.dialogshow;
      //数据类型随便变
      this.book=data;
    },
  },
  created(){
    this.getBookList();
  },
  watch:{
    flashflag(){
      this.getBookList();
     }
  }
}
</script>
<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  padding-left: 15%;
  /*傻逼属性被继承，会导致标题很高*/
  /*line-height: 160px;*/
}

</style>