const { add, subtract } =  require('./cashflow');

describe('cashflow.js tests', () =>{
    it ('should test add', () =>{
        expect(add(2, 2)).toBe(4);
    })
    it ('should test subtract', () =>{
        expect(subtract(2, 2)).toBe(0);
    })
})