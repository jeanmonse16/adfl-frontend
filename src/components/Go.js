import React from 'react'

class Go extends React.Component {
  render () {
    return (
      <div className='go'>
        <button type='submit' className='btn' onClick={(e) => e.preventDefault()}>Login</button>
      </div>
    )
  }
}
export default Go
