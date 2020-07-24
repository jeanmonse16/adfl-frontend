import React from 'react'

class ChooseTitle extends React.Component{
    render(){
        const {title} = this.props
        return(
            <div className="chooseTitle text-center">
                <h3>{title}</h3>
            </div>
        )
    }
}

export default ChooseTitle