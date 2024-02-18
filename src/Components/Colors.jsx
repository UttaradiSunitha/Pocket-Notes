import React from 'react';
import "./Colors.css";

const Colors = ({col,onClick,isSelected}) => {

  const handleClick = () => {
    onClick(col);
    
  };

  return (
    <li className={`color ${isSelected ? 'selected' : ''}`}  style={{backgroundColor:col}} onClick={handleClick} ></li>
    
  )
}

export default Colors;

 