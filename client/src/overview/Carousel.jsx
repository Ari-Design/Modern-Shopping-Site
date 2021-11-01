import React from 'react';
import down_arrow from '../../../dist/assets/images/down_arrow.png';

const styles = {
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
    top: '4.5%',
    left: '93%'
  },
  arrowDown: {
    width: 20,
    right: '400px'
  },
  media: {
    height: '100%',
    width: '100%',
    objectFit: 'scale-down',
    // position: 'absolute',
    // zIndex: '1',
  }
};

const Carousel = () => {


  return (
    <ul className="vertical_carousel">
      <img className="thumbnail"></img>
      <img className="thumbnail"></img>
      <img className="thumbnail"></img>
      <img className="thumbnail"></img>
      <img className="thumbnail"></img>
      <img style={styles.arrowDown} src={down_arrow}></img>
    </ul>
  );
};

export default Carousel;