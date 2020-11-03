import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating }) {

    const removeFromBasket = _ => {
        
    }

    return (
        <div className='checkoutProduct'>

            <img className='checkoutProduct__image' src={image} alt="Dynamic Image"/>

            <div className="checkoutProduct__info">

                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutPrice__price'><small>$</small>
                <strong>{price}</strong>
                </p>

                <div className="checkoutPrice__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
