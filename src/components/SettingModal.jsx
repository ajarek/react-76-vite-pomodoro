import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'

const SettingModal = ({ onClick }) => {
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

  return (
    <div className='setting-modal'>
      <h3>SETTINGS</h3>
      <button
        className='modal-btn'
        onClick={onClick}
      >
        ❌
      </button>
      <label htmlFor='pomodoro'>pomodoro in minutes</label>
      <input
        id='pomodoro'
        min={1}
        step={1}
        type='number'
        value={pomodoro / 60}
        onChange={(e) => {
          setPomodoro(e.target.value * 60)
          setValue(0)
        }}
      />
      <label htmlFor='pomodoro'>short break in minutes</label>
      <input
        id='short'
        min={1}
        step={1}
        type='number'
        value={short / 60}
        onChange={(e) => {
          setShort(e.target.value * 60)
          setValue(0)
        }}
      />
      <label htmlFor='pomodoro'>long break in minutes</label>
      <input
        id='long'
        min={1}
        step={1}
        type='number'
        value={long / 60}
        onChange={(e) => {
          setLong(e.target.value * 60)
          setValue(0)
        }}
      />
    </div>
  )
}

export default SettingModal
