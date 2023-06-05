import { useState, useEffect }  from 'react';
import Menu from './Menu';
import Header from './Header';
import Filter from './Filter';
import AllItems  from './AllItems';
import BurgerMenu from './BurgerMenu';

const BaseHome = ({ setChosenItem, chosenItem, setCurrentUser}) => {
    const [showWaitingOrder, setShowWaitingOrder] = useState(false);
    const[activeShopping, setActiveShopping] = useState(false);
    const [burgerAppearance, setBurgerAppearance] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setBurgerAppearance(window.innerWidth <= 1090);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  
    return( 
        <section className="lucknow">
            <div className="container">
               
                {!burgerAppearance ? 
                (
                    <div className="menu">
                    <Menu />
                </div> 
                ) : (
                    <BurgerMenu />
                )          
                }
                <div className="lucknow_content">
                    <Header 
                    activeShopping={activeShopping}
                    setActiveShopping={setActiveShopping}
                    chosenItem={chosenItem}
                    setChosenItem={setChosenItem}
                    showWaitingOrder={showWaitingOrder}
                    setShowWaitingOrder={setShowWaitingOrder}
                    setCurrentUser={setCurrentUser}
                    />
                    <Filter />
                    <AllItems 
                    activeShopping={activeShopping}
                    setActiveShopping={setActiveShopping}
                    showWaitingOrder={showWaitingOrder}
                    setChosenItem={setChosenItem}  
                    chosenItem={chosenItem} 
                    />
                </div>
            </div>
        </section> 
    )
}
export default BaseHome;
