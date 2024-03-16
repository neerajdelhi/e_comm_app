const express = require('express');
const cors = require('cors');
const config = require('./db/config');
const users = require('./db/users');
const products = require('./db/Product');
const Product = require('./db/Product');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
    let user = new users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

app.post('/login', async (req, res) => {

    if (req.body.email && req.body.password) {
        let user = await users.find(req.body).select("-password");
        if (users) {
            res.send(user);
        } else {
            res.send("result: users not found.");
        }
    } else {
        res.send("result : users not found.");
    }

});

app.post('/add-product', async (req, res) => {
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
});

//product list api
app.get('/list-product', async (req, res) => {
    const result = await Product.find();
    if (result.length > 0) {
        res.send(result);
    }else{
        res.send('result: record not found');
    }
});

//delete product 
app.delete('/product/:id', async (req, res)=>{
    console.log(req.params.id);
    let result = await Product.deleteOne(req.param.id);
    res.send(result);
});

app.listen(5000, () => {
    console.warn('app is listning at port 5000');
})