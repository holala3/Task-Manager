import React from "react";
import "./TodoItem.css";
import { BiCheckDouble } from "react-icons/bi"
import { TiCancel } from "react-icons/ti" 


function TodoItem (props){
    return(
        
            <li className="TodoItem">

            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
             onClick={props.onComplete}
             >
                <BiCheckDouble/>
                </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
                </p>

            <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >
                <TiCancel/>
                </span>
        </li>

        
        
    )
}

export { TodoItem }