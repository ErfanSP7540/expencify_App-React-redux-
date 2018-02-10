console.log('redux_expensify');

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

const expensesAdd = ({ description="", note="", amount="", createAt=0 }={})=>{

    return ({
    type:'ADD_EXPENSES',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
    })
}
const expensesRemove=({id=''}={})=>{
         return {
             type : 'REMOVE_EXPENSES',
             expense:{id}
         }
}
const espensesEdit = ({ id = '', description = "", note = "", amount =  -1 , createAt = -1 }={} )=>{
    return{
        type:'EDIT_EXPENSES',
        id,
        description,
        note,
        amount,
        createAt
    }
}
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState , action)=>{
    switch (action.type) {
        case 'ADD_EXPENSES':
            return [...state, action.expense]
            break;        
        case 'REMOVE_EXPENSES':
            return state.filter(x => x.id != action.expense.id )
            break;
        case 'EDIT_EXPENSES':
            return state.map(  x=> {  
                if(x.id==action.id){
                    return { ...x,
                            id: action.id,
                            description: action.description != "" ? action.description : x.description,
                            note:  action.note!= "" ? action.note : x.note ,
                            amount: action.note != "" ? action.amount : x.amount,
                            createAt: action.createAt != "" ? action.createAt : x.createAt 
                           }
                }else{
                    return x;
                }
              } )
            break;
        default:
            break;
    }
    return state;
}


const setTextFilter = ( EditedText = '' )=>{
    return {
        type:'EDIT_TEXT',
        text:EditedText
    }
}
const setSortByDate = ()=>{
    return {
        type :'SORT_BY_DATE'
    }
}
const setSortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}
const setStartTime =(startDate=undefined)=>{
    return {
        type:'SET_START_DATE',
        startDate
    }
}
const setEndTime = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

const filterReducerDefaultState = {
    text: 'rent',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState,action)=>{

    switch (action.type) {
        case 'EDIT_TEXT':
        return {...state , text:action.text}
            break;

        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' }
            break;

        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' }
            break;

        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate }
            break;

        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate }
            break;

        default:
            break;
    }
    return state;     

    }

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter:filterReducer
    })
)

const visibleExpenses = (expenses, { sortBy, text, startDate, endDate })=>{
    return expenses.filter( expense =>{
        const startDatematch = typeof(startDate)!=='number' || expense.createAt >= startDate;
        const endDateMatch = typeof( endDate )!=='number' || expense.createAt <= endDate ;
        const textMatch = (expense.description.toLowerCase()).includes((text).toLowerCase());

        return startDatematch && endDateMatch && textMatch;
    } ).sort( (one,two)=>{
        if (sortBy==='amount'){
           return one.amount >=two.amount
        }
        else if (sortBy === 'date')
        {
            return one.createAt >= two.createAt;
        }
            } )
}

store.subscribe(()=>{

    const state = store.getState();
    console.log(visibleExpenses(state.expenses , state.filter));
 
})

store.dispatch( setStartTime(0) )
store.dispatch( setEndTime(500) )

const TextEditedItem = store.dispatch(setTextFilter(''))

store.dispatch(expensesAdd({ description: 'rent', note: 'coffee', amount: 3000, createAt:300}))
store.dispatch(expensesAdd({ description: 'rentalhouse', note: 'coffee', amount: 2000, createAt: 200 }))
store.dispatch(expensesAdd({ description: 'cofee', note: 'coffee', amount: 1000, createAt: 400 }))
store.dispatch(expensesAdd({ description: 'wateree', note: 'coffee', amount: 4000, createAt: 100 }))



//console.log(store.getState());

/*
const firstItem  = store.dispatch(expensesAdd())
const secondItem = store.dispatch(expensesAdd({ description: 'this is a test', note:'coffee',amount:43234} ))

const editedItem = store.dispatch(espensesEdit({ id: secondItem.expense.id , description:"editDescription"}))


const TextEditedItem = store.dispatch(setTextFilter('editedText'))
//const TextEditedItem2 = store.dispatch( setTextFilter() )

store.dispatch(setSortByDate())
store.dispatch(setSortByAmount())


*/


//console.log(firstItem.expense.id);
//console.log(expensesRemove({ id: 'sadasd' }));


//store.dispatch(expensesAdd())


/*
const demoState = {
    expenses:[{
        id:'poiasdasfas',
        description:'Jauury Rent',
        note:'This was the final payment for that address',
        amount:54500,
        createAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', // date or amount
        startDate : undefined,
        endDate:undefined
    }
}
*/