// à installer 
// npm install --save -dev mysql


// server.js
console.log("Hello World!");
const express = require('express');
const server = express();
var mysql = require('mysql');

server.get("/json", (req, res) => {
   res.json({ message: "Hello world" });
});

server.get("/", (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

const port = 4000;

//**************
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

var con = mysql.createConnection({
  host: "mysql-adatech.alwaysdata.net",
  user: "adatech",
  password: "a0a19#a0a19"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});