// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// async function getData(){
//     const result = await client.connect();
//     const db = result.db('e-comm');
//     const collection = db.collection('products');
//     const response = await collection.find({}).toArray();
//     console.log(response); 
// }

// getData();

const dbConnect = require('./config');

dbConnect().then((res)=>{
    res.find({}).toArray().then((res)=>{
        console.log(res);
    });
});