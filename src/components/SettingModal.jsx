import React from 'react'
import Input from './Input'
const SettingModal = ({ onClick }) => {
  return (
    <div className='setting-modal'>
      <h3>SETTINGS</h3>
      <button onClick={onClick}>❌</button>
      <Input title={'pomodoro'}/>
      <Input title={'short break'}/>
      <Input title={'long break'}/>
    </div>
  )
}

export default SettingModal
