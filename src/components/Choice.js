import React from 'react'

class Choice extends React.Component{
    render(){
        const {icon, text} = this.props
        return(
            <a href="#">
                <div className="choice">
                    <i className={icon}></i>
                    <p>{text}</p>
                </div>
            </a>
        )
    }
}

export default Choice