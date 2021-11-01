import React from 'react';
import Carousel from './Carousel.jsx';
import left_arrow from '../../../dist/assets/images/left_arrow.png';
import right_arrow from '../../../dist/assets/images/right_arrow.png';
import full_screen_icon from '../../../dist/assets/images/full-screen-icon.png';

const styles = {
  media: {
    height: '100%',
    width: '100%',
    objectFit: 'scale-down',
    // position: 'absolute',
    // zIndex: '1',
  }
};

const Gallery = (props) => {
  return (
    <React.Fragment>
      <Carousel currentPhotos={props.currentStyle.photos} />
      <img className="arrowLeft" src={left_arrow}></img>
      <img className="arrowRight" src={right_arrow}></img>
      <img className="fullscreen" src={full_screen_icon}></img>
      <img style={styles.media} src={props.currentStyle.photos[0].url}></img>
    </React.Fragment>
  );
};

export default Gallery;