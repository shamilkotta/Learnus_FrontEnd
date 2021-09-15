import React, { useState } from 'react'

import {Link, useLocation} from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import ProfileHoverCard from '../../ProfileHoverCard'

const AdminNavbar = () => {

    const location = useLocation()
    const [isProfileHover, setIsProfileHover] = useState(false)
    const handleProfileHover = ()=> {setIsProfileHover(!isProfileHover)}

    return (
        <>
            <li className="navbar__link"><Link to='/courses' className="navbar__link--txt">All Courses</Link></li>
            <li className="navbar__link"><Link to={{pathname:"/admin", state:{from:location.pathname}}} className="navbar__link--txt">Dashboard</Link></li>
            {/* <li className="navbar__link">
                <div><FiUser className="navbar__link--icon" /></div>
            </li> */}
            <li className="navbar__link navbar__link--hover" onMouseEnter={handleProfileHover} onMouseLeave={handleProfileHover}>
                <div><Link to={{pathname:"/admin", state:{from:location.pathname}}}><FiUser className="navbar__link--icon" /></Link></div>
                { isProfileHover && <ProfileHoverCard style={{right: 0}} isAdmin={true} /> }
                  
            </li>
        </>
    )
}

export default AdminNavbar
