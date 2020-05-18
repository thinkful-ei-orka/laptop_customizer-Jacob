import React from 'react'
import './Header.css'

export default function Header(props) {
    return (
        <h1>
            {props.header}
        </h1>
    )
}