import React from 'react';


const Option = props => { //we can use export default with class in line but not with the variables
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option; //we need to keep the name of the components when exporting so that the React has the names displayed in the browser