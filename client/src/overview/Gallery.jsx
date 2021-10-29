import React from 'react';
import Carousel from './Carousel.jsx';
import left_arrow from '../../../dist/assets/images/left_arrow.png';
import right_arrow from '../../../dist/assets/images/right_arrow.png';
import full_screen_icon from '../../../dist/assets/images/full-screen-icon.png';
import down_arrow from '../../../dist/assets/images/down_arrow.png';

const styles = {
  arrowLeft: {
    width: 20,
    margin: 'auto',
    position: 'absolute',
    top: '302.75px',
    left: '15%'
  },
  arrowRight: {
    width: 20,
    margin: 'auto',
    position: 'absolute',
    top: '302.75px',
    left: '94%'
  },
  fullscreen: {
    width: 30,
    margin: 'auto',
    position: 'absolute',
    top: '4%',
    left: '93%'
  },
  arrowDown: {
    width: 20,
    margin: 'auto',
    position: 'absolute',
    top: '450px',
    left: '6.85%'
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

    return (
      <React.Fragment>
        <Carousel />
        <img style={styles.arrowLeft} src={left_arrow}></img>
        <img style={styles.arrowRight} src={right_arrow}></img>
        <img style={styles.fullscreen} src={full_screen_icon}></img>
        <img style={styles.arrowDown} src={down_arrow}></img>
        <img style={styles.media} src="https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"></img>
      </React.Fragment>
    );
  }
};

export default Gallery;