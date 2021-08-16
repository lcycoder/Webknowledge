
function deepclone(origin,target){
    var target = target||{};

    for(var prop in origin){
        if(origin.hasOwnProperty(prop)){
            if(typeof(origin[prop]=='object')&&origin[prop]!==null){
                if(Object.prototype.toString.call(origin[prop]=="[object Array]")){
                    target[prop]=[];
                }else{
                    target[prop]={};
                }
                deepclone(origin[prop],target[prop]);
            }
            else
            target[prop]=origin[prop];
        }
    }
    return target;
}

var obj = {
    name:'abc',
    age:123,
    card:['visa','master'],
    wife:{
        name:'bcd',
        son:{
            name:'aaa'
        }
    }
}
