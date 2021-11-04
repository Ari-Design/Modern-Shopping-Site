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
      pages: [[]],
      imgIndex: '',

    };
    this.getNextPage = this.getNextPage.bind(this);
    this.getLastPage = this.getLastPage.bind(this);
    this.getNextImg = this.getNextImg.bind(this);
    this.getLastImg = this.getLastImg.bind(this);
    this.changeCurrentImg = this.changeCurrentImg.bind(this);
  }
  componentDidMount() {
    this.onUpdate();
  }

  componentDidUpdate(prevProps) {
    var {name} = prevProps.currentStyle;
    var {currentStyle} = this.props;
    if (name !== currentStyle.name) {
      this.onUpdate();
    }
  }

  onUpdate() {
    var index = 0;
    var myArray = this.props.currentStyle.photos;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += 5) {
      var myChunk = myArray.slice(index, index + 5);
      tempArray.push(myChunk);
    }

    this.setState({
      carouselPhotos: myArray,
      currentImg: myArray[0],
      pages: tempArray,
      downShow: tempArray.length > 1 ? true : false,
      imgIndex: 0,
    });
  }

  getNextPage() {
    var {page, pages} = this.state;
    this.setState({
      downShow: pages[page + 2] ? true : false,
      upShow: true,
      page: page = page + 1,
    });
  }
  getLastPage() {
    var {page, pages} = this.state;
    this.setState({
      downShow: true,
      upShow: pages[page - 2] ? true : false,
      page: page = page - 1,
    });
  }

  getNextImg() {
    var {imgIndex, carouselPhotos} = this.state;
    if (imgIndex < carouselPhotos.length - 1) {
      this.setState({
        currentImg: carouselPhotos[imgIndex + 1],
        imgIndex: imgIndex = imgIndex + 1,
      });
    }
  }

  getLastImg() {
    var {imgIndex, carouselPhotos} = this.state;
    if (imgIndex > 0) {
      this.setState({
        currentImg: carouselPhotos[imgIndex - 1],
        imgIndex: imgIndex = imgIndex - 1,
      });
    }
  }

  changeCurrentImg(obj) {
    this.setState({
      currentImg: obj
    });
  }

  render() {
    var {downShow, upShow, page, pages, currentImg} = this.state;
    return (
      <>
        <Carousel downArrow={downShow}
          upArrow={upShow}
          page={pages[page]}
          onClickLastPage={this.getLastPage}
          onClickNextPage={this.getNextPage}
          currentImg={currentImg}
          onClickCurrentImg={this.changeCurrentImg}
        />

        <img className="arrowLeft"
        onClick={this.getLastImg}
        src={left_arrow}
        ></img>

        <img className="arrowRight"
          onClick={this.getNextImg}
          src={right_arrow}
        ></img>

        <img className="fullscreen" src={full_screen_icon} onClick={() => {this.props.getCurrentImg(currentImg); this.props.openFullscreen('fullscreen');}}></img>
        <img style={styles.media} src={currentImg.url}></img>
      </>
    );
  }
};

export default Gallery;