import React from 'react'

const AdminMobNav = ({toggleNavbar}) => {
    return (
        <>
            <li className="mobile-navbar__link active" onClick={toggleNavbar}>All Courses</li>
            <li className="mobile-navbar__link" onClick={toggleNavbar}>My courses</li>
            <li className="mobile-navbar__link" onClick={toggleNavbar}>Cart</li>
            <li className="mobile-navbar__link" onClick={toggleNavbar}>Profile</li>
        </>
    )
}

export default AdminMobNav
