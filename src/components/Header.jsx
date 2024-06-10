import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
        <div className='header'>
            <div className='Logo-container'>
                <img className='logo' src={LOGO_URL} alt="Logo" />
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

export default Header;