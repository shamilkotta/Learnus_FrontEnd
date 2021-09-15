import { actionTypes } from '../utils/constants'
const { ERROR } = actionTypes

export const errorAction = (err)=> (dispatch) => {
    dispatch({
        type: ERROR,
        payload: err?.message
    })
}