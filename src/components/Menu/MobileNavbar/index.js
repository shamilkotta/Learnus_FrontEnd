import React from 'react'
import './Style.scss'

import { FiX } from 'react-icons/fi'

import GuestMobNav from './GuestMobNav'
import UserMobNav from './UserMobNav'
import AdminMobNav from './AdminMobNav'

function MobileNavbar({toggle, style}) {
    return (
        <nav className="mobile-navbar" style={style}>
            <span className="mobile-navbar__close-icon" onClick={toggle}><FiX/></span>
            <ul className="mobile-navbar__items">
                <GuestMobNav/>
                {/* <UserMobNav/> */}
                {/* <AdminMobNav/> */}
            </ul>
        </nav>
    )
}

export default MobileNavbar
