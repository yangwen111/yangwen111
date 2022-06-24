<template>
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
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </div>
  </el-dialog>

</template>
<script>
import {oneBook} from "@/api";
export default {
  name: "editBookDialog",
  props:['count',"dialogshow","id"],
data () {
  return {
    dialogformvisible: this.dialogshow,
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
    let id=this.id;
    oneBook(id).then(res=>{
      let data=res.data;
      if(data.code==="000"){
        let  r=data.result;
        this.form=r;
      }
    })
    console.log("对话框的数据"+this.form.name)
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
  onSubmit()
  {
    if (this.form.name === '') {
      this.commonTip('请输入分类名称')
      return false
    }
    this.dialogformvisible = false
    // 这里写你确定之后的事件
  },
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
        // this.handerlData();
      },
    // form(nval,oval){
    //   this.form=nval;
    //   console.log(nval)
    // }
  },
  created() {
    // 不起作用
    this.handerlData()
  }
}
</script>

<style scoped>

</style>