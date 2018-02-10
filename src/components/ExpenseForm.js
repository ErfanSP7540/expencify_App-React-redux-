import React from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';




const now = moment();

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount :0,
            note: props.expense ? props.expense.note: 'this is a note',
            createAt: props.expense ? props.expense.createAt: moment(),
            datePickerFocus:false,
            error:''        
        }
    }
    handleDescription=(e)=>{
        
        const Cstate =  { error:'', description: e.target.value };
        this.setState(Cstate);
        //console.log(this.state.description);
    }

    handleAmount=(e)=>{
        
        if( e.target.value.match(/^\d*(\.\d{0,2})?$/)) {
            const Cstate = { error: '',amount: e.target.value };
            this.setState(Cstate);
        }   
    }
    handleNote=(e)=>{
        

        const Cstate = { note: e.target.value };
        this.setState(Cstate);
    }
    onSubmit =(e)=>{
        e.preventDefault();
        
        if(!this.state.description  ||  this.state.amount==0){
            this.setState({error:'please enter description and amount for your expenses'})
        }
        else
        {
            this.props.onSubmit({
                description: this.state.description,
                amount: this.state.amount,
                note: this.state.note,
                createAt: this.state.createAt.valueOf()});

            this.setState({
                description: '',
                amount: 0,
                note: 'this is a note',
                createAt: moment(),
                datePickerFocus: false,
                error: ''
            })
        }
    }


    
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
            <input  type="text" placeholder="Description" value={this.state.description} 
                        onChange={this.handleDescription}/>
            <input type="text" value={this.state.amount} 
                onChange = {this.handleAmount}/>
             <br/>
            <textarea name="message" rows="10" value={this.state.note} 
            onChange={this.handleNote} />
            <button onClick={this.onSubmit}> Add Expenses </button>
                

                <SingleDatePicker
                    date={this.state.createAt} // momentPropTypes.momentObj or null
                    onDateChange={date => this.setState({ createAt: date })} // PropTypes.func.isRequired
                    focused={this.state.datePickerFocus} // PropTypes.bool
                    onFocusChange={( focused ) => this.setState({ datePickerFocus:!!focused })} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={(day)=>{return false;}}
                    > </SingleDatePicker>

            </form>
            </div>
        )
    }

  


}
SingleDatePicker.displayName = 'SingleDatePicker';


export default Form;