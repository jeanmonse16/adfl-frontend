import React from 'react'

const Go = ({ onClick, goText }) => (
  <div className='go'>
    <button type='submit' className='btn animated bounceInUp' style={{ cursor: 'pointer' }} onClick={(e) => onClick(e)}>{goText}</button>
  </div>
)

export default Go
