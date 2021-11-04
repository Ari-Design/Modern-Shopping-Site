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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  handleSubmit() {
    console.log('submitted')
    axios.post('/qa/questions/:question_id/answers', {
      question: this.state.question,
      email: this.state.email,
      nickname: this.state.nickname
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(`error: ${err}`)
    })
  }

  render() {
    return (
      <div>
        <form className="answer_form"onSubmit={this.handleSubmit}>
          <label className="a_email_label">
            Email:&nbsp;&nbsp;
            <input
              className="a_email_input"
              type="email"
              name="email"
              placeholder="Example: jack@email.com"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className="a_nickname_label">
            Nickname:&nbsp;&nbsp;
            <input
              className="a_nickname_input"
              type="text"
              name="nickname"
              placeholder="Example: jack543!"
              value={this.state.nickname}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className="a_input_label">
            Answer:
            <textarea
              className="answer_input"
              cols="75"
              rows="14"
              name="answer"
              value={this.state.question}
              onChange={this.handleChange}>
            </textarea>
          </label>
          <button className="a_cancel">Cancel</button>
          <input className="answer_submit" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AnswerForm;