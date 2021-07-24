import React from 'react'

const AdminMobNav = ({toggle}) => {
    return (
        <>
            <li className="mobile-navbar__link active" onClick={toggle}>All Courses</li>
            <li className="mobile-navbar__link" onClick={toggle}>My courses</li>
            <li className="mobile-navbar__link" onClick={toggle}>Cart</li>
            <li className="mobile-navbar__link" onClick={toggle}>Profile</li>
        </>
    )
}

export default AdminMobNav
