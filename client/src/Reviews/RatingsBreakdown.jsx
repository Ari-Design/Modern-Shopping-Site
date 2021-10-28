import React from 'react';

var RatingsBreakdown = ({metaReviews}) => {
  return(
    <>
    <div>Ratings Breakdown Here</div>
    <div className="RatingsBreakdown">Total Reviews: </div>
      <ul>
      <li>5 Stars: {metaReviews.ratings[5]}</li>
      <li>4 Stars: {metaReviews.ratings[4]}</li>
      <li>3 Stars: {metaReviews.ratings[3]}</li>
      <li>2 Stars: {metaReviews.ratings[2]}</li>
      <li>1 Star: {metaReviews.ratings[1]}</li>
      </ul>
    </>
  )
}

export default RatingsBreakdown;