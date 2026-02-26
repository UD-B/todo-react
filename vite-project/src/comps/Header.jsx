import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
      <div>
        <img src="src/imgs/pic4.jpg" alt="sunset" className='header-img' />
      </div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/AddToDo">Add</Link>
    </div>
  )
}

export default Header