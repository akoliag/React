import React from 'react';
import Modal from 'react-modal';

//stateless functional component:
//implicit return means no function body and return keyword:
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}//double exclamation mark converts the value to true boolean one
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
    >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;