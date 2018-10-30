const EventsEmitter = require('events');
//事件触发，传输参数
class MyEmitter extends EventsEmitter{

}

const me=new MyEmitter();

me.on('error',(err,date)=>{
    console.log(err);
    console.log(date);
});

me.emit('error',new Error('out of here!'),Date.now());