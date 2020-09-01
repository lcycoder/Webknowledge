const fs = require('fs')
fs.stat('hello.js',(error,stats)=>{
    if(error){
        console.log(error)
    }else{
        console.log(stats)
        console.log('文件：${stats.isFile()}')
        console.log('目录：${stats.isDirectory()}')}
})

const fs = require('fs')
fs.mkdir('logs',(error) => {
    if(error){
        console.log(error)
    } else{
        console.log('成功创建目录：logs')
    }
})

fs.writeFile('logs/hello.log','你好', (error) =>{
    if(error){
        console.log(error)
    }else{
        console.log('成功写入文件')
    }
})
fs.readdir("logs",(error,files)=>{
    if(error){
        console.log(error);
    }else{
        console.log(files)
    }

})