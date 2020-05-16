import React from 'react'
import CartItem from './CartItem'
import Total from './Total'


export default function Cart(props) {
    console.log(props.selected)
    let keys =  Object.keys(props.selected)
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {keys.map((feature, index) => 
                <CartItem
                    key={feature + '-' + index}
                    feature={feature}
                    selectedOption={props.selected[feature]}
                />
            )}
            <Total 
                selected={props.selected}
            />
        </section>
    )
}

Cart.defaultProps = {
    selected: {}
}