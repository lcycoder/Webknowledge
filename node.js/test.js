// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'123456',
//     database:'test'
// });
// connection.connect();
// connection.query('SELECT 1+1 AS solution',function(error,results,filds){
//     if(error) throw error;
//     console.log('The solution is:',results[0].solution);
// })
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'Aa112211',
  database : 'mysql'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});