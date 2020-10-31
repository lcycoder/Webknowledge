var reg = /^[0-9]{1,20}$/
var reg = /^\w|.{5,20}/ /^[a-zA-Z]{1}([a-zA-Z0-9]|)
var reg = /^[a-zA-Z]{1,30}$/g;
var reg = /^(\w){6,20}$/g
var reg = /^1[3456789]d{9}&/

  
var clone = function(obj ,deep){
    
    if(Array.isArray(obj)){
        var newobj={};
        if(deep)
        for(var i=0;i<obj.length;i++){
            newobj.push(this.clone(obj[i],deep));
        }
        return newoobj;
    }
    else if(typeof obj === "object")
    {
    return obj.slice();
    else if(typeof obj === 'object'){
        var newobj = {};
        for(var prop in obj){
            if(deep){
                newobj[prop] = this.clone(obj[prop],deep);
            }
            else
            newobj[prop]=obj[prop];
        }
        return newobj;
    }
    else 
    return obj;
}