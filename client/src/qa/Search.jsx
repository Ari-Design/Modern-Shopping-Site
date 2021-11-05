import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      searchTerm: ''
    }
    this.handleInputChange =  this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="qa_search_placement">
        <input
          className="question_search"
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS...">
        </input>
      </div>
    )
  }
}

