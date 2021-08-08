import { actionTypes } from "../utils/constants";
const  { AUTH, LOGOUT } = actionTypes

const auth = (state = {}, action)=> {
    switch (action.type) {
        case AUTH:
            return {...state, ...action.payload };

        case LOGOUT:
            localStorage.clear('token')
            return {};
    
        default:
            return state;
    }
}

export default auth