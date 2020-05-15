import React from 'react'
import PartList from './PartList'



export default function CustomList(props) {
    let keys = Object.keys(props.features)

    return (
      <form className="main__form">
          <h2>Customize your laptop</h2>
          {keys.map((feature, idx) =>
          <PartList
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