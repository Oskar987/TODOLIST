import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getTodos, deleteTodo, toggleTodo } from '../../actions/todos';

export class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        getTodos: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
            <Fragment>
                <h2>Todo records</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>description</th>
                            <th>done</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td><input type="checkbox" onChange={this.props.toggleTodo.bind(this, todo)} defaultChecked={todo.done}></input></td>
                                <td><button onClick={this.props.deleteTodo.bind(this, todo.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos.todos
});

export default connect(mapStateToProps, { getTodos, deleteTodo, toggleTodo })(TodoList);