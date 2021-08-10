import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const UserSidebar = () => {
    return (

        <div className="sidebar">
            <Link to="/user/dashboard" className="sidebar__item">
                <span> Dashboard </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
            <Link to="/user/courses" className="sidebar__item">
                <span> Courses </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
            <Link to="/user/profile" className="sidebar__item">
                <span> Profile </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
        </div>
    )
}

export default UserSidebar
