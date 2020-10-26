# ajax
* 简介: Asynchronus Javascript and XML 异步JavaScript和XML,创建交互式网页应用的网页开发技术.
无需重新加载整个页面的情况下,能够更新部分网页的技术.
* 创建XMLHttpRequest对象 (ie5,6使用ActiveXObject)
* 向服务器发送请求, 使用XMLHttpReques对象的open()和send()方法

# get和post的区别
* get更简单,更快 ,大部分情况下都能用,
以下情况只用post
    1. 无法使用缓存文件(更新服务器上的文件或数据库)
    2. 向服务器发送大量数据(post没有数据量限制)
    3. 发送包含未知字符的用户输入时,post比get更稳定和可靠


```js
var xhr = null;
        if (window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        } 
        else {
        xhr= new ActiveXObject("Microsoft.XMLHttp");
        }
        console.log(xhr.readyState);
        xhr.open("get","http://developer.duyiedu.com/edu/testAjax");//如果open第三个参数传不传，true或者为异步模式，false为同步模式

        console.log(xhr.readyState);
        xhr.onreadystatechange = function(){
            //readystate == 4 请求已完成，已经接受到数据
            //status == 200 网络请求，结果都会有一个状态码，来表示这个请求是否正常
            //2** 表示成功
            //3** 重定向
            //4** 客户端错误
            //5** 服务端错误
            if（xhr.readyState == 4 && xhr.status == 200){
                alert(xhr.responseText);
            }
        }
        xhr.send();//将请求发送到服务器

```

```js
    $.ajax{   // jquery实现ajax
        url:"http://developer.duyiedu.com/edu/testJsonp",
        type:"get";
        dataType:"jsonp";
        success:function(data){
            console.log(data);
        }

    }
```
