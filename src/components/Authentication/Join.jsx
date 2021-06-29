import React, { useState } from 'react'
import './Join.scss'

import {InputConfirmPassword, InputEmail, InputPassword, InputButton, InputText} from '../InputFields/InputFields'
import { FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";

function Join() {

    const [isSignup, setIsSignup] = useState(false)
    const initialFormData = {email:'', password: '', name: '', confirmPassword: ''}
    const [formData, setFormData] = useState(initialFormData)

    const toggleSignBtn = (e)=> {
        e.preventDefault()
        setIsSignup(!isSignup)
        setFormData(initialFormData)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e)=> {
        setFormData(prvsData=> {
            return(
                {...prvsData, [e.target.name]: e.target.value }
            )
        })
    }

    return (
        <div className="auth" style={{maxHeight: `${isSignup ? '510px' : '440px'}`}}>
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1 className="auth__title">{isSignup? 'Sign Up' : 'Sign In'}</h1>
                <div className="auth__social-sign">
                    <FaGoogle className="auth__social-icon" />
                    <FaTwitter className="auth__social-icon" />
                    <FaFacebookF className="auth__social-icon" />
                </div>
                <p className="auth__txt">or use your {isSignup? 'email' : 'account'}</p>
                <div className="auth-input-group">
                    {
                        isSignup && <InputText className="auth__input" name="name" value={formData.name} holder="Your Name" onChange={handleChange}/>
                    }
                    <InputEmail value={formData.email} className="auth__input" onChange={handleChange}/>
                    <InputPassword value={formData.password} className="auth__input" onChange={handleChange}/>
                    {
                        isSignup && <InputConfirmPassword value={formData.confirmPassword} className="auth__input" onChange={handleChange}/>
                    }
                </div>
                {isSignup ? '' : <p className="auth__txt link">Forgot your password?</p>}
                <div className="auth-btn-group">
                    <InputButton type="submit" className="auth__btn auth__btn--active btn btn--active" value={isSignup? 'SIGN UP' : 'SIGN IN'}/>
                    <InputButton className="auth__btn btn" value={isSignup? 'SIGN IN' : 'SIGN UP'} onClick={toggleSignBtn} />
                </div>
            </form>
        </div>
    )
}

export default Join
