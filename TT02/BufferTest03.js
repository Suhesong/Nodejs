const {StringDecoder} = require('string_decoder');
//自带的StringDecoder,可以处理中文乱码
const decoder=new StringDecoder('utf-8');



const buf = Buffer.from('我是苏鹤松');

for (let i=0;i<buf.length;i+=4){
    let buf1=Buffer.alloc(4);
    buf.copy(buf1,0,i);
    console.log(decoder.write(buf1));
}