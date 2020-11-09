[toc]
## 选择器
###### 基本选择器
###### 伪类选择器
* 动态伪类
    1. 锚点伪类 : link , visited
    2. 用户行为伪类 hover , active , focus
    3. 目标伪类 target
    4. checked状态伪类
###### 结构选择器
1. nth
    1. :first-child / last-child
    2. :nth-child(n)  / nth-last-child(n)
    3. :nth-of-type(n)  / nth-last-of-type(n)     
    4. :first-of-type(n)  / last-of-type(n)
    5. :only-child
    6. :empty
2. 否定选择器  例如ul:not(span){}
3. 伪元素
    1. ::first-line
    2. ::last-line
    3. ::before
    4. ::after
    5. ::selection
    * 伪元素与元素的区别: 
    无法通过JS获取其DOM
    无法通过浏览器开发者工具直接查看
    伪元素默认是 inline 
    使用伪元素注意事项： 
    1.使用伪元素before,after必须设置content
    2.使用伪元素before,after显示背景图，一定要使用display设置为块元素
    3.使用伪元素before,after设置为display:inline-block,需要再次设置vertical-align:middle
## 边框阴影和圆角
###### 圆角border-radius 
###### 边框阴影box-shadow
* 水平方向的偏移量 垂直方向的偏移量 模糊程度 扩展程度 颜色 是否具有内阴影
## 背景和渐变

## 过渡
## 变换
## 动画