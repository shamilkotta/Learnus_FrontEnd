import React from 'react'
import { Link } from 'react-router-dom'

import './Style.scss'
import CartHoverCard from '../Cards/CartHoverCard'

function HoverCard({data, style}) {
    return (
        <div className="hover-card" style={style}> 
            <div className="hover-card__content">
                <CartHoverCard/>
                <CartHoverCard/>
                <CartHoverCard/>
                <CartHoverCard/>
                <CartHoverCard/>
                <CartHoverCard/>
            </div>
            <div className="hover-card__sticky">
                <Link to='/cart' ><button className="hover-card__btn btn btn--active">Go To Cart</button></Link>
            </div>
        </div>
    )
}

export default HoverCard
