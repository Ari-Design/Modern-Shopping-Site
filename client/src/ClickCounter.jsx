import React from 'react';
class ClickCounter extends React.Component {
  constructor(props) {
    this.state = {
      click :
    }

  }
  handleChange (e) => {
    this.setState({
      element : e.target,
      time : Date.now()
    })
  }

  mapChildren () {

  }

  render () {

  }
}
export default ClickCounter;