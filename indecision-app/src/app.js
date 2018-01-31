//stateless functional component 



class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: []
      };
    }
    handleDeleteOptions() {
      this.setState(() => ({options: []}));
    }
    //with arrow function as above when we want to use object we need to put it in brackets
    //otherwise it will be treated as the function body
    
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        })
      }));
    }
    
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
    
    handleAddOption(option) {
        if (!option) {
            return "Enter a valid value to add item.";    
         } else if (this.state.options.indexOf(option) > -1) {
             return "This option already exists.";
         } 
        this.setState((prevState) => ({
          options: prevState.options.concat([option])
        }));
    }


    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption 
          handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }
  
  const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  };
  
  Header.defaultProps = {
    title: "Indecision App"
  };
//this how we set a default prop for Header and it will show on every page if we do not set another value for a specific one 

  const Action = (props) => {
    return (
      <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  };
  
  const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
          props.options.map((option) => (
            <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </div>
    );
  };
  
  
  const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
        >
        Remove
        </button>
      </div>
    );
  };
  
  
  class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);

      this.setState(() => ({ error}));
     
    }
    render() {
      return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }
  

  const User = (props) =>  {
    return (
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>

      </div>
    );
  };
//with class-based component it would be this.props.name 
//functional component is faster than the class-based one
  ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
//we extend the Header class by React.Component class and get access
//to its all features
//React components require a special method to be defined which is render



//we call React components using their names in html tags and they are reusable 
//we can use them several times 

//Component state allows our components to manage some data
//when the data changes, the component will automatically rerender to reflect
//this changes