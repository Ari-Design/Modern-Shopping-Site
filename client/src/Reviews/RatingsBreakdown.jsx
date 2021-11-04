import React from 'react';
import RatingsChart from './RatingsChart.jsx';
import Star from '../shared/Star.jsx'

var RatingsBreakdown = ({metaReviews}) => {
  var numRatings = 0;
  var ratingsTotal = 0;
  var ratingsArray = [];

  for (var i = 1; i <= 5; i++) {
    numRatings += Number(metaReviews.ratings[i]);
    ratingsTotal += metaReviews.ratings[i] * i;
    ratingsArray.push(Number(metaReviews.ratings[i]));
  }
  var averageRating = Math.round(ratingsTotal/numRatings * 10) / 10;
  return(
    <>
    <div className="average_ratings">
      <h2>{averageRating} <Star numStars={averageRating}/></h2>
      </div>
    <div className="ratings_breakdown">
      <RatingsChart ratingsArray={ratingsArray} numRatings={numRatings}/>
    </div>
    <div className="ratings_size">Size</div>
    <div className="ratings_comfort">Comfort</div>
    </>
  )
}

export default RatingsBreakdown;