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
![avatar](https://img-blog.csdnimg.cn/2020021916172911.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDAzMDczNg==,size_16,color_FFFFFF,t_70)
![avatar](https://img-blog.csdnimg.cn/20200219161650595.png)
###伪类和伪元素区别
* 伪类值是一种状态 比如：hover (表示已经存在的某个元素处于某种状态)
* 伪元素是一个真实存在的元素，可以有样式有内容(创建一些不存在原有DOM结构树的元素)

### iconfont原理
* 利用编码让图标编为一个字符
* 引入字体
* 利用before伪元素向页面内插入一个文字

### css定义的权重
* !important 优先级最高,但也会被权重高的important覆盖
* 行内样式会覆盖外部样式表的任何样式（除！important）
* 单独使用一个选择器时，不能跨等级使css规则生效
* 如果两个相同权重的选择器作用在同一元素上：以后面出现的选择器为最后规则
* 权重相同时，与元素距离近的选择器生效（比如在外部css表和页面级css，优先选择页面级css）  

![avatar](https://img-blog.csdnimg.cn/20200219160726207.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDAzMDczNg==,size_16,color_FFFFFF,t_70)
