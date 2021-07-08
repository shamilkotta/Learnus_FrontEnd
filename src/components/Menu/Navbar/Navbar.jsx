import React, { useEffect, useState } from 'react'
import './Navbar.scss'

import {Link} from 'react-router-dom'
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
                    <span className="navbar__logo"><Link to="/"><span>My</span>Course</Link></span>
                    <ul className="navbar__items">
                        <li className="navbar__link"><Link to='/course' className="navbar__link--txt  active">All Courses</Link></li>
                        <li className="navbar__link"><Link to='/course' className="navbar__link--txt">My courses</Link></li>
                        <li className="navbar__link navbar__link--btn">Login</li>
                        <li className="navbar__link navbar__link--hover" onMouseEnter={handleCartHover} onMouseLeave={handleCartHover}>
                            <div><Link to='/cart'><FiShoppingCart className="navbar__link--icon" /></Link></div>
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
