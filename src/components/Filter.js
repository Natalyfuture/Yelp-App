import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setActiveItemFilter } from '../redux/reducers/filterSlice';
import { setSortedItem } from '../redux/reducers/sortedItemSlice';
import {allItems} from './allItemsConst';

import All from '../assets/images/grilled-chicken.png';
import Burger from '../assets/images/cartoon-burger.png';
import Pizza from '../assets/images/pizza 1.png';
import Salads from '../assets/images/fresh-salad.png';
import Donut from '../assets/images/delicious-donut.png';
import Drinks from '../assets/images/drinks.png';
import Discount from './Discount';



export const filterList = [
    {
        id: 1,
        title: 'All',
        src: All,
    },
    {
        id: 2,
        title: 'Burger',
        src: Burger,
    },
    {
        id: 3,
        title: 'Pizza',
        src: Pizza,
    },
    {
        id: 4,
        title: 'Salads',
        src: Salads,
    },
    {
        id: 5,
        title: 'Donut',
        src: Donut,
    },
    {
        id: 6,
        title: 'Drinks',
        src: Drinks,
    },

]

const Filter = () => {
    const activeItemFilter = useSelector((state) => state.activeItemFilter.activeItemFilter);
    const dispatch = useDispatch(); 
   
    if(activeItemFilter.length === 0){
        dispatch(setSortedItem(allItems));
        dispatch(setActiveItemFilter({title:'All'}))
    };

    const click = (item) => {
        dispatch(setActiveItemFilter(filterList.find((x) => x.title === item)));
        sortingItems( item );
    }

    function sortingItems (title) {

            if(title === 'All'){
                dispatch(setSortedItem(allItems))
            }else{
                const filteredItems = allItems.filter((item) => item.sort === title);
                dispatch(setSortedItem(filteredItems));
                
            } 
    
    }
    
    return(
        <div className="navigation">
              <ul className="navigation_fastfood">
                {filterList.map(({id, title, src}) => (
                     <li 
                     key={id} 
                     className={activeItemFilter.title === title ? "navigation_fastfood-item navigation_fastfood-item--active" : "navigation_fastfood-item"}
                     onClick={() => click(title)}
                     >
                     <div className="img_container">
                       <img className="navigation_fastfood-item_img" src={src} />
                       <p className="navigation_fastfood-item_text">{title}</p>
                     </div>
                   </li>
                ))}
               </ul>
               <Discount />
        </div>
    )
}

export default Filter;
