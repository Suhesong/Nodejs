const fs = require('fs');
//stat 输出文件的详细信息
// fs.stat('./fs.txt',(err,stat)=>{
//     if(err) throw new Error();
//     console.log(stat);
// });

//改名
// fs.rename('./fs01.txt','fs.txt',err=>{
//     if(err) throw new Error();
//     console.log('改名成功！');
// });
//删除
// fs.unlink('./fs.txt',err=>{
//     if(err) throw new Error();
//     console.log('删除成功!');
// });
//创建文件夹
// fs.mkdir('./node',err=>{
//     if(err) throw new Error();
//     console.log('创建成功！');
// })
//删除文件夹
// fs.rmdir('./node',err=>{
//     if(err) throw new Error();
//     console.log('删除成功');
// });
//监视文件夹的变化
fs.watch('./',{recursive:true},(event,filename)=>{
    console.log(event,filename);
})

