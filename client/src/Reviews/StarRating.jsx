import React from 'react';
import RatingStar from './RatingStar.jsx';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating : 0,
      selection: 0
    }
    this.onHover = this.onHover.bind(this);
    this.onClick = this.onClick.bind(this);
  }


  onHover (e) {
    this.setState({
      selection: e.target.className
    })
  }
  onClick (e) {
    this.setState({
      rating : e.target.className
    })
  }

  render () {
    return (
      <div
      onMouseOver={(e) => this.onHover(e)}
      onClick={(e) => this.onClick(e)}
      >
      {[1, 2, 3, 4, 5].map((star, i) => (
        <RatingStar id={star}
        key={star}
        full={this.state.selection ? this.state.selection >= i + 1 : this.state.rating >= i + 1} />
      )
    )}
    </div>
    )
  }
}
export default StarRating;