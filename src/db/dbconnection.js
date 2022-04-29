const mysql= require('mysql');

var mysqlConnection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'blogapi'
});

mysqlConnection.connect((err) => {
   if(!err)
      console.log("Connection created successfully.");
    else
      console.log("Connection Failed \n Error :" + JSON.stringify(err,undefined,2));
});

module.exports = mysql;