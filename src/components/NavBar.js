import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='nav'>
        <Link to='/'>
            <div>HOME</div>
        </Link>
        <Link to='/stocks'>
            <div>DASHBOARD</div>
        </Link>
        <Link to='/about'>
            <div>ABOUT</div>
        </Link>
    </div>
  )
}
