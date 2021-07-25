import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './Style.scss'

import { FiX } from 'react-icons/fi'

import GuestMobNav from './GuestMobNav'
import UserMobNav from './UserMobNav'
import AdminMobNav from './AdminMobNav'

function MobileNavbar({toggleNavbar, style}) {

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
        <nav className="mobile-navbar" style={style}>
            <span className="mobile-navbar__close-icon" onClick={toggleNavbar}><FiX/></span>
            <ul className="mobile-navbar__items">
                {
                    {
                        'guest': <GuestMobNav toggleNavbar={toggleNavbar} />,
                        'user': <UserMobNav toggleNavbar={toggleNavbar} />,
                        'admin': <AdminMobNav toggleNavbar={toggleNavbar} />
                    }[layout]
                }
            </ul>
        </nav>
    )
}

export default MobileNavbar
