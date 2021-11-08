import React from 'react';

var StarRating = (props) => {
  return (
    <form>
      <span class="star_rating_review"></span>
        <input type="radio" id="rating_5" name="rating" value="5" />
    </form>
  )
}
export default StarRating;