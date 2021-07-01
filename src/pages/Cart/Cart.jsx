import React from 'react'
import './Cart.scss'

function Cart() {
    return (
        <div className="cart">
            <div className="cart__checkout-group">
                <p className="cart-checkout__title h">Total</p>
                <h1 className="cart-checkout__price">$00,000</h1>
                <button className="cart-checkout__btn btn btn--active">Checkout</button>
            </div>
            <div className="cart__items">
                <div className="cart__items--active">
                    <p className="cart__head p">00 Courses in Cart</p>
                    
                    
                </div>
                <div className="cart__items--later">
                    <p className="cart__head p">saved for later</p>

                </div>
            </div>
        </div>
    )
}

export default Cart
