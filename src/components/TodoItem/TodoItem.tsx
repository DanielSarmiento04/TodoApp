import React from "react";
import { TtoDo } from "../../types/Todo";

function TodoItem(ToDo:TtoDo){

    
    return (

        <li>
            <p>{ToDo.text}</p>
            <p>{ToDo.completed? "completed" : "not completed"}</p>
        </li>
    )
}

export { TodoItem };
