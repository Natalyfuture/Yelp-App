import { useState } from "react";
import Menu from "./Menu";


const BurgerMenu = () => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(prev => !prev)
    }

    return (
        <div className="burger_wrapper">
            <input type="checkbox" className="checkbox" onClick={handleCheck}/>
                <div className="check_items" >
                    <div className="check"></div>
                    <div className="check"></div>
                    <div className="check"></div>
                </div>
                 <div className={`burger_menu ${checked ? 'show' : ''}`}>
                    <Menu />
                 </div>
           
            
        </div>
    )
}

export default BurgerMenu;