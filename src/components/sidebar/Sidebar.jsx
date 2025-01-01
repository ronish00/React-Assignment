import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className="logo">Package</div>
      <ul className='nav'>
        <li>
          <NavLink className={({isActive}) => `${isActive ? 'active' : ''} navitem`} to='/'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => `${isActive ? 'active' : ''} navitem`} to='/subscribers'>Subscribers</NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
