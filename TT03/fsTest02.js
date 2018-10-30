const fs = require('fs');

fs.readFile('./fs01.txt',(err,data)=>{
    if(err) throw new Error;
    console.log(data);
});

fs.readFile('./fs02.txt','utf8',(err,data)=>{
    if(err) throw new Error;
    console.log(data);
});