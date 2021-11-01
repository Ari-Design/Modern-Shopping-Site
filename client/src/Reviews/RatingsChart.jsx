import React from 'react';

var RatingsChart = ({ratingsArray, numRatings}) => {
  return [5, 4, 3, 2, 1].map((index) => {
    var width = JSON.stringify(Math.round(ratingsArray[index - 1]/numRatings * 100)) + '%';
    return (
      <>
      <div>
      <span><u>{index} stars</u> </span>
      <svg width='66%' height='16px'>
        <g className='bars'>
        <rect fill='#A9A9A9' width='100%' height='16px'></rect>
        <rect fill='#808080' width={width} height='16px'></rect>
        </g>
      </svg>
      </div>
      </>
    );
  })


}

export default RatingsChart;