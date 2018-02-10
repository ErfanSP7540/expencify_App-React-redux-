import React from 'react'
import ExpenseList from './ExpenseList'
import ItemConnected from './ExpenseListItem'
import ExpenseslistFilter from './ExpenseListFilter'
import ExpenseListFilter from './ExpenseListFilter';

const Home = (props) => (
    <div>
        HOme Page
        <ExpenseListFilter />
        <ExpenseList/>
    </div>
)

export default Home;