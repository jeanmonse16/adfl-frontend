import React from 'react'

const Go = ({ onClick }) => (
  <div className='go'>
    <button type='submit' className='btn' style={{ cursor: 'pointer' }} onClick={(e) => onClick(e)}>Login</button>
  </div>
)

export default Go
