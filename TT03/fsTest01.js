const fs = require('fs');

fs.writeFile('./fs01.txt','I am an cool boy',(err)=>{
    if(err) throw new Error();
    console.log('写入成功');
});

const buf=Buffer.from('测试');

fs.writeFile('./fs02.txt',buf,(err)=>{
    if(err) throw new Error();
    console.log('写入成功');
}) 