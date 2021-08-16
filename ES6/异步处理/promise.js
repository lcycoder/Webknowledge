export default function getMethods(url){
    return new Promise(function(resolve,reject){
        axios.get(url).then(res => {
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })

}
getMethods('/api/xxx').then(res=>{
    console.log(res)
},err=>{
    console.log(err)
})