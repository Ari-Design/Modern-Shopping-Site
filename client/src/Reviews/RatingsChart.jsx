import React from 'react';
import Star from '../shared/Star.jsx';

var RatingsChart = ({ratingsArray, numRatings, onStarsClick}) => {
  return [5, 4, 3, 2, 1].map((index) => {
    var width = JSON.stringify(Math.round(ratingsArray[index - 1]/numRatings * 100)) + '%';
    return (
      <div key={index} className="star-rating">
      <span onClick={onStarsClick} id={index}><u>{index.toFixed(1)} stars</u> </span>
      <svg width='70%' height='16px' x='10%'>
        <g className='bars'>
        <rect fill='#ebebeb' width='100%' height='8px' x='5%' y='50%'></rect>
        <rect fill='#4d1b17' width={width} height='8px'x='5%' y='50%'></rect>
        </g>
      </svg>
      </div>
    );
  })


}

export default RatingsChart;