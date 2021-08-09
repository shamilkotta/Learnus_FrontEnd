import jwt_decode from 'jwt-decode'

import { login, signup } from '../api'
import { actionTypes } from '../utils/constants'
const { AUTH, LOGOUT, ERROR, SET_AUTH_LOADING, END_AUTH_LOADING } = actionTypes

export const authLogin = (loginData, history)=> (dispatch)=> {
    dispatch({ type: SET_AUTH_LOADING })
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
    dispatch({ type: END_AUTH_LOADING })
}

export const authSignup = (signupData, history)=> (dispatch)=> {
    dispatch({ type: SET_AUTH_LOADING })
    signup(signupData).then((response)=> {
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
    dispatch({ type: END_AUTH_LOADING })
}

export const authLogout = (history)=> (dispatch)=> {
    
    dispatch({
        type: LOGOUT
    })
}
