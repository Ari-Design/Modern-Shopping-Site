import React from 'react';
import down_arrow from '../../../dist/assets/images/down_arrow.png';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotos: [1, 2, 3],
    };
  }
  render() {

    return (
      <ul className="vertical_carousel"> {
        this.state.currentPhotos.map(({ thumbnail_url }, index) => {
          if (index < 5) {
            return <img key={`photo ${index - 1}`} className="thumbnail" src={thumbnail_url}></img>;
          }
        })
      }
        <img className="arrowDown" src={down_arrow}></img>
      </ul>
    );
  }
};

export default Carousel;