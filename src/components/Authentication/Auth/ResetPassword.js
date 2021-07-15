import React, {useState} from 'react'
import '../index.scss'

import {InputButton, InputPassword, InputConfirmPassword} from '../../InputFields'

function ResetPassword() {
    
    const [resetPassData, setResetPassData] = useState({password: '', confirmPassword: ''})
    const handleChange = e=> setResetPassData(prvsData=>({...prvsData, [e.target.name]: e.target.value}))
    const handleSubmit = e=> {
        console.log(resetPassData)
    }

    return (
        <div className="auth" style={{ maxHeight: '310px'}}>
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1 className="auth__title">Reset Password</h1>
                <p className="auth__txt">Enter your new password</p>
                <div className="auth-input-group">
                    <InputPassword value={resetPassData.password} className="auth__input" onChange={handleChange}/>
                    <InputConfirmPassword value={resetPassData.confirmPassword} password={resetPassData.password} className="auth__input" onChange={handleChange}/>
                </div>
                <div className="auth-btn-group">
                    <InputButton type="submit" className="auth__btn btn btn--active" value="UPDATE"/>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword
