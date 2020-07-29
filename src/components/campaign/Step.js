import React from 'react'

const Step = (props) => {
  const { name, controller, index, tabs } = props
  const handleClick = () => {
    if (tabs) {
      tabs.setActiveTab(index)
      return controller(tabs.activeTab())
    } else {
      return 0
    }
  }
  return (
    <div className='step active' onClick={handleClick}>
      <div className='count-title'>{name}</div>
    </div>
  )
}

export default Step
