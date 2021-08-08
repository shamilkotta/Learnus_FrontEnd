import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Style.scss'
import axios from 'axios'

import { InputPassword, InputSubmit, InputText } from '../InputFields'
import { FaGoogle, FaTwitter, FaFacebookF, FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { authLogin } from '../../actions/auth'

function LogIn({setPopUp}) {

    const history = useHistory()
    const dispatch = useDispatch()

    const initialLogInData = { username: '', password: '',}
    const [logInData, setLogInData] = useState(initialLogInData)
    const handleChange = e => {setLogInData(prvsData => ({ ...prvsData, [e.target.name]: e.target.value }) )}
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authLogin(logInData, history))
    }

    return (
        <>
            <FaPlus className="auth__close-icon" onClick={()=> history.replace(history.location.pathname)} />
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1 className="auth__title">Log In</h1>
                <div className="auth__social-sign">
                    <FaGoogle className="auth__social-icon" />
                    <FaTwitter className="auth__social-icon" />
                    <FaFacebookF className="auth__social-icon" />
                </div>
                <p className="auth__txt auth__txt--top">OR</p>
                <div className="auth-input-group">
                    <InputText value={logInData.username} holder="Username" name="username" className="auth__input"  onChange={handleChange} required  />
                    <InputPassword value={logInData.password} className="auth__input" onChange={handleChange} />
                </div>
                <span className="auth__txt a" style={{color: '#3a0ca3'}} onClick={()=> {setPopUp('forgotPasswrod')}}>Forgot password?</span>
                <div className="auth-btn-group">
                    <InputSubmit className="auth__btn btn--active" value='LOG IN' />
                    <p className='auth__txt auth__txt--bottom'>Not a memeber? <span onClick={()=> {setPopUp('signUp')}} className=" clr__primary a">Sign Up</span></p>
                </div>
            </form>
        </>
    )
}

export default LogIn
