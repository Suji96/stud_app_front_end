import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Todo = props => (
    <tr>
        <td>{props.todo.name}</td>
        <td>{props.todo.date_of_birth}</td>
        <td>{props.todo.gender}</td>
        <td>{props.todo.division}</td>
        <td>{props.todo.classNum}</td>
    </tr>
)

export default class TodosStudList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.orderByName = this.orderByName.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/dropdown/retrieve/student')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            console.log(currentTodo);
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    orderByName() {
        console.log("button cick")
        axios.get('http://localhost:8080/api/dropdown/retrieve/order/name/student')
            .then(response => {
                console.log("Res", response)
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })

    }

    render() {
        return (
            <div>
                <h3>Student List</h3>
                <p align="right">
                    <button onClick={this.orderByName}>Click Me For Data</button>
                </p>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Division</th>
                            <th>Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
            
        )
    }
}