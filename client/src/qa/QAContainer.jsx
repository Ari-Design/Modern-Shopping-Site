import React from 'react';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';

class QAContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qaData: this.props.data,
      productId: this.props.id
    }
  }

  render() {
    return (
      <div className="qa_container">
        <div>
          <Search />
        </div>
        <div>
          <QuestionList
            data={this.state.qaData}
          />
        </div>
        <div>
          <button className="question_button" id="MoreQuestions">MORE ANSWERED QUESTIONS</button>
          <button className="question_button" id="AddQuesion">ADD A QUESTION +</button>
        </div>
      </div>
    )
  }
}

export default QAContainer;
