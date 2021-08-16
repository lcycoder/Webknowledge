function request(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('成功')
        },2000)
    })
    request().then(value=>{
        console.log(value)
    })
}