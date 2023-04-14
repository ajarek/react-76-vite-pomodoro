import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
const Nav = () => {
  const {value, setValue, pomodoro,setPomodoro,shortBreak,setShortBreak, longBreak,setLongBreak } = useContext(AppContext)
  const handlePomodoro=()=>{
    setValue(pomodoro)
    setShortBreak(null)
    setLongBreak(null)
  }
  const handleShortBreak=()=>{
    setValue(null)
    setShortBreak(shortBreak)
    setLongBreak(null)
  }
  const handleLongBreak=()=>{
    setValue(null)
    setShortBreak(null)
    setLongBreak(longBreak)
  }
  return (
    <nav className='nav'>
      <button onClick={handlePomodoro}>pomodoro</button>
      <button onClick={handleShortBreak}>short break</button>
      <button onClick={handleLongBreak}>long break</button>
    </nav>
  )
}

export default Nav
