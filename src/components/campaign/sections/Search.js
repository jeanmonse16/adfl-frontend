import React from 'react'

export default (props) => {
    return(
        <div className="input-group search-container-list mb-3">
            <i className="fal fa-search search"></i>
            <input type="text" placeholder={props.searchPlaceholder} className="form-control" description="Search Clients"/>
        </div>
    )
}