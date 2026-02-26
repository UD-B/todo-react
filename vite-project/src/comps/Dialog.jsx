import React from 'react'

const Dialog = ({ dir="ltr", title="title", desc, textConfirm="save", onConfirm, textCancel="cancel", onCancel }) => {
  return (
    <div>
        <div>
            <h2>{title}</h2>
            <span></span>
        </div>
        <div>
            <button></button>
            <button></button>
        </div>
    </div>
  )
}

export default Dialog