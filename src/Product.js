import React from 'react'

export default function product({name,price}) {
    return (

            <div className="product">
         <p>{name}</p>
    <p>Price : {price}</p>
         <button className="btn add_cart">Buy</button>

        </div>

        
    )
}
