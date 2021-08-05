import React, { useState } from 'react'
import { useHistory } from 'react-router';
import './Style.scss'
import axios from 'axios'

import { FaGoogle, FaTwitter, FaFacebookF, FaPlus } from "react-icons/fa";
import { InputConfirmPassword, InputEmail, InputPassword, InputSubmit, InputText } from '../InputFields'

function SignUp({setPopUp}) {

    const history = useHistory()
    const initialSignUpData = { email: '', password: '', username: '', confirmPassword: '' }
    const [signUpData, setSignUpData] = useState(initialSignUpData)
    const handleChange = e => {setSignUpData(prvsData => ({ ...prvsData, [e.target.name]: e.target.value}) )}

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/signup', signUpData).then(response=> {
            console.log(response.data)
        }).catch(err=> {
            console.log(err.response.data)
        })
    }

    return (
        <>
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
