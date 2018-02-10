import uuid from 'uuid'

const expensesAdd = ({ description = "", note = "", amount = "", createAt = 0 } = {}) => {
    console.log(description);

    return ({
        type: 'ADD_EXPENSES',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createAt
        }
    })
}
const expensesRemove = ({ id = '' } = {}) => {
    return {
        type: 'REMOVE_EXPENSES',
        expense: { id }
    }
}
const expensesEdit = ({ id = '', description = "", note = "", amount = -1, createAt = -1 } = {}) => {
    return {
        type: 'EDIT_EXPENSES',
        id,
        description,
        note,
        amount,
        createAt
    }
}

export { expensesAdd, expensesRemove, expensesEdit} 