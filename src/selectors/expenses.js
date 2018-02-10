
const  visibleExpenses = (expenses, { sortBy, text, startDate, endDate }) => {
    return expenses.filter(expense => {

        const startDatematch = !startDate  ||    expense.createAt >= startDate.valueOf();
        const endDateMatch   = !endDate    ||    expense.createAt <= endDate.valueOf();
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


export default visibleExpenses;