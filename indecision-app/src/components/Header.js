import React from "react";

const Header = props =>(
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: "Indecision App"
};
//this is how we set a default prop for Header and it will show on every page if we do not set another value for a specific one

export default Header;
