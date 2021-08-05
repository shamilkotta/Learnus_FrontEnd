import React, { useEffect, useState } from 'react'
import './Style.scss'
import {Link, useLocation } from 'react-router-dom'
import { FiBarChart, FiMenu } from 'react-icons/fi'

import GuestNavbar from './GuestNavbar';
import UserNavbar from './UserNavbar';
import AdminNavbar from './AdminNavbar';

function Navbar({toggleNavbar, toggleSidebar}) {

    const { pathname } = useLocation()
    const [layout, setLayout] = useState('guest')
    useEffect(() => {
        const page = pathname.split('/', 2)
        if (page[1] === 'admin') {
            setLayout('admin')
        }else if (page[1] === 'user') {
            setLayout('user')
        }else {
            setLayout('guest')
        }
    }, [pathname])

    return (
        <nav className="navbar">
            <div className="navbar-container wrapper">
                <span className="navbar__logo">
                    { layout === 'admin' || layout === 'user' ? <FiMenu onClick={toggleSidebar} /> : null }
                    <Link to="/" className=" fff" style={{marginLeft: '10px'}}><span>My</span>Course</Link>
                </span>
                <ul className="navbar__items">
                    {
                        {
                            'guest': <GuestNavbar />,
                            'user': <UserNavbar/>,
                            'admin': <AdminNavbar />
                        }[layout]
                    }
                </ul>
                <span className="navbar__toggler" onClick={toggleNavbar}>
                    <span><FiBarChart/></span>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
