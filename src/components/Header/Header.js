import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className='header'>
    <IndexLink to='/' activeClassName='route--active' className='headerButton'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/services' activeClassName='route--active' className='headerButton'>
      Services
    </Link>
    {' · '}
    <Link to='/boats' activeClassName='route--active' className='headerButton'>
      Boats
    </Link>
  </div>
)

export default Header
