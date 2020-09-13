# DOM操作
* 操作class
```js
    $('li').addClass('red'); //给li标签加class'red'
    $('li').removeClass('red')//移除li标签的red属性
    $('li').hasClass('')//看li是否有red这个class
```

* 插入元素
    1. 内部插入
    ```js
    .append('<h2></h2>'); //
    .append($('insideAdd p'));// 
    $('<h2>appendTo方法插入</h2>').appendTo('.insideAdd');//后面写父级
    .prepend()  // 和append 方法是一样,也有prependTo方法
    ```
    2. 外部插入
    ```js
    //外部插入
    .after('');//在选中的元素后插入元素
    $('<h2>insertAfter方法插入</h2>').insertAfter('.insideAdd')
    .before // 在选中元素的前面插入
    ```
* html()和text()方法
html方法里面书写的标签可以在页面中显示,text的不能

* 包裹元素
    1. .wrap('<li>') 给选中的元素在外层加一个<li>标签
    2. .wrapInner() 在里面添加标签
    3. .unwrap()    // 找到选中的元素去除他的父级
* 删除元素
    1. $('.red').remove()    //删除选中的元素 
    2. .detach()   也是删除元素,和remove不同的是,detach有返回值,返回被删除的元素
    3. .empty()  // 清空子元素 / 和unwrap相反 
* 克隆方法()
    1. .clone() //克隆选中的元素,但是需要手动添加到页面中.
    2. .repalceAll()   拿$()里的元素替换掉replaceAll()里的
    3. .replaceWidth() ,和replaceAll相反,后面的替换前面的
* 元素属性
    1. .attr('src') 获取选中元素的属性
    2. .attr('src','image1') 给选中元素添加src属性并赋值
    3. prop 和attr类似,不同的是
        1. prop返回的是绝对地址 attr返回的是标签里的地址
        2. 取不到标签自定义的属性, attr可以
        3. 添加自定义属性时,只加在DOM对象上,不添加到标签里
    4. removeattr 和removeprop(删除的是DOM对象上属性)  二者都是删除属性
    5. val() ,获取value的值
* css属性
    1. offset() 相对于document的位置
    2. position() 相对于有定位的父级的位置
    3. scrollTop()  滚动轮距离上边的位置
    4. scrollLeft() 距离左边的位置