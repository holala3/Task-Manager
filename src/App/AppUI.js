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
      <TodoSearch />
      <TodoCounter />

      <TodoList>
        {error && <p className='center-text'>Desespérate, hubo un error...</p>}
        {loading && <p className='center-text'>Estamos cargando, no te desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p className='center-text'>¡Crea tu primer TODO!</p>}
        
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
            <p>{searchedTodos[0]?.text}</p>
          </Modal>
          )}

      <CreateTodoButton 
      setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };