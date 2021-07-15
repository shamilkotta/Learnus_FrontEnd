import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

import { MdDone, MdDoneAll, MdClear } from "react-icons/md"

function CheckoutCourse({data, isCart=false, isLater=false}) {

    const image = 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg'
    const handleLater = ()=>{}
    const handleRemove = ()=>{}

    return (
        <div className="checkout-card">
            <Link to="/course" className="checkout-card__img" style={{backgroundImage: `url(${image})`}}>
            </Link>
            <Link to="/course" className="checkout-card__code"><p>M0157</p></Link>
            {
                isCart &&
                <div className="checkout-card-btns">
                    {
                        isLater ? 
                        <p className="checkout-card__btn" title="Add to cart list" onClick={handleLater}>
                            <MdDoneAll className="checkout-card__btn-icon"/>
                            <span>NOW</span>
                        </p>
                        :
                        <p className="checkout-card__btn" title="Save for later">
                            <MdDone className="checkout-card__btn-icon"/>
                            <span>NOT NOW</span>
                        </p>
                    }
                    
                    <p className="checkout-card__btn" title="Remove from cart" onClick={handleRemove}>
                        <MdClear className="checkout-card__btn-icon"/>
                        <span>REMOVE</span>
                    </p>
                </div>
            }
            
            <Link to="/course" className="checkout-card__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ipsam? Lorem ipsum dolor sit,</Link>
            <span className="checkout-card__price">$12,45</span>
        </div>
    )
}

export default CheckoutCourse
