import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        addTodo(newTodoValue);
    }
    return(

        <form onSubmit={onSubmit}>
           <label>Crea tu nuevo TODO</label>
           <textarea 
           placeholder="Tomar otro curso"
           value={newTodoValue}
           onChange={onChange}
           />

           <div
           className="TodoForm-buttonContainer"
           >
            <button
            onClick={onCancel}
            type="button"
            className="cancel-button"
            >
                Cancelar
            </button>
            <button
            type="submit"
            className="add-button"
            >
                Añadir
            </button>
           </div>
        </form>
    )
};

export { TodoForm };