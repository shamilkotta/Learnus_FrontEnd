import React, { useState } from 'react'
import './Style.scss'

import LogIn from './Auth/LogIn'
import SignUp from './Auth/SignUp'
import ForgotPassword from './Auth/ForgotPassword'

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
