setImmediate(()=>{
    console.log('setImmediate1');
    process.nextTick(()=>{
        console.log('newxTick1')
        setImmediate(()=>{
            console.log('setImmediate 3')
        })
    })
})


setImmediate(()=>{
    console.log('setImmediate2');
    process.nextTick(()=>{
        console.log('newxTick2')
        setImmediate(()=>{
            console.log('setImmediate 4')
        })
    })
})