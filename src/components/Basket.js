import React, {useState } from 'react';
import Arrow from '../assets/icons/arrow.svg';

export const Basket = ({chosenItem, setChosenItem, setShowWaitingOrder, setActiveShopping, setCount, count}) => {
    
    const handleMinusClick = (id) => {
      console.log(count)
        setCount((prevCounts) => {
          const currentValue = prevCounts[id] || 1;
          if (currentValue > 0) {
            return {
              ...prevCounts,
              [id]: currentValue - 1,
            };
          }
          return prevCounts;
        });
      };

      const handlePlusClick = (id) => {
        console.log(count)
        setCount((prevCounts) => {
          const currentValue = prevCounts[id] || 1;
          if (typeof currentValue === 'number' && !isNaN(currentValue)) {
            return {
              ...prevCounts,
              [id]: currentValue + 1,
            };
          }
          return prevCounts;
        });
      };

    const handlePrice = (price, count) => {
        if (price) {
        const priceNumber = parseInt(price.replace(/\D/g, ''));
        let totalAmount = priceNumber * count;
        return totalAmount;
        }
        return 0;
        
    }
      
    const calculateTotalPrice = () => {
        if (chosenItem) {
            return chosenItem.reduce((total, item) => {
              const itemPrice = handlePrice(item.price, count[item.id] || 1);
              return total + itemPrice;
        }, 0);
    }
    return 0;
    };

    const handleOderBasket = () => {
        setShowWaitingOrder(prev => !prev)
        setActiveShopping(false);
        setChosenItem([{
            id: '',
            price: '',
            sort: '',
            src: '',
            text: '',
            title: '',

        }]);
        setCount({1:1})
    };
   
    const handleExitBasket = () => {
        setActiveShopping(false);
        setCount((prevCounts) => ({ ...prevCounts })); 
    }

    return(
        <div className='basket basket-container'>
            <div className='basket-header'>
                <h1 className='basket-header-title'>Basket</h1>
                <div className='basket-header_arrow-container' onClick={handleExitBasket}>
                    <img className='basket-header_arrow-img' src={Arrow}/>
                </div>
            </div>
            {chosenItem && chosenItem.map((item, index) => (
                index === 0 ? null : (
                <div className='basket_content' key={item.id}>
                  <div className='basket_wrapper-img'>
                    {<img className='basket-img' src={item.src}/>}
                  </div>
                  <div className='basket_description'>
                      <p className='basket_description-title'>{item.title}</p>
                      <p className='basket_description-text'>{item.text}</p>
                  </div>
                  <span className='basket_minus' onClick={() => handleMinusClick(item.id)}>-</span>
                  <span className='basket_quantity'>{count[item.id] || 1}</span>
                  <span className='basket_plus'onClick={() => handlePlusClick(item.id)}>+</span>
                  <span className='basket_price'>${handlePrice(item.price, count[item.id] || 1)}</span>
            </div>
                )
            ))}
          
                <div className='basket_container-button'>
                    <button className='button' onClick={handleOderBasket} > { `Order -$${calculateTotalPrice()}`} </button>
                </div>
        </div>
    )
}
