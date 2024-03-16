// const http = require("http");

// http.createServer((req, res)=>{
//     res.write('<h1>Test pagez</h1');
//     res.end();
// }).listen(4500);
// Importing module 
// const chalk = require("chalk"); 

// // Printing the text 
// console.log(chalk.red("aayush")) 
// console.log(chalk.red.underline("aayush")) 
// console.log(chalk.red.underline.bold("GFG"))

const fs = require("fs");
const input = process.argv;

// console.log(input);
if(input[2] == 'add'){
    fs.writeFileSync(input[3], input[4]);
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3]);
}
