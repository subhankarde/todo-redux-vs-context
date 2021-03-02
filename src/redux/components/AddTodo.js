import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux-store/actions'
export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { input: '' }
    }

    updateInput = (input) => {
        this.setState({ input })
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: '' })
    }

    render() {
        return (
            <div>
                <input placeholder="Add Todo Using Redux" onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
                <button onClick={this.handleAddTodo}>Add Todo Using Redux</button>
            </div>
        )
    }
}


export default connect(null, { addTodo })(AddTodo);
