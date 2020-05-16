import React from 'react'
import Part from './Part'
import slugify from 'slugify'



export default function PartList(props) {
    console.log(props.features[props.feature])


    return (
        <div className="feature_item">
            <h2>{props.feature}</h2>
            {props.features[props.feature].map(item =>
                <Part
                    key={slugify(JSON.stringify(item))}
                    item={item}
                    features={props.features}
                    feature={props.feature}
                    selected={props.selected}
                    onSelected={props.onSelected}

                />
            )}
        </div>
   ) 
}

PartList.defaultProps = {
    features: {},
}