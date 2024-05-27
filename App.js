import React from 'react';
import ReactDOM from 'react-dom';
import resData from './resinfo.json'; // Ensure the path is correct

const Header = () => {
    return (
        <div className='header'>
            <div className='Logo-container'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogeeXpMGme9XqMhQ6zFvWM2MYOTKdfeBkXvDv2AZXUA&s' alt="Logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li> <i className="ri-briefcase-line"></i>Swiggy Corporate</li>
                    <li><i className="ri-search-line"></i>Search</li>
                    <li><i className="ri-discount-percent-line"></i>Offers</li>
                    <li><i className="ri-bubble-chart-line"></i>Help</li>
                    <li> <i className="ri-user-2-line"></i>Sign In</li>
                    <li> <i className="ri-shopping-cart-2-line"></i>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestorCard = ({ name, image, rating, time, cuisine, location }) => {
    return (
        <div className='res-card'>
            <div className='res-img'>
                <img src={image} alt={name} />
            </div>
            <div className='res-details'>
                <h3>{name}</h3>
                <div className='res-info'>
                    <span className='res-rating'>{rating} ⭐</span>
                    <span className='res-time'>{time}</span>
                </div>
                <p className='res-cuisine'>{cuisine}</p>
                <p className='res-location'>{location}</p>
            </div>
        </div>
    );
};

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
                        image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
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

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(< AppLayout />)
