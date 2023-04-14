import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const bell = new Audio('/bell.mp3')
const Content = () => {
  const {
    value,
    setValue,
    initialValue,
    setInitialValue,
    pomodoro,
    setPomodoro,
    short,
    setShort,
    long,
    setLong,
  } = useContext(AppContext)

  const [start, setStart] = useState(false)

  start
    ? useEffect(() => {
        const interval = setInterval(() => {
          setValue(value - 1)
        }, 1000)
        if (value === 0) {
          setStart(false)
          setValue(initialValue)
          bell.play()
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
  const setColor = () => {
    if (initialValue === pomodoro) {
      return '#ff6669'
    }
    if (initialValue === short) {
      return '#26C6DA'
    }
    if (initialValue === long) {
      return '#397097'
    }
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
          pathColor: setColor(),
          trailColor: '#0a0f1f',
        })}
      />
      {initialValue>0?<button
        style={{ color: setColor() }}
        onClick={() => setStart(!start)}
      >
        {start ? 'PAUSE' : 'START'}
      </button>:null}
    </div>
  )
}

export default Content
