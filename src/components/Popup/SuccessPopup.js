import React from 'react'
import Popup from '.'
import { InputSubmit } from '../InputFields'

const SuccessPopup = ({cancelFun, confirmFun}) => {
    return (
        <Popup height="250" >
            <div className="successPopup">
                <h3 className="successPopup__title">Success!</h3>
                <p className="successPopup__txt">Basic details added successfully, Continue to next step?</p>
                <div className="successPopup__btns">
                    <InputSubmit className="successPopup__btn" loading={false} onClick={cancelFun} value='Cancel' />
                    <InputSubmit className="successPopup__btn btn--active" loading={false} onClick={confirmFun} value='Continue' />
                </div>
            </div>
        </Popup>
    )
}

export default SuccessPopup
