import React from 'react'
import CartHoverCard from '../Cards/CartHoverCard/CartHoverCard'
import './HoverCard.scss'

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
                <button className="hover-card__btn btn btn--active">Go To Cart</button>
            </div>
        </div>
    )
}

export default HoverCard
