import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';//BrowserRouter for creating a new router and Router for every single page


const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component!
    </div>   
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component!
    </div>   
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense component!
    </div>   
);

const HelpPage = () => (
    <div>
        This is from my help component!
    </div>   
);

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link>
    </div>   
);

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
const routes = (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/> 
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);
//exact will call only the page with exact route match
//when we remove the path, React-Router always considers this a match so we don't  need to specify the paths of 404!

ReactDOM.render(routes, document.getElementById("app"));

