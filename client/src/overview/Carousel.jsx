import React from 'react';
import down_arrow from '../../../dist/assets/images/down_arrow.png';
import up_arrow from '../../../dist/assets/images/up_arrow.png';

const Carousel = ({ upArrow, onClickLastPage, page, onClickCurrentImg, currentImg, downArrow, onClickNextPage }) => {
  return (
    <ul className="vertical_carousel">
      {upArrow ? <img className="arrowUp"
        src={up_arrow}
        onClick={onClickLastPage}
      ></img> : null}

      {page.map((photo, index) => {
        var { thumbnail_url } = photo;
        return (
          <React.Fragment key={`photo ${index - 1}`}>
            <img
              className="thumbnail"
              onClick={() => onClickCurrentImg(photo)}
              src={thumbnail_url}
            ></img>
            {
              currentImg.thumbnail_url === thumbnail_url ? <div
                style={{ top: index > 0 ? `${15.35 + index / 5 * 100}%` : '15.35%' }}
                className="line"></div> : null
            }
          </React.Fragment>
        );
      })}

      {downArrow ? <img className="arrowDown"
        src={down_arrow}
        onClick={onClickNextPage}
      ></img> : null}
    </ul>
  );
};

export default Carousel;