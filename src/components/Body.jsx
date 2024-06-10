import { CDN_URL } from "../utils/constant"

import RestorCard from "./RestroCard"
import resData from '../utils/resinfo.json'
const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                <div className='res-container'>
                    <i className="ri-search-line"></i>
                    <input type='text' placeholder='Search for restaurants, cuisines and more' />
                </div>
            </div>
            <div className='res-container'>
                {resData.map((restaurant) => (
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
    )
}

export default Body;