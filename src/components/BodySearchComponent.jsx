import React from 'react'

const BodySearchComponent = ({searchText , setsearchText , handleSearch , fixTheEmpty}) => {
    return (
        <div className='search'>
            <div className='res-container'>
                <i className="ri-search-line"></i>
                <input
                    type='text'
                    placeholder='Search for restaurants, cuisines and more'
                    value={searchText}
                    onChange={(e) => {
                        fixTheEmpty(e)
                    }}
                />
            </div>
            <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default BodySearchComponent