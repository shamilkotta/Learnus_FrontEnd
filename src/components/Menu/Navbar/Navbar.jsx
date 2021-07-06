import React, { useEffect, useState } from 'react'
import './Navbar.scss'

import { FiBarChart, FiShoppingCart, FiUser } from 'react-icons/fi'
import { FaRegBell } from 'react-icons/fa'

function Navbar({toggle}) {

    const [isNavFixed, setIsNavFixed] = useState(false)
    const changeNavbar = ()=> {
        window.scrollY >= 60 ? setIsNavFixed(true) : setIsNavFixed(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavbar)
    }, [])

    return (
        <div className="nav-container" style={isNavFixed? {position: 'fixed'} : {position: 'relative'}}>
            <nav className="navbar wrapper">
                <div className="navbar-container">
                    <span className="navbar__logo"><span>My</span>Course</span>
                    <ul className="navbar__items">
                        <li className="navbar__link active">All Courses</li>
                        <li className="navbar__link">My courses</li>
                        <li className="navbar__link navbar__link--btn">Login</li>
                        <li className="navbar__link"><FiShoppingCart className="navbar__link--icon" /></li>
                        <li className="navbar__link"><FiUser className="navbar__link--icon" /></li>
                    </ul>
                    <span className="navbar__toggler" onClick={toggle}>
                        <span><FiBarChart/></span>
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
