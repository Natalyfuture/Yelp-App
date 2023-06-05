import React from 'react';
import StopWatch from '../assets/icons/stopwatch.svg';

export const WaitingOder = () => {
    return (
        <div className='basket basket-container'>
            <div className='basket-container_stopwatch'>
                <img className='container_stopwatch-img' src={StopWatch} alt='Stopwatch' />
            </div>
            <p className='basket-container_stopwatch-text'>in the process of cooking...</p>
            <div className='basket_container-button'>
                    <button className='button'>Order more</button>
                </div>
        </div>
    )
}
