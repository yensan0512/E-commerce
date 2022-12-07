import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct()
{
    return(
        <div className="checkoutProduct">
            <img src='' alt="" className="checkoutProduct_image" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">Test
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>1800</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(5)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                {/* <button onClick={removeFromBasket}>Remove from Basket</button> */}
            </div>
        </div>
    )
}

export default CheckoutProduct