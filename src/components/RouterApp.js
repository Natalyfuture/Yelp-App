import {useState, useContext} from 'react'; 
import { Routes, Route , Navigate} from "react-router-dom";
import BaseHome from './Home';
import Auth from '../components/Auth';
import Register from '../components/Register';
import { Loader } from './Loader';
import BurgerMenu from './BurgerMenu';


import { AuthContext } from './AuthContext';



const PrivateRoute = ({children}) => {
    let { currentUser} = useContext(AuthContext);
    if(currentUser === null){
        return <Navigate to='/login' />;
    }
    return children;
}   

const RouterApp = () => {

    const { currentUser, setCurrentUser} = useContext(AuthContext);
    const [loaderOff, setLoaderOff] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [chosenItem, setChosenItem] = useState([{
        id: '',
        title: '',
        text: '',
        price: '',
        src: null,

    }]);
  
    return(
        <>
        <Routes>
            <Route 
                path='/' 
                element={
                    <PrivateRoute>
                             <div className='home_wrapper'>
                             <BaseHome chosenItem={chosenItem} setChosenItem={setChosenItem} setCurrentUser={setCurrentUser}/>
                             <div className='loader_wrapper'>
                                 {!loaderOff &&  
                                 <Loader loaderOff={loaderOff}  setLoaderOff={setLoaderOff}/>
                                 }
                             </div>
                         </div> 
                    </PrivateRoute>
                   } 
            />
            <Route path='/register' element={<Register setLoaderOff={setLoaderOff}/>} />
            <Route 
            path='/login' 
            element={currentUser ? <Navigate to='/' /> : <Auth />} />
            
            <Route path='/burgerMenu' element={<BurgerMenu  />} /> 
            <Route path='/loader' element={<Loader />} />

            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
        </>
           
    )
}

export default RouterApp;

