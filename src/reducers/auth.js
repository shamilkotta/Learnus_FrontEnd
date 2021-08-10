import { actionTypes } from "../utils/constants";
const  { AUTH, LOGOUT, SET_AUTH_LOADING, END_AUTH_LOADING } = actionTypes

const auth = (state = {isAuthLoading: false }, action)=> {
    switch (action.type) {
        case AUTH:
            return {...state, ...action.payload };

        case LOGOUT:
            localStorage.clear('token')
            return {isAuthLoading: false };
    
        case SET_AUTH_LOADING:
            return {...state, isAuthLoading: true };

        case END_AUTH_LOADING:
            return {...state, isAuthLoading: false };
    
        default:
            return state;
    }
}

export default auth