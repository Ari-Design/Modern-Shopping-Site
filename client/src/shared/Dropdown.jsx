import React from 'react';
var Dropdown = ({title, optionsArr, onChange}) => {
  return (
    <>
      <select className={title} id={title} onChange={onChange}>
        {optionsArr.map((option) => {
          return <option onChange={onChange} value={option}>{option}</option>
        })}
      </select>
    </>
  )

}
export default Dropdown;