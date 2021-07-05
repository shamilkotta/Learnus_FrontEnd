import React from 'react'
import './CartHoverCard.scss'

function CartHoverCard({data}) {

    const image = 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg'

    return (
        <div class="cart-hover-card">
            <div class="cart-hover-card__img" style={{backgroundImage: `url(${image})`}}></div>
            <p class="cart-hover-card__title p">Lorem ipsum dolor. audantium, placeat. orem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat.</p>
        </div>
    )
}

export default CartHoverCard
