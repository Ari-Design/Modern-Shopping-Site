import React from 'react';
import moment from 'moment';

class Answer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answerHelpful: false,
      reportAnswer: false
    }
    this.handleAnswerHelpful = this.handleAnswerHelpful.bind(this);
    this.handleReportAnswer = this.handleReportAnswer.bind(this);
  }

  handleAnswerHelpful() {
    this.setState({
      answerHelpful: true
    })
  }

  handleReportAnswer() {
    this.setState({
      reportAnswer: true
    })
  }

  render () {
    return (
      <div className="answer_component">
        <div className="answer">
          {this.props.answers.indexOf(this.props.answer) === 0 ? <span className="answer_label">A:</span> : null}
          <span className="answer_body">{this.props.answer.body}</span>
        </div>
        <div className="answer_info_line">
          <div className="answer_info">
            <span
              className="answerer_name"
              >by {this.props.answer.answerer_name}, &nbsp;{moment(this.props.answer.date).format("MMMM Do, YYYY")}&nbsp;&nbsp;&nbsp;
            </span>
            <span className="divider">|</span>
            {this.state.answerHelpful === false ?
            <span
              className="answer_helpfulness"
              >&nbsp;&nbsp;&nbsp;Helpful? &nbsp;
              <span
                className="link_word"
                onClick={() => {this.props.handleQaHelpful(`/qa/answers/${this.props.answer.id}/helpful`, { "helpfulness": this.props.answer.helpfulness }, this.props.productId); this.handleAnswerHelpful()}}
                > Yes
              </span>
              &nbsp;{`(${this.props.answer.helpfulness})`}&nbsp;&nbsp;&nbsp;
            </span> :
            <span
              className="helpful"
              >&nbsp;&#9989;&nbsp; Helpful &nbsp;{`(${this.props.answer.helpfulness})`}&nbsp;
            </span>}
            <span className="divider">|</span>
            {this.state.reportAnswer === false ?
            <span
              className="report_answer"
              >&nbsp;&nbsp;&nbsp;
              <span className="link_word report"
                onClick={() => {this.props.handleQaReport(`/qa/answers/${this.props.answer.id}/report`, { "reported": true }, this.props.productId); this.handleReportAnswer()}}
                >Report
              </span>
            </span> :
            <span
              className="reported"
              > &nbsp;Reported &nbsp;&#128681;
           </span>}
          </div>
        </div>
      </div>
    )
  }
}

export default Answer;




