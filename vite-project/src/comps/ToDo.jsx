import React, { useContext, useState } from 'react'

import ToDoDataContexst from "../context/ToDoDataContext.js"
import Dialog from './Dialog.jsx'

const ToDo = ({ todo }) => {
    const { setTodos } = useContext(ToDoDataContexst)
    if (!todo) return
    const [dialogIsOpen, setDialogIsOpen] = useState(false)
    return (
        <>
            <div>
                <h3>{todo.title}</h3>
                <span>{todo.description}</span>
                <span>{todo.createdAt}</span>
                <div>
                    {"✏️"}
                    {'🗑️'}
                </div>
            </div>
            {dialogIsOpen &&
                <Dialog
                    dir="rtl"
                    desc={`are you certain you want to delete ${todo.id}?`}
                    title={"delete task"}
                    textConfirm='confirm'
                    textCancel='cancel'
                    onConfirm={() => {
                        setTodos((prev) => {
                            return prev.filter(t => t.id !== todo.id)
                        })
                        setDialogIsOpen(false)
                    }}
                    onCancel={() => setDialogIsOpen(false)}
                />
            }
        </>
    )
}

export default ToDo