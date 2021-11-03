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
      carouselPhotos: [],
      currentImg: { url: '' },
      downShow: true, //change this
      upShow: false,
      page: 0,
      imgIndex: '',
      allPhotos: this.props.currentStyle.photos,

    };
    this.getNextPage = this.getNextPage.bind(this);
    this.getLastPage = this.getLastPage.bind(this);
    this.getNextImg = this.getNextImg.bind(this);
    this.getLastImg = this.getLastImg.bind(this);
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
      carouselPhotos: tempArray[0],
      currentImg: tempArray[0][0],
      pages: tempArray,
      downShow: tempArray.length > 1 ? true : false,
      imgIndex: 0,
    });
  }

  getNextPage() {
    this.setState({
      carouselPhotos: this.state.pages[this.state.page + 1],
      downShow: this.state.pages[this.state.page + 2] ? true : false,
      upShow: true,
      page: this.state.page = this.state.page + 1,
    });
  }
  getLastPage() {
    this.setState({
      carouselPhotos: this.state.pages[this.state.page - 1],
      downShow: true,
      upShow: this.state.pages[this.state.page - 2] ? true : false,
      page: this.state.page = this.state.page - 1,
    });
  }

  getNextImg() {
    if (this.state.imgIndex < 4) {
      this.setState({
        currentImg: this.state.carouselPhotos[this.state.imgIndex + 1],
        imgIndex: this.state.imgIndex = this.state.imgIndex + 1,
      });
    }
  }

  getLastImg() {
    if (this.state.imgIndex > 0) {
      this.setState({
        currentImg: this.state.carouselPhotos[this.state.imgIndex - 1],
        imgIndex: this.state.imgIndex = this.state.imgIndex - 1,
      });
    }
  }

  render() {
    return (
      <>
        <Carousel downArrow={this.state.downShow}
          upArrow={this.state.upShow}
          carouselPhotos={this.state.carouselPhotos}
          onClickLastPage={this.getLastPage}
          onClickNextPage={this.getNextPage}
        />

        <img className="arrowLeft"
        onClick={this.getLastImg}
        src={left_arrow}
        ></img>

        <img className="arrowRight"
          onClick={this.getNextImg}
          src={right_arrow}
        ></img>

        <img className="fullscreen" src={full_screen_icon}></img>
        <img style={styles.media} src={this.state.currentImg.url}></img>
      </>
    );
  }
};

export default Gallery;