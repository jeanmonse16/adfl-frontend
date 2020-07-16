import React, { useState } from 'react'

class InputGroup extends React.Component {
  render () {
    const { icon, placeholderText, nameId } = this.props
    return (
      <div className='input-group'>
        <i className={icon} />
        <input type='text' className='form-control' id={nameId} name={nameId} placeholder={placeholderText} />
      </div>
    )
  }
}

function login (user) {
  return fetch('https://adfldemo.com/api/auth/login/', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }).then(response => console.log(response))
}

export default InputGroup
