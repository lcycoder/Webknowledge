# jQuery选择器
```js
/* 基础选择器 */
$(#list1).css('background','green');
$('.red').css('border','2px,solid,pink');
/* 层级选择器 */
$('a.link ~a').css("color:red");//选择a.link后所有的a
/* 属性选择器 */
$('li[title|=css]')// 属性是title并且以css为前缀的li(前缀是用-隔开的,css1是不能选出来的,css-1可以)
$('li[id^=color]') // id是以color为开始的li标签 (不需要-)
$('li[id$=color]') // id是以color为结束的li标签(也是不需要-)
$('li[lang*=cn]') // 属性lang中包含cn字符串 abcn,cn都能被选出
$('li[lang~=cn]') //属性中包含cn单词,用空格隔开
$('li[class=cl][name=ccc]') // class属性为cl,name为ccc的li
/* 基础过滤选择器 */
$('li:eq(1)'); //选择索引为1的li标签  (:后面跟的是条件)
$('li:qt(1)'); //索引大于1的标签
$('li:lt(1)');  //小于 
 $('li:not(li:eq(2))') // 除了索引值为2的 
 $('li:even');  //偶数    (奇数的是odd)
 $('li:first');  //第一个
 $(':root');  //根节点
 $(':header')//所有h标签
 /* 子元素过滤器 */
 $('#id1 p:first-child') // id为id1 后代第一个p元素标签(两个条件,在id1下,第一个子元素就是p标签,)
 $('#id1 span:first-of-type') // 这种不需要一定是第一个元素,只需要是span类下的第一个就能选出,(相对应,将first改为last就是选中最后一个)
 $('#id1 p:nth-child(2)') // 第二个  
 $('#id1 p:nth-type-of(2)') // 第二个  区别同上
 $('#id1 p:only-child') // 选择只有一个子元素的标签
 $('#id1 p:only-type-of') // 第二个    
 /* 内容过滤选择器 */
 $('#content:contains(kaivon') // 在id为content下 ,内容是kaivon的元素
 $('div:empty') //  <div></div>   选择出一个空的div
  $('#id1 has:(p)') //   检测是否包含p标签,如果有,选中
/* 表单过滤器 */
$(':button') // 选择所有的按钮(不区分input和button)
$('inpout:checkbox').wrap('<span></span>').parent().css('');
```
