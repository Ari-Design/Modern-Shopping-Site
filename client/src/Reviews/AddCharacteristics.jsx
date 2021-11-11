import React from 'react';

class AddCharacteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      comfort: '',
      quality: '',
      length: '',
      fit: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  render () {
  return [['Size', 'Small', 'Perfect', 'Big'], ['Width', 'Narrow', 'Perfect', 'Wide'], ['Comfort', 'Uncomfortable', '', 'Perfect'], ['Quality', 'Low', '', 'High'], ['Length', 'Too Short', 'Perfect', 'Too Long'], ['Fit', 'Too Small', 'Perfect', 'Too Big']].map((factor) => {
    var characteristics = this.props.metaReviews.characteristics;
    if (characteristics[factor[0]]) {
    return (
      <div key={characteristics[factor[0]].id}>
        <label id={factor[0]}>{factor[0]}</label>
        <input type="range" id={factor[0].toLowerCase()} className="factor_range" min="0" max="5" step="1" onChange={this.handleChange}></input>
      </div>
    )
    }
  });
  }
}

export default AddCharacteristics;