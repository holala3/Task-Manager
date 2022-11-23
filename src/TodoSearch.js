import React from "react";
import "./TodoSearch.css"

function TodoSearch(){
    //Creamos un estado con useState
    const [searchValue, setSearchValue] = React.useState("");
    //Tenemos una funcion para alterar este estado llamada setSearchValue

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    return[
        <input 
        placeholder='Buscar tarea' 
        className="TodoSearch-input"
        value={searchValue}
        onChange={onSearchValueChange}
        ></input>,
        
        <p>{searchValue}</p>
    ]
}

export { TodoSearch }