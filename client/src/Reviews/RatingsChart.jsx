import React from 'react';

var RatingsChart = ({ratingsArray, numRatings}) => {
  return [5, 4, 3, 2, 1].map((index) => {
    var width = JSON.stringify(Math.round(ratingsArray[index - 1]/numRatings * 100)) + '%';
    return (
      <>
      <div>
      <span><u>{index} stars</u> </span>
      <svg width='50%' height='16px'>
        <g className='bars'>
        <rect fill='#ebebeb' width='100%' height='8px' x='5%' y='50%'></rect>
        <rect fill='#525252' width={width} height='8px'x='5%' y='50%'></rect>
        </g>
      </svg>
      </div>
      </>
    );
  })


}

export default RatingsChart;