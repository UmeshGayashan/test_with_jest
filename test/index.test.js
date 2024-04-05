const {add} = require('../index')

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