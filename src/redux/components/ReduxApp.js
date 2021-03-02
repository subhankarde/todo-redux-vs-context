import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import store from '../redux-store/store'
import { Provider } from 'react-redux'

function ReduxApp() {
    return (
        <Provider store={store}>
            <AddTodo />
            <TodoList />
        </Provider>
    )
}

export default ReduxApp;