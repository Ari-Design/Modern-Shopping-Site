import React from 'react';

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
          Search Questions
        </div>
        <div>
          Questions List
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
