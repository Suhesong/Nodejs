console.log(Buffer.alloc(10));
console.log(Buffer.alloc(10,1));
console.log(Buffer.allocUnsafe(10));
console.log(Buffer.allocUnsafe(10,1));
console.log(Buffer.from([1,2,3]));
console.log(Buffer.from('test'));


/*
byteLength
isBuffer()
concat()
*/

console.log(Buffer.byteLength('test'));
console.log(Buffer.byteLength('测试'));

console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(Buffer.from([1])));

const buf1= Buffer.from('Heelo ');
const buf2= Buffer.from('world');
const buf3=Buffer.concat([buf1,buf2]);
console.log(buf3.toString());

/*
buf.length()   空间长度
buf.toString() 可以传入编码
buf.fill()     填充值 
buf.equals()   内容是否一样
buf.indexOf()  返回查到的位置
buf.copy()
*/