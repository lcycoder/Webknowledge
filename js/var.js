// var str = 'abc123de45fgh6789qqq111';
// function findNum(str){
//     var tmp = '',
//     arr = [];
//     for(var i = 0;i<str.length;i++){
//         var cur = str[i];
//         if(!isNaN(cur)){
//             tpm += cur
//         }else{
//             if(tmp){
//                 arr.push(tmp);
//                 tmp = '';
//             }
//         }
//     }
//     if(tmp){
//         arr.push(tmp);
//     }
//     return arr;
// }
// console.log(findNum(str))

// var str = '1223334444';
// var reg = /\d?/g;
// var res = str.match(reg);
// console.log(res);
// var str = '  我是空格君   ';
// var reg = /^\s+|\s+$/g;

// console.log(typeof NaN);
// let arrayLike  = {
//     0: 'tom',
//     1: '65',
//     2: '男',
//     'length': 3
// }
// let arr = Array.from(arrayLike);
// console.log(arr);
// for(var i=0;i<10;i++){
//     setTimeout(console.log(i),0);//0、1、2、3、4、5、6、7、8、9
// }
// Person.prototype.name = 'li';
// function Person(){

// }
//     var person = new Person();
//     console.log(person.name);//li
//     Person.prototype = { 
//         name:"wang"
//     } 
    //这里Person.prototype 指向了另一个对象,而现在person的prototype指向还是之前的那个Person.prototype,相当于
    //var a = {name:1};   
    //var b=a;  //a和b指向了同一个地址.
    //a={name:2};这里a改变了指向的地址,但是b没有改变,所以b还是指向原来的那个地址.
    //console.log(b.name);//b.name=1;因为    
    // console.log(person.name);//li
    // var person2 = new Person();
    // console.log(person2.name)//'wang';

    // var div = document.getElementById("divButtons");
    // for( var i=1;i<=10;i++){
    //     var button = document.createElement("button");
    //     button.innerHTML = "按钮"+i;
    //     button.onclick = function(){
    //         console.log(i);
    //     }
    //     div.appendChild(button);
    // }
    var i = ':';
        var str = `name${i}  
        李承阳`
        console.log(str);