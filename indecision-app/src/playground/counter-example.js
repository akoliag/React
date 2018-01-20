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