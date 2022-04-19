import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import burgerBar from '../images/burger-bar.png'
import MobileNav from './MobileNav';

function Nav() {

    const[mobileMenu, setMobileMenu] = useState(false);

    const handleMenu = () => {
        setMobileMenu(true)
    }

    return (
        <div className="nav-container">
            <MobileNav mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <nav>
            <NavLink to='/'><img src={logo} alt="company logo" /></NavLink>
            <ul>
                <li><NavLink to='/' id="link-item" className={({ isActive }) => (isActive ? "link-active" : "")}>Our Menu</NavLink></li>
                <li><NavLink to='/burger' id="link-item" className={({ isActive }) => (isActive ? "link-active" : "link")}>Create A Burger</NavLink></li>
                <li><NavLink to='/test1' id="link-item" className={({ isActive }) => (isActive ? "link-active" : "")}>Exclusive Deals</NavLink></li>
                <li><NavLink to='/test2' id="link-item" className={({ isActive }) => (isActive ? "link-active" : "")}>Abour Our Food</NavLink></li>
                <li><NavLink to='/contact' id="link-item" className={({ isActive }) => (isActive ? "link-active" : "")}>Contact</NavLink></li>
                <li><img className='burgerMenu' src={burgerBar} alt="menu" onClick={handleMenu} /></li>
            </ul>
        </nav>  
        </div>
    )
}

export default Nav
