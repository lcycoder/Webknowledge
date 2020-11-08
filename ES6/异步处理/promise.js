const { resolve } = require("path")

var promise = new Promise(function(resolve,reject){
    $.ajax({
        url:'/api/poisearch.json',
        method:'get',
        datatype:'json',
        success:(res)=>{
            resolve(res)
        },
        error:(err)=>{
            reject(err)
        }
    })
})
promise.then(function(res){return res.data})
.then(function(data){return data.result;})
.then(function(result){console.log(result)});
promise.then(res=>res.data)
.then(data=>data.result)
.then(result=>console.log(result));