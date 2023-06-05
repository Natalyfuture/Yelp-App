import React, { useEffect, useState } from 'react';
import Face from '../assets/images/drooling-face-emoji.png';
import Search from '../assets/icons/search.svg';
import Shop from '../assets/icons/shop.svg';
import ArrowCyrcle from '../assets/icons/arrow_circle.svg'
import { Basket } from './Basket';
import { WaitingOder } from './WaitingOder';
import { useNav } from '../hooks/useNav';


const Header = ({ showWaitingOrder, setShowWaitingOrder, chosenItem, activeShopping, setActiveShopping, setChosenItem, setCurrentUser}) => {
  const {goTo} = useNav();

  const [count, setCount] = useState({1 : 1});

  const handleShopClick = () => {
    if (!activeShopping) {
      setActiveShopping(true);
    }
  };

  const exitHome = () => {
    localStorage.setItem('user', null);
    setCurrentUser(null)
    goTo('/login');
  }

  useEffect(() => {
    if (showWaitingOrder) {
      const timeoutId = setTimeout(() => {
        setShowWaitingOrder(false) ;
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showWaitingOrder, setShowWaitingOrder]);

    return(
        <div className="lucknow_content-header">
              <div className="lucknow_content-title">
                <p className="lucknow_content-text">Welcome To 
                  Lucknow
                </p>
                <div className="img_smile">
                  <img src={Face} />
                </div>
              </div>
              <div className="icons">
                <img src={Shop} onClick={handleShopClick}/>
                <img src={Search} />
                <div className='icons_arrow-container'>
                  <img className='icons_arrow-cyrcle' onClick={exitHome} src={ArrowCyrcle} />
                </div>
              </div>
              {activeShopping && !showWaitingOrder 
              ? <Basket 
              count={count}
              setCount={setCount}
              chosenItem={chosenItem}  
              setChosenItem={setChosenItem}
              setShowWaitingOrder={setShowWaitingOrder}
              setActiveShopping={setActiveShopping}
              showWaitingOrder={showWaitingOrder}
              /> 
              :(showWaitingOrder && <WaitingOder />
              )}
        </div>
    )
}

export default Header;

