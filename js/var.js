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
let arrayLike  = {
    0: 'tom',
    1: '65',
    2: '男',
    'length': 3
}
let arr = Array.from(arrayLike);
console.log(arr);
