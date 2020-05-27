import React, { Fragment } from 'react'
import TodoList from './TodoList';
import Form from './Form';


export default function DashBoard() {
    return (
        <Fragment>
            <Form/>
            <TodoList/>
        </Fragment>
    )
}
