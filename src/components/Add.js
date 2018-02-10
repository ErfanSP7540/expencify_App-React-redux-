import React from "react"
import Form from './ExpenseForm'
import { expensesAdd } from '../actions/expenses'
import { connect } from 'react-redux'


export class Add extends  React.Component{

    onSubmit = (input) => {
        this.props.submit(input)
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <h1> this Add Page </h1>
                <Form onSubmit={ this.onSubmit }/>
            </div>
        )
    }
}


const mapDispatchToProps=(dispatch)=>
{
    return ({ submit: (input )=>dispatch(expensesAdd(input)) })
}

export default connect(undefined, mapDispatchToProps)(Add);
