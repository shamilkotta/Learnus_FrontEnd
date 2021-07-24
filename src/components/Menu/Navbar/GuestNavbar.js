import React from 'react'
import { useLocation } from "react-router-dom";

import {Link} from 'react-router-dom'
import { FiBarChart } from 'react-icons/fi'

const GuestNavbar = ({toggle}) => {

    const location = useLocation()

    return (
        <>
            <span className="navbar__logo"><Link to="/" className=" fff"><span>My</span>Course</Link></span>
            <ul className="navbar__items">
                <li className="navbar__link"><Link to='/all-courses' className="navbar__link--txt  active">All Courses</Link></li>
                <li className="navbar__link"><Link to={{pathname: `${location.pathname}`, search: "?popup=logIn"}} className="navbar__link--btn">Login</Link></li>
            </ul>
            <span className="navbar__toggler" onClick={toggle}>
                <span><FiBarChart/></span>
            </span>
        </>
    )
}

export default GuestNavbar
