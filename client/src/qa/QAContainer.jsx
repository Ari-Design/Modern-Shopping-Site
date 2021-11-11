import React from 'react';
import axios from 'axios'
import QuestionList from './QuestionList.jsx';
import QuestionForm from '../shared/forms/QuestionForm.jsx';
import AnswerForm from '../shared/forms/AnswerForm.jsx';


class QAContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: false,
      moreAnswers: 'See More Answers',
      allQuestions: false,
      buttonLabel: 'MORE ANSWERED QUESTIONS',
      qListLength: 2,
      searchTerm: ''

    }
    this.handleMoreAnswers = this.handleMoreAnswers.bind(this);
    this.handleQaHelpful = this.handleQaHelpful.bind(this);
    this.handleQaReport = this.handleQaReport.bind(this);
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
    this.handleSearchInputChange =  this.handleSearchInputChange.bind(this);
  }

  componentDidMount(){
    // console.log('QA Container Mounted')
  }

  componentDidUpdate(prevProps, prevState) {

    if(prevProps.id !== this.props.id) {
      this.setState({
        allAnswers: false,
        moreAnswers: 'See More Answers',
        allQuestions: false,
        buttonLabel: 'MORE ANSWERED QUESTIONS',
        qListLength: 2,
        listClass: 'q_list'
      })
    }
    if(prevProps.data != this.props.data)
      this.setState({
        allAnswers: prevState.allAnswers
      })
  }

  handleSearchInputChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleQaHelpful(url, data, id) {
    axios.put(url, data)
      .then((res) => {
        console.log('HELPFUL FUNCTION TRIGGERED')
        this.props.updateQaData(id)
      })
      .catch((err) => {
        console.log(`error: ${err}`)
      })
  }

  handleQaReport(url, data) {
    axios.put(url, data)
      .then((res) => {
        console.log('HELPFUL FUNCTION TRIGGERED')
      })
      .catch((err) => {
        console.log(`error: ${err}`)
      })
  }

  handleMoreQuestions(e) {
    if (this.state.allQuestions === false) {
      this.setState({
        allQuestions: true,
        qListLength: this.props.data.results.length,
        buttonLabel: 'FEWER QUESTIONS',
        listClass: 'question_scroll'
      })
    }
    if (this.state.allQuestions === true) {
      this.setState({
        allQuestions: false,
        qListLength: 2,
        buttonLabel: 'MORE ANSWERED QUESTIONS',
        listClass: 'q_list'
      })
    }
  }

  handleMoreAnswers(question) {
    if(!this.state.allAnswers) {
      this.setState({
        allAnswers: true
      })
    }
    if(this.state.allAnswers && question == this.props.currentQuestion) {
      this.setState({
        allAnswers: false
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
              onChange={this.handleSearchInputChange}
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS...">
            </input>
          </div>
          <div>
            <QuestionList
              allAnswers={this.state.allAnswers}
              currentQuestion={this.props.currentQuestion}
              data={this.props.data}
              handleMoreAnswers={this.handleMoreAnswers}
              handleQaHelpful={this.handleQaHelpful}
              handleQaReport={this.handleQaReport}
              key={this.props.data.product_id}
              moreAnswers={this.state.moreAnswers}
              openAnswerForm={this.props.openAnswerForm}
              qListLength={this.state.qListLength}
              selectQuestion={this.props.selectQuestion}
              term={this.state.searchTerm}
              updateQaData={this.props.updateQaData}
            />
          </div>
          <div>
            <button
              onClick={(e) => this.handleMoreQuestions(e)}
              className="question_button"
              id="MoreQuestions">
              {this.state.buttonLabel}
            </button>
            <button onClick={() => this.props.openAnswerForm('questionForm')} className="question_button" id="AddQuesion">ADD A QUESTION +</button>
          </div>
        </div>
      </div>
    )
  }
}

export default QAContainer;
