import React from 'react'
import ToDo from './ToDo.jsx'

const ToDoList = ({ todos }) => {
    if (!todos || !Array.isArray(todos) || todos.length === 0) return <>no items</>
    return (
        <div>
            {todos.map(todo => {
                <ToDo todo={todo} />
            })}
        </div>
    )
}

export default ToDoList