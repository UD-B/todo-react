import React from 'react'
import { useParams } from 'react-router';

const EditToDo = () => {
  const {id} = useParams()
  console.log(id);
  
  return (
    <div>EditToDo</div>
  )
}

export default EditToDo