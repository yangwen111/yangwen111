<template>
  <div>
    <el-radio-group v-model="labelPosition" size="small">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.id"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.price"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "edit",
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        id: '',
        name: '',
        price: ''
      }
    };
  },
  methods:{
    handlerData(){
      let data=this.$route.params.data;
      this.formLabelAlign.id=data.id;
      this.formLabelAlign.name=data.name;
      this.formLabelAlign.price=data.price;
    }
  },
  created() {
    this.handlerData();
  }
}
</script>

<style scoped>

</style>