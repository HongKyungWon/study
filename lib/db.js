var mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'160223',
    database:'opentutorials'
  });
  db.connect();
  
  module.export = db;