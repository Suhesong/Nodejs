process.nextTick(()=>{
    console.log('newxTick 1')
    process.nextTick(()=>{
        console.log('nextTick 3')
    })
    setImmediate(()=>{
        console.log('setImmediate 1')
    })
})
process.nextTick(()=>{
    console.log('newxTick 2')
    process.nextTick(()=>{
        console.log('nextTick 4')
    })
    setImmediate(()=>{
        console.log('setImmediate 2')
    })
})