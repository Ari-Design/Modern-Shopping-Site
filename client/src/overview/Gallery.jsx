import React from 'react';
import Carousel from './Carousel.jsx';

const styles = {
  thumbnail: {
    width: 300,
    margin: 'auto'
  },
  media: {
    height: '100%',
    width: '100%',
    objectFit: 'scale-down',
    gridArea: '1/1/1/1',
    // position: 'absolute',
    // zIndex: '1',
  }
};

class Gallery extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (<React.Fragment>
      <Carousel />
      <img style={styles.media} src="https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"></img>
      </React.Fragment>
    );
  }
};

export default Gallery;