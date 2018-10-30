const fs = require('fs');

const ws = fs.createWriteStream('./fsStream.txt');
const tid=setInterval(() => {
    let num = parseInt(Math.random() * 10);
    console.log(num);
    if (num < 8) {       
        ws.write(num + '');
    } else {
        clearInterval(tid);
        ws.end();
    }

}, 200);

ws.on('finish', () => {
    console.log('done');
})