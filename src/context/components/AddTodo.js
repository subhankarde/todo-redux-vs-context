import React, { Component } from 'react'
import { TodosContext } from '../TodosContext'

export class AddTodo extends Component {

    static contextType = TodosContext;

    constructor(props) {
        super(props);
        this.state = { input: '' }
    }

    updateInput = (input) => {
        this.setState({ input })
    }

    handleAddTodo = () => {
        const { addTodo } = this.context
        addTodo(this.state.input);
        this.setState({ input: '' })
    }

    render() {
        return (
            <div>
                <input placeholder="Add Task Using Context" onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
                <button onClick={this.handleAddTodo}>Add Todo Using Context</button>
            </div>
        )
    }
}


export default AddTodo;
