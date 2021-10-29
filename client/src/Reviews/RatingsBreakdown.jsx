import React from 'react';

var RatingsBreakdown = ({metaReviews}) => {
  var numRatings = 0;
  var ratingsTotal = 0;

  for (var i = 1; i <= 5; i++) {
    numRatings += Number(metaReviews.ratings[i]);
    ratingsTotal += metaReviews.ratings[i] * i;
  }
  var averageRating = Math.round(ratingsTotal/numRatings * 10) / 10;
  return(
    <>
    <div className="average_ratings">
      <h2>{averageRating} *stars*</h2>
      </div>
    <div className="ratings_breakdown">
      <ul>
        <li>5 stars *bar* {Math.round(metaReviews.ratings[5]/numRatings * 100)}%</li>
        <li>4 stars *bar* {Math.round(metaReviews.ratings[4]/numRatings * 100)}%</li>
        <li>3 stars *bar* {Math.round(metaReviews.ratings[3]/numRatings * 100)}%</li>
        <li>2 stars *bar* {Math.round(metaReviews.ratings[2]/numRatings * 100)}%</li>
        <li>1 stars *bar* {Math.round(metaReviews.ratings[1]/numRatings * 100)}%</li>
      </ul>
    </div>
    <div className="ratings_size">Size</div>
    <div className="ratings_comfort">Comfort</div>
    </>
  )
}

export default RatingsBreakdown;