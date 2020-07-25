import React from 'react'

export default (props) =>{
    return(
        <div className="types">
            <i className={props.typeIcon}></i>
            <div className="title">{props.typeTitle}</div>
        </div>
    )
}