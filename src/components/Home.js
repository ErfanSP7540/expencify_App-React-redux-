import React from 'react'
import ExpenseList from './ExpenseList'
import ItemConnected from './ExpenseListItem'
import ExpenseslistFilter from './ExpenseListFilter'
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummery from './ExpensesSummery'

const Home = (props) => (
    <div>
        HOme Page
        <ExpenseListFilter />
        <ExpensesSummery />
        <ExpenseList/>
    </div>
)

export default Home;