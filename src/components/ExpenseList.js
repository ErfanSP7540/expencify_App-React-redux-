import React from 'react'
import {connect} from 'react-redux'
import Item from './ExpenseListItem'
import visibleExpenses from '../selectors/expenses.js'


export const ExpenseList =(props)=>{

    return ( props.selector.length==0? (<p>Not Found Any Expences</p> ):( 
    <div>
            <h1> Expense List {props.filter.text}</h1>
            {props.selector.map(item => <Item key={item.id} {...item }  /> )}
    </div>)
)
}


const mapStateToProp = (store) =>{
        return ({
            expenses: store.expenses,
            filter: store.filter,
            selector: visibleExpenses(store.expenses, store.filter )
        })
    }


const conectedExpenseList = connect(mapStateToProp)(ExpenseList)
export default conectedExpenseList