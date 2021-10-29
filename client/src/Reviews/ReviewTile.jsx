import React from 'react';
var ReviewTile = (props) => {
  console.log('ReviewTile props > ', props);
  return (
    <>
    <div>{props.review.body}</div>
    </>
  )
}

export default ReviewTile;