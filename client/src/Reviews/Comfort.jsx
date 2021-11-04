import React from 'react';
var Comfort = ({comfortScore}) => {
  return (
    <div>
      <span>Comfort</span>
      <svg width='100%' height='24px'>
        <rect fill='#ebebeb' width='27%' height='8px' ></rect>
        <text x='0%' y='95%' fontSize='10'>Poor</text>
        <rect fill='#ebebeb' width='27%' height='8px'  x='33%'></rect>
        <rect fill='#ebebeb' width='27%' height='8px'  x='66%'></rect>
        <text x='66%' y='95%' fontSize='10'>Perfect</text>
      </svg>
    </div>
  )
}
export default Comfort;