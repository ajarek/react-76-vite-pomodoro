import React from 'react'

const Setting = ({ onClick }) => {
  return (
    <div className='setting'>
      <button
        className='setting-btn'
        onClick={onClick}
      >
        ⚙️
      </button>
    </div>
  )
}

export default Setting
