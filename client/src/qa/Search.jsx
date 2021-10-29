import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state ={}
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search"></input>
      </div>
    )
  }
}

export default Search;