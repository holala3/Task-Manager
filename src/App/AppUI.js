import React from 'react';
// También es importante importar nuestro contexto
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoTittle } from "../TodoTittle"
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { EmptyTodos } from '../EmptyTodos';
import { TodoError } from '../TodoError';
import { TodosLoading } from '../TodoLoading';

function AppUI() {
  // Desesctructuramos los valores de nuestro contexto
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  
  
    return (

      <React.Fragment>

        <TodoTittle></TodoTittle>
        <TodoSearch/>
        <TodoCounter/>
  
        <TodoList>
          {error && <TodoError error={error}/>}
          {loading && <TodosLoading/>}
          {(!loading && !searchedTodos.length) && <EmptyTodos/>}
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
  
            {!!openModal && (
              <Modal>
              <TodoForm/>
            </Modal>
            )}
  
        <CreateTodoButton 
        setOpenModal={setOpenModal}
        />

      </React.Fragment>

    );
  }


export { AppUI };