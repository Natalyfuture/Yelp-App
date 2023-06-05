import { useState, useEffect } from 'react';
import ActivePlus from '../assets/icons/active_plus.svg';
import Plus from '../assets/icons/plus .svg';


export const Item = ({item, setChosenItem, chosenItem, setActiveShopping, activeShopping}) => {

  const [activeSpan, setActiveSpan] = useState(false);
 
  const click = (id) => {
    setActiveSpan(!activeSpan)
   setActiveShopping(true)
    if(!activeSpan){

      addChosenItem(item);

    }else {

      deleteChosenItem(item)

    }
  }

  const addChosenItem = (item) => { 

    setChosenItem((prevChosenItems) => [...prevChosenItems, item]);
}

  const deleteChosenItem = (item) => {
  setChosenItem((prevChosenItems) => prevChosenItems.filter((chosenItem) => chosenItem.id !== item.id));
    }

    useEffect(() => {
      if(!activeShopping){
        setActiveSpan(false);
      }
      
    }, [activeShopping]);

    return (
        <div className="allItems_block">
        <div className="allItems_content">
          <h4 className="allItems_content-title" >{item.title}</h4>
          <p className="allItems_content-text">{item.text}
          </p>
          <p className="allItems_content-price">{item.price}</p>
          <div className="img_box">
            <img className="img_top" src={item.src} />
          </div>
        </div> 
        <div 
        onClick={() => click(item.id)}
        className="circle"
        >
        {activeSpan ?
          <img className="plus" src={ActivePlus} />
          : <img className="plus" src={Plus} />
        } 
      </div>
    </div>
    )
}
