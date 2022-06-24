const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //取消esLint
  lintOnSave: false,
  //webpack中的配置
  devServer: {
    //代理服务器
    proxy:{
      '/library':
          {
            //目标服务器
            target:'http://localhost:8080'
          }  // 配置了一个代理: 如何访问的是/api开头，就去http://localhost:3000这里找
    },
    host: "127.0.0.1",  //指定要使用的 host
    port: 8082,   //指定端口号以侦听
  }
})
