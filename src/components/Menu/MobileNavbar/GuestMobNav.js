import React from 'react'

const GuestMobNav = ({toggleNavbar}) => {
    return (
        <>
            <li className="mobile-navbar__link active" onClick={toggleNavbar}>All Courses</li>
            <li className="mobile-navbar__link mobile-navbar__link--btn" onClick={toggleNavbar}>Login</li>
        </>
    )
}

export default GuestMobNav
