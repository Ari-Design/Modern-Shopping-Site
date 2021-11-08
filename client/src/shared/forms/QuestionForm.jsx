import React from 'react';
import axios from 'axios';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question:'',
      email: '',
      nickname: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleQuestionSubmit(e) {
    if (e.target.id === 'q_submit') {
      axios.post('/qa/questions', {
        body: this.state.question,
        name: this.state.nickname,
        email: this.state.email,
        product_id: this.props.productInfo.id
      })
      .then((res) => {
        this.props.updateQaData(this.props.productInfo.id)
      })
      .catch((err) => {
        console.log(`error: ${err}`)
      })
    }
  }

  render() {
    return (
      <div className="question_form">
        <form >
          <h2 className="question_form_header">Ask Your Question About the {this.props.productInfo.name}</h2>
          <label className="q_email_label">
            Email:&nbsp;&nbsp;
            <input
              className="q_email_input"
              type="email"
              maxLength="60"
              placeholder="Why did you like the product or not?"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label className="q_nickname_label">
            Nickname:&nbsp;&nbsp;
            <input
              className="q_nickname_input"
              type="text"
              maxLength="60"
              placeholder="Example: jackson11!"
              name="nickname"
              value={this.state.nickname}
              onChange={this.handleChange}
            />
          </label>
          <label className="q_input_label">
            Question:
            <textarea
              className="question_input"
              cols="75"
              rows="14"
              name="question"
              value={this.state.question}
              onChange={this.handleChange}>
            </textarea>
          </label>
          <button onClick={this.props.onClick} className="q_cancel">Cancel</button>
          <button onClick={(e) => this.handleQuestionSubmit(e)} className="question_submit" id="q_submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default QuestionForm;