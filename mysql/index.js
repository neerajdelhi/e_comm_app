const express = require('express');
const app = express();
const mysql = require('mysql');
const fs = require('fs');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdata"
});

conn.connect((err)=>{
    if(err){
        console.warn('error',err);
    }else{
        console.warn('connected');
    }
});

conn.query("select * from countries", (err, result)=>{
    fs.writeFileSync('mysql_data.js',JSON.stringify(result));
    console.warn('result',result);
});

app.listen(5000, ()=>{
    console.log('app is listening.');
});