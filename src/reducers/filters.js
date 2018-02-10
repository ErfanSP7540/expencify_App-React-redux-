import moment from 'moment'

const filterReducerDefaultState = {
    text: 'rent',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate:moment().endOf('month')
}
const filterReducer = (state = filterReducerDefaultState, action) => {

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