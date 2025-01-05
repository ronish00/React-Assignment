import React, { useState } from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
import Hamburger from '../Icon/Hamburger';

const Sidebar = ({showNav}) => {

  return (
    <>
      <aside className={`${showNav ? 'sidebar-active' : ''} sidebar`} >
        <div className='sidebar-top'>
          <div className="logo">Package</div>
        </div>
        <ul className='nav'>
          <li>
            <NavLink className={({isActive}) => `${isActive ? 'active' : ''} navitem`} to='/'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => `${isActive ? 'active' : ''} navitem`} to='/users'>Users</NavLink>
          </li>
        </ul>
      </aside>

    </>
  )
}

export default Sidebar
