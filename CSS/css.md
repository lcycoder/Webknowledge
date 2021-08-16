[toc]
# css
## css的继承
* 无继承的属性:
    1. display : 规定元素应该生成的框的类型
    2. 文本属性: 
        1. vertical-align : 垂直文本对齐
        2. text-decoration: 规定添加到文本的装饰
        3. text-shadown: 文本阴影效果
        4. white-space : 空白符的处理
    3. 盒子模型的属性: width,height,margin,border,padding
    4. 背景属性:background
    5. 定位属性:float,clear,position,top,right,bottom,overflow,z-index

## BFC(block-level box)
* 如何创建BFC
    1. float不是none
    2. position值不是relative和static
    3. overflow值不是visible
    4. display值是inline-block,table-cell,flex,table-cation,inline-flex

* BFC的布局规则

    1. 内部的Box会在垂直方向，一个接一个地放置。

    2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。

    3. 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

    4. BFC的区域不会与float box重叠。

    5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

    6. 计算BFC的高度时，浮动元素也参与计算。(当发生高度坍塌时,可以给父元素添加overflow:hiddien解决,根据浮动元素也参与计算的规则,浮动元素也参与计算)

## css预编译工具
* styles,sass,less 
## 创建一个a标签(点击效果)
(详解链接)[https://blog.csdn.net/wumenglu1018/article/details/54603109?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase]

##  em 和 rem 
* em不是固定的,因为相对于文本文字的大小,会继承父级元素字体的大小
* rem 是css3新增的属性 ,相对于html根元素
* 
* 
如果使用值1em或1rem,可以被浏览器翻译成从16px或160px或其他任意值
* 二者区别
当使用em单位时，像素值将是em值乘以使用em单位的元素的字体大小。(依据是font-size)
* 重点理解:
有一个比较普遍的误解，认为 em 单位是相对于父元素的字体大小。 事实上，根据W3标准 ，它们是相对于使用em单位的元素的字体大小。  
父元素的字体大小可以影响 em 值，但这种情况的发生，纯粹是因为继承。  



* 有继承性的属性
1. 字体系列属性font
2. 文本系列属性text
3. 元素可见性visibility
4. 表格,列表,生成内容的布局属性
5. 光标属性
6. 页面样式
7. 声音样式属性
* 所有元素可以继承的属性
1. 元素可见性:visibility
2. 光标属性: cursor
* 内联元素可以继承的属性
1. 字体系列属性
2. 除text-indent,text-align之外的文本系列属性
* 块级元素可以继承的属性
1. text-indent,text-align
## 怪异盒子和标准盒子
* 标准盒子 : 总宽度 = width + margin + padding + border  
浏览器默认的模式 ( 标准盒: 设置的width就是内容区的宽度)
* 怪异盒子 : 总宽度 = width + margin  
标准模式下如果定义的DOCTYPE缺失，则在ie6、ie7、ie8下汇触发怪异模式。 ( 怪异盒: 设置的宽度包括内容区和padding及border)
## 常用元素默认margin和pdding
