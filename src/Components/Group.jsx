import React from 'react'
import './Group.css'

const Group = ({groupName,groupShortName,selectedColor}) => {
  return (
    <div id='container1'>
        <ul id='list1'>
            <li className='listitem1'><span id='groupname1' style={{background:selectedColor}}>{groupShortName}</span>{groupName}</li>
        </ul>
    </div>
  )
}

export default Group