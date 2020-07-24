import React from 'react'

class HelpMenu extends React.Component{
    render(){
        const {title, text} = this.props
        return(
            <div className="helpMenu">
                <header className="h-header" >Explain this section<i className="fas fa-caret-up icon"></i></header>
                <div className="h-body">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}

export default HelpMenu