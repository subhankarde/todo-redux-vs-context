import React from 'react'
import { RiCloseCircleLine, RiCheckFill } from 'react-icons/ri';
import { connect } from 'react-redux'
import { completeTodo } from '../../redux/actions'


const Todo = ({ todo, status, completeTodo }) => {
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

export default connect(null, { completeTodo })(Todo);
