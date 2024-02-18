import React from 'react'
import Colors from './Colors';
import './CreateNewGroup.css'
import { useState } from 'react';



const color=['#B38BFA','#FF79F2','#43E6FC','#F19576','#0047FF','#6691FF'];

const CreateNewGroup = ({ onAddGroup}) => {

  

  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [g, setG] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState('');

  // const handleClose = () => {
  //   onClose(); 
  // };


  

  const handleColorClick = (color) => {
    setSelectedColor(color);
    validateForm(groupName, color);
  };
  const handleInputChange = (e) => {
    const newGroupName = e.target.value;
    setGroupName(newGroupName);
    setG(generateShortName(newGroupName));
    validateForm(newGroupName, selectedColor);
  };

  const generateShortName = (groupName) => {
    return groupName.split(' ').map((word) => word.charAt(0)).join('').slice(0, 2).toUpperCase();
  };

  const validateForm = (groupName, color) => {
    const isNameValid = groupName.trim() !== '';
    const isColorSelected = color !== '';
    setIsFormValid(isNameValid && isColorSelected);

    if (!isNameValid) {
      setError('Please fill out the group name');
    } else if (!isColorSelected) {
      setError('Please choose a color');
    } else {
      setError('');
    }

  };

  const handleCreateGroup = () => {
    if (isFormValid) {
      const newGroup = { name: groupName, color: selectedColor, shortName: g };
      onAddGroup(newGroup);
      setGroupName('');
      setSelectedColor('');
      setIsFormValid(false);
    } else {
      setError('Please fill out all mandatory fields');
    }
  };
  return (
    <div id='box'>
        <p className='font'>Create New Group</p>
        <label htmlFor="gname" className='font'>Group Name&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder='Enter group name' name='gname' id='gname' value={groupName}  onChange={handleInputChange} />
        {/* {!isGroupNameValid && <span className="error">Please fill out this field</span>} Error message */}
        </label>
        <div id='dialoguebox'>
        <div id='choose' className='font'>Choose colour&nbsp;&nbsp;&nbsp;&nbsp;</div>
        {color.map((item)=><Colors col={item} key={item} onClick={handleColorClick} isSelected={selectedColor === item}/>)}
        </div>
        {error && <p style={{ color: 'red' ,display:'inline-block'}}>{error}</p>}
        <button id='btn' onClick={()=>{handleCreateGroup()}} disabled={!isFormValid}>Create</button>
    </div>
   
  )
}

export default CreateNewGroup;



