import React from 'react'
import PartList from './PartList/PartList'
import './CustomList.css'



export default function CustomList(props) {
    let keys = Object.keys(props.features)
    // key={slugify(JSON.stringify(item))
    return (
      <form className="main__form">
          <h2>Customize your laptop</h2>
          {keys.map((feature, idx) =>
          <PartList
            key={feature + '-' + idx}
            id={idx}
            feature={feature}
            features={props.features}
            selected={props.selected}
            onSelected={props.onSelected}
          />
        )}
      </form>
   ) 
}

CustomList.defaultProps = {
    features: {}
}