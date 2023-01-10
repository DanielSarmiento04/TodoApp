import React from 'react';
import { TtoDo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

function TodoList(props:any, ) 
{
    const todos  = props.todos as TtoDo[];


    return (
            <section>
                {
                    todos.map(
                        (todo, index) =>{
                            return <TodoItem key={index} text={todo.text} completed={todo.completed}/>
                        }
                    )
                }
            </section>
    );
}

export { TodoList};