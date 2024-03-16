const dbConnect = require('./config');

dbConnect().then(async (res)=>{
    const result =  await res.updateMany(
        {name:"in miromax note 2 pro"}, {$set:{name:"in miromax note 5"}}
     );
    console.log(result);
});