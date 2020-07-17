import React from 'react'

export default ({ icon, placeHolderText, nameId, onChange }) => (
  <div className='input-group'>
    <i className={icon} />
    <input type='text' className='form-control' id={nameId} name={nameId} placeholder={placeHolderText} onChange={(e) => onChange(e)} />
  </div>
)
