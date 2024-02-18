import React from 'react'
import dot from '../Images/dot.png'
import './Time.css'

const Time = () => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d=new Date();
    const date=d.getDate();
    const month=months[d.getMonth()];
    const year=d.getFullYear();
    const hours=d.getHours();
    const minutes=d.getMinutes();
    const Meridiem= (hours > 0 && hours < 11) ? 'AM' : 'PM';

  return (
    <>
    <b id='date'>{date+' '+month+' '+year}&nbsp;&nbsp;&nbsp;&nbsp;<img src={dot} alt='dot' id='dot'></img>&nbsp;&nbsp;&nbsp;&nbsp;{hours+':'+minutes+' '+Meridiem}</b>
    </>
  )
}

export default Time;


