import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Content = () => {
  const { value, setValue, initialValue, setInitialValue } =
    useContext(AppContext)

  const [start, setStart] = useState(false)

  start
    ? useEffect(() => {
        const interval = setInterval(() => {
          setValue(value - 1)
        }, 1000)
        if (value === 0) {
          setStart(false)
          setValue(initialValue)
        }
        return () => clearInterval(interval)
      }, [value])
    : useEffect(() => {
        setValue(value)
      }, [start])

  let min = Math.floor(value / 60)
  let sec = value % 60
  if (sec < 10) {
    sec = '0' + sec
  }
  if (min < 10) {
    min = '0' + min
  }
  const setColor=()=>{
    if(initialValue===60*25){ return '#ff6669'}
    if(initialValue===60*5){ return '#26C6DA'}
    if(initialValue===60*15){ return '#397097'}
  }
  return (
    <div className='content'>
      <CircularProgressbar
        value={value}
        maxValue={initialValue}
        text={`${min}:${sec}`}
        strokeWidth={5}
        styles={buildStyles({
          textColor: '#ffffff',
          pathColor:setColor(),
          trailColor: '#0a0f1f',
        })}
      />
      <button style={{color:setColor()}} onClick={() => setStart(!start)}>
        {start ? 'PAUSE' : 'START'}
      </button>
    </div>
  )
}

export default Content
