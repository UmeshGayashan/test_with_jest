const {add,err,promiseTest,arr} = require('../index')

test('toBe',()=>{
    expect(add(1,2)).toBe(3)
})

// Same as toBe
test('toEqual',()=>{
    expect(add(1,2)).toEqual(3)
})

// Check whether output undefined (Defined)
test('toEqual',()=>{
    expect(add(1,2)).toBeDefined()
})

// Not to Be null
test('toBeNull',()=>{
    expect(add(1,2)).not.toBeNull()
})

test('toBeGreaterThan',()=>{
    expect(add(1,2)).toBeGreaterThan(1)
})

test('toBeLessThan',()=>{
    expect(add(1,2)).toBeLessThan(10)
})

// // Failed One -- Check Again
// test('toBeCloseTo',()=>{
//     expect(add(1.111111111,2.4444444444)).toBeCloseTo(3.6)
// })

test('toMatch',()=>{
    expect(add('Hello','World')).toMatch(/Hello/)
})

// Throw new error
test('toThrow',()=>{
    expect(()=> err()).toThrow('I am new Error')
})

describe('I am block',()=>{
    test('I am executing in a block',()=>{
        expect(()=> err()).toThrow('I am new Error')
    })
    test('toThrow',()=>{
        expect(()=>err()).toThrow('I am new Error')
    })
})

// Promise Testing
test('promiseTest Old Way',()=>{
    promiseTest(1,2)
    .then(data =>{
        expect(data).toBe('+ve')
    })
    .catch(e =>{
        expect(e).toBe('-ve')
    })
})

test('promiseTest Easy way',()=>{
    expect(promiseTest(2,1)).resolves.toBe('+ve')    
})

test('promiseTest Easy way',()=>{
    expect(promiseTest(1,2)).rejects.toBe('-ve')    
})

test('toContain',()=>{
    expect(arr()).toContain('Bat')
})
