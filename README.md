## 项目说明

用于轻量级前端的技术实践及演示，使用模拟数据以支持脱离后台独立运行
本项目是个渐进的迭代过程，每个迭代阶段会添加一些新的特性和包，或对包的版本进行升级

## 迭代版本

-------------
### 初始版本 20180521

#### 特性
使用vue template webpack模板作为脚手架建立vue项目，项目在开发态能正常跑起来，能正常打包部署到服务器上

#### 技术栈
- node 8.9.1
- npm 6.0.1
- vue-cli 2.9.3
- vuejs-templates-webpack 1.3.1
- webpack 3.12.0
- vue-loader 13.7.1
- vue 2.5.16
-------------

### 版本 20180522-01

#### 特性
升级组件版本到当前最新稳定版

#### 技术栈
- vue 2.5.16
- element-ui 2.3.9
- bootstrap 4.1.1
- bootstrap-vue 2.0.0-rc.11
- 项目中的所有组件升级到最新稳定版
-------------

### 版本 20180523-01

#### 特性
使用AntDesign的Vue版实现，组件库vue-antd，演示了Table表格组件的树形数据展现；
这套组件库，从组件的功能及完整性来说，可以考虑取代element-ui;
同时，也学习了配合babel-plugin-import按需引入组件和样式的用法，见vue-antd文档中"在 vue-cli 中使用"这节的内容;

#### 技术栈
- vue-antd-ui 0.5.1
-------------

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build


* Documentation
-------------

* Browser Support
---------------
- IE 9+
- Firefox (latest)
- Chrome (latest)
- Safari (latest)
- Opera (latest)

* License
-------
licensed under [MIT](http://opensource.org/licenses/MIT).
