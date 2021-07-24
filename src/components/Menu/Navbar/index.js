import React from 'react'
import './Style.scss'

import GuestNavbar from './GuestNavbar';
import UserNavbar from './UserNavbar';
import AdminNavbar from './AdminNavbar';

function Navbar({toggle, sideBar, toggleSideBar}) {

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container wrapper">
                    {/* <GuestNavbar toggle={toggle} /> */}
                    <UserNavbar toggle={toggle} sideBar={sideBar} toggleSideBar={toggleSideBar} />
                    {/* <AdminNavbar toggle={toggle} sideBar={sideBar} toggleSideBar={toggleSideBar}  /> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
