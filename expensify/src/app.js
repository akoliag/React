import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';//BrowserRouter for creating a new router and Router for every single page


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
        404!
    </div>   
);

const routes = (
    <BrowserRouter>
    <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/> 
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </BrowserRouter>
);
//exact will call only the page with exact route match
//when we remove the path, React-Router always considers this a match so we don't  need to specify the paths of 404!

ReactDOM.render(routes, document.getElementById("app"));

