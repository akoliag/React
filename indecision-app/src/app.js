console.log('App.js is running');

//JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["One", "Two"]
};
const template = (
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

const user = {
    name: "Andrew",
    age: 23,
    location: "Memphis"
};

function getLocation(location){
    if (location) {
        return <p>Location: {location}</p>;
    } 
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//with render we provide 2 arguments: the first one is JSX, and the second one 
//is the DOM element where we want to render it - to make it work in the browser 
//we need to compile it into JS
//working with JSX we can only have one root element that is why we wrap h1 an p into div element
//for better visibility we may break the tags into line and wrap everything into the brackets
//in curly brackets we provide JS expressions
//we cannot refer only to an object as we gonna run into an error
//but we may use object properties and will work fine


let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();//we need to add it here to make it visible on the page
};

const minusOne= () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const templateThree = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);
console.log(templateThree);
//class needs to be called className in JSX, as it's a reserved name in JS
const appRoot1 = document.getElementById('app');
ReactDOM.render(templateThree, appRoot1);

//manual data binding:
const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    const appRoot1 = document.getElementById('app');
    ReactDOM.render(templateThree, appRoot1);
};

renderCounterApp();