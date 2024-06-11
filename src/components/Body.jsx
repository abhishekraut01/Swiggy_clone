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
                <button className="search-btn" onClick={() => {
                    resData = resData.filter((res) => {
                         res.info.avgRating > 5
                    }) ; console.log(resData)
                }}>Search</button>
            </div>
            <div className='res-container'>
                {resData.map((restaurant) => (
                    <RestorCard
                        key={restaurant.info.id}
                        restaurant = {restaurant}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body;