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

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotos: [],
      downShow: true, //change this
      page: 0,
      upShow: false,
    };
    this.getNext = this.getNext.bind(this);
    this.getLast = this.getLast.bind(this);
  }
  componentDidMount() {
    var index = 0;
    var myArray = this.props.currentStyle.photos;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += 5) {
      var myChunk = myArray.slice(index, index + 5);
      tempArray.push(myChunk);
    }

    this.setState({
      currentPhotos: tempArray[0],
      pages: tempArray,
      downShow: tempArray.length > 1 ? true : false,
    });
  }

  getNext() {
    this.setState({
      currentPhotos: this.state.pages[this.state.page + 1],
      downShow: this.state.pages[this.state.page + 2] ? true : false,
      upShow: true,
      page: this.state.page = this.state.page + 1,
    });
  }
  getLast() {
    this.setState({
      currentPhotos: this.state.pages[this.state.page - 1],
      downShow: true,
      upShow: this.state.pages[this.state.page - 2] ? true : false,
      page: this.state.page = this.state.page - 1,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Carousel downArrow={this.state.downShow}
          upArrow={this.state.upShow}
          currentPhotos={this.state.currentPhotos}
          onClickLast={this.getLast}
          onClickNext={this.getNext}
        />
        <img className="arrowLeft" src={left_arrow}></img>
        <img className="arrowRight" src={right_arrow}></img>
        <img className="fullscreen" src={full_screen_icon}></img>
        <img style={styles.media} src={this.props.currentStyle.photos[0].url}></img>
      </React.Fragment>
    );
  }
};

export default Gallery;