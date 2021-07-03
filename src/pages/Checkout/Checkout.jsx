import React from 'react'
import CheckoutCourse from '../../components/Cards/CheckoutCourse/CheckoutCourse'
import './Checkout.scss'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout-content">
                <div className="checkout__gateway">
                    <h3 className="checkout__title h">Checkout</h3>
                    <div style={{height: '100px'}}>somw</div>
                </div>

                <div className="checkout__details">
                    <h3 className="checkout__title h">Order Details</h3>
                    <CheckoutCourse/>
                    <CheckoutCourse/>
                    <CheckoutCourse/>
                    <CheckoutCourse/>
                    <CheckoutCourse/>
                    <CheckoutCourse/>
                    <CheckoutCourse/>
                </div>
            </div>

            <div className="checkout__bill">
                <h3 className="checkout__title h">Summary</h3>
                <div className="checkout-bill__row">
                    <p className="checkout-bill__row--txt p">Sub total:</p>
                    <p className="checkout-bill__row--amount p">$00,000</p>
                </div>
                <div className="checkout-bill__row">
                    <p className="checkout-bill__row--txt p">Discount:</p>
                    <p className="checkout-bill__row--amount p">$00,000</p>
                </div>
                <div className="checkout-bill__row">
                    <p className="checkout-bill__row--txt p">Tax:</p>
                    <p className="checkout-bill__row--amount p">$00,000</p>
                </div>
                <div className="checkout-bill__row checkout-bill__total">
                    <p className="checkout-bill__row--txt total--txt p">Total:</p>
                    <p className="checkout-bill__row--amount total--amount p">$00,000</p>
                </div>
                <div className="checkout-bill__sticky">
                    <div className="checkout-bill__sticky-total">
                        <p className="checkout-bill__total--txt total--txt p">Total</p>
                        <p className="checkout-bill__total--amount total--amount p">$00,000</p>
                    </div>
                    <button type="submit" className="checkout-bill__btn btn btn--active">Complete Payment</button>
                </div>
            </div>

        </div>
    )
}

export default Checkout
