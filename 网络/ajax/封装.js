function ajax(options){
    options = options || {};
    options.type = (options.type||'GET').toUpperCase();
    options.dataType = options.dataType||"json";
    var params = formatParams(options.data); 
    var xhr;
    //考虑兼容性
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        xhr = new ActiveXObject('microsoft.XMLHTTP');
    }

    // 启动并发送一个请求
    if(options.type = "GET"){
        xhr.open("GET",options.url+"?"+params,true);
        xhr.send(null);
    }else if( options.type == "POST"){
        xhr.open("post",options.url,true);
        xhr.setRequestHeader("Content-type",'application/x-www-formurlencoded')
        xhr.send(params);
    }
    //设置有效时间
    setTimeout(function(){
        if(xhr.readySate != 4){
            xhr.abort();
        }
    },options.timeout)

    //接受
    //options.success成功之后的回调函数 options.error失败后的回调函数
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            var status=xhr.status;
            if(status>=200&& status<300 || status==304){
              options.success&&options.success(xhr.responseText,xhr.responseXML);
            }else{
                options.error&&options.error(status);
            }
        }
    }
    
}

function formatParams(data){
    var arr=[];
    for(var name in data){
        arr.push(encodeURIComponent(name)+"="+encodeURIComponent(data[name]));
    }
    arr.push(("v="+Math.random()).replace(".",""));
    return arr.join("&");

}