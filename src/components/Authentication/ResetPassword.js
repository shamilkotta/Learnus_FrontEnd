import React, {useState} from 'react'
import './Style.scss'

import {InputSubmit, InputPassword, InputConfirmPassword} from '../InputFields'
import { useDispatch, useSelector } from 'react-redux'
import { actionTypes } from '../../utils/constants'
const { SET_AUTH_LOADING, END_AUTH_LOADING } = actionTypes

function ResetPassword() {

    const dispatch = useDispatch()
    const { isAuthLoading } = useSelector(state => state.auth)
    
    const [resetPassData, setResetPassData] = useState({password: '', confirmPassword: ''})
    const handleChange = e=> setResetPassData(prvsData=>({...prvsData, [e.target.name]: e.target.value}))
    const handleSubmit = e=> {
        dispatch({type: SET_AUTH_LOADING})
        console.log(resetPassData)
        dispatch({type: END_AUTH_LOADING})
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
                    <InputSubmit className="auth__btn btn--active" loading={isAuthLoading} value="UPDATE"/>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword
