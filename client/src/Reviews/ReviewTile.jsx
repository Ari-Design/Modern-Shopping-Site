import React from 'react';
var ReviewTile = (props) => {
  console.log('ReviewTile props > ', props.review);
  return (
    <>
    <div className="review_stars"><h4>*{props.review.rating} stars here*</h4></div>
    <div className="review_reviewer"><h5>(conditional verified check) {props.review.reviewer_name}</h5></div>
    <div className="review_sumarry"><h4>{props.review.summary}</h4></div>
    <div className="review_body">{props.review.body}</div>
    <div className="footer">
    Helpful? <a id="helpful_button" className="helpful_button"><u>Yes</u></a>
    <a id="report_button" className="repot_button">   <u>Report</u></a>
    </div>
    </>
  )
}

export default ReviewTile;