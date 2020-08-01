import React from 'react'

const FormGroup = (props) => {
  const { formControlFor, formControlName, formControlId, formControlDescription } = props
  return (
    <div className='form-group'>
      <label htmlFor={formControlFor}>{formControlName}</label>
      <input className='form-control' id={formControlId} type='text' description={formControlDescription} />
    </div>
  )
}

export default FormGroup
