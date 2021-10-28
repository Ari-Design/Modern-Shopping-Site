import React from 'react';
var ReviewTile = (props) => {
  console.log('ReviewTile props > ', props);
  return (
    <>
    <div>{props.review.review_id}</div>
    <div>Summary {props.review.summary}</div>
    </>
  )
}

export default ReviewTile;