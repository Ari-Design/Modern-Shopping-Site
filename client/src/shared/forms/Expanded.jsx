import React from 'react';
import right_arrow from '../../../../dist/assets/images/right_arrow.png';
import left_arrow from '../../../../dist/assets/images/left_arrow.png';


class Expanded extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: true };

    this.changeImg = this.changeImg.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeCurrentImg = this.changeCurrentImg.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  update() {
    var { img, pages } = this.props;
    var p;
    var index;
    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      for (var j = 0; j < page.length; j++) {
        var photo = page[j];
        if (photo.url === img.url) {
          p = i;
          index = j;
          break;
        }
      }
    }
    this.setState({
      currentImg: img,
      page: p,
      index: index,
      downShow: index < pages[pages.length - 1].length - 1 ? true : false,
      upShow: index === 0 && page === 0 ? false : true,
      pages: pages,
    })
  }

  changePage(down = true) {
    var { page, pages } = this.state;
    if (down) {
      this.setState({
        downShow: pages[page + 2] ? true : false,
        upShow: true,
        page: page = page + 1,
      });
    } else {
      this.setState({
        downShow: true,
        upShow: pages[page - 2] ? true : false,
        page: page = page - 1,
      });
    }
  }

  changeImg(down = true) {
    var { index, pages, page } = this.state;
    if (down ? index >= pages[page].length - 1 : index <= 0) {
      this.setState({
        currentImg: down ? pages[page + 1][0] : pages[page - 1][pages[page - 1].length - 1],
        index: down ? 0 : pages[page - 1].length - 1,
      });
      this.changePage(down);
    } else {
      down ? down = 1 : down = - 1;
      this.setState({
        currentImg: pages[page][index + down],
        index: index = index + down,
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

  onMouseMove(event) {
    const img = document.getElementsByClassName("zoom")[0];
    const el = document.getElementById("zoom");
    img.addEventListener("mousemove", (e) => {
      el.style.backgroundPositionX = e.offsetX / e.target.offsetWidth * 100 + "%";
      el.style.backgroundPositionY = e.offsetY / e.target.offsetHeight * 100 + "%";
    });
  }

  render() {
    var { currentImg = { url: '' }, downShow, index, pages = [[]], page = 0, upShow, active } = this.state;
    return (
      <>
        {index !== 0 || page !== 0 ? <img className="arrowLeft" onClick={() => this.changeImg(false)} src={left_arrow} /> : null}
        <div className='z_container'>
          <img className='zoom' src={currentImg.url}></img>
        </div>

        {active ? <div id="zoom" style={{ backgroundImage: `url(${currentImg.url})` }} onMouseMove={this.onMouseMove}></div> : null}

        {index !== pages[page].length - 1 || page !== pages.length - 1 ? <img className="arrowRight" onClick={this.changeImg} src={right_arrow} /> : null}

        <div className='horizontal_carousel'>
          {pages[page].map((photo, i) => {
            return (
              <div className="minis" id={'photo' + i} key={'photo' + i} onClick={() => this.changeCurrentImg(photo, i, page)}>
                {currentImg.url === photo.url ?
                  <div className="mini" /> : null}
              </div>
            )
          })}
        </div>
      </>
    );
  }
}

export default Expanded;


