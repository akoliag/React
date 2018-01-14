console.log('App.js is running');

//JSX - JavaScript XML

var template = <p>Does this change</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//with render we provide 2 arguments: the first one is JSX, and the second one 
//is the DOM element where we want to render it - to make it work in the browser 
//we need to compile it into JS