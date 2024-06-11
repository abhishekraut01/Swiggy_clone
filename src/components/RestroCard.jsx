import { CDN_URL } from "../utils/constant";

const RestorCard = ({ restaurant }) => {
    const { name, cloudinaryImageId, avgRating, sla, cuisines, areaName } = restaurant.info;
    return (
        <div className='res-card'>
            <div className='res-img'>
                <img src={`${CDN_URL}${cloudinaryImageId}`} alt={name} />
            </div>
            <div className='res-details'>
                <h3>{name}</h3>
                <div className='res-info'>
                    <span className='res-rating'>{avgRating} ⭐</span>
                    <span className='res-time'>{sla.slaString}</span>
                </div>
                <p className='res-cuisine'>{cuisines.join(', ')}</p>
                <p className='res-location'>{areaName}</p>
            </div>
        </div>
    );
};

export default RestorCard;
