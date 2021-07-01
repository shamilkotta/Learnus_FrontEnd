import React from 'react'
import './CheckoutCard.scss'

import { MdRemoveShoppingCart, MdPlaylistAdd, MdPlaylistPlay } from "react-icons/md"

function CheckoutCard() {

    const image = 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg'

    return (
        <div className="checkout-card">
            <div className="checkout-card__img" style={{backgroundImage: `url(${image})`}}>
            </div>
            <div className="checkout-card__code"><p>M0157</p></div>
            <div className="checkout-card-btns">
                <p className="checkout-card__btn"><span className="checkout-card__btn-icon"><MdPlaylistAdd/></span> NOT NOW</p>
                <p className="checkout-card__btn"><span className="checkout-card__btn-icon"></span> REMOVE</p>
            </div>
            <p className="checkout-card__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ipsam? Lorem ipsum dolor sit,</p>
            <span className="checkout-card__price">$12,45</span>
        </div>
    )
}

export default CheckoutCard
