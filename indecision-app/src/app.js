class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Action/>
                <Options/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
        <div>
            <p>Options component here</p>
            <Option/>
        </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                Option component here
            </div>
        );
    }
}
class AddOption extends React.Component {
    render() {
        return (
        <div>
            <p>AddOption component here</p>
        </div>
        );
    }
}
//we extend the Header class by React.Component class and get access
//to its all features
//React components require a special method to be defined which is render


ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));
//we call React components using their names in html tags and they are reusable 
//we can use them several times 