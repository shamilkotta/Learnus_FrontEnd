import React from 'react'

const GuestMobNav = ({toggle}) => {
    return (
        <>
            <li className="mobile-navbar__link active" onClick={toggle}>All Courses</li>
            <li className="mobile-navbar__link mobile-navbar__link--btn" onClick={toggle}>Login</li>
        </>
    )
}

export default GuestMobNav
