<template>
  <div class="search-wrapper" @click.stop>
    <div class="search-input">
      <!-- 搜索输入框 -->
      <input type="text"
             autocomplete="off"
             autocorrect="off"
             autocapitalize="off"
             autofocus
             v-model="value"
             ref='searchInput'
             spellcheck="false"
             placeholder="搜索..."
            >

      <!-- 搜索放大镜图标 -->
      <div class="search-icons">
        <i class="el-icon-search" @click="clickSearch"></i>
      </div>
    </div>
      </div>
</template>

<script>
export default {
  name: "search",
  data(){
    return{
       bookname:"",
       value:'',
    }
  },
  methods:{
    clickSearch(){
        this.bookname=this.value;
        this.$emit("getname",this.bookname);
    }
  },
  watch:{
     value(nval,oval){
       //这里使用单引号则失败
       if(nval==""){
         this.bookname="";
         this.$emit("getname",this.bookname);
       }
     }
  }
}
</script>

<style scoped>
.search-wrapper {
  background-color: rgb(235, 148, 148);
  height: 30px;
  width: 325px;
  overflow: hidden;
  border-radius: 3px;
  font-family: 'Microsoft YaHei';
  box-sizing: border-box;
  /*padding: 10px;*/
}
.search-input {
  position: relative;
}
input {
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  border: 0;
  border-radius: 3px;
  margin: 0;
  padding: 0px 40px 0px 10px;
  outline: 0;
  font-size: 14px;
  color: #E5EAEE;
  background-color: #fff;
}
input::-webkit-input-placeholder {
  color: #E5EAEE;
}
.search-icons {
  position: absolute;
  top: 7px;
  right: 10px;
  color: #209df7;
  font-size: 17px;
}
.is-focus {
  overflow: visible !important;
}
input {
  color: #222 !important;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2), 0 1px 15px hsla(0, 0%, 100%, .3) !important;
}
.el-icon-close{
  color: #111;
  background-color: #d8d8d8;
  border-radius: 50%;
  padding: 2px;
  box-sizing: border-box;
  font-size: 15px;
  cursor: pointer;
}
.el-icon-close:hover{
  color: #fff;
  background-color: #209df7;
}
.search-list {
  height: 480px;
  margin-top: 8px;
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .15);
  background-color: #fff;
}
.search-result {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
ul, li{
  margin: 0px;
  padding: 0px;
}
li{
  list-style-type: none;
}
.select-li {
  cursor: pointer;
  padding: 8px 10px;
  overflow: hidden;
  border-bottom: 1px solid #ebebeb;
}
.user-avatar {
  border-radius: 50%;
  float: left;
  width: 40px;
  height: 40px;
  background-size: cover;
}
.user-name {
  width: 200px;
  float: left;
  margin-left: 15px;
  line-height: 40px;
}
.keyword {
  color: #008cee;
}
.select-li:hover{
  background-color: #e5f0fa;
}
.is-selected {
  background-color: rgba(140, 197, 255, 0.46)
}
.result-null {
  margin-top: 100px;
  text-align: center;
  font-size: 20px;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
/*滑动轨道*/
::-webkit-scrollbar-track-piece {
  background-color: transparent;
  -webkit-border-radius: 6px;
}
/*// 下面是滑块*/
     /*竖向滚动条*/
   ::-webkit-scrollbar-thumb:vertical {
     height: 5px;
     background-color: rgb(161, 161, 161);
     -webkit-border-radius: 6px;
   }
/*横向滚动条*/
::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: rgb(143, 144, 145);
  -webkit-border-radius: 6px;
}
</style>