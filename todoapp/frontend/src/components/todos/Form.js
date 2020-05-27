import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../../actions/todos';

export class Form extends Component {
    state = {
        title: '',
        description: ''
    }

    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { title, description } = this.state;
        const todo = { title, description };
        this.props.addTodo(todo);
        this.setState({
            title: '',
            description: ''
        });
    };

    render() {
        const { title, description } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Todo</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            onChange={this.onChange}
                            value={description}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTodo })(Form);
