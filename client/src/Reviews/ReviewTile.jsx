import React from 'react';
import Star from '../shared/Star.jsx';
import moment from 'moment';

var ReviewTile = ({review}) => {
  return (
    <>
    <div className="stars_and_reviewers">
    <div className="review_stars" style={{float:'left'}}><h4><Star numStars={review.rating}/></h4></div>
    <div className="review_reviewer" style={{float:'right'}}><h5>&#9745; {review.reviewer_name}, {moment(review.date).format("MMMM Do, YYYY")}</h5></div>
    </div>
    <br/>
    <span className="review_summary"><br/><h4><br/>{review.summary}</h4></span>
    <div className="review_body">{review.body}</div>
    {review.recommend ? <div className="review_recommend"><br/><i>&#10003; I recommend this product</i></div> : null}
    <br/>
    <div className="review_footer">
    Helpful? <a id="helpful_button" className="helpful_button"><u>Yes</u> ({review.helpfulness})  |  </a>
    <a id="report_button" className="repot_button"><u>Report</u></a>
    <hr />
    </div>
    </>
  )
}

export default ReviewTile;