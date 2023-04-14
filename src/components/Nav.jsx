import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
const Nav = () => {
  const { value, setValue, initialValue, setInitialValue } =
    useContext(AppContext)
  const handlePomodoro = () => {
    setInitialValue(60 * 25)
    setValue(60 * 25)
  }
  const handleShortBreak = () => {
    setInitialValue(60 * 5)
    setValue(60 * 5)
  }
  const handleLongBreak = () => {
    setInitialValue(60 * 15)
    setValue(60 * 15)
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
