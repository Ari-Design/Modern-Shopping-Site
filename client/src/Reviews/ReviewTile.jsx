import React from 'react';
import Star from '../shared/Star.jsx';
import moment from 'moment';

var ReviewTile = ({review, onHelpfulClick}) => {
  return (
    <>
    <span className="review_stars" style={{float:'left'}}><Star numStars={review.rating}/></span>
    <span className="review_reviewer" style={{float:'right'}}>&#9745; {review.reviewer_name}, {moment(review.date).format("MMMM Do, YYYY")}</span>
    <br/>
    <span className="review_summary"><h4>{review.summary}</h4></span>
    <div className="review_body">{review.body}</div>
    {review.recommend ? <div className="review_recommend"><br/><i>&#10003; I recommend this product</i></div> : null}
    <br/>
    <div className="review_footer">
    Helpful? <a id={review.review_id} onClick={(e) => onHelpfulClick(e)}><u>Yes</u> ({review.helpfulness})  |  </a>
    <a id="report_button" className="report_button"><u>Report</u></a>
    <hr />
    </div>
    </>
  )
}

export default ReviewTile;