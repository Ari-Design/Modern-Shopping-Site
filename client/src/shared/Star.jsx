import React from 'react';
// As of 11/04/21, only renders whole stars (but will accept fractional numbers). To be updated.
var Star = ({numStars}) => {
  var mapArr = [1, 2, 3, 4, 5];
  return mapArr.map((star, index) => {
    if (numStars - 1 >= index) {
      return (
        <span className="full_star">&#9733;</span>
      )
    } else {
      return (
        <span className="empty_star">&#9734;</span>
      )
    }

  })
}
export default Star;
