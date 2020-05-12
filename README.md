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

## ssr 服务器渲染

### 操作步骤

```shell

# npm run build:ssr

# npm run dev:ssr

```

## loader 插件编写

使用 `loader-runner` 调试 loader。loader 参数的获取，通过 `loader-utils` 的 `getOptions` 方法获取。

webpack 默认开启 loader 缓存，可使用 `this.cacheable(false)` 关掉缓存；缓存条件：loader 的结果在相同的输入下有确定的值，有依赖的 loader 无法使用缓存；

loader 通过 `this.emitFile` 进行文件写入；

异常处理：

1、直接通过 throw 抛出；
2、通过 `this.callback` 传递错误；

异步处理：通过 `this.async` 来返回一个异步函数；
