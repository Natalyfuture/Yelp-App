import React from 'react';
import Burger from '../assets/images/cartoon-burger.png';
import Cheese from '../assets/images/cheese .png';
import BittenApple from '../assets/icons/bitten-apple.svg';
import Fire from '../assets/icons/fire.svg';
import Orange from '../assets/icons/orange.svg';

const Discount = () => {
    return(
        <div className="discount">
            <h1 className="discount_text-title">-50% OFF</h1>
            <p className="discount_text-p">the full price of burgers</p>
            <img className="burger" src={Burger} alt='Burger' />
            <img className="cheese" src={Cheese}  alt='Cheese' />
            <img className="bitten-apple" src={BittenApple}  alt="BittenApple" />
            <img className="fire" src={Fire} alt="Fire" />
            <img className="orange_icon" src={Orange} alt="Orange" />
        </div>
    )
}

export default Discount;