import React from 'react'
import Part from './Part'



export default function CustomList(props) {
    console.log(props.features[props.feature])
    const featureHash = props.feature + '-' + props.id;
    

    return (
        <form key=""className="feature_item">
            <h2>{props.feature}</h2>
            {props.features[props.feature].map(item =>
                <Part
                    item={item}
                    features={props.features}
                    feature={props.feature}
                    selected={props.selected}
                    onSelected={props.onSelected}
                />
            )}
        </form>
   ) 
}

CustomList.defaultProps = {
    features: {},
}