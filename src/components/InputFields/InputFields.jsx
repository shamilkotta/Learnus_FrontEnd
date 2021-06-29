import React, {useState} from 'react'
import './InputFields.scss'

import {FaEye, FaEyeSlash } from "react-icons/fa";



const checkValidity = e => {
    (e.target.setCustomValidity('hi')) 
}

export function InputText({name, value, className, holder, onChange}) {
    return (
        <input
            type="text"
            name={name}
            value={value}
            className={className}
            placeholder={holder}
            onChange={onChange}
            required
        />
    )
}

export function InputEmail({value, className, onChange}) {
    return (
        <input 
            type="email" 
            name="email" 
            value={value}
            className={className} 
            placeholder="Email" 
            onChange={onChange}
            onInvalid={checkValidity} 
            onInput={e=>e.target.setCustomValidity('')} 
            required 
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
            placeholder="Confirm Password" 
            onChange={onChange}
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
                placeholder="Password"
                onChange={onChange}
                onInvalid={checkValidity}
                onInput={e=>e.target.setCustomValidity('')}
                required
            />
            <i onClick={()=> setIsShowPass(!isShowPass)}>
                {isShowPass ? <FaEyeSlash className="auth__show-pass"/> : <FaEye className="auth__show-pass"/>}
            </i>
        </React.Fragment>
    )
}
