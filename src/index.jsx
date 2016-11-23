/* @flow */

import React from "react";
import ReactDOM from "react-dom";

class todo {
    constructor(title: string) {
        this.title = title;
        this.id = Date.now();
        this.completed = false;
    }
}

class Layer extends React.Component {
    constructor(props) {
        super(props);
        this.handleTodoInput = this.handleTodoInput.bind(this);
        this.state = {todoList: [new todo("123")]};
    }

    handleTodoInput(ev, title) {
        //this.state.todoList.push(new todo(ev.target.value));
        this.setState(...this.state, {todoList: this.state.todoList.concat(new todo(title))});
        console.log(this.state);
    }

    render() {
        let newTodoTitle = "";

        return (
            <div>
                <h1> Todo List</h1>
                <label>Input Todo</label>
                <input type="text" onKeyUp={(ev)=>{ newTodoTitle = ev.target.value}}></input>
                <button onClick={(ev)=> this.handleTodoInput(ev, newTodoTitle)}>Add</button>
                <TodoList todoList={this.state.todoList}/>
            </div>
        );
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todoList: this.props.todoList};
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todoList.map((todo)=> {
                            return(<Todo key={todo.id} todo={todo}/>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todo: props.todo}
    }

    render() {
        return (
            <div key={this.state.todo.id} >
                <input type="checkbox" value={this.state.todo.completed} onClick={(evt) => this.handleRemove(id, etv)}/>
                <input value={this.state.todo.title}/>
                <button>Update</button>
                <button>Delete</button>
            </div>
        )
    }
}

ReactDOM.render(<Layer/>, document.getElementById("app"));