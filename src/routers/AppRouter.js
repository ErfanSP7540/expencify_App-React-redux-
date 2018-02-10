import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Add from '../components/Add'
import Edit from '../components/Edit'
import Help from '../components/Help'
import NotFound404 from '../components/NotFound404'

const AppRoute =()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} exact/> 
                <Route path="/Help" component={Help } /> 
                <Route path="/Add" component={Add} /> 
                <Route path="/edit/:id" component={Edit} /> 
                <Route component={NotFound404} /> 
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRoute;