import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';

class ReviewsList extends React.Component{
  constructor(props) {
    super(props);
    console.log('ReviewsList props > ', this.props);
    console.log('metaReviews props > ', this.props.reviewMeta);
    this.state = {
      allReviews: this.props.reviewData.results,
      reviewsToDisplay: [this.props.reviewData.results[0], this.props.reviewData.results[1]],
      metaReviews: this.props.reviewMeta
    }
  }

  // Where should metaReviews caclulations sit?


  render() {
    // Only render reviews if there are reviews:
    if(this.state.allReviews.length > 0) {
      return(
        <>
        <RatingsBreakdown metaReviews={this.state.metaReviews}/>
        <div>## Reviews, sorted by ##dropdown</div>
        {this.state.reviewsToDisplay.map((review) => {
          return <ReviewTile key={review.review_id} review={review}/>
        })}
        <div>Read More</div>
        <div>Add Review</div>
        </>
      );
    }
  }
}

export default ReviewsList;