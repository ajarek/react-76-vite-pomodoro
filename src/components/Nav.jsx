import { React, useContext } from 'react'
import { AppContext } from '../App'
const Nav = () => {
  const { setValue, setInitialValue, pomodoro, short, long } =
    useContext(AppContext)
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
