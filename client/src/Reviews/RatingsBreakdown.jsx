import React from 'react';

var RatingsBreakdown = ({metaReviews}) => {
  return(
    <>
    <div>Ratings Breakdown Here</div>
    <div>Total Reviews: </div>
    <table>
      <tbody>
      <tr>5 Stars:{metaReviews.ratings[5]}</tr>
      <tr>4 Stars: {metaReviews.ratings[4]}</tr>
      <tr>3 Stars: {metaReviews.ratings[3]}</tr>
      <tr>2 Stars: {metaReviews.ratings[2]}</tr>
      <tr>1 Star: {metaReviews.ratings[1]}</tr>
      </tbody>
    </table>

    </>
  )
}

export default RatingsBreakdown;