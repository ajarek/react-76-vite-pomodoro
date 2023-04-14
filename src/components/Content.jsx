import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Content = () => {
  const {value, setValue,initialValue,setInitialValue } = useContext(AppContext)
  
  const [start, setStart] = useState(false);
  
  

 start?
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value-1);
      
    }, 1000);
     if(value===0){setStart(false);setValue(initialValue)}
    return () => clearInterval(interval);
  }, [value]): useEffect(() => {
    setValue(value)
  },[start])

 

  return (
    <div className="content">
    <CircularProgressbar value={value} maxValue={initialValue} text={`${value} s`} strokeWidth={5} 
     styles={buildStyles({
          textColor: "#ffffff",
          pathColor: "#ff6669",
          trailColor: "#0a0f1f",
        })}/>
       <button onClick={()=>setStart(!start)}>{start?"PAUSE":'START'}</button>
    </div>
  )
}

export default Content