console.log('App.js is running');

//JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["One", "Two"]
};
var template = (
<div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

var user = {
    name: "Andrew",
    age: 23,
    location: "Memphis"
    
};

function getLocation(location){
    if (location) {
        return <p>Location: {location}</p>;
    } 
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
//with render we provide 2 arguments: the first one is JSX, and the second one 
//is the DOM element where we want to render it - to make it work in the browser 
//we need to compile it into JS
//working with JSX we can only have one root element that is why we wrap h1 an p into div element
//for better visibility we may break the tags into line and wrap everything into the brackets
//in curly brackets we provide JS expressions
//we cannot refer only to an object as we gonna run into an error
//but we may use object properties and will work fine