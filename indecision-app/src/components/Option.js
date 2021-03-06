import React from 'react';

////we can use export default with class in line but not with the variables
const Option = props => (
  <div className="option"> 
  <p className="option__text">{props.count}. {props.optionText}</p>
    <button
      className="button button--link"
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option; //we need to keep the name of the components when exporting so that the React has the names displayed in the browser