import jwt_decode from 'jwt-decode'

import { login, signup } from '../api'
import { errorAction } from './error'
import { actionTypes } from '../utils/constants'
const { AUTH, LOGOUT, SET_AUTH_LOADING, END_AUTH_LOADING } = actionTypes

export const authLogin = (loginData)=> (dispatch)=> {
    dispatch({ type: SET_AUTH_LOADING })
    login(loginData).then((response)=> {
        localStorage.setItem('token', response.data?.token)
        const { username, isAdmin, exp } = jwt_decode(response.data?.token)
        dispatch({
            type: AUTH,
            payload: { username, isAdmin, exp }
        })
        dispatch({ type: END_AUTH_LOADING })
    }).catch((err)=>{
        dispatch(errorAction(err.response?.data))
        dispatch({ type: END_AUTH_LOADING })
    })
}

export const authSignup = (signupData)=> (dispatch)=> {
    dispatch({ type: SET_AUTH_LOADING })
    signup(signupData).then((response)=> {
        const { username, isAdmin, exp } = jwt_decode(response.data?.token)
        dispatch({
            type: AUTH,
            payload: { username, isAdmin, exp }
        })
        dispatch({ type: END_AUTH_LOADING })
    }).catch((err)=>{
        dispatch(errorAction(err.response?.data))
        dispatch({ type: END_AUTH_LOADING })
    })
}

export const authLogout = ()=> (dispatch)=> {
    dispatch({
        type: LOGOUT
    })
}
