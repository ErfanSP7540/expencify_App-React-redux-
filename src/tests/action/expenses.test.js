
import {expensesAdd ,expensesRemove , expensesEdit } from '../../actions/expenses'


test(' remove Expenes ', ()=>{

    const input ={id: 12351}
    const recieved = expensesRemove(input)
    const expected = {
        type: 'REMOVE_EXPENSES',
        expense: { id: 12351 } }

    expect(recieved).toEqual(expected);
})
 



test(' Edit Expenes ', () => {

    const input = {
        id: 124121,
        description : "des Input",
        note : 'notification',
        amount :4500,
        createAt : 10101010
    }

    const recieved = expensesEdit(input);

    const expected = {
        type: 'EDIT_EXPENSES',
        id: 124121,
        description : "des Input",
        note : 'notification',
        amount :4500,
        createAt : 10101010        
    }

    expect(recieved).toEqual(expected);
})

test(' Edit Expenes ', () => {

    const input = {
        id: 124121,
        description: "des Input",
        note: 'notification',
        amount: 4500,
        createAt: 10101010
    }

    const recieved = expensesEdit(input);

    const expected = {
        type: 'EDIT_EXPENSES',
        id: 124121,
        description: "des Input",
        note: 'notification',
        amount: 4500,
        createAt: 10101010
    }

    expect(recieved).toEqual(expected);

})


test(' Add Expenes  with input', () => {

    const input = {
        description: "des Input",
        note: 'notification',
        amount: 4500,
        createAt: 10101010
    }

    const reseived = expensesAdd(input);
    
    const expected = { type: 'ADD_EXPENSES',
                        expense: {
                            id: expect.any(String),
                            description: "des Input",
                            note: 'notification',
                            amount: 4500,
                            createAt: 10101010 }
                     }
    
    expect(reseived).toEqual(expected);

})


test(' Add Expenes  without  input', () => {

    const input = {
    }

    const reseived = expensesAdd(input);

    const expected = {
        type: 'ADD_EXPENSES',
        expense: {
            id: expect.any(String),
            description: "",
            note: '',
            amount: "",
            createAt: 0
        }
    }

    expect(reseived).toEqual(expected);

})