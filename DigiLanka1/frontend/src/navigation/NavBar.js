import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='system-name'>Digi Lanka</div>

      <ul>
        <li>
          <Link to='/bc/'>Birth Certificate</Link>
        </li>
        <li>
          <Link to='/nic/allPeople'>NIC</Link>
        </li>
        <li>
          <Link to='/medical/'>Medical Certificate</Link>
        </li>
        <li>
          <Link to='/driver'>Driving License</Link>
        </li>
        <li>
          <Link to='/passport'>Passport</Link>
        </li>
        <li>
          <Link to='/dc/dc'>Death Certificate</Link>
        </li>
      </ul>
      <ul>
        <li className='right'>
          <Link to='/login'>
            <button className='login-btn'>Logout</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
