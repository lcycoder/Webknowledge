### CSS 选择器分类

 - 标签选择
 - id 选择器
 - class
 - 后代选择 （div a）
 - 子代选择（div > p)
 - 相邻选择 （div + p）
 - 通配符选择 (\*)
 - 否定选择器 ：not(.link){}
 - 属性选择器
 - 伪类选择器
 - 伪元素选择器::before{}

 ### CSS3属性选择器

 ### css3伪类选择器
 * :hover
 * :focus
 * :after  
 * :before
 * :enabled 
 * :disabled
 * :checked
 * ::selection
 * :empty
 * :not(selecter)
 * p:first-of-type
 * p:last-of-type
 * p:nth-last-of-type(n)
 * :nth-child(n)
 * :nth-last-child(n)
 * :p:only-child

###伪类和伪元素区别
*伪类值是一种状态 比如：hover
*伪元素是一个真实存在的元素，可以有样式有内容

###iconfont原理
* 利用编码让图标编为一个字符
* 引入字体
* 利用before伪元素向页面内插入一个文字

###css定义的权重
* !important 优先级最高,但也会被权重高的important覆盖
* 行内样式会覆盖外部样式表的任何样式（除！important）
* 单独使用一个选择器时，不能跨等级使css规则生效
* 如果两个相同权重的选择器作用在同一元素上：以后面出现的选择器为最后规则
* 权重相同时，与元素距离近的选择器生效（比如在外部css表和页面级css，优先选择页面级css）  

###怎么美化一个checkbox？
- 让原本的勾选框隐藏
- `input + label` 背景图没选中
- `input:checked + label 背景图选中

```css
#value1{
    display: none;
}
#value1{
    display: none;
}
#value1:checked+label{
    color:blue;
    background: #4cda60;
}
#value1:checked+label:before{
   left:31px;
}
#value1+label{
    cursor: pointer;
    color:red;
    display: block;
    width:60px;
    height: 30px;
    background: #fafbfa;
    border-radius: 15px;
    position: relative;
    box-shadow:inset 0 0 0 0 #eee,0 0 1px rgba(0,0,0,0.4);
    transition: background 0.1s;
    -webkit-transition: background 0.1s;
    -moz-transition: background 0.1s;
    -o-transition: background 0.1s;
}
#value1+label:before{
    content:'';
    position: absolute;
    background: #fff;
    top:1px;
    left:1px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    box-shadow:0 3px 1px rgba(0,0,0,0.05), 0 0 1px rgba(0,0,0,0.3);
    transition: left 0.1s;
    -webkit-transition: left 0.1s;
    -moz-transition: left 0.1s;
    -o-transition: left 0.1s;
}
```
```html
 <input type="checkbox" name="timeType" value="1" id="value1" checked="checked"/>
    <label for="value1"></label>
```
