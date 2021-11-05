import React from 'react';
var Dropdown = ({title, optionsArr, onChange, disabled = false}) => {
  return (
    <>
      <select disabled={disabled} key={title} className={title} id={title} onChange={onChange}>
        {optionsArr.map((option) => {
          return <option key={option} value={option}>{option}</option>
        })}
      </select>
    </>
  )

}
export default Dropdown;