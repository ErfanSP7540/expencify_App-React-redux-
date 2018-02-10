import moment from 'moment'

export const expenses = [

    { description: 'water Bill', amount: 300 , createAt: moment(101) , note: "this is a Note(0)" ,id:'ididididididididi'},
    { description: 'gas Bill'  , amount: 200 , createAt: moment(100) , note: "this is a Note(1)" },
    { description: 'phone Bill', amount: 100 , createAt: moment(500) , note: "this is a Note(2)" },
    { description: 'university', amount: 700 , createAt: moment(300) , note: "this is a Note(3)" },
    { description: 'apartment' , amount: 600 , createAt: moment(240) , note: "this is a Note(4)" },
    { description: 'child fee' , amount: 500 , createAt: moment(450) , note: "this is a Note(5)" },
    { description: 'bread '    , amount: 20  , createAt: moment(70)  , note: "this is a Note(6)" }

]


export const filter = {
        text: 'w',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }