import React from "react";
import "./CTodoButton.css"

function CreateTodoButton(){
    const onClickButton = (msg) => {
        alert(msg)
    }


    return(
        <button 
        className="TodoButton"
        onClick={() => onClickButton("Hola malparidos")}
        >
            +
            </button>
    )
}

export { CreateTodoButton }