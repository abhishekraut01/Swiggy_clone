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

export default RestorCard;