import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
const Nav = () => {
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
  const handlePomodoro = () => {
    setInitialValue(pomodoro)
    setValue(pomodoro)
  }
  const handleShortBreak = () => {
    setInitialValue(short)
    setValue(short)
  }
  const handleLongBreak = () => {
    setInitialValue(long)
    setValue(long)
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
