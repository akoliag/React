import React from "react";

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Editing the expense with id of {props.match.params.id}
        </div>   
    );
};
//{props.match.params.id} will show the searched value 
//converted to arrow function so that we can log the props on to the screen
export default EditExpensePage;
