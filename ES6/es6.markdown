
* ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。
* 原生具备 Iterator 接口的数据结如下。
    * Array
    * Map
    * Set
    * String
    * TypedArray
    * 函数的 arguments 对象
    * NodeList 对象