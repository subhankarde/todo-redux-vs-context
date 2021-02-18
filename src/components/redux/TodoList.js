import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodoList = ({ todos }) => (
    <ul >
        <div>
            {todos && todos.length
                ? todos.map((todo, index) => {
                    return <Todo key={`todo-${todo.id}`} todo={todo} status={todo.completed} />;
                })
                : "No todos, yay!"}
        </div>
    </ul>
);

const mapStateToProps = state => {
    //console.log(JSON.stringify(state, null, 2));
    return state.todos;
}



export default connect(mapStateToProps)(TodoList);