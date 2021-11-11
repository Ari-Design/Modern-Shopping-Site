import React from 'react';
import AnswerList from './AnswerList.jsx';

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ansExpand: false,
      helpful: false,
      report: false
    }
    this.handleReSize = this.handleReSize.bind(this);
    this.handleQuestionHelpful = this.handleQuestionHelpful.bind(this);
    this.handleQuestionReport = this.handleQuestionReport.bind(this);
  }

  handleReSize () {
    this.setState({
      ansExpand: !this.state.ansExpand
    })
  }

  handleQuestionHelpful () {
    this.setState({
      helpful: true
    })
  }

  handleQuestionReport () {
    this.setState({
      report: true
    })
  }

// ({ allAnswers, currentQuestion, handleHandR, handleMoreAnswers, moreAnswers, openAnswerForm, productId, question, selectQuestion, updateQaData })

  render () {
    return (
      <div className="qa_component">
        <div className="question">
          <span className="question_label">Q:</span>
          <span className="question_body">
            {this.props.question.question_body}
          </span>
          <span className="question_options">
            {this.state.helpful === false ?
            <span className="question_helpfulness">
              Helpful&nbsp;&nbsp;
              <span
                className="link_word"
                onClick={(e) => {this.props.handleQaHelpful(`/qa/questions/${this.props.question.question_id}/helpful`, { "question_helpfulness": this.props.question.question_helpfulness }, this.props.productId); this.handleQuestionHelpful()}}
                >Yes
              </span> {`(${this.props.question.question_helpfulness})`}&nbsp;&nbsp;&nbsp;
            </span> :
            <span
              className="helpful"
              >&#9989;&nbsp;Helpful &nbsp;{`(${this.props.question.question_helpfulness})`}&nbsp;
            </span>}
            <span className="divider">|</span>
            <span className="add_answer">
              &nbsp;&nbsp;&nbsp;
              <span
                className="link_word"
                onClick={()=> {this.props.openAnswerForm('answerForm'); this.props.selectQuestion(this.props.question) }}
              >Add Answer
              </span>
              <span>&nbsp;&nbsp;&nbsp;</span>
            </span>
            <span className="divider">|</span>
            <span className="report_question">
              <span>&nbsp;&nbsp;&nbsp;</span>
              {(this.state.report === false) ?
              <span
                className="link_word report"
                onClick={(e) => {this.props.handleQaReport(`/qa/questions/${this.props.question.question_id}/report`, { "reported": true }); this.handleQuestionReport()}}
                >Report
              </span> :
              <span
                className="reported"
                >Reported &nbsp;&#128681;
              </span>}
            </span>
          </span>
        </div>
        <div>
          <AnswerList
            allAnswers={this.props.allAnswers}
            answers={this.props.question.answers}
            ansExpand={this.state.ansExpand}
            currentQuestion={this.props.currentQuestion}
            handleQaHelpful={this.props.handleQaHelpful}
            handleQaReport={this.props.handleQaReport}
            key={`ANS-${this.props.question.question_id}`}
            moreAnswers={this.props.moreAnswers}
            productId={this.props.productId}
            question={this.props.question}
            qId={this.props.question.question_id}
            updateQaData={this.props.updateQaData}
          />
        </div>
        {(this.state.ansExpand) ?
          <h4
            className="answer_window"
            onClick={() => this.handleReSize()}
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Collapse Answers
          </h4> : (Object.keys(this.props.question.answers).length > 2) ?
          <h4
            className="more_answers"
            onClick={() => this.handleReSize()}
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See More Answers
          </h4> : null}
      </div>
    )
  }
}

export default Question;


