import React from 'react'

export default ({searchPlaceholder}) => {
    return(
        <div className="input-group search-container-list mb-3">
            <i className="fal fa-search search"></i>
            <input type="text" placeholder={searchPlaceholder} className="form-control" description="Search Clients"/>
        </div>
    )
}