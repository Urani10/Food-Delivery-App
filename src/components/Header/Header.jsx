import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <div className='header'>
         <div className="header-contents">
            <h2>Order your favorite food here</h2>
            <p>Choose from a diverce menu featuring a delectable array of dishes crafted with the finest ingredients and sastify you cravings and elevate your dinning experience, one delicious meal at a time.</p>
         <button>ViewMenu</button>
         </div>
        </div>
    )
}

export default Header;