import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";


const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
}

const template = (
  <div>
    <h1>Page Title</h1>
    <p>Tis is my page</p>
  </div>
);
ReactDOM.render((
<Layout> 
  <p>This is inline!!!</p>
</Layout>
), document.getElementById("app"));
//we can define what we want to render within Layout putting it between tags and it's available
//through props.children 