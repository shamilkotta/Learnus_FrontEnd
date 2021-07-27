import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Style.scss'

const AdminSidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/admin/dashboard" className="sidebar__item">
                <span> Dashboard </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
            <Link to="/admin/courses" className="sidebar__item">
                <span> Courses </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
            <Link to="/admin/create-new-course" className="sidebar__item">
                <span> Create New </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
            <Link to="/admin/students" className="sidebar__item">
                <span> Students </span>
                <span> <FaAngleRight className="icon-vertical-align" /> </span>
            </Link>
        </div>
    )
}

export default AdminSidebar
