# js之可迭代对象
* 遍历Array可以采用下标循环,遍历map和set就无法适用下标,为了统一集合类型,es6标准引入了新的iterable类型
array,map和set都属于iterable类型
具有iterable类型的集合可以通过新的for...of循环来遍历
for...of循环是ES6引入的新语法
```js
var a = ['A','B','C'];
var s = new Set(['A','B','C'])
var m = new Map([[1,'x'],[2,'y'],[3,'z']]);
for(var x of a)
{ 
    console.log(x);
}
for(var x of s)
{
    console.log(x);
}
for( var x of m){
    console.log(x[0]+'='+x[1])
}
for ( var x of arr1){

}
```
* for...of 和for...in的区别
for...in遍历的实际上是对象的属性名称,它的每个元素的索引被视为一个属性
当我们手动给array对象添加额外的属性后,
```js
var a = ['A','B','C'];
a.name = 'Hello';
for(var x in a){
    console.log(x); // '0','1','2','name'
}
//for...in循环把name包含在内,但是array的length属性却不包括在内
//for...of循环则修复了这些问题.只循环集合本身的元素
var a = ['A','B','C'];
a.name = 'Hello';
for (var x of a){
    console.log(x);//'A''B''C'
}
//然而，更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。以Array为例：

'use strict';
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index+array);
});
//Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element);
});
//Map的回调函数参数依次为value、key和map本身
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});
//如果对某些参数不感兴趣，由于JavaScript的函数调用不要求参数必须一致，因此可以忽略它们。例如，只需要获得Array的element：
var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    console.log(element);
});
```