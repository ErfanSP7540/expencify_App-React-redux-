import moment from 'moment'
import visibleExpenses from '../../selectors/expenses'


const expenses =[ 

    { description: 'water Bill', amount: 300, createAt: moment(101), note:"this is a Note(0)" },
    { description: 'gas Bill'  , amount: 200, createAt: moment(100), note:"this is a Note(1)" },
    { description: 'phone Bill', amount: 100, createAt: moment(500), note:"this is a Note(2)" },
    { description: 'university', amount: 700, createAt: moment(300), note:"this is a Note(3)" },
    { description: 'apartment' , amount: 600, createAt: moment(240), note:"this is a Note(4)" },
    { description: 'child fee' , amount: 500, createAt: moment(450), note:"this is a Note(5)" },
    { description: 'bread '    , amount: 20 , createAt: moment(70 ) ,note:"this is a Note(6)" }

    ]

test('Selector >> Filter 4', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: moment(320),
        endDate:undefined
    }

    const recived = visibleExpenses(expenses, filters)
    const expected = [expenses[2], expenses[5]]

    expect(recived).toEqual(expected)
})

    
test('Selector >> Filter 3', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(320)
    }

    const recived = visibleExpenses(expenses, filters)
    const expected = [expenses[6], expenses[1], expenses[0], expenses[4], expenses[3]]

    expect(recived).toEqual(expected)
})

    test('Selector >> Filter 1',()=>{
        const filters = {
            text: '',
            sortBy: 'date',
            startDate: moment(400),
            endDate: moment(600)
        }
        
        const recived = visibleExpenses(expenses, filters)
        const expected = [expenses[5], expenses[2] ]
        
        expect(recived).toEqual(expected)
    })
    
    test('Selector >> Filter 2', () => {
        const filters = {
            text: '',
            sortBy: 'amount',
            startDate: moment(150),
            endDate: moment(350)
        }
    
        const recived = visibleExpenses(expenses, filters)
        const expected = [expenses[4], expenses[3]]
    
        expect(recived).toEqual(expected)
    })
    
/*
const visibleExpenses = (expenses, { sortBy, text, startDate, endDate }) => {
    return expenses.filter(expense => {

        console.log('startdate = ', startDate.valueOf(), expense.createAt, 'enddate = ', endDate.valueOf());

        const startDatematch = expense.createAt >= startDate.valueOf();
        const endDateMatch = expense.createAt <= endDate.valueOf();
        const textMatch = (expense.description.toLowerCase()).includes((text).toLowerCase());

        return startDatematch && endDateMatch && textMatch;
    }).sort((one, two) => {
        if (sortBy === 'amount') {
            return one.amount >= two.amount
        }
        else if (sortBy === 'date') {
            return one.createAt >= two.createAt;
        }
    })
}

*/