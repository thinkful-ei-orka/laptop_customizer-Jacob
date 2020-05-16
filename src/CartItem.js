import React from 'react'

export default function CartItem(props) {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    return (
        <div>This is each selected part in the cart</div>
    )
}