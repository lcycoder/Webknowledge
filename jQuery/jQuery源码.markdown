#  jQuery
* get  从jQuery获取原生对象
```js
    jQuery.prototype.get = function (num) {
        if (num == null){
            return Array.prototype.slice.call(this,0);//从类数组向数组转换
        }else {
            if( num>=0 ){
                return this[num];
            }else
            {
                return this[num+ this.length]
            }
        }
    }
```
* eq  获取的是jQuery对象
```js
    jQuery.prototype.eq = function (num) {

    }
```

* find 原有的基础上，往下 去查找
* filter 
* has 

* is  返回值是true或者false
* add() 集中操作
```js
jQuery.prototype.add = function (selector){
    var curObj = jQuery(selector);
    var baseObj = this;
    var newObj = jQuery();
    for (var i = 0; i < curObj.length; i++){
        newObj[this.length++] = curObj[i];

    }
    for (var i = 0; i < .length; i++){
        newObj[this.length++] = curObj[i];
    }
}
```
* end() 可以回退
```js

```

  































```js
(function(){
    function jQuery(){
    
    }
    jQuery.prototype.init = function(selector){
        //选出dom并且包装成jQuery对象， 返回
         if(selector.indexof('.') != -1){
             var dom = document.getElementsByclassName( selector.slice(1));
         }
         else if( selector.indexof('.') != -1){
         var dom = document.getElementsById( selector.slice(1));
         }
         if (dom.length == undefined ){
             this[0] = dom ;
             this.length++;
         }else
         {
             for (var i=0; i < dom.length ; i ++){
                 this.[i] = dom[i];
                 this.length++;
             }
         }
    }
    jQuery.prototype.css = function (config){
        for(var i = 0; i < this.length; i ++){
            for (var attn in config)
            {
                this[i].style[attr] = config;
            }
        }
        return this;
    }
    window.$ = window.jQuery = jQuery;
})
```
