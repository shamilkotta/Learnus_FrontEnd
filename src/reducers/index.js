import { combineReducers } from 'redux'
import auth, { error } from './auth'
import { course, courses, saveCourse } from './courses'

const reducers = combineReducers({
    auth,
    courses,
    course,
    saveCourse,
    error
})


export default reducers