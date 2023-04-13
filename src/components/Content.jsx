import React, { useState, useEffect } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Content = () => {
  const [value, setValue] = useState(0);
  const [start, setStart] = useState(false);
 start?
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value+1);
    }, 1000);
    return () => clearInterval(interval);
  }, [value]): useEffect(() => {
    setValue(value)
  },[start])
 
  return (
    <div className="content">
    <CircularProgressbar value={value} maxValue={60} text={`${value} s`} strokeWidth={5} 
     styles={buildStyles({
          textColor: "#ffffff",
          pathColor: "#ff6669",
          trailColor: "#0a0f1f",
        })}/>
       <button onClick={()=>setStart(!start)}>PAUSE</button>
    </div>
  )
}

export default Content