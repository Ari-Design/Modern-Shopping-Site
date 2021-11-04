import React from 'react';
import Star from '../shared/Star.jsx';
import moment from 'moment';

var ReviewTile = (props) => {
  console.log(props);
  return (
    <>
    <div className="review_stars"><h4><Star numStars={props.review.rating}/></h4></div>
    <div className="review_reviewer"><h5>(conditional verified check) {props.review.reviewer_name}, {moment(props.review.date).format("MMMM Do, YYYY")}</h5></div>
    <div className="review_sumarry"><h4>{props.review.summary}</h4></div>
    <div className="review_body">{props.review.body}</div>
    <div className="footer">
    Helpful? <a id="helpful_button" className="helpful_button"><u>Yes</u> ({props.review.helpfulness})  |  </a>
    <a id="report_button" className="repot_button"><u>Report</u></a>
    </div>
    </>
  )
}

export default ReviewTile;