const dbConnect = require('./config');

dbConnect().then(async (res)=>{
    const insert = await res.insertMany([
        {name:'in miromax note 2', price: 1499, year:2023},
        {name:'Nokia 5233', price: 500, year:2022},
        {name:'samsung 102', price: 58000, year:2025}
    ]);
    console.log(insert);
});

