import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state ={}
  }

  render() {
    return (
      <div>
        <input id="question_search" type="text" placeholder="   HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
      </div>
    )
  }
}

export default Search;