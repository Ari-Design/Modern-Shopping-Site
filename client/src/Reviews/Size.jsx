import React from 'react';
var Size = ({sizeScore}) => {
  return (
    <div>
      <span>Size</span>
      <svg width='100%' height='8px'>
        <rect fill='#ebebeb' width='27%' height='8px' x='0%'></rect>
        <rect fill='#ebebeb' width='27%' height='8px'  x='33%'></rect>
        <rect fill='#ebebeb' width='27%' height='8px'  x='66%'></rect>
      </svg>
    </div>
  )
}
export default Size;