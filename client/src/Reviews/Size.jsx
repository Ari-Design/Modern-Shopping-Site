import React from 'react';
var Size = ({characteristics}) => {
  console.log('characteristics > ', characteristics);
  return (
    <div>
      <span>Fit {characteristics.Fit.value} Length {characteristics.Length.value}</span>
      <svg width='100%' height='24px'>
        <g>
        <rect fill='#ebebeb' width='27%' height='8px' x='0%'></rect>
        <text x='0%' y='95%' fontSize='10'>Too small</text>
        <rect fill='#ebebeb' width='27%' height='8px'  x='33%'></rect>
        <text x='33%' y='95%' fontSize='10'>Perfect</text>
        <rect fill='#ebebeb' width='27%' height='8px'  x='66%'></rect>
        <text x='66%' y='95%' fontSize='10'>Too large</text>
        </g>
      </svg>
    </div>
  )
}
export default Size;