import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import './Style.scss'

import { FaPlus } from "react-icons/fa";
import {InputSubmit, InputEmail} from '../InputFields'
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../../utils/constants';
const { SET_AUTH_LOADING, END_AUTH_LOADING } = actionTypes

function ForgotPassword({setPopUp}) {
    
    const { isAuthLoading } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const history = useHistory()
    const [forgotPassData, setForgotPassData] = useState({email: ''})
    const handleChange = e=> {setForgotPassData(prvsData=>({...prvsData, [e.target.name]: e.target.value}))}
    
    const handleSubmit = e=> {
        e.preventDefault()
        dispatch({type: SET_AUTH_LOADING})
        console.log(forgotPassData)
        dispatch({type: END_AUTH_LOADING})
    }

    return (
        <>
            <FaPlus className="auth__close-icon" onClick={()=> history.replace(history.location.pathname)} />
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1 className="auth__title">Forgot Password?</h1>
                <p className="auth__txt">Enter your email to reset password</p>
                <div className="auth-input-group">
                    <InputEmail value={forgotPassData.email} className="auth__input" required onChange={handleChange}/>
                </div>
                <div className="auth-btn-group">
                    <InputSubmit className="auth__btn btn--active" loading={isAuthLoading} value="SUBMIT"/>
                    <p className="auth__txt auth__txt--bottom a" style={{color: '#3a0ca3'}} onClick={()=> {setPopUp('logIn')}}>Back to Log In</p>
                </div>
            </form>
        </>
    )
}

export default ForgotPassword
