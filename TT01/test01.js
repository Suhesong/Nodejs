let index = 0;

function handler() {
    if (index++ >= 100) return;
    console.log(`setImmediate ${index}`)
    process.nextTick(()=>{
        console.log(`nextTick ${index}`)
    })
    setImmediate(handler);
};
handler()
