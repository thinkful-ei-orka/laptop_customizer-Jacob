import React from 'react'
import slugify from 'slugify'

export default function Part(props) {
    const itemHash = slugify(JSON.stringify(props.item));
    return (
        <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(props.feature)}
              checked={props.item.name === props.selected[props.feature].name}
              onChange={e => props.onSelected(props.feature, props.item)}

            />
            <label htmlFor={itemHash} className="feature__label">
              {props.item.name} 
            </label>
          </div>
    )
}
