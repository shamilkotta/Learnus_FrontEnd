import React from 'react'
import CartHoverCard from '../Cards/CartHoverCard/CartHoverCard'
import './HoverCard.scss'

function HoverCard() {
    return (
        <div className="hover-card">
            <div className="hover-card__content">
                <CartHoverCard/>
                <CartHoverCard/>
                <CartHoverCard/>
                <CartHoverCard/>
                <CartHoverCard/>
                <CartHoverCard/>
            </div>
            <div className="hover-card__sticky">
                <button className="hover-card__btn btn btn--active">Go To Course</button>
            </div>
        </div>
    )
}

export default HoverCard
