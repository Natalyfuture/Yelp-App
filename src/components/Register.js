import React, { useContext }  from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Grapes from '../assets/images/grapes.png';
import Leaf from '../assets/images/leaf.png';
import Orange from '../assets/icons/orange.svg';
import BittenApple from '../assets/icons/bitten-apple.svg';
import DroolingSmile from '../assets/images/drooling-face-emoji.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Input } from './Input';

import { useNav } from '../hooks/useNav';
import app from './base';
import { AuthContext } from './AuthContext';

const auth = getAuth();

const Register = ({setLoaderOff}) => {
    const { goTo} = useNav();
    
    const { setCurrentUser } = useContext(AuthContext);

    const{ handleSubmit, handleChange, values , touched, errors, handleBlur } = useFormik({
        initialValues: {
            login: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema : Yup.object({
            login : Yup.string().max(30 , 'Login mus be shorter than 30 characters').required(),
            password : Yup.string().min(8 , 'Password must be longer than 8 characters').required(),
            confirmPassword : Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm your password')
        }),
        onSubmit: async (values) => { 
                try{
                    await createUserWithEmailAndPassword(auth, values.login, values.password);
                    goTo('/login');
                }catch (error){
                    alert('Enter the correct password')
                }  finally {
                    setLoaderOff(false); // Після завершення реєстрації повертаємо значення loading на false
                  }  
        }
    })

    const inputData = ['login', 'password', 'confirmPassword']

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
                            errors={errors[item]}
                            />
                        )))}
                    <div className='button_container-form'>
                    <button className='button-form' type='submit'>Register</button>
                    </div>
                </div>
            </form>   
        </div>
    </section>
    )
}

export default Register;
