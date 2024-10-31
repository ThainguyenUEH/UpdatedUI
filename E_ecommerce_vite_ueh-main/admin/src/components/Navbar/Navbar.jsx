import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar1">
        <img className='menu' src={assets.menu_admin} alt="" />
        <img className='logo' src={assets.ueh_logo} alt="" />
      </div>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar