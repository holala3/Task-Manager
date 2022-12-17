import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext"

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <div className="TodoCounter">
        <h2 className="TodoCounter-h2">Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </div>
    )
}

export { TodoCounter };



