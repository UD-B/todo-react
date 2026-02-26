import React, { useContext, useState } from 'react'
import ToDoList from '../comps/ToDoList'
import ToDoDataContexst from '../context/ToDoDataContext'

const HomePage = () => {
    const { todos } = useContext(ToDoDataContexst)
    const [search, setSearch] = useState("")

    return (
        <div className="header" >
            <h2>Home</h2>
            <div>
                <input onChange={e => setSearch(e.target.value)} type="text" placeholder='search todos' />
            </div>
            <ToDoList todos={todos.filter((todo) => todo.title.includes(search))} />
        </div>
    )
}

export default HomePage