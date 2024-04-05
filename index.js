const add =(a,b) =>{
    return a+b;
}

const err = ()=>{
    throw new Error('I am new Error')
}

module.exports = {
    add,err
}