import React from 'react'

const Choice = (props) => {
    const { icon, text } = props 
    return(
        <a href="#">
            <div className="choice">
                <i className={icon}></i>
                <p>{text}</p>
            </div>
        </a>
    )
}

export default Choice