import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { TodosStore } from './TodosContext'

function ContextApp() {
    return (
        <TodosStore>
            <AddTodo />
            <TodoList />
        </TodosStore>
    )
}

export default ContextApp;