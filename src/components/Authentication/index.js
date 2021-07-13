import React, { useState } from 'react'
import './Auth.scss'

import LogIn from './Auth/LogIn'
import SignUp from './Auth/SignUp'
import ForgotPassword from './ForgotPassword/ForgotPassword'

function Authentication() {

    const [popUpValue, setPopUpValue] = useState('logIn')

    return (
        <div className="Authentication-wrapper">
            {
                {
                    'logIn': <LogIn  setPopUp={(value) => {setPopUpValue(value)}} />,
                    'signUp': <SignUp  setPopUp={(value) => {setPopUpValue(value)}} />,
                    'forgotPasswrod': <ForgotPassword  setPopUp={(value) => {setPopUpValue(value)}}/>
                }[popUpValue]
            }
        </div>
    )
}

export default Authentication
