import moment from 'moment'
import expensesReducer from '../../reducers/expenses'



const expenses = [

    { description: 'water Bill', amount: 300, createAt: moment(101), note: "this is a Note(0)" },
    { description: 'gas Bill', amount: 200, createAt: moment(100), note: "this is a Note(1)" },
    { description: 'phone Bill', amount: 100, createAt: moment(500), note: "this is a Note(2)" },
    { description: 'university', amount: 700, createAt: moment(300), note: "this is a Note(3)" },
    { description: 'apartment', amount: 600, createAt: moment(240), note: "this is a Note(4)" },
    { description: 'child fee', amount: 500, createAt: moment(450), note: "this is a Note(5)" },
    { description: 'bread ', amount: 20, createAt: moment(70), note: "this is a Note(6)" }

]

test('Reducer >> Expenses 2', () => {

    const recieved = expensesReducer(undefined, {type:879879})
    const expected = []
    expect(recieved).toEqual(expected);

})


test('Reducer >> Expenses 1',()=>{

    const action = {
                    type: 'ADD_EXPENSES',
                    expense: {
                        id: expect.any(String),
                        description: "des Input",
                        note: 'notification',
                        amount: 4500,
                        createAt: 10101010
                             }
                    }

    const recieved = expensesReducer(expenses, action)
    const expected = [...expenses, {
                                        id: expect.any(String),
                                        description: "des Input",
                                        note: 'notification',
                                        amount: 4500,
                                        createAt: 10101010
                                    } ]
    expect(recieved).toEqual(expected);

})
const expensesReducerDefaultState = [];
const expensesReducer2 = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSES':
            return [...state, action.expense]
            break;
        case 'REMOVE_EXPENSES':
            return state.filter(x => x.id != action.expense.id)
            break;
        case 'EDIT_EXPENSES':
            return state.map(x => {
                if (x.id == action.id) {


                    return {
                        ...x,
                        id: action.id,
                        description: action.description != "" ? action.description : x.description,
                        note: action.note != "" ? action.note : x.note,
                        amount: action.note != "" ? action.amount : x.amount,
                        createAt: action.createAt != "" ? action.createAt : x.createAt
                    }
                } else {
                    return x;
                }
            })
            break;
        default:
            break;
    }
    return state;
}
