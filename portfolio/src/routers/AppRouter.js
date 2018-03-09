import React from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';//BrowserRouter for creating a new router and Router for every single page
import HomePage from '../routers/HomePage';
import ContactPage from '../routers/ContactPage';
import PortfolioItemPage from '../routers/PortfolioItemPage';
import PortfolioPage from '../routers/PortfolioPage';
import NotFoundPage from '../routers/NotFoundPage';
import Header from '../routers/Header';


const AppRouter = () => (
<BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={HomePage} exact={true}/> 
            <Route path="/portfolio/:id" component={PortfolioItemPage}/>
            <Route path="/portfoliopage/" component={PortfolioPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);
//Route path="/edit/:id" : will dynamically match what comes after 
export default AppRouter;
//exact will call only the page with exact route match
//when we remove the path, React-Router always considers this a match so we don't  need to specify the paths of 404!