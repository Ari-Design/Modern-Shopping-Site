import React from 'react';
import {averageRating} from '../Reviews/RatingsBreakdown.jsx';
// As of 11/04/21, only renders whole stars (but will accept fractional numbers). To be updated.
var Star = ({numStars, avgRating}) => {
  var mapArr = [1, 2, 3, 4, 5];
  if (avgRating) {
    numStars = averageRating;
  }
  return mapArr.map((star, index) => {
    if (numStars - 1 >= index) {
      return (
        <span key={index} className="full_star">&#9733;</span>
      )
    } else {
      return (
        <span key={index} className="empty_star">&#9734;</span>
      )
    }

  })

}
export default Star;
