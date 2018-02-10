import React from 'react'
import {connect} from 'react-redux'
import { setTextFilter, setSortByDate, setSortByAmount, setStartTime, setEndTime } from '../actions/filters'

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';

class ExpenseslistFilter extends  React.Component{
    constructor(props){
        super(props)
        
    this.state = {
            startDate: props.filter.startDate,
            endDate: props.filter.endDate,
        }
    }
    

render(){
    return (
            <div>
                <select value={this.props.filter.sortBy} onChange={(e)=>{
                    if( e.target.value==="amount")
                    {
                        this.props.dispatch(setSortByAmount());
                    }
                    else{
                        this.props.dispatch(setSortByDate());
                    }
                }}>
                    <option value="amount">amount</option>
                    <option value="date">date</option>
                </select> 
            <input value={this.props.filter.text} 
            onChange={(e)=>{
                this.props.dispatch(setTextFilter(e.target.value))
            }}/>



            <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => { 
                    this.setState({ startDate, endDate })
                    this.props.dispatch(setStartTime(startDate))
                    this.props.dispatch(setEndTime(endDate))
                }
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />


            </div>
    )
}
}


const mapStateToProps = (state)=>(
    { filter : state.filter  }
) 

export default connect(mapStateToProps)(ExpenseslistFilter) ;