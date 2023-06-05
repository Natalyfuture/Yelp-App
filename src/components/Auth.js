import React, { useContext}from 'react';
import Grapes from '../assets/images/grapes.png';
import Leaf from '../assets/images/leaf.png';
import Orange from '../assets/icons/orange.svg';
import BittenApple from '../assets/icons/bitten-apple.svg';
import DroolingSmile from '../assets/images/drooling-face-emoji.png'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Input } from './Input'; 
import app from './base';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNav } from '../hooks/useNav';

import { AuthContext } from './AuthContext';

const auth = getAuth();

const Auth = () => {
    const { setCurrentUser} = useContext(AuthContext);
   const {goTo} = useNav();


    const{ handleSubmit, handleChange, values, handleBlur, touched, errors} = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema : Yup.object({
            login : Yup.string().max(30 , 'Login mus be shorter than 30 characters').required(),
            password : Yup.string().min(8 , 'Password must be longer than 8 characters').required(),
        }),
        onSubmit: async (values) => {
                await signInWithEmailAndPassword(auth, values.login, values.password )
                .then((userCredential)=> {
                    const user = userCredential.user;

                   if(user) {
                    setCurrentUser(user);
                    localStorage.setItem('user', JSON.stringify(user));
                   }
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
        }
    });

    const onClick = () =>{
            goTo('/register');
        }

    const inputData = ['login', 'password']


    return(
        <section className='login'>
            <div className='login_container'>
                <img className='img_grapes' src={Grapes} alt='grapes' />
                <img className='img_leaf' src={Leaf} alt='leaf' />
                <img className='img_orange' src={Orange} alt='Orange' />
                <img className='img_bitten-apple' src={BittenApple} alt='BittenApple' />
                <div className='title_wrapper'>
                    <h1 className='title'>Welcome To 
                        Yelp App
                    </h1>
                    <img className='title_drooling-face' src={DroolingSmile} alt='DroolingSmile' />
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form_container'>
                            {inputData.map((item => (
                                <Input 
                                key={item} 
                                name={item} 
                                value={values[item]} 
                                handleChange={handleChange} 
                                handleBlur={handleBlur}
                                touched={touched[item]}
                                errors={errors[item]}/>
                            )))}
                        <div className='button_container-form'>
                            <button className='button-form' type='submit'>Login</button>
                        </div>
                        <div className='link_wrapper'>
                            <a className='link' onClick={onClick}>don't have an account</a>
                        </div>
                    </div>
                </form>   
            </div>
        </section>
    )
}

export default Auth;
