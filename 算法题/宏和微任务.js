console.log("script start");

setTimeout(function(){
    console.log('setTimeout');
},0);

Promise.resolve().then(function(){
    console.log('promise1');
}).then(function(){
    console.log('promise2');
});

console.log('script end');

// 顺序: 
// script start
// script end
// promise1
// promise2
// setTimeout
一个异步任务,先放到event table里注册函数,再放入event queue里
等待主线程执行完毕后,再执行,
例如setTimeout(()=>{
    test();
},1000)
会先在event table里注册test(),然后等待1秒后,放入事件队列里,等主线程
执行完毕后再执行

