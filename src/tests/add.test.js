const add = (a,b)=>a+b

const Greeting = (name)=>{return `Hello ${name}`}

test('this a test for adding two number' , ()=>{ 
    const out = add(3,4)  
    expect(out).toBe(7)


} )


test('Greeting ', () => {
    const Hi = Greeting('amin')
    expect(Hi).toBe('Hello amin')
})