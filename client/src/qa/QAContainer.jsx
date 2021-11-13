import React from 'react';
import axios from 'axios'
import QuestionList from './QuestionList.jsx';
import QuestionForm from '../shared/forms/QuestionForm.jsx';
import AnswerForm from '../shared/forms/AnswerForm.jsx';


class QAContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonLabel: 'MORE QUESTIONS',
      qListLength: 4,
      searchTerm: ''
    }
    this.handleQaHelpful = this.handleQaHelpful.bind(this);
    this.handleQaReport = this.handleQaReport.bind(this);
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
    this.handleSearchInputChange =  this.handleSearchInputChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.id !== this.props.id) {
      this.setState({
        buttonLabel: 'MORE QUESTIONS',
        qListLength: 4,
      })
    }
  }

  handleSearchInputChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleQaHelpful(url, data, id) {
    axios.put(url, data)
      .then((res) => {
        this.props.updateQaData(id)
      })
      .catch((err) => {
        console.log(`error: ${err}`)
      })
  }

  handleQaReport(url, data) {
    axios.put(url, data)
      .then((res) => {
        console.log('Success')
      })
      .catch((err) => {
        console.log(`error: ${err}`)
      })
  }

  handleMoreQuestions(e) {
    if (this.state.qListLength === 4) {
      this.setState({
        qListLength: this.props.data.results.length,
        buttonLabel: 'FEWER QUESTIONS',
      })
    }
    if (this.state.qListLength > 4) {
      this.setState({
        qListLength: 4,
        buttonLabel: 'MORE QUESTIONS',
      })
    }
  }

  render() {
    return (
      <div className="qa_outer_container">
        <div className="qa_inner_container">
          <h4 className="qa_header">QUESTIONS AND ANSWERS</h4>
          <div className="qa_search_placement">
            <input
              className="question_search"
              type="text"
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
              onChange={this.handleSearchInputChange}>
            </input>
          </div>
          <div>
            <QuestionList
              data={this.props.data}
              handleQaHelpful={this.handleQaHelpful}
              handleQaReport={this.handleQaReport}
              key={this.props.data.product_id}
              openAnswerForm={this.props.openAnswerForm}
              qListLength={this.state.qListLength}
              selectQuestion={this.props.selectQuestion}
              term={this.state.searchTerm}
            />
          </div>
          <div>
            <button
              className="question_button"
              id="MoreQuestions"
              onClick={(e) => this.handleMoreQuestions(e)}>
              {this.state.buttonLabel}
            </button>
            <button
              className="question_button"
              id="AddQuesion"
              onClick={() => this.props.openAnswerForm('questionForm')}
              >ADD A QUESTION +
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default QAContainer;
