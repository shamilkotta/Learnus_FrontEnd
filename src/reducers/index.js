import { combineReducers } from 'redux'
import auth, { error } from './auth'
import { course, courses } from './courses'

const reducers = combineReducers({
    auth,
    courses,
    course,
    error
})


export default reducers