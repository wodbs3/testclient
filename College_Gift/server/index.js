const express = require('express')
const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
const app = express()
const port = 3000

app.get('/', (req,res) => res.send("Hello World!@@@@@!!!!!!!!!!"))

app.listen(port, () => console.log('example app listening on port ${port}!'))


app.get('/users', (req, res) => {
    connection.query('SELECT * from user', (error, rows) => {
      if (error) throw error;
      console.log('User info is: ', rows);
      res.send(rows);
    });
  });

  app.get('/category', (req, res) => {
    connection.query('SELECT * from category', (error, rows) => {
      if (error) throw error;
      console.log('Category info is: ', rows);
      res.send(rows);
    });
  });