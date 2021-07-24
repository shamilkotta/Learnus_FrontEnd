import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import './Style.scss'

import { FaPlus } from "react-icons/fa";
import {InputButton, InputEmail} from '../InputFields'

function ForgotPassword({setPopUp}) {
    
    const history = useHistory()
    const [forgotPassData, setForgotPassData] = useState({email: ''})
    const handleChange = e=> {setForgotPassData(prvsData=>({...prvsData, [e.target.name]: e.target.value}))}
    
    const handleSubmit = e=> {
        e.preventDefault()
        console.log(forgotPassData)
    }

    return (
        <>
            <FaPlus className="auth__close-icon" onClick={()=> history.goBack()} />
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1 className="auth__title">Forgot Password?</h1>
                <p className="auth__txt">Enter your email to reset password</p>
                <div className="auth-input-group">
                    <InputEmail value={forgotPassData.email} className="auth__input" onChange={handleChange}/>
                </div>
                <div className="auth-btn-group">
                    <InputButton type="submit" className="auth__btn btn btn--active" value="SUBMIT"/>
                    <p className="auth__txt auth__txt--bottom a" style={{color: '#3a0ca3'}} onClick={()=> {setPopUp('logIn')}}>Back to Log In</p>
                </div>
            </form>
        </>
    )
}

export default ForgotPassword
