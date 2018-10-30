const EventEmitter=require('events');
//监听事件
//removeAllListeners,移除所有的监听事件
class MyEmitter extends EventEmitter{

}

const me = new MyEmitter();

me.on('test',()=>{
    console.log('this is test!');
});

setInterval(()=>{
    me.emit('test');
},1000);

setTimeout(() => {
    me.removeAllListeners();
}, 2000);