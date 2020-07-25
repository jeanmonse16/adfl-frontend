import React from 'react'

class Step extends React.Component{
    render(){
        const {name} = this.props
        return(
            <div className="step active">
                <div className="count-title">{name}</div>
            </div>
        )
    }
}

export default Step