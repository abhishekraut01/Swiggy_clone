import React, { useState } from 'react';
import { CDN_URL } from "../utils/constant";
import RestorCard from "./RestroCard";
import resData from '../utils/resinfo.json';

const Body = () => {
    const [filteredData, setFilteredData] = useState(resData);

    const handleSearch = () => {
        const filteredResults = resData.filter((res) => res.info.avgRating > 4.5);
        setFilteredData(filteredResults);
        console.log(filteredResults);
    };

    return (
        <div className='body'>
            <div className='search'>
                <div className='res-container'>
                    <i className="ri-search-line"></i>
                    <input type='text' placeholder='Search for restaurants, cuisines and more' />
                </div>
                <button className="search-btn" onClick={handleSearch}>Search</button>
            </div>
            <div className='res-container'>
                {filteredData.map((restaurant) => (
                    <RestorCard
                        key={restaurant.info.id}
                        name={restaurant.info.name}
                        image={`${CDN_URL}${restaurant.info.cloudinaryImageId}`}
                        rating={restaurant.info.avgRating}
                        time={restaurant.info.sla.slaString}
                        cuisine={restaurant.info.cuisines.join(', ')}
                        location={restaurant.info.areaName}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
