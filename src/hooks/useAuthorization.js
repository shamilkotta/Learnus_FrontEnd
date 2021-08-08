import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { actionTypes } from '../utils/constants'
const { AUTH } = actionTypes

const useAuthorization = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const token = localStorage.getItem('token')

    if (auth?.exp && auth.exp > Date.now()/1000) {
        return true
        
    }else if (token) {
        const { username, exp } = jwt_decode(token)
        if (exp > Date.now()/1000) {
            dispatch({
                type: AUTH,
                payload: { username, exp }
            });
            return true
        }
            
    }else {
       return false
    }
}

export default useAuthorization
