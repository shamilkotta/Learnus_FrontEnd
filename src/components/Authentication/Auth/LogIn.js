import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { InputEmail, InputPassword, InputButton } from '../../InputFields/InputFields'
import { FaGoogle, FaTwitter, FaFacebookF, FaPlus } from "react-icons/fa";

function LogIn({setPopUp}) {

    const history = useHistory()
    const initialLogInData = { email: '', password: '', name: '', confirmPassword: '' }
    const [logInData, setLogInData] = useState(initialLogInData)
    const handleChange = e => {setLogInData(prvsData => ({ ...prvsData, [e.target.name]: e.target.value }) )}

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="auth" style={{ maxHeight: '420px'}}>
            <FaPlus className="auth__close-icon" onClick={()=> history.goBack()} />
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1 className="auth__title">Log In</h1>
                <div className="auth__social-sign">
                    <FaGoogle className="auth__social-icon" />
                    <FaTwitter className="auth__social-icon" />
                    <FaFacebookF className="auth__social-icon" />
                </div>
                <p className="auth__txt auth__txt--top">OR</p>
                <div className="auth-input-group">
                    <InputEmail value={logInData.email} className="auth__input" onChange={handleChange} required />
                    <InputPassword value={logInData.password} className="auth__input" onChange={handleChange} />
                </div>
                <span className="auth__txt a" style={{color: '#3a0ca3'}} onClick={()=> {setPopUp('forgotPasswrod')}}>Forgot password?</span>
                <div className="auth-btn-group">
                    <InputButton type="submit" className="auth__btn btn btn--active" value='LOG IN' />
                    <p className='auth__txt auth__txt--bottom'>Not a memeber? <span onClick={()=> {setPopUp('signUp')}} className=" clr__primary a">Sign Up</span></p>
                </div>
            </form>
        </div>
    )
}

export default LogIn
