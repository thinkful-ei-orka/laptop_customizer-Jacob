import React from 'react'
import CartItem from './CartItem'
import Total from './Total'

export default function Cart(props) {
    console.log(props.selected)
    let keys =  Object.keys(this.state.selected)
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {keys.map((feature, index) => 
                <CartItem />
            )}
            <Total />
        </section>
    )
}

Cart.defaultProps = {
    selected: {}
}