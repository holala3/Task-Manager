import './App.css';
import React from 'react';
import { TodoCounter } from "./TodoCounter/"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { TodoSearch } from "./TodoSearch"
import { CreateTodoButton } from "./CreateTodoButton"
import { TodoTittle } from "./TodoTittle"



// const defaultTodos = [
//   { text: 'Dormir con lolita', completed: true },
//  { text: 'Tomar el curso de React', completed: false },
//    { text: 'Dormir', completed: true },
//    { text: 'Tomar agua', completed: false },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1", );
  let parsedTodos;

  if (!localStorageTodos){
    localStorage.setItem("TODOS_V1", JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }


  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem("TODOS_V1", stringifiedTodos)
    setTodos(newTodos);
  };


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };


  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
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
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;