<template>
<!--  :visible.sync 同步双向绑定-->
  <el-dialog :visible.sync="dialogformvisible" :close-on-click-modal="false" :show-close="false">
    <div slot="title" class="header-title">
      <span style="font-size:18px;color:#333333;">书籍信息</span>
      <span style="float: right;font-size: 24px;padding: 0 10px;cursor: pointer;" @click="closeDialog">×</span>
    </div>
    <el-form :model="form">
      <el-form-item label="书名" :label-width="formLabelWidth">
        <el-input
            v-model="form.name"
            autocomplete="off"
            placeholder="请输入分类名称，最多十个字"
            maxlength="10"
        ></el-input>
      </el-form-item>
      <el-form-item label="价格" :label-width="formLabelWidth">
        <el-input
            v-model="form.price"
            autocomplete="off"
            placeholder="请输入分类名称，最多十个字"
            maxlength="10"
            ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancelFun">取 消</el-button>
      <el-button v-show="flag==1" type="primary" @click="editbook">确 定</el-button>
      <el-button v-show="flag==2" type="primary" @click="addbook">添 加</el-button>
    </div>
  </el-dialog>

</template>
<script>
import {oneBook} from "@/api";
import {changeBook} from "@/api";
import {addBook} from "@/api";
export default {
  name: "editBookDialog",
  props:['count',"dialogshow","data","flag"],
data () {
  return {
    flushflag:false,
    //这里如果是false则显示不出对话框
    dialogformvisible: true ,
    //flag==1则是编辑，flag==2则是添加
    form: {
      name: '',
      price:''
    },
    formLabelWidth: '120px'
  }
},
methods: {
   // 想要渲染数据，失败
  handerlData(){
    let id=this.data.id;
    oneBook(id).then(res=>{
      let data=res.data;
      if(data.code==="000"){
        let  r=data.result;
        this.form=r;
      }
    })
  },
  changeBook(book){
    book=JSON.stringify(book);
    changeBook(book).then(res=>{
       if(res.data.code=="000"){
          this.$emit('flushbook')
         console.log("返回数据成功")
       }
    })
  },
  // 关闭弹框的事件
  closeDialog()
  {
    this.form.name = ''
    this.dialogformvisible = false
  }
,
  // 点击取消事件
  cancelFun()
  {
    this.dialogformvisible = false
    this.form.name = ''
  }
,
  // 点击确定事件
  editbook()
  {
    if (this.form.name === '') {
      this.commonTip('请输入分类名称')
      return false
    }
    this.dialogformvisible = false
    // eslint-disable-next-line vue/no-mutating-props
    this.data.name=this.form.name;
    // eslint-disable-next-line vue/no-mutating-props
    this.data.price=this.form.price;
    // 这里写你确定之后的事件
    this.changeBook(this.data);
  },
  addbook(){
      addBook(this.form).then(res=>{
        if(res.data.code=="000"){
          console.log("添加成功")
          this.dialogformvisible=false;
          this.$emit('flushbook')
        }
      })
  }
},
  watch:{
    // 'dialogshow':{
    //   handler(newvalue,oldvalue){
    //     this.dialogformvisible=true;
    //   }
    // }
    //检测父元素中属性变化，刷新到子组件中
    dialogshow(){
        this.dialogformvisible=true;
        alert("改变")
      },
    // form(nval,oval){
    //   this.form=nval;
    //   console.log(nval)
    // }
  },
  created() {
    // 不起作用:原因在于v-if,让组件重新加载
    if(this.flag==1)
    this.handerlData()
  }
}
</script>

<style scoped>

</style>