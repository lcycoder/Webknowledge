# nodeJS
1. 
2. 
3. 为了保证顺利的到处模块内容，nodejs做了一下处理  
    1. 在模块开始执行前，初始化一个值module.exports = {};
    2. module.exports 即模块的导出值
    3. 为了方便开发者便捷的导出，nodejs在初始化完module.exports后，又声明了一个变量exports = module.exports 
```js
(function(module){
    module.exports = {};
    var exports = module.exports ; 
    return module.exports ;
})
```
4. 为了避免反复加载同一个模块，nodejs默认开启了模块缓存，如果加载的模块已经被加载过了，则会自动使用之前的导出结果。

* CommonJS的工作原理
当使用require导入一个模块时，node会做以下两件事情（不考虑模块缓存）


# ES6模块化
* es6模块化特点
    1. 使用以来**预声明**的方式导入模块
        1. 依赖延迟声明
            1. 优点：某些时候可以提高效率
            2. 缺点：无法在一开始确定模块依赖关系
        2. 依赖预声明
            1. 优点：一开始就能确定模块依赖关系
            2. 缺点：某些时候效率较低
    2. 灵活的多种导入导出方式 
    3. 规范的路径表示法：所有路径必须以./或../开头
* 基本导入导出
     在引入js文件时，后面加一个type="module",浏览器会把这个js文件当做一个模块
    * 基本导入导出
    * 有多个，每个必须有名称
    ```js
    //导出
    export var a = 1;//导出a，值为1，类似CommonJS的exports.a = 1
    export function test(){//导出test，值为一个函数
    export { age , sex }
    //导入
    import{name,age} from "./a.js"
    import{age as age1} form "./a.js" //使用as进行重命名
    import{}
    }
    ```
        * function sort
        * obj helper 
        * string name
    * 默认导入导出  
    每个模块除了允许有多个基本导出之外，还有一个默认导出  
    ```js
    export default 
    import data form "./a.js" //将a.js模块中的默认导出放置到常量data里
    import * as data from "./a.js"//可以把所有的基本导出和默认导出聚合到一个对量里  

    import data,{a,b} from "./a.js" //将默认导出放到data里，基本导出放到a，b,里
    ```

    ## es6模块化的其他细节
    * 尽量导出不可变值
    
