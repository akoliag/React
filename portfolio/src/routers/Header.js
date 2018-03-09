import React from "react";
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>HomePage</NavLink>
        <NavLink to="/" activeClassName="is-active">ContactPage</NavLink>
        <NavLink to="/" activeClassName="is-active">PortfolioItemPage</NavLink>
        <NavLink to="/" activeClassName="is-active">PortfolioPage</NavLink>
    </header>   
);
//Header is shown on every page 

//thanks to NavLink we use client side route not the server one - the page does not refresh to get the required data

export default Header;