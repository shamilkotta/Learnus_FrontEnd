import React, {useState} from 'react'
import './InputFields.scss'

import {FaEye, FaEyeSlash } from "react-icons/fa";

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
            pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}"
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
                pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}"
                title="Must contain at least one number, one uppercase and lowercase letter, one special charecter. and 8 to 16 charecters long, space between charecters not allowed"
                required
            />
            <i onClick={()=> setIsShowPass(!isShowPass)}>
                {isShowPass ? <FaEyeSlash className="auth__show-pass"/> : <FaEye className="auth__show-pass"/>}
            </i>
        </React.Fragment>
    )
}
