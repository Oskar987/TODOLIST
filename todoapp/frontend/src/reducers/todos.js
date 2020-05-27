import { GET_TODO_LIST, DELETE_TODO, ADD_TODO, TOGGLE_TODO } from '../actions/types.js';

const initialState = {
    todos: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TODO_LIST:
            return {
                ...state,
                todos: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != action.payload)
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: [...state.todos],
            };
        default:
            return state;
    }
} 
