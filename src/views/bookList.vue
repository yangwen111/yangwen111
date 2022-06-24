<template>
  <div>
<!--    获取数据-->
    <h1>欢迎您：{{$route.params.user.username}}</h1>
    <el-container>
      <el-header>
        <h2>书籍清单</h2>
      </el-header>
      <el-main>
        <el-table
            :data="tableData"
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
              <el-button type="success" @click="editBook(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
<!--    :后面的值为props中的元素-->
    <div v-if="dialogshow">
    <editBookDialog :id="bookid" :count="count" :dialogshow="dialogshow"></editBookDialog>
    </div>
  </div>
</template>
<script>
import {bookList} from "@/api";
import editBookDialog from "@/views/editBookDialog";
export default {
  name: "bookList",
  components:{
    editBookDialog
  },
  data(){
    return{
      tableData:[],
      dialogshow:false,
      bookid:''
    }
  },
  methods:{
    getBookList(){
      bookList().then(res=>{
          let data=res.data;
          if(data.code==="000"){
              //简写方式
              this.tableData.push(...data.result);
          }
      })
    },
    del(index){
      const that=this;
      that.tableData=[];
      this.$axios.delete("/book/delBook/"+index).then((response)=>{
        console.log(index);
        console.log(response.data.result);
        response.data.result.forEach(item=>{
          that.tableData.push(item);
        })
      })
    },
    editBook(id){
          //这里如果名字为edit则会出错
          // this.$router.push({name:"editbook",params:{
          //     data:data
          // }})
      this.dialogshow=!this.dialogshow;
      this.bookid=id;
    },
  },
  created(){
    this.getBookList();

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
  height: 700px;
  /*傻逼属性被继承，会导致标题很高*/
  /*line-height: 160px;*/
}
</style>