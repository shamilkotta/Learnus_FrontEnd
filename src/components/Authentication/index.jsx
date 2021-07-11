import React, { useState } from 'react'
import './Auth.scss'

import LogIn from './Auth/LogIn'
import SignUp from './Auth/SignUp'
import ForgotPassword from './ForgotPassword/ForgotPassword'

function Authentication() {

    const [popUpValue, setPopUpValue] = useState('logIn')

    const style = {    
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0, 0.4)',
        position: 'fixed',
        zIndex: '1000'
    }

    return (
        <div style={style}>
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
