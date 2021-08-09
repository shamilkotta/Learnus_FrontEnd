import { actionTypes } from '../utils/constants'
const { 
    GET_COURSES, GET_COURSES_ADMIN, SET_COURSES_LOADING, END_COURSES_LOADING, 
    GET_COURSE, SET_COURSE_LOADING, END_COURSE_LOADING,
} = actionTypes

export const courses = (state = {isCoursesLoading: false, courses: []}, action) => {
    switch (action.type) {
        case GET_COURSES:
           return { ...state, courses: action.payload}
        
        case GET_COURSES_ADMIN:
            return { ...state, courses: action.payload}

        case SET_COURSES_LOADING:
            return { ...state, isCoursesLoading: true };

        case END_COURSES_LOADING:
            return { ...state, isCoursesLoading: false };
    
        default:
            return state;
    }
}

export const course = (state = {isCourseLoading: false, course: {}}, action) => {
    switch (action.type) {
        case GET_COURSE:
            return {...state, course: action.payload}

        case SET_COURSE_LOADING:
            return { ...state, isCourseLoading: true };

        case END_COURSE_LOADING:
            return { ...state, isCourseLoading: false };
    
        default:
            return state;
    }
}