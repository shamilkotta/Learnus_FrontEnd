import React, { useState } from 'react'
import './Join.scss'

import { FaGoogle, FaTwitter, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";

function Join() {

    const [isSignup, setIsSignup] = useState(false)
    const [isShowPass, setIsShowPass] = useState(false)
    const [formData, setFormData] = useState({})

    const toggleSignBtn = (e)=> {
        e.preventDefault()
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
    }

    const toggleShowPass = ()=> {
        setIsShowPass(!isShowPass)
    }

    return (
        <div className="auth">
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
                        isSignup && <input type="text" name="auth__name" id="auth__input-name" className="auth__input" placeholder="Your Name" required />
                    }
                    <input type="email" name="auth__email" id="auth__input-email" className="auth__input" placeholder="Email" required />
                    <input type={isShowPass ? "text":"password"} name="auth__pass" id="auth__input-pass" className="auth__input" placeholder="Password" required />
                    <i onClick={toggleShowPass}>{isShowPass ? <FaEyeSlash className="auth__show-pass"/> : <FaEye className="auth__show-pass"/>}</i>
                    
                    {
                        isSignup && <input type="password" name="auth__confirm-pass" id="auth__input-confirm-pass" className="auth__input" placeholder="Confirm Password" required />
                    }
                </div>
                {isSignup ? '' : <p className="auth__txt link">Forgot your password?</p>}
                <div className="auth-btn-group">
                    <input type="submit" value={isSignup? 'SIGN UP' : 'SIGN IN'} className="auth__btn auth__btn--active btn btn--active" />
                    <input type="submit" value={isSignup? 'SIGN IN' : 'SIGN UP'} className="auth__btn btn" onClick={toggleSignBtn} />
                </div>
            </form>
        </div>
    )
}

export default Join
