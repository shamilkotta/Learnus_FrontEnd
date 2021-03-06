import React from 'react'
import './Style.scss'

import CheckoutCourse from '../../../components/Cards/CheckoutCourse'

function Cart() {
    return (
        <div className="cart wrapper">
            <div className="cart__checkout-group">
                <p className="cart-checkout__title h">Total</p>
                <h1 className="cart-checkout__price">$00,000</h1>
                <button className="cart-checkout__btn btn btn--active">Checkout</button>
            </div>
            <div className="cart__items">
                <div className="cart__items--active">
                    <p className="cart__head p">00 Courses in Cart</p>
                    <CheckoutCourse isCart/>
                    <CheckoutCourse isCart/>
                    <CheckoutCourse isCart/>
                    <CheckoutCourse isCart/>
                </div>
                <div className="cart__items--later">
                    <p className="cart__head p">saved for later</p>
                    <CheckoutCourse isCart isLater={true}/>
                    <CheckoutCourse isCart isLater={true}/>
                    <CheckoutCourse isCart isLater={true}/>
                    <CheckoutCourse isCart isLater={true}/>
                </div>
            </div>
        </div>
    )
}

export default Cart
