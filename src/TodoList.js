import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);


    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    update(id, updatedTask) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, task: updatedTask}
                }
                return todo
            })
        })
    }

    toggleCompletion(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            })
        })
    }

    render() {
        const todos = this.state.todos.map(todo => (
            <Todo 
                key={todo.id} 
                id={todo.id} 
                task={todo.task} 
                completed={todo.completed}
                toggleTodo={this.toggleCompletion}
                remove={this.remove}
                update={this.update} 
            />
        ))
        return(
            <div>
                <h1>Todo List!</h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm create={this.create}/>
            </div>
        )
    }
}

export default TodoList;