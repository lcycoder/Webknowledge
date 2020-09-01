* 编译性语言：比较快（不能跨平台）
* 解释性语言：稍慢（跨平台）
javascript 单线程 解释性语言
DOM 操作文档
BOM 操作浏览器
### js三大部分
* ECMAScript
* Dom
* Bom
### js执行队列
* 轮转时间片
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

### 预编译
* 函数声明整体提升
* 变量声明提升
* 未声明的变量直接赋值，则此变量为全局变量所有
### 预编译四步
* 创建AO对象 AO{ }
* 找形参和变量声明，将变量和形参名作为AO属性名，值为undefined  
AO{  
    a:undefined  
    b:undefined  
}
* 形参和实参相统一（把实参的值赋予形参名）  
AO{  
    a:1  
    b:undefined   
    }
* 找函数声明，值赋予函数体  
AO{
   a:function a(){}  
   b:undefined
   d:function d(){}
}

```js
function fn(a){
    var a = 123;
    function a();
    var b = function(){}
    function d(){}
}
fn(1);
```

### 作用域
* [[scope]]作用域链
```js
function a(){
    var glob = 100;
    b();
}
//a defined a.[[scope]] --> 0:GO{}
//a doing   a.[[scope]] --> 0:AO{}
//                          1:GO{}
//b defined b.[[scope]] --> 0:AO{}
//                          1:GO{}
//b doing   b.[[scope]] --> 0:bAO{}
//                          1:AO{}
//                          2:GO{}  
```
### 闭包
```js
function a(){
    function b(){
        var bbb=234;
        document.write(aaa);
    }
    var aaa=123;
    return b;
}
var glob = 100;
var demo = a();
demo();
// b函数被返回到外部，
```
```js
function test(){
    var arr[];
    for(var i=0;i<10;i++){
        arr[0] = function(){
        document.write(i + "");
    }
    return arr;
}
var myArr = test();
for(var j=0; j <10 ; j++ ){
    myArr[i]();
}
```
* 闭包的作用
    * 累加器
    * 当做缓存
    * 封装，属性私有化
    * 模块化开发 

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

### 原型
* 定义： 原型是function对象的一个属性，定义了构造函数制造出的
对象 的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。
* 特点
    * 利用公有属性， 提取
    * 
    * 
```js
    //Person.prototype 
    //Person.prototype = {
        constructor:Person;
        __proto__:Object

    }（可以将Person中相同的属性提取到prototype中)

    function Person(){

    }
    var person = new Person();

```

## js执行机制 - 单线程
* js引擎线程和GUI线程互斥
js可以操作DOM对象，进而会影响到GUI的渲染结果  
也就是说当js引擎线程处于运行状态时，GUI渲染线程将处于冻结状态  

