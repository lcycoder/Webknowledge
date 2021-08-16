function throttle(handler,wait){
    var pre = Date.now();
    return function(){
        var args = arguments; 
        var now = Date.now();
        if(now - pre >= wait){
            handler.apply(this,args);
            pre = Date.now();
        }
    }

}
function buy(){
    console.log("1");
}  
var onclick=throttle(buy,1000);