import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import Dropdown from '../shared/Dropdown.jsx';
import Modal from '../shared/Modal.jsx';
import AddReviewForm from '../shared/forms/AddReviewForm.jsx';

class ReviewsList extends React.Component{
  constructor(props) {
    super(props);
    /* console.log('ReviewsList props > ', this.props);
    console.log('metaReviews props > ', this.props.reviewMeta); */
    this.state = {
      allReviews: this.props.reviewData.results,
      reviewsToDisplay: this.props.reviewData.results.slice(0, 2),
      metaReviews: this.props.reviewMeta,
      count: this.props.reviewData.count,
      sortChoice: 'relevance'
    }
    this.handleClick = this.handleClick.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }

  handleClick(e) {
    if(e.target.id === "More_Reviews") {
      var displayLength = this.state.reviewsToDisplay.length + 2;
      var newDisplay = this.state.allReviews.slice(0, displayLength);
      this.setState({
        reviewsToDisplay: newDisplay
      });
    }
  }

  onSortChange(e) {
    var choice = e.target.value;
    var currentDisplay = this.state.reviewsToDisplay;

    if (choice === 'Relevance') {
      console.log('sorting by relevance');
    } else if (choice === 'Helpfulness') {
      console.log('sorting by helpfulness');
    } else if (choice === 'Newest') {
      console.log('sorting by newest');
    }
  }


  render() {
    var dropdownOptions=['Relevance', 'Helpfulness', 'Newest'];
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
          <h4>{this.state.count} reviews, sorted by <Dropdown title="sortReviewsBy" optionsArr={dropdownOptions} onChange={this.onSortChange}/></h4>
        {this.state.reviewsToDisplay.map((review) => (
          <ReviewTile key={review.review_id} review={review}/>
        ))}
        <button id="More_Reviews" onClick={(e) => this.handleClick(e)}>More Reviews</button>
        <button onClick={() => this.props.openReviewForm('reviewForm')} id="Add_Review+" >Add A Review +</button>
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