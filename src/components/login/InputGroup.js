import React from 'react'

export default ({ icon, typeInput ,placeHolderText, nameId, onChange }) => (
  <div className='input-group'>
    <i className={icon} />
    <input type={typeInput} className='form-control' id={nameId} name={nameId} placeholder={placeHolderText} onChange={(e) => onChange(e)} />
  </div>
)
