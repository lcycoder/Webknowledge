# javascript
* 编译性语言：比较快（不能跨平台）
* 解释性语言：稍慢（跨平台）
javascript 单线程 解释性语言
DOM 操作文档
BOM 操作浏览器
### js三大部分
* ECMAScript
* Dom
* Bom
###  主流浏览器及其内核
* IE        trident
* chrome    webkit/blink
* firefox   Gecko
* Opera     presto
* safari    webkit
###  引入js
* 引入外部js文件
* 页面级js文件 （两个相同存在时，外部js文件生效）
### js基本语法
* 变量  （以英文字母，_,$ 开头，可以）
* js语法错误会引发后续代码终止，但不会影响其他js代码块
* 运算操作符
* '+'
    1. 数学运算,字符串连接
    2. 
* 

### 立即执行函数  
* (function(形参){} (实参) )  

### 
* 只有表达式才能被执行符号()执行;


### 对象
* 属性
    *  增  
    *  删  delete 
    *  改
    *  查  （查一个没有定义的属性会出现undefined）
* 对象的创建方法 
    1. var obj={}  plainObject 对象字面量
    2. 构造函数（大驼峰式）
        1. 系统自带的构造函数 new object（）
        2. 自定义
        * 构造函数内部原理
            1. 在函数体最前面隐式加上this={}
            2. 执行this.xxx = xxx;
            3. 隐式的返回this
    * new 方法中return 不能是原始值
* 包装类  
原始值是不能有属性的。
```js
var num = 4;
num.len = 3;
//new Number(4).len = 3; 这步之后就删掉了！注意。并不会影响到num。
console.log(num.len); // 在执行这一步时，会重新创建一个对象
// new Number(4).len  此时这个对象是新的一个对象。
```  

### var和let区别
* let是es6中用来声明变量的命令 ,和var有以下几种区别
    1. 当二者在全局作用域上声明变量,var会作为window的全局属性,而let不会
    2. 当二者在函数作用域上声明变量,二者意义相同
    3. 当二者在块作用域上声明变量,var 在整个函数内都可用,而let只能用在for循环,对于for循环外是不可见的
    4. let 不允许重名定义,var 可以
    5. let被定义后,数据和类型都能改变,而const不可以,



 

