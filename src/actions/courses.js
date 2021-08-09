import { getCourse, getCourses, getCoursesAsAdmin } from '../api'
import { actionTypes } from '../utils/constants'
const { 
    GET_COURSE, SET_COURSE_LOADING, END_COURSE_LOADING,
    GET_COURSES, GET_COURSES_ADMIN, SET_COURSES_LOADING, END_COURSES_LOADING,
    ERROR,
} = actionTypes


export const adminCoursesAction = () => (dispatch) => {
    dispatch({ type: SET_COURSES_LOADING })
    getCoursesAsAdmin().then((response)=> {
        dispatch({
            type: GET_COURSES_ADMIN,
            payload: response?.data?.courses
        })
    }).catch((err)=> {
        dispatch({
            type: ERROR,
            payload: err.response?.data?.message
        })
    })
    dispatch({ type: END_COURSES_LOADING })
    
}

export const coursesAction = () => (dispatch) => {
    dispatch({ type: SET_COURSES_LOADING })
    getCourses().then((response)=> {
        dispatch({
            type: GET_COURSES,
            payload: response?.data?.courses
        })
    }).catch((err)=> {
        dispatch({
            type: ERROR,
            payload: err.response?.data?.message
        })
    })
    dispatch({ type: END_COURSES_LOADING })
}

export const courseAction = (id) => (dispatch) => {
    dispatch({ type: SET_COURSE_LOADING })
    getCourse(id).then((response)=> {
        dispatch({
            type: GET_COURSE,
            payload: response?.data?.course
        })
    }).catch((err)=> {
        dispatch({
            type: ERROR,
            payload: err.response?.data?.message
        })
    })

    dispatch({ type: END_COURSE_LOADING })
}
