import React, { useState, useEffect } from 'react';
import RestorCard from "./RestroCard";
import Shrimmer from './Shrimmer';
import BodySearchComponent from './BodySearchComponent';

const Body = () => {
    const [searchText, setsearchText] = useState('')
    const [filteredData, setFilteredData] = useState([]);
    const [tempData, settempData] = useState([]);


    const fetchData = async () => {
        try {
            const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1161&lng=79.0706&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

            const response = await fetch(url)
            const jsonData = await response.json();

            setFilteredData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            settempData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        } catch (error) {
            console.log(error.message, "Data hi nahi aaya bhai")
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSearch = () => {
        const filterList = filteredData.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        settempData(filterList)
    }

    const fixTheEmpty = (e) => {
        if (e.target.value === '') {
            settempData(filteredData)
        }
        setsearchText(e.target.value)
    }

    if (!filteredData || !filteredData.length) {
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
            <BodySearchComponent searchText={searchText} handleSearch={handleSearch} fixTheEmpty={fixTheEmpty} />
            <div className='res-container'>
                {tempData.map((restaurant) => (
                    <RestorCard
                        key={restaurant.info.id}
                        restaurant={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
