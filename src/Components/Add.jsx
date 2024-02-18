import React from 'react'
import './Add.css'

const Add = ({onClick}) => {
  return (
    <div id='Add' onClick={onClick}>
        <div id='plus' >+</div>
    </div>
  )
}

export default Add;

