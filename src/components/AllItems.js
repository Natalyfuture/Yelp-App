import { useLayoutEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import Filter from '../assets/icons/filter.svg';
import Article from './Article';
import { Item } from './Item';

const AllItems = ({ setChosenItem, chosenItem, showWaitingOrder, activeShopping, setActiveShopping }) => {
    const sortedItems = useSelector((state) => state.sortedItem.sortedItem);
    const allItemsRef = useRef(null);

    useLayoutEffect(() => {
      allItemsRef.current.scrollTop = 0;
    }, [sortedItems]);

    return(
        <div className="allItems" >
            <div className="allItems_container-one">
              <div className="allItems_title-wrapper">
                <h1 className='allItems_title'>All Items</h1>
                <img src={Filter} alt="Filter" />
              </div> 
              <div className="allItems_flex" ref={allItemsRef}>
                {sortedItems.map((item) => (
                      <div key={item.id} className="allItems_item">
                       <Item 
                       item={item} 
                       activeShopping={activeShopping}
                       setActiveShopping={setActiveShopping}
                       chosenItem={chosenItem}
                       setChosenItem={setChosenItem}
                       showWaitingOrder={showWaitingOrder}
                       /> 
                      </div>
                ))}
              </div>
            </div>
            <Article />
        </div>
    )
}

export default AllItems;
