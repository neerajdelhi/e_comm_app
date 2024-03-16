const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect(){
    const result = await client.connect();
    const db = result.db('e-comm');
    const collection = db.collection('products');
    return collection;
    // const response = await collection.find({}).toArray();
    // console.log(response); 
}

module.exports = dbConnect;

// dbConnect().then((res)=>{
//     console.log(res);
// });
// console.log(dbConnect());