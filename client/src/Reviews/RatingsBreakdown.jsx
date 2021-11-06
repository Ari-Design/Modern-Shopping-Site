import React from 'react';
import RatingsChart from './RatingsChart.jsx';
import Star from '../shared/Star.jsx'
import Size from './Size.jsx';
import Comfort from './Comfort.jsx';

var averageRating;

var RatingsBreakdown = ({metaReviews, onStarsClick}) => {
  var numRatings = 0;
  var ratingsTotal = 0;
  var ratingsArray = [];

  for (var i = 1; i <= 5; i++) {
    numRatings += Number(metaReviews.ratings[i]);
    ratingsTotal += metaReviews.ratings[i] * i;
    ratingsArray.push(Number(metaReviews.ratings[i]));
  }
  averageRating = Math.round(ratingsTotal/numRatings * 10) / 10;
  console.log('metaReviews > ', metaReviews);

  return(
    <>
    <div className="average_ratings">
      <h2>{averageRating} <Star avgRating={true}/></h2>
    </div>
    <div className="ratings_breakdown">
      <RatingsChart ratingsArray={ratingsArray} numRatings={numRatings} onStarsClick={onStarsClick}/>
    </div>
    <div className="ratings_size"><Size characteristics={metaReviews.characteristics}/></div>
    <div className="ratings_comfort"><Comfort /></div>
    </>
  )
}
export {averageRating};
export default RatingsBreakdown;