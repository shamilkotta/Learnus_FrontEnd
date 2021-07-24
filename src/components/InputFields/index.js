import React, {useState} from 'react'
import './Style.scss'

import {FaEye, FaEyeSlash } from "react-icons/fa";

export function InputText({type="text", name, value, className, holder, onChange, showCount, maxLength, ...props}) {
    return (
        <React.Fragment>
        <input
            type={type}
            name={name}
            value={value}
            className={className}
            maxLength={maxLength}
            placeholder={holder}
            onChange={onChange}
            {...props}
        />
        {
            showCount && <span className="input-text__count">{value ? value.length : 0}/{maxLength}</span>
        }
        </React.Fragment>
    )
}

export function InputTextArea({name, value, className, holder, onChange, showCount, maxLength, ...props}) {
    return (
        <React.Fragment>
        <textarea
            type="text"
            name={name}
            value={value}
            maxLength={maxLength}
            className={className}
            placeholder={holder}
            onChange={onChange}
            {...props}
        />
        {
            showCount && <span className="input-text__count">{value ? value.length : 0}/{maxLength}</span>
        }
        </React.Fragment>
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

export function InputConfirmPassword({value, className, password, onChange}) {

    const handleInvalid = (e)=> {
        if (password !== value) {
            e.target.setCustomValidity("Those passwords didn't match")
        }else {
            e.target.setCustomValidity('')
        }
    }

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
            onInvalid= {handleInvalid}
            onInput = {e=> e.target.setCustomValidity('')}
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
                {isShowPass ? <FaEyeSlash className="input-password__show-pass"/> : <FaEye className="input-password__show-pass"/>}
            </i>
        </React.Fragment>
    )
}
