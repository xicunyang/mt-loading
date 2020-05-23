# mt-loading

> 自定义指令 - 局部loading

<br/>

npm仓库地址 : [自定义指令 - 局部loading](https://www.npmjs.com/package/mt-loading)

## 咋装下呢?
```yarn add mt-loading```  或者使用  ```npm i mt-loading```
<br/>

## 看下到底是个啥
![mt-loading.gif](https://upload-images.jianshu.io/upload_images/6555843-4737602217314ddf.gif?imageMogr2/auto-orient/strip)
<br/>

## 用起来！兄弟萌！
使用```咋装下呢?```中的命令将该插件安装到你的项目之后，就可以在```main.js```中使用```import```引入，然后使用```Vue.use(XXX)```使用即可。
```$xslt
import mtLoading from 'mt-loading'

Vue.use(mtLoading)

// 作为指令使用
<div v-mt-loading='true'></div>
```
<br/>

## 参数都有啥
```
有三个状态
1. 默认（竖条纹loading）
<div v-mt-loading='true'></div>

2. 圆形loading
<div v-mt-loading.bounce='true'></div>

3. 竖条纹loading
<div v-mt-loading.move='true'></div>
```
<br/>
 
- Email：xicunyang@163.com
