const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('./config');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data);
    res.send(data)
});

app.post('/', async (req, res) => {
    let result = await dbConnect();
    const data = await result.insertOne(req.body);
    res.send(data);
});

app.put('/:name', async (req, res)=>{
    let result = await dbConnect();
    const data = await result.updateOne({name: req.params.name},{$set:{name:"iphone 13 pro"}});
    res.send(data);
});

app.delete('/:id', async (req,res)=>{
    let result = await dbConnect();
    const data = await result.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    res.send(data);
});

app.listen(5000, () => {
    console.log('listen and port 5000');
});
// console.log(res);