import React, {useState} from 'react'
import './InputFields.scss'

import {FaEye, FaEyeSlash } from "react-icons/fa";



const checkValidity = e => {
    if (e.target.type === 'email') {
        let msg = 'Enter a valid Email Address'
        e.required && alert('hi')  
        e.target.setCustomValidity(msg)
    }else {
        let msg = 'Enter a valid Password'
        e.target.setCustomValidity(msg)
    }
}

export function InputText({name, value, className, holder, onChange, ...props}) {
    return (
        <input
            type="text"
            name={name}
            value={value}
            className={className}
            placeholder={holder}
            onChange={onChange}
            {...props}
        />
    )
}

export function InputEmail({value, className, onChange, ...props}) {
    return (
        <input 
            type="email" 
            name="email" 
            value={value}
            className={className} 
            onChange={onChange}
            placeholder="Email" 
            // onInvalid={checkValidity}
            // onInput={e=>e.target.setCustomValidity('')} 
            {...props}
        />
    )
}

export function InputButton({type='button', className,value, onClick}) {
    return (
        <input 
            type={type}
            className={className}
            value={value}
            onClick={onClick}
            required 
        />
    )
}

export function InputConfirmPassword({value, className, onChange}) {
    return (
        <input 
            type="password" 
            name="confirmPassword"
            value={value}
            className={className} 
            onChange={onChange}
            placeholder="Confirm Password" 
            onInvalid={checkValidity} 
            onInput={e=>e.target.setCustomValidity('')} 
            required 
        />
    )
}

export function InputPassword({value, className, onChange}) {

    const [isShowPass, setIsShowPass] = useState(false)

    return (
        <React.Fragment>
            <input
                type={isShowPass ? "text":"password"}
                name="password"
                value={value}
                className={className}
                onChange={onChange}
                placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                // onInvalid={checkValidity}
                // onInput={e=>e.target.setCustomValidity('')}
                required
            />
            <i onClick={()=> setIsShowPass(!isShowPass)}>
                {isShowPass ? <FaEyeSlash className="auth__show-pass"/> : <FaEye className="auth__show-pass"/>}
            </i>
        </React.Fragment>
    )
}
