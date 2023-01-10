import React from 'react';

import './App.css';
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";

import { TtoDo } from "./types/Todo";


const todos : TtoDo[] =
[
  {text: 'Terminar curso de algebra', completed: true},
  {text: 'Realizar entrenamiento de cnn con AffectNet Dataset', completed: false},
  {text: 'Terminar libreo de Arsenic Lupin', completed: false},
]

const result = "hola"


function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      
      <TodoSearch/>
  
      <TodoList todos={todos} />
      <CreateTodoButton/>
  
    </React.Fragment>

  );
}


export default App;
