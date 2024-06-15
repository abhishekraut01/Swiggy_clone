import React, { useState, useEffect } from 'react';
import RestorCard from "./RestroCard";
import Shrimmer from './Shrimmer';

const Body = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [tempData , setTempData] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)

            const jsonData = await response.json();
            console.log(jsonData);
            setFilteredData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setTempData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            

        } catch (error) {
            console.log(error.message, "Data hi nahi aaya bhai")
        }
    }

    useEffect(() => {
        fetchData()
    }, [])



    const handleSearch = () => {
        const filterList = filteredData.filter((res)=>{
            return res.info.name.toLowerCase().includes(searchInput.toLowerCase())
        })

        setTempData(filterList)
    };

    if (filteredData.length === 0) {
        return (
            <div className="wrapper">
                {Array.from({ length: 20 }).map((_, index) => (
                    <Shrimmer key={index} />
                ))}
            </div>
        )
    }

    return (
        <div className='body'>
            <div className='search'>
                <div className='res-container'>
                    <i className="ri-search-line"></i>
                    <input
                        type='text'
                        placeholder='Search for restaurants, cuisines and more'
                        value={searchInput}
                        onChange={(e)=>{ setSearchInput(e.target.value) }}
                    />
                </div>
                <button className="search-btn" onClick={handleSearch}>Search</button>
            </div>
            <div className='res-container'>
                {tempData.map((restaurant) => (
                    <RestorCard
                        key={restaurant.info.id}
                        restaurant = {restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
