import React from 'react'
import { useLocation } from "react-router-dom";

import {Link} from 'react-router-dom'

const GuestNavbar = () => {

    const location = useLocation()

    return (
        <>
            <li className="navbar__link"><Link to='/courses' className="navbar__link--txt">All Courses</Link></li>
            <li className="navbar__link"><Link to={{pathname: `${location.pathname}`, search: "?popup=logIn"}} className="navbar__link--btn">Login</Link></li>  
        </>
    )
}

export default GuestNavbar
