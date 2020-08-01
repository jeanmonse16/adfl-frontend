import React from 'react'

const Types = (props) => {
    const {typeIcon, typeTitle} = props
    return(
        <div className="types">
            <i className={typeIcon}></i>
            <div className="title">{typeTitle}</div>
        </div>
    )
}

export default Types