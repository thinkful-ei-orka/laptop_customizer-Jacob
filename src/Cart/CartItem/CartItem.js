import React from 'react'
import './CartItem.css'

export default function CartItem(props) {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    return (
        <div className="summary__option" key={props.feature + '-' + props.id}>
          <div className="summary__option__label">{props.feature} </div>
          <div className="summary__option__value">{props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(props.selectedOption.cost)}
          </div>
        </div>
    )
}