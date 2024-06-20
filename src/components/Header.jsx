import React, { useState , useEffect } from 'react';
import { LOGO_URL } from "../utils/constant";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleAuthClick = () => {
        setIsLoggedIn(!isLoggedIn);
    };
    return (
        <div className='header'>
            <div className='Logo-container'>
                <img className='logo' src={LOGO_URL} alt="Logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/"><i className="ri-briefcase-line"></i>Swiggy Corporate</Link></li>
                    <li><Link to="/search"><i className="ri-search-line"></i>Search</Link></li>
                    <li><Link to="/offers-near-me"><i className="ri-discount-percent-line"></i>Offers</Link></li>
                    <li><Link to="/support"><i className="ri-bubble-chart-line"></i>Help</Link></li>
                    <li><Link to="/checkout"><i className="ri-shopping-cart-2-line"></i>Cart</Link></li>
                    <li onClick={handleAuthClick} className="auth-button">
                        {isLoggedIn ? <><i className="ri-logout-box-line"></i>Logout</> : <><i className="ri-user-2-line"></i>Sign In</>}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
