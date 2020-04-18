# webpack-demo

webpack 相关知识点练习

## webpack-library 打包组件和基础库

步骤：

+ 配置 webpack 中 output.library 等相关属性。
+ 设置 `mode = 'none'`，以关闭 webpack 自带压缩，再添加 `terser-webpack-plugin` 指定压缩文件。
+ 设置入口文件 index.js 与在 package 中配置。
