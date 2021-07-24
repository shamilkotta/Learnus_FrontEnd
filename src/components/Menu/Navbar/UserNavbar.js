import React, { useState } from 'react'

import {Link} from 'react-router-dom'
import { FiBarChart, FiShoppingCart, FiUser, FiMenu } from 'react-icons/fi'
import HoverCard from '../../HoverCard'

const UserNavbar = ({toggle, sideBar=false, toggleSideBar}) => {

    const [isCartHover, setIsCartHover] = useState(false)
    const handleCartHover = ()=> {setIsCartHover(!isCartHover)}

    return (
        <>
            <span className="navbar__logo">
                {
                    sideBar ? <FiMenu onClick={toggleSideBar} /> : <Link to="/" className=" fff"><span>My</span>Course</Link>
                }
            </span>
            <ul className="navbar__items">
                <li className="navbar__link"><Link to='/all-courses' className="navbar__link--txt  active">All Courses</Link></li>
                <li className="navbar__link"><Link to='/course' className="navbar__link--txt">My courses</Link></li>
                <li className="navbar__link navbar__link--hover" onMouseEnter={handleCartHover} onMouseLeave={handleCartHover}>
                    <div><Link to='/cart'><FiShoppingCart className="navbar__link--icon" /></Link></div>
                    { isCartHover && <HoverCard style={{right: 0}}/> }  
                </li>
                <li className="navbar__link">
                    <div><FiUser className="navbar__link--icon" /></div>
                </li>
            </ul>
            <span className="navbar__toggler" onClick={toggle}>
                <span><FiBarChart/></span>
            </span>
        </>
    )
}

export default UserNavbar
