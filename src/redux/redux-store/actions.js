let nextTodoId = 0;
export const addTodo = task => (
    {
        type: 'ADD_TODO',
        payload: {
            id: nextTodoId++,
            task
        }
    });

export const completeTodo = id => (
    {
        type: 'COMPLETE_TODO',
        payload: { id }
    });
