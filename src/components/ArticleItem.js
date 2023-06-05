import React from 'react';
import Ellips12 from '../assets/images/Ellipse 12.png';
import Ellips13 from '../assets/images/Ellipse 13.png';
import OK from '../assets/images/OK.png';

export const ArticleItem = ({item}) => {
    return (
        <>
            <div className={`article_icon article_icon-${item.color}`}>
            <img className="article_img_icon" src={item.src} alt="" />
            </div>
            <div className="article_content">
                <p className="article_content-text">{item.text}</p>
                <div className="img_wrapper">
                    <img className="article_content-members_1" src={Ellips12} alt="" />
                </div>
                <div className="img_wrapper">
                    <img className="article_content-members_2" src={Ellips13} alt="" />   
                </div>
                <div className="article_content-grade"> 
                    <img className="ok_icon" src={OK} alt="OK" />
                    <div className="article_content-mark">28+</div>
                </div>
            </div>
        </>
    )
}