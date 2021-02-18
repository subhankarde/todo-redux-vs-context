const initialState = {
    todos: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const newState = { ...state };
    if (action.type === 'ADD_TODO') {
        const { id, task } = action.payload;
        return {
            todos: [...state.todos, { id: id, task: task, completed: false }]
        }
    }

    if (action.type === 'COMPLETE_TODO') {
        const { id } = action.payload;
        const todos = state.todos.map((todo, index) => {
            if (index === id) {
                return { ...todo, completed: true };
            }
            return todo;
        })
        return { ...state, todos }
    }

    return newState;
}

