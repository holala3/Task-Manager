import React from "react";
import "./CTodoButton.css"


function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(current => !current)

      };
    return(
        <button className="TodoButton"
        onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton }