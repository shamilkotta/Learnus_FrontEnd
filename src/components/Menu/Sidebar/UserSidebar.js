import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const UserSidebar = () => {

    const location = useLocation()

    return (

        <div className="sidebar">
            <Link to={{pathname:"/user/dashboard", state:{from:location.pathname}}} className="sidebar__item">
                <span> Dashboard </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
            <Link to={{pathname:"/user/courses", state:{from:location.pathname}}} className="sidebar__item">
                <span> Courses </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
            <Link to={{pathname:"/user/profile", state:{from:location.pathname}}} className="sidebar__item">
                <span> Profile </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
        </div>
    )
}

export default UserSidebar
