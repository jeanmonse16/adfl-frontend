import React from 'react'

class Step extends React.Component {
  render () {
    const { name, controller, index } = this.props
    return (
      <div className='step active' onClick={() => { controller.setActiveTab(index); console.log(controller.activeTab()) }}>
        <div className='count-title'>{name}</div>
      </div>
    )
  }
}

export default Step
