import React from 'react';
import axios from 'axios';
import Star from '../Star.jsx';
import AddCharacteristics from '../../Reviews/AddCharacteristics.jsx';
import StarRating from '../../Reviews/StarRating.jsx';

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overallRating: 3,
      recommend: '',
      characteristics: '',
      reviewSummary: '',
      reviewBody: '',
      reviewNickname: '',
      reviewEmail: '',
      photos: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.className);
    this.setState({
      [e.target.className]: [e.target.value]
    })
  }

  handleSubmit(e) {

    var {reviewBody, overallRating, recommend, reviewSummary, reviewNickname, reviewEmail, characteristics, photos} = this.state;
    axios.post('/reviews', null, {
      product_id : this.props.productInfo.id,
      rating : overallRating,
      summary : recommend,
      body : reviewBody,
      recommend : recommend,
      name : reviewNickname,
      email : reviewEmail,
      photos : photos,
      characteristics : characteristics
    })
    .then((res) => {
      console.log(res.body);

    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="add_review_form">
        <form onSubmit={this.handleSubmit}>
          <div className="add_review_form_header">
          <h1>Write Your Review</h1>
          <h3>About the {this.props.productInfo.name}</h3>
          </div>
          <label className="overall_rating_label">
            <StarRating />
          </label>
          <br/>
          <label className="recommend_label">
            Would You Recommend This Product? <input
              className="recommend"
              type="checkbox"
              >
            </input>
          </label>
          <div className="reviewer_info">
          <label className="review_email_label">
            Email:&nbsp;&nbsp;
            <input
              className="reviewEmail"
              type="email"
              maxLength="60"
              placeholder="For authentication reasons, you will not be emailed"
              size="60"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          </div>
          <label className="review_nickname_label">
            Nickname:&nbsp;&nbsp;
            <input
              className="reviewNickname"
              type="text"
              maxLength="60"
              placeholder="Example: jackson11!"
              value={this.state.nickname}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <div className="review_characteristics"><AddCharacteristics metaReviews={this.props.reviewMeta}/></div>
          <label className="review_summary_input_label">
          Summary:&nbsp;&nbsp;
            <input
              className="reviewSummary"
              type="text"
              maxLength="60"
              size="60"
              placeholder="Example: Best purchase ever!"
              value={this.state.summary}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <label className="review_body_input_label">
            Review Body:
            <br/>
            <textarea
              className="reviewBody"
              cols="75"
              rows="14"
              maxLength="1000"
              value={this.state.reviewBody}
              onChange={this.handleChange}>
            </textarea>
          </label>
          <div className="review_footer">
          <button onClick={this.props.onClick} className="review_cancel">Cancel</button>
          <input className="review_submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default AddReviewForm;