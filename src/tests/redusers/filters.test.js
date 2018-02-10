import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('Filter Reducer',()=>{

    const action ={type :'@@int'}
    const recieved = filterReducer( undefined , action)
    const expected = {
                text: 'rent',
                sortBy: 'date',
                startDate: moment().startOf('month'),
                endDate: moment().endOf('month')
                }

    expect(recieved).toEqual(expected)
})

test('Filter Reducer', () => {
    
    const state = {
        text: 'rent',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = { type: 'EDIT_TEXT'  , text : 'bill'}
    const recieved = filterReducer(undefined, action)
    const expected = {
                        text: 'bill',
                        sortBy: 'date',
                        startDate: moment().startOf('month'),
                        endDate: moment().endOf('month')
    }
    expect(recieved).toEqual(expected)
})




const filterReducerDefaultState = {
    text: 'rent',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}
const filterReducer2 = (state = filterReducerDefaultState, action) => {

    switch (action.type) {
        case 'EDIT_TEXT':
            return { ...state, text: action.text }
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


export default filterReducer;