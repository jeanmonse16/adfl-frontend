import React from 'react'

class InputGroup extends React.Component{
    render(){
        const {icon, placeholderText, nameId} = this.props;
        return(
            <div className="input-group">
                <i className={icon}></i>
                <input type="text" className="form-control" id={nameId} name={nameId} placeholder={placeholderText}></input>
            </div>
        )
    }
}

export default InputGroup