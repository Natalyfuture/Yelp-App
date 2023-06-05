import React, {useState, useEffect} from "react";
import Grapes from '../assets/images/grapes.png';
import Burger from '../assets/images/cartoon-burger.png';
import Cheese from '../assets/images/cheese .png';
import BittenApple from '../assets/icons/bitten-apple.svg';
import Fire from '../assets/icons/fire.svg';
import Orange from '../assets/icons/orange.svg';


export const Loader = ({loaderOff, setLoaderOff}) => {
    const [expanded, setExpanded] = useState(false);

   useEffect(() => {
    if (!expanded && !loaderOff)  {
      const timer = setTimeout(() => {
        setExpanded(true);
      }, 1500); 
      return () => clearTimeout(timer);
    }
  }, [expanded]); 

 const handleAnimationEnd = () => {
    setLoaderOff(true); 
} 
   
    return(
        <div className="loader container">
            <div className={ expanded ? "loader-container loader-container--active_left" : "loader-container"}>
                <div className="loader-content loader-content_left">
                    <h1 className="loader-content-title">Yelp </h1>
                    <p className="loader-content-text">developed by Na</p>
                    <div className="loader-content-img-grapes">
                        <img className="loader-content-img" src={Grapes} />
                    </div>
                </div>
            </div>
            <div className={ expanded 
                ? "loader-container loader-container--active_right" 
                : "loader-container"}
                onAnimationEnd={handleAnimationEnd}
                >
                <div className="loader-content loader-content_right">
                    <h1 className="loader-content-title">App</h1>
                    <p className="loader-content-text">me Lastname</p>
                    <div className="loader-content-img-container">
                        <div className="loader_discount">
                            <img className="burger" src={Burger} alt='Burger' />
                            <img className="cheese" src={Cheese}  alt='Cheese' />
                            <img className="bitten-apple" src={BittenApple}  alt="BittenApple" />
                            <img className="fire" src={Fire} alt="Fire" />
                            <img className="orange_icon" src={Orange} alt="Orange" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
