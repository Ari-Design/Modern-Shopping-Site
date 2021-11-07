import React from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionForm from '../shared/forms/QuestionForm.jsx';
import AnswerForm from '../shared/forms/AnswerForm.jsx';


class QAContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      currentQuestion: null
    }
    this.handleSearchInputChange =  this.handleSearchInputChange.bind(this);
    this.selectQuestion= this.selectQuestion.bind(this);
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

  selectQuestion(question) {
    this.setState({
      currentQuestion: question
    })
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
              selectQuestion={this.selectQuestion}
              openAnswerForm={this.props.openAnswerForm}
              term={this.state.searchTerm}
            />
          </div>
          <div>
            <button className="question_button" id="MoreQuestions">MORE ANSWERED QUESTIONS</button>
            <button onClick={() => this.props.openAnswerForm('questionForm')} className="question_button" id="AddQuesion">ADD A QUESTION +</button>
          </div>
        </div>
      </div>
    )
  }
}

export default QAContainer;
