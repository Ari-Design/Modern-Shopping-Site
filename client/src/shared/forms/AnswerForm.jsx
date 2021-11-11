import React from 'react';
import axios from 'axios';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer:'',
      email: '',
      nickname: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAnswerSubmit(e) {
    if (e.target.id === 'a_submit') {
      var id = this.props.currentQuestion.question_id
      axios.post(`/qa/questions/${id}/answers`, {
        body: this.state.answer,
        name: this.state.nickname,
        email: this.state.email,
        photos: []
      })
      .then(() => {
        this.props.onClick()
      })
      .then(() => {
        this.props.updateQaData(this.props.productInfo.name)
      })
      .catch((err) => {
        console.log(`error: ${err}`)
      })
    }
  }

  render() {
    return (
      <div className="answer_form">
      <form>
        <h2 className="answer_form_header">Submit Your Answer</h2>
        <h3 className="answer-form_subheader">{this.props.productInfo.name}: {this.props.currentQuestion.question_body}</h3>
        <label className="a_email_label">
          Email:&nbsp;&nbsp;
          <input
            className="a_email_input"
            type="email"
            maxLength="60"
            name="email"
            placeholder="person@email.com"
            value={this.state.email}
            onChange={this.handleChange}
            />
        </label>
        <label className="a_nickname_label">
          Nickname:&nbsp;&nbsp;
          <input
            className="a_nickname_input"
            type="text"
            maxLength="60"
            placeholder="Example: jack543!"
            name="nickname"
            value={this.state.nickname}
            onChange={this.handleChange}
            />
        </label>
        <label className="a_input_label">
          Question:
          <textarea
            className="answer_input"
            cols="75"
            rows="14"
            name="answer"
            placeholder="Why did you like the product or not?"
            value={this.state.answer}
            onChange={this.handleChange}>
          </textarea>
        </label>
        <button
          className="a_cancel"
          onClick={this.props.onClick}
          >Cancel
        </button>
        <button
          className="answer_submit"
          id="a_submit"
          onClick={(e) => this.handleAnswerSubmit(e)}
          >Submit
        </button>
      </form>
    </div>
    )
  }
}

export default AnswerForm;