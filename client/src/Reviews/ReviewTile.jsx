import React from 'react';
import Star from '../shared/Star.jsx';
import moment from 'moment';
import ReviewImages from './ReviewImages.jsx';
import axios from 'axios';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.review,
      helpful: false,
      reported: false
    }
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
    this.onReportClick = this.onReportClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props !== prevProps) {
      this.setState ({
        review: this.props.review
      })
    }
  }

  onHelpfulClick(e) {
    var choiceId = Number(e.target.closest('a').id);
    //console.log(this.props.review.helpfulness)
    axios.put(`/reviews/${choiceId}/helpful`)
    .then(() => {
      this.props.updateReviewData();
    })
    .catch((err) => {
      console.log('error: ', err)
    })

    this.setState({
      helpful: true
    })
  }

  onReportClick(e) {
    var choiceId = Number(e.target.closest('a').id);
    this.setState({
      reported: true
    })
  }

  render () {
    var review = this.props.review;
    return (
      <>
      <span className="review_stars" style={{float:'left'}}><Star numStars={review.rating}/></span>
      <span className="review_reviewer" style={{float:'right'}}>&#9745; {review.reviewer_name}, {moment(review.date).format("MMMM Do, YYYY")}</span>
      <br/>
      <span className="review_summary"><h4>{review.summary}</h4></span>
      <div className="review_body">{review.body}</div>
      {review.recommend ? <div className="review_recommend"><br/><i>&#10003; I recommend this product</i></div> : null}
      <br/>
      {review.photos.length > 0 ? <div><ReviewImages photos={review.photos}/></div> : null}
      <div className="review_footer">
      {this.state.helpful === false ?
      <>
      <span> Helpful? </span>
      <a id={review.review_id} onClick={(e) => this.onHelpfulClick(e)}><u>Yes</u> ({review.helpfulness})  | </a>
      </>
      : <span
      className="helpful"
      >&#9989;&nbsp;Helpful ({review.helpfulness + 1})&nbsp;&nbsp;
      </span> }

      {this.state.reported === false ?
      <a id="report_button" className="report_button" onClick={(e) => this.onReportClick(e)}><u>Report</u></a>
      :
      <span
        className="reported"
        >Reported &nbsp;&#128681;
      </span>}
      <hr />
      </div>
      </>
    )
  }

}

export default ReviewTile;