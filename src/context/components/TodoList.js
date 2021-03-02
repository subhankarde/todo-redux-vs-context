import React, { useContext } from 'react'
import Todo from './Todo'
import { TodosContext } from '../TodosContext'

function TodoList() {
    const { todos } = useContext(TodosContext)
    //console.log(JSON.stringify(todos, null, 2));
    return (<ul >
        <div>
            {todos && todos.length
                ? todos.map((todo, index) => {
                    return <Todo key={`todo-${todo.id}`} todo={todo} status={todo.completed} />;
                })
                : "No todos, yay!"}
        </div>
    </ul>)
}

export default TodoList;