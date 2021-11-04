import React from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionForm from '../shared/forms/QuestionForm.jsx';
import AnswerForm from '../shared/forms/AnswerForm.jsx';


class QAContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qaData: this.props.data,
      productId: this.props.id,
      productInfo: this.props.productInfo,
      searchTerm: ''
    }
    this.handleSearchInputChange =  this.handleSearchInputChange.bind(this)
  }

  handleSearchInputChange(e) {
    this.setState({
      searchTerm: e.target.value
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
              key={this.state.qaData.product_id}
              data={this.state.qaData}
              handleHandR={this.props.handleHandR}
              openAnswerForm={this.props.openAnswerForm}
              term={this.state.searchTerm}
            />
          </div>
          <div>
            <QuestionForm
              productInfo={this.state.productInfo}
            />
          </div>
          <div>
            <AnswerForm />
          </div>
          <div>
            <button className="question_button" id="MoreQuestions">MORE ANSWERED QUESTIONS</button>
            <button className="question_button" id="AddQuesion">ADD A QUESTION +</button>
          </div>
        </div>
      </div>
    )
  }
}

export default QAContainer;
