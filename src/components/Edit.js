import React from 'react';
import Form from './ExpenseForm'
import { expensesEdit, expensesRemove } from '../actions/expenses'
import { connect } from 'react-redux'
import moment from 'moment'


export class Edit extends React.Component{
    EditEvent = (input) => {
        this.props.editDispatch({ ...input, id: this.props.match.params.id })
        this.props.history.push('/');
    }
    RemoveEvent = () => {
        this.props.removeDispatch({ id: this.props.match.params.id })
        this.props.history.push('/');
    }

    render(){ return (

        <div> 
        Edit Page {this.props.match.params.id && ("ID = " + this.props.match.params.id) }
                <Form expense={{ ...this.props.expense, createAt: moment(this.props.expense.createAt)   }} 
                onSubmit={this.EditEvent} />
                <button onClick={this.RemoveEvent}> remove </button>
        </div>
    )}
}

const mapStateToProps = (state , props ) => {
    const   expense =  state.expenses.filter((expense) => { if (expense.id === props.match.params.id){return true} } )
    if(expense[0]){
     return ({ expense: expense[0] })       
    }else{
        console.log(props.history)
        props.history.push('/')
        return ({})
    }
}
const mapDispatchToprops = (dispatch)=>{
    return ({ 
        editDispatch    : (input) =>   dispatch(expensesEdit(input)),
        removeDispatch  : (input)    =>   dispatch(expensesRemove(input))
      })
}
export default connect(mapStateToProps,mapDispatchToprops)(Edit)