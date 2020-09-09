# ES6
## 基本定义
* **let**
    * 在循环中,用let定义的变量,会绑定到当前循环的作用域,不会影响到其他循环 
    比如for里循环了10次,那么就会有十个作用域(i=1时定义了一个作用域,i=2时又创建了新的作用域,依次类推,在循环结束后,会销毁这个作用域)
    * const和let完全相同,只有一个区别,用const必须在声明时赋值,不可以重新更改.
    **拓展** 
        * 暂时性死区:ES6规定:let/const 命令会使区块形成封闭的作用域,声明之前使用变量会报错.
* **更多的字符串API**
    1. includes("abc")  判断字符串是否包含abc  
    2. startsWith("abc")  判断是否以abc开头 
    3. endWith("abc") 判断是否以abc结尾
    4. repeat(3)      重复三次指定的字符串,并返回一个新的字符串
    


<!-- * ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。
* 原生具备 Iterator 接口的数据结如下。
    * Array
    * Map
    * Set
    * String
    * TypedArray
    * 函数的 arguments 对象
    * NodeList 对象 -->

