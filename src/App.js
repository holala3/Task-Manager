import React from "react";
import { TodoCounter } from "./TodoCounter"
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoTittle } from "./TodoTittle";
import './App.css';

const defaultTodos=[
  {text:'Tomar agua', completed: false },
  {text:'Tomar curso de NodeJs', completed: false },
  {text:'Tomar curso de sql', completed: false }
];



function App(){
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
    //Creamos un estado con useState
  //Tenemos una funcion para alterar este estado llamada setSearchValue
  return (
    <React.Fragment>
      <TodoTittle/>
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />

    
    
    <TodoList>
        {todos.map(todo =>(<TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
         />))}
      </TodoList>

    <CreateTodoButton />
    </React.Fragment>
  )
}

export default App;
