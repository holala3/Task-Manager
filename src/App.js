import React from "react";
import { TodoCounter } from "./TodoCounter"
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoTittle } from "./TodoTittle";
import './App.css';

const todos=[
  {text:'Tomar agua', completed: false },
  {text:'Tomar curso de NodeJs', completed: false },
  {text:'Tomar curso de sql', completed: false }
];



function App(){
  return (
    <React.Fragment>
      <TodoTittle/>
      <TodoSearch />
      <TodoCounter />

    
    
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
