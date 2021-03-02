import React, { useContext } from 'react'
import { RiCloseCircleLine, RiCheckFill } from 'react-icons/ri';
import { TodosContext } from '../TodosContext';

const Todo = ({ todo, status }) => {
    const { completeTodo } = useContext(TodosContext);
    return (
        <li>
            <span>{todo.task}</span>
            <span className="icons">
                {status ? <RiCheckFill /> :
                    <RiCloseCircleLine onClick={() => completeTodo(todo.id)} />
                }
            </span>
        </li>
    )
}

export default Todo;
