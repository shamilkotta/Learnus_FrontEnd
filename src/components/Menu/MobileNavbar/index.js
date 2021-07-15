import React from 'react'
import './index.scss'

import { FiX } from 'react-icons/fi'

function MobileNavbar({toggle, style}) {
    return (
        <nav className="mobile-navbar" style={style}>
            <span className="mobile-navbar__close-icon" onClick={toggle}><FiX/></span>
            <ul className="mobile-navbar__items">
                <li className="mobile-navbar__link active" onClick={toggle}>All Courses</li>
                <li className="mobile-navbar__link" onClick={toggle}>My courses</li>
                <li className="mobile-navbar__link mobile-navbar__link--btn" onClick={toggle}>Login</li>
                <li className="mobile-navbar__link" onClick={toggle}>Cart</li>
                <li className="mobile-navbar__link" onClick={toggle}>Profile</li>
            </ul>
        </nav>
    )
}

export default MobileNavbar
