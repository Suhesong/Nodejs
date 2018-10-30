/*
buf.length()   空间长度
buf.toString() 可以传入编码
buf.fill()     填充值 
buf.equals()   内容是否一样
buf.indexOf()  返回查到的位置
buf.copy()
*/

const buf = Buffer.alloc(10);
const buf1 =Buffer.from('test');
const buf2 =Buffer.from('测试');
console.log('buf',buf.length);
console.log('buf1',buf1.length);
console.log('buf2',buf2.length);

console.log(buf2.toString());

const buf4=Buffer.allocUnsafe(10);
buf4.fill(1);

const buf5=Buffer.from('测试');
console.log(buf2.equals(buf5));

console.log(buf2.indexOf('ni'));

const buf6=Buffer.alloc(10);
buf2.copy(buf6,0,2);
console.log('buf2:',buf2);
console.log('buf6:',buf6);