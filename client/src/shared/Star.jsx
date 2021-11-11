import React from 'react';
import {averageRating} from '../Reviews/RatingsBreakdown.jsx'
// As of 11/04/21, only renders whole stars (but will accept fractional numbers). To be updated.
var Star = ({numStars=averageRating, avgRating}) => {
  if (avgRating) {
    numStars=averageRating;
  }
  var widthStars = JSON.stringify((numStars / 5) * 100) + '%';
  var style={
    width: widthStars
  }
  return (
    <>
      <div className="stars_outer">
          <div className="stars_inner" style={style}></div>
      </div>
    </>
  )
}

export default Star;
