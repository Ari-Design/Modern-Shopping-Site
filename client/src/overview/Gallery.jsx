import React from 'react';
import Carousel from './Carousel.jsx';
import left_arrow from '../../../dist/assets/images/left_arrow.png';
import right_arrow from '../../../dist/assets/images/right_arrow.png';
import full_screen_icon from '../../../dist/assets/images/full-screen-icon.png';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: { url: '' },
      downShow: true,
      upShow: false,
      page: 0,
      pages: [[]],
      imgIndex: 0,

    };
    this.getNextPage = this.getNextPage.bind(this);
    this.getLastPage = this.getLastPage.bind(this);
    this.getNextImg = this.getNextImg.bind(this);
    this.getLastImg = this.getLastImg.bind(this);
    this.changeCurrentImg = this.changeCurrentImg.bind(this);
  }

  componentDidUpdate(prevProps) {
    var { style_id } = prevProps.currentStyle;
    var { currentStyle } = this.props;
    if (style_id !== currentStyle.style_id) {
      this.onUpdate();
    }
  }

  onUpdate() {
    var { page, imgIndex } = this.state;
    var index = 0;
    var myArray = this.props.currentStyle.photos;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += 7) {
      var myChunk = myArray.slice(index, index + 7);
      tempArray.push(myChunk);
    }

    this.setState({
      currentImg: tempArray[page][imgIndex] ? tempArray[page][imgIndex] : myArray[imgIndex],
      pages: tempArray,
      downShow: page > 0 && !tempArray[page + 1] ? false : tempArray.length > 1 ? true : false,
    });
  }

  getNextPage() {
    var { page, pages } = this.state;
    this.setState({
      downShow: pages[page + 2] ? true : false,
      upShow: true,
      page: page = page + 1,
    });
  }

  getLastPage() {
    var { page, pages } = this.state;
    this.setState({
      downShow: true,
      upShow: pages[page - 2] ? true : false,
      page: page = page - 1,
    });
  }

  getNextImg() {
    var { imgIndex, pages, page } = this.state;
    if (imgIndex >= pages[page].length - 1) {
      this.setState({
        currentImg: pages[page + 1][0],
        imgIndex: 0,
      });
      this.getNextPage();
    } else {
      this.setState({
        currentImg: pages[page][imgIndex + 1],
        imgIndex: imgIndex = imgIndex + 1,
      });
    }
  }

  getLastImg() {
    var { imgIndex, pages, page } = this.state;
    if (imgIndex <= 0) {
      this.setState({
        currentImg: pages[page - 1][pages[page - 1].length - 1],
        imgIndex: pages[page - 1].length - 1,
      });
      this.getLastPage();
    } else {
      this.setState({
        currentImg: pages[page][imgIndex - 1],
        imgIndex: imgIndex = imgIndex - 1,
      });
    }
  }

  changeCurrentImg(obj, index, page) {
    this.setState({
      currentImg: obj,
      imgIndex: index,
      page: page,
    });
  }

  render() {
    var { downShow, upShow, page, pages, currentImg, imgIndex } = this.state;
    return (
      <>
        <Carousel downArrow={downShow}
          upArrow={upShow}
          page={pages[page]}
          pageIndex={page}
          onClickLastPage={this.getLastPage}
          onClickNextPage={this.getNextPage}
          currentImg={currentImg}
          onClickCurrentImg={this.changeCurrentImg}
        />

        {imgIndex !== 0 || page !== 0 ? <img
          className="arrowLeft"
          onClick={this.getLastImg}
          src={left_arrow}
        /> : null}

        {imgIndex !== pages[page].length - 1 || page !== pages.length - 1 ? <img
          className="arrowRight"
          onClick={this.getNextImg}
          src={right_arrow}
        /> : null}

        <img className="fullscreen" src={full_screen_icon} onClick={() => { this.props.getCurrentImg(currentImg); this.props.openFullscreen('fullscreen'); }}/>
        <img className="media" onClick={() => { this.props.getCurrentImg(currentImg); this.props.openFullscreen('fullscreen'); }} src={currentImg.url}/>
      </>
    );
  }
};

export default Gallery;