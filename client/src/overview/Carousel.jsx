import React from 'react';
import down_arrow from '../../../dist/assets/images/down_arrow.png';
import up_arrow from '../../../dist/assets/images/up_arrow.png';

const Carousel = (props) => {
  return (
    <ul className="vertical_carousel">
      {props.upArrow ? <img className="arrowUp"
                        src={up_arrow}
                        onClick={props.onClickLastPage}
                      ></img> : null}

      {props.carouselPhotos.map(({ thumbnail_url }, index) => {
        if (index < 5) {
          return <img key={`photo ${index - 1}`} className="thumbnail" src={thumbnail_url}></img>;
        }
      })}

      {props.downArrow ? <img className="arrowDown"
                            src={down_arrow}
                            onClick={props.onClickNextPage}
                          ></img> : null}
    </ul>
  );
};

export default Carousel;