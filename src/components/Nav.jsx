import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
const Nav = () => {
  const {value, setValue,initialValue,setInitialValue} = useContext(AppContext)
  const handlePomodoro=()=>{
    setInitialValue(60)
    setValue(60)
  }
  const handleShortBreak=()=>{
    setInitialValue(30)
    setValue(30)
  }
  const handleLongBreak=()=>{
    setInitialValue(45)
    setValue(45)
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
