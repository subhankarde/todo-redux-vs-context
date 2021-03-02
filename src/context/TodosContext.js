import React from 'react'
const initialState = {
    todos: []
};
const TodosContext = React.createContext(initialState);
let nextTodoId = 0;

class TodosStore extends React.Component {
    state = initialState;

    addTodo = (task) => {
        nextTodoId++;
        let todo = this.state.todos.slice();
        todo[nextTodoId] = { id: nextTodoId, task: task, completed: false }
        this.setState({ todos: todo });
    }

    completeTodo = (id) => {
        const todos = this.state.todos.map((todo, index) => {
            if (index === id) {
                return { ...todo, completed: true }
            }
            return todo;
        });
        this.setState({ todos });

    }

    render() {
        return (
            <TodosContext.Provider value={{
                ...this.state,
                addTodo: this.addTodo,
                completeTodo: this.completeTodo
            }}>
                {this.props.children}
            </TodosContext.Provider>

        )
    }
}

export { TodosContext, TodosStore };
