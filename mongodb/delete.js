const dbConnect = require('./config');

dbConnect().then(async (res)=>{
    const result = await res.deleteMany({name:"in miromax note 3"});
    console.log(result);
});