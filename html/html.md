#html
* hyperText markup language(超文本标记语言)  
```html
<html lang="en"> language english
    <head >
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
    </body>
</html>
```
* div 
* span 
* p 段落
* h 标题
* strong 加粗
* em 斜体
* del 中划线
* br 一个回车（单标签）
* hr 横线
* ol 有序列表 type="a/A/i/I/1 " reversered="" 
* ul 无序列表 type=“circle/”
* li 
* img src="url/绝对路径/相对路径" alt(图片占位符) title（图片提示符）
* a (anchor) 

# link和@import的区别：
1. link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
2. link可以加载CSS，Javascript；@import只能加载CSS。
3. link加载的内容是与页面同时加载；@import需要页面网页完全载入以后加载。

用法：
1）link的写法：
<link rel="stylesheet" href="index.css">
2）import的写法：
<style type=”text/css”>
    @import url（“index.css”）；
</style>