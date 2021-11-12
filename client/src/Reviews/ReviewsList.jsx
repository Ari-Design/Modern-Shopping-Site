import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import Dropdown from '../shared/Dropdown.jsx';
import Modal from '../shared/Modal.jsx';
import AddReviewForm from '../shared/forms/AddReviewForm.jsx';
import axios from 'axios';

class ReviewsList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      allReviews: this.props.reviewData.results,
      reviewsToDisplay: this.props.reviewData.results.slice(0, 2),
      metaReviews: this.props.reviewMeta,
      count: this.props.reviewData.count,
      sortChoice: 'relevance',
      sorting: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
    this.onStarsClick = this.onStarsClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({
        allReviews: this.props.reviewData.results,
        reviewsToDisplay: this.props.reviewData.results.slice(0, 2),
        metaReviews: this.props.reviewMeta,
        count: this.props.reviewData.results.length
      });
    }
  }

  handleClick(e) {
    if (e.target.id === "More_Reviews") {
      var displayLength = this.state.reviewsToDisplay.length + 2;
      var newDisplay = this.state.allReviews.slice(0, displayLength);
      this.setState({
        reviewsToDisplay: newDisplay
      });
    }
  }

  handleSubmit(e) {
    console.log(e.target);
  }

  onStarsClick(e) {
    var target = e.target.innerHTML.slice(0, 1);
    var currentDisplay = this.state.reviewsToDisplay;
    var toDisplay = currentDisplay.filter((review) => review.rating === Number(target));
    this.setState({
      reviewsToDisplay: toDisplay
    })
  }

  onSortChange(e) {
    var choice = e.target.value;
    var currentDisplay = this.state.reviewsToDisplay;
    if (choice === 'Relevance') {
      console.log('sorting by relevance');
    } else if (choice === 'Helpfulness') {
      var sortedDisplay = currentDisplay.sort((a, b) => a.helpfulness > b.helpfulness ? -1: 1);
      this.setState({
        reviewsToDisplay: sortedDisplay,
        sorting: true
      })
    } else if (choice === 'Newest') {
      var sortedDisplay = currentDisplay.sort((a, b) => a.date > b.date ? -1 : 1);
      this.setState({
        reviewsToDisplay: sortedDisplay,
        sorting: true
      })
    }
  }

  render() {
    var dropdownOptions=['Relevance', 'Helpfulness', 'Newest'];
    // Only render reviews if there are reviews:
    if(this.state.allReviews.length > 0) {
      return(
        <>
        <div id="ratings_container" className="ratings_container">
        <div className="ratings_breakdown">
          <h3>Ratings & Reviews</h3>
          <RatingsBreakdown metaReviews={this.state.metaReviews} onStarsClick={this.onStarsClick}/>
        </div>
        <div className="reviews_list">
          <h4>{this.state.count} reviews, sorted by <Dropdown title="sortReviewsBy" optionsArr={dropdownOptions} onChange={this.onSortChange}/></h4>
        {this.state.reviewsToDisplay.map((review) => (
          <ReviewTile key={review.review_id} review={review} updateReviewData={this.props.updateReviewData}/>
        ))}
        <div className="review_footer">
        {this.state.allReviews.length - this.state.reviewsToDisplay.length > 0 ?
        <button className="review_buttons" id="More_Reviews" onClick={(e) => this.handleClick(e)}>More Reviews</button> : null}
        <button onClick={() => this.props.openReviewForm('reviewForm')} className="review_buttons" id="Add_Review+" >Add A Review +</button>
        </div>
        </div>
        </div>
        </>
      );
    } else /*if there are no reviews, prominently display Add_Review+ button*/ {
      return (
        <button onClick={() => this.props.openReviewForm('reviewForm')} className="review_buttons" id="Add_Review+" >Be the first to review!</button>
      )
    }
  }
}

export default ReviewsList;