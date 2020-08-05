import React from 'react'

export default function ({ message }) {
  return (
    <div style={{ display: 'block', width: '100%', marginTop: '0.25rem', fontSize: '80%', color: '#f86c6b' }}>
      <span style={{ marginRight: '150px' }}> {message} </span>
    </div>
  )
}
