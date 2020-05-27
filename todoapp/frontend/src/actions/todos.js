import axios from 'axios';
import { GET_TODO_LIST, DELETE_TODO, ADD_TODO, TOGGLE_TODO } from '../actions/types';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

// GET TODO LIST 
export const getTodos = () => dispatch => {
    axios.get('api/todo/')
        .then(result => {
            dispatch({
                type: GET_TODO_LIST,
                payload: result.data
            });
        }).catch(err => console.log(err));
};

// DELETE TODO
export const deleteTodo = (id) => dispatch => {
    axios.delete(`api/todo/${id}/`)
        .then(result => {
            dispatch({
                type: DELETE_TODO,
                payload: id
            });
        }).catch(err => console.log(err));
};


// ADD TODO
export const addTodo = (todo) => dispatch => {
    axios.post('api/todo/', todo)
        .then(result => {
            dispatch({
                type: ADD_TODO,
                payload: result.data,
            });
        }).catch(err => console.log(err));
};


// TOGGLE TODO 
export const toggleTodo = (todo) => dispatch => {
    todo.done = !todo.done;
    axios.put(`api/todo/${todo.id}/`, todo)
        .then(result => {
            dispatch({
                type: TOGGLE_TODO,
                payload: result.data,
            });
        }).catch(err => console.log(err));
};