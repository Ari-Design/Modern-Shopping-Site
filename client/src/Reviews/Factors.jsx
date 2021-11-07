import React from 'react';
var Factors = ({metaReviews}) => {
  var characteristics = metaReviews.characteristics;
  return ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'].map((factor) => {
    if (characteristics[factor]) {
      var markerPosition = JSON.stringify(characteristics[factor].value * 20) + '%';
      return (
        <div key={characteristics[factor].id}>
          <span>{factor}</span>
          <svg width='100%' height='24px' style={{display: 'inline-block'}}>
            <g>
            <rect fill='#ebebeb' width='27%' height='8px' x='0%'></rect>
            <text x='0%' y='95%' fontSize='10'>Too small</text>
            <rect fill='#ebebeb' width='27%' height='8px'  x='33%'></rect>
            <text x='33%' y='95%' fontSize='10'>Perfect</text>
            <rect fill='#ebebeb' width='27%' height='8px'  x='66%'></rect>
            <text x='66%' y='95%' fontSize='10'>Too large</text>
            <rect fill='#000000' width='5%' height='8px' x={markerPosition}></rect>
            </g>
          </svg>
        </div>
      );

    }
  });

}
export default Factors;