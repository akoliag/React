import React from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';//BrowserRouter for creating a new router and Router for every single page
import ExpenseDashboardPage from '../routers/ExpenseDashboardPage';
import AddExpensePage from '../routers/AddExpensePage';
import EditExpensePage from '../routers/EditExpensePage';
import HelpPage from '../routers/HelpPage';
import NotFoundPage from '../routers/NotFoundPage';
import Header from '../routers/Header';


const AppRouter = () => (
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

export default AppRouter;
//exact will call only the page with exact route match
//when we remove the path, React-Router always considers this a match so we don't  need to specify the paths of 404!