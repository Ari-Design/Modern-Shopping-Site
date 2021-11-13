import React from 'react';
var Factors = ({metaReviews}) => {
  var characteristics = metaReviews.characteristics;
  return [['Size', 'Small', 'Perfect', 'Big'], ['Width', 'Narrow', 'Perfect', 'Wide'], ['Comfort', 'Uncomfortable', '', 'Perfect'], ['Quality', 'Low', '', 'High'], ['Length', 'Too Short', 'Perfect', 'Too Long'], ['Fit', 'Too Small', 'Perfect', 'Too Big']].map((factor) => {
    if (characteristics[factor[0]]) {
      var markerPosition = JSON.stringify(characteristics[factor[0]].value * 20) + '%';
      return (
        <div key={characteristics[factor[0]].id}>
          <span>{factor[0]}</span>
          <svg width='100%' height='24px' style={{display: 'inline-block'}}>
            <g>
            <rect fill='#ebebeb' width='32%' height='8px' x='0%'></rect>
            <text x='0%' y='95%' fontSize='10' fill='#226C73'>{factor[1]}</text>
            <rect fill='#ebebeb' width='32%' height='8px'  x='33%'></rect>
            <text x='33%' y='95%' fontSize='10' fill='#226C73'>{factor[2]}</text>
            <rect fill='#ebebeb' width='32%' height='8px'  x='66%'></rect>
            <text x='66%' y='95%' fontSize='10' fill='#226C73'>{factor[3]}</text>
            <rect fill='#4d1b17' width='3.5%' height='8px' x={markerPosition}></rect>
            </g>
          </svg>
        </div>
      );

    }
  });

}
export default Factors;