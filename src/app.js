import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import configureStore from './store/configureStore'
import '../node_modules/normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import { expensesAdd, expensesRemove, expensesEdit }  from './actions/expenses'
import {setTextFilter, setSortByDate, setSortByAmount, setStartTime, setEndTime} from './actions/filters'
import visibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(expensesAdd({ description: 'water bill', amount: 100, createAt: 1517430600000}))   
store.dispatch(expensesAdd({ description: '0 bill', amount: 200, createAt: 1517030600000 }))   
store.dispatch(expensesAdd({ description: '1 bill', amount: 200, createAt: 1518430600000}))   
store.dispatch(expensesAdd({ description: '2 bill', amount: 300, createAt: 1518930600000}))   
store.dispatch(expensesAdd({ description: '3 bill', amount: 400, createAt: 1518130600000}))   
store.dispatch(expensesAdd({ description: '4 bill', amount: 500, createAt: 1519330600000}) )   
store.dispatch(setTextFilter('bill'))

setTimeout(()=>{store.dispatch(setTextFilter('water'))},3000)
const state = store.getState()

console.log(visibleExpenses(state.expenses, state.filter )  );


ReactDOM.render(<Provider store={store}>
                     <AppRouter />
                </Provider>, document.getElementById('app'))
