import React from 'react';
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
      qListLength: 4,
      searchTerm: ''

    }
    this.handleMoreAnswers = this.handleMoreAnswers.bind(this);
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
    this.handleSearchInputChange =  this.handleSearchInputChange.bind(this);
  }

  componentDidMount(){
    // console.log('QA Container Mounted')
  }

  componentDidUpdate(prevProps) {
    if(prevProps.id !== this.props.id) {
      this.setState({
        allAnswers: false,
        moreAnswers: 'See More Answers',
        allQuestions: false,
        buttonLabel: 'MORE ANSWERED QUESTIONS',
        qListLength: 4
      })
    }
  }

  handleSearchInputChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleMoreQuestions(e) {
    if (this.state.allQuestions === false) {
      this.setState({
        allQuestions: true,
        qListLength: this.props.data.results.length,
        buttonLabel: 'FEWER QUESTIONS',
      })
    }
    if (this.state.allQuestions === true) {
      this.setState({
        allQuestions: false,
        qListLength: 4,
        buttonLabel: 'MORE ANSWERED QUESTIONS',
      })
    }
  }

  handleMoreAnswers() {
    if(this.state.allAnswers === false) {
      this.setState({
        moreAnswers: 'Close Answer Window',
        allAnswers: true
      })
    }
    if(this.state.allAnswers === true) {
      this.setState({
        moreAnswers: 'See More Answers',
        allAnswers: false
      })
    }
  }

  render() {
    return (
      <div className="qa_outer_container">
        <div className="qa_inner_container">
          <h4>QUESTIONS AND ANSWERS</h4>
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
              data={this.props.data}
              handleMoreAnswers={this.handleMoreAnswers}
              handleHandR={this.props.handleHandR}
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
