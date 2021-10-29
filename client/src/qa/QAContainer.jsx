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
      <div>
        <div>
          <Search />
        </div>
        <div>
          <QuestionList
            data={this.state.qaData}
          />
        </div>
        <div>
          <button>More Answered Questions</button>
          <button>Add a Question</button>
        </div>
      </div>
    )
  }
}

export default QAContainer;
