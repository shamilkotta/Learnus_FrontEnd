import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Style.scss'

const ProfileHoverCard = ({style, isAdmin=false}) => {
    const location = useLocation()
    const dispatch = useDispatch()

    return (
        <div className="profile-hover-card" style={style}> 
            <div className="profile-hover-card__content">
                <Link className="profile-hover-card__item" to={isAdmin ? {pathname:"/admin", state:{from:location.pathname}} : {pathname:"/user/profile", state:{from:location.pathname}}}><div> Profile </div></Link>
                <div className="profile-hover-card__item" onClick={()=>{dispatch({type: 'LOGOUT'})}} > Log Out </div>
            </div>
        </div>
    )
}

export default ProfileHoverCard
