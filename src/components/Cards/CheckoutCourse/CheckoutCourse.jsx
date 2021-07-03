import React, { useState } from 'react'
import './CheckoutCourse.scss'

import { MdRemoveShoppingCart, MdPlaylistAdd, MdPlaylistPlay } from "react-icons/md"

function CheckoutCourse({isCart=false, isLater=false}) {

    const image = 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg'
    const handleLater = ()=>{}
    const handleRemove = ()=>{}

    return (
        <div className="checkout-card">
            <div className="checkout-card__img" style={{backgroundImage: `url(${image})`}}>
            </div>
            <div className="checkout-card__code"><p>M0157</p></div>
            {
                isCart &&
                <div className="checkout-card-btns">
                    {
                        isLater ? 
                        <p className="checkout-card__btn" title="Add to cart list" onClick={handleLater}>
                            <MdPlaylistAdd className="checkout-card__btn-icon"/>
                            <span>NOW</span>
                        </p>
                        :
                        <p className="checkout-card__btn" title="Save for later">
                            <MdPlaylistPlay className="checkout-card__btn-icon"/>
                            <span>NOT NOW</span>
                        </p>
                    }
                    
                    <p className="checkout-card__btn" title="Remove from cart" onClick={handleRemove}>
                        <MdRemoveShoppingCart className="checkout-card__btn-icon"/>
                        <span>REMOVE</span>
                    </p>
                </div>
            }
            
            <p className="checkout-card__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ipsam? Lorem ipsum dolor sit,</p>
            <span className="checkout-card__price">$12,45</span>
        </div>
    )
}

export default CheckoutCourse
