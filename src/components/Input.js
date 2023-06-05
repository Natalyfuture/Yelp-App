import React from 'react';

export const Input = ({name, value, handleChange, handleBlur, errors, touched}) => {
    const inputType = name === "login" ? "email" :  "password";
    return (
        <label className='input_wrapper'> {name.charAt(0).toUpperCase() + name.slice(1)}
            <input 
            className='input'
            name={name}
            placeholder={`Your ${name}`}
            value={value}
            onChange={handleChange}
            type={inputType}
            onBlur={handleBlur}
            />
            {touched && errors ? <span className='errors'>{errors}</span> : null}
         </label>
    )
       
       
}
