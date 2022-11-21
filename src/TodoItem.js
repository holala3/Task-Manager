import React from "react";
import "./TodoItem.css";

function TodoItem (props){
    return(
        <li className="TodoItem-li">
            <span className="TodoItem-span01">C</span>
            <p className="TodoItem-p">{props.text}</p>
            <span className="TodoItem-spam02">x</span>
        </li>
    )
}

export { TodoItem }