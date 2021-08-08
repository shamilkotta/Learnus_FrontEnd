import { getCourse, getCourses, getCoursesAsAdmin } from '../api'
import { actionTypes } from '../utils/constants'
const { GET_COURSE, GET_COURSES, GET_COURSES_ADMIN, ERROR } = actionTypes


export const adminCourses = () => (dispatch) => {
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
}

export const courses = () => (dispatch) => {
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
}

export const course = (id) => (dispatch) => {
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
}
