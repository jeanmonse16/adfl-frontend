import React from 'react'

const Go = ({ onClick, title }) => (
  <div className='go'>
    <button type='submit' className='btn' style={{ cursor: 'pointer' }} onClick={(e) => onClick(e)}> {title} </button>
  </div>
)

export default Go
