import React from 'react'
import { connect } from 'react-redux';
import { expensesRemove } from '../actions/expenses'
import { NavLink } from 'react-router-dom';
import moment from 'moment'
export const Item = ({dispatch , id , description, amount, note, createAt})=>(
    <div>
        <h3>

             <NavLink key={id} to={'/edit/' + id } ><button>Edit</button></NavLink>
              
             (description  : {description && description})
             (amount       : {amount && amount})          
             ( note         : {note && note})         
             (ceateAt      : {createAt && moment(createAt).format('YYYY MM DD')  })    
        </h3>
    </div>
)
export default  connect()( Item )