const {normalize}=require('path');
//const normalize=require('path').normalize   标准化路径
console.log(normalize('/usr//local/bin'));
console.log(normalize('/usr//local/../bin'));

const {join} = require('path'); //拼接路径
console.log(join('/join','local','usr'));

const {resolve,basename,dirname,extname,parse,format} = require('path');
console.log(resolve('./'));

 const filePath='usr/loacl/bin/no.txt';

 console.log(basename(filePath));//np.txt
 console.log(dirname(filePath));//usr/local/bin
 console.log(extname(filePath));//.txt


 console.log(parse(filePath));
 console.log(format(parse(filePath)));

 const {
     sep,
     delimiter,
     win32,
     posix
 }=require('path');
 console.log('sep: ',sep);
 console.log('posix sep',posix.sep);
 console.log('delimiter',delimiter);
 console.log('posix delimiter',posix.delimiter);

