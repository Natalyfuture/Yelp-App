import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveIndexMenu } from '../redux/reducers/menuSlice';

import managerIcon from '../assets/images/manager.png'; 
import deliveryRuns from '../assets/images/delivery-man-runs.png';
import Arrow from '../assets/icons/arrow.svg'
import { menuList } from './menuList';
import { Icon } from './Icon';


const Menu = () => {
    const activeIndexMenu = useSelector((state) => state.activeItemMenu.activeIndexMenu);
    const dispatch = useDispatch();
    if(activeIndexMenu === 0){
        dispatch(setActiveIndexMenu(menuList[0]));
    }

    const selectionMenu = (item ) => {
        const index = menuList.find((x) => x.name === item);
            dispatch(setActiveIndexMenu(index));
        
    }

    return(
        <>
            <div className='menu_manager-wrapper'>
                <div className="menu_manager">
                    <img className="menu_manager_img" src={managerIcon} alt=''/>
                </div>
                    <h3  className='menu_manager-name'>Alka Yagik</h3>
            </div>
            <nav className="menu_nav">
                <div className="menu_list">
                    {menuList.map(({name, svgName }) => (
                    <div 
                    key={name} 
                    className={activeIndexMenu.name === name ? 'menu_item menu_item--active' : 'menu_item'}
                    onClick={() => selectionMenu(name)}
                    >
                        <div className="menu_item_icon">
                            <Icon name={svgName} />
                        </div>
                        <span className="menu_title">{name.toUpperCase()}</span>
                    </div>
                    ))}
                </div>
            </nav>
            <div className="faster_delivery">
                <div className="delivery">
                    <img className="delivery_img" src={deliveryRuns} alt="deliveryRuns" />
                </div>
                <div className="square">
                    <div className="square_content">
                        <p className="square_title">Faster delivery!</p>
                        <div className="know-more">
                            <p className="know-more_text">Know More</p>
                            <div className="know-more_arrow">
                                <img src={Arrow} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
             
    )
}
export default Menu