import React from 'react'
import {NavLink} from 'react-router-dom';

const Header =()=>(
    <div><h1>Header Text</h1>
        <NavLink to="/" exact> Home  </NavLink>
        <NavLink to="/Help" > Help  </NavLink>
        <NavLink to="/Add" > Add </NavLink>
        <NavLink to="/Edit" > Edit  </NavLink>
    </div>
)

export default Header;