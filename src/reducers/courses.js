import { actionTypes } from '../utils/constants'
const { GET_COURSE, GET_COURSES, GET_COURSES_ADMIN } = actionTypes

export const courses = (state = [], action) => {
    switch (action.type) {
        case GET_COURSES:
           return [...action.payload]
        
        case GET_COURSES_ADMIN:
            return [...action.payload]
    
        default:
            return state;
    }
}

export const course = (state = {}, action) => {
    switch (action.type) {
        case GET_COURSE:
            return {...action.payload}
    
        default:
            return state;
    }
}