# webpack-demo

webpack 相关知识点练习

## library 打包组件和基础库

步骤：

+ 配置 webpack 中 output.library 等相关属性。
+ 设置 `mode = 'none'`，以关闭 webpack 自带压缩，再添加 `terser-webpack-plugin` 指定压缩文件。
+ 设置入口文件 index.js 与在 package 中配置。

## simplepack 简易的 webpack

### 需要实现的功能目标

* 可以将 ES6 转换成 ES5 语法
  + 通过 bobylon 生成 AST
  + 通过 babel-core 将 AST 重新生成源码
* 可以分析模块间的依赖关系
  + 通过 babel-traverse 的 ImportDeclaration 方法获取依赖属性
* 生成JS文件可以在浏览器中运行

