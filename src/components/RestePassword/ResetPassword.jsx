import React, {useState} from 'react'
import './ResetPassword.scss'

import {InputButton, InputPassword, InputConfirmPassword} from '../InputFields/InputFields'
import {FaPlus} from 'react-icons/fa'

function ResetPassword() {
    
    const [resetPassData, setResetPassData] = useState({password: '', confirmPassword: ''})
    const handleChange = e=> setResetPassData(prvsData=>({...prvsData, [e.target.name]: e.target.value}))
    const handleSubmit = e=> {
        console.log(resetPassData)
    }

    return (
        <div className="resetPass">
            <FaPlus style={{transform: 'rotate(45deg)',float: 'right'}} />
            <form className="resetPass-form" onSubmit={handleSubmit}>
                <h1 className="resetPass__title">Reset Password</h1>
                <p className="resetPass__txt">Enter your new password</p>
                <div className="resetPass-input-group">
                    <InputPassword value={resetPassData.password} className="resetPass__input" onChange={handleChange}/>
                    <InputConfirmPassword value={resetPassData.confirmPassword} className="resetPass__input" onChange={handleChange}/>
                </div>
                <div className="resetPass-btn-group">
                    <InputButton type="submit" className="resetPass__btn btn btn--active" value="UPDATE"/>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword
