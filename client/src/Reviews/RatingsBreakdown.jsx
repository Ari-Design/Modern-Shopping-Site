import React from 'react';
import RatingsChart from './RatingsChart.jsx';
import Star from '../shared/Star.jsx'
import Factors from './Factors.jsx';

var averageRating;

var RatingsBreakdown = ({metaReviews, onStarsClick}) => {
  // Calculate % recommend
  var recommended = metaReviews.recommended.true ? Number(metaReviews.recommended.true) : 0;
  var notRecommended = metaReviews.recommended.false ? Number(metaReviews.recommended.false) : 0;
  var averageRecommended = Math.round(recommended/(notRecommended + recommended) * 100);

  // Calculate average rating, store # ratings
  var numRatings = 0;
  var ratingsTotal = 0;
  var ratingsArray = [];

  for (var i = 1; i <= 5; i++) {
    if (metaReviews.ratings[i]) {
      numRatings += Number(metaReviews.ratings[i]);
      ratingsTotal += metaReviews.ratings[i] * i;
      ratingsArray[i - 1] = Number(metaReviews.ratings[i]);
    } else {
      ratingsArray[i - 1] = 0;
    }
  }
  averageRating = Math.round(ratingsTotal/numRatings * 10) / 10;

  return(
    <>
    <div className="average_ratings">
      <h2>{averageRating} <Star numStars={averageRating}/></h2>
    </div>
    <div className="average_recommended">
      <p>{averageRecommended}% of reviews recommend this product</p>
    </div>
    <div className="ratings_breakdown">
      <RatingsChart ratingsArray={ratingsArray} numRatings={numRatings} onStarsClick={onStarsClick}/>
    </div>
    <br/>
    <div className="ratings_factors">
      <Factors metaReviews={metaReviews}/>
    </div>
    </>
  )
}
export {averageRating};
export default RatingsBreakdown;