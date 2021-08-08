import { combineReducers } from 'redux'
import auth from './auth'
import { course, courses } from './courses'

const reducers = combineReducers({
    auth,
    courses,
    course
})


export default reducers