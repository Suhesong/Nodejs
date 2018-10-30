const EventEmitter=require('events');
//事件的once，只触发一次事件
class MyEmitter extends EventEmitter{

}

const me = new MyEmitter();

me.once('test',()=>{
    console.log('this is test!');
});

setInterval(()=>{
    me.emit('test');
},1000);