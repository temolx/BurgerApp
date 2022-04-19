import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function MobileNav({ mobileMenu, setMobileMenu }) {

    const handleMenu = () => {
        setMobileMenu(false)
    }

    const reloadMenu = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    return (
        <div className={mobileMenu ? "mobileNav open" : "mobileNav"}>
            <ul>
                <li><button onClick={handleMenu}>X</button></li>
                <li><NavLink to='/' onClick={() => reloadMenu()}>Our Menu</NavLink></li>
                <li><NavLink to='/burger' onClick={() => reloadMenu()}>Create A Burger</NavLink></li>
                <li><NavLink to='/test1' onClick={() => reloadMenu()} >Exclusive Deals</NavLink></li>
                <li><NavLink to='/test2' onClick={() => reloadMenu()}>Abour Our Food</NavLink></li>
                <li><NavLink to='/contact' onClick={() => reloadMenu()}>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default MobileNav