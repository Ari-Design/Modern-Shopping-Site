import React from 'react';
import down_arrow from '../../../dist/assets/images/down_arrow.png';
import up_arrow from '../../../dist/assets/images/up_arrow.png';

const Carousel = ({ upArrow, onClickLastPage, page, onClickCurrentImg, currentImg, downArrow, onClickNextPage, pageIndex }) => {
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
              onClick={() => onClickCurrentImg(photo, index, pageIndex)}
              src={thumbnail_url}
            ></img>
            {
              currentImg.thumbnail_url === thumbnail_url ? <div
                style={{ top: index > 0 ? `${12.65 + index / 7 * 100}%` : '12.65%' }}
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