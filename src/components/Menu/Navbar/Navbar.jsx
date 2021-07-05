import React from 'react'
import './Navbar.scss'

import { FiBarChart, FiShoppingCart, FiUser } from 'react-icons/fi'

function Navbar({toggle}) {
    return (
        <div className="nav-container">
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
