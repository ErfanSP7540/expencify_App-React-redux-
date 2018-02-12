import React from 'react'
import { connect } from 'react-redux'
import totalamount from '../selectors/expenses-total'
import numeral from 'numeral' //{amount && numeral(amount).format('$0,0.00')}) 
import visibleExpenses from '../selectors/expenses.js'


export class ExpensesSummery extends React.Component {

    constructor(props){
        super(props)
        console.log('summery2');
    }

    render(){
        
        return ( 
            <h2> Viewing {this.props.selector.length} expenses
             totalling {numeral(totalamount(this.props.selector)).format('$0,0.00')}
            </h2>
        )
    }

}


const mapStore2props=(store)=>{
    return { selector: visibleExpenses(store.expenses, store.filter)}
    
}

export default connect(mapStore2props)(ExpensesSummery);