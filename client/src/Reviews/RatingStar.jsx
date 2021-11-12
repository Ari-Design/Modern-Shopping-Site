import React from 'react';
var RatingStar = ({full, id}) => {
  return (
    <span className={id}>{full ? '\u2605' : '\u2606'}</span>
  );
}
export default RatingStar;