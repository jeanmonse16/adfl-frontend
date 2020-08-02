import React from 'react'

const ChooseTitle = (props) => {
    const {title} = props
    return(
        <div className="chooseTitle text-center animated fadeInDown">
            <h3>{title}</h3>
        </div>
    )
}

export default ChooseTitle