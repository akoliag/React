import React from "react";
import AddOption from './AddOption'; //if we import a file that we created within the application we can leave off the .js extension
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
      };
      //with arrow function as above when we want to use object we need to put it in brackets
      //otherwise it will be treated as the function body
    
      handleDeleteOption = (optionToRemove) => {
        this.setState(prevState => ({
          options: prevState.options.filter(option => {
            return optionToRemove !== option;
          })
        }));
      };
    
      handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
      };
    
      handleAddOption = (option) => {
        if (!option) {
          return "Enter a valid value to add item.";
        } else if (this.state.options.indexOf(option) > -1) {
          return "This option already exists.";
        }
        this.setState(prevState => ({
          options: prevState.options.concat([option])
        }));
      };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      //do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  

  render() {
    const subtitle = "Put your life in the hands of a computer";

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
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
