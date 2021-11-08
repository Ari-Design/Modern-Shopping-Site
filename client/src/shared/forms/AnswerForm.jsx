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

  handleAnswerSubmit(e, callback) {
    var id = this.props.currentQuestion.question_id
    if (e.target.id === 'a_submit') {
      axios.post(`/qa/questions/${id}/answers`, {
        body: this.state.answer,
        name: this.state.nickname,
        email: this.state.email,
        photos: []
      })
      .then((res) => {
        callback
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
            placeholder="Why did you like the product or not?"
            name="email"
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
            placeholder="Example: jackson11!"
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
            value={this.state.answer}
            onChange={this.handleChange}>
          </textarea>
        </label>
        <button onClick={this.props.onClick} className="a_cancel">Cancel</button>
        <button onClick={(e) => this.handleAnswerSubmit(e, this.props.updateQaData(this.props.productInfo.id))} className="answer_submit" id="a_submit">Submit</button>
      </form>
    </div>
    )
  }
}

export default AnswerForm;