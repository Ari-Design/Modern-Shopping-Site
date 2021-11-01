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
      metaReviews: this.props.reviewMeta,
      count: this.props.reviewData.count
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(e.target.id === "More_Reviews") {
      var displayLength = this.state.reviewsToDisplay.length + 2;
      var newDisplay = this.state.allReviews.slice(0, displayLength);
      this.setState({
        reviewsToDisplay: newDisplay
      });
    } else if(e.target.id === "Add_Review+") {
      console.log('Add a review');
    }
  }

  render() {
    // Only render reviews if there are reviews:
    if(this.state.allReviews.length > 0) {
      return(
        <>
        <div className="ratings_container">
        <div className="ratings_breakdown">
          <h3>Ratings & Reviews</h3>
          <RatingsBreakdown metaReviews={this.state.metaReviews}/>
        </div>
        <div className="reviews_list">
          <h4>{this.state.count} reviews, sorted by _dropdown_</h4>
        {this.state.reviewsToDisplay.map((review) => (
          <ReviewTile key={review.review_id} review={review}/>
        ))}
        <button id="More_Reviews" onClick={(e) => this.handleClick(e)}>More Reviews</button>
        <button id="Add_Review+" onClick={(e) => this.handleClick(e)}>Add A Review +</button>
        </div>
        </div>
        </>
      );
    } else /*if there are no reviews, prominently display Add_Review+ button*/ {
      return (
        <div>Add_Review Button displays</div>
      )
    }
  }
}

export default ReviewsList;