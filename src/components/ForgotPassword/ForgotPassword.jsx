import React, {useState} from 'react'
import './ForgotPassword.scss'

import {InputButton, InputEmail} from '../InputFields/InputFields'
import {FaPlus} from 'react-icons/fa'

function ForgotPassword() {

    const [forgotPassData, setForgotPassData] = useState({email: ''})
    const handleChange = e=> setForgotPassData(prvsData=>({...prvsData, [e.target.name]: e.target.value}))
    const handleSubmit = e=> {
        console.log(forgotPassData)
    }

    return (
        <div className="forgotPass">
            <FaPlus style={{transform: 'rotate(45deg)',float: 'right'}} />
            <form className="forgotPass-form" onSubmit={handleSubmit}>
                <h1 className="forgotPass__title">Forgot Password?</h1>
                <p className="forgotPass__txt">Enter your email to reset password</p>
                <div className="forgotPass-input-group">
                    <InputEmail value={forgotPassData.email} className="forgotPass__input" onChange={handleChange}/>
                </div>
                <div className="forgotPass-btn-group">
                    <InputButton type="submit" className="forgotPass__btn btn btn--active" value="SEND EMAIL"/>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword
