import React from 'react'
import Part from './Part/Part'
import slugify from 'slugify'
import './PartList.css'






export default function PartList(props) {
    console.log(props.features[props.feature])
    const featureHash = props.feature + '-' + props.id

    return (
        <fieldset className="feature" key={featureHash}>
            <legend className="feature_name">
                <h3>{props.feature}</h3>
            </legend>
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
        </fieldset>
   ) 
}

PartList.defaultProps = {
    features: {},
}