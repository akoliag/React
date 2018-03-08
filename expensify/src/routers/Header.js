import React from "react";
import {NavLink} from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Get help</NavLink>
    </header>   
);
//Header is shown on every page 

//thanks to NavLink we use client side route not the server one - the page does not refresh to get the required data

export default Header;