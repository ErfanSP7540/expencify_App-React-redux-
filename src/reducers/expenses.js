const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
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

export default expensesReducer