import React from "react";
import "./TodoSearch.css"

function TodoSearch(){
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };

    return(
        <input placeholder='Buscar tarea' className="TodoSearch-input"
        onChange={onSearchValueChange}
        ></input>
    )
}

export { TodoSearch }