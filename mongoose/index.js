const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const insertInDb = async ()=>{

    const prodModel = mongoose.model('products',productSchema);
    let data = new prodModel({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });

    let result = await data.save();

    console.log(result);
}

const updateInDb = async () => {
    
    const prodModel = mongoose.model('products',productSchema);
    const data =await prodModel.updateOne({name: 'max pro'}, {$set:{name:'max 1 pro'}});
    console.log(data);
}

const deleteInDb = async ()=>{
    const prodModel = mongoose.model('products',productSchema);
    const data = await prodModel.deleteOne({name:'samsung 102'});
    console.log(data);
}

const findInDb = async () => {
    const prodModel = mongoose.model('products',productSchema);
    const data = await prodModel.find();
    console.log(data);
}

findInDb();
