### 数组常用API
* push  :向数组添加元素  返回值: 长度 (改变原数组)
* unshift  :向开头添加 同上
* pop  删除尾部元素 返回值:被删除的元素 (改变原数组)
* shift 删除头部  同上
* splice(index,0,value1,value2...)  向数组的指定index处插入 返回值:被删除的元素 (会改变原数组)
* sort  按指定规则排序
    1. 如果不加参数,并不是从小到大排,而是按照数字的第一个字符的大小去比较,然后再用第二个字符,小的在前面
* reverse 反转, 会改原数组 
* concat   数组连接,返回连接的新数组
* join 以指定分符号连接, 默认为"," ,返回连接后的字符串
* slice  :  截取字符串 [start,end)返回范围选定的元素 (不会改变原始数组) 下标从0开始 
返回一个新的数组
* toString() 和不传参数的join()一致
* flat 深度解析
<https://blog.csdn.net/weixin_43606158/article/details/89440728>