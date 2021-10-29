import React from 'react';

var RatingsBreakdown = ({metaReviews}) => {
  var numRatings = 0;
  var totalRatings = 0;
  console.log('metaReviews.ratings > ', metaReviews.ratings[1])

  for (var i = 1; i <= 5; i++) {
    numRatings += Number(metaReviews.ratings[i]);
    totalRatings += metaReviews.ratings[i] * i;
  }
  var averageRating = Math.round(totalRatings/numRatings * 10) / 10;
  return(
    <>
    <div className="average_ratings">{averageRating} star display here</div>
    <div className="ratings_breakdown">
      <ul>
        <li>5 stars *bar* {Math.round(metaReviews.ratings[5]/numRatings * 100)}%</li>
        <li>4 stars *bar* {Math.round(metaReviews.ratings[4]/numRatings * 100)}%</li>
        <li>3 stars *bar* {Math.round(metaReviews.ratings[3]/numRatings * 100)}%</li>
        <li>2 stars *bar* {Math.round(metaReviews.ratings[2]/numRatings * 100)}%</li>
        <li>1 stars *bar* {Math.round(metaReviews.ratings[1]/numRatings * 100)}%</li>
      </ul>
    </div>
    </>
  )
}

export default RatingsBreakdown;