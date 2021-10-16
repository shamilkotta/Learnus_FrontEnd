import React from 'react'
import Popup from '.'
import { InputSubmit } from '../InputFields'

const ConfrimPopup = ({closePopup, code, loading, deleteFun}) => {
    return (
        <Popup height="250" >
            <div className="confirmPopup">
                <h3 className="confirmPopup__title">Warning!</h3>
                <p className="confirmPopup__txt">{code} will be deleted permenetly, Are you sure?</p>
                <div className="confirmPopup__btns">
                    <InputSubmit className="confirmPopup__btn" loading={false} onClick={closePopup} value='Cancel' />
                    <InputSubmit className="confirmPopup__btn btn--active" loading={loading} onClick={()=> {deleteFun(code)}} value='Confirm' />
                </div>
            </div>
        </Popup>
    )
}

export default ConfrimPopup
