# html
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
# 标签
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

# html 语义化的理解
1. 用正确的标签做正确事
2. 使页面内容结构化,便于浏览器和搜索引擎解析
3. 在没有css样式渲染下,也可以以一种文档格式显示
4. 利于SEO

# title和alt的区别
* alt是图片加载失败后,显示在网页上的替换文字;
* title是鼠标放到图片上显示的文字
* alt是必要的属性,title不是

