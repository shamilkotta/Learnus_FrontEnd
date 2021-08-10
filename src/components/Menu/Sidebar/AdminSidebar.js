import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import './Style.scss'

const AdminSidebar = () => {
    const location = useLocation()
    return (
        <div className="sidebar">
            <Link to={{pathname:"/admin/dashboard", state:{from:location.pathname}}} className="sidebar__item">
                <span> Dashboard </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
            <Link to={{pathname:"/admin/courses", state:{from:location.pathname}}} className="sidebar__item">
                <span> Courses </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
            <Link to={{pathname:"/admin/create-new-course", state:{from:location.pathname}}} className="sidebar__item">
                <span> Create New </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
            <Link to={{pathname:"/admin/students", state:{from:location.pathname}}} className="sidebar__item">
                <span> Students </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
        </div>
    )
}

export default AdminSidebar
