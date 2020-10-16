import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);

    }

    handleRemove() {
        this.props.remove(this.props.id);
    }

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleChange(e) {
        this.setState({
            task: e.target.value
        })
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.update(this.props.id, this.state.task);
        this.setState({ isEditing: false })
    }

    handleToggle() {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        const completion = this.props.completed ? "completed" : "";
        return (
            <div className="Todo">
            {this.state.isEditing ?
                <form onSubmit={this.handleUpdate}>
                    <input type="text" value={this.state.task} onChange={this.handleChange} />
                    <button>Save</button>
                </form>
                :
                <div>
                    <li className={`Todo-task ${completion}`} onClick={this.handleToggle}>{this.state.task}</li>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>Delete</button>
                </div>
            }
            </div>
        )
    }
}

export default Todo;
