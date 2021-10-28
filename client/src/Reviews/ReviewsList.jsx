import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';

class ReviewsList extends React.Component{
  constructor(props) {
    super(props);
    /* console.log('ReviewsList props > ', this.props);
    console.log('metaReviews props > ', this.props.reviewMeta); */
    this.state = {
      allReviews: this.props.reviewData.results,
      reviewsToDisplay: this.props.reviewData.results.slice(0, 2),
      metaReviews: this.props.reviewMeta
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // Where should metaReviews caclulations sit?
  handleClick(e) {
    if(e.target.id === "MoreReviews") {
      var displayLength = this.state.reviewsToDisplay.length + 2;
      var newDisplay = this.state.allReviews.slice(0, displayLength);
      this.setState({
        reviewsToDisplay: newDisplay
      });
    } else if(e.target.id === "AddReview+") {
      console.log('Add a review');
    }
  }

  render() {
    // Only render reviews if there are reviews:
    if(this.state.allReviews.length > 0) {
      return(
        <>
        <div className="RatingsBreakdown">
        <RatingsBreakdown metaReviews={this.state.metaReviews}/>
        </div>
        <div>## Reviews, sorted by ##dropdown</div>
        {this.state.reviewsToDisplay.map((review) => {
          return <ReviewTile key={review.review_id} review={review}/>
        })}
        <button id="MoreReviews" onClick={(e) => this.handleClick(e)}>More Reviews</button>
        <button id="AddReview+" onClick={(e) => this.handleClick(e)}>Add A Review +</button>
        </>
      );
    }
  }
}

export default ReviewsList;