import React, { useEffect, useState } from 'react'
import './Navbar.scss'

import { FiBarChart, FiShoppingCart, FiUser } from 'react-icons/fi'
// import { FaRegBell } from 'react-icons/fa'
import HoverCard from '../../HoverCard/HoverCard'

function Navbar({toggle}) {

    const [isCartHover, setIsCartHover] = useState(false)
    const handleCartHover = ()=> {setIsCartHover(!isCartHover)}

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container wrapper">
                    <span className="navbar__logo"><span>My</span>Course</span>
                    <ul className="navbar__items">
                        <li className="navbar__link active">All Courses</li>
                        <li className="navbar__link">My courses</li>
                        <li className="navbar__link navbar__link--btn">Login</li>
                        <li className="navbar__link navbar__link--hover" onMouseEnter={handleCartHover} onMouseLeave={handleCartHover}>
                            <div><FiShoppingCart className="navbar__link--icon" /></div>
                            { isCartHover && <HoverCard style={{right: 0}}/> }  
                        </li>
                        <li className="navbar__link">
                            <div><FiUser className="navbar__link--icon" /></div>
                        </li>
                    </ul>
                    <span className="navbar__toggler" onClick={toggle}>
                        <span><FiBarChart/></span>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar
