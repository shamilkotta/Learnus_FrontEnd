import React, { useState } from 'react'
import { useHistory } from 'react-router';

import { FaGoogle, FaTwitter, FaFacebookF, FaPlus } from "react-icons/fa";
import { InputConfirmPassword, InputEmail, InputPassword, InputButton, InputText } from '../../InputFields'

function SignUp({setPopUp}) {

    const history = useHistory()
    const initialSignUpData = { email: '', password: '', name: '', confirmPassword: '' }
    const [signUpData, setSignUpData] = useState(initialSignUpData)
    const handleChange = e => {setSignUpData(prvsData => ({ ...prvsData, [e.target.name]: e.target.value}) )}

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="auth" style={{ maxHeight: '520px'}}>
            <FaPlus className="auth__close-icon" onClick={()=> history.goBack()} />
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1 className="auth__title">Sign Up</h1>
                <div className="auth__social-sign">
                    <FaGoogle className="auth__social-icon" />
                    <FaTwitter className="auth__social-icon" />
                    <FaFacebookF className="auth__social-icon" />
                </div>
                <p className="auth__txt auth__txt--top">OR</p>
                <div className="auth-input-group">
                    <InputText className="auth__input" name="name" value={signUpData.name} holder="Your Name" onChange={handleChange} required />
                    <InputEmail value={signUpData.email} className="auth__input" onChange={handleChange} required />
                    <InputPassword value={signUpData.password} className="auth__input" onChange={handleChange} />
                    <InputConfirmPassword value={signUpData.confirmPassword} password={signUpData.password} className="auth__input" onChange={handleChange} />
                </div>
                <div className="auth-btn-group">
                    <InputButton type="submit" className="auth__btn btn btn--active" value='SIGN UP' />
                    <p className='auth__txt auth__txt--bottom'>Already a memeber? <span onClick={()=> {setPopUp('logIn')}} className=" clr__primary a">Log In</span></p>
                </div>
            </form>
        </div>
    )
}

export default SignUp
