import React from 'react';

var AddCharacteristics = ({metaReviews}) => {
  console.log(metaReviews);
  var characteristics = metaReviews.characteristics;
  return [['Size', 'Small', 'Perfect', 'Big'], ['Width', 'Narrow', 'Perfect', 'Wide'], ['Comfort', 'Uncomfortable', '', 'Perfect'], ['Quality', 'Low', '', 'High'], ['Length', 'Too Short', 'Perfect', 'Too Long'], ['Fit', 'Too Small', 'Perfect', 'Too Big']].map((factor) => {
    return (
      <div>
        <label id={factor[0]}>{factor[0]}</label>
        <input type="range" id={factor[0]} min="0" max="5" value="2.5" step="1"></input>
      </div>
    )});
}

export default AddCharacteristics;