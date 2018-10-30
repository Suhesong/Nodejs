const fs = require('fs');

const Promisify = require('util').promisify;

const read = Promisify(fs.readFile);

// read('./fsStream.txt')
// .then((data)=>{
//     console.log(data.toString());
// })
// .catch((err)=>{
//     console.log(err);
// })

async function test() {
    try {
        const file = await read('./fsStream.txt');
        console.log(file.toString());
    } catch (err) {
        console.log(err);
    }
};

test();