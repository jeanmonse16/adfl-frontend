import React from 'react'

class FormGroup extends React.Component {
  render () {
    const { formControlFor, formControlName, formControlId, formControlDescription } = this.props
    return (
      <div className='form-group'>
        <label htmlFor={formControlFor}>{formControlName}</label>
        <input className='form-control' id={formControlId} type='text' description={formControlDescription} />
      </div>
    )
  }
}

export default FormGroup
