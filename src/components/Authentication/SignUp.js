import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import './Style.scss'

import { FaGoogle, FaTwitter, FaFacebookF, FaPlus } from "react-icons/fa";
import { InputConfirmPassword, InputEmail, InputPassword, InputSubmit, InputText } from '../InputFields'
import { authSignup } from '../../actions/auth';

function SignUp({setPopUp}) {

    const history = useHistory()
    const dispatch = useDispatch()

    const initialSignUpData = { email: '', password: '', username: '', confirmPassword: '' }
    const [signUpData, setSignUpData] = useState(initialSignUpData)
    const handleChange = e => {setSignUpData(prvsData => ({ ...prvsData, [e.target.name]: e.target.value}) )}
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authSignup(signUpData, history))
    }

    return (
        <>
            <FaPlus className="auth__close-icon"  onClick={()=> history.replace(history.location.pathname)} />
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1 className="auth__title">Sign Up</h1>
                <div className="auth__social-sign">
                    <FaGoogle className="auth__social-icon" />
                    <FaTwitter className="auth__social-icon" />
                    <FaFacebookF className="auth__social-icon" />
                </div>
                <p className="auth__txt auth__txt--top">OR</p>
                <div className="auth-input-group">
                    <InputText className="auth__input" name="username" value={signUpData.username} holder="Username" onChange={handleChange} required />
                    <InputEmail value={signUpData.email} className="auth__input" onChange={handleChange} required />
                    <InputPassword value={signUpData.password} className="auth__input" onChange={handleChange} />
                    <InputConfirmPassword value={signUpData.confirmPassword} password={signUpData.password} className="auth__input" onChange={handleChange} />
                </div>
                <div className="auth-btn-group">
                    <InputSubmit className="auth__btn btn--active" value='SIGN UP' />
                    <p className='auth__txt auth__txt--bottom'>Already a memeber? <span onClick={()=> {setPopUp('logIn')}} className=" clr__primary a">Log In</span></p>
                </div>
            </form>
        </>
    )
}

export default SignUp
