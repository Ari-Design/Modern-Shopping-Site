import React from 'react';
var Dropdown = ({title, optionsArr}) => {
  return (
    <>
      <select name={title} id={title}>
        {optionsArr.map((option) => {
          return <option value={option}>{option}</option>
        })}
      </select>
    </>
  )

}
export default Dropdown;