import jwt_decode from 'jwt-decode'

import { login, signup } from '../api'
import { actionTypes } from '../utils/constants'
const { AUTH, LOGOUT, ERROR } = actionTypes

export const authLogin = (loginData, history)=> (dispatch)=> {
    login(loginData).then((response)=> {
        localStorage.setItem('token', response.data?.token)
        const { username, exp } = jwt_decode(response.data?.token)
        dispatch({
            type: AUTH,
            payload: { username, exp }
        })
    }).catch((err)=>{
        dispatch({
            type: ERROR,
            payload: err.response?.data?.message
        })
    })
}

export const authSignup = (signupData, history)=> (dispatch)=> {
    signup(signupData).then((response)=> {
        dispatch({
            type: AUTH,
            payload: response.data?.token
        })
    }).catch((err)=>{
        dispatch({
            type: ERROR,
            payload: err.response?.data?.message
        })
    })
}

export const authLogout = (history)=> (dispatch)=> {
    
    dispatch({
        type: LOGOUT
    })
}
