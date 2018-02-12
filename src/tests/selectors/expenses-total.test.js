import moment from 'moment'
import totolamount from '../../selectors/expenses-total'

const expenses = [

    { description: 'water Bill', amount: 300, createAt: moment(101), note: "this is a Note(0)" },
    { description: 'gas Bill', amount: 200, createAt: moment(100), note: "this is a Note(1)" },
    { description: 'phone Bill', amount: 100, createAt: moment(500), note: "this is a Note(2)" },
    { description: 'university', amount: 700, createAt: moment(300), note: "this is a Note(3)" },
    { description: 'apartment', amount: 600, createAt: moment(240), note: "this is a Note(4)" },
    { description: 'child fee', amount: 500, createAt: moment(450), note: "this is a Note(5)" },
    { description: 'bread ', amount: 20, createAt: moment(70), note: "this is a Note(6)" }
]



test('total expenses for empty expenses', () => {

    const input  = [];
    const recieved = totolamount(input);
    const expected   =  0;
    expect(recieved).toEqual(expected)
})


test('total expenses for one expenses', () => {

    const index = 2;
    const input = [expenses[index]];
    const recieved = totolamount(input);
    const expected = expenses[index].amount;
    expect(recieved).toEqual(expected)
})



test('total expenses for one expenses', () => {

    const input = expenses;
    const recieved = totolamount(input);
    expect(recieved).toEqual(2420)
})
