import React from "react";
import { TodoCounter } from "./TodoCounter"
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoTittle } from "./TodoTittle";
import './App.css';

const defaultTodos=[
  {text:'Tomar agua', completed: true },
  {text:'Tomar curso de NodeJs', completed: false },
  {text:'Tomar curso de sql', completed: true }
];



function App(){
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  //Creamos un estado con useState
  //Tenemos una funcion para alterar este estado llamada setSearchValue

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(searchValue.length < 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })

  }
  setTodos()

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
        {searchedTodos.map(todo =>(<TodoItem 
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
