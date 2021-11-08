import React from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionForm from '../shared/forms/QuestionForm.jsx';
import AnswerForm from '../shared/forms/AnswerForm.jsx';


class QAContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      qListLength: 4,
      buttonLabel: 'MORE ANSWERED QUESTIONS',
      allQuestions: false
    }
    this.handleSearchInputChange =  this.handleSearchInputChange.bind(this);
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
  }

  componentDidMount(){
    // console.log('QA Container Mounted')
  }

  componentDidUpdate() {
    // console.log('QA Container Updated')
  }

  handleSearchInputChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleMoreQuestions(e) {
    if (e.target.id === 'MoreQuestions' && this.state.buttonLabel === 'MORE ANSWERED QUESTIONS') {
      this.setState({
        qListLength: this.props.data.results.length,
        buttonLabel: 'FEWER QUESTIONS',
      })
    }
    if (e.target.id === 'MoreQuestions' && this.state.buttonLabel === 'FEWER QUESTIONS') {
      this.setState({
        qListLength: 4,
        buttonLabel: 'MORE ANSWERED QUESTIONS',
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
              key={this.props.data.product_id}
              data={this.props.data}
              handleHandR={this.props.handleHandR}
              selectQuestion={this.props.selectQuestion}
              openAnswerForm={this.props.openAnswerForm}
              term={this.state.searchTerm}
              qListLength={this.state.qListLength}
              updateQaData={this.props.updateQaData}
            />
          </div>
          <div>
            <button onClick={(e) => this.handleMoreQuestions(e)} className="question_button" id="MoreQuestions">{this.state.buttonLabel}</button>
            <button onClick={() => this.props.openAnswerForm('questionForm')} className="question_button" id="AddQuesion">ADD A QUESTION +</button>
          </div>
        </div>
      </div>
    )
  }
}

export default QAContainer;
